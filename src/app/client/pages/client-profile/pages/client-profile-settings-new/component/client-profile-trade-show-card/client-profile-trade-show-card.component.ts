import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {TradeShow} from "../../../../../../../core/models/trade-show.interface";
import {environment} from "../../../../../../../../environments/environment";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
	ClientProfileDefaultModalComponent
} from "../client-profile-default-modal/client-profile-default-modal.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {TradeShowService} from "../../../../../../services/trade-show/trade-show.service";
import {
	ClientProfileTradeShowsModalComponent
} from "../client-profile-trade-shows-modal/client-profile-trade-shows-modal.component";
import {first} from "rxjs/operators";
import {toastMessages} from "../../tabs/client-company-information/client-company-information.constants";
import {HotToastService} from "@ngneat/hot-toast";
import {DefaultModalData} from "../client-profile-default-modal/client-profile-default-modal.interface";
import {DatePipe} from "@angular/common";
import {ClientTradeShowsService} from "../../tabs/client-trade-shows/client-trade-shows.service";

@UntilDestroy()
@Component({
	selector: 'b2b-client-profile-trade-show-card',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		B2bNgxIconModule,
		DatePipe
	],
	templateUrl: './client-profile-trade-show-card.component.html',
	styleUrl: './client-profile-trade-show-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientProfileTradeShowCardComponent {
	@Input() tradeShow: TradeShow;

	constructor(private matDialog: MatDialog,
							private tradeShowService: TradeShowService,
							private hotToastService: HotToastService,
							private clientTradeShowService: ClientTradeShowsService) {
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
				this.getList();
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
				this.tradeShowService
					.delete(this.tradeShow._id)
					.pipe(untilDestroyed(this), first(), this.hotToastService.observe(toastMessages))
					.subscribe(() => {
						this.getList();
					});
			});
	}

	private getList() {
		this.clientTradeShowService.getList();
	}
}
