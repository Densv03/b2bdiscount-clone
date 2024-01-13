import { NgModule } from '@angular/core';
import { CargoExplanationModalComponent } from './cargo-explanation-modal.component';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	imports: [B2bNgxIconModule, MatDialogModule],
	declarations: [CargoExplanationModalComponent],
})
export class CargoExplanationModalModule {}
