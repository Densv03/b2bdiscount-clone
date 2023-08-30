﻿import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';
import { DropdownMenuDirective } from './directives/dropdown-menu.directive';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { DropdownTreeviewComponent } from './components/dropdown-treeview/dropdown-treeview.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { TreeviewItemComponent } from './components/treeview-item/treeview-item.component';
import { TreeviewPipe } from './pipes/treeview.pipe';
import { TreeviewI18n, DefaultTreeviewI18n } from './models/treeview-i18n';
import { TreeviewConfig } from './models/treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from './helpers/treeview-event-parser';
import { B2bNgxTreeviewComponent } from './layout/ngx-treeview.component';
import { B2bNgxIconModule } from '@b2b/ngx-icon';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    B2bNgxIconModule
  ],
  declarations: [
    TreeviewComponent,
    TreeviewItemComponent,
    TreeviewPipe,
    DropdownDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    DropdownTreeviewComponent,
    B2bNgxTreeviewComponent
  ], exports: [
    TreeviewComponent,
    TreeviewPipe,
    DropdownTreeviewComponent,
    B2bNgxTreeviewComponent
  ]
})
export class TreeviewModule {
  static forRoot(): ModuleWithProviders<TreeviewModule> {
    return {
      ngModule: TreeviewModule,
      providers: [
        TreeviewConfig,
        { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
        { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
      ]
    };
  }
}
