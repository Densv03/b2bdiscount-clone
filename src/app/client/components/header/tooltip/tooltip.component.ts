import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TooltipService } from '../tooltip.service';
import { TooltipTypeEnum } from '../types/tooltip-type.enum';
import { HeaderService } from '../header.service';

@Component({
	selector: 'b2b-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
	@Input() tooltipType: any;
	@Input() left = 0;
	@Input() top = 0;
	tooltipTypeEnum = TooltipTypeEnum;
	constructor(private tooltipService: TooltipService) {}
	@HostListener('mouseleave')
	onMouseOut(): void {
		this.tooltipService.hideTooltip();
	}

	public getAdditionalLeftPadding(): number {
		switch (this.tooltipType) {
			case TooltipTypeEnum.SOURCING_REQUEST:
				return 100;
			default:
				return 0;
		}
	}
}
