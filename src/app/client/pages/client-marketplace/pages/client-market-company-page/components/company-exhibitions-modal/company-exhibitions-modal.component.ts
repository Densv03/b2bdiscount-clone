import {
	AfterViewInit,
	ChangeDetectionStrategy, ChangeDetectorRef,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	Inject,
	OnInit,
	ViewChild
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";
import {DatePipe, JsonPipe, NgTemplateOutlet} from "@angular/common";
import {SwiperOptions} from "swiper/types/swiper-options";
import {Navigation} from "swiper/modules";
import {PlatformService} from "../../../../../../services/platform/platform.service";
import Swiper from "swiper";
import {environment} from "../../../../../../../../environments/environment";
import {PageLoaderModule} from "../../../../../../../core/components/page-loader/page-loader.module";
import {BehaviorSubject} from "rxjs";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'b2b-company-exhibitions-modal',
  standalone: true,
	imports: [
		MatDialogClose,
		DatePipe,
		NgTemplateOutlet,
		JsonPipe,
		PageLoaderModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './company-exhibitions-modal.component.html',
  styleUrl: './company-exhibitions-modal.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyExhibitionsModalComponent implements AfterViewInit {
	@ViewChild('modalSwiperRef') _swiperRef: ElementRef;

	public modalIsLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private nexButtonSelector: string = '#next-button';
	private prevButtonSelector: string = '#prev-button';
	swiper: Swiper;

	private swiperConfig: SwiperOptions = {
		modules: [Navigation],
		speed: 500,
		grabCursor: true,
		navigation: {
			nextEl: this.nexButtonSelector,
			prevEl: this.prevButtonSelector,
		},
		pagination: {
			el: '.swiper-pagination-modal',
			dynamicBullets: true,
		},
	};

	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
							private readonly cdr: ChangeDetectorRef,
							private sanitizer: DomSanitizer,
							private readonly platformService: PlatformService) {
	}

	ngAfterViewInit() {
		if (this.data.modalType !== 'video' && this.platformService.isBrowser) {
			this.initializeSwiper();
		}
	}

	public getSecureEmbedUrl(url: string): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.extractVideoID(url)}`);
	}

	private extractVideoID(url: string): string {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);

		if (match && match[2].length == 11) {
			return match[2];
		}

		throw new Error('Invalid link')
	}

	public getExhibitionImageUrl(imageUrl: string): string {
		if (imageUrl) {
			return environment.apiUrl + imageUrl;
		}
		return 'assets/images/offer-6.webp';
	}
	public getMediaSrc(url: string): string {
		return environment.apiUrl + url;
	}

	private initializeSwiper(): void {
		setTimeout(() => {
			this.swiper = new Swiper(
				this._swiperRef.nativeElement,
				{
					...this.swiperConfig,
					on: {
						slideChange: (swiper: Swiper) => {
							this.toggleNavigationArrows(swiper, this.prevButtonSelector, this.nexButtonSelector);
						},
						afterInit: (swiper: Swiper) => {
							this.toggleNavigationArrows(swiper, this.prevButtonSelector, this.nexButtonSelector);
						},

					},
				}
			);
		},500);
	}

	private toggleNavigationArrows(swiper: Swiper, prevButtonSelector: string, nextButtonSelector: string) {
		const swiperInstance = swiper;
		const isFirstSlide = swiperInstance && swiperInstance.activeIndex === 0;
		const isLastSlide =
			swiperInstance &&
			swiperInstance.activeIndex + 1 >= swiperInstance.slides.length;

		const prevButton = document.querySelector(prevButtonSelector);
		const nextButton = document.querySelector(nextButtonSelector);

		if (prevButton) {
			prevButton.classList.toggle('disabled', isFirstSlide);
		}

		if (nextButton) {
			nextButton.classList.toggle('disabled', isLastSlide);
		}
	}
}
