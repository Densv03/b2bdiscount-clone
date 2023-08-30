"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-src_app_client_pages_client-profile_pages_client-profile-add-offer_client-profile-add-3db01c"],{

/***/ 75092:
/*!**********************************************************!*\
  !*** ./projects/ngx-toggle/src/lib/ngx-toggle.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxToggleModule": () => (/* binding */ B2bNgxToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/ngx-toggle.component */ 43607);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);




class B2bNgxToggleModule {
}
B2bNgxToggleModule.ɵfac = function B2bNgxToggleModule_Factory(t) { return new (t || B2bNgxToggleModule)(); };
B2bNgxToggleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxToggleModule });
B2bNgxToggleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxToggleModule, { declarations: [_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxToggleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule], exports: [_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxToggleComponent] }); })();


/***/ }),

/***/ 2647:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-profile/pages/client-profile-add-offer/client-profile-add-offer-routing.module.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientProfileAddOfferRoutingModule": () => (/* binding */ ClientProfileAddOfferRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_client_profile_add_offer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-profile-add-offer.component */ 11887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_client_profile_add_offer_component__WEBPACK_IMPORTED_MODULE_0__.ClientProfileAddOfferComponent,
    },
];
class ClientProfileAddOfferRoutingModule {
}
ClientProfileAddOfferRoutingModule.ɵfac = function ClientProfileAddOfferRoutingModule_Factory(t) { return new (t || ClientProfileAddOfferRoutingModule)(); };
ClientProfileAddOfferRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientProfileAddOfferRoutingModule });
ClientProfileAddOfferRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientProfileAddOfferRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 59186:
/*!***************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-profile/pages/client-profile-add-offer/client-profile-add-offer.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientProfileAddOfferModule": () => (/* binding */ ClientProfileAddOfferModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _client_profile_add_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-profile-add-offer-routing.module */ 2647);
/* harmony import */ var _layout_client_profile_add_offer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/client-profile-add-offer.component */ 11887);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-toggle */ 75092);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _b2b_ngx_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-checkbox */ 31347);
/* harmony import */ var _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-file */ 5173);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/ngx-textarea */ 31060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @b2b/ngx-tel */ 47321);
/* harmony import */ var _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @b2b/ngx-country-select */ 17354);
/* harmony import */ var _components_client_profile_add_offer_dialog_client_profile_add_offer_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/client-profile-add-offer-dialog/client-profile-add-offer-dialog.component */ 97154);
/* harmony import */ var _b2b_ngx_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-radio */ 36227);
/* harmony import */ var _core_directives_scroll_to_invalid_control_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/directives/scroll-to-invalid-control.directive */ 92634);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);



















class ClientProfileAddOfferModule {
}
ClientProfileAddOfferModule.ɵfac = function ClientProfileAddOfferModule_Factory(t) { return new (t || ClientProfileAddOfferModule)(); };
ClientProfileAddOfferModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ClientProfileAddOfferModule });
ClientProfileAddOfferModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _client_profile_add_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientProfileAddOfferRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_9__.B2bNgxInputModule,
        _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_10__.B2bNgxToggleModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_11__.B2bNgxSelectModule,
        _b2b_ngx_checkbox__WEBPACK_IMPORTED_MODULE_12__.B2bNgxCheckboxModule,
        _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_2__.B2bNgxFileModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_13__.B2bNgxButtonModule,
        _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_14__.B2bNgxTextareaModule,
        _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_15__.B2bNgxTelModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_16__.B2bNgxCountrySelectModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_17__.B2bNgxIconModule,
        _b2b_ngx_radio__WEBPACK_IMPORTED_MODULE_4__.B2bNgxRadioModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ClientProfileAddOfferModule, { declarations: [_layout_client_profile_add_offer_component__WEBPACK_IMPORTED_MODULE_1__.ClientProfileAddOfferComponent, _components_client_profile_add_offer_dialog_client_profile_add_offer_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ClientProfileAddOfferDialogComponent, _core_directives_scroll_to_invalid_control_directive__WEBPACK_IMPORTED_MODULE_5__.B2bScrollToInvalidControl], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _client_profile_add_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientProfileAddOfferRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_9__.B2bNgxInputModule,
        _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_10__.B2bNgxToggleModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_11__.B2bNgxSelectModule,
        _b2b_ngx_checkbox__WEBPACK_IMPORTED_MODULE_12__.B2bNgxCheckboxModule,
        _b2b_ngx_file__WEBPACK_IMPORTED_MODULE_2__.B2bNgxFileModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_13__.B2bNgxButtonModule,
        _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_14__.B2bNgxTextareaModule,
        _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_15__.B2bNgxTelModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_16__.B2bNgxCountrySelectModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_17__.B2bNgxIconModule,
        _b2b_ngx_radio__WEBPACK_IMPORTED_MODULE_4__.B2bNgxRadioModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule] }); })();


/***/ }),

/***/ 97154:
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-profile/pages/client-profile-add-offer/components/client-profile-add-offer-dialog/client-profile-add-offer-dialog.component.ts ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientProfileAddOfferDialogComponent": () => (/* binding */ ClientProfileAddOfferDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 87260);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _projects_ngx_toggle_src_lib_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../projects/ngx-toggle/src/lib/layout/ngx-toggle.component */ 43607);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 1468);












let ClientProfileAddOfferDialogComponent = class ClientProfileAddOfferDialogComponent {
    constructor(_formBuilder, _changeDetectorRef, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this._changeDetectorRef = _changeDetectorRef;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formGroup = this.getFormGroup();
        this.b2bNgxButtonThemEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_0__.B2bNgxButtonThemeEnum;
    }
    getFormGroup() {
        return this._formBuilder.group({
            visibilityCompanyName: [false],
            visibilityContactPerson: [false],
            visibilityPhone: [false],
            visibilityEmail: [false],
            visibilityContainer: [false],
            visibilityDocuments: [false],
            visibilityAll: [false],
        });
    }
    ngOnInit() {
        this.formGroup.patchValue(this.data.data);
        this.visibilityAllSubscription();
        this.formGroupSubscription();
        this.formGroup.updateValueAndValidity();
    }
    closeDialog(save) {
        const res = this.formGroup.value;
        delete res['visibilityAll'];
        this.dialogRef.close({ togglers: res, createOffer: save });
    }
    visibilityAllSubscription() {
        this.formGroup
            .get("visibilityAll")
            .valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.skip)(1))
            .subscribe((value) => {
            const { visibilityAll, ...restValues } = this.formGroup.value;
            const valuesToPatch = Object.keys(restValues).reduce((obj, key) => ({ ...obj, [key]: value }), {});
            this.formGroup.patchValue(valuesToPatch);
        });
    }
    formGroupSubscription() {
        this.formGroup.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe((values) => {
            const { visibilityAll, ...restValues } = values;
            const isAllVisible = Object.values(restValues).every((value) => value);
            this.formGroup.get("visibilityAll").setValue(isAllVisible, { emitEvent: false });
        });
    }
};
ClientProfileAddOfferDialogComponent.ɵfac = function ClientProfileAddOfferDialogComponent_Factory(t) { return new (t || ClientProfileAddOfferDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
ClientProfileAddOfferDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ClientProfileAddOfferDialogComponent, selectors: [["b2b-client-profile-add-offer-dialog"]], decls: 49, vars: 33, consts: [[3, "formGroup"], ["formControlName", "visibilityCompanyName"], ["formControlName", "visibilityContactPerson"], ["formControlName", "visibilityPhone"], ["formControlName", "visibilityEmail"], ["formControlName", "visibilityContainer"], ["formControlName", "visibilityDocuments"], ["formControlName", "visibilityAll"], [1, "buttons"], ["b2bNgxButton", "", "type", "button", 3, "theme", "click"]], template: function ClientProfileAddOfferDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul")(8, "li")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "b2b-ngx-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li")(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "b2b-ngx-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li")(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "b2b-ngx-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li")(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "b2b-ngx-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li")(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "b2b-ngx-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li")(34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "b2b-ngx-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "li")(39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "b2b-ngx-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 8)(44, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientProfileAddOfferDialogComponent_Template_button_click_44_listener() { return ctx.closeDialog(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClientProfileAddOfferDialogComponent_Template_button_click_46_listener() { return ctx.closeDialog(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 13, "OFFERS_SETTINGS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 15, "OFFERS_SETTINGS.DESCRIPTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 17, "LABELS.COMPANY_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 19, "LABELS.CONTACT_PERSON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 21, "LABELS.PHONE_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 23, "LABELS.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 25, "LABELS.CONTAINER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 27, "LABELS.DOCUMENTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 29, "LABELS.ALL_VISIBLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemEnum.BACKGROUND_BLACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemEnum.BACKGROUND_BLACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 31, "BUTTONS.POST_THIS_LOT"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _projects_ngx_toggle_src_lib_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_6__.B2bNgxToggleComponent, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_7__.B2bNgxButtonDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  max-height: 80vh;\n  padding: 50px 56px;\n  height: 100%;\n}\nform[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 36px;\n  color: #0f0f11;\n}\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Helvetica Neue;\n  font-size: 14px;\n  color: #556274;\n}\nform[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  margin-top: 40px;\n}\nform[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 4px;\n}\nform[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #0f0f11;\n}\nform[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background: #f3f6f8;\n}\nform[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n}\nform[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 100%;\n  padding: 15px 0;\n}\n  .ngneat-dialog-backdrop {\n  z-index: 1070 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRDtBQUFDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUY7QUFBQztFQUNDLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFRjtBQUNDO0VBQ0MsT0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFFSDtBQURHO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUFHSjtBQURHO0VBQ0MsbUJBQUE7QUFHSjtBQUVDO0VBQ0MsYUFBQTtFQUNBLFNBQUE7QUFBRjtBQUNFO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNIO0FBSUM7RUFDQyx3QkFBQTtBQURGIiwiZmlsZSI6ImNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1heC1oZWlnaHQ6IDgwdmg7XG5cdHBhZGRpbmc6IDUwcHggNTZweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRoNiB7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzNnB4O1xuXHRcdGNvbG9yOiAjMGYwZjExO1xuXHR9XG5cdHAge1xuXHRcdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Y29sb3I6ICM1NTYyNzQ7XG5cdH1cblxuXHR1bCB7XG5cdFx0ZmxleDogMTtcblx0XHRvdmVyZmxvdzogYXV0bztcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHRcdGxpIHtcblx0XHRcdHBhZGRpbmc6IDEwcHggMTZweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHR9XG5cdFx0XHQmOm50aC1jaGlsZCgybiArIDEpIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjZmODtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuYnV0dG9ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRnYXA6IDE1cHg7XG5cdFx0YnV0dG9uIHtcblx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdHBhZGRpbmc6IDE1cHggMDtcblx0XHR9XG5cdH1cbn1cbjo6bmctZGVlcCB7XG5cdC5uZ25lYXQtZGlhbG9nLWJhY2tkcm9wIHtcblx0XHR6LWluZGV4OiAxMDcwICFpbXBvcnRhbnQ7XG5cdH1cbn1cbiJdfQ== */"] });
ClientProfileAddOfferDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], ClientProfileAddOfferDialogComponent);



