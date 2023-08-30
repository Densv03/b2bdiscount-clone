"use strict";
exports.id = 6907;
exports.ids = [6907];
exports.modules = {

/***/ 50593:
/*!***********************************************************!*\
  !*** ./projects/ngx-country-select/src/lib/data/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COUNTRIES": () => (/* binding */ COUNTRIES)
/* harmony export */ });
const COUNTRIES = [
    "AD",
    "AE",
    "AF",
    "AG",
    "AI",
    "AL",
    "AM",
    "AO",
    "AR",
    "AT",
    "AU",
    "AW",
    "AX",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BM",
    "BN",
    "BO",
    "BR",
    "BS",
    "BT",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FK",
    "FM",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GG",
    "GH",
    "GI",
    "GM",
    "GN",
    "GQ",
    "GR",
    "GT",
    "GW",
    "GY",
    "HK",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IM",
    "IN",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JE",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KY",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MG",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MR",
    "MS",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NE",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PF",
    "PG",
    "PH",
    "PK",
    "PL",
    "PR",
    "PT",
    "PW",
    "PY",
    "QA",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SH",
    "SI",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "ST",
    "SV",
    "SY",
    "SZ",
    "TC",
    "TD",
    "TG",
    "TH",
    "TJ",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TW",
    "TZ",
    "UA",
    "UG",
    "US",
    "UY",
    "UZ",
    "VC",
    "VE",
    "VG",
    "VN",
    "VU",
    "WS",
    "YE",
    "ZA",
    "ZM",
    "ZW",
];


/***/ }),

/***/ 11070:
/*!************************************************************************************!*\
  !*** ./projects/ngx-country-select/src/lib/layout/ngx-country-select.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxCountrySelectComponent": () => (/* binding */ B2bNgxCountrySelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! country-list */ 1188);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ 50593);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-select */ 20592);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
var B2bNgxCountrySelectComponent_1;



// TODO: uncomment code below when libs will be inserted in b2b
// import { FormControl } from "@ngneat/reactive-forms";
// import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
// @ts-ignore









function B2bNgxCountrySelectComponent_ng_template_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", item_r3.icon);
} }
function B2bNgxCountrySelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, B2bNgxCountrySelectComponent_ng_template_3_img_2_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.label);
} }
function B2bNgxCountrySelectComponent_ng_template_4_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", item_r10.icon);
} }
function B2bNgxCountrySelectComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, B2bNgxCountrySelectComponent_ng_template_4_div_0_img_1_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.label);
} }
function B2bNgxCountrySelectComponent_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const items_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().items;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", items_r6.length - 1, " more...");
} }
function B2bNgxCountrySelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, B2bNgxCountrySelectComponent_ng_template_4_div_0_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, B2bNgxCountrySelectComponent_ng_template_4_div_2_Template, 3, 1, "div", 10);
} if (rf & 2) {
    const items_r6 = ctx.items;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 2, items_r6, 0, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", items_r6.length > 1);
} }
function B2bNgxCountrySelectComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r14 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", item_r14.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r14.label);
} }
const _c0 = ["*"];
let B2bNgxCountrySelectComponent = B2bNgxCountrySelectComponent_1 = class B2bNgxCountrySelectComponent {
    constructor() {
        this.errors = {};
        this.theme = _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_2__.B2bNgxSelectThemeEnum.BACKGROUND_GRAY;
        this.className = '';
        this.multiple = false;
        this.touched = false;
        this.openSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.closeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.options = [];
        this.placeholder = "";
        this.onChange = () => null;
        this.onTouched = () => null;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null);
    }
    get selectClassName() {
        const defaultClassName = ``;
        return `${defaultClassName} ${this.theme} ${this.className}`;
    }
    getOptions() {
        const countriesArr = _data__WEBPACK_IMPORTED_MODULE_4__.COUNTRIES.map((country) => ({
            label: (0,country_list__WEBPACK_IMPORTED_MODULE_0__.getName)(country),
            icon: country,
            code: country.toLowerCase(),
        })).sort((a, b) => a.label.localeCompare(b.label));
        if (this.showInTransit) {
            countriesArr.unshift({
                label: 'In transit',
                icon: "ship-in-transit",
                code: "In transit"
            });
        }
        return countriesArr;
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
        this.options = this.getOptions();
    }
    ngOnChanges(changes) {
        if (changes['errors']) {
            this.formControl.setErrors(changes['errors'].currentValue);
        }
    }
    validate() {
        return this.formControl.errors;
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
    emitOpen() {
        this.openSelect.emit();
    }
    emitClose() {
        this.closeSelect.emit();
    }
    subscribeOnValueChanges() {
        this.formControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe((value) => {
            this.onChange(value);
        });
    }
};
B2bNgxCountrySelectComponent.ɵfac = function B2bNgxCountrySelectComponent_Factory(t) { return new (t || B2bNgxCountrySelectComponent)(); };
B2bNgxCountrySelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: B2bNgxCountrySelectComponent, selectors: [["b2b-ngx-country-select"]], inputs: { errors: "errors", showInTransit: "showInTransit", theme: "theme", className: "className", placeholder: "placeholder", multiple: "multiple", touched: "touched" }, outputs: { openSelect: "openSelect", closeSelect: "closeSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => B2bNgxCountrySelectComponent_1),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => B2bNgxCountrySelectComponent_1),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 6, vars: 10, consts: [[1, "ngx-country-label"], ["bindLabel", "label", "bindValue", "code", 3, "searchable", "clearable", "multiple", "items", "placeholder", "formControl", "open", "close"], ["ng-label-tmp", ""], ["ng-multi-label-tmp", ""], ["ng-option-tmp", ""], [1, "ngx-country-label-container"], ["b2bNgxIcon", "", "group", "flags/", 3, "name", 4, "ngIf"], [1, "ngx-country-select-label"], ["b2bNgxIcon", "", "group", "flags/", 3, "name"], ["class", "ngx-country-label-container", 4, "ngFor", "ngForOf"], ["class", "ngx-country-label-container", 4, "ngIf"], [1, "ngx-country-option-container"], [1, "ngx-country-option"]], template: function B2bNgxCountrySelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ng-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("open", function B2bNgxCountrySelectComponent_Template_ng_select_open_2_listener() { return ctx.emitOpen(); })("close", function B2bNgxCountrySelectComponent_Template_ng_select_close_2_listener() { return ctx.emitClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, B2bNgxCountrySelectComponent_ng_template_3_Template, 5, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, B2bNgxCountrySelectComponent_ng_template_4_Template, 3, 6, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, B2bNgxCountrySelectComponent_ng_template_5_Template, 4, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.selectClassName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-touched", ctx.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("searchable", true)("clearable", false)("multiple", ctx.multiple)("items", ctx.options)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_7__.B2bNgxIconDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgLabelTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgMultiLabelTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe], styles: [".ngx-country-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}\n.ngx-country-label[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.ngx-country-label-container[_ngcontent-%COMP%], .ngx-country-option-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ngx-country-label-container[_ngcontent-%COMP%]   .ngx-country-option[_ngcontent-%COMP%], .ngx-country-label-container[_ngcontent-%COMP%]   .ngx-country-select-label[_ngcontent-%COMP%], .ngx-country-option-container[_ngcontent-%COMP%]   .ngx-country-option[_ngcontent-%COMP%], .ngx-country-option-container[_ngcontent-%COMP%]   .ngx-country-select-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #556274;\n  margin-left: 8px;\n  margin-bottom: 0;\n}\n.ngx-country-label-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .ngx-country-option-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  box-shadow: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container, [_nghost-%COMP%]     .ng-select-opened .ng-select-container {\n  border: 2px solid transparent;\n  height: 49px;\n}\n[_nghost-%COMP%]     .ng-select .ng-dropdown-panel, [_nghost-%COMP%]     .ng-select-opened .ng-dropdown-panel {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}\n[_nghost-%COMP%]     .ng-select.gray .ng-select-container, [_nghost-%COMP%]     .ng-select-opened.gray .ng-select-container {\n  background: #f3f4f6;\n}\n[_nghost-%COMP%]     .ng-select.gray .ng-dropdown-panel, [_nghost-%COMP%]     .ng-select-opened.gray .ng-dropdown-panel {\n  background: #f3f4f6;\n}\n[_nghost-%COMP%]     .ng-select.gray .ng-dropdown-panel-items .ng-option .ng-option-marked, [_nghost-%COMP%]     .ng-select-opened.gray .ng-dropdown-panel-items .ng-option .ng-option-marked {\n  background-color: #d1d5db;\n}\n[_nghost-%COMP%]     .ng-select.white .ng-select-container, [_nghost-%COMP%]     .ng-select-opened.white .ng-select-container {\n  background: #ffffff;\n}\n[_nghost-%COMP%]     .ng-select.white .ng-dropdown-panel, [_nghost-%COMP%]     .ng-select-opened.white .ng-dropdown-panel {\n  background: #ffffff;\n}\n[_nghost-%COMP%]     .ng-select.white .ng-dropdown-panel-items .ng-option .ng-option-marked, [_nghost-%COMP%]     .ng-select-opened.white .ng-dropdown-panel-items .ng-option .ng-option-marked {\n  background-color: #ffffff;\n}\n[_nghost-%COMP%]     .ng-select.transparent .ng-value .ng-value-label, [_nghost-%COMP%]     .ng-select-opened.transparent .ng-value .ng-value-label {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]     .ng-select.transparent .ng-select-container, [_nghost-%COMP%]     .ng-select-opened.transparent .ng-select-container {\n  background: transparent;\n}\n[_nghost-%COMP%]     .ng-select.transparent .ng-select-container .ng-value-container .ng-placeholder, [_nghost-%COMP%]     .ng-select-opened.transparent .ng-select-container .ng-value-container .ng-placeholder {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]     .ng-select.transparent .ng-select-container .ng-value-container .ng-input, [_nghost-%COMP%]     .ng-select-opened.transparent .ng-select-container .ng-value-container .ng-input {\n  top: 13px;\n}\n[_nghost-%COMP%]     .ng-select.transparent .ng-dropdown-panel, [_nghost-%COMP%]     .ng-select-opened.transparent .ng-dropdown-panel {\n  background: transparent;\n}\n[_nghost-%COMP%]     .ng-select.transparent .ng-dropdown-panel-items .ng-option .ng-option-marked, [_nghost-%COMP%]     .ng-select-opened.transparent .ng-dropdown-panel-items .ng-option .ng-option-marked {\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .ng-input {\n  top: 13px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1jb3VudHJ5LXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Q7QUFDQztFQUNDLGFBQUE7QUFDRjtBQUVBOztFQUVDLGFBQUE7RUFDQSxtQkFBQTtBQUNEO0FBQUM7Ozs7RUFFQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQURDOztFQUNDLFdBQUE7QUFJRjtBQUVFO0VBQ0MsZ0JBQUE7QUFDSDtBQUlHOztFQUNDLDZCQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUc7O0VBQ0MsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUtJOztFQUNDLG1CQUFBO0FBRkw7QUFJSTs7RUFDQyxtQkFBQTtBQURMO0FBS007O0VBQ0MseUJBQUE7QUFGUDtBQVNJOztFQUNDLG1CQUFBO0FBTkw7QUFRSTs7RUFDQyxtQkFBQTtBQUxMO0FBU007O0VBQ0MseUJBQUE7QUFOUDtBQWNLOztFQUNDLDBCQUFBO0FBWE47QUFjSTs7RUFDQyx1QkFBQTtBQVhMO0FBYU07O0VBQ0MsMEJBQUE7QUFWUDtBQVlNOztFQUNDLFNBQUE7QUFUUDtBQWFJOztFQUNDLHVCQUFBO0FBVkw7QUFjTTs7RUFDQyw2QkFBQTtBQVhQO0FBa0JFO0VBQ0Msb0JBQUE7QUFoQkgiLCJmaWxlIjoibmd4LWNvdW50cnktc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC1jb3VudHJ5LWxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM5ZmE0YmI7XG5cdG1hcmdpbi1ib3R0b206IDZweDtcblxuXHQmOmVtcHR5IHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG4ubmd4LWNvdW50cnktbGFiZWwtY29udGFpbmVyLFxuLm5neC1jb3VudHJ5LW9wdGlvbi1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQubmd4LWNvdW50cnktb3B0aW9uLFxuXHQubmd4LWNvdW50cnktc2VsZWN0LWxhYmVsIHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Y29sb3I6ICM1NTYyNzQ7XG5cdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMjBweDtcblx0fVxufVxuXG46aG9zdCB7XG5cdDo6bmctZGVlcCB7XG5cdFx0Lm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpID4gLm5nLXNlbGVjdC1jb250YWluZXIge1xuXHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHR9XG5cblx0XHQubmctc2VsZWN0LFxuXHRcdC5uZy1zZWxlY3Qtb3BlbmVkIHtcblx0XHRcdC5uZy1zZWxlY3QtY29udGFpbmVyIHtcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGhlaWdodDogNDlweDtcblx0XHRcdH1cblxuXHRcdFx0Lm5nLWRyb3Bkb3duLXBhbmVsIHtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMTUsIDE3LCAwLjEpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHR9XG5cblx0XHRcdCYuZ3JheSB7XG5cdFx0XHRcdC5uZy1zZWxlY3QtY29udGFpbmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5uZy1kcm9wZG93bi1wYW5lbCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjRmNjtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuXHRcdFx0XHRcdC5uZy1vcHRpb24ge1xuXHRcdFx0XHRcdFx0Lm5nLW9wdGlvbi1tYXJrZWQge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmLndoaXRlIHtcblx0XHRcdFx0Lm5nLXNlbGVjdC1jb250YWluZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5nLWRyb3Bkb3duLXBhbmVsIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG5cdFx0XHRcdFx0Lm5nLW9wdGlvbiB7XG5cdFx0XHRcdFx0XHQubmctb3B0aW9uLW1hcmtlZCB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCYudHJhbnNwYXJlbnQge1xuXHRcdFx0XHQubmctdmFsdWUge1xuXHRcdFx0XHRcdC5uZy12YWx1ZS1sYWJlbCB7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5nLXNlbGVjdC1jb250YWluZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdC5uZy12YWx1ZS1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0Lm5nLXBsYWNlaG9sZGVyIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubmctaW5wdXQge1xuXHRcdFx0XHRcdFx0XHR0b3A6IDEzcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC5uZy1kcm9wZG93bi1wYW5lbCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcblx0XHRcdFx0XHQubmctb3B0aW9uIHtcblx0XHRcdFx0XHRcdC5uZy1vcHRpb24tbWFya2VkIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Lm5nLWlucHV0IHtcblx0XHRcdHRvcDogMTNweCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxufVxuIl19 */"], changeDetection: 0 });
B2bNgxCountrySelectComponent = B2bNgxCountrySelectComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], B2bNgxCountrySelectComponent);



/***/ }),

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

/***/ 15024:
/*!******************************************************************************************!*\
  !*** ./src/app/client/pages/client-latest-offers/client-latest-offers-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLatestOffersRoutingModule": () => (/* binding */ ClientLatestOffersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_client_latest_offers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client-latest-offers.component */ 83692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_client_latest_offers_component__WEBPACK_IMPORTED_MODULE_0__.ClientLatestOffersComponent,
    },
];
class ClientLatestOffersRoutingModule {
}
ClientLatestOffersRoutingModule.ɵfac = function ClientLatestOffersRoutingModule_Factory(t) { return new (t || ClientLatestOffersRoutingModule)(); };
ClientLatestOffersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClientLatestOffersRoutingModule });
ClientLatestOffersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClientLatestOffersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 26907:
/*!**********************************************************************************!*\
  !*** ./src/app/client/pages/client-latest-offers/client-latest-offers.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLatestOffersModule": () => (/* binding */ ClientLatestOffersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _client_latest_offers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-latest-offers-routing.module */ 15024);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-country-select */ 17354);
/* harmony import */ var _components_client_latest_offers_grid_client_latest_offers_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/client-latest-offers-grid/client-latest-offers-grid.component */ 88916);
/* harmony import */ var _components_client_latest_offers_list_client_latest_offers_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/client-latest-offers-list/client-latest-offers-list.component */ 1541);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/ngx-link */ 16385);
/* harmony import */ var _layout_client_latest_offers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/client-latest-offers.component */ 83692);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 97977);
/* harmony import */ var _b2b_ngx_treeview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-treeview */ 37891);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






// import { B2bNgxSkeletonModule } from "@b2b/ngx-skeleton";


// import { B2bNgxPaginationModule } from "@b2b/ngx-pagination";









class ClientLatestOffersModule {
}
ClientLatestOffersModule.ɵfac = function ClientLatestOffersModule_Factory(t) { return new (t || ClientLatestOffersModule)(); };
ClientLatestOffersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ClientLatestOffersModule });
ClientLatestOffersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _client_latest_offers_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientLatestOffersRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_8__.B2bNgxInputModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_9__.B2bNgxSelectModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_11__.B2bNgxIconModule,
        // B2bNgxSkeletonModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_12__.B2bNgxCountrySelectModule,
        // B2bNgxPaginationModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_13__.B2bNgxImageModule,
        _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__.B2bNgxLinkModule,
        // NgxTippyModule,
        ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__.PaginationModule,
        _b2b_ngx_treeview__WEBPACK_IMPORTED_MODULE_4__.TreeviewModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ClientLatestOffersModule, { declarations: [_layout_client_latest_offers_component__WEBPACK_IMPORTED_MODULE_3__.ClientLatestOffersComponent, _components_client_latest_offers_grid_client_latest_offers_grid_component__WEBPACK_IMPORTED_MODULE_1__.ClientLatestOffersGridComponent, _components_client_latest_offers_list_client_latest_offers_list_component__WEBPACK_IMPORTED_MODULE_2__.ClientLatestOffersListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _client_latest_offers_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientLatestOffersRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_8__.B2bNgxInputModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_9__.B2bNgxSelectModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_11__.B2bNgxIconModule,
        // B2bNgxSkeletonModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_12__.B2bNgxCountrySelectModule,
        // B2bNgxPaginationModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_13__.B2bNgxImageModule,
        _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__.B2bNgxLinkModule,
        // NgxTippyModule,
        ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__.PaginationModule,
        _b2b_ngx_treeview__WEBPACK_IMPORTED_MODULE_4__.TreeviewModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule] }); })();


/***/ }),

/***/ 88916:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-latest-offers/components/client-latest-offers-grid/client-latest-offers-grid.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLatestOffersGridComponent": () => (/* binding */ ClientLatestOffersGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../projects/ngx-image/src/lib/directive/ngx-image.directive */ 70239);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 1468);












function ClientLatestOffersGridComponent_li_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "verified-2");
  }
}

function ClientLatestOffersGridComponent_li_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "flame");
  }
}

function ClientLatestOffersGridComponent_li_1_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "price-drop");
  }
}

function ClientLatestOffersGridComponent_li_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SOLD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function ClientLatestOffersGridComponent_li_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" -", option_r1.price == null ? null : option_r1.price.discount, "% ");
  }
}

function ClientLatestOffersGridComponent_li_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "OFFERS.FULL_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx_r7.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "OFFERS.UPGRADE"), " ");
  }
}

function ClientLatestOffersGridComponent_li_1_ng_template_28_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
  }
}

function ClientLatestOffersGridComponent_li_1_ng_template_28_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "OFFERS.OLD_PRICE"), " ", option_r1.price.old, "$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "OFFERS.PER"), " ", (option_r1.amount == null ? null : option_r1.amount.unit == null ? null : option_r1.amount.unit._id) === "60a784830a04b16c574e8145" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, "UNITS.QUANTITY_COUNT") : (option_r1.amount == null ? null : option_r1.amount.unit == null ? null : option_r1.amount.unit._id) === "60a784830a04b16c574e8143" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, "UNITS.TONS_COUNT") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, "UNITS.M3_COUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", option_r1.amount == null ? null : option_r1.amount.count, " ", option_r1.amount == null ? null : option_r1.amount.unit == null ? null : option_r1.amount.unit.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, "OFFERS.AVAILABLE"), "");
  }
}

function ClientLatestOffersGridComponent_li_1_ng_template_28_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "OFFERS.FULL_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx_r13.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "OFFERS.UPGRADE"), " ");
  }
}

function ClientLatestOffersGridComponent_li_1_ng_template_28_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientLatestOffersGridComponent_li_1_ng_template_28_button_21_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r16.openChat($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.goTo("/offers/" + option_r1._id + "/chat"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx_r14.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r14.setText(option_r1.user)), " ");
  }
}

