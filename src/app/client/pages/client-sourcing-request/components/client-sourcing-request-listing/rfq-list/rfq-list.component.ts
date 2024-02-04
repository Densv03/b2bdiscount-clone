import { Component, OnInit } from '@angular/core';
import { SourcingRequestService } from '../../../sourcing-request.service';
import { Observable } from 'rxjs';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';
import { Router } from '@angular/router';
import { CreateRfqDialogComponent } from '../../../components/create-rfq-dialog/create-rfq-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ClaimButtonsClassesEnum } from '../../../../../shared/enums/claim-buttons-classes.enum';
import { ApplicationSectionsEnum } from '../../../../../shared/enums/application-sections.enum';

@Component({
	selector: 'b2b-rfq-list',
	templateUrl: './rfq-list.component.html',
	styleUrls: ['./rfq-list.component.scss'],
})
export class RfqListComponent implements OnInit {
	public rfqList$: Observable<any> = this.sourcingRequestService.rfqList$;
	public rfqListIsLoaded$: Observable<boolean> =
		this.sourcingRequestService.rfqListLoadingStatus$;
	public readonly BANNER_POSITION: number = 4;
	public b2bNgxButtonTheme = B2bNgxButtonThemeEnum;
	public readonly siteSections = ApplicationSectionsEnum;
	skeletonOptions: any = {
		count: 5,
		appearance: 'line',
		loadingText: '',
		ariaLabel: '',
		animation: 'progress',
		theme: {
			height: '120px',
		},
	};

	constructor(
		private sourcingRequestService: SourcingRequestService,
		private userService: UserService,
		private router: Router,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {}

	public getActionButtonText(): string {
		if (!this.userService.isAuth()) {
			return '+ Add Product';
		} else if (this.userService.getUser()?.rootRole?.displayName === 'Buyer') {
			return '+ Add RFQ';
		} else if (
			this.userService.getUser()?.rootRole?.displayName === 'Supplier'
		) {
			return '+ Add Cargo';
		}
		return '+ Add product';
	}
}
