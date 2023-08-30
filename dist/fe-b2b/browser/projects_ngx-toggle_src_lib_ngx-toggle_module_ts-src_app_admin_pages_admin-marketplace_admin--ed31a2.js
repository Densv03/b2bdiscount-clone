"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["projects_ngx-toggle_src_lib_ngx-toggle_module_ts-src_app_admin_pages_admin-marketplace_admin--ed31a2"],{

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

/***/ 88803:
/*!*****************************************************!*\
  !*** ./projects/shared/src/lib/shared.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponent": () => (/* binding */ SharedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SharedComponent {
}
SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
SharedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponent, selectors: [["lib-shared"]], decls: 2, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " shared works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 31088:
/*!**************************************************!*\
  !*** ./projects/shared/src/lib/shared.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.component */ 88803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_1__.SharedComponent], exports: [_shared_component__WEBPACK_IMPORTED_MODULE_1__.SharedComponent] }); })();


/***/ }),

/***/ 47509:
/*!***********************************************************************************!*\
  !*** ./src/app/admin/pages/admin-marketplace/admin-marketplace-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMarketplaceRoutingModule": () => (/* binding */ AdminMarketplaceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _admin_marketplace_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-marketplace.component */ 32336);
/* harmony import */ var _components_admin_supplier_product_list_admin_supplier_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin-supplier-product-list/admin-supplier-product-list.component */ 84397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: "",
        component: _admin_marketplace_component__WEBPACK_IMPORTED_MODULE_0__.AdminMarketplaceComponent,
    },
    {
        path: "supplier/:id",
        component: _components_admin_supplier_product_list_admin_supplier_product_list_component__WEBPACK_IMPORTED_MODULE_1__.AdminSupplierProductListComponent,
    },
];
class AdminMarketplaceRoutingModule {
}
AdminMarketplaceRoutingModule.ɵfac = function AdminMarketplaceRoutingModule_Factory(t) { return new (t || AdminMarketplaceRoutingModule)(); };
AdminMarketplaceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminMarketplaceRoutingModule });
AdminMarketplaceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminMarketplaceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 32336:
/*!******************************************************************************!*\
  !*** ./src/app/admin/pages/admin-marketplace/admin-marketplace.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMarketplaceComponent": () => (/* binding */ AdminMarketplaceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);
/* harmony import */ var _components_admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin-product-list/admin-product-list.component */ 47139);
/* harmony import */ var _components_admin_companies_list_admin_companies_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin-companies-list/admin-companies-list.component */ 88009);










function AdminMarketplaceComponent_b2b_admin_product_list_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "b2b-admin-product-list");
  }
}

function AdminMarketplaceComponent_b2b_admin_companies_list_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "b2b-admin-companies-list");
  }
}

var VisibleListEnum;

(function (VisibleListEnum) {
  VisibleListEnum[VisibleListEnum["DEFAULT"] = 0] = "DEFAULT";
  VisibleListEnum[VisibleListEnum["PRODUCTS"] = 1] = "PRODUCTS";
  VisibleListEnum[VisibleListEnum["COMPANIES"] = 2] = "COMPANIES";
})(VisibleListEnum || (VisibleListEnum = {}));

let AdminMarketplaceComponent = class AdminMarketplaceComponent {
  constructor(fb) {
    this.fb = fb;
    this.form = this.fb.group({
      activeSelection: 'categories'
    });
    this.VisibleListEnum = VisibleListEnum;
    this.dropdownOptions = [{
      label: 'Find by product category',
      id: 'categories'
    }, {
      label: 'Find by company name',
      id: 'products'
    }];
    this.activeSelectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(VisibleListEnum.DEFAULT);
  }

  ngOnInit() {
    this.activeSelectionSource.next(VisibleListEnum.PRODUCTS);
    this.form.get('activeSelection').valueChanges.subscribe(listType => {
      switch (listType) {
        case 'products':
          this.activeSelectionSource.next(VisibleListEnum.COMPANIES);
          break;

        case 'categories':
          this.activeSelectionSource.next(VisibleListEnum.PRODUCTS);
          break;
      }
    });
  }

  get activeSelection$() {
    return this.activeSelectionSource.asObservable();
  }

};