function ClientLatestOffersGridComponent_li_1_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34)(1, "p", 35)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientLatestOffersGridComponent_li_1_ng_template_28_img_4_Template, 1, 0, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 41)(11, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientLatestOffersGridComponent_li_1_ng_template_28_p_19_Template, 11, 19, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClientLatestOffersGridComponent_li_1_ng_template_28_div_20_Template, 8, 7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClientLatestOffersGridComponent_li_1_ng_template_28_button_21_Template, 4, 4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blured", !ctx_r9.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.cutString(option_r1.contact == null ? null : option_r1.contact.companyName, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, option_r1.destination == null ? null : option_r1.destination.from));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.destination == null ? null : option_r1.destination.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, option_r1.destination == null ? null : option_r1.destination.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.destination == null ? null : option_r1.destination.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, option_r1.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.user);
  }
}

function ClientLatestOffersGridComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientLatestOffersGridComponent_li_1_img_4_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientLatestOffersGridComponent_li_1_img_5_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientLatestOffersGridComponent_li_1_img_6_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientLatestOffersGridComponent_li_1_div_10_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClientLatestOffersGridComponent_li_1_p_11_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12)(13, "p", 13)(14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientLatestOffersGridComponent_li_1_Template_button_click_16_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const option_r1 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.emitStarClick(option_r1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 17)(19, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClientLatestOffersGridComponent_li_1_div_27_Template, 10, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClientLatestOffersGridComponent_li_1_ng_template_28_Template, 22, 18, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r1 = ctx.$implicit;

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("ngx-latest-offers-grid-item " + (option_r1.reasonForDeletion ? "ngx-latest-offers-grid-item-deleted" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 16, ctx_r0.b2bNgxLinkService.getLink((option_r1 == null ? null : option_r1.path) ? "/offers/" + option_r1.path : "/offers/" + option_r1._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.verifiedTrack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.highDemand && !option_r1.reasonForDeletion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.priceDrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", option_r1.previewPhoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.reasonForDeletion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (option_r1.price == null ? null : option_r1.price.discount) && !option_r1.reasonForDeletion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.cutString(option_r1.title, 4), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", option_r1.isSaved ? "star-filled" : "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.price == null ? null : option_r1.price.new);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 18, "OFFERS.PER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 20, "UNITS." + option_r1.amount.unit.name.toUpperCase()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false)("ngIfElse", _r8);
  }
}

class ClientLatestOffersGridComponent {
  constructor(b2bNgxLinkService, router) {
    this.b2bNgxLinkService = b2bNgxLinkService;
    this.router = router;
    this.starClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_1__.B2bNgxButtonThemeEnum;
    this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_2__.B2bNgxLinkThemeEnum;
  }

  ngOnChanges(changes) {
    if (changes && changes['options'].currentValue) {
      this.options = changes['options'].currentValue.map(el => {
        var _a;

        return { ...el,
          isChatExist: !!((_a = el.chatStarted) === null || _a === void 0 ? void 0 : _a.find(id => {
            var _a;

            return id === ((_a = this.user) === null || _a === void 0 ? void 0 : _a._id);
          }))
        };
      });
    }
  }

  cutString(str, wordsToSplice) {
    if (!str) return '';
    const wordsArr = str.split(' ');
    return wordsArr.length > 4 ? wordsArr.slice(0, wordsToSplice).join(' ') + '...' : str;
  }

  openChat(event) {
    event.stopImmediatePropagation();
  }

  emitStarClick(id, event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.starClicked.emit(id);
  }

  goTo(link) {
    this.router.navigate([link]);
  }

  setText(id) {
    var _a;

    return id === ((_a = this.user) === null || _a === void 0 ? void 0 : _a._id) ? "OFFERS.VIEW_MY_OFFER" : "Contact seller";
  }

}

ClientLatestOffersGridComponent.ɵfac = function ClientLatestOffersGridComponent_Factory(t) {
  return new (t || ClientLatestOffersGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_3__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

ClientLatestOffersGridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ClientLatestOffersGridComponent,
  selectors: [["b2b-client-latest-offers-grid"]],
  inputs: {
    options: "options",
    user: "user"
  },
  outputs: {
    starClicked: "starClicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "ngx-latest-offers-grid"], [3, "class", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "icons"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "Verified track", "class", "ngx-saved-offers-list-item-info-icon", 3, "name", 4, "ngIf"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "This offer is in high demand!", "class", "ngx-saved-offers-list-item-info-icon", 3, "name", 4, "ngIf"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "Price Drop", "class", "ngx-saved-offers-list-item-info-icon", 3, "name", 4, "ngIf"], [1, "ngx-latest-offers-grid-item-header"], [1, "ngx-latest-offers-grid-item-image-container"], ["b2bNgxImage", "", "alt", "", 1, "ngx-latest-offers-grid-item-image", 3, "name"], ["class", "ngx-latest-offers-grid-item-image-container-overlay", 4, "ngIf"], ["class", "ngx-latest-offers-grid-item-discount", 4, "ngIf"], [1, "ngx-latest-offers-grid-item-header-container"], [1, "ngx-latest-offers-grid-item-header-title"], [1, "ngx-latest-offers-grid-item-header-title-text"], [3, "click"], ["b2bNgxIcon", "", "alt", "", 1, "ngx-latest-offers-grid-item-header-title-icon", 3, "name"], [1, "ngx-latest-offers-grid-item-header-price"], [1, "ngx-latest-offers-grid-item-header-price-dollar-sign"], [1, "ngx-latest-offers-grid-item-header-price-amount"], [1, "ngx-latest-offers-grid-item-header-price-unit"], ["class", "ngx-latest-offers-grid-item-blured", 4, "ngIf", "ngIfElse"], ["fullInfo", ""], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "Verified track", 1, "ngx-saved-offers-list-item-info-icon", 3, "name"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "This offer is in high demand!", 1, "ngx-saved-offers-list-item-info-icon", 3, "name"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "Price Drop", 1, "ngx-saved-offers-list-item-info-icon", 3, "name"], [1, "ngx-latest-offers-grid-item-image-container-overlay"], [1, "ngx-latest-offers-grid-item-discount"], [1, "ngx-latest-offers-grid-item-blured"], ["b2bNgxImage", "", "name", "offer-blur-2", 1, "ngx-latest-offers-grid-item-blured-img"], [1, "ngx-latest-offers-grid-item-blured-container"], [1, "ngx-latest-offers-grid-item-blured-text"], ["b2bNgxButton", "", 1, "ngx-latest-offers-grid-item-blured-button", 3, "theme"], ["b2bNgxIcon", "", "name", "", "alt", ""], [1, "ngx-latest-offers-grid-item-main"], [1, "ngx-latest-offers-grid-item-seller"], [1, "ngx-latest-offers-grid-item-seller-name"], ["b2bNgxIcon", "", "name", "verified-2", "class", "ngx-latest-offers-grid-item-seller-verified", 4, "ngIf"], [1, "ngx-latest-offers-grid-item-route"], ["b2bNgxIcon", "", "group", "flags/", 1, "ngx-latest-offers-grid-item-route-first-country-icon", 3, "name"], [1, "ngx-latest-offers-grid-item-route-first-country-name"], ["b2bNgxIcon", "", "name", "arrow-r-gray", 1, "ngx-latest-offers-grid-item-route-arrow-icon"], ["b2bNgxIcon", "", "group", "flags/", 1, "ngx-latest-offers-grid-item-route-second-country-icon", 3, "name"], [1, "ngx-latest-offers-grid-item-route-second-country-name"], [1, "ngx-latest-offers-grid-item-eta"], [1, "ngx-latest-offers-grid-item-footer"], ["class", "ngx-latest-offers-grid-item-footer-text", 4, "ngIf"], ["class", "ngx-latest-offers-grid-item-blured-container", 4, "ngIf"], ["b2bNgxButton", "", "id", "unclaimed-cargo-listing-contact-seller", "class", "ngx-latest-offers-grid-item-footer-button", 3, "theme", "click", 4, "ngIf"], ["b2bNgxIcon", "", "name", "verified-2", 1, "ngx-latest-offers-grid-item-seller-verified"], [1, "ngx-latest-offers-grid-item-footer-text"], [1, "ngx-latest-offers-grid-item-footer-old-price"], [1, "ngx-latest-offers-grid-item-footer-available"], ["b2bNgxButton", "", "id", "unclaimed-cargo-listing-contact-seller", 1, "ngx-latest-offers-grid-item-footer-button", 3, "theme", "click"], [1, "ngx-latest-offers-grid-item-footer-button-text"]],
  template: function ClientLatestOffersGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientLatestOffersGridComponent_li_1_Template, 30, 22, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_7__.B2bNgxIconDirective, _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_8__.B2bNgxImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: auto;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  box-shadow: 2px 2px 8px #e3eaf1;\n  border-radius: 4px;\n  margin-top: 16px;\n}@media (min-width: 87.5em) {\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%] {\n    width: 24%;\n    margin-left: 0.6%;\n    margin-right: 0.6%;\n  }\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]:nth-child(4n+1) {\n    margin-left: 0;\n  }\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]:nth-child(4n) {\n    margin-right: 0;\n  }\n}@media (max-width: 87.5em) {\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%] {\n    width: 32%;\n    margin-left: 1%;\n    margin-right: 1%;\n  }\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]:nth-child(3n+1) {\n    margin-left: 0;\n  }\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]:nth-child(3n) {\n    margin-right: 0;\n  }\n}@media (max-width: 55.5em) {\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%] {\n    width: 49%;\n    margin-left: 1%;\n    margin-right: 1%;\n  }\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]:nth-child(2n+1) {\n    margin-left: 0;\n  }\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]:nth-child(2n) {\n    margin-right: 0;\n  }\n}@media (max-width: 48em) {\n  .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-image-container[_ngcontent-%COMP%] {\n  position: relative;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-image-container-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 148px;\n  background-color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-image-container-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 44px;\n  letter-spacing: 0.2em;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-image-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 148px;\n  object-fit: cover;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-image-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-discount[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  background: #0f0f11;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 3px 3px 0px;\n  color: #ffffff;\n  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  padding: 4px 8px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-container[_ngcontent-%COMP%] {\n  padding: 0 24px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-title[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-title-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #0f0f11;\n  height: 20px;\n  display: flex;\n  align-items: center;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-top: 4px;\n  height: 24px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-price[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-price-dollar-sign[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  color: #9fa4bb;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-price[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-price-amount[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  color: #0f0f11;\n  margin-right: 5px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-price[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-price-unit[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(108, 112, 119, 0.6);\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-img[_ngcontent-%COMP%] {\n  height: 194px;\n  width: 100%;\n  object-fit: cover;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 16px 24px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #000000;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 100%;\n  padding: 11px 0;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%] {\n  padding: 0 24px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-seller[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  display: flex;\n  align-items: center;\n  height: 20px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-seller[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-seller-logo[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  margin-right: 8px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-seller[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-seller-verified[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 7.5px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route-first-country-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 26px;\n  object-fit: cover;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route-first-country-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  text-transform: uppercase;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route-arrow-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route-second-country-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  height: 18px;\n  width: 26px;\n  object-fit: cover;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-route-second-country-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  text-transform: uppercase;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-eta[_ngcontent-%COMP%] {\n  margin-top: 7.5px;\n  font-size: 14px;\n  color: #0f0f11;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-main.blured[_ngcontent-%COMP%] {\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 12px 24px;\n  border-top: 1px solid #dfe8f5;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer-text[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer-old-price[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  color: #556274;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer-text[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer-available[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  color: #0f0f11;\n  margin-left: 10px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0;\n  width: 100%;\n  margin-top: 10px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer-button[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer-button-text[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 0.5px rgba(0, 0, 0, 0.25);\n  margin-left: 8px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-footer[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-container[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-blured-button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 100%;\n  padding: 11px 0;\n}.ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-deleted[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-title-text[_ngcontent-%COMP%], .ngx-latest-offers-grid[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-deleted[_ngcontent-%COMP%]   .ngx-latest-offers-grid-item-header-price-amount[_ngcontent-%COMP%] {\n  color: #9fa4bb !important;\n}.icons[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n  padding: 5px 10px;\n  border-radius: 3px;\n}.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  width: 25px;\n}.icons[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJjbGllbnQtbGF0ZXN0LW9mZmVycy1ncmlkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNlbGVjdC9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYnV0dG9uL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGluay9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWlucHV0L3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaWNvbi9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRleHRhcmVhL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9tYXRlcmlhbC1vdmVycmlkZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsQ0NBaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9COztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUUsRUFBRSxDQUNKO0lBQ0Usd0JBQXdCLEVBQUUsQ0FDNUI7OztJQUtFLHNCQUFzQixFQUFFLENBQzFCO0lBQ0UsZ0JBQWdCLEVBQUUsQ0FDcEI7SUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGdCQUFnQjtJQUNoQixpQ0FBaUMsRUFBRSxDQUNyQztJQUNFLG1CQUFtQixFQUFFLENBQ3JCO01BQ0UsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBRSxDQUM3QjtJQUNFLG1CQUFtQixFQUFFLENBQ3JCO01BQ0UsbUJBQW1CLEVBQUUsQ0FDckI7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQzNCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMvQjs7O0lBT0UsYUFBYTtJQUNiLG1CQUFtQjtJQUluQixpQkFBaUI7SUFDakIsY0FBYyxFQUFFLENBQ2xCOztJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFFLENBQ3BCOztNQUVFLGFBQWEsRUFBRSxDQUNuQjs7SUFFRSxVQUFVLEVBQUUsQ0FDZDs7OztJQUlFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsY0FBYztJ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QUNFLHlCRFhVO0FGb1NsQixDR3RSSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FId1JOLENHdlJNO0VBQ0UseUJBQUE7QUh5UlIsQ0d0Ukk7RUFDRSw2QkFBQTtFQUNBLGNEbEJXO0FGMFNqQixDR3ZSTTtFQUNFLHlCRDFCVTtBRm1UbEIsQ0d0Ukk7RUFDRSx5QkQ1Qlc7RUM2QlgsY0RqQ1k7QUZ5VGxCLENHdlJNO0VBQ0UseUJEOUJTO0FGdVRqQixDR3RSSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUh3Uk4sQ0d2Uk07RUFDRSx5QkQ5Q1U7RUMrQ1YscUJEL0NVO0VDZ0RWLFlBQUE7QUh5UlIsQ0dwUkk7RUFDRSxxQkR0RFk7QUY0VWxCLENHclJNO0VBQ0UseUJEbERVO0FGeVVsQixDR3BSSTtFQUNFLHFCRHhEWTtBRjhVbEIsQ0dyUk07RUFDRSx5QkR4RFU7QUYrVWxCLENHcFJJO0VBQ0UscUJEMURXO0FGZ1ZqQixDR3JSTTtFQUNFLHlCRDNEUztBRmtWakIsQ0dwUkk7RUFDRSxxQkFBQTtBSHNSTixDR3JSTTtFQUNFLHlCRHBFVTtBRjJWbEIsQ0dsUkU7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0FIb1JKLENHblJJO0VBQ0UscURBQUE7QUhxUk4sQ0l2V0E7RUFDQyxnQkFBQTtFQUNBLDZCQUFBO0FKMFdELENJdldFO0VBQ0MsY0ZDYztBRndXakIsQ0l0V0U7RUFDQyxjRlhlO0FGbVhsQixDSXJXRTtFQUNDLGNGWGU7QUZrWGxCLENJcFdFO0VBQ0MsY0ZMYztBRjJXakIsQ0luV0U7RUFDQywwQkFBQTtBSnFXSCxDSWpXQztFQUNDLGlDQUFBO0FKbVdGLENJaldFO0VBQ0MseUJGM0JlO0VFNEJmLGNGaENlO0FGbVlsQixDSWxXRztFQUNDLHlCRjdCYztBRmlZbEIsQ0loV0U7RUFDQyw2QkFBQTtFQUNBLGNGeENlO0FGMFlsQixDSWpXRztFQUNDLHlCRnBDYztBRnVZbEIsQ0kvVkU7RUFDQyx5QkZ2Q2M7RUV3Q2QsY0Y1Q2U7QUY2WWxCLENJOVZFO0VBQ0MseUJGcERlO0VFcURmLGNG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LGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFxbkJKLENBbm5CRztFQUVDLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBcW5CSixDQWxuQkU7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQW9uQkgsQ0FubkJHO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFxbkJKLENBcG5CSTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFzbkJMLENBcG5CSTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXNuQkwsQ0FubkJHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBcW5CSixDQXBuQkk7RUFDQyw4Q0FBQTtFQUNBLGdCQUFBO0FBc25CTCxDQWxuQkk7RUFDQyxlQUFBO0FBb25CTCxDQWxuQkk7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBb25CTCxDQS9tQkc7O0VBRUMseUJBQUE7QUFpbkJKLENBM21CQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQThtQkQsQ0E3bUJDO0VBQ0MsYUFBQTtFQUNBLFdBQUE7QUErbUJGLENBN21CQztFQUNDLGFBQUE7QUErbUJGIiwiZmlsZSI6ImNsaWVudC1sYXRlc3Qtb2ZmZXJzLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnN0cmlwZWQgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1yaWdodCxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5kcmFnZ2luZyAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDlkOGQ5OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQxZjk7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2Y2M4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDsgfVxuICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTsgfSB9XG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtcmlnaHQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtbGVmdD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi1ib3R0b206NXB4O2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dD5pbnB1dHtjb2xvcjojMDAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3RvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O3BhZGRpbmctbGVmdDozcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntwYWRkaW5nLXJpZ2h0OjNweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcjpob3ZlciAubmctY2xlYXJ7Y29sb3I6I0QwMDIxQn0ubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggNXB4IDAgMH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCAwIDAgNXB4fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7d2lkdGg6MjVweDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcjpob3ZlciAubmctYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjojNjY2fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93e2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAyLjVweH0ubmctZHJvcGRvd24tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KTtsZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3B7Ym90dG9tOjEwMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3AgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHR7bGVmdDoxMDAlO3RvcDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXJpZ2h0IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbXt0b3A6MTAwJTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZTZlNmU2O21hcmdpbi10b3A6LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnR7bGVmdDotMTAwJTt0b3A6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsImh0bWwsXG5ib2R5IHtcblx0c2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuKiB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0Jjp2aXNpdGVkIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxufVxuXG5idXR0b24ge1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5pIHtcblx0Zm9udC1zdHlsZTogSXRhbGljO1xufVxuXG5iIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXNcIjtcblxuLm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IGF1dG87XG5cdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXHRcdGJveC1zaGFkb3c6IDJweCAycHggOHB4ICNlM2VhZjE7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjZcIikge1xuXHRcdFx0d2lkdGg6IDI0JTtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwLjYlO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwLjYlO1xuXHRcdFx0JjpudGgtY2hpbGQoNG4gKyAxKSB7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdFx0fVxuXHRcdFx0JjpudGgtY2hpbGQoNG4pIHtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiNVwiKSB7XG5cdFx0XHR3aWR0aDogMzIlO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDElO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAxJTtcblx0XHRcdCY6bnRoLWNoaWxkKDNuICsgMSkge1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHRcdH1cblx0XHRcdCY6bnRoLWNoaWxkKDNuKSB7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0d2lkdGg6IDQ5JTtcblx0XHRcdG1hcmdpbi1sZWZ0OiAxJTtcblx0XHRcdG1hcmdpbi1yaWdodDogMSU7XG5cdFx0XHQmOm50aC1jaGlsZCgybiArIDEpIHtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHR9XG5cdFx0XHQmOm50aC1jaGlsZCgybikge1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIyXCIpIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWhlYWRlciB7XG5cdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWltYWdlLWNvbnRhaW5lciB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0Ji1vdmVybGF5IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTQ4cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDRweDtcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1pbWFnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxNDhweDtcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWRpc2NvdW50IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzBmMGYxMTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHRcdHRleHQtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDRweCA4cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0taGVhZGVyLWNvbnRhaW5lciB7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMjRweDtcblx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1oZWFkZXItdGl0bGUge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDhweDtcblxuXHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0taGVhZGVyLXRpdGxlLXRleHQge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWhlYWRlci1wcmljZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogNHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWhlYWRlci1wcmljZS1kb2xsYXItc2lnbiB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM5ZmE0YmI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0taGVhZGVyLXByaWNlLWFtb3VudCB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1oZWFkZXItcHJpY2UtdW5pdCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWJsdXJlZCB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1ibHVyZWQtaW1nIHtcblx0XHRcdFx0aGVpZ2h0OiAxOTRweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1ibHVyZWQtY29udGFpbmVyIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAxNnB4IDI0cHg7XG5cdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0tYmx1cmVkLXRleHQge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWJsdXJlZC1idXR0b24ge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDEycHg7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTFweCAwO1xuXHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI2YzZjZmODtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1tYWluIHtcblx0XHRcdHBhZGRpbmc6IDAgMjRweDtcblx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0tc2VsbGVyIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogOXB4O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0tc2VsbGVyLWxvZ28ge1xuXHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLXNlbGxlci1uYW1lIHtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLXNlbGxlci12ZXJpZmllZCB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1yb3V0ZSB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDcuNXB4O1xuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLXJvdXRlLWZpcnN0LWNvdW50cnktaWNvbiB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAyNnB4O1xuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0tcm91dGUtZmlyc3QtY291bnRyeS1uYW1lIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1yb3V0ZS1hcnJvdy1pY29uIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0tcm91dGUtc2Vjb25kLWNvdW50cnktaWNvbiB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0d2lkdGg6IDI2cHg7XG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1yb3V0ZS1zZWNvbmQtY291bnRyeS1uYW1lIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0tZXRhIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogNy41cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHR9XG5cdFx0XHQmLmJsdXJlZCB7XG5cdFx0XHRcdC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG5cdFx0XHRcdC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG5cdFx0XHRcdC1vLWZpbHRlcjogYmx1cig1cHgpO1xuXHRcdFx0XHQtbXMtZmlsdGVyOiBibHVyKDVweCk7XG5cdFx0XHRcdGZpbHRlcjogYmx1cig1cHgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWZvb3RlciB7XG5cdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2RmZThmNTtcblx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0tZm9vdGVyLXRleHQge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1mb290ZXItb2xkLXByaWNlIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRjb2xvcjogIzU1NjI3NDtcblx0XHRcdFx0fVxuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWZvb3Rlci1hdmFpbGFibGUge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWZvb3Rlci1idXR0b24ge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0cGFkZGluZzogMTBweCAwO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1mb290ZXItYnV0dG9uLXRleHQge1xuXHRcdFx0XHRcdHRleHQtc2hhZG93OiAwcHggMHB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1ibHVyZWQtY29udGFpbmVyIHtcblx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWdyaWQtaXRlbS1ibHVyZWQtdGV4dCB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0tYmx1cmVkLWJ1dHRvbiB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTJweDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMXB4IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ji1kZWxldGVkIHtcblx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1ncmlkLWl0ZW0taGVhZGVyLXRpdGxlLXRleHQsXG5cdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtZ3JpZC1pdGVtLWhlYWRlci1wcmljZS1hbW91bnQge1xuXHRcdFx0XHRjb2xvcjogIzlmYTRiYiAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uaWNvbnMge1xuXHR6LWluZGV4OiAyO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiA1cHg7XG5cdHRvcDogMTBweDtcblx0cGFkZGluZzogNXB4IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0aW1nIHtcblx0XHRtYXJnaW46IDAgNXB4O1xuXHRcdHdpZHRoOiAyNXB4O1xuXHR9XG5cdCY6ZW1wdHkge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpID4gLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46Om5nLWRlZXAge1xuICBmb3JtIHtcbiAgICBiMmItbmd4LXNlbGVjdCB7XG4gICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICBuZy1zZWxlY3Qge1xuICAgICAgICAgICYubmctdG91Y2hlZCB7XG4gICAgICAgICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmZvcm0tc3VibWl0dGVkIHtcbiAgICAgIGIyYi1uZ3gtc2VsZWN0IHtcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9ybSB7XG4gICAgYjJiLW5neC1jb3VudHJ5LXNlbGVjdCB7XG4gICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICBuZy1zZWxlY3Qge1xuICAgICAgICAgICYubmctdG91Y2hlZCB7XG4gICAgICAgICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmZvcm0tc3VibWl0dGVkIHtcbiAgICAgIGIyYi1uZ3gtY291bnRyeS1zZWxlY3Qge1xuICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSxcbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLFxuLm5nLXNlbGVjdC1vcGVuZWQge1xuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICB9XG5cbiAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMTUsIDE1LCAxNywgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmLmJhY2tncm91bmQtZ3JheSB7XG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgLm5nLW9wdGlvbiB7XG4gICAgICAgIC5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgLm5nLW9wdGlvbiB7XG4gICAgICAgIC5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcbiAgICAubmctdmFsdWUge1xuICAgICAgLm5nLXZhbHVlLWxhYmVsIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIC5uZy12YWx1ZS1jb250YWluZXIge1xuICAgICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIHtcbiAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIC5uZy12YWx1ZS1jb250YWluZXIge1xuICAgICAgLm5nLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3ItYmxhY2stOTAwOiAjMDAwMDAwO1xuJGNvbG9yLWJsYWNrLTgwMDogIzBmMGYxMTtcbiRjb2xvci1ibGFjay0xMDA6ICMyZTJlMzQ7XG4kY29sb3ItYmxhY2stNTA6IHJnYmEoMTc3LCAxNzcsIDE3NywgMC42KTtcblxuJGNvbG9yLXdoaXRlLTkwMDogI2ZmZmZmZjtcbiRjb2xvci13aGl0ZS0yMDA6ICNlM2VhZjE7XG4kY29sb3Itd2hpdGUtMTAwOiAjZjNmNmY4O1xuXG4kY29sb3ItYmx1ZS01MDA6ICMwMDVkZmY7XG4kY29sb3ItYmx1ZS0xMDA6ICM1OTk1ZmU7XG4kY29sb3ItYmx1ZS01MDogI2QyZGVmZjtcblxuJGNvbG9yLWdyYXktOTAwOiAjMGYwZjExO1xuJGNvbG9yLWdyYXktNjAwOiAjMjIyMjI0O1xuJGNvbG9yLWdyYXktNTAwOiAjNTU2Mjc0O1xuJGNvbG9yLWdyYXktNDAwOiAjNmM3MDc3O1xuJGNvbG9yLWdyYXktMzAwOiAjYTdhOGFkO1xuJGNvbG9yLWdyYXktMjAwOiAjOWZhNGJiO1xuJGNvbG9yLWdyYXktMTAwOiAjZjNmNmY4O1xuXG4kY29sb3ItcmVkLTUwMDogI2U2M2QzZDtcbiRjb2xvci1yZWQtNTA6IHJnYmEoMjMwLCA2MSwgNjEsIDAuMDUpO1xuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1idXR0b24ge1xuICBib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICYuYmFja2dyb3VuZCB7XG4gICAgJi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtd2hpdGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS05MDA7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMXJlbSByZ2JhKDEwLCA4LCA1OCwgMC4xKTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtcmVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMXJlbSByZ2JhKDEwLCA4LCA1OCwgMC4xKTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzZDNkO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXktOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1ibHVlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTUwMDtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLWhvdmVyLWJsYWNrIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2RmZThmNTtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYub3V0bGluZSB7XG4gICAgJi5vdXRsaW5lLWJsYWNrIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtd2hpdGUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS1ibHVlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLWdyYXkge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTUwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDAgIWltcG9ydGFudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay01MCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1saW5rIHtcblx0dHJhbnNpdGlvbjogMC41cztcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cblx0Ji50ZXh0IHtcblx0XHQmLnRleHQtYmx1ZSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC1ibGFjayB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtd2hpdGUge1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LWdyYXkge1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ncmF5LTUwMDtcblx0XHR9XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdH1cblx0fVxuXG5cdCYuYmFja2dyb3VuZCB7XG5cdFx0Ym9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXG5cdFx0Ji5iYWNrZ3JvdW5kLXdoaXRlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMjAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWdyYXkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWJsYWNrIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1ibHVlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTUwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtbGlnaHQtYmx1ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZWZmNGZhO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGNvbG9yOiAjMDA1ZGZmICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2U2ZWRmYTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQmLm91dGxpbmUge1xuXHRcdCYub3V0bGluZS13aGl0ZSB7XG5cdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtaW5wdXQtbGFiZWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzlmYTRiYjtcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uYjJiLW5neC1pbnB1dCB7XG5cdGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcblx0cGFkZGluZzogMTRweCAxNnB4O1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzU1NjI3NDtcblx0Ji5iYWNrZ3JvdW5kIHtcblx0XHQmLmJhY2tncm91bmQtZ3JheSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNDAwO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXktMTAwO1xuXHRcdH1cblx0XHQmLmJhY2tncm91bmQtd2hpdGUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cdH1cblx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0fVxufVxuXG4uZm9ybS1zdWJtaXR0ZWQge1xuXHQuYjJiLW5neC1pbnB1dCB7XG5cdFx0Ji5iYWNrZ3JvdW5kIHtcblx0XHRcdCYubmctaW52YWxpZCB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5jb250cm9sLWVycm9yIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6IHJnYmEoMTA4LCAxMTIsIDExOSwgMC42KTtcblx0bWFyZ2luLXRvcDogNHB4O1xufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1pY29uIHtcblx0Ji5jaXJjbGUge1xuXHRcdGhlaWdodDogM3JlbTtcblx0XHR3aWR0aDogM3JlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtdGV4dGFyZWEtbGFiZWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzlmYTRiYjtcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmIyYi1uZ3gtdGV4dGFyZWEge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQ6ICNmM2Y2Zjg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjNTU2Mjc0O1xuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRyZXNpemU6IG5vbmU7XG5cdCYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuXHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG5cdH1cbiAgJi5iYWNrZ3JvdW5kIHtcbiAgICAmLmJhY2tncm91bmQtZ3JheSB7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXktNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXktMTAwO1xuICAgIH1cbiAgICAmLmJhY2tncm91bmQtd2hpdGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tc3VibWl0dGVkIHtcblx0LmIyYi1uZ3gtdGV4dGFyZWEge1xuXHRcdCYubmctaW52YWxpZCB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHR9XG5cdH1cbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG4iLCJAaW1wb3J0IFwiL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzXCI7XG5cbi8vIHN0ZXBwZXJcbkBtaXhpbiBzdHlsZVN0ZXBMaW5lKCRpbmRleCkge1xuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuXHRcdCYgKyAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lOm50aC1jaGlsZCgjeyRpbmRleH0pIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDVERkY7XG5cdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdH1cblxuXHRcdCYgKyAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lOm50aC1jaGlsZCgjeyRpbmRleCArIDJ9KSB7XG5cdFx0XHRAaW5jbHVkZSBzdGVwTmV4dExpbmU7XG5cdFx0fVxuXHR9XG59XG5cbkBtaXhpbiBzdGVwTmV4dExpbmUoKSB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwNWRmZiwgcmdiYSgwLCA5MywgMjU1LCAwKSk7XG5cdGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XG5cdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXHRoZWlnaHQ6IDRweDtcblx0Ym9yZGVyOiBub25lO1xufVxuXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG5cblx0Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG5cdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG5cdFx0Lm1hdC1zdGVwLWhlYWRlciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRnYXA6IDdweDtcblx0XHRcdHBhZGRpbmc6IDA7XG5cblx0XHRcdC5tYXQtc3RlcC1sYWJlbCB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdGNvbG9yOiAjQzRDNEM0O1xuXHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KCcxJykge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYtc2VsZWN0ZWQge1xuXHRcdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5tYXQtc3RlcC1pY29uIHtcblx0XHRcdFx0d2lkdGg6IDEwcHg7XG5cdFx0XHRcdGhlaWdodDogMTBweDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXG5cdFx0XHRcdCYtc2VsZWN0ZWQsICYtc3RhdGUtZWRpdCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNURGRjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0fVxuXG5cdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Lm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjRDlEOUQ5O1xuXG5cdFx0XHQmOmZpcnN0LW9mLXR5cGUge1xuXHRcdFx0XHRtYXJnaW46IDAgLTclIDAgLTEwJTtcblx0XHRcdFx0QGluY2x1ZGUgc3RlcE5leHRMaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAtMjMlIDAgLTclO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogMDtcblx0XHRvdmVyZmxvdzogaW5pdGlhbDtcblx0fVxuXG5cdC5jZGstcHJvZ3JhbS1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0fVxufVxuXG4ubGFzdC1lZGl0ZWQtc3RlcC0xIHtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSgyKTtcbn1cblxuLmxhc3QtZWRpdGVkLXN0ZXAtMiB7XG5cdEBpbmNsdWRlIHN0eWxlU3RlcExpbmUoMik7XG5cdEBpbmNsdWRlIHN0eWxlU3RlcExpbmUoNCk7XG59XG4iLCIkYnJlYWtwb2ludC0xOiAzNmVtO1xuJGJyZWFrcG9pbnQtMjogNDhlbTtcbiRicmVha3BvaW50LTM6IDU1LjVlbTtcbiRicmVha3BvaW50LTQ6IDc1ZW07XG4kYnJlYWtwb2ludC01OiA4Ny41ZW07XG5cbiRicmVha3BvaW50czogKFxuXHRcIjFcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMSxcblx0KSxcblx0XCIyXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTIsXG5cdCksXG5cdFwiM1wiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0zLFxuXHQpLFxuXHRcIjRcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtNCxcblx0KSxcblx0XCI1XCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTUsXG5cdCksXG5cdFwiNlwiOiAoXG5cdFx0bWluLXdpZHRoOiAkYnJlYWtwb2ludC01LFxuXHQpLFxuKSAhZGVmYXVsdDtcblxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcblx0QG1lZGlhICN7aW5zcGVjdChtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKX0ge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 1541:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/client/pages/client-latest-offers/components/client-latest-offers-list/client-latest-offers-list.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLatestOffersListComponent": () => (/* binding */ ClientLatestOffersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../projects/ngx-image/src/lib/directive/ngx-image.directive */ 70239);
/* harmony import */ var _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../projects/ngx-link/src/lib/directive/ngx-link.directive */ 66612);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
 // import { B2bNgxButtonThemeEnum } from "@b2b/ngx-button";












function ClientLatestOffersListComponent_li_1_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "verified-2");
  }
}

function ClientLatestOffersListComponent_li_1_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "flame");
  }
}

