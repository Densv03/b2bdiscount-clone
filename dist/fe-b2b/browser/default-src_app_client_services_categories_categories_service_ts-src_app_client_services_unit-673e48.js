"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-src_app_client_services_categories_categories_service_ts-src_app_client_services_unit-673e48"],{

/***/ 57454:
/*!******************************************************************!*\
  !*** ./src/app/client/services/categories/categories.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);
/* harmony import */ var _state_categories_categories_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/categories/categories.store */ 95535);
/* harmony import */ var _state_categories_categories_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/categories/categories.query */ 53915);






class CategoriesService {
    constructor(_apiService, _categoriesStore, _categoriesQuery) {
        this._apiService = _apiService;
        this._categoriesStore = _categoriesStore;
        this._categoriesQuery = _categoriesQuery;
        this.endpoint = "categories/";
        this.getCategories$();
    }
    getCategories$() {
        var _a;
        const { categories } = this._categoriesQuery.getValue();
        if (!((_a = categories === null || categories === void 0 ? void 0 : categories.categories) === null || _a === void 0 ? void 0 : _a.length) || !(categories === null || categories === void 0 ? void 0 : categories.totalCount)) {
            this._apiService
                .get(this.endpoint)
                .subscribe((categories) => {
                this._categoriesStore.update({
                    categories
                });
            });
        }
        return this._categoriesQuery.selectCategories$;
    }
    getCategories() {
        const { categories } = this._categoriesQuery.getValue();
        if (!categories) {
            return [];
        }
        return this._categoriesQuery.getValue();
    }
    updateCategory(id, name, hide) {
        return this._apiService.put(`category/${id}/update`, {
            ...(name ? { name } : {}),
            hide,
        });
    }
    createCategory(level1Category, level2Category, level3Category) {
        return this._apiService.post(`category/create`, {
            category: {
                ...level1Category,
                category: {
                    ...level2Category,
                    category: level3Category,
                },
            },
        });
    }
    updateWikiCategory(id, name, hide) {
        return this._apiService.put(`categoryPost/${id}/update`, {
            ...(name ? { name } : {}),
            hide: !hide,
        });
    }
    createWikiCategory(level1Category, level2Category) {
        return this._apiService.post(`categoryPost/create`, {
            category: {
                ...level1Category,
                category: level2Category,
            },
        });
    }
    getWikiCategories() {
        const { wikiCategories } = this._categoriesQuery.getValue();
        if (!wikiCategories.length) {
            this._apiService
                .get("categoryPosts")
                .subscribe((response) => {
                this._categoriesStore.update({
                    wikiCategories: response,
                });
            });
        }
        return this._categoriesQuery.selectWikiCategories$;
    }
    getCategoryNameById(categoryId) {
        return this.getCategories$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(({ categories }) => !categories.length, true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({ categories }) => {
            for (const parentCategory of categories) {
                if (parentCategory._id === categoryId) {
                    return parentCategory.name;
                }
                for (const childCategory of parentCategory.children) {
                    if (childCategory._id === categoryId) {
                        return childCategory.name;
                    }
                }
            }
        }));
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_state_categories_categories_store__WEBPACK_IMPORTED_MODULE_1__.CategoriesStore), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_state_categories_categories_query__WEBPACK_IMPORTED_MODULE_2__.CategoriesQuery)); };
CategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 57400:
/*!********************************************************!*\
  !*** ./src/app/client/services/units/units.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitsService": () => (/* binding */ UnitsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);
/* harmony import */ var _state_units_units_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/units/units.store */ 15319);
/* harmony import */ var _state_units_units_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/units/units.query */ 66902);






let UnitsService = class UnitsService {
    constructor(_apiService, _unitsStore, _unitsQuery) {
        this._apiService = _apiService;
        this._unitsStore = _unitsStore;
        this._unitsQuery = _unitsQuery;
        this.endpoint = "units";
    }
    getUnits() {
        const { units } = this._unitsQuery.getValue();
        if (!units.length) {
            this._apiService
                .get(this.endpoint)
                .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this))
                .subscribe((response) => {
                this._unitsStore.update({
                    units: response,
                });
            });
        }
        return this._unitsQuery.selectUnits$;
    }
};
UnitsService.ɵfac = function UnitsService_Factory(t) { return new (t || UnitsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state_units_units_store__WEBPACK_IMPORTED_MODULE_1__.UnitsStore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state_units_units_query__WEBPACK_IMPORTED_MODULE_2__.UnitsQuery)); };
UnitsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UnitsService, factory: UnitsService.ɵfac, providedIn: "root" });
UnitsService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], UnitsService);



/***/ }),

/***/ 53915:
/*!*************************************************************!*\
  !*** ./src/app/client/state/categories/categories.query.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesQuery": () => (/* binding */ CategoriesQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _categories_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.store */ 95535);



class CategoriesQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.selectCategories$ = this.select("categories");
        this.selectWikiCategories$ = this.select("wikiCategories");
    }
}
CategoriesQuery.ɵfac = function CategoriesQuery_Factory(t) { return new (t || CategoriesQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_categories_store__WEBPACK_IMPORTED_MODULE_1__.CategoriesStore)); };
CategoriesQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoriesQuery, factory: CategoriesQuery.ɵfac, providedIn: "root" });


/***/ }),

/***/ 95535:
/*!*************************************************************!*\
  !*** ./src/app/client/state/categories/categories.store.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesStore": () => (/* binding */ CategoriesStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        categories: {
            categories: [],
            totalCount: 0,
        },
        wikiCategories: [],
    };
}
let CategoriesStore = class CategoriesStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
CategoriesStore.ɵfac = function CategoriesStore_Factory(t) { return new (t || CategoriesStore)(); };
CategoriesStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesStore, factory: CategoriesStore.ɵfac, providedIn: "root" });
CategoriesStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: "categories" })
], CategoriesStore);



