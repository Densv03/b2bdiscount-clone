"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-projects_ngx-tel_src_lib_ngx-tel_module_ts"],{

/***/ 15931:
/*!**************************************************************!*\
  !*** ./projects/ngx-tel/src/lib/layout/ngx-tel.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxTelComponent": () => (/* binding */ B2bNgxTelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
var B2bNgxTelComponent_1;




// import { FormControl } from "@ngneat/reactive-forms";






const _c0 = ["phoneField"];
const _c1 = ["*"];
const placeholders = {
    "Bangladesh (বাংলাদেশ)": "0000-000000",
    "Peru (Perú)": "00-000000",
};
let B2bNgxTelComponent = B2bNgxTelComponent_1 = class B2bNgxTelComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.errors = {};
        this.theme = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_0__.B2bNgxInputThemeEnum.BACKGROUND_GRAY;
        this.customInputStyles = '';
        this.showErrorMessage = true;
        this.enableAutoCountrySelect = false;
        this.enablePlaceholder = true;
        this.searchCountryFlag = true;
        this.separateDialCode = true;
        this.phoneValidation = true;
        this.selectedCountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_1__.CountryISO.UnitedStates;
        this.defaultNumber = "";
        this.disabled = false;
        this.placeholder = '';
        this.type = "tel";
        this.phoneNumberFormat = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_1__.PhoneNumberFormat;
        this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        // public readonly inputFormControl: FormControl<string> = new FormControl<string>("", [b2bNgxTel()]);
        this.options = [];
        this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_0__.B2bNgxInputThemeEnum;
        this.mask = "";
        this.invalid = false;
        this.touched = false;
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    ngAfterViewInit() {
        this.phoneField.disabled = this.disabled;
    }
    ngOnChanges(changes) {
        // this.touched = this.inputFormControl.touched || this.selectFormControl.touched;
        this.invalid = changes['errors'] && changes['errors'].currentValue;
    }
    ngOnInit() {
        this.subscribeOnValueChanges();
        // this.inputFormControl.setValue(this.defaultNumber, { emitEvent: false });
    }
    validate() {
        return null;
    }
    subscribeOnValueChanges() {
        const selectValue$ = this.selectFormControl.valueChanges;
        // const inputValue$ = this.inputFormControl.valueChanges;
        selectValue$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe((selectValue) => {
            this.onChange(selectValue);
            this.onTouched();
        });
        // inputValue$.pipe(untilDestroyed(this)).subscribe((inputValue) => {
        // 	this.selectFormControl.setValue(inputValue);
        // });
    }
    changeMask(country) {
        if (!country) {
            return;
        }
        const { name, dialCode } = country;
        const placeHolder = placeholders[name] || country.placeHolder;
        // this.placeholder = placeHolder.replace(`+${dialCode} `, "").replace(/[0-9]/g, "0");
        this.mask = this.placeholder;
        // this.selectFormControl.setValue(this.inputFormControl.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (!value) {
            return;
        }
        this.selectedCountryISO = value.countryCode;
        // this.inputFormControl.setValue(value.number, { emitEvent: false });
        this.selectFormControl.setValue(value.number, { emitEvent: false });
        this.changeDetectorRef.detectChanges();
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            // this.inputFormControl.disable();
        }
        else {
            // this.inputFormControl.enable();
        }
    }
};
B2bNgxTelComponent.ɵfac = function B2bNgxTelComponent_Factory(t) { return new (t || B2bNgxTelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
B2bNgxTelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: B2bNgxTelComponent, selectors: [["b2b-ngx-tel"]], viewQuery: function B2bNgxTelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.phoneField = _t.first);
    } }, inputs: { errors: "errors", theme: "theme", customInputStyles: "customInputStyles", showErrorMessage: "showErrorMessage", enableAutoCountrySelect: "enableAutoCountrySelect", enablePlaceholder: "enablePlaceholder", searchCountryFlag: "searchCountryFlag", separateDialCode: "separateDialCode", phoneValidation: "phoneValidation", selectedCountryISO: "selectedCountryISO", defaultNumber: "defaultNumber", disabled: "disabled", placeholder: "placeholder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => B2bNgxTelComponent_1),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => B2bNgxTelComponent_1),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 5, vars: 14, consts: [[1, "ngx-tel-label"], [1, "ngx-tel-wrapper"], ["cssClass", "ngx-tel", 3, "formControl", "enableAutoCountrySelect", "enablePlaceholder", "separateDialCode", "phoneValidation", "searchCountryFlag", "numberFormat", "selectedCountryISO", "countryChange"], ["phoneField", ""]], template: function B2bNgxTelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "ngx-intl-tel-input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("countryChange", function B2bNgxTelComponent_Template_ngx_intl_tel_input_countryChange_3_listener($event) { return ctx.changeMask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("touched", ctx.touched)("invalid", ctx.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("required-error", ctx.errors && ctx.errors["required"] && ctx.selectFormControl.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.selectFormControl)("enableAutoCountrySelect", ctx.enableAutoCountrySelect)("enablePlaceholder", ctx.enablePlaceholder)("separateDialCode", ctx.separateDialCode)("phoneValidation", true)("searchCountryFlag", true)("numberFormat", ctx.phoneNumberFormat.National)("selectedCountryISO", ctx.selectedCountryISO);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_1__.NgxIntlTelInputComponent, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_1__.NativeElementInjectorDirective], styles: [".ngx-tel-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}\n.ngx-tel-label[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: hsla(218deg, 5%, 45%, 0.6);\n  margin-top: 4px;\n}\n  ngx-intl-tel-input .iti {\n  width: 100%;\n}\n  ngx-intl-tel-input .iti .ngx-tel {\n  width: 100%;\n  color: #556274;\n  background-color: #f3f6f8;\n  border-radius: 0.25rem;\n  padding: 15px 0;\n  outline: none;\n  border: none;\n}\n  ngx-intl-tel-input .iti .iti__flag-container {\n  padding: 2px;\n}\n  ngx-intl-tel-input .iti .iti__flag-container.disabled {\n  cursor: not-allowed !important;\n}\n  ngx-intl-tel-input .iti .iti__flag-container.disabled .iti__selected-flag {\n  background-color: #fff;\n}\n  ngx-intl-tel-input .iti .iti__flag-container.disabled .iti__selected-flag:hover {\n  background-color: #fff;\n}\n  ngx-intl-tel-input .iti .iti__flag-container .iti__selected-flag {\n  background-color: white;\n  border-radius: 3px 0 0 3px;\n}\n  ngx-intl-tel-input .iti .selected-dial-code {\n  font-size: 14px;\n  color: #556274;\n}\n  ngx-intl-tel-input .iti .dropdown-menu {\n  border-radius: 4px;\n  background: #ffffff;\n  border: none;\n}\n  ngx-intl-tel-input .iti .dropdown-menu .iti__country-list {\n  background: #ffffff;\n}\n  ngx-intl-tel-input .iti .dropdown-menu .iti__country-list .iti__country {\n  padding: 10px 16px;\n}\n  ngx-intl-tel-input .iti .dropdown-menu .iti__country-list .iti__country .iti__country-name {\n  font-size: 14px;\n  color: #0f0f11;\n}\n  ngx-intl-tel-input .iti .dropdown-menu .iti__country-list .iti__country .iti__dial-code {\n  font-size: 14px;\n  color: #556274;\n}\n  ngx-intl-tel-input .iti .dropdown-menu .iti__country-list .iti__country:hover {\n  background-color: #f3f6f8;\n}\n  .required-error .iti input {\n  border: 2px solid #e63d3d;\n  background-color: rgba(230, 61, 61, 0.05);\n}\n  .form-submitted .ngx-tel-wrapper.invalid {\n  border-color: #e63d3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC10ZWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFGRjtBQTRDSTtFQUNFLFdBQUE7QUF6Q047QUEwQ007RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUF4Q1I7QUEwQ007RUFDRSxZQUFBO0FBeENSO0FBeUNRO0VBQ0UsOEJBQUE7QUF2Q1Y7QUF3Q1U7RUFDRSxzQkFBQTtBQXRDWjtBQXVDWTtFQUNFLHNCQUFBO0FBckNkO0FBeUNRO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtBQXZDVjtBQTBDTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBeENSO0FBMENNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF4Q1I7QUF5Q1E7RUFDRSxtQkFBQTtBQXZDVjtBQXdDVTtFQUNFLGtCQUFBO0FBdENaO0FBdUNZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFyQ2Q7QUF1Q1k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXJDZDtBQXVDWTtFQUNFLHlCQUFBO0FBckNkO0FBbURHO0VBQ0MseUJBQUE7RUFDQSx5Q0NyR1c7QURvRGY7QUF1REk7RUFDRSxxQkM3R1U7QUR3RGhCIiwiZmlsZSI6Im5neC10ZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5uZ3gtdGVsLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5ZmE0YmI7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcblxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5lcnJvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBoc2xhKDIxOCwgNSUsIDQ1JSwgMC42KTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ubmd4LXRlbC1pbnB1dCB7XG4gIC8vJi5uZy1pbnZhbGlkIHtcbiAgLy8gIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuICAvL31cbn1cblxuOjpuZy1kZWVwIHtcbiAgLm5neC10ZWwtd3JhcHBlciB7XG4gICAgLy9jb2xvcjogIzU1NjI3NDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcbiAgICAvL2JvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIC8vYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAvL21heC1oZWlnaHQ6IDQ5cHg7XG5cbiAgICAvLyYuaW52YWxpZC50b3VjaGVkIHtcbiAgICAvL1x0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcbiAgICAvL1x0Lm5neC10ZWwtaW5wdXQge1xuICAgIC8vXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG4gICAgLy9cdH1cbiAgICAvL31cblxuICAgIC8vaW5wdXQge1xuICAgIC8vXHRoZWlnaHQ6IDEwMCU7XG4gICAgLy9cdHdpZHRoOiAxMDAlO1xuICAgIC8vXHRwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgLy9cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8vXHRib3gtc2hhZG93OiBub25lO1xuICAgIC8vXHRmb250LXNpemU6IDE0cHg7XG4gICAgLy9cdG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAvL1x0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgLy9cdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgLy9cbiAgICAvL1x0Ji5kaXNhYmxlZCB7XG4gICAgLy9cdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAvL1x0fVxuICAgIC8vfVxuICB9XG4gIG5neC1pbnRsLXRlbC1pbnB1dCB7XG4gICAgLml0aSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5uZ3gtdGVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjNTU2Mjc0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmY4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pdGlfX2ZsYWctY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLml0aV9fc2VsZWN0ZWQtZmxhZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGlfX3NlbGVjdGVkLWZsYWcge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2VsZWN0ZWQtZGlhbC1jb2RlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzU1NjI3NDtcbiAgICAgIH1cbiAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIC5pdGlfX2NvdW50cnktbGlzdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAuaXRpX19jb3VudHJ5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgICAgIC5pdGlfX2NvdW50cnktbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwZjBmMTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRpX19kaWFsLWNvZGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTU2Mjc0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2Zjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgLml0aSBpbnB1dCB7XG4gICAgLy8gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1yZWQtNTAwO1xuICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuICAgIC8vfVxuICB9XG5cblx0LnJlcXVpcmVkLWVycm9yIHtcblx0XHQuaXRpIHtcblx0XHRcdGlucHV0IHtcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgJGNvbG9yLXJlZC01MDA7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbiAgLmZvcm0tc3VibWl0dGVkIHtcbiAgICAubmd4LXRlbC13cmFwcGVyLmludmFsaWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcbiAgICAgIC8vLm5neC10ZWwtaW5wdXQge1xuICAgICAgLy9cdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG4gICAgICAvL31cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1ibGFjay05MDA6ICMwMDAwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMGYwZjExO1xuJGNvbG9yLWJsYWNrLTEwMDogIzJlMmUzNDtcbiRjb2xvci1ibGFjay01MDogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjYpO1xuXG4kY29sb3Itd2hpdGUtOTAwOiAjZmZmZmZmO1xuJGNvbG9yLXdoaXRlLTIwMDogI2UzZWFmMTtcbiRjb2xvci13aGl0ZS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1ibHVlLTUwMDogIzAwNWRmZjtcbiRjb2xvci1ibHVlLTEwMDogIzU5OTVmZTtcbiRjb2xvci1ibHVlLTUwOiAjZDJkZWZmO1xuXG4kY29sb3ItZ3JheS05MDA6ICMwZjBmMTE7XG4kY29sb3ItZ3JheS02MDA6ICMyMjIyMjQ7XG4kY29sb3ItZ3JheS01MDA6ICM1NTYyNzQ7XG4kY29sb3ItZ3JheS00MDA6ICM2YzcwNzc7XG4kY29sb3ItZ3JheS0zMDA6ICNhN2E4YWQ7XG4kY29sb3ItZ3JheS0yMDA6ICM5ZmE0YmI7XG4kY29sb3ItZ3JheS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1yZWQtNTAwOiAjZTYzZDNkO1xuJGNvbG9yLXJlZC01MDogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)("fadeInOut", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(":enter", [
                    // :enter is alias to 'void => *'
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 1 })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(":leave", [
                    // :leave is alias to '* => void'
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0 })),
                ]),
            ]),
        ] }, changeDetection: 0 });
