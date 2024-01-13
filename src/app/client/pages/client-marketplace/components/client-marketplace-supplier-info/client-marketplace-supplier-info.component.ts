import { Component, Input, OnInit } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { PublicUserInfo } from '../../../../../core/models/shared/public-user-info';
import { io } from 'socket.io-client';
import { environment } from '../../../../../../environments/environment';
import { User } from '../../../../../core/models/user/user.model';
import { UserService } from '../../../client-profile/services/user/user.service';
import { Router } from '@angular/router';
import { B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
import { ClientMarketCompanyPagePhoneDialogComponent } from '../../pages/client-market-company-page/components/client-market-company-page-phone-dialog/client-market-company-page-phone-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'b2b-client-marketplace-supplier-info',
	templateUrl: './client-marketplace-supplier-info.component.html',
	styleUrls: ['./client-marketplace-supplier-info.component.scss'],
})
export class ClientMarketplaceSupplierInfoComponent implements OnInit {
	@Input() supplierInfo: PublicUserInfo;
	@Input() supplierId: string;

	public apiAddress = environment.apiUrl;
	public b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
	public b2bNgxButtonTheme: typeof B2bNgxButtonThemeEnum =
		B2bNgxButtonThemeEnum;
	public user: User;
	public token: string;
	public userIsAuth: boolean;
	private socket: any;
	private isPhoneNumberVisible = false;

	constructor(
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly dialog: MatDialog
	) {
		this.user = this.userService.getUser();
		this.userIsAuth = this.userService.isAuth();
	}

	ngOnInit(): void {
		this.userService.getToken$().subscribe((token) => {
			this.token = token;
			this.openConnection(this.token);
		});
	}

	public goTo(link: string) {
		this.router.navigate([link]);
	}

	public openChat(event: MouseEvent): void {
		event.stopPropagation();

		if (this.supplierInfo?._id === this.user?._id) {
			return;
		}

		if (!this.userIsAuth) {
			this.router.navigate(['/auth/log-in']);
		} else {
			this.openConnection(this.token);
			this.socket.emit('start_users_chat', {
				userId: this.supplierId,
				typeRoom: 'users',
			});

			this.socket.on('users_chat_info', (data: any) => {
				this.goTo('profile/your-workspace/b2bmarket/chat/' + data._id);
			});
		}
	}

	public openPhoneModal(): void {
		this.dialog
			.open(ClientMarketCompanyPagePhoneDialogComponent, {
				data: {
					dialCode: this.supplierInfo.dialCode,
					phoneNumber: this.supplierInfo.number,
					isPhoneVisible: this.isPhoneNumberVisible,
				},
			})
			.afterClosed()
			.subscribe((data) => {
				this.isPhoneNumberVisible = data;
			});
	}

	private openConnection(token: string): void {
		if (this.socket) {
			this.socket.disconnect();
		}

		this.socket = io(environment.apiUrl, {
			path: '/chat',
			auth: {
				token,
			},
		});
	}
}
