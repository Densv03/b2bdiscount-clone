import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClientProfileYourAccountComponent} from './layout/client-profile-your-account.component';
import {DefaultRoleGuard} from '../../../../../auth/guards/defaultRole/deafult-role.guard';
import {CanDeactivateGuard} from "../client-profile-settings-new/guard/form-save.guard";

const routes: Routes = [
	{
		path: '',
		component: ClientProfileYourAccountComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'settings',
			},
			{
				path: 'settings',
				canDeactivate: [CanDeactivateGuard],
				canActivate: [DefaultRoleGuard],
				loadComponent: () =>
					import(
						'../client-profile-settings-new/layout/client-profile-settings-new.component'
						).then((m) => m.ClientProfileSettingsNewComponent),
			},
			{
				path: 'settings/profile',
				canActivate: [DefaultRoleGuard],
				loadComponent: () =>
					import(
						'../client-profile-settings/layout/client-profile-settings.component'
						).then(m => m.ClientProfileSettingsComponent)
			},
			{
				path: 'settings/following-products',
				canActivate: [DefaultRoleGuard],
				loadComponent: () =>
					import(
						'../client-profile-following-products/client-profile-following-products.component'
						).then((m) => m.ClientProfileFollowingProductsComponent),
			},
			{
				path: 'company-information',
				redirectTo: 'settings',
			},
			{
				path: 'billing',
				canActivate: [DefaultRoleGuard],
				loadChildren: () =>
					import(
						'../client-profile-billing/client-profile-billing.module'
						).then((m) => m.ClientProfileBillingModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientProfileYourAccountRoutingModule {
}
