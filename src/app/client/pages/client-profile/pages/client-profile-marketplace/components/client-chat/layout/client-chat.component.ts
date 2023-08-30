import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
} from "@angular/core";
import { B2bNgxButtonThemeEnum } from "@b2b/ngx-button";
import { ActivatedRoute } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { ChatService } from "../../../../../../../services/chat/chat.service";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { filter, map, switchMap, tap } from "rxjs/operators";
import { UserService } from "../../../../../services/user/user.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { io } from "socket.io-client";
import { AuthService } from "../../../../../../../../auth/services/auth/auth.service";
import { environment } from "../../../../../../../../../environments/environment";
import { SocketService } from "../../../../../../../services/socket/socket.service";
import { ChatsService } from "../../../../../../../services/chats/chats.service";
import { HotToastService } from "@ngneat/hot-toast";
import { B2bNgxLinkService } from "@b2b/ngx-link";
import { getName } from "country-list";
import mixpanel from "mixpanel-browser";
import {MixpanelService} from "../../../../../../../../core/services/mixpanel/mixpanel.service";
import {TranslateService} from "@ngx-translate/core";

@UntilDestroy()
@Component({
	selector: "b2b-client-chat",
	templateUrl: "./client-chat.component.html",
	styleUrls: ["./client-chat.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientChatComponent implements OnInit, OnDestroy {
	@ViewChild("chatContainer") chatContainer: ElementRef;
	public buyerContacts: any;
	public buyerStatus: boolean;
	public rfqInfo: any;

	public readonly formGroup: FormGroup;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;

	public readonly messages$: Observable<any>;
	public readonly chatInfo$: Observable<any>;

	private readonly _messagesHistoryBehaviourSubject: BehaviorSubject<any>;
	private readonly _messagesHistory$: Observable<any>;

	private readonly _messageBehaviourSubject: BehaviorSubject<any>;
	private readonly _message$: Observable<any>;

	private readonly _chatInfoBehaviourSubject: BehaviorSubject<any>;
	private readonly _chatInfo$: Observable<any>;

	public chat: any;
	public displayRequestContacts: boolean;
	public displayOpenContacts: boolean;
	public displayCloseContacts: boolean;
	public displayContactsRequested: boolean;
	public displayContactsOpened: boolean = true;

	private _socket: any;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _chatService: ChatService,
		private readonly _chatsService: ChatsService,
		private readonly _usersService: UserService,
		private readonly _formBuilder: FormBuilder,
		private readonly _authService: AuthService,
		private readonly _socketService: SocketService,
		private readonly _hotToastService: HotToastService,
		public changeDetectorRef: ChangeDetectorRef,
		public readonly b2bNgxLinkService: B2bNgxLinkService,
		private readonly translateService: TranslateService,
    private readonly mixpanelService: MixpanelService
	) {
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
		this.formGroup = this._formBuilder.group({
			message: "",
		});

		this._messagesHistoryBehaviourSubject = new BehaviorSubject<any>([]);
		this._messagesHistory$ = this._messagesHistoryBehaviourSubject.asObservable();

		this._messageBehaviourSubject = new BehaviorSubject<any>([]);
		this._message$ = this._messageBehaviourSubject.asObservable();

		this._chatInfoBehaviourSubject = new BehaviorSubject<any>(null);
		this._chatInfo$ = this._chatInfoBehaviourSubject.asObservable();

		this.chatInfo$ = this.getChatInfo();
		this.messages$ = this.getMessages();
	}

	public getChatInfo(): Observable<any> {
		return this._authService.getUser().pipe(
			filter((user) => !!user),
			switchMap((user) => {
				return this._chatInfo$.pipe(
					filter((chatInfo) => !!chatInfo),
					map((chatInfo) => {
						if (chatInfo.buyer._id === user._id) {
							this.buyerContacts = chatInfo.seller;
						} else {
							this.buyerContacts = chatInfo.buyer;
						}

						this.rfqInfo = chatInfo;
						this.buyerStatus = chatInfo.isActive;
						const displayInfoOf =
							chatInfo.buyer?._id === user?._id
								? this.translateService.instant("CHAT.SUPPLIER")
								: this.translateService.instant("CHAT.BUYER");
						const displayInfo =
							displayInfoOf === this.translateService.instant("CHAT.SUPPLIER")
								? chatInfo.offer?.contact
								: chatInfo.buyer;
						const author =
							displayInfo?.fullName ||
							displayInfo?.personName ||
							`${this.translateService.instant("CHAT.SUPPLIER")} of ${chatInfo.offer?.title}`;

						return {
							...chatInfo,
							displayInfo: {
								...displayInfo,
								role: displayInfoOf,
								author,
							},
						};
					})
				);
			})
		);
	}

	public getMessages() {
		const user$ = this._authService.getUser();
		const chat$ = this._activatedRoute.paramMap.pipe(
			map((paramMap) => paramMap.get("id")),
			switchMap((id) => this._chatService.getChatById(id))
		);

		return combineLatest([user$, chat$]).pipe(
			filter(([user, chat]) => !!user && !!chat),
			switchMap(([, chat]) =>
				this._messagesHistory$.pipe(
					tap(() => {
						setTimeout(() => {
							this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
						}, 0);
					}),
					map((messages) =>
						messages.map((message: { author: any; }) => {
							const displayInfoOf =
								chat.seller?._id === message?.author
									? this.translateService.instant("CHAT.SUPPLIER")
									: this.translateService.instant("CHAT.BUYER");
							const displayInfo =
								displayInfoOf === this.translateService.instant("CHAT.SUPPLIER") ? chat.offer?.contact : chat.buyer;
							const author = displayInfo?.fullName || displayInfo?.personName || chat.seller.fullName;
							return {
								...message,
								contact: {
									...displayInfo,
									author,
									role: displayInfo,
								},
							};
						})
					)
				)
			)
		);
	}

	public enterPressed(event: { preventDefault: () => void; }) {
		this.sendMessage(this.formGroup.get("message").value);
		event.preventDefault();
	}

	public async sendMessage(body: any) {
		if (!body) {
			return;
		}

		this.chatInfo$.pipe(untilDestroyed(this)).subscribe((chatInfo) => {
			const user = this._usersService.getUser();
			if (chatInfo.product) {
				const productId = typeof chatInfo.product === "string" ? chatInfo.product : chatInfo.product._id;
				this._socket.emit("message", {
					type: "text",
					body,
					userId: user._id === chatInfo.buyer?._id ? chatInfo.seller._id : chatInfo.buyer?._id,
					productId,
					typeRoom: "product",
				});
			} else {
				this._socket.emit("users_message", {
					type: "text",
					body,
					userId: user._id === chatInfo.buyer?._id ? chatInfo.seller._id : chatInfo.buyer?._id,
					typeRoom: "users",
				});
			}
		});

		this.formGroup.get("message").reset();
	}

	public subscribeOnMessage() {
		return this._socket.on("message", (message: any) => {
			const history = this._messagesHistoryBehaviourSubject.getValue();
			this._messagesHistoryBehaviourSubject.next([...history, message]);
		});
	}

	public subscribeOnChatInfo() {
		return this._socket.on("chat_info", (chatInfo: { unreadMessagesCount: number; }) => {
			this._socketService.readMessages(chatInfo.unreadMessagesCount);
			this._chatInfoBehaviourSubject.next(chatInfo);
		});
	}

	public subscribeOnMessageHistory() {
		return this._socket.on("message_history", (message_history: any) => {
			this._messagesHistoryBehaviourSubject.next(message_history);
		});
	}

	public subscribeOnUsersChatInfo() {
		return this._socket.on("users_chat_info", (chatInfo: { unreadMessagesCount: number; }) => {
			this._socketService.readMessages(chatInfo.unreadMessagesCount);
			this._chatInfoBehaviourSubject.next(chatInfo);
		});
	}
	public subscribeOnUsersChatMessage() {
		return this._socket.on("users_message", (message: any) => {
			const history = this._messagesHistoryBehaviourSubject.getValue();
			this._messagesHistoryBehaviourSubject.next([...history, message]);
		});
	}

	public subscribeOnUserChatMessageHistory() {
		return this._socket.on("message_users_history", (message_history: any) => {
			this._messagesHistoryBehaviourSubject.next(message_history);
		});
	}

	openConnection(token: any) {
		if (this._socket) {
			this._socket.disconnect();
		}

		this._socket = io(environment.apiUrl, {
			path: "/chat",
			auth: {
				token,
			},
		});
	}

	ngOnInit() {
		const token$ = this._usersService.getToken$();
		const user$ = this._usersService.getUser$();
		const chat$ = this._activatedRoute.paramMap.pipe(
			map((paramMap) => paramMap.get("id")),
			switchMap((id) => this._chatService.getChatById(id))
		);

		combineLatest([chat$, token$, user$])
			.pipe(untilDestroyed(this))
			.subscribe(([chat, token, user]: any) => {
				const buyer = Array.isArray(chat.buyer) ? chat.buyer[0] : chat.buyer;
				const seller = Array.isArray(chat.seller) ? chat.seller[0] : chat.seller;

				this.openConnection(token);

				const role = user._id === buyer?._id ? "buyer" : "seller";
				const contactTo = role === "seller" ? buyer : seller;

				this.displayContactsRequested = chat.contactsRequested && !this.displayContactsOpened;
				this.displayRequestContacts =
					role === "buyer" &&
					!this.displayContactsOpened &&
					!this.displayContactsRequested &&
					(!chat.offer.visibility.email || !chat.offer.visibility.phone);
				this.displayOpenContacts = role === "seller" && !this.displayContactsOpened && chat.contactsRequested;
				this.displayCloseContacts = role === "seller" && !this.displayContactsOpened && chat.contactsRequested;

				this.chat = chat;

				if (chat.typeRoom === "product") {
					this.subscribeOnMessageHistory();
					this.subscribeOnMessage();
					this.subscribeOnChatInfo();

					this._socket.emit("start_chat", {
						userId: contactTo?._id,
						productId: chat.product,
						typeRoom: "product",
					});
				} else {
					this._socket.emit("start_users_chat", {
						userId: contactTo?._id,
						typeRoom: "users",
					});

					this.subscribeOnUsersChatInfo();
					this.subscribeOnUserChatMessageHistory();
					this.subscribeOnUsersChatMessage();
				}
			});
	}

	public getDestination(): string {
		return this.rfqInfo?.rfq?.destination?.to ? getName(this.rfqInfo?.rfq?.destination?.to) : "";
	}

	public ngOnDestroy() {
		if (this._socket) {
			this._socket.disconnect();
		}
	}
}
