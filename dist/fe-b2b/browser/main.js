"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["main"],{

/***/ 88763:
/*!*******************************************************!*\
  !*** ./projects/id-generator/src/lib/id-generator.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "idGenerator": () => (/* binding */ idGenerator)
/* harmony export */ });
function idGenerator() {
    return "_" + Math.random().toString(36).substr(2, 9);
}


/***/ }),

/***/ 5214:
/*!***********************************************************************!*\
  !*** ./projects/ngx-button/src/lib/directive/ngx-button.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxButtonDirective": () => (/* binding */ B2bNgxButtonDirective)
/* harmony export */ });
/* harmony import */ var _enum_ngx_button_theme_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/ngx-button-theme.enum */ 14739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function isValueInEnum(value, enumArray) {
    return Object.values(enumArray).includes(value);
}
class B2bNgxButtonDirective {
    constructor(_renderer2, _elementRef) {
        this._renderer2 = _renderer2;
        this._elementRef = _elementRef;
        this.theme = _enum_ngx_button_theme_enum__WEBPACK_IMPORTED_MODULE_0__.B2bNgxButtonThemeEnum.BACKGROUND_BLACK;
        this._renderer2.addClass(this._elementRef.nativeElement, `b2b-ngx-button`);
    }
    ngOnChanges(changes) {
        if (!changes.theme || !isValueInEnum(changes.theme.currentValue, _enum_ngx_button_theme_enum__WEBPACK_IMPORTED_MODULE_0__.B2bNgxButtonThemeEnum)) {
            return;
        }
        const { currentValue } = changes.theme;
        const category = currentValue.split("-")[0];
        this._renderer2.addClass(this._elementRef.nativeElement, category);
        this._renderer2.addClass(this._elementRef.nativeElement, currentValue);
    }
}
B2bNgxButtonDirective.ɵfac = function B2bNgxButtonDirective_Factory(t) { return new (t || B2bNgxButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
B2bNgxButtonDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: B2bNgxButtonDirective, selectors: [["", "b2bNgxButton", ""]], inputs: { theme: "theme" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 14739:
/*!*******************************************************************!*\
  !*** ./projects/ngx-button/src/lib/enum/ngx-button-theme.enum.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxButtonThemeEnum": () => (/* binding */ B2bNgxButtonThemeEnum)
/* harmony export */ });
var B2bNgxButtonThemeEnum;
(function (B2bNgxButtonThemeEnum) {
    B2bNgxButtonThemeEnum["BACKGROUND_BLACK"] = "background-black";
    B2bNgxButtonThemeEnum["BACKGROUND_WHITE"] = "background-white";
    B2bNgxButtonThemeEnum["BACKGROUND_BLUE"] = "background-blue";
    B2bNgxButtonThemeEnum["BACKGROUND_GRAY"] = "background-gray";
    B2bNgxButtonThemeEnum["BACKGROUND_RED"] = "background-red";
    B2bNgxButtonThemeEnum["BACKGROUND_TRANSPARENT"] = "background-transparent";
    B2bNgxButtonThemeEnum["BACKGROUND_HOVER_BLACK"] = "background-hover-black";
    B2bNgxButtonThemeEnum["OUTLINE_BLACK"] = "outline-black";
    B2bNgxButtonThemeEnum["OUTLINE_WHITE"] = "outline-white";
    B2bNgxButtonThemeEnum["OUTLINE_BLUE"] = "outline-blue";
    B2bNgxButtonThemeEnum["OUTLINE_GRAY"] = "outline-gray";
})(B2bNgxButtonThemeEnum || (B2bNgxButtonThemeEnum = {}));


/***/ }),

/***/ 94434:
/*!********************************************************************!*\
  !*** ./projects/ngx-button/src/lib/layout/ngx-button.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxButtonComponent": () => (/* binding */ B2bNgxButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


const _c0 = ["*"];
class B2bNgxButtonComponent {
    constructor() {
        this.theme = "black";
        this.className = '';
        this.type = "button";
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    emitClick(event) {
        this.clicked.emit(event);
    }
    get buttonClassName() {
        const defaultStyles = "rounded cursor-pointer transition-colors duration-300 border border-solid border-transparent";
        const blackThemeStyles = "bg-black text-white hover:bg-gray-800";
        const whiteThemeStyles = "bg-white text-black hover:bg-blue-50 shadow";
        const blueThemeStyles = "bg-blue-600 text-white hover:bg-blue-500";
        const blackOutlineThemeStyles = "border-black hover:bg-blue-50 shadow";
        const whiteOutlineThemeStyles = "border-white text-white hover:bg-blue-50";
        const themeStyles = {
            "white": whiteThemeStyles,
            "black": blackThemeStyles,
            "blue": blueThemeStyles,
            "black-outline": blackOutlineThemeStyles,
            "white-outline": whiteOutlineThemeStyles,
        }[this.theme];
        return `${defaultStyles} ${themeStyles} ${this.className}`;
    }
}
B2bNgxButtonComponent.ɵfac = function B2bNgxButtonComponent_Factory(t) { return new (t || B2bNgxButtonComponent)(); };
B2bNgxButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxButtonComponent, selectors: [["b2b-ngx-button"]], inputs: { type: "type", theme: "theme", className: "className" }, outputs: { clicked: "clicked" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[3, "type", "click"]], template: function B2bNgxButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B2bNgxButtonComponent_Template_button_click_0_listener($event) { return ctx.emitClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.buttonClassName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 59026:
/*!**********************************************************!*\
  !*** ./projects/ngx-button/src/lib/ngx-button.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxButtonModule": () => (/* binding */ B2bNgxButtonModule)
/* harmony export */ });
/* harmony import */ var _layout_ngx_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/ngx-button.component */ 94434);
/* harmony import */ var _directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/ngx-button.directive */ 5214);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);




class B2bNgxButtonModule {
}
B2bNgxButtonModule.ɵfac = function B2bNgxButtonModule_Factory(t) { return new (t || B2bNgxButtonModule)(); };
B2bNgxButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxButtonModule });
B2bNgxButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxButtonModule, { declarations: [_layout_ngx_button_component__WEBPACK_IMPORTED_MODULE_2__.B2bNgxButtonComponent, _directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_3__.B2bNgxButtonDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [_layout_ngx_button_component__WEBPACK_IMPORTED_MODULE_2__.B2bNgxButtonComponent,
        _directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_3__.B2bNgxButtonDirective] }); })();


/***/ }),

/***/ 52767:
/*!************************************************************************!*\
  !*** ./projects/ngx-checkbox/src/lib/layout/ngx-checkbox.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxCheckboxComponent": () => (/* binding */ B2bNgxCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _b2b_id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/id-generator */ 88763);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);







const _c0 = ["*"];
// TODO: uncomment code below when libs will be inserted in b2b
// import { FormControl } from "@ngneat/reactive-forms";
// import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
// @UntilDestroy()
class B2bNgxCheckboxComponent {
    constructor() {
        this.placeholder = '';
        this.checked = false;
        this.customClass = '';
        this.errors = {};
        this.checkboxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
        this.formControl.valueChanges.pipe().subscribe((value) => {
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
    onCheckboxChange(e) {
        this.checkboxChange.emit(e);
    }
}
B2bNgxCheckboxComponent.ɵfac = function B2bNgxCheckboxComponent_Factory(t) { return new (t || B2bNgxCheckboxComponent)(); };
B2bNgxCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxCheckboxComponent, selectors: [["b2b-ngx-checkbox"]], inputs: { placeholder: "placeholder", checked: "checked", customClass: "customClass", customIconClass: "customIconClass", errors: "errors" }, outputs: { checkboxChange: "checkboxChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxCheckboxComponent),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxCheckboxComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 6, vars: 6, consts: [[1, "ngx-checkbox", 3, "ngClass"], [1, "ngx-checkbox__label"], ["type", "checkbox", 1, "ngx-checkbox__input", 3, "ngClass", "ngModel", "checked", "formControl", "ngModelChange", "change"], [1, "ngx-checkbox__icon", 3, "ngClass"], ["b2bNgxIcon", "", "name", "check-white"]], template: function B2bNgxCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function B2bNgxCheckboxComponent_Template_input_ngModelChange_3_listener($event) { return ctx.checked = $event; })("change", function B2bNgxCheckboxComponent_Template_input_change_3_listener($event) { return ctx.onCheckboxChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customClass)("ngModel", ctx.checked)("checked", ctx.checked)("formControl", ctx.formControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customIconClass);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconDirective], styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 1.5rem;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__label[_ngcontent-%COMP%] {\n  color: #6c7077;\n  padding-left: 2rem;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 1.5rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.16rem;\n  border: 0.16rem solid #d2deff;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input[_ngcontent-%COMP%] {\n  opacity: 0;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input[_ngcontent-%COMP%]:checked    ~ .ngx-checkbox__icon[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input[_ngcontent-%COMP%]:checked    ~ .ngx-checkbox__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input.ng-invalid.ng-touched[_ngcontent-%COMP%]    ~ .ngx-checkbox__icon[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}[_nghost-%COMP%]   .ngx-checkbox.subscription-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n  width: max-content;\n}[_nghost-%COMP%]   .ngx-checkbox.subscription-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input[_ngcontent-%COMP%]:checked    ~ .ngx-checkbox__icon[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-color: #FFFFFF;\n}[_nghost-%COMP%]   .ngx-checkbox.subscription-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input[_ngcontent-%COMP%]:checked    ~ .ngx-checkbox__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(1);\n}  .form-submitted .ngx-checkbox .ngx-checkbox__input.ng-invalid ~ .ngx-checkbox__icon {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJuZ3gtY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9uZ3gtc2VsZWN0L3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnMuc2NzcyIsIi4uLy4uLy4uLy4uL25neC1idXR0b24vc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL25neC1saW5rL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi9uZ3gtaW5wdXQvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL25neC1pY29uL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi9uZ3gtdGV4dGFyZWEvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL3NoYXJlZC9zcmMvc3R5bGVzL21hdGVyaWFsLW92ZXJyaWRlLnNjc3MiLCIuLi8uLi8uLi8uLi9zaGFyZWQvc3JjL3N0eWxlcy9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUUsQ0FDcEI7O01BRUUsYUFBYSxFQUFFLENBQ25COztJQUVFLFVBQVUsRUFBRSxDQUNkOzs7O0lBSUUsa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FDbEI7TUFDRSxvQkFBb0I7TUFDcEIsNEJBQTRCLEVBQUUsQ0FDaEM7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUUsQ0FDdkI7UUFDRSxlQUFlLEVBQUUsQ0FDbkI7UUFDRSxZQUFZLEVBQUUsQ0FDaEI7UUFDRSxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixlQUFlLEVBQUUsQ0FDbkI7O1FBRUUscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQixFQUFFLENBQ3RCO1FBQ0UsaUJBQWlCLEVBQUUsQ0FDckI7UUFDRSxtQkFBbUIsRUFBRSxDQUN2QjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0Usa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTLEVBQUUsQ0FDWDtVQUNFLFFBQVEsRUFBRSxDQUNaO1VBQ0UsT0FBTyxFQUFFLENBQ2I7UUFDRSxlQUFlLEVBQUUsQ0FDdkI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWMsRUFBRSxDQUNoQjtNQUNFLHFCQUFxQixFQUFFLENBQ3pCO01BQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7TUFLRSxhQUFhO01BT2Isc0JBQXNCLEVBQUUsQ0FDMUI7TUFDRSxhQUFhLEVBQUUsQ0FDZjtRQUtFLGFBQWEsRUFBRSxDQUNyQjtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXLEVBQUUsQ0FDZjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWE7TUFDYixpQkFBaUIsRUFBRSxDQUNuQjs7UUFFRSxVQUFVO1FBQ1YsU0FBUztRQUNULHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBRSxDQUNwQjs7UUFFRSxhQUFhLEVBQUUsQ0FDakI7UUFDRSxlQUFlO1FBQ2YscUJBQXFCLEVBQUUsQ0FDekI7UUFDRSxtQkFBbUIsRUFBRSxDQ3JNN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnQkMsQ0FDRDtFQUNFLGdCQUFnQjtFQUNoQixxSEFBcUg7RUFDckg7O0dBRUM7RUFDRDs7R0FFQztFQUNEOztHQUVDO0VBQ0Q7O0dBRUM7RUFDRDs7R0FFQyxFQUFFLENBQ0g7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjs7OztJQUlFLHlCQUF5QjtJQUN6QixXQUFXLEVBQUUsQ0FDZjs7OztJQUlFLHlCQUF5QjtJQUN6QixXQUFXLEVBQUUsQ0FDZjs7OztJQUlFLHlCQUF5QjtJQUN6QixXQUFXLEVBQUUsQ0FDZjs7SUFFRSxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixrQ0FBa0MsRUFBRSxDQUN0Qzs7SUFFRSxzQkFBc0IsRUFBRSxDQUMxQjs7SUFFRSxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixrQ0FBa0MsRUFBRSxDQUN0Qzs7SUFFRSxzQkFBc0IsRUFBRSxDQUMxQjs7SUFFRSx5QkFBeUI7SUFDekIsV0FBVyxFQUFFLENBQ2Y7O0lBRUUseUJBQXlCO0lBQ3pCLFdBQVcsRUFBRSxDQUNmOztJQUVFLHlCQUF5QjtJQUN6QixXQUFXLEVBQUUsQ0FDZjtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhLEVBQUUsQ0FDakI7SUFDRSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhLEVBQUUsQ0FDakI7O0lBRUUsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IseUpBQXlKLEVBQUUsQ0FDN0o7O0lBRUUsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IseUpBQXlKLEVBQUUsQ0FDN0o7SUFDRSw0Q0FBNEMsRUFBRSxDQUM5QztNQUNFLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixnQkFBZ0IsRUFBRSxDQUNsQjtRQUNFLGtCQUFrQixFQUFFLENBQ3RCO1FBQ0Usb0RBQW9EO1FBQ3BELFlBQVk7UUFDWixtQkFBbUIsRUFBRSxDQUN2QjtRQUNFLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixvQkFBb0IsRUFBRSxDQUN4QjtRQUNFLGtCQUFrQixFQUFFLENBQ3hCO01BQ0UsNEJBQTRCLEVBQUUsQ0FDbEM7SUFDRSxrQkFBa0IsRUFBRSxDQUNwQjtNQUNFLG1CQUFtQjtNQUNuQixhQUFhLEVBQUUsQ0FDakI7TUFDRSxtQkFBbUI7TUFDbkIsZ0NBQWdDO01BQ2hDLDZCQUE2QixFQUFFLENBQ2pDO01BQ0UsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLDBCQUEwQjtNQUMxQiwyQkFBMkI7TUFDM0IsZUFBZTtNQUNmLGdCQUFnQixFQUFFLENBQ3BCO01BQ0UsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLDBCQUEwQjtNQUMxQiwyQkFBMkI7TUFDM0IsZUFBZTtNQUNmLGdCQUFnQixFQUFFLENBQ3BCO01BQ0UsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsV0FBVztNQUNYLFVBQVU7TUFDVixTQUFTO01BQ1QsTUFBTSxFQUFFLENBQ1I7UUFDRSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUVYLHNDQUFzQztRQUN0Qyx5QkFBeUIsRUFBRSxDQUMzQjtVQUNFLDJCQUEyQjtVQUUzQixrRUFBa0U7VUFFbEUsaUNBQWlDO1VBQ2pDLHlCQUF5QjtVQUN6QixrQkFBa0I7VUFDbEIsT0FBTztVQUNQLE1BQU07VUFDTixTQUFTO1VBQ1QsV0FBVztVQUNYLFdBQVcsRUFBRSxDQUNyQjtJQUNFLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQixFQUFFLENBQzVCO01BQ0UsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixpQkFBaUIsRUFBRSxDQUNyQjtNQUNFLGNBQWMsRUFBRSxDQUNoQjtRQUNFLHNCQUFzQixFQUFFLENBQ3hCO1VBQ0UscUNBQXFDO1VBQ3JDLHdDQUF3QyxFQUFFLENBQzVDO1VBQ0UsMENBQTBDO1VBQzFDLGlCQUFpQixFQUFFLENBQ3ZCO1FBQ0UsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLHNCQUFzQixFQUFFLENBQ3hCO1VBQ0UsMEJBQTBCO1VBQzFCLDBDQUEwQyxFQUFFLENBQ2hEOzs7O1FBSUUsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjLEVBQUUsQ0FDdEI7SUFDRSxzQkFBc0IsRUFBRSxDQUN4QjtNQUNFLHNCQUFzQixFQUFFLENBQzFCO01BQ0UsaUJBQWlCLEVBQUUsQ0FFekI7O0VBRUUsQ0FDRjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBRSxDQUNaO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYSxFQUFFLENBQ2Y7TUFHRSxnQ0FBZ0M7TUFDaEMsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsVUFBVTtNQUNWLFdBQVc7TUFDWCxZQUFZO01BQ1oseUJBQXlCLEVBQUUsQ0FDN0I7TUFJRSx5QkFBeUI7TUFDekIsY0FBYztNQUNkLHFCQUFxQjtNQUNyQixzQkFBc0I7TUFDdEIsd0JBQXdCLEVBQUUsQ0FDNUI7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLE1BQU07TUFDTixPQUFPO01BQ1AsV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFFLENBRXZCOztFQUVFLENBQ0Y7RUFDRTtJQUNFLFVBQVU7SUFDVix3Q0FBd0MsRUFBRTtFQUM1QztJQUNFLFVBQVU7SUFDVix1Q0FBdUMsRUFBRSxFQUFFLENGOVMvQztFQUNFLHlCQUF5QjtFQUN6QiwwQkFBZ0M7RUFDaEM7NEZBQ3NHO0VBQ3RHLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIsQ0FFQTtFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2QsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0d4R0EsaURBQWlELGVBQWUsQ0FBQyxpQ0FBaUMsQ0FBQyx1REFBdUQsZUFBZSxDQUFDLDJEQUEyRCxRQUFRLENBQUMseUNBQXlDLENBQUMsc0JBQXNCLENBQUMsaUVBQWlFLHlDQUF5QyxDQUFDLCtEQUErRCx5QkFBeUIsQ0FBQyx3QkFBd0IsQ0FBQyxpRUFBaUUseUJBQXlCLENBQUMsNEJBQTRCLENBQUMsa0VBQWtFLDRCQUE0QixDQUFDLDJCQUEyQixDQUFDLGdFQUFnRSx3QkFBd0IsQ0FBQywyQkFBMkIsQ0FBQyx5RUFBeUUsb0JBQW9CLENBQUMsMEVBQTBFLENBQUMsbURBQW1ELHdCQUF3QixDQUFDLHlDQUF5QyxZQUFZLENBQUMsZ0NBQWdDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsc0NBQXNDLG1DQUFtQyxDQUFDLG9EQUFvRCxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxnRUFBZ0Usa0JBQWtCLENBQUMsY0FBYyxDQUFDLG9FQUFvRSxVQUFVLENBQUMsaURBQWlELFdBQVcsQ0FBQywrRUFBK0UsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQywyRkFBMkYsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsb0dBQW9HLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLG9IQUFvSCxhQUFhLENBQUMsdUVBQXVFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxtRkFBbUYsaUJBQWlCLENBQUMsY0FBYyxDQUFDLGlGQUFpRixjQUFjLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLDZGQUE2RixjQUFjLENBQUMsZUFBZSxDQUFDLG1HQUFtRyx3QkFBd0IsQ0FBQyxtSEFBbUgsZ0JBQWdCLENBQUMsK0hBQStILGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxpR0FBaUcsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGdHQUFnRyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsc0dBQXNHLHdCQUF3QixDQUFDLHFHQUFxRyw4QkFBOEIsQ0FBQyxpSEFBaUgsNkJBQTZCLENBQUMsaUJBQWlCLENBQUMsc0dBQXNHLDZCQUE2QixDQUFDLGtIQUFrSCxhQUFhLENBQUMsOEJBQThCLENBQUMsaUZBQWlGLG1CQUFtQixDQUFDLDZGQUE2RixtQkFBbUIsQ0FBQyx1RkFBdUYsVUFBVSxDQUFDLHVGQUF1RixPQUFPLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsbUdBQW1HLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyw2QkFBNkIsVUFBVSxDQUFDLDZDQUE2QyxhQUFhLENBQUMsNEJBQTRCLG1CQUFtQixDQUFDLHdDQUF3QyxtQkFBbUIsQ0FBQyw2QkFBNkIsVUFBVSxDQUFDLGlCQUFpQixDQUFDLHlDQUF5QyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsNkNBQTZDLHFCQUFxQixDQUFDLHVDQUF1Qyx5Q0FBeUMsQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxtQkFBbUIscUJBQXFCLENBQUMscUJBQXFCLENBQUMsbUNBQW1DLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxXQUFXLENBQUMsMkJBQTJCLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCLENBQUMsaUZBQWlGLDJCQUEyQixDQUFDLDBCQUEwQixDQUFDLG1DQUFtQyxTQUFTLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLDhCQUE4QixDQUFDLDZCQUE2QixDQUFDLDJCQUEyQixDQUFDLGtCQUFrQixDQUFDLG1GQUFtRiwyQkFBMkIsQ0FBQyxvQ0FBb0MsUUFBUSxDQUFDLDhCQUE4QixDQUFDLDZCQUE2QixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxtRkFBbUYsOEJBQThCLENBQUMsNkJBQTZCLENBQUMsa0NBQWtDLFVBQVUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsOEJBQThCLENBQUMsNkJBQTZCLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCLENBQUMsa0ZBQWtGLDBCQUEwQixDQUFDLHVDQUF1Qyw0QkFBNEIsQ0FBQyxlQUFlLENBQUMsdUNBQXVDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyx5REFBeUQsd0JBQWdCLENBQWhCLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsNEVBQTRFLGNBQWMsQ0FBQywwRUFBMEUsd0JBQXdCLENBQUMseUtBQXlLLHNCQUFzQixDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyx1REFBdUQscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMscUtBQXFLLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyx1TUFBdU0sZUFBZSxDQUFDLHdFQUF3RSx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsMEVBQTBFLFVBQVUsQ0FBQyx1RUFBdUUsaUJBQWlCLENBQUMsbUZBQW1GLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxxRUFBcUUsYUFBYSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxpRkFBaUYsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLCtCQUErQixhQUFhLENBQUMsZ0JBQWdCLENDQTUwUTs7RUFFQyxnQ0FBQTtBQ0tELENERkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDS0QsQ0RIQTs7Ozs7Ozs7Ozs7RUFXQyxjQUFBO0FDTUQsQ0RKQTtFQUNDLGNBQUE7QUNPRCxDRExBOztFQUVDLGdCQUFBO0FDUUQsQ0ROQTs7RUFFQyxZQUFBO0FDU0QsQ0RQQTs7OztFQUlDLFdBQUE7RUFDQSxhQUFBO0FDVUQsQ0RSQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUNXRCxDRFRBOztFQUVDLFlBQUE7QUNZRCxDRFZBO0VBQ0MsU0FBQTtFQUNBLGlEQUFBO0FDYUQsQ0RYQTtFQUNDLHNCQUFBO0FDY0QsQ0RYQTtFQUNDLHFCQUFBO0VBQ0EsWUFBQTtBQ2NELENEYkM7RUFDQyxjQUFBO0FDZUYsQ0RYQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ2NELENEWEE7RUFDQyxZQUFBO0FDY0QsQ0RYQTtFQUNDLGtCQUFBO0FDY0QsQ0RYQTtFQUNDLGlCQUFBO0FDY0QsQ0NoTEE7RUFDRSxnQkFBQTtBRG1MRixDQzFLWTtFQUNFLG9EQUFBO0VBQ0EsZ0NBQUE7QUQ2S2QsQ0NwS1U7RUFDRSxvREFBQTtFQUNBLGdDQUFBO0FEc0taLENDMUpZO0VBQ0Usb0RBQUE7RUFDQSxnQ0FBQTtBRDRKZCxDQ25KVTtFQUNFLG9EQUFBO0VBQ0EsZ0NBQUE7QURxSlosQ0MzSUU7OztFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBRGdKSixDQzdJRTs7O0VBQ0UsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QURpSkosQ0M3SUk7OztFQUNFLG1CQUFBO0FEaUpOLENDOUlJOzs7RUFDRSxtQkFBQTtBRGtKTixDQzdJUTs7O0VBQ0UseUJBQUE7QURpSlYsQ0MzSU07OztFQUNFLHlDQ3BFTztFRHFFUCxxQkN0RVE7QUZxTmhCLENDeklJOzs7RUFDRSxtQkFBQTtBRDZJTixDQzFJSTs7O0VBQ0UsbUJBQUE7QUQ4SU4sQ0N6SVE7OztFQUNFLHlCQUFBO0FENklWLENDcklNOzs7RUFDRSwwQkFBQTtBRHlJUixDQ3JJSTs7O0VBQ0UsdUJBQUE7QUR5SU4sQ0N0SVE7OztFQUNFLDBCQUFBO0FEMElWLENDcklJOzs7RUFDRSx1QkFBQTtBRHlJTixDQ3BJUTs7O0VBQ0UsNkJBQUE7QUR3SVYsQ0M5SE07RUFDRSxrQkFBQTtFQUNBLFNBQUE7QURpSVIsQ0dyUkE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0FId1JGLENHdFJJO0VBQ0UseUJETlk7RUNPWixjREhZO0FGMlJsQixDR3ZSTTtFQUNFLHlCRFJVO0FGaVNsQixDR3RSSTtFQUNFLHlCRFRZO0VDVVosY0RGVztFQ0dYLCtDQUFBO0FId1JOLENHdlJNO0VBQ0UseUJEWFU7QUZvU2xCLENHdFJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUh3Uk4sQ0d2Uk07RUFDRSx5QkFBQTtBSHlSUixDR3RSSTtFQUNFLDZCQUFBO0VBQ0EsY0RsQlc7QUYwU2pCLENHdlJNO0VBQ0UseUJEMUJVO0FGbVRsQixDR3RSSTtFQUNFLHlCRDVCVztFQzZCWCxjRGpDWTtBRnlUbEIsQ0d2Uk07RUFDRSx5QkQ5QlM7QUZ1VGpCLENHdFJJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBSHdSTixDR3ZSTTtFQUNFLHlCRDlDVTtFQytDVixxQkQvQ1U7RUNnRFYsWUFBQTtBSHlSUixDR3BSSTtFQUNFLHFCRHREWTtBRjRVbEIsQ0dyUk07RUFDRSx5QkRsRFU7QUZ5VWxCLENHcFJJO0VBQ0UscUJEeERZO0FGOFVsQixDR3JSTTtFQUNFLHlCRHhEVTtBRitVbEIsQ0dwUkk7RUFDRSxxQkQxRFc7QUZnVmpCLENHclJNO0VBQ0UseUJEM0RTO0FGa1ZqQixDR3BSSTtFQUNFLHFCQUFBO0FIc1JOLENHclJNO0VBQ0UseUJEcEVVO0FGMlZsQixDR2xSRTtFQUNFLHFEQUFBO0VBQ0EseUJBQUE7QUhvUkosQ0duUkk7RUFDRSxxREFBQTtBSHFSTixDSXZXQTtFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7QUowV0QsQ0l2V0U7RUFDQyxjRkNjO0FGd1dqQixDSXRXRTtFQUNDLGNGWGU7QUZtWGxCLENJcldFO0VBQ0MsY0ZYZTtBRmtYbEIsQ0lwV0U7RUFDQyxjRkxjO0FGMldqQixDSW5XRTtFQUNDLDBCQUFBO0FKcVdILENJaldDO0VBQ0MsaUNBQUE7QUptV0YsQ0lqV0U7RUFDQyx5QkYzQmU7RUU0QmYsY0ZoQ2U7QUZtWWxCLENJbFdHO0VBQ0MseUJGN0JjO0FGaVlsQixDSWhXRTtFQUNDLDZCQUFBO0VBQ0EsY0Z4Q2U7QUYwWWxCLENJaldHO0VBQ0MseUJGcENjO0FGdVlsQixDSS9WRTtFQUNDLHlCRnZDYztFRXdDZCxjRjVDZTtBRjZZbEIsQ0k5VkU7RUFDQyx5QkZwRGU7RUVxRGYsY0ZqRGU7QUZpWmxCLENJL1ZHO0VBQ0MseUJGdERjO0FGdVpsQixDSTdWRTtFQUNDLHlCRnBEYztFRXFEZCxjRnpEZTtBRndabEIsQ0k5Vkc7RUFDQyx5QkZ0RGE7QUZzWmpCLENJNVZFO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBSjhWSCxDSTdWRztFQUNDLHlCQUFBO0FKK1ZKLENJN1ZHO0VBQ0MsbUJBQUE7QUorVkosQ0l6VkU7RUFDQyxxQkY3RWU7QUZ3YWxCLENJMVZHO0VBQ0MseUJG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O0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQWluQkgsQ0EvbUJHO0VBQ0MsYUFBQTtBQWluQkosQ0E3bUJFO0VBQ0MsVUFBQTtBQSttQkgsQ0E3bUJHO0VBQ0MseUJFbENjO0VGbUNkLHFCRW5DYztBRmtwQmxCLENBN21CSTtFQUNDLGNBQUE7QUErbUJMLENBM21CRztFQUNDLHlDRXRCVztFRnVCWCxxQkV4Qlk7QUZxb0JoQixDQXhtQkc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBMG1CSixDQXhtQkc7RUFDQyx5QkFBQTtFQUNBLHFCQUFBO0FBMG1CSixDQXhtQkk7RUFDQyxpQkFBQTtBQTBtQkwsQ0E5bEJJO0VBQ0MseUNFdERVO0VGdURWLHFCRXhEVztBRnlwQmhCIiwiZmlsZSI6Im5neC1jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi11cDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydC11bnNldDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1waW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWFkZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNraXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCIvKlxuICBUaGlzIHN0eWxlc2hlZXQgdXNlcyBzY3NzIHZhbGlhYmxlcyBmb3IgbW9zdCBvZiB0aGUgY29sb3JzIC8gYmFja2dyb3VuZC1jb2xvcnMgb2YgdGhlIHRhYmxlXG4gIHRvIGVuYWJsZSB0aGUgY3VzdG9taXphdGlvbiBvZiB0aGUgZGlzcGxheWVkIHRhYmxlIHdpdGhvdXQgY2xvbmluZyB0aGUgc3R5bGVzaGVldCBpbnRvIHRoZVxuICBvd24gYXBwbGljYXRpb24uXG5cbiAgVG8gbW9kaWZ5IHRhYmxlIGNvbG9ycywgYWRkIHRoZSBmb2xsb3dpbmcgbGluZXMgdG8gdGhlIHNjc3MgZmlsZSBvZiB5b3VyIGFwcGxpY2F0aW9uXG4gICh0aGlzIGV4YW1wbGUgbW9kaWZpZXMgdGhlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCByb3cgLSBzZWxlY3Rpb25UeXBlID0gc2luZ2xlLCBtdWx0aSBvciBtdWx0aUNsaWNrKTpcblxuICAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDogeWVsbG93O1xuICAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh5ZWxsb3csIDAuMik7XG5cbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2Nzcyc7XG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcblxuVGhhdCdzIGFsbC5cbiovXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLyoqXG5cdCAqIFNoYXJlZCBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBHbG9iYWwgUm93IFN0eWxlc1xuXHQgKi9cbiAgLyoqXG5cdCAqIEhlYWRlciBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBCb2R5IFN0eWxlc1xuXHQgKi9cbiAgLyoqXG5cdCAqIEZvb3RlciBTdHlsZXNcblx0ICovIH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc3RyaXBlZCAuZGF0YXRhYmxlLXJvdy1vZGQge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5M2FlNDtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDQxZWY7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDRmZmU7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDQxZWY7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmVtcHR5LXJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmxvYWRpbmctcm93IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSUhXUFNrTmVTQm1KaFRRVnRiaUROQ2dBU2FnSUl1Slg4T2dBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtcm93LXJpZ2h0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJMTJQUWtOZGkxVlRRNWdiU3drQXNEUUFSTEFJR3RPU0ZVQUFBQUFCSlJVNUVya0pnZ2c9PSk7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kcmFnZ2FibGU6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UsIG9wYWNpdHkgNDAwbXMgZWFzZTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kcmFnZ2FibGU6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbjogLTMwcHggMCAwIC0zMHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmRyYWdnaW5nIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2VlZTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ncm91cC1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDlkOGQ5O1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNkOWQ4ZDk7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAucHJvZ3Jlc3MtbGluZWFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdG9wOiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZDFmOTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciAuY29udGFpbmVyIC5iYXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICAgICAgICBhbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDZjYzg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDVweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMS4ycmVtOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBsaSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBsaS5hY3RpdmUgYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogNnB4IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgM3B4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdzpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi8qKlxuICogQ2hlY2tib3hlc1xuKiovXG4uZGF0YXRhYmxlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwOyB9XG4gIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgICBib3JkZXItY29sb3I6ICMwMDk2ODg7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4vKipcbiAqIFByb2dyZXNzIGJhciBhbmltYXRpb25zXG4gKi9cbkBrZXlmcmFtZXMgcXVlcnkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzUlKSBzY2FsZSgwLjMsIDEpOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAsIDEpOyB9IH1cbiIsIi5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNiM2IzYjMgI2NjYyAjZDlkOWQ5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy1hcnJvd3t0b3A6LTJweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk5OTtib3JkZXItd2lkdGg6MCA1cHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3c6aG92ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzMzN9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC10b3A+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1yaWdodD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1ib3R0b20+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1sZWZ0Pi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1jb2xvcjojMDA3ZWZmO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wNzUpLDAgMCAwIDNweCByZ2JhKDAsMTI2LDI1NSwwLjEpfS5uZy1zZWxlY3Qubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOX0ubmctc2VsZWN0IC5uZy1oYXMtdmFsdWUgLm5nLXBsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVye2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgI2NjYzttaW4taGVpZ2h0OjM2cHg7YWxpZ24taXRlbXM6Y2VudGVyfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDFweCAwIHJnYmEoMCwwLDAsMC4wNil9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWxlZnQ6MTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntjb2xvcjojOTk5fS5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lcntoZWlnaHQ6MzZweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7dG9wOjVweDtsZWZ0OjA7cGFkZGluZy1sZWZ0OjEwcHg7cGFkZGluZy1yaWdodDo1MHB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLWxlZnQ6NTBweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2JvcmRlcjoxcHggc29saWQgI2U2ZTZlNn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmc6MCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1sZWZ0OjdweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDo3cHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7Zm9udC1zaXplOi45ZW07bWFyZ2luLWJvdHRvbTo1cHg7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZS5uZy12YWx1ZS1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZS5uZy12YWx1ZS1kaXNhYmxlZCAubmctdmFsdWUtbGFiZWx7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZDFlOGZmfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYjhkYmZmfVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ubGVmdHtib3JkZXItbGVmdDoxcHggc29saWQgI2I4ZGJmZjtib3JkZXItcmlnaHQ6bm9uZX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLnJpZ2h0e2JvcmRlci1sZWZ0OjA7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYjhkYmZmfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmc6MCAwIDNweCAzcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgM3B4IDNweCAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0PmlucHV0e2NvbG9yOiMwMDB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7dG9wOjVweDtwYWRkaW5nLWJvdHRvbTo1cHg7cGFkZGluZy1sZWZ0OjNweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3BhZGRpbmctcmlnaHQ6M3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVyOmhvdmVyIC5uZy1jbGVhcntjb2xvcjojRDAwMjFCfS5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCA1cHggMCAwfVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdCAubmctc3Bpbm5lci16b25le3BhZGRpbmc6NXB4IDAgMCA1cHh9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcnt3aWR0aDoyNXB4O3BhZGRpbmctcmlnaHQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcntwYWRkaW5nLWxlZnQ6NXB4O3BhZGRpbmctcmlnaHQ6MH0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVyOmhvdmVyIC5uZy1hcnJvd3tib3JkZXItdG9wLWNvbG9yOiM2NjZ9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlciAubmctYXJyb3d7Ym9yZGVyLWNvbG9yOiM5OTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggNXB4IDIuNXB4fS5uZy1kcm9wZG93bi1wYW5lbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpO2xlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXRvcHtib3R0b206MTAwJTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXRvcCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1yaWdodHtsZWZ0OjEwMCU7dG9wOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLWJvdHRvbTotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9te3RvcDoxMDAlO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItdG9wLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLXRvcDotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9tIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtbGVmdHtsZWZ0Oi0xMDAlO3RvcDowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLWJvdHRvbTotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtbGVmdCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWhlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cHt1c2VyLXNlbGVjdDpub25lO3BhZGRpbmc6OHB4IDEwcHg7Zm9udC13ZWlnaHQ6NTAwO2NvbG9yOnJnYmEoMCwwLDAsMC41NCk7Y3Vyc29yOnBvaW50ZXJ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLWRpc2FibGVke2N1cnNvcjpkZWZhdWx0fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1zZWxlY3RlZCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZHtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2JhY2tncm91bmQtY29sb3I6I2ViZjVmZjtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9ue2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLDAuODcpO3BhZGRpbmc6OHB4IDEwcHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmZ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZCAubmctb3B0aW9uLWxhYmVsLC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZCAubmctb3B0aW9uLWxhYmVse2ZvbnQtd2VpZ2h0OjYwMH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLW1hcmtlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWZhZmY7Y29sb3I6IzMzM30ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWRpc2FibGVke2NvbG9yOiNjY2N9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1jaGlsZHtwYWRkaW5nLWxlZnQ6MjJweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1yaWdodDoyMnB4O3BhZGRpbmctbGVmdDowfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse2ZvbnQtc2l6ZTo4MCU7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmctcmlnaHQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIC5uZy10YWctbGFiZWx7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWx7ZGlyZWN0aW9uOnJ0bDt0ZXh0LWFsaWduOnJpZ2h0fVxuIiwiaHRtbCxcbmJvZHkge1xuXHRzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuaHRtbCxcbmJvZHkge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6IGJsYWNrO1xuXHQmOnZpc2l0ZWQge1xuXHRcdGNvbG9yOiAjMDAwMDAwO1xuXHR9XG59XG5cbmJ1dHRvbiB7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGV4dGFyZWEge1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbmkge1xuXHRmb250LXN0eWxlOiBJdGFsaWM7XG59XG5cbmIge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlc1wiO1xuXG46aG9zdCB7XG5cdC5uZ3gtY2hlY2tib3gge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiAxLjVyZW07XG5cblx0XHQubmd4LWNoZWNrYm94X19sYWJlbCB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNDAwO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAycmVtO1xuXHRcdH1cblxuXHRcdC5uZ3gtY2hlY2tib3hfX2ljb24ge1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0d2lkdGg6IDEuNXJlbTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMC4xNnJlbTtcblx0XHRcdGJvcmRlcjogMC4xNnJlbSBzb2xpZCAkY29sb3ItYmx1ZS01MDtcblxuXHRcdFx0aW1nIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubmd4LWNoZWNrYm94X19pbnB1dCB7XG5cdFx0XHRvcGFjaXR5OiAwO1xuXG5cdFx0XHQmOmNoZWNrZWQgfiAubmd4LWNoZWNrYm94X19pY29uIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgfiAubmd4LWNoZWNrYm94X19pY29uIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLnN1YnNjcmlwdGlvbi1jaGVja2JveCB7XG5cdFx0XHQubmd4LWNoZWNrYm94X19sYWJlbCB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cdFx0XHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdFx0XHR3aWR0aDogbWF4LWNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0XHQubmd4LWNoZWNrYm94X19pbnB1dDpjaGVja2VkIH4gLm5neC1jaGVja2JveF9faWNvbiB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcblxuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdGZpbHRlcjogaW52ZXJ0KDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cblxuOjpuZy1kZWVwIHtcblx0LmZvcm0tc3VibWl0dGVkIHtcblx0XHQubmd4LWNoZWNrYm94IHtcblx0XHRcdC5uZ3gtY2hlY2tib3hfX2lucHV0IHtcblx0XHRcdFx0Ji5uZy1pbnZhbGlkIH4gLm5neC1jaGVja2JveF9faWNvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKSA+IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpuZy1kZWVwIHtcbiAgZm9ybSB7XG4gICAgYjJiLW5neC1zZWxlY3Qge1xuICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgbmctc2VsZWN0IHtcbiAgICAgICAgICAmLm5nLXRvdWNoZWQge1xuICAgICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5mb3JtLXN1Ym1pdHRlZCB7XG4gICAgICBiMmItbmd4LXNlbGVjdCB7XG4gICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvcm0ge1xuICAgIGIyYi1uZ3gtY291bnRyeS1zZWxlY3Qge1xuICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgbmctc2VsZWN0IHtcbiAgICAgICAgICAmLm5nLXRvdWNoZWQge1xuICAgICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5mb3JtLXN1Ym1pdHRlZCB7XG4gICAgICBiMmItbmd4LWNvdW50cnktc2VsZWN0IHtcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUsXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSxcbi5uZy1zZWxlY3Qtb3BlbmVkIHtcbiAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogNDlweDtcbiAgfVxuXG4gIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDE1LCAxNSwgMTcsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLWdyYXkge1xuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJhY2tncm91bmQtd2hpdGUge1xuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG4gICAgLm5nLXZhbHVlIHtcbiAgICAgIC5uZy12YWx1ZS1sYWJlbCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAubmctdmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgLm5nLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgLm5nLW9wdGlvbiB7XG4gICAgICAgIC5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAubmctdmFsdWUtY29udGFpbmVyIHtcbiAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLWJsYWNrLTkwMDogIzAwMDAwMDtcbiRjb2xvci1ibGFjay04MDA6ICMwZjBmMTE7XG4kY29sb3ItYmxhY2stMTAwOiAjMmUyZTM0O1xuJGNvbG9yLWJsYWNrLTUwOiByZ2JhKDE3NywgMTc3LCAxNzcsIDAuNik7XG5cbiRjb2xvci13aGl0ZS05MDA6ICNmZmZmZmY7XG4kY29sb3Itd2hpdGUtMjAwOiAjZTNlYWYxO1xuJGNvbG9yLXdoaXRlLTEwMDogI2YzZjZmODtcblxuJGNvbG9yLWJsdWUtNTAwOiAjMDA1ZGZmO1xuJGNvbG9yLWJsdWUtMTAwOiAjNTk5NWZlO1xuJGNvbG9yLWJsdWUtNTA6ICNkMmRlZmY7XG5cbiRjb2xvci1ncmF5LTkwMDogIzBmMGYxMTtcbiRjb2xvci1ncmF5LTYwMDogIzIyMjIyNDtcbiRjb2xvci1ncmF5LTUwMDogIzU1NjI3NDtcbiRjb2xvci1ncmF5LTQwMDogIzZjNzA3NztcbiRjb2xvci1ncmF5LTMwMDogI2E3YThhZDtcbiRjb2xvci1ncmF5LTIwMDogIzlmYTRiYjtcbiRjb2xvci1ncmF5LTEwMDogI2YzZjZmODtcblxuJGNvbG9yLXJlZC01MDA6ICNlNjNkM2Q7XG4kY29sb3ItcmVkLTUwOiByZ2JhKDIzMCwgNjEsIDYxLCAwLjA1KTtcbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtYnV0dG9uIHtcbiAgYm9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAmLmJhY2tncm91bmQge1xuICAgICYuYmFja2dyb3VuZC1ibGFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXktOTAwO1xuICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDFyZW0gcmdiYSgxMCwgOCwgNTgsIDAuMSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLXJlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzZDNkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDFyZW0gcmdiYSgxMCwgOCwgNTgsIDAuMSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2M2QzZDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTkwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtYmx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG4gICAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1ob3Zlci1ibGFjayB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmU4ZjU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLm91dGxpbmUge1xuICAgICYub3V0bGluZS1ibGFjayB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLXdoaXRlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtYmx1ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibHVlLTUwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS1ncmF5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2RmZThmNTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay01MCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwICFpbXBvcnRhbnQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stNTAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtbGluayB7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG5cdCYudGV4dCB7XG5cdFx0Ji50ZXh0LWJsdWUge1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibHVlLTUwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtYmxhY2sge1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LXdoaXRlIHtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC1ncmF5IHtcblx0XHRcdGNvbG9yOiAkY29sb3ItZ3JheS01MDA7XG5cdFx0fVxuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHR9XG5cdH1cblxuXHQmLmJhY2tncm91bmQge1xuXHRcdGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcblxuXHRcdCYuYmFja2dyb3VuZC13aGl0ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTIwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1ncmF5IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTUwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1ibGFjayB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtYmx1ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWxpZ2h0LWJsdWUge1xuXHRcdFx0YmFja2dyb3VuZDogI2VmZjRmYTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdHNwYW4ge1xuXHRcdFx0XHRjb2xvcjogIzAwNWRmZiAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNlNmVkZmE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ji5vdXRsaW5lIHtcblx0XHQmLm91dGxpbmUtd2hpdGUge1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWlucHV0LWxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM5ZmE0YmI7XG5cdG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmIyYi1uZ3gtaW5wdXQge1xuXHRib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM1NTYyNzQ7XG5cdCYuYmFja2dyb3VuZCB7XG5cdFx0Ji5iYWNrZ3JvdW5kLWdyYXkge1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ncmF5LTQwMDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblx0XHR9XG5cdFx0Ji5iYWNrZ3JvdW5kLXdoaXRlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0fVxuXHR9XG5cdCYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuXHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG5cdH1cbn1cblxuLmZvcm0tc3VibWl0dGVkIHtcblx0LmIyYi1uZ3gtaW5wdXQge1xuXHRcdCYuYmFja2dyb3VuZCB7XG5cdFx0XHQmLm5nLWludmFsaWQge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uY29udHJvbC1lcnJvciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtaWNvbiB7XG5cdCYuY2lyY2xlIHtcblx0XHRoZWlnaHQ6IDNyZW07XG5cdFx0d2lkdGg6IDNyZW07XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXktMTAwO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LXRleHRhcmVhLWxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM5ZmE0YmI7XG5cdG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5iMmItbmd4LXRleHRhcmVhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAjZjNmNmY4O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzU1NjI3NDtcblx0cGFkZGluZzogMTRweCAxNnB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0cmVzaXplOiBub25lO1xuXHQmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHR9XG4gICYuYmFja2dyb3VuZCB7XG4gICAgJi5iYWNrZ3JvdW5kLWdyYXkge1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTQwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCB7XG5cdC5iMmItbmd4LXRleHRhcmVhIHtcblx0XHQmLm5nLWludmFsaWQge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG5cdFx0fVxuXHR9XG59XG5cbi5jb250cm9sLWVycm9yIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6IHJnYmEoMTA4LCAxMTIsIDExOSwgMC42KTtcblx0bWFyZ2luLXRvcDogNHB4O1xufVxuIiwiQGltcG9ydCBcIi9wcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9icmVha3BvaW50c1wiO1xuXG4vLyBzdGVwcGVyXG5AbWl4aW4gc3R5bGVTdGVwTGluZSgkaW5kZXgpIHtcblx0Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcblx0XHQmICsgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZTpudGgtY2hpbGQoI3skaW5kZXh9KSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cblx0XHQmICsgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZTpudGgtY2hpbGQoI3skaW5kZXggKyAyfSkge1xuXHRcdFx0QGluY2x1ZGUgc3RlcE5leHRMaW5lO1xuXHRcdH1cblx0fVxufVxuXG5AbWl4aW4gc3RlcE5leHRMaW5lKCkge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDVkZmYsIHJnYmEoMCwgOTMsIDI1NSwgMCkpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcblx0aGVpZ2h0OiA0cHg7XG5cdGJvcmRlcjogbm9uZTtcbn1cblxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuXG5cdC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuXHRcdC5tYXQtc3RlcC1oZWFkZXIge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdFx0Z2FwOiA3cHg7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXG5cdFx0XHQubWF0LXN0ZXAtbGFiZWwge1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRcdFx0XHRjb2xvcjogI0M0QzRDNDtcblx0XHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludCgnMScpIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLXNlbGVjdGVkIHtcblx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQubWF0LXN0ZXAtaWNvbiB7XG5cdFx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDEwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XG5cdFx0XHRcdG1hcmdpbjogMDtcblxuXHRcdFx0XHQmLXNlbGVjdGVkLCAmLXN0YXRlLWVkaXQge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDVERkY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdH1cblxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI0Q5RDlEOTtcblxuXHRcdFx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRcdFx0bWFyZ2luOiAwIC03JSAwIC0xMCU7XG5cdFx0XHRcdEBpbmNsdWRlIHN0ZXBOZXh0TGluZTtcblx0XHRcdH1cblxuXHRcdFx0JjpsYXN0LW9mLXR5cGUge1xuXHRcdFx0XHRtYXJnaW46IDAgLTIzJSAwIC03JTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0b3ZlcmZsb3c6IGluaXRpYWw7XG5cdH1cblxuXHQuY2RrLXByb2dyYW0tZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuLmxhc3QtZWRpdGVkLXN0ZXAtMSB7XG5cdEBpbmNsdWRlIHN0eWxlU3RlcExpbmUoMik7XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTIge1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDIpO1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDQpO1xufVxuIiwiJGJyZWFrcG9pbnQtMTogMzZlbTtcbiRicmVha3BvaW50LTI6IDQ4ZW07XG4kYnJlYWtwb2ludC0zOiA1NS41ZW07XG4kYnJlYWtwb2ludC00OiA3NWVtO1xuJGJyZWFrcG9pbnQtNTogODcuNWVtO1xuXG4kYnJlYWtwb2ludHM6IChcblx0XCIxXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTEsXG5cdCksXG5cdFwiMlwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0yLFxuXHQpLFxuXHRcIjNcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMyxcblx0KSxcblx0XCI0XCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTQsXG5cdCksXG5cdFwiNVwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC01LFxuXHQpLFxuXHRcIjZcIjogKFxuXHRcdG1pbi13aWR0aDogJGJyZWFrcG9pbnQtNSxcblx0KSxcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XG5cdEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSl9IHtcblx0XHRAY29udGVudDtcblx0fVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 31347:
/*!**************************************************************!*\
  !*** ./projects/ngx-checkbox/src/lib/ngx-checkbox.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxCheckboxModule": () => (/* binding */ B2bNgxCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/ngx-checkbox.component */ 52767);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





class B2bNgxCheckboxModule {
}
B2bNgxCheckboxModule.ɵfac = function B2bNgxCheckboxModule_Factory(t) { return new (t || B2bNgxCheckboxModule)(); };
B2bNgxCheckboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxCheckboxModule });
B2bNgxCheckboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxCheckboxModule, { declarations: [_layout_ngx_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxCheckboxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconModule], exports: [_layout_ngx_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxCheckboxComponent] }); })();


