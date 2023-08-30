"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["common"],{

/***/ 27635:
/*!****************************************************************!*\
  !*** ./projects/ngx-back/src/lib/layout/ngx-back.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxBackComponent": () => (/* binding */ NgxBackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ngx-link/src/lib/directive/ngx-link.directive */ 66612);




class NgxBackComponent {
    constructor() {
        this.link = '';
        this.className = '';
    }
    get linkClassName() {
        const defaultClassName = `flex items-center text-gray-500`;
        return `${defaultClassName} ${this.className}`;
    }
}
NgxBackComponent.ɵfac = function NgxBackComponent_Factory(t) { return new (t || NgxBackComponent)(); };
NgxBackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxBackComponent, selectors: [["b2b-ngx-back"]], inputs: { link: "link", className: "className" }, decls: 4, vars: 3, consts: [["b2bNgxLink", "", 3, "routerLink"], ["b2bNgxIcon", "", "name", "arrow-l", 1, "w-6"], [1, "ml-2"]], template: function NgxBackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.linkClassName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_2__.B2bNgxIconDirective, _ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_3__.B2bNgxLinkDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtYmFjay5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 54408:
/*!******************************************************!*\
  !*** ./projects/ngx-back/src/lib/ngx-back.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxBackModule": () => (/* binding */ B2bNgxBackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_back_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/ngx-back.component */ 27635);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-link */ 16385);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);






class B2bNgxBackModule {
}
B2bNgxBackModule.ɵfac = function B2bNgxBackModule_Factory(t) { return new (t || B2bNgxBackModule)(); };
B2bNgxBackModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxBackModule });
B2bNgxBackModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconModule, _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_4__.B2bNgxLinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxBackModule, { declarations: [_layout_ngx_back_component__WEBPACK_IMPORTED_MODULE_5__.NgxBackComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconModule, _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_4__.B2bNgxLinkModule], exports: [_layout_ngx_back_component__WEBPACK_IMPORTED_MODULE_5__.NgxBackComponent] }); })();


/***/ }),

/***/ 78237:
/*!*********************************************************!*\
  !*** ./src/app/admin/services/admin-billing.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminBillingService": () => (/* binding */ AdminBillingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api/api.service */ 96931);




