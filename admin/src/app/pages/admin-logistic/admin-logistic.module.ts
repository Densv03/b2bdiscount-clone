import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLogisticRoutingModule } from './admin-logistic-routing.module';
import { AdminLogisticComponent } from './admin-logistic.component';
import { AddLogisticProfileDialogComponent } from './components/add-logistic-profile-dialog/add-logistic-profile-dialog.component';
import { B2bNgxCountrySelectModule } from 'projects/ngx-country-select/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { B2bNgxTelModule } from 'projects/ngx-tel/src/public-api';
import { B2bNgxCheckboxModule } from 'projects/ngx-checkbox/src/public-api';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { MatTableModule } from '@angular/material/table';
import { CreateDirectionDialogComponent } from './components/create-direction-dialog/create-direction-dialog.component';
import { B2bNgxSelectModule } from 'projects/ngx-select/src/public-api';
import { B2bNgxRadioModule } from 'projects/ngx-radio/src/public-api';
import { PaginationModule } from '../../../../../src/app/client/shared/components/pagination/pagination.module';
import { B2bNgxIconModule } from '@b2b/ngx-icon';

@NgModule({
	declarations: [
		AdminLogisticComponent,
		AddLogisticProfileDialogComponent,
		CreateDirectionDialogComponent,
	],
  imports: [
    CommonModule,
    AdminLogisticRoutingModule,
    B2bNgxCountrySelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    B2bNgxTelModule,
    B2bNgxCheckboxModule,
    B2bNgxPaginationModule,
    MatTableModule,
    B2bNgxSelectModule,
    B2bNgxRadioModule,
    PaginationModule,
    B2bNgxIconModule,
  ],
})
export class AdminLogisticModule {}
