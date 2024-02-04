import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import { MakeQuoteDialogComponent } from '../dialogs/make-quote-dialog/make-quote-dialog.component';
import { SourcingRequestService } from '../../../sourcing-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { BehaviorSubject, combineLatest, delay, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user.model';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';
import { CategoriesService } from '../../../../../services/categories/categories.service';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';

enum UserActions {
	SHOW_DIALOG,
	REDIRECT_TO_QUOTATION_FORM,
}

@Component({
	selector: 'b2b-client-sourcing-request-rfq-details',
	templateUrl: './client-sourcing-request-rfq-details.component.html',
	styleUrls: ['./client-sourcing-request-rfq-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientSourcingRequestRfqDetailsComponent implements OnInit {
	public rfqData: any;
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public isNotMyRfq$: Observable<boolean>;

	public publicBuyerInfo$!: Observable<User>;

	private readonly rfqId: string;
	private userAction: UserActions = UserActions.SHOW_DIALOG;
	private isNotMyRfqSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(true);

	constructor(
		private sourcingRequestService: SourcingRequestService,
		private route: ActivatedRoute,
		private router: Router,
		private changeDetectionRef: ChangeDetectorRef,
		private userService: UserService,
		private readonly dialogService: DialogService,
		private categoryService: CategoriesService
	) {
		this.rfqId = this.route.snapshot.params['id'];
		this.isNotMyRfq$ = this.isNotMyRfqSource.asObservable();
	}

	public ngOnInit(): void {
		combineLatest([
			this.sourcingRequestService.getRfqById(this.rfqId),
			this.userService.getUser$(),
		])
			.pipe(
				filter(([rfq, user]) => !!rfq),

				first()
			)
			.subscribe(([rfq, user]) => {
				user?._id === rfq.user?._id ? this.isNotMyRfqSource.next(false) : null;
				this.rfqData = rfq;
				this.publicBuyerInfo$ = this.userService.getPublicUserInfo(
					this.rfqData?.user?._id
				);
				this.initUserActions(this.userService.getUser());

				this.changeDetectionRef.detectChanges();
			});
	}

	public quoteNow(): void {
		if (this.userAction === UserActions.SHOW_DIALOG) {
			this.openDialog();
		} else {
			this.router.navigate(['sourcing-request', 'quotation', this.rfqData._id]);
		}
	}

	private openDialog(): void {
		this.dialogService.openDialog(MakeQuoteDialogComponent, {
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