class AdminBillingService {
    constructor(apiService) {
        this.apiService = apiService;
        this.currentPaymentPlans = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    getCurrentPaymentPlans() {
        return this.currentPaymentPlans.asObservable();
    }
    updateCurrentPaymentPlans(type) {
        const queryString = type ? `?type=${type}` : "";
        this.apiService
            .get(`authorize-net/get-payment-plan${queryString}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((data) => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)())
            .subscribe((data) => this.currentPaymentPlans.next(data));
    }
    addPaymentPlan(data) {
        return this.apiService.post("authorize-net/add-new-payment-plan", data);
    }
    updatePaymentPlanById(id, data) {
        return this.apiService.put("authorize-net/update-payment-plan", { id, ...data });
    }
    deletePaymentPlanById(id) {
        return this.apiService.delete(`authorize-net/delete-payment-plan`, { body: { id } });
    }
    getPaymentPlans(type) {
        const queryString = type ? `?type=${type}` : "";
        return this.apiService.get(`authorize-net/get-payment-plan${queryString}`);
    }
    getQuotesPaymentPlansToDisplay() {
        return this.apiService.get(`authorize-net/get-payment-plan?type=quotes`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((data) => {
            if (data.length > 3) {
                return data.slice(0, 3);
            }
            return data;
        }));
    }
}
AdminBillingService.ɵfac = function AdminBillingService_Factory(t) { return new (t || AdminBillingService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
AdminBillingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AdminBillingService, factory: AdminBillingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 67644:
/*!********************************************************************!*\
  !*** ./src/app/auth/components/auth-guard/auth-guard.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardComponent": () => (/* binding */ AuthGuardComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);




class AuthGuardComponent {
    constructor(b2bNgxLinkService, toastRef) {
        this.b2bNgxLinkService = b2bNgxLinkService;
        this.toastRef = toastRef;
    }
}
AuthGuardComponent.ɵfac = function AuthGuardComponent_Factory(t) { return new (t || AuthGuardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_1__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_2__.HotToastRef, 8)); };
AuthGuardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthGuardComponent, selectors: [["b2b-auth-guard"]], decls: 3, vars: 0, template: function AuthGuardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " To see all the available offers of unclaimed cargo you need to pass a free registration. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, styles: ["[_nghost-%COMP%]  p {\n  font-size: 15px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtZ3VhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0M7RUFDQyxlQUFBO0VBQ0EsU0FBQTtBQUZGIiwiZmlsZSI6ImF1dGgtZ3VhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbjpob3N0OjpuZy1kZWVwIHtcblx0cCB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdG1hcmdpbjogMDtcblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ 17562:
/*!*****************************************************************************!*\
  !*** ./src/app/auth/guards/companyInformation/company-information.guard.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyInformationGuard": () => (/* binding */ CompanyInformationGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _client_pages_client_tradebid_tradebid_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../client/pages/client-tradebid/tradebid.service */ 33483);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);





class CompanyInformationGuard {
    constructor(tradebidService, router) {
        this.tradebidService = tradebidService;
        this.router = router;
        this.queryParams = ["add-rfq", "quotation", "offer", "b2bmarket"];
    }
    canActivate(route, state) {
        const link = "/tradebid/company-information";
        const splitURL = state.url.split("/");
        let blockedURL = "";
        splitURL.forEach((item) => {
            if (this.queryParams.includes(item)) {
                blockedURL = item;
            }
        });
        return this.tradebidService.getCompanyData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => {
            this.tradebidService.updateCompanyInfo({ companyName: "" }).subscribe();
            return this.tradebidService.getCompanyData();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((companyData) => {
            const requiredFields = [
                "address",
                "annualRevenue",
                "companyDescription",
                "companyName",
                "country",
                "email",
                "employeesNumber",
                "phone",
                "position",
                "user",
                "yearOfFoundation",
            ];
            if (requiredFields.some((field) => companyData[field] === undefined)) {
                this.router.navigate([link], { queryParams: { url: blockedURL } });
                return false;
            }
            for (const key in companyData) {
                if ((companyData[key] === null || companyData[key] === undefined || companyData[key] === "") &&
                    key !== "website") {
                    if (blockedURL === "quotation") {
                        localStorage.setItem("quotationId", state.url.split("/")[3]);
                    }
                    this.router.navigate([link], { queryParams: { url: blockedURL } });
                    return false;
                }
                if (Array.isArray(companyData[key]) && requiredFields.includes(key)) {
                    if (companyData[key].length === 0) {
                        if (blockedURL === "quotation") {
                            localStorage.setItem("quotationId", state.url.split("/")[3]);
                        }
                        this.router.navigate([link], { queryParams: { url: blockedURL } });
                        return false;
                    }
                }
            }
            return true;
        }));
    }
}
CompanyInformationGuard.ɵfac = function CompanyInformationGuard_Factory(t) { return new (t || CompanyInformationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_client_pages_client_tradebid_tradebid_service__WEBPACK_IMPORTED_MODULE_0__.TradebidService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
CompanyInformationGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CompanyInformationGuard, factory: CompanyInformationGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 40333:
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/client-about-us/section-info.enum.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionInfoEnum": () => (/* binding */ SectionInfoEnum)
/* harmony export */ });
var SectionInfoEnum;
(function (SectionInfoEnum) {
    SectionInfoEnum["market"] = "market";
    SectionInfoEnum["tradebid"] = "tradebid";
    SectionInfoEnum["cargo"] = "cargo";
    SectionInfoEnum["none"] = "none";
})(SectionInfoEnum || (SectionInfoEnum = {}));


/***/ }),

/***/ 51590:
/*!****************************************************************************************************!*\
  !*** ./src/app/client/pages/client-marketplace/pages/category-listing/category-listing.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListingService": () => (/* binding */ CategoryListingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/services/api/api.service */ 96931);




const CATEGORIES_AMOUNT_PER_VIEW = 16;
class CategoryListingService {
    constructor(apiService) {
        this.apiService = apiService;
        this.listingCategoriesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.listingCategoriesCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.updatePresentCategoriesSource();
    }
    getCategoriesViewAmount() {
        return CATEGORIES_AMOUNT_PER_VIEW;
    }
    get presentCategoriesSource$() {
        return this.listingCategoriesSource.asObservable();
    }
    get presentCategoriesCount$() {
        return this.listingCategoriesCount.asObservable();
    }
    getPresentCategories(queryObj) {
        if (queryObj) {
            const { limit, offset } = queryObj;
            return this.apiService
                .get("categories/", {
                params: { limit, offset },
            })
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((data) => !!data));
        }
        return this.apiService.get("categories/").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)((data) => !!data));
    }
    updatePresentCategoriesSource(queryParams) {
        this.getPresentCategories(queryParams).subscribe(({ categories, totalCount }) => {
            this.listingCategoriesSource.next(categories);
            this.listingCategoriesCount.next(totalCount);
        });
    }
    getCategoryNamesArr(categoryIds) {
        return this.getPresentCategories()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(({ categories }) => {
            return categories.reduce((acum, val) => {
                if (categoryIds.includes(val._id)) {
                    acum.push(val.name);
                }
                else {
                    val.children.forEach(item => {
                        categoryIds.includes(item._id) ? acum.push(item.name) : null;
                    });
                }
                return acum;
            }, []);
        }));
    }
}
CategoryListingService.ɵfac = function CategoryListingService_Factory(t) { return new (t || CategoryListingService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
CategoryListingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CategoryListingService, factory: CategoryListingService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 33483:
/*!******************************************************************!*\
  !*** ./src/app/client/pages/client-tradebid/tradebid.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradebidService": () => (/* binding */ TradebidService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);




class TradebidService {
    constructor(apiService) {
        this.apiService = apiService;
        this.rfqListSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.totalLengthSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.companyInfoSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    get rfqList$() {
        return this.rfqListSource.asObservable();
    }
    get rfqListLength$() {
        return this.totalLengthSource.asObservable();
    }
    get companyInfo$() {
        return this.companyInfoSource.asObservable();
    }
    getRfq(queryString) {
        return this.apiService.get(`tradeBid/get-rfq${queryString}`);
    }
    updateRfqList(queryString) {
        this.getRfq(queryString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)())
            .subscribe((data) => {
            this.rfqListSource.next(data.rfqList);
            this.totalLengthSource.next(data.totalCount);
        });
    }
    getRfqByIdAdmin(RfqId) {
        return this.apiService.get(`tradeBid/get-rfq-quotations-admin/${RfqId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((data) => !!data));
    }
    getRfqById(rfqId) {
        return this.apiService.get(`tradeBid/rfq/${rfqId}`);
    }
    createRFQ(body) {
        return this.apiService.post("tradeBid/create-rfq", body);
    }
    getObservableForSelect(arr) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(arr.map((el) => {
            return {
                id: el,
                value: el,
            };
        }));
    }
    getCompanyInfoById(id) {
        return this.apiService.get(`tradeBid/getCompany/${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(data => !!data));
    }
    createQuotation(body) {
        return this.apiService.post("tradeBid/create-quotation", body);
    }
    getCompanyData() {
        return this.apiService.get("tradeBid/get-company-data");
    }
    createCompanyInfo(body) {
        return this.apiService.post("tradeBid/create-company-data", body);
    }
    updateCompanyInfo(body) {
        return this.apiService.post("tradeBid/update-company-data", body);
    }
    updateCompanyDataAdmin(id, body) {
        return this.apiService.put("tradeBid/update-company-data-admin", { ...body, id });
    }
    sendMessageToSeller(rfq, message) {
        // this.openConnection(this.authService.getToken());
        this.socket.emit("message", {
            type: "text",
            body: message,
            userId: rfq.user._id,
            rfqId: rfq._id,
            typeRoom: "rfq",
        });
    }
    updateRfqAdmin(data) {
        return this.apiService.patch(`tradeBid/update-rfq-admin`, data);
    }
    openConnection(token) {
        if (this.socket) {
            this.socket.disconnect();
        }
        // this.socket = io(environment.apiUrl, {
        // 	path: "/chat",
        // 	auth: {
        // 		token,
        // 	},
        // });
    }
}
TradebidService.ɵfac = function TradebidService_Factory(t) { return new (t || TradebidService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
TradebidService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: TradebidService, factory: TradebidService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 38985:
/*!******************************************************!*\
  !*** ./src/app/client/services/blog/blog.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogService": () => (/* binding */ BlogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);




class BlogService {
    constructor(apiService) {
        this.apiService = apiService;
        this.blogSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.blogLength = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._articlesBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._articles$ = this._articlesBehaviourSubject.asObservable();
        this._endpoint = "blogs/";
    }
    getTags(str) {
        return this.apiService.get(`tags?q=${str}`);
    }
    createBlog(body) {
        return this.apiService.post("blog/create", body);
    }
    uploadImage(images, id) {
        return this.apiService.put(`blog/${id}/upload-image`, images);
    }
    updateBlog(id, body) {
        return this.apiService.put(`blog/${id}/update`, body);
    }
    createArticle(body) {
        return this.apiService.post("blog/create", body);
    }
    getComments(post) {
        return this.apiService.get(`comment/${post}`);
    }
    updateArticle(id, body) {
        return this.apiService.put(`blog/${id}/update`, body);
    }
    createComment(post, text) {
        return this.apiService.post(`comment/create`, {
            post,
            text,
        });
    }
    getArticleById(id) {
        // const artiecles = this._articlesBehaviourSubject.getValue();
        // const findedArticle = artiecles.find((articleToFind) => articleToFind.id === id);
        //
        // if (findedArticle) {
        // 	return of(findedArticle);
        // }
        return this.apiService.get(`blog/${id}`);
    }
    get blog$() {
        return this.blogSource$.asObservable();
    }
    get blogLength$() {
        return this.blogLength.asObservable();
    }
    getArticles(queryString) {
        return this.apiService.get(`blogs${queryString}`);
    }
    updateBlogList(queryString = "&limit=7&") {
        this.getArticles(queryString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)())
            .subscribe((data) => {
            this.blogSource$.next(data.posts);
            this.blogLength.next(data.totalCount);
        });
    }
    deleteArticleById(id) {
        return this.apiService.delete(`blog/${id}/delete`);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
BlogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 71220:
/*!******************************************************!*\
  !*** ./src/app/client/services/chat/chat.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);



class ChatService {
    constructor(_apiService) {
        this._apiService = _apiService;
    }
    getChatById(id) {
        return this._apiService.get(`my/chat/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((chat) => (Array.isArray(chat) ? chat[0] : chat)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((chat) => ({
            ...chat,
            offer: Array.isArray(chat.offer) ? chat.offer[0] : chat.offer,
        })));
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
ChatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 35551:
/*!******************************************************!*\
  !*** ./src/app/client/services/wiki/wiki.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WikiService": () => (/* binding */ WikiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);



class WikiService {
    constructor(_apiService) {
        this._apiService = _apiService;
        this._articlesBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._articles$ = this._articlesBehaviourSubject.asObservable();
        this._endpoint = "posts/";
    }
    getTags(str) {
        return this._apiService.get(`tags?q=${str}`);
    }
    createArticle(body) {
        return this._apiService.post("post/create", body);
    }
    getComments(post) {
        return this._apiService.get(`comment/${post}`);
    }
    updateArticle(id, body) {
        return this._apiService.put(`post/${id}/update`, body);
    }
    createComment(post, text) {
        return this._apiService.post(`comment/create`, {
            post,
            text,
        });
    }
    getArticleById(id) {
        const articles = this._articlesBehaviourSubject.getValue();
        const foundArticle = articles.find((articleToFind) => articleToFind.id === id);
        if (foundArticle) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(foundArticle);
        }
        return this._apiService.get(`post/${id}`);
    }
    getArticles(queryString) {
        return this._apiService.get(`posts${queryString}`);
    }
    deleteArticleById(id) {
        return this._apiService.delete(`post/${id}/delete`);
    }
}
WikiService.ɵfac = function WikiService_Factory(t) { return new (t || WikiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
WikiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: WikiService, factory: WikiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 82890:
/*!******************************************************************!*\
  !*** ./src/app/client/shared/enums/browser-storage-keys.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserStorageKeysEnum": () => (/* binding */ BrowserStorageKeysEnum)
/* harmony export */ });
var BrowserStorageKeysEnum;
(function (BrowserStorageKeysEnum) {
    BrowserStorageKeysEnum["FIRST_STEP_DATA"] = "firstStepData";
    BrowserStorageKeysEnum["BLOG_PREVIOUS_PAGE"] = "blogPreviousPage";
    BrowserStorageKeysEnum["LATEST_OFFERS_VISITED"] = "visited";
})(BrowserStorageKeysEnum || (BrowserStorageKeysEnum = {}));


/***/ }),

