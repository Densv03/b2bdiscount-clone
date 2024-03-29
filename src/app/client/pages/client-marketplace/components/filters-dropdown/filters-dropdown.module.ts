import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersDropdownComponent } from './filters-dropdown.component';
import { RouterLink } from '@angular/router';
@NgModule({
	declarations: [FiltersDropdownComponent],
	exports: [FiltersDropdownComponent],
	imports: [CommonModule, RouterLink],
})
export class FiltersDropdownModule {}
