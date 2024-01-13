import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { BlogGridListComponent } from './blog-grid-list/blog-grid-list.component';
import { RouterLinkWithHref } from '@angular/router';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { ClientSubheaderComponent } from './client-subheader/client-subheader.component';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { ReactiveFormsModule } from '@angular/forms';
import { ClaimButtonsComponent } from './claim-buttons/claim-buttons.component';
import { CustomCarouselComponent } from './custom-carousel/custom-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesMobileListComponent } from './categories-mobile-list/categories-mobile-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ParentCategoriesMobileListComponent } from './parent-categories-mobile-list/parent-categories-mobile-list.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
	declarations: [
		ConfirmationDialogComponent,
		BlogGridListComponent,
		ClientSubheaderComponent,
		ClaimButtonsComponent,
		CustomCarouselComponent,
		CategoriesMobileListComponent,
		ParentCategoriesMobileListComponent,
	],
	imports: [
		CommonModule,
		B2bNgxButtonModule,
		NgOptimizedImage,
		RouterLinkWithHref,
		B2bNgxLinkModule,
		B2bNgxIconModule,
		B2bNgxInputModule,
		ReactiveFormsModule,
		MatIconModule,
		MatDialogModule,
		MatRippleModule,
	],
	exports: [
		BlogGridListComponent,
		ClientSubheaderComponent,
		ClaimButtonsComponent,
		CustomCarouselComponent,
	],
})
export class SharedModule {}
