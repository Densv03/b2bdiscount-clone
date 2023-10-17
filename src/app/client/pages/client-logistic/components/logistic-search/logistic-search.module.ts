import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticSearchComponent } from './logistic-search.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { B2bDatepickerModule } from '@b2b/datepicker';

@NgModule({
	declarations: [LogisticSearchComponent],
	exports: [LogisticSearchComponent],
	imports: [
		CommonModule,
		AngularSvgIconModule,
		B2bNgxIconModule,
		FormsModule,
		TypeaheadModule,
		B2bDatepickerModule,
	],
})
export class LogisticSearchModule {}