/***/ }),

/***/ 22529:
/*!*******************************************************************!*\
  !*** ./projects/ngx-icon/src/lib/directive/ngx-icon.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxIconDirective": () => (/* binding */ B2bNgxIconDirective)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ 74521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class B2bNgxIconDirective {
    constructor(_elementRef, _renderer2) {
        this._elementRef = _elementRef;
        this._renderer2 = _renderer2;
        this.theme = _enums__WEBPACK_IMPORTED_MODULE_0__.B2bNgxIconThemeEnum.CIRCLE;
        this.name = '';
        this.group = '';
        this._renderer2.addClass(this._elementRef.nativeElement, `b2b-ngx-icon`);
    }
    ngOnChanges(changes) {
        var _a;
        if (changes.name) {
            const groupName = (_a = this.group) !== null && _a !== void 0 ? _a : "";
            this._elementRef.nativeElement.src = `assets/icons/${groupName}${changes.name.currentValue}.svg`;
        }
        else if (changes.theme) {
            this._renderer2.addClass(this._elementRef.nativeElement, changes.theme.currentValue);
        }
        else {
            return;
        }
    }
}
B2bNgxIconDirective.ɵfac = function B2bNgxIconDirective_Factory(t) { return new (t || B2bNgxIconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
B2bNgxIconDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: B2bNgxIconDirective, selectors: [["", "b2bNgxIcon", ""]], inputs: { theme: "theme", name: "name", group: "group" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 74521:
/*!****************************************************************!*\
  !*** ./projects/ngx-icon/src/lib/enums/ngx-icon-theme.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxIconThemeEnum": () => (/* binding */ B2bNgxIconThemeEnum)
/* harmony export */ });
var B2bNgxIconThemeEnum;
(function (B2bNgxIconThemeEnum) {
    B2bNgxIconThemeEnum["CIRCLE"] = "circle";
})(B2bNgxIconThemeEnum || (B2bNgxIconThemeEnum = {}));


/***/ }),

/***/ 59724:
/*!****************************************************************!*\
  !*** ./projects/ngx-icon/src/lib/layout/ngx-icon.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxIconComponent": () => (/* binding */ B2bNgxIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ 70592);


class B2bNgxIconComponent {
    constructor() {
        this.name = '';
        this.theme = '';
        this.className = '';
        this.svgStyle = {};
    }
    get svgClassName() {
        const defaultStyles = "";
        const circleStyles = "flex justify-center items-center rounded-full p-3 bg-gray-100";
        const themeStyles = this.theme === "circle" ? circleStyles : "";
        return `${defaultStyles} ${themeStyles}`;
    }
    get src() {
        return `assets/icons/${this.name}.svg`;
    }
}
B2bNgxIconComponent.ɵfac = function B2bNgxIconComponent_Factory(t) { return new (t || B2bNgxIconComponent)(); };
B2bNgxIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxIconComponent, selectors: [["b2b-ngx-icon"]], inputs: { name: "name", theme: "theme", className: "className", svgStyle: "svgStyle" }, decls: 1, vars: 2, consts: [[3, "src", "svgStyle"]], template: function B2bNgxIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src)("svgStyle", ctx.svgStyle);
    } }, dependencies: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIconComponent], styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJuZ3gtaWNvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL25neC1zZWxlY3Qvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9ycy5zY3NzIiwiLi4vLi4vLi4vLi4vbmd4LWJ1dHRvbi9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vbmd4LWxpbmsvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL25neC1pbnB1dC9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi9uZ3gtdGV4dGFyZWEvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL3NoYXJlZC9zcmMvc3R5bGVzL21hdGVyaWFsLW92ZXJyaWRlLnNjc3MiLCIuLi8uLi8uLi8uLi9zaGFyZWQvc3JjL3N0eWxlcy9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwr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LGdDQUFBO0FEc0taLENDMUpZO0VBQ0Usb0RBQUE7RUFDQSxnQ0FBQTtBRDRKZCxDQ25KVTtFQUNFLG9EQUFBO0VBQ0EsZ0NBQUE7QURxSlosQ0MzSUU7OztFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBRGdKSixDQzdJRTs7O0VBQ0UsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QURpSkosQ0M3SUk7OztFQUNFLG1CQUFBO0FEaUpOLENDOUlJOzs7RUFDRSxtQkFBQTtBRGtKTixDQzdJUTs7O0VBQ0UseUJBQUE7QURpSlYsQ0MzSU07OztFQUNFLHlDQ3BFTztFRHFFUCxxQkN0RVE7QUZxTmhCLENDeklJOzs7RUFDRSxtQkFBQTtBRDZJTixDQzFJSTs7O0VBQ0UsbUJBQUE7QUQ4SU4sQ0N6SVE7OztFQUNFLHlCQUFBO0FENklWLENDcklNOzs7RUFDRSwwQkFBQTtBRHlJUixDQ3JJSTs7O0VBQ0UsdUJBQUE7QUR5SU4sQ0N0SVE7OztFQUNFLDBCQUFBO0FEMElWLENDcklJOzs7RUFDRSx1QkFBQTtBRHlJTixDQ3BJUTs7O0VBQ0UsNkJBQUE7QUR3SVYsQ0M5SE07RUFDRSxrQkFBQTtFQUNBLFNBQUE7QURpSVIsQ0dyUkE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0FId1JGLENHdFJJO0VBQ0UseUJETlk7RUNPWixjREhZO0FGMlJsQixDR3ZSTTtFQUNFLHlCRFJVO0FGaVNsQixDR3RSSTtFQUNFLHlCRFRZO0VDVVosY0RGVztFQ0dYLCtDQUFBO0FId1JOLENHdlJNO0VBQ0UseUJEWFU7QUZvU2xCLENHdFJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUh3Uk4sQ0d2Uk07RUFDRSx5QkFBQTtBSHlSUixDR3RSSTtFQUNFLDZCQUFBO0VBQ0EsY0RsQlc7QUYwU2pCLENHdlJNO0VBQ0UseUJEMUJVO0FGbVRsQixDR3RSSTtFQUNFLHlCRDVCVztFQzZCWCxjRGpDWTtBRnlUbEIsQ0d2Uk07RUFDRSx5QkQ5QlM7QUZ1VGpCLENHdFJJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBSHdSTixDR3ZSTTtFQUNFLHlCRDlDVTtFQytDVixxQkQvQ1U7RUNnRFYsWUFBQTtBSHlSUixDR3BSSTtFQUNFLHFCRHREWTtBRjRVbEIsQ0dyUk07RUFDRSx5QkRsRFU7QUZ5VWxCLENHcFJJO0VBQ0UscUJEeERZO0FGOFVsQixDR3JSTTtFQUNFLHlCRHhEVTtBRitVbEIsQ0dwUkk7RUFDRSxxQkQxRFc7QUZnVmpCLENHclJNO0VBQ0UseUJEM0RTO0FGa1ZqQixDR3BSSTtFQUNFLHFCQUFBO0FIc1JOLENHclJNO0VBQ0UseUJEcEVVO0FGMlZsQixDR2xSRTtFQUNFLHFEQUFBO0VBQ0EseUJBQUE7QUhvUkosQ0duUkk7RUFDRSxxREFBQTtBSHFSTixDSXZXQTtFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7QUowV0QsQ0l2V0U7RUFDQyxjRkNjO0FGd1dqQixDSXRXRTtFQUNDLGNGWGU7QUZtWGxCLENJcldFO0VBQ0MsY0ZYZTtBRmtYbEIsQ0lwV0U7RUFDQyxjRkxjO0FGMldqQixDSW5XRTtFQUNDLDBCQUFBO0FKcVdILENJaldDO0VBQ0MsaUNBQUE7QUptV0YsQ0lqV0U7RUFDQyx5QkYzQmU7RUU0QmYsY0ZoQ2U7QUZtWWxCLENJbFdHO0VBQ0MseUJGN0JjO0FGaVlsQixDSWhXRTtFQUNDLDZCQUFBO0VBQ0EsY0Z4Q2U7QUYwWWxCLENJaldHO0VBQ0MseUJGcENjO0FGdVlsQixDSS9WRTtFQUNDLHlCRnZDYztFRXdDZCxjRjVDZTtBRjZZbEIsQ0k5VkU7RUFDQyx5QkZwRGU7RUVxRGYsY0ZqRGU7QUZpWmxCLENJL1ZHO0VBQ0MseUJGdERjO0FGdVpsQixDSTdWRTtFQUNDLHlCRnBEYztFRXFEZCxjRnpEZTtBRndabEIsQ0k5Vkc7RUFDQyx5QkZ0RGE7QUZzWmpCLENJNVZFO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBSjhWSCxDSTdWRztFQUNDLHlCQUFBO0FKK1ZKLENJN1ZHO0VBQ0MsbUJBQUE7QUorVkosQ0l6VkU7RUFDQyxxQkY3RWU7QUZ3YWxCLENJMVZHO0VBQ0MseUJGbEZjO0FGOGFsQixDSzlhQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FMaWJELENLOWFBO0VBQ0MsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FMaWJELENLL2FFO0VBQ0MsY0hGYztFR0dkLHlCQUFBO0FMaWJILENLL2FFO0VBQ0MseUJIakJlO0FGa2NsQixDSzlhQztFQUNDLHlDSEphO0VHS2IscUJITmM7QUZzYmhCLENLemFHO0VBQ0MseUNIYlc7RUdjWCxxQkhmWTtBRjJiaEIsQ0t0YUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBTHlhRCxDTXBkQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJKYWU7RUlaZixtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FOdWRGLENPL2RBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QVBrZUQsQ09oZUE7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQyxpREFBQTtFQUNELGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QVBtZUQsQ09sZUM7RUFDQyx5Q0xFYTtFS0RiLHFCQUFBO0FQb2VGLENPamVJO0VBQ0UsY0xUVztFS1VYLHlCTFBXO0FGMGVqQixDT2plSTtFQUNFLHlCTHhCWTtBRjJmbEIsQ081ZEU7RUFDQyx5Q0xmWTtFS2dCWixxQkxqQmE7QUZnZmhCLENPMWRBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QVA2ZEQsQ1FsZkM7RUFDQyxvQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBUnFmRixDUW5mRTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBUnFmSCxDUW5mRztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBUnFmSixDU3BnQkM7RURXRTtJQU1FLGVBQUE7RVJ1Zkg7QUFDRixDUXJmSTtFQUNDLGNBQUE7QVJ1ZkwsQ1FuZkc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBUnFmSixDUW5mSTtFQUNDLHlCQUFBO0FScWZMLENRbGZJO0VBQ0MsYUFBQTtBUm9mTCxDUWhmRztFQUNDLHVCQUFBO0FSa2ZKLENRL2VHO0VBQ0MscUJBQUE7QVJpZkosQ1E3ZUU7RUFDQyx5QkFBQTtBUitlSCxDUTdlRztFQUNDLG9CQUFBO0VBaEVILHNFQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FSZ2pCRCxDUWhmRztFQUNDLG9CQUFBO0FSa2ZKLENRN2VDO0VBQ0MsVUFBQTtFQUNBLGlCQUFBO0FSK2VGLENRNWVDO0VBQ0MsdUJBQUE7QVI4ZUYsQ1Exa0JFO0VBQ0MseUJBQUE7RUFDQSx5QkFBQTtBUjZrQkgsQ1Exa0JFO0VBT0Qsc0VBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QVJza0JELENRdGxCRTtFQUNDLHlCQUFBO0VBQ0EseUJBQUE7QVJ5bEJILENRdGxCRTtFQU9ELHNFQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FSa2xCRCxDUWxtQkU7RUFDQyx5QkFBQTtFQUNBLHlCQUFBO0FSb21CSCxDUWptQkU7RUFPRCxzRUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBUjZsQkQiLCJmaWxlIjoibmd4LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnN0cmlwZWQgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1yaWdodCxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5kcmFnZ2luZyAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDlkOGQ5OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQxZjk7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2Y2M4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDsgfVxuICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTsgfSB9XG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtcmlnaHQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtbGVmdD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi1ib3R0b206NXB4O2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dD5pbnB1dHtjb2xvcjojMDAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3RvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O3BhZGRpbmctbGVmdDozcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntwYWRkaW5nLXJpZ2h0OjNweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcjpob3ZlciAubmctY2xlYXJ7Y29sb3I6I0QwMDIxQn0ubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggNXB4IDAgMH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCAwIDAgNXB4fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7d2lkdGg6MjVweDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcjpob3ZlciAubmctYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjojNjY2fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93e2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAyLjVweH0ubmctZHJvcGRvd24tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KTtsZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3B7Ym90dG9tOjEwMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3AgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHR7bGVmdDoxMDAlO3RvcDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXJpZ2h0IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbXt0b3A6MTAwJTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZTZlNmU2O21hcmdpbi10b3A6LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnR7bGVmdDotMTAwJTt0b3A6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsImh0bWwsXG5ib2R5IHtcblx0c2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuKiB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0Jjp2aXNpdGVkIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxufVxuXG5idXR0b24ge1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5pIHtcblx0Zm9udC1zdHlsZTogSXRhbGljO1xufVxuXG5iIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iLCJAaW1wb3J0IFwifkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzc1wiO1xuQGltcG9ydCBcIn5Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzXCI7XG5AaW1wb3J0IFwifkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3NcIjtcbkBpbXBvcnQgXCJAbmctc2VsZWN0L25nLXNlbGVjdC90aGVtZXMvZGVmYXVsdC50aGVtZS5jc3NcIjtcbmh0bWwsXG5ib2R5IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5idXR0b24ge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pIHtcbiAgZm9udC1zdHlsZTogSXRhbGljO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKSA+IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpuZy1kZWVwIGZvcm0gYjJiLW5neC1zZWxlY3QubmctaW52YWxpZCBuZy1zZWxlY3QubmctdG91Y2hlZCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA2MSwgNjEsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2U2M2QzZCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGZvcm0uZm9ybS1zdWJtaXR0ZWQgYjJiLW5neC1zZWxlY3QubmctaW52YWxpZCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA2MSwgNjEsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2U2M2QzZCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGZvcm0gYjJiLW5neC1jb3VudHJ5LXNlbGVjdC5uZy1pbnZhbGlkIG5nLXNlbGVjdC5uZy10b3VjaGVkIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZTYzZDNkICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgZm9ybS5mb3JtLXN1Ym1pdHRlZCBiMmItbmd4LWNvdW50cnktc2VsZWN0Lm5nLWludmFsaWQgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNjEsIDYxLCAwLjA1KSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNlNjNkM2QgIWltcG9ydGFudDtcbn1cblxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIsXG4ubmctc2VsZWN0LW9wZW5lZCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDQ5cHg7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLWRyb3Bkb3duLXBhbmVsLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLWRyb3Bkb3duLXBhbmVsLFxuLm5nLXNlbGVjdC1vcGVuZWQgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMTUsIDE3LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUuYmFja2dyb3VuZC1ncmF5IC5uZy1zZWxlY3QtY29udGFpbmVyLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUuYmFja2dyb3VuZC1ncmF5IC5uZy1zZWxlY3QtY29udGFpbmVyLFxuLm5nLXNlbGVjdC1vcGVuZWQuYmFja2dyb3VuZC1ncmF5IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2YzZjRmNjtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZS5iYWNrZ3JvdW5kLWdyYXkgLm5nLWRyb3Bkb3duLXBhbmVsLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUuYmFja2dyb3VuZC1ncmF5IC5uZy1kcm9wZG93bi1wYW5lbCxcbi5uZy1zZWxlY3Qtb3BlbmVkLmJhY2tncm91bmQtZ3JheSAubmctZHJvcGRvd24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlLmJhY2tncm91bmQtZ3JheSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctb3B0aW9uLW1hcmtlZCxcbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLmJhY2tncm91bmQtZ3JheSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctb3B0aW9uLW1hcmtlZCxcbi5uZy1zZWxlY3Qtb3BlbmVkLmJhY2tncm91bmQtZ3JheSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctb3B0aW9uLW1hcmtlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUuYmFja2dyb3VuZC1ncmF5Lm5nLWludmFsaWQubmctdG91Y2hlZCAubmctc2VsZWN0LWNvbnRhaW5lcixcbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLmJhY2tncm91bmQtZ3JheS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgLm5nLXNlbGVjdC1jb250YWluZXIsXG4ubmctc2VsZWN0LW9wZW5lZC5iYWNrZ3JvdW5kLWdyYXkubmctaW52YWxpZC5uZy10b3VjaGVkIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4gIGJvcmRlci1jb2xvcjogI2U2M2QzZDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZS5iYWNrZ3JvdW5kLXdoaXRlIC5uZy1zZWxlY3QtY29udGFpbmVyLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUuYmFja2dyb3VuZC13aGl0ZSAubmctc2VsZWN0LWNvbnRhaW5lcixcbi5uZy1zZWxlY3Qtb3BlbmVkLmJhY2tncm91bmQtd2hpdGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlLmJhY2tncm91bmQtd2hpdGUgLm5nLWRyb3Bkb3duLXBhbmVsLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUuYmFja2dyb3VuZC13aGl0ZSAubmctZHJvcGRvd24tcGFuZWwsXG4ubmctc2VsZWN0LW9wZW5lZC5iYWNrZ3JvdW5kLXdoaXRlIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUuYmFja2dyb3VuZC13aGl0ZSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctb3B0aW9uLW1hcmtlZCxcbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLmJhY2tncm91bmQtd2hpdGUgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLW9wdGlvbi1tYXJrZWQsXG4ubmctc2VsZWN0LW9wZW5lZC5iYWNrZ3JvdW5kLXdoaXRlIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIC5uZy1vcHRpb24tbWFya2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZS5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IC5uZy12YWx1ZSAubmctdmFsdWUtbGFiZWwsXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IC5uZy12YWx1ZSAubmctdmFsdWUtbGFiZWwsXG4ubmctc2VsZWN0LW9wZW5lZC5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IC5uZy12YWx1ZSAubmctdmFsdWUtbGFiZWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZS5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IC5uZy1zZWxlY3QtY29udGFpbmVyLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUuYmFja2dyb3VuZC10cmFuc3BhcmVudCAubmctc2VsZWN0LWNvbnRhaW5lcixcbi5uZy1zZWxlY3Qtb3BlbmVkLmJhY2tncm91bmQtdHJhbnNwYXJlbnQgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZS5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVyLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUuYmFja2dyb3VuZC10cmFuc3BhcmVudCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcixcbi5uZy1zZWxlY3Qtb3BlbmVkLmJhY2tncm91bmQtdHJhbnNwYXJlbnQgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZS5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IC5uZy1kcm9wZG93bi1wYW5lbCxcbi5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLmJhY2tncm91bmQtdHJhbnNwYXJlbnQgLm5nLWRyb3Bkb3duLXBhbmVsLFxuLm5nLXNlbGVjdC1vcGVuZWQuYmFja2dyb3VuZC10cmFuc3BhcmVudCAubmctZHJvcGRvd24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZS5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIC5uZy1vcHRpb24tbWFya2VkLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUuYmFja2dyb3VuZC10cmFuc3BhcmVudCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctb3B0aW9uLW1hcmtlZCxcbi5uZy1zZWxlY3Qtb3BlbmVkLmJhY2tncm91bmQtdHJhbnNwYXJlbnQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLW9wdGlvbi1tYXJrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRvcDogMTVweDtcbn1cblxuLmIyYi1uZ3gtYnV0dG9uIHtcbiAgYm9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmIyYi1uZ3gtYnV0dG9uLmJhY2tncm91bmQuYmFja2dyb3VuZC1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmIyYi1uZ3gtYnV0dG9uLmJhY2tncm91bmQuYmFja2dyb3VuZC1ibGFjazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMzQ7XG59XG4uYjJiLW5neC1idXR0b24uYmFja2dyb3VuZC5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICMwZjBmMTE7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xufVxuLmIyYi1uZ3gtYnV0dG9uLmJhY2tncm91bmQuYmFja2dyb3VuZC13aGl0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2Zjg7XG59XG4uYjJiLW5neC1idXR0b24uYmFja2dyb3VuZC5iYWNrZ3JvdW5kLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDFyZW0gcmdiYSgxMCwgOCwgNTgsIDAuMSk7XG59XG4uYjJiLW5neC1idXR0b24uYmFja2dyb3VuZC5iYWNrZ3JvdW5kLXJlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG59XG4uYjJiLW5neC1idXR0b24uYmFja2dyb3VuZC5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMGYwZjExO1xufVxuLmIyYi1uZ3gtYnV0dG9uLmJhY2tncm91bmQuYmFja2dyb3VuZC10cmFuc3BhcmVudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2Zjg7XG59XG4uYjJiLW5neC1idXR0b24uYmFja2dyb3VuZC5iYWNrZ3JvdW5kLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iMmItbmd4LWJ1dHRvbi5iYWNrZ3JvdW5kLmJhY2tncm91bmQtYmx1ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTk1ZmU7XG59XG4uYjJiLW5neC1idXR0b24uYmFja2dyb3VuZC5iYWNrZ3JvdW5kLWhvdmVyLWJsYWNrIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmIyYi1uZ3gtYnV0dG9uLmJhY2tncm91bmQuYmFja2dyb3VuZC1ob3Zlci1ibGFjazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTE7XG4gIGJvcmRlci1jb2xvcjogIzBmMGYxMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmIyYi1uZ3gtYnV0dG9uLm91dGxpbmUub3V0bGluZS1ibGFjayB7XG4gIGJvcmRlci1jb2xvcjogIzBmMGYxMTtcbn1cbi5iMmItbmd4LWJ1dHRvbi5vdXRsaW5lLm91dGxpbmUtYmxhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmY4O1xufVxuLmIyYi1uZ3gtYnV0dG9uLm91dGxpbmUub3V0bGluZS13aGl0ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cbi5iMmItbmd4LWJ1dHRvbi5vdXRsaW5lLm91dGxpbmUtd2hpdGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmY4O1xufVxuLmIyYi1uZ3gtYnV0dG9uLm91dGxpbmUub3V0bGluZS1ibHVlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA1ZGZmO1xufVxuLmIyYi1uZ3gtYnV0dG9uLm91dGxpbmUub3V0bGluZS1ibHVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5OTVmZTtcbn1cbi5iMmItbmd4LWJ1dHRvbi5vdXRsaW5lLm91dGxpbmUtZ3JheSB7XG4gIGJvcmRlci1jb2xvcjogI2RmZThmNTtcbn1cbi5iMmItbmd4LWJ1dHRvbi5vdXRsaW5lLm91dGxpbmUtZ3JheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y2Zjg7XG59XG4uYjJiLW5neC1idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTc3LCAxNzcsIDAuNikgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi5iMmItbmd4LWJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNzcsIDE3NywgMC42KSAhaW1wb3J0YW50O1xufVxuXG4uYjJiLW5neC1saW5rIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uYjJiLW5neC1saW5rLnRleHQudGV4dC1ibHVlIHtcbiAgY29sb3I6ICMwMDVkZmY7XG59XG4uYjJiLW5neC1saW5rLnRleHQudGV4dC1ibGFjayB7XG4gIGNvbG9yOiAjMGYwZjExO1xufVxuLmIyYi1uZ3gtbGluay50ZXh0LnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iMmItbmd4LWxpbmsudGV4dC50ZXh0LWdyYXkge1xuICBjb2xvcjogIzU1NjI3NDtcbn1cbi5iMmItbmd4LWxpbmsudGV4dDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmIyYi1uZ3gtbGluay5iYWNrZ3JvdW5kIHtcbiAgYm9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmIyYi1uZ3gtbGluay5iYWNrZ3JvdW5kLmJhY2tncm91bmQtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzBmMGYxMTtcbn1cbi5iMmItbmd4LWxpbmsuYmFja2dyb3VuZC5iYWNrZ3JvdW5kLXdoaXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZWFmMTtcbn1cbi5iMmItbmd4LWxpbmsuYmFja2dyb3VuZC5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMGYwZjExO1xufVxuLmIyYi1uZ3gtbGluay5iYWNrZ3JvdW5kLmJhY2tncm91bmQtdHJhbnNwYXJlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmY4O1xufVxuLmIyYi1uZ3gtbGluay5iYWNrZ3JvdW5kLmJhY2tncm91bmQtZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmIyYi1uZ3gtbGluay5iYWNrZ3JvdW5kLmJhY2tncm91bmQtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjExO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iMmItbmd4LWxpbmsuYmFja2dyb3VuZC5iYWNrZ3JvdW5kLWJsYWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUzNDtcbn1cbi5iMmItbmd4LWxpbmsuYmFja2dyb3VuZC5iYWNrZ3JvdW5kLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iMmItbmd4LWxpbmsuYmFja2dyb3VuZC5iYWNrZ3JvdW5kLWJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk5NWZlO1xufVxuLmIyYi1uZ3gtbGluay5iYWNrZ3JvdW5kLmJhY2tncm91bmQtbGlnaHQtYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmY0ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5iMmItbmd4LWxpbmsuYmFja2dyb3VuZC5iYWNrZ3JvdW5kLWxpZ2h0LWJsdWUgc3BhbiB7XG4gIGNvbG9yOiAjMDA1ZGZmICFpbXBvcnRhbnQ7XG59XG4uYjJiLW5neC1saW5rLmJhY2tncm91bmQuYmFja2dyb3VuZC1saWdodC1ibHVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U2ZWRmYTtcbn1cbi5iMmItbmd4LWxpbmsub3V0bGluZS5vdXRsaW5lLXdoaXRlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xufVxuLmIyYi1uZ3gtbGluay5vdXRsaW5lLm91dGxpbmUtd2hpdGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTM0O1xufVxuXG4uYjJiLW5neC1pbnB1dC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOWZhNGJiO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5iMmItbmd4LWlucHV0IHtcbiAgYm9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTU2Mjc0O1xufVxuLmIyYi1uZ3gtaW5wdXQuYmFja2dyb3VuZC5iYWNrZ3JvdW5kLWdyYXkge1xuICBjb2xvcjogIzZjNzA3NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjZmODtcbn1cbi5iMmItbmd4LWlucHV0LmJhY2tncm91bmQuYmFja2dyb3VuZC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYjJiLW5neC1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNjEsIDYxLCAwLjA1KTtcbiAgYm9yZGVyLWNvbG9yOiAjZTYzZDNkO1xufVxuXG4uZm9ybS1zdWJtaXR0ZWQgLmIyYi1uZ3gtaW5wdXQuYmFja2dyb3VuZC5uZy1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4gIGJvcmRlci1jb2xvcjogI2U2M2QzZDtcbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5iMmItbmd4LWljb24uY2lyY2xlIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjZmODtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iMmItbmd4LXRleHRhcmVhLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5ZmE0YmI7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmIyYi1uZ3gtdGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmM2Y2Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTU2Mjc0O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICByZXNpemU6IG5vbmU7XG59XG4uYjJiLW5neC10ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNjEsIDYxLCAwLjA1KTtcbiAgYm9yZGVyLWNvbG9yOiAjZTYzZDNkO1xufVxuLmIyYi1uZ3gtdGV4dGFyZWEuYmFja2dyb3VuZC5iYWNrZ3JvdW5kLWdyYXkge1xuICBjb2xvcjogIzZjNzA3NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjZmODtcbn1cbi5iMmItbmd4LXRleHRhcmVhLmJhY2tncm91bmQuYmFja2dyb3VuZC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCAuYjJiLW5neC10ZXh0YXJlYS5uZy1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4gIGJvcmRlci1jb2xvcjogI2U2M2QzZDtcbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIgLm1hdC1zdGVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiA3cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNDNEM0QzQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzZlbSkge1xuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XG4gIG1hcmdpbjogMDtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xufVxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciAubWF0LXN0ZXAtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIC5tYXQtc3RlcC1oZWFkZXI6bGFzdC1jaGlsZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEOUQ5RDk7XG59XG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMCAtNyUgMCAtMTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDVkZmYsIHJnYmEoMCwgOTMsIDI1NSwgMCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW46IDAgLTIzJSAwIC03JTtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBpbml0aWFsO1xufVxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwgLmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmxhc3QtZWRpdGVkLXN0ZXAtMSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIgKyAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVERkY7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubGFzdC1lZGl0ZWQtc3RlcC0xIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1ZGZmLCByZ2JhKDAsIDkzLCAyNTUsIDApKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTIgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyICsgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmxhc3QtZWRpdGVkLXN0ZXAtMiAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIgKyAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwNWRmZiwgcmdiYSgwLCA5MywgMjU1LCAwKSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmxhc3QtZWRpdGVkLXN0ZXAtMiAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIgKyAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVERkY7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubGFzdC1lZGl0ZWQtc3RlcC0yIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKDYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1ZGZmLCByZ2JhKDAsIDkzLCAyNTUsIDApKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXI6IG5vbmU7XG59IiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB7XG4gIGZvcm0ge1xuICAgIGIyYi1uZ3gtc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1zZWxlY3Qge1xuICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBiMmItbmd4LWNvdW50cnktc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1jb3VudHJ5LXNlbGVjdCB7XG4gICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUsXG4ubmctc2VsZWN0LW9wZW5lZCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gIH1cblxuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMTUsIDE3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuICAgIC5uZy12YWx1ZSB7XG4gICAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUge1xuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1ibGFjay05MDA6ICMwMDAwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMGYwZjExO1xuJGNvbG9yLWJsYWNrLTEwMDogIzJlMmUzNDtcbiRjb2xvci1ibGFjay01MDogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjYpO1xuXG4kY29sb3Itd2hpdGUtOTAwOiAjZmZmZmZmO1xuJGNvbG9yLXdoaXRlLTIwMDogI2UzZWFmMTtcbiRjb2xvci13aGl0ZS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1ibHVlLTUwMDogIzAwNWRmZjtcbiRjb2xvci1ibHVlLTEwMDogIzU5OTVmZTtcbiRjb2xvci1ibHVlLTUwOiAjZDJkZWZmO1xuXG4kY29sb3ItZ3JheS05MDA6ICMwZjBmMTE7XG4kY29sb3ItZ3JheS02MDA6ICMyMjIyMjQ7XG4kY29sb3ItZ3JheS01MDA6ICM1NTYyNzQ7XG4kY29sb3ItZ3JheS00MDA6ICM2YzcwNzc7XG4kY29sb3ItZ3JheS0zMDA6ICNhN2E4YWQ7XG4kY29sb3ItZ3JheS0yMDA6ICM5ZmE0YmI7XG4kY29sb3ItZ3JheS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1yZWQtNTAwOiAjZTYzZDNkO1xuJGNvbG9yLXJlZC01MDogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWJ1dHRvbiB7XG4gIGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgJi5iYWNrZ3JvdW5kIHtcbiAgICAmLmJhY2tncm91bmQtYmxhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTkwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1yZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2M2QzZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLWJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtaG92ZXItYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5vdXRsaW5lIHtcbiAgICAmLm91dGxpbmUtYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS13aGl0ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLWJsdWUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtZ3JheSB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmU4ZjU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stNTAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMCAhaW1wb3J0YW50O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTUwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWxpbmsge1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuXHQmLnRleHQge1xuXHRcdCYudGV4dC1ibHVlIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LWJsYWNrIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC13aGl0ZSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtZ3JheSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNTAwO1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0fVxuXHR9XG5cblx0Ji5iYWNrZ3JvdW5kIHtcblx0XHRib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cblx0XHQmLmJhY2tncm91bmQtd2hpdGUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0yMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtZ3JheSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtYmxhY2sge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWJsdWUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1saWdodC1ibHVlIHtcblx0XHRcdGJhY2tncm91bmQ6ICNlZmY0ZmE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y29sb3I6ICMwMDVkZmYgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTZlZGZhO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCYub3V0bGluZSB7XG5cdFx0Ji5vdXRsaW5lLXdoaXRlIHtcblx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1pbnB1dC1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5iMmItbmd4LWlucHV0IHtcblx0Ym9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjNTU2Mjc0O1xuXHQmLmJhY2tncm91bmQge1xuXHRcdCYuYmFja2dyb3VuZC1ncmF5IHtcblx0XHRcdGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0fVxuXHRcdCYuYmFja2dyb3VuZC13aGl0ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblx0fVxuXHQmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHR9XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCB7XG5cdC5iMmItbmd4LWlucHV0IHtcblx0XHQmLmJhY2tncm91bmQge1xuXHRcdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWljb24ge1xuXHQmLmNpcmNsZSB7XG5cdFx0aGVpZ2h0OiAzcmVtO1xuXHRcdHdpZHRoOiAzcmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC10ZXh0YXJlYS1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uYjJiLW5neC10ZXh0YXJlYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogI2YzZjZmODtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM1NTYyNzQ7XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdHJlc2l6ZTogbm9uZTtcblx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0fVxuICAmLmJhY2tncm91bmQge1xuICAgICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1zdWJtaXR0ZWQge1xuXHQuYjJiLW5neC10ZXh0YXJlYSB7XG5cdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdH1cblx0fVxufVxuXG4uY29udHJvbC1lcnJvciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbiIsIkBpbXBvcnQgXCIvcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHNcIjtcblxuLy8gc3RlcHBlclxuQG1peGluIHN0eWxlU3RlcExpbmUoJGluZGV4KSB7XG5cdC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4fSkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNURGRjtcblx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4ICsgMn0pIHtcblx0XHRcdEBpbmNsdWRlIHN0ZXBOZXh0TGluZTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIHN0ZXBOZXh0TGluZSgpIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1ZGZmLCByZ2JhKDAsIDkzLCAyNTUsIDApKTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdGhlaWdodDogNHB4O1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcblxuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cblx0XHQubWF0LXN0ZXAtaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdGdhcDogN3B4O1xuXHRcdFx0cGFkZGluZzogMDtcblxuXHRcdFx0Lm1hdC1zdGVwLWxhYmVsIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRcdFx0Y29sb3I6ICNDNEM0QzQ7XG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoJzEnKSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCB7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm1hdC1zdGVwLWljb24ge1xuXHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCwgJi1zdGF0ZS1lZGl0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hdC1zdGVwLWljb24tY29udGVudCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNEOUQ5RDk7XG5cblx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAtNyUgMCAtMTAlO1xuXHRcdFx0XHRAaW5jbHVkZSBzdGVwTmV4dExpbmU7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdFx0bWFyZ2luOiAwIC0yMyUgMCAtNyU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG92ZXJmbG93OiBpbml0aWFsO1xuXHR9XG5cblx0LmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTEge1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDIpO1xufVxuXG4ubGFzdC1lZGl0ZWQtc3RlcC0yIHtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSgyKTtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSg0KTtcbn1cbiIsIiRicmVha3BvaW50LTE6IDM2ZW07XG4kYnJlYWtwb2ludC0yOiA0OGVtO1xuJGJyZWFrcG9pbnQtMzogNTUuNWVtO1xuJGJyZWFrcG9pbnQtNDogNzVlbTtcbiRicmVha3BvaW50LTU6IDg3LjVlbTtcblxuJGJyZWFrcG9pbnRzOiAoXG5cdFwiMVwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0xLFxuXHQpLFxuXHRcIjJcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMixcblx0KSxcblx0XCIzXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTMsXG5cdCksXG5cdFwiNFwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC00LFxuXHQpLFxuXHRcIjVcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtNSxcblx0KSxcblx0XCI2XCI6IChcblx0XHRtaW4td2lkdGg6ICRicmVha3BvaW50LTUsXG5cdCksXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuXHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 51163:
