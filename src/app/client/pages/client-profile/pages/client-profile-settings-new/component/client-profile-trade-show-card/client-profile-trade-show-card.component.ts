import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input} from '@angular/core';
import {TradeShow} from "../../tabs/client-trade-shows/client-trade-shows.interface";
import {environment} from "../../../../../../../../environments/environment";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
	ClientProfileDefaultModalComponent
} from "../client-profile-default-modal/client-profile-default-modal.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ClientTradeShowsService} from "../../tabs/client-trade-shows/client-trade-shows.service";
import {
	ClientProfileTradeShowsModalComponent
} from "../client-profile-trade-shows-modal/client-profile-trade-shows-modal.component";
import {first} from "rxjs/operators";
import {toastMessages} from "../../tabs/client-company-information/client-company-information.constants";
import {HotToastService} from "@ngneat/hot-toast";
import {DefaultModalData} from "../client-profile-default-modal/client-profile-default-modal.interface";

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-trade-show-card',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		B2bNgxIconModule
	],
	templateUrl: './client-profile-trade-show-card.component.html',
	styleUrl: './client-profile-trade-show-card.component.scss',
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileTradeShowCardComponent {
	@Input() tradeShow: TradeShow;
	// @Input() updateList: EventEmitter<any> = new EventEmitter<boolean>();

	constructor(private matDialog: MatDialog,
							private clientTradeShowsService: ClientTradeShowsService,
							private cdr: ChangeDetectorRef,
							private hotToastService: HotToastService) {
	}

	get image() {
		if (!this.tradeShow?.images[0]?.path) {
			return 'event.svg'
		}
		return environment?.apiUrl + this.tradeShow?.images[0]?.path;
	}

	edit() {
		this.matDialog.open(ClientProfileTradeShowsModalComponent, {
			data: this.tradeShow
		}).afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.updateList();
			})
	}

	delete() {
		this.matDialog
			.open(ClientProfileDefaultModalComponent, {
				data: {
					title: 'Are you sure you want to delete the exhibition?',
					label: 'Delete confirmation',
				}
			} as MatDialogConfig<DefaultModalData<boolean>>)
			.afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(res => {
				if (!res) {
					return
				}
				this.clientTradeShowsService
					.delete(this.tradeShow._id)
					.pipe(untilDestroyed(this), first(), this.hotToastService.observe(toastMessages))
					.subscribe(() => {
						console.log('DELETED::');
						this.updateList();
					});
			});
	}

	private updateList() {
		this.clientTradeShowsService.getListByCompanyId().subscribe()
		this.cdr.detectChanges();
	}
}
