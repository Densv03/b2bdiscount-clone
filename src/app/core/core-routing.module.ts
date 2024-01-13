import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '../core/layout/core.component';
import { RedirectGuard } from './guards/redirect.guard';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { AuthService } from '../auth/services/auth/auth.service';
import { LanguagesPreload } from './providers/languages-preload/languages-preload';
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
				path: 'admin',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('../../../admin/src/app/admin.module').then(
						(m) => m.AdminModule
					),
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
				path: 'admin',
				canActivate: [RoleGuard],
				loadChildren: () =>
					import('../../../admin/src/app/admin.module').then(
						(m) => m.AdminModule
					),
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
			scrollPositionRestoration: 'top',
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
