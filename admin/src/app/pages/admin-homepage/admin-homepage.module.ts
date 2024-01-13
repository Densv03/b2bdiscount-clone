import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomepageRoutingModule } from './admin-homepage-routing.module';
import { AdminHomepageComponent } from './layout/admin-homepage.component';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';

@NgModule({
	declarations: [AdminHomepageComponent],
	imports: [
		CommonModule,
		AdminHomepageRoutingModule,
		B2bNgxButtonModule,
		B2bNgxInputModule,
		ReactiveFormsModule,
		B2bNgxSelectModule,
	],
})
export class AdminHomepageModule {}
