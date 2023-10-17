import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { Router } from '@angular/router';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ApplicationSectionsEnum } from '../../../../shared/enums/application-sections.enum';

@UntilDestroy()
@Component({
	selector: 'b2b-client-latest-offers-grid',
	templateUrl: './client-latest-offers-grid.component.html',
	styleUrls: ['./client-latest-offers-grid.component.scss'],
})
export class ClientLatestOffersGridComponent implements OnChanges {
	@Output() public starClicked: EventEmitter<string>;

	@Input() public options: any[] = [];
	@Input() public user: any;

	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;
	public readonly siteSections = ApplicationSectionsEnum;

	public desktopMarketplaceProducts: Array<'divider' | any> = [
		...this.options.slice(0, 3),
		'divider',
		...this.options.slice(3),
	];
	public mobileMarketplaceProducts: Array<'divider' | any> = [
		...this.options.slice(0, 2),
		'divider',
		...this.options.slice(2),
	];

	public isMobileView$: Observable<boolean> = this.getIsMobileView();

	constructor(
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly router: Router
	) {
		this.starClicked = new EventEmitter<string>();
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes && changes['options'].currentValue) {
			this.options = changes['options'].currentValue.map((el: any) => ({
				...el,
				isChatExist: !!el.chatStarted?.find((id: any) => id === this.user?._id),
			}));

			this.desktopMarketplaceProducts = [
				...this.options.slice(0, 3),
				'divider',
				...this.options.slice(3),
			];
			this.mobileMarketplaceProducts = [
				...this.options.slice(0, 2),
				'divider',
				...this.options.slice(2),
			];
		}
	}

	public cutString(str: string, wordsToSplice: number): string {
		if (!str) return '';
		const wordsArr = str.split(' ');
		return wordsArr.length > 4
			? wordsArr.slice(0, wordsToSplice).join(' ') + '...'
			: str;
	}

	public openChat(event: any): void {
		event.stopImmediatePropagation();
	}

	public emitStarClick(id: string): void {
		this.starClicked.emit(id);
	}

	public goTo(link: string): void {
		this.router.navigate([link]);
	}

	public setText(id: string): string {
		return id === this.user?._id ? 'OFFERS.VIEW_MY_OFFER' : 'Contact seller';
	}

	private getIsMobileView(): Observable<boolean> {
		return fromEvent(window, 'resize').pipe(
			startWith(window.innerWidth < 1312),
			map(() => window.innerWidth < 1312),
			untilDestroyed(this)
		);
	}
}
