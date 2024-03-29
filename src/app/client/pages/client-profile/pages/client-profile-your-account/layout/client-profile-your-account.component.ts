import {Component} from '@angular/core';
import {AuthService} from "../../../../../../auth/services/auth/auth.service";
import {HeaderService} from "../../../../../components/header/header.service";

@Component({
	selector: 'b2b-client-profile-your-account',
	templateUrl: './client-profile-your-account.component.html',
	styleUrls: ['./client-profile-your-account.component.scss'],
})
export class ClientProfileYourAccountComponent {
	constructor(private readonly authService: AuthService,
							private headerService: HeaderService) {
	}

	get company() {
		return this.authService.company;
	}
	open() {
		this.headerService.openWorkSpace$.next(true);
	}
}
