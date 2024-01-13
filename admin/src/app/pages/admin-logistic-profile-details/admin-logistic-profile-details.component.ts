import { Component, OnInit } from '@angular/core';
import { AdminLogisticService } from '../admin-logistic/admin-logistic.service';

@Component({
	selector: 'b2b-components',
	templateUrl: './admin-logistic-profile-details.component.html',
	styleUrls: ['./admin-logistic-profile-details.component.scss'],
})
export class AdminLogisticProfileDetailsComponent implements OnInit {
	public selectedIndex: number = 0;
	constructor(private readonly adminLogisticService: AdminLogisticService) {}

	ngOnInit(): void {}
}
