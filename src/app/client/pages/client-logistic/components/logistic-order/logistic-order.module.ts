import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticOrderComponent } from './logistic-order.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { B2bNgxButtonModule } from '@b2b/ngx-button';

@NgModule({
	declarations: [LogisticOrderComponent],
	exports: [LogisticOrderComponent],
	imports: [CommonModule, AngularSvgIconModule, B2bNgxButtonModule],
})
export class LogisticOrderModule {}
