import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { B2bNgxSelectThemeEnum } from '@b2b/ngx-select';
import { getCode, getName } from 'country-list';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminLogisticService } from '../../admin-logistic.service';
import { CreateDirectionInterface } from '../../interface/create-direction.interface';
import { BehaviorSubject } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { filter } from 'rxjs/operators';
import { uniqLogisticCity } from '../../../../shared/helpers/uniq-logistic-city';

@UntilDestroy()
@Component({
	selector: 'b2b-create-direction-dialog',
	templateUrl: './create-direction-dialog.component.html',
	styleUrls: ['./create-direction-dialog.component.scss'],
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [
				// :enter is alias to 'void => *'
				style({ opacity: 0 }),
				animate(500, style({ opacity: 1 })),
			]),
			transition(':leave', [
				// :leave is alias to '* => void'
				animate(500, style({ opacity: 0 })),
			]),
		]),
	],
})
export class CreateDirectionDialogComponent implements OnInit {
	public types = ['Country', 'City', 'Port', 'Airport'].map((el) => ({
		type: el.toLowerCase(),
		name: el,
	}));
	public directionForm: FormGroup;
	public showNameInput: boolean = false;
	public b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
	public directionCountryOptions: BehaviorSubject<
		{ label: string; code: string }[]
	> = new BehaviorSubject<{ label: string; code: string }[]>(null);
	public countryOptions: BehaviorSubject<{ label: string; code: string }[]> =
		new BehaviorSubject<{ label: string; code: string }[]>(null);
	public cityOptions: BehaviorSubject<{ label: string; code: string }[]>;
	public directions: any[];

	constructor(
		private readonly dialogRef: MatDialogRef<CreateDirectionDialogComponent>,
		private readonly adminLogisticService: AdminLogisticService,
		private readonly changeDetectorRef: ChangeDetectorRef
	) {}


	get countryNames(): FormArray {
		return this.directionForm?.get('countryNames') as FormArray;
	}

	ngOnInit(): void {
		this.setForm();
	}

	public deleteAlternativeName(index: number): void {
		this.countryNames.removeAt(index);
	}

	public addField(): void {
		this.countryNames.push(new FormControl(null));
	}

	public save(): void {
		if (this.directionForm.invalid) {
			this.directionForm.markAllAsTouched();
			return;
		}

		const { type, country, city, active } = this.directionForm.value;
		const model: CreateDirectionInterface = {
			type,
			name:
				type !== 'country' ? this.directionForm.value.name : getName(country),
			active,
		};

		if (type === 'city') {
			model.countryId = country;
		}

		if (type === 'port' || type === 'airport') {
			model.cityId = country;
		}

		if (type === 'country' && this.countryNames.length > 0) {
			model.countryNames = this.countryNames.value;
		}

		this.dialogRef.close(model);
	}

	private setForm(): void {
		this.directionForm = new FormGroup({
			type: new FormControl(null, Validators.required),
			country: new FormControl(null),
			name: new FormControl(null),
			city: new FormControl(null),
			active: new FormControl(false),
			countryNames: new FormArray([
				new FormControl(null)
			])
		});

		const countryControl = this.directionForm.get('country');
		const nameControl = this.directionForm.get('name');
		const cityControl = this.directionForm.get('city');

		this.directionForm.controls['type'].valueChanges
			.pipe(untilDestroyed(this))
			.subscribe((type) => {
				nameControl.reset();
				countryControl.reset();

				nameControl.clearValidators();
				countryControl.clearValidators();
				cityControl.clearValidators();

				nameControl.setErrors(null);
				countryControl.setErrors(null);
				cityControl.setErrors(null);

				if (type !== 'country') {
					this.countryOptions = this.directionCountryOptions;
					countryControl.setValidators([Validators.required]);
					nameControl.setValidators([Validators.required]);
					this.showNameInput = true;

					if (type === 'port' || type === 'airport') {
						cityControl.setValidators([Validators.required]);
					} else {
						nameControl.disable();
					}
				} else {
					this.countryOptions = null;
					this.showNameInput = false;

					countryControl.setValidators(
						uniqLogisticCity(
							this.directions.map((contry) => getCode(contry.name)),
							true
						)
					);
				}

				this.directionForm.updateValueAndValidity();
				this.changeDetectorRef.detectChanges();
			});

		countryControl.valueChanges
			.pipe(
				filter((value) => !!value),
				untilDestroyed(this)
			)
			.subscribe((country) => {
				if (this.directionForm.controls['type'].value === 'city') {
					nameControl.enable();
					nameControl.setValidators(
						uniqLogisticCity(
							this.directions.find((el) => el._id === country).cities
						)
					);
					this.directionForm.updateValueAndValidity();
					this.changeDetectorRef.detectChanges();
				} else if (
					this.directionForm.controls['type'].value === 'port' ||
					'airport'
				) {
					let directionArray = null;

					this.directions.some((direction) => {
						return direction.cities.some(
							(city: { _id: string; ports: any[]; airports: any[] }) => {
								if (city._id === country) {
									directionArray =
										this.directionForm.controls['type'].value === 'port'
											? city.ports
											: city.airports;
									return true;
								}
								return false;
							}
						);
					});

					nameControl.enable();
					nameControl.setValidators(uniqLogisticCity(directionArray));
					this.directionForm.updateValueAndValidity();
					this.changeDetectorRef.detectChanges();
				}
			});
	}
}
