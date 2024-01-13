import { NgModule } from '@angular/core';
import { ClientLatestOffersGridItemComponent } from './client-latest-offers-grid-item.component';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { RouterLinkWithHref } from '@angular/router';
import { B2bNgxImageModule } from '@b2b/ngx-image';

@NgModule({
	exports: [ClientLatestOffersGridItemComponent],
	imports: [
		CommonModule,
		B2bNgxButtonModule,
		TranslateModule,
		B2bNgxIconModule,
		NgxTippyModule,
		RouterLinkWithHref,
		B2bNgxImageModule,
	],
	declarations: [ClientLatestOffersGridItemComponent],
})
export class ClientLatestOffersGridItemModule {}
