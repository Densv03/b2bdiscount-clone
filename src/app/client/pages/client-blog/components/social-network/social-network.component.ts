import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { HotToastService } from '@ngneat/hot-toast';
import { ShareModule } from 'ngx-sharebuttons';
import { BlogArticle } from '../../../../../../../admin/src/app/pages/admin-blog-post/types/admin-blog-post.type';

@Component({
  selector: 'b2b-social-network',
  standalone: true,
	imports: [
		SvgIconComponent,
		ShareModule,
	],
  templateUrl: './social-network.component.html',
  styleUrl: './social-network.component.scss'
})
export class SocialNetworkComponent {
	@Input() blog: BlogArticle;

	public socialIcons = [
			{
				icon: 'assets/icons/media-icons/facebook-2.svg',
				href: 'https://www.facebook.com/',
				share: 'facebook',
			},
			{
				icon: 'assets/icons/media-icons/linkedIn-2.svg',
				href: 'https://www.linkedin.com/',
				share: 'linkedin',
			},
			{
				icon: 'assets/icons/media-icons/twitter-2.svg',
				href: 'https://www.twitter.com/',
				share: 'twitter',
			},
			{
				icon: 'assets/icons/media-icons/email-2.svg',
				share: 'email',
			},
		{
			icon: 'media-icons/share',
			share: 'copy'
		}
	];

	constructor(private readonly hotToastService: HotToastService) {
	}

	public processShareBtn(shareName: string): void {
		if (shareName === 'copy') {
			this.hotToastService.success('URL copied');
		}
	}
}