AdminMarketplaceComponent.ɵfac = function AdminMarketplaceComponent_Factory(t) {
  return new (t || AdminMarketplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
};

AdminMarketplaceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AdminMarketplaceComponent,
  selectors: [["b2b-admin-marketplace"]],
  decls: 7,
  vars: 8,
  consts: [[3, "formGroup"], ["formControlName", "activeSelection", "placeholder", "Select option", "bindValue", "id", "bindLabel", "label", 3, "options"], [4, "ngIf"]],
  template: function AdminMarketplaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "b2b-ngx-select", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Select option ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminMarketplaceComponent_b2b_admin_product_list_3_Template, 1, 0, "b2b-admin-product-list", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AdminMarketplaceComponent_b2b_admin_companies_list_5_Template, 1, 0, "b2b-admin-companies-list", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.dropdownOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx.activeSelection$) === ctx.VisibleListEnum.PRODUCTS);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, ctx.activeSelection$) === ctx.VisibleListEnum.COMPANIES);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_6__.B2bNgxSelectComponent, _components_admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_0__.AdminProductListComponent, _components_admin_companies_list_admin_companies_list_component__WEBPACK_IMPORTED_MODULE_1__.AdminCompaniesListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 25px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  width: 32%;\n  margin-right: 5px;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  background: #ffffff;\n  box-shadow: 2px 2px 8px #e3eaf1;\n  border-radius: 4px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 15px;\n  height: 100%;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  background-color: #005dff;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]   .product-views-amount[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 700;\n  transform: translate(20%, 20%);\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%] {\n  background-color: #9fa4bb;\n  border-radius: 4px;\n  padding: 4px 6px;\n  width: 140px;\n  color: #fff;\n  font-weight: 400;\n  text-align: center;\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1hcmtldHBsYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFBRjtBQUNFO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0g7QUFBRztFQUNDLFVBQUE7RUFDQSxZQUFBO0FBRUo7QUFESTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFHTDtBQUFHO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHTDtBQUZLO0VBQ0Msa0JBQUE7QUFJTjtBQURLO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQURLO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFHTjtBQUZNO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFJUDtBQUFJO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFTDtBQUNHO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0MsWUFBQTtBQUFIIiwiZmlsZSI6ImFkbWluLW1hcmtldHBsYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHQubWFya2V0LXByb2R1Y3RzIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdHBhZGRpbmc6IDI1cHg7XG5cdFx0LnByb2R1Y3Qge1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdHdpZHRoOiAzMiU7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHRcdGJveC1zaGFkb3c6IDJweCAycHggOHB4ICNlM2VhZjE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHQucGhvdG8ge1xuXHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuaW5mbyB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHQuaW5mby1oZWFkZXIge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0LnByb2R1Y3QtdGl0bGUge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9kdWN0LXZpZXdzIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2R1Y3Qtdmlld3MtY2lyY2xlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI3cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI3cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGZmO1xuXHRcdFx0XHRcdFx0LnByb2R1Y3Qtdmlld3MtYW1vdW50IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgMjAlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0LnByb2R1Y3Qtc3RhdHVzIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWZhNGJiO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRwYWRkaW5nOiA0cHggNnB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxNDBweDtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuZHJvcGRvd24ge1xuXHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBlbmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5jb21wYW55IHtcblx0XHRcdGhlaWdodDogNTBweDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"]
});
AdminMarketplaceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()], AdminMarketplaceComponent);


/***/ }),

/***/ 49097:
/*!***************************************************************************!*\
  !*** ./src/app/admin/pages/admin-marketplace/admin-marketplace.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMarketplaceModule": () => (/* binding */ AdminMarketplaceModule)
/* harmony export */ });
/* harmony import */ var _admin_marketplace_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-marketplace.component */ 32336);
/* harmony import */ var _admin_marketplace_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-marketplace-routing.module */ 47509);
/* harmony import */ var _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-pagination */ 19963);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-dropdown */ 37097);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _components_admin_supplier_product_list_admin_supplier_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-supplier-product-list/admin-supplier-product-list.component */ 84397);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _components_admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-product-list/admin-product-list.component */ 47139);
/* harmony import */ var _components_admin_companies_list_admin_companies_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-companies-list/admin-companies-list.component */ 88009);
/* harmony import */ var _b2b_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @b2b/shared */ 31088);
/* harmony import */ var _b2b_categories_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/categories-modal */ 65101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);


