B2bNgxTelComponent = B2bNgxTelComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], B2bNgxTelComponent);



/***/ }),

/***/ 47321:
/*!****************************************************!*\
  !*** ./projects/ngx-tel/src/lib/ngx-tel.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxTelModule": () => (/* binding */ B2bNgxTelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/ngx-tel.component */ 15931);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl-tel-input */ 68831);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);










class B2bNgxTelModule {
}
B2bNgxTelModule.ɵfac = function B2bNgxTelModule_Factory(t) { return new (t || B2bNgxTelModule)(); };
B2bNgxTelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxTelModule });
B2bNgxTelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__.B2bNgxInputModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule,
        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__.NgxIntlTelInputModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxTelModule, { declarations: [_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_8__.B2bNgxTelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__.B2bNgxInputModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectModule,
        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__.NgxIntlTelInputModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule], exports: [_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_8__.B2bNgxTelComponent] }); })();


/***/ }),

/***/ 84409:
/*!*****************************************************!*\
  !*** ./node_modules/ngx-mask/fesm2015/ngx-mask.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_CONFIG": () => (/* binding */ INITIAL_CONFIG),
/* harmony export */   "MaskApplierService": () => (/* binding */ MaskApplierService),
/* harmony export */   "MaskDirective": () => (/* binding */ MaskDirective),
/* harmony export */   "MaskPipe": () => (/* binding */ MaskPipe),
/* harmony export */   "MaskService": () => (/* binding */ MaskService),
/* harmony export */   "NEW_CONFIG": () => (/* binding */ NEW_CONFIG),
/* harmony export */   "NgxMaskModule": () => (/* binding */ NgxMaskModule),
/* harmony export */   "_configFactory": () => (/* binding */ _configFactory),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "initialConfig": () => (/* binding */ initialConfig),
/* harmony export */   "timeMasks": () => (/* binding */ timeMasks),
/* harmony export */   "withoutValidation": () => (/* binding */ withoutValidation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);





const config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ngx-mask config');
const NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('new ngx-mask config');
const INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('initial ngx-mask config');
const initialConfig = {
  suffix: '',
  prefix: '',
  thousandSeparator: ' ',
  decimalMarker: ['.', ','],
  clearIfNotMatch: false,
  showTemplate: false,
  showMaskTyped: false,
  placeHolderCharacter: '_',
  dropSpecialCharacters: true,
  hiddenInput: undefined,
  shownMaskExpression: '',
  separatorLimit: '',
  allowNegativeNumbers: false,
  validation: true,
  // eslint-disable-next-line @typescript-eslint/quotes
  specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
  leadZeroDateTime: false,
  triggerOnMaskChange: false,
  maskFilled: new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(),
  patterns: {
    '0': {
      pattern: new RegExp('\\d')
    },
    '9': {
      pattern: new RegExp('\\d'),
      optional: true
    },
    X: {
      pattern: new RegExp('\\d'),
      symbol: '*'
    },
    A: {
      pattern: new RegExp('[a-zA-Z0-9]')
    },
    S: {
      pattern: new RegExp('[a-zA-Z]')
    },
    U: {
      pattern: new RegExp('[A-Z]')
    },
    L: {
      pattern: new RegExp('[a-z]')
    },
    d: {
      pattern: new RegExp('\\d')
    },
    m: {
      pattern: new RegExp('\\d')
    },
    M: {
      pattern: new RegExp('\\d')
    },
    H: {
      pattern: new RegExp('\\d')
    },
    h: {
      pattern: new RegExp('\\d')
    },
    s: {
      pattern: new RegExp('\\d')
    }
  }
};
const timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
const withoutValidation = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'];

