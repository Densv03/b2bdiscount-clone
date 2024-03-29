import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';

import { User } from 'src/app/core/models/user/user.model';
import { getName } from 'country-list';
import { UnitsService } from 'src/app/client/services/units/units.service';
import { filter, first, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { NgxSkeletonLoaderConfig } from 'ngx-skeleton-loader/lib/ngx-skeleton-loader-config.types';
import { UserService } from '../../../../../client-profile/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'b2b-rfq-item',
	templateUrl: './rfq-item.component.html',
	styleUrls: ['./rfq-item.component.scss'],
})
export class RfqItemComponent implements OnInit {
	@Input() rfqItem: any;
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;
	public user$: Observable<User>;
	public measureName: string = '';
	public rfqSkeleton: NgxSkeletonLoaderConfig = {
		count: 5,
		appearance: 'line',
		loadingText: '',
		ariaLabel: '',
		animation: 'progress',
		theme: {
			height: '160px',
		},
	};

	constructor(
		private changeDetectionRef: ChangeDetectorRef,
		private unitService: UnitsService,
		private translateService: TranslateService,
		private readonly userService: UserService
	) {}

	public get countryIconName(): string {
		return this.rfqItem.destination?.to?.toUpperCase();
	}

	public get imageName(): string {
		if (
			this.rfqItem.hasOwnProperty('photos') &&
			this.rfqItem.photos.length > 0
		) {
			return this.rfqItem.photos[0].md;
		} else {
			return 'tradebid-default';
		}
	}

	public getCountryNameByCode(countryCode?: string): string {
		return countryCode ? getName(countryCode) : '';
	}

	public ngOnInit(): void {
		this.user$ = this.userService.getUser$();
		this.initMeasureName(this.rfqItem.measure || this.rfqItem.unitMeasure);
	}

	private initMeasureName(measure?: string): void {
		if (!measure) {
			this.measureName = '';
		} else {
			this.unitService
				.getUnits()
				.pipe(
					filter((data) => !!data?.length),
					first(),
					map((res) => {
						const isPlural = this.rfqItem.amount.count > 1;

						const measureObj = res.find(
							(item: { _id: any }) => item._id === measure
						);
						this.measureName = isPlural
							? measureObj.pluralDisplayName
							: measureObj.displayName;
					})
				)
				.subscribe(() => {
					this.changeDetectionRef.detectChanges();
				});
		}
	}
}
