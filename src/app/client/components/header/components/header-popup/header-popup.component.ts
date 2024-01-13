import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core';
import {
	animate,
	keyframes,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';
import { PopupTypeEnum } from '../../types/popup-type.emun';
import { HeaderService } from '../../header.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClientContactUsModalComponent } from '../../../client-contact-us-modal/client-contact-us-modal.component';

@Component({
	selector: 'b2b-header-popup',
	templateUrl: './header-popup.component.html',
	styleUrls: ['./header-popup.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('expandHeight', [
			transition(':enter', [
				animate(
					'300ms',
					keyframes([style({ height: '0' }), style({ height: '*' })])
				),
			]),
		]),
	],
})
export class HeaderPopupComponent implements OnInit {
	@Input() popupType: PopupTypeEnum;
	@Input() burgerPopup = false;
	public readonly popupTypeEnum: typeof PopupTypeEnum = PopupTypeEnum;
	public animationState: string = 'in';

	constructor(
		private readonly headerService: HeaderService,
		private readonly router: Router,
		private readonly dialog: MatDialog
	) {}

	ngOnInit() {
		this.animationState = 'in';
	}
	public contactUs(): void {
		this.closeHeader();
		this.dialog.open(ClientContactUsModalComponent);
	}
	public processLink(link: string, openInNewWindow = false): void {
		this.closeHeader();
		if (openInNewWindow) {
			window.open(link, '_blank');
		} else {
			this.router.navigate([link]);
		}
	}
	public closeHeader(): void {
		this.headerService.closeHeader();
	}
}
