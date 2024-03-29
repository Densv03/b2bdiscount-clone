import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInformationGuard } from '../../../src/app/auth/guards/companyInformation/company-information.guard';
import { ClientSourcingRequestAddRfqComponent } from '../../../src/app/client/pages/client-sourcing-request/components/client-sourcing-request-add-rfq/client-sourcing-request-add-rfq.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { LogoutComponent } from './auth/components/logout/logout.component';
import { Layout } from './layout/layout.enum';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		data: {
			layout: Layout.EMPTY,
		},
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'login',
			},
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'logout',
				component: LogoutComponent,
			},
		],
	},

	{
		path: '',
		component: LayoutComponent,
		data: {
			layout: Layout.SIDE_NAV,
		},
		canActivate: [AdminGuard],
		children: [
			{
				path: 'articles',
				loadChildren: () =>
					import('./pages/admin-articles/admin-articles.module').then(
						(m) => m.AdminArticlesModule
					),
			},
			{
				path: 'articles/:id',
				loadChildren: () =>
					import('./pages/admin-article/admin-article.module').then(
						(m) => m.AdminArticleModule
					),
			},
			{
				path: 'tariffs',
				loadChildren: () =>
					import('./pages/admin-article/admin-article.module').then(
						(m) => m.AdminArticleModule
					),
			},
			{
				path: 'article-categories',
				loadChildren: () =>
					import(
						'./pages/admin-article-categories/admin-article-categories.module'
					).then((m) => m.AdminArticleCategoriesModule),
			},
			{
				path: 'blog',
				loadChildren: () =>
					import('./pages/admin-blog/admin-blog.module').then(
						(m) => m.AdminBlogModule
					),
			},
			{
				path: 'blog/:id',
				loadChildren: () =>
					import('./pages/admin-blog-post/admin-blog-post.module').then(
						(m) => m.AdminBlogPostModule
					),
			},
			{
				path: 'users',
				loadChildren: () =>
					import('./pages/admin-users/admin-users.module').then(
						(m) => m.AdminUsersModule
					),
			},
			{
				path: 'users/:id',
				loadChildren: () =>
					import('../../../src/app/client/pages/client-profile/pages/client-profile-settings/layout/client-profile-settings.component').then(m => m.ClientProfileSettingsComponent),
			},
			{
				path: 'offers',
				loadChildren: () =>
					import('./pages/admin-offers/admin-offers.module').then(
						(m) => m.AdminOffersModule
					),
			},
			{
				path: 'offers/:id',
				loadChildren: () =>
					import(
						'../../../src/app/client/pages/client-profile/pages/client-profile-add-offer/client-profile-add-offer.module'
					).then((m) => m.ClientProfileAddOfferModule),
			},
			{
				path: 'offer',
				loadChildren: () =>
					import('./pages/admin-offer/admin-offer.module').then(
						(m) => m.AdminOfferModule
					),
				canActivate: [CompanyInformationGuard],
			},
			{
				path: 'offer-categories',
				loadChildren: () =>
					import(
						'./pages/admin-offer-categories/admin-offer-categories.module'
					).then((m) => m.AdminOfferCategoriesModule),
			},
			{
				path: 'sourcing-request',
				loadChildren: () =>
					import(
						'./pages/admin-sourcing-request/admin-sourcing-request.module'
					).then((m) => m.AdminSourcingRequestModule),
			},
			{
				path: 'b2bmarket',
				loadChildren: () =>
					import('./pages/admin-marketplace/admin-marketplace.module').then(
						(m) => m.AdminMarketplaceModule
					),
			},
			{
				path: 'moderators',
				loadChildren: () =>
					import('./pages/admin-moderators/admin-moderators.module').then(
						(m) => m.AdminModeratorsModule
					),
			},
			{
				path: 'sourcing-request/:id',
				component: ClientSourcingRequestAddRfqComponent,
				// loadChildren: () =>
				// 	import("../client/pages/client-sourcing-request/client-sourcing-request-listing/client-sourcing-request-quotation-form/client-sourcing-request-quotation-form.module")
				// 		.then(m => m.ClientSourcingRequestQuotationFormModule)
			},
			{
				path: 'manager',
				loadChildren: () =>
					import('./pages/admin-manager/admin-manager.module').then(
						(m) => m.AdminManagerModule
					),
			},
			{
				path: 'billing',
				loadChildren: () =>
					import('./pages/admin-billing/admin-billing.module').then(
						(m) => m.AdminBillingModule
					),
			},
			{
				path: 'companies',
				loadChildren: () =>
					import('./pages/admin-companies/admin-companies.module').then(
						(m) => m.AdminCompaniesModule
					),
			},
			{
				path: 'logistic',
				loadChildren: () =>
					import('./pages/admin-logistic/admin-logistic.module').then(
						(m) => m.AdminLogisticModule
					),
			},
			{
				path: 'logistic/:id',
				loadChildren: () =>
					import(
						'./pages/admin-logistic-profile-details/admin-logistic-profile-details.module'
					).then((m) => m.AdminLogisticProfileDetailsModule),
				data: { breadcrumbs: [{ label: 'LOGISTIC', url: '/admin/logistic' }] },
			},
			{
				path: 'homepage',
				loadChildren: () =>
					import('./pages/admin-homepage/admin-homepage.module').then(
						(m) => m.AdminHomepageModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