class AdminMarketplaceModule {
}
AdminMarketplaceModule.ɵfac = function AdminMarketplaceModule_Factory(t) { return new (t || AdminMarketplaceModule)(); };
AdminMarketplaceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AdminMarketplaceModule });
AdminMarketplaceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_admin_marketplace_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminMarketplaceRoutingModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.B2bNgxPaginationModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_10__.B2bNgxImageModule,
        _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__.B2bNgxDropdownModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_11__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_12__.B2bNgxIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _b2b_shared__WEBPACK_IMPORTED_MODULE_14__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_16__.B2bNgxInputModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_17__.B2bNgxSelectModule,
        _b2b_categories_modal__WEBPACK_IMPORTED_MODULE_7__.CategoriesDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdminMarketplaceModule, { declarations: [_admin_marketplace_component__WEBPACK_IMPORTED_MODULE_0__.AdminMarketplaceComponent, _components_admin_supplier_product_list_admin_supplier_product_list_component__WEBPACK_IMPORTED_MODULE_4__.AdminSupplierProductListComponent, _components_admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_5__.AdminProductListComponent, _components_admin_companies_list_admin_companies_list_component__WEBPACK_IMPORTED_MODULE_6__.AdminCompaniesListComponent], imports: [_admin_marketplace_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminMarketplaceRoutingModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.B2bNgxPaginationModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_10__.B2bNgxImageModule,
        _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__.B2bNgxDropdownModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_11__.B2bNgxButtonModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_12__.B2bNgxIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule,
        _b2b_shared__WEBPACK_IMPORTED_MODULE_14__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_16__.B2bNgxInputModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_17__.B2bNgxSelectModule,
        _b2b_categories_modal__WEBPACK_IMPORTED_MODULE_7__.CategoriesDialogModule] }); })();


/***/ }),

/***/ 88009:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-marketplace/components/admin-companies-list/admin-companies-list.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCompaniesListComponent": () => (/* binding */ AdminCompaniesListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _client_pages_client_marketplace_client_marketplace_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../client/pages/client-marketplace/client-marketplace.service */ 86069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../projects/ngx-pagination/src/lib/layout/ngx-pagination.component */ 93637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);












function AdminCompaniesListComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminCompaniesListComponent_li_3_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const company_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.goToSupplierListing(company_r1.user));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9)(6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const company_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r1.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", company_r1.countProducts, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", company_r1.countChats, " ");
  }
}

class AdminCompaniesListComponent {
  constructor(fb, marketService, router, route) {
    this.fb = fb;
    this.marketService = marketService;
    this.router = router;
    this.route = route;
    this.PRODUCTS_LIMIT = this.marketService.PRODUCTS_LIMIT;
    this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__.B2bNgxInputThemeEnum;
    this.form = this.fb.group({
      q: ''
    });
    this.paginationParams = {
      offset: 0,
      limit: this.PRODUCTS_LIMIT
    };
    this.companyListSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.companyListLengthSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
  }

  get companyList$() {
    return this.companyListSource.asObservable();
  }

  get companyListLength$() {
    return this.companyListLengthSource.asObservable();
  }

  ngOnInit() {
    this.form.get("q").valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(value => this.marketService.getCompanyByName(value, this.paginationParams))).subscribe(value => {
      this.companyListSource.next(value.companies);
      this.companyListLengthSource.next(value.totalCount);
    });
  }

  redirectToProductDetails(product) {
    this.router.navigate(["/b2bmarket", "products", product._id]);
  }

  toggleCompaniesPage(pageNumber) {
    this.paginationParams = { ...this.paginationParams,
      offset: (pageNumber - 1) * this.PRODUCTS_LIMIT
    };
    this.marketService.getCompanyByName(this.form.get('q').value, this.paginationParams).subscribe(data => {
      this.companyListSource.next(data.companies);
    });
  }

  goToSupplierListing(userId) {
    this.router.navigate(['supplier', userId], {
      relativeTo: this.route
    });
  }

}

