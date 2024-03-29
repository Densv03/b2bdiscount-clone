import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf, SlicePipe } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { DocumentPreviewModel } from '../../../../../../../core/models/document-preview.model';

@Component({
	selector: 'b2b-company-certificates',
	standalone: true,
	imports: [AsyncPipe, NgIf, SlicePipe],
	templateUrl: './company-certificates.component.html',
	styleUrl: './company-certificates.component.scss',
})
export class CompanyCertificatesComponent implements OnInit {
	public viewMoreMode$: Observable<'more' | 'less'>;
	private viewMoreModeSource: BehaviorSubject<'more' | 'less'> =
		new BehaviorSubject<'more' | 'less'>(null);

	constructor() {
		this.viewMoreMode$ = this.viewMoreModeSource.asObservable();
	}

	ngOnInit() {
		this.viewMoreModeSource.next('more');
	}

	changeViewMoreState(viewMoreMode: 'less' | 'more') {
		this.viewMoreModeSource.next(viewMoreMode === 'less' ? 'more' : 'less');
	}
}
