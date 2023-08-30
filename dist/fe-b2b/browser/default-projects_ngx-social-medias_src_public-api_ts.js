"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["default-projects_ngx-social-medias_src_public-api_ts"],{

/***/ 47380:
/*!**********************************************************************************!*\
  !*** ./projects/ngx-social-medias/src/lib/layout/ngx-social-medias.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSocialMediasComponent": () => (/* binding */ B2bNgxSocialMediasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_tel_src_lib_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ngx-tel/src/lib/layout/ngx-tel.component */ 15931);
/* harmony import */ var _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);






function B2bNgxSocialMediasComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B2bNgxSocialMediasComponent_li_3_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const option_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.toggleSocialMedia(option_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", option_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", option_r2.icon);
} }
function B2bNgxSocialMediasComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b2b-ngx-tel", 11)(3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formControl_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", formControl_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultNumber", ctx_r1.defaultNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", formControl_r5.value.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](formControl_r5.value.label);
} }
const _c0 = ["*"];
class B2bNgxSocialMediasComponent {
    constructor(formBuilder, _cdr) {
        this.formBuilder = formBuilder;
        this._cdr = _cdr;
        this.defaultNumber = "";
        this.onChange = () => null;
        this.onTouched = () => null;
        this.formArray = this.getFormGroup();
        this.formArray.valueChanges.subscribe((value) => {
            this.onChange(this.transformData(value));
        });
    }
    get activeOptions() {
        const formControls = this.formArray.controls;
        return this.options.map((option) => ({
            ...option,
            value: "",
            active: formControls.find((formControl) => formControl.value.label === option.label),
        }));
    }
    transformData(value) {
        return value.reduce((result, item) => {
            const data = {
                ...result,
                [item.label.toLowerCase()]: item.value,
            };
            return data;
        }, {});
    }
    getFormGroup() {
        return this.formBuilder.array([]);
    }
    toggleSocialMedia(option) {
        const foundIndex = this.formArray.controls.findIndex((control) => control.value.label === option.label);
        if (foundIndex !== -1) {
            this.formArray.removeAt(foundIndex);
        }
        else {
            const formGroup = this.formBuilder.group(option);
            this.formArray.push(formGroup);
        }
        this._cdr.detectChanges();
    }
    get ulClassName() {
        const defaultStyles = `flex items-center`;
        return `${defaultStyles} ${this.className}`;
    }
    get liClassName() {
        const defaultStyles = `first:ml-0 last:mr-0`;
        return `${defaultStyles} ${this.iconClassName}`;
    }
    validate() {
        return this.formArray.errors;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        const socials = Object.keys(value);
        socials.forEach((social) => {
            const label = social.charAt(0).toUpperCase() + social.slice(1);
            const option = {
                label,
                icon: this.options.find((option) => option.label === label).icon,
                value: value[social],
                active: undefined,
            };
            this.toggleSocialMedia(option);
        });
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formArray.disable();
        }
        else {
            this.formArray.enable();
        }
    }
}
B2bNgxSocialMediasComponent.ɵfac = function B2bNgxSocialMediasComponent_Factory(t) { return new (t || B2bNgxSocialMediasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
B2bNgxSocialMediasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxSocialMediasComponent, selectors: [["b2b-ngx-social-medias"]], inputs: { options: "options", className: "className", iconClassName: "iconClassName", defaultNumber: "defaultNumber" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxSocialMediasComponent),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => B2bNgxSocialMediasComponent),
                multi: true,
            },
        ])], ngContentSelectors: _c0, decls: 7, vars: 3, consts: [[1, "ngx-social-medias-label"], [1, "ngx-social-medias-icons-list"], ["class", "ngx-social-medias-icons-list-item", 4, "ngFor", "ngForOf"], [1, "ngx-social-medias-tel-form", 3, "formGroup"], [1, "ngx-social-medias-tel-list"], ["class", "ngx-social-medias-tel-list-item", 4, "ngFor", "ngForOf"], [1, "ngx-social-medias-icons-list-item"], [1, "ngx-social-medias-icons-list-item-button", 3, "click"], ["b2bNgxIcon", "", 3, "name"], [1, "ngx-social-medias-tel-list-item"], [3, "formGroup"], ["formControlName", "value", 3, "defaultNumber"], [1, "ngx-social-medias-tel-list-label"], [1, "ngx-social-medias-tel-list-label-text"]], template: function B2bNgxSocialMediasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, B2bNgxSocialMediasComponent_li_3_Template, 3, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3)(5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, B2bNgxSocialMediasComponent_li_6_Template, 7, 4, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formArray.controls);
    } }, dependencies: [_ngx_tel_src_lib_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_2__.B2bNgxTelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_3__.B2bNgxIconDirective], styles: [".ngx-social-medias-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-bottom: 6px;\n}\n.ngx-social-medias-label[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.ngx-social-medias-icons-list[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 12px;\n}\n.ngx-social-medias-icons-list[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item[_ngcontent-%COMP%] {\n  margin: 0 6px;\n}\n.ngx-social-medias-icons-list[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.ngx-social-medias-icons-list[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item-button[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.ngx-social-medias-icons-list[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item-button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.ngx-social-medias-icons-list[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item[_ngcontent-%COMP%]   .ngx-social-medias-icons-list-item-button.active[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  box-shadow: inset 0px 2px 2px #dfe8f5;\n}\n.ngx-social-medias-tel-form[_ngcontent-%COMP%]   .ngx-social-medias-tel-list-item[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.ngx-social-medias-tel-form[_ngcontent-%COMP%]   .ngx-social-medias-tel-list-item[_ngcontent-%COMP%]   .ngx-social-medias-tel-list-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ngx-social-medias-tel-form[_ngcontent-%COMP%]   .ngx-social-medias-tel-list-item[_ngcontent-%COMP%]   .ngx-social-medias-tel-list-label[_ngcontent-%COMP%]   .ngx-social-medias-tel-list-label-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #9fa4bb;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1zb2NpYWwtbWVkaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRDtBQUNDO0VBQ0MsYUFBQTtBQUNGO0FBR0E7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7QUFBRDtBQUNDO0VBQ0MsYUFBQTtBQUNGO0FBQ0U7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSDtBQUFHO0VBQ0MsY0FBQTtBQUVKO0FBQUc7RUFDQyxlQUFBO0FBRUo7QUFBRztFQUNDLHlCQUFBO0VBQ0EscUNBQUE7QUFFSjtBQUlDO0VBQ0MsZ0JBQUE7QUFERjtBQUVFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBQUg7QUFDRztFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJuZ3gtc29jaWFsLW1lZGlhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtc29jaWFsLW1lZGlhcy1sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOWZhNGJiO1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG5cblx0JjplbXB0eSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4ubmd4LXNvY2lhbC1tZWRpYXMtaWNvbnMtbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbi10b3A6IDEycHg7XG5cdC5uZ3gtc29jaWFsLW1lZGlhcy1pY29ucy1saXN0LWl0ZW0ge1xuXHRcdG1hcmdpbjogMCA2cHg7XG5cblx0XHQubmd4LXNvY2lhbC1tZWRpYXMtaWNvbnMtbGlzdC1pdGVtLWJ1dHRvbiB7XG5cdFx0XHR3aWR0aDogMzJweDtcblx0XHRcdGhlaWdodDogMzJweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0XHR9XG5cdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0XHR9XG5cdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG5cdFx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMnB4ICNkZmU4ZjU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4ubmd4LXNvY2lhbC1tZWRpYXMtdGVsLWZvcm0ge1xuXHQubmd4LXNvY2lhbC1tZWRpYXMtdGVsLWxpc3QtaXRlbSB7XG5cdFx0bWFyZ2luLXRvcDogMjRweDtcblx0XHQubmd4LXNvY2lhbC1tZWRpYXMtdGVsLWxpc3QtbGFiZWwge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHQubmd4LXNvY2lhbC1tZWRpYXMtdGVsLWxpc3QtbGFiZWwtdGV4dCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Y29sb3I6ICM5ZmE0YmI7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA0cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 4760:
/*!************************************************************************!*\
  !*** ./projects/ngx-social-medias/src/lib/ngx-social-medias.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSocialMediasModule": () => (/* binding */ B2bNgxSocialMediasModule)
