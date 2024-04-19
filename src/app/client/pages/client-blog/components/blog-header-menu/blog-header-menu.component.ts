import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import { BlogCategoriesEnum } from '../../../../../core/enums/blog-categories.enum';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe, NgIf } from '@angular/common';
import { PlatformService } from '../../../../services/platform/platform.service';
import { MatDialog } from '@angular/material/dialog';
import { BlogMenuMobileDialogComponent } from '../blog-menu-mobile-dialog/blog-menu-mobile-dialog.component';
import { BehaviorSubject, fromEvent, map, startWith } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BlogService } from '../../../../services/blog/blog.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
export class BlogHeaderMenuComponent implements AfterViewInit, OnInit {
	@ViewChild('menuList', { static: true }) menuList: ElementRef;
	@ViewChildren('listItem') listItem: QueryList<ElementRef>;

	private homeResponseToHeaderOption: any = {
		home: {
			displayName: 'Home',
			link: '/blog',
		},
		lastSixNews: {
			displayName: BlogCategoriesEnum.News,
			link: '/blog/news',
		},
		lastTwoTradeGuide: {
			displayName: BlogCategoriesEnum.TradeGuide,
			link: '/blog/trade-guide',
		},
		lastThreeAnalysis: {
			displayName: BlogCategoriesEnum.Analysis,
			link: '/blog/analysis',
		},
		lastFourMarketExperts: {
			displayName: BlogCategoriesEnum.MarketExperts,
			link: '/blog/market-experts',
		},
		lastFiveMarketUpdates: {
			displayName: BlogCategoriesEnum.MarketUpdates,
			link: '/blog/market-updates',
		},
		lastTwoLogistics: {
			displayName: BlogCategoriesEnum.LogisticsSupplyChain,
			link: '/blog/logistics-and-supply-chain',
		},
	}

	private menuLinksSource = new BehaviorSubject<{displayName: string; link: string}[]>([this.homeResponseToHeaderOption['home']]);
	public menuLinks$ = this.menuLinksSource.asObservable();

	constructor(public readonly platformService: PlatformService,
							private readonly dialog: MatDialog,
							private readonly blogService: BlogService) {
	}

	ngOnInit() {
		this.initHeaderOptions();
	}

	ngAfterViewInit(): void {
		if (this.platformService.isServer) {
			return;
		}
		this.handleActiveSection();
		this.scrollToActiveSection();
	}

	public openPopUp(): void {
		const dialog = this.dialog.open(BlogMenuMobileDialogComponent, {
			width: '100%',
			height: '100%',
			maxWidth: '100%',
			panelClass: 'categories-list-mobile',
		});

		dialog.componentInstance.menuLinks = this.menuLinksSource.value;

		dialog.afterClosed()
			.pipe(
				filter(res => !!res),
				untilDestroyed(this))
			.subscribe(() => this.setScrollWidth());
	}

	private scrollToActiveSection(): void {
		fromEvent(window, 'resize')
			.pipe(
				startWith(600 > window.innerWidth), map(() => 600 > window.innerWidth),
				filter(event => event),
				untilDestroyed(this)
			)
			.subscribe(() => this.setScrollWidth());
	}

	private setScrollWidth(): void {
		let activeElement: ElementRef;
		setTimeout(() => {
			activeElement = this.listItem.find(item => {
				return item?.nativeElement.classList.contains('active');
			});
			this.menuList.nativeElement.scrollLeft = activeElement?.nativeElement.offsetLeft - this.menuList?.nativeElement.offsetWidth / 2 + activeElement?.nativeElement.offsetWidth / 2;
		}, 0);
	}

	private handleActiveSection(): void {
		this.blogService.articleType$
			.pipe(
				filter(type => !!type),
				untilDestroyed(this)
				)
			.subscribe(type => {
				const activeItem = this.listItem.find(item => item.nativeElement?.innerText === type);
				activeItem?.nativeElement?.classList?.add('active');
			})
	}

	private initHeaderOptions(): void {
		this.blogService.getHomePage().pipe(
			map(response => response.data)
		).subscribe((data: any) => {
			for(const key in data) {
				if (this.homeResponseToHeaderOption[key] && data[key].length) {
					this.menuLinksSource.next([...this.menuLinksSource.value, this.homeResponseToHeaderOption[key]]);
				}
			}
		});
	}
}
