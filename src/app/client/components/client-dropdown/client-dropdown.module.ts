import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDropdownComponent } from './client-dropdown.component';

@NgModule({
	declarations: [ClientDropdownComponent],
	exports: [ClientDropdownComponent],
	imports: [CommonModule],
})
export class ClientDropdownModule {}
