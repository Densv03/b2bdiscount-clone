import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { B2bNgxLinkService } from '@b2b/ngx-link';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { UserService } from 'src/app/client/pages/client-profile/services/user/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'b2b-client-latest-offers-grid-item',
	templateUrl: './client-latest-offers-grid-item.component.html',
	styleUrls: ['./client-latest-offers-grid-item.component.scss'],
})
export class ClientLatestOffersGridItemComponent implements OnInit {
	@Input() option: any;
	@Output() public onStarClick: EventEmitter<string> =
		new EventEmitter<string>();

	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	public user = this.userService.getUser();
	constructor(
		public b2bNgxLinkService: B2bNgxLinkService,
		private userService: UserService,
		private router: Router
	) {}

	ngOnInit(): void {}

	public cutString(str: string, wordsToSplice: number): string {
		if (!str) return '';
		const wordsArr = str.split(' ');
		return wordsArr.length > 4
			? wordsArr.slice(0, wordsToSplice).join(' ') + '...'
			: str;
	}

	public emitStarClick(id: any, event: any): void {
		event.preventDefault();
		event.stopImmediatePropagation();
		this.onStarClick.emit(id);
	}

	public openChat(event: MouseEvent): void {
		event.stopImmediatePropagation();
	}

	public goTo(link: string): void {
		this.router.navigate([link]);
	}

	public setText(id: string): string {
		return id === this.user?._id ? 'OFFERS.VIEW_MY_OFFER' : 'Contact seller';
	}
}
