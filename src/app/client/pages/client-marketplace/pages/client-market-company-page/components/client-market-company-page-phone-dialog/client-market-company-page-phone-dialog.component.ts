import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../../../../../client-profile/services/user/user.service';
import { User } from '../../../../../../../core/models/user/user.model';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { Router } from '@angular/router';

@Component({
	selector: 'b2b-client-market-company-page-phone-dialog',
	templateUrl: './client-market-company-page-phone-dialog.component.html',
	styleUrls: ['./client-market-company-page-phone-dialog.component.scss'],
})
export class ClientMarketCompanyPagePhoneDialogComponent {
	public user$: Observable<User> = this.userService.getUser$();
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	private isPhoneVisibleSource: BehaviorSubject<boolean> =
		new BehaviorSubject<boolean>(!!this.data.isPhoneVisible);

	public get isPhoneVisible$(): Observable<boolean> {
		return this.isPhoneVisibleSource.asObservable();
	}

	constructor(
		@Inject(MAT_DIALOG_DATA)
		public readonly data: {
			phoneNumber: string;
			dialCode: string;
			isPhoneVisible?: boolean;
			user: string;
		},
		private readonly router: Router,
		private readonly userService: UserService,
		private readonly dialogRef: MatDialogRef<ClientMarketCompanyPagePhoneDialogComponent>
	) {}

	public toggleIsPhoneVisible(): void {
		this.isPhoneVisibleSource.next(true);
	}

	public closeModal(): void {
		this.dialogRef.close(this.isPhoneVisibleSource.getValue());
	}

	public navigateToLogin(): void {
		localStorage.setItem('blocked-route', this.router.url);
		this.router.navigate(['/auth/log-in']);
	}

	public getPhone(): string {
		return this.data.dialCode
			? this.data.dialCode + this.data.phoneNumber
			: this.data.phoneNumber;
	}
}
