import { NgModule } from '@angular/core';
import { HeaderUserProfileComponent } from './header-user-profile.component';
import { RoleSwitcherModule } from '../../../../shared/components/role-switcher/role-switcher.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
	declarations: [HeaderUserProfileComponent],
	imports: [
		CommonModule,
		RoleSwitcherModule,
		AngularSvgIconModule,
		RouterLinkWithHref,
	],
	exports: [HeaderUserProfileComponent],
})
export class HeaderUserProfileModule {}
