import { Component, OnInit } from "@angular/core";
import { TradebidService } from "src/app/client/pages/client-tradebid/tradebid.service";
import { Observable } from "rxjs";

@Component({
	selector: "b2b-rfq-list",
	templateUrl: "./rfq-list.component.html",
	styleUrls: ["./rfq-list.component.scss"],
})
export class RfqListComponent implements OnInit {
	public rfqList$: Observable<any> = this.tradeBidService.rfqList$;
	skeletonOptions: any = {
		count: 5,
		appearance: 'line',
		loadingText: '',
		ariaLabel: '',
		animation: 'progress',
		theme: {
			height: '120px',
		}
	};

	constructor(private tradeBidService: TradebidService) {}

	ngOnInit(): void {}
}
