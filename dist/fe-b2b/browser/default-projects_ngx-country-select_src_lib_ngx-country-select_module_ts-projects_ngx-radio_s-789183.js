"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-projects_ngx-country-select_src_lib_ngx-country-select_module_ts-projects_ngx-radio_s-789183"],{

/***/ 17354:
/*!**************************************************************************!*\
  !*** ./projects/ngx-country-select/src/lib/ngx-country-select.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxCountrySelectModule": () => (/* binding */ B2bNgxCountrySelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/layout/ngx-country-select.component */ 11070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);







class B2bNgxCountrySelectModule {
}
B2bNgxCountrySelectModule.ɵfac = function B2bNgxCountrySelectModule_Factory(t) { return new (t || B2bNgxCountrySelectModule)(); };
B2bNgxCountrySelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxCountrySelectModule });
B2bNgxCountrySelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconModule, _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_4__.B2bNgxImageModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxCountrySelectModule, { declarations: [_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_6__.B2bNgxCountrySelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconModule, _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_4__.B2bNgxImageModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule], exports: [_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_6__.B2bNgxCountrySelectComponent] }); })();


/***/ }),

/***/ 67841:
/*!******************************************************************!*\
  !*** ./projects/ngx-radio/src/lib/layout/ngx-radio.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxRadioComponent": () => (/* binding */ B2bNgxRadioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _b2b_id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/id-generator */ 88763);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
var B2bNgxRadioComponent_1;









function B2bNgxRadioComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", option_r1 + index_r2)("formControl", ctx_r0.formControl)("value", option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", option_r1 + index_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1);
} }
let B2bNgxRadioComponent = B2bNgxRadioComponent_1 = class B2bNgxRadioComponent {
    constructor() {
        this.type = "checkbox";
        this.onChange = () => null;
        this.onTouched = () => null;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.id = (0,_b2b_id_generator__WEBPACK_IMPORTED_MODULE_2__.idGenerator)();
    }
    get error() {
        if (!this.errors) {
            return "";
        }
        const firstErrorKey = Object.keys(this.errors)[0];
        return this.errors[firstErrorKey];
    }
    ngOnInit() {
        this.subscribeOnValueChanges();
    }
    ngOnChanges(changes) {
        if (changes['errors']) {
            this.formControl.setErrors(changes['errors'].currentValue);
        }
    }
    validate() {
        return this.formControl.errors;
    }
    subscribeOnValueChanges() {
        this.formControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe((value) => {
            this.onChange(value);
        });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        this.formControl.setValue(value);
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    }
};
B2bNgxRadioComponent.ɵfac = function B2bNgxRadioComponent_Factory(t) { return new (t || B2bNgxRadioComponent)(); };
B2bNgxRadioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxRadioComponent, selectors: [["b2b-ngx-radio"]], inputs: { placeholder: "placeholder", checked: "checked", options: "options", customClass: "customClass", errors: "errors" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxRadioComponent_1),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxRadioComponent_1),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[3, "className"], [4, "ngFor", "ngForOf"], ["name", "radio", "type", "radio", 3, "id", "formControl", "value"], [3, "for"], [1, "circle"], ["b2bNgxIcon", "", "name", "check-white"], [1, "title"]], template: function B2bNgxRadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, B2bNgxRadioComponent_li_1_Template, 7, 5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.customClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_5__.B2bNgxIconDirective], styles: ["ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 15px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: black;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #556274;\n  border-radius: 24px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 10px;\n  font-size: 14px;\n  color: #556274;\n}\n.column[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .column   [_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 12px;\n}\n.column[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .column   [_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0;\n  font-family: Helvetica Neue;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1yYWRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQUNEO0FBQUM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVGO0FBREU7RUFDQyxhQUFBO0FBR0g7QUFESTtFQUNDLHVCQUFBO0FBR0w7QUFDRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQUNIO0FBQUc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUc7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVKO0FBS0M7RUFDQyxzQkFBQTtFQUNBLFNBQUE7QUFGRjtBQUdFO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBREgiLCJmaWxlIjoibmd4LXJhZGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRsaSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdGlucHV0IHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHQmOmNoZWNrZWQgfiBsYWJlbCB7XG5cdFx0XHRcdC5jaXJjbGUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxhYmVsIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0LmNpcmNsZSB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjNTU2Mjc0O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAyNHB4O1xuXHRcdFx0fVxuXHRcdFx0LnRpdGxlIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGNvbG9yOiAjNTU2Mjc0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG46aG9zdC1jb250ZXh0KC5jb2x1bW4pIHtcblx0dWwge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0Z2FwOiAxMnB4O1xuXHRcdGxpIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHRmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"], changeDetection: 0 });
B2bNgxRadioComponent = B2bNgxRadioComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], B2bNgxRadioComponent);



/***/ }),

