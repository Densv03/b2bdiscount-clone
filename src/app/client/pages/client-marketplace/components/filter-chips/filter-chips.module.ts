import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterChipsComponent } from './filter-chips.component';
import { B2bNgxIconModule } from '@b2b/ngx-icon';

@NgModule({
	declarations: [FilterChipsComponent],
	exports: [FilterChipsComponent],
	imports: [CommonModule, B2bNgxIconModule],
})
export class FilterChipsModule {}
