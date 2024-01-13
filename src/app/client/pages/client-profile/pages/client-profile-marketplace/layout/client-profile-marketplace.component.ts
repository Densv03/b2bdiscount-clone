import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../../services/user/user.service';
import { ClientMarketplaceService } from '../../../../../shared/services/client-marketplace-service/client-marketplace.service';
import { User } from '../../../../../../core/models/user/user.model';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
	selector: 'b2b-client-profile-marketplace',
	templateUrl: './client-profile-marketplace.component.html',
	styleUrls: ['./client-profile-marketplace.component.scss'],
})
export class ClientProfileMarketplaceComponent implements OnInit {
	public totalChatsLength$: Observable<number> =
		this.clientMarketplaceService.chatsLength$;
	public totalProductLength$: Observable<number> =
		this.clientMarketplaceService.manageProductsLength$;

	public PRODUCTS_LIMIT: number = this.clientMarketplaceService.PRODUCTS_LIMIT;
	public selectedIndex: number = 0;
	public manageProducts$: Observable<any[]>;
	public archievedProducts$: Observable<any[]>;
	public chats$: Observable<any[]>;
	public user$: Observable<User> = this.userService.getUser$();

	public isBuyerAccount =
		this.userService.getUser().rootRole?.displayName === 'Buyer';

	public isUserAbleToUseMarketplace: boolean =
		this.userService.isUserAbleToUseMarketplace;

	private paginationPageNumbers: {
		chat: number;
		manage: number;
		archived: number;
	} = {
		chat: 1,
		manage: 1,
		archived: 1,
	};

	constructor(
		private clientMarketplaceService: ClientMarketplaceService,
		private router: Router,
		private hotToastService: HotToastService,
		private dialog: MatDialog,
		private hotToast: HotToastService,
		private userService: UserService,
		private readonly activatedRoute: ActivatedRoute
	) {
		this.manageProducts$ = this.clientMarketplaceService.manageProducts$;
		this.chats$ = this.clientMarketplaceService.chats$;
	}

	ngOnInit(): void {
		this.initTabs();
	}

	public togglePageChatsList(page: number): void {
		this.clientMarketplaceService.updateChats((page - 1) * this.PRODUCTS_LIMIT);
		this.paginationPageNumbers.chat = page;
	}

	public togglePageProductList(page: number): void {
		this.clientMarketplaceService.updateManageProducts(
			(page - 1) * this.PRODUCTS_LIMIT
		);
		this.paginationPageNumbers.manage = page;
	}

	public onChatDelete(): void {
		this.clientMarketplaceService.updateChats();
	}

	public showErrorMessage(): void {
		this.hotToast.error(
			'To trade on B2B Market your company’s type must be Manufacturer or Trader. You can switch it on settings.'
		);
	}

	private initTabs(): void {
		if (!this.isBuyerAccount) {
			this.clientMarketplaceService.updateManageProducts();
			if (this.activatedRoute.snapshot.queryParams?.['tab'] === 'Chats') {
				this.selectedIndex = 1;
				this.router.navigate([], { queryParams: null });
			}
		}
		this.clientMarketplaceService.updateChats();
	}
}