/***/ 14083:
/*!********************************************************!*\
  !*** ./projects/ngx-radio/src/lib/ngx-radio.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxRadioModule": () => (/* binding */ B2bNgxRadioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_radio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/ngx-radio.component */ 67841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class B2bNgxRadioModule {
}
B2bNgxRadioModule.ɵfac = function B2bNgxRadioModule_Factory(t) { return new (t || B2bNgxRadioModule)(); };
B2bNgxRadioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: B2bNgxRadioModule });
B2bNgxRadioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](B2bNgxRadioModule, { declarations: [_layout_ngx_radio_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxRadioComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule], exports: [_layout_ngx_radio_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxRadioComponent] }); })();


/***/ }),

/***/ 36227:
/*!**********************************************!*\
  !*** ./projects/ngx-radio/src/public-api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxRadioComponent": () => (/* reexport safe */ _lib_layout_ngx_radio_component__WEBPACK_IMPORTED_MODULE_1__.B2bNgxRadioComponent),
/* harmony export */   "B2bNgxRadioModule": () => (/* reexport safe */ _lib_ngx_radio_module__WEBPACK_IMPORTED_MODULE_0__.B2bNgxRadioModule)
/* harmony export */ });
/* harmony import */ var _lib_ngx_radio_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-radio.module */ 14083);
/* harmony import */ var _lib_layout_ngx_radio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/layout/ngx-radio.component */ 67841);
/*
 * Public API Surface of ngx-radio
 */




/***/ }),

/***/ 36521:
/*!**********************************************************!*\
  !*** ./src/app/client/services/offers/offers.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersService": () => (/* binding */ OffersService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);
/* harmony import */ var _state_offers_offers_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/offers/offers.query */ 35237);
/* harmony import */ var _state_offers_offers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/offers/offers.store */ 14835);