AdminCompaniesListComponent.ɵfac = function AdminCompaniesListComponent_Factory(t) {
  return new (t || AdminCompaniesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_client_pages_client_marketplace_client_marketplace_service__WEBPACK_IMPORTED_MODULE_0__.ClientMarketplaceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};

AdminCompaniesListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AdminCompaniesListComponent,
  selectors: [["b2b-admin-companies-list"]],
  decls: 7,
  vars: 9,
  consts: [[3, "formGroup"], ["type", "text", "formControlName", "q", "b2bNgxInput", "", "placeholder", "Enter name of company", 3, "theme"], [1, "market-products"], ["class", "product", 3, "click", 4, "ngFor", "ngForOf"], [3, "length", "perPage", "togglePageNumber"], [1, "product", 3, "click"], [1, "info"], [1, "info-header"], [1, "product-title"], [1, "product-views"], [1, "d-flex", "flex-column", "mr-4"], ["b2bNgxIcon", "", "name", "box"], [1, "d-flex", "flex-column"], ["b2bNgxIcon", "", "name", "chat"]],
  template: function AdminCompaniesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminCompaniesListComponent_li_3_Template, 12, 3, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b2b-ngx-pagination", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("togglePageNumber", function AdminCompaniesListComponent_Template_b2b_ngx_pagination_togglePageNumber_5_listener($event) {
        return ctx.toggleCompaniesPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, ctx.companyList$));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, ctx.companyListLength$))("perPage", ctx.PRODUCTS_LIMIT);
    }
  },
  dependencies: [_projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_1__.B2bNgxPaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_9__.B2bNgxIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_10__.B2bNgxInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 25px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  width: 32%;\n  margin-right: 5px;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  background: #ffffff;\n  box-shadow: 2px 2px 8px #e3eaf1;\n  border-radius: 4px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 15px;\n  height: 100%;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 30%;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  background-color: #005dff;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]   .product-views-amount[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 700;\n  transform: translate(20%, 20%);\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%] {\n  background-color: #9fa4bb;\n  border-radius: 4px;\n  padding: 4px 6px;\n  width: 140px;\n  color: #fff;\n  font-weight: 400;\n  text-align: center;\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWNvbXBhbmllcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFBRjtBQUNFO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0g7QUFBRztFQUNDLFVBQUE7RUFDQSxZQUFBO0FBRUo7QUFESTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFHTDtBQUFHO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHTDtBQUZLO0VBQ0Msa0JBQUE7QUFJTjtBQURLO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBR047QUFESztFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR047QUFGTTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBSVA7QUFBSTtFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUw7QUFDRztFQUNDLFVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNDLFlBQUE7QUFBSCIsImZpbGUiOiJhZG1pbi1jb21wYW5pZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0Lm1hcmtldC1wcm9kdWN0cyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRwYWRkaW5nOiAyNXB4O1xuXHRcdC5wcm9kdWN0IHtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHR3aWR0aDogMzIlO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0XHRib3gtc2hhZG93OiAycHggMnB4IDhweCAjZTNlYWYxO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0LnBob3RvIHtcblx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LmluZm8ge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0LmluZm8taGVhZGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdC5wcm9kdWN0LXRpdGxlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucHJvZHVjdC12aWV3cyB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdHdpZHRoOiAzMCU7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnByb2R1Y3Qtdmlld3MtY2lyY2xlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI3cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI3cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGZmO1xuXHRcdFx0XHRcdFx0LnByb2R1Y3Qtdmlld3MtYW1vdW50IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgMjAlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0LnByb2R1Y3Qtc3RhdHVzIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWZhNGJiO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRwYWRkaW5nOiA0cHggNnB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxNDBweDtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuZHJvcGRvd24ge1xuXHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBlbmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5jb21wYW55IHtcblx0XHRcdGhlaWdodDogNTBweDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 47139:
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-marketplace/components/admin-product-list/admin-product-list.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProductListComponent": () => (/* binding */ AdminProductListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../client/shared/components/confirmation-dialog/confirmation-dialog.component */ 4265);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ 34769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../environments/environment */ 92340);
/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! country-list */ 1188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../client/services/categories/categories.service */ 57454);
/* harmony import */ var _client_pages_client_marketplace_client_marketplace_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../client/pages/client-marketplace/client-marketplace.service */ 86069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _client_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../client/pages/client-profile/services/user/user.service */ 82021);
/* harmony import */ var _core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/mixpanel/mixpanel.service */ 56838);
/* harmony import */ var _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../projects/ngx-pagination/src/lib/layout/ngx-pagination.component */ 93637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_dropdown_src_lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../projects/ngx-dropdown/src/lib/layout/ngx-dropdown.component */ 46353);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_categories_modal_src_lib_layout_categories_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../projects/categories-modal/src/lib/layout/categories-dialog.component */ 33633);
























function AdminProductListComponent_li_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function AdminProductListComponent_li_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function AdminProductListComponent_li_3_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}

function AdminProductListComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AdminProductListComponent_li_3_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.redirectToProductDetails(product_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, AdminProductListComponent_li_3_span_6_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, AdminProductListComponent_li_3_span_7_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, AdminProductListComponent_li_3_span_8_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 13)(13, "b2b-ngx-dropdown", 14)(14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](product_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !product_r1.productApproved && !product_r1.productRejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r1.productApproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", product_r1.productRejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", product_r1.views, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx_r0.menuOptions)("optionToReturn", product_r1);
  }
}

