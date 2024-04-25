import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ClientMarketplaceRoutingModule } from './client-marketplace-routing.module';
import { ClientMarketplaceFiltersComponent } from './components/client-marketplace-filters/client-marketplace-filters.component';
import { ClientMarketplaceAddProductComponent } from './components/client-marketplace-add-product/client-marketplace-add-product.component';
import { ClientMarketplaceSupplierListingComponent } from './components/client-marketplace-supplier-listing/client-marketplace-supplier-listing.component';
import { ClientMarketplaceSupplierFiltersComponent } from './components/client-marketplace-supplier-filters/client-marketplace-supplier-filters.component';
import { B2bNgxSelectModule } from '@b2b/ngx-select';
import { B2bNgxCountrySelectModule } from '@b2b/ngx-country-select';
import { ReactiveFormsModule } from '@angular/forms';
import { B2bNgxButtonModule } from '@b2b/ngx-button';
import { ClientMarketplaceSupplierInfoComponent } from './components/client-marketplace-supplier-info/client-marketplace-supplier-info.component';
import { B2bNgxInputModule } from '@b2b/ngx-input';
import { B2bNgxIconModule } from '@b2b/ngx-icon';
import { ClientMarketplaceListingListComponent } from './components/client-marketplace-listing-list/client-marketplace-listing-list.component';
import { B2bNgxLinkModule } from '@b2b/ngx-link';
import { B2bNgxImageModule } from '@b2b/ngx-image';
import { B2bNgxToggleModule } from '@b2b/ngx-toggle';
import { B2bNgxTextareaModule } from '@b2b/ngx-textarea';
import { ClientProfileAddOfferModule } from '../client-profile/pages/client-profile-add-offer/client-profile-add-offer.module';
import { B2bNgxMultiselectModule } from '@b2b/ngx-multiselect';
import { ClientMarketplaceProductDetailsComponent } from './components/client-marketplace-product-details/client-marketplace-product-details.component';
import { B2bNgxImagesCarouselModule } from '@b2b/ngx-images-carousel';
import { B2bNgxSkeletonModule } from '@b2b/ngx-skeleton';
import { LoadMorePaginatorModule } from './components/load-more-paginator/load-more-paginator.module';
import { MarketplaceCarouselComponent } from './components/marketplace-carousel/marketplace-carousel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { B2bNgxCheckboxModule } from '@b2b/ngx-checkbox';
import { ClientMarketplaceFiltersMobileComponent } from './components/client-marketplace-filters-mobile/client-marketplace-filters-mobile.component';
import { Meta } from '@angular/platform-browser';
import { ClientMarketplaceListingGridModule } from './components/client-marketplace-listing-grid/client-marketplace-listing-grid.module';
import { ClientMarketCompanyPageModule } from './pages/client-market-company-page/client-market-company-page.module';
import { ClientMarketplaceProductItemModule } from './components/client-marketplace-product-item/client-marketplace-product-item.module';
import { B2bNgxPaginationModule } from '@b2b/ngx-pagination';
import { B2bNgxFileModule } from '@b2b/ngx-file';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { CategoriesDialogModule } from '@b2b/categories-modal';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { B2bBreadcrumbsModule } from '@b2b/breadcrumbs';
import { FiltersDropdownModule } from './components/filters-dropdown/filters-dropdown.module';
import { FilterChipsModule } from './components/filter-chips/filter-chips.module';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeviewModule } from '@b2b/ngx-treeview';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../../shared/components/shared.module';
import { MatInputModule } from '@angular/material/input';
import { PageLoaderModule } from '../../../core/components/page-loader/page-loader.module';
import { B2bNgxRadioModule } from '@b2b/ngx-radio';
import { B2bDatepickerModule } from '@b2b/datepicker';
import { MarketSectorModule } from './components/market-sector/market-sector.module';
import { SvgIconComponent } from 'angular-svg-icon';
import {
    ClientMarketplaceImagesCarouselComponent
} from "./components/client-marketplace-images-carousel/client-marketplace-images-carousel.component";

@NgModule({
	declarations: [
		ClientMarketplaceFiltersComponent,
		ClientMarketplaceAddProductComponent,
		ClientMarketplaceSupplierFiltersComponent,
		ClientMarketplaceSupplierInfoComponent,
		ClientMarketplaceListingListComponent,
		ClientMarketplaceProductDetailsComponent,
		MarketplaceCarouselComponent,
		ClientMarketplaceFiltersMobileComponent,
	],
    imports: [
        CommonModule,
        ClientMarketplaceRoutingModule,
        B2bNgxSelectModule,
        CategoriesDialogModule,
        B2bNgxCountrySelectModule,
        ReactiveFormsModule,
        B2bNgxButtonModule,
        B2bNgxInputModule,
        B2bNgxIconModule,
        B2bNgxLinkModule,
        B2bNgxImageModule,
        B2bNgxToggleModule,
        B2bNgxTextareaModule,
        B2bNgxFileModule,
        ClientProfileAddOfferModule,
        B2bNgxMultiselectModule,
        B2bNgxImagesCarouselModule,
        B2bNgxPaginationModule,
        B2bNgxSkeletonModule,
        LoadMorePaginatorModule,
        MatExpansionModule,
        B2bNgxCheckboxModule,
        ClientMarketplaceListingGridModule,
        ClientMarketCompanyPageModule,
        ClientMarketplaceProductItemModule,
        B2bNgxPaginationModule,
        PaginationModule,
        NgxTippyModule,
        B2bBreadcrumbsModule,
        FiltersDropdownModule,
        FilterChipsModule,
        TranslateModule,
        NgOptimizedImage,
        DragDropModule,
        TreeviewModule,
        MatIconModule,
        MatTooltipModule,
        SharedModule,
        MatInputModule,
        PageLoaderModule,
        MarketSectorModule,
        SvgIconComponent,
        B2bNgxRadioModule,
        B2bDatepickerModule,
        ClientMarketplaceImagesCarouselComponent,
    ],
	exports: [
		ClientMarketplaceFiltersMobileComponent,
		ClientMarketplaceListingListComponent,
		ClientMarketplaceSupplierInfoComponent,
	],
	providers: [Meta],
})
export class ClientMarketplaceModule {}
