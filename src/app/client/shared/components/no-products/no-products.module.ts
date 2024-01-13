import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoProductsComponent } from './no-products.component';
import { SharedModule } from '../shared.module';

@NgModule({
	declarations: [NoProductsComponent],
	exports: [NoProductsComponent],
	imports: [CommonModule, SharedModule],
})
export class NoProductsModule {}