class MaskApplierService {
  constructor(_config) {
    this._config = _config;
    this.maskExpression = '';
    this.actualValue = '';
    this.shownMaskExpression = '';

    this._formatWithSeparators = (str, thousandSeparatorChar, decimalChars, precision) => {
      var _a, _b, _c;

      let x = [];
      let decimalChar = '';

      if (Array.isArray(decimalChars)) {
        const regExp = new RegExp(decimalChars.map(v => '[\\^$.|?*+()'.indexOf(v) >= 0 ? `\\${v}` : v).join('|'));
        x = str.split(regExp);
        decimalChar = (_b = (_a = str.match(regExp)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : '';
      } else {
        x = str.split(decimalChars);
        decimalChar = decimalChars;
      }

      const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : '';
      let res = (_c = x[0]) !== null && _c !== void 0 ? _c : '';
      const separatorLimit = this.separatorLimit.replace(/\s/g, '');

      if (separatorLimit && +separatorLimit) {
        if (res[0] === '-') {
          res = `-${res.slice(1, res.length).slice(0, separatorLimit.length)}`;
        } else {
          res = res.slice(0, separatorLimit.length);
        }
      }

      const rgx = /(\d+)(\d{3})/;

      while (thousandSeparatorChar && rgx.test(res)) {
        res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
      }

      if (precision === undefined) {
        return res + decimals;
      } else if (precision === 0) {
        return res;
      }

      return res + decimals.substring(0, precision + 1);
    };

    this.percentage = str => {
      return Number(str) >= 0 && Number(str) <= 100;
    };

    this.getPrecision = maskExpression => {
      const x = maskExpression.split('.');

      if (x.length > 1) {
        return Number(x[x.length - 1]);
      }

      return Infinity;
    };

    this.checkAndRemoveSuffix = inputValue => {
      var _a, _b, _c, _d;

      for (let i = ((_a = this.suffix) === null || _a === void 0 ? void 0 : _a.length) - 1; i >= 0; i--) {
        const substr = this.suffix.substring(i, (_b = this.suffix) === null || _b === void 0 ? void 0 : _b.length);

        if (inputValue.includes(substr) && i !== ((_c = this.suffix) === null || _c === void 0 ? void 0 : _c.length) - 1 && (i - 1 < 0 || !inputValue.includes(this.suffix.substring(i - 1, (_d = this.suffix) === null || _d === void 0 ? void 0 : _d.length)))) {
          return inputValue.replace(substr, '');
        }
      }

      return inputValue;
    };

    this.checkInputPrecision = (inputValue, precision, decimalMarker) => {
      var _a, _b, _c;

      if (precision < Infinity) {
        // TODO need think about decimalMarker
        if (Array.isArray(decimalMarker)) {
          const marker = decimalMarker.find(dm => dm !== this.thousandSeparator); // eslint-disable-next-line no-param-reassign

          decimalMarker = marker ? marker : decimalMarker[0];
        }

        const precisionRegEx = new RegExp(this._charToRegExpExpression(decimalMarker) + `\\d{${precision}}.*$`);
        const precisionMatch = (_a = inputValue.match(precisionRegEx)) !== null && _a !== void 0 ? _a : [];
        const precisionMatchLength = (_c = (_b = precisionMatch[0]) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0;

        if (precisionMatchLength - 1 > precision) {
          const diff = precisionMatchLength - 1 - precision; // eslint-disable-next-line no-param-reassign

          inputValue = inputValue.substring(0, inputValue.length - diff);
        }

        if (precision === 0 && this._compareOrIncludes(inputValue[inputValue.length - 1], decimalMarker, this.thousandSeparator)) {
          // eslint-disable-next-line no-param-reassign
          inputValue = inputValue.substring(0, inputValue.length - 1);
        }
      }

      return inputValue;
    };

    this._shift = new Set();
    this.clearIfNotMatch = this._config.clearIfNotMatch;
    this.dropSpecialCharacters = this._config.dropSpecialCharacters;
    this.maskSpecialCharacters = this._config.specialCharacters;
    this.maskAvailablePatterns = this._config.patterns;
    this.prefix = this._config.prefix;
    this.suffix = this._config.suffix;
    this.thousandSeparator = this._config.thousandSeparator;
    this.decimalMarker = this._config.decimalMarker;
    this.hiddenInput = this._config.hiddenInput;
    this.showMaskTyped = this._config.showMaskTyped;
    this.placeHolderCharacter = this._config.placeHolderCharacter;
    this.validation = this._config.validation;
    this.separatorLimit = this._config.separatorLimit;
    this.allowNegativeNumbers = this._config.allowNegativeNumbers;
    this.leadZeroDateTime = this._config.leadZeroDateTime;
  }

  applyMaskWithPattern(inputValue, maskAndPattern) {
    const [mask, customPattern] = maskAndPattern;
    this.customPattern = customPattern;
    return this.applyMask(inputValue, mask);
  }

  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false, // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

    if (!maskExpression || typeof inputValue !== 'string') {
      return '';
    }

    let cursor = 0;
    let result = '';
    let multi = false;
    let backspaceShift = false;
    let shift = 1;
    let stepBack = false;

    if (inputValue.slice(0, this.prefix.length) === this.prefix) {
      // eslint-disable-next-line no-param-reassign
      inputValue = inputValue.slice(this.prefix.length, inputValue.length);
    }

    if (!!this.suffix && (inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) > 0) {
      // eslint-disable-next-line no-param-reassign
      inputValue = this.checkAndRemoveSuffix(inputValue);
    }

    const inputArray = inputValue.toString().split('');

    if (maskExpression === 'IP') {
      const valuesIP = inputValue.split('.');
      this.ipError = this._validIP(valuesIP); // eslint-disable-next-line no-param-reassign

      maskExpression = '099.099.099.099';
    }

    const arr = [];

    for (let i = 0; i < inputValue.length; i++) {
      if ((_a = inputValue[i]) === null || _a === void 0 ? void 0 : _a.match('\\d')) {
        arr.push((_b = inputValue[i]) !== null && _b !== void 0 ? _b : '');
      }
    }

    if (maskExpression === 'CPF_CNPJ') {
      this.cpfCnpjError = arr.length !== 11 && arr.length !== 14;

      if (arr.length > 11) {
        // eslint-disable-next-line no-param-reassign
        maskExpression = '00.000.000/0000-00';
      } else {
        // eslint-disable-next-line no-param-reassign
        maskExpression = '000.000.000-00';
      }
    }

    if (maskExpression.startsWith('percent')) {
      if (inputValue.match('[a-z]|[A-Z]') || // eslint-disable-next-line no-useless-escape
      inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._stripToDecimal(inputValue);
        const precision = this.getPrecision(maskExpression); // eslint-disable-next-line no-param-reassign

        inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      }

      if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
        const base = inputValue.substring(0, inputValue.indexOf('.') - 1); // eslint-disable-next-line no-param-reassign

        inputValue = `${base}${inputValue.substring(inputValue.indexOf('.'), inputValue.length)}`;
      }

      if (this.percentage(inputValue)) {
        result = inputValue;
      } else {
        result = inputValue.substring(0, inputValue.length - 1);
      }
    } else if (maskExpression.startsWith('separator')) {
      if (inputValue.match('[wа-яА-Я]') || inputValue.match('[ЁёА-я]') || inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\]:";<>.?/]/) || inputValue.match('[^A-Za-z0-9,]')) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._stripToDecimal(inputValue);
      } // eslint-disable-next-line no-param-reassign


      inputValue = inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.thousandSeparator && !this._compareOrIncludes(inputValue[1], this.decimalMarker, this.thousandSeparator) && !backspaced ? inputValue.slice(0, inputValue.length - 1) : inputValue;

      if (backspaced) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._compareOrIncludes(inputValue[inputValue.length - 1], this.decimalMarker, this.thousandSeparator) ? inputValue.slice(0, inputValue.length - 1) : inputValue;
      } // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
      //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK


      const thousandSeparatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);

