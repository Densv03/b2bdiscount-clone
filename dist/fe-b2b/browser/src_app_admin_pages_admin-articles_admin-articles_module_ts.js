"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_pages_admin-articles_admin-articles_module_ts"],{

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

/***/ 93637:
/*!****************************************************************************!*\
  !*** ./projects/ngx-pagination/src/lib/layout/ngx-pagination.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxPaginationComponent": () => (/* binding */ B2bNgxPaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);



function B2bNgxPaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function B2bNgxPaginationComponent_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const option_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.togglePage(option_r1.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentPage === option_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.label, " ");
} }
class B2bNgxPaginationComponent {
    // public currentPage: number;
    constructor() {
        this.currentPage = 1;
        this.togglePageNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.currentPage = 1;
        this.togglePage(1);
    }
    get options() {
        if (!this.length || !this.perPage) {
            return [];
        }
        const count = this.length / this.perPage;
        const emptyArray = new Array(Math.ceil(count)).fill(null);
        return emptyArray.map((item, index) => ({
            label: index + 1,
            value: index + 1,
        }));
    }
    togglePage(number) {
        if (number === this.currentPage) {
            return;
        }
        this.currentPage = number;
        this.togglePageNumber.emit(number);
    }
    togglePrevPage() {
        if (this.currentPage === 1) {
            return;
        }
        this.currentPage = this.currentPage - 1;
        this.togglePageNumber.emit(this.currentPage);
    }
    toggleNextPage() {
        if (this.currentPage === this.options.length) {
            return;
        }
        this.currentPage = this.currentPage + 1;
        this.togglePageNumber.emit(this.currentPage);
    }
}
B2bNgxPaginationComponent.ɵfac = function B2bNgxPaginationComponent_Factory(t) { return new (t || B2bNgxPaginationComponent)(); };
B2bNgxPaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: B2bNgxPaginationComponent, selectors: [["b2b-ngx-pagination"]], inputs: { length: "length", perPage: "perPage", currentPage: "currentPage" }, outputs: { togglePageNumber: "togglePageNumber" }, decls: 2, vars: 1, consts: [[1, "ngx-pagination"], ["class", "ngx-pagination-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "ngx-pagination-item", 3, "click"]], template: function B2bNgxPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, B2bNgxPaginationComponent_li_1_Template, 2, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #005dff;\n  color: #ffffff;\n}\n\n.ngx-pagination[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n  flex-wrap: wrap;\n  row-gap: 10px;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 4px;\n  border: 1px solid #dfe8f5;\n  cursor: pointer;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #eff4fa;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]:active {\n  background: #ffffff;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdHO0VBQ0MseUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBUUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUxEOztBQU1DO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFLRTtFQUNDLHlCQUFBO0FBSEg7O0FBS0U7RUFDQyxtQkFBQTtBQUhIOztBQUtFO0VBQ0MsY0FBQTtBQUhIOztBQUtFO0VBQ0MsZUFBQTtBQUhIIiwiZmlsZSI6Im5neC1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHR1bCB7XG5cdFx0bGkge1xuXHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGZmO1xuXHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLm5neC1wYWdpbmF0aW9uIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdHJvdy1nYXA6IDEwcHg7XG5cdC5uZ3gtcGFnaW5hdGlvbi1pdGVtIHtcblx0XHR3aWR0aDogNDBweDtcblx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdG1hcmdpbjogMCA0cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2RmZThmNTtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0Jjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZjRmYTtcblx0XHR9XG5cdFx0JjphY3RpdmUge1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHR9XG5cdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHR9XG5cdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 65297:
/*!******************************************************************!*\
  !*** ./projects/ngx-pagination/src/lib/ngx-pagination.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxPaginationModule": () => (/* binding */ B2bNgxPaginationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/ngx-pagination.component */ 93637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class B2bNgxPaginationModule {
}
B2bNgxPaginationModule.ɵfac = function B2bNgxPaginationModule_Factory(t) { return new (t || B2bNgxPaginationModule)(); };
B2bNgxPaginationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: B2bNgxPaginationModule });
B2bNgxPaginationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](B2bNgxPaginationModule, { declarations: [_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxPaginationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxPaginationComponent] }); })();


