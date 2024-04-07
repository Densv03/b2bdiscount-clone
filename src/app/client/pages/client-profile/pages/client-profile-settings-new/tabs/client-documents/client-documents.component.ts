import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {B2bNgxFileModule} from '@b2b/ngx-file';
import {MatIcon} from '@angular/material/icon';
import {ClientDocumentsService} from './client-documents.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {B2bNgxButtonModule} from '@b2b/ngx-button';
import {UntilDestroy} from '@ngneat/until-destroy';
import {NgxInputVersionEnum} from '../../../../../../../../../projects/ngx-input/src/lib/enum/ngx-input-version.enum';
import {B2bNgxLogoModule} from "@b2b/ngx-logo";
import {
	ClientProfileDefaultModalComponent
} from "../../component/client-profile-default-modal/client-profile-default-modal.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DefaultModalData} from "../../component/client-profile-default-modal/client-profile-default-modal.interface";
import {firstValueFrom} from "rxjs";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@UntilDestroy()
@Component({
	selector: 'b2b-client-documents',
	standalone: true,
	imports: [
		B2bNgxFileModule,
		MatIcon,
		ReactiveFormsModule,
		MatButton,
		B2bNgxButtonModule,
		B2bNgxLogoModule,
		MatIconButton,
		MatProgressSpinner,
	],
	templateUrl: './client-documents.component.html',
	styleUrl: './client-documents.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDocumentsComponent extends ClientDocumentsService {
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
	private matDialog = inject(MatDialog)

	constructor(private cdr: ChangeDetectorRef) {
		super();
	}

	formChange($event: Event) {
		const documents = Array.from(($event.target as any).files) as File[];
		this.upload(documents);
		this.cdr.detectChanges();
	}

	public openDeletePopup(index: number) {
		this.matDialog.open(ClientProfileDefaultModalComponent<boolean>, {
			data: {
				title: 'Are you sure you want to delete the document?',
				label: ''
			},
			panelClass: 'app-full-bleed-dialog',
			backdropClass: 'modal__backdrop'
		} as MatDialogConfig<DefaultModalData<boolean>>).afterClosed().subscribe(res => {
			if (res) {
				this.delete(index).subscribe(async (res) => {
					const company = await firstValueFrom(this.sourcingRequestService.getCompanyData());
					this.authService.updateCompany(company);
					this.cdr.detectChanges();
				});
			}
		})
	}
}
