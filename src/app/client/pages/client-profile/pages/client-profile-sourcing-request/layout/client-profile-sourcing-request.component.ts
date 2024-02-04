import { Component, OnInit } from '@angular/core';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import {
	ActivatedRoute,
	NavigationStart,
	Router,
	RouterEvent,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateRfqDialogComponent } from '../../../../client-sourcing-request/components/create-rfq-dialog/create-rfq-dialog.component';

@Component({
	selector: 'b2b-client-profile-sourcing-request',
	templateUrl: './client-profile-sourcing-request.component.html',
	styleUrls: ['./client-profile-sourcing-request.component.scss'],
})
export class ClientProfileSourcingRequestComponent implements OnInit {
	public b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	private activeBtnType: BehaviorSubject<string> = new BehaviorSubject<string>(
		''
	);

	constructor(
		private readonly router: Router,
		private readonly dialog: MatDialog
	) {
		const arr = this.router.url.split('/');
		this.activeBtnType.next(arr[arr.length - 1]);
	}

	ngOnInit() {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationStart))
			.subscribe((el: any) => {
				el.url.includes('quotation')
					? this.activeBtnType.next('my-quotation')
					: this.activeBtnType.next('my-rfq');
			});
	}

	public openCreateRfqDialog(): void {
		this.dialog.open(CreateRfqDialogComponent, {
			panelClass: ['add-rfq-popup', 'contact-supplier-form-dialog'],
		});
	}

	public getActiveBtnType(): string {
		return this.activeBtnType.value;
	}
}