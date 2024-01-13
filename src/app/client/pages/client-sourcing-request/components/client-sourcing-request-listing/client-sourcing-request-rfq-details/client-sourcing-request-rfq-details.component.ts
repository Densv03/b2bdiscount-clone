import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MakeQuoteDialogComponent } from '../dialogs/make-quote-dialog/make-quote-dialog.component';
import { SourcingRequestService } from '../../../sourcing-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user.model';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';

enum UserActions {
	SHOW_DIALOG,
	REDIRECT_TO_QUOTATION_FORM,
}

@Component({
	selector: 'b2b-client-sourcing-request-rfq-details',
	templateUrl: './client-sourcing-request-rfq-details.component.html',
	styleUrls: ['./client-sourcing-request-rfq-details.component.scss'],
})
export class ClientSourcingRequestRfqDetailsComponent implements OnInit {
	public rfqData: any;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public showButton: boolean = true;

	public showBuyerInfo: boolean = true;
	public user$!: Observable<User>;

	private readonly rfqId: string;
	private userAction: UserActions = UserActions.SHOW_DIALOG;

	constructor(
		private dialog: MatDialog,
		private sourcingRequestService: SourcingRequestService,
		private route: ActivatedRoute,
		private router: Router,
		private changeDetectionRef: ChangeDetectorRef,
		private userService: UserService
	) {
		this.rfqId = this.route.snapshot.params['id'];
	}

	public ngOnInit(): void {
		this.sourcingRequestService
			.getRfqById(this.rfqId)
			.pipe(first())
			.subscribe((data: any) => {
				this.userService.getUser()?.fullName === data.user?.fullName
					? (this.showButton = false)
					: null;
				this.rfqData = data;
				this.user$ = this.userService.getPublicUserInfo(
					this.rfqData?.user?._id
				);
				this.initUserActions(this.userService.getUser());

				this.showBuyerInfo = this.isContactsOpen(
					data,
					this.userService.getUser()?._id
				);

				this.changeDetectionRef.detectChanges();
			});
	}

	public quoteNow(): void {
		if (!this.userService.getUser()) {
			localStorage.setItem('blocked-route', this.router.url);
			this.router.navigate(['/auth/log-in']);
		} else if (this.userAction === UserActions.SHOW_DIALOG) {
			this.openDialog();
		} else {
			this.router.navigate(['sourcing-request', 'quotation', this.rfqData._id]);
		}
	}

	private openDialog(): void {
		this.dialog.open(MakeQuoteDialogComponent, {
			width: '560px',
			height: '280px',
		});
	}

	private isContactsOpen(rfq: any, userId: string): boolean {
		return rfq.openedFor?.includes(userId);
	}

	private initUserActions(user: User): void {
		this.userAction = user?.rfqQuotes
			? UserActions.REDIRECT_TO_QUOTATION_FORM
			: UserActions.SHOW_DIALOG;
	}
}
