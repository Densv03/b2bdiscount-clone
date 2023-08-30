"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_client_pages_client-tradebid-billing_client-tradebid-billing_module_ts"],{

/***/ 89866:
/*!************************************************************************************************!*\
  !*** ./src/app/client/pages/client-tradebid-billing/client-tradebid-billing-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientTradebidBillingRoutingModule": () => (/* binding */ ClientTradebidBillingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_client_tradebid_billing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-tradebid-billing.component */ 239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_client_tradebid_billing_component__WEBPACK_IMPORTED_MODULE_0__.ClientTradebidBillingComponent,
    },
];
class ClientTradebidBillingRoutingModule {
}
ClientTradebidBillingRoutingModule.ɵfac = function ClientTradebidBillingRoutingModule_Factory(t) { return new (t || ClientTradebidBillingRoutingModule)(); };
ClientTradebidBillingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientTradebidBillingRoutingModule });
ClientTradebidBillingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientTradebidBillingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 57016:
/*!****************************************************************************************!*\
  !*** ./src/app/client/pages/client-tradebid-billing/client-tradebid-billing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientTradebidBillingModule": () => (/* binding */ ClientTradebidBillingModule)
/* harmony export */ });
/* harmony import */ var _layout_client_tradebid_billing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-tradebid-billing.component */ 239);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-list */ 80764);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-tel */ 47321);
/* harmony import */ var _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-country-select */ 17354);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-link */ 16385);
/* harmony import */ var _client_tradebid_billing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-tradebid-billing-routing.module */ 89866);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



// import { ErrorTailorModule } from "@ngneat/error-tailor";
// import { B2bNgxTabsModule } from "@b2b/ngx-tabs";











class ClientTradebidBillingModule {
}
ClientTradebidBillingModule.ɵfac = function ClientTradebidBillingModule_Factory(t) { return new (t || ClientTradebidBillingModule)(); };
ClientTradebidBillingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ClientTradebidBillingModule });
ClientTradebidBillingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _client_tradebid_billing_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientTradebidBillingRoutingModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClientTradebidBillingModule, { declarations: [_layout_client_tradebid_billing_component__WEBPACK_IMPORTED_MODULE_0__.ClientTradebidBillingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _client_tradebid_billing_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientTradebidBillingRoutingModule,
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

/***/ 239:
/*!**************************************************************************************************!*\
  !*** ./src/app/client/pages/client-tradebid-billing/layout/client-tradebid-billing.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientTradebidBillingComponent": () => (/* binding */ ClientTradebidBillingComponent)
/* harmony export */ });
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/helpers/validator/only-number */ 64309);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-select */ 20592);
/* harmony import */ var _core_helpers_validator_only_latin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/helpers/validator/only-latin */ 65064);
/* harmony import */ var _core_helpers_validator_only_latin_numbers_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/helpers/validator/only -latin-numbers-symbols */ 86517);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var _services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/payment/payment.service */ 26978);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../auth/services/auth/auth.service */ 24159);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../projects/ngx-country-select/src/lib/layout/ngx-country-select.component */ 11070);
























function ClientTradebidBillingComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please, use only numbers! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please, don`t use cyrillic characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please use only numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please put 3 numbers, now is ", ctx_r6.formGroup.get("expDate").errors == null ? null : ctx_r6.formGroup.get("expDate").errors["minLength"].actualLength, " ");
} }
function ClientTradebidBillingComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please put 3 numbers, now is ", ctx_r7.formGroup.get("expDate").errors == null ? null : ctx_r7.formGroup.get("expDate").errors["maxLength"].actualLength, " ");
} }
function ClientTradebidBillingComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please use only numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please put 3 numbers, now is ", ctx_r10.formGroup.get("cardCode").errors == null ? null : ctx_r10.formGroup.get("cardCode").errors["min"].actual, " ");
} }
function ClientTradebidBillingComponent_p_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please put 3 numbers, now is ", ctx_r11.formGroup.get("cardCode").errors == null ? null : ctx_r11.formGroup.get("cardCode").errors["maxLength"].actualLength, " ");
} }
function ClientTradebidBillingComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please use only latin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please use only numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please put 6 numbers, now is ", ctx_r17.formGroup.get("postCode").errors == null ? null : ctx_r17.formGroup.get("postCode").errors["minLength"].actualLength, " ");
} }
function ClientTradebidBillingComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Please put 6 numbers, now is ", ctx_r18.formGroup.get("postCode").errors == null ? null : ctx_r18.formGroup.get("postCode").errors["maxLength"].actualLength, " ");
} }
function ClientTradebidBillingComponent_p_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ClientTradebidBillingComponent_p_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please use latin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOut", undefined);
} }
const _c0 = function () { return { alignItems: "flex-end" }; };
class ClientTradebidBillingComponent {
    constructor(_formBuilder, b2bNgxLinkService, _paymentService, _hotToastService, translateService, _router, _authService, route) {
        this._formBuilder = _formBuilder;
        this.b2bNgxLinkService = b2bNgxLinkService;
        this._paymentService = _paymentService;
        this._hotToastService = _hotToastService;
        this.translateService = translateService;
        this._router = _router;
        this._authService = _authService;
        this.route = route;
        this.formGroup = this._formBuilder.group({
            cardNum: [""],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, (0,_core_helpers_validator_only_latin_numbers_symbols__WEBPACK_IMPORTED_MODULE_2__.onlyLatinAndNumberAndSymbols)()]],
            expDate: [""],
            postCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(6), (0,_core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_0__.onlyNumber)()]],
            cardCode: [""],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, (0,_core_helpers_validator_only_latin__WEBPACK_IMPORTED_MODULE_1__.onlyLatin)()]],
            country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            region: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, (0,_core_helpers_validator_only_latin__WEBPACK_IMPORTED_MODULE_1__.onlyLatin)()]],
        });
        this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_7__.B2bNgxInputThemeEnum;
        this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_8__.B2bNgxButtonThemeEnum;
        this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_9__.B2bNgxLinkThemeEnum;
        this.b2bNgxSelectThemeEnum = _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_10__.B2bNgxSelectThemeEnum;
        this.quotesCount = +this.route.snapshot.params['quotes'];
        this.price = this.calcQuotesPrice(this.route.snapshot.params['quotes']);
    }
    ngOnInit() {
        this._authService.user$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe((user) => {
            if (user && user.paymentInfo) {
                this.formGroup.patchValue({
                    ...user.paymentInfo,
                    cardNum: `**** **** **** ${user.paymentInfo.cardNumber}`,
                    expDate: `****`,
                    cardCode: "***",
                });
            }
        });
        if (this.quotesCount !== 10 && this.quotesCount !== 20 && this.quotesCount !== 30) {
            this._router.navigateByUrl("/profile/billing");
        }
    }
    sendCardData(formValue) {
        this.formGroup.markAllAsTouched();
        this._authService.getUser().subscribe((user) => {
            if (!user.paymentInfo.cardNumber) {
                this._paymentService
                    .createCustomerProfile(formValue)
                    .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)((error) => {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(error.error.message);
                }))
                    .subscribe({
                    next: () => {
                        this.buyQuotes();
                        this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink("/annual-succeeded"));
                    },
                    error: (error) => {
                        if (error === "Payment info already exist!") {
                            this.buyQuotes();
                        }
                        else {
                            this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink("/annual-failed"));
                        }
                    },
                });
            }
            this.buyQuotes();
        });
    }
    getAnnualSubscriptionRoute() {
        this._router.navigateByUrl("/annual-payment");
    }
    buyQuotes() {
        const body = {
            amount: this.price,
            type: "rfqQuotes",
            quotesNumb: this.quotesCount,
        };
        this._paymentService
            .createPaymentByProfile(body)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)((error) => {
            this._hotToastService.error(error.error.message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(error.error.message);
        }))
            .subscribe(() => {
            this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink("/annual-succeeded"));
        });
    }
    calcQuotesPrice(quotes) {
        switch (+quotes) {
            case 10:
                return "49";
            case 20:
                return "79";
            case 30:
                return "99";
            default:
                return "";
        }
    }
}
ClientTradebidBillingComponent.ɵfac = function ClientTradebidBillingComponent_Factory(t) { return new (t || ClientTradebidBillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_payment_payment_service__WEBPACK_IMPORTED_MODULE_3__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_15__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute)); };
ClientTradebidBillingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ClientTradebidBillingComponent, selectors: [["b2b-client-tradebid-billing"]], decls: 80, vars: 59, consts: [[1, "annual-payment"], [1, "left"], [1, "breadcrumbs"], [1, "annual-payment-title"], [1, "description"], [3, "formGroup", "submit"], [1, "input-container"], ["b2bNgxInput", "", "formControlName", "cardNum", 3, "theme", "label", "disabled"], ["class", "error", 4, "ngIf"], ["b2bNgxInput", "", "formControlName", "email", 3, "theme", "label"], [1, "inputs-wrapper"], [1, "wrapper-container"], ["b2bNgxInput", "", "formControlName", "expDate", 3, "theme", "label", "disabled"], ["b2bNgxInput", "", "formControlName", "cardCode", 3, "theme", "label", "disabled"], [1, "inputs-wrapper", 3, "ngStyle"], ["formControlName", "country", "placeholder", "Select Country", 1, "admin-article__country", 3, "theme"], ["b2bNgxInput", "", "formControlName", "region", 3, "theme", "label"], ["b2bNgxInput", "", "formControlName", "postCode", 3, "theme", "label"], ["b2bNgxInput", "", "formControlName", "city", 3, "theme", "label"], ["b2bNgxButton", "", 1, "submit", 3, "theme"], [1, "right"], [1, "your-plan"], [1, "card"], [1, "card-wrapper"], [1, "card-header"], [1, "buyer"], [1, "price"], [1, "currency"], [1, "divider"], [1, "list"], ["b2bNgxIcon", "", "name", "check-blue", "alt", ""], [1, "error"]], template: function ClientTradebidBillingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Pricing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Trade Bid Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Trade Bid Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Enter & confirm the information below for invoicing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function ClientTradebidBillingComponent_Template_form_submit_11_listener() { return ctx.sendCardData(ctx.formGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ClientTradebidBillingComponent_p_15_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ClientTradebidBillingComponent_p_16_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ClientTradebidBillingComponent_p_20_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ClientTradebidBillingComponent_p_21_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 10)(23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ClientTradebidBillingComponent_p_26_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ClientTradebidBillingComponent_p_27_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ClientTradebidBillingComponent_p_28_Template, 2, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ClientTradebidBillingComponent_p_29_Template, 2, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ClientTradebidBillingComponent_p_33_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ClientTradebidBillingComponent_p_34_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ClientTradebidBillingComponent_p_35_Template, 2, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ClientTradebidBillingComponent_p_36_Template, 2, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 14)(38, "div", 14)(39, "div", 11)(40, "b2b-ngx-country-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ClientTradebidBillingComponent_p_42_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, ClientTradebidBillingComponent_p_46_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, ClientTradebidBillingComponent_p_47_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 10)(49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ClientTradebidBillingComponent_p_52_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, ClientTradebidBillingComponent_p_53_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, ClientTradebidBillingComponent_p_54_Template, 2, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, ClientTradebidBillingComponent_p_55_Template, 2, 2, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, ClientTradebidBillingComponent_p_59_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, ClientTradebidBillingComponent_p_60_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Proceed to Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 20)(64, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Your plan:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 22)(67, "div", 23)(68, "p", 24)(69, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span", 26)(72, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "ul", 29)(76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 43, "LABELS.CARD_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("cardNum").touched && (ctx.formGroup.get("cardNum").errors == null ? null : ctx.formGroup.get("cardNum").errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("cardNum").touched && (ctx.formGroup.get("cardNum").errors == null ? null : ctx.formGroup.get("cardNum").errors["number"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 45, "LABELS.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("email").touched && (ctx.formGroup.get("email").errors == null ? null : ctx.formGroup.get("email").errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("email").touched && (ctx.formGroup.get("email").errors == null ? null : ctx.formGroup.get("email").errors["cyrillic"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 47, "LABELS.EXPIRED_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("expDate").touched && (ctx.formGroup.get("expDate").errors == null ? null : ctx.formGroup.get("expDate").errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("expDate").touched && (ctx.formGroup.get("expDate").errors == null ? null : ctx.formGroup.get("expDate").errors["number"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("expDate").touched && (ctx.formGroup.get("expDate").errors == null ? null : ctx.formGroup.get("expDate").errors["minLength"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("expDate").touched && (ctx.formGroup.get("expDate").errors == null ? null : ctx.formGroup.get("expDate").errors["maxLength"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 49, "LABELS.CVV"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("cardCode").touched && (ctx.formGroup.get("cardCode").errors == null ? null : ctx.formGroup.get("cardCode").errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("cardCode").touched && (ctx.formGroup.get("cardCode").errors == null ? null : ctx.formGroup.get("cardCode").errors["number"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("cardCode").touched && (ctx.formGroup.get("cardCode").errors == null ? null : ctx.formGroup.get("cardCode").errors["min"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("cardCode").touched && (ctx.formGroup.get("cardCode").errors == null ? null : ctx.formGroup.get("cardCode").errors["maxLength"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](57, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](58, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("country").touched && (ctx.formGroup.get("country").errors == null ? null : ctx.formGroup.get("country").errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 51, "LABELS.REGION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("region").touched && (ctx.formGroup.get("region").errors == null ? null : ctx.formGroup.get("region").errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("region").touched && (ctx.formGroup.get("region").errors == null ? null : ctx.formGroup.get("region").errors["number"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](51, 53, "LABELS.POST_CODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("postCode").touched && (ctx.formGroup.get("postCode").errors == null ? null : ctx.formGroup.get("postCode").errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("postCode").touched && (ctx.formGroup.get("postCode").errors == null ? null : ctx.formGroup.get("postCode").errors["number"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("postCode").touched && (ctx.formGroup.get("postCode").errors == null ? null : ctx.formGroup.get("postCode").errors["minLength"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("postCode").touched && (ctx.formGroup.get("postCode").errors == null ? null : ctx.formGroup.get("postCode").errors["maxLength"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](58, 55, "LABELS.CITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("city").touched && (ctx.formGroup.get("city").errors == null ? null : ctx.formGroup.get("city").errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("city").touched && (ctx.formGroup.get("city").errors == null ? null : ctx.formGroup.get("city").errors["latin"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.quotesCount, " Quotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("For ", ctx.price, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("To contact ", ctx.quotesCount, " buyers");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_19__.B2bNgxIconDirective, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_20__.B2bNgxButtonDirective, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_21__.B2bNgxInputDirective, _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_22__.B2bNgxCountrySelectComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".annual-payment[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  padding: 40px 84px;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 136%;\n  color: #556274;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .annual-payment-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 36px;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n  margin-top: 16px;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 140%;\n  letter-spacing: 0.01em;\n  color: #556274;\n  margin-top: 8px;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #e63d3d;\n  margin-top: 10px;\n  position: absolute;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputs-wrapper[_ngcontent-%COMP%]   .wrapper-container[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  width: 48%;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.annual-payment[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  width: 201px;\n  height: 48px;\n  background: #0f0f11;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 56px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #205eca;\n  background-image: url(\"/assets/images/pattern-2.png\");\n  padding: 48px 128px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .your-plan[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 412px;\n  font-size: 16px;\n  letter-spacing: 0.01em;\n  color: #ffffff;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin: 12px auto 0;\n  width: 412px;\n  background: #ffffff;\n  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);\n  border-radius: 6px;\n  margin-top: 12px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n  padding: 32px;\n  position: relative;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 15px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .buyer[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 36px;\n  letter-spacing: 0.02em;\n  color: #000000;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 32px;\n  display: flex;\n  letter-spacing: 0.02em;\n  color: #0f0f11;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 122%;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .personal-account[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #9fa4bb;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  font-size: 14px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #0f0f11;\n  margin-top: 8px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 0;\n}\n.annual-payment[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  left: 0;\n  margin-top: 14px;\n  background-color: #e3eaf1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC10cmFkZWJpZC1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUVBLGFBQUE7QUFBRDtBQUVDO0VBQ0MsT0FBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFERjtBQUdFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURIO0FBSUU7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRkg7QUFJRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGSDtBQU1HO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNRztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUpKO0FBS0k7RUFDQyxnQkFBQTtFQUNBLFVBQUE7QUFITDtBQU1HO0VBQ0MsZ0JBQUE7QUFKSjtBQU1HO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUpKO0FBU0M7RUFDQyxPQUFBO0VBQ0EseUJBQUE7RUFDQSxxREFBQTtFQUVBLG1CQUFBO0FBUkY7QUFVRTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVJIO0FBV0U7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVRIO0FBV0c7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQVlHO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVZKO0FBV0k7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVRMO0FBV0k7RUFDQyxhQUFBO0VBQ0EscUJBQUE7QUFUTDtBQVVLO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBUk47QUFVSztFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBUk47QUFhRztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBWEo7QUFjRztFQUNDLGdCQUFBO0FBWko7QUFhSTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFYTDtBQVlLO0VBQ0Msa0JBQUE7QUFWTjtBQVlLO0VBQ0MsYUFBQTtBQVZOO0FBY0c7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQVpKO0FBZUc7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFiSiIsImZpbGUiOiJjbGllbnQtdHJhZGViaWQtYmlsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbm51YWwtcGF5bWVudCB7XG5cdHBhZGRpbmc6IDE2cHg7XG5cblx0ZGlzcGxheTogZmxleDtcblxuXHQubGVmdCB7XG5cdFx0ZmxleDogMTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRcdHBhZGRpbmc6IDQwcHggODRweDtcblxuXHRcdC5icmVhZGNydW1icyB7XG5cdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMTM2JTtcblx0XHRcdGNvbG9yOiAjNTU2Mjc0O1xuXHRcdH1cblxuXHRcdC5hbm51YWwtcGF5bWVudC10aXRsZSB7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAzNnB4O1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHR9XG5cdFx0LmRlc2NyaXB0aW9uIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxNDAlO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblx0XHRcdGNvbG9yOiAjNTU2Mjc0O1xuXHRcdFx0bWFyZ2luLXRvcDogOHB4O1xuXHRcdH1cblxuXHRcdGZvcm0ge1xuXHRcdFx0LmVycm9yIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRjb2xvcjogI2U2M2QzZDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0fVxuXHRcdFx0LmlucHV0cy13cmFwcGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0LndyYXBwZXItY29udGFpbmVyIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdFx0XHRcdHdpZHRoOiA0OCU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5pbnB1dC1jb250YWluZXIge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdFx0fVxuXHRcdFx0LnN1Ym1pdCB7XG5cdFx0XHRcdHdpZHRoOiAyMDFweDtcblx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjMGYwZjExO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA1NnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5yaWdodCB7XG5cdFx0ZmxleDogMTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1ZWNhO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BhdHRlcm4tMi5wbmdcIik7XG5cblx0XHRwYWRkaW5nOiA0OHB4IDEyOHB4O1xuXG5cdFx0LnlvdXItcGxhbiB7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdHdpZHRoOiA0MTJweDtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHR9XG5cblx0XHQuY2FyZCB7XG5cdFx0XHRtYXJnaW46IDEycHggYXV0byAwO1xuXHRcdFx0d2lkdGg6IDQxMnB4O1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHRcdGJveC1zaGFkb3c6IDBweCAycHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdG1hcmdpbi10b3A6IDEycHg7XG5cblx0XHRcdCYtd3JhcHBlciB7XG5cdFx0XHRcdHBhZGRpbmc6IDMycHg7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdH1cblxuXHRcdFx0LmNhcmQtaGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0XHRcdFx0LmJ1eWVyIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDM2cHg7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcblx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQucHJpY2Uge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0XHRcdC5jdXJyZW5jeSB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzMnB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG5cdFx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnBlcmlvZCB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMjIlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGVyc29uYWwtYWNjb3VudCB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblx0XHRcdFx0Y29sb3I6ICM5ZmE0YmI7XG5cdFx0XHR9XG5cblx0XHRcdC5saXN0IHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cdFx0XHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogOHB4O1xuXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAxNXB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5kaXZpZGVyIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMXB4O1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDE0cHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlM2VhZjE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.trigger)("fadeInOut", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)(":enter", [
                    // :enter is alias to 'void => *'
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ opacity: 1 })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)(":leave", [
                    // :leave is alias to '* => void'
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ opacity: 0 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 86517:
/*!***********************************************************************!*\
  !*** ./src/app/core/helpers/validator/only -latin-numbers-symbols.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlyLatinAndNumberAndSymbols": () => (/* binding */ onlyLatinAndNumberAndSymbols)
/* harmony export */ });
function onlyLatinAndNumberAndSymbols() {
    const latinCharacters = /^[A-Za-z0-9!@#$%^&*+()_,./?=|№:/'-]+$/;
    return (control) => {
        if (!control.value) {
            return null;
        }
        const str = control.value.replace(/\s+/g, "");
        if (!latinCharacters.test(String(str.trim()).toLowerCase())) {
            return { cyrillic: true };
        }
        return null;
    };
}


/***/ }),

/***/ 65064:
/*!******************************************************!*\
  !*** ./src/app/core/helpers/validator/only-latin.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlyLatin": () => (/* binding */ onlyLatin)
/* harmony export */ });
function onlyLatin() {
    const latinCharacters = /^[a-zA-Z]+$/;
    return (control) => {
        if (!control.value) {
            return null;
        }
        const noSpaceStr = control.value.replace(/\s/g, "");
        if (!latinCharacters.test(String(noSpaceStr).toLowerCase())) {
            return { latin: true };
        }
        return null;
    };
}


/***/ }),

/***/ 64309:
/*!*******************************************************!*\
  !*** ./src/app/core/helpers/validator/only-number.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlyNumber": () => (/* binding */ onlyNumber)
/* harmony export */ });
function onlyNumber() {
    return (control) => /^[0-9.]*$/g.test(control.value) ? null : { number: true };
}


/***/ })

}]);
//# sourceMappingURL=src_app_client_pages_client-tradebid-billing_client-tradebid-billing_module_ts.js.map