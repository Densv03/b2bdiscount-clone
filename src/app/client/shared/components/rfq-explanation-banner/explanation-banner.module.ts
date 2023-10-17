import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplanationBannerComponent } from './explanation-banner.component';

@NgModule({
	declarations: [ExplanationBannerComponent],
	exports: [ExplanationBannerComponent],
	imports: [CommonModule],
})
export class ExplanationBannerModule {}