function ClientLatestOffersListComponent_li_1_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "price-drop");
  }
}

function ClientLatestOffersListComponent_li_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 34)(6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36)(9, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 41)(18, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 44)(23, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "OFFERS.SELLER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.contact == null ? null : option_r1.contact.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "OFFERS.ROUTE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, option_r1.destination == null ? null : option_r1.destination.from));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.destination == null ? null : option_r1.destination.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 15, option_r1.destination == null ? null : option_r1.destination.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.destination == null ? null : option_r1.destination.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 17, "OFFERS.ETA"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 19, option_r1.createdAt), " ");
  }
}

function ClientLatestOffersListComponent_li_1_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function ClientLatestOffersListComponent_li_1_ng_container_41_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r12.b2bNgxLinkService.getLink("/offers/" + option_r1._id)))("theme", ctx_r12.b2bNgxLinkThemeEnum.BACKGROUND_LIGHT_BLUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "OFFERS.MAKE_AN_OFFER"), "");
  }
}

function ClientLatestOffersListComponent_li_1_ng_container_41_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r13.b2bNgxLinkService.getLink("/offers/" + option_r1._id + "/chat")))("theme", ctx_r13.b2bNgxLinkThemeEnum.BACKGROUND_LIGHT_BLUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "OFFERS.OPEN_CHAT"));
  }
}

function ClientLatestOffersListComponent_li_1_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientLatestOffersListComponent_li_1_ng_container_41_a_1_Template, 6, 7, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientLatestOffersListComponent_li_1_ng_container_41_a_2_Template, 6, 7, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !option_r1.isChatExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.isChatExist);
  }
}

function ClientLatestOffersListComponent_li_1_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r10.b2bNgxLinkService.getLink("/pricing")))("theme", ctx_r10.b2bNgxLinkThemeEnum.BACKGROUND_BLACK);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "OFFERS.UPGRADE"));
  }
}

function ClientLatestOffersListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientLatestOffersListComponent_li_1_img_8_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientLatestOffersListComponent_li_1_img_9_Template, 1, 1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientLatestOffersListComponent_li_1_img_10_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11)(12, "p", 12)(13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14)(16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientLatestOffersListComponent_li_1_Template_button_click_16_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const option_r1 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.emitStarClick(option_r1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClientLatestOffersListComponent_li_1_div_18_Template, 29, 21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientLatestOffersListComponent_li_1_ng_template_19_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19)(22, "p", 20)(23, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ClientLatestOffersListComponent_li_1_ng_container_41_Template, 3, 2, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ClientLatestOffersListComponent_li_1_ng_template_42_Template, 6, 7, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const option_r1 = ctx.$implicit;

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 20, ctx_r0.b2bNgxLinkService.getLink((option_r1 == null ? null : option_r1.path) ? "/offers/" + option_r1.path : "/offers/" + option_r1._id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", option_r1.previewPhoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", option_r1 == null ? null : option_r1.price == null ? null : option_r1.price.discount, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.verifiedTrack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.highDemand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r1.priceDrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.price == null ? null : option_r1.price.new);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 22, "OFFERS.PER"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 24, "UNITS." + option_r1.amount.unit.name.toUpperCase()), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 26, "OFFERS.OLD_PRICE"), " ", option_r1.price.old, "$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 28, "OFFERS.PER"), " ", (option_r1.amount == null ? null : option_r1.amount.unit == null ? null : option_r1.amount.unit._id) === "60a784830a04b16c574e8143" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 30, "UNITS.TONS_COUNT") : (option_r1.amount == null ? null : option_r1.amount.unit == null ? null : option_r1.amount.unit._id) === "60a784830a04b16c574e8145" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 32, "UNITS.QUANTITY_COUNT") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 34, "UNITS.M3_COUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", option_r1.amount == null ? null : option_r1.amount.count, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 36, "UNITS." + (option_r1.amount == null ? null : option_r1.amount.unit == null ? null : option_r1.amount.unit.name.toUpperCase())), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user)("ngIfElse", _r9);
  }
}

class ClientLatestOffersListComponent {
  constructor(b2bNgxLinkService) {
    this.b2bNgxLinkService = b2bNgxLinkService;
    this.starClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_1__.B2bNgxButtonThemeEnum;
    this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_2__.B2bNgxLinkThemeEnum;
  }

  ngOnChanges(changes) {
    if (changes && changes['options'].currentValue) {
      this.options = changes['options'].currentValue.map(el => {
        var _a;

        return { ...el,
          isChatExist: !!((_a = el.chatStarted) === null || _a === void 0 ? void 0 : _a.find(id => {
            var _a;

            return id === ((_a = this.user) === null || _a === void 0 ? void 0 : _a._id);
          }))
        };
      });
    }
  }

  emitStarClick(id, event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.starClicked.emit(id);
  }

}

ClientLatestOffersListComponent.ɵfac = function ClientLatestOffersListComponent_Factory(t) {
  return new (t || ClientLatestOffersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_3__.B2bNgxLinkService));
};

ClientLatestOffersListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ClientLatestOffersListComponent,
  selectors: [["b2b-client-latest-offers-list"]],
  inputs: {
    options: "options",
    user: "user"
  },
  outputs: {
    starClicked: "starClicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "ngx-latest-offers-list"], ["class", "ngx-latest-offers-list-item", 4, "ngFor", "ngForOf"], [1, "ngx-latest-offers-list-item"], [1, "ngx-latest-offers-list-item-link", 3, "routerLink"], [1, "ngx-latest-offers-list-item-img-wrapper"], ["b2bNgxImage", "", 1, "ngx-latest-offers-list-item-img", 3, "name"], [1, "ngx-latest-offers-list-item-img-discount"], [1, "icons"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "Verified track", "class", "ngx-saved-offers-list-item-info-icon", 3, "name", 4, "ngIf"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "This offer is in high demand!", "class", "ngx-saved-offers-list-item-info-icon", 3, "name", 4, "ngIf"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "Price Drop", "class", "ngx-saved-offers-list-item-info-icon", 3, "name", 4, "ngIf"], [1, "ngx-latest-offers-list-item-info"], [1, "ngx-latest-offers-list-item-info-title"], [1, "ngx-latest-offers-list-item-info-title-text"], [1, "ngx-latest-offers-list-item-info-title-icon"], [3, "click"], ["b2bNgxIcon", "", "name", "star", "alt", "", 1, "ngx-latest-offers-list-item-info-title-star"], ["class", "ngx-latest-offers-list-item-additional-info", 4, "ngIf", "ngIfElse"], ["noUser", ""], [1, "ngx-latest-offers-list-item-price-container"], [1, "ngx-latest-offers-list-item-price"], [1, "ngx-latest-offers-list-item-price-dollar-sign"], [1, "ngx-latest-offers-list-item-price-number"], [1, "ngx-latest-offers-list-item-price-amount"], [1, "ngx-latest-offers-list-item-old-price"], [1, "ngx-latest-offers-list-item-available"], [4, "ngIf", "ngIfElse"], ["noUserButton", ""], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "Verified track", 1, "ngx-saved-offers-list-item-info-icon", 3, "name"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "This offer is in high demand!", 1, "ngx-saved-offers-list-item-info-icon", 3, "name"], ["b2bNgxIcon", "", "ngxTippy", "", "data-tippy-content", "Price Drop", 1, "ngx-saved-offers-list-item-info-icon", 3, "name"], [1, "ngx-latest-offers-list-item-additional-info"], [1, "ngx-latest-offers-list-item-additional-info-seller"], [1, "ngx-latest-offers-list-item-additional-info-seller-text"], [1, "ngx-latest-offers-list-item-additional-info-seller-container"], [1, "ngx-latest-offers-list-item-additional-info-seller-name"], [1, "ngx-latest-offers-list-item-additional-info-route"], [1, "ngx-latest-offers-list-item-additional-info-route-title"], [1, "ngx-latest-offers-list-item-additional-info-route-router-from-to"], ["b2bNgxIcon", "", "group", "flags/", 1, "ngx-latest-offers-list-item-additional-info-route-first-country-icon", 3, "name"], [1, "ngx-latest-offers-list-item-additional-info-route-first-country-name"], ["b2bNgxIcon", "", "name", "arrow-r-blue-2", 1, "ngx-latest-offers-list-item-additional-info-route-arrow-icon"], ["b2bNgxIcon", "", "group", "flags/", 1, "ngx-latest-offers-list-item-additional-info-route-second-country-icon", 3, "name"], [1, "ngx-latest-offers-list-item-additional-info-route-second-country-name"], [1, "ngx-latest-offers-list-item-additional-info-eta"], [1, "ngx-latest-offers-list-item-additional-info-eta-title"], [1, "ngx-latest-offers-list-item-additional-info-eta-description"], [1, "no-user"], ["b2bNgxImage", "", "name", "blured-offer-2", 1, "no-user-img"], ["b2bNgxLink", "", "class", "ngx-latest-offers-list-item-button", 3, "routerLink", "theme", 4, "ngIf"], ["b2bNgxLink", "", 1, "ngx-latest-offers-list-item-button", 3, "routerLink", "theme"], ["b2bNgxIcon", "", "name", "chat-blue"], [1, "ngx-latest-offers-list-item-button-text"], ["b2bNgxIcon", "", "name", "upgrade", 1, "update-icon"]],
  template: function ClientLatestOffersListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientLatestOffersListComponent_li_1_Template, 44, 38, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_6__.B2bNgxIconDirective, _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_7__.B2bNgxImageDirective, _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_8__.B2bNgxLinkDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 8px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%] {\n  height: 152px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  background: #ffffff;\n  box-shadow: 2px 2px 8px #e3eaf1;\n  border-radius: 4px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-img-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-img-wrapper[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-img[_ngcontent-%COMP%] {\n  min-height: 148px;\n  height: 100%;\n  width: 158px;\n  border-radius: 4px 0 0 4px;\n  object-fit: cover;\n  border: none;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-img-wrapper[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 158px;\n  }\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-img-wrapper[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-img-discount[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 20px;\n  background: #0f0f11;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 0px 3px 3px 0px;\n  color: #ffffff;\n  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  padding: 4px 8px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info-title[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info-title-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: #0f0f11;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller[_ngcontent-%COMP%] {\n  flex: 1;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #9fa4bb;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller-logo[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller-name[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-seller-verified[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route[_ngcontent-%COMP%] {\n  flex: 1;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #9fa4bb;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-router-from-to[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-router-from-to[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-first-country-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 18px;\n  object-fit: cover;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-router-from-to[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-first-country-name[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  text-transform: uppercase;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-router-from-to[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-arrow-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-router-from-to[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-second-country-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  width: 26px;\n  height: 18px;\n  object-fit: cover;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-router-from-to[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-route-second-country-name[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  text-transform: uppercase;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-eta[_ngcontent-%COMP%] {\n  flex: 1;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-eta[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-eta-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #9fa4bb;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-eta[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-additional-info-eta-description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #0f0f11;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 15px 17px;\n  border-left: 1px solid #dfe8f5;\n  text-align: center;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  height: 28px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-dollar-sign[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #9fa4bb;\n  font-size: 28px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-number[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 28px;\n  color: #0f0f11;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(108, 112, 119, 0.6);\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-old-price[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 10px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-available[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  color: #0f0f11;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n  padding: 10px 25px;\n  width: 180px;\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-button[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-button-text[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-price-container[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-button[_ngcontent-%COMP%] {\n    margin: 10px auto 0;\n  }\n}[_nghost-%COMP%]   .ngx-latest-offers-list[_ngcontent-%COMP%]   .ngx-latest-offers-list-item[_ngcontent-%COMP%]   .ngx-latest-offers-list-item-link[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}[_nghost-%COMP%]   .no-user[_ngcontent-%COMP%] {\n  position: relative;\n}[_nghost-%COMP%]   .no-user[_ngcontent-%COMP%]   .no-user-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n}.update-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}.icons[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n  padding: 5px 10px;\n  border-radius: 3px;\n}.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  width: 20px;\n}.icons[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJjbGllbnQtbGF0ZXN0LW9mZmVycy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNlbGVjdC9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYnV0dG9uL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGluay9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWlucHV0L3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaWNvbi9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRleHRhcmVhL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9tYXRlcmlhbC1vdmVycmlkZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsQ0NBaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9COztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUUsRUFBRSxDQUNKO0lBQ0Usd0JBQXdCLEVBQUUsQ0FDNUI7OztJQUtFLHNCQUFzQixFQUFFLENBQzFCO0lBQ0UsZ0JBQWdCLEVBQUUsQ0FDcEI7SUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGdCQUFnQjtJQUNoQixpQ0FBaUMsRUFBRSxDQUNyQztJQUNFLG1CQUFtQixFQUFFLENBQ3JCO01BQ0UsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBRSxDQUM3QjtJQUNFLG1CQUFtQixFQUFFLENBQ3JCO01BQ0UsbUJBQW1CLEVBQUUsQ0FDckI7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQzNCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMvQjs7O0lBT0UsYUFBYTtJQUNiLG1CQUFtQjtJQUluQixpQkFBaUI7SUFDakIsY0FBYyxFQUFFLENBQ2xCOztJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFFLENBQ3BCOztNQUVFLGFBQWEsRUFBRSxDQUNuQjs7SUFFRSxVQUFVLEVBQUUsQ0FDZDs7OztJQUlFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsY0FBYztJ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QUNFLHlCRFhVO0FGb1NsQixDR3RSSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FId1JOLENHdlJNO0VBQ0UseUJBQUE7QUh5UlIsQ0d0Ukk7RUFDRSw2QkFBQTtFQUNBLGNEbEJXO0FGMFNqQixDR3ZSTTtFQUNFLHlCRDFCVTtBRm1UbEIsQ0d0Ukk7RUFDRSx5QkQ1Qlc7RUM2QlgsY0RqQ1k7QUZ5VGxCLENHdlJNO0VBQ0UseUJEOUJTO0FGdVRqQixDR3RSSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUh3Uk4sQ0d2Uk07RUFDRSx5QkQ5Q1U7RUMrQ1YscUJEL0NVO0VDZ0RWLFlBQUE7QUh5UlIsQ0dwUkk7RUFDRSxxQkR0RFk7QUY0VWxCLENHclJNO0VBQ0UseUJEbERVO0FGeVVsQixDR3BSSTtFQUNFLHFCRHhEWTtBRjhVbEIsQ0dyUk07RUFDRSx5QkR4RFU7QUYrVWxCLENHcFJJO0VBQ0UscUJEMURXO0FGZ1ZqQixDR3JSTTtFQUNFLHlCRDNEUztBRmtWakIsQ0dwUkk7RUFDRSxxQkFBQTtBSHNSTixDR3JSTTtFQUNFLHlCRHBFVTtBRjJWbEIsQ0dsUkU7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0FIb1JKLENHblJJO0VBQ0UscURBQUE7QUhxUk4sQ0l2V0E7RUFDQyxnQkFBQTtFQUNBLDZCQUFBO0FKMFdELENJdldFO0VBQ0MsY0ZDYztBRndXakIsQ0l0V0U7RUFDQyxjRlhlO0FGbVhsQixDSXJXRTtFQUNDLGNGWGU7QUZrWGxCLENJcFdFO0VBQ0MsY0ZMYztBRjJXakIsQ0luV0U7RUFDQywwQkFBQTtBSnFXSCxDSWpXQztFQUNDLGlDQUFBO0FKbVdGLENJaldFO0VBQ0MseUJGM0JlO0VFNEJmLGNGaENlO0FGbVlsQixDSWxXRztFQUNDLHlCRjdCYztBRmlZbEIsQ0loV0U7RUFDQyw2QkFBQTtFQUNBLGNGeENlO0FGMFlsQixDSWpXRztFQUNDLHlCRnBDYztBRnVZbEIsQ0kvVkU7RUFDQyx5QkZ2Q2M7RUV3Q2QsY0Y1Q2U7QUY2WWxCLENJOVZFO0VBQ0MseUJGcERlO0VFcURmLGNGakRlO0FGaVpsQixDSS9WRztFQUNDLHlCRnREYztBRnVabEIsQ0k3VkU7RUFDQyx5QkZwRGM7RUVxRGQsY0Z6RGU7QUZ3WmxCLENJOVZHO0VBQ0MseUJGdERhO0FGc1pqQixDSTVWRTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7QUo4VkgsQ0k3Vkc7RUFDQyx5QkFBQTtBSitWSixDSTdWRztFQUNDLG1CQUFBO0FKK1ZKLENJelZFO0VBQ0MscUJGN0VlO0FGd2FsQixDSTFWRztFQUNDLHlCRmxGYztBRjhhbEIsQ0s5YUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBTGliRCxDSzlhQTtFQUNDLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBTGliRCxDSy9hRTtFQUNDLGNIRmM7RUdHZCx5QkFBQTtBTGliSCxDSy9hRTtFQUNDLHlCSGpCZTtBRmtjbEIsQ0s5YUM7RUFDQyx5Q0hKYTtFR0tiLHFCSE5jO0FGc2JoQixDS3phRztFQUNDLHlDSGJXO0VHY1gscUJIZlk7QUYyYmhCLENLdGFBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUx5YUQsQ01wZEM7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCSmFlO0VJWmYsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBTnVkRixDTy9kQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FQa2VELENPaGVBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0MsaURBQUE7RUFDRCxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FQbWVELENPbGVDO0VBQ0MseUNMRWE7RUtEYixxQkFBQTtBUG9lRixDT2plSTtFQUNFLGNMVFc7RUtVWCx5QkxQVztBRjBlakIsQ09qZUk7RUFDRSx5Qkx4Qlk7QUYyZmxCLENPNWRFO0VBQ0MseUNMZlk7RUtnQloscUJMakJhO0FGZ2ZoQixDTzFkQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FQNmRELENRbGZDO0VBQ0Msb0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QVJxZkYsQ1FuZkU7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QVJxZkgsQ1FuZkc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QVJxZkosQ1NwZ0JDO0VEV0U7SUFNRSxlQUFBO0VSdWZIO0FBQ0YsQ1FyZkk7RUFDQyxjQUFBO0FSdWZMLENRbmZHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QVJxZkosQ1FuZkk7RUFDQyx5QkFBQTtBUnFmTCxDUWxmSTtFQUNDLGFBQUE7QVJvZkwsQ1FoZkc7RUFDQyx1QkFBQTtBUmtmSixDUS9lRztFQUNDLHFCQUFBO0FSaWZKLENRN2VFO0VBQ0MseUJBQUE7QVIrZUgsQ1E3ZUc7RUFDQyxvQkFBQTtFQWhFSCxzRUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBUmdqQkQsQ1FoZkc7RUFDQyxvQkFBQTtBUmtmSixDUTdlQztFQUNDLFVBQUE7RUFDQSxpQkFBQTtBUitlRixDUTVlQztFQUNDLHVCQUFBO0FSOGVGLENRMWtCRTtFQUNDLHlCQUFBO0VBQ0EseUJBQUE7QVI2a0JILENRMWtCRTtFQU9ELHNFQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FSc2tCRCxDUXRsQkU7RUFDQyx5QkFBQTtFQUNBLHlCQUFBO0FSeWxCSCxDUXRsQkU7RUFPRCxzRUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBUmtsQkQsQ1FsbUJFO0VBQ0MseUJBQUE7RUFDQSx5QkFBQTtBUm9tQkgsQ1FqbUJFO0VBT0Qsc0VBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QVI2bEJELENBOW1CRTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQWluQkgsQ0FobkJHO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFrbkJKLENBam5CSTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBQW1uQkwsQ1N4bUJDO0VUYkc7SUFJRSxXQUFBO0VBcW5CSjtBQUNGLENBcG5CSztFQUNDLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXNuQk4sQ1NybkJDO0VUUEk7SUFRRSxXQUFBO0lBQ0EsYUFBQTtFQXduQkw7QUFDRixDQXRuQks7RUFDQyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUF3bkJOLENBcm5CSTtFQUNDLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBdW5CTCxDUzdvQkM7RVRpQkc7SUFPRSxXQUFBO0VBeW5CSjtBQUNGLENBeG5CSztFQUNDLGFBQUE7RUFDQSw4QkFBQTtBQTBuQk4sQ0F6bkJNO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTJuQlAsQ0F4bkJLO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBMG5CTixDQXpuQk07RUFDQyxPQUFBO0FBMm5CUCxDQTFuQk87RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUE0bkJSLENBMW5CTztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBNG5CUixDQTNuQlE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQTZuQlQsQ0EzbkJRO0VBQ0MsZ0JBQUE7QUE2bkJULENBM25CUTtFQUNDLGdCQUFBO0FBNm5CVCxDQXpuQk07RUFDQyxPQUFBO0FBMm5CUCxDQTFuQk87RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUE0bkJSLENBMW5CTztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBNG5CUixDQTNuQlE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBNm5CVCxDQTNuQlE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0FBNm5CVCxDQTNuQlE7RUFDQyxnQkFBQTtBQTZuQlQsQ0EzbkJRO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBNm5CVCxDQTNuQlE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0FBNm5CVCxDQXpuQk07RUFDQyxPQUFBO0FBMm5CUCxDQTFuQk87RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUE0bkJSLENBMW5CTztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE0bkJSLENBdm5CSTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBeW5CTCxDU2p2QkM7RVRrSEc7SUFRRSxXQUFBO0VBMm5CSjtBQUNGLENBMW5CSztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQTRuQk4sQ0EzbkJNO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTZuQlAsQ0EzbkJNO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTZuQlAsQ0EzbkJNO0VBQ0MsZUFBQTtFQUNBLCtCQUFBO0FBNm5CUCxDQTFuQks7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNG5CTixDQTFuQks7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNG5CTixDQTFuQks7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBNG5CTixDQTNuQk07RUFDQyxnQkFBQTtBQTZuQlAsQ1N4eUJDO0VUbUtJO0lBWUUsbUJBQUE7RUE2bkJMO0FBQ0YsQ0ExbkJJO0VBQ0MsYUFBQTtBQTRuQkwsQ0F0bkJDO0VBQ0Msa0JBQUE7QUF3bkJGLENBdm5CRTtFQUNDLGlCQUFBO0VBQ0EsV0FBQTtBQXluQkgsQ0FwbkJBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUF1bkJELENBcG5CQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXVuQkQsQ0F0bkJDO0VBQ0MsYUFBQTtFQUNBLFdBQUE7QUF3bkJGLENBdG5CQztFQUNDLGFBQUE7QUF3bkJGIiwiZmlsZSI6ImNsaWVudC1sYXRlc3Qtb2ZmZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnN0cmlwZWQgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1yaWdodCxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5kcmFnZ2luZyAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDlkOGQ5OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQxZjk7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2Y2M4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDsgfVxuICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTsgfSB9XG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtcmlnaHQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtbGVmdD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi1ib3R0b206NXB4O2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dD5pbnB1dHtjb2xvcjojMDAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3RvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O3BhZGRpbmctbGVmdDozcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntwYWRkaW5nLXJpZ2h0OjNweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcjpob3ZlciAubmctY2xlYXJ7Y29sb3I6I0QwMDIxQn0ubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggNXB4IDAgMH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCAwIDAgNXB4fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7d2lkdGg6MjVweDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcjpob3ZlciAubmctYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjojNjY2fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93e2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAyLjVweH0ubmctZHJvcGRvd24tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KTtsZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3B7Ym90dG9tOjEwMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3AgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHR7bGVmdDoxMDAlO3RvcDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXJpZ2h0IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbXt0b3A6MTAwJTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZTZlNmU2O21hcmdpbi10b3A6LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnR7bGVmdDotMTAwJTt0b3A6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsImh0bWwsXG5ib2R5IHtcblx0c2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuKiB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0Jjp2aXNpdGVkIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxufVxuXG5idXR0b24ge1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5pIHtcblx0Zm9udC1zdHlsZTogSXRhbGljO1xufVxuXG5iIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXNcIjtcblxuOmhvc3Qge1xuXHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdCB7XG5cdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbSB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWxpbmsge1xuXHRcdFx0XHRoZWlnaHQ6IDE1MnB4O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHRcdFx0Ym94LXNoYWRvdzogMnB4IDJweCA4cHggI2UzZWFmMTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWltZy13cmFwcGVyIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWltZyB7XG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAxNDhweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxNThweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE1OHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWltZy1kaXNjb3VudCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0dG9wOiAyMHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzBmMGYxMTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDBweCAzcHggM3B4IDBweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHRcdFx0dGV4dC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggOHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWluZm8ge1xuXHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0cGFkZGluZzogMjBweCAyNXB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0taW5mby10aXRsZSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1pbmZvLXRpdGxlLXRleHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1hZGRpdGlvbmFsLWluZm8ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLXNlbGxlciB7XG5cdFx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLXNlbGxlci10ZXh0IHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjOWZhNGJiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLXNlbGxlci1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLXNlbGxlci1sb2dvIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyNHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyNHB4O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWFkZGl0aW9uYWwtaW5mby1zZWxsZXItbmFtZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWFkZGl0aW9uYWwtaW5mby1zZWxsZXItdmVyaWZpZWQge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLXJvdXRlIHtcblx0XHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1hZGRpdGlvbmFsLWluZm8tcm91dGUtdGl0bGUge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5ZmE0YmI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1hZGRpdGlvbmFsLWluZm8tcm91dGUtcm91dGVyLWZyb20tdG8ge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLXJvdXRlLWZpcnN0LWNvdW50cnktaWNvbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjZweDtcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWFkZGl0aW9uYWwtaW5mby1yb3V0ZS1maXJzdC1jb3VudHJ5LW5hbWUge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLXJvdXRlLWFycm93LWljb24ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1hZGRpdGlvbmFsLWluZm8tcm91dGUtc2Vjb25kLWNvdW50cnktaWNvbiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDI2cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1hZGRpdGlvbmFsLWluZm8tcm91dGUtc2Vjb25kLWNvdW50cnktbmFtZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLWV0YSB7XG5cdFx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYWRkaXRpb25hbC1pbmZvLWV0YS10aXRsZSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzlmYTRiYjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLWFkZGl0aW9uYWwtaW5mby1ldGEtZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tcHJpY2UtY29udGFpbmVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE1cHggMTdweDtcblx0XHRcdFx0XHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZmU4ZjU7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubmd4LWxhdGVzdC1vZmZlcnMtbGlzdC1pdGVtLXByaWNlIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjhweDtcblx0XHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tcHJpY2UtZG9sbGFyLXNpZ24ge1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzlmYTRiYjtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1wcmljZS1udW1iZXIge1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1wcmljZS1hbW91bnQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tb2xkLXByaWNlIHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYXZhaWxhYmxlIHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5uZ3gtbGF0ZXN0LW9mZmVycy1saXN0LWl0ZW0tYnV0dG9uIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweCAyNXB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE4MHB4O1xuXHRcdFx0XHRcdFx0Lm5neC1sYXRlc3Qtb2ZmZXJzLWxpc3QtaXRlbS1idXR0b24tdGV4dCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA4cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMHB4IGF1dG8gMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5uby11c2VyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Lm5vLXVzZXItaW1nIHtcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG59XG5cbi51cGRhdGUtaWNvbiB7XG5cdGhlaWdodDogMTZweDtcblx0d2lkdGg6IDE2cHg7XG59XG5cbi5pY29ucyB7XG5cdHotaW5kZXg6IDI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDVweDtcblx0dG9wOiAxMHB4O1xuXHRwYWRkaW5nOiA1cHggMTBweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRpbWcge1xuXHRcdG1hcmdpbjogMCA1cHg7XG5cdFx0d2lkdGg6IDIwcHg7XG5cdH1cblx0JjplbXB0eSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB7XG4gIGZvcm0ge1xuICAgIGIyYi1uZ3gtc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1zZWxlY3Qge1xuICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBiMmItbmd4LWNvdW50cnktc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1jb3VudHJ5LXNlbGVjdCB7XG4gICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUsXG4ubmctc2VsZWN0LW9wZW5lZCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gIH1cblxuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMTUsIDE3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuICAgIC5uZy12YWx1ZSB7XG4gICAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUge1xuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1ibGFjay05MDA6ICMwMDAwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMGYwZjExO1xuJGNvbG9yLWJsYWNrLTEwMDogIzJlMmUzNDtcbiRjb2xvci1ibGFjay01MDogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjYpO1xuXG4kY29sb3Itd2hpdGUtOTAwOiAjZmZmZmZmO1xuJGNvbG9yLXdoaXRlLTIwMDogI2UzZWFmMTtcbiRjb2xvci13aGl0ZS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1ibHVlLTUwMDogIzAwNWRmZjtcbiRjb2xvci1ibHVlLTEwMDogIzU5OTVmZTtcbiRjb2xvci1ibHVlLTUwOiAjZDJkZWZmO1xuXG4kY29sb3ItZ3JheS05MDA6ICMwZjBmMTE7XG4kY29sb3ItZ3JheS02MDA6ICMyMjIyMjQ7XG4kY29sb3ItZ3JheS01MDA6ICM1NTYyNzQ7XG4kY29sb3ItZ3JheS00MDA6ICM2YzcwNzc7XG4kY29sb3ItZ3JheS0zMDA6ICNhN2E4YWQ7XG4kY29sb3ItZ3JheS0yMDA6ICM5ZmE0YmI7XG4kY29sb3ItZ3JheS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1yZWQtNTAwOiAjZTYzZDNkO1xuJGNvbG9yLXJlZC01MDogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWJ1dHRvbiB7XG4gIGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgJi5iYWNrZ3JvdW5kIHtcbiAgICAmLmJhY2tncm91bmQtYmxhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTkwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1yZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2M2QzZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLWJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtaG92ZXItYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5vdXRsaW5lIHtcbiAgICAmLm91dGxpbmUtYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS13aGl0ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLWJsdWUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtZ3JheSB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmU4ZjU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stNTAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMCAhaW1wb3J0YW50O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTUwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWxpbmsge1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuXHQmLnRleHQge1xuXHRcdCYudGV4dC1ibHVlIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LWJsYWNrIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC13aGl0ZSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtZ3JheSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNTAwO1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0fVxuXHR9XG5cblx0Ji5iYWNrZ3JvdW5kIHtcblx0XHRib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cblx0XHQmLmJhY2tncm91bmQtd2hpdGUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0yMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtZ3JheSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtYmxhY2sge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWJsdWUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1saWdodC1ibHVlIHtcblx0XHRcdGJhY2tncm91bmQ6ICNlZmY0ZmE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y29sb3I6ICMwMDVkZmYgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTZlZGZhO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCYub3V0bGluZSB7XG5cdFx0Ji5vdXRsaW5lLXdoaXRlIHtcblx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1pbnB1dC1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5iMmItbmd4LWlucHV0IHtcblx0Ym9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjNTU2Mjc0O1xuXHQmLmJhY2tncm91bmQge1xuXHRcdCYuYmFja2dyb3VuZC1ncmF5IHtcblx0XHRcdGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0fVxuXHRcdCYuYmFja2dyb3VuZC13aGl0ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblx0fVxuXHQmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHR9XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCB7XG5cdC5iMmItbmd4LWlucHV0IHtcblx0XHQmLmJhY2tncm91bmQge1xuXHRcdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWljb24ge1xuXHQmLmNpcmNsZSB7XG5cdFx0aGVpZ2h0OiAzcmVtO1xuXHRcdHdpZHRoOiAzcmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC10ZXh0YXJlYS1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uYjJiLW5neC10ZXh0YXJlYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogI2YzZjZmODtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM1NTYyNzQ7XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdHJlc2l6ZTogbm9uZTtcblx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0fVxuICAmLmJhY2tncm91bmQge1xuICAgICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1zdWJtaXR0ZWQge1xuXHQuYjJiLW5neC10ZXh0YXJlYSB7XG5cdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdH1cblx0fVxufVxuXG4uY29udHJvbC1lcnJvciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbiIsIkBpbXBvcnQgXCIvcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHNcIjtcblxuLy8gc3RlcHBlclxuQG1peGluIHN0eWxlU3RlcExpbmUoJGluZGV4KSB7XG5cdC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4fSkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNURGRjtcblx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4ICsgMn0pIHtcblx0XHRcdEBpbmNsdWRlIHN0ZXBOZXh0TGluZTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIHN0ZXBOZXh0TGluZSgpIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1ZGZmLCByZ2JhKDAsIDkzLCAyNTUsIDApKTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdGhlaWdodDogNHB4O1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcblxuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cblx0XHQubWF0LXN0ZXAtaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdGdhcDogN3B4O1xuXHRcdFx0cGFkZGluZzogMDtcblxuXHRcdFx0Lm1hdC1zdGVwLWxhYmVsIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRcdFx0Y29sb3I6ICNDNEM0QzQ7XG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoJzEnKSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCB7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm1hdC1zdGVwLWljb24ge1xuXHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCwgJi1zdGF0ZS1lZGl0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hdC1zdGVwLWljb24tY29udGVudCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNEOUQ5RDk7XG5cblx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAtNyUgMCAtMTAlO1xuXHRcdFx0XHRAaW5jbHVkZSBzdGVwTmV4dExpbmU7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdFx0bWFyZ2luOiAwIC0yMyUgMCAtNyU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG92ZXJmbG93OiBpbml0aWFsO1xuXHR9XG5cblx0LmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTEge1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDIpO1xufVxuXG4ubGFzdC1lZGl0ZWQtc3RlcC0yIHtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSgyKTtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSg0KTtcbn1cbiIsIiRicmVha3BvaW50LTE6IDM2ZW07XG4kYnJlYWtwb2ludC0yOiA0OGVtO1xuJGJyZWFrcG9pbnQtMzogNTUuNWVtO1xuJGJyZWFrcG9pbnQtNDogNzVlbTtcbiRicmVha3BvaW50LTU6IDg3LjVlbTtcblxuJGJyZWFrcG9pbnRzOiAoXG5cdFwiMVwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0xLFxuXHQpLFxuXHRcIjJcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMixcblx0KSxcblx0XCIzXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTMsXG5cdCksXG5cdFwiNFwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC00LFxuXHQpLFxuXHRcIjVcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtNSxcblx0KSxcblx0XCI2XCI6IChcblx0XHRtaW4td2lkdGg6ICRicmVha3BvaW50LTUsXG5cdCksXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuXHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 20699:
/*!********************************************************************************!*\
  !*** ./src/app/client/pages/client-latest-offers/enums/show-more-mode.enum.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowMoreModeEnum": () => (/* binding */ ShowMoreModeEnum)
