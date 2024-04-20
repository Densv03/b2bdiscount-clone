"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[6975],{56975:(k,g,i)=>{i.r(g),i.d(g,{AdminHomepageModule:()=>Y});var m=i(38684),h=i(9063),b=i(35285),C=i(22001),y=i(28225),v=i(76999),f=i(19825),A=i(93744),e=i(89985),a=i(82575),N=i(41513),x=i(24797),I=i(20559);let G=(()=>{class r{constructor(t){this.apiService=t}getCarouselItems(){return this.apiService.get("cache/first-screen-carousel")}updateCarouselItems(t){return this.apiService.post("product/update-first-screen-carousel",t)}updateSubscription(t){return this.apiService.post("subscription/update-user-subscription",t)}static#e=this.\u0275fac=function(o){return new(o||r)(e.KVO(I.G))};static#t=this.\u0275prov=e.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var E=i(61553),T=i(6113),F=i(27936);function S(r,l){if(1&r){const t=e.RV6();e.j41(0,"p")(1,"input",11),e.bIt("click",function(){const n=e.eBV(t).index,s=e.XpG().index,c=e.XpG(2);return e.Njj(c.onInputClick(s,n))}),e.k0s()()}if(2&r){const t=l.index,o=e.XpG().index,n=e.XpG(2);e.R7$(),e.HbH("url-input-"+o),e.Y8G("theme",n.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("label","Enter url "+n.getLabel(t))}}function R(r,l){if(1&r){const t=e.RV6();e.j41(0,"div")(1,"div",7),e.nrm(2,"b2b-ngx-select",8),e.j41(3,"button",9),e.bIt("click",function(){const n=e.eBV(t).index,s=e.XpG(2);return e.Njj(s.toggleCollapse(n))}),e.EFF(4),e.k0s(),e.j41(5,"button",9),e.bIt("click",function(){const n=e.eBV(t).index,s=e.XpG(2);return e.Njj(s.removeCategory(n))}),e.EFF(6," Remove category "),e.k0s(),e.j41(7,"div",10),e.DNE(8,S,2,4,"p",6),e.k0s()()()}if(2&r){const t=l.$implicit,o=l.index,n=e.XpG().ngIf,s=e.XpG();e.R7$(),e.Y8G("formGroupName",o),e.R7$(),e.Y8G("options",n),e.R7$(),e.Y8G("theme",s.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),e.R7$(),e.SpI(" ",t.value.collapsed?"Expand":"Collapse"," "),e.R7$(),e.Y8G("theme",s.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),e.R7$(2),e.AVh("d-none",!t.value.parentCategory||t.value.collapsed),e.R7$(),e.Y8G("ngForOf",t.value.productIds)}}function $(r,l){if(1&r&&(e.j41(0,"div",5),e.DNE(1,R,9,8,"div",6),e.k0s()),2&r){const t=e.XpG();e.R7$(),e.Y8G("ngForOf",t.categoriesFormArray.controls)}}const B=[{path:"",component:(()=>{let r=class d{get categoriesFormArray(){return this.form.get("categories")}constructor(t,o,n,s,c){this.fb=t,this.categoriesService=o,this.hotToastService=n,this.elementRef=s,this.homepageService=c,this.b2bNgxButtonThemeEnum=C.a,this.b2bNgxInputThemeEnum=y.Q,this.categories$=this.getCategories$(),this.form=this.fb.group({categories:this.fb.array([this.createNewCategory()])})}ngOnInit(){this.initCarouselCategories()}removeCategory(t){1!==this.categoriesFormArray.length?this.categoriesFormArray.removeAt(t):this.hotToastService.info("You have zero selected categories")}onSave(){const t=[];for(let o=0;o<=6;o++){const n=this.elementRef.nativeElement.querySelectorAll(`.url-input-${o}`),s=this.categoriesFormArray.value[o]?.parentCategory;if(!s)continue;const c=Array.from(n).filter(u=>u.value&&u.value.includes("b2b.discount")).map(u=>{const p=u.value.split("/").pop();return p.includes("?")?p.slice(0,p.lastIndexOf("?")):p});c.length>0&&t.push({id:s,products:c})}this.homepageService.updateCarouselItems(t).pipe((0,f.s)(this),this.hotToastService.observe({loading:"Carousel updating...",success:"Carousel updated successfully",error:"Error while updating carousel"})).subscribe()}addCategory(){this.categoriesFormArray.length>=6?this.hotToastService.info("You can't add more then 6 categories"):this.categoriesFormArray.push(this.createNewCategory())}getLabel(t){if(isNaN(+t))throw"Invalid index";return"string"==typeof t?(parseInt(t)+1).toString():(t+1).toString()}toggleCollapse(t){const o=this.categoriesFormArray.value.map((n,s)=>t===s?{...n,collapsed:!n.collapsed}:n);this.categoriesFormArray.setValue(o)}onInputClick(t,o){if(isNaN(+t)||isNaN(+o))throw new Error("Invalid index");let n;n=document.querySelectorAll(`.url-input-${t}`)[o],n.focus(),n.select()}createNewCategory(){return this.fb.group({parentCategory:[],productIds:[Array(12)],collapsed:!0})}getCategories$(){return this.categoriesService.getCategories$().pipe((0,v.T)(t=>t.categories),(0,v.T)(t=>t.map(({name:o,_id:n})=>({name:o,_id:n}))))}initCarouselCategories(){this.homepageService.getCarouselItems().subscribe(t=>{for(let o=0;o<t.length-1;++o)this.addCategory();this.categoriesFormArray.setValue(t.map(o=>({parentCategory:o._id,productIds:Array(12),collapsed:!0}))),setTimeout(()=>{t.forEach((o,n)=>{document.querySelectorAll(`.url-input-${n}`).forEach((s,c)=>{const u=t[n].products[c]?.path||t[n].products[c]?._id;u&&(s.value=A.c.apiUrl.includes("api-dev")?"dev.b2b.discount/b2bmarket/products/"+u:"b2b.discount/b2bmarket/products/"+u)})})})})}static#e=this.\u0275fac=function(o){return new(o||d)(e.rXU(a.ok),e.rXU(N.w),e.rXU(x.U_),e.rXU(e.aKT),e.rXU(G))};static#t=this.\u0275cmp=e.VBU({type:d,selectors:[["b2b-admin-homepage"]],decls:8,vars:6,consts:[[3,"formGroup"],["formArrayName","categories",4,"ngIf"],[1,"d-flex","pt-2"],["b2bNgxButton","",1,"w-50","py-2",3,"click","theme"],["b2bNgxButton","",1,"d-block","w-50","py-2",3,"click","theme"],["formArrayName","categories"],[4,"ngFor","ngForOf"],[1,"d-flex",2,"flex-wrap","wrap",3,"formGroupName"],["placeholder","Select parent category","formControlName","parentCategory","bindValue","_id","bindLabel","name",2,"width","70%",3,"options"],["b2bNgxButton","",2,"width","15%",3,"click","theme"],[1,"w-100"],["type","text","b2bNgxInput","","placeholder","Enter product url ",3,"click","theme","label"]],template:function(o,n){1&o&&(e.j41(0,"form",0),e.DNE(1,$,2,1,"div",1),e.nI1(2,"async"),e.j41(3,"div",2)(4,"button",3),e.bIt("click",function(){return n.addCategory()}),e.EFF(5," Add category "),e.k0s(),e.j41(6,"button",4),e.bIt("click",function(){return n.onSave()}),e.EFF(7," Save changes "),e.k0s()()()),2&o&&(e.Y8G("formGroup",n.form),e.R7$(),e.Y8G("ngIf",e.bMT(2,4,n.categories$)),e.R7$(3),e.Y8G("theme",n.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),e.R7$(2),e.Y8G("theme",n.b2bNgxButtonThemeEnum.BACKGROUND_BLUE))},dependencies:[m.Sq,m.bT,E.Z,T.b,a.qT,a.BC,a.cb,a.j4,a.JD,a.$R,a.v8,F.P,m.Jj]})};return r=(0,b.Cg)([(0,f.d)()],r),r})()}];let H=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.$C({type:r});static#o=this.\u0275inj=e.G2t({imports:[h.iI.forChild(B),h.iI]})}return r})();var j=i(58764),U=i(50096),X=i(59076);let Y=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.$C({type:r});static#o=this.\u0275inj=e.G2t({imports:[m.MD,H,j.i,U.E,a.X1,X._]})}return r})()}}]);