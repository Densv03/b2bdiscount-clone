"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_pages_admin-users_admin-users_module_ts"],{

/***/ 81774:
/*!***************************************************************!*\
  !*** ./projects/ngx-dropdown/src/lib/dropdown-labels.enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropdownLabels": () => (/* binding */ dropdownLabels)
/* harmony export */ });
var dropdownLabels;
(function (dropdownLabels) {
    dropdownLabels["RESTORE"] = "Restore";
    dropdownLabels["ARCHIVE"] = "Archive";
    dropdownLabels["DELETE"] = "Delete";
    dropdownLabels["EDIT"] = "Edit";
})(dropdownLabels || (dropdownLabels = {}));


/***/ }),

/***/ 46353:
/*!************************************************************************!*\
  !*** ./projects/ngx-dropdown/src/lib/layout/ngx-dropdown.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxDropdownComponent": () => (/* binding */ B2bNgxDropdownComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);









function B2bNgxDropdownComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B2bNgxDropdownComponent_ul_4_li_1_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const option_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.callOptionFunc($event, option_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", option_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](option_r3.className + " ngx-dropdown-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r3.label);
} }
function B2bNgxDropdownComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, B2bNgxDropdownComponent_ul_4_li_1_Template, 5, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.options);
} }
const _c0 = ["*"];
let B2bNgxDropdownComponent = class B2bNgxDropdownComponent {
    constructor(changeDetection) {
        this.changeDetection = changeDetection;
        this.isMenuShow = false;
        this.toggleOptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    callOptionFunc(event, option) {
        this.isMenuShow = false;
        event.preventDefault();
        event.stopImmediatePropagation();
        option.onClick(this.optionToReturn || option, this.requiredOptionToCheck);
    }
    get menuClassName() {
        const defaultStyles = ``;
        return `${this.className} ${defaultStyles}`;
    }
    subscribeOnClickOutside(container) {
        const subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, "click")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.skip)(1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((clicked) => !container.contains(clicked.target)))
            .subscribe(() => {
            this.isMenuShow = false;
            this.changeDetection.detectChanges();
            subscription.unsubscribe();
        });
    }
    showMenu(event, container) {
        this.isMenuShow = !this.isMenuShow;
        event.stopImmediatePropagation();
        event.preventDefault();
        if (this.isMenuShow) {
            this.subscribeOnClickOutside(container);
        }
        return;
    }
};
B2bNgxDropdownComponent.ɵfac = function B2bNgxDropdownComponent_Factory(t) { return new (t || B2bNgxDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
B2bNgxDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxDropdownComponent, selectors: [["b2b-ngx-dropdown"]], inputs: { options: "options", requiredOptionToCheck: "requiredOptionToCheck", className: "className", optionToReturn: "optionToReturn" }, outputs: { toggleOptionClick: "toggleOptionClick" }, ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "ngx-dropdown-container"], ["container", ""], [3, "click"], ["class", "ngx-dropdown", 4, "ngIf"], [1, "ngx-dropdown"], [4, "ngFor", "ngForOf"], ["b2bNgxButton", "", 1, "ngx-dropdown-button", 3, "click"], ["b2bNgxIcon", "", 1, "ngx-dropdown-button-icon", 3, "name"]], template: function B2bNgxDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B2bNgxDropdownComponent_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.showMenu($event, _r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, B2bNgxDropdownComponent_ul_4_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMenuShow);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonDirective, _ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_7__.B2bNgxIconDirective], styles: [".ngx-dropdown-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  background: #ffffff;\n  box-shadow: 0px 2px 12px rgba(15, 15, 17, 0.16);\n  border-radius: 4px;\n  width: 180px;\n  right: 0;\n}\n.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  width: 100%;\n}\n.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]:hover {\n  background-color: #eff4fa;\n}\n.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]   .ngx-dropdown-text[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #0f0f11;\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0FBQ0Q7QUFBQztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBRUY7QUFERTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0g7QUFGRztFQUNDLHlCQUFBO0FBSUo7QUFBRztFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFSiIsImZpbGUiOiJuZ3gtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmd4LWRyb3Bkb3duLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Lm5neC1kcm9wZG93biB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHotaW5kZXg6IDI7XG5cdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHRib3gtc2hhZG93OiAwcHggMnB4IDEycHggcmdiYSgxNSwgMTUsIDE3LCAwLjE2KTtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0d2lkdGg6IDE4MHB4O1xuXHRcdHJpZ2h0OiAwO1xuXHRcdC5uZ3gtZHJvcGRvd24tYnV0dG9uIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogOHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZjRmYTtcblx0XHRcdH1cblx0XHRcdC5uZ3gtZHJvcGRvd24tYnV0dG9uLWljb24ge1xuXHRcdFx0fVxuXHRcdFx0Lm5neC1kcm9wZG93bi10ZXh0IHtcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdFx0Y29sb3I6ICMwZjBmMTE7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */"], changeDetection: 0 });
B2bNgxDropdownComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], B2bNgxDropdownComponent);



/***/ }),

/***/ 56475:
/*!**************************************************************!*\
  !*** ./projects/ngx-dropdown/src/lib/ngx-dropdown.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxDropdownModule": () => (/* binding */ B2bNgxDropdownModule)
/* harmony export */ });
/* harmony import */ var _layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/ngx-dropdown.component */ 46353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class B2bNgxDropdownModule {
}
B2bNgxDropdownModule.ɵfac = function B2bNgxDropdownModule_Factory(t) { return new (t || B2bNgxDropdownModule)(); };
B2bNgxDropdownModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: B2bNgxDropdownModule });
B2bNgxDropdownModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_3__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](B2bNgxDropdownModule, { declarations: [_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxDropdownComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_3__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_4__.B2bNgxIconModule], exports: [_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxDropdownComponent] }); })();


/***/ }),

/***/ 37097:
/*!*************************************************!*\
  !*** ./projects/ngx-dropdown/src/public-api.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxDropdownComponent": () => (/* reexport safe */ _lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxDropdownComponent),
/* harmony export */   "B2bNgxDropdownModule": () => (/* reexport safe */ _lib_ngx_dropdown_module__WEBPACK_IMPORTED_MODULE_1__.B2bNgxDropdownModule),
/* harmony export */   "dropdownLabels": () => (/* reexport safe */ _lib_dropdown_labels_enum__WEBPACK_IMPORTED_MODULE_2__.dropdownLabels)
/* harmony export */ });
/* harmony import */ var _lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/layout/ngx-dropdown.component */ 46353);
/* harmony import */ var _lib_ngx_dropdown_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-dropdown.module */ 56475);
/* harmony import */ var _lib_dropdown_labels_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/dropdown-labels.enum */ 81774);





