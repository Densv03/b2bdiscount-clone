import { Component, Input, OnInit } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { PublicCompanyInfoModel } from '../../../../../../../core/models/public-company-info.model';
// @ts-ignore
import { getName } from 'country-list';
import { UserService } from '../../../../../client-profile/services/user/user.service';
import { User } from '../../../../../../../core/models/user/user.model';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { environment } from '../../../../../../../../environments/environment';
import { websiteProtocolRegex } from '../../../../../../../core/helpers/validator/site-link';
import { MatDialog } from '@angular/material/dialog';
import { ClientMarketCompanyPagePhoneDialogComponent } from '../client-market-company-page-phone-dialog/client-market-company-page-phone-dialog.component';
import { Observable, of } from 'rxjs';
import { PublicUserInfo } from '../../../../../../../core/models/shared/public-user-info';
import { map } from 'rxjs/operators';
import { HotToastService } from '@ngneat/hot-toast';
import { DialogService } from '../../../../../../../core/services/dialog-service/dialog.service';

@Component({
	selector: 'b2b-company-contact-card',
	templateUrl: './company-contact-card.component.html',
	styleUrls: ['./company-contact-card.component.scss'],
})
export class CompanyContactCardComponent implements OnInit {
	@Input() companyInfo: PublicCompanyInfoModel;

	public user: User;
	public supplierName$: Observable<string>;
	public supplierLogo$: Observable<string>;
	public userIsAuth: boolean;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;

	private socket: any;
	private token: string;
	private isPhoneNumberVisible = false;

	constructor(
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly dialogService: DialogService
	) {
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.user = this.userService.getUser();
		this.userIsAuth = this.userService.isAuth();
	}

	ngOnInit(): void {
		this.userService
			.getPublicUserInfo(this.companyInfo.user)
			.subscribe(console.log);
		this.supplierName$ = this.userService
			.getPublicUserInfo(this.companyInfo.user)
			.pipe(map((info: PublicUserInfo) => info.fullName));
		this.supplierLogo$ = this.userService
			.getPublicUserInfo(this.companyInfo.user)
			.pipe(map((info: PublicUserInfo) => info.logo));
		this.userService.getToken$().subscribe((token) => {
			this.token = token;
			this.openConnection(this.token);
		});
	}

	public openChat(event: MouseEvent): void {
		event.stopPropagation();

		if (!this.userIsAuth) {
			this.dialogService.notifyWhenUserNotLoggedIn();
		} else {
			this.openConnection(this.token);
			this.socket.emit('start_users_chat', {
				userId: this.companyInfo.user,
				typeRoom: 'users',
			});

			this.socket.on('users_chat_info', (data: any) => {
				this.goTo('profile/your-workspace/b2bmarket/chat/' + data._id);
			});
		}
	}

	public goTo(link: string) {
		this.router.navigate([link]);
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

	protected readonly environment = environment;
}
