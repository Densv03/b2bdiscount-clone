"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-projects_ngx-toggle_src_lib_layout_ngx-toggle_component_ts"],{

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


/***/ })

}]);
//# sourceMappingURL=default-projects_ngx-toggle_src_lib_layout_ngx-toggle_component_ts.js.map