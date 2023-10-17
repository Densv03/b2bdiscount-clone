import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthJoinUsRoutingModule } from './auth-join-us-routing.module';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { AuthJoinUsRolesListComponent } from './components/auth-join-us-roles-list/auth-join-us-roles-list.component';
import { B2bNgxSkeletonModule } from '@b2b/ngx-skeleton';
import { AuthJoinUsComponent } from './layout/auth-join-us.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [AuthJoinUsComponent, AuthJoinUsRolesListComponent],
	imports: [
		CommonModule,
		AuthJoinUsRoutingModule,
		B2bNgxInputModule,
		B2bNgxLinkModule,
		B2bNgxIconModule,
		B2bNgxSkeletonModule,
		TranslateModule,
	],
})
export class AuthJoinUsModule {}
