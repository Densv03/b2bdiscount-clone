import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SeaRequestInterface } from '../../../admin-logistic/interface/sea-request.interface';
import { AdminLogisticService } from '../../../admin-logistic/admin-logistic.service';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { SeaTariffInterface } from '../../../admin-logistic/interface/sea-tariff-interface';
import { FormControl } from '@angular/forms';
import { CalendarHeaderComponent } from '../../../../../../../projects/b2b-datepicker/src/lib/components/calendar-header/calendar-header.component';
import { filter, take } from 'rxjs/operators';
import { TariffUploadResponseInterface } from '../../../admin-logistic/interface/tariff-upload-response.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@UntilDestroy()
@Component({
	selector: 'b2b-sea-profile',
	templateUrl: './sea-profile.component.html',
	styleUrls: ['../../../admin-logistic/admin-logistic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeaProfileComponent implements OnInit {
	public displayedColumns = [
		'portFrom',
		'countryFrom',
		'portTo',
		'countryTo',
		'validDateFrom',
		'validDateTo',
		'actions',
	];
	public updating: boolean = false;
	public productsLimit = 15;
	private totalCountSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(0);
	public totalCount$: Observable<number> = this.totalCountSource.asObservable();
	public currentPage: number = 1;
	public dataSource: SeaTariffInterface[];
	public date = new FormControl('');
	public errorList = [
		{
			errorField: 'Error field',
			errorData: 'Error data',
			errorMessage: 'Error message',
		},
	];

	private seaRequest: SeaRequestInterface = {
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
		this.setFormData();
	}

	public uploadSeaTariff(event: Event): void {
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
			const formData = new FormData();
			formData.append('excelData', file);
			this.adminLogisticService
				.uploadSeaTariff(this.seaRequest.companyId, formData)
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
		this.seaRequest = {
			...this.seaRequest,
			offset: (page - 1) * this.productsLimit,
		};
		this.currentPage = page;
		this.fetchData();
	}

	public setNullableValue(): void {
		this.date.patchValue(null, { emitEvent: false });
		this.seaRequest.date = null;
		this.fetchData();
	}

	public deleteTariff(tariff: SeaTariffInterface): void {
		if (this.updating) {
			return;
		}
		this.updating = true;

		this.adminLogisticService
			.deleteTariff(tariff._id, 'sea')
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.fetchData();
				this.hotToastService.success('Tariff was successfully deleted');
			});
	}

	private fetchData(): void {
		if (this.activatedRoute.snapshot.params?.['id']) {
			this.seaRequest.companyId = this.activatedRoute.snapshot.params?.['id'];
		}

		this.adminLogisticService
			.getSeaTariffs(this.seaRequest)
			.pipe(untilDestroyed(this))
			.subscribe((data) => {
				this.totalCountSource.next(data[0].totalCount);
				this.dataSource = data[0].tariffs;
				this.updating = false;
				this.changeDetectorRef.detectChanges();
			});
	}

	private setFormData(): void {
		this.date.valueChanges
			.pipe(
				filter((date) => !!date),
				untilDestroyed(this)
			)
			.subscribe((date) => {
				this.seaRequest.date = new Date(date)
					.toLocaleDateString()
					.split('.')
					.reverse()
					.join('.');
				this.fetchData();
			});
	}
}
