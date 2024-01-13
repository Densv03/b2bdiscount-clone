import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderResourcesComponent } from './header-resources.component';
import { RouterLink } from '@angular/router';

@NgModule({
	declarations: [HeaderResourcesComponent],
	exports: [HeaderResourcesComponent],
	imports: [CommonModule, RouterLink],
})
export class HeaderResourcesModule {}
