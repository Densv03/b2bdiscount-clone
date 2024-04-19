import { Component, Input, ViewChild, ElementRef, inject, ChangeDetectorRef } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { NgClass } from "@angular/common";
import { environment } from "../../../../../../environments/environment";
import { B2bNgxIconModule } from "@b2b/ngx-icon";

@Component({
	selector: 'b2b-client-marketplace-images-carousel',
	standalone: true,
	templateUrl: './client-marketplace-images-carousel.component.html',
	imports: [
		MatIcon,
		NgClass,
		B2bNgxIconModule
	],
	styleUrls: ['./client-marketplace-images-carousel.component.scss']
})
export class ClientMarketplaceImagesCarouselComponent {
	@Input() images: any[] = [];
	@ViewChild('carousel', { static: true }) carousel: ElementRef;

	private cdr = inject(ChangeDetectorRef);

	current: number = 0;

	public previousSlide(): void {
		if (this.current === 0) {
			// this.current = this.images.length;
			return;
		}
		this.current--;
		this.updateCarousel();
	}

	public nextSlide(): void {
		if (this.current === this.images.length - 1) {
			// this.current = -1;
			return;
		}
		this.current++;
		this.updateCarousel();

	}

	public getImgUrl(imgUrl: string): string {
		const apiUrl = environment.apiUrl.includes('staging')
			? 'https://api.globy.com/'
			: environment.apiUrl;
		return `${apiUrl}${imgUrl}`
	}

	private updateCarousel(): void {
		this.carousel.nativeElement.style.transform = `translateX(${100 * this.current * -1}%)`;
	}
}
