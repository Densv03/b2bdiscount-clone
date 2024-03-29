import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {TradeShowsSections} from "./client-trade-shows.constants";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {AsyncPipe, TitleCasePipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
	ClientProfileTradeShowsModalComponent
} from "../../component/client-profile-trade-shows-modal/client-profile-trade-shows-modal.component";
import {TradeShow} from "./client-trade-shows.interface";
import {ClientTradeShowsService} from "./client-trade-shows.service";
import {
	ClientProfileTradeShowCardComponent
} from "../../component/client-profile-trade-show-card/client-profile-trade-show-card.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@UntilDestroy()
@Component({
	selector: 'b2b-client-trade-shows',
	standalone: true,
	imports: [
		B2bNgxButtonModule,
		TitleCasePipe,
		MatIcon,
		AsyncPipe,
		ClientProfileTradeShowCardComponent,
		MatProgressSpinner,
	],
	templateUrl: './client-trade-shows.component.html',
	styleUrl: './client-trade-shows.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientTradeShowsComponent implements OnInit {

	matDialog = inject(MatDialog);

	public readonly tradeShowSections = TradeShowsSections;

	constructor(public clientTradeShowService: ClientTradeShowsService,
							private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.getList();
	}

	openModal(data: Partial<TradeShow>) {
		this.matDialog.open(ClientProfileTradeShowsModalComponent, {data} as MatDialogConfig<Partial<TradeShow>>)
			.afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.getList();
				this.cdr.detectChanges();
			})
	}

	getList() {
		this.clientTradeShowService.getListByCompanyId().subscribe();
	}
}
