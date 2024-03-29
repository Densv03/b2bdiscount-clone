import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketCompanyInformationComponent } from './market-company-information.component';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bSvgIconComponent } from '../../../../../../shared/components/svg-icon/b2b-svg-icon.component';

@NgModule({
	declarations: [MarketCompanyInformationComponent],
	exports: [MarketCompanyInformationComponent],
	imports: [
		CommonModule,
		B2bNgxButtonModule,
		B2bNgxLinkModule,
		B2bNgxIconModule,
		B2bSvgIconComponent,
	],
})
export class MarketCompanyInformationModule {}
