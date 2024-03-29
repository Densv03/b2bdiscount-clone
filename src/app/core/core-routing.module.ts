import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './layout/core.component';
import { RedirectGuard } from './guards/redirect.guard';
import { AuthorizedUserGuard } from '../auth/guards/authhorizedUser/authorizedUser.guard';

const routes: Routes = [
	{
		path: 'ru',
		component: CoreComponent,
		// canActivateChild: [MetaGuard],
		data: {
			meta: {
				hreflang: 'ru',
			},
		},
		children: [
			{
				path: 'auth',
				loadChildren: () =>
					import('../auth/auth.module').then((m) => m.AuthModule),
			},
			{
				path: '',
				loadChildren: () =>
					import('../client/client.module').then((m) => m.ClientModule),
			},
		],
	},
	{
		path: '',
		component: CoreComponent,
		canActivate: [RedirectGuard],
		data: {
			meta: {
				hreflang: 'en',
			},
		},
		children: [
			{
				path: 'auth',
				loadChildren: () =>
					import('../auth/auth.module').then((m) => m.AuthModule),
				canActivate: [AuthorizedUserGuard],
			},
			{
				path: '',
				loadChildren: () =>
					import('../client/client.module').then((m) => m.ClientModule),
			},
		],
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