/***/ }),

/***/ 66902:
/*!***************************************************!*\
  !*** ./src/app/client/state/units/units.query.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitsQuery": () => (/* binding */ UnitsQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _units_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.store */ 15319);



class UnitsQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.selectUnits$ = this.select("units");
    }
}
UnitsQuery.ɵfac = function UnitsQuery_Factory(t) { return new (t || UnitsQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_units_store__WEBPACK_IMPORTED_MODULE_1__.UnitsStore)); };
UnitsQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UnitsQuery, factory: UnitsQuery.ɵfac, providedIn: "root" });


/***/ }),

/***/ 15319:
/*!***************************************************!*\
  !*** ./src/app/client/state/units/units.store.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitsStore": () => (/* binding */ UnitsStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        units: [],
    };
}
let UnitsStore = class UnitsStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
UnitsStore.ɵfac = function UnitsStore_Factory(t) { return new (t || UnitsStore)(); };
UnitsStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnitsStore, factory: UnitsStore.ɵfac, providedIn: "root" });
UnitsStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: "units" })
], UnitsStore);



/***/ }),

/***/ 7996:
/*!*****************************************************!*\
  !*** ./src/app/core/helpers/constant/currencies.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENCIES": () => (/* binding */ CURRENCIES)
/* harmony export */ });
const CURRENCIES = [
    "AFA",
    "ALL",
    "DZD",
    "AOA",
    "ARS",
    "AMD",
    "AWG",
    "AUD",
    "AZN",
    "BSD",
    "BHD",
    "BDT",
    "BBD",
    "BYR",
    "BEF",
    "BZD",
    "BMD",
    "BTN",
    "BTC",
    "BOB",
    "BAM",
    "BWP",
    "BRL",
    "GBP",
    "BND",
    "BGN",
    "BIF",
    "KHR",
    "CAD",
    "CVE",
    "KYD",
    "XOF",
    "XAF",
    "XPF",
    "CLP",
    "CNY",
    "COP",
    "KMF",
    "CDF",
    "CRC",
    "HRK",
    "CUC",
    "CZK",
    "DKK",
    "DJF",
    "DOP",
    "XCD",
    "EGP",
    "ERN",
    "EEK",
    "ETB",
    "EUR",
    "FKP",
    "FJD",
    "GMD",
    "GEL",
    "DEM",
    "GHS",
    "GIP",
    "GRD",
    "GTQ",
    "GNF",
    "GYD",
    "HTG",
    "HNL",
    "HKD",
    "HUF",
    "ISK",
    "INR",
    "IDR",
    "IRR",
    "IQD",
    "ILS",
    "ITL",
    "JMD",
    "JPY",
    "JOD",
    "KZT",
    "KES",
    "KWD",
    "KGS",
    "LAK",
    "LVL",
    "LBP",
    "LSL",
    "LRD",
    "LYD",
    "LTL",
    "MOP",
    "MKD",
    "MGA",
    "MWK",
    "MYR",
    "MVR",
    "MRO",
    "MUR",
    "MXN",
    "MDL",
    "MNT",
    "MAD",
    "MZM",
    "MMK",
    "NAD",
    "NPR",
    "ANG",
    "TWD",
    "NZD",
    "NIO",
    "NGN",
    "KPW",
    "NOK",
    "OMR",
    "PKR",
    "PAB",
    "PGK",
    "PYG",
    "PEN",
    "PHP",
    "PLN",
    "QAR",
    "RON",
    "RUB",
    "RWF",
    "SVC",
    "WST",
    "SAR",
    "RSD",
    "SCR",
    "SLL",
    "SGD",
    "SKK",
    "SBD",
    "SOS",
    "ZAR",
    "KRW",
    "XDR",
    "LKR",
    "SHP",
    "SDG",
    "SRD",
    "SZL",
    "SEK",
    "CHF",
    "SYP",
    "STD",
    "TJS",
    "TZS",
    "THB",
    "TOP",
    "TTD",
    "TND",
    "TRY",
    "TMT",
    "UGX",
    "UAH",
    "AED",
    "UYU",
    "USD",
    "UZS",
    "VUV",
    "VEF",
    "VND",
    "YER",
    "ZMK",
];


/***/ }),

/***/ 2613:
/*!******************************************************************!*\
  !*** ./src/app/core/helpers/function/capitalize-first-letter.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
function capitalizeFirstLetter(string = '') {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/***/ }),

/***/ 13333:
/*!************************************************************!*\
  !*** ./src/app/core/helpers/function/get-url-extension.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUrlExtension": () => (/* binding */ GetUrlExtension)
/* harmony export */ });
function GetUrlExtension(url) {
    if (!url) {
        return '';
    }
    return url.split(/[#?]/)[0].split(".").pop().trim();
}


/***/ }),

/***/ 18041:
/*!*****************************************************!*\
  !*** ./src/app/core/helpers/function/snake-case.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snakeCase": () => (/* binding */ snakeCase)
/* harmony export */ });
function snakeCase(str) {
    return str.toUpperCase().replace(/ /g, "_");
}


/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    // apiUrl: "https://api.b2b.discount/", // для билда в прод
    apiUrl: "https://api-dev.b2b.discount/",
    devUrl: "https://dev.b2b.discount/",
    prodUrl: "https://b2b.discount/",
    baseUrl: "localhost:4000",
};


/***/ })

}]);
//# sourceMappingURL=default-src_app_client_services_categories_categories_service_ts-src_app_client_services_unit-673e48.js.map