/***/ }),

/***/ 51183:
/*!***************************************************************************************************!*\
  !*** ./src/app/client/pages/client-profile/pages/client-profile-add-offer/get-offer-form-data.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOfferFormData": () => (/* binding */ getOfferFormData)
/* harmony export */ });
/* harmony import */ var _core_helpers_function_capitalize_first_letter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/helpers/function/capitalize-first-letter */ 2613);

function getOfferFormData(offerToCreate) {
    const formData = new FormData();
    Object.entries(offerToCreate)
        .filter(([, value]) => !!value)
        .forEach(([key, value]) => {
        if (key === "photos" || key === "documents") {
            Array.from(value).forEach((file) => {
                formData.append(key, file);
            });
        }
        else if (Array.isArray(value)) {
            value
                .filter((arrayItem) => !!arrayItem)
                .forEach((arrayItem) => {
                formData.append(key, arrayItem);
            });
        }
        else if (typeof value === "object" && value) {
            for (const childKey in value) {
                const fullKey = `${key}${(0,_core_helpers_function_capitalize_first_letter__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(childKey)}`;
                formData.append(fullKey, value[childKey]);
            }
        }
        else {
            formData.append(key, value);
        }
    });
    return formData;
}


/***/ }),

/***/ 11887:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-profile/pages/client-profile-add-offer/layout/client-profile-add-offer.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientProfileAddOfferComponent": () => (/* binding */ ClientProfileAddOfferComponent),
/* harmony export */   "containerNumber": () => (/* binding */ containerNumber),
/* harmony export */   "oneContainer": () => (/* binding */ oneContainer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../environments/environment */ 92340);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @b2b/ngx-select */ 20592);
/* harmony import */ var _client_offer_components_client_offer_document_client_offer_document_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../client-offer/components/client-offer-document/client-offer-document.component */ 41072);
/* harmony import */ var _components_client_profile_add_offer_dialog_client_profile_add_offer_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/client-profile-add-offer-dialog/client-profile-add-offer-dialog.component */ 97154);
/* harmony import */ var _core_add_offer_image_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/add-offer/image-extensions */ 37453);
/* harmony import */ var _core_add_offer_document_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/add-offer/document-extensions */ 35474);
/* harmony import */ var _core_helpers_validator_only_latin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/helpers/validator/only-latin */ 65064);
/* harmony import */ var _core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/helpers/validator/only-number */ 64309);
/* harmony import */ var _core_helpers_function_get_url_extension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/helpers/function/get-url-extension */ 13333);
/* harmony import */ var _core_helpers_validator_only_latin_numbers_symbols__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/helpers/validator/only -latin-numbers-symbols */ 86517);
/* harmony import */ var _get_offer_form_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../get-offer-form-data */ 51183);
/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! country-list */ 1188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../auth/services/auth/auth.service */ 24159);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _services_categories_categories_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../services/categories/categories.service */ 57454);
/* harmony import */ var _services_units_units_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../services/units/units.service */ 57400);
/* harmony import */ var _services_transport_types_transport_types_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../services/transport-types/transport-types.service */ 4904);
/* harmony import */ var _services_offers_offers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../services/offers/offers.service */ 36521);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/dialog */ 28800);
/* harmony import */ var _client_tradebid_tradebid_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../client-tradebid/tradebid.service */ 33483);
/* harmony import */ var _core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../core/services/mixpanel/mixpanel.service */ 56838);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_input_src_lib_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-input/src/lib/layout/ngx-input.component */ 21729);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_toggle_src_lib_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-toggle/src/lib/layout/ngx-toggle.component */ 43607);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);
/* harmony import */ var _projects_ngx_file_src_lib_layout_ngx_file_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-file/src/lib/layout/ngx-file.component */ 97567);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_textarea_src_lib_directive_ngx_textarea_directive__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-textarea/src/lib/directive/ngx-textarea.directive */ 18103);
/* harmony import */ var _projects_ngx_tel_src_lib_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-tel/src/lib/layout/ngx-tel.component */ 15931);
/* harmony import */ var _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-country-select/src/lib/layout/ngx-country-select.component */ 11070);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_radio_src_lib_layout_ngx_radio_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../../projects/ngx-radio/src/lib/layout/ngx-radio.component */ 67841);
/* harmony import */ var _core_directives_scroll_to_invalid_control_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../core/directives/scroll-to-invalid-control.directive */ 92634);


















































function ClientProfileAddOfferComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, "ERRORS.USER_ENGLISH_LETTERS"), " ");
  }
}

function ClientProfileAddOfferComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, "ERRORS.USER_ENGLISH_LETTERS"), " ");
  }
}

function ClientProfileAddOfferComponent_p_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, "ERRORS.USER_ENGLISH_LETTERS"), " ");
  }
}

function ClientProfileAddOfferComponent_p_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, "ERRORS.USER_ENGLISH_LETTERS"), " ");
  }
}

function ClientProfileAddOfferComponent_p_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 2, "OFFER.DISCOUNT"), " ");
  }
}

function ClientProfileAddOfferComponent_p_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Please, use numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}

function ClientProfileAddOfferComponent_div_101_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " There should be only numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function ClientProfileAddOfferComponent_div_101_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Please, check your \u201Ccontainer number\u201D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}

function ClientProfileAddOfferComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "b2b-ngx-input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, ClientProfileAddOfferComponent_div_101_p_3_Template, 2, 0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, ClientProfileAddOfferComponent_div_101_p_4_Template, 2, 0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 5, "PLACEHOLDERS.CONTAINER_VESSEL"))("errors", ctx_r6.formGroup.get("container").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r6.formGroup.get("container").errors == null ? null : ctx_r6.formGroup.get("container").errors["bulkVesselFormat"]) && ctx_r6.formGroup.get("container").dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx_r6.formGroup.get("container").errors == null ? null : ctx_r6.formGroup.get("container").errors["containerNumberType"]) && ctx_r6.formGroup.get("container").dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](7, 7, "HINTS.CONTAINER_NUMBER"));
  }
}

const _c0 = function () {
  return ["IMO", "MMSI"];
};

function ClientProfileAddOfferComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "b2b-ngx-radio", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](2, _c0))("errors", ctx_r7.formGroup.get("containerNumberType").errors);
  }
}

function ClientProfileAddOfferComponent_p_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Please load at least 1 photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}

function ClientProfileAddOfferComponent_p_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Please load at least 1 document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@fadeInOut", undefined);
  }
}

function ClientProfileAddOfferComponent_button_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ClientProfileAddOfferComponent_button_145_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r15.backToCompanyForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "svg", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx_r10.b2bNgxButtonThemeEnum.OUTLINE_GRAY);
  }
}

function ClientProfileAddOfferComponent_button_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ClientProfileAddOfferComponent_button_146_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r17.reviewAndPost(ctx_r17.formGroup));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r11.loading)("theme", ctx_r11.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 3, "OFFER.REVIEW"), " ");
  }
}

function ClientProfileAddOfferComponent_button_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function ClientProfileAddOfferComponent_button_147_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r19.reviewAndPost(ctx_r19.formGroup));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx_r12.loading)("theme", ctx_r12.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](2, 3, "OFFER.EDIT"), " ");
  }
}