/* harmony export */ });
/* harmony import */ var _layout_ngx_social_medias_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/ngx-social-medias.component */ 47380);
/* harmony import */ var _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-tel */ 47321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class B2bNgxSocialMediasModule {
}
B2bNgxSocialMediasModule.ɵfac = function B2bNgxSocialMediasModule_Factory(t) { return new (t || B2bNgxSocialMediasModule)(); };
B2bNgxSocialMediasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: B2bNgxSocialMediasModule });
B2bNgxSocialMediasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_2__.B2bNgxTelModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](B2bNgxSocialMediasModule, { declarations: [_layout_ngx_social_medias_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxSocialMediasComponent], imports: [_b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_2__.B2bNgxTelModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule], exports: [_layout_ngx_social_medias_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxSocialMediasComponent] }); })();


/***/ }),

/***/ 14819:
/*!******************************************************!*\
  !*** ./projects/ngx-social-medias/src/public-api.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxSocialMediasComponent": () => (/* reexport safe */ _lib_layout_ngx_social_medias_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxSocialMediasComponent),
/* harmony export */   "B2bNgxSocialMediasModule": () => (/* reexport safe */ _lib_ngx_social_medias_module__WEBPACK_IMPORTED_MODULE_1__.B2bNgxSocialMediasModule)
/* harmony export */ });
/* harmony import */ var _lib_layout_ngx_social_medias_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/layout/ngx-social-medias.component */ 47380);
/* harmony import */ var _lib_ngx_social_medias_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-social-medias.module */ 4760);




/***/ })

}]);
//# sourceMappingURL=default-projects_ngx-social-medias_src_public-api_ts.js.map