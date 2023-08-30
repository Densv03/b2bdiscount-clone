"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_client_pages_client-contact-us_client-contact-us_module_ts"],{

/***/ 42757:
/*!************************************************************************************!*\
  !*** ./src/app/client/pages/client-contact-us/client-contact-us-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientContactUsRoutingModule": () => (/* binding */ ClientContactUsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_client_contact_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-contact-us.component */ 56950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_client_contact_us_component__WEBPACK_IMPORTED_MODULE_0__.ClientContactUsComponent,
    },
];
class ClientContactUsRoutingModule {
}
ClientContactUsRoutingModule.ɵfac = function ClientContactUsRoutingModule_Factory(t) { return new (t || ClientContactUsRoutingModule)(); };
ClientContactUsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientContactUsRoutingModule });
ClientContactUsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientContactUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 78489:
/*!****************************************************************************!*\
  !*** ./src/app/client/pages/client-contact-us/client-contact-us.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientContactUsModule": () => (/* binding */ ClientContactUsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _b2b_ngx_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b2b/ngx-skeleton */ 55849);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _layout_client_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/client-contact-us.component */ 56950);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @b2b/ngx-tel */ 47321);
/* harmony import */ var _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-textarea */ 31060);
/* harmony import */ var _client_contact_us_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-contact-us-routing.module */ 42757);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);














class ClientContactUsModule {
}
ClientContactUsModule.ɵfac = function ClientContactUsModule_Factory(t) { return new (t || ClientContactUsModule)(); };
ClientContactUsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ClientContactUsModule });
ClientContactUsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _client_contact_us_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientContactUsRoutingModule,
        _b2b_ngx_skeleton__WEBPACK_IMPORTED_MODULE_0__.B2bNgxSkeletonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_5__.B2bNgxImageModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_7__.B2bNgxIconModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_8__.B2bNgxSelectModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_9__.B2bNgxInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_11__.B2bNgxTelModule,
        _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_12__.B2bNgxTextareaModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClientContactUsModule, { declarations: [_layout_client_contact_us_component__WEBPACK_IMPORTED_MODULE_1__.ClientContactUsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _client_contact_us_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientContactUsRoutingModule,
        _b2b_ngx_skeleton__WEBPACK_IMPORTED_MODULE_0__.B2bNgxSkeletonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_5__.B2bNgxImageModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_7__.B2bNgxIconModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_8__.B2bNgxSelectModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_9__.B2bNgxInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_11__.B2bNgxTelModule,
        _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_12__.B2bNgxTextareaModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] }); })();


/***/ }),

/***/ 56950:
/*!**************************************************************************************!*\
  !*** ./src/app/client/pages/client-contact-us/layout/client-contact-us.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientContactUsComponent": () => (/* binding */ ClientContactUsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-select */ 20592);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/api/api.service */ 96931);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_tel_src_lib_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../projects/ngx-tel/src/lib/layout/ngx-tel.component */ 15931);
/* harmony import */ var _projects_ngx_textarea_src_lib_directive_ngx_textarea_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../projects/ngx-textarea/src/lib/directive/ngx-textarea.directive */ 18103);


















function ClientContactUsComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const socialMedia_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", socialMedia_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", socialMedia_r1.icon);
} }
let ClientContactUsComponent = class ClientContactUsComponent {
    constructor(_formBuilder, _apiService, _hotToastrService, translateService) {
        this._formBuilder = _formBuilder;
        this._apiService = _apiService;
        this._hotToastrService = _hotToastrService;
        this.translateService = translateService;
        this.subjectOptions = [
            { label: this.translateService.instant("CONTACT_US.SUPPORT"), value: "support" },
            { label: this.translateService.instant("CONTACT_US.LEGAL_HELP"), value: "legal-help" },
        ];
        this.socialMedias = this.getSocialMedias();
        this.formGroup = this.getFormGroup();
        this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__.B2bNgxInputThemeEnum;
        this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_3__.B2bNgxButtonThemeEnum;
        this.b2bNgxSelectThemeEnum = _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_4__.B2bNgxSelectThemeEnum;
    }
    getFormGroup() {
        return this._formBuilder.group({
            type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    sendMessage(formGroup) {
        if (formGroup.invalid) {
            return;
        }
        const data = {
            ...formGroup.value,
            phone: formGroup.value.phone.e164Number,
        };
        this._apiService
            .post("mail/contactUs", data)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this), this._hotToastrService.observe({
            loading: this.translateService.instant("TOASTR.LOADING"),
            success: this.translateService.instant("TOASTR.SUCCESS"),
            error: this.translateService.instant("TOASTR.ERROR"),
        }))
            .subscribe(() => {
            this.closeModal();
        });
    }
    getSocialMedias() {
        return [
            {
                icon: "facebook",
                href: "https://www.facebook.com/b2b.discount",
            },
            {
                icon: "twitter",
                href: "https://twitter.com/DiscountB2b",
            },
            {
                icon: "linkedin",
                href: "https://www.linkedin.com/company/b2b-discount",
            },
            {
                icon: "youtube",
                href: "https://www.youtube.com/channel/UCW8RdiD7Fql5RelC37WkjjA",
            },
        ];
    }
    closeModal() {
        // const modal = this._ngxSmartModalService.getModal("createContactModal");
        // modal.close();
    }
    ngOnInit() { }
};
ClientContactUsComponent.ɵfac = function ClientContactUsComponent_Factory(t) { return new (t || ClientContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService)); };
ClientContactUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientContactUsComponent, selectors: [["b2b-client-contact-us"]], decls: 36, vars: 48, consts: [[1, "client-contact-us"], [1, "client-contact-us-header"], [1, "client-contact-us-header-title"], [1, "client-contact-us-header-description"], ["errorTailor", "", 1, "client-contact-us-form", 3, "formGroup", "ngSubmit"], ["formControlName", "type", 1, "client-contact-us-form-select", 3, "theme", "options", "placeholder"], ["b2bNgxInput", "", "formControlName", "name", "labelClass", "client-contact-us-form-input", 3, "theme", "placeholder", "label"], ["b2bNgxInput", "", "type", "email", "labelClass", "client-contact-us-form-input", "formControlName", "email", 3, "theme", "label", "placeholder"], ["formControlName", "phone", 1, "client-contact-us-form-input", 3, "theme", "placeholder"], ["b2bNgxTextarea", "", "formControlName", "text", "labelClass", "client-contact-us-form-textarea", 3, "theme", "placeholder", "label"], ["b2bNgxButton", "", "type", "submit", 1, "client-contact-us-form-button", 3, "theme"], [1, "client-contact-us-footer"], [1, "client-contact-us-footer-icons-list"], ["class", "client-contact-us-footer-icons-list-item", 4, "ngFor", "ngForOf"], [1, "client-contact-us-footer-description"], ["href", ""], [1, "client-contact-us-footer-icons-list-item"], ["b2bNgxLink", "", 1, "client-contact-us-footer-icons-list-item-href", 3, "href"], ["b2bNgxIcon", "", 1, "client-contact-us-footer-icons-list-item-icon", 3, "name"]], template: function ClientContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ClientContactUsComponent_Template_form_ngSubmit_8_listener() { return ctx.sendMessage(ctx.formGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "b2b-ngx-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b2b-ngx-tel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11)(28, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ClientContactUsComponent_li_29_Template, 3, 2, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "support@b2b.discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 22, "CONTACT_US.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 24, "CONTACT_US.DESCRIPTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY)("options", ctx.subjectOptions)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 26, "PLACEHOLDERS.SUBJECT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 28, "PLACEHOLDERS.ENTER_NAME"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 30, "LABELS.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 32, "LABELS.EMAIL"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 34, "PLACEHOLDERS.YOUR_EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 36, "PLACEHOLDERS.YOUR_PHONE_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 38, "INPUTS.PHONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 40, "PLACEHOLDERS.ENTER_MESSAGE"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 42, "LABELS.MESSAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 44, "BUTTONS.SEND"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.socialMedias);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 46, "CONTACT_US.FEEDBACK"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_10__.B2bNgxButtonDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_11__.B2bNgxIconDirective, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_12__.B2bNgxSelectComponent, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_13__.B2bNgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _projects_ngx_tel_src_lib_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_14__.B2bNgxTelComponent, _projects_ngx_textarea_src_lib_directive_ngx_textarea_directive__WEBPACK_IMPORTED_MODULE_15__.B2bNgxTextareaDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["[_nghost-%COMP%]     .nsm-dialog {\n  max-width: none !important;\n}\n[_nghost-%COMP%]     .nsm-dialog .nsm-content {\n  padding: 0 !important;\n}\n.client-contact-us[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  background-color: #fff;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-header[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 60px auto 0;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-header[_ngcontent-%COMP%]   .client-contact-us-header-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  color: #0f0f11;\n  text-align: center;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-header[_ngcontent-%COMP%]   .client-contact-us-header-description[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #556274;\n  text-align: center;\n  margin-top: 10px;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 32px auto;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]   .client-contact-us-form-select[_ngcontent-%COMP%] {\n  display: block;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]   .client-contact-us-form-input[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 16px;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]   .client-contact-us-form-textarea[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 16px;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]   .client-contact-us-form-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 15px;\n  width: 100%;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 23px 0;\n  background: #f3f6f8;\n  border-radius: 0px 0px 4px 4px;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item-href[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: white;\n}\n.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-description[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 16px auto;\n  text-align: center;\n  font-size: 14px;\n  color: #556274;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0MsMEJBQUE7QUFESDtBQUdHO0VBQ0MscUJBQUE7QUFESjtBQU9BO0VBQ0MsaUJBQUE7RUFDQSxzQkFBQTtBQUpEO0FBTUM7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1FO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSkg7QUFPRTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMSDtBQVNDO0VBQ0MsVUFBQTtFQUNBLGlCQUFBO0FBUEY7QUFTRTtFQUNDLGNBQUE7QUFQSDtBQVVFO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0FBUkg7QUFXRTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQVRIO0FBWUU7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBVkg7QUFjQztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFaRjtBQWNFO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0FBWkg7QUFjRztFQUNDLGFBQUE7QUFaSjtBQWNJO0VBQ0MsY0FBQTtBQVpMO0FBZUk7RUFDQyxlQUFBO0FBYkw7QUFnQkk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQWRMO0FBbUJFO0VBQ0MsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWpCSCIsImZpbGUiOiJjbGllbnQtY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0OjpuZy1kZWVwIHtcblx0XHQubnNtLWRpYWxvZyB7XG5cdFx0XHRtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcblxuXHRcdFx0Lm5zbS1jb250ZW50IHtcblx0XHRcdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uY2xpZW50LWNvbnRhY3QtdXMge1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuXHQuY2xpZW50LWNvbnRhY3QtdXMtaGVhZGVyIHtcblx0XHR3aWR0aDogODAlO1xuXHRcdG1hcmdpbjogNjBweCBhdXRvIDA7XG5cblx0XHQuY2xpZW50LWNvbnRhY3QtdXMtaGVhZGVyLXRpdGxlIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0LmNsaWVudC1jb250YWN0LXVzLWhlYWRlci1kZXNjcmlwdGlvbiB7XG5cdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0Y29sb3I6ICM1NTYyNzQ7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdH1cblx0fVxuXG5cdC5jbGllbnQtY29udGFjdC11cy1mb3JtIHtcblx0XHR3aWR0aDogODAlO1xuXHRcdG1hcmdpbjogMzJweCBhdXRvO1xuXG5cdFx0LmNsaWVudC1jb250YWN0LXVzLWZvcm0tc2VsZWN0IHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblxuXHRcdC5jbGllbnQtY29udGFjdC11cy1mb3JtLWlucHV0IHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHR9XG5cblx0XHQuY2xpZW50LWNvbnRhY3QtdXMtZm9ybS10ZXh0YXJlYSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cdFx0fVxuXG5cdFx0LmNsaWVudC1jb250YWN0LXVzLWZvcm0tYnV0dG9uIHtcblx0XHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG5cblx0LmNsaWVudC1jb250YWN0LXVzLWZvb3RlciB7XG5cdFx0bWFyZ2luLXRvcDogMjRweDtcblx0XHRwYWRkaW5nOiAyM3B4IDA7XG5cdFx0YmFja2dyb3VuZDogI2YzZjZmODtcblx0XHRib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG5cblx0XHQuY2xpZW50LWNvbnRhY3QtdXMtZm9vdGVyLWljb25zLWxpc3Qge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0XHQuY2xpZW50LWNvbnRhY3QtdXMtZm9vdGVyLWljb25zLWxpc3QtaXRlbSB7XG5cdFx0XHRcdG1hcmdpbjogMCA1cHg7XG5cblx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jbGllbnQtY29udGFjdC11cy1mb290ZXItaWNvbnMtbGlzdC1pdGVtLWhyZWYge1xuXHRcdFx0XHRcdHdpZHRoOiA0NXB4O1xuXHRcdFx0XHRcdGhlaWdodDogNDVweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmNsaWVudC1jb250YWN0LXVzLWZvb3Rlci1kZXNjcmlwdGlvbiB7XG5cdFx0XHR3aWR0aDogODAlO1xuXHRcdFx0bWFyZ2luOiAxNnB4IGF1dG87XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRjb2xvcjogIzU1NjI3NDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"], changeDetection: 0 });
ClientContactUsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()
], ClientContactUsComponent);



/***/ })

}]);
//# sourceMappingURL=src_app_client_pages_client-contact-us_client-contact-us_module_ts.js.map