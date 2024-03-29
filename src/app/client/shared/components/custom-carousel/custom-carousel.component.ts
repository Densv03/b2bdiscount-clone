import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomCarouselDialogComponent } from '../custom-carousel-dialog/custom-carousel-dialog.component';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Component({
	selector: 'b2b-custom-carousel',
	templateUrl: './custom-carousel.component.html',
	styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent implements OnInit {
	@ViewChild('carousel', { static: true }) public carousel: ElementRef;

	@Input() set slides(slides: any[]) {
		this.slider = slides;
		this.current = 0;
		this.carousel.nativeElement.style.transform = `translateX(0%)`;
	}

	@Input() isImage: boolean = false;

	public slider: any[];
	public current: number = 0;
	public activeProduct: BehaviorSubject<number> = new BehaviorSubject<number>(
		0
	);

	ngOnInit(): void {
		this.handleScroll();
	}

	public showSlide(index: number): void {
		if (index > this.activeProduct.value) {
			this.carousel.nativeElement.scrollLeft =
				this.carousel.nativeElement.firstChild.scrollWidth * index + 16;
		} else if (index < this.activeProduct.value) {
			this.carousel.nativeElement.scrollLeft =
				this.carousel.nativeElement.firstChild.scrollWidth * -index;
		}
		this.activeProduct.next(index);
	}

	constructor(private readonly dialog: MatDialog) {}

	public get isSingleImage(): boolean {
		return this.slider.length === 1;
	}

	public hasTwoImages(): boolean {
		return this.slider.length === 2;
	}

	public get hasMoreThanTwoImages(): boolean {
		return this.slider.length > 2;
	}

	public get hasMoreThanFiveImages(): boolean {
		return this.slider.length > 5;
	}

	public showMore(index?: number): void {
		const dialog = this.dialog.open(CustomCarouselDialogComponent, {
			panelClass: 'black-background',
			minHeight: '700px',
			width: '60vw',
			maxHeight: '100vh',
		});
		dialog.componentInstance.slider = this.slider;
		dialog.componentInstance.current = index !== undefined ? index : 5;
		dialog.componentInstance.selectSlide(index !== undefined ? index : 5);
	}

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

	private handleScroll(): void {
		fromEvent(this.carousel.nativeElement, 'scroll').subscribe(() => {
			this.activeProduct.next(
				Math.round(
					this.carousel.nativeElement.scrollLeft /
						(this.carousel.nativeElement.firstChild.scrollWidth + 24)
				)
			);
		});
	}
}
