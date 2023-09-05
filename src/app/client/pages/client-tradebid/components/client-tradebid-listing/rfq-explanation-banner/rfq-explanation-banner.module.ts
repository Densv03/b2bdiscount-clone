import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfqExplanationBannerComponent } from "./rfq-explanation-banner.component";



@NgModule({
	declarations: [RfqExplanationBannerComponent],
	exports: [
		RfqExplanationBannerComponent
	],
	imports: [
		CommonModule
	]
})
export class RfqExplanationBannerModule { }
