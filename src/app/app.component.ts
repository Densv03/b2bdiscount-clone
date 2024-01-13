import { Component, Inject, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
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
		this.form
			.get('categories')
			?.valueChanges.subscribe((data) => console.log('value changes', data));

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
			{ name: 'add', path: '../assets/icons/add.svg' },
			{ name: 'container-solid', path: '../assets/icons/container-solid.svg' },
			{ name: 'arrow-left', path: '../assets/icons/arrow-third-left.svg' },
			{ name: 'arrow-right', path: '../assets/icons/arrow-third-right.svg' },
			{ name: 'open-chat', path: '../assets/icons/open-chat.svg' },
			{ name: 'arrow-r-blue', path: '../assets/icons/arrow-r-blue.svg' },
			{ name: 'arrow-r-2', path: '../assets/icons/arrow-r-2.svg' },
			{ name: 'second-note', path: '../assets/icons/second-note.svg' },
			{ name: 'second-search', path: '../assets/icons/search-16-icon.svg' },
			{ name: 'aim', path: '../assets/icons/aim.svg' },
			{ name: 'comment-text', path: '../assets/icons/comment-text.svg' },
			{ name: 'arrow-right-2', path: '../assets/icons/arrow-right-2.svg' },
		];

		icons.forEach((icon) => {
			this.matIconRegistry.addSvgIcon(
				icon.name,
				this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
			);
		});
	}
}
