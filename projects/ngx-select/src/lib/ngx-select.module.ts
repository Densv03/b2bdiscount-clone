import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { B2bNgxSelectComponent } from "./layout/ngx-select.component";
import { NgSelectModule } from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {B2bNgxCheckboxModule} from "@b2b/ngx-checkbox";

@NgModule({
	imports: [CommonModule, NgSelectModule, ReactiveFormsModule, FormsModule, B2bNgxCheckboxModule],
	declarations: [B2bNgxSelectComponent],
	exports: [B2bNgxSelectComponent],
})
export class B2bNgxSelectModule {}
