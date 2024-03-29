import { Injectable } from '@angular/core';
import { UserService } from '../../pages/client-profile/services/user/user.service';
import { combineLatest, filter } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { ApiService } from '../../../core/services/api/api.service';
import { Router } from '@angular/router';
import { PlatformService } from '../platform/platform.service';

@Injectable({
	providedIn: 'root',
})
export class SocketService {
	private _socket: any;

	private readonly _newMessageSubject = new Subject();
	private readonly _newMessage$ = this._newMessageSubject.asObservable();

	private readonly _statusSubject = new Subject();
	private readonly _status$ = this._statusSubject.asObservable();

	private readonly _unreadMessagesCountSource = new BehaviorSubject(0);
	private readonly _unreadOfferMessagesCountSource = new BehaviorSubject(0);
	private readonly _unreadRfqMessagesCountSource = new BehaviorSubject(0);
	private readonly _unreadMarketplaceMessagesCountSource = new BehaviorSubject(
		0
	);
	private readonly _unreadMessagesCount$ =
		this._unreadMessagesCountSource.asObservable();
	private readonly _unreadOfferMessagesCount$ =
		this._unreadOfferMessagesCountSource.asObservable();
	private readonly _unreadRfqMessagesCount$ =
		this._unreadRfqMessagesCountSource.asObservable();
	private readonly _unreadMarketplaceMessagesCount$ =
		this._unreadMarketplaceMessagesCountSource.asObservable();

	constructor(
		private readonly _usersService: UserService,
		private readonly _apiService: ApiService,
		private readonly _router: Router,
		private readonly _platformService: PlatformService
	) {
		if (this._platformService.isServer) {
			return;
		}
		this.openConnection();
		this.getUnreadMessagesCount();
		this.getUnreadOfferMessagesCount();
		this.getUnreadRfqMessagesCount();
		this.getUnreadMarketplaceMessagesCount();
	}

	private getUnreadMessagesCount() {
		this._usersService
			.getToken$()
			.pipe(filter((token) => !!token))
			.subscribe(async () => {
				try {
					const { unreadMessagesCount } = await this._apiService
						.get<any>('my/unreadMessagesCount')
						.toPromise();
					this._unreadMessagesCountSource.next(unreadMessagesCount);
				} catch {}
			});
	}

	public decreaseUnreadMessagesCount(
		type: 'market' | 'rfq' | 'offers',
		decreaseAmount: number
	): void {
		const unreadMessagesCount = {
			market: this._unreadMarketplaceMessagesCountSource.getValue(),
			rfq: this._unreadRfqMessagesCountSource.getValue(),
			offers: this._unreadOfferMessagesCountSource.getValue(),
		};
		switch (type) {
			case 'market':
				this._unreadMarketplaceMessagesCountSource.next(
					unreadMessagesCount['market']
						? unreadMessagesCount['market'] - decreaseAmount
						: unreadMessagesCount['market']
				);
				break;
			case 'offers':
				this._unreadOfferMessagesCountSource.next(
					unreadMessagesCount['offers']
						? unreadMessagesCount['offers'] - decreaseAmount
						: unreadMessagesCount['offers']
				);
				break;
			case 'rfq':
				this._unreadRfqMessagesCountSource.next(
					unreadMessagesCount['rfq']
						? unreadMessagesCount['rfq'] - decreaseAmount
						: unreadMessagesCount['rfq']
				);
				break;
		}
	}

	public getUnreadOfferMessagesCount() {
		this._usersService
			.getToken$()
			.pipe(filter((token) => !!token))
			.subscribe(async () => {
				try {
					const { unreadMessagesCount } = await this._apiService
						.get<any>('my/unreadOfferMessagesCount')
						.toPromise();
					this._unreadOfferMessagesCountSource.next(unreadMessagesCount);
				} catch {}
			});
	}

	public getUnreadRfqMessagesCount() {
		this._usersService
			.getToken$()
			.pipe(filter((token) => !!token))
			.subscribe(async () => {
				try {
					const { unreadMessagesCount } = await this._apiService
						.get<any>('my/unreadRfqMessagesCount')
						.toPromise();
					this._unreadRfqMessagesCountSource.next(unreadMessagesCount);
				} catch {}
			});
	}

	public getUnreadMarketplaceMessagesCount(): void {
		this._usersService
			.getToken$()
			.pipe(
				filter((token) => !!token),
				combineLatest([
					this._apiService.get<any>('my/unreadUsersMessagesCount'),
					this._apiService.get<any>('my/unreadProductMessagesCount'),
				])
			)
			.subscribe((data) => {
				this._unreadMarketplaceMessagesCountSource.next(
					data[1].unreadMessagesCount + data[2].unreadMessagesCount
				);
			});
	}

	private openConnection() {
		this._usersService
			.getToken$()
			.pipe(filter((token) => !!token))
			.subscribe((token) => {
				if (this._socket) {
					this._socket.disconnect();
				}

				// this._socket = io(environment.apiUrl, {
				// 	path: "/app",
				// 	auth: {
				// 		token,
				// 	},
				// });

				// this.subscribeOnNewMessage();
				// this.subscribeOnStatusChange();
			});
	}

	private subscribeOnNewMessage() {
		return this._socket.on('new_message', (newMessage: any) => {
			if (this._router.url.includes(newMessage.room)) {
				return;
			}

			switch (newMessage.typeRoom) {
				case 'rfq':
					this._unreadRfqMessagesCountSource.next(
						this._unreadRfqMessagesCountSource.getValue() + 1
					);
					break;
				case 'product':
					this._unreadMarketplaceMessagesCountSource.next(
						this._unreadMarketplaceMessagesCountSource.getValue() + 1
					);
					break;
				case 'offer':
					this._unreadOfferMessagesCountSource.next(
						this._unreadOfferMessagesCountSource.getValue() + 1
					);
					break;
			}

			this._newMessageSubject.next(newMessage);

			const unreadMessagesCount = this._unreadMessagesCountSource.getValue();
			this._unreadMessagesCountSource.next(unreadMessagesCount + 1);
		});
	}

	public get unreadMessagesCount$() {
		return this._unreadMessagesCountSource.asObservable();
	}

	public get unreadOfferMessagesCount$() {
		return this._unreadOfferMessagesCount$;
	}

	public get unreadRfqMessagesCount$() {
		return this._unreadRfqMessagesCount$;
	}

	public get unreadMarketplaceMessagesCount$() {
		return this._unreadMarketplaceMessagesCount$;
	}

	public readMessages(count: number) {
		const newCount = this._unreadMessagesCountSource.getValue() - count;
		this._unreadMessagesCountSource.next(newCount);
	}

	public get newMessage$() {
		return this._newMessage$;
	}

	private subscribeOnStatusChange() {
		this._socket.on('online', (user: any) => {
			this._statusSubject.next({ online: true, user });
		});

		this._socket.on('offline', (user: any) => {
			this._statusSubject.next({ online: false, user });
		});
	}

	public get status$() {
		return this._status$;
	}
}