/*!******************************************************!*\
  !*** ./projects/ngx-icon/src/lib/ngx-icon.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxIconModule": () => (/* binding */ B2bNgxIconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/ngx-icon.directive */ 22529);
/* harmony import */ var _layout_ngx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/ngx-icon.component */ 59724);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ 70592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);






class B2bNgxIconModule {
}
B2bNgxIconModule.ɵfac = function B2bNgxIconModule_Factory(t) { return new (t || B2bNgxIconModule)(); };
B2bNgxIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxIconModule });
B2bNgxIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__.AngularSvgIconModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxIconModule, { declarations: [_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconDirective, _layout_ngx_icon_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__.AngularSvgIconModule], exports: [_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconDirective, _layout_ngx_icon_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconComponent] }); })();


/***/ }),

/***/ 70239:
/*!*********************************************************************!*\
  !*** ./projects/ngx-image/src/lib/directive/ngx-image.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxImageDirective": () => (/* binding */ B2bNgxImageDirective)
/* harmony export */ });
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class B2bNgxImageDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.name = "plug";
        this.imageExtension = "png";
        // this.name = "plug";
        this._elementRef.nativeElement.src = `assets/images/${this.name}.${this.imageExtension}`;
    }
    ngOnChanges(changes) {
        if (!changes['name']) {
            return;
        }
        const { currentValue } = changes['name'];
        if (!currentValue || currentValue === "null" || currentValue === "") {
            return;
        }
        this._elementRef.nativeElement.src = currentValue.includes("public")
            ? `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/${currentValue}`
            : `assets/images/${currentValue}.${this.imageExtension}`;
    }
}
B2bNgxImageDirective.ɵfac = function B2bNgxImageDirective_Factory(t) { return new (t || B2bNgxImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
B2bNgxImageDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: B2bNgxImageDirective, selectors: [["", "b2bNgxImage", ""]], inputs: { name: "name", imageExtension: "imageExtension" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 87343:
/*!********************************************************!*\
  !*** ./projects/ngx-image/src/lib/ngx-image.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxImageModule": () => (/* binding */ B2bNgxImageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directive/ngx-image.directive */ 70239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class B2bNgxImageModule {
}
B2bNgxImageModule.ɵfac = function B2bNgxImageModule_Factory(t) { return new (t || B2bNgxImageModule)(); };
B2bNgxImageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxImageModule });
B2bNgxImageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxImageModule, { declarations: [_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_2__.B2bNgxImageDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_2__.B2bNgxImageDirective] }); })();


/***/ }),

/***/ 70159:
/*!*********************************************************************!*\
  !*** ./projects/ngx-input/src/lib/directive/ngx-input.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxInputDirective": () => (/* binding */ B2bNgxInputDirective)
/* harmony export */ });
/* harmony import */ var _enum_ngx_input_theme_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/ngx-input-theme.enum */ 70771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function isValueInEnum(value, enumArray) {
    return Object.values(enumArray).includes(value);
}
class B2bNgxInputDirective {
    constructor(_renderer2, _elementRef) {
        this._renderer2 = _renderer2;
        this._elementRef = _elementRef;
        this.theme = _enum_ngx_input_theme_enum__WEBPACK_IMPORTED_MODULE_0__.B2bNgxInputThemeEnum.BACKGROUND_WHITE;
        this.label = '';
        this.labelClass = '';
        this._renderer2.addClass(this._elementRef.nativeElement, `b2b-ngx-input`);
    }
    ngOnChanges(changes) {
        var _a;
        if (!((_a = changes.theme) === null || _a === void 0 ? void 0 : _a.currentValue)) {
            this._renderer2.removeClass(this._elementRef.nativeElement, changes.theme.previousValue);
        }
        if (changes.theme && isValueInEnum(changes.theme.currentValue, _enum_ngx_input_theme_enum__WEBPACK_IMPORTED_MODULE_0__.B2bNgxInputThemeEnum)) {
            const { currentValue } = changes.theme;
            const category = currentValue.split("-")[0];
            this._renderer2.addClass(this._elementRef.nativeElement, category);
            this._renderer2.addClass(this._elementRef.nativeElement, currentValue);
        }
        if (changes.label) {
            const { nativeElement } = this._elementRef;
            const { parentElement } = nativeElement;
            const labelElement = this._renderer2.createElement("span");
            const labelText = this._renderer2.createText(this.label);
            this._renderer2.appendChild(labelElement, labelText);
            this._renderer2.addClass(labelElement, "b2b-ngx-input-label");
            if (!!this.labelClass) {
                this._renderer2.addClass(labelElement, this.labelClass);
            }
            this._renderer2.insertBefore(parentElement, labelElement, nativeElement);
        }
    }
}
B2bNgxInputDirective.ɵfac = function B2bNgxInputDirective_Factory(t) { return new (t || B2bNgxInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
B2bNgxInputDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: B2bNgxInputDirective, selectors: [["", "b2bNgxInput", ""]], inputs: { theme: "theme", label: "label", labelClass: "labelClass" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 70771:
/*!*****************************************************************!*\
  !*** ./projects/ngx-input/src/lib/enum/ngx-input-theme.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxInputThemeEnum": () => (/* binding */ B2bNgxInputThemeEnum)
/* harmony export */ });
var B2bNgxInputThemeEnum;
(function (B2bNgxInputThemeEnum) {
    B2bNgxInputThemeEnum["BACKGROUND_GRAY"] = "background-gray";
    B2bNgxInputThemeEnum["BACKGROUND_WHITE"] = "background-white";
})(B2bNgxInputThemeEnum || (B2bNgxInputThemeEnum = {}));


/***/ }),

/***/ 21729:
/*!******************************************************************!*\
  !*** ./projects/ngx-input/src/lib/layout/ngx-input.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxInputComponent": () => (/* binding */ B2bNgxInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _b2b_id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/id-generator */ 88763);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _enum_ngx_input_theme_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/ngx-input-theme.enum */ 70771);
/* harmony import */ var _directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directive/ngx-input.directive */ 70159);



// TODO: uncomment code below when libs will be inserted in b2b
// import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";




// @UntilDestroy()
class B2bNgxInputComponent {
    constructor(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
        this.label = '';
        this.errors = '';
        this.type = "input";
        this.placeholder = "";
        this.theme = _enum_ngx_input_theme_enum__WEBPACK_IMPORTED_MODULE_0__.B2bNgxInputThemeEnum.BACKGROUND_GRAY;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.id = (0,_b2b_id_generator__WEBPACK_IMPORTED_MODULE_2__.idGenerator)();
        this.id = 'id';
    }
    ngOnChanges(changes) {
        if (!changes['errors']) {
            return;
        }
        this.formControl.setErrors(changes['errors']);
    }
    ngOnInit() {
        this.subscribeOnValueChanges();
    }
    validate() {
        return this.formControl.errors;
    }
    subscribeOnValueChanges() {
        this.formControl.valueChanges.pipe().subscribe((value) => {
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
}
B2bNgxInputComponent.ɵfac = function B2bNgxInputComponent_Factory(t) { return new (t || B2bNgxInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
B2bNgxInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: B2bNgxInputComponent, selectors: [["b2b-ngx-input"]], inputs: { type: "type", placeholder: "placeholder", theme: "theme", label: "label", errors: "errors" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => B2bNgxInputComponent),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => B2bNgxInputComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 5, consts: [["b2bNgxInput", "", 1, "b2b-ngx-input", 3, "theme", "formControl", "type", "id", "placeholder"]], template: function B2bNgxInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.theme)("formControl", ctx.formControl)("type", ctx.type)("id", ctx.id)("placeholder", ctx.placeholder);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 94418:
/*!********************************************************!*\
  !*** ./projects/ngx-input/src/lib/ngx-input.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxInputModule": () => (/* binding */ B2bNgxInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/ngx-input.component */ 21729);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/ngx-input.directive */ 70159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





class B2bNgxInputModule {
}
B2bNgxInputModule.ɵfac = function B2bNgxInputModule_Factory(t) { return new (t || B2bNgxInputModule)(); };
B2bNgxInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxInputModule });
B2bNgxInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxInputModule, { declarations: [_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxInputComponent, _directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule], exports: [_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxInputComponent, _directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputDirective] }); })();


/***/ }),

/***/ 66612:
/*!*******************************************************************!*\
  !*** ./projects/ngx-link/src/lib/directive/ngx-link.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxLinkDirective": () => (/* binding */ B2bNgxLinkDirective)
/* harmony export */ });
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function isValueInEnum(value, enumArray) {
    return Object.values(enumArray).includes(value);
}
class B2bNgxLinkDirective {
    constructor(_renderer2, _elementRef) {
        this._renderer2 = _renderer2;
        this._elementRef = _elementRef;
        this.theme = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_0__.B2bNgxLinkThemeEnum.BACKGROUND_WHITE;
        this._renderer2.addClass(this._elementRef.nativeElement, `b2b-ngx-link`);
    }
    ngOnChanges(changes) {
        if (!changes.theme || !isValueInEnum(changes.theme.currentValue, _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_0__.B2bNgxLinkThemeEnum)) {
            return;
        }
        const { currentValue } = changes.theme;
        const category = currentValue.split("-")[0];
        this._renderer2.addClass(this._elementRef.nativeElement, category);
        this._renderer2.addClass(this._elementRef.nativeElement, currentValue);
    }
}
B2bNgxLinkDirective.ɵfac = function B2bNgxLinkDirective_Factory(t) { return new (t || B2bNgxLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
B2bNgxLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: B2bNgxLinkDirective, selectors: [["", "b2bNgxLink", ""]], inputs: { theme: "theme" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 49388:
/*!****************************************************************!*\
  !*** ./projects/ngx-link/src/lib/enums/ngx-link-theme.enum.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxLinkThemeEnum": () => (/* binding */ B2bNgxLinkThemeEnum)
/* harmony export */ });
var B2bNgxLinkThemeEnum;
(function (B2bNgxLinkThemeEnum) {
    B2bNgxLinkThemeEnum["TEXT_WHITE"] = "text-white";
    B2bNgxLinkThemeEnum["TEXT_GRAY"] = "text-gray";
    B2bNgxLinkThemeEnum["TEXT_BLACK"] = "text-black";
    B2bNgxLinkThemeEnum["TEXT_BLUE"] = "text-blue";
    B2bNgxLinkThemeEnum["BACKGROUND_WHITE"] = "background-white";
    B2bNgxLinkThemeEnum["BACKGROUND_BLACK"] = "background-black";
    B2bNgxLinkThemeEnum["BACKGROUND_BLUE"] = "background-blue";
    B2bNgxLinkThemeEnum["BACKGROUND_LIGHT_BLUE"] = "background-light-blue";
    B2bNgxLinkThemeEnum["BACKGROUND_GRAY"] = "background-gray";
    B2bNgxLinkThemeEnum["BACKGROUND_TRANSPARENT"] = "background-transparent";
    B2bNgxLinkThemeEnum["OUTLINE_WHITE"] = "outline-white";
})(B2bNgxLinkThemeEnum || (B2bNgxLinkThemeEnum = {}));


/***/ }),

/***/ 83741:
/*!****************************************************************!*\
  !*** ./projects/ngx-link/src/lib/layout/ngx-link.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxLinkComponent": () => (/* binding */ B2bNgxLinkComponent)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ 49388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ 23214);




const _c0 = ["*"];
// TODO: uncomment code below when libs will be inserted in b2b
// import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
// @UntilDestroy()
class B2bNgxLinkComponent {
    constructor(_b2bNgxLinkService, _changeDetectorRef) {
        this._b2bNgxLinkService = _b2bNgxLinkService;
        this._changeDetectorRef = _changeDetectorRef;
        this.link = '';
        this.className = '';
        this.theme = _enums__WEBPACK_IMPORTED_MODULE_0__.B2bNgxLinkThemeEnum.OUTLINE_WHITE;
        this.routerLinkActive = "active";
        this.routerLink = '';
    }
    ngOnChanges(changes) {
        if (changes['link']) {
            this._b2bNgxLinkService.setLanguage(this._b2bNgxLinkService.lang);
        }
    }
    ngOnInit() {
        this._b2bNgxLinkService.lang$.pipe().subscribe((lang) => {
            this.routerLink = `/${lang}${this.link}`;
            this._changeDetectorRef.detectChanges();
        });
    }
}
B2bNgxLinkComponent.ɵfac = function B2bNgxLinkComponent_Factory(t) { return new (t || B2bNgxLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
B2bNgxLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: B2bNgxLinkComponent, selectors: [["b2b-ngx-link"]], inputs: { link: "link", className: "className", theme: "theme", routerLinkActive: "routerLinkActive" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 5, consts: [["b2bNgxLink", "", 3, "routerLink", "routerLinkActive", "theme"]], template: function B2bNgxLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routerLink)("routerLinkActive", ctx.routerLinkActive)("theme", ctx.theme);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtbGluay5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 16385:
/*!******************************************************!*\
  !*** ./projects/ngx-link/src/lib/ngx-link.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxLinkModule": () => (/* binding */ B2bNgxLinkModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/ngx-link.directive */ 66612);
/* harmony import */ var _layout_ngx_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/ngx-link.component */ 83741);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 23214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);







class B2bNgxLinkModule {
}
B2bNgxLinkModule.ɵfac = function B2bNgxLinkModule_Factory(t) { return new (t || B2bNgxLinkModule)(); };
B2bNgxLinkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxLinkModule });
B2bNgxLinkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [_services__WEBPACK_IMPORTED_MODULE_1__.B2bNgxLinkService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxLinkModule, { declarations: [_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxLinkDirective, _layout_ngx_link_component__WEBPACK_IMPORTED_MODULE_5__.B2bNgxLinkComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _layout_ngx_link_component__WEBPACK_IMPORTED_MODULE_5__.B2bNgxLinkComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_layout_ngx_link_component__WEBPACK_IMPORTED_MODULE_5__.B2bNgxLinkComponent, [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxLinkDirective], []);


/***/ }),

/***/ 23214:
/*!****************************************************************!*\
  !*** ./projects/ngx-link/src/lib/services/ngx-link.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxLinkService": () => (/* binding */ B2bNgxLinkService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


class B2bNgxLinkService {
    constructor() {
        this.sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)('');
        this._lang = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("en");
    }
    get lang$() {
        if (!this.sub) {
            this.sub = this._lang.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((lang) => this.getLang(lang)));
        }
        return this.sub;
    }
    get lang() {
        return this.getLang(this._lang.getValue());
    }
    setLanguage(lang) {
        this._lang.next("en" || 0);
    }
    getStaticLink(link) {
        return `/${this.lang}${link}`;
    }
    getLink(link) {
        return this.lang$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((lang) => `/${lang}${link}`));
    }
    getLang(lang) {
        return lang === "en" ? "" : lang;
    }
    getUrl(url) {
        return url.slice(-1) === "/" ? url.substring(0, url.length - 1) : url;
    }
}
B2bNgxLinkService.ɵfac = function B2bNgxLinkService_Factory(t) { return new (t || B2bNgxLinkService)(); };
B2bNgxLinkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: B2bNgxLinkService, factory: B2bNgxLinkService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 34968:
/*!*****************************************************************!*\
  !*** ./projects/ngx-password/src/lib/ngx-password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxPasswordComponent": () => (/* binding */ NgxPasswordComponent)
/* harmony export */ });
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/errors */ 69897);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);










function NgxPasswordComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPasswordComponent_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.changeInputType()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.passwordIsHide ? "password-eye-hidden" : "password-eye-opened");
} }
function NgxPasswordComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.actualMainError == null ? null : ctx_r1.actualMainError.text, "\n");
} }
function NgxPasswordComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function NgxPasswordComponent_div_5_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const err_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](err_r7.text);
} }
function NgxPasswordComponent_div_5_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const err_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](err_r7.text);
} }
function NgxPasswordComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxPasswordComponent_div_5_ng_container_2_div_1_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxPasswordComponent_div_5_ng_container_2_div_2_Template, 4, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const idx_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.errors && (ctx_r6.passwordSubErrors[idx_r8].status || ctx_r6.errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formControl.errors && !ctx_r6.formControl.errors["required"] && !ctx_r6.passwordSubErrors[idx_r8].status || !ctx_r6.errors);
} }
function NgxPasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxPasswordComponent_div_5_ng_container_2_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.passwordSubErrors);
} }
const _c0 = function () { return { "-webkit-text-security": "disc" }; };
const _c1 = function () { return { "-webkit-text-security": "none" }; };
// import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
// @UntilDestroy()
class NgxPasswordComponent {
    constructor() {
        this.label = 'Password';
        this.placeholder = 'Enter password';
        this.hidePasswordErrors = false;
        this.hideSubPasswordErrors = false;
        this.autoCompleteEnabled = true;
        this.passwordIsHide = true;
        this.passwordSubErrors = [];
        this.passwordMainErrors = [];
        this.actualMainError = {};
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
        this.onChange = () => null;
        this.onTouched = () => null;
        this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__.B2bNgxInputThemeEnum;
        this.passwordSubErrors = _utils_errors__WEBPACK_IMPORTED_MODULE_3__.passwordSubErrorsList;
        this.passwordMainErrors = _utils_errors__WEBPACK_IMPORTED_MODULE_3__.passwordMainErrorsList;
        this.passwordSubErrorsNames = this.passwordSubErrors.map(err => err.errorName);
        this.passwordMainErrorsNames = this.passwordMainErrors.map(err => err.errorName);
    }
    ngOnChanges(changes) {
        if (!changes['errors']) {
            return;
        }
        this.formControl.setErrors(changes['errors'].currentValue);
        if (changes['errors'].currentValue !== null) {
            const subErrors = {};
            const mainErrors = {};
            for (const key in changes['errors'].currentValue) {
                if (this.passwordSubErrorsNames.includes(key)) {
                    subErrors[key] = changes['errors'].currentValue[key];
                }
                else {
                    mainErrors[key] = changes['errors'].currentValue[key];
                }
            }
            this.updateSubErrorsArr(subErrors);
            this.updateMainErrorsArr(mainErrors);
        }
    }
    ngOnInit() {
        this.subscribeOnValueChanges();
    }
    updateSubErrorsArr(errors) {
        if (Object.keys(errors).length) {
            this.passwordSubErrors.forEach(err => (err.status = errors[err.errorName]));
        }
        else {
            this.passwordSubErrors.forEach(err => (err.status = false));
        }
    }
    updateMainErrorsArr(errors) {
        if (Object.keys(errors).length) {
            this.passwordMainErrors.forEach(err => (err.status = errors[err.errorName]));
            this.actualMainError = this.passwordMainErrors.find(err => err.status);
        }
        else {
            this.passwordMainErrors.forEach(err => (err.status = false));
        }
    }
    changeInputType() {
        this.passwordIsHide = !this.passwordIsHide;
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
    subscribeOnValueChanges() {
        this.formControl.valueChanges
            // .pipe(untilDestroyed(this))
            .subscribe(value => this.onChange(value));
    }
}
NgxPasswordComponent.ɵfac = function NgxPasswordComponent_Factory(t) { return new (t || NgxPasswordComponent)(); };
NgxPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxPasswordComponent, selectors: [["b2b-ngx-password"]], inputs: { label: "label", placeholder: "placeholder", errors: "errors", hidePasswordErrors: "hidePasswordErrors", hideSubPasswordErrors: "hideSubPasswordErrors", autoCompleteEnabled: "autoCompleteEnabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: NgxPasswordComponent,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 13, consts: [[1, "password-input"], ["b2bNgxInput", "", 3, "autocomplete", "ngStyle", "theme", "formControl", "label", "type", "placeholder"], ["b2bNgxIcon", "", "class", "password-eye", "alt", "see-password", 3, "name", "click", 4, "ngIf"], ["class", "main-error", 4, "ngIf"], ["class", "password-errors", 4, "ngIf"], ["b2bNgxIcon", "", "alt", "see-password", 1, "password-eye", 3, "name", "click"], [1, "main-error"], [1, "password-errors"], [1, "invalid-password"], [4, "ngFor", "ngForOf"], ["class", "point", 4, "ngIf"], ["class", "point checked", 4, "ngIf"], [1, "point"], [1, "point", "checked"], ["b2bNgxIcon", "", "name", "ico-check-mark", "alt", "check"]], template: function NgxPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxPasswordComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxPasswordComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxPasswordComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxPasswordComponent_div_5_Template, 3, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocomplete", ctx.autoCompleteEnabled ? "on" : "new-password")("ngStyle", ctx.passwordIsHide ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1))("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("formControl", ctx.formControl)("label", ctx.label)("type", ctx.passwordIsHide ? "password" : "text")("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControl.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControl.errors && ctx.formControl.errors["required"] && ctx.formControl.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidePasswordErrors && !ctx.hideSubPasswordErrors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_5__.B2bNgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_6__.B2bNgxIconDirective], styles: ["[_nghost-%COMP%]   .main-error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #e63d3d;\n  margin-top: 5px;\n}\n[_nghost-%COMP%]   .password-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .password-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(50%);\n  right: 15px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .password-errors[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .password-errors[_ngcontent-%COMP%]   .valid-password[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #545457;\n}\n[_nghost-%COMP%]   .password-errors[_ngcontent-%COMP%]   .invalid-password[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .password-errors[_ngcontent-%COMP%]   .invalid-password[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .password-errors[_ngcontent-%COMP%]   .invalid-password[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8d8d8f;\n  font-weight: 500;\n}\n[_nghost-%COMP%]   .password-errors[_ngcontent-%COMP%]   .invalid-password[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .password-errors[_ngcontent-%COMP%]   .invalid-password[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #545457;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0M7RUFDQyxrQkFBQTtBQURGO0FBR0M7RUFDQyxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFERjtBQUlDO0VBQ0MsZ0JBQUE7QUFGRjtBQUdFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURIO0FBR0U7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQURIO0FBRUc7RUFDQyxrQkFBQTtBQUFKO0FBQ0k7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0w7QUFDSTtFQUNDLGlCQUFBO0FBQ0w7QUFHSTtFQUNDLGNBQUE7QUFETCIsImZpbGUiOiJuZ3gtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdC5tYWluLWVycm9yIHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Y29sb3I6ICNlNjNkM2Q7XG5cdFx0bWFyZ2luLXRvcDogNXB4O1xuXHR9XG5cblx0LnBhc3N3b3JkLWlucHV0XHR7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR9XG5cdC5wYXNzd29yZC1leWUge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcblx0XHRyaWdodDogMTVweDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblxuXHQucGFzc3dvcmQtZXJyb3JzIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdC52YWxpZC1wYXNzd29yZCB7XG5cdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRcdGNvbG9yOiAjNTQ1NDU3O1xuXHRcdH1cblx0XHQuaW52YWxpZC1wYXNzd29yZCB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0LnBvaW50IHtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM4ZDhkOGY7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuY2hlY2tlZCB7XG5cdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdGNvbG9yOiAjNTQ1NDU3O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)("fadeInOut", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(":enter", [
                    // :enter is alias to 'void => *'
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 1 })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(":leave", [
                    // :leave is alias to '* => void'
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0 })),
                ]),
            ]),
        ] }, changeDetection: 0 });


/***/ }),

/***/ 15819:
/*!**************************************************************!*\
  !*** ./projects/ngx-password/src/lib/ngx-password.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxPasswordModule": () => (/* binding */ NgxPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-password.component */ 34968);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);







class NgxPasswordModule {
}
NgxPasswordModule.ɵfac = function NgxPasswordModule_Factory(t) { return new (t || NgxPasswordModule)(); };
NgxPasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPasswordModule });
NgxPasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__.B2bNgxInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_5__.B2bNgxIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPasswordModule, { declarations: [_ngx_password_component__WEBPACK_IMPORTED_MODULE_6__.NgxPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__.B2bNgxInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_5__.B2bNgxIconModule], exports: [_ngx_password_component__WEBPACK_IMPORTED_MODULE_6__.NgxPasswordComponent] }); })();


/***/ }),

/***/ 69897:
/*!*******************************************************!*\
  !*** ./projects/ngx-password/src/lib/utils/errors.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passwordMainErrorsList": () => (/* binding */ passwordMainErrorsList),
/* harmony export */   "passwordSubErrorsList": () => (/* binding */ passwordSubErrorsList)
/* harmony export */ });
const passwordSubErrorsList = [
    {
        errorName: 'min',
        status: false,
        text: '8+ characters',
    },
    {
        errorName: 'oneUpperCase',
        status: false,
        text: '1 uppercase',
    },
    {
        errorName: 'oneLowerCase',
        status: false,
        text: '1 lowercase',
    },
    {
        errorName: 'oneDigit',
        status: false,
        text: '1 digit',
    },
];
const passwordMainErrorsList = [
    {
        errorName: 'cyrillic',
        status: false,
        text: 'Please use only Latin letters',
    },
    {
        errorName: 'minLength',
        status: false,
        text: 'Please enter minimum 8 symbols',
    },
    {
        errorName: 'doesNotMeetMinimal',
        status: false,
        text: "Password doesn't meet minimal requirements",
    },
    {
        errorName: 'maxLength',
        status: false,
        text: 'Please enter maximum 24 symbols',
    },
];


/***/ }),

/***/ 20592:
/*!********************************************************************!*\
  !*** ./projects/ngx-select/src/lib/enums/ngx-select-theme.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSelectThemeEnum": () => (/* binding */ B2bNgxSelectThemeEnum)
/* harmony export */ });
var B2bNgxSelectThemeEnum;
(function (B2bNgxSelectThemeEnum) {
    B2bNgxSelectThemeEnum["BACKGROUND_GRAY"] = "background-gray";
    B2bNgxSelectThemeEnum["BACKGROUND_WHITE"] = "background-white";
    B2bNgxSelectThemeEnum["BACKGROUND_TRANSPARENT"] = "background-transparent";
})(B2bNgxSelectThemeEnum || (B2bNgxSelectThemeEnum = {}));


/***/ }),

/***/ 13114:
/*!********************************************************************!*\
  !*** ./projects/ngx-select/src/lib/layout/ngx-select.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSelectComponent": () => (/* binding */ B2bNgxSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ 20592);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);








function B2bNgxSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r3 = ctx.item;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3[ctx_r0.bindLabel], " ");
} }
function B2bNgxSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r4 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4[ctx_r1.bindLabel], " ");
} }
function B2bNgxSelectComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9[ctx_r7.bindLabel]);
} }
function B2bNgxSelectComponent_ng_template_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const items_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", items_r5.length - 1, " more...");
} }
function B2bNgxSelectComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, B2bNgxSelectComponent_ng_template_5_div_0_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, B2bNgxSelectComponent_ng_template_5_div_2_Template, 3, 1, "div", 6);
} if (rf & 2) {
    const items_r5 = ctx.items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 2, items_r5, 0, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r5.length > 1);
} }
const _c0 = ["*"];
class B2bNgxSelectComponent {
    constructor() {
        this.label = '';
        this.options = [];
        this.theme = _enums__WEBPACK_IMPORTED_MODULE_1__.B2bNgxSelectThemeEnum.BACKGROUND_TRANSPARENT;
        this.className = '';
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.virtualScroll = false;
        this.multiple = false;
        this.searchable = false;
        this.minTermLength = 0;
        this.closeOnSelect = true;
        this.searched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onChange = () => null;
        this.onTouched = () => null;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
        this.bindLabel = "label";
        this.bindValue = "value";
    }
    get selectClassName() {
        const defaultClassName = ``;
        return `${defaultClassName} ${this.theme} ${this.className}`;
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
    ngAfterViewInit() {
        // console.log(this.ngSelectComponent)
    }
    clearSelect() {
        // this.ngSelectComponent.handleClearClick();
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
    emitSearch(item) {
        this.searched.emit(item.term);
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    }
    emitChange(e) {
        if (e.link)
            this.changed.emit(e.link);
        this.changed.emit(e);
    }
    subscribeOnValueChanges() {
        this.formControl.valueChanges.subscribe((value) => {
            this.onChange(value);
        });
    }
}
B2bNgxSelectComponent.ɵfac = function B2bNgxSelectComponent_Factory(t) { return new (t || B2bNgxSelectComponent)(); };
B2bNgxSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxSelectComponent, selectors: [["b2b-ngx-select"]], viewQuery: function B2bNgxSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__.NgSelectComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngSelectComponent = _t.first);
    } }, inputs: { label: "label", options: "options", theme: "theme", className: "className", placeholder: "placeholder", bindValue: "bindValue", bindLabel: "bindLabel", groupBy: "groupBy", selectableGroup: "selectableGroup", selectableGroupAsModel: "selectableGroupAsModel", groupValue: "groupValue", virtualScroll: "virtualScroll", multiple: "multiple", searchable: "searchable", isOpen: "isOpen", minTermLength: "minTermLength", closeOnSelect: "closeOnSelect", errors: "errors", touched: "touched" }, outputs: { searched: "searched", changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxSelectComponent),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxSelectComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 6, vars: 20, consts: [[1, "ngx-select-label"], [3, "searchable", "clearable", "items", "bindLabel", "bindValue", "placeholder", "groupBy", "groupValue", "selectableGroup", "selectableGroupAsModel", "formControl", "multiple", "virtualScroll", "isOpen", "minTermLength", "closeOnSelect", "search", "change"], ["ng-label-tmp", ""], ["ng-optgroup-tmp", ""], ["ng-multi-label-tmp", ""], ["class", "multiple-selected", 4, "ngFor", "ngForOf"], ["class", "multiple-more", 4, "ngIf"], [1, "multiple-selected"], [1, "multiple-more"]], template: function B2bNgxSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function B2bNgxSelectComponent_Template_ng_select_search_2_listener($event) { return ctx.emitSearch($event); })("change", function B2bNgxSelectComponent_Template_ng_select_change_2_listener($event) { return ctx.emitChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, B2bNgxSelectComponent_ng_template_3_Template, 1, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, B2bNgxSelectComponent_ng_template_4_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, B2bNgxSelectComponent_ng_template_5_Template, 3, 6, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selectClassName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-touched", ctx.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchable", ctx.searchable)("clearable", false)("items", ctx.options)("bindLabel", ctx.bindLabel)("bindValue", ctx.bindValue)("placeholder", ctx.placeholder)("groupBy", ctx.groupBy)("groupValue", ctx.groupValue)("selectableGroup", ctx.selectableGroup)("selectableGroupAsModel", ctx.selectableGroupAsModel)("formControl", ctx.formControl)("multiple", ctx.multiple)("virtualScroll", ctx.virtualScroll)("isOpen", ctx.isOpen)("minTermLength", ctx.minTermLength)("closeOnSelect", ctx.closeOnSelect);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__.NgOptgroupTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__.NgLabelTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__.NgMultiLabelTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe], styles: [".ngx-select-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}\n.ngx-select-label[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n[_nghost-%COMP%]  .ng-placeholder {\n  font-size: 14px;\n  padding-left: 5px;\n}\n[_nghost-%COMP%]  .ng-input {\n  top: 13px !important;\n}\n[_nghost-%COMP%]  .multiple-selected {\n  font-size: 14px;\n  color: #556274;\n  margin-left: 8px;\n}\n[_nghost-%COMP%]  .multiple-more {\n  font-size: 14px;\n  color: #556274;\n  margin-left: 8px;\n}\n[_nghost-%COMP%]  .ng-invalid.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.0509803922) !important;\n  border: 2px solid #e63d3d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNEO0FBQ0M7RUFDQyxhQUFBO0FBQ0Y7QUFJQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQURGO0FBR0M7RUFDQyxvQkFBQTtBQURGO0FBSUM7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRkY7QUFLQztFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtDO0VBQ0MsNERBQUE7RUFDQSxvQ0FBQTtBQUhGIiwiZmlsZSI6Im5neC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmd4LXNlbGVjdC1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG5cblx0JjplbXB0eSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG46aG9zdDo6bmctZGVlcCB7XG5cdC5uZy1wbGFjZWhvbGRlciB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdHBhZGRpbmctbGVmdDogNXB4O1xuXHR9XG5cdC5uZy1pbnB1dCB7XG5cdFx0dG9wOiAxM3B4ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQubXVsdGlwbGUtc2VsZWN0ZWQge1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRjb2xvcjogIzU1NjI3NDtcblx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHR9XG5cblx0Lm11bHRpcGxlLW1vcmUge1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRjb2xvcjogIzU1NjI3NDtcblx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHR9XG5cdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgLm5nLXNlbGVjdC1jb250YWluZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2QwZCFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgI2U2M2QzZCFpbXBvcnRhbnQ7XG5cdH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 18103:
/*!***************************************************************************!*\
  !*** ./projects/ngx-textarea/src/lib/directive/ngx-textarea.directive.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxTextareaDirective": () => (/* binding */ B2bNgxTextareaDirective)