function oneContainer() {
  const oneContainer = /^[^. ,]+$/;
  return control => {
    if (!control.value) {
      return null;
    }

    if (!oneContainer.test(String(control.value).toLowerCase())) {
      return {
        oneContainer: true
      };
    }

    return null;
  };
}
function containerNumber() {
  const bulkVesselType = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? "60a784830a04b16c574e8147" : "60ba1f30445d001ecf7775b4";
  const containerNumberType = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? "60a784830a04b16c574e8146" : "60ba1f30445d001ecf7775b3";
  return control => {
    var _a, _b; // const transportType: any = control.parent?.controls["transportType"];


    const transportType = (_b = (_a = control.parent) === null || _a === void 0 ? void 0 : _a.controls.values) === null || _b === void 0 ? void 0 : _b.transportType;

    if (!transportType) {
      return null;
    }

    if (transportType && transportType.value === bulkVesselType) {
      const isValidFormat = /^\d+$/.test(control.value);
      return isValidFormat ? null : {
        bulkVesselFormat: true
      };
    }

    if (transportType && transportType.value === containerNumberType) {
      const isValidFormat = /^[a-zA-Z]{4}[0-9]+$/.test(control.value);
      return isValidFormat ? null : {
        containerNumberType: true
      };
    }

    return null;
  };
}
let ClientProfileAddOfferComponent = class ClientProfileAddOfferComponent {
  constructor(authService, _hotToastService, _formBuilder, _categoriesService, _unitsService, _transportTypesService, _offersService, _router, _activatedRoute, _changeDetectorRef, translateService, b2bNgxLinkService, dialog, tradebidService, mixpanelService, matDialog) {
    var _a, _b;

    this.authService = authService;
    this._hotToastService = _hotToastService;
    this._formBuilder = _formBuilder;
    this._categoriesService = _categoriesService;
    this._unitsService = _unitsService;
    this._transportTypesService = _transportTypesService;
    this._offersService = _offersService;
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this.translateService = translateService;
    this.b2bNgxLinkService = b2bNgxLinkService;
    this.dialog = dialog;
    this.tradebidService = tradebidService;
    this.mixpanelService = mixpanelService;
    this.matDialog = matDialog;
    this.loading = false;
    this.showCancelBtn = !!localStorage.getItem("showCancelButton");
    this.formGroup = this.getFormGroup();
    this.formState = this.formGroup.controls;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_22__.B2bNgxButtonThemeEnum;
    this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_23__.B2bNgxInputThemeEnum;
    this.b2bNgxSelectThemeEnum = _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_24__.B2bNgxSelectThemeEnum;
    this.level1Categories$ = this.getLevel1Categories();
    this.level2Categories$ = this.getLevel2Categories();
    this.units$ = this.getUnits();
    this.transportTypes$ = this.getTransportTypes().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(transportType => transportType.map(transportType => ({ ...transportType,
      displayName: this.translateService.instant(transportType.displayName)
    }))));
    this.offer$ = this.getOffer();
    this.containerPlaceholder$ = this.getContainerPlaceholder();
    this.showContainerNumber$ = (_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.get("transportType").valueChanges.pipe( // TODO: add logic for to divide prod / dev IDs
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(transportId => !["629493f93db39e42eb255af7", "629494023db39e42eb255af8", "629494093db39e42eb255af9", "629493af343a0863bc00b886", "629493c3343a0863bc00b887", "629493cb343a0863bc00b888"].includes(transportId)));
    this.showContainerNumber$ = (_b = this.formGroup) === null || _b === void 0 ? void 0 : _b.get("transportType").valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(transportId => !["629493f93db39e42eb255af7", "629494023db39e42eb255af8", "629494093db39e42eb255af9", "629493af343a0863bc00b886", "629493c3343a0863bc00b887", "629493cb343a0863bc00b888"].includes(transportId)));
  }

  getContainerPlaceholder() {
    const id$ = this.formGroup.get("transportType").valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.startWith)(""));
    const transportTypes$ = this.getTransportTypes();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([transportTypes$, id$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(([transportTypes, id]) => {
      var _a;

      const foundTransport = (_a = transportTypes.find(transportType => transportType._id === id)) === null || _a === void 0 ? void 0 : _a.name;

      if (!foundTransport) {
        return "";
      }

      return `PLACEHOLDERS.${foundTransport.toUpperCase()}`;
    }));
  }

  ngOnInit() {
    this.authService.showSidenav = false;
    this.checkPrices();
    this.offer$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(offer => !!offer)).subscribe(offer => {
      this.editMode = true;
      this.updateOfferForm(offer);
    });
    this.formGroup.get("level1Category").valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(data => !!data), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this)).subscribe(() => {
      this.formGroup.get("level2Category").setValue(null);
    }); // this.formGroup.get("container").valueChanges.pipe(untilDestroyed(this)).subscribe();
    // this.formGroup.valueChanges.pipe(untilDestroyed(this)).subscribe((val) => {
    // 	const filledFields = Object.values(val).filter((el) => el);
    //
    // 	const percentFilled = (filledFields.length * 100) / Object.values(val).length;
    // });

    const transportType$ = this.formGroup.get("transportType").valueChanges;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.combineLatest)([this.transportTypes$, transportType$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(([transportTypes, transportTypeId]) => transportTypes.length && !!transportTypeId)).subscribe(([transportTypes, transportTypeId]) => {
      var _a, _b;

      this.isTransportTypeBulk = ((_a = transportTypes.find(transportType => transportType._id === transportTypeId)) === null || _a === void 0 ? void 0 : _a.name) === "bulk_vessel";
      this.isTransportContainer = ((_b = transportTypes.find(transportType => transportType._id === transportTypeId)) === null || _b === void 0 ? void 0 : _b.name) === "container_vessel";
      this.formGroup.get("containerNumberType").setValidators(this.isTransportTypeBulk ? [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required] : []);
      this.formGroup.controls['containerNumberType'].updateValueAndValidity();
    });
  }

  ngAfterViewInit() {
    this.patchCompanyDataToForm();
  }

  patchCompanyDataToForm() {
    this.tradebidService.getCompanyData().subscribe(companyInfo => {
      console.log(companyInfo);
      const {
        companyName,
        email,
        phone
      } = companyInfo;
      this.formGroup.patchValue({
        contactCompanyName: companyName,
        contactEmail: email,
        contactPhone: phone
      });
    });
  }

  get showBadge() {
    return this.translateService.currentLang !== "en";
  }

  getSeaLines() {
    return this._offersService.getSeaLines();
  }

  getOffer() {
    return this._activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.tap)(() => {
      this.formGroup.reset(this.getFormGroup().value);
      this.editMode = false;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(paramMap => paramMap.get("id")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(id => !!id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.switchMap)(id => this._offersService.getOfferById(id)));
  }

  selectCategory(event) {
    this.category = event.name;
  }

  backToCompanyForm() {
    this._router.navigate(["tradebid/company-information"], {
      queryParams: {
        url: "add-rfq"
      }
    });
  }

  reviewAndPost(formGroup) {
    if (formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.mixpanelService.track('Unclaimed cargo posted', {
      'Product Sector': this.category,
      'Destination': [(0,country_list__WEBPACK_IMPORTED_MODULE_10__.getName)(formGroup.value.destinationFrom), (0,country_list__WEBPACK_IMPORTED_MODULE_10__.getName)(formGroup.value.destinationTo)]
    });

    if (!this.editMode) {
      const dialogRef = this.matDialog.open(_components_client_profile_add_offer_dialog_client_profile_add_offer_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ClientProfileAddOfferDialogComponent, {
        data: {
          data: formGroup.value,
          closeButton: false
        }
      });
      dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.tap)(({
        togglers
      }) => {
        this.loading = false;
        this.patchToggllers(togglers);

        this._changeDetectorRef.detectChanges();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(({
        createOffer
      }) => !!createOffer)).subscribe(() => {
        const {
          level2Category,
          ...data
        } = formGroup.value;
        const offerToCreate = { ...data,
          category: level2Category
        };
        const offer = (0,_get_offer_form_data__WEBPACK_IMPORTED_MODULE_9__.getOfferFormData)(offerToCreate);

        this._offersService.createOffer(offer).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this), this._hotToastService.observe({
          loading: this.translateService.instant("TOASTR.LOADING"),
          success: () => this.translateService.instant("TOASTR.SUCCESS"),
          error: this.translateService.instant("AUTH.INVALID_EMAIL_ADDRESS")
        })).subscribe(response => {
          this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink(`/offers/${response._id}`));

          this.loading = false;
        });
      });
    } else {
      const data = { ...formGroup.value,
        category: formGroup.value.level2Category
      };
      const offer = (0,_get_offer_form_data__WEBPACK_IMPORTED_MODULE_9__.getOfferFormData)(data);

      this._offersService.updateOffer(offer, this.currentOfferId).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this), this._hotToastService.observe({
        loading: this.translateService.instant("TOASTR.LOADING"),
        error: this.translateService.instant("AUTH.INVALID_EMAIL_ADDRESS"),
        success: () => this.translateService.instant("TOASTR.SUCCESS")
      })).subscribe(() => {
        this.loading = false;
      });
    }
  }

  openDocument(ev) {
    const document = this.formGroup.value.documents.find(el => el._id === ev.name);
    const data = {
      fullPath: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + document.path,
      extension: (0,_core_helpers_function_get_url_extension__WEBPACK_IMPORTED_MODULE_7__.GetUrlExtension)(document.path),
      isImage: _core_add_offer_image_extensions__WEBPACK_IMPORTED_MODULE_3__.ImageExtensions.includes((0,_core_helpers_function_get_url_extension__WEBPACK_IMPORTED_MODULE_7__.GetUrlExtension)(document.path)),
      isDocument: _core_add_offer_document_extensions__WEBPACK_IMPORTED_MODULE_4__.DocumentExtensions.includes((0,_core_helpers_function_get_url_extension__WEBPACK_IMPORTED_MODULE_7__.GetUrlExtension)(document.path))
    };
    this.dialog.open(_client_offer_components_client_offer_document_client_offer_document_component__WEBPACK_IMPORTED_MODULE_1__.ClientOfferDocumentComponent, {
      data,
      width: "80vw",
      height: "80vh"
    });
  }

  updateOfferForm(offer) {
    this.currentOfferId = offer._id;

    this._categoriesService.getCategories$().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this)).subscribe(({
      categories
    }) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;

      let level1Category;
      let level2Category;

      for (const firstCategory of categories) {
        if (firstCategory.children) {
          for (const secondCategory of firstCategory.children) {
            if (offer.category._id === secondCategory._id) {
              level1Category = firstCategory._id;
              level2Category = secondCategory._id;
            }
          }
        }
      }

      this.formGroup.patchValue({
        title: offer.title,
        description: offer.description,
        priceOld: (_a = offer.price) === null || _a === void 0 ? void 0 : _a.old,
        priceNew: (_b = offer.price) === null || _b === void 0 ? void 0 : _b.new,
        priceDiscount: (_c = offer.price) === null || _c === void 0 ? void 0 : _c.discount,
        amount: (_d = offer.amount) === null || _d === void 0 ? void 0 : _d.count,
        unit: (_f = (_e = offer.amount) === null || _e === void 0 ? void 0 : _e.unit) === null || _f === void 0 ? void 0 : _f._id,
        contactCompanyName: (_g = offer.contact) === null || _g === void 0 ? void 0 : _g.companyName,
        contactPersonName: (_h = offer.contact) === null || _h === void 0 ? void 0 : _h.personName,
        contactPhone: (_j = offer.contact) === null || _j === void 0 ? void 0 : _j.phone,
        contactEmail: (_k = offer.contact) === null || _k === void 0 ? void 0 : _k.email,
        transportType: (_l = offer.transportType) === null || _l === void 0 ? void 0 : _l._id,
        container: offer.container,
        destinationFrom: (_m = offer.destination) === null || _m === void 0 ? void 0 : _m.from,
        destinationTo: (_o = offer.destination) === null || _o === void 0 ? void 0 : _o.to,
        visibilityCompanyName: (_p = offer.visibility) === null || _p === void 0 ? void 0 : _p.companyName,
        visibilityContactPerson: (_q = offer.visibility) === null || _q === void 0 ? void 0 : _q.contactPerson,
        visibilityPhone: (_r = offer.visibility) === null || _r === void 0 ? void 0 : _r.phone,
        visibilityEmail: (_s = offer.visibility) === null || _s === void 0 ? void 0 : _s.email,
        visibilityContainer: (_t = offer.visibility) === null || _t === void 0 ? void 0 : _t.container,
        visibilityPhotos: (_u = offer.visibility) === null || _u === void 0 ? void 0 : _u.photos,
        visibilityDocuments: (_v = offer.visibility) === null || _v === void 0 ? void 0 : _v.documents,
        containerNumberType: offer.containerNumberType,
        level1Category,
        level2Category,
        photos: offer.photos,
        documents: offer.documents
      });
    });
  }

  checkPrices() {
    const priceOldControl = this.formGroup.get("priceOld");
    const priceDiscountControl = this.formGroup.get("priceDiscount");
    const priceNewControl = this.formGroup.get("priceNew");
    priceOldControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this)).subscribe(() => {
      priceDiscountControl.setValue("", {
        emitEvent: true
      });
      priceNewControl.setValue("", {
        emitEvent: true
      });
    });
    priceNewControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(() => priceOldControl.value)).subscribe(newValue => {
      this.newPriceChanged = newValue !== "";

      if (this.discountChanged) {
        this.discountChanged = false;
      }

      const newValueNumber = Number.parseInt(newValue);
      const oldValueNumber = Number.parseInt(priceOldControl.value);

      if (newValueNumber <= oldValueNumber) {
        const discount = (100 - newValueNumber * 100 / oldValueNumber).toFixed(2);
        priceDiscountControl.setValue(discount, {
          emitEvent: true
        });
      } else {
        priceDiscountControl.setValue(0, {
          emitEvent: true
        });
      }

      priceDiscountControl.markAsTouched();
    });
    priceDiscountControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.filter)(val => val >= 5)).subscribe(newValue => {
      if (this.newPriceChanged && !this.discountChanged) {
        this.newPriceChanged = false;
        return;
      }

      const discount = Number.parseInt(newValue);
      const oldPrice = Number.parseInt(priceOldControl.value);
      const newPrice = discount * oldPrice / 100;
      this.discountChanged = true;
      priceNewControl.setValue(oldPrice - newPrice, {
        emitEvent: false
      });
    });
  }

  getLevel2Categories() {
    return this.formGroup.get("level1Category").valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.switchMap)(id => {
      return this._categoriesService.getCategories$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(({
        categories
      }) => {
        var _a;

        return (_a = categories.find(foundCategory => foundCategory._id === id)) === null || _a === void 0 ? void 0 : _a.children;
      }));
    }));
  }

  getLevel1Categories() {
    return this._categoriesService.getCategories$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(({
      categories
    }) => categories.filter(category => category.children.length)));
  }

  getUnits() {
    return this._unitsService.getUnits().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.map)(units => units.map(unit => ({ ...unit,
      displayName: this.translateService.instant(`UNITS.${unit.name.toUpperCase()}`)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.tap)(units => {
      if (units.length) {
        this.formGroup.patchValue({
          unit: units[0]._id
        });
      }
    }));
  }

  getTransportTypes() {
    return this._transportTypesService.getTransportTypes();
  }

  getFormGroup() {
    return this._formBuilder.group({
      title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.maxLength(35), (0,_core_helpers_validator_only_latin__WEBPACK_IMPORTED_MODULE_5__.onlyLatin)()]],
      description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, (0,_core_helpers_validator_only_latin_numbers_symbols__WEBPACK_IMPORTED_MODULE_8__.onlyLatinAndNumberAndSymbols)()]],
      priceOld: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, (0,_core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_6__.onlyNumber)()]],
      priceNew: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, (0,_core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_6__.onlyNumber)()]],
      priceDiscount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.max(100), (0,_core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_6__.onlyNumber)()]],
      amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, (0,_core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_6__.onlyNumber)()]],
      unit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required],
      contactCompanyName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, (0,_core_helpers_validator_only_latin__WEBPACK_IMPORTED_MODULE_5__.onlyLatin)()]],
      contactPersonName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, (0,_core_helpers_validator_only_latin__WEBPACK_IMPORTED_MODULE_5__.onlyLatin)()]],
      contactPhone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required]],
      contactEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.email]],
      transportType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required],
      container: [null, [oneContainer(), containerNumber()]],
      containerNumberType: [null],
      destinationFrom: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required],
      destinationTo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required],
      visibilityCompanyName: [true],
      visibilityContactPerson: [true],
      visibilityPhone: [true],
      visibilityEmail: [true],
      visibilityContainer: [true],
      visibilityPhotos: [true],
      visibilityDocuments: [true],
      level1Category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required],
      level2Category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required],
      photos: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required],
      documents: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required],
      currentLocation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required]
    });
  }

  patchToggllers(state) {
    for (const key in state) {
      this.formGroup.get(key).setValue(state[key]);
    }
  }

  ngOnDestroy() {
    this.authService.showSidenav = true;
    localStorage.removeItem("showCancelButton");
  }

};