/* harmony export */ });
var ShowMoreModeEnum;
(function (ShowMoreModeEnum) {
    ShowMoreModeEnum["IN"] = "in";
    ShowMoreModeEnum["OUT"] = "out";
})(ShowMoreModeEnum || (ShowMoreModeEnum = {}));


/***/ }),

/***/ 83692:
/*!********************************************************************************************!*\
  !*** ./src/app/client/pages/client-latest-offers/layout/client-latest-offers.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLatestOffersComponent": () => (/* binding */ ClientLatestOffersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 26469);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 61755);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _enums_show_more_mode_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/show-more-mode.enum */ 20699);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @b2b/ngx-select */ 20592);
/* harmony import */ var _shared_enums_browser_storage_keys_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/enums/browser-storage-keys.enum */ 82890);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_offers_offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/offers/offers.service */ 36521);
/* harmony import */ var _services_categories_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories/categories.service */ 57454);
/* harmony import */ var _services_transport_types_transport_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/transport-types/transport-types.service */ 4904);
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../auth/services/auth/auth.service */ 24159);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../projects/ngx-country-select/src/lib/layout/ngx-country-select.component */ 11070);
/* harmony import */ var _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../projects/ngx-link/src/lib/directive/ngx-link.directive */ 66612);
/* harmony import */ var _projects_ngx_treeview_src_lib_layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../projects/ngx-treeview/src/lib/layout/ngx-treeview.component */ 53278);
/* harmony import */ var _components_client_latest_offers_grid_client_latest_offers_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/client-latest-offers-grid/client-latest-offers-grid.component */ 88916);
/* harmony import */ var _components_client_latest_offers_list_client_latest_offers_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/client-latest-offers-list/client-latest-offers-list.component */ 1541);
































function ClientLatestOffersComponent_p_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "SHOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "b2b-ngx-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 3, "OFFERS.SHOW"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", ctx_r1.b2bNgxSelectThemeEnum.BACKGROUND_TRANSPARENT)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 5, "PLACEHOLDERS.SELECT_SHOW_TYPE"));
  }
}

function ClientLatestOffersComponent_ng_container_68_ng_container_1_b2b_client_latest_offers_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b2b-client-latest-offers-list", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("starClicked", function ClientLatestOffersComponent_ng_container_68_ng_container_1_b2b_client_latest_offers_list_1_Template_b2b_client_latest_offers_list_starClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.toggleFavoriteOffers($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const offers_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx_r11.user$))("options", offers_r9);
  }
}

function ClientLatestOffersComponent_ng_container_68_ng_container_1_b2b_client_latest_offers_grid_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b2b-client-latest-offers-grid", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("starClicked", function ClientLatestOffersComponent_ng_container_68_ng_container_1_b2b_client_latest_offers_grid_2_Template_b2b_client_latest_offers_grid_starClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.toggleFavoriteOffers($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const offers_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 2, ctx_r12.user$))("options", offers_r9);
  }
}

function ClientLatestOffersComponent_ng_container_68_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ClientLatestOffersComponent_ng_container_68_ng_container_1_b2b_client_latest_offers_list_1_Template, 2, 4, "b2b-client-latest-offers-list", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ClientLatestOffersComponent_ng_container_68_ng_container_1_b2b_client_latest_offers_grid_2_Template, 2, 4, "b2b-client-latest-offers-grid", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.offersListTheme === "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.offersListTheme === "grid");
  }
}

function ClientLatestOffersComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ClientLatestOffersComponent_ng_container_68_ng_container_1_Template, 3, 2, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const offers_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](73);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", offers_r9.length)("ngIfElse", _r5);
  }
}

function ClientLatestOffersComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 47)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", ctx_r4.b2bNgxLinkThemeEnum.BACKGROUND_BLACK)("routerLink", "/auth/log-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 3, "OFFERS.UPGRADE_TO_SEE_MORE"));
  }
}

function ClientLatestOffersComponent_ng_template_72_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}

function ClientLatestOffersComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ClientLatestOffersComponent_ng_template_72_ng_container_0_Template, 1, 0, "ng-container", 38);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](75);

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.loading)("ngIfElse", _r7);
  }
}

function ClientLatestOffersComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51)(1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientLatestOffersComponent_ng_template_74_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", ctx_r8.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "OFFERS.VIEW_ALL_OFFERS"), " ");
  }
}

const _c0 = function (a0) {
  return {
    "rotated-img": a0
  };
};

function toFlat(arr) {
  return arr.reduce((pre, {
    children = [],
    ...cur
  }) => [...pre, ...toFlat(children), cur], []);
}

function generateQueryString(obj) {
  return Object.entries(obj).filter(([key, value]) => !!value).reduce((queryString, [key, value]) => {
    return Array.isArray(value) ? `${queryString}${value.reduce((str, arrayItem, index) => `${str}${key}=${arrayItem}&`, "")}` : `${queryString}${key}=${value}&`;
  }, "?");
}

let ClientLatestOffersComponent = class ClientLatestOffersComponent {
  constructor(_formBuilder, _offersService, _categoriesService, _transportTypesService, _authService, _hotToastService, b2bNgxLinkService, translateService, _router, _route) {
    this._formBuilder = _formBuilder;
    this._offersService = _offersService;
    this._categoriesService = _categoriesService;
    this._transportTypesService = _transportTypesService;
    this._authService = _authService;
    this._hotToastService = _hotToastService;
    this.b2bNgxLinkService = b2bNgxLinkService;
    this.translateService = translateService;
    this._router = _router;
    this._route = _route;
    this.offersListTheme = 'list';
    this.showMoreModeEnum = _enums_show_more_mode_enum__WEBPACK_IMPORTED_MODULE_0__.ShowMoreModeEnum;
    this.forceUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.currentPageSource = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(1);
    this.setInitialPromoState();
    this.offersSkeletonOptions = this.getOffersSkeletonOptions();
    this.offersListTheme = "grid";
    this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_11__.B2bNgxInputThemeEnum;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_12__.B2bNgxButtonThemeEnum;
    this.b2bNgxSelectThemeEnum = _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_13__.B2bNgxSelectThemeEnum;
    this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__.B2bNgxLinkThemeEnum;
    this.sortTypes = this.getSortTypes();
    this.formGroup = this.getFormGroup();
    this.formGroup.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this)).subscribe(val => {
      var _a;

      if (val.transportType || val.destinationTo || val.destinationFrom || ((_a = val["categories[]"]) === null || _a === void 0 ? void 0 : _a.length) > 0) {}
    });
    this.categories$ = this.getCategories();
    this.transportTypes$ = this._transportTypesService.getTransportTypes().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(transports => transports.map(transport => ({ ...transport,
      displayName: this.translateService.instant(transport.displayName)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(transports => this.localTransportTypes = transports));
    this.offers$ = this.getOffers();
    this.user$ = this._authService.getUser();
    this.offersCount$ = this._offersService.getAllOffersCount();
  }

  ngOnInit() {
    setTimeout(() => {
      this.formGroup.updateValueAndValidity();
    }, 100);
    this.offersPageInit();
  }

  get currentPage$() {
    return this.currentPageSource.asObservable();
  }

  toggleShowMoreMode() {
    this.showMoreMode = this.showMoreMode === _enums_show_more_mode_enum__WEBPACK_IMPORTED_MODULE_0__.ShowMoreModeEnum.OUT ? 'in' : 'out';
  }

  groupValueFn(value, ...args) {
    return value.value;
  }

  getCategoriesNames(categoriesIds) {
    const parsedCategories = this.parseCategories(this.localCategories);
    return categoriesIds.map(el => parsedCategories[el].text);
  }

  parseCategories(categories, level = 1) {
    return categories.reduce((pre, curr) => {
      return { ...pre,
        [curr.value]: { ...curr,
          level
        },
        ...(curr.children && curr.children.length ? this.parseCategories([...curr.children], level + 1) : [])
      };
    }, {});
  }

  getCategories() {
    return this._categoriesService.getCategories$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(({
      categories
    }) => categories.map(category => ({
      text: category.name,
      value: category._id,
      collapsed: true,
      checked: false,
      children: category.children.map(level2Category => ({
        text: level2Category.name,
        value: level2Category._id,
        collapsed: true,
        checked: false // children: level2Category.children.map((level3Category) => ({
        // 	text: level3Category.name,
        // 	value: level3Category._id,
        // 	collapsed: true,
        // 	checked: false,
        // })),

      }))
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(categories => this.localCategories = categories));
  }

  getOffers() {
    this.loading = true;
    return this.formGroup.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(filters => {
      const queryString = generateQueryString(filters);
      return this.forceUpdate.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(() => this._offersService.getOffers(queryString)));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(offers => offers.filter(offer => !offer.hidden)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(() => {
      this.loading = false;
    }));
  }

  clearFilters() {
    this.formGroup.reset();
  }

  getFormGroup() {
    return this._formBuilder.group({
      "transportType": null,
      "categories[]": null,
      "destinationFrom": null,
      "destinationTo": null,
      "sort": null,
      "q": null,
      "offset": 0,
      "limit": 12
    });
  }

  getSortTypes() {
    return [{
      label: this.translateService.instant("PLACEHOLDERS.SORT_RECENT"),
      value: "createdAt"
    }, {
      label: this.translateService.instant("PLACEHOLDERS.SORT_RECOMMENDED"),
      value: "DESC"
    }];
  }

  changeOffersListTheme(theme) {
    this.offersListTheme = theme;
  }

  toggleFavoriteOffers(offer) {
    if (offer.isSaved) {
      this._offersService.removeFavoriteOffer(offer._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this), this._hotToastService.observe({
        loading: this.translateService.instant("OFFERS.REMOVE_FROM_SAVED_LOADING"),
        success: this.translateService.instant("OFFERS.REMOVE_FROM_SAVED_SUCCESS"),
        error: this.translateService.instant("OFFERS.REMOVE_FROM_SAVED_ERROR")
      })).subscribe(response => {
        this.forceUpdate.next(true);
      });
    } else {
      this._offersService.addFavoriteOffer(offer._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this), this._hotToastService.observe({
        loading: this.translateService.instant("OFFERS.ADDED_TO_SAVED_LOADING"),
        success: this.translateService.instant("OFFERS.ADDED_TO_SAVED_SUCCESS"),
        error: this.translateService.instant("OFFERS.ADDED_TO_SAVED_ERROR")
      })).subscribe(response => {
        this.forceUpdate.next(true);
      });
    }
  }

  getOffersSkeletonOptions() {
    return [{
      count: 5,
      animation: "progress",
      theme: {
        height: "160px"
      }
    }];
  }

  getPageOffers(page) {
    this.formGroup.patchValue({
      offset: (page - 1) * 12,
      limit: 12
    });

    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        page
      },
      queryParamsHandling: "merge"
    });

    this.currentPageSource.next(page);
  }

  setInitialPromoState() {
    if (localStorage.getItem(_shared_enums_browser_storage_keys_enum__WEBPACK_IMPORTED_MODULE_1__.BrowserStorageKeysEnum.LATEST_OFFERS_VISITED)) {
      this.showMoreMode = _enums_show_more_mode_enum__WEBPACK_IMPORTED_MODULE_0__.ShowMoreModeEnum.OUT;
    } else {
      this.showMoreMode = _enums_show_more_mode_enum__WEBPACK_IMPORTED_MODULE_0__.ShowMoreModeEnum.IN;
      localStorage.setItem(_shared_enums_browser_storage_keys_enum__WEBPACK_IMPORTED_MODULE_1__.BrowserStorageKeysEnum.LATEST_OFFERS_VISITED, 'true');
    }
  }

  offersPageInit() {
    let page = this._route.snapshot.queryParams['page'];

    if (!page) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          page: 1
        },
        queryParamsHandling: "merge"
      });

      page = 1;
    }

    this.getPageOffers(+page);
  }

};

ClientLatestOffersComponent.ɵfac = function ClientLatestOffersComponent_Factory(t) {
  return new (t || ClientLatestOffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_offers_offers_service__WEBPACK_IMPORTED_MODULE_2__.OffersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_3__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_transport_types_transport_types_service__WEBPACK_IMPORTED_MODULE_4__.TransportTypesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_18__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_19__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute));
};

ClientLatestOffersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ClientLatestOffersComponent,
  selectors: [["b2b-client-latest-offers"]],
  decls: 76,
  vars: 49,
  consts: [[1, "promo-section"], [1, "promo-content"], ["promoContent", ""], ["b2bNgxIcon", "", "name", "promo-offers-icon-l", "alt", "icon", 1, "icon-left"], ["b2bNgxIcon", "", "name", "promo-offers-icon-r", "alt", "icon", 1, "icon-right"], [1, "promo-content-title"], [1, "main-text"], [1, "hidden-text-mobile"], [1, "advertise-title"], ["routerLink", "/blog/634563e7ac8cb100263f7279", 1, "cargo-link"], [1, "market-promo"], ["routerLink", "/b2bmarket", 1, "market-link"], [1, "toggle-state-button", 3, "click"], ["b2bNgxIcon", "", "name", "arrow-top-blue", "alt", "arrow", 3, "ngClass"], [1, "text"], [1, "latest-offers", 3, "formGroup"], [1, "latest-offers-header"], [1, "latest-offers-header-title"], [1, "latest-offers-header-title-text"], [1, "latest-offers-header-icon"], ["b2bNgxInput", "", "formControlName", "q", 1, "latest-offers-header-search", 3, "theme", "placeholder"], [1, "latest-offers-header-filters"], ["class", "latest-offers-header-show-filter", 4, "ngIf"], [1, "latest-offers-header-sort-filter"], [1, "latest-offers-header-sort-filter-text"], ["formControlName", "sort", 3, "options", "theme", "placeholder"], [1, "latest-offers-header-display-type"], ["b2bNgxButton", "", 3, "click"], ["b2bNgxIcon", "", "name", "view-grid"], ["b2bNgxIcon", "", "name", "view-list"], [1, "latest-offers-main"], [1, "latest-offers-main-filters"], ["formControlName", "transportType", "bindValue", "_id", "bindLabel", "displayName", 1, "latest-offers-main-filter", 3, "options", "placeholder"], ["formControlName", "categories[]", "position", "right", 1, "latest-offers-main-filter", 3, "items", "buttonName", "theme"], ["formControlName", "destinationFrom", 1, "latest-offers-main-filter", 3, "placeholder"], ["formControlName", "destinationTo", 1, "latest-offers-main-filter", 3, "placeholder"], ["b2bNgxButton", "", 1, "latest-offers-main-clear-filters", 3, "theme", "click"], [1, "latest-offers-main-list"], [4, "ngIf", "ngIfElse"], ["upgradeToSeeMore", ""], ["offersSleleton", ""], ["noOffers", ""], [1, "latest-offers-header-show-filter"], [1, "latest-offers-header-show-filter-text"], [3, "theme", "placeholder"], ["link", "offers/", 3, "user", "options", "starClicked", 4, "ngIf"], ["link", "offers/", 3, "user", "options", "starClicked"], [1, "laster-offes-upgrade-to-see-more"], ["b2bNgxLink", "", 1, "laster-offes-upgrade-to-see-more-button", 3, "theme", "routerLink"], ["b2bNgxIcon", "", "name", "upgrade", "alt", "", 1, "laster-offes-upgrade-to-see-more-icon"], [1, "laster-offes-upgrade-to-see-more-text"], [1, "latest-offers-no-offers"], ["b2bNgxButton", "", 1, "view-all-offers", 3, "theme", "click"]],
  template: function ClientLatestOffersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 3)(4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5)(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "About the platform and unclaimed cargo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ul", 6)(9, "li")(10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "B2B Discount is the sole newly opened resource that offers to put up for sale and buy unclaimed cargo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Unclaimed cargo is regular cargo rejected by the recipient for a variety of possible reasons. It should be quickly sold at a discount for the owner to avoid all sorts of fines from logistics operators. We also recommend you to put your goods on display in the \u201CUnclaimed Cargo\u201D section at the stage when your recipient has violated the terms of payment \u2013 we call this risk management. There's only one condition you have to comply with in order to place your offer: you must possess documents confirming that the cargo has been cleared and shipped, so we could verify it.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "li")(15, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "If you are interested in purchasing such a cargo but you don\u2019t see any offer that might be interesting for you right now, register on the platform and you will receive email notifications about new offers.");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Learn more about unclaimed cargo");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Follow the link to learn more");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " If you are a supplier, we invite you to join our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "B2B Market");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, ", a place for promoting products and sourcing buyers. (There are more than 25,000 businesses on the platform). ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientLatestOffersComponent_Template_div_click_26_listener() {
        return ctx.toggleShowMoreMode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "form", 15)(31, "div", 16)(32, "h3", 17)(33, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](36, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, ClientLatestOffersComponent_p_40_Template, 8, 7, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "p", 23)(42, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](45, "b2b-ngx-select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 26)(48, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientLatestOffersComponent_Template_button_click_48_listener() {
        return ctx.changeOffersListTheme("grid");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientLatestOffersComponent_Template_button_click_50_listener() {
        return ctx.changeOffersListTheme("list");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 30)(53, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "b2b-ngx-select", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "b2b-ngx-treeview", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](58, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](59, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "b2b-ngx-country-select", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "b2b-ngx-country-select", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClientLatestOffersComponent_Template_button_click_64_listener() {
        return ctx.clearFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](66, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, ClientLatestOffersComponent_ng_container_68_Template, 2, 2, "ng-container", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](69, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](70, ClientLatestOffersComponent_ng_template_70_Template, 6, 5, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, ClientLatestOffersComponent_ng_template_72_Template, 1, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](74, ClientLatestOffersComponent_ng_template_74_Template, 4, 4, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](73);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@slideInOut", ctx.showMoreMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](47, _c0, ctx.showMoreMode === ctx.showMoreModeEnum.IN));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.showMoreMode === ctx.showMoreModeEnum.IN ? "Hide" : "Show more");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 23, "OFFERS.ALL_OFFERS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](38, 25, "PLACEHOLDERS.SEARCH"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](44, 27, "OFFERS.SORT_BY"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.sortTypes)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_TRANSPARENT)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 29, "PLACEHOLDERS.SELECT_SORT_TYPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](55, 31, ctx.transportTypes$))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](56, 33, "PLACEHOLDERS.TRANSPORT_TYPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](58, 35, ctx.categories$))("buttonName", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](59, 37, "SIDENAV.SAVE"))("theme", "gray");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](61, 39, "PLACEHOLDERS.FROM"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](63, 41, "PLACEHOLDERS.TO"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.OUTLINE_GRAY);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](66, 43, "OFFERS.CLEAR_ALL"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](69, 45, ctx.offers$))("ngIfElse", _r5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_23__.B2bNgxInputDirective, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_24__.B2bNgxSelectComponent, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_25__.B2bNgxButtonDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_26__.B2bNgxIconDirective, _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_27__.B2bNgxCountrySelectComponent, _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_28__.B2bNgxLinkDirective, _projects_ngx_treeview_src_lib_layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_6__.B2bNgxTreeviewComponent, _components_client_latest_offers_grid_client_latest_offers_grid_component__WEBPACK_IMPORTED_MODULE_7__.ClientLatestOffersGridComponent, _components_client_latest_offers_list_client_latest_offers_list_component__WEBPACK_IMPORTED_MODULE_8__.ClientLatestOffersListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.latest-offers-no-offers[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n}.latest-offers-no-offers[_ngcontent-%COMP%]   .latest-offers-no-offers-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #0f0f11;\n}.promo-section[_ngcontent-%COMP%] {\n  background-color: #f3f6f8;\n  padding: 1.25rem 99px;\n  overflow: hidden;\n}@media (max-width: 55.5em) {\n  .promo-section[_ngcontent-%COMP%] {\n    padding: 1.25rem 39px;\n  }\n}@media (max-width: 48em) {\n  .promo-section[_ngcontent-%COMP%] {\n    padding: 1.25rem 0;\n  }\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  position: relative;\n  border-radius: 4px;\n  padding-bottom: 20px;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .icon-left[_ngcontent-%COMP%], .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .icon-right[_ngcontent-%COMP%] {\n  max-height: 100%;\n  top: 0;\n  position: absolute;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .icon-left[_ngcontent-%COMP%] {\n  left: 0;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .icon-right[_ngcontent-%COMP%] {\n  right: 0;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-content-title[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  margin: auto;\n  padding-top: 15px;\n  justify-content: center;\n}@media (max-width: 48em) {\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-content-title[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 134%;\n  z-index: 10;\n  text-align: center;\n}@media (max-width: 48em) {\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}@media (max-width: 36em) {\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-top: 0;\n  }\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  transition: 2s all;\n  overflow: hidden;\n}@media (max-width: 48em) {\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0 20px;\n  }\n}@media (max-width: 36em) {\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 45%;\n  color: #556274;\n  z-index: 10;\n  font-weight: 100;\n  height: auto;\n  overflow: hidden;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 10px;\n}@media (max-width: 48em) {\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .hidden-text-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}@media (max-width: 36em) {\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    color: black;\n  }\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .advertise-title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-weight: 700;\n  color: #000;\n  font-size: 16px;\n}@media (max-width: 36em) {\n  .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .advertise-title[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cargo-link[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-weight: 700;\n  font-size: 16px;\n  color: #005dff;\n  text-decoration: underline;\n  cursor: pointer;\n  transition: 0.2s all;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cargo-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .market-promo[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .market-promo[_ngcontent-%COMP%]   .market-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #005dff;\n  cursor: pointer;\n  transition: 0.2s all;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .main-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .market-promo[_ngcontent-%COMP%]   .market-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .toggle-state-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  cursor: pointer;\n  gap: 10px;\n  transition: 0.2s all;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .toggle-state-button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .toggle-state-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 10;\n  transition: 0.2s all;\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .toggle-state-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}.promo-section[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .toggle-state-button[_ngcontent-%COMP%]   .rotated-img[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}.latest-offers[_ngcontent-%COMP%] {\n  background-color: #f3f6f8;\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 99px;\n  border-bottom: 1px solid #e3eaf1;\n}@media (max-width: 55.5em) {\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 1.25rem 18px;\n  }\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 134%;\n  color: #0f0f11;\n  display: flex;\n  justify-content: space-between;\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-title[_ngcontent-%COMP%]   .latest-offers-header-icon[_ngcontent-%COMP%] {\n  display: none;\n}@media (max-width: 55.5em) {\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-title[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-title[_ngcontent-%COMP%]   .latest-offers-header-icon[_ngcontent-%COMP%] {\n    display: block;\n  }\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-search[_ngcontent-%COMP%] {\n  width: 40%;\n  display: block;\n}@media (max-width: 55.5em) {\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-search[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 24px;\n  }\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-filters[_ngcontent-%COMP%]   .latest-offers-header-show-filter[_ngcontent-%COMP%], .latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-filters[_ngcontent-%COMP%]   .latest-offers-header-sort-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}@media (max-width: 55.5em) {\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-header[_ngcontent-%COMP%]   .latest-offers-header-filters[_ngcontent-%COMP%]   .latest-offers-header-display-type[_ngcontent-%COMP%] {\n    display: none;\n  }\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 99px;\n}@media (max-width: 55.5em) {\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%]   .latest-offers-main-filters[_ngcontent-%COMP%] {\n  width: 204px;\n  padding-top: 24px;\n  padding-right: 24px;\n  border-right: 1px solid #e3eaf1;\n}@media (max-width: 75em) {\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%]   .latest-offers-main-filters[_ngcontent-%COMP%] {\n    display: none;\n    padding-left: 24px;\n  }\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%]   .latest-offers-main-filters[_ngcontent-%COMP%]   .latest-offers-main-filter[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.5rem;\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%]   .latest-offers-main-filters[_ngcontent-%COMP%]   .latest-offers-main-clear-filters[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  width: 100%;\n  margin-top: 8px;\n}.latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%]   .latest-offers-main-list[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 99px 24px 24px;\n}@media (max-width: 75em) {\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%]   .latest-offers-main-list[_ngcontent-%COMP%] {\n    padding-right: 24px;\n  }\n}@media (max-width: 36em) {\n  .latest-offers[_ngcontent-%COMP%]   .latest-offers-main[_ngcontent-%COMP%]   .latest-offers-main-list[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}.latest-offers[_ngcontent-%COMP%]   .laster-offes-upgrade-to-see-more[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}.latest-offers[_ngcontent-%COMP%]   .laster-offes-upgrade-to-see-more[_ngcontent-%COMP%]   .laster-offes-upgrade-to-see-more-button[_ngcontent-%COMP%] {\n  padding: 15px 43px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n}.latest-offers[_ngcontent-%COMP%]   .laster-offes-upgrade-to-see-more[_ngcontent-%COMP%]   .laster-offes-upgrade-to-see-more-button[_ngcontent-%COMP%]   .laster-offes-upgrade-to-see-more-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n  color: #ffffff;\n  text-shadow: 0 0 0.5px rgba(0, 0, 0, 0.25);\n  margin-left: 8px;\n}.latest-offers[_ngcontent-%COMP%]   .view-all-offers[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 10px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJjbGllbnQtbGF0ZXN0LW9mZmVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zZWxlY3Qvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWJ1dHRvbi9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpbmsvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnB1dC9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWljb24vc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZXh0YXJlYS9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvbWF0ZXJpYWwtb3ZlcnJpZGUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIs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QSwrQ0FBQTtBSHdSTixDR3ZSTTtFQUNFLHlCQUFBO0FIeVJSLENHdFJJO0VBQ0UsNkJBQUE7RUFDQSxjRGxCVztBRjBTakIsQ0d2Uk07RUFDRSx5QkQxQlU7QUZtVGxCLENHdFJJO0VBQ0UseUJENUJXO0VDNkJYLGNEakNZO0FGeVRsQixDR3ZSTTtFQUNFLHlCRDlCUztBRnVUakIsQ0d0Ukk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FId1JOLENHdlJNO0VBQ0UseUJEOUNVO0VDK0NWLHFCRC9DVTtFQ2dEVixZQUFBO0FIeVJSLENHcFJJO0VBQ0UscUJEdERZO0FGNFVsQixDR3JSTTtFQUNFLHlCRGxEVTtBRnlVbEIsQ0dwUkk7RUFDRSxxQkR4RFk7QUY4VWxCLENHclJNO0VBQ0UseUJEeERVO0FGK1VsQixDR3BSSTtFQUNFLHFCRDFEVztBRmdWakIsQ0dyUk07RUFDRSx5QkQzRFM7QUZrVmpCLENHcFJJO0VBQ0UscUJBQUE7QUhzUk4sQ0dyUk07RUFDRSx5QkRwRVU7QUYyVmxCLENHbFJFO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBSG9SSixDR25SSTtFQUNFLHFEQUFBO0FIcVJOLENJdldBO0VBQ0MsZ0JBQUE7RUFDQSw2QkFBQTtBSjBXRCxDSXZXRTtFQUNDLGNGQ2M7QUZ3V2pCLENJdFdFO0VBQ0MsY0ZYZTtBRm1YbEIsQ0lyV0U7RUFDQyxjRlhlO0FGa1hsQixDSXBXRTtFQUNDLGNGTGM7QUYyV2pCLENJbldFO0VBQ0MsMEJBQUE7QUpxV0gsQ0lqV0M7RUFDQyxpQ0FBQTtBSm1XRixDSWpXRTtFQUNDLHlCRjNCZTtFRTRCZixjRmhDZTtBRm1ZbEIsQ0lsV0c7RUFDQyx5QkY3QmM7QUZpWWxCLENJaFdFO0VBQ0MsNkJBQUE7RUFDQSxjRnhDZTtBRjBZbEIsQ0lqV0c7RUFDQyx5QkZwQ2M7QUZ1WWxCLENJL1ZFO0VBQ0MseUJGdkNjO0VFd0NkLGNGNUNlO0FGNllsQixDSTlWRTtFQUNDLHlCRnBEZTtFRXFEZixjRmpEZTtBRmlabEIsQ0kvVkc7RUFDQyx5QkZ0RGM7QUZ1WmxCLENJN1ZFO0VBQ0Ms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O0VBbW5CRjtBQUNGLENBaG5CRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQWtuQkgsQ0E3bUJHOztFQUVDLGFBQUE7RUFDQSxtQkFBQTtBQSttQkosQ1N6ekJDO0VUOE1HO0lBQ0MsYUFBQTtFQThtQkg7QUFDRixDQXptQkM7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7QUEybUJGLENTbDBCQztFVHFOQTtJQUtFLFVBQUE7RUE0bUJEO0FBQ0YsQ0ExbUJFO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQTRtQkgsQ1M3MEJDO0VUNk5DO0lBTUUsYUFBQTtJQUNBLGtCQUFBO0VBOG1CRjtBQUNGLENBNW1CRztFQUNDLGNBQUE7RUFDQSxrQkFBQTtBQThtQkosQ0EzbUJHO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBNm1CSixDQXptQkU7RUFDQyxPQUFBO0VBQ0EsNEJBQUE7QUEybUJILENTaDJCQztFVG1QQztJQUlFLG1CQUFBO0VBNm1CRjtBQUNGLENTcjJCQztFVG1QQztJQU9FLFVBQUE7RUErbUJGO0FBQ0YsQ0EzbUJDO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQTRtQkYsQ0ExbUJFO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBNG1CSCxDQTFtQkc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBNG1CSixDQXZtQkM7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FBeW1CRiIsImZpbGUiOiJjbGllbnQtbGF0ZXN0LW9mZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi11cDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydC11bnNldDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1waW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWFkZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNraXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCIvKlxuICBUaGlzIHN0eWxlc2hlZXQgdXNlcyBzY3NzIHZhbGlhYmxlcyBmb3IgbW9zdCBvZiB0aGUgY29sb3JzIC8gYmFja2dyb3VuZC1jb2xvcnMgb2YgdGhlIHRhYmxlXG4gIHRvIGVuYWJsZSB0aGUgY3VzdG9taXphdGlvbiBvZiB0aGUgZGlzcGxheWVkIHRhYmxlIHdpdGhvdXQgY2xvbmluZyB0aGUgc3R5bGVzaGVldCBpbnRvIHRoZVxuICBvd24gYXBwbGljYXRpb24uXG5cbiAgVG8gbW9kaWZ5IHRhYmxlIGNvbG9ycywgYWRkIHRoZSBmb2xsb3dpbmcgbGluZXMgdG8gdGhlIHNjc3MgZmlsZSBvZiB5b3VyIGFwcGxpY2F0aW9uXG4gICh0aGlzIGV4YW1wbGUgbW9kaWZpZXMgdGhlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCByb3cgLSBzZWxlY3Rpb25UeXBlID0gc2luZ2xlLCBtdWx0aSBvciBtdWx0aUNsaWNrKTpcblxuICAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDogeWVsbG93O1xuICAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh5ZWxsb3csIDAuMik7XG5cbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2Nzcyc7XG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcblxuVGhhdCdzIGFsbC5cbiovXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLyoqXG5cdCAqIFNoYXJlZCBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBHbG9iYWwgUm93IFN0eWxlc1xuXHQgKi9cbiAgLyoqXG5cdCAqIEhlYWRlciBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBCb2R5IFN0eWxlc1xuXHQgKi9cbiAgLyoqXG5cdCAqIEZvb3RlciBTdHlsZXNcblx0ICovIH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc3RyaXBlZCAuZGF0YXRhYmxlLXJvdy1vZGQge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5M2FlNDtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDQxZWY7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDRmZmU7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDQxZWY7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmVtcHR5LXJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmxvYWRpbmctcm93IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSUhXUFNrTmVTQm1KaFRRVnRiaUROQ2dBU2FnSUl1Slg4T2dBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtcm93LXJpZ2h0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJMTJQUWtOZGkxVlRRNWdiU3drQXNEUUFSTEFJR3RPU0ZVQUFBQUFCSlJVNUVya0pnZ2c9PSk7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kcmFnZ2FibGU6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UsIG9wYWNpdHkgNDAwbXMgZWFzZTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kcmFnZ2FibGU6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbjogLTMwcHggMCAwIC0zMHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmRyYWdnaW5nIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2VlZTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ncm91cC1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDlkOGQ5O1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNkOWQ4ZDk7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAucHJvZ3Jlc3MtbGluZWFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdG9wOiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZDFmOTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciAuY29udGFpbmVyIC5iYXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICAgICAgICBhbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDZjYzg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDVweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMS4ycmVtOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBsaSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBsaS5hY3RpdmUgYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogNnB4IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgM3B4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi8qKlxuICogQ2hlY2tib3hlc1xuKiovXG4uZGF0YXRhYmxlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwOyB9XG4gIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgICBib3JkZXItY29sb3I6ICMwMDk2ODg7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4vKipcbiAqIFByb2dyZXNzIGJhciBhbmltYXRpb25zXG4gKi9cbkBrZXlmcmFtZXMgcXVlcnkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzUlKSBzY2FsZSgwLjMsIDEpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAsIDEpOyB9IH1cbiIsIi5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNiM2IzYjMgI2NjYyAjZDlkOWQ5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy1hcnJvd3t0b3A6LTJweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk5OTtib3JkZXItd2lkdGg6MCA1cHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3c6aG92ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzMzN9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC10b3A+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1yaWdodD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1ib3R0b20+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1sZWZ0Pi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1jb2xvcjojMDA3ZWZmO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wNzUpLDAgMCAwIDNweCByZ2JhKDAsMTI2LDI1NSwwLjEpfS5uZy1zZWxlY3Qubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOX0ubmctc2VsZWN0IC5uZy1oYXMtdmFsdWUgLm5nLXBsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVye2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgI2NjYzttaW4taGVpZ2h0OjM2cHg7YWxpZ24taXRlbXM6Y2VudGVyfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDFweCAwIHJnYmEoMCwwLDAsMC4wNil9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWxlZnQ6MTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntjb2xvcjojOTk5fS5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lcntoZWlnaHQ6MzZweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7dG9wOjVweDtsZWZ0OjA7cGFkZGluZy1sZWZ0OjEwcHg7cGFkZGluZy1yaWdodDo1MHB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLWxlZnQ6NTBweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2JvcmRlcjoxcHggc29saWQgI2U2ZTZlNn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmc6MCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1sZWZ0OjdweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDo3cHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7Zm9udC1zaXplOi45ZW07bWFyZ2luLWJvdHRvbTo1cHg7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZS5uZy12YWx1ZS1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZS5uZy12YWx1ZS1kaXNhYmxlZCAubmctdmFsdWUtbGFiZWx7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZDFlOGZmfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYjhkYmZmfVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ubGVmdHtib3JkZXItbGVmdDoxcHggc29saWQgI2I4ZGJmZjtib3JkZXItcmlnaHQ6bm9uZX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLnJpZ2h0e2JvcmRlci1sZWZ0OjA7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYjhkYmZmfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmc6MCAwIDNweCAzcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgM3B4IDNweCAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0PmlucHV0e2NvbG9yOiMwMDB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7dG9wOjVweDtwYWRkaW5nLWJvdHRvbTo1cHg7cGFkZGluZy1sZWZ0OjNweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3BhZGRpbmctcmlnaHQ6M3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVyOmhvdmVyIC5uZy1jbGVhcntjb2xvcjojRDAwMjFCfS5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCA1cHggMCAwfVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdCAubmctc3Bpbm5lci16b25le3BhZGRpbmc6NXB4IDAgMCA1cHh9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcnt3aWR0aDoyNXB4O3BhZGRpbmctcmlnaHQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcntwYWRkaW5nLWxlZnQ6NXB4O3BhZGRpbmctcmlnaHQ6MH0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVyOmhvdmVyIC5uZy1hcnJvd3tib3JkZXItdG9wLWNvbG9yOiM2NjZ9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlciAubmctYXJyb3d7Ym9yZGVyLWNvbG9yOiM5OTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggNXB4IDIuNXB4fS5uZy1kcm9wZG93bi1wYW5lbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpO2xlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXRvcHtib3R0b206MTAwJTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXRvcCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1yaWdodHtsZWZ0OjEwMCU7dG9wOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLWJvdHRvbTotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9te3RvcDoxMDAlO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItdG9wLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLXRvcDotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9tIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtbGVmdHtsZWZ0Oi0xMDAlO3RvcDowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLWJvdHRvbTotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtbGVmdCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWhlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cHt1c2VyLXNlbGVjdDpub25lO3BhZGRpbmc6OHB4IDEwcHg7Zm9udC13ZWlnaHQ6NTAwO2NvbG9yOnJnYmEoMCwwLDAsMC41NCk7Y3Vyc29yOnBvaW50ZXJ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLWRpc2FibGVke2N1cnNvcjpkZWZhdWx0fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1zZWxlY3RlZCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZHtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2JhY2tncm91bmQtY29sb3I6I2ViZjVmZjtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9ue2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLDAuODcpO3BhZGRpbmc6OHB4IDEwcHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmZ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZCAubmctb3B0aW9uLWxhYmVsLC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZCAubmctb3B0aW9uLWxhYmVse2ZvbnQtd2VpZ2h0OjYwMH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLW1hcmtlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWZhZmY7Y29sb3I6IzMzM30ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWRpc2FibGVke2NvbG9yOiNjY2N9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1jaGlsZHtwYWRkaW5nLWxlZnQ6MjJweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1yaWdodDoyMnB4O3BhZGRpbmctbGVmdDowfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse2ZvbnQtc2l6ZTo4MCU7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmctcmlnaHQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIC5uZy10YWctbGFiZWx7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWx7ZGlyZWN0aW9uOnJ0bDt0ZXh0LWFsaWduOnJpZ2h0fVxuIiwiaHRtbCxcbmJvZHkge1xuXHRzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuaHRtbCxcbmJvZHkge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6IGJsYWNrO1xuXHQmOnZpc2l0ZWQge1xuXHRcdGNvbG9yOiAjMDAwMDAwO1xuXHR9XG59XG5cbmJ1dHRvbiB7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGV4dGFyZWEge1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbmkge1xuXHRmb250LXN0eWxlOiBJdGFsaWM7XG59XG5cbmIge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlc1wiO1xuXG4ubGF0ZXN0LW9mZmVycy1uby1vZmZlcnMge1xuXHRwYWRkaW5nOiA1MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0LmxhdGVzdC1vZmZlcnMtbm8tb2ZmZXJzLXRpdGxlIHtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Y29sb3I6ICMwZjBmMTE7XG5cdH1cbn1cblxuLnByb21vLXNlY3Rpb24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdHBhZGRpbmc6IDEuMjVyZW0gOTlweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0cGFkZGluZzogMS4yNXJlbSAzOXB4O1xuXHR9XG5cdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIyXCIpIHtcblx0XHRwYWRkaW5nOiAxLjI1cmVtIDA7XG5cdH1cblxuXHQucHJvbW8tY29udGVudCB7XG5cdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG5cdFx0Lmljb24tbGVmdCxcblx0XHQuaWNvbi1yaWdodCB7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdH1cblxuXHRcdC5pY29uLWxlZnQge1xuXHRcdFx0bGVmdDogMDtcblx0XHR9XG5cblx0XHQuaWNvbi1yaWdodCB7XG5cdFx0XHRyaWdodDogMDtcblx0XHR9XG5cblx0XHQucHJvbW8tY29udGVudC10aXRsZSB7XG5cdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdG1hcmdpbjogYXV0bztcblx0XHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiMlwiKSB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEzNCU7XG5cdFx0XHRcdHotaW5kZXg6IDEwO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIyXCIpIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjFcIikge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Lm1haW4tdGV4dCB7XG5cdFx0XHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0Z2FwOiAyMHB4O1xuXHRcdFx0dHJhbnNpdGlvbjogMnMgYWxsO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIyXCIpIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdFx0fVxuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjFcIikge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRsaSB7XG5cdFx0XHRcdHdpZHRoOiA0NSU7XG5cdFx0XHRcdGNvbG9yOiAjNTU2Mjc0O1xuXHRcdFx0XHR6LWluZGV4OiAxMDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0XHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRwOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjJcIikge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdC5oaWRkZW4tdGV4dC1tb2JpbGUge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiMVwiKSB7XG5cdFx0XHRcdFx0Y29sb3I6IGJsYWNrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmFkdmVydGlzZS10aXRsZSB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTVweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiMVwiKSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJnby1saW5rIHtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMDA1ZGZmO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAwLjJzIGFsbDtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tYXJrZXQtcHJvbW8ge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cblx0XHRcdFx0XHQubWFya2V0LWxpbmsge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMDA1ZGZmO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG5cblx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnRvZ2dsZS1zdGF0ZS1idXR0b24ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRnYXA6IDEwcHg7XG5cdFx0XHR0cmFuc2l0aW9uOiAwLjJzIGFsbDtcblxuXHRcdFx0LnRleHQsXG5cdFx0XHRpbWcge1xuXHRcdFx0XHR6LWluZGV4OiAxMDtcblx0XHRcdFx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG5cdFx0XHR9XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG5cdFx0XHR9XG5cblx0XHRcdC5yb3RhdGVkLWltZyB7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4ubGF0ZXN0LW9mZmVycyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblxuXHQubGF0ZXN0LW9mZmVycy1oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0cGFkZGluZzogMS4yNXJlbSA5OXB4O1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlYWYxO1xuXHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRwYWRkaW5nOiAxLjI1cmVtIDE4cHg7XG5cdFx0fVxuXG5cdFx0LmxhdGVzdC1vZmZlcnMtaGVhZGVyLXRpdGxlIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEzNCU7XG5cdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHRcdC5sYXRlc3Qtb2ZmZXJzLWhlYWRlci1pY29uIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblxuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0LmxhdGVzdC1vZmZlcnMtaGVhZGVyLWljb24ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmxhdGVzdC1vZmZlcnMtaGVhZGVyLXNlYXJjaCB7XG5cdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5sYXRlc3Qtb2ZmZXJzLWhlYWRlci1maWx0ZXJzIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0XHQubGF0ZXN0LW9mZmVycy1oZWFkZXItZGlzcGxheS10eXBlIHtcblx0XHRcdH1cblxuXHRcdFx0LmxhdGVzdC1vZmZlcnMtaGVhZGVyLXNob3ctZmlsdGVyLFxuXHRcdFx0LmxhdGVzdC1vZmZlcnMtaGVhZGVyLXNvcnQtZmlsdGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0XHQubGF0ZXN0LW9mZmVycy1oZWFkZXItZGlzcGxheS10eXBlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmxhdGVzdC1vZmZlcnMtbWFpbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRwYWRkaW5nLWxlZnQ6IDk5cHg7XG5cblx0XHRAaW5jbHVkZSBicmVha3BvaW50KFwiM1wiKSB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdH1cblxuXHRcdC5sYXRlc3Qtb2ZmZXJzLW1haW4tZmlsdGVycyB7XG5cdFx0XHR3aWR0aDogMjA0cHg7XG5cdFx0XHRwYWRkaW5nLXRvcDogMjRweDtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDI0cHg7XG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlYWYxO1xuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjRcIikge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDI0cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5sYXRlc3Qtb2ZmZXJzLW1haW4tZmlsdGVyIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDAuNXJlbTtcblx0XHRcdH1cblxuXHRcdFx0LmxhdGVzdC1vZmZlcnMtbWFpbi1jbGVhci1maWx0ZXJzIHtcblx0XHRcdFx0cGFkZGluZzogMTVweCAwO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0bWFyZ2luLXRvcDogOHB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5sYXRlc3Qtb2ZmZXJzLW1haW4tbGlzdCB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdFx0cGFkZGluZzogMjRweCA5OXB4IDI0cHggMjRweDtcblx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCI0XCIpIHtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMjRweDtcblx0XHRcdH1cblx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIxXCIpIHtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQubGFzdGVyLW9mZmVzLXVwZ3JhZGUtdG8tc2VlLW1vcmUge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0bWFyZ2luLXRvcDogNTBweDtcblxuXHRcdC5sYXN0ZXItb2ZmZXMtdXBncmFkZS10by1zZWUtbW9yZS1idXR0b24ge1xuXHRcdFx0cGFkZGluZzogMTVweCA0M3B4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblxuXHRcdFx0Lmxhc3Rlci1vZmZlcy11cGdyYWRlLXRvLXNlZS1tb3JlLXRleHQge1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdHRleHQtc2hhZG93OiAwIDAgMC41cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQudmlldy1hbGwtb2ZmZXJzIHtcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRcdHBhZGRpbmc6IDEwcHggNTBweDtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB7XG4gIGZvcm0ge1xuICAgIGIyYi1uZ3gtc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1zZWxlY3Qge1xuICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBiMmItbmd4LWNvdW50cnktc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1jb3VudHJ5LXNlbGVjdCB7XG4gICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUsXG4ubmctc2VsZWN0LW9wZW5lZCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gIH1cblxuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMTUsIDE3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuICAgIC5uZy12YWx1ZSB7XG4gICAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUge1xuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1ibGFjay05MDA6ICMwMDAwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMGYwZjExO1xuJGNvbG9yLWJsYWNrLTEwMDogIzJlMmUzNDtcbiRjb2xvci1ibGFjay01MDogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjYpO1xuXG4kY29sb3Itd2hpdGUtOTAwOiAjZmZmZmZmO1xuJGNvbG9yLXdoaXRlLTIwMDogI2UzZWFmMTtcbiRjb2xvci13aGl0ZS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1ibHVlLTUwMDogIzAwNWRmZjtcbiRjb2xvci1ibHVlLTEwMDogIzU5OTVmZTtcbiRjb2xvci1ibHVlLTUwOiAjZDJkZWZmO1xuXG4kY29sb3ItZ3JheS05MDA6ICMwZjBmMTE7XG4kY29sb3ItZ3JheS02MDA6ICMyMjIyMjQ7XG4kY29sb3ItZ3JheS01MDA6ICM1NTYyNzQ7XG4kY29sb3ItZ3JheS00MDA6ICM2YzcwNzc7XG4kY29sb3ItZ3JheS0zMDA6ICNhN2E4YWQ7XG4kY29sb3ItZ3JheS0yMDA6ICM5ZmE0YmI7XG4kY29sb3ItZ3JheS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1yZWQtNTAwOiAjZTYzZDNkO1xuJGNvbG9yLXJlZC01MDogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWJ1dHRvbiB7XG4gIGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgJi5iYWNrZ3JvdW5kIHtcbiAgICAmLmJhY2tncm91bmQtYmxhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTkwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1yZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2M2QzZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLWJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtaG92ZXItYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5vdXRsaW5lIHtcbiAgICAmLm91dGxpbmUtYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS13aGl0ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLWJsdWUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtZ3JheSB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmU4ZjU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stNTAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMCAhaW1wb3J0YW50O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTUwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWxpbmsge1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuXHQmLnRleHQge1xuXHRcdCYudGV4dC1ibHVlIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LWJsYWNrIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC13aGl0ZSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtZ3JheSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNTAwO1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0fVxuXHR9XG5cblx0Ji5iYWNrZ3JvdW5kIHtcblx0XHRib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cblx0XHQmLmJhY2tncm91bmQtd2hpdGUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0yMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtZ3JheSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtYmxhY2sge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWJsdWUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1saWdodC1ibHVlIHtcblx0XHRcdGJhY2tncm91bmQ6ICNlZmY0ZmE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y29sb3I6ICMwMDVkZmYgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTZlZGZhO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCYub3V0bGluZSB7XG5cdFx0Ji5vdXRsaW5lLXdoaXRlIHtcblx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1pbnB1dC1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5iMmItbmd4LWlucHV0IHtcblx0Ym9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjNTU2Mjc0O1xuXHQmLmJhY2tncm91bmQge1xuXHRcdCYuYmFja2dyb3VuZC1ncmF5IHtcblx0XHRcdGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0fVxuXHRcdCYuYmFja2dyb3VuZC13aGl0ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblx0fVxuXHQmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHR9XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCB7XG5cdC5iMmItbmd4LWlucHV0IHtcblx0XHQmLmJhY2tncm91bmQge1xuXHRcdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWljb24ge1xuXHQmLmNpcmNsZSB7XG5cdFx0aGVpZ2h0OiAzcmVtO1xuXHRcdHdpZHRoOiAzcmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC10ZXh0YXJlYS1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uYjJiLW5neC10ZXh0YXJlYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogI2YzZjZmODtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM1NTYyNzQ7XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdHJlc2l6ZTogbm9uZTtcblx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0fVxuICAmLmJhY2tncm91bmQge1xuICAgICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1zdWJtaXR0ZWQge1xuXHQuYjJiLW5neC10ZXh0YXJlYSB7XG5cdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdH1cblx0fVxufVxuXG4uY29udHJvbC1lcnJvciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbiIsIkBpbXBvcnQgXCIvcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHNcIjtcblxuLy8gc3RlcHBlclxuQG1peGluIHN0eWxlU3RlcExpbmUoJGluZGV4KSB7XG5cdC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4fSkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNURGRjtcblx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4ICsgMn0pIHtcblx0XHRcdEBpbmNsdWRlIHN0ZXBOZXh0TGluZTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIHN0ZXBOZXh0TGluZSgpIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1ZGZmLCByZ2JhKDAsIDkzLCAyNTUsIDApKTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdGhlaWdodDogNHB4O1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcblxuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cblx0XHQubWF0LXN0ZXAtaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdGdhcDogN3B4O1xuXHRcdFx0cGFkZGluZzogMDtcblxuXHRcdFx0Lm1hdC1zdGVwLWxhYmVsIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRcdFx0Y29sb3I6ICNDNEM0QzQ7XG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoJzEnKSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCB7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm1hdC1zdGVwLWljb24ge1xuXHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCwgJi1zdGF0ZS1lZGl0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hdC1zdGVwLWljb24tY29udGVudCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNEOUQ5RDk7XG5cblx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAtNyUgMCAtMTAlO1xuXHRcdFx0XHRAaW5jbHVkZSBzdGVwTmV4dExpbmU7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdFx0bWFyZ2luOiAwIC0yMyUgMCAtNyU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG92ZXJmbG93OiBpbml0aWFsO1xuXHR9XG5cblx0LmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTEge1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDIpO1xufVxuXG4ubGFzdC1lZGl0ZWQtc3RlcC0yIHtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSgyKTtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSg0KTtcbn1cbiIsIiRicmVha3BvaW50LTE6IDM2ZW07XG4kYnJlYWtwb2ludC0yOiA0OGVtO1xuJGJyZWFrcG9pbnQtMzogNTUuNWVtO1xuJGJyZWFrcG9pbnQtNDogNzVlbTtcbiRicmVha3BvaW50LTU6IDg3LjVlbTtcblxuJGJyZWFrcG9pbnRzOiAoXG5cdFwiMVwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0xLFxuXHQpLFxuXHRcIjJcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMixcblx0KSxcblx0XCIzXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTMsXG5cdCksXG5cdFwiNFwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC00LFxuXHQpLFxuXHRcIjVcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtNSxcblx0KSxcblx0XCI2XCI6IChcblx0XHRtaW4td2lkdGg6ICRicmVha3BvaW50LTUsXG5cdCksXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuXHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cbiJdfQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.trigger)('slideInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.style)({
      overflow: 'hidden',
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.state)('out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.style)({
      opacity: '0',
      overflow: 'hidden',
      height: '0px',
      marginTop: '0px'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.transition)('in => out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.animate)('400ms ease-in-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.transition)('out => in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_29__.animate)('400ms ease-in-out'))])]
  },
  changeDetection: 0
});
ClientLatestOffersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()], ClientLatestOffersComponent);


