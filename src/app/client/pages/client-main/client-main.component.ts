import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
} from '@angular/core';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { Navigation, Pagination } from 'swiper/modules';
import { PlatformService } from '../../services/platform/platform.service';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { CategoriesService } from '../../services/categories/categories.service';
import { filter, first } from 'rxjs/operators';
import { map, Observable } from 'rxjs';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { BlogService } from '../../services/blog/blog.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SeoService } from '../../../core/services/seo/seo.service';
const breakpoints = {
	320: {
		slidesPerView: 1.75,
		spaceBetween: 10,
	},
	480: {
		slidesPerView: 2.5,
	},

	889: {
		slidesPerView: 3,
	},
};
type videoSrc = 'main-overview.mp4' | 'main-overview-mobile.mp4';

@Component({
	selector: 'b2b-client-main',
	templateUrl: './client-main.component.html',
	styleUrls: ['./client-main.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientMainComponent implements AfterViewInit, OnInit {
	@ViewChild('swiperRef') _swiperRef: ElementRef;
	public muted = false;
	public overViewVideoSrc: videoSrc = 'main-overview.mp4';
	public categoriesSlides: Array<any>[] = [];
	public solutions: any[] = this.getSolutions();
	public readonly articles$: Observable<any[]>;
	public b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public control: FormControl = new FormControl<string>('');
	constructor(
		public platformService: PlatformService,
		private categoriesService: CategoriesService,
		private blogService: BlogService,
		private cdr: ChangeDetectorRef,
		private readonly router: Router,
		private seoService: SeoService
	) {
		this.articles$ = this.getArticles();
	}

	ngOnInit() {
		this.seoService.setTitle(
			'B2B Platform For Suppliers and Buyers Worldwide, Wholesale Marketplace | Globy'
		);
		this.seoService.setDescription(
			'B2B Marketplace for sourcing and connecting with trusted manufacturers and wholesalers. Unclaimed cargo directory. News and the industry’s insights.'
		);
	}

	ngAfterViewInit() {
		if (this.platformService.isBrowser) {
			this.initializeSlides();
			this.initializeSwiper();
		}
	}
	public setSearchControlValue(): void {
		if (this.control.value.trim()) {
			this.router.navigate(['/b2bmarket/listing'], {
				queryParams: { q: this.control.value.trim() },
			});
			this.control.reset();
		}
	}
	public getCategoryIconLink(icon: string): string {
		return `/assets/icons/header/sectors/${icon}.svg`;
	}
	private initializeSlides(): void {
		let chunkSize: number = 3;
		if (this.platformService.isBrowser) {
			chunkSize = window.innerWidth >= 889 ? 3 : 3;
			this.overViewVideoSrc =
				window.innerWidth <= 768
					? 'main-overview-mobile.mp4'
					: 'main-overview.mp4';
		}
		this.categoriesService
			.getCategories$()
			.pipe(
				filter(({ categories }) => categories.length > 0),
				map((data) => data.categories),
				first()
			)
			.subscribe((data) => {
				this.processCategories(data, chunkSize);
			});
	}

	public getIcon(solution: any): string {
		return solution.isHovered ? solution.hoveredIcon : solution.icon;
	}
	private initializeSwiper(): void {
		const swiperConfig: SwiperOptions = {
			modules: [Navigation, Pagination],
			slidesPerView: 3,
			loop: true,
			grabCursor: true,
			speed: 500,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
			},
			injectStyles: [
				`
        .swiper-wrapper {
          padding: 5px 0;
        }
        `,
			],
			breakpoints,
		};

		setTimeout(() => {
			Object.assign(this._swiperRef.nativeElement, swiperConfig);
			if (this.platformService.isBrowser) {
				this._swiperRef.nativeElement.initialize();
			}
		}, 500);
	}

	private processCategories(categoriesArr: any[], butchSize: number): void {
		const resultArray = [];
		for (let i = 0; i < categoriesArr.length; i += butchSize) {
			resultArray.push(categoriesArr.slice(i, i + butchSize));
		}
		this.categoriesSlides = resultArray;
		this.cdr.detectChanges();
	}
	private getArticles(): Observable<any[]> {
		return this.blogService
			.getArticles(`?limit=${window.innerWidth > 976 ? 6 : 4}`)
			.pipe(map((item) => item.posts));
	}

	private getSolutions(): any[] {
		return [
			{
				icon: '/assets/icons/main-page/market.svg',
				hoveredIcon: '/assets/icons/main-page/market-blue.svg',
				isHovered: false,
				title: 'Marketplace',
				path: '/b2bmarket',
				description:
					'B2B marketplace for wholesale global traders. Explore products and companies, establish new connections, and elevate your business trading worldwide.',
			},
			{
				icon: '/assets/icons/main-page/cargo.svg',
				hoveredIcon: '/assets/icons/main-page/cargo-blue.svg',
				isHovered: false,
				title: 'Unclaimed Cargo',
				path: '/unclaimed-cargo',
				description:
					'Buy or Sell cargo that was unclaimed \n' +
					'at a reduced price. Stay tuned and receive \n' +
					'new cargo notifications to get the best deal.',
			},
			{
				icon: '/assets/icons/main-page/logistics.svg',
				hoveredIcon: '/assets/icons/main-page/cargo-blue.svg',
				isHovered: false,
				title: 'Quick Logistics',
				path: '/quick-logistics',
				description:
					'Use our freight calculator to explore the best shipping rates. Get quotes in seconds \n' +
					'for any destination and save your time managing logistics.',
			},
		];
	}
}
