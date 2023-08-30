"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_pages_admin-homepage_admin-homepage_module_ts"],{

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

/***/ 85614:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/admin-homepage/admin-homepage-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminHomepageRoutingModule": () => (/* binding */ AdminHomepageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-homepage.component */ 1739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_admin_homepage_component__WEBPACK_IMPORTED_MODULE_0__.AdminHomepageComponent,
    },
];
class AdminHomepageRoutingModule {
}
AdminHomepageRoutingModule.ɵfac = function AdminHomepageRoutingModule_Factory(t) { return new (t || AdminHomepageRoutingModule)(); };
AdminHomepageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminHomepageRoutingModule });
AdminHomepageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminHomepageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 74252:
/*!*********************************************************************!*\
  !*** ./src/app/admin/pages/admin-homepage/admin-homepage.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminHomepageModule": () => (/* binding */ AdminHomepageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-homepage-routing.module */ 85614);
/* harmony import */ var _layout_admin_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-homepage.component */ 1739);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-select */ 97631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);








class AdminHomepageModule {
}
AdminHomepageModule.ɵfac = function AdminHomepageModule_Factory(t) { return new (t || AdminHomepageModule)(); };
AdminHomepageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminHomepageModule });
AdminHomepageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _admin_homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminHomepageRoutingModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__.B2bNgxButtonModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_5__.B2bNgxInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__.B2bNgxSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminHomepageModule, { declarations: [_layout_admin_homepage_component__WEBPACK_IMPORTED_MODULE_1__.AdminHomepageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _admin_homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminHomepageRoutingModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__.B2bNgxButtonModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_5__.B2bNgxInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _b2b_ngx_select__WEBPACK_IMPORTED_MODULE_7__.B2bNgxSelectModule] }); })();


/***/ }),

/***/ 1739:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/pages/admin-homepage/layout/admin-homepage.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminHomepageComponent": () => (/* binding */ AdminHomepageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../client/services/categories/categories.service */ 57454);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _client_shared_services_homepage_homepage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../client/shared/services/homepage/homepage.service */ 44876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../projects/ngx-select/src/lib/layout/ngx-select.component */ 13114);

















function AdminHomepageComponent_div_1_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p")(1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminHomepageComponent_div_1_div_1_p_8_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const childIndex_r7 = restoredCtx.index;
      const parentIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onInputClick(parentIndex_r4, childIndex_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const childIndex_r7 = ctx.index;
    const parentIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("url-input-" + parentIndex_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx_r5.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("label", "Enter url " + ctx_r5.getLabel(childIndex_r7));
  }
}

function AdminHomepageComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "b2b-ngx-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminHomepageComponent_div_1_div_1_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const parentIndex_r4 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.toggleCollapse(parentIndex_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminHomepageComponent_div_1_div_1_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const parentIndex_r4 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.removeCategory(parentIndex_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Remove category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminHomepageComponent_div_1_div_1_p_8_Template, 2, 4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const parentCategoryControl_r3 = ctx.$implicit;
    const parentIndex_r4 = ctx.index;
    const categories_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", parentIndex_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", categories_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx_r2.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", parentCategoryControl_r3.value.collapsed ? "Expand" : "Collapse", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx_r2.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("d-none", !parentCategoryControl_r3.value.parentCategory || parentCategoryControl_r3.value.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", parentCategoryControl_r3.value.productIds);
  }
}

function AdminHomepageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdminHomepageComponent_div_1_div_1_Template, 9, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categoriesFormArray.controls);
  }
}

