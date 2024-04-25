import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { B2bNgxLinkService, B2bNgxLinkThemeEnum } from '@b2b/ngx-link';
// @ts-ignore
import { getName } from 'country-list';
import { ClientMarketplaceService } from '../../client-marketplace.service';
import {mergeMap, Observable, of} from 'rxjs';
import {
	ContactSupplierFormDialogComponent
} from "../contact-supplier-form-dialog/contact-supplier-form-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {
	SupplierContactSuccessDialogComponent
} from "../supplier-contact-success-dialog/supplier-contact-success-dialog.component";
import {filter, map, tap} from "rxjs/operators";
import {untilDestroyed} from "@ngneat/until-destroy";
import {User} from "../../../../../core/models/user/user.model";
import {UserService} from "../../../client-profile/services/user/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../auth/services/auth/auth.service";
import {DialogService} from "../../../../../core/services/dialog-service/dialog.service";
import {io} from "socket.io-client";
import { environment } from '../../../../../../environments/environment';

@Component({
	selector: 'b2b-client-marketplace-listing-list',
	templateUrl: './client-marketplace-listing-list.component.html',
	styleUrls: ['./client-marketplace-listing-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientMarketplaceListingListComponent {
	@Output() public readonly starClicked: EventEmitter<string> =
		new EventEmitter<string>();

	@Input() marketplaceProducts: any[];
	@Input() user: any;

	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum =
		B2bNgxButtonThemeEnum;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum =
		B2bNgxLinkThemeEnum;

	public loading$: Observable<boolean>;
	public marketplaceSkeletonSettings: any;
	public readonly user$: Observable<User> = this.userService.getUser$();
	public buttonTitle$: Observable<string> = of('Contact Supplier');
	private _socket: any;
	private token: string = '';

	constructor(
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly clientMarketplaceService: ClientMarketplaceService,
		private readonly userService: UserService,
		private readonly authService: AuthService,
		private readonly dialogService: DialogService,
		private readonly dialog: MatDialog,
		private readonly router: Router
	) {
		this.loading$ = this.clientMarketplaceService.loading$;
		this.marketplaceSkeletonSettings =
			this.clientMarketplaceService.getMarketplaceSkeletonOptions();
	}

	public cutString(name: string, wordsToSlice: number = 2): string {
		if (!name) return '';
		const splittedName = name.split(' ');
		if (splittedName.length > 2) {
			return splittedName.slice(0, wordsToSlice).join(' ');
		}
		return name;
	}

	public emitStarClick(id: string, event: Event): void {
		event.preventDefault();
		event.stopImmediatePropagation();
		this.starClicked.emit(id);
	}

	public getCountryName(countryCode: string): string {
		if (!countryCode) {
			return '';
		}
		return getName(countryCode);
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

	public goTo(link: string) {
		this.router.navigate([link]);
	}

	public openChat(event: MouseEvent, product: any): void {
		event.stopPropagation();

		if (product.user === this.userService.getUser()?._id) {
			this.goTo(
				'/b2bmarket/listing/products/' + product.path || product._id
			);
			return;
		}

		if (product.chatStarted.includes(this.userService.getUser()?._id)) {
			this.chatStart(product, true);
		} else {
			const dialog = this.dialogService.openDialog(
				ContactSupplierFormDialogComponent,
				{
					data: {
						product,
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
						this.chatStart(product, openChat, contactSupplierResult);
					});
			}
		}
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

	private chatStart(product: any, redirectToChat?: boolean, contactSupplierResult?: any): void {
		this.openConnection(this.token);
		this._socket.emit('start_chat', {
			body: contactSupplierResult ? contactSupplierResult['moreInformation'] : null,
			userId: product.user,
			productId: contactSupplierResult ? contactSupplierResult['productName'] : product._id,
			typeRoom: 'product',
		});

		this._socket.on('chat_info', (data: any) => {
			redirectToChat
				? this.goTo('profile/your-workspace/b2bmarket/chat/' + data._id)
				: null;
		});
	}

	public getIdForContactSupplierButton$(product: any): Observable<string> {
		if (product.user === this.userService.getUser()?._id) {
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
