import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Folder} from "../../../../../../../core/models/folder.model";
import {PlatformService} from "../../../../../../services/platform/platform.service";
import {SwiperOptions} from "swiper/types/swiper-options";
import {Navigation, Pagination} from "swiper/modules";
import {DatePipe, JsonPipe} from "@angular/common";
import Swiper from "swiper";
import {environment} from "../../../../../../../../environments/environment";
import {CompanyExhibitionsModalComponent} from "../company-exhibitions-modal/company-exhibitions-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'b2b-company-folders',
  standalone: true,
	imports: [
		DatePipe,
		JsonPipe
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './company-folders.component.html',
  styleUrl: './company-folders.component.scss'
})
export class CompanyFoldersComponent implements AfterViewInit {
	@Input() folders: Folder[];
	@ViewChild('swiperRef') _swiperRef: ElementRef;


	private nextBtnSelector: string = '#next-button-images-folder';
	private prevBtnSelector: string = '#prev-button-images-folder';
	private swiperConfig: SwiperOptions = {
		modules: [Navigation, Pagination],
		slidesPerView: 4,
		grabCursor: true,
		speed: 500,
		spaceBetween: 16,
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2.2,
			}
		}
	};


	constructor(private readonly platformService: PlatformService,
							private readonly matDialog: MatDialog) {}

	ngAfterViewInit() {
		if (this.platformService.isBrowser) {
			this.initializeSwiper(
				this._swiperRef,
				{
					...this.swiperConfig,
					pagination: {
						el: '.swiper-pagination-3',
						dynamicBullets: true,
					},
					navigation: {
						nextEl: this.nextBtnSelector,
						prevEl: this.prevBtnSelector,
					},
					on: {
						slideChange: (swiper: Swiper) => {
							if (window.innerWidth > 768) {
								this.toggleNavigationArrows(swiper, this.prevBtnSelector, this.nextBtnSelector);
							}
						},
						afterInit: (swiper: Swiper) => {
							this.toggleNavigationArrows(swiper, this.prevBtnSelector, this.nextBtnSelector);
						},

					},
				});
		}
	}

	public openImageModal(folder: Folder): void {
		if (window.innerWidth <= 576) {
			this.matDialog.open(CompanyExhibitionsModalComponent, {
				width: '100%',
				height: '100%',
				maxWidth: '100%',
				panelClass: 'categories-list-mobile',
				data: {
					modalType: 'image',
					folder
				},
			});
		} else {
			this.matDialog.open(CompanyExhibitionsModalComponent, {
				data: {
					modalType: 'image',
					folder
				},
			});
		}
	}

	public getImages(arr: Folder[]): Folder[] {
		return arr.filter(item => item.images.length > 0);
	}
	public getMediaSrc(url: string): string {
		return environment.apiUrl + url;
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
			swiperInstance.activeIndex + 4 >= swiperInstance.slides.length;

		const prevButton = document.querySelector(prevButtonSelector);
		const nextButton = document.querySelector(nextButtonSelector);
		if (prevButton) {
			prevButton.classList.toggle('d-none', isFirstSlide);
		}

		if (nextButton) {
			nextButton.classList.toggle('d-none', isLastSlide);
		}
	}
}
