import { NgModule } from '@angular/core';
import { HeaderBecomeUserInstructionsComponent } from './header-become-user-instructions.component';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
	exports: [HeaderBecomeUserInstructionsComponent],
	imports: [CommonModule, B2bNgxIconModule, RouterLinkWithHref],
	declarations: [HeaderBecomeUserInstructionsComponent],
})
export class HeaderBecomeUserInstructionsModule {}