let AdminProductListComponent = class AdminProductListComponent {
  constructor(fb, categoriesService, marketService, router, dialog, hotToastService, userService, mixpanelService) {
    this.fb = fb;
    this.categoriesService = categoriesService;
    this.marketService = marketService;
    this.router = router;
    this.dialog = dialog;
    this.hotToastService = hotToastService;
    this.userService = userService;
    this.mixpanelService = mixpanelService;
    this.PRODUCTS_LIMIT = this.marketService.PRODUCTS_LIMIT;
    this.products$ = this.marketService.marketplaceProducts$;
    this.productsLength$ = this.marketService.marketplaceProductsLength$;
    this.form = this.fb.group({
      'categories[]': [[]]
    });
    this.menuOptions = this.getMenuOptions();
    this.filteredQueryObj = {
      limit: this.PRODUCTS_LIMIT,
      offset: 0
    };
  }

  ngOnInit() {
    this.categoriesService.getCategories$();
    this.marketService.updateProductsByAdmin(this.filteredQueryObj);
    this.form.get('categories[]').valueChanges.subscribe(categories => {
      this.marketService.updateProductsByAdmin(this.filteredQueryObj, {
        'categories[]': categories
      });
    });
  }

  redirectToProductDetails(product) {
    this.router.navigate(["/b2bmarket", "products", product._id]);
  }

  getMenuOptions() {
    return [{
      label: "Delete",
      icon: "delete-red",
      onClick: marketplaceItem => {
        this.dialog.open(_client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, {
          data: {
            title: "Delete product",
            message: "Are you sure you want to delete this product?",
            confirmButtonText: "Delete",
            confirmButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_12__.B2bNgxButtonThemeEnum.BACKGROUND_RED,
            cancelButtonText: "Cancel",
            cancelButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_12__.B2bNgxButtonThemeEnum.OUTLINE_BLACK
          }
        }).afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(data => !!data)).subscribe(() => {
          var _a, _b;

          this.mixpanelService.track('Admin deleted users the product', {
            'Product Category': (_a = marketplaceItem.category[0]) === null || _a === void 0 ? void 0 : _a.name,
            'Supplier\'s Country': (_b = marketplaceItem.company[0]) === null || _b === void 0 ? void 0 : _b.country,
            'Product Count': marketplaceItem.amount.count + ' ' + marketplaceItem.amount.unit.name,
            'Posting Date': marketplaceItem.updatedAt
          });
          this.deleteProductByAdmin(marketplaceItem._id);
        });
      }
    }, {
      label: "Archive",
      icon: 'archive-red',
      onClick: marketplaceItem => {
        var _a, _b;

        this.archiveProductByAdmin(marketplaceItem._id);
        this.mixpanelService.track('Admin archived users the product', {
          'Product Category': (_a = marketplaceItem.category[0]) === null || _a === void 0 ? void 0 : _a.name,
          'Supplier\'s Country': (_b = marketplaceItem.company[0]) === null || _b === void 0 ? void 0 : _b.country,
          'Product Count': marketplaceItem.amount.count + ' ' + marketplaceItem.amount.unit.name,
          'Posting Date': marketplaceItem.updatedAt
        });
      }
    }, {
      label: "Report supplier",
      icon: 'contact-user',
      onClick: marketplaceItem => this.reportSupplier(marketplaceItem.user)
    }, {
      label: "approve by admin",
      icon: "check",
      onClick: offer => {
        this.marketService.approveProductByAdmin(offer._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => {
          var _a, _b;

          this.mixpanelService.track('Admin approved user product', {
            'Product Category': (_a = offer.category[0]) === null || _a === void 0 ? void 0 : _a.name,
            'Supplier\'s Country': (_b = offer.company[0]) === null || _b === void 0 ? void 0 : _b.country,
            'Product Count': offer.amount.count + ' ' + offer.amount.unit.name,
            'Posting Date': offer.updatedAt
          });
          this.hotToastService.success("approved");
          this.marketService.updateProductsByAdmin(this.filteredQueryObj);
        });
      }
    }, {
      label: "decline by admin",
      icon: "cross",
      onClick: offer => {
        this.marketService.declineProductByAdmin(offer._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => {
          var _a, _b;

          this.mixpanelService.track('Product declined', {
            'Product Category': (_a = offer.category[0]) === null || _a === void 0 ? void 0 : _a.name,
            'Supplier\'s Country': (0,country_list__WEBPACK_IMPORTED_MODULE_3__.getName)((_b = offer.company[0]) === null || _b === void 0 ? void 0 : _b.country),
            'Product Count': offer.amount.count + ' ' + offer.amount.unit.name,
            'Product declined': offer.updatedAt
          });
          this.hotToastService.success("declined");
          this.marketService.updateProductsByAdmin(this.filteredQueryObj);
        });
      }
    }];
  }

  deleteProductByAdmin(id) {
    this.marketService.deleteProductByAdmin(id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this), this.hotToastService.observe({
      loading: "Deleting...",
      success: "Deleted successfully",
      error: "Error while deleting"
    })).subscribe();
  }

  archiveProductByAdmin(id) {
    this.marketService.archiveProductByAdmin(id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this), this.hotToastService.observe({
      loading: "Archiving...",
      success: "Archived successfully",
      error: "Error while archiving"
    })).subscribe();
  }

  reportSupplier(userId) {
    this.openConnection(this.userService.getToken());
    this.socket.emit("start_users_chat", {
      userId,
      typeRoom: "users"
    });
    -this.socket.on("users_chat_info", data => {
      this.router.navigate(['profile/your-workspace/b2bmarket/chat/', data._id]);
    });
  }

  openConnection(token) {
    this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl, {
      path: "/chat",
      auth: {
        token
      }
    });
  }

  togglePage(page) {
    this.marketService.updateProductsByAdmin({
      limit: this.PRODUCTS_LIMIT,
      offset: (page - 1) * this.PRODUCTS_LIMIT
    });
  }

};

