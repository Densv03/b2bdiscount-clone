import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	Input,
	ViewChild
} from '@angular/core';
import {Folder} from "../../../../../../../core/models/folder.model";
import {PlatformService} from "../../../../../../services/platform/platform.service";
import {SwiperOptions} from "swiper/types/swiper-options";
import {Navigation, Pagination} from "swiper/modules";
import Swiper from "swiper";
import {environment} from "../../../../../../../../environments/environment";
import {CompanyExhibitionsModalComponent} from "../company-exhibitions-modal/company-exhibitions-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {NgOptimizedImage} from "@angular/common";
import {PageLoaderModule} from "../../../../../../../core/components/page-loader/page-loader.module";

@Component({
  selector: 'b2b-company-videos',
  standalone: true,
	imports: [
		NgOptimizedImage,
		PageLoaderModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './company-videos.component.html',
  styleUrl: './company-videos.component.scss'
})
export class CompanyVideosComponent implements AfterViewInit {
	@Input() folders: Folder[];
	@ViewChild('swiperRef') _swiperRef: ElementRef;

	private nextBtnSelector: string = '.swiper-next-button-videos';
	private prevBtnSelector: string = '.swiper-prev-button-videos';
	private swiperConfig: SwiperOptions = {
		modules: [Navigation, Pagination],
		grabCursor: true,
		speed: 500,
		spaceBetween: 16,
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			320: {
				slidesPerView: 1.5,
			},
		}
	};

	constructor(private readonly platformService: PlatformService,
							private cdr: ChangeDetectorRef,
							private sanitizer: DomSanitizer,
							private readonly matDialog: MatDialog) {
	}

	ngAfterViewInit() {
		if (this.platformService.isBrowser) {
			setTimeout(() => {
				console.log(this.folders)
				this.initializeSwiper(
					this._swiperRef,
					{
						...this.swiperConfig,
						pagination: {
							el: '.swiper-pagination-video',
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
			}, 500)
		}
	}

	detectOnLoad(): void {
		this.cdr.detectChanges();
	}

	public getSecureUrl(url: string): SafeUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

	getThumbnailUrl(url: string): string {
		if (url.includes(environment.apiUrl)) {
			return url;
		}
		const videoId = this.extractVideoID(url);
		return `https://img.youtube.com/vi/${videoId}/0.jpg`;
	}

	private extractVideoID(url: string): string {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);

		if (match && match[2].length == 11) {
			return match[2];
		}

		throw new Error('Invalid link')
	}

	public toggleNavigationArrows(swiper: Swiper, prevButtonSelector: string, nextButtonSelector: string) {
		const swiperInstance = swiper;
		const isFirstSlide = swiperInstance && swiperInstance.activeIndex === 0;
		const isLastSlide =
			swiperInstance &&
			swiperInstance.activeIndex + 2 >= swiperInstance.slides.length;

		const prevButton = document.querySelector(prevButtonSelector);
		const nextButton = document.querySelector(nextButtonSelector);
		if (prevButton) {
			prevButton.classList.toggle('d-none', isFirstSlide);
		}

		if (nextButton) {
			nextButton.classList.toggle('d-none', isLastSlide);
		}
	}

	public getVideos(arr: Folder[]): Folder[] {
		return arr.filter(item => item.videos.length > 0);
	}
	public getMediaSrc(url: string): string {
		return environment.apiUrl + url;
	}

	public openVideoModal(folder: Folder): void {
		if (window.innerWidth <= 576) {
			this.matDialog.open(CompanyExhibitionsModalComponent, {
				width: '100%',
				height: '100%',
				maxWidth: '100%',
				panelClass: 'categories-list-mobile',
				data: {
					modalType: 'video',
					folder
				},
			});
		} else {
			this.matDialog.open(CompanyExhibitionsModalComponent, {
				data: {
					modalType: 'video',
					folder
				},
			});
		}
	}

	private initializeSwiper(swiperInstance: ElementRef, options: SwiperOptions): void {
		setTimeout(() => {
			Object.assign(swiperInstance.nativeElement, options);
			if (this.platformService.isBrowser) {
				swiperInstance.nativeElement.initialize();
			}
		}, 500);
	}

}