/***/ }),

/***/ 57454:
/*!******************************************************************!*\
  !*** ./src/app/client/services/categories/categories.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26469);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61755);
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

/***/ 36521:
/*!**********************************************************!*\
  !*** ./src/app/client/services/offers/offers.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersService": () => (/* binding */ OffersService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61755);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26469);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
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
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
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
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
            .subscribe((data) => {
            this.offersSource.next(data.rfqList);
            // this.rfqManageLength.next(data.totalCount);
        });
    }
}
OffersService.ɵfac = function OffersService_Factory(t) { return new (t || OffersService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_state_offers_offers_query__WEBPACK_IMPORTED_MODULE_1__.OffersQuery), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_state_offers_offers_store__WEBPACK_IMPORTED_MODULE_2__.OffersStore)); };
OffersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OffersService, factory: OffersService.ɵfac, providedIn: "root" });


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

/***/ 1188:
/*!***************************************************!*\
  !*** ./node_modules/country-list/country-list.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var data = __webpack_require__(/*! ./data.json */ 25463);
/** Precompute name and code lookups. */


var nameMap = {};
var codeMap = {};
data.forEach(mapCodeAndName);

function mapCodeAndName(country) {
  nameMap[country.name.toLowerCase()] = country.code;
  codeMap[country.code.toLowerCase()] = country.name;
}

exports.overwrite = function overwrite(countries) {
  if (!countries || !countries.length) return;
  countries.forEach(function (country) {
    var foundIndex = data.findIndex(function (item) {
      return item.code === country.code;
    });
    data[foundIndex] = country;
    mapCodeAndName(country);
  });
};

exports.getCode = function getCode(name) {
  return nameMap[name.toLowerCase()];
};

exports.getName = function getName(code) {
  return codeMap[code.toLowerCase()];
};

exports.getNames = function getNames() {
  return data.map(function (country) {
    return country.name;
  });
};

exports.getCodes = function getCodes() {
  return data.map(function (country) {
    return country.code;
  });
};

exports.getCodeList = function getCodeList() {
  return codeMap;
};

exports.getNameList = function getNameList() {
  return nameMap;
};

exports.getData = function getData() {
  return data;
};

/***/ }),

/***/ 97977:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagerComponent": () => (/* binding */ PagerComponent),
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent),
/* harmony export */   "PaginationConfig": () => (/* binding */ PaginationConfig),
/* harmony export */   "PaginationModule": () => (/* binding */ PaginationModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




 // todo: split

/** Provides default values for Pagination and pager components */

const _c0 = function (a0, a1) {
  return {
    "pull-left": a0,
    "float-left": a1
  };
};

const _c1 = function (a0, a1) {
  return {
    "pull-right": a0,
    "float-right": a1
  };
};

const _c2 = function (a0, a1) {
  return {
    disabled: a0,
    currentPage: a1
  };
};

function PaginationComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.selectPage(1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
  }
}

function PaginationComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.selectPage(ctx_r17.page - 1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
  }
}

const _c3 = function (a0, a1, a2) {
  return {
    disabled: a0,
    $implicit: a1,
    currentPage: a2
  };
};

function PaginationComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const pg_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.selectPage(pg_r19.number, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const pg_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r2.disabled, pg_r19, ctx_r2.page));
  }
}

function PaginationComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.selectPage(ctx_r22.page + 1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
  }
}

function PaginationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.selectPage(ctx_r24.totalPages, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
  }
}

function PaginationComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const page_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r26.text);
  }
}

function PaginationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getText("next"));
  }
}

function PaginationComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getText("previous"));
  }
}

function PaginationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getText("first"));
  }
}

function PaginationComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getText("last"));
  }
}

