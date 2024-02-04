import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	HostListener,
	Inject,
	Input,
	OnInit,
	Output,
	Renderer2,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, filter, skip, startWith } from 'rxjs/operators';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { PopupTypeEnum } from './types/popup-type.emun';
import { HeaderPopupComponent } from './components/header-popup/header-popup.component';
import { HeaderService } from './header.service';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { HeaderPopupState } from './types/header-popup-state.interface';
import {
	HeaderMainOption,
	HeaderSearchOption,
} from './types/header-main-option.interface';
import { User } from '../../../core/models/user/user.model';
import { UserService } from '../../pages/client-profile/services/user/user.service';
import { SocketService } from '../../services/socket/socket.service';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { TooltipTypeEnum } from './types/tooltip-type.enum';
import { ClientContactUsModalComponent } from '../client-contact-us-modal/client-contact-us-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { TooltipService } from './tooltip.service';
import { DOCUMENT } from '@angular/common';
import { head } from 'lodash';
import { PlatformService } from '../../services/platform/platform.service';
import { ParentCategoriesMobileListComponent } from '../../shared/components/parent-categories-mobile-list/parent-categories-mobile-list.component';
import { CategoriesService } from '../../services/categories/categories.service';

@UntilDestroy()
@Component({
	selector: 'b2b-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	@Input() mobileSideNavState: 'in' | 'out';
	@ViewChild('dynamicHostContainer', { read: ViewContainerRef })
	dynamicHostContainer: ViewContainerRef;
	@ViewChild('profileToolTip', { read: ViewContainerRef })
	profileToolTipContainer: ViewContainerRef;
	// @ViewChild('searchOptionsToolTip', { read: ViewContainerRef })
	// searchOptionsToolTipContainer: ViewContainerRef;
	@Output() searchValue: EventEmitter<string> = new EventEmitter<string>();
	@Output() public burgerClicked: EventEmitter<void> = new EventEmitter<void>();
	public readonly b2bNgxInputThemeEnum: typeof B2bNgxInputThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly popupTypeEnum: typeof PopupTypeEnum = PopupTypeEnum;
	public readonly tooltipTypeEnum: typeof TooltipTypeEnum = TooltipTypeEnum;
	public control = this.headerService.searchFormControl;
	public queryParams: Params = { tab: 'Chats' };
	public popUpIsOpened = false;
	public headerMainOptions: Array<HeaderMainOption> =
		this.getHeaderMainOptions();
	public headerSearchOptions: Array<HeaderSearchOption> =
		this.getHeaderSearchOptions();
	public headerPopupState$: Observable<HeaderPopupState> =
		this.headerService.popupState$();
	public activeToolTip$: Observable<TooltipTypeEnum> =
		this.toolTipService.activeTooltip$;
	public isTransparent$: Observable<boolean> =
		this.headerService.headerIsTransparent$();
	public user$: Observable<User>;
	public userUnreadMessages$: Observable<number>;
	public isMobile: boolean = window.innerWidth <= 768;
	private userUnreadMessagesSource: BehaviorSubject<number> =
		new BehaviorSubject<number>(0);
	private isAuthPageSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	private isMainPageSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	private isMarketPageSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	private isHeaderHiddenSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(false);
	public isMainPage$: Observable<boolean> =
		this.isMainPageSource.asObservable();
	public isAuthPage$: Observable<boolean> =
		this.isAuthPageSource.asObservable();
	public isMarketPage$: Observable<boolean> =
		this.isMarketPageSource.asObservable();
	public isHeaderHidden$: Observable<boolean> =
		this.isHeaderHiddenSource.asObservable();
	public showSearch = false;
	public showBurger = false;

	constructor(
		public readonly platformService: PlatformService,
		private readonly headerService: HeaderService,
		private readonly userService: UserService,
		private readonly socketService: SocketService,
		private readonly router: Router,
		private readonly dialog: MatDialog,
		private readonly toolTipService: TooltipService,
		private readonly categoriesService: CategoriesService,
		private renderer: Renderer2,
		private readonly cdr: ChangeDetectorRef,
		@Inject(DOCUMENT) private document: Document,
		private route: ActivatedRoute
	) {
		this.b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.user$ = this.userService.getUser$();
		this.userUnreadMessages$ = this.userUnreadMessagesSource.asObservable();
	}

	ngOnInit(): void {
		this.checkIsAuthPage();
		this.checkIsHeaderHidden();
		this.checkIsMainPage();
		this.setSearchControlValue();
		this.clearContainerOnStateChange();
		this.clearToolTipOnStateChange();
		this.showUnreadMessages();
		this.isSearchVisibleObserve();
	}

	checkLinkIsActive(url: string): boolean {
		return this.router.url.includes(url);
	}

	handleMouseEnter(event: MouseEvent, type: PopupTypeEnum): void {
		const { popupIsOpened, popupType } =
			this.headerService.getPopupStateValue();
		if (type !== popupType || !popupIsOpened) {
			this.toggleHeaderPopUp({ popupType: type });
		}
	}

	handleEnterOnMainPanel(event: MouseEvent, panel: HTMLElement) {
		if (event.target === panel) {
			this.closeHeader();
		}
	}

	closeHeader(): void {
		this.headerService.closeHeader();
		if (this.isMainPageHeader() && !this.headerService.profileNavIsOpened) {
			this.headerService.updateHeaderTransparent(window.scrollY < 100);
		}
	}

	openProfileMobilePopup(): void {
		this.closeHeader();
		this.burgerClicked.emit();
	}

	isMainOptionActive(
		state: HeaderPopupState,
		optionType: PopupTypeEnum | TooltipTypeEnum
	): boolean {
		return state.popupType === optionType && state.popupIsOpened;
	}

	openBurgerPopup(type: PopupTypeEnum): void {
		if (window.innerWidth < 768) {
			this.toggleHeaderPopUp({ popupType: type });
		} else {
			this.toggleHeaderPopUp({ burgerPopup: true, popupType: type });
		}
	}

	openMobileCategoriesPopup(): void {
		this.headerService.updateProfileNavIsOpened(false);

		const dialog = this.dialog.open(ParentCategoriesMobileListComponent, {
			width: '100%',
			height: '100%',
			maxWidth: '100%',
			panelClass: 'categories-list-mobile',
		});
		dialog.componentInstance.categories$ = this.categoriesService
			.getCategories$()
			.pipe(map((categories) => categories.categories));
	}

	toggleHeaderPopUp(
		dynamicComponentProperties: { [key: string]: any } | null
	): void {
		const { popupIsOpened, popupType } =
			this.headerService.getPopupStateValue();
		const sameButtonWasClicked =
			dynamicComponentProperties['popupType'] === popupType;

		this.popUpIsOpened = !this.headerService.getPopupStateValue().popupIsOpened;
		if (!sameButtonWasClicked && popupIsOpened) {
			this.popUpIsOpened = true;
		}

		this.updatePopupState(dynamicComponentProperties['popupType']);
		if (!sameButtonWasClicked) {
			this.createDynamicComponent(dynamicComponentProperties);
			this.headerService.updateHeaderTransparent(false);
		} else if (sameButtonWasClicked) {
			if (this.popUpIsOpened) {
				this.createDynamicComponent(dynamicComponentProperties);
				this.headerService.updateHeaderTransparent(false);
				return;
			}
			this.headerService.updateHeaderTransparent(
				window.scrollY < 100 && this.router.url.replace(/\?.*$/, '') === '/'
			);
		}
	}

	public closeNav(): void {
		this.headerService.updateProfileNavIsOpened(false);
	}

	public setSearchControlValue(): void {
		if (this.control.value.trim()) {
			if (this.checkIsB2bMarketListingPage(this.router.url)) {
				this.router.navigate([], {
					queryParams: { q: this.control.value.trim() },
					relativeTo: this.route,
				});
			} else {
				this.router.navigate(['/b2bmarket/listing'], {
					queryParams: { q: this.control.value.trim() },
				});
			}
			this.headerService.formControlValue = this.control.value.trim();
		}
	}

	isMainPageHeader(): boolean {
		return this.router.url.replace(/\?.*$/, '') === '/';
	}

	@HostListener('window:scroll')
	handleScroll() {
		this.showSearch = this.checkIsSearchVisible();
		if (this.isMainPageHeader() && !this.headerService.profileNavIsOpened) {
			this.headerService.updateHeaderTransparent(
				window.scrollY < 100 &&
					!this.headerService.getPopupStateValue().popupIsOpened
			);
		}
	}

	public clearToolTipOnStateChange(): void {
		this.headerService
			.toolTipIsOpened$()
			.pipe(
				skip(1),
				filter((data) => data === false)
			)
			.subscribe(() => {
				this.profileToolTipContainer.clear();
			});
	}

	private clearContainerOnStateChange(): void {
		this.headerService.popupState$().subscribe(({ popupIsOpened }) => {
			this.dynamicHostContainer?.clear();
		});
	}

	private getHeaderMainOptions(): HeaderMainOption[] {
		return [
			{ name: 'Our Solutions', type: PopupTypeEnum.SOLUTIONS },
			{ name: 'Resources', type: PopupTypeEnum.RESOURCES },
		];
	}

	private getHeaderSearchOptions(): HeaderSearchOption[] {
		return [
			{ name: 'For Buyer', type: TooltipTypeEnum.FOR_BUYER },
			{ name: 'Become a supplier', type: TooltipTypeEnum.BECOME_SUPPLIER },
		];
	}

	private showUnreadMessages(): void {
		combineLatest([
			this.socketService.unreadMarketplaceMessagesCount$,
			this.socketService.unreadRfqMessagesCount$,
			this.socketService.unreadOfferMessagesCount$,
		])
			.pipe(
				skip(2),
				map((messagesArr) =>
					messagesArr.reduce(
						(accumulator, currentValue) => accumulator + currentValue,
						0
					)
				)
			)
			.subscribe((count) => this.userUnreadMessagesSource.next(count));
	}

	private checkIsMainPage(): void {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				untilDestroyed(this)
			)
			.subscribe((data: any) => {
				this.isMainPageSource.next(data['url'].replace(/\?.*$/, '') === '/');
				this.isMarketPageSource.next(this.checkIsMarketPage(data['url']));
				this.headerService.updateHeaderTransparent(
					this.isMainPageSource.getValue()
				);
				this.showBurger = this.checkIsListingPage(this.router.url, false);
				this.headerService.closeHeader();
			});
		this.isMainPageSource.next(this.router.url === '/');
		this.headerService.updateHeaderTransparent(
			this.isMainPageSource.getValue()
		);
		this.isMarketPageSource.next(this.checkIsMarketPage(this.router.url));
		this.showBurger = this.checkIsListingPage(this.router.url, false);
	}

	private checkIsListingPage(url: string, allowMarketPage = true): boolean {
		const listings = [
			'b2bmarket',
			'quick-logistics',
			'unclaimed-cargo',
			'sourcing-request',
		];
		return (
			listings.some((el) => url.includes(el)) &&
			!url.includes('profile') &&
			(!allowMarketPage || url.replace(/\?.*$/, '') !== '/b2bmarket')
		);
	}

	private checkIsMarketPage(url: string): boolean {
		let u = url.replace(/\?.*$/, '');
		return (
			(u.includes('market') || u.includes('sourcing-request')) &&
			!u.includes('profile')
		);
	}

	private checkIsB2bMarketListingPage(url: string): boolean {
		return url.includes('b2bmarket/listing');
	}

	private checkIsAuthPage(): void {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				untilDestroyed(this)
			)
			.subscribe((data: any) => {
				const url = data['url'].replace(/\?.*$/, '');
				const isPageAuth = url.includes('auth') || url.includes('email-verify');
				this.isAuthPageSource.next(isPageAuth);
			});
		const url = this.router.url.replace(/\?.*$/, '');
		this.isAuthPageSource.next(
			url.includes('auth') || url.includes('email-verify')
		);
	}

	private isSearchVisibleObserve(): void {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				startWith(null),
				untilDestroyed(this)
			)
			.subscribe(() => {
				this.showSearch = this.checkIsSearchVisible();
			});
	}

	private checkIsHeaderHidden(): void {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				untilDestroyed(this)
			)
			.subscribe((data: any) => {
				const isPageAdmin = data['url'].includes('admin');
				this.isHeaderHiddenSource.next(isPageAdmin);
			});
		this.isHeaderHiddenSource.next(this.router.url.includes('admin'));
	}

	private createDynamicComponent(dynamicComponentProperties: {
		[key: string]: any;
	}): void {
		const componentInstance =
			this.dynamicHostContainer.createComponent(HeaderPopupComponent);
		for (const key in dynamicComponentProperties) {
			componentInstance.setInput(key, dynamicComponentProperties[key]);
		}
	}

	private updatePopupState(type: PopupTypeEnum): void {
		if (this.mobileSideNavState === 'in') {
			this.burgerClicked.emit();
		}
		this.headerService.updatePopupState({
			popupIsOpened: this.popUpIsOpened,
			popupType: type,
		});
	}

	private checkIsSearchVisible(): boolean {
		const isSearchVisible =
			window.scrollY > 100 || this.checkIsListingPage(this.router.url);
		if (isSearchVisible) {
			const q = this.router.parseUrl(this.router.url).queryParams['q'];
			if (q) {
				this.patchValueToSearch(q);
				this.headerService.formControlValue = q;
			}
		} else {
			this.patchValueToSearch('');
			this.headerService.formControlValue = '';
		}
		return isSearchVisible;
	}

	private patchValueToSearch(value: string): void {
		this.control.patchValue(value);
	}

	protected readonly window = window;
}
