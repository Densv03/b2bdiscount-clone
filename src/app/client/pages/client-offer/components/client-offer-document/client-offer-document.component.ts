import { AfterViewInit, Component, Inject } from '@angular/core';
import { DocumentPreviewModel } from '../../../../../core/models/document-preview.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'b2b-client-offer-document',
	templateUrl: './client-offer-document.component.html',
	styleUrls: ['./client-offer-document.component.scss'],
})
export class ClientOfferDocumentComponent {
	public isPath: boolean;
	constructor(@Inject(MAT_DIALOG_DATA) public data: DocumentPreviewModel) {
		this.isPath = !data.fullPath.includes('undefined');
	}
}
