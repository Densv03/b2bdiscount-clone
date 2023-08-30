"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 13176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin.component */ 37495);
/* harmony import */ var _client_pages_client_tradebid_client_tradebid_add_rfq_client_trade_bid_add_rfq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/pages/client-tradebid/client-tradebid-add-rfq/client-trade-bid-add-rfq.component */ 44655);
/* harmony import */ var _auth_guards_companyInformation_company_information_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/guards/companyInformation/company-information.guard */ 17562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: "",
        component: _layout_admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent,
        children: [
            {
                path: "articles",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_pages_admin-articles_admin-articles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-articles/admin-articles.module */ 45074)).then((m) => m.AdminArticlesModule),
            },
            {
                path: "articles/:id",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_ngx-file_src_public-api_ts"), __webpack_require__.e("default-projects_ngx-chips_src_public-api_ts"), __webpack_require__.e("default-projects_ngx-country-select_src_lib_ngx-country-select_module_ts-projects_ngx-select_-3d7f05"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_pages_admin-article_admin-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-article/admin-article.module */ 97702)).then((m) => m.AdminArticleModule),
            },
            {
                path: "article-categories",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_ngx-toggle_src_lib_layout_ngx-toggle_component_ts"), __webpack_require__.e("src_app_admin_pages_admin-article-categories_admin-article-categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-article-categories/admin-article-categories.module */ 84360)).then((m) => m.AdminArticleCategoriesModule),
            },
            {
                path: "blog",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_pages_admin-blog_admin-blog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-blog/admin-blog.module */ 83537)).then((m) => m.AdminBlogModule),
            },
            {
                path: "blog/:id",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_ngx-file_src_public-api_ts"), __webpack_require__.e("default-projects_ngx-chips_src_public-api_ts"), __webpack_require__.e("default-projects_ngx-country-select_src_lib_ngx-country-select_module_ts-projects_ngx-select_-3d7f05"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_pages_admin-blog-post_admin-blog-post_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-blog-post/admin-blog-post.module */ 33582)).then((m) => m.AdminBlogPostModule),
            },
            {
                path: "users",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-intl-tel-input_fesm2015_ngx-intl-tel-input_mjs"), __webpack_require__.e("default-projects_ngx-tel_src_lib_ngx-tel_module_ts"), __webpack_require__.e("default-projects_ngx-toggle_src_lib_layout_ngx-toggle_component_ts"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2015_swimlane-ngx-datatable_mjs"), __webpack_require__.e("default-projects_ngx-country-select_src_lib_ngx-country-select_module_ts-projects_ngx-paginat-f3ad57"), __webpack_require__.e("src_app_admin_pages_admin-users_admin-users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-users/admin-users.module */ 81950)).then((m) => m.AdminUsersModule),
            },
            {
                path: "users/:id",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-intl-tel-input_fesm2015_ngx-intl-tel-input_mjs"), __webpack_require__.e("default-projects_ngx-tel_src_lib_ngx-tel_module_ts"), __webpack_require__.e("default-projects_ngx-file_src_public-api_ts"), __webpack_require__.e("default-projects_ngx-chips_src_public-api_ts"), __webpack_require__.e("default-projects_ngx-social-medias_src_public-api_ts"), __webpack_require__.e("default-src_app_client_pages_client-profile_pages_client-profile-settings_client-profile-sett-0e3621"), __webpack_require__.e("default-src_app_client_pages_client-profile_components_client-profile-delete-account_client-p-e70be9"), __webpack_require__.e("projects_ngx-country-select_src_lib_ngx-country-select_module_ts-projects_ngx-radio_src_lib_l-4b16be")]).then(__webpack_require__.bind(__webpack_require__, /*! ../client/pages/client-profile/pages/client-profile-settings/client-profile-settings.module */ 3857)).then((m) => m.ClientProfileSettingsModule),
            },
            {
                path: "offers",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_socket_io-client_build_esm_index_js"), __webpack_require__.e("default-projects_ngx-pagination_src_public-api_ts-src_app_admin_pages_admin-offers_components-70af7c"), __webpack_require__.e("src_app_admin_pages_admin-offers_admin-offers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-offers/admin-offers.module */ 89257)).then((m) => m.AdminOffersModule),
            },
            {
                path: "offers/:id",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-intl-tel-input_fesm2015_ngx-intl-tel-input_mjs"), __webpack_require__.e("default-projects_ngx-tel_src_lib_ngx-tel_module_ts"), __webpack_require__.e("default-projects_ngx-file_src_public-api_ts"), __webpack_require__.e("default-projects_ngx-toggle_src_lib_layout_ngx-toggle_component_ts"), __webpack_require__.e("default-src_app_client_pages_client-profile_pages_client-profile-add-offer_client-profile-add-3db01c"), __webpack_require__.e("default-projects_ngx-country-select_src_lib_ngx-country-select_module_ts-projects_ngx-radio_s-789183"), __webpack_require__.e("projects_ngx-select_src_lib_ngx-select_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../client/pages/client-profile/pages/client-profile-add-offer/client-profile-add-offer.module */ 59186)).then((m) => m.ClientProfileAddOfferModule),
            },
            {
                path: "offer",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_pages_admin-offer_admin-offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-offer/admin-offer.module */ 75501)).then((m) => m.AdminOfferModule),
                canActivate: [_auth_guards_companyInformation_company_information_guard__WEBPACK_IMPORTED_MODULE_2__.CompanyInformationGuard],
            },
            {
                path: "offer-categories",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_ngx-toggle_src_lib_layout_ngx-toggle_component_ts"), __webpack_require__.e("src_app_admin_pages_admin-offer-categories_admin-offer-categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-offer-categories/admin-offer-categories.module */ 64262)).then((m) => m.AdminOfferCategoriesModule),
            },
            {
                path: "tradebid",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_socket_io-client_build_esm_index_js"), __webpack_require__.e("default-projects_ngx-pagination_src_public-api_ts-src_app_admin_pages_admin-offers_components-70af7c"), __webpack_require__.e("src_app_admin_pages_admin-tradebid_admin-tradebid_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-tradebid/admin-tradebid.module */ 91922)).then((m) => m.AdminTradebidModule),
            },
            {
                path: "b2bmarket",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_ngx-toggle_src_lib_layout_ngx-toggle_component_ts"), __webpack_require__.e("default-node_modules_socket_io-client_build_esm_index_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-projects_categories-modal_src_public-api_ts-projects_ngx-pagination_src_public-api_ts"), __webpack_require__.e("default-projects_ngx-select_src_lib_ngx-select_module_ts-src_app_client_pages_client-marketpl-341267"), __webpack_require__.e("projects_ngx-toggle_src_lib_ngx-toggle_module_ts-src_app_admin_pages_admin-marketplace_admin--ed31a2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-marketplace/admin-marketplace.module */ 49097)).then((m) => m.AdminMarketplaceModule),
            },
            {
                path: "tradebid/:id",
                component: _client_pages_client_tradebid_client_tradebid_add_rfq_client_trade_bid_add_rfq_component__WEBPACK_IMPORTED_MODULE_1__.ClientTradeBidAddRfqComponent,
                // loadChildren: () =>
                // 	import("../client/pages/client-tradebid/client-tradebid-listing/client-tradebid-quotation-form/client-tradebid-quotation-form.module")
                // 		.then(m => m.ClientTradebidQuotationFormModule)
            },
            {
                path: "manager",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_table_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_pages_admin-manager_admin-manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-manager/admin-manager.module */ 50971)).then((m) => m.AdminManagerModule),
            },
            {
                path: "billing",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_pages_admin-billing_admin-billing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-billing/admin-billing.module */ 45552)).then((m) => m.AdminBillingModule),
            },
            {
                path: "companies",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_ngx-country-select_src_lib_ngx-country-select_module_ts-projects_ngx-paginat-f3ad57"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_table_mjs"), __webpack_require__.e("src_app_admin_pages_admin-companies_admin-companies_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-companies/admin-companies.module */ 23593)).then((m) => m.AdminCompaniesModule),
            },
            {
                path: "homepage",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_pages_admin-homepage_admin-homepage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-homepage/admin-homepage.module */ 74252)).then((m) => m.AdminHomepageModule),
            },
            {
                path: "",
                pathMatch: "full",
                redirectTo: "users",
            },
        ],
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 13176);
/* harmony import */ var _layout_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/admin.component */ 37495);
/* harmony import */ var _components_admin_sidenav_admin_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin-sidenav/admin-sidenav.component */ 65369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_layout_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent, _components_admin_sidenav_admin_sidenav_component__WEBPACK_IMPORTED_MODULE_2__.AdminSidenavComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule] }); })();


