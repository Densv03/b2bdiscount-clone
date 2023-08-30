"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-projects_ngx-country-select_src_lib_layout_ngx-country-select_component_ts"],{

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



/***/ })

}]);
//# sourceMappingURL=default-projects_ngx-country-select_src_lib_layout_ngx-country-select_component_ts.js.map