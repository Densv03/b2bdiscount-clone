import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientBlogArticleComponent } from './layout/client-blog-article.component';
import { DefaultRoleGuard } from '../../../../../auth/guards/defaultRole/deafult-role.guard';

const routes: Routes = [
	{
		path: '',
		component: ClientBlogArticleComponent,
	// },
	// {
	// 	path: ':id',
	// 	canActivate: [DefaultRoleGuard],
	// 	loadChildren: () =>
	// 		import(
	// 			'../client-blog-authors-page/client-blog-authors-page.module'
	// 		).then((m) => m.ClientBlogAuthorsPageModule),
	// 	data: {
	// 		meta: {
	// 			title: 'Globy - Buy and Sell B2B Cargo with Discount!',
	// 			description: 'Globy - Trading Wiki',
	// 		},
	// 	},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientBlogArticleRoutingModule {}
