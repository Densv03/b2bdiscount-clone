import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSolutionsComponent } from './header-solutions.component';
import { RouterLink } from '@angular/router';

@NgModule({
	declarations: [HeaderSolutionsComponent],
	exports: [HeaderSolutionsComponent],
	imports: [CommonModule, RouterLink],
})
export class HeaderSolutionsModule {}
