import { NgModule } from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import { BlogGridListComponent } from './blog-grid-list/blog-grid-list.component';
import {RouterLinkWithHref} from "@angular/router";
import {B2bNgxLinkModule} from "@b2b/ngx-link";

@NgModule({
	declarations: [ConfirmationDialogComponent, BlogGridListComponent],
	imports: [CommonModule, B2bNgxButtonModule, NgOptimizedImage, RouterLinkWithHref, B2bNgxLinkModule],
	exports: [
		BlogGridListComponent
	]
})
export class SharedModule {}