/***/ }),

/***/ 19963:
/*!***************************************************!*\
  !*** ./projects/ngx-pagination/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bNgxPaginationComponent": () => (/* reexport safe */ _lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_1__.B2bNgxPaginationComponent),
/* harmony export */   "B2bNgxPaginationModule": () => (/* reexport safe */ _lib_ngx_pagination_module__WEBPACK_IMPORTED_MODULE_0__.B2bNgxPaginationModule)
/* harmony export */ });
/* harmony import */ var _lib_ngx_pagination_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-pagination.module */ 65297);
/* harmony import */ var _lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/layout/ngx-pagination.component */ 93637);




/***/ }),

/***/ 95252:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/admin-articles/admin-articles-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticlesRoutingModule": () => (/* binding */ AdminArticlesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_articles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-articles.component */ 81255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_admin_articles_component__WEBPACK_IMPORTED_MODULE_0__.AdminArticlesComponent,
    },
];
class AdminArticlesRoutingModule {
}
AdminArticlesRoutingModule.ɵfac = function AdminArticlesRoutingModule_Factory(t) { return new (t || AdminArticlesRoutingModule)(); };
AdminArticlesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminArticlesRoutingModule });
AdminArticlesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminArticlesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 45074:
/*!*********************************************************************!*\
  !*** ./src/app/admin/pages/admin-articles/admin-articles.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticlesModule": () => (/* binding */ AdminArticlesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_articles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-articles-routing.module */ 95252);
/* harmony import */ var _layout_admin_articles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-articles.component */ 81255);
/* harmony import */ var _components_admin_articles_list_admin_articles_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin-articles-list/admin-articles-list.component */ 72779);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-link */ 16385);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-pagination */ 19963);
/* harmony import */ var _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-dropdown */ 37097);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);











class AdminArticlesModule {
}
AdminArticlesModule.ɵfac = function AdminArticlesModule_Factory(t) { return new (t || AdminArticlesModule)(); };
AdminArticlesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AdminArticlesModule });
AdminArticlesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _admin_articles_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminArticlesRoutingModule,
        _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_7__.B2bNgxLinkModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_8__.B2bNgxImageModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.B2bNgxPaginationModule,
        _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_4__.B2bNgxDropdownModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_9__.B2bNgxIconModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__.B2bNgxButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminArticlesModule, { declarations: [_layout_admin_articles_component__WEBPACK_IMPORTED_MODULE_1__.AdminArticlesComponent, _components_admin_articles_list_admin_articles_list_component__WEBPACK_IMPORTED_MODULE_2__.AdminArticlesListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _admin_articles_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminArticlesRoutingModule,
        _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_7__.B2bNgxLinkModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_8__.B2bNgxImageModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.B2bNgxPaginationModule,
        _b2b_ngx_dropdown__WEBPACK_IMPORTED_MODULE_4__.B2bNgxDropdownModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_9__.B2bNgxIconModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__.B2bNgxButtonModule] }); })();


/***/ }),

/***/ 72779:
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-articles/components/admin-articles-list/admin-articles-list.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticlesListComponent": () => (/* binding */ AdminArticlesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../projects/ngx-image/src/lib/directive/ngx-image.directive */ 70239);
/* harmony import */ var _projects_ngx_dropdown_src_lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../projects/ngx-dropdown/src/lib/layout/ngx-dropdown.component */ 46353);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);







function AdminArticlesListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5)(4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 7)(7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "b2b-ngx-dropdown", 10)(11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", article_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", article_r1.image == null ? null : article_r1.image.lg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.menuOptions)("optionToReturn", article_r1);
} }
class AdminArticlesListComponent {
}
AdminArticlesListComponent.ɵfac = function AdminArticlesListComponent_Factory(t) { return new (t || AdminArticlesListComponent)(); };
AdminArticlesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminArticlesListComponent, selectors: [["app-admin-articles-list"]], inputs: { articles: "articles", menuOptions: "menuOptions" }, decls: 2, vars: 1, consts: [[1, "admin-articles-list"], ["class", "admin-articles-list-item", 4, "ngFor", "ngForOf"], [1, "admin-articles-list-item"], [1, "admin-articles-list-item-link", 3, "routerLink"], ["b2bNgxImage", "", 1, "admin-articles-list-item-img", 3, "name"], [1, "admin-articles-list-item-info"], [1, "admin-articles-list-item-info-title"], [1, "admin-articles-list-item-info-additional"], [1, "admin-articles-list-item-info-added"], [1, "admin-articles-list-item-more"], [3, "options", "optionToReturn"], ["b2bNgxButton", "", 1, "flex", "items-center"], ["b2bNgxIcon", "", "name", "more"]], template: function AdminArticlesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminArticlesListComponent_li_1_Template, 13, 6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _projects_ngx_image_src_lib_directive_ngx_image_directive__WEBPACK_IMPORTED_MODULE_4__.B2bNgxImageDirective, _projects_ngx_dropdown_src_lib_layout_ngx_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.B2bNgxDropdownComponent, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_5__.B2bNgxIconDirective, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonDirective], styles: [".admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 24px;\n  background: #ffffff;\n  border-radius: 4px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 4px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 16px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-info[_ngcontent-%COMP%]   .admin-articles-list-item-info-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #0f0f11;\n  height: 20px;\n  display: flex;\n  align-items: center;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-info-additional[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  color: #9fa4bb;\n  height: 20px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-info-additional[_ngcontent-%COMP%]   .admin-articles-list-item-info-icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-info-additional[_ngcontent-%COMP%]   .admin-articles-list-item-info-views[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-info-additional[_ngcontent-%COMP%]   .admin-articles-list-item-info-stars[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-chats[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-chats[_ngcontent-%COMP%]   .admin-articles-list-item-chat[_ngcontent-%COMP%] {\n  background: #f3f6f8;\n  border-radius: 16px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-chats[_ngcontent-%COMP%]   .admin-articles-list-item-chat[_ngcontent-%COMP%]   .admin-articles-list-item-chat-amount[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  color: #0f0f11;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-chats[_ngcontent-%COMP%]   .admin-articles-list-item-chat[_ngcontent-%COMP%]   .admin-articles-list-item-chat-messages[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #005dff;\n  border-radius: 100%;\n  font-size: 11px;\n  color: #ffffff;\n  margin-left: 10px;\n  padding-top: 1px;\n  padding-right: 1px;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]   .admin-articles-list-item-link[_ngcontent-%COMP%]   .admin-articles-list-item-more[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-articles-list[_ngcontent-%COMP%]   .admin-articles-list-item[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWFydGljbGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxlQUFBO0FBQUY7QUFDRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNIO0FBQUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRztFQUNDLE9BQUE7RUFDQSxpQkFBQTtBQUVKO0FBREk7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUdMO0FBQUc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUVKO0FBREk7RUFDQyxpQkFBQTtBQUdMO0FBQ0k7RUFDQyxnQkFBQTtBQUNMO0FBQ0k7RUFDQyxnQkFBQTtBQUNMO0FBRUc7RUFDQyxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUNJO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0w7QUFBSztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFTjtBQUFLO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVOO0FBRUc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR0U7RUFDQyxhQUFBO0FBREgiLCJmaWxlIjoiYWRtaW4tYXJ0aWNsZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1hcnRpY2xlcy1saXN0IHtcblx0LmFkbWluLWFydGljbGVzLWxpc3QtaXRlbSB7XG5cdFx0bWFyZ2luLXRvcDogNHB4O1xuXHRcdC5hZG1pbi1hcnRpY2xlcy1saXN0LWl0ZW0tbGluayB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDE2cHggMjRweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHQuYWRtaW4tYXJ0aWNsZXMtbGlzdC1pdGVtLWltZyB7XG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdH1cblx0XHRcdC5hZG1pbi1hcnRpY2xlcy1saXN0LWl0ZW0taW5mbyB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNnB4O1xuXHRcdFx0XHQuYWRtaW4tYXJ0aWNsZXMtbGlzdC1pdGVtLWluZm8tdGl0bGUge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRjb2xvcjogIzBmMGYxMTtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuYWRtaW4tYXJ0aWNsZXMtbGlzdC1pdGVtLWluZm8tYWRkaXRpb25hbCB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGNvbG9yOiAjOWZhNGJiO1xuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdC5hZG1pbi1hcnRpY2xlcy1saXN0LWl0ZW0taW5mby1pY29uIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuYWRtaW4tYXJ0aWNsZXMtbGlzdC1pdGVtLWluZm8tYWRkZWQge1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5hZG1pbi1hcnRpY2xlcy1saXN0LWl0ZW0taW5mby12aWV3cyB7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuYWRtaW4tYXJ0aWNsZXMtbGlzdC1pdGVtLWluZm8tc3RhcnMge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5hZG1pbi1hcnRpY2xlcy1saXN0LWl0ZW0tY2hhdHMge1xuXHRcdFx0XHR3aWR0aDogMjAlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0LmFkbWluLWFydGljbGVzLWxpc3QtaXRlbS1jaGF0IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmNmY4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdC5hZG1pbi1hcnRpY2xlcy1saXN0LWl0ZW0tY2hhdC1hbW91bnQge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMGYwZjExO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYWRtaW4tYXJ0aWNsZXMtbGlzdC1pdGVtLWNoYXQtbWVzc2FnZXMge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwNWRmZjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZjtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDFweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDFweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5hZG1pbi1hcnRpY2xlcy1saXN0LWl0ZW0tbW9yZSB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 81255:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/pages/admin-articles/layout/admin-articles.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminArticlesComponent": () => (/* binding */ AdminArticlesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 60116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-link */ 49388);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../client/shared/components/confirmation-dialog/confirmation-dialog.component */ 4265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _client_services_wiki_wiki_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../client/services/wiki/wiki.service */ 35551);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../projects/ngx-link/src/lib/directive/ngx-link.directive */ 66612);
/* harmony import */ var _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../projects/ngx-pagination/src/lib/layout/ngx-pagination.component */ 93637);
/* harmony import */ var _components_admin_articles_list_admin_articles_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin-articles-list/admin-articles-list.component */ 72779);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
















