"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=5331,exports.ids=[5331],exports.modules={75331:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthGoogleModule:()=>AuthGoogleModule});var common=__webpack_require__(69808),fesm2015_forms=__webpack_require__(93075),ngx_button_module=__webpack_require__(59026),router=__webpack_require__(74202),tslib_es6=__webpack_require__(97582),ngneat_until_destroy=__webpack_require__(44987),operators=__webpack_require__(83292),core=__webpack_require__(5e3),auth_service=__webpack_require__(24159),ngx_link_service=__webpack_require__(23214);let AuthGoogleComponent=__name(class{constructor(_activatedRoute,_authService,_router,b2bNgxLinkService){this._activatedRoute=_activatedRoute,this._authService=_authService,this._router=_router,this.b2bNgxLinkService=b2bNgxLinkService}ngOnInit(){this._activatedRoute.paramMap.pipe((0,operators.UI)(paramMap=>paramMap.get("id")),(0,ngneat_until_destroy.t)(this)).subscribe(id=>{id&&this._authService.updateToken(id),this._router.navigateByUrl(this.b2bNgxLinkService.getStaticLink("/"))})}},"AuthGoogleComponent");AuthGoogleComponent.\u0275fac=__name(function(t){return new(t||AuthGoogleComponent)(core.Y36(router.gz),core.Y36(auth_service.e),core.Y36(router.F0),core.Y36(ngx_link_service.H))},"AuthGoogleComponent_Factory"),AuthGoogleComponent.\u0275cmp=core.Xpm({type:AuthGoogleComponent,selectors:[["b2b-auth-confirm-email"]],decls:0,vars:0,template:__name(function(rf,ctx){},"AuthGoogleComponent_Template")}),AuthGoogleComponent=(0,tslib_es6.gn)([(0,ngneat_until_destroy.c)()],AuthGoogleComponent);const routes=[{path:"",component:AuthGoogleComponent}];class AuthGoogleRoutingModuleModule{}__name(AuthGoogleRoutingModuleModule,"AuthGoogleRoutingModuleModule"),AuthGoogleRoutingModuleModule.\u0275fac=__name(function(t){return new(t||AuthGoogleRoutingModuleModule)},"AuthGoogleRoutingModuleModule_Factory"),AuthGoogleRoutingModuleModule.\u0275mod=core.oAB({type:AuthGoogleRoutingModuleModule}),AuthGoogleRoutingModuleModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]});var ngx_image_module=__webpack_require__(87343);class AuthGoogleModule{}__name(AuthGoogleModule,"AuthGoogleModule"),AuthGoogleModule.\u0275fac=__name(function(t){return new(t||AuthGoogleModule)},"AuthGoogleModule_Factory"),AuthGoogleModule.\u0275mod=core.oAB({type:AuthGoogleModule}),AuthGoogleModule.\u0275inj=core.cJS({imports:[common.ez,AuthGoogleRoutingModuleModule,fesm2015_forms.UX,ngx_button_module.l,ngx_image_module.A]})}};