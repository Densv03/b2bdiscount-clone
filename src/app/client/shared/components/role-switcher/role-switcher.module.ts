import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleSwitcherComponent } from './role-switcher.component';

@NgModule({
	declarations: [RoleSwitcherComponent],
	exports: [RoleSwitcherComponent],
	imports: [CommonModule],
})
export class RoleSwitcherModule {}
