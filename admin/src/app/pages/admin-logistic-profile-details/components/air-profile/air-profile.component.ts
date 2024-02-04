import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import { AdminLogisticService } from '../../../admin-logistic/admin-logistic.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute } from '@angular/router';
import { AirRequestInterface } from '../../../admin-logistic/interface/air-request-interface';
import { SeaTariffInterface } from '../../../admin-logistic/interface/sea-tariff-interface';
import { HotToastService } from '@ngneat/hot-toast';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { TariffUploadResponseInterface } from '../../../admin-logistic/interface/tariff-upload-response.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@UntilDestroy()
@Component({
	selector: 'b2b-air-profile',
	templateUrl: './air-profile.component.html',
	styleUrls: ['../../../admin-logistic/admin-logistic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AirProfileComponent implements OnInit {
	public displayedColumns = [
		'cityFrom',
		'countryFrom',
		'cityTo',
		'countryTo',
		'validDateFrom',
		'validDateTo',
		'actions',
	];
	public updating: boolean = false;
	public productsLimit = 15;
	public currentPage: number = 1;
	private totalCountSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(0);
	public totalCount$: Observable<number> = this.totalCountSource.asObservable();
	public dataSource: SeaTariffInterface[];
	public date = new FormControl('');
	public errorList = [
		{
			errorField: 'Error field',
			errorData: 'Error data',
			errorMessage: 'Error message',
		},
	];
	private airRequest: AirRequestInterface = {
		limit: this.productsLimit,
		offset: 0,
	};

	constructor(
		private readonly adminLogisticService: AdminLogisticService,
		private readonly activatedRoute: ActivatedRoute,
		private readonly hotToastService: HotToastService,
		private readonly changeDetectorRef: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.fetchData();
		this.setFormGroup();
	}

	public uploadAirProfile(event: Event): void {
		const input = event.target as HTMLInputElement;
		const file = input.files[0];

		if (!file) {
			return;
		}
		const allowedTypes = ['xlsx', 'xls', 'csv'];

		if (
			!allowedTypes.includes(
				file?.name.split('.')[file?.name.split('.').length - 1]
			)
		) {
			this.hotToastService.error(
				'Wrong type format, you can upload only sheets types'
			);
			return;
		}

		input.value = null;
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = (): void => {
			const excelData = { excelData: file };
			const formData = new FormData();
			formData.append('excelData', file);
			this.adminLogisticService
				.uploadAirTariff(this.airRequest.companyId, formData)
				.pipe(untilDestroyed(this))
				.subscribe((el: TariffUploadResponseInterface) => {
					if (el.resultUpdate.count.error) {
						el.resultUpdate.count.error.errorList.forEach((err) => {
							this.errorList.push({
								errorField: err.errorField,
								errorData: JSON.parse(err.errorData),
								errorMessage: err.errorMessage,
							});
						});
					}

					this.fetchData();
				});
		};
	}

	public togglePage(page: number): void {
		this.airRequest = {
			...this.airRequest,
			offset: (page - 1) * this.productsLimit,
		};
		this.currentPage = page;
		this.fetchData();
	}

	public setNullableValue(): void {
		this.date.patchValue(null, { emitEvent: false });
		this.airRequest.date = null;
		this.fetchData();
	}

	public deleteTariff(tariff: SeaTariffInterface): void {
		if (this.updating) {
			return;
		}
		this.updating = true;
		this.adminLogisticService
			.deleteTariff(tariff._id, 'air')
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.fetchData();
				this.hotToastService.success('Tariff was successfully deleted');
			});
	}

	private fetchData(): void {
		if (this.activatedRoute.snapshot.params?.['id']) {
			this.airRequest.companyId = this.activatedRoute.snapshot.params?.['id'];
		}

		this.adminLogisticService
			.getAirTariffs(this.airRequest)
			.pipe(untilDestroyed(this))
			.subscribe((data) => {
				this.dataSource = data[0].tariffs;
				this.totalCountSource.next(data[0].totalCount);
				this.updating = false;
				this.changeDetectorRef.detectChanges();
			});
	}

	private setFormGroup(): void {
		this.date.valueChanges
			.pipe(
				filter((date) => !!date),
				untilDestroyed(this)
			)
			.subscribe((date) => {
				this.airRequest.date = new Date(date)
					.toLocaleDateString()
					.split('.')
					.reverse()
					.join('.');
				this.fetchData();
			});
	}
}
