"use strict";
exports.id = 4360;
exports.ids = [4360];
exports.modules = {

/***/ 97631:
/*!**********************************************************!*\
  !*** ./projects/ngx-select/src/lib/ngx-select.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSelectModule": () => (/* binding */ B2bNgxSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/ngx-select.component */ 13114);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





class B2bNgxSelectModule {
}
B2bNgxSelectModule.ɵfac = function B2bNgxSelectModule_Factory(t) { return new (t || B2bNgxSelectModule)(); };
B2bNgxSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: B2bNgxSelectModule });
B2bNgxSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](B2bNgxSelectModule, { declarations: [_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxSelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule], exports: [_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_4__.B2bNgxSelectComponent] }); })();


/***/ }),

/***/ 43607:
/*!********************************************************************!*\
  !*** ./projects/ngx-toggle/src/lib/layout/ngx-toggle.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxToggleComponent": () => (/* binding */ B2bNgxToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/id-generator */ 88763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);


// import { FormControl } from "@ngneat/reactive-forms";
// import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";




function B2bNgxToggleComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function B2bNgxToggleComponent_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function B2bNgxToggleComponent_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.customLabel);
} }
function B2bNgxToggleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, B2bNgxToggleComponent_ng_container_1_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, B2bNgxToggleComponent_ng_container_1_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, B2bNgxToggleComponent_ng_container_1_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.customLabel && ctx_r0.formControl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.customLabel && !ctx_r0.formControl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.customLabel);
} }
// @UntilDestroy()
class B2bNgxToggleComponent {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.placeholder = '';
        this.errors = {};
        this.customLabel = '';
        this.emptyLabel = false;
        // TODO: remove this input and create input for custom styles for input instead
        this.subcategories = false;
        this.toggled = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.type = "checkbox";
        this.onChange = () => null;
        this.onTouched = () => null;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(false);
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
        this.formControl.setValue(value, { emitEvent: false });
        this.toggled = value;
        this._changeDetectorRef.detectChanges();
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    }
    emitToggleChange() {
        this.toggled = !this.toggled;
        this.change.emit();
    }
}
B2bNgxToggleComponent.ɵfac = function B2bNgxToggleComponent_Factory(t) { return new (t || B2bNgxToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
B2bNgxToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxToggleComponent, selectors: [["b2b-ngx-toggle"]], inputs: { placeholder: "placeholder", errors: "errors", customLabel: "customLabel", emptyLabel: "emptyLabel", subcategories: "subcategories", toggled: "toggled" }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxToggleComponent),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxToggleComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 5, consts: [[1, "ngx-toggle"], [4, "ngIf"], ["type", "checkbox", 1, "ngx-toggle-input", 3, "formControl", "ngModel", "click", "ngModelChange"], [1, "ngx-toggle-custom-input"], ["class", "ngx-toggle-label-visible", 4, "ngIf"], ["class", "ngx-toggle-label-hidden", 4, "ngIf"], [1, "ngx-toggle-label-visible"], [1, "ngx-toggle-label-hidden"]], template: function B2bNgxToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, B2bNgxToggleComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B2bNgxToggleComponent_Template_input_click_2_listener() { return ctx.emitToggleChange(); })("ngModelChange", function B2bNgxToggleComponent_Template_input_ngModelChange_2_listener($event) { return ctx.toggled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("subcategories", ctx.subcategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.emptyLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("ngModel", ctx.toggled);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective], styles: [".ngx-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 60px;\n  font-size: 12px;\n  color: gray;\n  height: 26px;\n}\n.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-input[_ngcontent-%COMP%] {\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n}\n.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\n  background-color: #0f0f11;\n}\n.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-custom-input[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  left: 0;\n  top: 0;\n  background-color: #556274;\n  transition: 0.4s;\n  width: 52px;\n  height: 100%;\n  border-radius: 34px;\n}\n.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-custom-input[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  height: 18px;\n  width: 18px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n.ngx-toggle.subcategories[_ngcontent-%COMP%] {\n  height: 20px;\n  padding-left: 27px;\n}\n.ngx-toggle.subcategories[_ngcontent-%COMP%]   .ngx-toggle-input[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:before {\n  transform: translateX(19px);\n}\n.ngx-toggle.subcategories[_ngcontent-%COMP%]   .ngx-toggle-custom-input[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.ngx-toggle.subcategories[_ngcontent-%COMP%]   .ngx-toggle-custom-input[_ngcontent-%COMP%]::before {\n  width: 14px;\n  height: 14px;\n  bottom: 3px;\n}\n.ngx-toggle-label-visible[_ngcontent-%COMP%], .ngx-toggle-label-hidden[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #556274;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Q7QUFDQztFQUNDLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUc7RUFDQyx5QkFBQTtBQUFKO0FBRUk7RUFDQywyQkFBQTtBQUFMO0FBTUM7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0FBTkY7QUFRRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFOSDtBQVVDO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBUkY7QUFhSztFQUNDLDJCQUFBO0FBWE47QUFpQkU7RUFDQyxXQUFBO0FBZkg7QUFpQkc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFmSjtBQXFCQTs7RUFFQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBbEJEIiwiZmlsZSI6Im5neC10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmd4LXRvZ2dsZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZy1sZWZ0OiA2MHB4O1xuXHRmb250LXNpemU6IDEycHg7XG5cdGNvbG9yOiBncmF5O1xuXHRoZWlnaHQ6IDI2cHg7XG5cblx0Lm5neC10b2dnbGUtaW5wdXQge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0JjpjaGVja2VkIHtcblx0XHRcdCYgKyBzcGFuIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzBmMGYxMTtcblxuXHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm5neC10b2dnbGUtY3VzdG9tLWlucHV0IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1NTYyNzQ7XG5cdFx0dHJhbnNpdGlvbjogMC40cztcblxuXHRcdHdpZHRoOiA1MnB4O1xuXHRcdGhlaWdodDogMTAwJTtcblxuXHRcdGJvcmRlci1yYWRpdXM6IDM0cHg7XG5cblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRsZWZ0OiA0cHg7XG5cdFx0XHRib3R0b206IDRweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0dHJhbnNpdGlvbjogMC40cztcblx0XHR9XG5cdH1cblxuXHQmLnN1YmNhdGVnb3JpZXMge1xuXHRcdGhlaWdodDogMjBweDtcblx0XHRwYWRkaW5nLWxlZnQ6IDI3cHg7XG5cblx0XHQubmd4LXRvZ2dsZS1pbnB1dCB7XG5cdFx0XHQmOmNoZWNrZWQge1xuXHRcdFx0XHQmICsgc3BhbiB7XG5cdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE5cHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5uZ3gtdG9nZ2xlLWN1c3RvbS1pbnB1dCB7XG5cdFx0XHR3aWR0aDogNDBweDtcblxuXHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0d2lkdGg6IDE0cHg7XG5cdFx0XHRcdGhlaWdodDogMTRweDtcblx0XHRcdFx0Ym90dG9tOiAzcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5uZ3gtdG9nZ2xlLWxhYmVsLXZpc2libGUsXG4ubmd4LXRvZ2dsZS1sYWJlbC1oaWRkZW4ge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRjb2xvcjogIzU1NjI3NDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

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

/***/ 10911:
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-article-categories/admin-article-categories-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticleCategoriesRoutingModule": () => (/* binding */ AdminArticleCategoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_article_categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-article-categories.component */ 26334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_admin_article_categories_component__WEBPACK_IMPORTED_MODULE_0__.AdminArticleCategoriesComponent,
    },
];
class AdminArticleCategoriesRoutingModule {
}
AdminArticleCategoriesRoutingModule.ɵfac = function AdminArticleCategoriesRoutingModule_Factory(t) { return new (t || AdminArticleCategoriesRoutingModule)(); };
AdminArticleCategoriesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminArticleCategoriesRoutingModule });
AdminArticleCategoriesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminArticleCategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 84360:
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-article-categories/admin-article-categories.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticleCategoriesModule": () => (/* binding */ AdminArticleCategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_article_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-article-categories-routing.module */ 10911);
/* harmony import */ var _layout_admin_article_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-article-categories.component */ 26334);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-toggle */ 75092);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);









