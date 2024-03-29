import {inject, Injectable, signal} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SourcingRequestService} from '../../../../../client-sourcing-request/sourcing-request.service';
import {AuthService} from '../../../../../../../auth/services/auth/auth.service';
import {getFormData} from '../../../../../../../core/helpers/function/get-form-data';
import {first} from 'rxjs/operators';
import {HotToastService} from '@ngneat/hot-toast';
import {uploadToastMessages} from './client-documents.constants';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Injectable({
	providedIn: 'root',
})
export class ClientDocumentsService {
	sourcingRequestService = inject(SourcingRequestService);
	authService = inject(AuthService);
	hotToastService = inject(HotToastService);
	fb = inject(FormBuilder);

	loading = signal(false);

	form = this.fb.group(
		{
			documents: []
		}
	)

	get company() {
		return this.authService.company;
	}

	get documents() {
		return this.company?.documents || [];
	}

	public upload(documents: File[]) {
		const formData = getFormData({companyName: this.company.companyName, documents, uploadedDocs: this.documents});
		this.updateDocuments(formData);
	}


	delete(index: number) {
		const {_id} = this.documents[index];
		return this.sourcingRequestService.deleteCompanyDocuments(this.authService.company._id, [_id])
			.pipe(first(), this.hotToastService.observe(uploadToastMessages), untilDestroyed(this))
	}

	private updateDocuments(body: FormData) {
		this.loading.set(true);
		try {
			this.sourcingRequestService
				.updateCompanyInfo(body)
				.pipe(first(), this.hotToastService.observe(uploadToastMessages), untilDestroyed(this))
				.subscribe((company) => {
					this.loading.set(false);
					this.authService.updateCompany(company);
				});
		} catch (e) {
			console.error(e);
			this.loading.set(false);
		}
	}
}