/***/ }),

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

/***/ 9747:
/*!***********************************************************************!*\
  !*** ./src/app/admin/pages/admin-users/admin-users-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUsersRoutingModule": () => (/* binding */ AdminUsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-users.component */ 54809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_admin_users_component__WEBPACK_IMPORTED_MODULE_0__.AdminUsersComponent,
    },
];
class AdminUsersRoutingModule {
}
AdminUsersRoutingModule.ɵfac = function AdminUsersRoutingModule_Factory(t) { return new (t || AdminUsersRoutingModule)(); };
AdminUsersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminUsersRoutingModule });
AdminUsersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminUsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81950:
/*!***************************************************************!*\
  !*** ./src/app/admin/pages/admin-users/admin-users.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUsersModule": () => (/* binding */ AdminUsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-users-routing.module */ 9747);
/* harmony import */ var _layout_admin_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-users.component */ 54809);
/* harmony import */ var _components_admin_users_list_admin_users_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin-users-list/admin-users-list.component */ 73837);
/* harmony import */ var _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-dropdown */ 37097);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-pagination */ 19963);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 61965);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _components_admin_users_filters_admin_users_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-users-filters/admin-users-filters.component */ 52942);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @b2b/ngx-tel */ 47321);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @b2b/ngx-country-select */ 17354);
/* harmony import */ var _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @b2b/ngx-toggle */ 75092);
/* harmony import */ var _components_change_quotes_amount_dialog_change_quotes_amount_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/change-quotes-amount-dialog/change-quotes-amount-dialog.component */ 63576);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _b2b_ngx_treeview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-treeview */ 37891);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-daterangepicker-material */ 46815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _projects_ngx_treeview_src_lib_treeview_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../projects/ngx-treeview/src/lib/treeview.module */ 34253);
























class AdminUsersModule {
}
AdminUsersModule.ɵfac = function AdminUsersModule_Factory(t) { return new (t || AdminUsersModule)(); };
AdminUsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AdminUsersModule });
AdminUsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _admin_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUsersRoutingModule,
        _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__.B2bNgxDropdownModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_13__.B2bNgxImageModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_14__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_15__.B2bNgxIconModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.B2bNgxPaginationModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.NgxDatatableModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_17__.B2bNgxSelectModule,
        _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_18__.B2bNgxTelModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_19__.B2bNgxInputModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_20__.B2bNgxCountrySelectModule,
        _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_21__.B2bNgxToggleModule,
        _b2b_ngx_treeview__WEBPACK_IMPORTED_MODULE_7__.TreeviewModule.forRoot(),
        ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_22__.NgxDaterangepickerMd.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AdminUsersModule, { declarations: [_layout_admin_users_component__WEBPACK_IMPORTED_MODULE_1__.AdminUsersComponent,
        _components_admin_users_list_admin_users_list_component__WEBPACK_IMPORTED_MODULE_2__.AdminUsersListComponent,
        _components_admin_users_filters_admin_users_filters_component__WEBPACK_IMPORTED_MODULE_5__.AdminUsersFiltersComponent,
        _components_change_quotes_amount_dialog_change_quotes_amount_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ChangeQuotesAmountDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _admin_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminUsersRoutingModule,
        _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__.B2bNgxDropdownModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_13__.B2bNgxImageModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_14__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_15__.B2bNgxIconModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.B2bNgxPaginationModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.NgxDatatableModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_17__.B2bNgxSelectModule,
        _b2b_ngx_tel__WEBPACK_IMPORTED_MODULE_18__.B2bNgxTelModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_19__.B2bNgxInputModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_20__.B2bNgxCountrySelectModule,
        _b2b_ngx_toggle__WEBPACK_IMPORTED_MODULE_21__.B2bNgxToggleModule, _projects_ngx_treeview_src_lib_treeview_module__WEBPACK_IMPORTED_MODULE_8__.TreeviewModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_22__.NgxDaterangepickerMd] }); })();


/***/ }),

/***/ 52942:
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-users/components/admin-users-filters/admin-users-filters.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUsersFiltersComponent": () => (/* binding */ AdminUsersFiltersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-select */ 20592);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../auth/services/auth/auth.service */ 24159);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);
/* harmony import */ var _projects_ngx_tel_src_lib_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../projects/ngx-tel/src/lib/layout/ngx-tel.component */ 15931);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../projects/ngx-country-select/src/lib/layout/ngx-country-select.component */ 11070);
/* harmony import */ var _projects_ngx_toggle_src_lib_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../projects/ngx-toggle/src/lib/layout/ngx-toggle.component */ 43607);
/* harmony import */ var _projects_ngx_treeview_src_lib_layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../projects/ngx-treeview/src/lib/layout/ngx-treeview.component */ 53278);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-daterangepicker-material */ 46815);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
var AdminUsersFiltersComponent_1;

















let AdminUsersFiltersComponent = AdminUsersFiltersComponent_1 = class AdminUsersFiltersComponent {
  constructor(formBuilder, _authService) {
    this.formBuilder = formBuilder;
    this._authService = _authService;
    this.socialAuthTypesOptions = [{
      value: "google",
      label: "Google"
    }, {
      value: "linkedin",
      label: "LinkedIn"
    }, {
      value: "otherRegistrations",
      label: "Other registrations"
    }];
    /* eslint-disable */

    this.onChange = filters => {};

    this.onTouched = () => {};

    this.b2bNgxSelectThemeEnum = _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_2__.B2bNgxSelectThemeEnum;
    this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__.B2bNgxInputThemeEnum;
    this.parsedCategories = [];
    this.range = {
      start: new Date(),
      end: new Date()
    };
    this.userRoles$ = this.getRoles();
  }

  ngOnChanges(changes) {
    if (changes && changes["categories"].currentValue && changes["categories"].currentValue.length) {
      this.parsedCategories = changes["categories"].currentValue.map(category => ({
        text: category.name,
        value: category._id,
        collapsed: true,
        checked: false,
        children: category.children.map(level2Category => ({
          text: level2Category.name,
          value: level2Category._id,
          collapsed: true,
          checked: false,
          children: level2Category.children.map(level3Category => ({
            text: level3Category.name,
            value: level3Category._id,
            collapsed: true,
            checked: false
          }))
        }))
      }));
    }
  }

  ngOnInit() {
    this.filtersForm = this.formBuilder.group({
      userType: null,
      registrationDate: this.formBuilder.control({
        // start: new Date(new Date().getFullYear(), 0, 1),
        // end: new Date(),
        startDate: null,
        endDate: null
      }),
      fullName: null,
      company: null,
      email: null,
      phone: null,
      country: null,
      excludeCountry: null,
      website: null,
      preferences: [],
      categoryOneOrFilterType: false,
      categoryTwoOrFilterType: false,
      categoryThreeOrFilterType: false,
      lastActivity: this.formBuilder.control({
        startDate: null,
        endDate: null
      }),
      titleOffer: null,
      offerTime: this.formBuilder.control({
        startDate: null,
        endDate: null
      }),
      socialAuthType: ""
    });
    this.filtersForm.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(filters => {
      this.onChange(filters);
    });
  }

  getRoles() {
    return this._authService.getRoles().pipe();
  }
  /* eslint-enable */


  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(filters) {}

};