ClientProfileAddOfferComponent.ɵfac = function ClientProfileAddOfferComponent_Factory(t) {
  return new (t || ClientProfileAddOfferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_33__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_12__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_units_units_service__WEBPACK_IMPORTED_MODULE_13__.UnitsService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_transport_types_transport_types_service__WEBPACK_IMPORTED_MODULE_14__.TransportTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_offers_offers_service__WEBPACK_IMPORTED_MODULE_15__.OffersService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_36__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_37__.Dialog), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_client_tradebid_tradebid_service__WEBPACK_IMPORTED_MODULE_16__.TradebidService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_17__.MixpanelService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__.MatDialog));
};

ClientProfileAddOfferComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
  type: ClientProfileAddOfferComponent,
  selectors: [["b2b-client-profile-add-offer"]],
  decls: 148,
  vars: 185,
  consts: [[1, "client-profile-add-offer-wrapper"], [1, "client-profile-add-offer"], [1, "client-profile-add-offer-title"], [1, "badge"], ["b2bNgxIcon", "", "name", "info-1"], ["b2bScrollToInvalidControl", "", 3, "formGroup"], [1, "client-profile-add-offer-container"], [1, "client-profile-add-offer-left"], [1, "client-profile-add-offer-left-seller-details"], [1, "client-profile-add-offer-left-company-info"], [1, "client-profile-add-offer-left-company-name-container"], ["b2bNgxInput", "", "labelClass", "client-profile-add-offer-company-name", "formControlName", "contactCompanyName", 3, "theme", "label", "placeholder"], ["class", "error", 4, "ngIf"], ["formControlName", "visibilityCompanyName", 1, "client-profile-add-offer-company-name-visible-toggle"], [1, "client-profile-add-offer-left-name-container"], ["b2bNgxInput", "", "labelClass", "client-profile-add-offer-name", "formControlName", "contactPersonName", 3, "theme", "label", "placeholder"], ["formControlName", "visibilityContactPerson", 1, "client-profile-add-offer-name-visibe-toggle"], [1, "client-profile-add-offer-left-contact-information"], [1, "client-profile-add-offer-left-phone-number-container"], ["formControlName", "contactPhone", 1, "client-profile-add-offer-tel", 3, "errors", "theme"], ["formControlName", "visibilityPhone", 1, "client-profile-add-offer-tel-visible-toggle"], [1, "client-profile-add-offer-left-email-container"], ["b2bNgxInput", "", "labelClass", "client-profile-add-offer-email", "formControlName", "contactEmail", 3, "theme", "label", "placeholder"], ["formControlName", "visibilityEmail", 1, "client-profile-add-offer-email-visible-toggle"], [1, "client-profile-add-offer-left-cargo-details"], ["b2bNgxInput", "", "labelClass", "client-profile-add-offer-lot-name", "formControlName", "title", 3, "theme", "label", "placeholder"], [1, "client-profile-add-offer-cargo"], [1, "client-profile-add-offer-cargo-category"], ["formControlName", "level1Category", "bindValue", "_id", "bindLabel", "name", 3, "touched", "placeholder", "options", "theme", "changed"], [1, "client-profile-add-offer-cargo-subcategory"], ["formControlName", "level2Category", "bindValue", "_id", "bindLabel", "name", 3, "touched", "placeholder", "options", "theme"], ["b2bNgxTextarea", "", "labelClass", "client-profile-add-offer-description", "formControlName", "description", 3, "label", "placeholder"], [1, "client-profile-add-offer-price"], [1, "client-profile-add-offer-contact-price"], ["b2bNgxInput", "", "formControlName", "priceOld", "placeholder", "$", 3, "theme", "label"], [1, "client-profile-add-offer-new-price"], ["b2bNgxInput", "", "formControlName", "priceNew", "placeholder", "$", 3, "theme", "label"], [1, "client-profile-add-offer-discount"], ["b2bNgxInput", "", "formControlName", "priceDiscount", "placeholder", "%", 3, "theme", "label"], [1, "client-profile-add-offer-amount"], [1, "client-profile-add-offer-amount-available"], ["b2bNgxInput", "", "formControlName", "amount", "placeholder", "XX", 3, "theme", "label"], [1, "client-profile-add-offer-contact-price-unit-select"], ["formControlName", "unit", "bindValue", "_id", "bindLabel", "displayName", 3, "options", "theme"], [1, "client-profile-add-offer-right"], [1, "client-profile-add-offer-right-transportation"], [1, "client-profile-add-offer-right-transport-wrapper"], [1, "client-profile-add-offer-right-transport-type"], ["formControlName", "transportType", "bindValue", "_id", "bindLabel", "displayName", 3, "touched", "placeholder", "options", "theme"], [1, "client-profile-add-offer-right-transport-type-wrapper"], ["class", "client-profile-add-offer-right-container-no", 4, "ngIf"], ["class", "client-profile-add-offer-right-container-number-type", 4, "ngIf"], ["formControlName", "visibilityContainer", 1, "client-profile-add-offer-right-container-no-toggle"], [1, "client-profile-add-offer-right-transport-destination"], [1, "client-profile-add-offer-right-transport-destination-from"], ["formControlName", "destinationFrom", 3, "touched", "theme", "placeholder"], [1, "client-profile-add-offer-right-transport-destination-to"], ["formControlName", "destinationTo", 3, "touched", "theme", "placeholder"], [1, "current-location"], ["formControlName", "currentLocation", "placeholder", "Current location", 3, "touched", "theme", "showInTransit"], [1, "client-profile-add-offer-right-photos-and-documents"], ["formControlName", "photos", 1, "client-profile-add-offer-right-photos", 3, "errors", "label", "isPhoto"], [1, "client-profile-add-offer-right-photos-description"], [3, "hidden"], ["formControlName", "visibilityPhotos", 1, "client-profile-add-offer-right-photos-visible-toggle"], ["formControlName", "documents", 1, "client-profile-add-offer-right-documents", 3, "isClickable", "errors", "label", "clicked"], [1, "client-profile-add-offer-right-documents-description"], ["formControlName", "visibilityDocuments", 1, "client-profile-add-offer-right-documents-visible-toggle"], [1, "form-buttons"], ["class", "cancel-btn", "b2bNgxButton", "", 3, "theme", "click", 4, "ngIf"], ["b2bNgxButton", "", "class", "client-profile-add-offer-form-review-and-post-button", 3, "disabled", "theme", "click", 4, "ngIf"], [1, "error"], [1, "client-profile-add-offer-right-container-no"], ["formControlName", "container", 3, "placeholder", "errors"], ["class", "client-profile-add-offer-right-container-no__error", 4, "ngIf"], [1, "client-profile-add-offer-right-container-no__error"], [1, "client-profile-add-offer-right-container-number-type"], ["formControlName", "containerNumberType", 3, "options", "errors"], ["b2bNgxButton", "", 1, "cancel-btn", 3, "theme", "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289L9.65685 0.928933C10.0474 0.538408 10.6805 0.538408 11.0711 0.928933C11.4616 1.31946 11.4616 1.95262 11.0711 2.34315L5.41421 8L11.0711 13.6569C11.4616 14.0474 11.4616 14.6805 11.0711 15.0711C10.6805 15.4616 10.0474 15.4616 9.65685 15.0711L3.29289 8.70711ZM5 9L4 9L4 7L5 7L5 9Z", "fill", "#0F0F11"], ["b2bNgxButton", "", 1, "client-profile-add-offer-form-review-and-post-button", 3, "disabled", "theme", "click"]],
  template: function ClientProfileAddOfferComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "form", 5)(11, "div", 6)(12, "div", 7)(13, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div", 9)(17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](18, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, ClientProfileAddOfferComponent_p_21_Template, 3, 4, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "b2b-ngx-toggle", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](26, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](29, ClientProfileAddOfferComponent_p_29_Template, 3, 4, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "b2b-ngx-toggle", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "div", 17)(34, "div", 18)(35, "b2b-ngx-tel", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "b2b-ngx-toggle", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](42, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "b2b-ngx-toggle", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](51, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](52, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](54, ClientProfileAddOfferComponent_p_54_Template, 3, 4, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](55, "div", 26)(56, "div", 27)(57, "b2b-ngx-select", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("changed", function ClientProfileAddOfferComponent_Template_b2b_ngx_select_changed_57_listener($event) {
        return ctx.selectCategory($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](58, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](59, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](63, "b2b-ngx-select", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](64, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](65, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](66, "textarea", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](67, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](69, ClientProfileAddOfferComponent_p_69_Template, 3, 4, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](70, "div", 32)(71, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](72, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](73, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](74, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](75, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](76, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](77, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](78, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](79, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](80, ClientProfileAddOfferComponent_p_80_Template, 3, 4, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](81, "div", 39)(82, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](83, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](84, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](85, ClientProfileAddOfferComponent_p_85_Template, 2, 1, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](86, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](87, "b2b-ngx-select", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](88, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](89, "div", 44)(90, "p", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](92, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](93, "div", 46)(94, "div", 47)(95, "b2b-ngx-select", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](96, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](97, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](99, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](100, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](101, ClientProfileAddOfferComponent_div_101_Template, 8, 9, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](102, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](103, ClientProfileAddOfferComponent_div_103_Template, 2, 3, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](104, "b2b-ngx-toggle", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](106, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](107, "div", 53)(108, "div", 54)(109, "b2b-ngx-country-select", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](110, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](111);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](112, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](113, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](114, "b2b-ngx-country-select", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](115, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](116, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](117, "b2b-ngx-country-select", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](118, "p", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](120, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](121, "b2b-ngx-file", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](122, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](123);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](124, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](125, ClientProfileAddOfferComponent_p_125_Template, 2, 1, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](126, "p", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](127);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](128, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](129, "div", 63)(130, "b2b-ngx-toggle", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](131);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](132, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](133, "b2b-ngx-file", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("clicked", function ClientProfileAddOfferComponent_Template_b2b_ngx_file_clicked_133_listener($event) {
        return ctx.openDocument($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](134, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](135);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](136, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](137, ClientProfileAddOfferComponent_p_137_Template, 2, 1, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](138, "p", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](139);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](140, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](141, "b2b-ngx-toggle", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](142);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](143, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](144, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](145, ClientProfileAddOfferComponent_button_145_Template, 5, 1, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](146, ClientProfileAddOfferComponent_button_146_Template, 3, 5, "button", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](147, ClientProfileAddOfferComponent_button_147_Template, 3, 5, "button", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](ctx.editMode ? "OFFER.EDIT" : _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 91, "OFFER.ADD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("invalid", (ctx.formGroup.get("title").errors == null ? null : ctx.formGroup.get("title").errors["latin"]) || (ctx.formGroup.get("contactCompanyName").errors == null ? null : ctx.formGroup.get("contactCompanyName").errors["latin"]) || (ctx.formGroup.get("contactPersonName").errors == null ? null : ctx.formGroup.get("contactPersonName").errors["latin"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](9, 93, "OFFER.BADGE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](15, 95, "OFFER.SELLER_DETAILS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](19, 97, "LABELS.COMPANY_NAME"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](20, 99, "PLACEHOLDERS.ENTER_COMPANY_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["contactCompanyName"].errors == null ? null : ctx.formGroup.controls["contactCompanyName"].errors["latin"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](24, 101, "LABELS.VISIBLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](27, 103, "LABELS.CONTACT_PERSON"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](28, 105, "PLACEHOLDERS.ENTER_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["contactPersonName"].errors == null ? null : ctx.formGroup.controls["contactPersonName"].errors["latin"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](32, 107, "LABELS.VISIBLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("errors", ctx.formGroup.get("contactPhone").errors)("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](37, 109, "LABELS.PHONE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](40, 111, "LABELS.VISIBLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](43, 113, "LABELS.EMAIL"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](44, 115, "PLACEHOLDERS.ENTER_EMAIL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](47, 117, "LABELS.VISIBLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](50, 119, "OFFER.CARGO_DETAILS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](52, 121, "LABELS.LOT_NAME"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](53, 123, "PLACEHOLDERS.ENTER_LOT_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["title"].errors == null ? null : ctx.formGroup.controls["title"].errors["latin"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("touched", ctx.formState["level1Category"].touched)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](58, 125, "PLACEHOLDERS.SELECT_CATEGORY"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](59, 127, ctx.level1Categories$))("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](61, 129, "LABELS.CARGO"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("touched", ctx.formState["level2Category"].touched)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](64, 131, "PLACEHOLDERS.SELECT_SUBCATEGORY"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](65, 133, ctx.level2Categories$))("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](67, 135, "LABELS.DESCRIPTION"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](68, 137, "PLACEHOLDERS.ENTER_DESCRIPTION"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formState["description"].errors == null ? null : ctx.formState["description"].errors["latin"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](73, 139, "LABELS.CONTRACT_PRICE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](76, 141, "LABELS.NEW_PRICE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](79, 143, "LABELS.DISCOUNT"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formState["priceNew"].dirty && ctx.formState["priceDiscount"].value < 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](84, 145, "LABELS.AVAILABLE_AMOUNT"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", (ctx.formState["amount"].errors == null ? null : ctx.formState["amount"].errors["number"]) && ctx.formState["amount"].dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](88, 147, ctx.units$))("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](92, 149, "OFFER.TRANSPORTATION"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("touched", ctx.formState["transportType"].touched)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](96, 151, "PLACEHOLDERS.SELECT_TRANSPORT_TYPE"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](97, 153, ctx.transportTypes$))("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](99, 155, "LABELS.TRANSPORTATION_TYPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](102, 157, ctx.showContainerNumber$));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.isTransportTypeBulk);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](106, 159, "LABELS.VISIBLE"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("touched", ctx.formState["destinationFrom"].touched)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](110, 161, "PLACEHOLDERS.FROM"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](112, 163, "LABELS.DESTINATION"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("touched", ctx.formState["destinationTo"].touched)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](115, 165, "PLACEHOLDERS.TO"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("touched", ctx.formState["currentLocation"].touched)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY)("showInTransit", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](120, 167, "OFFER.PHOTOS_AND_DOCUMENTS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("errors", ctx.formGroup.get("photos").errors)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](122, 169, "LABELS.CHOOSE_PHOTOS"))("isPhoto", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](124, 171, "LABELS.PHOTOS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formState["photos"].touched && (ctx.formState["photos"].errors == null ? null : ctx.formState["photos"].errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](128, 173, "OFFER.PHOTOS_DESCRIPTION"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](132, 175, "LABELS.VISIBLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("isClickable", true)("errors", ctx.formGroup.get("documents").errors)("label", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](134, 177, "LABELS.CHOOSE_DOCUMENTS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](136, 179, "LABELS.DOCUMENTS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.formState["documents"].touched && (ctx.formState["documents"].errors == null ? null : ctx.formState["documents"].errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](140, 181, "OFFER.DOCUMENTS_DESCRIPTION"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](143, 183, "LABELS.HIDDEN"));
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.showCancelBtn);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.editMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_39__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControlName, _projects_ngx_input_src_lib_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_40__.B2bNgxInputComponent, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_41__.B2bNgxInputDirective, _projects_ngx_toggle_src_lib_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_42__.B2bNgxToggleComponent, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_43__.B2bNgxSelectComponent, _projects_ngx_file_src_lib_layout_ngx_file_component__WEBPACK_IMPORTED_MODULE_18__.B2bNgxFileComponent, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_44__.B2bNgxButtonDirective, _projects_ngx_textarea_src_lib_directive_ngx_textarea_directive__WEBPACK_IMPORTED_MODULE_45__.B2bNgxTextareaDirective, _projects_ngx_tel_src_lib_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_46__.B2bNgxTelComponent, _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_47__.B2bNgxCountrySelectComponent, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_48__.B2bNgxIconDirective, _projects_ngx_radio_src_lib_layout_ngx_radio_component__WEBPACK_IMPORTED_MODULE_19__.B2bNgxRadioComponent, _core_directives_scroll_to_invalid_control_directive__WEBPACK_IMPORTED_MODULE_20__.B2bScrollToInvalidControl, _angular_common__WEBPACK_IMPORTED_MODULE_39__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe],
  styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #eff7ff;\n  border: 1px solid #005dff;\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 12px 16px;\n  font-size: 12px;\n  color: #222224;\n  margin-top: 30px;\n}.badge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}.badge.invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border: 1px solid #922f08;\n}.badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  line-height: 19px;\n  text-align: left;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 40px 70px;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%] {\n    padding: 0 0 30px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #e63d3d;\n  margin-top: 4px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 4px;\n  padding: 60px;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 0;\n    margin-top: 20px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  color: #0f0f11;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 40px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%] {\n  width: 47.5%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-seller-details[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: #0f0f11;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 12px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-info[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-name-container[_ngcontent-%COMP%] {\n  width: 49%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-info[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-name-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-info[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-name-container[_ngcontent-%COMP%]   .client-profile-add-offer-company-name-visible-toggle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 11px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-info[_ngcontent-%COMP%]   .client-profile-add-offer-left-name-container[_ngcontent-%COMP%] {\n  width: 49%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-info[_ngcontent-%COMP%]   .client-profile-add-offer-left-name-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-company-info[_ngcontent-%COMP%]   .client-profile-add-offer-left-name-container[_ngcontent-%COMP%]   .client-profile-add-offer-name-visibe-toggle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 11px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-contact-information[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 32px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-contact-information[_ngcontent-%COMP%]   .client-profile-add-offer-left-phone-number-container[_ngcontent-%COMP%] {\n  width: 49%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-contact-information[_ngcontent-%COMP%]   .client-profile-add-offer-left-phone-number-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-contact-information[_ngcontent-%COMP%]   .client-profile-add-offer-left-phone-number-container[_ngcontent-%COMP%]   .client-profile-add-offer-tel-visible-toggle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 11px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-contact-information[_ngcontent-%COMP%]   .client-profile-add-offer-left-email-container[_ngcontent-%COMP%] {\n  width: 49%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-contact-information[_ngcontent-%COMP%]   .client-profile-add-offer-left-email-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-contact-information[_ngcontent-%COMP%]   .client-profile-add-offer-left-email-container[_ngcontent-%COMP%]   .client-profile-add-offer-email-visible-toggle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 11px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-left-cargo-details[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: #0f0f11;\n  margin-top: 56px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-lot-name[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-cargo[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-cargo[_ngcontent-%COMP%]   .client-profile-add-offer-cargo-category[_ngcontent-%COMP%] {\n  display: block;\n  width: 49%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-cargo[_ngcontent-%COMP%]   .client-profile-add-offer-cargo-category[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-cargo[_ngcontent-%COMP%]   .client-profile-add-offer-cargo-subcategory[_ngcontent-%COMP%] {\n  display: block;\n  width: 49%;\n  margin-top: 20px;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-cargo[_ngcontent-%COMP%]   .client-profile-add-offer-cargo-subcategory[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-description[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-price[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 32px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-price[_ngcontent-%COMP%]   .client-profile-add-offer-contact-price[_ngcontent-%COMP%] {\n  width: 32%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-price[_ngcontent-%COMP%]   .client-profile-add-offer-contact-price[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-price[_ngcontent-%COMP%]   .client-profile-add-offer-discount[_ngcontent-%COMP%] {\n  width: 32%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-price[_ngcontent-%COMP%]   .client-profile-add-offer-discount[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-price[_ngcontent-%COMP%]   .client-profile-add-offer-new-price[_ngcontent-%COMP%] {\n  width: 32%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-price[_ngcontent-%COMP%]   .client-profile-add-offer-new-price[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 32px;\n  align-items: flex-end;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-amount[_ngcontent-%COMP%]   .client-profile-add-offer-amount-available[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-amount[_ngcontent-%COMP%]   .client-profile-add-offer-contact-price-unit-select[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 20px;\n  margin-left: 15px;\n  min-width: 100px;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-left[_ngcontent-%COMP%]   .client-profile-add-offer-amount[_ngcontent-%COMP%]   .client-profile-add-offer-contact-price-unit-select[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n    margin-left: 0;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%] {\n  width: 47.5%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transportation[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: #0f0f11;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 12px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-type[_ngcontent-%COMP%] {\n  flex: 1;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer-right-sea-line[_ngcontent-%COMP%] {\n  width: 49%;\n  margin-left: 1%;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-type-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-type-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer-right-container-no[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n  margin-top: 32px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-type-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer-right-container-no__error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: hsla(218deg, 5%, 45%, 0.6);\n  margin-top: 4px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-type-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer-right-container-number-type[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n  margin-top: 32px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-container-no-toggle[_ngcontent-%COMP%] {\n  width: 49%;\n  display: block;\n  margin-top: 10px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  justify-content: space-between;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit-from[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-from[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit-from[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-from[_ngcontent-%COMP%] {\n  width: 49%;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit-from[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-from[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit-from[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-from[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit-to[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-to[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit-to[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-to[_ngcontent-%COMP%] {\n  width: 49%;\n  margin-top: 20px;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit-to[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-to[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-transit-to[_ngcontent-%COMP%], .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination[_ngcontent-%COMP%]   .client-profile-add-offer-right-transport-destination-to[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 12px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .current-location[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-transit-available-toggle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 12px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-map[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-photos-and-documents[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  font-weight: bold;\n  font-size: 18px;\n  color: #0f0f11;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-photos[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 12px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-photos-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9fa4bb;\n  margin-top: 16px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-photos-visible-toggle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-documents[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 32px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-documents-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9fa4bb;\n  margin-top: 16px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .client-profile-add-offer[_ngcontent-%COMP%]   .client-profile-add-offer-container[_ngcontent-%COMP%]   .client-profile-add-offer-right[_ngcontent-%COMP%]   .client-profile-add-offer-right-documents-visible-toggle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 50%;\n  margin: auto;\n  margin-top: 60px;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    width: 100%;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px 40px;\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  width: 200px;\n}@media (max-width: 55.5em) {\n  .client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: translateY(2px);\n}.client-profile-add-offer-wrapper[_ngcontent-%COMP%]   .form-buttons[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}  .ng-dropdown-panel .ng-dropdown-panel-items {\n  min-width: 115px;\n}  textarea {\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJjbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc2VsZWN0L3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1idXR0b24vc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saW5rL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW5wdXQvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pY29uL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGV4dGFyZWEvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL21hdGVyaWFsLW92ZXJyaWRlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUUsQ0FDcEI7O01BRUUsYUFBYSxFQUFFLENBQ25COztJQUVFLFVBQVUsRUFBRSxD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LHlCRFRZO0VDVVosY0RGVztFQ0dYLCtDQUFBO0FId1JOLENHdlJNO0VBQ0UseUJEWFU7QUZvU2xCLENHdFJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUh3Uk4sQ0d2Uk07RUFDRSx5QkFBQTtBSHlSUixDR3RSSTtFQUNFLDZCQUFBO0VBQ0EsY0RsQlc7QUYwU2pCLENHdlJNO0VBQ0UseUJEMUJVO0FGbVRsQixDR3RSSTtFQUNFLHlCRDVCVztFQzZCWCxjRGpDWTtBRnlUbEIsQ0d2Uk07RUFDRSx5QkQ5QlM7QUZ1VGpCLENHdFJJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBSHdSTixDR3ZSTTtFQUNFLHlCRDlDVTtFQytDVixxQkQvQ1U7RUNnRFYsWUFBQTtBSHlSUixDR3BSSTtFQUNFLHFCRHREWTtBRjRVbEIsQ0dyUk07RUFDRSx5QkRsRFU7QUZ5VWxCLENHcFJJO0VBQ0UscUJEeERZO0FGOFVsQixDR3JSTTtFQUNFLHlCRHhEVTtBRitVbEIsQ0dwUkk7RUFDRSxxQkQxRFc7QUZnVmpCLENHclJNO0VBQ0UseUJEM0RTO0FGa1ZqQixDR3BSSTtFQUNFLHFCQUFBO0FIc1JOLENHclJNO0VBQ0UseUJEcEVVO0FGMlZsQixDR2xSRTtFQUNFLHFEQUFBO0VBQ0EseUJBQUE7QUhvUkosQ0duUkk7RUFDRSxxREFBQTtBSHFSTixDSXZXQTtFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7QUowV0QsQ0l2V0U7RUFDQyxjRkNjO0FGd1dqQixDSXRXRTtFQUNDLGNGWGU7QUZtWGxCLENJcldFO0VBQ0MsY0ZYZTtBRmtYbEIsQ0lwV0U7RUFDQyxjRkxjO0FGMldqQixDSW5XRTtFQUNDLDBCQUFBO0FKcVdILENJaldDO0VBQ0MsaUNBQUE7QUptV0YsQ0lqV0U7RUFDQyx5QkYzQmU7RUU0QmYsY0ZoQ2U7QUZtWWxCLENJbFdHO0VBQ0MseUJGN0JjO0FGaVlsQixDSWhXRTtFQUNDLDZCQUFBO0VBQ0EsY0Z4Q2U7QUYwWWxCLENJaldHO0VBQ0MseUJGcENjO0FGdVlsQixDSS9WRTtFQUNDLHlCRnZDYztFRXdD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QUE7QUFtcEJOLENTcjVCQztFVDJQSTs7OztJQUlFLFdBQUE7SUFDQSxnQkFBQTtFQTZwQkw7QUFDRixDQXhwQkk7RUFDQyxnQkFBQTtBQTBwQkwsQ0F4cEJJO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FBMHBCTCxDQXhwQkk7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUEwcEJMLENBeHBCSTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTBwQkwsQ0F4cEJJO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FBMHBCTCxDQXhwQkk7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBMHBCTCxDQXhwQkk7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUEwcEJMLENBeHBCSTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQTBwQkwsQ0F4cEJJO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTBwQkwsQ0F4cEJJO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUEwcEJMLENBcnBCQztFQUNDLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF1cEJGLENTaDlCQztFVG9UQTtJQU9FLDhCQUFBO0lBQ0EsV0FBQTtFQXlwQkQ7QUFDRixDQXhwQkU7RUFDQyxrQkFBQTtBQTBwQkgsQ0F4cEJFO0VBQ0MsWUFBQTtBQTBwQkgsQ1M1OUJDO0VUaVVDO0lBR0UsZ0JBQUE7RUE0cEJGO0FBQ0YsQ0EzcEJHO0VBQ0MsMEJBQUE7QUE2cEJKLENBM3BCRztFQUNDLGVBQUE7QUE2cEJKLENBdHBCQztFQUNDLGdCQUFBO0FBeXBCRixDQXRwQkM7RUFDQyxhQUFBO0FBd3BCRiIsImZpbGUiOiJjbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnN0cmlwZWQgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1yaWdodCxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5kcmFnZ2luZyAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDlkOGQ5OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQxZjk7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2Y2M4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDsgfVxuICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTsgfSB9XG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtcmlnaHQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtbGVmdD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi1ib3R0b206NXB4O2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dD5pbnB1dHtjb2xvcjojMDAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3RvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O3BhZGRpbmctbGVmdDozcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntwYWRkaW5nLXJpZ2h0OjNweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcjpob3ZlciAubmctY2xlYXJ7Y29sb3I6I0QwMDIxQn0ubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggNXB4IDAgMH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCAwIDAgNXB4fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7d2lkdGg6MjVweDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcjpob3ZlciAubmctYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjojNjY2fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93e2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAyLjVweH0ubmctZHJvcGRvd24tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KTtsZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3B7Ym90dG9tOjEwMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3AgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHR7bGVmdDoxMDAlO3RvcDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXJpZ2h0IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbXt0b3A6MTAwJTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZTZlNmU2O21hcmdpbi10b3A6LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnR7bGVmdDotMTAwJTt0b3A6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsImh0bWwsXG5ib2R5IHtcblx0c2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuKiB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0Jjp2aXNpdGVkIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxufVxuXG5idXR0b24ge1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5pIHtcblx0Zm9udC1zdHlsZTogSXRhbGljO1xufVxuXG5iIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXNcIjtcblxuLmJhZGdlIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aW1nIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdH1cblx0YmFja2dyb3VuZDogI2VmZjdmZjtcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwNWRmZjtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRwYWRkaW5nOiAxMnB4IDE2cHg7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICMyMjIyMjQ7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5cdCYuaW52YWxpZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzkyMmYwODtcblx0fVxuXHRzcGFuIHtcblx0XHR3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG5cdFx0bGluZS1oZWlnaHQ6IDE5cHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxufVxuXG4uY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXdyYXBwZXIge1xuXHRwYWRkaW5nOiAyMHB4IDQwcHggNzBweDtcblxuXHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0cGFkZGluZzogMCAwIDMwcHg7XG5cdH1cblxuXHQuZXJyb3Ige1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRjb2xvcjogI2U2M2QzZDtcblx0XHRtYXJnaW4tdG9wOiA0cHg7XG5cdH1cblxuXHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyIHtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRwYWRkaW5nOiA2MHB4O1xuXHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdHBhZGRpbmc6IDAgMjBweCAyMHB4IDA7XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdH1cblx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXRpdGxlIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0fVxuXHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItY29udGFpbmVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1sZWZ0IHtcblx0XHRcdFx0d2lkdGg6IDQ3LjUlO1xuXHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1sZWZ0LXNlbGxlci1kZXRhaWxzIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1sZWZ0LWNvbXBhbnktaW5mbyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDEycHg7XG5cdFx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1sZWZ0LWNvbXBhbnktbmFtZS1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQ5JTtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWNvbXBhbnktbmFtZS12aXNpYmxlLXRvZ2dsZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWxlZnQtbmFtZS1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQ5JTtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEycHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLW5hbWUtdmlzaWJlLXRvZ2dsZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWxlZnQtY29udGFjdC1pbmZvcm1hdGlvbiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDMycHg7XG5cdFx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1sZWZ0LXBob25lLW51bWJlci1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQ5JTtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEycHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXRlbC12aXNpYmxlLXRvZ2dsZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWxlZnQtZW1haWwtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0OSU7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1lbWFpbC12aXNpYmxlLXRvZ2dsZSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMXB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWxlZnQtY2FyZ28tZGV0YWlscyB7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDU2cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1sb3QtbmFtZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWNhcmdvIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1jYXJnby1jYXRlZ29yeSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdHdpZHRoOiA0OSU7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWNhcmdvLXN1YmNhdGVnb3J5IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQ5JTtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEycHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItcHJpY2Uge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItY29udGFjdC1wcmljZSB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0d2lkdGg6IDMyJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1kaXNjb3VudCB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0d2lkdGg6IDMyJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1uZXctcHJpY2Uge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTJweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHdpZHRoOiAzMiU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItYW1vdW50IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDMycHg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItYW1vdW50LWF2YWlsYWJsZSB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLWNvbnRhY3QtcHJpY2UtdW5pdC1zZWxlY3Qge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0XHRcdFx0XHRtaW4td2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTJweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0IHtcblx0XHRcdFx0d2lkdGg6IDQ3LjUlO1xuXHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1yaWdodC10cmFuc3BvcnRhdGlvbiB7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1yaWdodC10cmFuc3BvcnQtd3JhcHBlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTJweDtcblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXRyYW5zcG9ydC10eXBlIHtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItcmlnaHQtc2VhLWxpbmUge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQ5JTtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXRyYW5zcG9ydC10eXBlLXdyYXBwZXIge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LWNvbnRhaW5lci1ubyB7XG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdFx0XHRcdFx0Jl9fZXJyb3Ige1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogaHNsYSgyMTgsIDUlLCA0NSUsIDAuNik7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1yaWdodC1jb250YWluZXItbnVtYmVyLXR5cGUge1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LWNvbnRhaW5lci1uby10b2dnbGUge1xuXHRcdFx0XHRcdHdpZHRoOiA0OSU7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXRyYW5zcG9ydC1kZXN0aW5hdGlvbi10cmFuc2l0LFxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXRyYW5zcG9ydC1kZXN0aW5hdGlvbiB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItcmlnaHQtdHJhbnNwb3J0LWRlc3RpbmF0aW9uLXRyYW5zaXQtZnJvbSxcblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXRyYW5zcG9ydC1kZXN0aW5hdGlvbi1mcm9tIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0OSU7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXRyYW5zcG9ydC1kZXN0aW5hdGlvbi10cmFuc2l0LXRvLFxuXHRcdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItcmlnaHQtdHJhbnNwb3J0LWRlc3RpbmF0aW9uLXRvIHtcblx0XHRcdFx0XHRcdHdpZHRoOiA0OSU7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY3VycmVudC1sb2NhdGlvbiB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXRyYW5zaXQtYXZhaWxhYmxlLXRvZ2dsZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTJweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LW1hcCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXBob3Rvcy1hbmQtZG9jdW1lbnRzIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1NnB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXBob3RvcyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTJweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2xpZW50LXByb2ZpbGUtYWRkLW9mZmVyLXJpZ2h0LXBob3Rvcy1kZXNjcmlwdGlvbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjOWZhNGJiO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1yaWdodC1waG90b3MtdmlzaWJsZS10b2dnbGUge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1yaWdodC1kb2N1bWVudHMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDMycHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNsaWVudC1wcm9maWxlLWFkZC1vZmZlci1yaWdodC1kb2N1bWVudHMtZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRjb2xvcjogIzlmYTRiYjtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jbGllbnQtcHJvZmlsZS1hZGQtb2ZmZXItcmlnaHQtZG9jdW1lbnRzLXZpc2libGUtdG9nZ2xlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmZvcm0tYnV0dG9ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHR3aWR0aDogNTAlO1xuXHRcdG1hcmdpbjogYXV0bztcblx0XHRtYXJnaW4tdG9wOiA2MHB4O1xuXHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHRidXR0b24ge1xuXHRcdFx0cGFkZGluZzogMTVweCA0MHB4O1xuXHRcdH1cblx0XHQuY2FuY2VsLWJ0biB7XG5cdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0XHR9XG5cdFx0XHRzdmcge1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcblx0XHRcdH1cblx0XHRcdHNwYW4ge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbjo6bmctZGVlcCB7XG5cdC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuXHRcdG1pbi13aWR0aDogMTE1cHg7XG5cdH1cblxuXHR0ZXh0YXJlYSB7XG5cdFx0aGVpZ2h0OiAxMjBweDtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB7XG4gIGZvcm0ge1xuICAgIGIyYi1uZ3gtc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1zZWxlY3Qge1xuICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBiMmItbmd4LWNvdW50cnktc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1jb3VudHJ5LXNlbGVjdCB7XG4gICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUsXG4ubmctc2VsZWN0LW9wZW5lZCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gIH1cblxuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMTUsIDE3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuICAgIC5uZy12YWx1ZSB7XG4gICAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUge1xuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1ibGFjay05MDA6ICMwMDAwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMGYwZjExO1xuJGNvbG9yLWJsYWNrLTEwMDogIzJlMmUzNDtcbiRjb2xvci1ibGFjay01MDogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjYpO1xuXG4kY29sb3Itd2hpdGUtOTAwOiAjZmZmZmZmO1xuJGNvbG9yLXdoaXRlLTIwMDogI2UzZWFmMTtcbiRjb2xvci13aGl0ZS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1ibHVlLTUwMDogIzAwNWRmZjtcbiRjb2xvci1ibHVlLTEwMDogIzU5OTVmZTtcbiRjb2xvci1ibHVlLTUwOiAjZDJkZWZmO1xuXG4kY29sb3ItZ3JheS05MDA6ICMwZjBmMTE7XG4kY29sb3ItZ3JheS02MDA6ICMyMjIyMjQ7XG4kY29sb3ItZ3JheS01MDA6ICM1NTYyNzQ7XG4kY29sb3ItZ3JheS00MDA6ICM2YzcwNzc7XG4kY29sb3ItZ3JheS0zMDA6ICNhN2E4YWQ7XG4kY29sb3ItZ3JheS0yMDA6ICM5ZmE0YmI7XG4kY29sb3ItZ3JheS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1yZWQtNTAwOiAjZTYzZDNkO1xuJGNvbG9yLXJlZC01MDogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWJ1dHRvbiB7XG4gIGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgJi5iYWNrZ3JvdW5kIHtcbiAgICAmLmJhY2tncm91bmQtYmxhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTkwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1yZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2M2QzZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLWJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtaG92ZXItYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5vdXRsaW5lIHtcbiAgICAmLm91dGxpbmUtYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS13aGl0ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLWJsdWUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtZ3JheSB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmU4ZjU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stNTAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMCAhaW1wb3J0YW50O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTUwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWxpbmsge1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuXHQmLnRleHQge1xuXHRcdCYudGV4dC1ibHVlIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LWJsYWNrIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC13aGl0ZSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtZ3JheSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNTAwO1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0fVxuXHR9XG5cblx0Ji5iYWNrZ3JvdW5kIHtcblx0XHRib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cblx0XHQmLmJhY2tncm91bmQtd2hpdGUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0yMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtZ3JheSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtYmxhY2sge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWJsdWUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1saWdodC1ibHVlIHtcblx0XHRcdGJhY2tncm91bmQ6ICNlZmY0ZmE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y29sb3I6ICMwMDVkZmYgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTZlZGZhO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCYub3V0bGluZSB7XG5cdFx0Ji5vdXRsaW5lLXdoaXRlIHtcblx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1pbnB1dC1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5iMmItbmd4LWlucHV0IHtcblx0Ym9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjNTU2Mjc0O1xuXHQmLmJhY2tncm91bmQge1xuXHRcdCYuYmFja2dyb3VuZC1ncmF5IHtcblx0XHRcdGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0fVxuXHRcdCYuYmFja2dyb3VuZC13aGl0ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblx0fVxuXHQmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHR9XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCB7XG5cdC5iMmItbmd4LWlucHV0IHtcblx0XHQmLmJhY2tncm91bmQge1xuXHRcdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWljb24ge1xuXHQmLmNpcmNsZSB7XG5cdFx0aGVpZ2h0OiAzcmVtO1xuXHRcdHdpZHRoOiAzcmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC10ZXh0YXJlYS1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uYjJiLW5neC10ZXh0YXJlYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogI2YzZjZmODtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM1NTYyNzQ7XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdHJlc2l6ZTogbm9uZTtcblx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0fVxuICAmLmJhY2tncm91bmQge1xuICAgICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1zdWJtaXR0ZWQge1xuXHQuYjJiLW5neC10ZXh0YXJlYSB7XG5cdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdH1cblx0fVxufVxuXG4uY29udHJvbC1lcnJvciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbiIsIkBpbXBvcnQgXCIvcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHNcIjtcblxuLy8gc3RlcHBlclxuQG1peGluIHN0eWxlU3RlcExpbmUoJGluZGV4KSB7XG5cdC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4fSkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNURGRjtcblx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4ICsgMn0pIHtcblx0XHRcdEBpbmNsdWRlIHN0ZXBOZXh0TGluZTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIHN0ZXBOZXh0TGluZSgpIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1ZGZmLCByZ2JhKDAsIDkzLCAyNTUsIDApKTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdGhlaWdodDogNHB4O1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcblxuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cblx0XHQubWF0LXN0ZXAtaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdGdhcDogN3B4O1xuXHRcdFx0cGFkZGluZzogMDtcblxuXHRcdFx0Lm1hdC1zdGVwLWxhYmVsIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRcdFx0Y29sb3I6ICNDNEM0QzQ7XG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoJzEnKSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCB7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm1hdC1zdGVwLWljb24ge1xuXHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCwgJi1zdGF0ZS1lZGl0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hdC1zdGVwLWljb24tY29udGVudCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNEOUQ5RDk7XG5cblx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAtNyUgMCAtMTAlO1xuXHRcdFx0XHRAaW5jbHVkZSBzdGVwTmV4dExpbmU7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdFx0bWFyZ2luOiAwIC0yMyUgMCAtNyU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG92ZXJmbG93OiBpbml0aWFsO1xuXHR9XG5cblx0LmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTEge1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDIpO1xufVxuXG4ubGFzdC1lZGl0ZWQtc3RlcC0yIHtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSgyKTtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSg0KTtcbn1cbiIsIiRicmVha3BvaW50LTE6IDM2ZW07XG4kYnJlYWtwb2ludC0yOiA0OGVtO1xuJGJyZWFrcG9pbnQtMzogNTUuNWVtO1xuJGJyZWFrcG9pbnQtNDogNzVlbTtcbiRicmVha3BvaW50LTU6IDg3LjVlbTtcblxuJGJyZWFrcG9pbnRzOiAoXG5cdFwiMVwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0xLFxuXHQpLFxuXHRcIjJcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMixcblx0KSxcblx0XCIzXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTMsXG5cdCksXG5cdFwiNFwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC00LFxuXHQpLFxuXHRcIjVcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtNSxcblx0KSxcblx0XCI2XCI6IChcblx0XHRtaW4td2lkdGg6ICRicmVha3BvaW50LTUsXG5cdCksXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuXHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cbiJdfQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_49__.trigger)("fadeInOut", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_49__.transition)(":enter", [// :enter is alias to 'void => *'
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_49__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_49__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_49__.style)({
      opacity: 1
    }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_49__.transition)(":leave", [// :leave is alias to '* => void'
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_49__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_49__.style)({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
ClientProfileAddOfferComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_50__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_28__.UntilDestroy)()], ClientProfileAddOfferComponent);