/* harmony export */ });
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function isValueInEnum(value, enumArray) {
    return Object.values(enumArray).includes(value);
}
class B2bNgxTextareaDirective {
    constructor(_renderer2, _elementRef) {
        this._renderer2 = _renderer2;
        this._elementRef = _elementRef;
        this._renderer2.addClass(this._elementRef.nativeElement, `b2b-ngx-textarea`);
    }
    ngOnChanges(changes) {
        if (changes.theme && isValueInEnum(changes.theme.currentValue, _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_0__.B2bNgxInputThemeEnum)) {
            const { currentValue } = changes.theme;
            const category = currentValue.split("-")[0];
            this._renderer2.addClass(this._elementRef.nativeElement, category);
            this._renderer2.addClass(this._elementRef.nativeElement, currentValue);
        }
        if (changes.label) {
            const { nativeElement } = this._elementRef;
            const { parentElement } = nativeElement;
            const labelElement = this._renderer2.createElement("span");
            const labelText = this._renderer2.createText(this.label);
            this._renderer2.appendChild(labelElement, labelText);
            this._renderer2.addClass(labelElement, "b2b-ngx-textarea-label");
            this._renderer2.addClass(labelElement, this.labelClass);
            this._renderer2.insertBefore(parentElement, labelElement, nativeElement);
        }
    }
}
B2bNgxTextareaDirective.ɵfac = function B2bNgxTextareaDirective_Factory(t) { return new (t || B2bNgxTextareaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
B2bNgxTextareaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: B2bNgxTextareaDirective, selectors: [["", "b2bNgxTextarea", ""]], inputs: { theme: "theme", label: "label", labelClass: "labelClass" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 64526:
/*!************************************************************************!*\
  !*** ./projects/ngx-textarea/src/lib/layout/ngx-textarea.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxTextareaComponent": () => (/* binding */ B2bNgxTextareaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _b2b_id_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/id-generator */ 88763);
var B2bNgxTextareaComponent_1;







const _c0 = ["*"];
let B2bNgxTextareaComponent = B2bNgxTextareaComponent_1 = class B2bNgxTextareaComponent {
    constructor() {
        this.onChange = () => null;
        this.onTouched = () => null;
        this.cols = 5;
        this.rows = 5;
        this.placeholder = "";
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('');
        this.id = (0,_b2b_id_generator__WEBPACK_IMPORTED_MODULE_1__.idGenerator)();
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
        if (changes["errors"]) {
            this.formControl.setErrors(changes["errors"].currentValue);
        }
    }
    validate() {
        return this.formControl.errors;
    }
    subscribeOnValueChanges() {
        this.formControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.untilDestroyed)(this)).subscribe((value) => {
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
B2bNgxTextareaComponent.ɵfac = function B2bNgxTextareaComponent_Factory(t) { return new (t || B2bNgxTextareaComponent)(); };
B2bNgxTextareaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: B2bNgxTextareaComponent, selectors: [["b2b-ngx-textarea"]], inputs: { placeholder: "placeholder", label: "label", name: "name", cols: "cols", rows: "rows", theme: "theme", errors: "errors" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => B2bNgxTextareaComponent_1),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => B2bNgxTextareaComponent_1),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 7, consts: [[1, "ngx-textarea-label", 3, "for"], [1, "ngx-textarea", 3, "name", "placeholder", "id", "cols", "rows", "formControl"]], template: function B2bNgxTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "textarea", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx.name)("placeholder", ctx.placeholder)("id", ctx.id)("cols", ctx.cols)("rows", ctx.rows)("formControl", ctx.formControl);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtdGV4dGFyZWEuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
B2bNgxTextareaComponent = B2bNgxTextareaComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.UntilDestroy)()
], B2bNgxTextareaComponent);



/***/ }),

/***/ 31060:
/*!**************************************************************!*\
  !*** ./projects/ngx-textarea/src/lib/ngx-textarea.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxTextareaModule": () => (/* binding */ B2bNgxTextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/ngx-textarea.component */ 64526);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _directive_ngx_textarea_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/ngx-textarea.directive */ 18103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





class B2bNgxTextareaModule {
}
B2bNgxTextareaModule.ɵfac = function B2bNgxTextareaModule_Factory(t) { return new (t || B2bNgxTextareaModule)(); };
B2bNgxTextareaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxTextareaModule });
B2bNgxTextareaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxTextareaModule, { declarations: [_layout_ngx_textarea_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxTextareaComponent, _directive_ngx_textarea_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxTextareaDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule], exports: [_layout_ngx_textarea_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxTextareaComponent, _directive_ngx_textarea_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxTextareaDirective] }); })();


/***/ }),

/***/ 48413:
/*!***************************************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/components/dropdown-treeview/dropdown-treeview.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownTreeviewComponent": () => (/* binding */ DropdownTreeviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../treeview/treeview.component */ 72036);
/* harmony import */ var _models_treeview_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/treeview-i18n */ 92827);
/* harmony import */ var _models_treeview_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/treeview-config */ 45155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/dropdown.directive */ 20993);
/* harmony import */ var _directives_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/dropdown-menu.directive */ 89881);
/* harmony import */ var _directives_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/dropdown-toggle.directive */ 7993);










class DropdownTreeviewComponent {
    constructor(i18n, defaultConfig) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.buttonClass = 'btn-outline-secondary';
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter(true);
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.config = this.defaultConfig;
    }
    onSelectedChange(values) {
        this.buttonLabel = this.i18n.getText(this.treeviewComponent.selection);
        this.selectedChange.emit(values);
    }
    onFilterChange(text) {
        this.filterChange.emit(text);
    }
}
DropdownTreeviewComponent.ɵfac = function DropdownTreeviewComponent_Factory(t) { return new (t || DropdownTreeviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_models_treeview_i18n__WEBPACK_IMPORTED_MODULE_1__.TreeviewI18n), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_models_treeview_config__WEBPACK_IMPORTED_MODULE_2__.TreeviewConfig)); };
DropdownTreeviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DropdownTreeviewComponent, selectors: [["ngx-dropdown-treeview"]], viewQuery: function DropdownTreeviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_0__.TreeviewComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.treeviewComponent = _t.first);
    } }, inputs: { buttonClass: "buttonClass", headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items", config: "config" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, decls: 6, vars: 6, consts: [["ngxDropdown", "", 1, "dropdown"], ["type", "button", "role", "button", "ngxDropdownToggle", "", 1, "btn", 3, "ngClass"], ["ngxDropdownMenu", "", "aria-labelledby", "dropdownMenu", 3, "click"], [1, "dropdown-container"], [3, "config", "headerTemplate", "items", "itemTemplate", "selectedChange", "filterChange"]], template: function DropdownTreeviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DropdownTreeviewComponent_Template_div_click_3_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "ngx-treeview", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedChange", function DropdownTreeviewComponent_Template_ngx_treeview_selectedChange_5_listener($event) { return ctx.onSelectedChange($event); })("filterChange", function DropdownTreeviewComponent_Template_ngx_treeview_filterChange_5_listener($event) { return ctx.onFilterChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.buttonClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.buttonLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("config", ctx.config)("headerTemplate", ctx.headerTemplate)("items", ctx.items)("itemTemplate", ctx.itemTemplate);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_0__.TreeviewComponent, _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.DropdownDirective, _directives_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuDirective, _directives_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_5__.DropdownToggleDirective], styles: [".dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 0.9rem;\n  text-align: left;\n  overflow: hidden;\n  padding-right: 30px;\n  text-overflow: ellipsis;\n}\n.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 0.6rem;\n  margin-top: 0.6rem;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%] {\n  padding: 0 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLXRyZWV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUo7QUFESTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR047QUFDSTtFQUNFLGlCQUFBO0FBQ04iLCJmaWxlIjoiZHJvcGRvd24tdHJlZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMC45cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwLjZyZW07XG4gICAgICBtYXJnaW4tdG9wOiAwLjZyZW07XG4gICAgfVxuICB9XG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICAuZHJvcGRvd24tY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDAgMC42cmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 30524:
/*!*******************************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/components/treeview-item/treeview-item.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeviewItemComponent": () => (/* binding */ TreeviewItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_treeview_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/treeview-config */ 45155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);





function TreeviewItemComponent_div_0_ng_template_1_Template(rf, ctx) { }
function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-treeview-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const child_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onChildCheckedChange(child_r4, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx_r3.config)("item", child_r4)("template", ctx_r3.template);
} }
function TreeviewItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
} }
const _c0 = function (a0, a1, a2) { return { item: a0, onCollapseExpand: a1, onCheckedChange: a2 }; };
function TreeviewItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeviewItemComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TreeviewItemComponent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c0, ctx_r0.item, ctx_r0.onCollapseExpand, ctx_r0.onCheckedChange));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.item.collapsed);
} }
class TreeviewItemComponent {
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
        this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onCollapseExpand = () => {
            this.item.collapsed = !this.item.collapsed;
        };
        this.onCheckedChange = () => {
            const checked = this.item.checked;
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.item.children) && !this.config.decoupleChildFromParent) {
                this.item.children.forEach(child => child.setCheckedRecursive(checked));
            }
            this.checkedChange.emit(checked);
        };
        this.config = this.defaultConfig;
    }
    onChildCheckedChange(child, checked) {
        if (!this.config.decoupleChildFromParent) {
            let itemChecked = null;
            for (const childItem of this.item.children) {
                if (itemChecked === null) {
                    itemChecked = childItem.checked;
                }
                else if (itemChecked !== childItem.checked) {
                    itemChecked = undefined;
                    break;
                }
            }
            if (itemChecked === null) {
                itemChecked = false;
            }
            if (this.item.checked !== itemChecked) {
                this.item.checked = itemChecked;
            }
        }
        this.checkedChange.emit(checked);
    }
}
TreeviewItemComponent.ɵfac = function TreeviewItemComponent_Factory(t) { return new (t || TreeviewItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_models_treeview_config__WEBPACK_IMPORTED_MODULE_1__.TreeviewConfig)); };
TreeviewItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TreeviewItemComponent, selectors: [["ngx-treeview-item"]], inputs: { config: "config", template: "template", item: "item" }, outputs: { checkedChange: "checkedChange" }, decls: 1, vars: 1, consts: [["class", "treeview-item", 4, "ngIf"], [1, "treeview-item"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "config", "item", "template", "checkedChange"]], template: function TreeviewItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TreeviewItemComponent_div_0_Template, 3, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, TreeviewItemComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]   .treeview-item[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWV2aWV3LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFESTtFQUNFLGlCQUFBO0FBR04iLCJmaWxlIjoidHJlZXZpZXctaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC50cmVldmlldy1pdGVtIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC50cmVldmlldy1pdGVtIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 72036:
/*!*********************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/components/treeview/treeview.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeviewComponent": () => (/* binding */ TreeviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_treeview_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/treeview-item */ 69074);
/* harmony import */ var _helpers_treeview_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/treeview-helper */ 61302);
/* harmony import */ var _models_treeview_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/treeview-i18n */ 92827);
/* harmony import */ var _models_treeview_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/treeview-config */ 45155);
/* harmony import */ var _helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/treeview-event-parser */ 35255);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _treeview_item_treeview_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../treeview-item/treeview-item.component */ 30524);











function TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TreeviewComponent_ng_template_0_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_0_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const onCollapseExpand_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().onCollapseExpand; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](onCollapseExpand_r8()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template, 2, 0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template, 2, 0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", item_r7.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", false);
} }
function TreeviewComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TreeviewComponent_ng_template_0_i_1_Template, 3, 3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 9)(3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const item_r7 = restoredCtx.item; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](item_r7.checked = $event); })("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const onCheckedChange_r9 = restoredCtx.onCheckedChange; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](onCheckedChange_r9()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_0_Template_label_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const item_r7 = restoredCtx.item; const onCheckedChange_r9 = restoredCtx.onCheckedChange; item_r7.checked = !item_r7.checked; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](onCheckedChange_r9()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r7 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", item_r7.checked)("disabled", item_r7.disabled)("indeterminate", item_r7.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
} }
function TreeviewComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.filterText = $event); })("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29); const onFilterTextChange_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().onFilterTextChange; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](onFilterTextChange_r25($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx_r26.i18n.getFilterPlaceholder())("ngModel", ctx_r26.filterText);
} }
function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29)(1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).item; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](item_r22.checked = $event); })("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const onCheckedChange_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).onCheckedChange; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](onCheckedChange_r24()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_label_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); const item_r22 = ctx_r42.item; const onCheckedChange_r24 = ctx_r42.onCheckedChange; item_r22.checked = !item_r22.checked; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](onCheckedChange_r24()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).item;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", item_r22.checked)("indeterminate", item_r22.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r34.i18n.getAllCheckboxText(), " ");
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 36)(2, "path", 37)(3, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 40)(2, "path", 41)(3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48); const onCollapseExpand_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).onCollapseExpand; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](onCollapseExpand_r23()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template, 4, 0, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template, 4, 0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).item;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r35.i18n.getTooltipCollapseExpandText(item_r22.collapsed))("ngSwitch", item_r22.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", false);
} }
function TreeviewComponent_ng_template_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template, 4, 4, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const config_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).config;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", config_r21.hasAllCheckBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", config_r21.hasCollapseExpand);
} }
function TreeviewComponent_ng_template_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 43);
} }
function TreeviewComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TreeviewComponent_ng_template_2_div_1_div_1_Template, 4, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TreeviewComponent_ng_template_2_div_1_div_2_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().config;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", config_r21.hasAllCheckBox || config_r21.hasCollapseExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", config_r21.hasDivider);
} }
function TreeviewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TreeviewComponent_ng_template_2_div_0_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TreeviewComponent_ng_template_2_div_1_Template, 3, 2, "div", 20);
} if (rf & 2) {
    const config_r21 = ctx.config;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", config_r21.hasFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.hasFilterItems);
} }
function TreeviewComponent_ng_template_5_Template(rf, ctx) { }
function TreeviewComponent_div_7_ngx_treeview_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-treeview-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function TreeviewComponent_div_7_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const item_r53 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r54.onItemCheckedChange(item_r53, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx_r52.config)("item", item_r53)("template", ctx_r52.itemTemplate || _r0);
} }
function TreeviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TreeviewComponent_div_7_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("max-height", ctx_r5.maxHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.filterItems);
} }
function TreeviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r6.i18n.getFilterNoItemsFoundText(), " ");
} }
class FilterTreeviewItem extends _models_treeview_item__WEBPACK_IMPORTED_MODULE_1__.TreeviewItem {
    constructor(item) {
        super({
            text: item.text,
            value: item.value,
            disabled: item.disabled,
            checked: item.checked,
            collapsed: item.collapsed,
            children: item.children
        });
        this.refItem = item;
    }
    updateRefChecked() {
        this.children.forEach(child => {
            if (child instanceof FilterTreeviewItem) {
                child.updateRefChecked();
            }
        });
        let refChecked = this.checked;
        if (refChecked) {
            for (const refChild of this.refItem.children) {
                if (!refChild.checked) {
                    refChecked = false;
                    break;
                }
            }
        }
        this.refItem.checked = refChecked;
    }
}
class TreeviewComponent {
    constructor(i18n, defaultConfig, eventParser) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.eventParser = eventParser;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.filterText = '';
        this.config = this.defaultConfig;
        this.allItem = new _models_treeview_item__WEBPACK_IMPORTED_MODULE_1__.TreeviewItem({ text: 'All', value: undefined });
    }
    get hasFilterItems() {
        return !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.filterItems) && this.filterItems.length > 0;
    }
    get maxHeight() {
        return `${this.config.maxHeight}`;
    }
    ngOnInit() {
        this.createHeaderTemplateContext();
        this.generateSelection();
    }
    ngOnChanges(changes) {
        const itemsSimpleChange = changes['items'];
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(itemsSimpleChange) && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.items)) {
            this.updateFilterItems();
            this.updateCollapsedOfAll();
            this.raiseSelectedChange();
        }
    }
    onAllCollapseExpand() {
        this.allItem.collapsed = !this.allItem.collapsed;
        this.filterItems.forEach(item => item.setCollapsedRecursive(this.allItem.collapsed));
    }
    onFilterTextChange(text) {
        this.filterText = text;
        this.filterChange.emit(text);
        this.updateFilterItems();
    }
    onAllCheckedChange() {
        const checked = this.allItem.checked;
        this.filterItems.forEach(item => {
            item.setCheckedRecursive(checked);
            if (item instanceof FilterTreeviewItem) {
                item.updateRefChecked();
            }
        });
        this.raiseSelectedChange();
    }
    onItemCheckedChange(item, checked) {
        if (item instanceof FilterTreeviewItem) {
            item.updateRefChecked();
        }
        this.updateCheckedOfAll();
        this.raiseSelectedChange();
    }
    raiseSelectedChange() {
        this.generateSelection();
        const values = this.eventParser.getSelectedChange(this);
        setTimeout(() => {
            this.selectedChange.emit(values);
        });
    }
    createHeaderTemplateContext() {
        this.headerTemplateContext = {
            config: this.config,
            item: this.allItem,
            onCheckedChange: () => this.onAllCheckedChange(),
            onCollapseExpand: () => this.onAllCollapseExpand(),
            onFilterTextChange: (text) => this.onFilterTextChange(text)
        };
    }
    generateSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.items)) {
            const selection = _helpers_treeview_helper__WEBPACK_IMPORTED_MODULE_2__.TreeviewHelper.concatSelection(this.items, checkedItems, uncheckedItems);
            checkedItems = selection['checked'];
            uncheckedItems = selection['unchecked'];
        }
        this.selection = {
            checkedItems,
            uncheckedItems
        };
    }
    updateFilterItems() {
        if (this.filterText !== '') {
            const filterItems = [];
            const filterText = this.filterText.toLowerCase();
            this.items.forEach(item => {
                const newItem = this.filterItem(item, filterText);
                if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(newItem)) {
                    filterItems.push(newItem);
                }
            });
            this.filterItems = filterItems;
        }
        else {
            this.filterItems = this.items;
        }
        this.updateCheckedOfAll();
    }
    filterItem(item, filterText) {
        const isMatch = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(item.text.toLowerCase(), filterText);
        if (isMatch) {
            return item;
        }
        else {
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(item.children)) {
                const children = [];
                item.children.forEach(child => {
                    const newChild = this.filterItem(child, filterText);
                    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(newChild)) {
                        children.push(newChild);
                    }
                });
                if (children.length > 0) {
                    const newItem = new FilterTreeviewItem(item);
                    newItem.collapsed = false;
                    newItem.children = children;
                    return newItem;
                }
            }
        }
        return undefined;
    }
    updateCheckedOfAll() {
        let itemChecked = null;
        for (const filterItem of this.filterItems) {
            if (itemChecked === null) {
                itemChecked = filterItem.checked;
            }
            else if (itemChecked !== filterItem.checked) {
                itemChecked = undefined;
                break;
            }
        }
        if (itemChecked === null) {
            itemChecked = false;
        }
        this.allItem.checked = itemChecked;
    }
    updateCollapsedOfAll() {
        let hasItemExpanded = false;
        for (const filterItem of this.filterItems) {
            if (!filterItem.collapsed) {
                hasItemExpanded = true;
                break;
            }
        }
        this.allItem.collapsed = !hasItemExpanded;
    }
}
TreeviewComponent.ɵfac = function TreeviewComponent_Factory(t) { return new (t || TreeviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_models_treeview_i18n__WEBPACK_IMPORTED_MODULE_3__.TreeviewI18n), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_models_treeview_config__WEBPACK_IMPORTED_MODULE_4__.TreeviewConfig), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_5__.TreeviewEventParser)); };
TreeviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TreeviewComponent, selectors: [["ngx-treeview"]], inputs: { headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items", config: "config" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 5, consts: [["defaultItemTemplate", ""], ["defaultHeaderTemplate", ""], [1, "treeview-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["class", "treeview-container", 3, "max-height", 4, "ngSwitchCase"], ["class", "treeview-text", 4, "ngSwitchCase"], [1, "form-inline", "row-item"], ["aria-hidden", "true", 3, "ngSwitch", "click", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "disabled", "indeterminate", "ngModelChange"], [1, "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "ngSwitch", "click"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-right-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-down-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"], ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-down-fill"], ["d", "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"], ["class", "row row-filter", 4, "ngIf"], [4, "ngIf"], [1, "row", "row-filter"], [1, "col-12"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "row row-all", 4, "ngIf"], ["class", "dropdown-divider", 4, "ngIf"], [1, "row", "row-all"], ["class", "form-check form-check-inline", 4, "ngIf"], ["class", "float-right form-check-label", 3, "click", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "indeterminate", "ngModelChange"], [1, "float-right", "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "title", "ngSwitch"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-expand", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-contract", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-expand"], ["fill-rule", "evenodd", "d", "M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-contract"], ["fill-rule", "evenodd", "d", "M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z"], [1, "dropdown-divider"], [1, "treeview-container"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "config", "item", "template", "checkedChange"], [1, "treeview-text"]], template: function TreeviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TreeviewComponent_ng_template_0_Template, 6, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TreeviewComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TreeviewComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TreeviewComponent_div_7_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, TreeviewComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", ctx.headerTemplate || _r2)("ngTemplateOutletContext", ctx.headerTemplateContext);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", ctx.hasFilterItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", false);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, _treeview_item_treeview_item_component__WEBPACK_IMPORTED_MODULE_6__.TreeviewItemComponent], styles: ["[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-filter[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-all[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  flex-wrap: nowrap;\n}\n[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 0.3rem;\n}\n.treeview-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding-right: 0.3rem;\n}\n.treeview-text[_ngcontent-%COMP%] {\n  padding: 0.3rem 0;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UscUJBQUE7QUFETjtBQUlNO0VBQ0UsZUFBQTtBQUZSO0FBT0k7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBTE47QUFNTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQUpSO0FBVUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBUEY7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFQRiIsImZpbGUiOiJ0cmVldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnRyZWV2aWV3LWhlYWRlciB7XG4gICAgLnJvdy1maWx0ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgICAucm93LWFsbCB7XG4gICAgICAuYmkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50cmVldmlldy1jb250YWluZXIge1xuICAgIC5yb3ctaXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIC5iaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50cmVldmlldy1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW07XG59XG5cbi50cmVldmlldy10ZXh0IHtcbiAgcGFkZGluZzogMC4zcmVtIDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 89881:
/*!*****************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/directives/dropdown-menu.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenuDirective": () => (/* binding */ DropdownMenuDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.directive */ 20993);


class DropdownMenuDirective {
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
}
DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownDirective)); };
DropdownMenuDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownMenuDirective, selectors: [["", "ngxDropdownMenu", ""]], hostVars: 4, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dropdown-menu", true)("show", ctx.dropdown.isOpen);
    } } });


/***/ }),

/***/ 7993:
/*!*******************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/directives/dropdown-toggle.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownToggleDirective": () => (/* binding */ DropdownToggleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.directive */ 20993);



class DropdownToggleDirective {
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
}
DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
DropdownToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownToggleDirective, selectors: [["", "ngxDropdownToggle", ""]], hostAttrs: ["aria-haspopup", "true", 1, "dropdown-toggle"], hostVars: 1, hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownToggleDirective_click_HostBindingHandler() { return ctx.dropdown.toggle(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.dropdown.isOpen);
    } } });


/***/ }),

/***/ 20993:
/*!************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/directives/dropdown.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownDirective": () => (/* binding */ DropdownDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);



class DropdownDirective {
    constructor() {
        this.internalOpen = false;
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    get isOpen() {
        return this.internalOpen;
    }
    onKeyupEsc() {
        this.close();
    }
    onDocumentClick(event) {
        if (event.button !== 2 && !this.isEventFromToggle(event)) {
            this.close();
        }
    }
    open() {
        if (!this.internalOpen) {
            this.internalOpen = true;
            this.openChange.emit(true);
        }
    }
    close() {
        if (this.internalOpen) {
            this.internalOpen = false;
            this.openChange.emit(false);
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    isEventFromToggle(event) {
        return !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.toggleElement) && this.toggleElement.contains(event.target);
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "ngxDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.esc", function DropdownDirective_keyup_esc_HostBindingHandler() { return ctx.onKeyupEsc(); })("click", function DropdownDirective_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.isOpen);
    } }, inputs: { internalOpen: ["open", "internalOpen"] }, outputs: { openChange: "openChange" }, exportAs: ["ngxDropdown"] });


/***/ }),

/***/ 35255:
/*!************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/helpers/treeview-event-parser.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTreeviewEventParser": () => (/* binding */ DefaultTreeviewEventParser),
/* harmony export */   "DownlineTreeviewEventParser": () => (/* binding */ DownlineTreeviewEventParser),
/* harmony export */   "OrderDownlineTreeviewEventParser": () => (/* binding */ OrderDownlineTreeviewEventParser),
/* harmony export */   "TreeviewEventParser": () => (/* binding */ TreeviewEventParser)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class TreeviewEventParser {
}
TreeviewEventParser.ɵfac = function TreeviewEventParser_Factory(t) { return new (t || TreeviewEventParser)(); };
TreeviewEventParser.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TreeviewEventParser, factory: TreeviewEventParser.ɵfac });
class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const checkedItems = component.selection.checkedItems;
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(checkedItems)) {
            return checkedItems.map(item => item.value);
        }
        return [];
    }
}
DefaultTreeviewEventParser.ɵfac = /*@__PURE__*/ function () { let ɵDefaultTreeviewEventParser_BaseFactory; return function DefaultTreeviewEventParser_Factory(t) { return (ɵDefaultTreeviewEventParser_BaseFactory || (ɵDefaultTreeviewEventParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultTreeviewEventParser)))(t || DefaultTreeviewEventParser); }; }();
DefaultTreeviewEventParser.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DefaultTreeviewEventParser, factory: DefaultTreeviewEventParser.ɵfac });
class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const items = component.items;
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(items)) {
            let result = [];
            items.forEach(item => {
                const links = this.getLinks(item, null);
                if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        return [];
    }
    getLinks(item, parent) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(item.children)) {
            const link = {
                item,
                parent
            };
            let result = [];
            item.children.forEach(child => {
                const links = this.getLinks(child, link);
                if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        if (item.checked) {
            return [{
                    item,
                    parent
                }];
        }
        return null;
    }
}
DownlineTreeviewEventParser.ɵfac = /*@__PURE__*/ function () { let ɵDownlineTreeviewEventParser_BaseFactory; return function DownlineTreeviewEventParser_Factory(t) { return (ɵDownlineTreeviewEventParser_BaseFactory || (ɵDownlineTreeviewEventParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DownlineTreeviewEventParser)))(t || DownlineTreeviewEventParser); }; }();
DownlineTreeviewEventParser.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DownlineTreeviewEventParser, factory: DownlineTreeviewEventParser.ɵfac });
class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    constructor() {
        super(...arguments);
        this.currentDownlines = [];
        this.parser = new DownlineTreeviewEventParser();
    }
    getSelectedChange(component) {
        const newDownlines = this.parser.getSelectedChange(component);
        if (this.currentDownlines.length === 0) {
            this.currentDownlines = newDownlines;
        }
        else {
            const intersectDownlines = [];
            this.currentDownlines.forEach(downline => {
                let foundIndex = -1;
                const length = newDownlines.length;
                for (let i = 0; i < length; i++) {
                    if (downline.item.value === newDownlines[i].item.value) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    intersectDownlines.push(newDownlines[foundIndex]);
                    newDownlines.splice(foundIndex, 1);
                }
            });
            this.currentDownlines = intersectDownlines.concat(newDownlines);
        }
        return this.currentDownlines;
    }
}
OrderDownlineTreeviewEventParser.ɵfac = /*@__PURE__*/ function () { let ɵOrderDownlineTreeviewEventParser_BaseFactory; return function OrderDownlineTreeviewEventParser_Factory(t) { return (ɵOrderDownlineTreeviewEventParser_BaseFactory || (ɵOrderDownlineTreeviewEventParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](OrderDownlineTreeviewEventParser)))(t || OrderDownlineTreeviewEventParser); }; }();
OrderDownlineTreeviewEventParser.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderDownlineTreeviewEventParser, factory: OrderDownlineTreeviewEventParser.ɵfac });


/***/ }),

/***/ 61302:
/*!******************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/helpers/treeview-helper.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeviewHelper": () => (/* binding */ TreeviewHelper)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const TreeviewHelper = {
    findItem,
    findItemInList,
    findParent,
    removeItem,
    concatSelection
};
function findItem(root, value) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(root)) {
        return undefined;
    }
    if (root.value === value) {
        return root;
    }
    if (root.children) {
        for (const child of root.children) {
            const foundItem = findItem(child, value);
            if (foundItem) {
                return foundItem;
            }
        }
    }
    return undefined;
}
function findItemInList(list, value) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(list)) {
        return undefined;
    }
    for (const item of list) {
        const foundItem = findItem(item, value);
        if (foundItem) {
            return foundItem;
        }
    }
    return undefined;
}
function findParent(root, item) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(root) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(root.children)) {
        return undefined;
    }
    for (const child of root.children) {
        if (child === item) {
            return root;
        }
        else {
            const parent = findParent(child, item);
            if (parent) {
                return parent;
            }
        }
    }
    return undefined;
}
function removeItem(root, item) {
    const parent = findParent(root, item);
    if (parent) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pull)(parent.children, item);
        if (parent.children.length === 0) {
            parent.children = undefined;
        }
        else {
            parent.correctChecked();
        }
        return true;
    }
    return false;
}
function concatSelection(items, checked, unchecked) {
    let checkedItems = [...checked];
    let uncheckedItems = [...unchecked];
    for (const item of items) {
        const selection = item.getSelection();
        checkedItems = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.concat)(checkedItems, selection.checkedItems);
        uncheckedItems = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.concat)(uncheckedItems, selection.uncheckedItems);
    }
    return {
        checked: checkedItems,
        unchecked: uncheckedItems
    };
}


/***/ }),

/***/ 53278:
/*!************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/layout/ngx-treeview.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxTreeviewComponent": () => (/* binding */ B2bNgxTreeviewComponent),
/* harmony export */   "CategoriesTreeviewI18n": () => (/* binding */ CategoriesTreeviewI18n)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _models_treeview_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/treeview-i18n */ 92827);
/* harmony import */ var _models_treeview_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/treeview-config */ 45155);
/* harmony import */ var _models_treeview_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/treeview-item */ 69074);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _components_dropdown_treeview_dropdown_treeview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dropdown-treeview/dropdown-treeview.component */ 48413);


// import { DefaultTreeviewI18n, TreeviewConfig, TreeviewI18n, TreeviewItem, TreeviewSelection } from "";









