"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_pages_admin-manager_admin-manager_module_ts"],{

/***/ 47651:
/*!***************************************************************************!*\
  !*** ./src/app/admin/pages/admin-manager/admin-manager-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminManagerRoutingModule": () => (/* binding */ AdminManagerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-manager.component */ 7378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_admin_manager_component__WEBPACK_IMPORTED_MODULE_0__.AdminManagerComponent,
    },
];
class AdminManagerRoutingModule {
}
AdminManagerRoutingModule.ɵfac = function AdminManagerRoutingModule_Factory(t) { return new (t || AdminManagerRoutingModule)(); };
AdminManagerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminManagerRoutingModule });
AdminManagerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminManagerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 50971:
/*!*******************************************************************!*\
  !*** ./src/app/admin/pages/admin-manager/admin-manager.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminManagerModule": () => (/* binding */ AdminManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-manager-routing.module */ 47651);
/* harmony import */ var _layout_admin_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin-manager.component */ 7378);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-input */ 94418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @b2b/ngx-icon */ 51163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);









class AdminManagerModule {
}
AdminManagerModule.ɵfac = function AdminManagerModule_Factory(t) { return new (t || AdminManagerModule)(); };
AdminManagerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminManagerModule });
AdminManagerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _admin_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminManagerRoutingModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_8__.B2bNgxIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminManagerModule, { declarations: [_layout_admin_manager_component__WEBPACK_IMPORTED_MODULE_1__.AdminManagerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _admin_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminManagerRoutingModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_6__.B2bNgxButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _b2b_ngx_icon__WEBPACK_IMPORTED_MODULE_8__.B2bNgxIconModule] }); })();


/***/ }),

/***/ 7378:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/pages/admin-manager/layout/admin-manager.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminManagerComponent": () => (/* binding */ AdminManagerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-button */ 14739);
/* harmony import */ var _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @b2b/ngx-input */ 70771);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/helpers/validator/only-number */ 64309);
/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-list */ 1188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/clipboard */ 91604);
/* harmony import */ var _ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/hot-toast */ 58558);
/* harmony import */ var _shared_services_admin_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/admin-manager.service */ 5203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../projects/ngx-input/src/lib/directive/ngx-input.directive */ 70159);
/* harmony import */ var _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../projects/ngx-button/src/lib/directive/ngx-button.directive */ 5214);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../projects/ngx-icon/src/lib/directive/ngx-icon.directive */ 22529);


















function AdminManagerComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ref Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminManagerComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminManagerComponent_td_17_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const element_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.copyLink(element_r12.link)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r12.refId, " ");
} }
function AdminManagerComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminManagerComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r15.firstName);
} }
function AdminManagerComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminManagerComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r16.lastName);
} }
function AdminManagerComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "th", 28);
} }
function AdminManagerComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminManagerComponent_td_26_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const element_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.deleteManager(element_r17.refId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx_r7.b2bNgxButtonThemeEnum.BACKGROUND_RED);
} }
function AdminManagerComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 32);
} }
function AdminManagerComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 33);
} }
function AdminManagerComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total count: ", ctx_r10.userList.length, "");
} }
function AdminManagerComponent_table_34_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminManagerComponent_table_34_td_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", "check-blue");
} }
function AdminManagerComponent_table_34_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminManagerComponent_table_34_td_3_img_2_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r33.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (element_r33.products == null ? null : element_r33.products.length) && ctx_r22.isApproved(element_r33.products));
} }
function AdminManagerComponent_table_34_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Registration type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminManagerComponent_table_34_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r35.typeRegistration, " ");
} }
function AdminManagerComponent_table_34_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminManagerComponent_table_34_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r26.getCountryNameByCode(element_r36.userData[0] == null ? null : element_r36.userData[0].phone == null ? null : element_r36.userData[0].phone.countryCode), " ");
} }
function AdminManagerComponent_table_34_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Registration date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminManagerComponent_table_34_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r37.userData[0] == null ? null : element_r37.userData[0].createdAt, "MM/d/yy"), " ");
} }
function AdminManagerComponent_table_34_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Company name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminManagerComponent_table_34_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r38 == null ? null : element_r38.userData[0] == null ? null : element_r38.userData[0].company, " ");
} }
function AdminManagerComponent_table_34_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 32);
} }
function AdminManagerComponent_table_34_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 33);
} }
function AdminManagerComponent_table_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminManagerComponent_table_34_th_2_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AdminManagerComponent_table_34_td_3_Template, 3, 2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AdminManagerComponent_table_34_th_5_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AdminManagerComponent_table_34_td_6_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AdminManagerComponent_table_34_th_8_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AdminManagerComponent_table_34_td_9_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AdminManagerComponent_table_34_th_11_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AdminManagerComponent_table_34_td_12_Template, 3, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AdminManagerComponent_table_34_th_14_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AdminManagerComponent_table_34_td_15_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AdminManagerComponent_table_34_tr_16_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdminManagerComponent_table_34_tr_17_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r11.userList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.displayedColumnsUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r11.displayedColumnsUsers);
} }
let AdminManagerComponent = class AdminManagerComponent {
    constructor(formBuilder, clipboard, hotToastService, adminManagerService, changeDetectionRef) {
        this.formBuilder = formBuilder;
        this.clipboard = clipboard;
        this.hotToastService = hotToastService;
        this.adminManagerService = adminManagerService;
        this.changeDetectionRef = changeDetectionRef;
        this.b2bNgxInputThemeEnum = _b2b_ngx_input__WEBPACK_IMPORTED_MODULE_4__.B2bNgxInputThemeEnum;
        this.b2bNgxButtonThemeEnum = _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__.B2bNgxButtonThemeEnum;
        this.managersList = [];
        this.userList = [];
        this.displayedColumnsManagers = ["refId", "firstName", "lastName", "delete"];
        this.displayedColumnsUsers = ["email", "registrationType", "country", "registrationDate", "company"];
        this.generatedLink = "";
        this.formGroup = this.formBuilder.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
        this.usersByRefIdGroup = this.formBuilder.group({
            refId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, (0,_core_helpers_validator_only_number__WEBPACK_IMPORTED_MODULE_0__.onlyNumber)()]],
        });
    }
    ngOnInit() {
        this.updateManagerList();
    }
    generateLink(formGroup) {
        if (!formGroup.valid) {
            return;
        }
        this.adminManagerService
            .addManager(formGroup.value.firstName, formGroup.value.lastName, formGroup.value.url)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this))
            .subscribe((data) => {
            this.generatedLink = data.link;
            this.updateManagerList();
            this.changeDetectionRef.detectChanges();
        });
        this.formGroup.reset();
        this.updateManagerList();
    }
    getUsersByRefId(formGroup) {
        if (!formGroup.valid) {
            return;
        }
        this.adminManagerService.getUsersByRefId(parseInt(formGroup.value.refId)).subscribe((data) => {
            if (!data.length) {
                this.hotToastService.show("There's no users found with current refId", {
                    dismissible: true,
                    style: {
                        border: "1px solid #3D48E6",
                    },
                    autoClose: true,
                });
            }
            this.userList = data[0].users;
            this.changeDetectionRef.detectChanges();
        });
    }
    isApproved(products) {
        return products.some(product => product.productApproved);
    }
    copyLink(link = this.generatedLink) {
        this.clipboard.copy(link);
        this.hotToastService.show("Link copied to clipboard", {
            dismissible: true,
            style: {
                border: "1px solid #3D48E6",
            },
            autoClose: true,
        });
    }
    deleteManager(refId) {
        this.adminManagerService.deleteManagerById(refId).subscribe(() => this.updateManagerList());
    }
    getCountryNameByCode(countryCode) {
        return countryCode ? (0,country_list__WEBPACK_IMPORTED_MODULE_1__.getName)(countryCode) : "";
    }
    updateManagerList() {
        this.adminManagerService.getManagers().subscribe((data) => {
            this.managersList = data;
            this.changeDetectionRef.detectChanges();
        });
    }
};
AdminManagerComponent.ɵfac = function AdminManagerComponent_Factory(t) { return new (t || AdminManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_hot_toast__WEBPACK_IMPORTED_MODULE_9__.HotToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_admin_manager_service__WEBPACK_IMPORTED_MODULE_2__.AdminManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
AdminManagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdminManagerComponent, selectors: [["b2b-admin-manager"]], decls: 35, vars: 17, consts: [[1, "admin-manager"], [1, "admin-manager__form-group", 3, "formGroup", "ngSubmit"], [1, "admin-manager__form-group__container"], ["type", "text", "b2bNgxInput", "", "formControlName", "firstName", "placeholder", "First name", "label", "Enter first name", 3, "theme"], ["type", "text", "b2bNgxInput", "", "formControlName", "lastName", "placeholder", "Second name", "label", "Enter second name", 3, "theme"], ["type", "text", "b2bNgxInput", "", "formControlName", "url", "placeholder", "https://b2b.discount/blog", "label", "Enter the link for which the ref will be generated", 1, "mb-3", 3, "theme"], ["b2bNgxButton", "", 3, "theme"], [1, "admin-manager__generated-link"], ["b2bNgxInput", "", "disabled", "", "placeholder", "Here will be generated link", 3, "ngModel", "theme", "ngModelChange"], ["b2bNgxButton", "", 3, "theme", "disabled", "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "refId"], ["class", "th-id", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "firstName"], ["class", "th-firstName", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastName"], ["class", "th-lastName", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "admin-manager__generated-link", 3, "formGroup", "ngSubmit"], ["type", "text", "b2bNgxInput", "", "formControlName", "refId", "placeholder", "Ref id", 3, "theme"], [4, "ngIf"], ["mat-table", "", "class", "mat-elevation-z8 w-100", 3, "dataSource", 4, "ngIf"], ["mat-header-cell", "", 1, "th-id"], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", 1, "th-firstName"], ["mat-cell", ""], ["mat-header-cell", "", 1, "th-lastName"], ["b2bNgxButton", "", 1, "delete-btn", 3, "theme", "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-table", "", 1, "mat-elevation-z8", "w-100", 3, "dataSource"], ["matColumnDef", "email"], ["matColumnDef", "registrationType"], ["matColumnDef", "country"], ["matColumnDef", "registrationDate"], ["matColumnDef", "company"], ["b2bNgxIcon", "", 3, "name", 4, "ngIf"], ["b2bNgxIcon", "", 3, "name"]], template: function AdminManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminManagerComponent_Template_form_ngSubmit_1_listener() { return ctx.generateLink(ctx.formGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Generate Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminManagerComponent_Template_input_ngModelChange_11_listener($event) { return ctx.generatedLink = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminManagerComponent_Template_button_click_12_listener() { return ctx.copyLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Copy URL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AdminManagerComponent_th_16_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AdminManagerComponent_td_17_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AdminManagerComponent_th_19_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AdminManagerComponent_td_20_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AdminManagerComponent_th_22_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AdminManagerComponent_td_23_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AdminManagerComponent_th_25_Template, 1, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AdminManagerComponent_td_26_Template, 3, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AdminManagerComponent_tr_27_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AdminManagerComponent_tr_28_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminManagerComponent_Template_form_ngSubmit_29_listener() { return ctx.getUsersByRefId(ctx.usersByRefIdGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AdminManagerComponent_div_33_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AdminManagerComponent_table_34_Template, 18, 3, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.generatedLink)("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK)("disabled", !ctx.generatedLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.managersList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsManagers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsManagers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.usersByRefIdGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxInputThemeEnum.BACKGROUND_WHITE);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("theme", ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userList == null ? null : ctx.userList.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _projects_ngx_input_src_lib_directive_ngx_input_directive__WEBPACK_IMPORTED_MODULE_11__.B2bNgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _projects_ngx_button_src_lib_directive_ngx_button_directive__WEBPACK_IMPORTED_MODULE_12__.B2bNgxButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _projects_ngx_icon_src_lib_directive_ngx_icon_directive__WEBPACK_IMPORTED_MODULE_14__.B2bNgxIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".admin-manager[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.admin-manager__form-group__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n.admin-manager__form-group__container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.admin-manager__form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n.admin-manager__generated-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n}\n.admin-manager__generated-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 85%;\n}\n.admin-manager__generated-link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 15%;\n}\n[_nghost-%COMP%]  table {\n  width: 65%;\n  margin-top: 50px;\n  background-color: #ffffff;\n}\n[_nghost-%COMP%]  th.mat-header-cell:first-of-type {\n  padding-left: 0;\n}\n[_nghost-%COMP%]  td.mat-cell:first-of-type {\n  padding-left: 0;\n}\n[_nghost-%COMP%]  th.mat-header-cell:last-of-type {\n  padding-left: 0;\n}\n[_nghost-%COMP%]  td.mat-cell:last-of-type {\n  padding-right: 0;\n}\n[_nghost-%COMP%]  .th-id {\n  width: 10%;\n  text-align: center;\n  background-color: #000;\n  color: #ffffff;\n  padding-top: 18px;\n}\n[_nghost-%COMP%]  .th-firstName {\n  text-align: center;\n  padding-left: 0;\n}\n[_nghost-%COMP%]  .th-lastName {\n  text-align: center;\n  padding-left: 0;\n}\n[_nghost-%COMP%]  .cdk-column-refId {\n  text-align: center;\n  background-color: #fff;\n  color: #000000;\n  padding-top: 22px;\n  padding-left: 45px;\n  font-size: 20px;\n  height: 65px;\n  width: 10%;\n  border-right: 15px solid #f3f6f8;\n  border-bottom: 15px solid #f3f6f8;\n  cursor: pointer;\n}\n[_nghost-%COMP%]  .cdk-column-lastName, [_nghost-%COMP%]  .cdk-column-email, [_nghost-%COMP%]  .cdk-column-registrationType, [_nghost-%COMP%]  .cdk-column-firstName, [_nghost-%COMP%]  .cdk-column-registrationDate, [_nghost-%COMP%]  .cdk-column-country, [_nghost-%COMP%]  .cdk-column-company {\n  background-color: #fff;\n  color: #000000;\n  padding-top: 22px;\n  padding-left: 45px;\n  font-size: 20px;\n  height: 65px;\n  width: 40%;\n  border-right: 15px solid #f3f6f8;\n  border-bottom: 15px solid #f3f6f8;\n}\n[_nghost-%COMP%]  .cdk-column-email > img {\n  width: 20px;\n}\n[_nghost-%COMP%]  .cdk-column-company {\n  width: 50%;\n  padding: 5px;\n}\n[_nghost-%COMP%]  .cdk-column-delete {\n  background-color: #fff;\n  height: 65px;\n  width: 10%;\n  border-bottom: 15px solid #f3f6f8;\n}\n[_nghost-%COMP%]  .delete-btn {\n  width: 100%;\n  height: 100%;\n  transform: translateY(-17%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0FBQ0Q7QUFFRTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQU1BLG1CQUFBO0FBTEg7QUFDRztFQUNDLFVBQUE7QUFDSjtBQUtFO0VBQ0Msa0JBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQU9FO0VBQ0MsVUFBQTtBQUxIO0FBUUU7RUFDQyxVQUFBO0FBTkg7QUFZQztFQUNDLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBVEY7QUFZQztFQUNDLGVBQUE7QUFWRjtBQWFDO0VBQ0MsZUFBQTtBQVhGO0FBY0M7RUFDQyxlQUFBO0FBWkY7QUFlQztFQUNDLGdCQUFBO0FBYkY7QUFnQkM7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWRGO0FBaUJDO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FBZkY7QUFrQkM7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUFoQkY7QUFtQkM7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQWpCRjtBQW9CQzs7Ozs7OztFQU9DLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBbEJGO0FBcUJDO0VBQ0MsV0FBQTtBQW5CRjtBQXNCQztFQUNDLFVBQUE7RUFDQSxZQUFBO0FBcEJGO0FBdUJDO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FBckJGO0FBd0JDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQXRCRiIsImZpbGUiOiJhZG1pbi1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLW1hbmFnZXIge1xuXHRwYWRkaW5nOiAzMHB4O1xuXG5cdCZfX2Zvcm0tZ3JvdXAge1xuXHRcdCZfX2NvbnRhaW5lciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cdFx0XHRkaXYge1xuXHRcdFx0XHR3aWR0aDogNDklO1xuXHRcdFx0fVxuXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdH1cblxuXHRcdGJ1dHRvbiB7XG5cdFx0XHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdFx0fVxuXHR9XG5cblx0Jl9fZ2VuZXJhdGVkLWxpbmsge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cblx0XHRpbnB1dCB7XG5cdFx0XHR3aWR0aDogODUlO1xuXHRcdH1cblxuXHRcdGJ1dHRvbiB7XG5cdFx0XHR3aWR0aDogMTUlO1xuXHRcdH1cblx0fVxufVxuXG46aG9zdDo6bmctZGVlcCB7XG5cdHRhYmxlIHtcblx0XHR3aWR0aDogNjUlO1xuXHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0fVxuXG5cdHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblxuXHR0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblxuXHR0aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblxuXHR0ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUge1xuXHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdH1cblxuXHQudGgtaWQge1xuXHRcdHdpZHRoOiAxMCU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0cGFkZGluZy10b3A6IDE4cHg7XG5cdH1cblxuXHQudGgtZmlyc3ROYW1lIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHR9XG5cblx0LnRoLWxhc3ROYW1lIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHR9XG5cblx0LmNkay1jb2x1bW4tcmVmSWQge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGNvbG9yOiAjMDAwMDAwO1xuXHRcdHBhZGRpbmctdG9wOiAyMnB4O1xuXHRcdHBhZGRpbmctbGVmdDogNDVweDtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0aGVpZ2h0OiA2NXB4O1xuXHRcdHdpZHRoOiAxMCU7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkICNmM2Y2Zjg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZjNmNmY4O1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXG5cdC5jZGstY29sdW1uLWxhc3ROYW1lLFxuXHQuY2RrLWNvbHVtbi1lbWFpbCxcblx0LmNkay1jb2x1bW4tcmVnaXN0cmF0aW9uVHlwZSxcblx0LmNkay1jb2x1bW4tZmlyc3ROYW1lLFxuXHQuY2RrLWNvbHVtbi1yZWdpc3RyYXRpb25EYXRlLFxuXHQuY2RrLWNvbHVtbi1jb3VudHJ5LFxuXHQuY2RrLWNvbHVtbi1jb21wYW55IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGNvbG9yOiAjMDAwMDAwO1xuXHRcdHBhZGRpbmctdG9wOiAyMnB4O1xuXHRcdHBhZGRpbmctbGVmdDogNDVweDtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0aGVpZ2h0OiA2NXB4O1xuXHRcdHdpZHRoOiA0MCU7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkICNmM2Y2Zjg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZjNmNmY4O1xuXHR9XG5cblx0LmNkay1jb2x1bW4tZW1haWwgPiBpbWcge1xuXHRcdHdpZHRoOiAyMHB4O1xuXHR9XG5cblx0LmNkay1jb2x1bW4tY29tcGFueSB7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdH1cblxuXHQuY2RrLWNvbHVtbi1kZWxldGUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0aGVpZ2h0OiA2NXB4O1xuXHRcdHdpZHRoOiAxMCU7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZjNmNmY4O1xuXHR9XG5cblx0LmRlbGV0ZS1idG4ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE3JSk7XG5cdH1cbn1cbiJdfQ== */"] });
AdminManagerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()
], AdminManagerComponent);



