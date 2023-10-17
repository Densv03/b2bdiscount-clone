import { Component, OnInit } from '@angular/core';
import { SubmitInquiryComponent } from 'src/app/client/pages/client-logistic/components/submit-inquiry/submit-inquiry.component';
import { SubmitInquirySuccessComponent } from 'src/app/client/pages/client-logistic/components/submit-inquiry-success/submit-inquiry-success.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'b2b-client-logistic',
	templateUrl: './client-logistic.component.html',
	styleUrls: ['./client-logistic.component.scss'],
})
export class ClientLogisticComponent implements OnInit {
	public logisticOrders = this.getLogisticOrders();
	constructor(private dialog: MatDialog) {}

	ngOnInit(): void {}

	private getLogisticOrders(): any[] {
		return [
			{
				transportName: 'HYUDAI (HMM)',
				origin: 'Dallas',
				destination: 'Rotterdam',
				deliveryType: 'Sea',
				validTo:
					'Thu Sep 14 2023 00:00:00 GMT+0300 (Eastern European Summer Time)',
				price: '$ 2,943',
			},
			{
				transportName: 'HYUDAI (HMM)',
				origin: 'Dallas',
				destination: 'Rotterdam',
				deliveryType: 'Air',
				validTo:
					'Thu Sep 14 2023 00:00:00 GMT+0300 (Eastern European Summer Time)',
				price: '$ 2,943',
			},
		];
	}

	public onSendRequest($event: any) {
		this.dialog
			.open(SubmitInquiryComponent, {
				data: {
					departure: 'Dallas, USA',
					readyToLoad: new Date(Date.now()).getDate(),
					transportationType: 'Sea',
					arrival: 'Rotterdam, NL',
					shipmentType: 'FCL',
				},
				maxWidth: 767,
				maxHeight: 770,
				width: '80%',

				panelClass: 'submit-inquiry-dialog',
			})
			.afterClosed()
			.pipe(filter((data) => !!data))
			.subscribe((res) => {
				// send request
				this.dialog.open(SubmitInquirySuccessComponent);
			});
	}
}
