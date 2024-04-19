import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientBlogComponent } from './layout/client-blog.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { DefaultRoleGuard } from '../../../auth/guards/defaultRole/deafult-role.guard';
import { BlogNewsComponent } from './pages/blog-news/blog-news.component';
import { BlogTradeGuideComponent } from './pages/blog-trade-guide/blog-trade-guide.component';
import { BlogAnalysisComponent } from './pages/blog-analysis/blog-analysis.component';
import { BlogMarketExpertsComponent } from './pages/blog-market-experts/blog-market-experts.component';
import { BlogMarketUpdatesComponent } from './pages/blog-market-updates/blog-market-updates.component';
import {
	BlogLogisticSupplyChainComponent
} from './pages/blog-logistic-supply-chain/blog-logistic-supply-chain.component';
import { BlogDetailsComponent } from "./pages/blog-details/layout/blog-details.component";
import { BlogTaggedComponent } from "./pages/blog-tagged/blog-tagged.component";

const routes: Routes = [
	{
		path: '',
		component: ClientBlogComponent,
		children: [
			{
				path: '',
				component: BlogHomeComponent
			},
			{
				path: 'news',
				component: BlogNewsComponent
			},
			{
				path: 'trade-guide',
				component: BlogTradeGuideComponent
			},
			{
				path: 'analysis',
				component: BlogAnalysisComponent
			},
			{
				path: 'market-experts',
				component: BlogMarketExpertsComponent
			},
			{
				path: 'market-updates',
				component: BlogMarketUpdatesComponent
			},
			{
				path: 'logistics-and-supply-chain',
				component: BlogLogisticSupplyChainComponent
			},
			{
				path: 'tag',
				children: [
					{
						path: ':tag',
						component: BlogTaggedComponent
					}
				]
			},
			{
				path: ':id',
				component: BlogDetailsComponent,
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Trading Wiki'
					},
				},
			},
			{
				path: ':id/:id',
				loadChildren: () =>
					import(
						'../client-blog-authors-page/client-blog-authors-page.module'
						).then((m) => m.ClientBlogAuthorsPageModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Trading Wiki',
					},
				},
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientBlogRoutingModule {}
