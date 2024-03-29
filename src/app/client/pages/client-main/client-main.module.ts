import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientMainComponent } from './client-main.component';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { SwiperComponent } from '../../shared/components/swiper/swiper.component';
import { B2bNgxButtonModule } from '@b2b/ngx-button';

const routes: Routes = [{ path: '', component: ClientMainComponent }];

@NgModule({
	declarations: [ClientMainComponent, SwiperComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		B2bNgxInputModule,
		B2bNgxIconModule,
		B2bNgxButtonModule,
		NgOptimizedImage,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientMainModule {}
