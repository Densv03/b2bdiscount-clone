import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagerRoutingModule } from './admin-manager-routing.module';
import { AdminManagerComponent } from './layout/admin-manager.component';
import { B2bNgxInputModule } from 'projects/ngx-input/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from 'projects/ngx-button/src/public-api';
import { MatTableModule } from '@angular/material/table';
import { B2bNgxIconModule } from 'projects/ngx-icon/src/public-api';
import {PaginationModule} from "../../../../../src/app/client/shared/components/pagination/pagination.module";

@NgModule({
	declarations: [AdminManagerComponent],
	imports: [
		CommonModule,
		AdminManagerRoutingModule,
		B2bNgxInputModule,
		ReactiveFormsModule,
		B2bNgxButtonModule,
		FormsModule,
		B2bNgxInputModule,
		MatTableModule,
		B2bNgxIconModule,
		PaginationModule,
	],
})
export class AdminManagerModule {}
