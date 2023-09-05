import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientMarketplaceListingRoutingModule } from './client-marketplace-listing-routing.module';
import {ClientMarketplaceListingComponent} from "./client-marketplace-listing.component";
import {B2bBreadcrumbsModule} from "@b2b/breadcrumbs";
import {ReactiveFormsModule} from "@angular/forms";
import {ClientMarketplaceModule} from "../client-marketplace.module";
import {B2bNgxInputModule} from "@b2b/ngx-input";
import {B2bNgxIconModule} from "@b2b/ngx-icon";
import {B2bNgxSelectModule} from "@b2b/ngx-select";
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {FiltersDropdownModule} from "../components/filters-dropdown/filters-dropdown.module";
import {FilterChipsModule} from "../components/filter-chips/filter-chips.module";
import {
	ClientMarketplaceListingGridModule
} from "../components/client-marketplace-listing-grid/client-marketplace-listing-grid.module";
import {PaginationModule} from "../../../shared/components/pagination/pagination.module";
import {SharedModule} from "../../../shared/components/shared.module";


@NgModule({
  declarations: [ClientMarketplaceListingComponent],
    imports: [
        CommonModule,
        ClientMarketplaceListingRoutingModule,
        B2bBreadcrumbsModule,
        ReactiveFormsModule,
        ClientMarketplaceModule,
        B2bNgxInputModule,
        B2bNgxIconModule,
        B2bNgxSelectModule,
        B2bNgxButtonModule,
        FiltersDropdownModule,
        FilterChipsModule,
        ClientMarketplaceListingGridModule,
        PaginationModule,
        SharedModule
    ]
})
export class ClientMarketplaceListingModule { }