/***/ }),

/***/ 4904:
/*!****************************************************************************!*\
  !*** ./src/app/client/services/transport-types/transport-types.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportTypesService": () => (/* binding */ TransportTypesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);
/* harmony import */ var _state_transport_types_transport_types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/transport-types/transport-types.store */ 66586);
/* harmony import */ var _state_transport_types_transport_types_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/transport-types/transport-types.query */ 40306);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 1468);







let TransportTypesService = class TransportTypesService {
    constructor(_apiService, _transportTypesStore, _transportTypesQuery, translateService) {
        this._apiService = _apiService;
        this._transportTypesStore = _transportTypesStore;
        this._transportTypesQuery = _transportTypesQuery;
        this.translateService = translateService;
        this.endpoint = "transportTypes";
    }
    getTransportTypes() {
        const { transportTypes } = this._transportTypesQuery.getValue();
        if (!transportTypes.length) {
            this._apiService
                .get(this.endpoint)
                .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this))
                .subscribe((response) => {
                this._transportTypesStore.update({
                    transportTypes: response.map((transport) => ({
                        ...transport,
                        displayName: `TRANSPORT_TYPE.${transport.name.toUpperCase()}`,
                    })),
                });
            });
        }
        return this._transportTypesQuery.selectTransportTypes$;
    }
};
TransportTypesService.ɵfac = function TransportTypesService_Factory(t) { return new (t || TransportTypesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state_transport_types_transport_types_store__WEBPACK_IMPORTED_MODULE_1__.TransportTypesStore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state_transport_types_transport_types_query__WEBPACK_IMPORTED_MODULE_2__.TransportTypesQuery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService)); };
TransportTypesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TransportTypesService, factory: TransportTypesService.ɵfac, providedIn: "root" });
TransportTypesService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], TransportTypesService);