AdminProductListComponent.ɵfac = function AdminProductListComponent_Factory(t) {
  return new (t || AdminProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_client_pages_client_marketplace_client_marketplace_service__WEBPACK_IMPORTED_MODULE_5__.ClientMarketplaceService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_18__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_client_pages_client_profile_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_7__.MixpanelService));
};

AdminProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: AdminProductListComponent,
  selectors: [["b2b-admin-product-list"]],
  decls: 7,
  vars: 8,
  consts: [[3, "formGroup"], ["formControlName", "categories[]"], [1, "market-products"], ["class", "product", 3, "click", 4, "ngFor", "ngForOf"], [3, "length", "perPage", "togglePageNumber"], [1, "product", 3, "click"], [1, "info"], [1, "info-header"], [1, "product-title"], [1, "product-status"], [4, "ngIf"], [1, "product-views"], ["b2bNgxIcon", "", "name", "eye"], [1, "dropdown"], [3, "options", "optionToReturn"], ["b2bNgxButton", "", 1, "flex", "items-center"], ["b2bNgxIcon", "", "name", "more"]],
  template: function AdminProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "b2b-categories-dialog", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, AdminProductListComponent_li_3_Template, 16, 7, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "b2b-ngx-pagination", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("togglePageNumber", function AdminProductListComponent_Template_b2b_ngx_pagination_togglePageNumber_5_listener($event) {
        return ctx.togglePage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 4, ctx.products$));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 6, ctx.productsLength$))("perPage", ctx.PRODUCTS_LIMIT);
    }
  },
  dependencies: [_projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_8__.B2bNgxPaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _projects_ngx_dropdown_src_lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_9__.B2bNgxDropdownComponent, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_20__.B2bNgxButtonDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_21__.B2bNgxIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _projects_categories_modal_src_lib_layout_categories_dialog_component__WEBPACK_IMPORTED_MODULE_10__.CategoriesDialogComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 25px;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  width: 48%;\n  margin-right: 5px;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  background: #ffffff;\n  box-shadow: 2px 2px 8px #e3eaf1;\n  border-radius: 4px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 15px;\n  height: 100%;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 30%;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  background-color: #005dff;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]   .product-views-amount[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 700;\n  transform: translate(20%, 20%);\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%] {\n  background-color: #9fa4bb;\n  border-radius: 4px;\n  padding: 4px 6px;\n  color: #fff;\n  font-weight: 400;\n  text-align: center;\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUNFO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0g7QUFBRztFQUNDLFVBQUE7RUFDQSxZQUFBO0FBRUo7QUFESTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFHTDtBQUFHO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHTDtBQUZLO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0FBSU47QUFESztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBR047QUFESztFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR047QUFGTTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBSVA7QUFBSTtFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFTDtBQUNHO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0MsWUFBQTtBQUFIIiwiZmlsZSI6ImFkbWluLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0Lm1hcmtldC1wcm9kdWN0cyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRwYWRkaW5nOiAyNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdC5wcm9kdWN0IHtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHR3aWR0aDogNDglO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0XHRib3gtc2hhZG93OiAycHggMnB4IDhweCAjZTNlYWYxO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0LnBob3RvIHtcblx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LmluZm8ge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0LmluZm8taGVhZGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdC5wcm9kdWN0LXRpdGxlIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAzMCU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb2R1Y3Qtdmlld3Mge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQucHJvZHVjdC12aWV3cy1jaXJjbGUge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjdweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjdweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDVkZmY7XG5cdFx0XHRcdFx0XHQucHJvZHVjdC12aWV3cy1hbW91bnQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMjAlLCAyMCUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQucHJvZHVjdC1zdGF0dXMge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM5ZmE0YmI7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDRweCA2cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LmRyb3Bkb3duIHtcblx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0dGV4dC1hbGlnbjogZW5kO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuY29tcGFueSB7XG5cdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"]
});
AdminProductListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.UntilDestroy)()], AdminProductListComponent);


