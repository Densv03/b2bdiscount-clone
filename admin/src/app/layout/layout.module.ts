import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { EmptyComponent } from './empty/empty.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminModule } from '../admin.module';

@NgModule({
	declarations: [EmptyComponent, SideNavComponent, LayoutComponent],
	imports: [CommonModule, RouterOutlet, AdminModule],
})
export class LayoutModule {}