/***/ }),

/***/ 40306:
/*!***********************************************************************!*\
  !*** ./src/app/client/state/transport-types/transport-types.query.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportTypesQuery": () => (/* binding */ TransportTypesQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _transport_types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport-types.store */ 66586);



class TransportTypesQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.selectTransportTypes$ = this.select("transportTypes");
    }
}
TransportTypesQuery.ɵfac = function TransportTypesQuery_Factory(t) { return new (t || TransportTypesQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_transport_types_store__WEBPACK_IMPORTED_MODULE_1__.TransportTypesStore)); };
TransportTypesQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TransportTypesQuery, factory: TransportTypesQuery.ɵfac, providedIn: "root" });


/***/ }),

/***/ 66586:
/*!***********************************************************************!*\
  !*** ./src/app/client/state/transport-types/transport-types.store.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportTypesStore": () => (/* binding */ TransportTypesStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        transportTypes: [],
    };
}
let TransportTypesStore = class TransportTypesStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
TransportTypesStore.ɵfac = function TransportTypesStore_Factory(t) { return new (t || TransportTypesStore)(); };
TransportTypesStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TransportTypesStore, factory: TransportTypesStore.ɵfac, providedIn: "root" });
TransportTypesStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: "transport-types" })
], TransportTypesStore);



