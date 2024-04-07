import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	QueryList,
	Renderer2,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import { BlogCategoriesEnum } from '../../../../../core/enums/blog-categories.enum';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe, NgIf } from '@angular/common';
import { PlatformService } from '../../../../services/platform/platform.service';
import { MatDialog } from '@angular/material/dialog';
import { BlogMenuMobileDialogComponent } from '../blog-menu-mobile-dialog/blog-menu-mobile-dialog.component';
import { BehaviorSubject, fromEvent, map, startWith } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'b2b-blog-header-menu',
	standalone: true,
	imports: [
		RouterLink,
		RouterLinkActive,
		MatIcon,
		NgIf,
		AsyncPipe,
	],
	templateUrl: './blog-header-menu.component.html',
	styleUrl: './blog-header-menu.component.scss',
})
export class BlogHeaderMenuComponent implements AfterViewInit {
	@ViewChild('menuList', { static: true }) menuList: ElementRef;
	@ViewChildren('listItem') listItem: QueryList<ElementRef>;

	public menuLinks = [
		{
			displayName: 'Home',
			link: '/blog',
		},
		{
			displayName: BlogCategoriesEnum.News,
			link: '/blog/news',
		},
		{
			displayName: BlogCategoriesEnum.TradeGuide,
			link: '/blog/trade-guide',
		},
		{
			displayName: BlogCategoriesEnum.Analysis,
			link: '/blog/analysis',
		},
		{
			displayName: BlogCategoriesEnum.MarketExperts,
			link: '/blog/market-experts',
		},
		{
			displayName: BlogCategoriesEnum.MarketUpdates,
			link: '/blog/market-updates',
		},
		{
			displayName: BlogCategoriesEnum.LogisticsSupplyChain,
			link: '/blog/logistics-and-supply-chain',
		},
	];
	private currentSectionSource = new BehaviorSubject<number>(0);
	public currentSection$ = this.currentSectionSource.asObservable();

	constructor(public readonly platformService: PlatformService,
							private readonly dialog: MatDialog,
							private readonly activatedRoute: ActivatedRoute,
							private readonly router: Router) {
	}

	ngAfterViewInit(): void {
		this.scrollToActiveSection();
	}

	public openPopUp(): void {
		const dialog = this.dialog.open(BlogMenuMobileDialogComponent, {
			width: '100%',
			height: '100%',
			maxWidth: '100%',
			panelClass: 'categories-list-mobile',
		});

		dialog.componentInstance.menuLinks = this.menuLinks;

		dialog.afterClosed()
			.pipe(filter(res => !!res))
			.subscribe(() => this.setScrollWidth())
	}

	private scrollToActiveSection(): void {
		fromEvent(window, 'resize')
			.pipe(
				startWith(600 > window.innerWidth), map(() => 600 > window.innerWidth),
				filter(event => event))
			.subscribe(() => this.setScrollWidth());
	}

	private setScrollWidth(): void {
		let activeElement: ElementRef;
		setTimeout(() => {
			activeElement = this.listItem.find(item => {
				return item.nativeElement.classList.contains('active');
			});
			this.menuList.nativeElement.scrollLeft = activeElement.nativeElement.offsetLeft - this.menuList.nativeElement.offsetWidth / 2 + activeElement.nativeElement.offsetWidth / 2;
		}, 0);
	}
}
