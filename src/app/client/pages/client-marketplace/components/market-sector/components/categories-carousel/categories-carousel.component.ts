import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	ViewChild,
} from '@angular/core';
import { Category } from '../../../../shared/models/category.model';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { PlatformService } from '../../../../../../services/platform/platform.service';

@Component({
	selector: 'b2b-categories-carousel',
	templateUrl: './categories-carousel.component.html',
	styleUrls: ['./categories-carousel.component.scss'],
})
export class CategoriesCarouselComponent implements AfterViewInit {
	@ViewChild('scrollBox', { static: true }) scrollBox: ElementRef;
	@Input() category: Category;
	@Input() products: [];
	@Input() title: string;
	@Input() showArrows: boolean = true;

	public activeProduct: BehaviorSubject<number> = new BehaviorSubject<number>(
		0
	);

	constructor(public platformService: PlatformService) {}

	public get canScrollStart(): boolean {
		return this.scrollBox.nativeElement.scrollLeft === 0;
	}

	public get canScrollEnd(): boolean {
		return (
			this.scrollBox.nativeElement.scrollLeft +
				this.scrollBox.nativeElement.clientWidth ===
			this.scrollBox.nativeElement.scrollWidth
		);
	}

	ngAfterViewInit(): void {
		this.handleScroll();
	}

	public showSlide(index: number): void {
		if (index > this.activeProduct.value) {
			this.scrollBox.nativeElement.scrollLeft =
				this.scrollBox.nativeElement.firstChild.scrollWidth + 24 * index;
		} else if (index < this.activeProduct.value) {
			this.scrollBox.nativeElement.scrollLeft =
				this.scrollBox.nativeElement.firstChild.scrollWidth + 24 * -index;
		}
		this.activeProduct.next(index);
	}

	public scrollTo(direction: number): void {
		this.scrollBox.nativeElement.scrollLeft +=
			(this.scrollBox.nativeElement.firstChild.scrollWidth + 24) * direction;
	}

	private handleScroll(): void {
		fromEvent(this.scrollBox.nativeElement, 'scroll').subscribe(() => {
			this.activeProduct.next(
				Math.round(
					this.scrollBox.nativeElement.scrollLeft /
						(this.scrollBox.nativeElement.firstChild.scrollWidth + 24)
				)
			);
		});
	}
}
