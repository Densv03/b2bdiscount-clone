import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'b2b-custom-carousel-dialog',
	templateUrl: './custom-carousel-dialog.component.html',
	styleUrls: ['./custom-carousel-dialog.component.scss'],
})
export class CustomCarouselDialogComponent {
	@ViewChild('carousel', { static: true }) public carousel: ElementRef;
	@ViewChild('footer', { static: true }) public footer: ElementRef;

	public slider: string[];
	public current: number;

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

	public selectSlide(idx: number): void {
		this.current = idx;
		this.carousel.nativeElement.style.transform = `translateX(${
			100 * this.current * -1
		}%)`;
	}
}
