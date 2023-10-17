import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteToSupportComponent } from './write-to-support.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [WriteToSupportComponent],
	exports: [WriteToSupportComponent],
	imports: [CommonModule, TranslateModule],
})
export class WriteToSupportModule {}
