"use strict";exports.id=2617,exports.ids=[2617],exports.modules={2617:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthGoogleSignInSuccessModule:()=>AuthGoogleSignInSuccessModule});var common=__webpack_require__(14565),auth_recover_account_module=__webpack_require__(90364),router=__webpack_require__(16055),asyncToGenerator=__webpack_require__(49671),tslib_es6=__webpack_require__(97582),animations=__webpack_require__(21796),ngneat_until_destroy=__webpack_require__(80458),core=__webpack_require__(77533),auth_service=__webpack_require__(79201),mixpanel_service=__webpack_require__(46703);let AuthGoogleSignInSuccessComponent=class AuthGoogleSignInSuccessComponent2{constructor(_activatedRoute,_authService,_router,mixpanelService){this._activatedRoute=_activatedRoute,this._authService=_authService,this._router=_router,this.mixpanelService=mixpanelService}ngOnInit(){this._activatedRoute.queryParams.pipe((0,ngneat_until_destroy.t)(this)).subscribe(params=>{const{token}=params,updatedToken=token.endsWith("/")?token.slice(0,-1):token;this._authService.updateToken(updatedToken),this._authService.initUser(),this._authService.getUser().pipe((0,ngneat_until_destroy.t)(this)).subscribe(user=>{console.log("AUTH SERVICE GOOGLE SIGN IN"),this.trackLogin(user),this._authService.updateToken(updatedToken),this._authService.updateRole(user?.role),this._router.navigateByUrl("/")})})}trackLogin(user){var _this=this;return(0,asyncToGenerator.Z)(function*(){user&&_this.mixpanelService.logIn({User_id:user?._id,"Account Type":user?.rootRole?.displayName,"Company Name":user?.company,"Auth Method":user?.socialAuthType})})()}static#_=this.\u0275fac=function(t){return new(t||AuthGoogleSignInSuccessComponent2)(core.Y36(router.gz),core.Y36(auth_service.e),core.Y36(router.F0),core.Y36(mixpanel_service.h))};static#_2=this.\u0275cmp=core.Xpm({type:AuthGoogleSignInSuccessComponent2,selectors:[["b2b-auth-google-sign-in-success"]],decls:0,vars:0,template:function(rf,ctx){},data:{animation:[(0,animations.X$)("fadeInOut",[(0,animations.eR)(":enter",[(0,animations.oB)({opacity:0}),(0,animations.jt)(500,(0,animations.oB)({opacity:1}))]),(0,animations.eR)(":leave",[(0,animations.jt)(500,(0,animations.oB)({opacity:0}))])])]}})};AuthGoogleSignInSuccessComponent=(0,tslib_es6.gn)([(0,ngneat_until_destroy.c)()],AuthGoogleSignInSuccessComponent);const routes=[{path:"",component:AuthGoogleSignInSuccessComponent}];let AuthGoogleSignInSuccessRoutingModule=(()=>{class AuthGoogleSignInSuccessRoutingModule2{static#_=this.\u0275fac=function(t){return new(t||AuthGoogleSignInSuccessRoutingModule2)};static#_2=this.\u0275mod=core.oAB({type:AuthGoogleSignInSuccessRoutingModule2});static#_3=this.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]})}return AuthGoogleSignInSuccessRoutingModule2})(),AuthGoogleSignInSuccessModule=(()=>{class AuthGoogleSignInSuccessModule2{static#_=this.\u0275fac=function(t){return new(t||AuthGoogleSignInSuccessModule2)};static#_2=this.\u0275mod=core.oAB({type:AuthGoogleSignInSuccessModule2});static#_3=this.\u0275inj=core.cJS({imports:[common.ez,AuthGoogleSignInSuccessRoutingModule,auth_recover_account_module._]})}return AuthGoogleSignInSuccessModule2})()},90364:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>AuthRecoverAccountModule});var _angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14565),_b2b_ngx_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10044),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(77533);let AuthRecoverAccountModule=(()=>{class AuthRecoverAccountModule2{static#_=this.\u0275fac=function(t){return new(t||AuthRecoverAccountModule2)};static#_2=this.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:AuthRecoverAccountModule2});static#_3=this.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.ez,_b2b_ngx_image__WEBPACK_IMPORTED_MODULE_2__.A]})}return AuthRecoverAccountModule2})()}};