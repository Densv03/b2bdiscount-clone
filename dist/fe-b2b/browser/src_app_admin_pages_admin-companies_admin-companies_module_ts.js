"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_pages_admin-companies_admin-companies_module_ts"],{

/***/ 45283:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/pages/admin-companies/admin-companies-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCompaniesRoutingModule": () => (/* binding */ AdminCompaniesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_companies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-companies.component */ 84398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _layout_admin_companies_component__WEBPACK_IMPORTED_MODULE_0__.AdminCompaniesComponent
    }
];
class AdminCompaniesRoutingModule {
}
AdminCompaniesRoutingModule.ɵfac = function AdminCompaniesRoutingModule_Factory(t) { return new (t || AdminCompaniesRoutingModule)(); };
AdminCompaniesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminCompaniesRoutingModule });
AdminCompaniesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminCompaniesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23593:
/*!***********************************************************************!*\
  !*** ./src/app/admin/pages/admin-companies/admin-companies.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCompaniesModule": () => (/* binding */ AdminCompaniesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_companies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-companies-routing.module */ 45283);
/* harmony import */ var _layout_admin_companies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-companies.component */ 84398);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @b2b/ngx-pagination */ 19963);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @b2b/ngx-country-select */ 17354);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-daterangepicker-material */ 46815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);












class AdminCompaniesModule {
}
AdminCompaniesModule.ɵfac = function AdminCompaniesModule_Factory(t) { return new (t || AdminCompaniesModule)(); };
AdminCompaniesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminCompaniesModule });
AdminCompaniesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _admin_companies_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminCompaniesRoutingModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_5__.B2bNgxInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.B2bNgxPaginationModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_7__.B2bNgxIconModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__.B2bNgxCountrySelectModule,
        ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__.NgxDaterangepickerMd.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminCompaniesModule, { declarations: [_layout_admin_companies_component__WEBPACK_IMPORTED_MODULE_1__.AdminCompaniesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _admin_companies_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminCompaniesRoutingModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_5__.B2bNgxInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _b2b_ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.B2bNgxPaginationModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_7__.B2bNgxIconModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _b2b_ngx_country_select__WEBPACK_IMPORTED_MODULE_9__.B2bNgxCountrySelectModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__.NgxDaterangepickerMd] }); })();


/***/ }),

/***/ 84398:
/*!*********************************************************************************!*\
  !*** ./src/app/admin/pages/admin-companies/layout/admin-companies.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCompaniesComponent": () => (/* binding */ AdminCompaniesComponent)
/* harmony export */ });
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_admin_companies_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/admin-companies.service */ 6221);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../projects/ngx-pagination/src/lib/layout/ngx-pagination.component */ 93637);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../projects/ngx-country-select/src/lib/layout/ngx-country-select.component */ 11070);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-daterangepicker-material */ 46815);












function AdminCompaniesComponent_ng_container_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AdminCompaniesComponent_ng_container_4_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const company_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", company_r14.companyName, " ");
  }
}

function AdminCompaniesComponent_ng_container_4_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Chats count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AdminCompaniesComponent_ng_container_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const company_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", company_r15.countChats, " ");
  }
}

function AdminCompaniesComponent_ng_container_4_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Products count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AdminCompaniesComponent_ng_container_4_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const company_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", company_r16.countProducts, " ");
  }
}

function AdminCompaniesComponent_ng_container_4_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Registration date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AdminCompaniesComponent_ng_container_4_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const company_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, company_r17.createdAt), " ");
  }
}

function AdminCompaniesComponent_ng_container_4_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 19);
  }
}

function AdminCompaniesComponent_ng_container_4_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
  }
}

function AdminCompaniesComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AdminCompaniesComponent_ng_container_4_th_6_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdminCompaniesComponent_ng_container_4_td_7_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AdminCompaniesComponent_ng_container_4_th_9_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AdminCompaniesComponent_ng_container_4_td_10_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AdminCompaniesComponent_ng_container_4_th_12_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AdminCompaniesComponent_ng_container_4_td_13_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AdminCompaniesComponent_ng_container_4_th_15_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AdminCompaniesComponent_ng_container_4_td_16_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AdminCompaniesComponent_ng_container_4_tr_17_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AdminCompaniesComponent_ng_container_4_tr_18_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b2b-ngx-pagination", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("togglePageNumber", function AdminCompaniesComponent_ng_container_4_Template_b2b_ngx_pagination_togglePageNumber_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.togglePage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const adminCompaniesCount_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total companies count: ", adminCompaniesCount_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, ctx_r0.adminCompaniesList$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", adminCompaniesCount_r3)("perPage", ctx_r0.productsLimit);
  }
}

function AdminCompaniesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No companies found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

class AdminCompaniesComponent {
  constructor(fb, adminCompaniesService) {
    this.fb = fb;
    this.adminCompaniesService = adminCompaniesService;
    this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_3__.B2bNgxInputThemeEnum;
    this.productsLimit = 20;
    this.filtersForm = this.fb.group({
      q: null,
      registrationDate: this.fb.control({
        startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString(),
        endDate: new Date(Date.now()).toISOString()
      }),
      country: [null]
    });
    this.adminCompaniesCount$ = this.adminCompaniesService.adminCompaniesCount$;
    this.adminCompaniesList$ = this.adminCompaniesService.adminCompaniesList$;
    this.displayedColumns = ['companyName', 'countChats', 'countProducts', 'createdAt'];
    this.currentFilters = null;
    this.filteredQueryObj = {
      limit: this.productsLimit,
      offset: 0
    };
  }