AdminUsersFiltersComponent.ɵfac = function AdminUsersFiltersComponent_Factory(t) {
  return new (t || AdminUsersFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};

AdminUsersFiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AdminUsersFiltersComponent,
  selectors: [["b2b-admin-users-filters"]],
  inputs: {
    categories: "categories"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => AdminUsersFiltersComponent_1),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  decls: 37,
  vars: 25,
  consts: [[1, "admin-users-filters", 3, "formGroup"], [1, "admin-users-filters__wrapper"], ["formControlName", "userType", "placeholder", "Select user type", "bindValue", "_id", "bindLabel", "displayName", 3, "options", "multiple", "theme"], ["b2bNgxInput", "", "ngxDaterangepickerMd", "", "label", "Registration Time", "type", "text", "formControlName", "registrationDate", "name", "daterange", 3, "theme", "showClearButton"], ["b2bNgxInput", "", "label", "Full Name", "placeholder", "Enter full name", "type", "text", "matInput", "", "formControlName", "fullName", "name", "fullName", 3, "theme"], ["b2bNgxInput", "", "label", "Company", "placeholder", "Enter company", "type", "text", "matInput", "", "formControlName", "company", "name", "company", 3, "theme"], ["b2bNgxInput", "", "label", "Email", "placeholder", "Enter email", "type", "text", "matInput", "", "formControlName", "email", "name", "email", 3, "theme"], ["formControlName", "country", "placeholder", "Select Country", 3, "multiple", "theme"], ["formControlName", "excludeCountry", "placeholder", "Select Country to exclude", 3, "multiple", "theme"], ["b2bNgxInput", "", "label", "Website", "type", "text", "placeholder", "Enter website", "matInput", "", "formControlName", "website", "name", "website", 3, "theme"], ["b2bNgxInput", "", "ngxDaterangepickerMd", "", "label", "Last Activity", "type", "text", "formControlName", "lastActivity", "name", "daterange", 3, "theme", "showClearButton"], ["b2bNgxInput", "", "ngxDaterangepickerMd", "", "label", "Offers placed time", "type", "text", "formControlName", "offerTime", "name", "daterange", 3, "theme", "showClearButton"], ["placeholder", "phone number", "formControlName", "phone", 3, "theme"], ["formControlName", "socialAuthType", "placeholder", "Select social auth type", "bindValue", "value", "bindLabel", "label", 3, "options", "multiple", "theme"], [1, "admin-users-filters__categories"], ["formControlName", "preferences", "theme", "white", "label", "Preferences", "position", "right", 3, "items"], [1, "admin-users-filters__categories--toggles"], ["formControlName", "categoryOneOrFilterType", "customLabel", "category__1 OR"], ["formControlName", "categoryTwoOrFilterType", "customLabel", "category__2 OR"], ["formControlName", "categoryThreeOrFilterType", "customLabel", "category__3 OR"]],
  template: function AdminUsersFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div")(3, "b2b-ngx-select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "User type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div")(15, "b2b-ngx-country-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div")(18, "b2b-ngx-country-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div")(26, "b2b-ngx-tel", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div")(29, "b2b-ngx-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Social auth type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "b2b-ngx-treeview", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "b2b-ngx-toggle", 17)(35, "b2b-ngx-toggle", 18)(36, "b2b-ngx-toggle", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.filtersForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 23, ctx.userRoles$))("multiple", true)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("showClearButton", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multiple", true)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multiple", true)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("showClearButton", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("showClearButton", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.socialAuthTypesOptions)("multiple", true)("theme", ctx.b2bNgxSelectThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.parsedCategories);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_7__.B2bNgxSelectComponent, _projects_ngx_tel_src_lib_layout_ngx_tel_component__WEBPACK_IMPORTED_MODULE_8__.B2bNgxTelComponent, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_9__.B2bNgxInputDirective, _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_10__.B2bNgxCountrySelectComponent, _projects_ngx_toggle_src_lib_layout_ngx_toggle_component__WEBPACK_IMPORTED_MODULE_11__.B2bNgxToggleComponent, _projects_ngx_treeview_src_lib_layout_ngx_treeview_component__WEBPACK_IMPORTED_MODULE_1__.B2bNgxTreeviewComponent, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_12__.DaterangepickerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: [".admin-users-filters__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: end;\n}\n.admin-users-filters__wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.admin-users-filters__wrapper[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.admin-users-filters__categories[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 45%;\n}\n.admin-users-filters__categories[_ngcontent-%COMP%]   b2b-ngx-treeview[_ngcontent-%COMP%] {\n  width: 88%;\n}\n.admin-users-filters__categories[_ngcontent-%COMP%]   b2b-ngx-toggle[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.admin-users-filters__categories--toggles[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXVzZXJzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFGO0FBQ0U7RUFDQyxVQUFBO0FBQ0g7QUFFRTtFQUNDLHVCQUFBO0FBQUg7QUFHQztFQUNDLGdCQUFBO0VBQ0EsVUFBQTtBQURGO0FBS0U7RUFDQyxVQUFBO0FBSEg7QUFLRTtFQUNDLGdCQUFBO0FBSEg7QUFLRTtFQUNDLGVBQUE7RUFDQSxhQUFBO0FBSEgiLCJmaWxlIjoiYWRtaW4tdXNlcnMtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi11c2Vycy1maWx0ZXJzIHtcblx0Jl9fd3JhcHBlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0Z2FwOiAxMHB4O1xuXHRcdGFsaWduLWl0ZW1zOiBlbmQ7XG5cdFx0JiA+IGRpdiB7XG5cdFx0XHR3aWR0aDogMjAlO1xuXHRcdH1cblxuXHRcdC5waG9uZSB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHR9XG5cdH1cblx0Jl9fY2F0ZWdvcmllcyB7XG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHR3aWR0aDogNDUlO1xuXHRcdC8vIGRpc3BsYXk6IGZsZXg7XG5cdFx0Ly8gZ2FwOiA1cHg7XG5cdFx0Ly8gYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRiMmItbmd4LXRyZWV2aWV3IHtcblx0XHRcdHdpZHRoOiA4OCU7XG5cdFx0fVxuXHRcdGIyYi1uZ3gtdG9nZ2xlIHtcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0fVxuXHRcdCYtLXRvZ2dsZXMge1xuXHRcdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"]
});
AdminUsersFiltersComponent = AdminUsersFiltersComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], AdminUsersFiltersComponent);