      let invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(thousandSeparatorCharEscaped, ''); //.replace(decimalMarkerEscaped, '');

      if (Array.isArray(this.decimalMarker)) {
        for (const marker of this.decimalMarker) {
          invalidChars = invalidChars.replace(this._charToRegExpExpression(marker), '');
        }
      } else {
        invalidChars = invalidChars.replace(this._charToRegExpExpression(this.decimalMarker), '');
      }

      const invalidCharRegexp = new RegExp('[' + invalidChars + ']');

      if (inputValue.match(invalidCharRegexp) || inputValue.length === 1 && this._compareOrIncludes(inputValue, this.decimalMarker, this.thousandSeparator)) {
        // eslint-disable-next-line no-param-reassign
        inputValue = inputValue.substring(0, inputValue.length - 1);
      }

      const precision = this.getPrecision(maskExpression); // eslint-disable-next-line no-param-reassign

      inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      const strForSep = inputValue.replace(new RegExp(thousandSeparatorCharEscaped, 'g'), '');
      result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
      const commaShift = result.indexOf(',') - inputValue.indexOf(',');
      const shiftStep = result.length - inputValue.length;

      if (shiftStep > 0 && result[position] !== ',') {
        backspaceShift = true;
        let _shift = 0;

        do {
          this._shift.add(position + _shift);

          _shift++;
        } while (_shift < shiftStep);
      } else if (commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3) || !(result.indexOf('.') >= position && position > 3) && shiftStep <= 0) {
        this._shift.clear();

        backspaceShift = true;
        shift = shiftStep; // eslint-disable-next-line no-param-reassign

        position += shiftStep;

        this._shift.add(position);
      } else {
        this._shift.clear();
      }
    } else {
      for ( // eslint-disable-next-line
      let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = (_c = inputArray[i]) !== null && _c !== void 0 ? _c : '') {
        if (cursor === maskExpression.length) {
          break;
        }

        if (this._checkSymbolMask(inputSymbol, (_d = maskExpression[cursor]) !== null && _d !== void 0 ? _d : '') && maskExpression[cursor + 1] === '?') {
          result += inputSymbol;
          cursor += 2;
        } else if (maskExpression[cursor + 1] === '*' && multi && this._checkSymbolMask(inputSymbol, (_e = maskExpression[cursor + 2]) !== null && _e !== void 0 ? _e : '')) {
          result += inputSymbol;
          cursor += 3;
          multi = false;
        } else if (this._checkSymbolMask(inputSymbol, (_f = maskExpression[cursor]) !== null && _f !== void 0 ? _f : '') && maskExpression[cursor + 1] === '*') {
          result += inputSymbol;
          multi = true;
        } else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, (_g = maskExpression[cursor + 2]) !== null && _g !== void 0 ? _g : '')) {
          result += inputSymbol;
          cursor += 3;
        } else if (this._checkSymbolMask(inputSymbol, (_h = maskExpression[cursor]) !== null && _h !== void 0 ? _h : '')) {
          if (maskExpression[cursor] === 'H') {
            if (Number(inputSymbol) > 2) {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          if (maskExpression[cursor] === 'h') {
            if (result === '2' && Number(inputSymbol) > 3) {
              cursor += 1;
              i--;
              continue;
            }
          }

          if (maskExpression[cursor] === 'm') {
            if (Number(inputSymbol) > 5) {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          if (maskExpression[cursor] === 's') {
            if (Number(inputSymbol) > 5) {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          const daysCount = 31;

          if (maskExpression[cursor] === 'd') {
            if (Number(inputSymbol) > 3 && this.leadZeroDateTime || Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          if (maskExpression[cursor] === 'M') {
            const monthsCount = 12; // mask without day

            const withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for input

            const day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') && (inputValue[cursor - 2] === '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/' || inputValue[cursor] === '/' || inputValue[cursor - 3] === '/' && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/' || inputValue[cursor - 1] === '/'); // 10<day<31 && month<12 for input

            const day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] === '/' && (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for paste whole data

            const day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && !inputValue.slice(cursor - 2, cursor).includes('/') && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount; // 10<day<31 && month<12 for paste whole data

            const day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] !== '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;

            if (Number(inputSymbol) > 1 && this.leadZeroDateTime || withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
              cursor += 1;

              this._shiftStep(maskExpression, cursor, inputArray.length);

              i--;

              if (this.leadZeroDateTime) {
                result += '0';
              }

              continue;
            }
          }

          result += inputSymbol;
          cursor++;
        } else if (inputSymbol === ' ' && maskExpression[cursor] === ' ') {
          result += inputSymbol;
          cursor++;
        } else if (this.maskSpecialCharacters.indexOf((_j = maskExpression[cursor]) !== null && _j !== void 0 ? _j : '') !== -1) {
          result += maskExpression[cursor];
          cursor++;

          this._shiftStep(maskExpression, cursor, inputArray.length);

          i--;
        } else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 && this.maskAvailablePatterns[(_k = maskExpression[cursor]) !== null && _k !== void 0 ? _k : ''] && ((_m = this.maskAvailablePatterns[(_l = maskExpression[cursor]) !== null && _l !== void 0 ? _l : '']) === null || _m === void 0 ? void 0 : _m.optional)) {
          if (!!inputArray[cursor] && maskExpression !== '099.099.099.099' && maskExpression !== '000.000.000-00' && maskExpression !== '00.000.000/0000-00' && !maskExpression.match(/^9+\.0+$/)) {
            result += inputArray[cursor];
          }

          cursor++;
          i--;
        } else if (this.maskExpression[cursor + 1] === '*' && this._findSpecialChar((_o = this.maskExpression[cursor + 2]) !== null && _o !== void 0 ? _o : '') && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.maskExpression[cursor + 1] === '?' && this._findSpecialChar((_p = this.maskExpression[cursor + 2]) !== null && _p !== void 0 ? _p : '') && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
          stepBack = true;
        }
      }
    }

    if (result.length + 1 === maskExpression.length && this.maskSpecialCharacters.indexOf((_q = maskExpression[maskExpression.length - 1]) !== null && _q !== void 0 ? _q : '') !== -1) {
      result += maskExpression[maskExpression.length - 1];
    }

    let newPosition = position + 1;

    while (this._shift.has(newPosition)) {
      shift++;
      newPosition++;
    }

    let actualShift = justPasted && !maskExpression.startsWith('separator') ? cursor : this._shift.has(position) ? shift : 0;

    if (stepBack) {
      actualShift--;
    }

    cb(actualShift, backspaceShift);

    if (shift < 0) {
      this._shift.clear();
    }

    let onlySpecial = false;

    if (backspaced) {
      onlySpecial = inputArray.every(char => this.maskSpecialCharacters.includes(char));
    }

    let res = `${this.prefix}${onlySpecial ? '' : result}${this.suffix}`;

    if (result.length === 0) {
      res = `${this.prefix}${result}`;
    }

    return res;
  }

  _findSpecialChar(inputSymbol) {
    return this.maskSpecialCharacters.find(val => val === inputSymbol);
  }

  _checkSymbolMask(inputSymbol, maskSymbol) {
    var _a, _b, _c;

    this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
    return (_c = ((_a = this.maskAvailablePatterns[maskSymbol]) === null || _a === void 0 ? void 0 : _a.pattern) && ((_b = this.maskAvailablePatterns[maskSymbol]) === null || _b === void 0 ? void 0 : _b.pattern.test(inputSymbol))) !== null && _c !== void 0 ? _c : false;
  }

  _stripToDecimal(str) {
    return str.split('').filter((i, idx) => {
      const isDecimalMarker = typeof this.decimalMarker === 'string' ? i === this.decimalMarker : // TODO (inepipenko) use utility type
      this.decimalMarker.includes(i);
      return i.match('^-?\\d') || i === this.thousandSeparator || isDecimalMarker || i === '-' && idx === 0 && this.allowNegativeNumbers;
    }).join('');
  }

  _charToRegExpExpression(char) {
    // if (Array.isArray(char)) {
    // 	return char.map((v) => ('[\\^$.|?*+()'.indexOf(v) >= 0 ? `\\${v}` : v)).join('|');
    // }
    if (char) {
      const charsToEscape = '[\\^$.|?*+()';
      return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? `\\${char}` : char;
    }

    return char;
  }

  _shiftStep(maskExpression, cursor, inputLength) {
    const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputLength : cursor;

    this._shift.add(shiftStep + this.prefix.length || 0);
  }

  _compareOrIncludes(value, comparedValue, excludedValue) {
    return Array.isArray(comparedValue) ? comparedValue.filter(v => v !== excludedValue).includes(value) : value === comparedValue;
  }

  _validIP(valuesIP) {
    return !(valuesIP.length === 4 && !valuesIP.some((value, index) => {
      if (valuesIP.length !== index + 1) {
        return value === '' || Number(value) > 255;
      }

      return value === '' || Number(value.substring(0, 3)) > 255;
    }));
  }

}

MaskApplierService.ɵfac = function MaskApplierService_Factory(t) {
  return new (t || MaskApplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](config));
};

