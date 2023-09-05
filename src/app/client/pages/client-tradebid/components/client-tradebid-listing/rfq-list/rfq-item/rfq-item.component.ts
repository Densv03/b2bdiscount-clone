import {ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";

import {B2bNgxButtonThemeEnum} from "@b2b/ngx-button";

import {UserService } from "src/app/client/pages/client-profile/services/user/user.service";
import {User } from "src/app/core/models/user/user.model";
import {getName} from "country-list";
import {UnitsService } from "src/app/client/services/units/units.service";
import {filter, first, map} from "rxjs/operators";
import {TranslateService} from "@ngx-translate/core";
import {B2bNgxSkeletonComponent} from "@b2b/ngx-skeleton";
import {NgxSkeletonLoaderConfig} from "ngx-skeleton-loader/lib/ngx-skeleton-loader-config.types";

@Component({
	selector: "b2b-rfq-item",
	templateUrl: "./rfq-item.component.html",
	styleUrls: ["./rfq-item.component.scss"],
})
export class RfqItemComponent implements OnInit {
	@Input() rfqItem: any;
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;
	public user: Partial<User> | any = {};
	public measureName: string = "";
	public rfqSkeleton: NgxSkeletonLoaderConfig = {
		count: 5,
		appearance: 'line',
		loadingText: '',
		ariaLabel: '',
		animation: 'progress',
		theme: {
			height: '160px',
		}
	};

	constructor(
		private userService: UserService,
		private changeDetectionRef: ChangeDetectorRef,
		private unitService: UnitsService,
		private translateService: TranslateService
	) {
	}

	get countryIconName(): string {
		return this.rfqItem.destination?.to.toUpperCase();
	}

	get imageName(): string {
		if (this.rfqItem.hasOwnProperty("photos") && this.rfqItem.photos.length > 0) {
			return this.rfqItem.photos[0].md;
		} else {
			return "tradebid-default";
		}
	}

	get userImage(): string {
		return this?.user?.logo === "assets/images/userLogo.png" ? "plug" : this.user.logo;
	}

	public getCountryNameByCode(countryCode?: string): string {
		return countryCode ? getName(countryCode) : "";
	}

	public ngOnInit(): void {
		// this.userService.getPublicUserInfo(this.rfqItem.user).subscribe((user) => {
		// 	this.user = user;
		// 	this.changeDetectionRef.detectChanges();
		// });

		this.initMeasureName(this.rfqItem.measure);
	}

	private initMeasureName(measure?: string): void {
		if (!measure) {
			this.measureName = "";
		} else if (/[0-9]/.test(measure)) {
			this.unitService
				.getUnits()
				.pipe(
					filter((data) => !!data?.length),
					first(),
					map((res) => {
						this.measureName = res.find((item: { _id: any; }) => item._id === this.rfqItem.measure).displayName;
					})
				)
				.subscribe(() => {
					this.changeDetectionRef.detectChanges();
				});
		} else if (/\./.test(measure)) {
			this.measureName = this.translateService.instant(measure);
		} else {
			this.measureName = measure;
		}
	}
}
