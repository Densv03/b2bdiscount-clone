import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentPreviewModel } from '../../../../../../../core/models/document-preview.model';
import { environment } from '../../../../../../../../environments/environment';
import { GetUrlExtension } from '../../../../../../../core/helpers/function/get-url-extension';
import { ImageExtensions } from '../../../../../../../core/add-offer/image-extensions';
import { DocumentExtensions } from '../../../../../../../core/add-offer/document-extensions';
import { DocumentModel } from '../../../../../../../core/models/document.model';
import { B2bSvgIconComponent } from '../../../../../../shared/components/svg-icon/b2b-svg-icon.component';
import { ClientOfferDocumentComponent } from '../../../../../client-offer/components/client-offer-document/client-offer-document.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
	selector: 'b2b-company-documents',
	standalone: true,
	imports: [CommonModule, B2bSvgIconComponent, MatDialogModule],
	templateUrl: './company-documents.component.html',
	styleUrl: './company-documents.component.scss',
})
export class CompanyDocumentsComponent implements OnInit {
	@Input() documents: Array<DocumentModel>;
	public modifiedDocuments$: Observable<DocumentPreviewModel[]>;
	public viewMoreMode$: Observable<'more' | 'less'>;
	private modifiedDocumentsSource: BehaviorSubject<DocumentPreviewModel[]> =
		new BehaviorSubject<DocumentPreviewModel[]>([]);
	private viewMoreModeSource: BehaviorSubject<'more' | 'less'> =
		new BehaviorSubject<'more' | 'less'>(null);

	constructor(private readonly dialog: MatDialog) {
		this.modifiedDocuments$ = this.modifiedDocumentsSource.asObservable();
		this.viewMoreMode$ = this.viewMoreModeSource.asObservable();
	}

	ngOnInit() {
		this.modifiedDocumentsSource.next([...this.generatePreviewDocumentsArr()]);
		if (this.modifiedDocumentsSource.getValue().length > 9) {
			this.viewMoreModeSource.next('more');
		}
	}
	public openDocument(document: DocumentPreviewModel) {
		this.dialog.open(ClientOfferDocumentComponent, {
			data: document,
			width: '80vw',
			height: '80vh',
		});
	}

	private generatePreviewDocumentsArr(): DocumentPreviewModel[] {
		return this.documents.map((document) => ({
			...document,
			fullPath: environment.apiUrl + document.path,
			extension: GetUrlExtension(document.path),
			isImage: ImageExtensions.includes(GetUrlExtension(document.path)),
			isDocument: DocumentExtensions.includes(GetUrlExtension(document.path)),
		}));
	}

	changeViewMoreState(viewMoreMode: 'less' | 'more') {
		this.viewMoreModeSource.next(viewMoreMode === 'less' ? 'more' : 'less');
	}
}
