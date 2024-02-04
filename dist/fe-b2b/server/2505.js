"use strict";exports.id=2505,exports.ids=[2505],exports.modules={90760:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>B2bNgxSkeletonModule});var _angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(99136),ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19074),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59198);let B2bNgxSkeletonModule=(()=>{class B2bNgxSkeletonModule2{static#_=this.\u0275fac=function(t){return new(t||B2bNgxSkeletonModule2)};static#_2=this.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:B2bNgxSkeletonModule2});static#_3=this.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.ez,ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__.hx]})}return B2bNgxSkeletonModule2})()},92505:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClientContactUsModule:()=>ClientContactUsModule});var common=__webpack_require__(99136),ngx_skeleton_module=__webpack_require__(90760),ngx_image_module=__webpack_require__(61230),ngx_button_module=__webpack_require__(4410),ngx_icon_module=__webpack_require__(40724),ngx_select_module=__webpack_require__(21622),ngx_input_module=__webpack_require__(44247),fesm2022_forms=__webpack_require__(84518),ngx_tel_module=__webpack_require__(79278),ngx_textarea_module=__webpack_require__(66499),router=__webpack_require__(52185),tslib_es6=__webpack_require__(99938),ngx_input_theme_enum=__webpack_require__(31768),ngx_select_theme_enum=__webpack_require__(82021),ngx_button_theme_enum=__webpack_require__(95761),ngneat_until_destroy=__webpack_require__(37796),core=__webpack_require__(59198),api_service=__webpack_require__(88801),ngneat_hot_toast=__webpack_require__(40165),ngx_translate_core=__webpack_require__(72863),seo_service=__webpack_require__(40532),ngx_button_directive=__webpack_require__(24149),ngx_icon_directive=__webpack_require__(40646),ngx_select_component=__webpack_require__(80054),ngx_input_directive=__webpack_require__(39931),ngx_tel_component=__webpack_require__(66672),ngx_textarea_directive=__webpack_require__(83517);function ClientContactUsComponent_li_29_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"li",16)(1,"a",17),core._UZ(2,"img",18),core.qZA()()),2&rf){const socialMedia_r1=ctx.$implicit;core.xp6(),core.Q6J("href",socialMedia_r1.href,core.LSH),core.xp6(),core.Q6J("name",socialMedia_r1.icon)}}let ClientContactUsComponent=class ClientContactUsComponent2{constructor(_formBuilder,_apiService,_hotToastrService,translateService,seoService){this._formBuilder=_formBuilder,this._apiService=_apiService,this._hotToastrService=_hotToastrService,this.translateService=translateService,this.seoService=seoService,this.subjectOptions=[{label:this.translateService.instant("CONTACT_US.SUPPORT"),value:"support"},{label:this.translateService.instant("CONTACT_US.LEGAL_HELP"),value:"legal-help"}],this.socialMedias=this.getSocialMedias(),this.formGroup=this.getFormGroup(),this.b2bNgxInputThemeEnum=ngx_input_theme_enum.T,this.b2bNgxButtonThemeEnum=ngx_button_theme_enum.n,this.b2bNgxSelectThemeEnum=ngx_select_theme_enum.B}ngOnInit(){this.addSeoTags()}getFormGroup(){return this._formBuilder.group({type:[null,fesm2022_forms.kI.required],name:[null,fesm2022_forms.kI.required],email:["",[fesm2022_forms.kI.required,fesm2022_forms.kI.email]],phone:["",[fesm2022_forms.kI.required]],text:[null,fesm2022_forms.kI.required]})}sendMessage(formGroup){if(formGroup.invalid)return;const data={...formGroup.value,phone:formGroup.value.phone.e164Number};this._apiService.post("mail/contactUs",data).pipe((0,ngneat_until_destroy.t)(this),this._hotToastrService.observe({loading:this.translateService.instant("TOASTR.LOADING"),success:this.translateService.instant("TOASTR.SUCCESS"),error:this.translateService.instant("TOASTR.ERROR")})).subscribe(()=>{this.closeModal()})}getSocialMedias(){return[{icon:"facebook",href:"https://www.facebook.com/b2b.discount"},{icon:"twitter",href:"https://twitter.com/DiscountB2b"},{icon:"linkedin",href:"https://www.linkedin.com/company/b2b-discount"},{icon:"youtube",href:"https://www.youtube.com/channel/UCW8RdiD7Fql5RelC37WkjjA"}]}closeModal(){}addSeoTags(){this.seoService.setTitle("Contact Globy B2B Marketplace Customer Service"),this.seoService.setDescription("Leave us your email address and a contact number, and we will reach out to you shortly")}static#_=this.\u0275fac=function(t){return new(t||ClientContactUsComponent2)(core.Y36(fesm2022_forms.qu),core.Y36(api_service.s),core.Y36(ngneat_hot_toast.jE),core.Y36(ngx_translate_core.sK),core.Y36(seo_service.v))};static#_2=this.\u0275cmp=core.Xpm({type:ClientContactUsComponent2,selectors:[["b2b-client-contact-us"]],decls:36,vars:48,consts:[[1,"client-contact-us"],[1,"client-contact-us-header"],[1,"client-contact-us-header-title"],[1,"client-contact-us-header-description"],["errorTailor","",1,"client-contact-us-form",3,"formGroup","ngSubmit"],["formControlName","type",1,"client-contact-us-form-select",3,"theme","options","placeholder"],["b2bNgxInput","","formControlName","name","labelClass","client-contact-us-form-input",3,"theme","placeholder","label"],["b2bNgxInput","","type","email","labelClass","client-contact-us-form-input","formControlName","email",3,"theme","label","placeholder"],["formControlName","phone",1,"client-contact-us-form-input",3,"theme","placeholder"],["b2bNgxTextarea","","formControlName","text","labelClass","client-contact-us-form-textarea",3,"theme","placeholder","label"],["b2bNgxButton","","type","submit",1,"client-contact-us-form-button",3,"theme"],[1,"client-contact-us-footer"],[1,"client-contact-us-footer-icons-list"],["class","client-contact-us-footer-icons-list-item",4,"ngFor","ngForOf"],[1,"client-contact-us-footer-description"],["href",""],[1,"client-contact-us-footer-icons-list-item"],["b2bNgxLink","",1,"client-contact-us-footer-icons-list-item-href",3,"href"],["b2bNgxIcon","",1,"client-contact-us-footer-icons-list-item-icon",3,"name"]],template:function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),core._uU(3),core.ALo(4,"translate"),core.qZA(),core.TgZ(5,"p",3),core._uU(6),core.ALo(7,"translate"),core.qZA()(),core.TgZ(8,"form",4),core.NdJ("ngSubmit",function(){return ctx.sendMessage(ctx.formGroup)}),core._UZ(9,"b2b-ngx-select",5),core.ALo(10,"translate"),core._UZ(11,"input",6),core.ALo(12,"translate"),core.ALo(13,"translate"),core._UZ(14,"input",7),core.ALo(15,"translate"),core.ALo(16,"translate"),core.TgZ(17,"b2b-ngx-tel",8),core.ALo(18,"translate"),core._uU(19),core.ALo(20,"translate"),core.qZA(),core._UZ(21,"textarea",9),core.ALo(22,"translate"),core.ALo(23,"translate"),core.TgZ(24,"button",10),core._uU(25),core.ALo(26,"translate"),core.qZA()(),core.TgZ(27,"div",11)(28,"ul",12),core.YNc(29,ClientContactUsComponent_li_29_Template,3,2,"li",13),core.qZA(),core.TgZ(30,"p",14),core._uU(31),core.ALo(32,"translate"),core.TgZ(33,"a",15),core._uU(34,"support@b2b.discount"),core.qZA(),core._uU(35,". "),core.qZA()()()),2&rf&&(core.xp6(3),core.hij(" ",core.lcZ(4,22,"CONTACT_US.TITLE")," "),core.xp6(3),core.hij(" ",core.lcZ(7,24,"CONTACT_US.DESCRIPTION")," "),core.xp6(2),core.Q6J("formGroup",ctx.formGroup),core.xp6(),core.Q6J("theme",ctx.b2bNgxSelectThemeEnum.BACKGROUND_GRAY)("options",ctx.subjectOptions)("placeholder",core.lcZ(10,26,"PLACEHOLDERS.SUBJECT")),core.xp6(2),core.Q6J("theme",ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("placeholder",core.lcZ(12,28,"PLACEHOLDERS.ENTER_NAME"))("label",core.lcZ(13,30,"LABELS.NAME")),core.xp6(3),core.Q6J("theme",ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("label",core.lcZ(15,32,"LABELS.EMAIL"))("placeholder",core.lcZ(16,34,"PLACEHOLDERS.YOUR_EMAIL")),core.xp6(3),core.Q6J("theme",ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("placeholder",core.lcZ(18,36,"PLACEHOLDERS.YOUR_PHONE_NUMBER")),core.xp6(2),core.Oqu(core.lcZ(20,38,"INPUTS.PHONE")),core.xp6(2),core.Q6J("theme",ctx.b2bNgxInputThemeEnum.BACKGROUND_GRAY)("placeholder",core.lcZ(22,40,"PLACEHOLDERS.ENTER_MESSAGE"))("label",core.lcZ(23,42,"LABELS.MESSAGE")),core.xp6(3),core.Q6J("theme",ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLACK),core.xp6(),core.hij(" ",core.lcZ(26,44,"BUTTONS.SEND")," "),core.xp6(4),core.Q6J("ngForOf",ctx.socialMedias),core.xp6(2),core.hij(" ",core.lcZ(32,46,"CONTACT_US.FEEDBACK")," "))},dependencies:[common.sg,ngx_button_directive.f,ngx_icon_directive.p,ngx_select_component.B,ngx_input_directive.k,fesm2022_forms._Y,fesm2022_forms.Fj,fesm2022_forms.JJ,fesm2022_forms.JL,fesm2022_forms.sg,fesm2022_forms.u,ngx_tel_component.Z,ngx_textarea_directive.P,ngx_translate_core.X$],styles:["[_nghost-%COMP%]     .nsm-dialog{max-width:none!important}[_nghost-%COMP%]     .nsm-dialog .nsm-content{padding:0!important}.client-contact-us[_ngcontent-%COMP%]{padding-top:10px;background-color:#fff}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-header[_ngcontent-%COMP%]{width:80%;margin:60px auto 0}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-header[_ngcontent-%COMP%]   .client-contact-us-header-title[_ngcontent-%COMP%]{font-weight:700;font-size:32px;color:#0f0f11;text-align:center}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-header[_ngcontent-%COMP%]   .client-contact-us-header-description[_ngcontent-%COMP%]{font-weight:400;color:#556274;text-align:center;margin-top:10px}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]{width:80%;margin:32px auto}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]   .client-contact-us-form-select[_ngcontent-%COMP%]{display:block}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]   .client-contact-us-form-input[_ngcontent-%COMP%], .client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]   .client-contact-us-form-textarea[_ngcontent-%COMP%]{display:block;margin-top:16px}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-form[_ngcontent-%COMP%]   .client-contact-us-form-button[_ngcontent-%COMP%]{margin-top:16px;padding:15px;width:100%}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]{margin-top:24px;padding:23px 0;background:#f3f6f8;border-radius:0 0 4px 4px}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]{display:flex;justify-content:center}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item[_ngcontent-%COMP%]{margin:0 5px}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item[_ngcontent-%COMP%]:first-child{margin-left:0}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item[_ngcontent-%COMP%]:last-child{margin-right:0}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item[_ngcontent-%COMP%]   .client-contact-us-footer-icons-list-item-href[_ngcontent-%COMP%]{width:45px;height:45px;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:#fff}.client-contact-us[_ngcontent-%COMP%]   .client-contact-us-footer[_ngcontent-%COMP%]   .client-contact-us-footer-description[_ngcontent-%COMP%]{width:80%;margin:16px auto;text-align:center;font-size:14px;color:#556274}"],changeDetection:0})};ClientContactUsComponent=(0,tslib_es6.gn)([(0,ngneat_until_destroy.c)()],ClientContactUsComponent);const routes=[{path:"",component:ClientContactUsComponent}];let ClientContactUsRoutingModule=(()=>{class ClientContactUsRoutingModule2{static#_=this.\u0275fac=function(t){return new(t||ClientContactUsRoutingModule2)};static#_2=this.\u0275mod=core.oAB({type:ClientContactUsRoutingModule2});static#_3=this.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]})}return ClientContactUsRoutingModule2})(),ClientContactUsModule=(()=>{class ClientContactUsModule2{static#_=this.\u0275fac=function(t){return new(t||ClientContactUsModule2)};static#_2=this.\u0275mod=core.oAB({type:ClientContactUsModule2});static#_3=this.\u0275inj=core.cJS({imports:[common.ez,ClientContactUsRoutingModule,ngx_skeleton_module.O,ngx_image_module.A,ngx_button_module.l,ngx_icon_module.w,ngx_select_module.F,ngx_input_module.r,fesm2022_forms.UX,ngx_tel_module.c,ngx_textarea_module.Z,ngx_translate_core.aw]})}return ClientContactUsModule2})()},19074:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hx:()=>NgxSkeletonLoaderModule,xr:()=>NgxSkeletonLoaderComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59198),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(99136);function NgxSkeletonLoaderComponent_For_1_Conditional_1_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hsn(0)}const _c0=(a0,a1,a2,a3,a4)=>({"custom-content":a0,circle:a1,progress:a2,"progress-dark":a3,pulse:a4});function NgxSkeletonLoaderComponent_For_1_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(1,NgxSkeletonLoaderComponent_For_1_Conditional_1_Template,1,0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()),2&rf){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_0__.qbA(5,_c0,"custom-content"===ctx_r0.appearance,"circle"===ctx_r0.appearance,"progress"===ctx_r0.animation,"progress-dark"===ctx_r0.animation,"pulse"===ctx_r0.animation))("ngStyle",ctx_r0.theme),_angular_core__WEBPACK_IMPORTED_MODULE_0__.uIk("aria-label",ctx_r0.ariaLabel)("aria-valuetext",ctx_r0.loadingText),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.um2(1,"custom-content"===ctx_r0.appearance?1:-1)}}const _c1=["*"],NGX_SKELETON_LOADER_CONFIG=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("ngx-skeleton-loader.config");let NgxSkeletonLoaderComponent=(()=>{class NgxSkeletonLoaderComponent2{constructor(config){this.config=config;const{appearance="line",animation="progress",theme=null,loadingText="Loading...",count=1,ariaLabel="loading"}=config||{};this.appearance=appearance,this.animation=animation,this.theme=theme,this.loadingText=loadingText,this.count=count,this.items=[],this.ariaLabel=ariaLabel}ngOnInit(){this.validateInputValues()}validateInputValues(){/^\d+$/.test(`${this.count}`)||((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.X6Q)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'count' a numeric value. Forcing default to \"1\"."),this.count=1),"custom-content"===this.appearance&&(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.X6Q)()&&1!==this.count&&(console.error('`NgxSkeletonLoaderComponent` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".'),this.count=1),this.items.length=this.count;const allowedAnimations=["progress","progress-dark","pulse","false"];-1===allowedAnimations.indexOf(String(this.animation))&&((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.X6Q)()&&console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${allowedAnimations.join(", ")}. Forcing default to "progress".`),this.animation="progress"),-1===["circle","line","custom-content",""].indexOf(String(this.appearance))&&((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.X6Q)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'appearance' as: circle or line or custom-content or empty string. Forcing default to \"''\"."),this.appearance="");const{theme}=this.config||{};theme&&theme.extendsFromRoot&&null!==this.theme&&(this.theme={...this.config.theme,...this.theme})}ngOnChanges(changes){["count","animation","appearance"].find(key=>changes[key]&&(changes[key].isFirstChange()||changes[key].previousValue===changes[key].currentValue))||this.validateInputValues()}static#_=this.\u0275fac=function(t){return new(t||NgxSkeletonLoaderComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(NGX_SKELETON_LOADER_CONFIG,8))};static#_2=this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({type:NgxSkeletonLoaderComponent2,selectors:[["ngx-skeleton-loader"]],inputs:{count:"count",loadingText:"loadingText",appearance:"appearance",animation:"animation",ariaLabel:"ariaLabel",theme:"theme"},features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__.TTD],ngContentSelectors:_c1,decls:2,vars:0,consts:[["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader",3,"ngClass","ngStyle"],["class","skeleton-loader","aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",3,"ngClass","ngStyle"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.F$t(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.SjG(0,NgxSkeletonLoaderComponent_For_1_Template,2,11,"div",1,_angular_core__WEBPACK_IMPORTED_MODULE_0__.x6l)),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.wJu(ctx.items)},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.mk,_angular_common__WEBPACK_IMPORTED_MODULE_1__.PC],styles:['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:#eff1f6 no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,#fff0,#fff9,#fff0)}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]:before{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0})}return NgxSkeletonLoaderComponent2})(),NgxSkeletonLoaderModule=(()=>{class NgxSkeletonLoaderModule2{static forRoot(config){return{ngModule:NgxSkeletonLoaderModule2,providers:[{provide:NGX_SKELETON_LOADER_CONFIG,useValue:config}]}}static#_=this.\u0275fac=function(t){return new(t||NgxSkeletonLoaderModule2)};static#_2=this.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:NgxSkeletonLoaderModule2});static#_3=this.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.ez]})}return NgxSkeletonLoaderModule2})()}};