/***/ }),

/***/ 84397:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-marketplace/components/admin-supplier-product-list/admin-supplier-product-list.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSupplierProductListComponent": () => (/* binding */ AdminSupplierProductListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var _client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../client/shared/components/confirmation-dialog/confirmation-dialog.component */ 4265);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_pages_client_marketplace_client_marketplace_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../client/pages/client-marketplace/client-marketplace.service */ 86069);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../projects/ngx-pagination/src/lib/layout/ngx-pagination.component */ 93637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../projects/ngx-image/src/lib/directive/ngx-image.directive */ 70239);
/* harmony import */ var _projects_ngx_dropdown_src_lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../projects/ngx-dropdown/src/lib/layout/ngx-dropdown.component */ 46353);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
















function AdminSupplierProductListComponent_li_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Need verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AdminSupplierProductListComponent_li_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Approved by admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AdminSupplierProductListComponent_li_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Rejected by admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AdminSupplierProductListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminSupplierProductListComponent_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.redirectToProductDetails(product_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6)(4, "div", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9)(8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AdminSupplierProductListComponent_li_1_div_10_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AdminSupplierProductListComponent_li_1_div_11_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AdminSupplierProductListComponent_li_1_div_12_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12)(14, "b2b-ngx-dropdown", 13)(15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", product_r1 == null ? null : product_r1.photos == null ? null : product_r1.photos[0] == null ? null : product_r1.photos[0].lg);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r1.views);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !product_r1.productApproved && !product_r1.productRejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r1.productApproved);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r1.productRejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.menuOptions)("optionToReturn", product_r1);
  }
}

class AdminSupplierProductListComponent {
  constructor(route, clientMarketplaceService, router, hotToastService, dialog) {
    this.route = route;
    this.clientMarketplaceService = clientMarketplaceService;
    this.router = router;
    this.hotToastService = hotToastService;
    this.dialog = dialog;
    this.marketplaceProducts$ = this.clientMarketplaceService.marketplaceProducts$;
    this.productsLimit = this.clientMarketplaceService.PRODUCTS_LIMIT;
    this.productsTotalLength$ = this.clientMarketplaceService.marketplaceProductsLength$;
    this.menuOptions = this.getMenuOptions();
    this.filteredQueryObj = {
      limit: this.productsLimit,
      offset: 0
    };
  }

  ngOnInit() {
    this.clientMarketplaceService.updateProductsByAdmin({
      limit: 10,
      offset: 0
    }, {
      supplierId: this.route.snapshot.params["id"]
    });
  }

  togglePage(pageNumber) {
    this.filteredQueryObj = { ...this.filteredQueryObj,
      offset: (pageNumber - 1) * this.productsLimit
    };
    this.clientMarketplaceService.updateProductsByAdmin(this.filteredQueryObj);
  }

  redirectToProductDetails(product) {
    const queryParams = this.route.snapshot.queryParams;
    this.router.navigate(["/marketplace", "product", product._id], {
      queryParams: {
        admin: true,
        ...queryParams
      }
    });
  }

  getMenuOptions() {
    return [{
      label: "Delete",
      icon: "delete-red",
      onClick: marketplaceItem => {
        this.dialog.open(_client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, {
          data: {
            title: "Delete product",
            message: "Are you sure you want to delete this product?",
            confirmButtonText: "Delete",
            confirmButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__.B2bNgxButtonThemeEnum.BACKGROUND_RED,
            cancelButtonText: "Cancel",
            cancelButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__.B2bNgxButtonThemeEnum.OUTLINE_BLACK
          }
        }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(data => !!data)).subscribe(() => {
          this.deleteProductByAdmin(marketplaceItem.id);
        });
      }
    }, {
      label: "approve by admin",
      icon: "check",
      onClick: marketplaceItem => {
        this.clientMarketplaceService.approveProductByAdmin(marketplaceItem._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this), this.hotToastService.observe({
          loading: "Approving...",
          success: "Approved successfully",
          error: "Approving error"
        })).subscribe();
      }
    }, {
      label: "decline by admin",
      icon: "cross",
      onClick: marketplaceItem => {
        this.clientMarketplaceService.declineProductByAdmin(marketplaceItem._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this), this.hotToastService.observe({
          loading: "Declining...",
          success: "Declined successfully",
          error: "Declining error"
        })).subscribe();
      }
    }];
  }

  deleteProductByAdmin(id) {
    this.clientMarketplaceService.deleteProductByAdmin(id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this), this.hotToastService.observe({
      loading: "Deleting...",
      success: "Deleted successfully",
      error: "Error while deleting"
    })).subscribe();
  }

}