/***/ }),

/***/ 65369:
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/admin-sidenav/admin-sidenav.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSidenavComponent": () => (/* binding */ AdminSidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



function AdminSidenavComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", option_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.label);
} }
class AdminSidenavComponent {
}
AdminSidenavComponent.ɵfac = function AdminSidenavComponent_Factory(t) { return new (t || AdminSidenavComponent)(); };
AdminSidenavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminSidenavComponent, selectors: [["app-admin-sidenav"]], inputs: { options: "options" }, decls: 3, vars: 1, consts: [[1, "admin-sidenav"], [1, "admin-sidenav__list"], ["class", "admin-sidenav__list-item", 4, "ngFor", "ngForOf"], [1, "admin-sidenav__list-item"], ["routerLinkActive", "active", 1, "admin-sidenav__list-item-link", 3, "routerLink"]], template: function AdminSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0)(1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminSidenavComponent_li_2_Template, 3, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: [".admin-sidenav[_ngcontent-%COMP%] {\n  background-color: black;\n  height: 100%;\n  padding: 30px 30px 30px 15px;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]   .admin-sidenav__list-item-link[_ngcontent-%COMP%] {\n  color: white;\n  transition: 0.2s;\n  border-bottom: 2px solid transparent;\n  padding-bottom: 2px;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]   .admin-sidenav__list-item-link.active[_ngcontent-%COMP%] {\n  border-color: white;\n}\n.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]   .admin-sidenav__list-item-link[_ngcontent-%COMP%]:hover {\n  color: #005dff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx1QkFBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtBQUFEO0FBR0U7RUFDQyxjQUFBO0FBREg7QUFHRztFQUNDLGFBQUE7QUFESjtBQUdHO0VBQ0MsZ0JBQUE7QUFESjtBQUlHO0VBQ0MsWUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDQyxtQkFBQTtBQUhMO0FBTUk7RUFDQyxjQUFBO0FBSkwiLCJmaWxlIjoiYWRtaW4tc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1zaWRlbmF2IHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdGhlaWdodDogMTAwJTtcblxuXHRwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAxNXB4O1xuXG5cdC5hZG1pbi1zaWRlbmF2X19saXN0IHtcblx0XHQuYWRtaW4tc2lkZW5hdl9fbGlzdC1pdGVtIHtcblx0XHRcdG1hcmdpbjogMzBweCAwO1xuXG5cdFx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHRcdH1cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5hZG1pbi1zaWRlbmF2X19saXN0LWl0ZW0tbGluayB7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblxuXHRcdFx0XHR0cmFuc2l0aW9uOiAwLjJzO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAycHg7XG5cblx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogd2hpdGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRjb2xvcjogIzAwNWRmZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 17129:
/*!**************************************************!*\
  !*** ./src/app/admin/data/admin-sidenav.data.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSidenavData": () => (/* binding */ AdminSidenavData)
/* harmony export */ });
const AdminSidenavData = [
    {
        label: "USERS",
        path: "/admin/users",
    },
    {
        label: "OFFERS",
        path: "/admin/offers",
    },
    // {
    // 	label: "WIKI ARTICLES",
    // 	path: "/admin/articles",
    // },
    {
        label: "MANAGER",
        path: "/admin/manager",
    },
    {
        label: "TRADE BID",
        path: "/admin/tradebid",
    },
    {
        label: "MARKET",
        path: "/admin/b2bmarket",
    },
    {
        label: "HOMEPAGE",
        path: "/admin/homepage",
    },
    {
        label: "COMPANIES",
        path: "/admin/companies",
    },
    {
        label: "BLOG",
        path: "/admin/blog",
    },
    {
        label: "BILLING",
        path: "/admin/billing",
    },
];


/***/ }),

/***/ 37495:
/*!*************************************************!*\
  !*** ./src/app/admin/layout/admin.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _data_admin_sidenav_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/admin-sidenav.data */ 17129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_admin_sidenav_admin_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-sidenav/admin-sidenav.component */ 65369);




class AdminComponent {
    constructor() {
        this.sidenavOptions = _data_admin_sidenav_data__WEBPACK_IMPORTED_MODULE_0__.AdminSidenavData;
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["b2b-admin"]], decls: 4, vars: 1, consts: [[1, "admin"], [3, "options"], [1, "admin-pages"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-admin-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.sidenavOptions);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_admin_sidenav_admin_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.AdminSidenavComponent], styles: [".admin[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: #f3f6f8;\n}\n.admin[_ngcontent-%COMP%]   .admin-pages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7QUFBRDtBQUVDO0VBQ0MsT0FBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNmY4O1xuXG5cdC5hZG1pbi1wYWdlcyB7XG5cdFx0ZmxleDogMTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map