/***/ }),

/***/ 73837:
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-users/components/admin-users-list/admin-users-list.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUsersListComponent": () => (/* binding */ AdminUsersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _projects_ngx_dropdown_src_lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../projects/ngx-dropdown/src/lib/layout/ngx-dropdown.component */ 46353);
/* harmony import */ var _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../projects/ngx-image/src/lib/directive/ngx-image.directive */ 70239);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);







function AdminUsersListComponent_li_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "p", 15)(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "1 Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AdminUsersListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5)(4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 7)(7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminUsersListComponent_li_1_div_9_Template, 6, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10)(11, "b2b-ngx-dropdown", 11)(12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", user_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", user_r1.previewPhoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.role == null ? null : user_r1.role.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.menuOptions)("optionToReturn", user_r1);
} }
class AdminUsersListComponent {
}
AdminUsersListComponent.ɵfac = function AdminUsersListComponent_Factory(t) { return new (t || AdminUsersListComponent)(); };
AdminUsersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminUsersListComponent, selectors: [["app-admin-users-list"]], inputs: { users: "users", menuOptions: "menuOptions" }, decls: 2, vars: 1, consts: [[1, "admin-users-list"], ["class", "admin-users-list-item", 4, "ngFor", "ngForOf"], [1, "admin-users-list-item"], [1, "admin-users-list-item-link", 3, "routerLink"], ["b2bNgxImage", "", 1, "admin-users-list-item-img", 3, "name"], [1, "admin-users-list-item-info"], [1, "admin-users-list-item-info-title"], [1, "admin-users-list-item-info-additional"], [1, "admin-users-list-item-info-added"], ["class", "admin-users-list-item-chats", 4, "ngIf"], [1, "admin-users-list-item-more"], [3, "options", "optionToReturn"], ["b2bNgxButton", "", 1, "flex", "items-center"], ["b2bNgxIcon", "", "name", "more"], [1, "admin-users-list-item-chats"], [1, "admin-users-list-item-chat"], [1, "admin-users-list-item-chat-amount"], [1, "admin-users-list-item-chat-messages"]], template: function AdminUsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminUsersListComponent_li_1_Template, 14, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _projects_ngx_dropdown_src_lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxDropdownComponent, _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxImageDirective, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_5__.B2bNgxButtonDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_6__.B2bNgxIconDirective], styles: [".admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 24px;\n  background: #ffffff;\n  border-radius: 4px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 4px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 16px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-info[_ngcontent-%COMP%]   .admin-users-list-item-info-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #0f0f11;\n  height: 20px;\n  display: flex;\n  align-items: center;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-info-additional[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  color: #9fa4bb;\n  height: 20px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-info-additional[_ngcontent-%COMP%]   .admin-users-list-item-info-icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-info-additional[_ngcontent-%COMP%]   .admin-users-list-item-info-views[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-info-additional[_ngcontent-%COMP%]   .admin-users-list-item-info-stars[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-chats[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-chats[_ngcontent-%COMP%]   .admin-users-list-item-chat[_ngcontent-%COMP%] {\n  background: #f3f6f8;\n  border-radius: 16px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-chats[_ngcontent-%COMP%]   .admin-users-list-item-chat[_ngcontent-%COMP%]   .admin-users-list-item-chat-amount[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  color: #0f0f11;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-chats[_ngcontent-%COMP%]   .admin-users-list-item-chat[_ngcontent-%COMP%]   .admin-users-list-item-chat-messages[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #005dff;\n  border-radius: 100%;\n  font-size: 11px;\n  color: #ffffff;\n  margin-left: 10px;\n  padding-top: 1px;\n  padding-right: 1px;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]   .admin-users-list-item-link[_ngcontent-%COMP%]   .admin-users-list-item-more[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-users-list[_ngcontent-%COMP%]   .admin-users-list-item[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXVzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxlQUFBO0FBQUY7QUFDRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNIO0FBQUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRztFQUNDLE9BQUE7RUFDQSxpQkFBQTtBQUVKO0FBREk7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUdMO0FBQUc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUVKO0FBREk7RUFDQyxpQkFBQTtBQUdMO0FBQ0k7RUFDQyxnQkFBQTtBQUNMO0FBQ0k7RUFDQyxnQkFBQTtBQUNMO0FBRUc7RUFDQyxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUNJO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0w7QUFBSztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFTjtBQUFLO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVOO0FBRUc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR0U7RUFDQyxhQUFBO0FBREgiLCJmaWxlIjoiYWRtaW4tdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi11c2Vycy1saXN0IHtcblx0LmFkbWluLXVzZXJzLWxpc3QtaXRlbSB7XG5cdFx0bWFyZ2luLXRvcDogNHB4O1xuXHRcdC5hZG1pbi11c2Vycy1saXN0LWl0ZW0tbGluayB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDE2cHggMjRweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHQuYWRtaW4tdXNlcnMtbGlzdC1pdGVtLWltZyB7XG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdH1cblx0XHRcdC5hZG1pbi11c2Vycy1saXN0LWl0ZW0taW5mbyB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNnB4O1xuXHRcdFx0XHQuYWRtaW4tdXNlcnMtbGlzdC1pdGVtLWluZm8tdGl0bGUge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuYWRtaW4tdXNlcnMtbGlzdC1pdGVtLWluZm8tYWRkaXRpb25hbCB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGNvbG9yOiAjOWZhNGJiO1xuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdC5hZG1pbi11c2Vycy1saXN0LWl0ZW0taW5mby1pY29uIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuYWRtaW4tdXNlcnMtbGlzdC1pdGVtLWluZm8tYWRkZWQge1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5hZG1pbi11c2Vycy1saXN0LWl0ZW0taW5mby12aWV3cyB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuYWRtaW4tdXNlcnMtbGlzdC1pdGVtLWluZm8tc3RhcnMge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5hZG1pbi11c2Vycy1saXN0LWl0ZW0tY2hhdHMge1xuXHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0LmFkbWluLXVzZXJzLWxpc3QtaXRlbS1jaGF0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmNmY4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdC5hZG1pbi11c2Vycy1saXN0LWl0ZW0tY2hhdC1hbW91bnQge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYWRtaW4tdXNlcnMtbGlzdC1pdGVtLWNoYXQtbWVzc2FnZXMge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwNWRmZjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDFweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDFweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5hZG1pbi11c2Vycy1saXN0LWl0ZW0tbW9yZSB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 63576:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-users/components/change-quotes-amount-dialog/change-quotes-amount-dialog.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeQuotesAmountDialogComponent": () => (/* binding */ ChangeQuotesAmountDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);










function ChangeQuotesAmountDialogComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function ChangeQuotesAmountDialogComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please use only number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
} }
class ChangeQuotesAmountDialogComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_1__.B2bNgxButtonThemeEnum;
        this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_2__.B2bNgxInputThemeEnum;
        this.currentValueQuotes = this.data.currentValue;
        this.quotesValue = this.currentValueQuotes;
        this.form = this.fb.group({
            quotesNumber: [""],
        });
        this.formState = this.form.controls;
    }
    ngOnInit() { }
    confirmChanges() {
        this.dialogRef.close(+this.quotesValue);
    }
}
ChangeQuotesAmountDialogComponent.ɵfac = function ChangeQuotesAmountDialogComponent_Factory(t) { return new (t || ChangeQuotesAmountDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
ChangeQuotesAmountDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeQuotesAmountDialogComponent, selectors: [["b2b-change-quotes-amount-dialog"]], decls: 9, vars: 7, consts: [[1, "modal-wrapper"], [3, "formGroup"], ["formControlName", "quotesNumber", "b2bNgxInput", "", 3, "theme", "ngModel", "ngModelChange"], ["class", "error", 4, "ngIf"], ["b2bNgxButton", "", 3, "theme", "click"], [1, "error"]], template: function ChangeQuotesAmountDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1)(4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangeQuotesAmountDialogComponent_Template_input_ngModelChange_4_listener($event) { return ctx.quotesValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChangeQuotesAmountDialogComponent_p_5_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChangeQuotesAmountDialogComponent_p_6_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeQuotesAmountDialogComponent_Template_button_click_7_listener() { return ctx.confirmChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current quotes value: ", ctx.currentValueQuotes, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("ngModel", ctx.quotesValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formState.quotesNumber.touched && (ctx.formState.quotesNumber.errors == null ? null : ctx.formState.quotesNumber.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formState.quotesNumber.touched && (ctx.formState.quotesNumber.errors == null ? null : ctx.formState.quotesNumber.errors.number));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonDirective, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_7__.B2bNgxInputDirective], styles: ["[_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n}\n[_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #e63d3d;\n  margin-top: 11px;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n  padding: 15px 40px;\n  width: 100%;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1xdW90ZXMtYW1vdW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLFlBQUE7RUFDQSxhQUFBO0FBQUY7QUFDRTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNIO0FBQ0U7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNIIiwiZmlsZSI6ImNoYW5nZS1xdW90ZXMtYW1vdW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0Lm1vZGFsLXdyYXBwZXIge1xuXHRcdHdpZHRoOiAzMDBweDtcblx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdC5lcnJvciB7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRjb2xvcjogI2U2M2QzZDtcblx0XHRcdG1hcmdpbi10b3A6IDExcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdH1cblx0XHRidXR0b24ge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRwYWRkaW5nOiAxNXB4IDQwcHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("fadeInOut", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [
                    // :enter is alias to 'void => *'
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1 })),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":leave", [
                    // :leave is alias to '* => void'
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 54809:
/*!*************************************************************************!*\
  !*** ./src/app/admin/pages/admin-users/layout/admin-users.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUsersComponent": () => (/* binding */ AdminUsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 61965);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _components_change_quotes_amount_dialog_change_quotes_amount_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/change-quotes-amount-dialog/change-quotes-amount-dialog.component */ 63576);
/* harmony import */ var _client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../client/shared/components/confirmation-dialog/confirmation-dialog.component */ 4265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _client_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../client/pages/client-profile/services/user/user.service */ 82021);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/api/api.service */ 96931);
/* harmony import */ var _client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../client/services/categories/categories.service */ 57454);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _components_admin_users_filters_admin_users_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/admin-users-filters/admin-users-filters.component */ 52942);






















