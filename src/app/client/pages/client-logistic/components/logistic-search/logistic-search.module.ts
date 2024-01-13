import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticSearchComponent } from './logistic-search.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { B2bDatepickerModule } from '@b2b/datepicker';
import { B2bNgxSelectModule } from '@b2b/ngx-select';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

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
		B2bNgxSelectModule,
		BsDropdownModule,
		MatSliderModule,
		ReactiveFormsModule,
		MatIconModule,
	],
})
export class LogisticSearchModule {}
