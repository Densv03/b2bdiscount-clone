import { NgModule } from '@angular/core';
import { B2bNgxLogoComponent } from './layout/ngx-logo.component';
import {CommonModule} from "@angular/common";
import {SafePipe} from "../../../../src/app/core/pipes/safe.pipe";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import {MatError} from "@angular/material/form-field";



@NgModule({
  declarations: [
    B2bNgxLogoComponent,
    SafePipe
  ],
    imports: [
        CommonModule,
        B2bNgxIconModule,
        B2bNgxButtonModule,
        MatIcon,
        MatButton,
        MatError,
    ],
  exports: [
    B2bNgxLogoComponent
  ]
})
export class B2bNgxLogoModule { }