const _c0 = ["headerCategoryOne"];
const _c1 = ["editCategoryOne"];
const _c2 = ["headerCategoryTwo"];
const _c3 = ["editCategoryTwo"];
const _c4 = ["headerPreferences"];
const _c5 = ["editPreferences"];
const _c6 = ["headerOffers"];
const _c7 = ["editOffers"];
const _c8 = ["headerOffersDate"];
const _c9 = ["editOffersDate"];
const _c10 = ["headerActions"];
const _c11 = ["editActions"];
const _c12 = ["headerSoldCargo"];
const _c13 = ["editSoldCargo"];

function AdminUsersComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "category__1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AdminUsersComponent_ng_template_9_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](category_r28.name);
  }
}

function AdminUsersComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AdminUsersComponent_ng_template_9_span_0_Template, 2, 1, "span", 17);
  }

  if (rf & 2) {
    const value_r26 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", value_r26);
  }
}

function AdminUsersComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Prefered cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AdminUsersComponent_ng_template_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const category_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", category_r34.name + ", ", " ");
  }
}

function AdminUsersComponent_ng_template_13_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_13_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const row_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().row;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.showMore($event, row_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const row_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().row;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", ctx_r33.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (row_r30 == null ? null : row_r30.visible) ? "Show less" : "Show More", " ");
  }
}

function AdminUsersComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminUsersComponent_ng_template_13_span_1_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AdminUsersComponent_ng_template_13_button_2_Template, 2, 2, "button", 19);
  }

  if (rf & 2) {
    const row_r30 = ctx.row;
    const value_r31 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", row_r30 && (row_r30 == null ? null : row_r30.visible));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", value_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r30.category__3.length > 3);
  }
}

function AdminUsersComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Placed offers (offer title)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AdminUsersComponent_ng_template_17_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const offer_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](offer_r43.title + ", ");
  }
}

function AdminUsersComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AdminUsersComponent_ng_template_17_span_0_Template, 2, 1, "span", 17);
  }

  if (rf & 2) {
    const value_r41 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", value_r41);
  }
}

function AdminUsersComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Placed_offers_data");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AdminUsersComponent_ng_template_21_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const offer_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, offer_r48.date, "yy-MM-dd") + ", ");
  }
}

function AdminUsersComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AdminUsersComponent_ng_template_21_span_0_Template, 3, 4, "span", 17);
  }

  if (rf & 2) {
    const value_r46 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", value_r46);
  }
}

function AdminUsersComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Sold_cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AdminUsersComponent_ng_template_25_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const offer_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](offer_r53.title + " | " + "[ " + offer_r53.reasonForDeletion + " ]" + ", ");
  }
}

function AdminUsersComponent_ng_template_25_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminUsersComponent_ng_template_25_div_0_div_1_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const offer_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", offer_r53.deleted && offer_r53.reasonForDeletion);
  }
}

function AdminUsersComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AdminUsersComponent_ng_template_25_div_0_Template, 2, 1, "div", 17);
  }

  if (rf & 2) {
    const value_r51 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", value_r51);
  }
}

function AdminUsersComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AdminUsersComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminUsersComponent_ng_template_29_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r60);
      const value_r58 = restoredCtx.value;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r59.deleteUser($event, value_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", ctx_r23.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
  }
}

let AdminUsersComponent = class AdminUsersComponent {
  constructor(_userService, _hotToastrService, _apiService, _categoriesService, _router, _formBuilder, dialog, changeDetectionRef) {
    this._userService = _userService;
    this._hotToastrService = _hotToastrService;
    this._apiService = _apiService;
    this._categoriesService = _categoriesService;
    this._router = _router;
    this._formBuilder = _formBuilder;
    this.dialog = dialog;
    this.changeDetectionRef = changeDetectionRef;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__.B2bNgxButtonThemeEnum;
    this.pageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.forceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.filtersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.columnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.ColumnMode;
    this.columns = [];
    this.MILLISECOND_IN_ONE_DAY = 86400000;
    this.users$ = this.getUsers$(); // this.menuOptions = this._getMenuOptions();

    this.totalCount = 0;
    this.page = 0;
  }

  ngOnInit() {
    this.columns = this.getColumns();
    this.filtersControl = this._formBuilder.control({});
    this.filtersControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(filters => {
      var _a;

      const {
        preferences = [],
        categoryOneOrFilterType,
        categoryTwoOrFilterType,
        categoryThreeOrFilterType,
        ...otherFilters
      } = filters;
      const sameRangeForRegistration = new Date(otherFilters.registrationDate.startDate).getTime() === new Date(otherFilters.registrationDate.endDate).getTime();
      const sameRangeForLastActivity = new Date(otherFilters.lastActivity.startDate).getTime() === new Date(otherFilters.lastActivity.endDate).getTime();
      const sameRangeForOfferTime = new Date(otherFilters.offerTime.startDate).getTime() === new Date(otherFilters.offerTime.endDate).getTime();
      const parsedFilters = { ...otherFilters,
        phone: ((_a = otherFilters === null || otherFilters === void 0 ? void 0 : otherFilters.phone) === null || _a === void 0 ? void 0 : _a.e164Number) ? otherFilters.phone.e164Number.replace("+", "") : null,
        registrationDate: otherFilters.registrationDate.startDate ? `${new Date(new Date(otherFilters.registrationDate.startDate).getTime() + this.MILLISECOND_IN_ONE_DAY).toISOString().split("T")[0]},${new Date(new Date(otherFilters.registrationDate.endDate).getTime() + (sameRangeForRegistration ? this.MILLISECOND_IN_ONE_DAY : 0)).toISOString().split("T")[0]}` : null,
        lastActivity: otherFilters.lastActivity.startDate ? `${new Date(new Date(otherFilters.lastActivity.startDate).getTime() + this.MILLISECOND_IN_ONE_DAY).toISOString().split("T")[0]},${new Date(new Date(otherFilters.lastActivity.endDate).getTime() + (sameRangeForLastActivity ? this.MILLISECOND_IN_ONE_DAY : 0)).toISOString().split("T")[0]}` : null,
        offerTime: otherFilters.offerTime.startDate ? `${new Date(new Date(otherFilters.offerTime.startDate).getTime() + this.MILLISECOND_IN_ONE_DAY).toISOString().split("T")[0]},${new Date(new Date(otherFilters.offerTime.endDate).getTime() + (sameRangeForOfferTime ? this.MILLISECOND_IN_ONE_DAY : 0)).toISOString().split("T")[0]}` : null,
        categories: !!preferences && preferences.filter(id => this.parsedCategories[id].level === 1).map(el => this.parsedCategories[el].name).join(categoryOneOrFilterType ? "OR" : "AND"),
        categoryPosts: !!preferences && preferences.filter(id => this.parsedCategories[id].level === 2).map(el => this.parsedCategories[el].name).join(categoryTwoOrFilterType ? "OR" : "AND"),
        preferredCargo: !!preferences && preferences.filter(id => this.parsedCategories[id].level === 3).map(el => this.parsedCategories[el].name).join(categoryThreeOrFilterType ? "OR" : "AND")
      };
      this.pageSubject.next(0);
      this.filtersSubject.next(parsedFilters);
    });
  }

  export() {
    const page = this.pageSubject.getValue();
    const filters = this.filtersSubject.getValue();

    this._userService.getUsersCsv(page, 10, filters).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(response => {
      const downloadURL = window.URL.createObjectURL(response);
      const link = document.createElement("a");
      link.href = downloadURL;
      link.download = "users.csv";
      link.click();
    });
  }

  getUsers$() {
    const categories$ = this.getCategories();
    const page$ = this.pageSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(0));
    const force$ = this.forceSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(true));
    const filters$ = this.filtersSubject.asObservable();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([categories$, page$, force$, filters$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([categories, page, _, filters]) => {
      return this._userService.getUsers(page, _, filters).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(res => ({
        categories,
        res
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(data => {
      this.categories = data.categories.categories;
      const parsedUsersPreferences = this.formatUsersPreferences(data.categories, data.res.users);
      const parsedUsersDate = parsedUsersPreferences.map(user => {
        var _a;

        return { ...user,
          country: user.country || (((_a = user.phone) === null || _a === void 0 ? void 0 : _a.countryCode) ? user.phone.countryCode : null),
          ...(user.lastActivity ? {
            lastActivity: new Date(new Date(user.lastActivity).getTime()).toISOString().split("T")[0]
          } : {})
        };
      });
      this.totalCount = data.res.totalCount;
      return parsedUsersDate;
    }));
  }

  formatUsersPreferences(categories, users) {
    if (!categories.categories.length || !users || !users.length) {
      return [];
    }

    this.parsedCategories = this.parseCategories(categories.categories);
    return users.map(user => {
      const userCategories = user.preferences.map(id => this.parsedCategories[id]);
      return { ...user,
        visible: false,
        category__1: userCategories.filter(el => (el === null || el === void 0 ? void 0 : el.level) === 1),
        category__2: userCategories.filter(el => (el === null || el === void 0 ? void 0 : el.level) === 2),
        category__3: userCategories.filter(el => (el === null || el === void 0 ? void 0 : el.level) === 3)
      };
    });
  }

  showMore(event, row) {
    event.stopImmediatePropagation();
    this.users$ = this.users$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(users => {
      const currUserIdx = users.findIndex(el => el._id === row._id);

      if (currUserIdx >= 0) {
        users[currUserIdx].visible = !users[currUserIdx].visible || false;
      }

      return users;
    }));
  }

  parseCategories(categories, level = 1) {
    return typeof categories !== "string" ? categories === null || categories === void 0 ? void 0 : categories.reduce((pre, curr) => {
      return { ...pre,
        [curr._id]: { ...curr,
          level
        },
        ...(curr.children && curr.children.length ? this.parseCategories([...curr.children], level + 1) : [])
      };
    }, {}) : null;
  }

  onClick(event) {
    var _a;

    if (event.type === "click" && event.column.name === "Quotes") {
      this.dialog.open(_components_change_quotes_amount_dialog_change_quotes_amount_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ChangeQuotesAmountDialogComponent, {
        data: {
          currentValue: (_a = event.row.rfqQuotes) !== null && _a !== void 0 ? _a : 0
        }
      }).afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(res => !!res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(quotesNumber => this._userService.updateUserQuotes(event.row._id, quotesNumber).subscribe(() => {
        this.changeDetectionRef.detectChanges();
      }))).subscribe();
      return;
    }

    if (event.type === "click") {
      this._router.navigate([this._router.url, event.row._id]);
    }
  }

  getCategories() {
    return this._categoriesService.getCategories$();
  }

  setPage(event) {
    this.page = event.offset;
    this.pageSubject.next(event.offset);
  }

  deleteUser(event, id) {
    event.stopImmediatePropagation();
    this.dialog.open(_client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialogComponent, {
      data: {
        title: "Delete User",
        message: "Are you sure you want to delete user?",
        confirmButtonText: "Delete",
        confirmButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__.B2bNgxButtonThemeEnum.BACKGROUND_RED,
        cancelButtonText: "Cancel",
        cancelButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_7__.B2bNgxButtonThemeEnum.OUTLINE_BLACK
      }
    }).afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(res => !!res), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.mergeMap)(() => {
      return this._userService.deleteUserById(id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this), this._hotToastrService.observe({
        loading: "User deleting",
        success: "User deleted",
        error: "User deleting failed"
      }));
    })).subscribe(() => {
      this.forceSubject.next(true);
    });
  } // private _getMenuOptions() {
  // 	return [
  // 		{
  // 			label: "Delete",
  // 			icon: "delete-red",
  // 			onClick: (user) => {
  // 				this._userService
  // 					.deleteUserById(user._id)
  // 					.pipe(
  // 						untilDestroyed(this),
  // 						this._hotToastrService.observe({
  // 							loading: "User deleting",
  // 							success: "User deleted",
  // 							error: "User deleting failed",
  // 						})
  // 					)
  // 					.subscribe(() => {
  // 						this.forceSubject.next(true);
  // 					});
  // 			},
  // 		},
  // 	];
  // }


  stopImmediatePropagation(event) {//
  }

  getColumns() {
    return [{
      name: "Type of User",
      prop: "role.displayName"
    }, {
      name: "Quotes",
      prop: "rfqQuotes"
    }, {
      name: "Registration date/time",
      prop: "createdAt",
      pipe: {
        transform(date) {
          return new _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe("en-US").transform(date, "yyyy-MM-dd");
        }

      }
    }, {
      name: "Full name",
      prop: "fullName"
    }, {
      name: "Company(optional)",
      prop: "company"
    }, {
      name: "Email",
      prop: "email"
    }, {
      name: "Phone number",
      prop: "phone.e164Number"
    }, {
      name: "Country",
      prop: "country"
    }, {
      name: "Country(by phone number)",
      prop: "phone.countryCode"
    }, {
      name: "Website",
      prop: "site"
    }, {
      name: "Email confirmed",
      prop: "emailConfirmed"
    }, {
      name: "Social auth type",
      prop: "socialAuthType"
    }, {
      cellTemplate: this.editCategoryOne,
      headerTemplate: this.headerCategoryOne,
      prop: "category__1"
    }, // {
    // 	cellTemplate: this.editCategoryTwo,
    // 	headerTemplate: this.headerCategoryTwo,
    // 	prop: "category__2",
    // },
    {
      cellTemplate: this.editPreferences,
      headerTemplate: this.headerPreferences,
      prop: "category__3"
    }, {
      name: "Last activity",
      prop: "lastActivity"
    }, {
      cellTemplate: this.editOffers,
      headerTemplate: this.headerOffers,
      prop: "offers"
    }, {
      cellTemplate: this.editOffersDate,
      headerTemplate: this.headerOffersDate,
      prop: "offers"
    }, {
      cellTemplate: this.editSoldCargo,
      headerTemplate: this.headerSoldCargo,
      prop: "offers"
    }, {
      cellTemplate: this.editActions,
      headerTemplate: this.headerActions,
      prop: "_id"
    }];
  }

};

