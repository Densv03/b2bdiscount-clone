import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientUnclaimedCargoComponent } from './layout/client-unclaimed-cargo.component';

const routes: Routes = [
	{
		path: '',
		component: ClientUnclaimedCargoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientUnclaimedCargoRoutingModule {}
