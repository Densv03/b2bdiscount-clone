import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef, EventEmitter,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import {Category, CategoryChildren} from '../../../../shared/models/category.model';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {PlatformService} from '../../../../../../services/platform/platform.service';

@Component({
	selector: 'b2b-categories-carousel',
	templateUrl: './categories-carousel.component.html',
	styleUrls: ['./categories-carousel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesCarouselComponent implements AfterViewInit {
	@ViewChild('scrollBox', {static: true}) scrollBox: ElementRef;

	@Input() category: Category;
	@Input() products: any[];
	@Input() otherCarouselItems: any;
	@Input() title: string;
	@Input() showArrows: boolean = true;
	@Input() customCLass: string;

	public activeProduct: BehaviorSubject<number> = new BehaviorSubject<number>(
		0
	);
	public dots = [0, 1, 2, 3];
	private isScrolling = false; // Змінна для відстеження стану проскролювання
	constructor(public platformService: PlatformService) {
	}

	public get canScrollStart(): boolean {
		return this.scrollBox.nativeElement.scrollLeft === 0;
	}

	public get isUsedCustomBlock(): boolean {
		return !!this.otherCarouselItems || this.otherCarouselItems?.length > 0;
	}

	public get canScrollEnd(): boolean {
		return (
			this.scrollBox.nativeElement.scrollLeft +
			this.scrollBox.nativeElement.clientWidth +
			10 >=
			this.scrollBox.nativeElement.scrollWidth
		);
	}

	ngAfterViewInit(): void {
		this.handleScroll();
		if (this.isUsedCustomBlock) {
			this.dots = this.otherCarouselItems;
		}
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
		if (this.isScrolling && this.isUsedCustomBlock) {
			return;
		}

		this.isScrolling = true;
		const width = this.isUsedCustomBlock
			? this.scrollBox.nativeElement.children[1].scrollWidth + 1
			: this.scrollBox.nativeElement.firstChild.scrollWidth;
		const widthAndGap = width + 24;

		this.scrollBox.nativeElement.scrollLeft += widthAndGap * direction;

		setTimeout(() => {
			this.isScrolling = false;
		}, 400);
	}

	private handleScroll(): void {
		fromEvent(this.scrollBox.nativeElement, 'scroll').subscribe(() => {
			const scrollWidth = this.isUsedCustomBlock
				? this.scrollBox.nativeElement.children[1].scrollWidth
				: this.scrollBox.nativeElement.firstChild.scrollWidth;
			this.activeProduct.next(
				Math.round(this.scrollBox.nativeElement.scrollLeft / (scrollWidth + 24))
			);
		});
	}
}
