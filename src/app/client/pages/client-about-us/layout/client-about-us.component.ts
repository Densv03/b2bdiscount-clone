import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionInfoEnum } from '../section-info.enum';
import { ActivatedRoute } from '@angular/router';
import { filter, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { B2bNgxButtonThemeEnum } from '@b2b/ngx-button';
import { PlatformService } from '../../../services/platform/platform.service';
import { SeoService } from '../../../../core/services/seo/seo.service';

@Component({
	selector: 'b2b-client-about-us',
	templateUrl: './client-about-us.component.html',
	styleUrls: ['./client-about-us.component.scss'],
})
export class ClientAboutUsComponent implements OnInit, OnDestroy {
	public sectionInfoType: typeof SectionInfoEnum = SectionInfoEnum;
	public b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum =
		B2bNgxButtonThemeEnum;
	public activeSectionInfoType: string = this.sectionInfoType.MARKET;
	private unsubscribe: Subject<void> = new Subject<void>();

	constructor(
		private activeRoute: ActivatedRoute,
		private platformService: PlatformService,
		private seoService: SeoService
	) {}

	ngOnInit(): void {
		this.activeRoute.queryParams
			.pipe(
				filter((params) => params['sectionType']),
				takeUntil(this.unsubscribe)
			)
			.subscribe(({ sectionType }) => {
				this.activeSectionInfoType = sectionType;
			});

		this.addSeoTags();
	}

	public changeActiveSectionType(type: SectionInfoEnum): void {
		if (this.platformService.isServer) {
			return;
		}
		if (this.activeSectionInfoType === type && window.innerWidth < 768) {
			this.activeSectionInfoType = this.sectionInfoType.NONE;
		} else {
			this.activeSectionInfoType = type;
		}
	}

	ngOnDestroy() {
		this.unsubscribe.next();
	}

	private addSeoTags() {
		this.seoService.setTitle(
			'About us | Globy: Your partner in wholesale and international trade'
		);
		this.seoService.setDescription(
			'Online B2B Marketplace for wholesale trade. Free sign-up. No commissions. Thousands of direct suppliers from around the world'
		);
	}
}
