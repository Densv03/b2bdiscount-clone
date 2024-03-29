import {
	ApplicationRef,
	ChangeDetectorRef,
	ComponentFactoryResolver,
	ComponentRef,
	Inject,
	Injectable,
	Injector,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipTypeEnum } from './types/tooltip-type.enum';
import { HeaderService } from './header.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TooltipService {
	private tooltipComponentRef?: ComponentRef<any>;
	private activeTooltipSource: BehaviorSubject<TooltipTypeEnum> =
		new BehaviorSubject(null);
	constructor(
		@Inject(DOCUMENT) private document: Document,
		private componentFactoryResolver: ComponentFactoryResolver,
		private readonly headerService: HeaderService,
		private injector: Injector,
		private appRef: ApplicationRef
	) {}
	get tooltipInstance(): ComponentRef<any> {
		return this.tooltipComponentRef;
	}

	get activeTooltip$(): Observable<TooltipTypeEnum> {
		return this.activeTooltipSource.asObservable();
	}
	showTooltip(): void {
		if (!this.tooltipComponentRef) {
			// this.headerService.updateToolTipState(true);
			const tooltipComponentFactory =
				this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
			this.tooltipComponentRef = tooltipComponentFactory.create(this.injector);
			this.appRef.attachView(this.tooltipComponentRef.hostView);
			this.document.body.appendChild(
				this.tooltipComponentRef.location.nativeElement
			);
			this.tooltipComponentRef.hostView.detectChanges();
		}
	}

	public setTooltipComponentProperties(
		type: TooltipTypeEnum,
		coordinatesObj: any
	) {
		if (!this.tooltipComponentRef) {
			return;
		}
		this.activeTooltipSource.next(type);
		this.tooltipComponentRef.instance.tooltipType = type;
		const { left, right, bottom } = coordinatesObj;
		this.tooltipComponentRef.instance.left = (right - left) / 2 + left - 100;
		this.tooltipComponentRef.instance.top = bottom;
	}
	hideTooltip(): void {
		if (this.tooltipComponentRef) {
			this.appRef.detachView(this.tooltipComponentRef.hostView);
			this.tooltipComponentRef.destroy();
			this.tooltipComponentRef = undefined;
			this.headerService.updateToolTipState(false);
			this.activeTooltipSource.next(null);
		}
	}
}
