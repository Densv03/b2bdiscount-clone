import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { B2bNgxLinkService } from '@b2b/ngx-link';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateRfqDialogComponent } from 'src/app/client/pages/client-tradebid/components/create-rfq-dialog/create-rfq-dialog.component';
import { Router } from '@angular/router';
import { UserService } from '../client-profile/services/user/user.service';
import { RfqCreatedDialogComponent } from './components/rfq-created-dialog/rfq-created-dialog.component';

@Component({
	selector: 'b2b-client-tradebid',
	templateUrl: 'client-tradebid.component.html',
	styleUrls: ['./client-tradebid.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientTradebidComponent {
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public tradebidWhatIsSafeUrl: SafeResourceUrl;

	constructor(
		domSanitizer: DomSanitizer,
		private linkService: B2bNgxLinkService,
		private readonly router: Router,
		private readonly userService: UserService,
		private dialog: MatDialog
	) {
		this.tradebidWhatIsSafeUrl = domSanitizer.bypassSecurityTrustResourceUrl(
			`assets/images/tradebid_what-is.svg`
		);
	}

	public getLink(link: string): Observable<string> {
		return this.linkService.getLink(link);
	}

	public openCreateRfqDialog(): void {
		if (!this.userService.getUser()) {
			this.router.navigate(['/auth/log-in']);
			return;
		}

		this.dialog.open(CreateRfqDialogComponent, {
			maxHeight: '90vh',
			maxWidth: '90vw',
			width: '65vw',
			panelClass: 'add-rfq-popup',
		});
	}
}
