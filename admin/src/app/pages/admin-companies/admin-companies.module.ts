import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCompaniesRoutingModule } from './admin-companies-routing.module';
import { AdminCompaniesComponent } from './layout/admin-companies.component';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { B2bNgxIconModule } from 'projects/ngx-icon/src/public-api';
import { MatTableModule } from '@angular/material/table';
import { B2bNgxCountrySelectModule } from 'projects/ngx-country-select/src/public-api';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
	declarations: [AdminCompaniesComponent],
	imports: [
		CommonModule,
		AdminCompaniesRoutingModule,
		B2bNgxInputModule,
		ReactiveFormsModule,
		B2bNgxPaginationModule,
		B2bNgxIconModule,
		MatTableModule,
		B2bNgxCountrySelectModule,
		NgxDaterangepickerMd.forRoot(),
	],
})
export class AdminCompaniesModule {}
