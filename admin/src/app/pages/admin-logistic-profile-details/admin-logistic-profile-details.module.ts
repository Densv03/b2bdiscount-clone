import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLogisticProfileDetailsRoutingModule } from './admin-logistic-profile-details-routing.module';
import { AdminLogisticProfileDetailsComponent } from './admin-logistic-profile-details.component';
import { SeaProfileComponent } from './components/sea-profile/sea-profile.component';
import { AirProfileComponent } from './components/air-profile/air-profile.component';
import { MatTableModule } from '@angular/material/table';
import { B2bNgxPaginationModule } from 'projects/ngx-pagination/src/public-api';
import { B2bBreadcrumbsModule } from 'projects/b2b-breadcrumbs/src/public-api';
import { MatTabsModule } from '@angular/material/tabs';
import { B2bDatepickerModule } from 'projects/b2b-datepicker/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PaginationModule } from '../../../../../src/app/client/shared/components/pagination/pagination.module';

@NgModule({
	declarations: [
		AdminLogisticProfileDetailsComponent,
		SeaProfileComponent,
		AirProfileComponent,
	],
	imports: [
		CommonModule,
		AdminLogisticProfileDetailsRoutingModule,
		MatTableModule,
		B2bNgxPaginationModule,
		B2bBreadcrumbsModule,
		MatTabsModule,
		B2bDatepickerModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatIconModule,
		PaginationModule,
	],
})
export class AdminLogisticProfileDetailsModule {}
