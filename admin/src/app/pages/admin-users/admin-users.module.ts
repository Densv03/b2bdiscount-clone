import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { AdminUsersComponent } from './layout/admin-users.component';
import { AdminUsersListComponent } from './components/admin-users-list/admin-users-list.component';
import { B2bNgxDropdownModule } from 'projects/ngx-dropdown/src/public-api';
import { B2bNgxImageModule } from 'projects/ngx-image/src/public-api';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { B2bNgxIconModule } from 'projects/ngx-icon/src/public-api';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';
import { AdminUsersFiltersComponent } from './components/admin-users-filters/admin-users-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { B2bNgxTelModule } from 'projects/ngx-tel/src/public-api';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { B2bNgxCountrySelectModule } from 'projects/ngx-country-select/src/public-api';
import { B2bNgxToggleModule } from 'projects/ngx-toggle/src/public-api';
import { ChangeQuotesAmountDialogComponent } from './components/change-quotes-amount-dialog/change-quotes-amount-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TreeviewModule } from 'projects/ngx-treeview/src/public-api';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxDatatableModule } from '@siemens/ngx-datatable';
import {MatSortModule} from "@angular/material/sort";

@NgModule({
	declarations: [
		AdminUsersComponent,
		AdminUsersListComponent,
		AdminUsersFiltersComponent,
		ChangeQuotesAmountDialogComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		MatDialogModule,
		ReactiveFormsModule,
		AdminUsersRoutingModule,
		B2bNgxDropdownModule,
		B2bNgxImageModule,
		B2bNgxButtonModule,
		B2bNgxIconModule,
		B2bNgxPaginationModule,
		NgxDatatableModule,
		B2bNgxSelectModule,
		B2bNgxTelModule,
		B2bNgxInputModule,
		B2bNgxCountrySelectModule,
		B2bNgxToggleModule,
		TreeviewModule.forRoot(),
		NgxDaterangepickerMd.forRoot(),
		MatPaginatorModule,
		MatTableModule,
		MatSortModule,
	],
})
export class AdminUsersModule {}