MaskApplierService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MaskApplierService,
  factory: MaskApplierService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskApplierService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [config]
      }]
    }];
  }, null);
})();

class MaskService extends MaskApplierService {
  constructor(document, _config, _elementRef, _renderer) {
    super(_config);
    this.document = document;
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.maskExpression = '';
    this.isNumberValue = false;
    this.placeHolderCharacter = '_';
    this.maskIsShown = '';
    this.selStart = null;
    this.selEnd = null;
    /**
     * Whether we are currently in writeValue function, in this case when applying the mask we don't want to trigger onChange function,
     * since writeValue should be a one way only process of writing the DOM value based on the Angular model value.
     */

    this.writingValue = false;
    this.maskChanged = false;
    this.triggerOnMaskChange = false; // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any

    this.onChange = _ => {};
  } // eslint-disable-next-line complexity


  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false, // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    var _a;

    if (!maskExpression) {
      return inputValue !== this.actualValue ? this.actualValue : inputValue;
    }

    this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';

    if (this.maskExpression === 'IP' && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || '#');
    }

    if (this.maskExpression === 'CPF_CNPJ' && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || '#');
    }

    if (!inputValue && this.showMaskTyped) {
      this.formControlResult(this.prefix);
      return this.prefix + this.maskIsShown;
    }

    const getSymbol = !!inputValue && typeof this.selStart === 'number' ? (_a = inputValue[this.selStart]) !== null && _a !== void 0 ? _a : '' : '';
    let newInputValue = '';

    if (this.hiddenInput !== undefined && !this.writingValue) {
      let actualResult = this.actualValue.split(''); // eslint-disable  @typescript-eslint/no-unused-expressions
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions

      inputValue !== '' && actualResult.length ? typeof this.selStart === 'number' && typeof this.selEnd === 'number' ? inputValue.length > actualResult.length ? actualResult.splice(this.selStart, 0, getSymbol) : inputValue.length < actualResult.length ? actualResult.length - inputValue.length === 1 ? actualResult.splice(this.selStart - 1, 1) : actualResult.splice(this.selStart, this.selEnd - this.selStart) : null : null : actualResult = [];

      if (this.showMaskTyped) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this.removeMask(inputValue);
      } // eslint-enable  @typescript-eslint/no-unused-expressions


      newInputValue = this.actualValue.length && actualResult.length <= inputValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
    }

    if (this.showMaskTyped) {
      // eslint-disable-next-line no-param-reassign
      inputValue = this.removeMask(inputValue);
    }

    newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
    const result = super.applyMask(newInputValue, maskExpression, position, justPasted, backspaced, cb);
    this.actualValue = this.getActualValue(result); // handle some separator implications:
    // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot

    if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
      this.decimalMarker = ',';
    } // b) remove decimal marker from list of special characters to mask


    if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
      this.maskSpecialCharacters = this.maskSpecialCharacters.filter(item => !this._compareOrIncludes(item, this.decimalMarker, this.thousandSeparator) //item !== this.decimalMarker, // !
      );
    }

    this.formControlResult(result);

    if (!this.showMaskTyped) {
      if (this.hiddenInput) {
        return result && result.length ? this.hideInput(result, this.maskExpression) : result;
      }

      return result;
    }

    const resLen = result.length;
    const prefNmask = this.prefix + this.maskIsShown;

    if (this.maskExpression.includes('H')) {
      const countSkipedSymbol = this._numberSkipedSymbols(result);

      return result + prefNmask.slice(resLen + countSkipedSymbol);
    } else if (this.maskExpression === 'IP' || this.maskExpression === 'CPF_CNPJ') {
      return result + prefNmask;
    }

    return result + prefNmask.slice(resLen);
  } // get the number of characters that were shifted


  _numberSkipedSymbols(value) {
    const regex = /(^|\D)(\d\D)/g;
    let match = regex.exec(value);
    let countSkipedSymbol = 0;

    while (match != null) {
      countSkipedSymbol += 1;
      match = regex.exec(value);
    }

    return countSkipedSymbol;
  }

  applyValueChanges(position, justPasted, backspaced, // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    const formElement = this._elementRef.nativeElement;
    formElement.value = this.applyMask(formElement.value, this.maskExpression, position, justPasted, backspaced, cb);

    if (formElement === this._getActiveElement()) {
      return;
    }

    this.clearIfNotMatchFn();
  }

  hideInput(inputValue, maskExpression) {
    return inputValue.split('').map((curr, index) => {
      var _a, _b, _c, _d, _e;

      if (this.maskAvailablePatterns && this.maskAvailablePatterns[(_a = maskExpression[index]) !== null && _a !== void 0 ? _a : ''] && ((_c = this.maskAvailablePatterns[(_b = maskExpression[index]) !== null && _b !== void 0 ? _b : '']) === null || _c === void 0 ? void 0 : _c.symbol)) {
        return (_e = this.maskAvailablePatterns[(_d = maskExpression[index]) !== null && _d !== void 0 ? _d : '']) === null || _e === void 0 ? void 0 : _e.symbol;
      }

      return curr;
    }).join('');
  } // this function is not necessary, it checks result against maskExpression


  getActualValue(res) {
    const compare = res.split('').filter((symbol, i) => {
      var _a;

      const maskChar = (_a = this.maskExpression[i]) !== null && _a !== void 0 ? _a : '';
      return this._checkSymbolMask(symbol, maskChar) || this.maskSpecialCharacters.includes(maskChar) && symbol === maskChar;
    });

    if (compare.join('') === res) {
      return compare.join('');
    }

    return res;
  }

  shiftTypedSymbols(inputValue) {
    let symbolToReplace = '';
    const newInputValue = inputValue && inputValue.split('').map((currSymbol, index) => {
      var _a;

      if (this.maskSpecialCharacters.includes((_a = inputValue[index + 1]) !== null && _a !== void 0 ? _a : '') && inputValue[index + 1] !== this.maskExpression[index + 1]) {
        symbolToReplace = currSymbol;
        return inputValue[index + 1];
      }

      if (symbolToReplace.length) {
        const replaceSymbol = symbolToReplace;
        symbolToReplace = '';
        return replaceSymbol;
      }

      return currSymbol;
    }) || [];
    return newInputValue.join('');
  }
  /**
   * Convert number value to string
   * 3.1415 -> '3.1415'
   * 1e-7 -> '0.0000001'
   */


  numberToString(value) {
    if (!value && value !== 0) {
      return String(value);
    }

    return Number(value).toLocaleString('fullwide', {
      useGrouping: false,
      maximumFractionDigits: 20
    });
  }

  showMaskInInput(inputVal) {
    if (this.showMaskTyped && !!this.shownMaskExpression) {
      if (this.maskExpression.length !== this.shownMaskExpression.length) {
        throw new Error('Mask expression must match mask placeholder length');
      } else {
        return this.shownMaskExpression;
      }
    } else if (this.showMaskTyped) {
      if (inputVal) {
        if (this.maskExpression === 'IP') {
          return this._checkForIp(inputVal);
        }

        if (this.maskExpression === 'CPF_CNPJ') {
          return this._checkForCpfCnpj(inputVal);
        }
      }

      return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
    }

    return '';
  }

  clearIfNotMatchFn() {
    const formElement = this._elementRef.nativeElement;

    if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== formElement.value.replace(/_/g, '').length) {
      this.formElementProperty = ['value', ''];
      this.applyMask(formElement.value, this.maskExpression);
    }
  }

  set formElementProperty([name, value]) {
    Promise.resolve().then(() => this._renderer.setProperty(this._elementRef.nativeElement, name, value));
  }

  checkSpecialCharAmount(mask) {
    const chars = mask.split('').filter(item => this._findSpecialChar(item));
    return chars.length;
  }

  removeMask(inputValue) {
    return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.maskSpecialCharacters.concat('_').concat(this.placeHolderCharacter));
  }

  _checkForIp(inputVal) {
    var _a;

    if (inputVal === '#') {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }

    const arr = [];

    for (let i = 0; i < inputVal.length; i++) {
      const value = (_a = inputVal[i]) !== null && _a !== void 0 ? _a : '';

      if (!value) {
        continue;
      }

      if (value.match('\\d')) {
        arr.push(value);
      }
    }

    if (arr.length <= 3) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }

    if (arr.length > 3 && arr.length <= 6) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }

    if (arr.length > 6 && arr.length <= 9) {
      return this.placeHolderCharacter;
    }

    if (arr.length > 9 && arr.length <= 12) {
      return '';
    }

    return '';
  }

  _checkForCpfCnpj(inputVal) {
    var _a;

    const cpf = `${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    const cnpj = `${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;

    if (inputVal === '#') {
      return cpf;
    }

    const arr = [];

    for (let i = 0; i < inputVal.length; i++) {
      const value = (_a = inputVal[i]) !== null && _a !== void 0 ? _a : '';

      if (!value) {
        continue;
      }

      if (value.match('\\d')) {
        arr.push(value);
      }
    }

    if (arr.length <= 3) {
      return cpf.slice(arr.length, cpf.length);
    }

    if (arr.length > 3 && arr.length <= 6) {
      return cpf.slice(arr.length + 1, cpf.length);
    }

    if (arr.length > 6 && arr.length <= 9) {
      return cpf.slice(arr.length + 2, cpf.length);
    }

    if (arr.length > 9 && arr.length < 11) {
      return cpf.slice(arr.length + 3, cpf.length);
    }

    if (arr.length === 11) {
      return '';
    }

    if (arr.length === 12) {
      if (inputVal.length === 17) {
        return cnpj.slice(16, cnpj.length);
      }

      return cnpj.slice(15, cnpj.length);
    }

    if (arr.length > 12 && arr.length <= 14) {
      return cnpj.slice(arr.length + 4, cnpj.length);
    }

    return '';
  }
  /**
   * Recursively determine the current active element by navigating the Shadow DOM until the Active Element is found.
   */


  _getActiveElement(document = this.document) {
    var _a;

    const shadowRootEl = (_a = document === null || document === void 0 ? void 0 : document.activeElement) === null || _a === void 0 ? void 0 : _a.shadowRoot;

    if (!(shadowRootEl === null || shadowRootEl === void 0 ? void 0 : shadowRootEl.activeElement)) {
      return document.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  /**
   * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
   * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
   * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
   * model value too. Therefore, we don't trigger onChange in this scenario.
   * @param inputValue the current form input value
   */


  formControlResult(inputValue) {
    if (this.writingValue || !this.triggerOnMaskChange && this.maskChanged) {
      this.maskChanged = false;
      return;
    }

    if (Array.isArray(this.dropSpecialCharacters)) {
      this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters)));
    } else if (this.dropSpecialCharacters) {
      this.onChange(this._toNumber(this._checkSymbols(inputValue)));
    } else {
      this.onChange(this._removeSuffix(inputValue));
    }
  }

  _toNumber(value) {
    if (!this.isNumberValue || value === '') {
      return value;
    }

    const num = Number(value);
    return Number.isNaN(num) ? value : num;
  }

  _removeMask(value, specialCharactersForRemove) {
    return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
  }

  _removePrefix(value) {
    if (!this.prefix) {
      return value;
    }

    return value ? value.replace(this.prefix, '') : value;
  }

  _removeSuffix(value) {
    if (!this.suffix) {
      return value;
    }

    return value ? value.replace(this.suffix, '') : value;
  }

  _retrieveSeparatorValue(result) {
    return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
  }

  _regExpForRemove(specialCharactersForRemove) {
    return new RegExp(specialCharactersForRemove.map(item => `\\${item}`).join('|'), 'gi');
  }

  _replaceDecimalMarkerToDot(value) {
    const markers = Array.isArray(this.decimalMarker) ? this.decimalMarker : [this.decimalMarker];
    return value.replace(this._regExpForRemove(markers), '.');
  }

  _checkSymbols(result) {
    if (result === '') {
      return result;
    }

    const separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);

    const separatorValue = this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(result));

    if (!this.isNumberValue) {
      return separatorValue;
    }

    if (separatorPrecision) {
      if (result === this.decimalMarker) {
        return null;
      }

      return this._checkPrecision(this.maskExpression, separatorValue);
    } else {
      return Number(separatorValue);
    }
  } // TODO should think about helpers or separting decimal precision to own property


  _retrieveSeparatorPrecision(maskExpretion) {
    const matcher = maskExpretion.match(new RegExp(`^separator\\.([^d]*)`));
    return matcher ? Number(matcher[1]) : null;
  }

  _checkPrecision(separatorExpression, separatorValue) {
    if (separatorExpression.indexOf('2') > 0) {
      return Number(separatorValue).toFixed(2);
    }

    return Number(separatorValue);
  }

}

