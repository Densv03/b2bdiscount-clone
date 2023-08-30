"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_client_pages_client-annual-payment_client-annual-payment_module_ts"],{

/***/ 79461:
/*!********************************************************************************************!*\
  !*** ./src/app/client/pages/client-annual-payment/client-annual-payment-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientAnnualPaymentRoutingModule": () => (/* binding */ ClientAnnualPaymentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_client_annual_payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-annual-payment.component */ 89695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _layout_client_annual_payment_component__WEBPACK_IMPORTED_MODULE_0__.ClientAnnualPaymentComponent,
    },
];
class ClientAnnualPaymentRoutingModule {
}
ClientAnnualPaymentRoutingModule.ɵfac = function ClientAnnualPaymentRoutingModule_Factory(t) { return new (t || ClientAnnualPaymentRoutingModule)(); };
ClientAnnualPaymentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientAnnualPaymentRoutingModule });
ClientAnnualPaymentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientAnnualPaymentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 90593:
/*!************************************************************************************!*\
  !*** ./src/app/client/pages/client-annual-payment/client-annual-payment.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientAnnualPaymentModule": () => (/* binding */ ClientAnnualPaymentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _client_annual_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-annual-payment-routing.module */ 79461);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-list */ 80764);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-tel */ 47321);
/* harmony import */ var _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-country-select */ 17354);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-link */ 16385);
/* harmony import */ var _layout_client_annual_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/client-annual-payment.component */ 89695);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


// import { B2bNgxTabsModule } from '@b2b/ngx-tabs';












class ClientAnnualPaymentModule {
}
ClientAnnualPaymentModule.ɵfac = function ClientAnnualPaymentModule_Factory(t) { return new (t || ClientAnnualPaymentModule)(); };
ClientAnnualPaymentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ClientAnnualPaymentModule });
ClientAnnualPaymentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _client_annual_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientAnnualPaymentRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        // ErrorTailorModule,
        // B2bNgxTabsModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_6__.B2bNgxIconModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__.B2bNgxButtonModule,
        _b2b_ngx_list__WEBPACK_IMPORTED_MODULE_1__.B2bNgxListModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_8__.B2bNgxInputModule,
        _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_9__.B2bNgxTelModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_10__.B2bNgxCountrySelectModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_11__.B2bNgxImageModule,
        _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_12__.B2bNgxLinkModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClientAnnualPaymentModule, { declarations: [_layout_client_annual_payment_component__WEBPACK_IMPORTED_MODULE_2__.ClientAnnualPaymentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _client_annual_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientAnnualPaymentRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        // ErrorTailorModule,
        // B2bNgxTabsModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_6__.B2bNgxIconModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__.B2bNgxButtonModule,
        _b2b_ngx_list__WEBPACK_IMPORTED_MODULE_1__.B2bNgxListModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_8__.B2bNgxInputModule,
        _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_9__.B2bNgxTelModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_10__.B2bNgxCountrySelectModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_11__.B2bNgxImageModule,
        _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_12__.B2bNgxLinkModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] }); })();


/***/ }),

/***/ 89695:
/*!**********************************************************************************************!*\
  !*** ./src/app/client/pages/client-annual-payment/layout/client-annual-payment.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientAnnualPaymentComponent": () => (/* binding */ ClientAnnualPaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/payment/payment.service */ 26978);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/services/auth/auth.service */ 24159);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);


















function ClientAnnualPaymentComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "p", 17)(3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Buyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 19)(6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "39$");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "/ offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Personal account to manage all you activities.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 24)(14, "li")(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "You will get the opportunity to buy 1 offer for $39");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} }
function ClientAnnualPaymentComponent_button_76_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientAnnualPaymentComponent_button_76_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.getAnnualSubscriptionRoute()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Buy annual subscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx_r1.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
} }
let ClientAnnualPaymentComponent = class ClientAnnualPaymentComponent {
    constructor(_formBuilder, b2bNgxLinkService, _paymentService, _hotToastService, translateService, _router, _authService) {
        this._formBuilder = _formBuilder;
        this.b2bNgxLinkService = b2bNgxLinkService;
        this._paymentService = _paymentService;
        this._hotToastService = _hotToastService;
        this.translateService = translateService;
        this._router = _router;
        this._authService = _authService;
        this.formGroup = this._formBuilder.group({
            cardNum: '',
            email: '',
            expDate: '',
            postCode: '',
        });
        this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__.B2bNgxInputThemeEnum;
        this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__.B2bNgxButtonThemeEnum;
        this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_5__.B2bNgxLinkThemeEnum;
    }
    ngOnInit() {
        this._authService.user$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe((user) => {
            if (user && user.paymentInfo) {
                this.formGroup.patchValue({
                    ...user.paymentInfo,
                    cardNum: `**** **** **** ${user.paymentInfo.cardNumber}`,
                    expDate: `****`,
                });
            }
        });
    }
    sendCardData(formValue) {
        this._paymentService
            .createCustomerProfile(formValue)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error.message);
        }))
            .subscribe({
            next: () => {
                this.isSingleOffer
                    ? this.buySingleOffer()
                    : this.buyAnnualSubscription();
                this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink('/annual-succeeded'));
            },
            error: (error) => {
                if (error === 'Payment info already exist!') {
                    this.isSingleOffer
                        ? this.buySingleOffer()
                        : this.buyAnnualSubscription();
                }
                else {
                    this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink('/annual-failed'));
                }
            },
        });
    }
    buySingleOffer() {
        const body = {
            amount: 39,
            type: 'single',
        };
        this._paymentService
            .createPaymentByProfile(body)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            this._hotToastService.error(error.error.message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error.message);
        }))
            .subscribe((val) => {
            this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink('/annual-succeeded'));
        });
    }
    buyAnnualSubscription() {
        const body = {
            amount: 588,
            type: 'subscription',
        };
        this._paymentService
            .createPaymentByProfile(body)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            this._hotToastService.error(error.error.message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(error.error.message);
        }))
            .subscribe(() => {
            this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink('/annual-succeeded'));
        });
    }
    getAnnualSubscriptionRoute() {
        this._router.navigateByUrl('/annual-payment');
    }
    get isSingleOffer() {
        return this._router.url.includes('buy-offer-39');
    }
};
ClientAnnualPaymentComponent.ɵfac = function ClientAnnualPaymentComponent_Factory(t) { return new (t || ClientAnnualPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_10__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_0__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_11__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
ClientAnnualPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientAnnualPaymentComponent, selectors: [["b2b-client-annual-payment"]], decls: 77, vars: 20, consts: [[1, "annual-payment"], [1, "left"], [1, "breadcrumbs"], [1, "annual-payment-title"], [1, "description"], [3, "formGroup", "submit"], [1, "input-container"], ["b2bNgxInput", "", "formControlName", "cardNum", 3, "theme", "label"], ["b2bNgxInput", "", "formControlName", "email", 3, "theme", "label"], ["b2bNgxInput", "", "formControlName", "expDate", 3, "theme", "label"], ["b2bNgxInput", "", "formControlName", "postCode", 3, "theme", "label"], ["b2bNgxButton", "", 1, "submit", 3, "theme"], [1, "right"], [1, "your-plan"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-wrapper"], [1, "card-header"], [1, "buyer"], [1, "price"], [1, "currency"], [1, "period"], [1, "personal-account"], [1, "divider"], [1, "list"], ["b2bNgxIcon", "", "name", "check-blue", "alt", ""], ["b2bNgxButton", "", "class", "submit", 3, "theme", "click", 4, "ngIf"], ["b2bNgxButton", "", 1, "submit", 3, "theme", "click"]], template: function ClientAnnualPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Pricing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Payment details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Payment details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Enter & confirm the information below for invoicing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ClientAnnualPaymentComponent_Template_form_submit_11_listener() { return ctx.sendCardData(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Proceed to Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12)(27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Your plan:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ClientAnnualPaymentComponent_div_29_Template, 17, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 15)(31, "div", 16)(32, "p", 17)(33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Buyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 19)(36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "588$");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "/ year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Personal account to manage all you activities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ul", 24)(44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Place unlimited bids for cargo sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Get legal consultation on cargo sale 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Get technical support 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Review cargo sale offers at a discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Get access to all information disclosed by the seller, including seller\u2019s phone number/email, and any extra photos/documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Buy your preferred cargo at a discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Subscribe to newsletter to receive updates on your preferred goods");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Get legal consultation on purchase 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, ClientAnnualPaymentComponent_button_76_Template, 2, 1, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 12, "LABELS.CARD_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 14, "LABELS.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 16, "LABELS.EXPIRED_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 18, "LABELS.POST_CODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSingleOffer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSingleOffer);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_15__.B2bNgxIconDirective, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_16__.B2bNgxButtonDirective, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_17__.B2bNgxInputDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".annual-payment[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  padding: 40px 84px;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 136%;\n  color: #556274;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .annual-payment-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 36px;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n  margin-top: 16px;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 140%;\n  letter-spacing: 0.01em;\n  color: #556274;\n  margin-top: 8px;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  width: 201px;\n  height: 48px;\n  background: #0f0f11;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 56px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #205eca;\n  background-image: url(\"/assets/images/pattern-2.png\");\n  padding: 48px 128px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .your-plan[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 412px;\n  font-size: 16px;\n  letter-spacing: 0.01em;\n  color: #ffffff;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 12px auto 0;\n  width: 412px;\n  background: #ffffff;\n  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);\n  border-radius: 6px;\n  margin-top: 12px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n  padding: 32px;\n  position: relative;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 15px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .buyer[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 36px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 32px;\n  display: flex;\n  letter-spacing: 0.02em;\n  color: #0f0f11;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 122%;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .personal-account[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #9fa4bb;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  font-size: 14px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n  margin-top: 8px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 0;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  left: 0;\n  margin-top: 14px;\n  background-color: #e3eaf1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1hbm51YWwtcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFFQSxhQUFBO0FBQUQ7QUFFQztFQUNDLE9BQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0FBREY7QUFHRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFESDtBQUlFO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZIO0FBSUU7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRkg7QUFNRztFQUNDLGdCQUFBO0FBSko7QUFNRztFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQVNDO0VBQ0MsT0FBQTtFQUNBLHlCQUFBO0VBQ0EscURBQUE7RUFFQSxtQkFBQTtBQVJGO0FBVUU7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFSSDtBQVdFO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFUSDtBQVdHO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0FBVEo7QUFZRztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFWSjtBQVdJO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFUTDtBQVdJO0VBQ0MsYUFBQTtFQUNBLHFCQUFBO0FBVEw7QUFVSztFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVJOO0FBVUs7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVJOO0FBYUc7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVhKO0FBY0c7RUFDQyxnQkFBQTtBQVpKO0FBYUk7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBWEw7QUFZSztFQUNDLGtCQUFBO0FBVk47QUFZSztFQUNDLGFBQUE7QUFWTjtBQWNHO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUFaSjtBQWVHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBYkoiLCJmaWxlIjoiY2xpZW50LWFubnVhbC1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFubnVhbC1wYXltZW50IHtcblx0cGFkZGluZzogMTZweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdC5sZWZ0IHtcblx0XHRmbGV4OiAxO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdFx0cGFkZGluZzogNDBweCA4NHB4O1xuXG5cdFx0LmJyZWFkY3J1bWJzIHtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxMzYlO1xuXHRcdFx0Y29sb3I6ICM1NTYyNzQ7XG5cdFx0fVxuXG5cdFx0LmFubnVhbC1wYXltZW50LXRpdGxlIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDM2cHg7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdH1cblx0XHQuZGVzY3JpcHRpb24ge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDE0MCU7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXHRcdFx0Y29sb3I6ICM1NTYyNzQ7XG5cdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0fVxuXG5cdFx0Zm9ybSB7XG5cdFx0XHQuaW5wdXQtY29udGFpbmVyIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdH1cblx0XHRcdC5zdWJtaXQge1xuXHRcdFx0XHR3aWR0aDogMjAxcHg7XG5cdFx0XHRcdGhlaWdodDogNDhweDtcblx0XHRcdFx0YmFja2dyb3VuZDogIzBmMGYxMTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLXRvcDogNTZweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQucmlnaHQge1xuXHRcdGZsZXg6IDE7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzIwNWVjYTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9wYXR0ZXJuLTIucG5nXCIpO1xuXG5cdFx0cGFkZGluZzogNDhweCAxMjhweDtcblxuXHRcdC55b3VyLXBsYW4ge1xuXHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHR3aWR0aDogNDEycHg7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0fVxuXG5cdFx0LmNhcmQge1xuXHRcdFx0bWFyZ2luOiAxMnB4IGF1dG8gMDtcblx0XHRcdHdpZHRoOiA0MTJweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0XHRib3gtc2hhZG93OiAwcHggMnB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXG5cdFx0XHQmLXdyYXBwZXIge1xuXHRcdFx0XHRwYWRkaW5nOiAzMnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR9XG5cblx0XHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDE1cHg7XG5cdFx0XHRcdC5idXllciB7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzNnB4O1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnByaWNlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0XHQuY3VycmVuY3kge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzJweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5wZXJpb2Qge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTIyJTtcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cdFx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBlcnNvbmFsLWFjY291bnQge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cdFx0XHRcdGNvbG9yOiAjOWZhNGJiO1xuXHRcdFx0fVxuXG5cdFx0XHQubGlzdCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDMycHg7XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTlweDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDhweDtcblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRidXR0b24ge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0cGFkZGluZzogMTVweCAwO1xuXHRcdFx0fVxuXG5cdFx0XHQuZGl2aWRlciB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDFweDtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlYWYxO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */"], changeDetection: 0 });
ClientAnnualPaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()
], ClientAnnualPaymentComponent);



/***/ })

}]);
//# sourceMappingURL=src_app_client_pages_client-annual-payment_client-annual-payment_module_ts.js.map