import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { AutoHeightDirective } from '../auto-height.directive';
import { HeaderPopupComponent } from './components/header-popup/header-popup.component';
import { SectorsListComponent } from './components/sectors-list/sectors-list.component';
import { HeaderInfoListComponent } from './components/header-info-list/header-info-list.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderMobilePopupComponent } from './components/header-mobile-popup/header-mobile-popup.component';
import { RoleSwitcherModule } from '../../shared/components/role-switcher/role-switcher.module';
import { HeaderUserProfileModule } from './components/header-user-profile/header-user-profile.module';
import { HeaderBecomeUserInstructionsModule } from './components/header-become-user-instructions/header-become-user-instructions.module';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderResourcesModule } from './components/header-resources/header-resources.module';
import { HeaderSolutionsModule } from './components/header-solutions/header-solutions.module';
import { HeaderSourcingRequestComponent } from './components/header-sourcing-request/header-sourcing-request.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		HeaderComponent,
		HeaderPopupComponent,
		AutoHeightDirective,
		SectorsListComponent,
		HeaderInfoListComponent,
		HeaderMobilePopupComponent,
		TooltipDirective,
		TooltipComponent,
		HeaderSourcingRequestComponent,
	],
	exports: [HeaderComponent],
	imports: [
		CommonModule,
		B2bNgxInputModule,
		B2bNgxIconModule,
		B2bNgxImageModule,
		RouterLink,
		B2bNgxButtonModule,
		AngularSvgIconModule,
		RoleSwitcherModule,
		HeaderUserProfileModule,
		HeaderBecomeUserInstructionsModule,
		ReactiveFormsModule,
		FormsModule,
		RouterLinkWithHref,
		HeaderResourcesModule,
		HeaderSolutionsModule,
		MatIconModule,
	],
})
export class HeaderModule {}
