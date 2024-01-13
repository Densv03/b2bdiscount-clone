import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[b2bAutoHeight]',
})
export class AutoHeightDirective implements AfterViewInit {
	constructor(
		private el: ElementRef,
		private renderer: Renderer2
	) {}

	ngAfterViewInit() {
		const finalHeight = this.el.nativeElement.offsetHeight;
		this.renderer.setStyle(this.el.nativeElement, 'height', finalHeight + 'px');
	}
}