class AdminArticleCategoriesModule {
}
AdminArticleCategoriesModule.ɵfac = function AdminArticleCategoriesModule_Factory(t) { return new (t || AdminArticleCategoriesModule)(); };
AdminArticleCategoriesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminArticleCategoriesModule });
AdminArticleCategoriesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__.B2bNgxButtonModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_6__.B2bNgxSelectModule,
        _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_7__.B2bNgxToggleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _admin_article_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminArticleCategoriesRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminArticleCategoriesModule, { declarations: [_layout_admin_article_categories_component__WEBPACK_IMPORTED_MODULE_1__.AdminArticleCategoriesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__.B2bNgxButtonModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_6__.B2bNgxSelectModule,
        _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_7__.B2bNgxToggleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _admin_article_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminArticleCategoriesRoutingModule] }); })();


/***/ }),

/***/ 26334:
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-article-categories/layout/admin-article-categories.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticleCategoriesComponent": () => (/* binding */ AdminArticleCategoriesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../client/services/categories/categories.service */ 57454);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_input_src_lib_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/layout/ngx-input.component */ 21729);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);
/* harmony import */ var _projects_ngx_toggle_src_lib_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../projects/ngx-toggle/src/lib/layout/ngx-toggle.component */ 43607);














function AdminArticleCategoriesComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
let AdminArticleCategoriesComponent = class AdminArticleCategoriesComponent {
    constructor(_formBuilder, _categoriesService, _hotToastrService) {
        this._formBuilder = _formBuilder;
        this._categoriesService = _categoriesService;
        this._hotToastrService = _hotToastrService;
        this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__.B2bNgxInputThemeEnum;
        this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_3__.B2bNgxButtonThemeEnum;
        this.formGroup = this.getFormGroup();
        this.level1Categories = [];
        this.level2Categories = [];
        this.level3Categories = [];
        this.errorMessage = "";
    }
    setLevel1Categories() {
        this._categoriesService
            .getWikiCategories()
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this))
            .subscribe((categories) => {
            this.level1Categories = categories;
        });
    }
    setLevel2Categories() {
        this.formGroup
            .get("selectLevel1Category")
            .valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((level1CategoryId) => !!level1CategoryId))
            .subscribe((level1CategoryId) => {
            var _a;
            this.level2Categories = (_a = this.level1Categories.find((level1Category) => level1Category._id === level1CategoryId)) === null || _a === void 0 ? void 0 : _a.children;
        });
    }
    ngOnInit() {
        this.setLevel1Categories();
        this.setLevel2Categories();
    }
    createCategory() {
        const selectLevel1Category = this.formGroup.get("selectLevel1Category").value;
        const inputLevel1Category = this.formGroup.get("inputLevel1Category").value;
        const inputLevel2Category = this.formGroup.get("inputLevel2Category").value;
        this.errorMessage = "";
        let level1Category = "";
        let level2Category = "";
        if (inputLevel1Category && inputLevel2Category) {
            level1Category = { name: inputLevel1Category };
            level2Category = { name: inputLevel2Category };
        }
        else if (selectLevel1Category && inputLevel2Category) {
            level1Category = { id: selectLevel1Category };
            level2Category = { name: inputLevel2Category };
        }
        else {
            this.errorMessage =
                "To create a category you have to fill all fields; Each level have to be filled with select (already exist category) or with name (new one); You cant select 2 level category";
            return;
        }
        this._categoriesService
            .createWikiCategory(level1Category, level2Category)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this), this._hotToastrService.observe({
            loading: "Category is creating...",
            success: "Category successfully created",
            error: "Categories creating failed",
        }))
            .subscribe();
    }
    updateCategory() {
        const selectLevel1Category = this.formGroup.get("selectLevel1Category").value;
        const selectLevel2Category = this.formGroup.get("selectLevel2Category").value;
        const inputLevel1Category = this.formGroup.get("inputLevel1Category").value;
        const inputLevel2Category = this.formGroup.get("inputLevel2Category").value;
        const toggleLevel1Category = this.formGroup.get("toggleLevel1Category").value;
        const toggleLevel2Category = this.formGroup.get("toggleLevel2Category").value;
        this.errorMessage = "";
        let categoryIdToUpdate = "";
        let categoryNameToUpdate = "";
        let categoryHiddenToUpdate = "";
        if (selectLevel1Category && (inputLevel1Category || typeof toggleLevel1Category == "boolean")) {
            categoryIdToUpdate = selectLevel1Category;
            categoryNameToUpdate = inputLevel1Category;
            categoryHiddenToUpdate = toggleLevel1Category;
        }
        else if (selectLevel2Category && (inputLevel2Category || typeof toggleLevel2Category == "boolean")) {
            categoryIdToUpdate = selectLevel2Category;
            categoryNameToUpdate = inputLevel2Category;
            categoryHiddenToUpdate = toggleLevel2Category;
        }
        else {
            this.errorMessage = "To update a category you have to select it and enter a new name";
            return;
        }
        this._categoriesService
            .updateWikiCategory(categoryIdToUpdate, categoryNameToUpdate, categoryHiddenToUpdate)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this), this._hotToastrService.observe({
            loading: "Category is updating...",
            success: "Category successfully updated",
            error: "Categories updating failed",
        }))
            .subscribe();
    }
    getFormGroup() {
        return this._formBuilder.group({
            selectLevel1Category: [null],
            selectLevel2Category: [null],
            inputLevel1Category: [null],
            inputLevel2Category: [null],
            toggleLevel1Category: [true],
            toggleLevel2Category: [true],
        });
    }
};
AdminArticleCategoriesComponent.ɵfac = function AdminArticleCategoriesComponent_Factory(t) { return new (t || AdminArticleCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_7__.HotToastService)); };
AdminArticleCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminArticleCategoriesComponent, selectors: [["b2b-admin-article"]], decls: 24, vars: 8, consts: [[1, "admin-article-categories"], [1, "admin-article-categories__create"], [1, "admin-article-categories__create-title"], [1, "admin-article-categories__create-sub-title"], [1, "admin-article-categories__create-form", 3, "formGroup"], ["formControlName", "selectLevel1Category", "bindValue", "_id", "bindLabel", "name", "placeholder", "Select level 1 category", 1, "admin-article-categories__create-select", 3, "options"], ["formControlName", "selectLevel2Category", "bindValue", "_id", "bindLabel", "name", "placeholder", "Select level 2 category", 1, "admin-article-categories__create-select", 3, "options"], [1, "admin-article-categories__create-divider"], ["formControlName", "inputLevel1Category", "placeholder", "Create / Update level 1 category", 1, "admin-article-categories__create-input", 3, "theme"], ["formControlName", "inputLevel2Category", "placeholder", "Create / Update level 2 category", 1, "admin-article-categories__create-input", 3, "theme"], ["formControlName", "toggleLevel1Category", 1, "admin-article-categories__create-toggle"], ["formControlName", "toggleLevel2Category", 1, "admin-article-categories__create-toggle"], ["b2bNgxButton", "", "type", "button", 1, "admin-article-categories__create-button", 3, "theme", "click"], ["b2bNgxButton", "", "type", "button", 1, "admin-article-categories__update-button", 3, "theme", "click"], ["class", "admin-article-categories__error-message", 4, "ngIf"], [1, "admin-article-categories__error-message"]], template: function AdminArticleCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create / Update category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "To create a category you have to fill all levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " To update a category you have to select it and enter the new name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "b2b-ngx-select", 5)(10, "b2b-ngx-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "b2b-ngx-input", 8)(16, "b2b-ngx-input", 9)(17, "b2b-ngx-toggle", 10)(18, "b2b-ngx-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminArticleCategoriesComponent_Template_button_click_19_listener() { return ctx.createCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Create category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminArticleCategoriesComponent_Template_button_click_21_listener() { return ctx.updateCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Update category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminArticleCategoriesComponent_p_23_Template, 2, 1, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.level1Categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.level2Categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _projects_ngx_input_src_lib_layout_ngx_input_component__WEBPACK_IMPORTED_MODULE_9__.B2bNgxInputComponent, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_10__.B2bNgxButtonDirective, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_11__.B2bNgxSelectComponent, _projects_ngx_toggle_src_lib_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_12__.B2bNgxToggleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName], styles: [".admin-article-categories[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-sub-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 50px;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-divider[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-input[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-toggle[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-select[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-divider.admin-article-categories__create-divider[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-input.admin-article-categories__create-divider[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-toggle.admin-article-categories__create-divider[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-select.admin-article-categories__create-divider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 15px 0;\n  font-weight: bold;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-divider.admin-article-categories__create-toggle[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-input.admin-article-categories__create-toggle[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-toggle.admin-article-categories__create-toggle[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-select.admin-article-categories__create-toggle[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n  justify-content: center;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__update-button[_ngcontent-%COMP%], .admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__create[_ngcontent-%COMP%]   .admin-article-categories__create-form[_ngcontent-%COMP%]   .admin-article-categories__create-button[_ngcontent-%COMP%] {\n  width: 49%;\n  padding: 15px 0;\n  margin-top: 50px;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__update[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__update[_ngcontent-%COMP%]   .admin-article-categories__update-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.admin-article-categories[_ngcontent-%COMP%]   .admin-article-categories__error-message[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  color: #d0021b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWFydGljbGUtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDtBQUNFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FBQ0g7QUFDRTtFQUNDLGVBQUE7QUFDSDtBQUNFO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0g7QUFDRzs7OztFQUlDLFVBQUE7QUFDSjtBQUFJOzs7O0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBS0w7QUFISTs7OztFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBUUw7QUFKRzs7RUFFQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUo7QUFGQztFQUNDLGdCQUFBO0FBSUY7QUFIRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUtIO0FBREM7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdGIiwiZmlsZSI6ImFkbWluLWFydGljbGUtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1hcnRpY2xlLWNhdGVnb3JpZXMge1xuXHRwYWRkaW5nOiAzMHB4O1xuXHQuYWRtaW4tYXJ0aWNsZS1jYXRlZ29yaWVzX19jcmVhdGUge1xuXHRcdC5hZG1pbi1hcnRpY2xlLWNhdGVnb3JpZXNfX2NyZWF0ZS10aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHR9XG5cdFx0LmFkbWluLWFydGljbGUtY2F0ZWdvcmllc19fY3JlYXRlLXN1Yi10aXRsZSB7XG5cdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0fVxuXHRcdC5hZG1pbi1hcnRpY2xlLWNhdGVnb3JpZXNfX2NyZWF0ZS1mb3JtIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXG5cdFx0XHQuYWRtaW4tYXJ0aWNsZS1jYXRlZ29yaWVzX19jcmVhdGUtZGl2aWRlcixcblx0XHRcdC5hZG1pbi1hcnRpY2xlLWNhdGVnb3JpZXNfX2NyZWF0ZS1pbnB1dCxcblx0XHRcdC5hZG1pbi1hcnRpY2xlLWNhdGVnb3JpZXNfX2NyZWF0ZS10b2dnbGUsXG5cdFx0XHQuYWRtaW4tYXJ0aWNsZS1jYXRlZ29yaWVzX19jcmVhdGUtc2VsZWN0IHtcblx0XHRcdFx0d2lkdGg6IDQ5JTtcblx0XHRcdFx0Ji5hZG1pbi1hcnRpY2xlLWNhdGVnb3JpZXNfX2NyZWF0ZS1kaXZpZGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE1cHggMDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLmFkbWluLWFydGljbGUtY2F0ZWdvcmllc19fY3JlYXRlLXRvZ2dsZSB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMzBweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5hZG1pbi1hcnRpY2xlLWNhdGVnb3JpZXNfX3VwZGF0ZS1idXR0b24sXG5cdFx0XHQuYWRtaW4tYXJ0aWNsZS1jYXRlZ29yaWVzX19jcmVhdGUtYnV0dG9uIHtcblx0XHRcdFx0d2lkdGg6IDQ5JTtcblx0XHRcdFx0cGFkZGluZzogMTVweCAwO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuYWRtaW4tYXJ0aWNsZS1jYXRlZ29yaWVzX191cGRhdGUge1xuXHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0LmFkbWluLWFydGljbGUtY2F0ZWdvcmllc19fdXBkYXRlLXRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdH1cblx0fVxuXG5cdC5hZG1pbi1hcnRpY2xlLWNhdGVnb3JpZXNfX2Vycm9yLW1lc3NhZ2Uge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdGNvbG9yOiAjZDAwMjFiO1xuXHR9XG59XG4iXX0= */"], changeDetection: 0 });
AdminArticleCategoriesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()
], AdminArticleCategoriesComponent);



/***/ })

};
;
//# sourceMappingURL=4360.js.map