"use strict";
exports.id = 6890;
exports.ids = [6890];
exports.modules = {

/***/ 13731:
/*!**********************************************************************!*\
  !*** ./src/app/auth/pages/auth-google/auth-google-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGoogleRoutingModuleModule": () => (/* binding */ AuthGoogleRoutingModuleModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_auth_google_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/auth-google.component */ 64475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_auth_google_component__WEBPACK_IMPORTED_MODULE_0__.AuthGoogleComponent,
    },
];
class AuthGoogleRoutingModuleModule {
}
AuthGoogleRoutingModuleModule.ɵfac = function AuthGoogleRoutingModuleModule_Factory(t) { return new (t || AuthGoogleRoutingModuleModule)(); };
AuthGoogleRoutingModuleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthGoogleRoutingModuleModule });
AuthGoogleRoutingModuleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthGoogleRoutingModuleModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 66890:
/*!**************************************************************!*\
  !*** ./src/app/auth/pages/auth-google/auth-google.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGoogleModule": () => (/* binding */ AuthGoogleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-button */ 59026);
/* harmony import */ var _layout_auth_google_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/auth-google.component */ 64475);
/* harmony import */ var _auth_google_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-google-routing.module */ 13731);
/* harmony import */ var _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @b2b/ngx-image */ 87343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







class AuthGoogleModule {
}
AuthGoogleModule.ɵfac = function AuthGoogleModule_Factory(t) { return new (t || AuthGoogleModule)(); };
AuthGoogleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthGoogleModule });
AuthGoogleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _auth_google_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthGoogleRoutingModuleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__.B2bNgxButtonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_6__.B2bNgxImageModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthGoogleModule, { declarations: [_layout_auth_google_component__WEBPACK_IMPORTED_MODULE_0__.AuthGoogleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _auth_google_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthGoogleRoutingModuleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _b2b_ngx_button__WEBPACK_IMPORTED_MODULE_5__.B2bNgxButtonModule,
        _b2b_ngx_image__WEBPACK_IMPORTED_MODULE_6__.B2bNgxImageModule] }); })();


/***/ }),

/***/ 64475:
/*!************************************************************************!*\
  !*** ./src/app/auth/pages/auth-google/layout/auth-google.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGoogleComponent": () => (/* binding */ AuthGoogleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 61755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 24159);
/* harmony import */ var _b2b_ngx_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @b2b/ngx-link */ 23214);







let AuthGoogleComponent = class AuthGoogleComponent {
    constructor(_activatedRoute, _authService, _router, b2bNgxLinkService) {
        this._activatedRoute = _activatedRoute;
        this._authService = _authService;
        this._router = _router;
        this.b2bNgxLinkService = b2bNgxLinkService;
    }
    ngOnInit() {
        this._activatedRoute.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((paramMap) => paramMap.get("id")), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.untilDestroyed)(this))
            .subscribe((id) => {
            if (id)
                this._authService.updateToken(id);
            this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink("/"));
        });
    }
};
AuthGoogleComponent.ɵfac = function AuthGoogleComponent_Factory(t) { return new (t || AuthGoogleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_b2b_ngx_link__WEBPACK_IMPORTED_MODULE_5__.B2bNgxLinkService)); };
AuthGoogleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthGoogleComponent, selectors: [["b2b-auth-confirm-email"]], decls: 0, vars: 0, template: function AuthGoogleComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWdvb2dsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
AuthGoogleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.UntilDestroy)()
], AuthGoogleComponent);



/***/ })

};
;
//# sourceMappingURL=6890.js.map