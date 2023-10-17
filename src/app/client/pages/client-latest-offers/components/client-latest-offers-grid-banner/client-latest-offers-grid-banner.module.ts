import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLatestOffersGridBannerComponent } from './client-latest-offers-grid-banner.component';
import { B2bNgxButtonModule } from '@b2b/ngx-button';

@NgModule({
	declarations: [ClientLatestOffersGridBannerComponent],
	exports: [ClientLatestOffersGridBannerComponent],
	imports: [CommonModule, B2bNgxButtonModule],
})
export class ClientLatestOffersGridBannerModule {}
