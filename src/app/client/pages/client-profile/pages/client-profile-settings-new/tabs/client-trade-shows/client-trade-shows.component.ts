import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {TradeShowsSections} from "./client-trade-shows.constants";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {AsyncPipe, TitleCasePipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
	ClientProfileTradeShowsModalComponent
} from "../../component/client-profile-trade-shows-modal/client-profile-trade-shows-modal.component";
import {TradeShow} from "../../../../../../../core/models/trade-show.interface";
import {TradeShowService} from "../../../../../../services/trade-show/trade-show.service";
import {
	ClientProfileTradeShowCardComponent
} from "../../component/client-profile-trade-show-card/client-profile-trade-show-card.component";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ClientTradeShowsService} from "./client-trade-shows.service";
import {
	ClientProfileSettingsTabsService
} from "../../component/client-profile-settings-tabs/client-profile-settings-tabs.service";
import {TabLabel} from "../../client-profile-settings.type";

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

	constructor(public tradeShowService: TradeShowService,
							public clientTradeShowService: ClientTradeShowsService,
							private cdr: ChangeDetectorRef,
							private tabService: ClientProfileSettingsTabsService<any>) {
	}

	ngOnInit() {
		this.getList();
		this.tabListen();
	}

	openModal(data: Partial<TradeShow>) {
		this.matDialog.open(ClientProfileTradeShowsModalComponent, {
			data,
			backdropClass: 'modal__backdrop'
		} as MatDialogConfig<Partial<TradeShow>>)
			.afterClosed()
			.pipe(untilDestroyed(this))
			.subscribe(() => {
				this.getList();
			})
	}

	tabListen() {
		this.tabService.currentTab.asObservable().subscribe(res => {
			if (res.label == TabLabel.TRADE_SHOWS) {
				this.getList();
			}
		})
	}

	getList() {
		this.clientTradeShowService.getList();
		this.cdr.detectChanges();
	}
}