/***/ 44876:
/*!*********************************************************************!*\
  !*** ./src/app/client/shared/services/homepage/homepage.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageService": () => (/* binding */ HomepageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/api/api.service */ 96931);


class HomepageService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getCarouselItems() {
        return this.apiService.get('cache/first-screen-carousel');
    }
    updateCarouselItems(data) {
        return this.apiService.post('product/update-first-screen-carousel', data);
    }
    updateSubscription(model) {
        return this.apiService.post('subscription/update-user-subscription', model);
    }
}
HomepageService.ɵfac = function HomepageService_Factory(t) { return new (t || HomepageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
HomepageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HomepageService, factory: HomepageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 72943:
/*!*****************************************************!*\
  !*** ./src/app/core/helpers/validator/site-link.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "siteLink": () => (/* binding */ siteLink),
/* harmony export */   "websiteProtocolRegex": () => (/* binding */ websiteProtocolRegex),
/* harmony export */   "websiteRegex": () => (/* binding */ websiteRegex)
/* harmony export */ });
const websiteProtocolRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)/;
const websiteRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}(\/.*)?$/;
function siteLink() {
    return (control) => {
        if (!control.value) {
            return null;
        }
        if (!websiteRegex.test(control.value.trim())) {
            return { siteError: true };
        }
        return null;
    };
}


