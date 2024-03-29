import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { B2bNgxInputThemeEnum } from '@b2b/ngx-input';
import { MixpanelService } from './core/services/mixpanel/mixpanel.service';
import { PlatformService } from './client/services/platform/platform.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public theme = B2bNgxInputThemeEnum;
	public iconsPath = '../assets/icons/';
	public form: FormGroup = new FormGroup({ categories: new FormControl('') });

	constructor(
		private readonly mixpanelService: MixpanelService,
		private readonly platformService: PlatformService,
		private readonly matIconRegistry: MatIconRegistry,
		private readonly domSanitizer: DomSanitizer,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit(): void {
		this.form
			.get('categories')
			?.setValue([
				'60a784830a04b16c574e823e',
				'60a784830a04b16c574e8246',
				'60a784830a04b16c574e826d',
				'60a784830a04b16c574e8267',
				'60a784830a04b16c574e825e',
				'60a784830a04b16c574e8249',
				'61ee4bfca0e63583b45822b5',
				'624d710bd5a00e47604996e4',
				'624d7131d5a00e4760499705',
			]);

		if (
			this.platformService.isBrowser &&
			!this.document.cookie.includes('firstVisit=true')
		) {
			this.mixpanelService.track('User joined');
			let expirationDate = new Date();
			expirationDate.setFullYear(expirationDate.getFullYear() + 1);
			this.document.cookie =
				'firstVisit=true; expires=' + expirationDate.toUTCString();
		}

		const icons = [
			{ name: 'add', path: this.getIconPath('add') },
			{ name: 'container-solid', path: this.getIconPath('container-solid') },
			{ name: 'arrow-left', path: this.getIconPath('arrow-third-left') },
			{ name: 'arrow-right', path: this.getIconPath('arrow-third-right') },
			{ name: 'open-chat', path: this.getIconPath('open-chat') },
			{ name: 'arrow-r-blue', path: this.getIconPath('arrow-r-blue') },
			{ name: 'arrow-r-2', path: this.getIconPath('arrow-r-2') },
			{ name: 'second-note', path: this.getIconPath('second-note') },
			{ name: 'second-search', path: this.getIconPath('search-16-icon') },
			{ name: 'aim', path: this.getIconPath('aim') },
			{ name: 'comment-text', path: this.getIconPath('comment-text') },
			{ name: 'arrow-right-2', path: this.getIconPath('arrow-right-2') },
			{ name: 'image-plus', path: this.getIconPath('image-plus') },
			{ name: 'globe', path: this.getIconPath('globe') },
			{ name: 'facebook_new', path: this.getIconPath('facebook_new') },
			{ name: 'instagram_new', path: this.getIconPath('instagram_new') },
			{ name: 'linkedin_new', path: this.getIconPath('linkedin_new') },
			{ name: 'twitter_new', path: this.getIconPath('twitter_new') },
			{ name: 'check-green', path: this.getIconPath('check-green') },
			{ name: 'document-blue', path: this.getIconPath('document-blue') },
		];

		icons.forEach((icon) => {
			this.matIconRegistry.addSvgIcon(
				icon.name,
				this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
			);
		});
	}

	getIconPath(iconName: string, fileType: string = 'svg') {
		return this.iconsPath + iconName + '.' + fileType;
	}
}
