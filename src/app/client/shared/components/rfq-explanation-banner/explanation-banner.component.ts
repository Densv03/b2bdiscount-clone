import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RfqExplanationModalComponent } from '../../../pages/client-sourcing-request/rfq-explanation-modal/rfq-explanation-modal.component';

@Component({
	selector: 'b2b-explanation-banner',
	templateUrl: './explanation-banner.component.html',
	styleUrls: ['./explanation-banner.component.scss'],
})
export class ExplanationBannerComponent {
	@Input() title: string;
	@Input() subtitle: string;
	@Input() explanationModal: any;

	constructor(private readonly matDialog: MatDialog) {}

	showExplanationModal(): void {
		this.matDialog.open(this.explanationModal);
	}
}