/***/ }),

/***/ 91604:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/clipboard.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CDK_COPY_TO_CLIPBOARD_CONFIG": () => (/* binding */ CDK_COPY_TO_CLIPBOARD_CONFIG),
/* harmony export */   "CdkCopyToClipboard": () => (/* binding */ CdkCopyToClipboard),
/* harmony export */   "Clipboard": () => (/* binding */ Clipboard),
/* harmony export */   "ClipboardModule": () => (/* binding */ ClipboardModule),
/* harmony export */   "PendingCopy": () => (/* binding */ PendingCopy)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a re-layout. This re-layout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * re-layout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */

class PendingCopy {
  constructor(text, _document) {
    this._document = _document;

    const textarea = this._textarea = this._document.createElement('textarea');

    const styles = textarea.style; // Hide the element for display and accessibility. Set a fixed position so the page layout
    // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
    // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.

    styles.position = 'fixed';
    styles.top = styles.opacity = '0';
    styles.left = '-999em';
    textarea.setAttribute('aria-hidden', 'true');
    textarea.value = text; // Making the textarea `readonly` prevents the screen from jumping on iOS Safari (see #25169).

    textarea.readOnly = true;

    this._document.body.appendChild(textarea);
  }
  /** Finishes copying the text. */


  copy() {
    const textarea = this._textarea;
    let successful = false;

    try {
      // Older browsers could throw if copy is not supported.
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand('copy');

        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch (_a) {// Discard error.
      // Initial setting of {@code successful} will represent failure here.
    }

    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */


  destroy() {
    const textarea = this._textarea;

    if (textarea) {
      textarea.remove();
      this._textarea = undefined;
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A service for copying text to the clipboard.
 */


class Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */


  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */


  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }

}

Clipboard.ɵfac = function Clipboard_Factory(t) {
  return new (t || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

Clipboard.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Clipboard,
  factory: Clipboard.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Clipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */


const CDK_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */

class CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    /** Content to be copied. */

    this.text = '';
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     */

    this.attempts = 1;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     */

    this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Copies that are currently being attempted. */

    this._pending = new Set();

    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */


  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;

      const pending = this._clipboard.beginCopy(this.text);

      this._pending.add(pending);

      const attempt = () => {
        const successful = pending.copy();

        if (!successful && --remainingAttempts && !this._destroyed) {
          // We use 1 for the timeout since it's more predictable when flushing in unit tests.
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;

          this._pending.delete(pending);

          pending.destroy();
          this.copied.emit(successful);
        }
      };

      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }

  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }

    this._pending.forEach(copy => copy.destroy());

    this._pending.clear();

    this._destroyed = true;
  }

}

CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) {
  return new (t || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
};

CdkCopyToClipboard.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkCopyToClipboard,
  selectors: [["", "cdkCopyToClipboard", ""]],
  hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() {
        return ctx.copy();
      });
    }
  },
  inputs: {
    text: ["cdkCopyToClipboard", "text"],
    attempts: ["cdkCopyToClipboardAttempts", "attempts"]
  },
  outputs: {
    copied: "cdkCopyToClipboardCopied"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkCopyToClipboard]',
      host: {
        '(click)': 'copy()'
      }
    }]
  }], function () {
    return [{
      type: Clipboard
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
      }]
    }];
  }, {
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboard']
    }],
    attempts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboardAttempts']
    }],
    copied: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkCopyToClipboardCopied']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ClipboardModule {}

ClipboardModule.ɵfac = function ClipboardModule_Factory(t) {
  return new (t || ClipboardModule)();
};

ClipboardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ClipboardModule
});
ClipboardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClipboardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 24256:
/*!**********************************************************************!*\
  !*** ./node_modules/@nguniversal/express-engine/fesm2015/tokens.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST": () => (/* binding */ REQUEST),
/* harmony export */   "RESPONSE": () => (/* binding */ RESPONSE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const REQUEST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('REQUEST');
const RESPONSE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('RESPONSE');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=common.js.map