  ngOnInit() {
    this.updateCompaniesListOnFiltersChange();
    this.filtersForm.get('registrationDate').updateValueAndValidity();
  }

  removeFalsyKeysFromObject(object) {
    for (const key in object) {
      if (!object[key]) delete object[key];
    }

    return object;
  }

  updateCompaniesListOnFiltersChange() {
    this.filtersForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => {
      if (data.registrationDate.startDate) {
        const date = new Date(data.registrationDate.startDate);
        data.registrationDate.startDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString();
      }

      if (data.registrationDate.endDate) {
        data.registrationDate.endDate = new Date(data.registrationDate.endDate).toISOString();
      }

      if (!data.q) {
        delete data.q;
      }

      data.active = true;
      data.dateFrom = data.registrationDate.startDate;
      data.dateTo = data.registrationDate.endDate;
      delete data.registrationDate;
      return data;
    })).subscribe(filters => {
      this.onFiltersChange();
      this.adminCompaniesService.updateAdminCompaniesList(this.filteredQueryObj, { ...this.removeFalsyKeysFromObject(filters)
      });
      this.currentFilters = filters;
    });
  }

  togglePage(page) {
    this.filteredQueryObj = { ...this.filteredQueryObj,
      offset: (page - 1) * this.productsLimit
    };
    this.adminCompaniesService.updateAdminCompaniesList(this.filteredQueryObj, { ...this.currentFilters
    });
  }

  onFiltersChange() {
    this.filteredQueryObj = {
      limit: this.productsLimit,
      offset: 0
    };
    this.currentFilters = null;
  }

}

AdminCompaniesComponent.ɵfac = function AdminCompaniesComponent_Factory(t) {
  return new (t || AdminCompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_admin_companies_service__WEBPACK_IMPORTED_MODULE_0__.AdminCompaniesService));
};

AdminCompaniesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AdminCompaniesComponent,
  selectors: [["b2b-admin-companies"]],
  decls: 8,
  vars: 8,
  consts: [[3, "formGroup"], ["type", "text", "b2bNgxInput", "", "placeholder", "Enter company name", "label", "Company name", "formControlName", "q", 1, "mb-3", 3, "theme"], ["b2bNgxInput", "", "ngxDaterangepickerMd", "", "label", "Registration Time", "type", "text", "placeholder", "Select range of date", "name", "daterange", "formControlName", "registrationDate", 1, "mb-3", 3, "theme", "showClearButton"], ["formControlName", "country", "placeholder", "Select Country"], [4, "ngIf", "ngIfElse"], ["noCompanies", ""], [1, "total-count"], ["mat-table", "", 1, "mat-elevation-z8", "w-100", "mt-4", 3, "dataSource"], ["matColumnDef", "companyName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "countChats"], ["matColumnDef", "countProducts"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "perPage", "togglePageNumber"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function AdminCompaniesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 1)(2, "input", 2)(3, "b2b-ngx-country-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdminCompaniesComponent_ng_container_4_Template, 20, 8, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AdminCompaniesComponent_ng_template_6_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.filtersForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("showClearButton", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx.adminCompaniesCount$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_7__.B2bNgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _projects_ngx_pagination_src_lib_layout_ngx_pagination_component__WEBPACK_IMPORTED_MODULE_1__.B2bNgxPaginationComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _projects_ngx_country_select_src_lib_layout_ngx_country_select_component__WEBPACK_IMPORTED_MODULE_9__.B2bNgxCountrySelectComponent, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__.DaterangepickerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: ["[_nghost-%COMP%]   .total-count[_ngcontent-%COMP%] {\n  background: white;\n  padding: 15px;\n  margin-top: 25px;\n}\n[_nghost-%COMP%]     th, [_nghost-%COMP%]     td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWNvbXBhbmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHRTtFQUNDLHNCQUFBO0FBREgiLCJmaWxlIjoiYWRtaW4tY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHQudG90YWwtY291bnQge1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0bWFyZ2luLXRvcDogMjVweDtcblx0fVxuXHQ6Om5nLWRlZXAge1xuXHRcdHRoLCB0ZCB7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdH1cblx0fVxufVxuIl19 */"]
});

/***/ }),

/***/ 6221:
/*!*********************************************************************************!*\
  !*** ./src/app/admin/pages/admin-companies/services/admin-companies.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCompaniesService": () => (/* binding */ AdminCompaniesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/api/api.service */ 96931);




class AdminCompaniesService {
    constructor(apiService) {
        this.apiService = apiService;
        this.adminCompaniesListSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.adminCompaniesCountSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    }
    get adminCompaniesList$() {
        return this.adminCompaniesListSource.asObservable();
    }
    get adminCompaniesCount$() {
        return this.adminCompaniesCountSource.asObservable();
    }
    updateAdminCompaniesList(paginationModel, otherParams) {
        this.getAdminCompaniesList(paginationModel, otherParams)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)())
            .subscribe(data => {
            this.adminCompaniesCountSource.next(data.totalCount);
            this.adminCompaniesListSource.next(data.companies);
        });
    }
    getAdminCompaniesList(paginationModel, otherParams) {
        return this.apiService.get('products/get-company', {
            params: {
                ...paginationModel,
                ...otherParams
            }
        });
    }
}
AdminCompaniesService.ɵfac = function AdminCompaniesService_Factory(t) { return new (t || AdminCompaniesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
AdminCompaniesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AdminCompaniesService, factory: AdminCompaniesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_admin-companies_admin-companies_module_ts.js.map