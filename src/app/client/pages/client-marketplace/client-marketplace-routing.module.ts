import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMarketplaceAddProductComponent } from './components/client-marketplace-add-product/client-marketplace-add-product.component';
import { ClientMarketplaceSupplierListingComponent } from './components/client-marketplace-supplier-listing/client-marketplace-supplier-listing.component';
import { CompanyInformationGuard } from '../../../auth/guards/companyInformation/company-information.guard';
import { AuthGuard } from '../../../auth/guards/auth/auth.guard';
import { ClientMarketCompanyPageComponent } from './pages/client-market-company-page/client-market-company-page.component';
import { BuyerGuard } from '../../../auth/guards/buyer/buyer.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import(
				'./components/client-marketplace-main/client-marketplace-main.module'
			).then((m) => m.ClientMarketplaceMainModule),
	},
	{
		path: 'listing',
		loadChildren: () =>
			import('./layout/client-marketplace-listing.module').then(
				(m) => m.ClientMarketplaceListingModule
			),
		data: {
			breadcrumbs: [
				{ label: 'Home', url: '/' },
				{ label: 'B2BMARKET', url: '/b2bmarket' },
				{ label: 'OFFERS', url: '/b2bmarket/listing' },
			],
		},
	},
	{
		path: 'supplier-listing/:id',
		component: ClientMarketplaceSupplierListingComponent,
	},
	{
		path: 'product',
		canActivate: [AuthGuard, CompanyInformationGuard, BuyerGuard],
		component: ClientMarketplaceAddProductComponent,
	},
	{
		path: 'product/:id',
		component: ClientMarketplaceAddProductComponent,
		data: {
			breadcrumbs: [
				{ label: 'Home', url: '/' },
				{ label: 'B2BMARKET', url: '/b2bmarket' },
				{ label: 'OFFERS', url: '/b2bmarket/listing' },
			],
		},
	},
	{
		path: 'supplier/:id',
		loadChildren: () =>
			import(
				'./components/client-marketplace-supplier-listing/client-marketplace-supplier-listing.module'
			).then((m) => m.ClientMarketplaceSupplierListingModule),
	},
	{
		path: 'category-listing',
		loadChildren: () =>
			import('./pages/category-listing/category-listing.module').then(
				(m) => m.CategoryListingModule
			),
	},
	{
		path: 'company/:companyId',
		loadChildren: () =>
			import(
				'./pages/client-market-company-page/client-market-company-page.module'
			).then((m) => m.ClientMarketCompanyPageModule),
	},
	{
		path: 'product-posting-complete',
		loadChildren: () =>
			import(
				'./components/product-posting-complete/product-posting-complete.module'
			).then((m) => m.ProductPostingCompleteModule),
	},
	{
		path: ':category',
		loadChildren: () =>
			import('./components/market-sector/market-sector.module').then(
				(m) => m.MarketSectorModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientMarketplaceRoutingModule {}
