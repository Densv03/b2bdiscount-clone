import { Component } from '@angular/core';
import { HeaderService } from '../../header.service';

@Component({
	selector: 'b2b-header-solutions',
	templateUrl: './header-solutions.component.html',
	styleUrls: ['./header-solutions.component.scss'],
})
export class HeaderSolutionsComponent {
	constructor(private readonly headerService: HeaderService) {}

	public closeHeader(): void {
		this.headerService.closeHeader();
	}
}