let AdminArticlesComponent = class AdminArticlesComponent {
  constructor(_wikiService, _hotToastrService, dialog) {
    this._wikiService = _wikiService;
    this._hotToastrService = _hotToastrService;
    this.dialog = dialog;
    this.forceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.b2bNgxLinkThemeEnum = _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_5__.B2bNgxLinkThemeEnum;
    this.pageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.articles$ = this._getArticles$();
    this.menuOptions = this._getMenuOptions();
    this.totalCount = 0;
  }

  _getArticles$() {
    const page$ = this.pageSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(0));
    const force$ = this.forceSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(true));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([page$, force$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([page]) => `?offset=${page * 10}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([queryString]) => this._wikiService.getArticles(queryString)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(data => {
      this.totalCount = data.totalCount;
      return data.posts;
    }));
  }

  setPage(event) {
    this.pageSubject.next(event);
  }

  _getMenuOptions() {
    return [{
      label: "Delete",
      icon: "delete-red",
      onClick: user => {
        this.dialog.open(_client_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, {
          data: {
            title: "Delete product",
            message: "Are you sure you want to delete this product?",
            confirmButtonText: "Delete",
            confirmButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__.B2bNgxButtonThemeEnum.BACKGROUND_RED,
            cancelButtonText: "Cancel",
            cancelButtonTheme: _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_10__.B2bNgxButtonThemeEnum.OUTLINE_BLACK
          }
        }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)(data => !!data), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(() => {
          return this._wikiService.deleteArticleById(user._id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this), this._hotToastrService.observe({
            loading: "User deleting",
            success: "User deleted",
            error: "User deleting failed"
          }));
        })).subscribe(() => {
          this.forceSubject.next(true);
        });
      }
    }];
  }

};

AdminArticlesComponent.ɵfac = function AdminArticlesComponent_Factory(t) {
  return new (t || AdminArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_client_services_wiki_wiki_service__WEBPACK_IMPORTED_MODULE_1__.WikiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_15__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog));
};

AdminArticlesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: AdminArticlesComponent,
  selectors: [["b2b-admin-articles"]],
  decls: 8,
  vars: 8,
  consts: [[1, "admin-articles"], ["b2bNgxLink", "", "routerLink", "create", 1, "admin-articles__link", 3, "theme"], ["b2bNgxLink", "", "routerLink", "/admin/article-categories", 1, "admin-articles__link", 3, "theme"], [1, "admin-articles__list", 3, "articles", "menuOptions"], [3, "length", "perPage", "togglePageNumber"]],
  template: function AdminArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Add Article");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Add \u0421ategories");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "app-admin-articles-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "b2b-ngx-pagination", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("togglePageNumber", function AdminArticlesComponent_Template_b2b_ngx_pagination_togglePageNumber_7_listener($event) {
        return ctx.setPage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("theme", ctx.b2bNgxLinkThemeEnum.BACKGROUND_BLACK);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("theme", ctx.b2bNgxLinkThemeEnum.BACKGROUND_BLACK);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("articles", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 6, ctx.articles$))("menuOptions", ctx.menuOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("length", ctx.totalCount)("perPage", 10);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _projects_ngx_link_src_lib_directive_ngx_link_directive__WEBPACK_IMPORTED_MODULE_18__.B2bNgxLinkDirective, _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_2__.B2bNgxPaginationComponent, _components_admin_articles_list_admin_articles_list_component__WEBPACK_IMPORTED_MODULE_3__.AdminArticlesListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  styles: [".admin-articles[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.admin-articles[_ngcontent-%COMP%]   .admin-articles__link[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: inline-block;\n  padding: 7.5px 15px;\n  border-radius: 3px;\n  margin: 0 15px;\n}\n.admin-articles[_ngcontent-%COMP%]   .admin-articles__link[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.admin-articles[_ngcontent-%COMP%]   .admin-articles__link[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.admin-articles[_ngcontent-%COMP%]   .admin-articles__list[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWFydGljbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQUNEO0FBQUM7RUFDQyxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRjtBQURFO0VBQ0MsY0FBQTtBQUdIO0FBREU7RUFDQyxlQUFBO0FBR0g7QUFDQztFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImFkbWluLWFydGljbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLWFydGljbGVzIHtcblx0cGFkZGluZzogMzBweDtcblx0LmFkbWluLWFydGljbGVzX19saW5rIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRwYWRkaW5nOiA3LjVweCAxNXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRtYXJnaW46IDAgMTVweDtcblx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdH1cblx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRcdH1cblx0fVxuXG5cdC5hZG1pbi1hcnRpY2xlc19fbGlzdCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bWFyZ2luLXRvcDogMTVweDtcblx0fVxufVxuIl19 */"],
  changeDetection: 0
});
AdminArticlesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.UntilDestroy)()], AdminArticlesComponent);


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
//# sourceMappingURL=src_app_admin_pages_admin-articles_admin-articles_module_ts.js.map