import {inject, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {TradeShow} from "../../../../../../../core/models/trade-show.interface";
import {TradeShowService} from "../../../../../../services/trade-show/trade-show.service";

@Injectable({
	providedIn: 'root'
})
export class ClientTradeShowsService {
	tradeShowService = inject(TradeShowService)
	tradeShows$ = new Subject<TradeShow[]>()

	async getList() {
		this.tradeShowService.getListByCompanyId().subscribe(res => {
			this.tradeShows$.next(res);
		})
	}
}
