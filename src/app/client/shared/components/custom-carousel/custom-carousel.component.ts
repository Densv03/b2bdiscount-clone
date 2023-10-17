import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'b2b-custom-carousel',
	templateUrl: './custom-carousel.component.html',
	styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent {
	@ViewChild('carousel', { static: true }) public carousel: ElementRef;

	@Input() set slides(slides: any[]) {
		this.slider = slides;
		this.current = 0;
		this.carousel.nativeElement.style.transform = `translateX(0%)`;
	}

	@Input() isImage: boolean = false;

	public slider: any[];
	public current: number = 0;

	public previousSlide(): void {
		if (this.current === 0) {
			this.current = this.slider.length;
		}

		this.selectSlide(--this.current);
	}

	public nextSlide(): void {
		if (this.current === this.slider.length - 1) {
			this.current = -1;
		}
		this.selectSlide(++this.current);
	}

	private selectSlide(idx: number): void {
		this.carousel.nativeElement.style.transform = `translateX(${
			100 * this.current * -1
		}%)`;
	}
}
