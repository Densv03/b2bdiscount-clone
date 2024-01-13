import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminOffersListComponent } from './layout/admin-offers-list.component';
import { B2bNgxDropdownModule } from 'projects/ngx-dropdown/src/public-api';
import { B2bNgxImageModule } from 'projects/ngx-image/src/public-api';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxIconModule } from 'projects/ngx-icon/src/public-api';

@NgModule({
	declarations: [AdminOffersListComponent],
	exports: [AdminOffersListComponent],
	imports: [
		CommonModule,
		RouterModule,
		B2bNgxDropdownModule,
		B2bNgxImageModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
	],
})
export class AdminOffersListModule {}