/***/ }),

/***/ 92634:
/*!************************************************************************!*\
  !*** ./src/app/core/directives/scroll-to-invalid-control.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bScrollToInvalidControl": () => (/* binding */ B2bScrollToInvalidControl)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





class B2bScrollToInvalidControl {
    constructor(el, formGroupDir) {
        this.el = el;
        this.formGroupDir = formGroupDir;
    }
    onSubmit() {
        if (this.formGroupDir.control.invalid) {
            this.scrollToFirstInvalidControl();
        }
    }
    scrollToFirstInvalidControl() {
        const firstInvalidControl = this.el.nativeElement.querySelector(".ng-invalid");
        window.scroll({
            top: this.getTopOffset(firstInvalidControl),
            left: 0,
            behavior: "smooth",
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, "scroll")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))
            .subscribe(() => firstInvalidControl.focus());
    }
    getTopOffset(controlEl) {
        const labelOffset = 100;
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }
}
B2bScrollToInvalidControl.ɵfac = function B2bScrollToInvalidControl_Factory(t) { return new (t || B2bScrollToInvalidControl)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective)); };
B2bScrollToInvalidControl.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: B2bScrollToInvalidControl, selectors: [["", "b2bScrollToInvalidControl", ""]], hostBindings: function B2bScrollToInvalidControl_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function B2bScrollToInvalidControl_ngSubmit_HostBindingHandler() { return ctx.onSubmit(); });
    } } });


/***/ })

}]);
//# sourceMappingURL=default-src_app_client_pages_client-profile_pages_client-profile-add-offer_client-profile-add-3db01c.js.map