import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLogisticProfileDetailsComponent } from './admin-logistic-profile-details.component';

const routes: Routes = [
	{
		path: '',
		component: AdminLogisticProfileDetailsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminLogisticProfileDetailsRoutingModule {}
