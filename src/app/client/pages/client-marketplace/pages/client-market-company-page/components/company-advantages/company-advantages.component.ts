import {Component, Input} from '@angular/core';
import {CompanyAdvantage} from "../../../../../../../core/models/public-company-info.model";

@Component({
	selector: 'b2b-company-advantages',
	standalone: true,
	imports: [],
	templateUrl: './company-advantages.component.html',
	styleUrl: './company-advantages.component.scss',
})
export class CompanyAdvantagesComponent {
	@Input() advantages: CompanyAdvantage[];
	constructor() {
	}

	public advantageArrIncludesContent(arr: CompanyAdvantage[]): boolean {
		if (!arr) return false;
		return !!(arr.filter(advantage => !!advantage.content.length)).length
	}

	public filterEmptyAdvantages(arr: CompanyAdvantage[]): CompanyAdvantage[] {
		return arr.filter(advantage => !!(advantage.content.length) || !!(advantage.title.length))
	}
}
