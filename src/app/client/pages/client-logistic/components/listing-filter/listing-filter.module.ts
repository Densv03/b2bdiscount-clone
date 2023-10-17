import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ListingFilterComponent } from './listing-filter.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
	declarations: [ListingFilterComponent],
	exports: [ListingFilterComponent],
	imports: [CommonModule, FormsModule, MatSliderModule],
})
export class ListingFilterModule {}
