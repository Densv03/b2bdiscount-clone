import { Component, OnInit } from '@angular/core';
import { B2bNgxButtonThemeEnum } from 'projects/ngx-button/src/public-api';
import { B2bNgxLinkThemeEnum } from 'projects/ngx-link/src/public-api';
import { combineLatest, filter, firstValueFrom, mergeMap, Subject } from 'rxjs';
import { OffersService } from '../../../../../../src/app/client/services/offers/offers.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ApiService } from '../../../../../../src/app/core/services/api/api.service';
import { UserService } from '../../../../../../src/app/client/pages/client-profile/services/user/user.service';
import { first, map, startWith, switchMap, take } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AdminOfferDeclineDialogComponent } from '../../admin-offers/components/admin-offer-decline-dialog/layout/admin-offer-decline-dialog.component';
import { io } from 'socket.io-client';
import { environment } from '../../../../../../src/environments/environment';
import { AdminSourcingRequestService } from './admin-sourcing-request.service';
import { ConfirmationDialogComponent } from '../../../../../../src/app/client/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminListType } from '../../../admin-list-type';
import { MixpanelService } from '../../../../../../src/app/core/services/mixpanel/mixpanel.service';
import { getName } from 'country-list';

@UntilDestroy()
@Component({
	selector: 'b2b-admin-sourcing-request',
	templateUrl: './admin-sourcing-request.component.html',
	styleUrls: ['./admin-sourcing-request.component.scss'],
})
export class AdminSourcingRequestComponent implements OnInit {
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;

	public readonly offers$: any;
	public readonly menuOptions: any;
	public listType = AdminListType;

	public readonly pageSubject = new Subject<number>();
	public readonly forceSubject = new Subject();

	public totalCount$: any;

	public _socket: any;
	public token: any;

	constructor(
		private readonly adminSourcingRequestService: AdminSourcingRequestService,
		private readonly _offersService: OffersService,
		private readonly _hotToastrService: HotToastService,
		private readonly _apiService: ApiService,
		private readonly _usersService: UserService,
		private readonly dialog: MatDialog,
		private readonly mixpanelService: MixpanelService
	) {
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;

		this.offers$ = this._getOffers$();
		this.menuOptions = this._getMenuOptions();

		this.totalCount$ = this._offersService.getAllOffersCount();
		this._usersService
			.getToken$()
			.pipe(first())
			.subscribe((token) => {
				this.token = token;
				this.openConnection();
			});
	}

	public ngOnInit(): void {}

	export() {
		this._apiService
			.get('get-user-report')
			.pipe(untilDestroyed(this))
			.subscribe();
	}

	public removeAllOffers() {
		this._offersService
			.removeAllOffers()
			.pipe(
				untilDestroyed(this),
				this._hotToastrService.observe({
					loading: 'Offers is deleting...',
					success: 'Offers successfully deleted',
					error: 'Offers deleting failed',
				})
			)
			.subscribe();
	}

	private _getOffers$() {
		const page$ = this.pageSubject.asObservable().pipe(startWith(1));
		const force$ = this.forceSubject.asObservable().pipe(startWith(true));

		return combineLatest([page$, force$]).pipe(
			switchMap(([page]: any) =>
				this.adminSourcingRequestService.getOffers(`?offset=${(page - 1) * 10}`)
			),
			map((data: any) => data)
		);
	}

	public setPage(event: number) {
		this.pageSubject.next(event);
	}

	private _getMenuOptions() {
		return [
			{
				label: 'Delete',
				icon: 'delete-red',
				onClick: (offer: {
					_id: string;
					category: { name: any };
					destination: { to: any };
					amount: { count: any };
				}) => {
					this.dialog
						.open(ConfirmationDialogComponent, {
							data: {
								title: 'Delete product',
								message: 'Are you sure you want to delete this product?',
								confirmButtonText: 'Delete',
								confirmButtonTheme: B2bNgxButtonThemeEnum.BACKGROUND_RED,
								cancelButtonText: 'Cancel',
								cancelButtonTheme: B2bNgxButtonThemeEnum.OUTLINE_BLACK,
							},
						})
						.afterClosed()
						.pipe(
							filter((data) => !!data),
							mergeMap(() => {
								return this._offersService.deleteRfq(offer._id).pipe(
									untilDestroyed(this),
									this._hotToastrService.observe({
										loading: 'Offer deleting',
										success: 'Offer deleted',
										error: 'Offer deleting failed',
									})
								);
							})
						)
						.subscribe(() => {
							this.forceSubject.next(true);
						});
				},
			},
			{
				label: 'approve by admin',
				icon: 'check',
				onClick: (offer: {
					_id: string;
					category: { name: any }[];
					destination: { to: any };
					amount: { count: any };
					user: string;
				}) => {
					this.adminSourcingRequestService
						.approveOffer(offer._id)
						.pipe(untilDestroyed(this))
						.subscribe(() => {
							this.forceSubject.next(true);
							this._hotToastrService.success('approved');
							this.mixpanelService.track('New RFQ approved', {
								distinctId: offer.user,
								'Product Sector': offer.category[0].name,
								Destination: getName(offer.destination.to),
								'Approving Date': Date(),
							});
						});
				},
			},
			{
				label: 'decline by admin',
				icon: 'cross',
				onClick: (offer: {
					user: any;
					_id: string;
					chatStarted: any;
					category: { name: any };
					destination: { to: any };
					amount: { count: any };
				}) => {
					this.startChat(offer.user, offer._id);
					this.dialog
						.open(AdminOfferDeclineDialogComponent, {
							data: {
								chatUsers: offer.chatStarted,
							},
							width: '40vw',
							height: 'auto',
							minHeight: '0',
						})
						.afterClosed()
						.pipe(untilDestroyed(this))
						.subscribe(async (message: string) => {
							if (message) {
								await this.openConnection();
								this.adminSourcingRequestService
									.declineOffer(offer._id, message)
									.pipe(untilDestroyed(this))
									.subscribe(async () => {
										this.sendMessage(offer.user, offer._id, message);
										this.closeConnection();
										this.forceSubject.next(true);
										this._hotToastrService.success('declined');
										await this.trackDecline(offer);
									});
							}
						});
				},
			},
		];
	}

	private trackDecline(offer: {
		user: any;
		_id: string;
		category: { name: any };
		destination: { to: any };
		amount: { count: any };
	}) {
		setTimeout(async () => {
			const user = await firstValueFrom(
				this._usersService.getUserById(offer.user)
			);
			this.mixpanelService.track('Product declined', {
				'Product Category': offer?.category?.name,
				"Supplier's Country": getName(offer?.destination?.to),
				'Product Count':
					user?.statistics?.products?.approved ?? offer?.amount?.count,
				'Deletion Date': new Date(),
			});
		}, 1000);
	}

	openConnection() {
		this._socket = io(environment.apiUrl, {
			path: '/chat',
			auth: {
				token: this.token,
			},
		});
	}

	startChat(userId: any, offerId: any) {
		this._socket.emit('start_chat', {
			userId,
			offerId,
		});
	}

	public sendMessage(userId: any, offerId: any, body: any) {
		if (!body) {
			return;
		}

		this._socket.emit('message', {
			type: 'text',
			body,
			userId,
			offerId,
		});
	}

	closeConnection() {
		if (this._socket) {
			this._socket.disconnect();
		}
	}
}