function B2bNgxTreeviewComponent_ng_template_0_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 9)(1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function B2bNgxTreeviewComponent_ng_template_0_label_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item; return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](item_r4.checked = $event); })("ngModelChange", function B2bNgxTreeviewComponent_ng_template_0_label_1_Template_input_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const onCheckedChange_r6 = ctx_r13.onCheckedChange; const onCollapseExpand_r5 = ctx_r13.onCollapseExpand; onCheckedChange_r6(); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](onCollapseExpand_r5()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r4.checked);
} }
function B2bNgxTreeviewComponent_ng_template_0_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function B2bNgxTreeviewComponent_ng_template_0_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const onCollapseExpand_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().onCollapseExpand; return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](onCollapseExpand_r5()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("collapsed", item_r4.collapsed);
} }
function B2bNgxTreeviewComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, B2bNgxTreeviewComponent_ng_template_0_label_1_Template, 4, 1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function B2bNgxTreeviewComponent_ng_template_0_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const item_r4 = restoredCtx.item; const onCheckedChange_r6 = restoredCtx.onCheckedChange; const onCollapseExpand_r5 = restoredCtx.onCollapseExpand; item_r4.checked = !item_r4.checked; item_r4.text.includes("hide") || onCheckedChange_r6(); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](onCollapseExpand_r5()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, B2bNgxTreeviewComponent_ng_template_0_img_4_Template, 1, 2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r4.text.includes("hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.text.replace("hide", ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.children);
} }
function B2bNgxTreeviewComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function B2bNgxTreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const onFilterTextChange_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().onFilterTextChange; return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](onFilterTextChange_r22($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function B2bNgxTreeviewComponent_ng_template_2_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r23.buttonName || "Save");
} }
function B2bNgxTreeviewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, B2bNgxTreeviewComponent_ng_template_2_div_0_Template, 5, 1, "div", 14);
} if (rf & 2) {
    const config_r21 = ctx.config;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", config_r21.hasFilter);
} }
class CategoriesTreeviewI18n extends _models_treeview_i18n__WEBPACK_IMPORTED_MODULE_0__.DefaultTreeviewI18n {
    constructor(translateService) {
        super();
        this.translateService = translateService;
    }
    getText(selection) {
        if (selection.uncheckedItems.length === 0) {
            return "INPUTS.ALL_CATEGORIES";
        }
        switch (selection.checkedItems.length) {
            case 0:
                return this.translateService.instant("INPUTS.SELECT_CATEGORIES");
            case 1:
                return selection.checkedItems[0].text;
            default:
                return `${selection.checkedItems.length} categories selected`;
        }
    }
}
CategoriesTreeviewI18n.ɵfac = function CategoriesTreeviewI18n_Factory(t) { return new (t || CategoriesTreeviewI18n)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService)); };
CategoriesTreeviewI18n.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CategoriesTreeviewI18n, factory: CategoriesTreeviewI18n.ɵfac });
class B2bNgxTreeviewComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.isClicked = false;
        this.config = _models_treeview_config__WEBPACK_IMPORTED_MODULE_1__.TreeviewConfig.create({
            hasAllCheckBox: false,
            hasFilter: true,
            hasCollapseExpand: false,
            decoupleChildFromParent: false,
            maxHeight: 400,
        });
        this.onChange = () => null;
        this.onTouched = () => null;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    }
    close() {
        const [dropdown] = document.getElementsByClassName("dropdown");
        const [dropdownMenu] = document.getElementsByClassName("dropdown-menu");
        const [dropdownToggle] = document.getElementsByClassName("dropdown-toggle");
        dropdown.classList.remove("show");
        dropdownMenu.classList.remove("show");
        dropdownToggle.setAttribute("aria-expanded", false);
    }
    emitChanges(value) {
        const rootCategoriesIds = [];
        this.items.forEach((itemLevelOne) => {
            let itemLevelTwo = undefined;
            if (itemLevelOne === null || itemLevelOne === void 0 ? void 0 : itemLevelOne.children) {
                itemLevelOne.children.forEach((_itemLevelTwo) => {
                    var _a;
                    const itemLevelThreeExist = (_a = _itemLevelTwo.children) === null || _a === void 0 ? void 0 : _a.find((el) => value.includes(el.value));
                    if (itemLevelThreeExist) {
                        rootCategoriesIds.push(_itemLevelTwo.value);
                        itemLevelTwo = _itemLevelTwo;
                    }
                });
            }
            if (itemLevelTwo) {
                const currentItemOneChildren = itemLevelOne.children.find((el) => el.value === itemLevelTwo.value);
                if (currentItemOneChildren) {
                    rootCategoriesIds.push(itemLevelOne.value);
                }
            }
        });
        this.onChange([...value, ...new Set(rootCategoriesIds)]);
    }
    ngOnChanges(changes) {
        if (!changes.items) {
            return;
        }
        this.itemsToDisplay = changes.items.currentValue.map((item) => new _models_treeview_item__WEBPACK_IMPORTED_MODULE_2__.TreeviewItem(item));
        this.setItemsToDisplay();
    }
    setItemsToDisplay() {
        this.setSelected(this.items, this.formControl.value);
        this.itemsToDisplay = this.items.map((item) => new _models_treeview_item__WEBPACK_IMPORTED_MODULE_2__.TreeviewItem(item));
        this.changeDetectorRef.detectChanges();
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
    setSelected(items, selected) {
        items.forEach((item) => {
            if (selected && selected.includes(item.value)) {
                item.checked = true;
            }
            if (item.children) {
                this.setSelected(item.children, selected);
            }
        });
    }
    writeValue(value) {
        this.formControl.setValue(value);
        this.setItemsToDisplay();
    }
    setDisabledState(isDisabled) {
        isDisabled ? this.formControl.disable() : this.formControl.enable();
    }
}
B2bNgxTreeviewComponent.ɵfac = function B2bNgxTreeviewComponent_Factory(t) { return new (t || B2bNgxTreeviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
B2bNgxTreeviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: B2bNgxTreeviewComponent, selectors: [["b2b-ngx-treeview"]], inputs: { config: "config", items: "items", position: "position", label: "label", theme: "theme", buttonName: "buttonName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => B2bNgxTreeviewComponent),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => B2bNgxTreeviewComponent),
                multi: true,
            },
            { provide: _models_treeview_i18n__WEBPACK_IMPORTED_MODULE_0__.TreeviewI18n, useClass: CategoriesTreeviewI18n },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 6, consts: [["itemTemplate", ""], ["headerTemplate", ""], [1, "ngx-treeview-label"], [1, "ngx-treeview", 3, "ngClass"], ["buttonClass", "ngx-treeview-button", 3, "config", "items", "itemTemplate", "headerTemplate", "selectedChange"], [1, "ngx-treeview-item-button"], ["class", "ngx-checkbox", 4, "ngIf"], [1, "ngx-treeview-item-button-checkbox-text", 3, "click"], ["b2bNgxIcon", "", "class", "ngx-treeview-item-button-arrow", "name", "arrow-down-2", 3, "collapsed", "click", 4, "ngIf"], [1, "ngx-checkbox"], ["type", "checkbox", 1, "ngx-checkbox__input", 3, "ngModel", "ngModelChange"], [1, "ngx-checkbox__icon"], ["b2bNgxIcon", "", "name", "check-white"], ["b2bNgxIcon", "", "name", "arrow-down-2", 1, "ngx-treeview-item-button-arrow", 3, "click"], ["class", "row row-filter", 4, "ngIf"], [1, "row", "row-filter"], [1, "col-12"], ["type", "text", 1, "form-control", 3, "ngModelChange"], ["type", "button", 1, "save-btn", 3, "click"]], template: function B2bNgxTreeviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, B2bNgxTreeviewComponent_ng_template_0_Template, 5, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, B2bNgxTreeviewComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "ngx-dropdown-treeview", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedChange", function B2bNgxTreeviewComponent_Template_ngx_dropdown_treeview_selectedChange_7_listener($event) { return ctx.emitChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.position + " " + ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config)("items", ctx.itemsToDisplay)("itemTemplate", _r0)("headerTemplate", _r2);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_8__.B2bNgxIconDirective, _components_dropdown_treeview_dropdown_treeview_component__WEBPACK_IMPORTED_MODULE_3__.DropdownTreeviewComponent], styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.save-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 15px 0;\n  background-color: #0f0f11;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #ffffff;\n  padding: 10px 0;\n  border-radius: 4px;\n}.save-btn[_ngcontent-%COMP%]:hover {\n  background-color: #1c1c20;\n}.ngx-treeview-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.ngx-treeview-label[_ngcontent-%COMP%]:empty {\n  display: none;\n}  b2b-ngx-treeview.ng-invalid .ngx-treeview {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n  border: 2px solid;\n  border-radius: 0.25rem;\n}  .dropdown-toggle.ngx-treeview-button {\n  font-size: 14px;\n  padding-left: 16px;\n}  .treeview-header .row-filter {\n  padding: 0 15px;\n  margin-top: 15px;\n}  .treeview-header .row-filter input {\n  width: 100%;\n  font-size: 14px;\n  border: none;\n  border-radius: 4px;\n  padding: 10px;\n  background-color: #f3f6f8;\n}  .ngx-treeview {\n  position: relative;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .treeview-text {\n  text-align: center;\n  height: 325px !important;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .ngx-treeview-button {\n  display: block;\n  border: 2px solid transparent;\n  height: 49px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  color: #999;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .ngx-treeview-button:hover:after {\n  border-color: #333 transparent transparent;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .ngx-treeview-button:after {\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  margin-right: 2px;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .dropdown-menu {\n  display: none;\n  position: absolute;\n  z-index: 3000000000;\n  background-color: white;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .dropdown-menu .dropdown-container {\n  padding: 0 !important;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .dropdown-menu .dropdown-container .treeview-container {\n  padding: 0;\n  height: 325px !important;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .dropdown-menu .dropdown-container .ngx-treeview-item-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 8px 10px;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .dropdown-menu .dropdown-container .ngx-treeview-item-button .ngx-treeview-item-button-checkbox-text {\n  flex: 1;\n  color: #333;\n  text-align: left;\n  margin-left: 10px;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .dropdown-menu .dropdown-container .ngx-treeview-item-button .ngx-treeview-item-button-checkbox-text:hover {\n  cursor: pointer;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .dropdown-menu .dropdown-container .ngx-treeview-item-button .ngx-treeview-item-button-arrow {\n  transform: rotate(180deg);\n}  .ngx-treeview ngx-dropdown-treeview .dropdown .dropdown-menu .dropdown-container .ngx-treeview-item-button .ngx-treeview-item-button-arrow.collapsed {\n  transform: rotate(0deg);\n}  .ngx-treeview ngx-dropdown-treeview .dropdown.show .ngx-treeview-button:after {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}  .ngx-treeview ngx-dropdown-treeview .dropdown.show .dropdown-menu {\n  display: block;\n  width: 100%;\n}  .ngx-treeview .ngx-treeview-arrow-wrapper {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}  .ngx-treeview .ngx-treeview-arrow-wrapper .ngx-treeview-arrow {\n  width: 15px;\n  height: 10px;\n  transform: rotate(180deg);\n}  .ngx-treeview.gray ngx-dropdown-treeview .ngx-treeview-button {\n  background-color: #f3f6f8;\n}  .ngx-treeview.left .dropdown-menu {\n  right: 0;\n}  .ngx-treeview.right .dropdown-menu {\n  left: 0;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 1rem;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 1rem;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.16rem;\n  border: 0.16rem solid #d2deff;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input[_ngcontent-%COMP%] {\n  opacity: 0;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input[_ngcontent-%COMP%]:checked    ~ .ngx-checkbox__icon[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n}[_nghost-%COMP%]   .ngx-checkbox[_ngcontent-%COMP%]   .ngx-checkbox__input[_ngcontent-%COMP%]:checked    ~ .ngx-checkbox__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJuZ3gtdHJlZXZpZXcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9uZ3gtc2VsZWN0L3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnMuc2NzcyIsIi4uLy4uLy4uLy4uL25neC1idXR0b24vc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL25neC1saW5rL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi9uZ3gtaW5wdXQvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL25neC1pY29uL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi9uZ3gtdGV4dGFyZWEvc3JjL2xpYi9zdHlsZXMvaW5kZXguc2NzcyIsIi4uLy4uLy4uLy4uL3NoYXJlZC9zcmMvc3R5bGVzL21hdGVyaWFsLW92ZXJyaWRlLnNjc3MiLCIuLi8uLi8uLi8uLi9zaGFyZWQvc3JjL3N0eWxlcy9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFD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QUE7QUQ2S2QsQ0NwS1U7RUFDRSxvREFBQTtFQUNBLGdDQUFBO0FEc0taLENDMUpZO0VBQ0Usb0RBQUE7RUFDQSxnQ0FBQTtBRDRKZCxDQ25KVTtFQUNFLG9EQUFBO0VBQ0EsZ0NBQUE7QURxSlosQ0MzSUU7OztFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBRGdKSixDQzdJRTs7O0VBQ0UsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QURpSkosQ0M3SUk7OztFQUNFLG1CQUFBO0FEaUpOLENDOUlJOzs7RUFDRSxtQkFBQTtBRGtKTixDQzdJUTs7O0VBQ0UseUJBQUE7QURpSlYsQ0MzSU07OztFQUNFLHlDQ3BFTztFRHFFUCxxQkN0RVE7QUZxTmhCLENDeklJOzs7RUFDRSxtQkFBQTtBRDZJTixDQzFJSTs7O0VBQ0UsbUJBQUE7QUQ4SU4sQ0N6SVE7OztFQUNFLHlCQUFBO0FENklWLENDcklNOzs7RUFDRSwwQkFBQTtBRHlJUixDQ3JJSTs7O0VBQ0UsdUJBQUE7QUR5SU4sQ0N0SVE7OztFQUNFLDBCQUFBO0FEMElWLENDcklJOzs7RUFDRSx1QkFBQTtBRHlJTixDQ3BJUTs7O0VBQ0UsNkJBQUE7QUR3SVYsQ0M5SE07RUFDRSxrQkFBQTtFQUNBLFNBQUE7QURpSVIsQ0dyUkE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0FId1JGLENHdFJJO0VBQ0UseUJETlk7RUNPWixjREhZO0FGMlJsQixDR3ZSTTtFQUNFLHlCRFJVO0FGaVNsQixDR3RSSTtFQUNFLHlCRFRZO0VDVVosY0RGVztFQ0dYLCtDQUFBO0FId1JOLENHdlJNO0VBQ0UseUJEWFU7QUZvU2xCLENHdFJJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUh3Uk4sQ0d2Uk07RUFDRSx5QkFBQTtBSHlSUixDR3RSSTtFQUNFLDZCQUFBO0VBQ0EsY0RsQlc7QUYwU2pCLENHdlJNO0VBQ0UseUJEMUJVO0FGbVRsQixDR3RSSTtFQUNFLHlCRDVCVztFQzZCWCxjRGpDWTtBRnlUbEIsQ0d2Uk07RUFDRSx5QkQ5QlM7QUZ1VGpCLENHdFJJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBSHdSTixDR3ZSTTtFQUNFLHlCRDlDVTtFQytDVixxQkQvQ1U7RUNnRFYsWUFBQTtBSHlSUixDR3BSSTtFQUNFLHFCRHREWTtBRjRVbEIsQ0dyUk07RUFDRSx5QkRsRFU7QUZ5VWxCLENHcFJJO0VBQ0UscUJEeERZO0FGOFVsQixDR3JSTTtFQUNFLHlCRHhEVTtBRitVbEIsQ0dwUkk7RUFDRSxxQkQxRFc7QUZnVmpCLENHclJNO0VBQ0UseUJEM0RTO0FGa1ZqQixDR3BSSTtFQUNFLHFCQUFBO0FIc1JOLENHclJNO0VBQ0UseUJEcEVVO0FGMlZsQixDR2xSRTtFQUNFLHFEQUFBO0VBQ0EseUJBQUE7QUhvUkosQ0duUkk7RUFDRSxxREFBQTtBSHFSTixDSXZXQTtFQUNDLGdCQUFBO0VBQ0EsNkJBQUE7QUowV0QsQ0l2V0U7RUFDQyxjRkNjO0FGd1dqQixDSXRXRTtFQUNDLGNGWGU7QUZtWGxCLENJcldFO0VBQ0MsY0ZYZTtBRmtYbEIsQ0lwV0U7RUFDQyxjRkxjO0FGMldqQixDSW5XRTtFQUNDLDBCQUFBO0FKcVdILENJaldDO0VBQ0MsaUNBQUE7QUptV0YsQ0lqV0U7RUFDQyx5QkYzQmU7RUU0QmYsY0ZoQ2U7QUZtWWxCLENJbFdHO0VBQ0MseUJGN0JjO0FGaVlsQixDSWhXRTtFQUNDLDZCQUFBO0VBQ0EsY0Z4Q2U7QUYwWWxCLENJaldHO0VBQ0MseUJGcENjO0FGdVlsQixDSS9WRTtFQUNDLHlCRnZDYztFRXdDZCxjRjVDZTtBRjZZbEIsQ0k5VkU7RUFDQyx5QkZwRGU7RUVxRGYsY0ZqRGU7QUZpWmxCLENJL1ZHO0VBQ0MseUJGdERjO0FGdVpsQixDSTdWRTtFQUNDLHlCRnBEYztFRXFEZCxjRnpEZTtBRndabEIsQ0k5Vkc7RUFDQyx5QkZ0RGE7QUZzWmpCLENJNVZFO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBSjhWSCxDSTdWRztFQUNDLHlCQUFBO0FKK1ZKLENJN1ZHO0VBQ0MsbUJBQUE7QUorVkosQ0l6VkU7RUFDQyxxQkY3RWU7QUZ3YWxCLENJMVZHO0VBQ0MseUJG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RTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUF1bEJILENBdGxCRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUF3bEJKLENBbGxCSTtFQUNDLHlCRXBKWTtBRnd1QmpCLENBOWtCRztFQUNDLFFBQUE7QUFnbEJKLENBNWtCRztFQUNDLE9BQUE7QUE4a0JKLENBdmtCQztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQTBrQkYsQ0F6a0JFO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBMmtCSCxDQTFrQkc7RUFDQyxhQUFBO0FBNGtCSixDQXprQkU7RUFDQyxVQUFBO0FBMmtCSCxDQTFrQkc7RUFDQyx5QkVoTmM7RUZpTmQscUJFak5jO0FGNnhCbEIsQ0Eza0JJO0VBQ0MsY0FBQTtBQTZrQkwiLCJmaWxlIjoibmd4LXRyZWV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90Jyk7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCdmb250cy9kYXRhLXRhYmxlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLnN2ZyNkYXRhLXRhYmxlJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5bZGF0YS1pY29uXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149J2RhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLWZpbHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY29sbGFwc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWV4cGFuZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY2xvc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY0Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb3duOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0LXVuc2V0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY3Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY4Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZhJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXBpbjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tYWRkOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2ZCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Zic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzAnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2tpcDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzInO1xufVxuIiwiLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLyoqXG4gICAqIFZlcnRpY2FsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEhvcml6b250YWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgSGVhZGVyIEhlaWdodCBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIHJvdyBoZWlnaHQgYWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBTaGFyZWQgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogSGVhZGVyIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEJvZHkgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogRm9vdGVyIFN0eWxlc1xuICAgKi8gfVxuICAubmd4LWRhdGF0YWJsZSBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5uZ3gtZGF0YXRhYmxlICosXG4gIC5uZ3gtZGF0YXRhYmxlICo6YmVmb3JlLFxuICAubmd4LWRhdGF0YWJsZSAqOmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsIC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwudmlydHVhbGl6ZWQgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtaG9yeiAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktcm93LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3c7XG4gICAgLW1vei1mbGV4LWZsb3c6IHJvdztcbiAgICAtbXMtZmxleC1mbG93OiByb3c7XG4gICAgLW8tZmxleC1mbG93OiByb3c7XG4gICAgZmxleC1mbG93OiByb3c7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGwsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS42MjU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHotaW5kZXg6IDk7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1ncm91cCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnNvcnRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5sb25ncHJlc3MgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5zb3J0LWJ0biB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwucmVzaXplYWJsZTpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6aG92ZXIgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbUxlZnQge1xuICAgICAgICAgIHJpZ2h0OiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbVJpZ2h0IHtcbiAgICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSA0MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgNjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDIwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlcixcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiIsIi8qXG4gIFRoaXMgc3R5bGVzaGVldCB1c2VzIHNjc3MgdmFsaWFibGVzIGZvciBtb3N0IG9mIHRoZSBjb2xvcnMgLyBiYWNrZ3JvdW5kLWNvbG9ycyBvZiB0aGUgdGFibGVcbiAgdG8gZW5hYmxlIHRoZSBjdXN0b21pemF0aW9uIG9mIHRoZSBkaXNwbGF5ZWQgdGFibGUgd2l0aG91dCBjbG9uaW5nIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlXG4gIG93biBhcHBsaWNhdGlvbi5cblxuICBUbyBtb2RpZnkgdGFibGUgY29sb3JzLCBhZGQgdGhlIGZvbGxvd2luZyBsaW5lcyB0byB0aGUgc2NzcyBmaWxlIG9mIHlvdXIgYXBwbGljYXRpb25cbiAgKHRoaXMgZXhhbXBsZSBtb2RpZmllcyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIHJvdyAtIHNlbGVjdGlvblR5cGUgPSBzaW5nbGUsIG11bHRpIG9yIG11bHRpQ2xpY2spOlxuXG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKHllbGxvdywgMC4yKTtcblxuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xuXG5UaGF0J3MgYWxsLlxuKi9cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAvKipcblx0ICogU2hhcmVkIFN0eWxlc1xuXHQgKi9cbiAgLyoqXG5cdCAqIEdsb2JhbCBSb3cgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogSGVhZGVyIFN0eWxlc1xuXHQgKi9cbiAgLyoqXG5cdCAqIEJvZHkgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogRm9vdGVyIFN0eWxlc1xuXHQgKi8gfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zdHJpcGVkIC5kYXRhdGFibGUtcm93LW9kZCB7XG4gICAgYmFja2dyb3VuZDogI2VlZTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDRmZmU7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNDFlZjtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbDpub3QoLmNlbGwtc2VsZWN0aW9uKSAuZGF0YXRhYmxlLWJvZHktcm93OmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5M2FlNDtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbC5hY3RpdmU6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNDFlZjtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZW1wdHktcm93IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAubG9hZGluZy1yb3cge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWxlZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJSFdQU2tOZVNCbUpoVFFWdGJpRE5DZ0FTYWdJSXVKWDhPZ0FBQUFCSlJVNUVya0pnZ2c9PSk7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1yb3ctcmlnaHQsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUkxMlBRa05kaTFWVFE1Z2JTd2tBc0RRQVJMQUlHdE9TRlVBQUFBQUJKUlU1RXJrSmdnZz09KTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5sb25ncHJlc3MgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZSwgb3BhY2l0eSA0MDBtcyBlYXNlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAtMzBweCAwIDAgLTMwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuZHJhZ2dpbmcgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAucmVzaXplLWhhbmRsZSB7XG4gICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZWVlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgcGFkZGluZzogMTBweDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWdyb3VwLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkOWQ4ZDk7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2Q5ZDhkOTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0b3A6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAucHJvZ3Jlc3MtbGluZWFyIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFkMWY5OyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAucHJvZ3Jlc3MtbGluZWFyIC5jb250YWluZXIgLmJhciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIGFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEwNmNjODtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNXB4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMCAxLjJyZW07IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4OyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGxpIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGxpLmFjdGl2ZSBhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMik7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWFyZ2luOiA2cHggM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMik7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAzcHg7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyAuZGF0YXRhYmxlLWJvZHktcm93OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLyoqXG4gKiBDaGVja2JveGVzXG4qKi9cbi5kYXRhdGFibGUtY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7IH1cbiAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwOTY4ODtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi8qKlxuICogUHJvZ3Jlc3MgYmFyIGFuaW1hdGlvbnNcbiAqL1xuQGtleWZyYW1lcyBxdWVyeSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNSUpIHNjYWxlKDAuMywgMSk7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMCwgMSk7IH0gfVxuIiwiLm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVye2JhY2tncm91bmQ6I2ZmZjtib3JkZXItY29sb3I6I2IzYjNiMyAjY2NjICNkOWQ5ZDl9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6bm9uZX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93e3RvcDotMnB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjOTk5O2JvcmRlci13aWR0aDowIDVweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy1hcnJvdzpob3Zlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzMzM30ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQubmctc2VsZWN0LXRvcD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQubmctc2VsZWN0LXJpZ2h0Pi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQubmctc2VsZWN0LWJvdHRvbT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQubmctc2VsZWN0LWxlZnQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCk+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLWNvbG9yOiMwMDdlZmY7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjA3NSksMCAwIDAgM3B4IHJnYmEoMCwxMjYsMjU1LDAuMSl9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3QgLm5nLWhhcy12YWx1ZSAubmctcGxhY2Vob2xkZXJ7ZGlzcGxheTpub25lfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXJ7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO21pbi1oZWlnaHQ6MzZweDthbGlnbi1pdGVtczpjZW50ZXJ9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KX0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctbGVmdDoxMHB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVye2hlaWdodDozNnB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHt0b3A6NXB4O2xlZnQ6MDtwYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXJpZ2h0OjUwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDo1MHB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7Ym9yZGVyOjFweCBzb2xpZCAjZTZlNmU2fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtbGFiZWx7cGFkZGluZzowIDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWxlZnQ6N3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXJpZ2h0OjdweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXtmb250LXNpemU6LjllbTttYXJnaW4tYm90dG9tOjVweDtjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ViZjVmZjtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tcmlnaHQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZS5uZy12YWx1ZS1kaXNhYmxlZCAubmctdmFsdWUtbGFiZWx7cGFkZGluZy1sZWZ0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtbGFiZWx7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkMWU4ZmZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ubGVmdHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjYjhkYmZmO2JvcmRlci1yaWdodDpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLnJpZ2h0e2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjYjhkYmZmfVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiOGRiZmZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDAgM3B4IDNweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmc6MCAzcHggM3B4IDB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXQ+aW5wdXR7Y29sb3I6IzAwMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcnt0b3A6NXB4O3BhZGRpbmctYm90dG9tOjVweDtwYWRkaW5nLWxlZnQ6M3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7cGFkZGluZy1yaWdodDozcHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcntjb2xvcjojOTk5fS5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXI6aG92ZXIgLm5nLWNsZWFye2NvbG9yOiNEMDAyMUJ9Lm5nLXNlbGVjdCAubmctc3Bpbm5lci16b25le3BhZGRpbmc6NXB4IDVweCAwIDB9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggMCAwIDVweH0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye3dpZHRoOjI1cHg7cGFkZGluZy1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXI6aG92ZXIgLm5nLWFycm93e2JvcmRlci10b3AtY29sb3I6IzY2Nn0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVyIC5uZy1hcnJvd3tib3JkZXItY29sb3I6Izk5OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjVweCA1cHggMi41cHh9Lm5nLWRyb3Bkb3duLXBhbmVse2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym94LXNoYWRvdzowIDFweCAwIHJnYmEoMCwwLDAsMC4wNik7bGVmdDowfS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9we2JvdHRvbToxMDAlO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLWJvdHRvbTotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9wIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXJpZ2h0e2xlZnQ6MTAwJTt0b3A6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1yaWdodCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1ib3R0b217dG9wOjEwMCU7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4O2JvcmRlci10b3AtY29sb3I6I2U2ZTZlNjttYXJnaW4tdG9wOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1ib3R0b20gLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246bGFzdC1jaGlsZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1sZWZ0e2xlZnQ6LTEwMCU7dG9wOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1sZWZ0IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24taGVhZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7cGFkZGluZzo1cHggN3B4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tZm9vdGVye2JvcmRlci10b3A6MXB4IHNvbGlkICNjY2M7cGFkZGluZzo1cHggN3B4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3Vwe3VzZXItc2VsZWN0Om5vbmU7cGFkZGluZzo4cHggMTBweDtmb250LXdlaWdodDo1MDA7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtjdXJzb3I6cG9pbnRlcn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHR9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLW1hcmtlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWZhZmZ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOnJnYmEoMCwwLDAsMC41NCk7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2ZvbnQtd2VpZ2h0OjYwMH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb257YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsMC44Nyk7cGFkZGluZzo4cHggMTBweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZHtjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ViZjVmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIC5uZy1vcHRpb24tbGFiZWwsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2VkIC5uZy1vcHRpb24tbGFiZWx7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZjtjb2xvcjojMzMzfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tZGlzYWJsZWR7Y29sb3I6I2NjY30ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctbGVmdDoyMnB4fVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1jaGlsZHtwYWRkaW5nLXJpZ2h0OjIycHg7cGFkZGluZy1sZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIC5uZy10YWctbGFiZWx7Zm9udC1zaXplOjgwJTtmb250LXdlaWdodDo0MDA7cGFkZGluZy1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4O3BhZGRpbmctcmlnaHQ6MH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbHtkaXJlY3Rpb246cnRsO3RleHQtYWxpZ246cmlnaHR9XG4iLCJodG1sLFxuYm9keSB7XG5cdHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xufVxuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5odG1sLFxuYm9keSB7XG5cdGhlaWdodDogMTAwJTtcbn1cbmJvZHkge1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cbioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogYmxhY2s7XG5cdCY6dmlzaXRlZCB7XG5cdFx0Y29sb3I6ICMwMDAwMDA7XG5cdH1cbn1cblxuYnV0dG9uIHtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG50ZXh0YXJlYSB7XG5cdGJvcmRlcjogbm9uZTtcbn1cblxuaSB7XG5cdGZvbnQtc3R5bGU6IEl0YWxpYztcbn1cblxuYiB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiQGltcG9ydCBcIi9wcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlc1wiO1xuXG4uc2F2ZS1idG4ge1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAxNXB4IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTE7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICNmZmZmZmY7XG5cdHBhZGRpbmc6IDEwcHggMDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzIwO1xuXHR9XG59XG5cbi5uZ3gtdHJlZXZpZXctbGFiZWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzlmYTRiYjtcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xuXG5cdCY6ZW1wdHkge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuOjpuZy1kZWVwIHtcblx0YjJiLW5neC10cmVldmlldyB7XG5cdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdC5uZ3gtdHJlZXZpZXcge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQ7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5kcm9wZG93bi10b2dnbGUubmd4LXRyZWV2aWV3LWJ1dHRvbiB7XG5cdFx0Ly8gY29sb3I6ICM5ZmE0YmIgIWltcG9ydGFudDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0cGFkZGluZy1sZWZ0OiAxNnB4O1xuXHR9XG5cblx0LnRyZWV2aWV3LWhlYWRlciB7XG5cdFx0LnJvdy1maWx0ZXIge1xuXHRcdFx0cGFkZGluZzogMCAxNXB4O1xuXHRcdFx0bWFyZ2luLXRvcDogMTVweDtcblx0XHRcdGlucHV0IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmM2Y2Zjg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm5neC10cmVldmlldyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG5neC1kcm9wZG93bi10cmVldmlldyB7XG5cdFx0XHQuZHJvcGRvd24ge1xuXHRcdFx0XHQudHJlZXZpZXctdGV4dCB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGhlaWdodDogMzI1cHggIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5uZ3gtdHJlZXZpZXctYnV0dG9uIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQ5cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjMzMzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHRcdFx0XHRcdGJvcmRlci13aWR0aDogNXB4IDVweCAyLjVweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5kcm9wZG93bi1tZW51IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR6LWluZGV4OiAzMDAwMDAwMDAwO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDE1LCAxNSwgMTcsIDAuMSk7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdC8vIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0LmRyb3Bkb3duLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHQudHJlZXZpZXctY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMjVweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQubmd4LXRyZWV2aWV3LWl0ZW0tYnV0dG9uIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogOHB4IDEwcHg7XG5cblx0XHRcdFx0XHRcdFx0Lm5neC10cmVldmlldy1pdGVtLWJ1dHRvbi1jaGVja2JveCB7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lm5neC10cmVldmlldy1pdGVtLWJ1dHRvbi1jaGVja2JveC10ZXh0IHtcblx0XHRcdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5uZ3gtdHJlZXZpZXctaXRlbS1idXR0b24tYXJyb3cge1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0Ji5jb2xsYXBzZWQge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5zaG93IHtcblx0XHRcdFx0XHQubmd4LXRyZWV2aWV3LWJ1dHRvbiB7XG5cdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjOTk5O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmRyb3Bkb3duLW1lbnUge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Lm5neC10cmVldmlldy1hcnJvdy13cmFwcGVyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAxMHB4O1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0Lm5neC10cmVldmlldy1hcnJvdyB7XG5cdFx0XHRcdHdpZHRoOiAxNXB4O1xuXHRcdFx0XHRoZWlnaHQ6IDEwcHg7XG5cdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5ncmF5IHtcblx0XHRcdG5neC1kcm9wZG93bi10cmVldmlldyB7XG5cdFx0XHRcdC5uZ3gtdHJlZXZpZXctYnV0dG9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmxlZnQge1xuXHRcdFx0LmRyb3Bkb3duLW1lbnUge1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ji5yaWdodCB7XG5cdFx0XHQuZHJvcGRvd24tbWVudSB7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbjpob3N0IHtcblx0Lm5neC1jaGVja2JveCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDFyZW07XG5cdFx0Lm5neC1jaGVja2JveF9faWNvbiB7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR3aWR0aDogMXJlbTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMC4xNnJlbTtcblx0XHRcdGJvcmRlcjogMC4xNnJlbSBzb2xpZCAkY29sb3ItYmx1ZS01MDtcblx0XHRcdGltZyB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5uZ3gtY2hlY2tib3hfX2lucHV0IHtcblx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHQmOmNoZWNrZWQgfiAubmd4LWNoZWNrYm94X19pY29uIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5oaWRkZW4ge1xuXHRcdFx0Ly9kaXNwbGF5OiBub25lO1xuXHRcdH1cblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1mb2N1c2VkOm5vdCgubmctc2VsZWN0LW9wZW5lZCkgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6bmctZGVlcCB7XG4gIGZvcm0ge1xuICAgIGIyYi1uZ3gtc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1zZWxlY3Qge1xuICAgICAgICAmLm5nLWludmFsaWQge1xuICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtIHtcbiAgICBiMmItbmd4LWNvdW50cnktc2VsZWN0IHtcbiAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgIG5nLXNlbGVjdCB7XG4gICAgICAgICAgJi5uZy10b3VjaGVkIHtcbiAgICAgICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9ybS1zdWJtaXR0ZWQge1xuICAgICAgYjJiLW5neC1jb3VudHJ5LXNlbGVjdCB7XG4gICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlLFxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUsXG4ubmctc2VsZWN0LW9wZW5lZCB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gIH1cblxuICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMTUsIDE3LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICAgICAubmctb3B0aW9uIHtcbiAgICAgICAgLm5nLW9wdGlvbi1tYXJrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuICAgIC5uZy12YWx1ZSB7XG4gICAgICAubmctdmFsdWUtbGFiZWwge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUge1xuICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgLm5nLXZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAubmctcGxhY2Vob2xkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvci1ibGFjay05MDA6ICMwMDAwMDA7XG4kY29sb3ItYmxhY2stODAwOiAjMGYwZjExO1xuJGNvbG9yLWJsYWNrLTEwMDogIzJlMmUzNDtcbiRjb2xvci1ibGFjay01MDogcmdiYSgxNzcsIDE3NywgMTc3LCAwLjYpO1xuXG4kY29sb3Itd2hpdGUtOTAwOiAjZmZmZmZmO1xuJGNvbG9yLXdoaXRlLTIwMDogI2UzZWFmMTtcbiRjb2xvci13aGl0ZS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1ibHVlLTUwMDogIzAwNWRmZjtcbiRjb2xvci1ibHVlLTEwMDogIzU5OTVmZTtcbiRjb2xvci1ibHVlLTUwOiAjZDJkZWZmO1xuXG4kY29sb3ItZ3JheS05MDA6ICMwZjBmMTE7XG4kY29sb3ItZ3JheS02MDA6ICMyMjIyMjQ7XG4kY29sb3ItZ3JheS01MDA6ICM1NTYyNzQ7XG4kY29sb3ItZ3JheS00MDA6ICM2YzcwNzc7XG4kY29sb3ItZ3JheS0zMDA6ICNhN2E4YWQ7XG4kY29sb3ItZ3JheS0yMDA6ICM5ZmE0YmI7XG4kY29sb3ItZ3JheS0xMDA6ICNmM2Y2Zjg7XG5cbiRjb2xvci1yZWQtNTAwOiAjZTYzZDNkO1xuJGNvbG9yLXJlZC01MDogcmdiYSgyMzAsIDYxLCA2MSwgMC4wNSk7XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWJ1dHRvbiB7XG4gIGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgJi5iYWNrZ3JvdW5kIHtcbiAgICAmLmJhY2tncm91bmQtYmxhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTkwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1yZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2M2QzZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIHJnYmEoMTAsIDgsIDU4LCAwLjEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNkM2Q7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLWJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtaG92ZXItYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGZlOGY1O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5vdXRsaW5lIHtcbiAgICAmLm91dGxpbmUtYmxhY2sge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS13aGl0ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLWJsdWUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtZ3JheSB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmU4ZjU7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stNTAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMCAhaW1wb3J0YW50O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTUwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWxpbmsge1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuXHQmLnRleHQge1xuXHRcdCYudGV4dC1ibHVlIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LWJsYWNrIHtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC13aGl0ZSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtZ3JheSB7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWdyYXktNTAwO1xuXHRcdH1cblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0fVxuXHR9XG5cblx0Ji5iYWNrZ3JvdW5kIHtcblx0XHRib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cblx0XHQmLmJhY2tncm91bmQtd2hpdGUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS0yMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtZ3JheSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtYmxhY2sge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWJsdWUge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1saWdodC1ibHVlIHtcblx0XHRcdGJhY2tncm91bmQ6ICNlZmY0ZmE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0Y29sb3I6ICMwMDVkZmYgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTZlZGZhO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCYub3V0bGluZSB7XG5cdFx0Ji5vdXRsaW5lLXdoaXRlIHtcblx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stMTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC1pbnB1dC1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5iMmItbmd4LWlucHV0IHtcblx0Ym9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjNTU2Mjc0O1xuXHQmLmJhY2tncm91bmQge1xuXHRcdCYuYmFja2dyb3VuZC1ncmF5IHtcblx0XHRcdGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG5cdFx0fVxuXHRcdCYuYmFja2dyb3VuZC13aGl0ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblx0fVxuXHQmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHR9XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCB7XG5cdC5iMmItbmd4LWlucHV0IHtcblx0XHQmLmJhY2tncm91bmQge1xuXHRcdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmNvbnRyb2wtZXJyb3Ige1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogcmdiYSgxMDgsIDExMiwgMTE5LCAwLjYpO1xuXHRtYXJnaW4tdG9wOiA0cHg7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWljb24ge1xuXHQmLmNpcmNsZSB7XG5cdFx0aGVpZ2h0OiAzcmVtO1xuXHRcdHdpZHRoOiAzcmVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxufVxuIiwiQGltcG9ydCBcInByb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uYjJiLW5neC10ZXh0YXJlYS1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uYjJiLW5neC10ZXh0YXJlYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogI2YzZjZmODtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM1NTYyNzQ7XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdHJlc2l6ZTogbm9uZTtcblx0Ji5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcblx0fVxuICAmLmJhY2tncm91bmQge1xuICAgICYuYmFja2dyb3VuZC1ncmF5IHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS00MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JheS0xMDA7XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC13aGl0ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1zdWJtaXR0ZWQge1xuXHQuYjJiLW5neC10ZXh0YXJlYSB7XG5cdFx0Ji5uZy1pbnZhbGlkIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQtNTA7XG5cdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdH1cblx0fVxufVxuXG4uY29udHJvbC1lcnJvciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbiIsIkBpbXBvcnQgXCIvcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHNcIjtcblxuLy8gc3RlcHBlclxuQG1peGluIHN0eWxlU3RlcExpbmUoJGluZGV4KSB7XG5cdC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4fSkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNURGRjtcblx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXG5cdFx0JiArIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmU6bnRoLWNoaWxkKCN7JGluZGV4ICsgMn0pIHtcblx0XHRcdEBpbmNsdWRlIHN0ZXBOZXh0TGluZTtcblx0XHR9XG5cdH1cbn1cblxuQG1peGluIHN0ZXBOZXh0TGluZSgpIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA1ZGZmLCByZ2JhKDAsIDkzLCAyNTUsIDApKTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdGhlaWdodDogNHB4O1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcblxuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cblx0XHQubWF0LXN0ZXAtaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdGdhcDogN3B4O1xuXHRcdFx0cGFkZGluZzogMDtcblxuXHRcdFx0Lm1hdC1zdGVwLWxhYmVsIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRcdFx0Y29sb3I6ICNDNEM0QzQ7XG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoJzEnKSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCB7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm1hdC1zdGVwLWljb24ge1xuXHRcdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cblx0XHRcdFx0Ji1zZWxlY3RlZCwgJi1zdGF0ZS1lZGl0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hdC1zdGVwLWljb24tY29udGVudCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNEOUQ5RDk7XG5cblx0XHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRcdG1hcmdpbjogMCAtNyUgMCAtMTAlO1xuXHRcdFx0XHRAaW5jbHVkZSBzdGVwTmV4dExpbmU7XG5cdFx0XHR9XG5cblx0XHRcdCY6bGFzdC1vZi10eXBlIHtcblx0XHRcdFx0bWFyZ2luOiAwIC0yMyUgMCAtNyU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG92ZXJmbG93OiBpbml0aWFsO1xuXHR9XG5cblx0LmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTEge1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDIpO1xufVxuXG4ubGFzdC1lZGl0ZWQtc3RlcC0yIHtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSgyKTtcblx0QGluY2x1ZGUgc3R5bGVTdGVwTGluZSg0KTtcbn1cbiIsIiRicmVha3BvaW50LTE6IDM2ZW07XG4kYnJlYWtwb2ludC0yOiA0OGVtO1xuJGJyZWFrcG9pbnQtMzogNTUuNWVtO1xuJGJyZWFrcG9pbnQtNDogNzVlbTtcbiRicmVha3BvaW50LTU6IDg3LjVlbTtcblxuJGJyZWFrcG9pbnRzOiAoXG5cdFwiMVwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0xLFxuXHQpLFxuXHRcIjJcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMixcblx0KSxcblx0XCIzXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTMsXG5cdCksXG5cdFwiNFwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC00LFxuXHQpLFxuXHRcIjVcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtNSxcblx0KSxcblx0XCI2XCI6IChcblx0XHRtaW4td2lkdGg6ICRicmVha3BvaW50LTUsXG5cdCksXG4pICFkZWZhdWx0O1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuXHRAbWVkaWEgI3tpbnNwZWN0KG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpfSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 45155:
/*!*****************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/models/treeview-config.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeviewConfig": () => (/* binding */ TreeviewConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TreeviewConfig {
    constructor() {
        this.hasAllCheckBox = true;
        this.hasFilter = false;
        this.hasCollapseExpand = false;
        this.decoupleChildFromParent = false;
        this.maxHeight = 500;
    }
    get hasDivider() {
        return this.hasFilter || this.hasAllCheckBox || this.hasCollapseExpand;
    }
    static create(fields) {
        const config = new TreeviewConfig();
        Object.assign(config, fields);
        return config;
    }
}
TreeviewConfig.ɵfac = function TreeviewConfig_Factory(t) { return new (t || TreeviewConfig)(); };
TreeviewConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeviewConfig, factory: TreeviewConfig.ɵfac });