/***/ }),

/***/ 5203:
/*!************************************************************************************!*\
  !*** ./src/app/admin/pages/admin-manager/shared/services/admin-manager.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminManagerService": () => (/* binding */ AdminManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/services/api/api.service */ 96931);


class AdminManagerService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    addManager(firstName, lastName, url) {
        return this.apiService.post("managers/add-new-manager", { firstName, lastName, url });
    }
    getUsersByRefId(refId) {
        return this.apiService.get(`statistics/get-users-list?refId=${refId}`);
    }
    deleteManagerById(refId) {
        return this.apiService.delete(`managers/delete-manager?refId=${refId}`);
    }
    getManagers(refId) {
        if (refId) {
            return this.apiService.get(`managers/get-managers?refId=${refId}`);
        }
        else {
            return this.apiService.get("managers/get-managers");
        }
    }
}
AdminManagerService.ɵfac = function AdminManagerService_Factory(t) { return new (t || AdminManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
AdminManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminManagerService, factory: AdminManagerService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 64309:
/*!*******************************************************!*\
  !*** ./src/app/core/helpers/validator/only-number.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlyNumber": () => (/* binding */ onlyNumber)
/* harmony export */ });
function onlyNumber() {
    return (control) => /^[0-9.]*$/g.test(control.value) ? null : { number: true };
}


/***/ })

}]);
//# sourceMappingURL=src_app_admin_pages_admin-manager_admin-manager_module_ts.js.map