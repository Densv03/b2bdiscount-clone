"use strict";exports.id=4081,exports.ids=[4081],exports.modules={54081:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthGoogleModule:()=>AuthGoogleModule});var common=__webpack_require__(99136),fesm2022_forms=__webpack_require__(84518),ngx_button_module=__webpack_require__(4410),router=__webpack_require__(52185),tslib_es6=__webpack_require__(99938),ngneat_until_destroy=__webpack_require__(37796),operators=__webpack_require__(29556),core=__webpack_require__(59198),auth_service=__webpack_require__(64273),ngx_link_service=__webpack_require__(71352);let AuthGoogleComponent=class AuthGoogleComponent2{constructor(_activatedRoute,_authService,_router,b2bNgxLinkService){this._activatedRoute=_activatedRoute,this._authService=_authService,this._router=_router,this.b2bNgxLinkService=b2bNgxLinkService}ngOnInit(){this._activatedRoute.paramMap.pipe((0,operators.UI)(paramMap=>paramMap.get("id")),(0,ngneat_until_destroy.t)(this)).subscribe(id=>{id&&this._authService.updateToken(id),this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink("/"))})}static#_=this.\u0275fac=function(t){return new(t||AuthGoogleComponent2)(core.Y36(router.gz),core.Y36(auth_service.e),core.Y36(router.F0),core.Y36(ngx_link_service.H))};static#_2=this.\u0275cmp=core.Xpm({type:AuthGoogleComponent2,selectors:[["b2b-auth-confirm-email"]],decls:0,vars:0,template:function(rf,ctx){}})};AuthGoogleComponent=(0,tslib_es6.gn)([(0,ngneat_until_destroy.c)()],AuthGoogleComponent);const routes=[{path:"",component:AuthGoogleComponent}];let AuthGoogleRoutingModuleModule=(()=>{class AuthGoogleRoutingModuleModule2{static#_=this.\u0275fac=function(t){return new(t||AuthGoogleRoutingModuleModule2)};static#_2=this.\u0275mod=core.oAB({type:AuthGoogleRoutingModuleModule2});static#_3=this.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]})}return AuthGoogleRoutingModuleModule2})();var ngx_image_module=__webpack_require__(61230);let AuthGoogleModule=(()=>{class AuthGoogleModule2{static#_=this.\u0275fac=function(t){return new(t||AuthGoogleModule2)};static#_2=this.\u0275mod=core.oAB({type:AuthGoogleModule2});static#_3=this.\u0275inj=core.cJS({imports:[common.ez,AuthGoogleRoutingModuleModule,fesm2022_forms.UX,ngx_button_module.l,ngx_image_module.A]})}return AuthGoogleModule2})()}};