/***/ }),

/***/ 92827:
/*!***************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/models/treeview-i18n.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultTreeviewI18n": () => (/* binding */ DefaultTreeviewI18n),
/* harmony export */   "TreeviewI18n": () => (/* binding */ TreeviewI18n)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TreeviewI18n {
}
TreeviewI18n.ɵfac = function TreeviewI18n_Factory(t) { return new (t || TreeviewI18n)(); };
TreeviewI18n.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeviewI18n, factory: TreeviewI18n.ɵfac });
class DefaultTreeviewI18n extends TreeviewI18n {
    getText(selection) {
        if (selection.uncheckedItems.length === 0) {
            if (selection.checkedItems.length > 0) {
                return this.getAllCheckboxText();
            }
            else {
                return '';
            }
        }
        switch (selection.checkedItems.length) {
            case 0:
                return 'Select options';
            case 1:
                return selection.checkedItems[0].text;
            default:
                return `${selection.checkedItems.length} options selected`;
        }
    }
    getAllCheckboxText() {
        return 'All';
    }
    getFilterPlaceholder() {
        return 'Filter';
    }
    getFilterNoItemsFoundText() {
        return 'No items found';
    }
    getTooltipCollapseExpandText(isCollapse) {
        return isCollapse ? 'Expand' : 'Collapse';
    }
}
DefaultTreeviewI18n.ɵfac = /*@__PURE__*/ function () { let ɵDefaultTreeviewI18n_BaseFactory; return function DefaultTreeviewI18n_Factory(t) { return (ɵDefaultTreeviewI18n_BaseFactory || (ɵDefaultTreeviewI18n_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultTreeviewI18n)))(t || DefaultTreeviewI18n); }; }();
DefaultTreeviewI18n.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefaultTreeviewI18n, factory: DefaultTreeviewI18n.ɵfac });


/***/ }),

/***/ 5894:
/*!********************************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/models/treeview-item-template-context.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 69074:
/*!***************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/models/treeview-item.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeviewItem": () => (/* binding */ TreeviewItem)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_treeview_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/treeview-helper */ 61302);


class TreeviewItem {
    constructor(item, autoCorrectChecked = false) {
        this.internalDisabled = false;
        this.internalChecked = true;
        this.internalCollapsed = false;
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(item)) {
            throw new Error('Item must be defined');
        }
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(item.text)) {
            this.text = item.text;
        }
        else {
            throw new Error('A text of item must be string object');
        }
        this.value = item.value;
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(item.checked)) {
            this.checked = item.checked;
        }
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(item.collapsed)) {
            this.collapsed = item.collapsed;
        }
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(item.disabled)) {
            this.disabled = item.disabled;
        }
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(item.children) && item.children.length > 0) {
            this.children = item.children.map(child => {
                if (this.disabled === true) {
                    child.disabled = true;
                }
                return new TreeviewItem(child);
            });
        }
        if (autoCorrectChecked) {
            this.correctChecked();
        }
    }
    get checked() {
        return this.internalChecked;
    }
    set checked(value) {
        if (!this.internalDisabled) {
            if (this.internalChecked !== value) {
                this.internalChecked = value;
            }
        }
    }
    get indeterminate() {
        return this.checked === undefined;
    }
    setCheckedRecursive(value) {
        if (!this.internalDisabled) {
            this.internalChecked = value;
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.internalChildren)) {
                this.internalChildren.forEach(child => child.setCheckedRecursive(value));
            }
        }
    }
    get disabled() {
        return this.internalDisabled;
    }
    set disabled(value) {
        if (this.internalDisabled !== value) {
            this.internalDisabled = value;
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.internalChildren)) {
                this.internalChildren.forEach(child => child.disabled = value);
            }
        }
    }
    get collapsed() {
        return this.internalCollapsed;
    }
    set collapsed(value) {
        if (this.internalCollapsed !== value) {
            this.internalCollapsed = value;
        }
    }
    setCollapsedRecursive(value) {
        this.internalCollapsed = value;
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.internalChildren)) {
            this.internalChildren.forEach(child => child.setCollapsedRecursive(value));
        }
    }
    get children() {
        return this.internalChildren;
    }
    set children(value) {
        if (this.internalChildren !== value) {
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(value) && value.length === 0) {
                throw new Error('Children must be not an empty array');
            }
            this.internalChildren = value;
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.internalChildren)) {
                let checked = null;
                this.internalChildren.forEach(child => {
                    if (checked === null) {
                        checked = child.checked;
                    }
                    else {
                        if (child.checked !== checked) {
                            checked = undefined;
                            return;
                        }
                    }
                });
                this.internalChecked = checked;
            }
        }
    }
    getSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.internalChildren)) {
            if (this.internalChecked) {
                checkedItems.push(this);
            }
            else {
                uncheckedItems.push(this);
            }
        }
        else {
            const selection = _helpers_treeview_helper__WEBPACK_IMPORTED_MODULE_1__.TreeviewHelper.concatSelection(this.internalChildren, checkedItems, uncheckedItems);
            checkedItems = selection['checked'];
            uncheckedItems = selection['unchecked'];
        }
        return {
            checkedItems,
            uncheckedItems
        };
    }
    correctChecked() {
        this.internalChecked = this.getCorrectChecked();
    }
    getCorrectChecked() {
        let checked = null;
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(this.internalChildren)) {
            for (const child of this.internalChildren) {
                child.internalChecked = child.getCorrectChecked();
                if (checked === null) {
                    checked = child.internalChecked;
                }
                else if (checked !== child.internalChecked) {
                    checked = undefined;
                    break;
                }
            }
        }
        else {
            checked = this.checked;
        }
        return checked;
    }
}


/***/ }),

/***/ 80422:
/*!**************************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/pipes/treeview.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeviewPipe": () => (/* binding */ TreeviewPipe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_treeview_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/treeview-item */ 69074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class TreeviewPipe {
    transform(objects, textField) {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(objects)) {
            return undefined;
        }
        return objects.map(object => new _models_treeview_item__WEBPACK_IMPORTED_MODULE_1__.TreeviewItem({ text: object[textField], value: object }));
    }
}
TreeviewPipe.ɵfac = function TreeviewPipe_Factory(t) { return new (t || TreeviewPipe)(); };
TreeviewPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "ngxTreeview", type: TreeviewPipe, pure: true });


/***/ }),

/***/ 34253:
/*!**********************************************************!*\
  !*** ./projects/ngx-treeview/src/lib/treeview.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeviewModule": () => (/* binding */ TreeviewModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/dropdown.directive */ 20993);
/* harmony import */ var _directives_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/dropdown-menu.directive */ 89881);
/* harmony import */ var _directives_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/dropdown-toggle.directive */ 7993);
/* harmony import */ var _components_dropdown_treeview_dropdown_treeview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dropdown-treeview/dropdown-treeview.component */ 48413);
/* harmony import */ var _components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/treeview/treeview.component */ 72036);
/* harmony import */ var _components_treeview_item_treeview_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/treeview-item/treeview-item.component */ 30524);
/* harmony import */ var _pipes_treeview_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/treeview.pipe */ 80422);
/* harmony import */ var _models_treeview_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/treeview-i18n */ 92827);
/* harmony import */ var _models_treeview_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/treeview-config */ 45155);
/* harmony import */ var _helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/treeview-event-parser */ 35255);
/* harmony import */ var _layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/ngx-treeview.component */ 53278);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
















class TreeviewModule {
    static forRoot() {
        return {
            ngModule: TreeviewModule,
            providers: [
                _models_treeview_config__WEBPACK_IMPORTED_MODULE_8__.TreeviewConfig,
                { provide: _models_treeview_i18n__WEBPACK_IMPORTED_MODULE_7__.TreeviewI18n, useClass: _models_treeview_i18n__WEBPACK_IMPORTED_MODULE_7__.DefaultTreeviewI18n },
                { provide: _helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_9__.TreeviewEventParser, useClass: _helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_9__.DefaultTreeviewEventParser }
            ]
        };
    }
}
TreeviewModule.ɵfac = function TreeviewModule_Factory(t) { return new (t || TreeviewModule)(); };
TreeviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: TreeviewModule });
TreeviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_14__.B2bNgxIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](TreeviewModule, { declarations: [_components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_4__.TreeviewComponent,
        _components_treeview_item_treeview_item_component__WEBPACK_IMPORTED_MODULE_5__.TreeviewItemComponent,
        _pipes_treeview_pipe__WEBPACK_IMPORTED_MODULE_6__.TreeviewPipe,
        _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownDirective,
        _directives_dropdown_menu_directive__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuDirective,
        _directives_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownToggleDirective,
        _components_dropdown_treeview_dropdown_treeview_component__WEBPACK_IMPORTED_MODULE_3__.DropdownTreeviewComponent,
        _layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_10__.B2bNgxTreeviewComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_14__.B2bNgxIconModule], exports: [_components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_4__.TreeviewComponent,
        _pipes_treeview_pipe__WEBPACK_IMPORTED_MODULE_6__.TreeviewPipe,
        _components_dropdown_treeview_dropdown_treeview_component__WEBPACK_IMPORTED_MODULE_3__.DropdownTreeviewComponent,
        _layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_10__.B2bNgxTreeviewComponent] }); })();


/***/ }),

/***/ 37891:
/*!*************************************************!*\
  !*** ./projects/ngx-treeview/src/public-api.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxTreeviewComponent": () => (/* reexport safe */ _lib_layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_12__.B2bNgxTreeviewComponent),
/* harmony export */   "CategoriesTreeviewI18n": () => (/* reexport safe */ _lib_layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_12__.CategoriesTreeviewI18n),
/* harmony export */   "DefaultTreeviewEventParser": () => (/* reexport safe */ _lib_helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_10__.DefaultTreeviewEventParser),
/* harmony export */   "DefaultTreeviewI18n": () => (/* reexport safe */ _lib_models_treeview_i18n__WEBPACK_IMPORTED_MODULE_8__.DefaultTreeviewI18n),
/* harmony export */   "DownlineTreeviewEventParser": () => (/* reexport safe */ _lib_helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_10__.DownlineTreeviewEventParser),
/* harmony export */   "DropdownDirective": () => (/* reexport safe */ _lib_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__.DropdownDirective),
/* harmony export */   "DropdownToggleDirective": () => (/* reexport safe */ _lib_directives_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_4__.DropdownToggleDirective),
/* harmony export */   "DropdownTreeviewComponent": () => (/* reexport safe */ _lib_components_dropdown_treeview_dropdown_treeview_component__WEBPACK_IMPORTED_MODULE_2__.DropdownTreeviewComponent),
/* harmony export */   "OrderDownlineTreeviewEventParser": () => (/* reexport safe */ _lib_helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_10__.OrderDownlineTreeviewEventParser),
/* harmony export */   "TreeviewComponent": () => (/* reexport safe */ _lib_components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_1__.TreeviewComponent),
/* harmony export */   "TreeviewConfig": () => (/* reexport safe */ _lib_models_treeview_config__WEBPACK_IMPORTED_MODULE_7__.TreeviewConfig),
/* harmony export */   "TreeviewEventParser": () => (/* reexport safe */ _lib_helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_10__.TreeviewEventParser),
/* harmony export */   "TreeviewHelper": () => (/* reexport safe */ _lib_helpers_treeview_helper__WEBPACK_IMPORTED_MODULE_11__.TreeviewHelper),
/* harmony export */   "TreeviewI18n": () => (/* reexport safe */ _lib_models_treeview_i18n__WEBPACK_IMPORTED_MODULE_8__.TreeviewI18n),
/* harmony export */   "TreeviewItem": () => (/* reexport safe */ _lib_models_treeview_item__WEBPACK_IMPORTED_MODULE_6__.TreeviewItem),
/* harmony export */   "TreeviewModule": () => (/* reexport safe */ _lib_treeview_module__WEBPACK_IMPORTED_MODULE_0__.TreeviewModule),
/* harmony export */   "TreeviewPipe": () => (/* reexport safe */ _lib_pipes_treeview_pipe__WEBPACK_IMPORTED_MODULE_3__.TreeviewPipe)
/* harmony export */ });
/* harmony import */ var _lib_treeview_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/treeview.module */ 34253);
/* harmony import */ var _lib_components_treeview_treeview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/treeview/treeview.component */ 72036);
/* harmony import */ var _lib_components_dropdown_treeview_dropdown_treeview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/dropdown-treeview/dropdown-treeview.component */ 48413);
/* harmony import */ var _lib_pipes_treeview_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/pipes/treeview.pipe */ 80422);
/* harmony import */ var _lib_directives_dropdown_toggle_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/directives/dropdown-toggle.directive */ 7993);
/* harmony import */ var _lib_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/directives/dropdown.directive */ 20993);
/* harmony import */ var _lib_models_treeview_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/models/treeview-item */ 69074);
/* harmony import */ var _lib_models_treeview_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/models/treeview-config */ 45155);
/* harmony import */ var _lib_models_treeview_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/models/treeview-i18n */ 92827);
/* harmony import */ var _lib_models_treeview_item_template_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/models/treeview-item-template-context */ 5894);
/* harmony import */ var _lib_helpers_treeview_event_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/helpers/treeview-event-parser */ 35255);
/* harmony import */ var _lib_helpers_treeview_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/helpers/treeview-helper */ 61302);
/* harmony import */ var _lib_layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/layout/ngx-treeview.component */ 53278);
/*
 * Public API Surface of ngx-treeview
 */















/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/mixpanel/mixpanel.service */ 56838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);





class AppComponent {
    constructor(mixpanelService) {
        this.mixpanelService = mixpanelService;
        this.theme = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_1__.B2bNgxInputThemeEnum;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({ categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('') });
    }
    ngOnInit() {
        var _a, _b;
        (_a = this.form
            .get('categories')) === null || _a === void 0 ? void 0 : _a.setValue([
            '60a784830a04b16c574e823e',
            '60a784830a04b16c574e8246',
            '60a784830a04b16c574e826d',
            '60a784830a04b16c574e8267',
            '60a784830a04b16c574e825e',
            '60a784830a04b16c574e8249',
            '61ee4bfca0e63583b45822b5',
            '624d710bd5a00e47604996e4',
            '624d7131d5a00e4760499705',
        ]);
        (_b = this.form
            .get('categories')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe((data) => console.log('value changes', data));
        if (!document.cookie.includes("firstVisit=true")) {
            this.mixpanelService.track('User joined');
            let expirationDate = new Date();
            expirationDate.setFullYear(expirationDate.getFullYear() + 1);
            document.cookie = "firstVisit=true; expires=" + expirationDate.toUTCString();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_0__.MixpanelService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n\n\n.example-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n\n\n.example-tree[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%]    > .mat-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTs7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBOztFQUFBOztBQUdBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTs7OztFQUFBOztBQUtBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5leGFtcGxlLXRyZWUgdWwsXG4uZXhhbXBsZS10cmVlIGxpIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4vKlxuICogVGhpcyBwYWRkaW5nIHNldHMgYWxpZ25tZW50IG9mIHRoZSBuZXN0ZWQgbm9kZXMuXG4gKi9cbi5leGFtcGxlLXRyZWUgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIGRpdltyb2xlPWdyb3VwXSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLypcbiAqIFBhZGRpbmcgZm9yIGxlYWYgbm9kZXMuXG4gKiBMZWFmIG5vZGVzIG5lZWQgdG8gaGF2ZSBwYWRkaW5nIHNvIGFzIHRvIGFsaWduIHdpdGggb3RoZXIgbm9uLWxlYWYgbm9kZXNcbiAqIHVuZGVyIHRoZSBzYW1lIHBhcmVudC5cbiAqL1xuLmV4YW1wbGUtdHJlZSBkaXZbcm9sZT1ncm91cF0gPiAubWF0LXRyZWUtbm9kZSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tree */ 34972);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _b2b_ngx_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-checkbox */ 31347);
/* harmony import */ var _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-textarea */ 31060);
/* harmony import */ var _b2b_ngx_password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-password */ 15819);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _core_loaders_translate_browser_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/loaders/translate-browser.loader */ 22888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__.MatTreeModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _b2b_ngx_checkbox__WEBPACK_IMPORTED_MODULE_8__.B2bNgxCheckboxModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_9__.B2bNgxTextareaModule,
        _b2b_ngx_password__WEBPACK_IMPORTED_MODULE_10__.NgxPasswordModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserTransferStateModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                useFactory: _core_loaders_translate_browser_loader__WEBPACK_IMPORTED_MODULE_2__.translateBrowserLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.TransferState]
            }
        }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__.MatTreeModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _b2b_ngx_checkbox__WEBPACK_IMPORTED_MODULE_8__.B2bNgxCheckboxModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _b2b_ngx_textarea__WEBPACK_IMPORTED_MODULE_9__.B2bNgxTextareaModule,
        _b2b_ngx_password__WEBPACK_IMPORTED_MODULE_10__.NgxPasswordModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserTransferStateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] }); })();


/***/ }),

/***/ 75429:
/*!************************************************!*\
  !*** ./src/app/auth/guards/role/role.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth/auth.service */ 24159);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);






class RoleGuard {
    constructor(_authService, _router, b2bNgxLinkService) {
        this._authService = _authService;
        this._router = _router;
        this.b2bNgxLinkService = b2bNgxLinkService;
    }
    canActivate(route, state) {
        const token = this._authService.getToken();
        if (!token) {
            this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink("/"));
            return false;
        }
        return this._authService.getUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((user) => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            var _a;
            const isAdmin = ((_a = user === null || user === void 0 ? void 0 : user.role) === null || _a === void 0 ? void 0 : _a.name) === "admin";
            if (!isAdmin) {
                this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink("/"));
            }
            return isAdmin;
        }));
    }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_5__.B2bNgxLinkService)); };
RoleGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 81204:
/*!************************************************************!*\
  !*** ./src/app/auth/interceptors/auth/auth.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth/auth.service */ 24159);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);






class AuthInterceptor {
    constructor(authService, _activatedRoute, hotToastService) {
        this.authService = authService;
        this._activatedRoute = _activatedRoute;
        this.hotToastService = hotToastService;
    }
    intercept(request, next) {
        const excludedUrls = [
            "/auth/login",
            "/auth/register-credentials",
            "/auth/forgotPassword",
            "/create-customer-profile",
            "/create-payment-by-profile",
            "/tradebid",
        ];
        const token = localStorage.getItem("token");
        const clonedRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        return next.handle(clonedRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            var _a;
            if (((_a = error.error) === null || _a === void 0 ? void 0 : _a.code) && error.error.code === 1012) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }
            if (error.status === 401 && !request.url.includes('products')) {
                if (error.error.message === "User authorization token is not up to date") {
                    this.authService.logOut();
                    // FIXME: uncomment code below when you will have an idea how to avoid errors which will happen
                    // this.hotToastService.show("You have more than two sessions from the same account. Please login again.", {
                    // 	dismissible: true,
                    // 	style: {
                    // 		border: "1px solid #E63D3D",
                    // 	},
                    // 	autoClose: true,
                    // });
                }
            }
            const url = error.url.toLowerCase();
            if (excludedUrls.some((excludedUrl) => url.includes(excludedUrl))) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_5__.HotToastService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 24159:
/*!****************************************************!*\
  !*** ./src/app/auth/services/auth/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);
/* harmony import */ var _state_auth_auth_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/auth/auth.store */ 72024);
/* harmony import */ var _state_auth_auth_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/auth/auth.query */ 35703);
/* harmony import */ var _core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/mixpanel/mixpanel.service */ 56838);







class AuthService {
    constructor(apiService, authStore, authQuery, mixpanelService) {
        this.apiService = apiService;
        this.authStore = authStore;
        this.authQuery = authQuery;
        this.mixpanelService = mixpanelService;
        this.isRegisteredByGoogle = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this.showSidenav = true;
        this.userCredentials$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        setTimeout(() => {
            this.initUser();
        }, 0);
    }
    initUser() {
        const token = this.getToken();
        console.log('INIT USER TOKEN: ', token);
        this.updateToken(token || "");
        this.apiService
            .get("user/")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(user => console.log(user)))
            .subscribe({
            next: (user) => this.updateUser(user),
            error: () => this.updateUser(null),
        });
    }
    returnInitedUser() {
        return this.apiService
            .get("user/")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(user => console.log(user)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(user => this.updateUser(user)));
    }
    updateRole(role) {
        this.authStore.update({ role });
    }
    updateToken(token) {
        localStorage.setItem("token", token);
        this.authStore.update({ token });
    }
    updateUser(user) {
        this.authStore.update({
            user,
        });
    }
    sendEmailAgain(email) {
        return this.apiService.post("auth/sendRegisterMail", { email });
    }
    getUser() {
        return this.authQuery.selectUser$;
    }
    get role() {
        return this.authQuery.getValue().role;
    }
    get user$() {
        return this.authQuery.selectUser$;
    }
    get user() {
        return this.authQuery.getValue().user;
    }
    getToken() {
        const tokenFromStore = this.authQuery.getValue().token;
        if (tokenFromStore) {
            return tokenFromStore;
        }
        const tokenFromLocalStorage = localStorage.getItem("token");
        if (tokenFromLocalStorage) {
            return tokenFromLocalStorage;
        }
        return "";
    }
    logOut() {
        localStorage.removeItem("token");
        this.mixpanelService.logout();
        this.authStore.update({
            user: null,
            token: null,
        });
    }
    getRoles() {
        if (!this.authQuery.getValue().roles.length) {
            this.apiService
                .get("roles")
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
                .subscribe((data) => {
                this.authStore.update({ roles: data.roles, rootRoles: data.rootRoles });
            });
        }
        return this.authQuery.selectRoles$;
    }
    getRootRoles() {
        if (!this.authQuery.getValue().rootRoles.length) {
            this.apiService
                .get("roles")
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
                .subscribe((data) => {
                this.authStore.update({ roles: data.roles, rootRoles: data.rootRoles });
            });
        }
        return this.authQuery.selectRootRoles$;
    }
    logInWithGoogle() { }
    logInWithForm(formGroupValue) {
        return this.apiService.post("auth/login", formGroupValue).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((response) => {
            this.updateToken(response.token);
            this.initUser();
        }));
    }
    registerWithGoogle() { }
    getPreregisteredCompanyInformation(email) {
        return this.apiService.post("auth/check-company-in-ep-list", { email });
    }
    checkEmailForExisting(email) {
        return this.apiService.get("user/checkAbsenceUserInDB", { params: { email } });
    }
    registerWithForm(model) {
        return this.apiService.post("auth/register", model).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((response) => {
            this.updateToken(response.token);
            this.initUser();
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_state_auth_auth_store__WEBPACK_IMPORTED_MODULE_1__.AuthStore), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_state_auth_auth_query__WEBPACK_IMPORTED_MODULE_2__.AuthQuery), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_3__.MixpanelService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 35703:
/*!***********************************************!*\
  !*** ./src/app/auth/state/auth/auth.query.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthQuery": () => (/* binding */ AuthQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.store */ 72024);



class AuthQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.selectRoles$ = this.select("roles");
        this.selectRole$ = this.select("role");
        this.selectRootRoles$ = this.select("rootRoles");
        this.selectRootRole$ = this.select("rootRole");
        this.selectUser$ = this.select("user");
        this.selectToken$ = this.select("token");
    }
}
AuthQuery.ɵfac = function AuthQuery_Factory(t) { return new (t || AuthQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_store__WEBPACK_IMPORTED_MODULE_1__.AuthStore)); };
AuthQuery.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthQuery, factory: AuthQuery.ɵfac, providedIn: "root" });


/***/ }),

/***/ 72024:
/*!***********************************************!*\
  !*** ./src/app/auth/state/auth/auth.store.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthStore": () => (/* binding */ AuthStore),
/* harmony export */   "createInitialState": () => (/* binding */ createInitialState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



function createInitialState() {
    return {
        user: undefined,
        roles: [],
        role: null,
        rootRole: null,
        rootRoles: [],
        token: '',
    };
}
let AuthStore = class AuthStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__.Store {
    constructor() {
        super(createInitialState());
    }
};
AuthStore.ɵfac = function AuthStore_Factory(t) { return new (t || AuthStore)(); };
AuthStore.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthStore, factory: AuthStore.ɵfac, providedIn: "root" });
AuthStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__.StoreConfig)({ name: "auth" })
], AuthStore);



/***/ }),

/***/ 74086:
/*!****************************************************************************!*\
  !*** ./src/app/client/components/client-header/client-header.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientHeaderComponent": () => (/* binding */ ClientHeaderComponent)
/* harmony export */ });
/* harmony import */ var _Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @b2b/ngx-select */ 13114);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket/socket.service */ 42823);
/* harmony import */ var _core_services_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/i18n/i18n.service */ 41364);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/services/auth/auth.service */ 24159);
/* harmony import */ var _pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/client-profile/services/user/user.service */ 82021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../projects/ngx-link/src/lib/directive/ngx-link.directive */ 66612);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../projects/ngx-image/src/lib/directive/ngx-image.directive */ 70239);

























const _c0 = function (a0) {
  return {
    order: a0
  };
};

function ClientHeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientHeaderComponent_div_7_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const option_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.processRouteClick(option_r6.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, idx_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, ctx_r0.b2bNgxLinkService.getLink(option_r6.link)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, option_r6.label), " ");
  }
}

function ClientHeaderComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Make RFQ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx_r1.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
  }
}

function ClientHeaderComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, ctx_r2.isAuth$) ? "add-product" : "add-company")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 6, ctx_r2.isAuth$) === true ? "/b2bmarket/product" : "/profile/your-account/company-information")("theme", ctx_r2.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 8, ctx_r2.isAuth$) ? "Add product" : "Add my company", " ");
  }
}

function ClientHeaderComponent_ng_container_18_ng_container_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const unreadMessagesCount_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unreadMessagesCount_r12);
  }
}

function ClientHeaderComponent_ng_container_18_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ClientHeaderComponent_ng_container_18_ng_container_10_span_1_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const unreadMessagesCount_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", unreadMessagesCount_r12 > 0);
  }
}

function ClientHeaderComponent_ng_container_18_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_container_18_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.goTo("/offer"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx_r11.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
  }
}

function ClientHeaderComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ClientHeaderComponent_ng_container_18_ng_container_10_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ClientHeaderComponent_ng_container_18_button_12_Template, 2, 1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 7, ctx_r3.b2bNgxLinkService.getLink("/profile")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 9, ctx_r3.b2bNgxLinkService.getLink("/profile")))("theme", ctx_r3.b2bNgxLinkThemeEnum.BACKGROUND_TRANSPARENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.user.fullName || ctx_r3.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.user.role.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 11, ctx_r3.unreadMessagesCount$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 13, ctx_r3.addOfferUrl) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 15, ctx_r3.rootRole$));
  }
}

function ClientHeaderComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_19_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.processSignInClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientHeaderComponent_ng_template_19_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.processSignUpClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, ctx_r5.b2bNgxLinkService.getLink("/auth/log-in")))("theme", ctx_r5.b2bNgxLinkThemeEnum.BACKGROUND_TRANSPARENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, ctx_r5.b2bNgxLinkService.getLink("/auth/register-credentials")))("theme", ctx_r5.b2bNgxLinkThemeEnum.BACKGROUND_BLACK);
  }
}

let ClientHeaderComponent = class ClientHeaderComponent {
  constructor(router, socketService, i18nService, b2bNgxLinkService, // private readonly cookieService: CookieService,
  translateService, activatedRoute, authService, userService) {
    this.router = router;
    this.socketService = socketService;
    this.i18nService = i18nService;
    this.b2bNgxLinkService = b2bNgxLinkService;
    this.translateService = translateService;
    this.activatedRoute = activatedRoute;
    this.authService = authService;
    this.userService = userService;
    this.headerLinks = [];
    this.options = [];
    this.className = '';
    this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_6__.B2bNgxLinkThemeEnum;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__.B2bNgxButtonThemeEnum;
    this.headerLinks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    this.addOfferUrl = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.makeRfqUrl = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.addProductUrl = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.isAuthPageSource = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    this.isAuthPage$ = this.isAuthPageSource.asObservable();
    this.isAuth$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
    this.rootRole$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
    this.burgerClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.router.url.includes("ru") ? "ru" : "en");
    this.linkDropdown = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null);
  }

  ngOnInit() {
    var _this = this;

    this.checkIsAuthPage();
    this.checkUser();
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationStart)).subscribe(el => {
      el.url.includes("offers") ? this.addOfferUrl.next(true) : this.addOfferUrl.next(false);
      el.url.includes("tradebid/listing") ? this.makeRfqUrl.next(true) : this.makeRfqUrl.next(false);
      el.url.includes("b2bmarket") ? this.addProductUrl.next(true) : this.addProductUrl.next(false);
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd)).subscribe(() => {
      this.checkIsAuthPage();
    });
    this.router.url.includes("offers") ? this.addOfferUrl.next(true) : this.addOfferUrl.next(false);
    this.router.url.includes("tradebid/listing") ? this.makeRfqUrl.next(true) : this.makeRfqUrl.next(false);
    this.router.url.includes("b2bmarket") ? this.addProductUrl.next(true) : this.addProductUrl.next(false);
    this.i18nService.setActiveLang(this.formControl.value);
    this.b2bNgxLinkService.setLanguage(this.formControl.value);
    this.headerLinks$ = this.getHeaderLinksObservable(this.headerLinks);
    this.formControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.skip)(1)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (lang) {
        const routerUrl = _this.router.url.replace("/ru", "").replace("/en", "");

        _this.i18nService.setActiveLang(lang);

        _this.b2bNgxLinkService.setLanguage(lang); // this.cookieService.set("lang", lang);


        yield _this.router.navigateByUrl(_this.b2bNgxLinkService.lang + _this.b2bNgxLinkService.getUrl(routerUrl));
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()); // const langFromCookies = this.cookieService.get("lang");

    const browserLanguage = ["en", "ru"].find(language => navigator.language.includes(language)) || "en"; // if (langFromCookies) {
    // 	if (langFromCookies !== this.formControl.value) {
    // 		this.formControl.setValue(langFromCookies);
    // 	}
    // } else if (navigator.language && browserLanguage !== this.formControl.value) {
    // 	this.formControl.setValue(browserLanguage);
    // }
  }

  get unreadMessagesCount$() {
    return this.socketService.unreadMessagesCount$;
  }

  emitBurgerClick() {
    this.burgerClicked.emit();
  }

  processRouteClick(link) {
    if (link !== "/latest-offers") {
      return;
    } // this.ampService.logEvent("Click on latest offers");

  }

  processSignUpClick() {// this.ampService.logEvent("Click sign up button");
  }

  processSignInClick() {// this.ampService.logEvent("Click sign in button");
    // this.ampService.logEvent("View login page", {
    // 	type: "Sign in",
    // 	source: localStorage.getItem("source"),
    // });
  }

  navigateLink(link) {
    if (link !== undefined) {
      this.router.navigate([link.link]);
      this.b2bNgxSelectComponent.clearSelect();
    }
  }

  onWindowScroll() {
    const element = document.querySelector("header");

    if (window.pageYOffset > 0) {
      element.classList.remove("transparent");
    } else {
      element.classList.add("transparent");
    }
  }

  getHeaderLinksObservable(headerLinks) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(headerLinks).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(links => {
      return links.map(link => {
        return { ...link
        };
      });
    }));
  }

  checkUser() {
    this.userService.getUser$().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe(user => {
      var _a;

      this.isAuth$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(!!user);
      this.rootRole$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(((_a = user === null || user === void 0 ? void 0 : user.rootRole) === null || _a === void 0 ? void 0 : _a.name) === "supplier" || user.role.name === 'admin');
    });
  }

  goTo(link) {
    this.router.navigate([link]);
  }

  checkIsAuthPage() {
    this.isAuthPageSource.next(this.router.url.includes('auth'));
  }

};

ClientHeaderComponent.ɵfac = function ClientHeaderComponent_Factory(t) {
  return new (t || ClientHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_16__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService));
};

ClientHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ClientHeaderComponent,
  selectors: [["b2b-client-header"]],
  viewQuery: function ClientHeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_b2b_ngx_select__WEBPACK_IMPORTED_MODULE_18__.B2bNgxSelectComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.b2bNgxSelectComponent = _t.first);
    }
  },
  hostBindings: function ClientHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function ClientHeaderComponent_scroll_HostBindingHandler($event) {
        return ctx.onWindowScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    headerLinks: "headerLinks",
    options: "options",
    className: "className",
    user: "user"
  },
  outputs: {
    burgerClicked: "burgerClicked"
  },
  decls: 23,
  vars: 22,
  consts: [[1, "header", "transparent"], ["b2bNgxLink", "", 3, "routerLink"], ["b2bNgxImage", "", "name", "logo", 1, "header__logo"], [1, "header__links-block"], [1, "header__list"], ["class", "header__list-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "header__list-item"], [1, "label"], [1, "header__buttons"], ["routerLink", "/tradebid/add-rfq", "b2bNgxButton", "", "type", "submit", "class", "header__button", 3, "theme", 4, "ngIf"], ["b2bNgxButton", "", "type", "submit", "class", "header__button", 3, "id", "routerLink", "theme", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["withoutUser", ""], ["b2bNgxButton", "", 1, "header__burger", 3, "click"], ["b2bNgxIcon", "", "name", "burger"], [1, "header__list-item", 3, "ngStyle"], ["b2bNgxLink", "", 1, "header__list-item-link", 3, "routerLink", "click"], ["routerLink", "/tradebid/add-rfq", "b2bNgxButton", "", "type", "submit", 1, "header__button", 3, "theme"], ["b2bNgxButton", "", "type", "submit", 1, "header__button", 3, "id", "routerLink", "theme"], [1, "user-wrapper"], ["b2bNgxIcon", "", "name", "user-skeleton", "alt", "user", 1, "user-skeleton", 3, "routerLink"], ["b2bNgxLink", "", 1, "header__buttons-profile", 3, "routerLink", "theme"], [1, "header__buttons-profile-text"], [1, "header__buttons-profile-role"], [4, "ngIf"], ["id", "add-offer-header", "b2bNgxButton", "", "class", "header__buttons-add-offer", 3, "theme", "click", 4, "ngIf"], ["class", "unread-messages", 4, "ngIf"], [1, "unread-messages"], ["id", "add-offer-header", "b2bNgxButton", "", 1, "header__buttons-add-offer", 3, "theme", "click"], ["b2bNgxLink", "", 1, "header__buttons-log-in", 3, "routerLink", "theme", "click"], ["b2bNgxIcon", "", "name", "user-filled", 1, "header__buttons-log-in-icon"], ["b2bNgxLink", "", 1, "header__button-sign-up", 3, "routerLink", "theme", "click"]],
  template: function ClientHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ClientHeaderComponent_div_7_Template, 5, 9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "NEW");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ClientHeaderComponent_button_13_Template, 2, 1, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ClientHeaderComponent_button_15_Template, 5, 10, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ClientHeaderComponent_ng_container_18_Template, 15, 17, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ClientHeaderComponent_ng_template_19_Template, 8, 8, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientHeaderComponent_Template_button_click_21_listener() {
        return ctx.emitBurgerClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 10, ctx.b2bNgxLinkService.getLink("/")));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("d-none", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 12, ctx.isAuthPage$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("d-none", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 14, ctx.isAuthPage$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 16, ctx.makeRfqUrl));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 18, ctx.addProductUrl) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 20, ctx.rootRole$));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_20__.B2bNgxLinkDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_21__.B2bNgxIconDirective, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_22__.B2bNgxButtonDirective, _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_23__.B2bNgxImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
  styles: ["@charset \"UTF-8\";.ngx-datatable[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  \n  \n  \n  \n  \n  \n  \n   }.ngx-datatable[_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%] {\n    display: none !important; }.ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .ngx-datatable[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n    position: absolute; }.ngx-datatable.scroll-horz[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n    white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      white-space: nowrap; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:focus {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    z-index: 9; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-center[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.sortable[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        cursor: move; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .sort-btn[_ngcontent-%COMP%] {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        cursor: ew-resize; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.resizeable[_ngcontent-%COMP%]:hover   .resize-handle[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]:hover   .resize-handle--not-resizable[_ngcontent-%COMP%] {\n        visibility: visible; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromLeft[_ngcontent-%COMP%] {\n          right: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .targetMarker.dragFromRight[_ngcontent-%COMP%] {\n          left: 0; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-template-wrap[_ngcontent-%COMP%] {\n        height: inherit; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-scroll[_ngcontent-%COMP%] {\n      display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      overflow-y: hidden; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n      outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: flex; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-footer-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 40%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 60%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      flex: 1 1 20%; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        outline: none; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        cursor: not-allowed; }.ngx-datatable.material[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  \n  \n  \n  \n   }.ngx-datatable.material.striped[_ngcontent-%COMP%]   .datatable-row-odd[_ngcontent-%COMP%] {\n    background: #eee; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.single-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.multi-click-selection[_ngcontent-%COMP%]   .datatable-body-row.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus, .ngx-datatable.material[_ngcontent-%COMP%]:not(.cell-selection)   .datatable-body-row[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: linear; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%], .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #304ffe;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:hover   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #193ae4;\n    color: #fff; }.ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus, .ngx-datatable.material.cell-selection[_ngcontent-%COMP%]   .datatable-body-cell.active[_ngcontent-%COMP%]:focus   .datatable-row-group[_ngcontent-%COMP%] {\n    background-color: #2041ef;\n    color: #fff; }.ngx-datatable.material[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .loading-row[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-left[_ngcontent-%COMP%] {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .datatable-header-cell-wrapper[_ngcontent-%COMP%] {\n        position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.longpress[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        transition: transform 400ms ease, opacity 400ms ease;\n        opacity: 0.5;\n        transform: scale(1); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]   .draggable[_ngcontent-%COMP%]::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        filter: none;\n        transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-cell.dragging[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n        border-right: none; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .resize-handle[_ngcontent-%COMP%] {\n      border-right: solid 1px #eee; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%] {\n    position: relative; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      padding: 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-group-header[_ngcontent-%COMP%] {\n      background: #f5f5f5;\n      border-bottom: solid 1px #d9d8d9;\n      border-top: solid 1px #d9d8d9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-group-cell[_ngcontent-%COMP%] {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      vertical-align: top;\n      border-top: 0;\n      color: rgba(0, 0, 0, 0.87);\n      transition: width 0.3s ease;\n      font-size: 14px;\n      font-weight: 400; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%] {\n      display: block;\n      position: sticky;\n      width: 100%;\n      height: 5px;\n      padding: 0;\n      margin: 0;\n      top: 0; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 5px;\n        transform: translate(0, 0) scale(1, 1);\n        background-color: #aad1f9; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .progress-linear[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n          transition: all 0.2s linear;\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          transition: transform 0.2s linear;\n          background-color: #106cc8;\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n          height: 5px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%] {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .page-count[_ngcontent-%COMP%] {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%] {\n      margin: 0 10px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        vertical-align: middle; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-left[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-skip[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.material[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%] {\n    background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]:hover {\n      background-color: #ddd; }.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-summary-row[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n      font-weight: bold; }.datatable-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:before {\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked:before {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }.datatable-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1); } }@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-'][_ngcontent-%COMP%]::before, [class*=' datatable-icon-'][_ngcontent-%COMP%]::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter[_ngcontent-%COMP%]::before {\n  content: '\\62';\n}.datatable-icon-collapse[_ngcontent-%COMP%]::before {\n  content: '\\61';\n}.datatable-icon-expand[_ngcontent-%COMP%]::before {\n  content: '\\63';\n}.datatable-icon-close[_ngcontent-%COMP%]::before {\n  content: '\\64';\n}.datatable-icon-up[_ngcontent-%COMP%]::before {\n  content: '\\65';\n}.datatable-icon-down[_ngcontent-%COMP%]::before {\n  content: '\\66';\n}.datatable-icon-sort-unset[_ngcontent-%COMP%]::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort[_ngcontent-%COMP%]::before {\n  content: '\\67';\n}.datatable-icon-done[_ngcontent-%COMP%]::before {\n  content: '\\68';\n}.datatable-icon-done-all[_ngcontent-%COMP%]::before {\n  content: '\\69';\n}.datatable-icon-search[_ngcontent-%COMP%]::before {\n  content: '\\6a';\n}.datatable-icon-pin[_ngcontent-%COMP%]::before {\n  content: '\\6b';\n}.datatable-icon-add[_ngcontent-%COMP%]::before {\n  content: '\\6d';\n}.datatable-icon-left[_ngcontent-%COMP%]::before {\n  content: '\\6f';\n}.datatable-icon-right[_ngcontent-%COMP%]::before {\n  content: '\\70';\n}.datatable-icon-skip[_ngcontent-%COMP%]::before {\n  content: '\\71';\n}.datatable-icon-prev[_ngcontent-%COMP%]::before {\n  content: '\\72';\n}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:rgba(0,0,0,0.54);background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  scroll-behavior: auto !important;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}body[_ngcontent-%COMP%] {\n  line-height: 1;\n}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%] {\n  quotes: none;\n}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  content: \"\";\n  content: none;\n}table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}a[_ngcontent-%COMP%]:visited {\n  color: #000000;\n}button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}textarea[_ngcontent-%COMP%] {\n  border: none;\n}i[_ngcontent-%COMP%] {\n  font-style: Italic;\n}b[_ngcontent-%COMP%] {\n  font-weight: bold;\n}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened)    > .ng-select-container[_ngcontent-%COMP%] {\n  box-shadow: none;\n}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container {\n  background-color: rgba(230, 61, 61, 0.05) !important;\n  border-color: #e63d3d !important;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  height: 49px;\n}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(15, 15, 17, 0.1);\n  border-radius: 4px;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  background: transparent;\n}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%] {\n  background-color: transparent;\n}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  top: 15px;\n}.b2b-ngx-button[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%] {\n  background-color: #e63d3d;\n  color: white;\n  box-shadow: 0 0.25rem 1rem rgba(10, 8, 58, 0.1);\n}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover {\n  background-color: #e63d3d;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n  transition: 0.2s;\n}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover {\n  background-color: #0f0f11;\n  border-color: #0f0f11;\n  color: white;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%] {\n  border-color: #0f0f11;\n}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%] {\n  border-color: #005dff;\n}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%] {\n  border-color: #dfe8f5;\n}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n  color: #ffffff !important;\n}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: rgba(177, 177, 177, 0.6) !important;\n}.b2b-ngx-link[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  border: 1px solid transparent;\n}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%] {\n  color: #005dff;\n}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%] {\n  color: #0f0f11;\n}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%] {\n  color: #556274;\n}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}.b2b-ngx-link.background[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover {\n  background-color: #e3eaf1;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #0f0f11;\n}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover {\n  background-color: #f3f6f8;\n}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover {\n  background-color: #5995fe;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%] {\n  background: #eff4fa;\n  border-radius: 4px;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #005dff !important;\n}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover {\n  background: #e6edfa;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%] {\n  border-color: #ffffff;\n}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover {\n  background-color: #2e2e34;\n}.b2b-ngx-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-input[_ngcontent-%COMP%] {\n  border: 0.16rem solid transparent;\n  border-radius: 0.25rem;\n  padding: 14px 16px;\n  width: 100%;\n  font-size: 14px;\n  color: #556274;\n}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.b2b-ngx-icon.circle[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #f3f6f8;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}.b2b-ngx-textarea-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}.b2b-ngx-textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background: #f3f6f8;\n  border-radius: 4px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #556274;\n  padding: 14px 16px;\n  border: 2px solid transparent;\n  resize: none;\n}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%] {\n  color: #6c7077;\n  background-color: #f3f6f8;\n}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%] {\n  background-color: rgba(230, 61, 61, 0.05);\n  border-color: #e63d3d;\n}.control-error[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(108, 112, 119, 0.6);\n  margin-top: 4px;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n  width: 100%;\n  justify-content: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  color: #C4C4C4;\n}@media (max-width: 36em) {\n  .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%] {\n  color: #000000;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #D9D9D9;\n  margin: 0;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #005DFF;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%] {\n  display: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child {\n  align-items: flex-start;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child {\n  align-items: flex-end;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border: 2px solid #D9D9D9;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type {\n  margin: 0 -7% 0 -10%;\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type {\n  margin: 0 -23% 0 -7%;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: initial;\n}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #005DFF;\n  border-color: transparent;\n}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]    + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6) {\n  background-image: linear-gradient(90deg, #005dff, rgba(0, 93, 255, 0));\n  background-color: #D9D9D9;\n  box-sizing: content-box;\n  height: 4px;\n  border: none;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 100px;\n  background: #ffffff;\n  box-shadow: 0 0.16rem 0 #e3eaf1;\n  transition: background-color 0.5s;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__wrapper[_ngcontent-%COMP%] {\n  width: 400px;\n  display: flex;\n  align-items: center;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__narrow[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  transform: translateY(20%);\n  position: relative;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list-dropdown-active[_ngcontent-%COMP%] {\n  display: block;\n  transform: translate(13%, 10%);\n  background-color: red;\n  height: 70px;\n  width: 100px;\n  position: absolute;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__logo[_ngcontent-%COMP%] {\n  width: 7.25rem;\n  height: 2.25rem;\n}@media (max-width: 75em) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__logo[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 26px;\n  }\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__links-block[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__links-block[_ngcontent-%COMP%] {\n    display: none;\n  }\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list[_ngcontent-%COMP%]   .header__list-item[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list[_ngcontent-%COMP%]   .header__list-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  border-radius: 5px;\n  background-color: #e80202;\n  color: #fff;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list[_ngcontent-%COMP%]   .header__list-item[_ngcontent-%COMP%]   .header__list-item-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #0f0f11;\n  border-bottom: 0.16rem solid transparent;\n  font-size: 16px;\n  padding-bottom: 0.125rem;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list[_ngcontent-%COMP%]   .header__list-item[_ngcontent-%COMP%]   .header__list-item-link.active[_ngcontent-%COMP%] {\n  border-bottom-color: #0f0f11;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list[_ngcontent-%COMP%]   .header__list-item[_ngcontent-%COMP%]   .header__list-item-link[_ngcontent-%COMP%]:hover {\n  color: #005dff;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list[_ngcontent-%COMP%]   .header__list-item[_ngcontent-%COMP%]:first-child {\n  margin-right: 6px;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__list[_ngcontent-%COMP%]   .header__list-item[_ngcontent-%COMP%]:nth-child(5) {\n  margin-right: 0;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 37px;\n  height: 35px;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .header__button[_ngcontent-%COMP%] {\n  width: 130px;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: 15px;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .user-skeleton[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .header__buttons-profile[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-template-rows: repeat(2, auto);\n  gap: 5px;\n  padding: 4px 24px 4px 0;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .header__buttons-profile[_ngcontent-%COMP%]   .header__buttons-profile-text[_ngcontent-%COMP%] {\n  max-width: 133px;\n  color: #0f0f11;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  grid-column: 1/3;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .header__buttons-profile[_ngcontent-%COMP%]   .header__buttons-profile-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 0;\n  text-align: left;\n  color: #9fa4bb;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%]   .header__buttons-profile[_ngcontent-%COMP%]   .unread-messages[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #005dff;\n  border-radius: 50%;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 11px;\n  text-transform: uppercase;\n  text-shadow: 0.5px 0.5px 0px rgba(0, 0, 0, 0.25);\n  color: white;\n  margin-left: 10px;\n}@media (max-width: 48em) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .user-wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .header__buttons-add-offer[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 0.68rem 1.5rem;\n  border-radius: 0.25rem;\n  font-weight: 700;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .header__buttons-log-in[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #0f0f11;\n  font-weight: 500;\n  padding: 0.68rem 1.5rem;\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .header__buttons-log-in[_ngcontent-%COMP%]   .header__buttons-log-in-icon[_ngcontent-%COMP%] {\n  margin-right: 0.56rem;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .header__buttons-log-in[_ngcontent-%COMP%] {\n    display: none;\n  }\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .header__button-sign-up[_ngcontent-%COMP%] {\n  padding: 0.68rem 1.5rem;\n  border-radius: 0.25rem;\n  font-weight: 700;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__buttons[_ngcontent-%COMP%]   .header__button-sign-up[_ngcontent-%COMP%] {\n    display: none;\n  }\n}[_nghost-%COMP%]   .header.transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n}@media (max-width: 75em) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__burger[_ngcontent-%COMP%] {\n  display: none;\n}@media (max-width: 55.5em) {\n  [_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header__burger[_ngcontent-%COMP%] {\n    display: block;\n  }\n}[_nghost-%COMP%]     .ng-select .ng-select-container {\n  transform: translate(20%, 1.5%);\n}[_nghost-%COMP%]     .ng-select .ng-select-container .ng-placeholder {\n  color: #000000;\n  font-weight: 500;\n}[_nghost-%COMP%]     .service-select-wrapper .ng-value {\n  font-weight: 500;\n  font-size: 14px;\n  color: #000000;\n  display: none;\n}[_nghost-%COMP%]     .service-select-wrapper .ng-placeholder {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC9zcmMvc3R5bGVzL3Jlc2V0LnNjc3MiLCJjbGllbnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXNlbGVjdC9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYnV0dG9uL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGluay9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWlucHV0L3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaWNvbi9zcmMvbGliL3N0eWxlcy9pbmRleC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRleHRhcmVhL3NyYy9saWIvc3R5bGVzL2luZGV4LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9tYXRlcmlhbC1vdmVycmlkZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsQ0NBaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9COztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUUsRUFBRSxDQUNKO0lBQ0Usd0JBQXdCLEVBQUUsQ0FDNUI7OztJQUtFLHNCQUFzQixFQUFFLENBQzFCO0lBQ0UsZ0JBQWdCLEVBQUUsQ0FDcEI7SUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGdCQUFnQjtJQUNoQixpQ0FBaUMsRUFBRSxDQUNyQztJQUNFLG1CQUFtQixFQUFFLENBQ3JCO01BQ0UsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBRSxDQUM3QjtJQUNFLG1CQUFtQixFQUFFLENBQ3JCO01BQ0UsbUJBQW1CLEVBQUUsQ0FDckI7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQzNCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMvQjs7O0lBT0UsYUFBYTtJQUNiLG1CQUFtQjtJQUluQixpQkFBaUI7SUFDakIsY0FBYyxFQUFFLENBQ2xCOztJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFFLENBQ3BCOztNQUVFLGFBQWEsRUFBRSxDQUNuQjs7SUFFRSxVQUFVLEVBQUUsQ0FDZDs7OztJQUlFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsY0FBYztJQUNkLGdCQUFnQixFQUFFLENBQ2xCO01BQ0Usb0JBQW9CO01BQ3BCLDRCQUE0QixFQUFFLENBQ2hDO01BQ0Usa0JBQWtCO01BQ2xCLHFCQUFxQixFQUFFLENBQ3ZCO1FB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QkFBQTtFQUNBLGNEbEJXO0FGMFNqQixDR3ZSTTtFQUNFLHlCRDFCVTtBRm1UbEIsQ0d0Ukk7RUFDRSx5QkQ1Qlc7RUM2QlgsY0RqQ1k7QUZ5VGxCLENHdlJNO0VBQ0UseUJEOUJTO0FGdVRqQixDR3RSSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUh3Uk4sQ0d2Uk07RUFDRSx5QkQ5Q1U7RUMrQ1YscUJEL0NVO0VDZ0RWLFlBQUE7QUh5UlIsQ0dwUkk7RUFDRSxxQkR0RFk7QUY0VWxCLENHclJNO0VBQ0UseUJEbERVO0FGeVVsQixDR3BSSTtFQUNFLHFCRHhEWTtBRjhVbEIsQ0dyUk07RUFDRSx5QkR4RFU7QUYrVWxCLENHcFJJO0VBQ0UscUJEMURXO0FGZ1ZqQixDR3JSTTtFQUNFLHlCRDNEUztBRmtWakIsQ0dwUkk7RUFDRSxxQkFBQTtBSHNSTixDR3JSTTtFQUNFLHlCRHBFVTtBRjJWbEIsQ0dsUkU7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0FIb1JKLENHblJJO0VBQ0UscURBQUE7QUhxUk4sQ0l2V0E7RUFDQyxnQkFBQTtFQUNBLDZCQUFBO0FKMFdELENJdldFO0VBQ0MsY0ZDYztBRndXakIsQ0l0V0U7RUFDQyxjRlhlO0FGbVhsQixDSXJXRTtFQUNDLGNGWGU7QUZrWGxCLENJcFdFO0VBQ0MsY0ZMYztBRjJXakIsQ0luV0U7RUFDQywwQkFBQTtBSnFXSCxDSWpXQztFQUNDLGlDQUFBO0FKbVdGLENJaldFO0VBQ0MseUJGM0JlO0VFNEJmLGNGaENlO0FGbVlsQixDSWxXRztFQUNDLHlCRjdCYztBRmlZbEIsQ0loV0U7RUFDQyw2QkFBQTtFQUNBLGNGeENlO0FGMFlsQixDSWpXRztFQUNDLHlCRnBDYztBRnVZbEIsQ0kvVkU7RUFDQyx5QkZ2Q2M7RUV3Q2QsY0Y1Q2U7QUY2WWxCLENJOVZFO0VBQ0MseUJGcERlO0VFcURmLGNGakRlO0FGaVpsQixDSS9WRztFQUNDLHlCRnREYztBRnVabEIsQ0k3VkU7RUFDQyx5QkZwRGM7RUVxRGQsY0Z6RGU7QUZ3WmxCLENJOVZHO0VBQ0MseUJGdERhO0FGc1pq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QSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFtbEJILENBaGxCRTtFQUNDLGNBQUE7QUFrbEJIIiwiZmlsZSI6ImNsaWVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnN0cmlwZWQgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGZmZTtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1jbGljay1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTNhZTQ7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzLFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5tdWx0aS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsOm5vdCguY2VsbC1zZWxlY3Rpb24pIC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWw6bm90KC5jZWxsLXNlbGVjdGlvbikgLmRhdGF0YWJsZS1ib2R5LXJvdzpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbC5jZWxsLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktY2VsbDpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZSxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0ZmZlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpob3ZlcixcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzYWU0O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsLmNlbGwtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1jZWxsLmFjdGl2ZTpmb2N1cyxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwuY2VsbC1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LWNlbGwuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MWVmO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLXJvdy1yaWdodCxcbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5kcmFnZ2luZyAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtaGVhZGVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZWU7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q5ZDhkOTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDlkOGQ5OyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWJvZHkgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWQxZjk7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5wcm9ncmVzcy1saW5lYXIgLmNvbnRhaW5lciAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA2Y2M4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7IH1cbiAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgbGkuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDsgfVxuICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCAuZGF0YXRhYmxlLXN1bW1hcnktcm93IC5kYXRhdGFibGUtYm9keS1yb3c6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDsgfVxuICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuZGF0YXRhYmxlLWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J106YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyOyB9XG4gICAgLmRhdGF0YWJsZS1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTsgfVxuICAgIC5kYXRhdGFibGUtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXTphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTsgfSB9XG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtcmlnaHQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtbGVmdD4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi1ib3R0b206NXB4O2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dD5pbnB1dHtjb2xvcjojMDAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3RvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O3BhZGRpbmctbGVmdDozcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntwYWRkaW5nLXJpZ2h0OjNweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcjpob3ZlciAubmctY2xlYXJ7Y29sb3I6I0QwMDIxQn0ubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggNXB4IDAgMH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCAwIDAgNXB4fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7d2lkdGg6MjVweDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcjpob3ZlciAubmctYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjojNjY2fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93e2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAyLjVweH0ubmctZHJvcGRvd24tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KTtsZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3B7Ym90dG9tOjEwMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3AgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtcmlnaHR7bGVmdDoxMDAlO3RvcDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXJpZ2h0IC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbXt0b3A6MTAwJTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZTZlNmU2O21hcmdpbi10b3A6LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnR7bGVmdDotMTAwJTt0b3A6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWxlZnQgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsImh0bWwsXG5ib2R5IHtcblx0c2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmh0bWwsXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuKiB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0Jjp2aXNpdGVkIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxufVxuXG5idXR0b24ge1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRleHRhcmVhIHtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5pIHtcblx0Zm9udC1zdHlsZTogSXRhbGljO1xufVxuXG5iIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXNcIjtcblxuOmhvc3Qge1xuXHQuaGVhZGVyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDhweCAxMDBweDtcblx0XHRiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdGJveC1zaGFkb3c6IDAgMC4xNnJlbSAwICRjb2xvci13aGl0ZS0yMDA7XG5cdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuXG5cdFx0LmhlYWRlcl9fd3JhcHBlciB7XG5cdFx0XHR3aWR0aDogNDAwcHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHR9XG5cblx0XHQuaGVhZGVyX19uYXJyb3cge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cblx0XHQuaGVhZGVyX19saXN0LWRyb3Bkb3duLWFjdGl2ZSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDEzJSwgMTAlKTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0XHRcdGhlaWdodDogNzBweDtcblx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR9XG5cblx0XHQuaGVhZGVyX19sb2dvIHtcblx0XHRcdHdpZHRoOiA3LjI1cmVtO1xuXHRcdFx0aGVpZ2h0OiAyLjI1cmVtO1xuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjRcIikge1xuXHRcdFx0XHR3aWR0aDogOTBweDtcblx0XHRcdFx0aGVpZ2h0OiAyNnB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5oZWFkZXJfX2xpbmtzLWJsb2NrIHtcblx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5oZWFkZXJfX2xpc3Qge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdC5oZWFkZXJfX2xpc3QtaXRlbSB7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMTZweDtcblx0XHRcdFx0Ly9AaW5jbHVkZSBicmVha3BvaW50KFwiNFwiKSB7XG5cdFx0XHRcdC8vXHRtYXJnaW4tcmlnaHQ6IDMwcHg7XG5cdFx0XHRcdC8vfVxuXG5cdFx0XHRcdC5sYWJlbCB7XG5cdFx0XHRcdFx0cGFkZGluZzogMnB4IDZweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2U4MDIwMjtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5oZWFkZXJfX2xpc3QtaXRlbS1saW5rIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwLjEyNXJlbTtcblxuXHRcdFx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGNvbG9yLWJsdWUtNTAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNnB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JjpudGgtY2hpbGQoNSkge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5oZWFkZXJfX2J1dHRvbnMge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdHdpZHRoOiAzN3B4O1xuXHRcdFx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5oZWFkZXJfX2J1dHRvbiB7XG5cdFx0XHRcdHdpZHRoOiAxMzBweDtcblx0XHRcdH1cblxuXHRcdFx0LnVzZXItd3JhcHBlciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGdhcDogMTBweDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cblx0XHRcdFx0LnVzZXItc2tlbGV0b24ge1xuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaGVhZGVyX19idXR0b25zLXByb2ZpbGUge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xuXHRcdFx0XHRcdGdhcDogNXB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDRweCAyNHB4IDRweCAwO1xuXG5cdFx0XHRcdFx0LmhlYWRlcl9fYnV0dG9ucy1wcm9maWxlLXRleHQge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMzNweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogMSAvIDM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmhlYWRlcl9fYnV0dG9ucy1wcm9maWxlLXJvbGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM5ZmE0YmI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnVucmVhZC1tZXNzYWdlcyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNWRmZjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblxuXHRcdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0dGV4dC1zaGFkb3c6IDAuNXB4IDAuNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIyXCIpIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5oZWFkZXJfX2J1dHRvbnMtYWRkLW9mZmVyIHtcblx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0cGFkZGluZzogMC42OHJlbSAxLjVyZW07XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHR9XG5cblx0XHRcdC5oZWFkZXJfX2J1dHRvbnMtbG9nLWluIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdHBhZGRpbmc6IDAuNjhyZW0gMS41cmVtO1xuXG5cdFx0XHRcdC5oZWFkZXJfX2J1dHRvbnMtbG9nLWluLWljb24ge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMC41NnJlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5oZWFkZXJfX2J1dHRvbi1zaWduLXVwIHtcblx0XHRcdFx0cGFkZGluZzogMC42OHJlbSAxLjVyZW07XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cblx0XHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludChcIjNcIikge1xuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLnRyYW5zcGFyZW50IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdH1cblxuXHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCI0XCIpIHtcblx0XHRcdHBhZGRpbmc6IDE1cHggMjBweDtcblx0XHR9XG5cblx0XHQuaGVhZGVyX19idXJnZXIge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdEBpbmNsdWRlIGJyZWFrcG9pbnQoXCIzXCIpIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG5cdC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgMS41JSk7XG5cblx0XHQubmctcGxhY2Vob2xkZXIge1xuXHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdH1cblx0fVxuXG5cdC5zZXJ2aWNlLXNlbGVjdC13cmFwcGVyIHtcblx0XHQubmctdmFsdWUge1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjMDAwMDAwO1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cblx0XHQubmctcGxhY2Vob2xkZXIge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKSA+IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpuZy1kZWVwIHtcbiAgZm9ybSB7XG4gICAgYjJiLW5neC1zZWxlY3Qge1xuICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgbmctc2VsZWN0IHtcbiAgICAgICAgICAmLm5nLXRvdWNoZWQge1xuICAgICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5mb3JtLXN1Ym1pdHRlZCB7XG4gICAgICBiMmItbmd4LXNlbGVjdCB7XG4gICAgICAgICYubmctaW52YWxpZCB7XG4gICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvcm0ge1xuICAgIGIyYi1uZ3gtY291bnRyeS1zZWxlY3Qge1xuICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgbmctc2VsZWN0IHtcbiAgICAgICAgICAmLm5nLXRvdWNoZWQge1xuICAgICAgICAgICAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5mb3JtLXN1Ym1pdHRlZCB7XG4gICAgICBiMmItbmd4LWNvdW50cnktc2VsZWN0IHtcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcbiAgICAgICAgICAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUsXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSxcbi5uZy1zZWxlY3Qtb3BlbmVkIHtcbiAgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogNDlweDtcbiAgfVxuXG4gIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDE1LCAxNSwgMTcsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgJi5iYWNrZ3JvdW5kLWdyYXkge1xuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcmVkLTUwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmJhY2tncm91bmQtd2hpdGUge1xuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIHtcbiAgICAgIC5uZy1vcHRpb24ge1xuICAgICAgICAubmctb3B0aW9uLW1hcmtlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuYmFja2dyb3VuZC10cmFuc3BhcmVudCB7XG4gICAgLm5nLXZhbHVlIHtcbiAgICAgIC5uZy12YWx1ZS1sYWJlbCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAubmctdmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgLm5nLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5uZy1kcm9wZG93bi1wYW5lbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMge1xuICAgICAgLm5nLW9wdGlvbiB7XG4gICAgICAgIC5uZy1vcHRpb24tbWFya2VkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSB7XG4gIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAubmctdmFsdWUtY29udGFpbmVyIHtcbiAgICAgIC5uZy1wbGFjZWhvbGRlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGNvbG9yLWJsYWNrLTkwMDogIzAwMDAwMDtcbiRjb2xvci1ibGFjay04MDA6ICMwZjBmMTE7XG4kY29sb3ItYmxhY2stMTAwOiAjMmUyZTM0O1xuJGNvbG9yLWJsYWNrLTUwOiByZ2JhKDE3NywgMTc3LCAxNzcsIDAuNik7XG5cbiRjb2xvci13aGl0ZS05MDA6ICNmZmZmZmY7XG4kY29sb3Itd2hpdGUtMjAwOiAjZTNlYWYxO1xuJGNvbG9yLXdoaXRlLTEwMDogI2YzZjZmODtcblxuJGNvbG9yLWJsdWUtNTAwOiAjMDA1ZGZmO1xuJGNvbG9yLWJsdWUtMTAwOiAjNTk5NWZlO1xuJGNvbG9yLWJsdWUtNTA6ICNkMmRlZmY7XG5cbiRjb2xvci1ncmF5LTkwMDogIzBmMGYxMTtcbiRjb2xvci1ncmF5LTYwMDogIzIyMjIyNDtcbiRjb2xvci1ncmF5LTUwMDogIzU1NjI3NDtcbiRjb2xvci1ncmF5LTQwMDogIzZjNzA3NztcbiRjb2xvci1ncmF5LTMwMDogI2E3YThhZDtcbiRjb2xvci1ncmF5LTIwMDogIzlmYTRiYjtcbiRjb2xvci1ncmF5LTEwMDogI2YzZjZmODtcblxuJGNvbG9yLXJlZC01MDA6ICNlNjNkM2Q7XG4kY29sb3ItcmVkLTUwOiByZ2JhKDIzMCwgNjEsIDYxLCAwLjA1KTtcbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtYnV0dG9uIHtcbiAgYm9yZGVyOiAwLjE2cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAmLmJhY2tncm91bmQge1xuICAgICYuYmFja2dyb3VuZC1ibGFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgICBjb2xvcjogJGNvbG9yLWdyYXktOTAwO1xuICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDFyZW0gcmdiYSgxMCwgOCwgNTgsIDAuMSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLXJlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzZDNkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDFyZW0gcmdiYSgxMCwgOCwgNTgsIDAuMSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2M2QzZDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLXRyYW5zcGFyZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTkwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmJhY2tncm91bmQtYmx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG4gICAgICBjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYuYmFja2dyb3VuZC1ob3Zlci1ibGFjayB7XG4gICAgICBib3JkZXItY29sb3I6ICNkZmU4ZjU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLm91dGxpbmUge1xuICAgICYub3V0bGluZS1ibGFjayB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibGFjay04MDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTEwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5vdXRsaW5lLXdoaXRlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dGxpbmUtYmx1ZSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1ibHVlLTUwMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xMDA7XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0bGluZS1ncmF5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2RmZThmNTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay01MCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwICFpbXBvcnRhbnQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stNTAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtbGluayB7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG5cdCYudGV4dCB7XG5cdFx0Ji50ZXh0LWJsdWUge1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibHVlLTUwMDtcblx0XHR9XG5cblx0XHQmLnRleHQtYmxhY2sge1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0fVxuXG5cdFx0Ji50ZXh0LXdoaXRlIHtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblxuXHRcdCYudGV4dC1ncmF5IHtcblx0XHRcdGNvbG9yOiAkY29sb3ItZ3JheS01MDA7XG5cdFx0fVxuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHR9XG5cdH1cblxuXHQmLmJhY2tncm91bmQge1xuXHRcdGJvcmRlcjogMC4xNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcblxuXHRcdCYuYmFja2dyb3VuZC13aGl0ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ibGFjay04MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlLTIwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtdHJhbnNwYXJlbnQge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0XHRjb2xvcjogJGNvbG9yLWJsYWNrLTgwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGUtMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1ncmF5IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTUwMDtcblx0XHRcdGNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdH1cblxuXHRcdCYuYmFja2dyb3VuZC1ibGFjayB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2stODAwO1xuXHRcdFx0Y29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsYWNrLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLmJhY2tncm91bmQtYmx1ZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS01MDA7XG5cdFx0XHRjb2xvcjogJGNvbG9yLXdoaXRlLTkwMDtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmx1ZS0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5iYWNrZ3JvdW5kLWxpZ2h0LWJsdWUge1xuXHRcdFx0YmFja2dyb3VuZDogI2VmZjRmYTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdHNwYW4ge1xuXHRcdFx0XHRjb2xvcjogIzAwNWRmZiAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNlNmVkZmE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ji5vdXRsaW5lIHtcblx0XHQmLm91dGxpbmUtd2hpdGUge1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGUtOTAwO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFjay0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LWlucHV0LWxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM5ZmE0YmI7XG5cdG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmIyYi1uZ3gtaW5wdXQge1xuXHRib3JkZXI6IDAuMTZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cdHBhZGRpbmc6IDE0cHggMTZweDtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM1NTYyNzQ7XG5cdCYuYmFja2dyb3VuZCB7XG5cdFx0Ji5iYWNrZ3JvdW5kLWdyYXkge1xuXHRcdFx0Y29sb3I6ICRjb2xvci1ncmF5LTQwMDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcblx0XHR9XG5cdFx0Ji5iYWNrZ3JvdW5kLXdoaXRlIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG5cdFx0fVxuXHR9XG5cdCYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuXHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG5cdH1cbn1cblxuLmZvcm0tc3VibWl0dGVkIHtcblx0LmIyYi1uZ3gtaW5wdXQge1xuXHRcdCYuYmFja2dyb3VuZCB7XG5cdFx0XHQmLm5nLWludmFsaWQge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkLTUwO1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uY29udHJvbC1lcnJvciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiByZ2JhKDEwOCwgMTEyLCAxMTksIDAuNik7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cbiIsIkBpbXBvcnQgXCJwcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9jb2xvcnNcIjtcblxuLmIyYi1uZ3gtaWNvbiB7XG5cdCYuY2lyY2xlIHtcblx0XHRoZWlnaHQ6IDNyZW07XG5cdFx0d2lkdGg6IDNyZW07XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXktMTAwO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG59XG4iLCJAaW1wb3J0IFwicHJvamVjdHMvc2hhcmVkL3NyYy9zdHlsZXMvY29sb3JzXCI7XG5cbi5iMmItbmd4LXRleHRhcmVhLWxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICM5ZmE0YmI7XG5cdG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5iMmItbmd4LXRleHRhcmVhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAjZjNmNmY4O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzU1NjI3NDtcblx0cGFkZGluZzogMTRweCAxNnB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0cmVzaXplOiBub25lO1xuXHQmLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRib3JkZXItY29sb3I6ICRjb2xvci1yZWQtNTAwO1xuXHR9XG4gICYuYmFja2dyb3VuZCB7XG4gICAgJi5iYWNrZ3JvdW5kLWdyYXkge1xuICAgICAgY29sb3I6ICRjb2xvci1ncmF5LTQwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LTEwMDtcbiAgICB9XG4gICAgJi5iYWNrZ3JvdW5kLXdoaXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZS05MDA7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLXN1Ym1pdHRlZCB7XG5cdC5iMmItbmd4LXRleHRhcmVhIHtcblx0XHQmLm5nLWludmFsaWQge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZC01MDtcblx0XHRcdGJvcmRlci1jb2xvcjogJGNvbG9yLXJlZC01MDA7XG5cdFx0fVxuXHR9XG59XG5cbi5jb250cm9sLWVycm9yIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6IHJnYmEoMTA4LCAxMTIsIDExOSwgMC42KTtcblx0bWFyZ2luLXRvcDogNHB4O1xufVxuIiwiQGltcG9ydCBcIi9wcm9qZWN0cy9zaGFyZWQvc3JjL3N0eWxlcy9icmVha3BvaW50c1wiO1xuXG4vLyBzdGVwcGVyXG5AbWl4aW4gc3R5bGVTdGVwTGluZSgkaW5kZXgpIHtcblx0Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcblx0XHQmICsgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZTpudGgtY2hpbGQoI3skaW5kZXh9KSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1REZGO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cblx0XHQmICsgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZTpudGgtY2hpbGQoI3skaW5kZXggKyAyfSkge1xuXHRcdFx0QGluY2x1ZGUgc3RlcE5leHRMaW5lO1xuXHRcdH1cblx0fVxufVxuXG5AbWl4aW4gc3RlcE5leHRMaW5lKCkge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDVkZmYsIHJnYmEoMCwgOTMsIDI1NSwgMCkpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDtcblx0aGVpZ2h0OiA0cHg7XG5cdGJvcmRlcjogbm9uZTtcbn1cblxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuXG5cdC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuXHRcdC5tYXQtc3RlcC1oZWFkZXIge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdFx0Z2FwOiA3cHg7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXG5cdFx0XHQubWF0LXN0ZXAtbGFiZWwge1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRcdFx0XHRjb2xvcjogI0M0QzRDNDtcblx0XHRcdFx0QGluY2x1ZGUgYnJlYWtwb2ludCgnMScpIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLXNlbGVjdGVkIHtcblx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQubWF0LXN0ZXAtaWNvbiB7XG5cdFx0XHRcdHdpZHRoOiAxMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDEwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XG5cdFx0XHRcdG1hcmdpbjogMDtcblxuXHRcdFx0XHQmLXNlbGVjdGVkLCAmLXN0YXRlLWVkaXQge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDVERkY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdH1cblxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI0Q5RDlEOTtcblxuXHRcdFx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRcdFx0bWFyZ2luOiAwIC03JSAwIC0xMCU7XG5cdFx0XHRcdEBpbmNsdWRlIHN0ZXBOZXh0TGluZTtcblx0XHRcdH1cblxuXHRcdFx0JjpsYXN0LW9mLXR5cGUge1xuXHRcdFx0XHRtYXJnaW46IDAgLTIzJSAwIC03JTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0b3ZlcmZsb3c6IGluaXRpYWw7XG5cdH1cblxuXHQuY2RrLXByb2dyYW0tZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuLmxhc3QtZWRpdGVkLXN0ZXAtMSB7XG5cdEBpbmNsdWRlIHN0eWxlU3RlcExpbmUoMik7XG59XG5cbi5sYXN0LWVkaXRlZC1zdGVwLTIge1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDIpO1xuXHRAaW5jbHVkZSBzdHlsZVN0ZXBMaW5lKDQpO1xufVxuIiwiJGJyZWFrcG9pbnQtMTogMzZlbTtcbiRicmVha3BvaW50LTI6IDQ4ZW07XG4kYnJlYWtwb2ludC0zOiA1NS41ZW07XG4kYnJlYWtwb2ludC00OiA3NWVtO1xuJGJyZWFrcG9pbnQtNTogODcuNWVtO1xuXG4kYnJlYWtwb2ludHM6IChcblx0XCIxXCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTEsXG5cdCksXG5cdFwiMlwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC0yLFxuXHQpLFxuXHRcIjNcIjogKFxuXHRcdG1heC13aWR0aDogJGJyZWFrcG9pbnQtMyxcblx0KSxcblx0XCI0XCI6IChcblx0XHRtYXgtd2lkdGg6ICRicmVha3BvaW50LTQsXG5cdCksXG5cdFwiNVwiOiAoXG5cdFx0bWF4LXdpZHRoOiAkYnJlYWtwb2ludC01LFxuXHQpLFxuXHRcIjZcIjogKFxuXHRcdG1pbi13aWR0aDogJGJyZWFrcG9pbnQtNSxcblx0KSxcbikgIWRlZmF1bHQ7XG5cbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XG5cdEBtZWRpYSAje2luc3BlY3QobWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSl9IHtcblx0XHRAY29udGVudDtcblx0fVxufVxuIl19 */"],
  changeDetection: 0
});
ClientHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.UntilDestroy)()], ClientHeaderComponent);


/***/ }),

/***/ 82021:
/*!***************************************************************************!*\
  !*** ./src/app/client/pages/client-profile/services/user/user.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81203);
/* harmony import */ var _core_helpers_constant_role_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/helpers/constant/role-ids */ 61486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/services/api/api.service */ 96931);
/* harmony import */ var _auth_state_auth_auth_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../auth/state/auth/auth.query */ 35703);
/* harmony import */ var _auth_state_auth_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../auth/state/auth/auth.store */ 72024);