let AdminHomepageComponent = class AdminHomepageComponent {
  constructor(fb, categoriesService, hotToastService, elementRef, homepageService) {
    this.fb = fb;
    this.categoriesService = categoriesService;
    this.hotToastService = hotToastService;
    this.elementRef = elementRef;
    this.homepageService = homepageService;
    this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_4__.B2bNgxButtonThemeEnum;
    this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_5__.B2bNgxInputThemeEnum;
    this.categories$ = this.getCategories$();
    this.form = this.fb.group({
      categories: this.fb.array([this.createNewCategory()])
    });
  }

  get categoriesFormArray() {
    return this.form.get("categories");
  }

  ngOnInit() {
    this.initCarouselCategories();
  }

  removeCategory(index) {
    if (this.categoriesFormArray.length === 1) {
      this.hotToastService.info("You have zero selected categories");
      return;
    }

    this.categoriesFormArray.removeAt(index);
  }

  onSave() {
    var _a;

    const result = [];

    for (let i = 0; i <= 6; i++) {
      const elements = this.elementRef.nativeElement.querySelectorAll(`.url-input-${i}`);
      const categoryValue = (_a = this.categoriesFormArray.value[i]) === null || _a === void 0 ? void 0 : _a.parentCategory;

      if (!categoryValue) {
        continue;
      }

      const products = Array.from(elements).filter(item => item.value && item.value.includes("b2b.discount")).map(item => item.value.split("/").pop());

      if (products.length > 0) {
        result.push({
          id: categoryValue,
          products
        });
      }
    }

    this.homepageService.updateCarouselItems(result).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this), this.hotToastService.observe({
      loading: "Carousel updating...",
      success: "Carousel updated successfully",
      error: "Error while updating carousel"
    })).subscribe();
  }

  addCategory() {
    if (this.categoriesFormArray.length >= 6) {
      this.hotToastService.info("You can't add more then 6 categories");
      return;
    }

    this.categoriesFormArray.push(this.createNewCategory());
  }

  getLabel(index) {
    if (isNaN(+index)) {
      throw "Invalid index";
    }

    if (typeof index === "string") {
      return (parseInt(index) + 1).toString();
    }

    return (index + 1).toString();
  }

  toggleCollapse(index) {
    const newValue = this.categoriesFormArray.value.map((controlValue, i) => index === i ? { ...controlValue,
      collapsed: !controlValue.collapsed
    } : controlValue);
    this.categoriesFormArray.setValue(newValue);
  }

  onInputClick(parentIndex, childIndex) {
    if (isNaN(+parentIndex) || isNaN(+childIndex)) {
      throw new Error("Invalid index");
    }

    let input;
    input = document.querySelectorAll(`.url-input-${parentIndex}`)[childIndex];
    input.focus();
    input.select();
  }

  createNewCategory() {
    return this.fb.group({
      parentCategory: [],
      productIds: [Array(12)],
      collapsed: true
    });
  }

  getCategories$() {
    return this.categoriesService.getCategories$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(categories => categories.categories), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(categories => categories.map(({
      name,
      _id
    }) => {
      return {
        name,
        _id
      };
    })));
  }

  initCarouselCategories() {
    this.homepageService.getCarouselItems().subscribe(data => {
      for (let i = 0; i < data.length - 1; ++i) {
        this.addCategory();
      }

      this.categoriesFormArray.setValue(data.map(item => ({
        parentCategory: item._id,
        productIds: Array(12),
        collapsed: true
      })));
      setTimeout(() => {
        data.forEach((item, parentIndex) => {
          document.querySelectorAll(`.url-input-${parentIndex}`).forEach((item, childIndex) => {
            var _a, _b;

            const value = ((_a = data[parentIndex].products[childIndex]) === null || _a === void 0 ? void 0 : _a.path) || ((_b = data[parentIndex].products[childIndex]) === null || _b === void 0 ? void 0 : _b._id);

            if (value) {
              item.value = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl.includes("api-dev") ? "dev.b2b.discount/b2bmarket/products/" + value : "b2b.discount/b2bmarket/products/" + value;
            }
          });
        });
      });
    });
  }

};

AdminHomepageComponent.ɵfac = function AdminHomepageComponent_Factory(t) {
  return new (t || AdminHomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_client_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_9__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_client_shared_services_homepage_homepage_service__WEBPACK_IMPORTED_MODULE_2__.HomepageService));
};

AdminHomepageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AdminHomepageComponent,
  selectors: [["b2b-admin-homepage"]],
  decls: 8,
  vars: 6,
  consts: [[3, "formGroup"], ["formArrayName", "categories", 4, "ngIf"], [1, "d-flex", "pt-2"], ["b2bNgxButton", "", 1, "w-50", "py-2", 3, "theme", "click"], ["b2bNgxButton", "", 1, "d-block", "w-50", "py-2", 3, "theme", "click"], ["formArrayName", "categories"], [4, "ngFor", "ngForOf"], [1, "d-flex", 2, "flex-wrap", "wrap", 3, "formGroupName"], ["placeholder", "Select parent category", "formControlName", "parentCategory", "bindValue", "_id", "bindLabel", "name", 2, "width", "70%", 3, "options"], ["b2bNgxButton", "", 2, "width", "15%", 3, "theme", "click"], [1, "w-100"], ["type", "text", "b2bNgxInput", "", "placeholder", "Enter product url ", 3, "theme", "label", "click"]],
  template: function AdminHomepageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AdminHomepageComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminHomepageComponent_Template_button_click_4_listener() {
        return ctx.addCategory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Add category ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminHomepageComponent_Template_button_click_6_listener() {
        return ctx.onSave();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Save changes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, ctx.categories$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLUE);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_11__.B2bNgxButtonDirective, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_12__.B2bNgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _projects_ngx_select_src_lib_layout_ngx_select_component__WEBPACK_IMPORTED_MODULE_13__.B2bNgxSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1ob21lcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
});
AdminHomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()], AdminHomepageComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_admin-homepage_admin-homepage_module_ts.js.map