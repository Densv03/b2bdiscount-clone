import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../../components/client-profile-sidebar/profile-sidebar.service";

@Component({
	selector: 'b2b-client-profile-your-workspace',
	templateUrl: './client-profile-your-workspace.component.html',
	styleUrls: ['./client-profile-your-workspace.component.scss'],
})
export class ClientProfileYourWorkspaceComponent implements OnInit {
	constructor(private readonly sidebarService: SidebarService) {}
	ngOnInit() {
		this.sidebarService.changeSidebarState('opened');
	}
}
