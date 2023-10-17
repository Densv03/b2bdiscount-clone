import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientBlogAuthorsPageComponent } from './layout/client-blog-authors-page.component';

const routes: Routes = [
	{
		path: '',
		component: ClientBlogAuthorsPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientBlogAuthorsPageRoutingModule {}
