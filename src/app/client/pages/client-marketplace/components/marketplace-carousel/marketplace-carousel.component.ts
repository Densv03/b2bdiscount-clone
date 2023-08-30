import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { B2bNgxLinkService } from "@b2b/ngx-link";

@Component({
	selector: "b2b-marketplace-carousel",
	templateUrl: "./marketplace-carousel.component.html",
	styleUrls: ["./marketplace-carousel.component.scss"],
})
export class MarketplaceCarouselComponent implements OnChanges, AfterViewInit {
	@ViewChild("carousel") public readonly carousel: any;

	@Input() public readonly options: any[];
	@Input() public readonly link: string;

	@Input() public readonly user: any;

	public readonly optionsToDisplay: any[];

	constructor(public readonly b2bNgxLinkService: B2bNgxLinkService) {
		this.optionsToDisplay = [];
	}

	ngAfterViewInit() {
		const translateX = Math.ceil(this.optionsToDisplay.length / 4) * 396;
		this.carousel.nativeElement.style.transform = `translateX(-${translateX}px)`;
	}

	ngOnChanges(changes: SimpleChanges) {
		if (!changes['options']) {
			return;
		}

		this.optionsToDisplay.splice(0, this.optionsToDisplay.length);

		const { currentValue } = changes['options'];

		// shuffle(currentValue);
		const updatedValue = [...currentValue.slice(7, 10), ...currentValue.slice(0, 7)];

		const optionsToDisplay = Math.round(10 / updatedValue.length);

		const arraysCount = optionsToDisplay < 1 ? 1 : optionsToDisplay;

		const newOptionsToDisplay = new Array(arraysCount).fill(null).reduce((array, _) => [...array, ...updatedValue], []);

		this.optionsToDisplay.push(...newOptionsToDisplay);
	}

	public moveCarousel(shiftType: "left" | "right") {
		const { transform } = this.carousel.nativeElement.style;

		const translateX = transform.substring(transform.lastIndexOf("(") + 1, transform.lastIndexOf("px"));
		const shiftValue = shiftType === "left" ? 396 : -396;
		const newTranslateX = Number.parseInt(translateX) - shiftValue;

		this.carousel.nativeElement.style.transition = `0s`;
		this.carousel.nativeElement.style.transform = `translateX(${newTranslateX}px)`;

		const leftIndex = this.options.findIndex((x) => x._id === this.optionsToDisplay[0]._id);
		const rightIndex = this.options.findIndex(
			(x) => x._id === this.optionsToDisplay[this.optionsToDisplay.length - 1]._id
		);

		if (shiftType === "left") {
			const index = leftIndex - 1 <= 0 ? this.options.length : leftIndex;
			this.optionsToDisplay.unshift(this.options[index - 1]);
			this.optionsToDisplay.pop();
		} else {
			const index = rightIndex + 1 === this.options.length ? -1 : rightIndex;
			this.optionsToDisplay.push(this.options[index + 1]);
			this.optionsToDisplay.shift();
		}

		setTimeout(() => {
			this.carousel.nativeElement.style.transition = `.3s`;
			this.carousel.nativeElement.style.transform = `translateX(${translateX}px)`;
		}, 0);
	}

	processOfferClick() {
	}
}