MaskService.ɵfac = function MaskService_Factory(t) {
  return new (t || MaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](config), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

MaskService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MaskService,
  factory: MaskService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [config]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, null);
})();

class MaskDirective {
  constructor(document, _maskService, _config) {
    this.document = document;
    this._maskService = _maskService;
    this._config = _config; // eslint-disable-next-line @angular-eslint/no-input-rename

    this.maskExpression = '';
    this.specialCharacters = [];
    this.patterns = {};
    this.prefix = '';
    this.suffix = '';
    this.thousandSeparator = ' ';
    this.decimalMarker = '.';
    this.dropSpecialCharacters = null;
    this.hiddenInput = null;
    this.showMaskTyped = null;
    this.placeHolderCharacter = null;
    this.shownMaskExpression = null;
    this.showTemplate = null;
    this.clearIfNotMatch = null;
    this.validation = null;
    this.separatorLimit = null;
    this.allowNegativeNumbers = null;
    this.leadZeroDateTime = null;
    this.triggerOnMaskChange = null;
    this.maskFilled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._maskValue = '';
    this._position = null;
    this._maskExpressionArray = [];
    this._justPasted = false; // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any

    this.onChange = _ => {}; // eslint-disable-next-line @typescript-eslint/no-empty-function


    this.onTouch = () => {};
  }

  ngOnChanges(changes) {
    const {
      maskExpression,
      specialCharacters,
      patterns,
      prefix,
      suffix,
      thousandSeparator,
      decimalMarker,
      dropSpecialCharacters,
      hiddenInput,
      showMaskTyped,
      placeHolderCharacter,
      shownMaskExpression,
      showTemplate,
      clearIfNotMatch,
      validation,
      separatorLimit,
      allowNegativeNumbers,
      leadZeroDateTime,
      triggerOnMaskChange
    } = changes;

    if (maskExpression) {
      if (maskExpression.currentValue !== maskExpression.previousValue && !maskExpression.firstChange) {
        this._maskService.maskChanged = true;
      }

      if (maskExpression.currentValue && maskExpression.currentValue.split('||').length > 1) {
        this._maskExpressionArray = maskExpression.currentValue.split('||').sort((a, b) => {
          return a.length - b.length;
        });

        this._setMask();
      } else {
        this._maskExpressionArray = [];
        this._maskValue = maskExpression.currentValue || '';
        this._maskService.maskExpression = this._maskValue;
      }
    }

    if (specialCharacters) {
      if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
        return;
      } else {
        this._maskService.maskSpecialCharacters = specialCharacters.currentValue || [];
      }
    } // Only overwrite the mask available patterns if a pattern has actually been passed in


    if (patterns && patterns.currentValue) {
      this._maskService.maskAvailablePatterns = patterns.currentValue;
    }

    if (prefix) {
      this._maskService.prefix = prefix.currentValue;
    }

