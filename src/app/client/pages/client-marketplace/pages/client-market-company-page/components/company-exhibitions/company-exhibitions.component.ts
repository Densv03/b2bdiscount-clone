import {
	AfterViewInit,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	HostListener,
	Input,
	OnInit,
	ViewChild
} from '@angular/core';
import {TradeShow, TradeShowType} from "../../../../../../../core/models/trade-show.interface";
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import {SwiperOptions} from "swiper/types/swiper-options";
import {Navigation, Pagination} from "swiper/modules";
import {PlatformService} from "../../../../../../services/platform/platform.service";
import {environment} from "../../../../../../../../environments/environment";
import Swiper from "swiper";
import {MatDialog} from "@angular/material/dialog";
import {companyModalType} from "../../comapany-modal.type";
import {CompanyExhibitionsModalComponent} from "../company-exhibitions-modal/company-exhibitions-modal.component";


@Component({
	selector: 'b2b-company-exhibitions',
	standalone: true,
	imports: [
		JsonPipe,
		NgForOf,
		DatePipe
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './company-exhibitions.component.html',
	styleUrl: './company-exhibitions.component.scss',
})
export class CompanyExhibitionsComponent implements OnInit, AfterViewInit {
	@Input() tradeShows: TradeShow[];

	@ViewChild('swiperRef') _swiperRef: ElementRef;
	@ViewChild('swiperRef2') _swiperRef2: ElementRef;

	private slidesPerView: number;

	private swiperConfig: SwiperOptions;

	constructor(private readonly platformService: PlatformService,
							private readonly matDialog: MatDialog) {
		if (this.platformService.isBrowser) {
			const windowWidth = window.innerWidth;
			this.slidesPerView = windowWidth >= 1200 ? 4 : 3;
			this.swiperConfig = {
				modules: [Navigation, Pagination],
				slidesPerView: this.slidesPerView,
				grabCursor: true,
				speed: 500,
				spaceBetween: 16,
				breakpoints: {
					1200: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 3,
					},
					320: {
						slidesPerView: 2.2,
					}
				}
			};
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event) {
		const windowWidth = window.innerWidth;
		console.log(windowWidth)
		switch (windowWidth) {
			case 976:
				this.slidesPerView = 3;
				break;
		}

	}


	ngOnInit() {
	}

	ngAfterViewInit() {
		if (this.platformService.isBrowser) {
			this.initializeSwiper(
				this._swiperRef,
				{
					...this.swiperConfig,
					pagination: {
						el: '.swiper-pagination-1',
						dynamicBullets: true,
					},
					navigation: {
						nextEl: '#next-button-1',
						prevEl: '#prev-button-1',
					},
					on: {
						slideChange: (swiper: Swiper) => {
							this.toggleNavigationArrows(swiper, '#prev-button-1', '#next-button-1');
						},
						afterInit: (swiper: Swiper) => {
							setTimeout(() => {
								this.toggleNavigationArrows(swiper, '#prev-button-1', '#next-button-1');
							}, 1000)
						},

					},
				});
			this.initializeSwiper(
				this._swiperRef2,
				{
					...this.swiperConfig,
					pagination: {
						el: '.swiper-pagination-2',
						dynamicBullets: true,
					},
					navigation: {
						nextEl: '#next-button-2',
						prevEl: '#prev-button-2',
					},
					on: {
						slideChange: (swiper: Swiper) => {
							this.toggleNavigationArrows(swiper, '#prev-button-2', '#next-button-2');
						},
						afterInit: (swiper: Swiper) => {
							setTimeout(() => {
								this.toggleNavigationArrows(swiper, '#prev-button-2', '#next-button-2');
							}, 500)
						},

					},
				}
			);
		}
	}

	public openCompanyModal(modalType: companyModalType, tradeShow: TradeShow): void {
		if (window.innerWidth < 576) {
			this.matDialog.open(CompanyExhibitionsModalComponent, {
				width: '100%',
				height: '100%',
				maxWidth: '100%',
				panelClass: 'categories-list-mobile',
				data: {
					modalType,
					tradeShow
				},
			});
		} else {
			this.matDialog.open(CompanyExhibitionsModalComponent, {
				data: {
					modalType,
					tradeShow
				},
			});
		}

	}

	public getExhibitionImageUrl(imageUrl: string): string {
		if (imageUrl) {
			return environment.apiUrl + imageUrl;
		}
		return 'assets/images/offer-6.webp';
	}

	public filterTradeShowsByType(tradeShows: TradeShow[], tradeShowType: TradeShowType): TradeShow[] {
		return tradeShows.filter(tradeShow => tradeShow.type === tradeShowType)
	}

	private initializeSwiper(swiperInstance: ElementRef, options: SwiperOptions): void {
		setTimeout(() => {
			Object.assign(swiperInstance.nativeElement, options);
			if (this.platformService.isBrowser) {
				swiperInstance.nativeElement.initialize();
			}
		}, 500);
	}

	toggleNavigationArrows(swiper: Swiper, prevButtonSelector: string, nextButtonSelector: string) {
		const swiperInstance = swiper;
		const isFirstSlide = swiperInstance && swiperInstance.activeIndex === 0;
		const isLastSlide =
			swiperInstance &&
			swiperInstance.activeIndex + this.slidesPerView >= swiperInstance.slides.length;

		const prevButton = document.querySelector(prevButtonSelector);
		const nextButton = document.querySelector(nextButtonSelector);

		if (prevButton) {
			prevButton.classList.toggle('d-none', isFirstSlide);
		}

		if (nextButton) {
			console.log('toggle', isLastSlide, swiperInstance.activeIndex, swiperInstance.slides.length)
			nextButton.classList.toggle('d-none', isLastSlide);
		}
	}
}
