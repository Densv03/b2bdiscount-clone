import { NgModule } from '@angular/core';
import { ClientProfileMarketplaceEditProductComponent } from './client-profile-marketplace-edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { B2bNgxSelectModule } from '@b2b/ngx-select';
import { B2bNgxFileModule } from '@b2b/ngx-file';
import { B2bNgxMultiselectModule } from '@b2b/ngx-multiselect';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { CommonModule } from '@angular/common';
import { CategoriesDialogModule } from '../../../../../../shared/components/categories-dialog/categories-dialog.module';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';
import { ClientProfileAddOfferModule } from '../../../client-profile-add-offer/client-profile-add-offer.module';
import { B2bDatepickerModule } from '@b2b/datepicker';
import { B2bNgxRadioModule } from '@b2b/ngx-radio';
import { SharedModule } from '../../../../../../shared/components/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileMarketplaceEditProductRoutingModule } from './client-profile-marketplace-edit-product-routing.module';
import {MatSuffix} from "@angular/material/form-field";

@NgModule({
    imports: [
        ClientProfileMarketplaceEditProductRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        B2bNgxInputModule,
        B2bNgxTextareaModule,
        B2bNgxSelectModule,
        B2bNgxFileModule,
        B2bNgxMultiselectModule,
        B2bNgxCountrySelectModule,
        B2bNgxButtonModule,
        B2bNgxIconModule,
        CategoriesDialogModule,
        B2bNgxCheckboxModule,
        DragDropModule,
        TranslateModule,
        ClientProfileAddOfferModule,
        B2bDatepickerModule,
        B2bNgxRadioModule,
        SharedModule,
        MatSuffix,
    ],
	declarations: [ClientProfileMarketplaceEditProductComponent],
})
export class ClientProfileMarketplaceEditProductModule {}
