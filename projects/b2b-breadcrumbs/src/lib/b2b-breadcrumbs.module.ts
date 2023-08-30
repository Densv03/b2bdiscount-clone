import {CommonModule, NgForOf} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { B2bBreadcrumbsComponent} from './b2b-breadcrumbs.component';


@NgModule({
  declarations: [
		B2bBreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
		B2bBreadcrumbsComponent
  ]
})
export class B2bBreadcrumbsModule { }
