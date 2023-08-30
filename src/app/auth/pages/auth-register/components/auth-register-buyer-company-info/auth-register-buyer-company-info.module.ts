import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRegisterBuyerCompanyInfoComponent} from "./auth-register-buyer-company-info.component";
import {ReactiveFormsModule} from "@angular/forms";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
// import {NgxCategoryDropdownsModule} from "../../../../../../../../../lib/ngx-category-dropdowns/src";
import {B2bNgxSelectModule} from "@b2b/ngx-select";
import {B2bNgxCountrySelectModule} from "@b2b/ngx-country-select";
import {
	NgxCategoryDropdownsModule
} from "../../../../../../../projects/ngx-category-dropdowns/src/lib/ngx-category-dropdowns.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
    declarations: [AuthRegisterBuyerCompanyInfoComponent],
    exports: [
        AuthRegisterBuyerCompanyInfoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        B2bNgxButtonModule,
        NgxCategoryDropdownsModule,
        B2bNgxSelectModule,
        B2bNgxCountrySelectModule,
        TranslateModule
    ]
})
export class AuthRegisterBuyerCompanyInfoModule { }
