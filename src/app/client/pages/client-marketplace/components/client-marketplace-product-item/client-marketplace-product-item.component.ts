import { Component, Input, OnInit } from '@angular/core';
import { B2bNgxLinkService } from '@b2b/ngx-link';
import { getName } from 'country-list';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { UserService } from '../../../client-profile/services/user/user.service';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { io } from 'socket.io-client';
import { environment } from '../../../../../../environments/environment';
import { combineLatest, mergeMap, Observable, of } from 'rxjs';
import { AuthService } from '../../../../../auth/services/auth/auth.service';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { User } from '../../../../../core/models/user/user.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContactSupplierFormDialogComponent } from 'src/app/client/pages/client-marketplace/components/contact-supplier-form-dialog/contact-supplier-form-dialog.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SupplierContactSuccessDialogComponent } from '../supplier-contact-success-dialog/supplier-contact-success-dialog.component';
import { checkSerialNumber } from '../../../../../core/helpers/function/check-serial-number';
import { Photo } from '../../../../../core/models/photo.model';
import { DialogService } from '../../../../../core/services/dialog-service/dialog.service';

const URLS_WITHOUT_CHATS = ['supplier-listing', '/products'];

@UntilDestroy()
@Component({
	selector: 'b2b-client-marketplace-product-item',
	templateUrl: './client-marketplace-product-item.component.html',
	styleUrls: ['./client-marketplace-product-item.component.scss'],
})
export class ClientMarketplaceProductItemComponent implements OnInit {
	@Input() product: any;
	@Input() logoLink: string;
	@Input() isListing: boolean = false;
	public params: Params;
	public chatPossibilityIsHidden: boolean = false;
	public buttonTitle$: Observable<string> = of('');
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum =
		B2bNgxButtonThemeEnum;
	public readonly user$: Observable<User> = this.userService.getUser$();
	public productPhoto: string[];
	private _socket: any;
	private token: string = '';

	constructor(
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly userService: UserService,
		private readonly router: Router,
		private readonly authService: AuthService,
		private readonly dialog: MatDialog,
		private readonly activatedRoute: ActivatedRoute,
		private readonly dialogService: DialogService
	) {}

	public ngOnInit(): void {
		this.productPhoto =
			this.product.photos.every((photo: any) => 'serialNumber' in photo) &&
			checkSerialNumber(this.product.photos)
				? this.product.photos.reduce((acc: any[], val: any) => {
						acc[val?.serialNumber] = val?.lg;
						return acc.filter((el) => !!el);
					}, [])
				: this.product.photos
						.filter((el: Photo) => el.lg)
						.map((el: Photo) => el.lg);

		combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams])
			.pipe(untilDestroyed(this))
			.subscribe(([params, queryParams]) => {
				if (this.router.url.includes('/listing')) {
					this.params = {
						...queryParams,
						companyId: params['companyId'] || null,
						category: params['category'] || null,
						childCategory: params['childCategory'] || null,
					};
				}
			});

		this.buttonTitle$ = this.user$.pipe(
			startWith(this.userService.getUser()),
			map((user) => {
				if (!user) {
					return 'Contact Supplier';
				}
				const userHasChatStarted = this.product.chatStarted.includes(user._id);
				return userHasChatStarted ? 'Open Chat' : 'Contact Supplier';
			})
		);

		this.userService.getToken$().subscribe((token) => {
			this.token = token;
		});

		this.checkCardForOpenChatPossibility();
	}

	public getCompanyLogo(): string {
		if (this.logoLink) {
			return this.logoLink;
		} else if (this.product.company[0] && this.product.company[0].logo) {
			return this.product.company[0].logo.path;
		}
		return 'plug';
	}

	public cutString(title: string, maxSymbolsAmount: number): string {
		return title?.length > maxSymbolsAmount
			? `${title.slice(0, maxSymbolsAmount)}...`
			: title;
	}

	public cutDescription(description: string): string {
		if (description) {
			const words = description.split(' ');

			// Check if the word count is greater than 30
			if (words.length > 22) {
				// Join the first 30 words and check if the last word ends with a comma
				const lastWord = words[21];
				const truncatedDescription = words.slice(0, 22).join(' ');

				if (
					lastWord.endsWith(',') ||
					lastWord.endsWith('?') ||
					lastWord.endsWith('!')
				) {
					// If the last word ends with a comma, remove the comma before adding an ellipsis
					return truncatedDescription.slice(0, -1) + '...';
				} else {
					// If the last word doesn't end with a comma, simply add an ellipsis
					return truncatedDescription + '...';
				}
			} else {
				// If the word count is 30 or less, return the original description
				return description;
			}
		} else {
			return '';
		}
	}

	public getCountryName(countryCode: string): string {
		if (!countryCode) {
			return '';
		}
		return getName(countryCode);
	}

	public goTo(link: string) {
		this.router.navigate([link]);
	}

	public openChat(event: MouseEvent): void {
		event.stopPropagation();

		if (this.product.user === this.userService.getUser()?._id) {
			this.goTo(
				'/b2bmarket/listing/products/' + this.product.path || this.product._id
			);
			return;
		}

		if (this.product.chatStarted.includes(this.userService.getUser()?._id)) {
			this.chatStart(true);
		} else {
			const dialog = this.dialogService.openDialog(
				ContactSupplierFormDialogComponent,
				{
					data: {
						product: this.product,
					},
					panelClass: 'contact-supplier-form-dialog',
				}
			);

			if (dialog) {
				let successDialogRef: MatDialogRef<SupplierContactSuccessDialogComponent> =
					null;
				let contactSupplierResult: { [key: string]: any } | null = null;
				dialog
					.afterClosed()
					.pipe(
						filter((result) => !!result),
						untilDestroyed(this),
						tap((result) => (contactSupplierResult = result)),
						tap(
							() =>
								(successDialogRef = this.dialog.open(
									SupplierContactSuccessDialogComponent,
									{ panelClass: 'rfq-created-pop-up' }
								))
						),
						mergeMap(() => {
							return successDialogRef.afterClosed();
						})
					)
					.subscribe(({ openChat }) => {
						this.chatStart(openChat);
						this._socket.emit('message', {
							type: 'text',
							body: contactSupplierResult['moreInformation'],
							userId: this.product.user,
							productId: this.product._id,
							typeRoom: 'product',
						});
					});
			}
		}
	}

	private checkCardForOpenChatPossibility(): void {
		URLS_WITHOUT_CHATS.forEach((url) => {
			if (this.router.url.includes(url)) {
				console.log(this.router.url, url);
				this.chatPossibilityIsHidden = true;
			}
		});
	}

	private openConnection(token: string): void {
		if (this._socket) {
			this._socket.disconnect();
		}

		this._socket = io(environment.apiUrl, {
			path: '/chat',
			auth: {
				token,
			},
		});
	}

	private chatStart(redirectToChat?: boolean): void {
		this.openConnection(this.token);
		this._socket.emit('start_chat', {
			userId: this.product.user,
			productId: this.product._id,
			typeRoom: 'product',
		});

		this._socket.on('chat_info', (data: any) => {
			redirectToChat
				? this.goTo('profile/your-workspace/b2bmarket/chat/' + data._id)
				: null;
		});
	}

	public getIdForContactSupplierButton$(): Observable<string> {
		if (this.product.user === this.userService.getUser()?._id) {
			return of('');
		}

		return this.authService.user$.pipe(
			map((user) => {
				return user
					? 'market-contact-supplier-authorized'
					: 'market-contact-supplier-unauthorized';
			})
		);
	}
}
