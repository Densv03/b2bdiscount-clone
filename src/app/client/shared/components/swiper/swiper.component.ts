import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { PlatformService } from '../../../services/platform/platform.service';

@Component({
	selector: 'app-swiper',
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements AfterViewInit {
	@ViewChild('swiperRef')
	swiperRef: ElementRef | undefined;

	@Input() swipeOptions: SwiperOptions = {
		direction: 'horizontal',
		spaceBetween: 10,
		loop: false,
		speed: 1000,
		slidesPerView: 1,
		pagination: false,
	};

	@Input() styles: string;

	swiper: Swiper;
	constructor(public platformService: PlatformService) {}

	ngAfterViewInit() {
		setTimeout(() => {
			this.swiper = new Swiper(
				this.swiperRef?.nativeElement,
				this.swipeOptions
			);
		});
	}
}
