import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, Subject } from 'rxjs';
import { tap, switchMap, startWith, filter } from 'rxjs/operators';
import { ClientProfileMyOfferDeleteComponent } from '../components/client-profile-my-offer-delete/client-profile-my-offer-delete.component';
import { ClientProfileMyOfferMarkAsSoldComponent } from '../components/client-profile-my-offer-mark-as-sold/client-profile-my-offer-mark-as-sold.component';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { MatDialog } from '@angular/material/dialog';
import { OffersService } from '../../../../../services/offers/offers.service';
import { NgxSkeletonLoaderConfig } from 'ngx-skeleton-loader/lib/ngx-skeleton-loader-config.types';
import { MixpanelService } from '../../../../../../core/services/mixpanel/mixpanel.service';
import { CategoriesService } from '../../../../../services/categories/categories.service';
import { getName } from 'country-list';
import { TranslateService } from '@ngx-translate/core';

function generateQueryString(
	obj: { [s: string]: unknown } | ArrayLike<unknown>,
	initialValue: string = '?'
) {
	return Object.entries(obj)
		.filter(([, value]: any) => !!value)
		.reduce((queryString: string, [key, value]: any) => {
			return Array.isArray(value)
				? `${queryString}${value.reduce(
						(str, arrayItem) => `${str}${key}=${arrayItem}&`,
						''
					)}`
				: `${queryString}${key}=${value}&`;
		}, initialValue);
}

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-my-offers',
	templateUrl: './client-profile-my-offers.component.html',
	styleUrls: ['./client-profile-my-offers.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientProfileMyOffersComponent {
	public readonly offers$: Observable<any>;
	public readonly offersSkeletonOptions: Partial<NgxSkeletonLoaderConfig>;
	public menuOptions: any[];
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public readonly b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public readonly forceUpdateSubject = new Subject();
	public readonly forceUpdate$ = this.forceUpdateSubject.asObservable();
	public loading: boolean;
	public isLangLoaded: boolean;

	constructor(
		private readonly _offersService: OffersService,
		private readonly _router: Router,
		private readonly translateService: TranslateService,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly dialog: MatDialog,
		private readonly _hotToastService: HotToastService,
		private readonly mixpanelService: MixpanelService,
		private readonly categoriesService: CategoriesService
	) {
		const isLangAlreadyLoaded =
			this.translateService.instant('OFFERS.MARK_AS_SOLD') !==
			'OFFERS.MARK_AS_SOLD';
		if (isLangAlreadyLoaded) {
			this.isLangLoaded = isLangAlreadyLoaded;
			this.menuOptions = this.getMenuOptions();
		}
		this.offers$ = this.forceUpdate$.pipe(
			startWith(isLangAlreadyLoaded),
			switchMap(() => this.getOffers())
		);
		this.offersSkeletonOptions = this.getOffersSkeletonOptions();
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.translateService.onLangChange
			.pipe(filter((e) => e.translations === 'translationLoadSuccess'))
			.subscribe((e) => {
				this.isLangLoaded = true;
				this.menuOptions = this.getMenuOptions();
			});
	}

	public getOffers() {
		this.loading = true;
		return this._offersService.getMyOffers().pipe(
			tap((val) => {
				this.loading = false;
			})
		);
	}

	public getMenuOptions() {
		return [
			{
				label: this.translateService.instant('OFFERS.MARK_AS_SOLD'),
				icon: 'check',
				onClick: (offer: any) => {
					this.categoriesService
						.getCategoryNameById(offer.category)
						.pipe(untilDestroyed(this))
						.subscribe((name) => {
							this.mixpanelService.track('Unclaimed cargo marked as Sold', {
								'Product Sector': name,
								Destination: [
									getName(offer.destination.from),
									getName(offer.destination.to),
								],
							});
						});
					this.markAsSold(offer._id);
					// this._offersService.markAsSold(offer._id);
				},
			},
			{
				label: this.translateService.instant('OFFERS.EDIT'),
				icon: 'edit',
				onClick: (offer: { _id: any }) => {
					this._router.navigateByUrl(
						this.b2bNgxLinkService.getStaticLink(
							`/profile/my-offers/${offer._id}`
						)
					);
				},
			},
			{
				label: this.translateService.instant('OFFERS.HIDE'),
				icon: 'eye',
				onClick: (offer: { _id: string }) => {
					this._offersService
						.hideOffer(offer._id)
						.pipe(untilDestroyed(this))
						.subscribe(() => {
							this.forceUpdateSubject.next(true);
						});
				},
			},
			{
				label: this.translateService.instant('OFFERS.UNHIDE'),
				icon: 'eye',
				onClick: (offer: { userTypeWhoHideOffer: string; _id: string }) => {
					if (offer.userTypeWhoHideOffer === 'admin') {
						this._hotToastService.error(
							'Sorry, your offer was hidden by the administration of the site, please write to Contact Us',
							{
								dismissible: true,
							}
						);
						return;
					}
					this._offersService
						.unHideOffer(offer._id)
						.pipe(untilDestroyed(this))
						.subscribe(() => {
							this.forceUpdateSubject.next(true);
						});
				},
			},
			{
				label: this.translateService.instant('OFFERS.DELETE'),
				icon: 'delete-red',
				onClick: (offer: any) => {
					this.deleteOffer(offer._id);
					this.categoriesService
						.getCategoryNameById(offer.category)
						.pipe(untilDestroyed(this))
						.subscribe((name) => {
							this.mixpanelService.track('Unclaimed cargo deleted', {
								'Product Sector': name,
								Destination: [
									getName(offer.destination.from),
									getName(offer.destination.to),
								],
							});
						});
					// this._offersService.deleteOfferById(offer._id);
				},
			},
		];
	}

	public markAsSold(id: string) {
		this.dialog
			.open(ClientProfileMyOfferMarkAsSoldComponent, {
				data: {
					id,
				},
				width: '40vw',
				height: 'auto',
				minHeight: '0',
				backdropClass: 'report-dialog',
			})
			.afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.forceUpdateSubject.next(true);
			});
	}

	public deleteOffer(id: string) {
		this.dialog
			.open(ClientProfileMyOfferDeleteComponent, {
				data: {
					id,
				},
				width: '40vw',
				height: 'auto',
				minHeight: '0',
				backdropClass: 'report-dialog',
			})
			.afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.forceUpdateSubject.next(true);
			});
	}

	public getOffersSkeletonOptions() {
		const skeleton = [
			{
				count: 10,
				animation: 'progress',
				theme: {
					height: '76px',
				},
			},
		];

		return skeleton as Partial<NgxSkeletonLoaderConfig>;
	}

	public goTo(link: string): void {
		this._router.navigate([link]);
	}
}