    if (suffix) {
      this._maskService.suffix = suffix.currentValue;
    }

    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator.currentValue;
    }

    if (decimalMarker) {
      this._maskService.decimalMarker = decimalMarker.currentValue;
    }

    if (dropSpecialCharacters) {
      this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
    }

    if (hiddenInput) {
      this._maskService.hiddenInput = hiddenInput.currentValue;
    }

    if (showMaskTyped) {
      this._maskService.showMaskTyped = showMaskTyped.currentValue;
    }

    if (placeHolderCharacter) {
      this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
    }

    if (shownMaskExpression) {
      this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
    }

    if (showTemplate) {
      this._maskService.showTemplate = showTemplate.currentValue;
    }

    if (clearIfNotMatch) {
      this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
    }

    if (validation) {
      this._maskService.validation = validation.currentValue;
    }

    if (separatorLimit) {
      this._maskService.separatorLimit = separatorLimit.currentValue;
    }

    if (allowNegativeNumbers) {
      this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;

      if (this._maskService.allowNegativeNumbers) {
        this._maskService.maskSpecialCharacters = this._maskService.maskSpecialCharacters.filter(c => c !== '-');
      }
    }

    if (leadZeroDateTime) {
      this._maskService.leadZeroDateTime = leadZeroDateTime.currentValue;
    }

    if (triggerOnMaskChange) {
      this._maskService.triggerOnMaskChange = triggerOnMaskChange.currentValue;
    }

    this._applyMask();
  } // eslint-disable-next-line complexity


  validate({
    value
  }) {
    var _a, _b;

    if (!this._maskService.validation || !this._maskValue) {
      return null;
    }

    if (this._maskService.ipError) {
      return this._createValidationError(value);
    }

    if (this._maskService.cpfCnpjError) {
      return this._createValidationError(value);
    }

    if (this._maskValue.startsWith('separator')) {
      return null;
    }

    if (withoutValidation.includes(this._maskValue)) {
      return null;
    }

    if (this._maskService.clearIfNotMatch) {
      return null;
    }

    if (timeMasks.includes(this._maskValue)) {
      return this._validateTime(value);
    }

    if (value && value.toString().length >= 1) {
      let counterOfOpt = 0;

      for (const key in this._maskService.maskAvailablePatterns) {
        if ((_a = this._maskService.maskAvailablePatterns[key]) === null || _a === void 0 ? void 0 : _a.optional) {
          if (this._maskValue.indexOf(key) !== this._maskValue.lastIndexOf(key)) {
            const opt = this._maskValue.split('').filter(i => i === key).join('');

            counterOfOpt += opt.length;
          } else if (this._maskValue.indexOf(key) !== -1) {
            counterOfOpt++;
          }

          if (this._maskValue.indexOf(key) !== -1 && value.toString().length >= this._maskValue.indexOf(key)) {
            return null;
          }

          if (counterOfOpt === this._maskValue.length) {
            return null;
          }
        }
      }

      if (this._maskValue.indexOf('{') === 1 && value.toString().length === this._maskValue.length + Number(((_b = this._maskValue.split('{')[1]) !== null && _b !== void 0 ? _b : '').split('}')[0]) - 4) {
        return null;
      }

      if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
        return null;
      } else if (this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*') || this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?') || this._maskValue.indexOf('{') === 1) {
        return this._createValidationError(value);
      }

      if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
        const length = this._maskService.dropSpecialCharacters ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt : this._maskValue.length - counterOfOpt;

        if (value.toString().length < length) {
          return this._createValidationError(value);
        }
      }
    }

    if (value) {
      this.maskFilled.emit();
      return null;
    }

    return null;
  }

  onPaste() {
    this._justPasted = true;
  }

  onModelChange(value) {
    // on form reset we need to update the actualValue
    if ((value === '' || value === null || value === undefined) && this._maskService.actualValue) {
      this._maskService.actualValue = this._maskService.getActualValue('');
    }
  }

  onInput(e) {
    const el = e.target;
    this._inputValue = el.value;

    this._setMask();

    if (!this._maskValue) {
      this.onChange(el.value);
      return;
    }

    const position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
    let caretShift = 0;
    let backspaceShift = false;

    this._maskService.applyValueChanges(position, this._justPasted, this._code === 'Backspace' || this._code === 'Delete', (shift, _backspaceShift) => {
      this._justPasted = false;
      caretShift = shift;
      backspaceShift = _backspaceShift;
    }); // only set the selection if the element is active


    if (this._getActiveElement() !== el) {
      return;
    }

    this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
    let positionToApply = this._position ? this._inputValue.length + position + caretShift : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);

    if (positionToApply > this._getActualInputLength()) {
      positionToApply = this._getActualInputLength();
    }

    if (positionToApply < 0) {
      positionToApply = 0;
    }

    el.setSelectionRange(positionToApply, positionToApply);
    this._position = null;
  }

  onBlur() {
    if (this._maskValue) {
      this._maskService.clearIfNotMatchFn();
    }

    this.onTouch();
  }

  onClick(e) {
    if (!this._maskValue) {
      return;
    }

    const el = e.target;
    const posStart = 0;
    const posEnd = 0;

    if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length && // eslint-disable-next-line
    e.keyCode !== 38) {
      if (this._maskService.showMaskTyped) {
        // We are showing the mask in the input
        this._maskService.maskIsShown = this._maskService.showMaskInInput();

        if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
          // the input ONLY contains the mask, so position the cursor at the start
          el.focus();
          el.setSelectionRange(posStart, posEnd);
        } else {
          // the input contains some characters already
          if (el.selectionStart > this._maskService.actualValue.length) {
            // if the user clicked beyond our value's length, position the cursor at the end of our value
            el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
          }
        }
      }
    }

    const nextValue = el && (!el.value || el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value);
    /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */

    if (el && el.value !== nextValue) {
      el.value = nextValue;
    }
    /** fix of cursor position with prefix when mouse click occur */


    if (el && (el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
      el.selectionStart = this._maskService.prefix.length;
      return;
    }
    /** select only inserted text */


    if (el && el.selectionEnd > this._getActualInputLength()) {
      el.selectionEnd = this._getActualInputLength();
    }
  } // eslint-disable-next-line complexity


  onKeyDown(e) {
    var _a, _b;

    if (!this._maskValue) {
      return;
    }

    this._code = e.code ? e.code : e.key;
    const el = e.target;
    this._inputValue = el.value;

    this._setMask();

    if (e.keyCode === 38) {
      e.preventDefault();
    }

    if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
      if (e.keyCode === 8 && el.value.length === 0) {
        el.selectionStart = el.selectionEnd;
      }

      if (e.keyCode === 8 && el.selectionStart !== 0) {
        // If specialChars is false, (shouldn't ever happen) then set to the defaults
        this.specialCharacters = ((_a = this.specialCharacters) === null || _a === void 0 ? void 0 : _a.length) ? this.specialCharacters : this._config.specialCharacters;

        if (this.prefix.length > 1 && el.selectionStart <= this.prefix.length) {
          el.setSelectionRange(this.prefix.length, el.selectionEnd);
        } else {
          if (this._inputValue.length !== el.selectionStart && el.selectionStart !== 1) {
            while (this.specialCharacters.includes(((_b = this._inputValue[el.selectionStart - 1]) !== null && _b !== void 0 ? _b : '').toString()) && (this.prefix.length >= 1 && el.selectionStart > this.prefix.length || this.prefix.length === 0)) {
              el.setSelectionRange(el.selectionStart - 1, el.selectionEnd);
            }
          }
        }
      }

      this.checkSelectionOnDeletion(el);

      if (this._maskService.prefix.length && el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
        e.preventDefault();
      }

      const cursorStart = el.selectionStart;

      if (e.keyCode === 8 && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
        this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;

        this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
      }
    }

    if (!!this.suffix && this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
      el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
    } else if (e.keyCode === 65 && e.ctrlKey || e.keyCode === 65 && e.metaKey // Cmd + A (Mac)
    ) {
      el.setSelectionRange(0, this._getActualInputLength());
      e.preventDefault();
    }

    this._maskService.selStart = el.selectionStart;
    this._maskService.selEnd = el.selectionEnd;
  }
  /** It writes the value in the input */


  writeValue(inputValue) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (typeof inputValue === 'object' && inputValue !== null && 'value' in inputValue) {
        if ('disable' in inputValue) {
          this.setDisabledState(Boolean(inputValue.disable));
        } // eslint-disable-next-line no-param-reassign


        inputValue = inputValue.value;
      }

      if (typeof inputValue === 'number' || this._maskValue.startsWith('separator')) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._maskService.numberToString(inputValue);

        if (!Array.isArray(this.decimalMarker)) {
          // eslint-disable-next-line no-param-reassign
          inputValue = this.decimalMarker !== '.' ? inputValue.replace('.', this.decimalMarker) : inputValue;
        }

        this._maskService.isNumberValue = true;
      }

      if (typeof inputValue !== 'string') {
        // eslint-disable-next-line no-param-reassign
        inputValue = '';
      }

      this._inputValue = inputValue;

      this._setMask();

      if (inputValue && this._maskService.maskExpression || this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)) {
        // Let the service we know we are writing value so that triggering onChange function won't happen during applyMask
        this._maskService.writingValue = true;
        this._maskService.formElementProperty = ['value', this._maskService.applyMask(inputValue, this._maskService.maskExpression)]; // Let the service know we've finished writing value

        this._maskService.writingValue = false;
      } else {
        this._maskService.formElementProperty = ['value', inputValue];
      }

      this._inputValue = inputValue;
    });
  }

  registerOnChange(fn) {
    this._maskService.onChange = this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  _getActiveElement(document = this.document) {
    var _a;

    const shadowRootEl = (_a = document === null || document === void 0 ? void 0 : document.activeElement) === null || _a === void 0 ? void 0 : _a.shadowRoot;

    if (!(shadowRootEl === null || shadowRootEl === void 0 ? void 0 : shadowRootEl.activeElement)) {
      return document.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }

  checkSelectionOnDeletion(el) {
    el.selectionStart = Math.min(Math.max(this.prefix.length, el.selectionStart), this._inputValue.length - this.suffix.length);
    el.selectionEnd = Math.min(Math.max(this.prefix.length, el.selectionEnd), this._inputValue.length - this.suffix.length);
  }
  /** It disables the input element */


  setDisabledState(isDisabled) {
    this._maskService.formElementProperty = ['disabled', isDisabled];
  }

  _repeatPatternSymbols(maskExp) {
    return maskExp.match(/{[0-9]+}/) && maskExp.split('').reduce((accum, currVal, index) => {
      this._start = currVal === '{' ? index : this._start;

      if (currVal !== '}') {
        return this._maskService._findSpecialChar(currVal) ? accum + currVal : accum;
      }

      this._end = index;
      const repeatNumber = Number(maskExp.slice(this._start + 1, this._end));
      const replaceWith = new Array(repeatNumber + 1).join(maskExp[this._start - 1]);
      return accum + replaceWith;
    }, '') || maskExp;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  _applyMask() {
    this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
    this._maskService.formElementProperty = ['value', this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
  }

  _validateTime(value) {
    var _a;

    const rowMaskLen = this._maskValue.split('').filter(s => s !== ':').length;

    if (!value) {
      return null; // Don't validate empty values to allow for optional form control
    }

    if (+((_a = value[value.length - 1]) !== null && _a !== void 0 ? _a : -1) === 0 && value.length < rowMaskLen || value.length <= rowMaskLen - 2) {
      return this._createValidationError(value);
    }

    return null;
  }

  _getActualInputLength() {
    return this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length;
  }

  _createValidationError(actualValue) {
    return {
      mask: {
        requiredMask: this._maskValue,
        actualValue
      }
    };
  }

  _setMask() {
    if (this._maskExpressionArray.length > 0) {
      this._maskExpressionArray.some(mask => {
        var _a, _b, _c;

        const test = ((_a = this._maskService.removeMask(this._inputValue)) === null || _a === void 0 ? void 0 : _a.length) <= ((_b = this._maskService.removeMask(mask)) === null || _b === void 0 ? void 0 : _b.length);

        if (this._inputValue && test) {
          this._maskValue = mask;
          this.maskExpression = mask;
          this._maskService.maskExpression = mask;
          return test;
        } else {
          const expression = (_c = this._maskExpressionArray[this._maskExpressionArray.length - 1]) !== null && _c !== void 0 ? _c : '';
          this._maskValue = this.maskExpression = this._maskService.maskExpression = expression;
        }
      });
    }
  }

}

MaskDirective.ɵfac = function MaskDirective_Factory(t) {
  return new (t || MaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MaskService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](config));
};

MaskDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MaskDirective,
  selectors: [["input", "mask", ""], ["textarea", "mask", ""]],
  hostBindings: function MaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function MaskDirective_paste_HostBindingHandler() {
        return ctx.onPaste();
      })("ngModelChange", function MaskDirective_ngModelChange_HostBindingHandler($event) {
        return ctx.onModelChange($event);
      })("input", function MaskDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("blur", function MaskDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function MaskDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown", function MaskDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    maskExpression: ["mask", "maskExpression"],
    specialCharacters: "specialCharacters",
    patterns: "patterns",
    prefix: "prefix",
    suffix: "suffix",
    thousandSeparator: "thousandSeparator",
    decimalMarker: "decimalMarker",
    dropSpecialCharacters: "dropSpecialCharacters",
    hiddenInput: "hiddenInput",
    showMaskTyped: "showMaskTyped",
    placeHolderCharacter: "placeHolderCharacter",
    shownMaskExpression: "shownMaskExpression",
    showTemplate: "showTemplate",
    clearIfNotMatch: "clearIfNotMatch",
    validation: "validation",
    separatorLimit: "separatorLimit",
    allowNegativeNumbers: "allowNegativeNumbers",
    leadZeroDateTime: "leadZeroDateTime",
    triggerOnMaskChange: "triggerOnMaskChange"
  },
  outputs: {
    maskFilled: "maskFilled"
  },
  exportAs: ["mask", "ngxMask"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
    multi: true
  }, MaskService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[mask], textarea[mask]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaskDirective),
        multi: true
      }, MaskService],
      exportAs: 'mask,ngxMask'
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: MaskService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [config]
      }]
    }];
  }, {
    maskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mask']
    }],
    specialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    patterns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    thousandSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    decimalMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropSpecialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hiddenInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showMaskTyped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeHolderCharacter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shownMaskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearIfNotMatch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    validation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    separatorLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowNegativeNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    leadZeroDateTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    triggerOnMaskChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maskFilled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['paste']
    }],
    onModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['ngModelChange', ['$event']]
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input', ['$event']]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();

