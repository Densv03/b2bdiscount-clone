"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-projects_ngx-select_src_lib_ngx-select_module_ts-src_app_client_pages_client-marketpl-341267"],{

/***/ 97631:
/*!**********************************************************!*\
  !*** ./projects/ngx-select/src/lib/ngx-select.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSelectModule": () => (/* binding */ B2bNgxSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/ngx-select.component */ 13114);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





class B2bNgxSelectModule {
}
B2bNgxSelectModule.ɵfac = function B2bNgxSelectModule_Factory(t) { return new (t || B2bNgxSelectModule)(); };
B2bNgxSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxSelectModule });
B2bNgxSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxSelectModule, { declarations: [_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxSelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule], exports: [_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxSelectComponent] }); })();


/***/ }),

/***/ 86069:
/*!*******************************************************************************!*\
  !*** ./src/app/client/pages/client-marketplace/client-marketplace.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientMarketplaceService": () => (/* binding */ ClientMarketplaceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);





class ClientMarketplaceService {
    constructor(apiService) {
        this.apiService = apiService;
        this.PRODUCTS_LIMIT = 30;
        this.shippingMethods = ["EXW", "FCA", "FAS", "FOB", "CFR/CIF", "DPU", "DAP", "DDP"];
        this.paymentMethods = ["T/T", "L/C", "CAD", "Other"];
        this.marketFilters$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.marketplaceProductsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.marketplaceProductsLengthSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this.manageProductsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.manageProductsLengthSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        // private archivedProductsSource: BehaviorSubject<MarketProductModel[]> = new BehaviorSubject<MarketProductModel[]>([]);
        // private archivedProductsLengthSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
        this.chatsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.chatsLengthSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this.supplierListingSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.supplierListingLengthSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this.loadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.marketplaceProductViewSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('grid');
        this.marketplaceProductView$ = this.marketplaceProductViewSource.asObservable();
    }
    get marketplaceProducts$() {
        return this.marketplaceProductsSource.asObservable();
    }
    get marketplaceProductsLength$() {
        return this.marketplaceProductsLengthSource.asObservable();
    }
    get manageProducts$() {
        return this.manageProductsSource.asObservable();
    }
    get manageProductsLength$() {
        return this.manageProductsLengthSource.asObservable();
    }
    // public get archivedProducts$(): Observable<any> {
    // 	return this.archivedProductsSource.asObservable();
    // }
    //
    // public get archivedProductsLength$(): Observable<number> {
    // 	return this.archivedProductsLengthSource.asObservable();
    // }
    get supplierListing$() {
        return this.supplierListingSource.asObservable();
    }
    get supplierListingLength$() {
        return this.supplierListingLengthSource.asObservable();
    }
    get chats$() {
        return this.chatsSource.asObservable();
    }
    get chatsLength$() {
        return this.chatsLengthSource.asObservable();
    }
    get unreadMessagesCount$() {
        return this.apiService.get("my/unreadProductMessagesCount");
    }
    get loading$() {
        return this.loadingSource.asObservable();
    }
    getMarketplaceProducts(filters, offset = 0) {
        this.startLoading();
        return this.apiService.get(`products${filters}limit=${this.PRODUCTS_LIMIT}&offset=${offset}`
        // 	{
        // 	params: { hideSold: true, limit: this.PRODUCTS_LIMIT, offset, ...filters },
        // }
        );
    }
    updateMarketplaceProductsOnSearch(data) {
        this.completeLoading();
        // TODO: remove this condition before deploy
        this.marketplaceProductsLengthSource.next(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl.includes('api-dev') ? data.result.totalCount : data.totalCount);
        this.marketplaceProductsSource.next(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl.includes('api-dev') ? data.result.products : data.products);
    }
    updateMarketplaceProducts(filters, offset = 0) {
        this.getMarketplaceProducts(filters, offset)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((data) => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe(({ filters, result: { products, totalCount } }) => {
            this.completeLoading();
            // TODO: remove this condition before deploy
            this.marketplaceProductsLengthSource.next(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl.includes('api-dev') ? totalCount : totalCount);
            this.marketplaceProductsSource.next(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl.includes('api-dev') ? products : products);
            this.processFilters(filters);
        });
    }
    updateSupplierListing(id, categories = [], offset = 0, limit) {
        this.apiService
            .get("products", {
            params: {
                supplier: id,
                categories,
                limit: limit !== null && limit !== void 0 ? limit : this.PRODUCTS_LIMIT,
                offset
            },
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((data) => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((data) => {
            this.supplierListingLengthSource.next(data.totalCount);
            this.supplierListingSource.next(data.products);
        });
    }
    updateChats(offset = 0) {
        this.startLoading();
        this.apiService
            .get("my/chats", {
            params: { typeRoom: "users,product", offset, limit: this.PRODUCTS_LIMIT },
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((data) => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((data) => {
            this.completeLoading();
            this.chatsSource.next(data.chats);
            this.chatsLengthSource.next(data.totalCount);
        });
    }
    createProduct(product) {
        return this.apiService.post("product/create", product);
    }
    updateProduct(id, product) {
        return this.apiService.put(`product/${id}/update`, product);
    }
    deleteProduct(id) {
        return this.apiService.delete(`product/${id}/delete`);
    }
    getProductById(id) {
        return this.apiService
            .get(`product/${id}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)(data => !!data), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.share)());
    }
    archiveProduct(id) {
        return this.apiService.put(`product/${id}/archive`, {});
    }
    restoreProduct(id) {
        return this.apiService.put(`product/${id}/activate`, {});
    }
    approveProductByAdmin(id) {
        return this.apiService.post("product/product-approval", { id });
    }
    declineProductByAdmin(id) {
        return this.apiService.post("product/product-rejection", { id });
    }
    updateProductByAdmin(id, product) {
        return this.apiService.patch(`product/${id}/update-product-admin`, product);
    }
    deleteProductByAdmin(id) {
        return this.apiService.delete(`product/${id}/delete-product-admin`);
    }
    archiveProductByAdmin(id) {
        return this.apiService.put(`product/${id}/archive-admin`, {});
    }
    updateProductsByAdmin(queryObj, otherParams) {
        this.startLoading();
        this.getProductsByAdmin(queryObj, otherParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((res) => {
            this.completeLoading();
            this.marketplaceProductsSource.next(res.products);
            this.marketplaceProductsLengthSource.next(res.totalCount);
        });
    }
    updateSupplierProducts(supplierId, paginationParams) {
        this.startLoading();
        this.getSupplierProducts(supplierId, paginationParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((res) => {
            this.completeLoading();
            this.supplierListingSource.next(res.result.products);
            this.supplierListingLengthSource.next(res.result.totalCount);
        });
    }
    getUserMarketProducts() {
        return this.apiService.get('products/my')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((data) => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(({ products }) => products));
    }
    updateManageProducts(offset = 0, queryParam) {
        this.startLoading();
        let url = `products/my?limit=${this.PRODUCTS_LIMIT}&offset=${offset}&`;
        if (queryParam) {
            url += `${queryParam}=true`;
        }
        this.apiService
            .get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.filter)((data) => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((data) => {
            this.completeLoading();
            this.manageProductsLengthSource.next(data.totalCount);
            this.manageProductsSource.next(data.products);
            if (data.products.length === 0 && data.totalCount > 0 && offset - this.PRODUCTS_LIMIT >= 0) {
                this.updateManageProducts(offset - this.PRODUCTS_LIMIT);
            }
        });
    }
    // public updateArchivedProducts(offset: number = 0): void {
    // 	this.startLoading();
    // 	this.apiService
    // 		.get(`products/my?hide=true&limit=${this.PRODUCTS_LIMIT}&offset=` + offset)
    // 		.pipe(
    // 			filter((data) => !!data),
    // 			first()
    // 		)
    // 		.subscribe((data: any) => {
    // 			this.completeLoading();
    // 			this.archivedProductsSource.next(data.products);
    // 			this.archivedProductsLengthSource.next(data.totalCount);
    //
    // 			if (data.products.length === 0 && data.totalCount > 0 && offset - this.PRODUCTS_LIMIT >= 0) {
    // 				this.updateArchivedProducts(offset - this.PRODUCTS_LIMIT);
    // 			}
    // 		});
    // }
    getChatsByProductId(id) {
        return this.apiService.get(`product/${id}/chats`);
    }
    completeLoading() {
        this.loadingSource.next(false);
    }
    startLoading() {
        this.loadingSource.next(true);
    }
    getMarketplaceSkeletonOptions() {
        return {
            count: 5,
            animation: 'progress',
            theme: {
                height: '160px',
            }
        };
    }
    getCompanyByName(name, paginationParams) {
        return this.apiService.get("products/get-company", { params: { ...paginationParams, q: name } });
    }
    updateMarketplaceProductView(view) {
        this.marketplaceProductViewSource.next(view);
    }
    getSupplierProducts(supplierId, { offset, limit }) {
        return this.apiService.get(`products?supplier=${supplierId}&limit=${limit}&offset=${offset}`);
    }
    getProductsByAdmin(queryObj, otherParams) {
        return this.apiService.get("products/get-products-admin", {
            params: { offset: queryObj.offset, limit: queryObj.limit, ...otherParams },
        });
    }
    processFilters(filters) {
        if (filters.rootCategories) {
            filters.rootCategories = {
                name: 'Sectors',
                hiddenLabel: 'rootCategory',
                isOpen: true,
                selectedOption: filters.rootCategories[0].checked ?
                    new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(filters.rootCategories) : new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null),
                options: filters.rootCategories
            };
        }
        if (filters.categories) {
            filters.categories = {
                name: 'Categories',
                hiddenLabel: 'categories',
                isOpen: filters.rootCategories.options.length === 1,
                isMultiSelect: true,
                selectedOption: filters.categories[0].checked ?
                    new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(filters.categories) : new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null),
                options: filters.categories
            };
        }
        if (filters.suppliersType) {
            filters.suppliersType = {
                name: 'Company type',
                hiddenLabel: 'type',
                isOpen: filters.rootCategories.options.length === 1,
                selectedOption: filters.suppliersType[0].checked ?
                    new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(filters.suppliersType) : new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null),
                options: filters.suppliersType
            };
        }
        if (filters.country) {
            filters.country = {
                name: 'Country',
                hiddenLabel: 'country[]',
                isOpen: filters.rootCategories.options.length === 1,
                selectedOption: filters.country[0].checked ?
                    new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(filters.country) : new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null),
                options: filters.country
            };
        }
        this.marketFilters$.next([filters.rootCategories, filters.categories, filters.suppliersType, filters.country]);
    }
}
ClientMarketplaceService.ɵfac = function ClientMarketplaceService_Factory(t) { return new (t || ClientMarketplaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
ClientMarketplaceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ClientMarketplaceService, factory: ClientMarketplaceService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default-projects_ngx-select_src_lib_ngx-select_module_ts-src_app_client_pages_client-marketpl-341267.js.map