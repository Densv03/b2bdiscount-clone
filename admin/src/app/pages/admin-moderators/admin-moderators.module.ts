import { NgModule } from '@angular/core';
import { AdminModeratorsComponent } from './admin-moderators.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { B2bNgxMultiselectModule } from '@b2b/ngx-multiselect';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [AdminModeratorsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: AdminModeratorsComponent }]),
		MatTableModule,
		B2bNgxMultiselectModule,
		B2bNgxButtonModule,
		MatDialogModule,
	],
})
export class AdminModeratorsModule {}
