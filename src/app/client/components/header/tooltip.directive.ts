import {
	ApplicationRef,
	ChangeDetectorRef,
	ComponentFactoryResolver,
	ComponentRef,
	Directive,
	ElementRef,
	HostListener,
	Inject,
	Injector,
	Input,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipService } from './tooltip.service';
import { TooltipTypeEnum } from './types/tooltip-type.enum';

@Directive({
	selector: '[b2bTooltip]',
})
export class TooltipDirective {
	@Input() tooltipType: TooltipTypeEnum;
	@Input() isMobile = false;

	private tooltipComponent?: ComponentRef<any>;

	constructor(
		private elementRef: ElementRef,
		private tooltipService: TooltipService
	) {}

	@HostListener('mouseenter')
	onMouseEnter(): void {
		if (this.tooltipComponent || this.isMobile) {
			return;
		}
		this.tooltipService.showTooltip();
		this.tooltipService.setTooltipComponentProperties(
			this.tooltipType,
			this.elementRef.nativeElement.getBoundingClientRect()
		);
	}

	@HostListener('mouseleave', ['$event'])
	onMouseLeave(event: MouseEvent): void {
		const isLeavingTrigger = this.elementRef.nativeElement.contains(
			event.relatedTarget as Node
		);
		const isLeavingTooltip =
			this.tooltipService.tooltipInstance &&
			this.tooltipService.tooltipInstance.location.nativeElement.contains(
				event.relatedTarget as Node
			);
		if (!isLeavingTrigger && !isLeavingTooltip) {
			this.tooltipService.hideTooltip();
		}
	}
}
