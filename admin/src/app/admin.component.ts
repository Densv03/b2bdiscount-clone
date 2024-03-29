import { AfterViewInit, Component, OnInit } from '@angular/core';
import { overwrite } from 'country-list';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit, AfterViewInit {
	constructor(
		private readonly matIconRegistry: MatIconRegistry,
		private readonly domSanitizer: DomSanitizer
	) {}

	public ngOnInit(): void {
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

	public ngAfterViewInit(): void {
		this.renameCountries();
	}

	private renameCountries(): void {
		overwrite([
			{ code: 'FR', name: 'Mayotte' },
			{ code: 'IN', name: 'India' },
			{ code: 'VN', name: 'Vietnam' },
			{ code: 'VI', name: 'U.S. Virgin Islands' },
			{ code: 'US', name: 'United States Minor Outlying Islands' },
			{ code: 'TV', name: 'Tuvalu' },
			{ code: 'SY', name: 'Syria' },
			{ code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
			{ code: 'SO', name: 'Somaliland' },
			{ code: 'SO', name: 'Somali' },
			{ code: 'SX', name: 'Sint Maarten' },
			{ code: 'FR', name: 'Saint Pierre and Miquelon' },
			{ code: 'SH', name: 'Saint Helena' },
			{ code: 'BL', name: 'Saint Barthelemy' },
			{ code: 'RE', name: 'Reunion' },
			{ code: 'CG', name: 'Republic of the Congo' },
			{ code: 'NF', name: 'Norfolk Island' },
			{ code: 'NU', name: 'Niue' },
			{ code: 'NC', name: 'New Caledonia' },
			{ code: 'AN', name: 'Netherlands Antilles' },
			{ code: 'NR', name: 'Nauru' },
			{ code: 'FM', name: 'Micronesia' },
			{ code: 'MQ', name: 'Martinique' },
			{ code: 'MH', name: 'Marshall Islands' },
			{ code: 'KI', name: 'Kiribati' },
			{ code: 'CI', name: 'Ivory Coast' },
			{ code: 'IR', name: 'Iran' },
			{ code: 'GU', name: 'Guam' },
			{ code: 'GP', name: 'Guadeloupe' },
			{ code: 'GL', name: 'Greenland' },
			{ code: 'GF', name: 'French Guiana' },
			{ code: 'FO', name: 'Faroe Islands' },
			{ code: 'FK', name: 'Falkland Islands' },
			{ code: 'CZ', name: 'Czech Republic' },
			{ code: 'CW', name: 'Curacao' },
			{ code: 'CK', name: 'Cook Islands' },
			{ code: 'CX', name: 'Christmas Island' },
			{ code: 'CV', name: 'Cape Verde' },
			{ code: 'VG', name: 'British Virgin Islands' },
			{ code: 'AS', name: 'American Samoa' },
			{ code: 'SZ', name: 'Swaziland' },
			{ code: 'EH', name: 'Western Sahara' },
			{ code: 'CD', name: 'Democratic Republic of the Congo' },
			{ code: 'SS', name: 'South Sudan' },
			{ code: 'GB', name: 'United Kingdom' },
			{ code: 'MD', name: 'Moldova' },
			{ code: 'TZ', name: 'Tanzania' },
			{ code: 'VE', name: 'Venezuela' },
			{ code: 'US', name: 'United States' },
			{ code: 'US', name: 'USA' },
			{ code: 'BO', name: 'Bolivia' },
			{ code: 'KP', name: 'Korea' },
			{ code: 'SH', name: 'St. Helena Island' },
			{ code: 'VC', name: 'St. Vincent Island' },
			{ code: 'TR', name: 'Turkey' },
			{ code: 'TW', name: 'Taiwan' },
			{ code: 'KP', name: 'North Korea' },
			{ code: 'KR', name: 'South Korea' },
		]);
	}
}
