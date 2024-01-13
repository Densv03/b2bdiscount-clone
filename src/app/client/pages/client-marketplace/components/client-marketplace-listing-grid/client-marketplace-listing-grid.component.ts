import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { getName } from 'country-list';
import { fromEvent, Observable } from 'rxjs';
import { ClientMarketplaceService } from '../../client-marketplace.service';
import { NgxSkeletonLoaderConfig } from 'ngx-skeleton-loader/lib/ngx-skeleton-loader-config.types';
import { map, startWith } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PlatformService } from 'src/app/client/services/platform/platform.service';
import { ApplicationSectionsEnum } from '../../../../shared/enums/application-sections.enum';
import { User } from 'src/app/core/models/user/user.model';

@UntilDestroy()
@Component({
	selector: 'b2b-client-marketplace-listing-grid',
	templateUrl: './client-marketplace-listing-grid.component.html',
	styleUrls: ['./client-marketplace-listing-grid.component.scss'],
})
export class ClientMarketplaceListingGridComponent
	implements OnChanges, OnInit
{
	@Output() public readonly starClicked: EventEmitter<string> =
		new EventEmitter<string>();

	@Input() classGridBetween: boolean = false;
	@Input() marketplaceProducts: any[] = [];
	@Input() public user: User;
	@Input() showBanner: boolean = true;

	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum =
		B2bNgxButtonThemeEnum;
	public readonly siteSections = ApplicationSectionsEnum;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum =
		B2bNgxLinkThemeEnum;
	public marketplaceSkeletonOptions: Partial<NgxSkeletonLoaderConfig>;
	public loading$: Observable<boolean>;

	public isMobileView$: Observable<boolean> = this.getIsMobileView();

	public desktopMarketplaceProducts: Array<'divider' | any> = [
		...this.marketplaceProducts.slice(0, 3),
		'divider',
		...this.marketplaceProducts.slice(3),
	];
	public mobileMarketplaceProducts: Array<'divider' | any> = [
		...this.marketplaceProducts.slice(0, 2),
		'divider',
		...this.marketplaceProducts.slice(2),
	];

	ngOnChanges(changes: SimpleChanges) {
		if (changes['marketplaceProducts']) {
			this.desktopMarketplaceProducts = [
				...this.marketplaceProducts.slice(0, 6),
				'divider',
				...this.marketplaceProducts.slice(6),
			];
			this.mobileMarketplaceProducts = [
				...this.marketplaceProducts.slice(0, 4),
				'divider',
				...this.marketplaceProducts.slice(4),
			];
		}
	}
	ngOnInit() {}

	constructor(
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly clientMarketplaceService: ClientMarketplaceService,
		private platformService: PlatformService
	) {
		if (this.platformService.isBrowser) {
			this.marketplaceSkeletonOptions =
				this.clientMarketplaceService.getMarketplaceSkeletonOptions();
			this.loading$ = this.clientMarketplaceService.loading$;
		}
	}

	private getIsMobileView(): Observable<boolean> {
		return fromEvent(window, 'resize').pipe(
			startWith(window.innerWidth < 1312),
			map(() => window.innerWidth < 1312),
			untilDestroyed(this)
		);
	}

	public getCountryName(countryCode: string): string {
		if (!countryCode) {
			return '';
		}
		return getName(countryCode);
	}

	public openChat(event: Event): void {
		event.stopImmediatePropagation();
	}

	public emitStarClick(id: string, event: Event): void {
		event.preventDefault();
		event.stopImmediatePropagation();
		this.starClicked.emit(id);
	}
}