class MaskPipe {
  constructor(_maskService) {
    this._maskService = _maskService;
  }

  transform(value, mask, thousandSeparator = null) {
    if (!value && typeof value !== 'number') {
      return '';
    }

    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator;
    }

    if (typeof mask === 'string') {
      return this._maskService.applyMask(`${value}`, mask);
    }

    return this._maskService.applyMaskWithPattern(`${value}`, mask);
  }

}

MaskPipe.ɵfac = function MaskPipe_Factory(t) {
  return new (t || MaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MaskApplierService, 16));
};

MaskPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "mask",
  type: MaskPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'mask',
      pure: true
    }]
  }], function () {
    return [{
      type: MaskApplierService
    }];
  }, null);
})();
/**
 * @internal
 */


function _configFactory(initConfig, configValue) {
  return configValue instanceof Function ? Object.assign(Object.assign({}, initConfig), configValue()) : Object.assign(Object.assign({}, initConfig), configValue);
}

class NgxMaskModule {
  static forRoot(configValue) {
    return {
      ngModule: NgxMaskModule,
      providers: [{
        provide: NEW_CONFIG,
        useValue: configValue
      }, {
        provide: INITIAL_CONFIG,
        useValue: initialConfig
      }, {
        provide: config,
        useFactory: _configFactory,
        deps: [INITIAL_CONFIG, NEW_CONFIG]
      }, MaskApplierService]
    };
  }

  static forChild() {
    return {
      ngModule: NgxMaskModule
    };
  }

}

NgxMaskModule.ɵfac = function NgxMaskModule_Factory(t) {
  return new (t || NgxMaskModule)();
};

NgxMaskModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxMaskModule
});
NgxMaskModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMaskModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MaskDirective, MaskPipe],
      declarations: [MaskDirective, MaskPipe]
    }]
  }], null, null);
})();

const commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

(function () {
  if (!commonjsGlobal.KeyboardEvent) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    commonjsGlobal.KeyboardEvent = function (_eventType, _init) {};
  }
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-projects_ngx-tel_src_lib_ngx-tel_module_ts.js.map