function getPreviewPhoto(offer) {
    return offer.photos && offer.photos.length ? offer.photos[0].lg : null;
}
// @UntilDestroy()
class OffersService {
    constructor(_apiService, _offersQuery, _offersStore) {
        this._apiService = _apiService;
        this._offersQuery = _offersQuery;
        this._offersStore = _offersStore;
        this.offersSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.savedOffersSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.offersLength = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
        this.savedOffersLength = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
        this._endpoint = "offers/";
    }
    get offers$() {
        return this.offersSource.asObservable();
    }
    get savedOffers$() {
        return this.savedOffersSource.asObservable();
    }
    get offersLength$() {
        return this.offersLength.asObservable();
    }
    get savedOffersLength$() {
        return this.savedOffersLength.asObservable();
    }
    removeAllOffers() {
        return this._apiService.delete("offers/delete");
    }
    getContainerLocation(query) {
        return this._apiService.get(`container/location?${query}`);
    }
    getAllOffersCount() {
        return this._offersQuery.selectAllOffersCount$;
    }
    getSeaLines() {
        const { seaLines } = this._offersQuery.getValue();
        if (!seaLines.length) {
            this._apiService
                .get("seaLines")
                // .pipe(untilDestroyed(this))
                .subscribe((response) => {
                this._offersStore.update({
                    seaLines: response,
                });
            });
        }
        return this._offersQuery.selectSeaLines$;
    }
    markAsSold(id) {
        this._apiService
            .post(`offer/${id}/status/update`, { status: "sold" })
            .pipe(
        // untilDestroyed(this),
        // this._hotToastService.observe({
        // 	loading: "Offer status updating...",
        // 	success: "Offer status updated successfully!",
        // 	error: "Offer status updating failed!",
        // })
        )
            .subscribe();
    }
    hideOffer(id) {
        return this._apiService.post(`offer/${id}/hide`, {});
    }
    unHideOffer(id) {
        return this._apiService.post(`offer/${id}/unHide`, {});
    }
    adminHideOffer(id) {
        return this._apiService.post(`offer/${id}/adminHide`, {});
    }
    adminUnHideOffer(id) {
        return this._apiService.post(`offer/${id}/adminUnHide`, {});
    }
    deleteOfferSub(id) {
        return this._apiService.delete(`offer/${id}/delete`);
    }
    deleteRfq(id) {
        return this._apiService.delete(`tradeBid/delete-rfq-admin`, { body: { rfqId: id } });
    }
    deleteOfferById(id, body) {
        return this._apiService.delete(`offer/${id}/delete`, body);
        // .pipe(untilDestroyed(this))
        // .subscribe(() => {
        // 	this._offersStore.update({
        // 		myOffers: this._offersQuery.getValue().myOffers.filter((myOffer) => myOffer._id !== id),
        // 	});
        // });
    }
    getOfferById(id) {
        return this._apiService.get(`offer/${id}/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((response) => {
            this._offersStore.update({
                offer: response,
            });
        }));
    }
    getMyOffers() {
        this._apiService
            .get("my/offers?limit=1")
            .subscribe((myOffers) => {
            this._offersStore.update({
                myOffers: myOffers.map((myOffer) => ({
                    ...myOffer,
                    previewPhoto: getPreviewPhoto(myOffer),
                })),
            });
        });
        return this._offersQuery.selectMyOffers$;
    }
    getOffers(queryString = "") {
        return this._apiService.get("offers/" + queryString).pipe(
        // untilDestroyed(this),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            const { offers, totalCount } = response;
            const allOffers = offers.map((offer) => {
                return {
                    ...offer,
                    previewPhoto: getPreviewPhoto(offer),
                };
            });
            this._offersStore.update({
                allOffers,
                allOffersCount: totalCount,
            });
            return [...allOffers];
        }));
    }
    getActiveOffers() {
        return this._apiService.get("offers?hideSold=true").pipe(
        // untilDestroyed(this),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            const { offers, totalCount } = response;
            const allOffers = offers.map((offer) => {
                return {
                    ...offer,
                    previewPhoto: getPreviewPhoto(offer),
                };
            });
            this._offersStore.update({
                allOffers,
                allOffersCount: totalCount,
            });
            return [...allOffers];
        }));
    }
    getSavedOffers() {
        const url = "my/offers/favourites";
        this._apiService.get(url).subscribe((savedOffers) => {
            this._offersStore.update({
                savedOffers: savedOffers.map((savedOffer) => ({
                    ...savedOffer,
                    previewPhoto: getPreviewPhoto(savedOffer),
                })),
            });
        });
        return this._offersQuery.selectSavedOffers$;
    }
    createOffer(offerToCreate) {
        return this._apiService.post("offer/create", offerToCreate);
    }
    updateOffer(offerToUpdate, id) {
        return this._apiService.put(`offer/${id}/update`, offerToUpdate);
    }
    addFavoriteOffer(id) {
        return this._apiService.post(`user/favourites/${id}/add`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            this._offersStore.update({
                allOffers: this._offersStore.getValue().allOffers.map((offer) => ({
                    ...offer,
                    isSaved: offer._id === id ? true : offer.isSaved,
                })),
            });
        }));
    }
    removeFavoriteOffer(id) {
        return this._apiService.delete(`user/favourites/${id}/remove`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            const { savedOffers, allOffers } = this._offersQuery.getValue();
            this._offersStore.update({
                savedOffers: savedOffers.filter((savedOffer) => savedOffer._id !== id),
                allOffers: allOffers.map((offer) => ({
                    ...offer,
                    isSaved: offer._id === id ? false : offer.isSaved,
                })),
            });
        }));
    }
    approveOffer(id) {
        return this._apiService.post(`offer/${id}/adminApprovalOffer`, {});
    }
    declineOffer(id) {
        return this._apiService.post(`offer/${id}/adminRejectionOffer`, {});
    }
    updateOffersList(queryString) {
        this.getOffers(queryString)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)())
            .subscribe((data) => {
            this.offersSource.next(data.rfqList);
            // this.rfqManageLength.next(data.totalCount);
        });
    }
}
OffersService.ɵfac = function OffersService_Factory(t) { return new (t || OffersService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_state_offers_offers_query__WEBPACK_IMPORTED_MODULE_1__.OffersQuery), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_state_offers_offers_store__WEBPACK_IMPORTED_MODULE_2__.OffersStore)); };
OffersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: OffersService, factory: OffersService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 35237:
/*!*****************************************************!*\
  !*** ./src/app/client/state/offers/offers.query.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersQuery": () => (/* binding */ OffersQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _offers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.store */ 14835);



class OffersQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.selectAllOffers$ = this.select("allOffers");
        this.selectMyOffers$ = this.select("myOffers");
        this.selectOffer$ = this.select("offer");
        this.selectSavedOffers$ = this.select("savedOffers");
        this.selectAllOffersCount$ = this.select("allOffersCount");
        this.selectSeaLines$ = this.select("seaLines");
    }
}
OffersQuery.ɵfac = function OffersQuery_Factory(t) { return new (t || OffersQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_offers_store__WEBPACK_IMPORTED_MODULE_1__.OffersStore)); };
OffersQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OffersQuery, factory: OffersQuery.ɵfac, providedIn: "root" });


/***/ }),

/***/ 14835:
/*!*****************************************************!*\
  !*** ./src/app/client/state/offers/offers.store.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersStore": () => (/* binding */ OffersStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        allOffers: [],
        myOffers: [],
        offer: null,
        savedOffers: [],
        allOffersCount: 0,
        seaLines: [],
    };
}
let OffersStore = class OffersStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
OffersStore.ɵfac = function OffersStore_Factory(t) { return new (t || OffersStore)(); };
OffersStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OffersStore, factory: OffersStore.ɵfac, providedIn: "root" });
OffersStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: "offers" })
], OffersStore);



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
//# sourceMappingURL=default-projects_ngx-country-select_src_lib_ngx-country-select_module_ts-projects_ngx-radio_s-789183.js.map