AdminUsersComponent.ɵfac = function AdminUsersComponent_Factory(t) {
  return new (t || AdminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_client_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_19__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};

AdminUsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AdminUsersComponent,
  selectors: [["b2b-admin-users"]],
  viewQuery: function AdminUsersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c5, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c7, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c8, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c9, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c10, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c11, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c12, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c13, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerCategoryOne = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editCategoryOne = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerCategoryTwo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editCategoryTwo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerPreferences = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editPreferences = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerOffers = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editOffers = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerOffersDate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editOffersDate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerActions = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editActions = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerSoldCargo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.editSoldCargo = _t.first);
    }
  },
  decls: 31,
  vars: 16,
  consts: [[1, "admin-users"], ["b2bNgxButton", "", 1, "admin-offers__button", 3, "theme", "click"], [3, "categories", "formControl"], [1, "admin-users__table"], ["rowHeight", "auto", 1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "scrollbarH", "externalPaging", "count", "offset", "limit", "virtualization", "activate", "scroll", "page"], ["headerCategoryOne", ""], ["editCategoryOne", ""], ["headerPreferences", ""], ["editPreferences", ""], ["headerOffers", ""], ["editOffers", ""], ["headerOffersDate", ""], ["editOffersDate", ""], ["headerSoldCargo", ""], ["editSoldCargo", ""], ["headerActions", ""], ["editActions", ""], [4, "ngFor", "ngForOf"], [1, "custom"], ["b2bNgxButton", "", 3, "theme", "click", 4, "ngIf"], ["b2bNgxButton", "", 3, "theme", "click"], [4, "ngIf"]],
  template: function AdminUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_1_listener() {
        return ctx.export();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Export ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "b2b-admin-users-filters", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3)(5, "ngx-datatable", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("activate", function AdminUsersComponent_Template_ngx_datatable_activate_5_listener($event) {
        return ctx.onClick($event);
      })("scroll", function AdminUsersComponent_Template_ngx_datatable_scroll_5_listener($event) {
        return ctx.stopImmediatePropagation($event);
      })("page", function AdminUsersComponent_Template_ngx_datatable_page_5_listener($event) {
        return ctx.setPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AdminUsersComponent_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AdminUsersComponent_ng_template_9_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AdminUsersComponent_ng_template_11_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AdminUsersComponent_ng_template_13_Template, 3, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AdminUsersComponent_ng_template_15_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AdminUsersComponent_ng_template_17_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AdminUsersComponent_ng_template_19_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AdminUsersComponent_ng_template_21_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AdminUsersComponent_ng_template_23_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AdminUsersComponent_ng_template_25_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AdminUsersComponent_ng_template_27_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AdminUsersComponent_ng_template_29_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("categories", ctx.categories)("formControl", ctx.filtersControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 14, ctx.users$))("columns", ctx.columns)("columnMode", ctx.columnMode.force)("headerHeight", 50)("footerHeight", 50)("scrollbarH", true)("externalPaging", true)("count", ctx.totalCount)("offset", ctx.page)("limit", 10)("virtualization", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControlDirective, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_23__.B2bNgxButtonDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.DatatableComponent, _components_admin_users_filters_admin_users_filters_component__WEBPACK_IMPORTED_MODULE_5__.AdminUsersFiltersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe],
  styles: [".admin-users[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.admin-users__table[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.admin-offers__button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 7.5px 15px;\n  margin: 0 15px 15px;\n  border-radius: 5px;\n}\n.admin-offers__button[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.admin-offers__button[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n  .datatable-row-detail {\n  width: 100vw;\n}\n  .datatable-header {\n  min-width: 100%;\n}\n  .datatable-body {\n  min-width: 100%;\n}\n  .datatable-body-cell button {\n  margin-top: 10px;\n}\n  .datatable-body-cell .custom {\n  height: 45px;\n  overflow: hidden;\n}\n  .datatable-body-cell .show {\n  overflow: visible;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQUNEO0FBQUM7RUFDQyxnQkFBQTtBQUVGO0FBRUE7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNEO0FBQUM7RUFDQyxjQUFBO0FBRUY7QUFBQztFQUNDLGVBQUE7QUFFRjtBQUdDO0VBQ0MsWUFBQTtBQUFGO0FBRUM7RUFDQyxlQUFBO0FBQUY7QUFHQztFQUNDLGVBQUE7QUFERjtBQUlFO0VBQ0MsZ0JBQUE7QUFGSDtBQUlFO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0FBRkg7QUFJRTtFQUNDLGlCQUFBO0VBQ0EsWUFBQTtBQUZIIiwiZmlsZSI6ImFkbWluLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLXVzZXJzIHtcblx0cGFkZGluZzogMzBweDtcblx0Jl9fdGFibGUge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdH1cbn1cblxuLmFkbWluLW9mZmVyc19fYnV0dG9uIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nOiA3LjVweCAxNXB4O1xuXHRtYXJnaW46IDAgMTVweCAxNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdCY6Zmlyc3QtY2hpbGQge1xuXHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHR9XG5cdCY6bGFzdC1jaGlsZCB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHR9XG59XG5cbjo6bmctZGVlcCB7XG5cdC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG5cdFx0d2lkdGg6IDEwMHZ3O1xuXHR9XG5cdC5kYXRhdGFibGUtaGVhZGVyIHtcblx0XHRtaW4td2lkdGg6IDEwMCU7XG5cdH1cblxuXHQuZGF0YXRhYmxlLWJvZHkge1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0fVxuXHQuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG5cdFx0YnV0dG9uIHtcblx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0fVxuXHRcdC5jdXN0b20ge1xuXHRcdFx0aGVpZ2h0OiA0NXB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR9XG5cdFx0LnNob3cge1xuXHRcdFx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0fVxuXHR9XG59XG4iXX0= */"],
  changeDetection: 0
});
AdminUsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)()], AdminUsersComponent);