class PaginationConfig {
  constructor() {
    this.main = {
      itemsPerPage: 10,
      boundaryLinks: false,
      directionLinks: true,
      firstText: 'First',
      previousText: 'Previous',
      nextText: 'Next',
      lastText: 'Last',
      pageBtnClass: '',
      rotate: true
    };
    this.pager = {
      itemsPerPage: 15,
      previousText: '« Previous',
      nextText: 'Next »',
      pageBtnClass: '',
      align: true
    };
  }

}

PaginationConfig.ɵfac = function PaginationConfig_Factory(t) {
  return new (t || PaginationConfig)();
};

PaginationConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PaginationConfig,
  factory: PaginationConfig.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

const PAGER_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => PagerComponent),
  multi: true
};

class PagerComponent {
  constructor(elementRef, paginationConfig, changeDetection) {
    this.elementRef = elementRef;
    this.changeDetection = changeDetection;
    /** if `true` aligns each link to the sides of pager */

    this.align = false;
    /** if false first and last buttons will be hidden */

    this.boundaryLinks = false;
    /** if false previous and next buttons will be hidden */

    this.directionLinks = true; // labels

    /** first button text */

    this.firstText = 'First';
    /** previous button text */

    this.previousText = '« Previous';
    /** next button text */

    this.nextText = 'Next »';
    /** last button text */

    this.lastText = 'Last';
    /** if true current page will in the middle of pages list */

    this.rotate = true; // css

    /** add class to <code><li\></code> */

    this.pageBtnClass = '';
    /** if true pagination component will be disabled */

    this.disabled = false;
    /** fired when total pages count changes, $event:number equals to total pages count */

    this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** fired when page was changed, $event:{page, itemsPerPage} equals to
     * object with current page index and number of items per page
     */

    this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.classMap = '';
    this.inited = false;
    this._itemsPerPage = 15;
    this._totalItems = 0;
    this._totalPages = 0;
    this._page = 1;
    this.elementRef = elementRef;

    if (!this.config) {
      this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
    }
  }
  /** maximum number of items per page. If value less than 1 will display all items on one page */


  get itemsPerPage() {
    return this._itemsPerPage;
  }

  set itemsPerPage(v) {
    this._itemsPerPage = v;
    this.totalPages = this.calculateTotalPages();
  }
  /** total number of items in all pages */


  get totalItems() {
    return this._totalItems;
  }

  set totalItems(v) {
    this._totalItems = v;
    this.totalPages = this.calculateTotalPages();
  }

  get totalPages() {
    return this._totalPages;
  }

  set totalPages(v) {
    this._totalPages = v;
    this.numPages.emit(v);

    if (this.inited) {
      this.selectPage(this.page);
    }
  }

  get page() {
    return this._page;
  }

  set page(value) {
    const _previous = this._page;
    this._page = value > this.totalPages ? this.totalPages : value || 1;
    this.changeDetection.markForCheck();

    if (_previous === this._page || typeof _previous === 'undefined') {
      return;
    }

    this.pageChanged.emit({
      page: this._page,
      itemsPerPage: this.itemsPerPage
    });
  }

  configureOptions(config) {
    this.config = Object.assign({}, config);
  }

  ngOnInit() {
    var _a, _b, _c, _d, _e, _f;

    if (typeof window !== 'undefined') {
      this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
    } // watch for maxSize


    if (typeof this.maxSize === 'undefined') {
      this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
    }

    if (typeof this.rotate === 'undefined') {
      this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
    }

    if (typeof this.boundaryLinks === 'undefined') {
      this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
    }

    if (typeof this.directionLinks === 'undefined') {
      this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
    }

    if (typeof this.pageBtnClass === 'undefined') {
      this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
    } // base class


    if (typeof this.itemsPerPage === 'undefined') {
      this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
    }

    this.totalPages = this.calculateTotalPages(); // this class

    this.pages = this.getPages(this.page, this.totalPages);
    this.inited = true;
  }

  writeValue(value) {
    this.page = value;
    this.pages = this.getPages(this.page, this.totalPages);
  }

  getText(key) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this[`${key}Text`] || this.config[`${key}Text`];
  }

  noPrevious() {
    return this.page === 1;
  }

  noNext() {
    return this.page === this.totalPages;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  selectPage(page, event) {
    if (event) {
      event.preventDefault();
    }

    if (!this.disabled) {
      if (event && event.target) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target = event.target;
        target.blur();
      }

      this.writeValue(page);
      this.onChange(this.page);
    }
  } // Create page object used in template


  makePage(num, text, active) {
    return {
      text,
      number: num,
      active
    };
  }

  getPages(currentPage, totalPages) {
    const pages = []; // Default page limits

    let startPage = 1;
    let endPage = totalPages;
    const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

    if (isMaxSized && this.maxSize) {
      if (this.rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
        endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - this.maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

        endPage = Math.min(startPage + this.maxSize - 1, totalPages);
      }
    } // Add page number links


    for (let num = startPage; num <= endPage; num++) {
      const page = this.makePage(num, num.toString(), num === currentPage);
      pages.push(page);
    } // Add links to move between page sets


    if (isMaxSized && !this.rotate) {
      if (startPage > 1) {
        const previousPageSet = this.makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }

      if (endPage < totalPages) {
        const nextPageSet = this.makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
    }

    return pages;
  } // base class


  calculateTotalPages() {
    const totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  }

}

PagerComponent.ɵfac = function PagerComponent_Factory(t) {
  return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

PagerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PagerComponent,
  selectors: [["pager"]],
  inputs: {
    align: "align",
    maxSize: "maxSize",
    boundaryLinks: "boundaryLinks",
    directionLinks: "directionLinks",
    firstText: "firstText",
    previousText: "previousText",
    nextText: "nextText",
    lastText: "lastText",
    rotate: "rotate",
    pageBtnClass: "pageBtnClass",
    disabled: "disabled",
    itemsPerPage: "itemsPerPage",
    totalItems: "totalItems"
  },
  outputs: {
    numPages: "numPages",
    pageChanged: "pageChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])],
  decls: 7,
  vars: 24,
  consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]],
  template: function PagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) {
        return ctx.selectPage(ctx.page - 1, $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1)(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) {
        return ctx.selectPage(ctx.page + 1, $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.align, ctx.align));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'pager',
      providers: [PAGER_CONTROL_VALUE_ACCESSOR],
      template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: PaginationConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    boundaryLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    directionLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    firstText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lastText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rotate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageBtnClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numPages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsPerPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const PAGINATION_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => PaginationComponent),
  multi: true
};

class PaginationComponent {
  constructor(elementRef, paginationConfig, changeDetection) {
    this.elementRef = elementRef;
    this.changeDetection = changeDetection;
    /** if `true` aligns each link to the sides of pager */

    this.align = true;
    /** if false first and last buttons will be hidden */

    this.boundaryLinks = false;
    /** if false previous and next buttons will be hidden */

    this.directionLinks = true;
    /** if true current page will in the middle of pages list */

    this.rotate = true; // css

    /** add class to <code><li\></code> */

    this.pageBtnClass = '';
    /** if true pagination component will be disabled */

    this.disabled = false;
    /** fired when total pages count changes, $event:number equals to total pages count */

    this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** fired when page was changed, $event:{page, itemsPerPage} equals to object
     * with current page index and number of items per page
     */

    this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.classMap = '';
    this.inited = false;
    this._itemsPerPage = 10;
    this._totalItems = 0;
    this._totalPages = 0;
    this._page = 1;
    this.elementRef = elementRef;

    if (!this.config) {
      this.configureOptions(paginationConfig.main);
    }
  }
  /** maximum number of items per page. If value less than 1 will display all items on one page */


  get itemsPerPage() {
    return this._itemsPerPage;
  }

  set itemsPerPage(v) {
    this._itemsPerPage = v;
    this.totalPages = this.calculateTotalPages();
  }
  /** total number of items in all pages */


  get totalItems() {
    return this._totalItems;
  }

  set totalItems(v) {
    this._totalItems = v;
    this.totalPages = this.calculateTotalPages();
  }

  get totalPages() {
    return this._totalPages;
  }

  set totalPages(v) {
    this._totalPages = v;
    this.numPages.emit(v);

    if (this.inited) {
      this.selectPage(this.page);
    }
  }

  get page() {
    return this._page;
  }

  set page(value) {
    const _previous = this._page;
    this._page = value > this.totalPages ? this.totalPages : value || 1;
    this.changeDetection.markForCheck();

    if (_previous === this._page || typeof _previous === 'undefined') {
      return;
    }

    this.pageChanged.emit({
      page: this._page,
      itemsPerPage: this.itemsPerPage
    });
  }

  configureOptions(config) {
    this.config = Object.assign({}, config);
  }

  ngOnInit() {
    var _a, _b, _c, _d, _e, _f;

    if (typeof window !== 'undefined') {
      this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
    } // watch for maxSize


    if (typeof this.maxSize === 'undefined') {
      this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
    }

    if (typeof this.rotate === 'undefined') {
      this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
    }

    if (typeof this.boundaryLinks === 'undefined') {
      this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
    }

    if (typeof this.directionLinks === 'undefined') {
      this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
    }

    if (typeof this.pageBtnClass === 'undefined') {
      this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
    } // base class


    if (typeof this.itemsPerPage === 'undefined') {
      this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
    }

    this.totalPages = this.calculateTotalPages(); // this class

    this.pages = this.getPages(this.page, this.totalPages);
    this.inited = true;
  }

  writeValue(value) {
    this.page = value;
    this.pages = this.getPages(this.page, this.totalPages);
  }

  getText(key) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this[`${key}Text`] || this.config[`${key}Text`];
  }

  noPrevious() {
    return this.page === 1;
  }

  noNext() {
    return this.page === this.totalPages;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  selectPage(page, event) {
    if (event) {
      event.preventDefault();
    }

    if (!this.disabled) {
      if (event && event.target) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target = event.target;
        target.blur();
      }

      this.writeValue(page);
      this.onChange(this.page);
    }
  } // Create page object used in template


  makePage(num, text, active) {
    return {
      text,
      number: num,
      active
    };
  }

  getPages(currentPage, totalPages) {
    const pages = []; // Default page limits

    let startPage = 1;
    let endPage = totalPages;
    const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

    if (isMaxSized && this.maxSize) {
      if (this.rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
        endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - this.maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

        endPage = Math.min(startPage + this.maxSize - 1, totalPages);
      }
    } // Add page number links


    for (let num = startPage; num <= endPage; num++) {
      const page = this.makePage(num, num.toString(), num === currentPage);
      pages.push(page);
    } // Add links to move between page sets


    if (isMaxSized && !this.rotate) {
      if (startPage > 1) {
        const previousPageSet = this.makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }

      if (endPage < totalPages) {
        const nextPageSet = this.makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
    }

    return pages;
  } // base class


  calculateTotalPages() {
    const totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  }

}

PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
  return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

PaginationComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PaginationComponent,
  selectors: [["pagination"]],
  inputs: {
    align: "align",
    maxSize: "maxSize",
    boundaryLinks: "boundaryLinks",
    directionLinks: "directionLinks",
    firstText: "firstText",
    previousText: "previousText",
    nextText: "nextText",
    lastText: "lastText",
    rotate: "rotate",
    pageBtnClass: "pageBtnClass",
    disabled: "disabled",
    customPageTemplate: "customPageTemplate",
    customNextTemplate: "customNextTemplate",
    customPreviousTemplate: "customPreviousTemplate",
    customFirstTemplate: "customFirstTemplate",
    customLastTemplate: "customLastTemplate",
    itemsPerPage: "itemsPerPage",
    totalItems: "totalItems"
  },
  outputs: {
    numPages: "numPages",
    pageChanged: "pageChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])],
  decls: 16,
  vars: 6,
  consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 7, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 7, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 10, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 7, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 7, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'pagination',
      providers: [PAGINATION_CONTROL_VALUE_ACCESSOR],
      template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: PaginationConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    boundaryLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    directionLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    firstText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    lastText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rotate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageBtnClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customPageTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customNextTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customPreviousTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customFirstTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customLastTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numPages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsPerPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class PaginationModule {
  static forRoot() {
    return {
      ngModule: PaginationModule,
      providers: []
    };
  }

}

PaginationModule.ɵfac = function PaginationModule_Factory(t) {
  return new (t || PaginationModule)();
};

PaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: PaginationModule
});
PaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [PagerComponent, PaginationComponent],
      exports: [PagerComponent, PaginationComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 25463:
/*!*********************************************!*\
  !*** ./node_modules/country-list/data.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"code":"AD","name":"Andorra"},{"code":"AE","name":"United Arab Emirates"},{"code":"AF","name":"Afghanistan"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AI","name":"Anguilla"},{"code":"AL","name":"Albania"},{"code":"AM","name":"Armenia"},{"code":"AO","name":"Angola"},{"code":"AQ","name":"Antarctica"},{"code":"AR","name":"Argentina"},{"code":"AS","name":"American Samoa"},{"code":"AT","name":"Austria"},{"code":"AU","name":"Australia"},{"code":"AW","name":"Aruba"},{"code":"AX","name":"Åland Islands"},{"code":"AZ","name":"Azerbaijan"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BB","name":"Barbados"},{"code":"BD","name":"Bangladesh"},{"code":"BE","name":"Belgium"},{"code":"BF","name":"Burkina Faso"},{"code":"BG","name":"Bulgaria"},{"code":"BH","name":"Bahrain"},{"code":"BI","name":"Burundi"},{"code":"BJ","name":"Benin"},{"code":"BL","name":"Saint Barthélemy"},{"code":"BM","name":"Bermuda"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BR","name":"Brazil"},{"code":"BS","name":"Bahamas"},{"code":"BT","name":"Bhutan"},{"code":"BV","name":"Bouvet Island"},{"code":"BW","name":"Botswana"},{"code":"BY","name":"Belarus"},{"code":"BZ","name":"Belize"},{"code":"CA","name":"Canada"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CD","name":"Congo, Democratic Republic of the"},{"code":"CF","name":"Central African Republic"},{"code":"CG","name":"Congo"},{"code":"CH","name":"Switzerland"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"CK","name":"Cook Islands"},{"code":"CL","name":"Chile"},{"code":"CM","name":"Cameroon"},{"code":"CN","name":"China"},{"code":"CO","name":"Colombia"},{"code":"CR","name":"Costa Rica"},{"code":"CU","name":"Cuba"},{"code":"CV","name":"Cabo Verde"},{"code":"CW","name":"Curaçao"},{"code":"CX","name":"Christmas Island"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DE","name":"Germany"},{"code":"DJ","name":"Djibouti"},{"code":"DK","name":"Denmark"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"DZ","name":"Algeria"},{"code":"EC","name":"Ecuador"},{"code":"EE","name":"Estonia"},{"code":"EG","name":"Egypt"},{"code":"EH","name":"Western Sahara"},{"code":"ER","name":"Eritrea"},{"code":"ES","name":"Spain"},{"code":"ET","name":"Ethiopia"},{"code":"FI","name":"Finland"},{"code":"FJ","name":"Fiji"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"FO","name":"Faroe Islands"},{"code":"FR","name":"France"},{"code":"GA","name":"Gabon"},{"code":"GB","name":"United Kingdom of Great Britain and Northern Ireland"},{"code":"GD","name":"Grenada"},{"code":"GE","name":"Georgia"},{"code":"GF","name":"French Guiana"},{"code":"GG","name":"Guernsey"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GL","name":"Greenland"},{"code":"GM","name":"Gambia"},{"code":"GN","name":"Guinea"},{"code":"GP","name":"Guadeloupe"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"GR","name":"Greece"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"GT","name":"Guatemala"},{"code":"GU","name":"Guam"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HK","name":"Hong Kong"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"HN","name":"Honduras"},{"code":"HR","name":"Croatia"},{"code":"HT","name":"Haiti"},{"code":"HU","name":"Hungary"},{"code":"ID","name":"Indonesia"},{"code":"IE","name":"Ireland"},{"code":"IL","name":"Israel"},{"code":"IM","name":"Isle of Man"},{"code":"IN","name":"India"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"IQ","name":"Iraq"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IS","name":"Iceland"},{"code":"IT","name":"Italy"},{"code":"JE","name":"Jersey"},{"code":"JM","name":"Jamaica"},{"code":"JO","name":"Jordan"},{"code":"JP","name":"Japan"},{"code":"KE","name":"Kenya"},{"code":"KG","name":"Kyrgyzstan"},{"code":"KH","name":"Cambodia"},{"code":"KI","name":"Kiribati"},{"code":"KM","name":"Comoros"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KY","name":"Cayman Islands"},{"code":"KZ","name":"Kazakhstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LB","name":"Lebanon"},{"code":"LC","name":"Saint Lucia"},{"code":"LI","name":"Liechtenstein"},{"code":"LK","name":"Sri Lanka"},{"code":"LR","name":"Liberia"},{"code":"LS","name":"Lesotho"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"LV","name":"Latvia"},{"code":"LY","name":"Libya"},{"code":"MA","name":"Morocco"},{"code":"MC","name":"Monaco"},{"code":"MD","name":"Moldova, Republic of"},{"code":"ME","name":"Montenegro"},{"code":"MF","name":"Saint Martin, (French part)"},{"code":"MG","name":"Madagascar"},{"code":"MH","name":"Marshall Islands"},{"code":"MK","name":"North Macedonia"},{"code":"ML","name":"Mali"},{"code":"MM","name":"Myanmar"},{"code":"MN","name":"Mongolia"},{"code":"MO","name":"Macao"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MS","name":"Montserrat"},{"code":"MT","name":"Malta"},{"code":"MU","name":"Mauritius"},{"code":"MV","name":"Maldives"},{"code":"MW","name":"Malawi"},{"code":"MX","name":"Mexico"},{"code":"MY","name":"Malaysia"},{"code":"MZ","name":"Mozambique"},{"code":"NA","name":"Namibia"},{"code":"NC","name":"New Caledonia"},{"code":"NE","name":"Niger"},{"code":"NF","name":"Norfolk Island"},{"code":"NG","name":"Nigeria"},{"code":"NI","name":"Nicaragua"},{"code":"NL","name":"Netherlands"},{"code":"NO","name":"Norway"},{"code":"NP","name":"Nepal"},{"code":"NR","name":"Nauru"},{"code":"NU","name":"Niue"},{"code":"NZ","name":"New Zealand"},{"code":"OM","name":"Oman"},{"code":"PA","name":"Panama"},{"code":"PE","name":"Peru"},{"code":"PF","name":"French Polynesia"},{"code":"PG","name":"Papua New Guinea"},{"code":"PH","name":"Philippines"},{"code":"PK","name":"Pakistan"},{"code":"PL","name":"Poland"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"PN","name":"Pitcairn"},{"code":"PR","name":"Puerto Rico"},{"code":"PS","name":"Palestine, State of"},{"code":"PT","name":"Portugal"},{"code":"PW","name":"Palau"},{"code":"PY","name":"Paraguay"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RS","name":"Serbia"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"SA","name":"Saudi Arabia"},{"code":"SB","name":"Solomon Islands"},{"code":"SC","name":"Seychelles"},{"code":"SD","name":"Sudan"},{"code":"SE","name":"Sweden"},{"code":"SG","name":"Singapore"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"SI","name":"Slovenia"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SK","name":"Slovakia"},{"code":"SL","name":"Sierra Leone"},{"code":"SM","name":"San Marino"},{"code":"SN","name":"Senegal"},{"code":"SO","name":"Somalia"},{"code":"SR","name":"Suriname"},{"code":"SS","name":"South Sudan"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SV","name":"El Salvador"},{"code":"SX","name":"Sint Maarten, (Dutch part)"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"SZ","name":"Eswatini"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TD","name":"Chad"},{"code":"TF","name":"French Southern Territories"},{"code":"TG","name":"Togo"},{"code":"TH","name":"Thailand"},{"code":"TJ","name":"Tajikistan"},{"code":"TK","name":"Tokelau"},{"code":"TL","name":"Timor-Leste"},{"code":"TM","name":"Turkmenistan"},{"code":"TN","name":"Tunisia"},{"code":"TO","name":"Tonga"},{"code":"TR","name":"Türkiye"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TV","name":"Tuvalu"},{"code":"TW","name":"Taiwan, Province of China"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"UA","name":"Ukraine"},{"code":"UG","name":"Uganda"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"US","name":"United States of America"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VA","name":"Holy See"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"VN","name":"Viet Nam"},{"code":"VU","name":"Vanuatu"},{"code":"WF","name":"Wallis and Futuna"},{"code":"WS","name":"Samoa"},{"code":"YE","name":"Yemen"},{"code":"YT","name":"Mayotte"},{"code":"ZA","name":"South Africa"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]');

/***/ })

};
;
//# sourceMappingURL=6907.js.map