AdminSupplierProductListComponent.ɵfac = function AdminSupplierProductListComponent_Factory(t) {
  return new (t || AdminSupplierProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_client_pages_client_marketplace_client_marketplace_service__WEBPACK_IMPORTED_MODULE_1__.ClientMarketplaceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_9__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};

AdminSupplierProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AdminSupplierProductListComponent,
  selectors: [["b2b-admin-supplier-product-list"]],
  decls: 5,
  vars: 7,
  consts: [[1, "market-products"], ["class", "product", 3, "click", 4, "ngFor", "ngForOf"], [3, "length", "perPage", "togglePageNumber"], [1, "product", 3, "click"], [1, "photo"], ["b2bNgxImage", "", 1, "product-photo", 3, "name"], [1, "info"], [1, "info-header"], [1, "product-title"], [1, "product-views-circle"], [1, "product-views-amount"], ["class", "product-status", 4, "ngIf"], [1, "dropdown"], [3, "options", "optionToReturn"], ["b2bNgxButton", "", 1, "flex", "items-center"], ["b2bNgxIcon", "", "name", "more"], [1, "product-status"]],
  template: function AdminSupplierProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminSupplierProductListComponent_li_1_Template, 17, 8, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b2b-ngx-pagination", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("togglePageNumber", function AdminSupplierProductListComponent_Template_b2b_ngx_pagination_togglePageNumber_3_listener($event) {
        return ctx.togglePage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx.marketplaceProducts$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, ctx.productsTotalLength$))("perPage", ctx.productsLimit);
    }
  },
  dependencies: [_projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_2__.B2bNgxPaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_12__.B2bNgxImageDirective, _projects_ngx_dropdown_src_lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_3__.B2bNgxDropdownComponent, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_13__.B2bNgxButtonDirective, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_14__.B2bNgxIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%] {\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  background: #ffffff;\n  box-shadow: 2px 2px 8px #e3eaf1;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-left: 15px;\n  height: 100%;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  background-color: #005dff;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]   .product-views-amount[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 700;\n  transform: translate(20%, 20%);\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%] {\n  background-color: #9fa4bb;\n  border-radius: 4px;\n  padding: 4px 6px;\n  width: 140px;\n  color: #fff;\n  font-weight: 400;\n  text-align: center;\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: end;\n}\n[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXN1cHBsaWVyLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFBRjtBQUNFO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFDSDtBQUFHO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QUFFSjtBQUFJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVMO0FBQ0c7RUFDQyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFFTDtBQURLO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFHTjtBQUZNO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFJUDtBQUFJO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFTDtBQUNHO0VBQ0MsVUFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0MsWUFBQTtBQUFIIiwiZmlsZSI6ImFkbWluLXN1cHBsaWVyLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0Lm1hcmtldC1wcm9kdWN0cyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdHBhZGRpbmc6IDI1cHg7XG5cdFx0LnByb2R1Y3Qge1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0XHRib3gtc2hhZG93OiAycHggMnB4IDhweCAjZTNlYWYxO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0LnBob3RvIHtcblx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuaW5mbyB7XG5cdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdC5pbmZvLWhlYWRlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdC5wcm9kdWN0LXZpZXdzLWNpcmNsZSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAyN3B4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyN3B4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNWRmZjtcblx0XHRcdFx0XHRcdC5wcm9kdWN0LXZpZXdzLWFtb3VudCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMCUsIDIwJSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC5wcm9kdWN0LXN0YXR1cyB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzlmYTRiYjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogNHB4IDZweDtcblx0XHRcdFx0XHR3aWR0aDogMTQwcHg7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LmRyb3Bkb3duIHtcblx0XHRcdFx0d2lkdGg6IDIwJTtcblx0XHRcdFx0dGV4dC1hbGlnbjogZW5kO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuY29tcGFueSB7XG5cdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"]
});

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
//# sourceMappingURL=projects_ngx-toggle_src_lib_ngx-toggle_module_ts-src_app_admin_pages_admin-marketplace_admin--ed31a2.js.map