/***/ }),

/***/ 4265:
/*!***********************************************************************************************!*\
  !*** ./src/app/client/shared/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDialogComponent": () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);






function ConfirmationDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.title);
} }
function ConfirmationDialogComponent_hr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 7);
} }
function ConfirmationDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.message);
} }
function ConfirmationDialogComponent_hr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 7);
} }
class ConfirmationDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_1__.B2bNgxButtonThemeEnum;
        this.confirmButtonTheme = this.data.confirmButtonTheme;
        this.cancelButtonTheme = this.data.cancelButtonTheme;
    }
    closeDialog(res) {
        this.dialogRef.close(res);
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
ConfirmationDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["b2b-confirmation-dialog"]], decls: 10, vars: 6, consts: [[1, "confirmation-dialog"], ["class", "header", 4, "ngIf"], ["color", "#f5f5f5", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "footer"], ["b2bNgxButton", "", 1, "btn", 3, "click"], [1, "header"], ["color", "#f5f5f5"], [1, "body"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmationDialogComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmationDialogComponent_hr_2_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmationDialogComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmationDialogComponent_hr_4_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_6_listener() { return ctx.closeDialog(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_8_listener() { return ctx.closeDialog(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.confirmButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.cancelButtonText, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxButtonDirective], styles: ["[_nghost-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 20vh;\n  position: relative;\n}\n[_nghost-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  gap: 15px;\n  justify-content: center;\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFDRTs7RUFFQyxrQkFBQTtBQUNIO0FBR0M7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBREY7QUFFRTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtBQUFIIiwiZmlsZSI6ImNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdC5jb25maXJtYXRpb24tZGlhbG9nIHtcblx0XHR3aWR0aDogNDB2dztcblx0XHRoZWlnaHQ6IDIwdmg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGgyLFxuXHRcdC5ib2R5IHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cdH1cblxuXHQuZm9vdGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGdhcDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdC5idG4ge1xuXHRcdFx0cGFkZGluZzogMTVweCAyMHB4O1xuXHRcdFx0d2lkdGg6IDQwJTtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_admin-users_admin-users_module_ts.js.map