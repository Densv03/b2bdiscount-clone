import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeoService } from '../../../../core/services/seo/seo.service';

@Component({
	selector: 'b2b-client-privacy-policy',
	templateUrl: './client-privacy-policy.component.html',
	styleUrls: ['./client-privacy-policy.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPrivacyPolicyComponent implements OnInit {
	constructor(private seoService: SeoService) {}

	ngOnInit() {
		this.addSeoTags();
	}

	private addSeoTags() {
		this.seoService.setTitle('Privacy Policy | Globy B2B Marketplace');
		this.seoService.setDescription(
			'Read Globy’s privacy policy. Learn how we protect your data and adhere to confidentiality and security standards.'
		);
	}
}
