"use strict";
(self["webpackChunkfe_b2b"] = self["webpackChunkfe_b2b"] || []).push([["src_app_auth_pages_auth-google-sign-in-success_auth-google-sign-in-success_module_ts"],{

/***/ 82160:
/*!******************************************************************************************************!*\
  !*** ./src/app/auth/pages/auth-google-sign-in-success/auth-google-sign-in-success-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGoogleSignInSuccessRoutingModule": () => (/* binding */ AuthGoogleSignInSuccessRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_auth_google_sign_in_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/auth-google-sign-in-success.component */ 5198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: "",
        component: _layout_auth_google_sign_in_success_component__WEBPACK_IMPORTED_MODULE_0__.AuthGoogleSignInSuccessComponent,
    },
];
class AuthGoogleSignInSuccessRoutingModule {
}
AuthGoogleSignInSuccessRoutingModule.ɵfac = function AuthGoogleSignInSuccessRoutingModule_Factory(t) { return new (t || AuthGoogleSignInSuccessRoutingModule)(); };
AuthGoogleSignInSuccessRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthGoogleSignInSuccessRoutingModule });
AuthGoogleSignInSuccessRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthGoogleSignInSuccessRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 74108:
/*!**********************************************************************************************!*\
  !*** ./src/app/auth/pages/auth-google-sign-in-success/auth-google-sign-in-success.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGoogleSignInSuccessModule": () => (/* binding */ AuthGoogleSignInSuccessModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _auth_recover_account_auth_recover_account_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-recover-account/auth-recover-account.module */ 45250);
/* harmony import */ var _auth_google_sign_in_success_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-google-sign-in-success-routing.module */ 82160);
/* harmony import */ var _layout_auth_google_sign_in_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/auth-google-sign-in-success.component */ 5198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class AuthGoogleSignInSuccessModule {
}
AuthGoogleSignInSuccessModule.ɵfac = function AuthGoogleSignInSuccessModule_Factory(t) { return new (t || AuthGoogleSignInSuccessModule)(); };
AuthGoogleSignInSuccessModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthGoogleSignInSuccessModule });
AuthGoogleSignInSuccessModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _auth_google_sign_in_success_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthGoogleSignInSuccessRoutingModule, _auth_recover_account_auth_recover_account_module__WEBPACK_IMPORTED_MODULE_0__.AuthRecoverAccountModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthGoogleSignInSuccessModule, { declarations: [_layout_auth_google_sign_in_success_component__WEBPACK_IMPORTED_MODULE_2__.AuthGoogleSignInSuccessComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _auth_google_sign_in_success_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthGoogleSignInSuccessRoutingModule, _auth_recover_account_auth_recover_account_module__WEBPACK_IMPORTED_MODULE_0__.AuthRecoverAccountModule] }); })();


/***/ }),

/***/ 5198:
/*!********************************************************************************************************!*\
  !*** ./src/app/auth/pages/auth-google-sign-in-success/layout/auth-google-sign-in-success.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGoogleSignInSuccessComponent": () => (/* binding */ AuthGoogleSignInSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ 1082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 24159);
/* harmony import */ var _core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/mixpanel/mixpanel.service */ 56838);







let AuthGoogleSignInSuccessComponent = class AuthGoogleSignInSuccessComponent {
    constructor(_activatedRoute, _authService, _router, mixpanelService
    // private readonly _dialogService: DialogService
    ) {
        this._activatedRoute = _activatedRoute;
        this._authService = _authService;
        this._router = _router;
        this.mixpanelService = mixpanelService;
        // this._activatedRoute.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
        // 	const { token, recovered } = params;
        // 	const updatedToken = token.endsWith('/') ? token.slice(0, -1) : token;
        // 	this._authService.updateToken(updatedToken);
        // 	this._authService.initUser();
        // 	this._authService
        // 		.getUser()
        // 		.pipe(untilDestroyed(this))
        // 		.subscribe((user) => {
        // 			if (recovered) {
        // 				// this._dialogService
        // 				// 	.open(AuthRecoverAccountComponent, {
        // 				// 		width: "40vw",
        // 				// 		height: "auto",
        // 				// 		minHeight: "0",
        // 				// 		windowClass: "report-dialog",
        // 				// 	})
        // 				// 	.afterClosed$.pipe(untilDestroyed(this))
        // 				// 	.subscribe();
        // 			}
        //
        // 			const mixpanel = {
        // 				'User_id': user?._id,
        // 				'Account type': user?.rootRole?.displayName,
        // 				'Company Name': user?.company,
        // 				'Login Method': user?.socialAuthType
        // 			};
        //       this.mixpanelService.logIn(mixpanel);
        // 			this.mixpanelService.track('Login completed', {'Login Method': 'Email'})
        // 			this._authService.updateToken(updatedToken);
        // 			this._authService.updateRole(user?.role);
        // 			this._router.navigateByUrl("/");
        // 		});
        // });
    }
    ngOnInit() {
        this._activatedRoute.queryParams.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.untilDestroyed)(this)).subscribe((params) => {
            const { token, recovered } = params;
            console.log('TOKEN: ', token);
            const updatedToken = token.endsWith('/') ? token.slice(0, -1) : token;
            this._authService.updateToken(updatedToken);
            this._authService.initUser();
            this._authService
                .getUser()
                .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.untilDestroyed)(this))
                .subscribe((user) => {
                var _a;
                if (recovered) {
                    // this._dialogService
                    // 	.open(AuthRecoverAccountComponent, {
                    // 		width: "40vw",
                    // 		height: "auto",
                    // 		minHeight: "0",
                    // 		windowClass: "report-dialog",
                    // 	})
                    // 	.afterClosed$.pipe(untilDestroyed(this))
                    // 	.subscribe();
                }
                console.log('AUTH SERVICE GOOGLE SIGN IN');
                const mixpanel = {
                    'User_id': user === null || user === void 0 ? void 0 : user._id,
                    'Account type': (_a = user === null || user === void 0 ? void 0 : user.rootRole) === null || _a === void 0 ? void 0 : _a.displayName,
                    'Company Name': user === null || user === void 0 ? void 0 : user.company,
                    'Login Method': user === null || user === void 0 ? void 0 : user.socialAuthType
                };
                this.mixpanelService.logIn(mixpanel);
                this.mixpanelService.track('Login completed', { 'Login Method': 'Email' });
                this._authService.updateToken(updatedToken);
                this._authService.updateRole(user === null || user === void 0 ? void 0 : user.role);
                this._router.navigateByUrl("/");
            });
        });
    }
};
AuthGoogleSignInSuccessComponent.ɵfac = function AuthGoogleSignInSuccessComponent_Factory(t) { return new (t || AuthGoogleSignInSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_mixpanel_mixpanel_service__WEBPACK_IMPORTED_MODULE_1__.MixpanelService)); };
AuthGoogleSignInSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthGoogleSignInSuccessComponent, selectors: [["b2b-auth-google-sign-in-success"]], decls: 0, vars: 0, template: function AuthGoogleSignInSuccessComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWdvb2dsZS1zaWduLWluLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)("fadeInOut", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 1 }))]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(":leave", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)(500, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ opacity: 0 }))]),
            ]),
        ] } });
AuthGoogleSignInSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.UntilDestroy)()
], AuthGoogleSignInSuccessComponent);



/***/ })

}]);
//# sourceMappingURL=src_app_auth_pages_auth-google-sign-in-success_auth-google-sign-in-success_module_ts.js.map