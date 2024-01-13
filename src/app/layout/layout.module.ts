import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './layouts/empty/empty.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
	declarations: [EmptyComponent, SideNavComponent],
	imports: [CommonModule, RouterOutlet],
})
export class LayoutModule {}