class UserService {
    constructor(_apiService, _authQuery, _authStore) {
        this._apiService = _apiService;
        this._authQuery = _authQuery;
        this._authStore = _authStore;
    }
    isAuth() {
        return !!localStorage.getItem("token");
    }
    getUsers(offset, limit = 10, filters) {
        const filtersUrl = filters
            ? Object.entries(filters).reduce((pre, [key, val]) => {
                const parsedValue = val && !Array.isArray(val) ? val.replace("&", "%26") : val;
                return pre + (val ? `&${key}=${parsedValue}` : "");
            }, "")
            : "";
        return this._apiService.get(`users?offset=${offset * limit}&limit=10${filtersUrl}`);
    }
    getUsersCsv(offset, limit = 10, filters) {
        const httpOptions = {
            responseType: "blob",
        };
        const filtersUrl = filters
            ? Object.entries(filters).reduce((pre, [key, val]) => {
                return pre + (val ? `&${key}=${val}` : "");
            }, "")
            : "";
        // return this._apiService.get(`users-csv?offset=${offset * limit}&limit=${limit}${filtersUrl}`, httpOptions);
        return this._apiService.get(`users-csv?${filtersUrl}`, httpOptions);
    }
    getToken$() {
        return this._authQuery.selectToken$;
    }
    getUser$() {
        return this._authQuery.selectUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((user) => !!user));
    }
    getToken() {
        return this._authStore.getValue().token;
    }
    getUserById(id) {
        return this._apiService.get(`user/${id}`);
    }
    getUser() {
        return this._authQuery.getValue().user;
    }
    updateUserById(id, settings, options = {}) {
        const url = `user/${id}/update`;
        return this._apiService.put(url, settings, options);
    }
    updateUserQuotes(userId, rfqNumb) {
        return this._apiService.put("user/update-user-rfq-quotes", { userId, rfqNumb });
    }
    updateUserSettings(settings) {
        const url = "profile/update";
        return this._apiService.put(url, settings);
    }
    updateUserEmail(settings) {
        const url = "auth/changeRegisterMail";
        return this._apiService.post(url, settings);
    }
    updatePassword(password) {
        const url = "password-reset";
        return this._apiService.put(url, password);
    }
    deleteUserById(id) {
        return this._apiService.delete(`user/${id}/delete`);
    }
    deleteUser(body) {
        return this._apiService.delete(`user/deleteAccount`, body);
    }
    addUserStatistics({ userId, refId, email, typeRegistration, }) {
        return this._apiService.post("statistics/add-new-entry", { userId, refId, email, typeRegistration });
    }
    getPublicUserInfo(userId) {
        return this._apiService.get(`users/info?usersId=[${userId}]`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((data) => !!data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => data.users[0]));
    }
    getTotalUsersAmount() {
        return this._apiService.get("users/count").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((data) => !!data), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.share)());
    }
    get isUserAbleToUseMarketplace() {
        return (this.getUser().role._id === _core_helpers_constant_role_ids__WEBPACK_IMPORTED_MODULE_0__.ADMIN_ID ||
            this.getUser().role._id === _core_helpers_constant_role_ids__WEBPACK_IMPORTED_MODULE_0__.MANUFACTURER_ID ||
            this.getUser().role._id === _core_helpers_constant_role_ids__WEBPACK_IMPORTED_MODULE_0__.TRADER_ID);
    }
    changeRole(token, newRoleId, newRootRoleId) {
        return this._apiService.post("auth/changeRole", {}, { params: { token, newRoleId, newRootRoleId } });
    }
    updateUserRoleById(userId, newRoleId) {
        return this._apiService.put("user/change-user-role", { userId, newRoleId });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_state_auth_auth_query__WEBPACK_IMPORTED_MODULE_2__.AuthQuery), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_state_auth_auth_store__WEBPACK_IMPORTED_MODULE_3__.AuthStore)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 89395:
/*!**************************************************************!*\
  !*** ./src/app/client/services/platform/platform.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlatformService": () => (/* binding */ PlatformService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);



class PlatformService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    get isBrowser() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId);
    }
    get isServer() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)(this.platformId);
    }
}
PlatformService.ɵfac = function PlatformService_Factory(t) { return new (t || PlatformService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
PlatformService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlatformService, factory: PlatformService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 42823:
/*!**********************************************************!*\
  !*** ./src/app/client/services/socket/socket.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var _Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 63351);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/client-profile/services/user/user.service */ 82021);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/api.service */ 96931);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);







class SocketService {
  constructor(_usersService, _apiService, _router) {
    this._usersService = _usersService;
    this._apiService = _apiService;
    this._router = _router;
    this._newMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._newMessage$ = this._newMessageSubject.asObservable();
    this._statusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._status$ = this._statusSubject.asObservable();
    this._unreadMessagesCountBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this._unreadOfferMessagesCountBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this._unreadRfqMessagesCountBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this._unreadMarketplaceMessagesCountBehaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this._unreadMessagesCount$ = this._unreadMessagesCountBehaviourSubject.asObservable();
    this._unreadOfferMessagesCount$ = this._unreadOfferMessagesCountBehaviourSubject.asObservable();
    this._unreadRfqMessagesCount$ = this._unreadRfqMessagesCountBehaviourSubject.asObservable();
    this._unreadMarketplaceMessagesCount$ = this._unreadMarketplaceMessagesCountBehaviourSubject.asObservable();
    this.openConnection();
    this.getUnreadMessagesCount();
    this.getUnreadOfferMessagesCount();
    this.getUnreadRfqMessagesCount();
    this.getUnreadMarketplaceMessagesCount();
  }

  getUnreadMessagesCount() {
    var _this = this;

    this._usersService.getToken$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(token => !!token)).subscribe( /*#__PURE__*/(0,_Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          unreadMessagesCount
        } = yield _this._apiService.get("my/unreadMessagesCount").toPromise();

        _this._unreadMessagesCountBehaviourSubject.next(unreadMessagesCount);
      } catch (_a) {}
    }));
  }

  getUnreadOfferMessagesCount() {
    var _this2 = this;

    this._usersService.getToken$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(token => !!token)).subscribe( /*#__PURE__*/(0,_Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          unreadMessagesCount
        } = yield _this2._apiService.get("my/unreadOfferMessagesCount").toPromise();

        _this2._unreadOfferMessagesCountBehaviourSubject.next(unreadMessagesCount);
      } catch (_a) {}
    }));
  }

  getUnreadRfqMessagesCount() {
    var _this3 = this;

    this._usersService.getToken$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(token => !!token)).subscribe( /*#__PURE__*/(0,_Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          unreadMessagesCount
        } = yield _this3._apiService.get("my/unreadRfqMessagesCount").toPromise();

        _this3._unreadRfqMessagesCountBehaviourSubject.next(unreadMessagesCount);
      } catch (_a) {}
    }));
  }

  getUnreadMarketplaceMessagesCount() {
    this._usersService.getToken$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(token => !!token), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._apiService.get("my/unreadUsersMessagesCount"), this._apiService.get("my/unreadProductMessagesCount")])).subscribe(data => {
      this._unreadMarketplaceMessagesCountBehaviourSubject.next(data[1].unreadMessagesCount + data[2].unreadMessagesCount);
    });
  }

  openConnection() {
    this._usersService.getToken$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(token => !!token)).subscribe(token => {
      if (this._socket) {
        this._socket.disconnect();
      } // this._socket = io(environment.apiUrl, {
      // 	path: "/app",
      // 	auth: {
      // 		token,
      // 	},
      // });
      // this.subscribeOnNewMessage();
      // this.subscribeOnStatusChange();

    });
  }

  subscribeOnNewMessage() {
    return this._socket.on("new_message", newMessage => {
      if (this._router.url.includes(newMessage.room)) {
        return;
      }

      switch (newMessage.typeRoom) {
        case "rfq":
          this._unreadRfqMessagesCountBehaviourSubject.next(this._unreadRfqMessagesCountBehaviourSubject.getValue() + 1);

          break;

        case "product":
          this._unreadMarketplaceMessagesCountBehaviourSubject.next(this._unreadMarketplaceMessagesCountBehaviourSubject.getValue() + 1);

          break;

        case "offer":
          this._unreadOfferMessagesCountBehaviourSubject.next(this._unreadOfferMessagesCountBehaviourSubject.getValue() + 1);

          break;
      }

      this._newMessageSubject.next(newMessage);

      const unreadMessagesCount = this._unreadMessagesCountBehaviourSubject.getValue();

      this._unreadMessagesCountBehaviourSubject.next(unreadMessagesCount + 1);
    });
  }

  get unreadMessagesCount$() {
    return this._unreadMessagesCount$;
  }

  get unreadOfferMessagesCount$() {
    return this._unreadOfferMessagesCount$;
  }

  get unreadRfqMessagesCount$() {
    return this._unreadRfqMessagesCount$;
  }

  get unreadMarketplaceMessagesCount$() {
    return this._unreadMarketplaceMessagesCount$;
  }

  readMessages(count) {
    const newCount = this._unreadMessagesCountBehaviourSubject.getValue() - count;

    this._unreadMessagesCountBehaviourSubject.next(newCount);
  }

  get newMessage$() {
    return this._newMessage$;
  }

  subscribeOnStatusChange() {
    this._socket.on("online", user => {
      this._statusSubject.next({
        online: true,
        user
      });
    });

    this._socket.on("offline", user => {
      this._statusSubject.next({
        online: false,
        user
      });
    });
  }

  get status$() {
    return this._status$;
  }

}

SocketService.ɵfac = function SocketService_Factory(t) {
  return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};

SocketService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: SocketService,
  factory: SocketService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 64536:
/*!********************************************************************!*\
  !*** ./src/app/client/shared/animations/slide-in-out.animation.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideInOutAnimation": () => (/* binding */ SlideInOutAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

const SlideInOutAnimation = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("slideInOut", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)("in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            right: "0px",
            visibility: "visible",
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)("out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            right: "-100vw",
            visibility: "hidden",
        })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("in => out", [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("700ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    right: "-100vw",
                    display: "none",
                })),
            ]),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("out => in", [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("1ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    visibility: "visible",
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("400ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                    right: "0px",
                })),
            ]),
        ]),
    ]),
];


/***/ }),

/***/ 30821:
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreRoutingModule": () => (/* binding */ CoreRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_layout_core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/layout/core.component */ 63443);
/* harmony import */ var _guards_redirect_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/redirect.guard */ 20588);
/* harmony import */ var _auth_guards_role_role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/guards/role/role.guard */ 75429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "ru",
        component: _core_layout_core_component__WEBPACK_IMPORTED_MODULE_0__.CoreComponent,
        // canActivateChild: [MetaGuard],
        data: {
            meta: {
                hreflang: "ru",
            },
        },
        children: [
            {
                path: "auth",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../auth/auth.module */ 71674)).then((m) => m.AuthModule),
            },
            {
                path: "admin",
                canActivate: [_auth_guards_role_role_guard__WEBPACK_IMPORTED_MODULE_2__.RoleGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_country-list_country-list_js"), __webpack_require__.e("default-projects_ngx-country-select_src_lib_layout_ngx-country-select_component_ts"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_portal_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-src_app_client_pages_client-offer_components_client-offer-document_client-offer-docum-149a4f"), __webpack_require__.e("default-src_app_client_services_categories_categories_service_ts-src_app_client_services_unit-673e48"), __webpack_require__.e("default-src_app_client_pages_client-tradebid_client-tradebid-add-rfq_client-trade-bid-add-rfq-0b0143"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/admin.module */ 77095)).then((m) => m.AdminModule),
            },
            {
                path: "",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_ngx-select_src_lib_ngx-select_module_ts-src_app_client_pages_client-marketpl-341267"), __webpack_require__.e("common"), __webpack_require__.e("src_app_client_client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../client/client.module */ 27808)).then((m) => m.ClientModule),
            }
        ],
    },
    {
        path: "",
        component: _core_layout_core_component__WEBPACK_IMPORTED_MODULE_0__.CoreComponent,
        canActivate: [_guards_redirect_guard__WEBPACK_IMPORTED_MODULE_1__.RedirectGuard],
        data: {
            meta: {
                hreflang: "en",
            },
        },
        children: [
            {
                path: "auth",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../auth/auth.module */ 71674)).then((m) => m.AuthModule),
            },
            {
                path: "admin",
                canActivate: [_auth_guards_role_role_guard__WEBPACK_IMPORTED_MODULE_2__.RoleGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_country-list_country-list_js"), __webpack_require__.e("default-projects_ngx-country-select_src_lib_layout_ngx-country-select_component_ts"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_portal_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-src_app_client_pages_client-offer_components_client-offer-document_client-offer-docum-149a4f"), __webpack_require__.e("default-src_app_client_services_categories_categories_service_ts-src_app_client_services_unit-673e48"), __webpack_require__.e("default-src_app_client_pages_client-tradebid_client-tradebid-add-rfq_client-trade-bid-add-rfq-0b0143"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/admin.module */ 77095)).then((m) => m.AdminModule),
            },
            {
                path: "",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_ngx-select_src_lib_ngx-select_module_ts-src_app_client_pages_client-marketpl-341267"), __webpack_require__.e("common"), __webpack_require__.e("src_app_client_client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../client/client.module */ 27808)).then((m) => m.ClientModule),
            }
        ],
    }
];
class CoreRoutingModule {
}
CoreRoutingModule.ɵfac = function CoreRoutingModule_Factory(t) { return new (t || CoreRoutingModule)(); };
CoreRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreRoutingModule });
CoreRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
            scrollPositionRestoration: "top",
            initialNavigation: 'enabledBlocking'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/core.component */ 63443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-routing.module */ 30821);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 62916);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 49837);
/* harmony import */ var _client_components_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/client-header/client-header.component */ 74086);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-link */ 16385);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _auth_interceptors_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/interceptors/auth/auth.interceptor */ 81204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-cookieconsent */ 32346);
/* harmony import */ var _b2b_ngx_treeview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-treeview */ 37891);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _projects_ngx_treeview_src_lib_treeview_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../projects/ngx-treeview/src/lib/treeview.module */ 34253);























const cookieConfig = {
    cookie: {
        domain: "b2b.discount",
    },
    position: "bottom-right",
    theme: "classic",
    palette: {
        popup: {
            background: "#ffffff",
            text: "#556274",
            link: "#005DFF",
        },
        button: {
            background: "#0F0F11",
            text: "#ffffff",
            border: "transparent",
        },
    },
    type: "opt-out",
    content: {
        message: 'We use cookies, which are small text files, to improve your experience on our website and to show you personalised content. By clicking "Allow cookies", you accept the use of cookies',
        dismiss: "Allow all",
        deny: "Decline",
        link: "About cookies",
        href: "https://b2b.discount/cookie-policy",
        policy: "Cookie Policy",
    },
};
class CoreModule {
    constructor() { }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
            useClass: _auth_interceptors_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
            multi: true,
        }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _core_routing_module__WEBPACK_IMPORTED_MODULE_2__.CoreRoutingModule,
        ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__.TabsModule.forRoot(),
        ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__.CarouselModule.forRoot(),
        _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_12__.B2bNgxLinkModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_13__.B2bNgxIconModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_14__.B2bNgxButtonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_15__.B2bNgxImageModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
        ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_18__.NgcCookieConsentModule.forRoot(cookieConfig),
        _b2b_ngx_treeview__WEBPACK_IMPORTED_MODULE_5__.TreeviewModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _layout_core_component__WEBPACK_IMPORTED_MODULE_1__.CoreComponent, _client_components_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_3__.ClientHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _core_routing_module__WEBPACK_IMPORTED_MODULE_2__.CoreRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterOutlet, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__.TabsModule, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_12__.B2bNgxLinkModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_13__.B2bNgxIconModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_14__.B2bNgxButtonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_15__.B2bNgxImageModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_18__.NgcCookieConsentModule, _projects_ngx_treeview_src_lib_treeview_module__WEBPACK_IMPORTED_MODULE_6__.TreeviewModule], exports: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] }); })();


/***/ }),

/***/ 20588:
/*!***********************************************!*\
  !*** ./src/app/core/guards/redirect.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectGuard": () => (/* binding */ RedirectGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);



class RedirectGuard {
    constructor(_router) {
        this._router = _router;
    }
    canActivate() {
        if (window.location.href.includes("discount.")) {
            this._router.navigateByUrl("/");
            return true;
        }
        return true;
    }
}
RedirectGuard.ɵfac = function RedirectGuard_Factory(t) { return new (t || RedirectGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
RedirectGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RedirectGuard, factory: RedirectGuard.ɵfac, providedIn: "root" });


/***/ }),

/***/ 61486:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/constant/role-ids.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADMIN_ID": () => (/* binding */ ADMIN_ID),
/* harmony export */   "BROKER_ID": () => (/* binding */ BROKER_ID),
/* harmony export */   "LOGISTIC_ID": () => (/* binding */ LOGISTIC_ID),
/* harmony export */   "MANUFACTURER_ID": () => (/* binding */ MANUFACTURER_ID),
/* harmony export */   "TRADER_ID": () => (/* binding */ TRADER_ID)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);

const ADMIN_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl === "https://api-dev.b2b.discount/" ? "60a784830a04b16c574e8142" : "60954d2c0f95f5540fcb190e";
const LOGISTIC_ID = "60a784830a04b16c574e8141";
const BROKER_ID = "6302cbc3b4cdce1a8982ffc3";
const MANUFACTURER_ID = "6302cbfbb4cdce1a8982ffc4";
const TRADER_ID = "60a784830a04b16c574e813f";


/***/ }),

/***/ 63443:
/*!***********************************************!*\
  !*** ./src/app/core/layout/core.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreComponent": () => (/* binding */ CoreComponent)
/* harmony export */ });
/* harmony import */ var _Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _client_shared_animations_slide_in_out_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/shared/animations/slide-in-out.animation */ 64536);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/services/socket/socket.service */ 42823);
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/services/auth/auth.service */ 24159);
/* harmony import */ var _client_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client/pages/client-profile/services/user/user.service */ 82021);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookieconsent */ 32346);
/* harmony import */ var _client_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/services/platform/platform.service */ 89395);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../projects/ngx-link/src/lib/directive/ngx-link.directive */ 66612);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _client_components_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/components/client-header/client-header.component */ 74086);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 1468);
























const _c0 = ["backdrop"];

function CoreComponent_b2b_client_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b2b-client-header", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("burgerClicked", function CoreComponent_b2b_client_header_2_Template_b2b_client_header_burgerClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.toggleShowPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.options)("user", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r0.user$));
  }
}

function CoreComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26)(1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const user_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r15.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r15.email);
  }
}

const _c1 = function (a0) {
  return {
    "background-color": a0
  };
};

function CoreComponent_ng_container_11_li_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, option_r16.labelBackground));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r16.label, " ");
  }
}

function CoreComponent_ng_container_11_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ng_container_11_li_4_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const option_r16 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.toggleShowPopUp(option_r16.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CoreComponent_ng_container_11_li_4_div_4_Template, 2, 4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, option_r16.text));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r16.label);
  }
}

function CoreComponent_ng_container_11_li_11_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 20);
  }

  if (rf & 2) {
    const option_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", option_r21.icon);
  }
}

function CoreComponent_ng_container_11_li_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}

const _c2 = function () {
  return {
    exact: true
  };
};

const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};

function CoreComponent_ng_container_11_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreComponent_ng_container_11_li_11_img_1_Template, 1, 1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ng_container_11_li_11_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.toggleShowPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CoreComponent_ng_container_11_li_11_ng_container_3_Template, 1, 0, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r21.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", option_r21.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c3, option_r21));
  }
}

function CoreComponent_ng_container_11_li_18_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}

function CoreComponent_ng_container_11_li_18_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ng_container_11_li_18_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.toggleShowPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreComponent_ng_container_11_li_18_a_2_ng_container_1_Template, 1, 0, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", option_r27.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c3, option_r27));
  }
}

function CoreComponent_ng_container_11_li_18_button_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}

function CoreComponent_ng_container_11_li_18_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ng_container_11_li_18_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37);
      const option_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](option_r27.onClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreComponent_ng_container_11_li_18_button_3_ng_container_1_Template, 1, 0, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, option_r27));
  }
}

function CoreComponent_ng_container_11_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CoreComponent_ng_container_11_li_18_a_2_Template, 2, 5, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CoreComponent_ng_container_11_li_18_button_3_Template, 2, 4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", option_r27.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", option_r27.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r27.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r27.onClick);
  }
}

function CoreComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreComponent_ng_container_11_div_1_Template, 7, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CoreComponent_ng_container_11_li_4_Template, 5, 4, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul", 18)(6, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ng_container_11_Template_li_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r39.toggleShowPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 21)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CoreComponent_ng_container_11_li_11_Template, 4, 8, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ul", 23)(13, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ng_container_11_Template_li_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r41.toggleShowPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 21)(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Your workspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, CoreComponent_ng_container_11_li_18_Template, 4, 5, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 6, ctx_r2.user$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.mobileLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "sidenav-man-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.sidenavAccountOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "desktop");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.sidenavWorkspaceOptions);
  }
}

function CoreComponent_ng_template_13_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const unreadMessagesCount_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](unreadMessagesCount_r46);
  }
}

function CoreComponent_ng_template_13_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreComponent_ng_template_13_ng_container_3_span_1_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const unreadMessagesCount_r46 = ctx.ngIf;
    const option_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r42.label === "Unclaimed cargo" && unreadMessagesCount_r46 > 0);
  }
}

function CoreComponent_ng_template_13_ng_container_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const unreadMessagesCount_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](unreadMessagesCount_r50);
  }
}

function CoreComponent_ng_template_13_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreComponent_ng_template_13_ng_container_5_span_1_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const unreadMessagesCount_r50 = ctx.ngIf;
    const option_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r42.label === "TradeBid" && unreadMessagesCount_r50 > 0);
  }
}

function CoreComponent_ng_template_13_ng_container_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const unreadMessagesCount_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](unreadMessagesCount_r54);
  }
}

function CoreComponent_ng_template_13_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreComponent_ng_template_13_ng_container_7_span_1_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const unreadMessagesCount_r54 = ctx.ngIf;
    const option_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r42.label === "B2B Market" && unreadMessagesCount_r54 > 0);
  }
}

function CoreComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CoreComponent_ng_template_13_ng_container_3_Template, 2, 1, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CoreComponent_ng_template_13_ng_container_5_Template, 2, 1, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CoreComponent_ng_template_13_ng_container_7_Template, 2, 1, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
  }

  if (rf & 2) {
    const option_r42 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, option_r42.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 6, ctx_r4.unreadOfferMessagesCount$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 8, ctx_r4.unreadRfqMessagesCount$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 10, ctx_r4.unreadMarketplaceMessagesCount$));
  }
}

function CoreComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 47)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ng_template_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r58.toggleShowPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ng_template_15_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r60.toggleShowPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, ctx_r6.b2bNgxLinkService.getLink("/auth/log-in")))("theme", ctx_r6.b2bNgxLinkThemeEnum.BACKGROUND_TRANSPARENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 6, ctx_r6.b2bNgxLinkService.getLink("/auth/register-credentials")))("theme", ctx_r6.b2bNgxLinkThemeEnum.BACKGROUND_BLACK);
  }
}

function CoreComponent_ul_17_li_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, option_r62.labelBackground));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r62.label, " ");
  }
}

function CoreComponent_ul_17_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ul_17_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66);
      const option_r62 = restoredCtx.$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r65.openInDevelopmentPopUp(option_r62));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_ul_17_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r67.toggleShowPopUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CoreComponent_ul_17_li_1_div_4_Template, 2, 4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", option_r62.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, option_r62.text));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", option_r62.label);
  }
}

function CoreComponent_ul_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreComponent_ul_17_li_1_Template, 5, 5, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.mobileLinks);
  }
}

const _c4 = function (a0) {
  return {
    "hidden-header": a0
  };
};

let CoreComponent = class CoreComponent {
  constructor(_router, _activatedRoute, socketService, authService, userService, hotToastService, b2bNgxLinkService, ccService, platformService) {
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this.socketService = socketService;
    this.authService = authService;
    this.userService = userService;
    this.hotToastService = hotToastService;
    this.b2bNgxLinkService = b2bNgxLinkService;
    this.ccService = ccService;
    this.platformService = platformService;
    this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_8__.B2bNgxLinkThemeEnum;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_9__.B2bNgxButtonThemeEnum;
    this.isMobileView = false;
    this.animationState = "out";
    this.initSession();
    this.headerLinks = this.getHeaderLinks();
    this.options = this.getOptions();
    this.socialMedias = this.getSocialMedias();
    this.user$ = this.authService.user$;
    this.sidenavOptions = this.getSidenavOptions();
    this.mobileLinks = this.getMobileLinks();
    this.sidenavAccountOptions = this.getAccountOptions();
    this.sidenavWorkspaceOptions = this.getWorkspaceOptions();
  }

  ngOnInit() {
    this.userService.getUser$().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(user => !!user)).subscribe(user => {
      if (user.socialAuth) {
        this.ccService.destroy();
      }
    });
    const isContactUsParamExist = this._activatedRoute.snapshot.queryParams["contact-us"];
    isContactUsParamExist && this.openContactUsModal();

    if (this.platformService.isServer) {
      return;
    }

    this.isMobileView = 888 > innerWidth;
  }

  toggleShowPopUp(link) {
    if (link) this._router.navigate([link]);
    this.animationState = this.animationState === "in" ? "out" : "in";
  }

  openInDevelopmentPopUp(option) {
    if (option === null || option === void 0 ? void 0 : option.disabled) {
      this.hotToastService.show('Thank you for your interest, but this feature is under development.');
    }
  }

  ngAfterViewInit() {// 	this._scriptsService.loadScripts();
  }

  get unreadMarketplaceMessagesCount$() {
    return this.socketService.unreadMarketplaceMessagesCount$;
  }

  get unreadOfferMessagesCount$() {
    return this.socketService.unreadOfferMessagesCount$;
  }

  get unreadRfqMessagesCount$() {
    return this.socketService.unreadRfqMessagesCount$;
  }

  openContactUsModal() {// this._ngxSmartModalService.create("createContactModal", ClientContactUsModalComponent).open();
  }

  initSession() {
    const isSessionExpired = new Date().getTime() >= (Number(localStorage.getItem("session")) || 0);

    if (isSessionExpired) {
      const date = new Date();
      date.setMinutes(date.getMinutes() + 30);

      this._activatedRoute.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(queryParams => {
        if (queryParams.params["contact-us"]) {
          const availableParams = ["facebook", "accounts.google.com", "lm.facebook.com", "mgid.com", "l.facebook.com", "instagram.com", "google", "m.facebook.com", "linkedin.com"];
          const removedContactUs = Object.keys(queryParams.params).reduce((acc, key) => {
            const isAvailableKey = availableParams.includes(key);

            if (isAvailableKey) {
              acc[key] = queryParams.params[key];
            }

            return acc;
          }, {});
          queryParams.params = { ...removedContactUs
          };
        }

        return queryParams;
      })).subscribe(params => {
        const source = params.keys.length > 0 ? params.keys.map(key => `${key}=${params.get(key)}`).join("&") : "google.organic";
        localStorage.setItem("session", date.getTime().toString());
        localStorage.setItem("source", source);
      });
    }
  }

  get displayHeader() {
    return !this._router.url.includes("admin");
  }

  get isAuth() {
    return this._router.url.includes("auth");
  }

  logOut() {
    var _this = this;

    return (0,_Users_denissuhomlin_Desktop_repos_fe_b2bdiscount_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.authService.logOut();

      yield _this._router.navigateByUrl("");
    })();
  }

  onActivate() {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;

      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
  }

  getSidenavOptions() {
    return [{
      label: "SIDENAV.CHATS",
      link: "/profile/my-chats",
      icon: "chat"
    }, {
      label: "SIDENAV.MY_OFFERS",
      link: "/profile/my-offers",
      icon: "price-tag"
    }, {
      label: "SIDENAV.SAVE",
      link: "/profile/saved-offers",
      icon: "star"
    }, {
      label: "SIDENAV.TRADE_BID",
      link: "/profile/tradebid",
      icon: "tradebid"
    }, {
      label: "",
      link: "",
      icon: ""
    }, {
      label: "SIDENAV.MY_SETTINGS",
      link: "/profile/settings",
      icon: "user-2"
    } // {
    // 	label: "SIDENAV.PRICING",
    // 	icon: "card",
    // 	link: "/pricing",
    // },
    //,
    ];
  }

  getSocialMedias() {
    return [{
      icon: "facebook",
      href: "https://www.facebook.com/"
    }, {
      icon: "twitter",
      href: "https://twitter.com/"
    }, {
      icon: "linkedin",
      href: "https://www.linkedin.com/"
    }, {
      icon: "youtube",
      href: "https://www.youtube.com/"
    }];
  }

  getMobileLinks() {
    return [{
      text: "HEADER.MARKET",
      link: "/b2bmarket",
      label: 'new',
      labelBackground: '#e80202'
    }, {
      text: "HEADER.UNCLAIMED_CARGO",
      link: "/latest-offers",
      labelBackground: '#005dff'
    }, // {
    //   text: "HEADER.CALCULATE_LOGISTICS",
    //   link: "/",
    //   disabled: true,
    // },
    {
      text: "HEADER.TRADE_BID",
      link: "/tradebid"
    }, {
      text: "HEADER.BLOG",
      link: "/blog"
    }, {
      text: "HEADER.ABOUT_US",
      link: "/about-us"
    } // {
    // 	label: "HEADER.HOT_IT_WORKS",
    // 	link: "/how-it-works",
    // },
    // {
    // 	label: "HEADER.TRADE_WIKI",
    // 	link: "/trade-wiki",
    // },
    ];
  }

  getOptions() {
    return [{
      label: "HEADER.MARKET",
      link: "/b2bmarket",
      isNew: true
    }, {
      label: "HEADER.UNCLAIMED_CARGO",
      link: "/latest-offers"
    }, // {
    //   label: "HEADER.CALCULATE_LOGISTICS",
    //   link: '',
    //   disabled: true
    // },
    {
      label: "HEADER.TRADE_BID",
      link: "/tradebid"
    }, {
      label: "HEADER.BLOG",
      link: "/blog"
    }, {
      label: "HEADER.ABOUT_US",
      link: "/about-us"
    } // {
    // 	label: "HEADER.HOT_IT_WORKS",
    // 	link: "/how-it-works",
    // },
    ]; // {
    // 	label: "HEADER.SERVICES",
    // 	link: "",
    // },
    // {
    // 	label: "HEADER.TRADE_WIKI",
    // 	link: "/trade-wiki",
    // },
    // {
    // 	label: "HEADER.LEGAL_HELP",
    // 	link: "/legal-help",
    // },
    // {
    // 	label: "HEADER.PRICING",
    // 	link: "/pricing",
    // }
  }

  getHeaderLinks() {
    return [{
      label: "Trade Bid",
      link: "/tradebid"
    } // {
    // 	label: "Trade Wiki",
    // 	link: "/trade-wiki",
    // },
    // {
    // 	label: "Legal Help",
    // 	link: "/legal-help",
    // }
    ];
  }

  getAccountOptions() {
    return [{
      label: "Settings",
      icon: "sidenav-line",
      link: "/profile/your-account/settings"
    }, {
      label: "Company information",
      icon: "sidenav-line",
      link: "/profile/your-account/company-information"
    }, {
      label: "",
      icon: "",
      link: ""
    }];
  }

  getWorkspaceOptions() {
    return [{
      label: "B2B Market",
      link: "/profile/your-workspace/b2bmarket",
      icon: "sidenav-line"
    }, {
      label: "Unclaimed cargo",
      link: "/profile/your-workspace/unclaimed-cargo",
      icon: "sidenav-line"
    }, {
      label: "TradeBid",
      link: "/profile/your-workspace/tradebid",
      icon: "sidenav-line"
    }, {
      label: "SIDENAV.LOG_OUT",
      onClick: () => this.logOut(),
      icon: "log-out"
    }];
  }

};

CoreComponent.ɵfac = function CoreComponent_Factory(t) {
  return new (t || CoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_client_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_client_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_13__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_14__.B2bNgxLinkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_15__.NgcCookieConsentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_client_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_5__.PlatformService));
};

CoreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CoreComponent,
  selectors: [["b2b-core"]],
  viewQuery: function CoreComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.backdrop = _t.first);
    }
  },
  decls: 20,
  vars: 12,
  consts: [[1, "header-wrapper", 3, "ngClass"], [3, "options", "user", "burgerClicked", 4, "ngIf"], [1, "overlay-container"], [1, "backdrop"], ["backdrop", ""], [1, "content"], [1, "nav__header"], [3, "click"], ["b2bNgxIcon", "", "name", "close"], [1, "sidenav"], [4, "ngIf", "ngIfElse"], ["content", ""], ["withoutUser", ""], ["class", "nav-list", 4, "ngIf"], [3, "options", "user", "burgerClicked"], ["class", "sidenav-header", 4, "ngIf"], [1, "nav-list"], ["class", "nav-list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "sidenav-account"], ["routerLink", "/profile/your-account", "routerLinkActive", "active", 1, "sidenav-list-item", 3, "click"], ["b2bNgxIcon", "", 1, "mr-3", 3, "name"], ["b2bNgxLink", "", 1, "sidenav-list-item-link"], ["class", "sidenav-list-item", 4, "ngFor", "ngForOf"], [1, "sidenav-workspace"], ["routerLink", "/profile/your-workspace", "routerLinkActive", "active", 1, "sidenav-list-item", 3, "click"], ["class", "sidenav-list-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "sidenav-header"], [1, "sidenav-header-title"], ["b2bNgxIcon", "", "name", "user-blue", 1, "mr-1"], [1, "sidenav-header-title-text"], [1, "sidenav-header-description"], [1, "nav-list-item", 3, "click"], [1, "nav-list-item-link"], ["class", "label", 3, "ngStyle", 4, "ngIf"], [1, "label", 3, "ngStyle"], [1, "sidenav-list-item"], ["b2bNgxIcon", "", "class", "mr-3", 3, "name", 4, "ngIf"], ["b2bNgxLink", "", "routerLinkActive", "active", 1, "sidenav-list-item-link", 3, "routerLink", "routerLinkActiveOptions", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["b2bNgxLink", "", "routerLinkActive", "active", "class", "sidenav-list-item-link", 3, "routerLink", "click", 4, "ngIf"], ["b2bNgxButton", "", "class", "sidenav-list-item-button", 3, "click", 4, "ngIf"], ["b2bNgxLink", "", "routerLinkActive", "active", 1, "sidenav-list-item-link", 3, "routerLink", "click"], ["b2bNgxButton", "", 1, "sidenav-list-item-button", 3, "click"], [1, "sidenav-list-item-text"], [4, "ngIf"], ["class", "unread-messages", 4, "ngIf"], [1, "unread-messages"], [1, "nav__without-user"], ["b2bNgxLink", "", 1, "nav__sign-in", 3, "routerLink", "theme", "click"], ["b2bNgxIcon", "", "name", "user-filled", 1, "nav__sign-in-icon"], ["b2bNgxLink", "", 1, "nav__sign-up", 3, "routerLink", "theme", "click"], [1, "nav-list-item-link", 3, "routerLink", "click"]],
  template: function CoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CoreComponent_b2b_client_header_2_Template, 2, 4, "b2b-client-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "div", 3, 4)(6, "div", 5)(7, "div", 6)(8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CoreComponent_Template_button_click_8_listener() {
        return ctx.toggleShowPopUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CoreComponent_ng_container_11_Template, 19, 8, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, CoreComponent_ng_template_13_Template, 9, 12, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, CoreComponent_ng_template_15_Template, 9, 8, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CoreComponent_ul_17_Template, 2, 1, "ul", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    }

    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c4, ctx.animationState === "in"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.displayHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@slideInOut", ctx.animationState);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 6, ctx.user$))("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 8, ctx.user$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_17__.B2bNgxLinkDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_18__.B2bNgxIconDirective, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_19__.B2bNgxButtonDirective, _client_components_client_header_client_header_component__WEBPACK_IMPORTED_MODULE_6__.ClientHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  data: {
    animation: [_client_shared_animations_slide_in_out_animation__WEBPACK_IMPORTED_MODULE_1__.SlideInOutAnimation]
  },
  changeDetection: 0
});
CoreComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_22__.UntilDestroy)()], CoreComponent);


/***/ }),

/***/ 22888:
/*!**********************************************************!*\
  !*** ./src/app/core/loaders/translate-browser.loader.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateBrowserLoader": () => (/* binding */ TranslateBrowserLoader),
/* harmony export */   "translateBrowserLoaderFactory": () => (/* binding */ translateBrowserLoaderFactory)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 30176);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 50318);



class TranslateBrowserLoader {
    constructor(http, transferState) {
        this.http = http;
        this.transferState = transferState;
    }
    getTranslation(lang) {
        const key = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)('transfer-translate-' + lang);
        const data = this.transferState.get(key, null);
        // if none found, http load as fallback
        if (data) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
                observer.next(data);
                observer.complete();
            });
        }
        else {
            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(this.http).getTranslation(lang);
        }
    }
}
function translateBrowserLoaderFactory(httpClient, transferState) {
    return new TranslateBrowserLoader(httpClient, transferState);
}


/***/ }),

/***/ 96931:
/*!**************************************************!*\
  !*** ./src/app/core/services/api/api.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get(url, httpOptions = {}) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + url, httpOptions);
    }
    post(url, body, options) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + url, body, options);
    }
    put(url, body, options = {}) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + url, body, options);
    }
    patch(url, body) {
        return this.httpClient.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + url, body);
    }
    delete(url, options) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + url, options);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 41364:
/*!****************************************************!*\
  !*** ./src/app/core/services/i18n/i18n.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nService": () => (/* binding */ I18nService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 1468);


class I18nService {
    // public readonly formControl;
    constructor(translateService) {
        this.translateService = translateService;
    }
    setActiveLang(lang) {
        this.translateService.use("en" || 0);
    }
}
I18nService.ɵfac = function I18nService_Factory(t) { return new (t || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
I18nService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: I18nService, factory: I18nService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 56838:
/*!************************************************************!*\
  !*** ./src/app/core/services/mixpanel/mixpanel.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MixpanelService": () => (/* binding */ MixpanelService)
/* harmony export */ });
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mixpanel-browser */ 65069);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class MixpanelService {
    constructor() {
        this.token = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl.includes('-dev') ? 'c66a4412cf0b4eff56542461afb338bd' : '7a0cfcbc67cff070e51719b1e725ded8';
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.init(this.token, { debug: true });
    }
    track(event, props) {
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.track(event, props);
    }
    logIn(user, track) {
        if (mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.get_distinct_id()) {
            mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.identify(user['User_id']);
            mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.people.set({ ...user, time: new Date().toISOString(), deviceType: this.detectDeviceType() });
            this.track(track);
        }
        else {
            this.signUp(user, track);
        }
    }
    signUp(user, track) {
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.alias(user['User_id']);
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.people.set({ distinct_id: user['User_id'], ...user, time: new Date().toISOString(), deviceType: this.detectDeviceType() });
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.register({ distinct_id: user['User_id'], name: user.fullName, ...user, time: new Date().toISOString(), deviceType: this.detectDeviceType() });
        this.track(track);
    }
    logout() {
        this.track('Log Out');
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__.reset();
    }
    detectDeviceType() {
        const userAgent = window.navigator.userAgent;
        if (/mobile/i.test(userAgent)) {
            return 'Mobile';
        }
        else if (/tablet/i.test(userAgent)) {
            return 'Tablet';
        }
        else {
            return 'Desktop';
        }
    }
}
MixpanelService.ɵfac = function MixpanelService_Factory(t) { return new (t || MixpanelService)(); };
MixpanelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MixpanelService, factory: MixpanelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 64924);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);



function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
        .catch((err) => console.error(err));
}
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map