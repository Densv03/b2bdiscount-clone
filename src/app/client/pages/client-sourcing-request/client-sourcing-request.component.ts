import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { B2bNgxLinkService } from '@b2b/ngx-link';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateRfqDialogComponent } from './components/create-rfq-dialog/create-rfq-dialog.component';
import { Router } from '@angular/router';
import { UserService } from '../client-profile/services/user/user.service';
import { RfqCreatedDialogComponent } from './components/rfq-created-dialog/rfq-created-dialog.component';
import { SeoService } from '../../../core/services/seo/seo.service';
import { DialogService } from '../../../core/services/dialog-service/dialog.service';

@Component({
	selector: 'b2b-client-sourcing-request',
	templateUrl: 'client-sourcing-request.component.html',
	styleUrls: ['./client-sourcing-request.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientSourcingRequestComponent implements OnInit {
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public tradebidWhatIsSafeUrl: SafeResourceUrl;

	constructor(
		domSanitizer: DomSanitizer,
		private linkService: B2bNgxLinkService,
		private readonly dialogService: DialogService,
		private seoService: SeoService
	) {
		this.tradebidWhatIsSafeUrl = domSanitizer.bypassSecurityTrustResourceUrl(
			`assets/images/tradebid_what-is.svg`
		);
	}

	ngOnInit() {
		this.seoService.setTitle('Source Wholesale Online | Globy B2B Marketplace');
		this.seoService.setDescription(
			'Request quotation for wholesale goods online or quote as a supplier. Join Globy B2B Marketplace for effortless sourcing, procurement and sales boost.'
		);
	}

	public getLink(link: string): Observable<string> {
		return this.linkService.getLink(link);
	}

	public openCreateRfqDialog(): void {
		this.dialogService.openDialog(CreateRfqDialogComponent, {
			panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
		});
	}
}
