import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeoService } from '../../../../core/services/seo/seo.service';

@Component({
	selector: 'b2b-client-terms-and-conditions',
	templateUrl: './client-terms-and-conditions.component.html',
	styleUrls: ['./client-terms-and-conditions.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientTermsAndConditionsComponent implements OnInit {
	constructor(private seoService: SeoService) {}
	ngOnInit() {
		this.addSeoTags();
	}

	private addSeoTags(): void {
		this.seoService.setTitle('Terms and Conditions | Globy B2B Marketplace');
		this.seoService.setDescription(
			"Find out about Globy's terms and conditions for a transparent and beneficial partnership"
		);
	}
}
