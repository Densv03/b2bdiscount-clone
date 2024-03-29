import { Injectable } from '@angular/core';
import {
	MatDialog,
	MatDialogConfig,
	MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../../../client/pages/client-profile/services/user/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	constructor(
		private readonly dialog: MatDialog,
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly hotToastrService: HotToastService,
	) {
	}

	public openDialog(
		dialogComponent: ComponentType<unknown>,
		dialogConfig: MatDialogConfig<any>,
	): MatDialogRef<unknown, null> {
		if (this.userService.getUser()) {
			return this.openAuthedDialog(dialogComponent, dialogConfig);
		} else {
			this.notifyWhenUserNotLoggedIn();
			return null;
		}
	}

	public handleCustomDialogAndRole(
		url: string,
		role: string,
		alternateUrl: string,
		dialogComponent: ComponentType<unknown>,
		dialogConfig: MatDialogConfig<any>,
	): void {
		if (!url.length) {
			const user = this.userService.getUser();
			if (user) {
				user.rootRole.name === role
					? this.openDialog(dialogComponent, dialogConfig)
					: this.router.navigate([alternateUrl]);
			} else {
				this.notifyWhenUserNotLoggedIn();
			}
		}
	}

	public notifyWhenUserNotLoggedIn(): void {
		this.hotToastrService.info(`Please log in before using this page`, {
			style: {
				border: '2px solid #005dff',
				padding: '20px 15px',
			},
			autoClose: true,
			dismissible: true,
		});
		localStorage.setItem('blocked-route', this.router.url);
		this.router.navigate(['/auth/log-in']);
	}

	private openAuthedDialog(
		dialogComponent: ComponentType<unknown>,
		dialogConfig: MatDialogConfig<any>,
	): MatDialogRef<unknown> {
		return this.dialog.open(dialogComponent, dialogConfig);
	}
}
