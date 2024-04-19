import { Component, OnInit } from '@angular/core';
import { MatDialogClose, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { getName } from 'country-list';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-edit-direction-dialog',
	standalone: true,
	imports: [
		MatDialogClose,
		MatDialogTitle,
		MatIcon,
		MatIconButton,
		B2bNgxCountrySelectModule,
		ReactiveFormsModule,
		AsyncPipe,
		B2bNgxIconModule,
	],
	templateUrl: './edit-direction-dialog.component.html',
	styleUrl: './../create-direction-dialog/create-direction-dialog.component.scss',
})
export class EditDirectionDialogComponent implements OnInit {
	public directionForm: FormGroup;
	public directionCountryOptions: BehaviorSubject<
		{ label: string; code: string, icon: string; countryNames?: string[] }[]
	> = new BehaviorSubject<{ label: string; code: string, icon: string; countryNames?: string[] }[]>(null);
	public countryOptions$ = this.directionCountryOptions.asObservable();

	constructor(private readonly dialogRef: MatDialogRef<EditDirectionDialogComponent>) {
	}

	get countryNames(): FormArray {
		return this.directionForm?.get('countryNames') as FormArray;
	}

	ngOnInit(): void {
		this.setForm();
	}

	public addField(): void {
		this.countryNames.push(new FormControl(null));
	}

	public deleteAlternativeName(index: number): void {
		this.countryNames.removeAt(index);
	}

	public save(): void {
		if (this.directionForm.invalid) {
			this.directionForm.markAllAsTouched();
			return;
		}

		this.dialogRef.close(
			{
				id: this.directionCountryOptions.value.find(country => country.icon?.toLowerCase() === this.directionForm.value.name).code,
				model: {...this.directionForm.value,
				name: getName(this.directionForm.value.name)},
			});
	}

	private setForm(): void {
		this.directionForm = new FormGroup({
			type: new FormControl('country'),
			name: new FormControl(null),
			active: new FormControl(true),
			countryNames: new FormArray([
				new FormControl(null),
			]),
		});


		this.directionForm.controls['name'].valueChanges
			.subscribe(value => {
				this.countryNames.clear();
				const country = this.directionCountryOptions.value.find(el => {
					return el?.icon?.toLowerCase() === value
				});
				if (country?.countryNames?.length > 0) {
					country.countryNames.forEach(countryName => {
						this.addField();
						this.countryNames.patchValue(country.countryNames);
					});
				}
			})
	}
}
