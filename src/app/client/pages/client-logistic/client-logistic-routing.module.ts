import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLogisticComponent } from './client-logistic.component';

const routes: Routes = [
	{
		path: '',
		component: ClientLogisticComponent,
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientLogisticRoutingModule {}
