import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCategoryDropdownsComponent } from './layout/ngx-category-dropdowns.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSubcategorySelectablePartComponent } from './components/ngx-subcategory-selectable-part/ngx-subcategory-selectable-part.component';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { TreeviewModule } from '@b2b/ngx-treeview';
import { B2bNgxToggleModule } from '@b2b/ngx-toggle';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    B2bNgxCheckboxModule,
    B2bNgxIconModule,
    TreeviewModule,
    B2bNgxToggleModule
  ],
  declarations: [
    NgxCategoryDropdownsComponent,
    NgxSubcategorySelectablePartComponent,
  ],
  exports: [
    NgxCategoryDropdownsComponent,
    NgxSubcategorySelectablePartComponent,
  ],
})
export class NgxCategoryDropdownsModule {}
