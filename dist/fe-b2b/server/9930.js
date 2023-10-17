"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=9930,exports.ids=[9930],exports.modules={99930:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdminHomepageModule:()=>AdminHomepageModule});var common=__webpack_require__(69808),router=__webpack_require__(74202),tslib_es6=__webpack_require__(97582),ngx_button_theme_enum=__webpack_require__(14739),ngx_input_theme_enum=__webpack_require__(70771),cjs=__webpack_require__(76477),ngneat_until_destroy=__webpack_require__(44987),environment=__webpack_require__(92340),core=__webpack_require__(5e3),fesm2015_forms=__webpack_require__(93075),categories_service=__webpack_require__(26402),ngneat_hot_toast=__webpack_require__(58433),homepage_service=__webpack_require__(44876),ngx_button_directive=__webpack_require__(5214),ngx_input_directive=__webpack_require__(70159),ngx_select_component=__webpack_require__(13114);function AdminHomepageComponent_div_1_div_1_p_8_Template(rf,ctx){if(1&rf){const _r10=core.EpF();core.TgZ(0,"p")(1,"input",11),core.NdJ("click",__name(function(){const childIndex_r7=core.CHM(_r10).index,parentIndex_r4=core.oxw().index,ctx_r8=core.oxw(2);return core.KtG(ctx_r8.onInputClick(parentIndex_r4,childIndex_r7))},"AdminHomepageComponent_div_1_div_1_p_8_Template_input_click_1_listener")),core.qZA()()}if(2&rf){const childIndex_r7=ctx.index,parentIndex_r4=core.oxw().index,ctx_r5=core.oxw(2);core.xp6(1),core.Tol("url-input-"+parentIndex_r4),core.Q6J("theme",ctx_r5.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("label","Enter url "+ctx_r5.getLabel(childIndex_r7))}}function AdminHomepageComponent_div_1_div_1_Template(rf,ctx){if(1&rf){const _r13=core.EpF();core.TgZ(0,"div")(1,"div",7),core._UZ(2,"b2b-ngx-select",8),core.TgZ(3,"button",9),core.NdJ("click",__name(function(){const parentIndex_r4=core.CHM(_r13).index,ctx_r12=core.oxw(2);return core.KtG(ctx_r12.toggleCollapse(parentIndex_r4))},"AdminHomepageComponent_div_1_div_1_Template_button_click_3_listener")),core._uU(4),core.qZA(),core.TgZ(5,"button",9),core.NdJ("click",__name(function(){const parentIndex_r4=core.CHM(_r13).index,ctx_r14=core.oxw(2);return core.KtG(ctx_r14.removeCategory(parentIndex_r4))},"AdminHomepageComponent_div_1_div_1_Template_button_click_5_listener")),core._uU(6," Remove category "),core.qZA(),core.TgZ(7,"div",10),core.YNc(8,AdminHomepageComponent_div_1_div_1_p_8_Template,2,4,"p",6),core.qZA()()()}if(2&rf){const parentCategoryControl_r3=ctx.$implicit,parentIndex_r4=ctx.index,categories_r1=core.oxw().ngIf,ctx_r2=core.oxw();core.xp6(1),core.Q6J("formGroupName",parentIndex_r4),core.xp6(1),core.Q6J("options",categories_r1),core.xp6(1),core.Q6J("theme",ctx_r2.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),core.xp6(1),core.hij(" ",parentCategoryControl_r3.value.collapsed?"Expand":"Collapse"," "),core.xp6(1),core.Q6J("theme",ctx_r2.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),core.xp6(2),core.ekj("d-none",!parentCategoryControl_r3.value.parentCategory||parentCategoryControl_r3.value.collapsed),core.xp6(1),core.Q6J("ngForOf",parentCategoryControl_r3.value.productIds)}}function AdminHomepageComponent_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",5),core.YNc(1,AdminHomepageComponent_div_1_div_1_Template,9,8,"div",6),core.qZA()),2&rf){const ctx_r0=core.oxw();core.xp6(1),core.Q6J("ngForOf",ctx_r0.categoriesFormArray.controls)}}__name(AdminHomepageComponent_div_1_div_1_p_8_Template,"AdminHomepageComponent_div_1_div_1_p_8_Template"),__name(AdminHomepageComponent_div_1_div_1_Template,"AdminHomepageComponent_div_1_div_1_Template"),__name(AdminHomepageComponent_div_1_Template,"AdminHomepageComponent_div_1_Template");let AdminHomepageComponent=__name(class{constructor(fb,categoriesService,hotToastService,elementRef,homepageService){this.fb=fb,this.categoriesService=categoriesService,this.hotToastService=hotToastService,this.elementRef=elementRef,this.homepageService=homepageService,this.b2bNgxButtonThemeEnum=ngx_button_theme_enum.n,this.b2bNgxInputThemeEnum=ngx_input_theme_enum.T,this.categories$=this.getCategories$(),this.form=this.fb.group({categories:this.fb.array([this.createNewCategory()])})}get categoriesFormArray(){return this.form.get("categories")}ngOnInit(){this.initCarouselCategories()}removeCategory(index){1!==this.categoriesFormArray.length?this.categoriesFormArray.removeAt(index):this.hotToastService.info("You have zero selected categories")}onSave(){var _a;const result=[];for(let i=0;i<=6;i++){const elements=this.elementRef.nativeElement.querySelectorAll(`.url-input-${i}`),categoryValue=null===(_a=this.categoriesFormArray.value[i])||void 0===_a?void 0:_a.parentCategory;if(!categoryValue)continue;const products=Array.from(elements).filter(item=>item.value&&item.value.includes("b2b.discount")).map(item=>item.value.split("/").pop());products.length>0&&result.push({id:categoryValue,products})}this.homepageService.updateCarouselItems(result).pipe((0,ngneat_until_destroy.t)(this),this.hotToastService.observe({loading:"Carousel updating...",success:"Carousel updated successfully",error:"Error while updating carousel"})).subscribe()}addCategory(){this.categoriesFormArray.length>=6?this.hotToastService.info("You can't add more then 6 categories"):this.categoriesFormArray.push(this.createNewCategory())}getLabel(index){if(isNaN(+index))throw"Invalid index";return"string"==typeof index?(parseInt(index)+1).toString():(index+1).toString()}toggleCollapse(index){const newValue=this.categoriesFormArray.value.map((controlValue,i)=>index===i?{...controlValue,collapsed:!controlValue.collapsed}:controlValue);this.categoriesFormArray.setValue(newValue)}onInputClick(parentIndex,childIndex){if(isNaN(+parentIndex)||isNaN(+childIndex))throw new Error("Invalid index");let input;input=document.querySelectorAll(`.url-input-${parentIndex}`)[childIndex],input.focus(),input.select()}createNewCategory(){return this.fb.group({parentCategory:[],productIds:[Array(12)],collapsed:!0})}getCategories$(){return this.categoriesService.getCategories$().pipe((0,cjs.map)(categories=>categories.categories),(0,cjs.map)(categories=>categories.map(({name,_id})=>({name,_id}))))}initCarouselCategories(){this.homepageService.getCarouselItems().subscribe(data=>{for(let i=0;i<data.length-1;++i)this.addCategory();this.categoriesFormArray.setValue(data.map(item=>({parentCategory:item._id,productIds:Array(12),collapsed:!0}))),setTimeout(()=>{data.forEach((item,parentIndex)=>{document.querySelectorAll(`.url-input-${parentIndex}`).forEach((item2,childIndex)=>{var _a,_b;const value=(null===(_a=data[parentIndex].products[childIndex])||void 0===_a?void 0:_a.path)||(null===(_b=data[parentIndex].products[childIndex])||void 0===_b?void 0:_b._id);value&&(item2.value=environment.N.apiUrl.includes("api-dev")?"dev.b2b.discount/b2bmarket/products/"+value:"b2b.discount/b2bmarket/products/"+value)})})})})}},"AdminHomepageComponent");AdminHomepageComponent.\u0275fac=__name(function(t){return new(t||AdminHomepageComponent)(core.Y36(fesm2015_forms.qu),core.Y36(categories_service.G),core.Y36(ngneat_hot_toast.jE),core.Y36(core.SBq),core.Y36(homepage_service.g))},"AdminHomepageComponent_Factory"),AdminHomepageComponent.\u0275cmp=core.Xpm({type:AdminHomepageComponent,selectors:[["b2b-admin-homepage"]],decls:8,vars:6,consts:[[3,"formGroup"],["formArrayName","categories",4,"ngIf"],[1,"d-flex","pt-2"],["b2bNgxButton","",1,"w-50","py-2",3,"theme","click"],["b2bNgxButton","",1,"d-block","w-50","py-2",3,"theme","click"],["formArrayName","categories"],[4,"ngFor","ngForOf"],[1,"d-flex",2,"flex-wrap","wrap",3,"formGroupName"],["placeholder","Select parent category","formControlName","parentCategory","bindValue","_id","bindLabel","name",2,"width","70%",3,"options"],["b2bNgxButton","",2,"width","15%",3,"theme","click"],[1,"w-100"],["type","text","b2bNgxInput","","placeholder","Enter product url ",3,"theme","label","click"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"form",0),core.YNc(1,AdminHomepageComponent_div_1_Template,2,1,"div",1),core.ALo(2,"async"),core.TgZ(3,"div",2)(4,"button",3),core.NdJ("click",__name(function(){return ctx.addCategory()},"AdminHomepageComponent_Template_button_click_4_listener")),core._uU(5," Add category "),core.qZA(),core.TgZ(6,"button",4),core.NdJ("click",__name(function(){return ctx.onSave()},"AdminHomepageComponent_Template_button_click_6_listener")),core._uU(7," Save changes "),core.qZA()()()),2&rf&&(core.Q6J("formGroup",ctx.form),core.xp6(1),core.Q6J("ngIf",core.lcZ(2,4,ctx.categories$)),core.xp6(3),core.Q6J("theme",ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),core.xp6(2),core.Q6J("theme",ctx.b2bNgxButtonThemeEnum.BACKGROUND_BLUE))},"AdminHomepageComponent_Template"),dependencies:[common.sg,common.O5,ngx_button_directive.f,ngx_input_directive.k,fesm2015_forms._Y,fesm2015_forms.JJ,fesm2015_forms.JL,fesm2015_forms.sg,fesm2015_forms.u,fesm2015_forms.x0,fesm2015_forms.CE,ngx_select_component.B,common.Ov]}),AdminHomepageComponent=(0,tslib_es6.gn)([(0,ngneat_until_destroy.c)()],AdminHomepageComponent);const routes=[{path:"",component:AdminHomepageComponent}];class AdminHomepageRoutingModule{}__name(AdminHomepageRoutingModule,"AdminHomepageRoutingModule"),AdminHomepageRoutingModule.\u0275fac=__name(function(t){return new(t||AdminHomepageRoutingModule)},"AdminHomepageRoutingModule_Factory"),AdminHomepageRoutingModule.\u0275mod=core.oAB({type:AdminHomepageRoutingModule}),AdminHomepageRoutingModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]});var ngx_button_module=__webpack_require__(59026),ngx_input_module=__webpack_require__(94418),ngx_select_module=__webpack_require__(97631);class AdminHomepageModule{}__name(AdminHomepageModule,"AdminHomepageModule"),AdminHomepageModule.\u0275fac=__name(function(t){return new(t||AdminHomepageModule)},"AdminHomepageModule_Factory"),AdminHomepageModule.\u0275mod=core.oAB({type:AdminHomepageModule}),AdminHomepageModule.\u0275inj=core.cJS({imports:[common.ez,AdminHomepageRoutingModule,ngx_button_module.l,ngx_input_module.r,fesm2015_forms.UX,ngx_select_module.F]})},44876:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>HomepageService});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5e3),_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(96931);class HomepageService{constructor(apiService){this.apiService=apiService}getCarouselItems(){return this.apiService.get("cache/first-screen-carousel")}updateCarouselItems(data){return this.apiService.post("product/update-first-screen-carousel",data)}updateSubscription(model){return this.apiService.post("subscription/update-user-subscription",model)}}__name(HomepageService,"HomepageService"),HomepageService.\u0275fac=__name(function(t){return new(t||HomepageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.LFG(_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.s))},"HomepageService_Factory"),HomepageService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Yz7({token:HomepageService,factory:HomepageService.\u0275fac,providedIn:"root"})}};