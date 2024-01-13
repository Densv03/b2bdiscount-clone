import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLogisticComponent } from './admin-logistic.component';
import { AdminLogisticProfileDetailsComponent } from '../admin-logistic-profile-details/admin-logistic-profile-details.component';

const routes: Routes = [
	{
		path: '',
		component: AdminLogisticComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminLogisticRoutingModule {}
