"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9276],{59276:(Q,g,i)=>{i.r(g),i.d(g,{AdminHomepageModule:()=>Y});var m=i(96814),h=i(44112),C=i(97582),x=i(48530),y=i(66027),v=i(37398),f=i(78791),A=i(20553),e=i(19212),u=i(56223),b=i(6255),N=i(58133),T=i(87588);let S=(()=>{class n{constructor(t){this.apiService=t}getCarouselItems(){return this.apiService.get("cache/first-screen-carousel")}updateCarouselItems(t){return this.apiService.post("product/update-first-screen-carousel",t)}updateSubscription(t){return this.apiService.post("subscription/update-user-subscription",t)}static#e=this.\u0275fac=function(o){return new(o||n)(e.LFG(T.s))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var E=i(83498),I=i(17856),B=i(88657);function F(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"p")(1,"input",11),e.NdJ("click",function(){const s=e.CHM(t).index,a=e.oxw().index,c=e.oxw(2);return e.KtG(c.onInputClick(a,s))}),e.qZA()()}if(2&n){const t=l.index,o=e.oxw().index,r=e.oxw(2);e.xp6(),e.Tol("url-input-"+o),e.Q6J("theme",r.b2bNgxInputThemeEnum.BACKGROUND_WHITE)("label","Enter url "+r.getLabel(t))}}function H(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",7),e._UZ(2,"b2b-ngx-select",8),e.TgZ(3,"button",9),e.NdJ("click",function(){const s=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.toggleCollapse(s))}),e._uU(4),e.qZA(),e.TgZ(5,"button",9),e.NdJ("click",function(){const s=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.removeCategory(s))}),e._uU(6," Remove category "),e.qZA(),e.TgZ(7,"div",10),e.YNc(8,F,2,4,"p",6),e.qZA()()()}if(2&n){const t=l.$implicit,o=l.index,r=e.oxw().ngIf,s=e.oxw();e.xp6(),e.Q6J("formGroupName",o),e.xp6(),e.Q6J("options",r),e.xp6(),e.Q6J("theme",s.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),e.xp6(),e.hij(" ",t.value.collapsed?"Expand":"Collapse"," "),e.xp6(),e.Q6J("theme",s.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),e.xp6(2),e.ekj("d-none",!t.value.parentCategory||t.value.collapsed),e.xp6(),e.Q6J("ngForOf",t.value.productIds)}}function J(n,l){if(1&n&&(e.TgZ(0,"div",5),e.YNc(1,H,9,8,"div",6),e.qZA()),2&n){const t=e.oxw();e.xp6(),e.Q6J("ngForOf",t.categoriesFormArray.controls)}}const U=[{path:"",component:(()=>{let n=class d{get categoriesFormArray(){return this.form.get("categories")}constructor(t,o,r,s,a){this.fb=t,this.categoriesService=o,this.hotToastService=r,this.elementRef=s,this.homepageService=a,this.b2bNgxButtonThemeEnum=x.n,this.b2bNgxInputThemeEnum=y.T,this.categories$=this.getCategories$(),this.form=this.fb.group({categories:this.fb.array([this.createNewCategory()])})}ngOnInit(){this.initCarouselCategories()}removeCategory(t){1!==this.categoriesFormArray.length?this.categoriesFormArray.removeAt(t):this.hotToastService.info("You have zero selected categories")}onSave(){const t=[];for(let o=0;o<=6;o++){const r=this.elementRef.nativeElement.querySelectorAll(`.url-input-${o}`),s=this.categoriesFormArray.value[o]?.parentCategory;if(!s)continue;const a=Array.from(r).filter(c=>c.value&&c.value.includes("b2b.discount")).map(c=>{const p=c.value.split("/").pop();return p.includes("?")?p.slice(0,p.lastIndexOf("?")):p});a.length>0&&t.push({id:s,products:a})}this.homepageService.updateCarouselItems(t).pipe((0,f.t)(this),this.hotToastService.observe({loading:"Carousel updating...",success:"Carousel updated successfully",error:"Error while updating carousel"})).subscribe()}addCategory(){this.categoriesFormArray.length>=6?this.hotToastService.info("You can't add more then 6 categories"):this.categoriesFormArray.push(this.createNewCategory())}getLabel(t){if(isNaN(+t))throw"Invalid index";return"string"==typeof t?(parseInt(t)+1).toString():(t+1).toString()}toggleCollapse(t){const o=this.categoriesFormArray.value.map((r,s)=>t===s?{...r,collapsed:!r.collapsed}:r);this.categoriesFormArray.setValue(o)}onInputClick(t,o){if(isNaN(+t)||isNaN(+o))throw new Error("Invalid index");let r;r=document.querySelectorAll(`.url-input-${t}`)[o],r.focus(),r.select()}createNewCategory(){return this.fb.group({parentCategory:[],productIds:[Array(12)],collapsed:!0})}getCategories$(){return this.categoriesService.getCategories$().pipe((0,v.U)(t=>t.categories),(0,v.U)(t=>t.map(({name:o,_id:r})=>({name:o,_id:r}))))}initCarouselCategories(){this.homepageService.getCarouselItems().subscribe(t=>{for(let o=0;o<t.length-1;++o)this.addCategory();this.categoriesFormArray.setValue(t.map(o=>({parentCategory:o._id,productIds:Array(12),collapsed:!0}))),setTimeout(()=>{t.forEach((o,r)=>{document.querySelectorAll(`.url-input-${r}`).forEach((s,a)=>{const c=t[r].products[a]?.path||t[r].products[a]?._id;c&&(s.value=A.N.apiUrl.includes("api-dev")?"dev.b2b.discount/b2bmarket/products/"+c:"b2b.discount/b2bmarket/products/"+c)})})})})}static#e=this.\u0275fac=function(o){return new(o||d)(e.Y36(u.qu),e.Y36(b.G),e.Y36(N.jE),e.Y36(e.SBq),e.Y36(S))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["b2b-admin-homepage"]],decls:8,vars:6,consts:[[3,"formGroup"],["formArrayName","categories",4,"ngIf"],[1,"d-flex","pt-2"],["b2bNgxButton","",1,"w-50","py-2",3,"theme","click"],["b2bNgxButton","",1,"d-block","w-50","py-2",3,"theme","click"],["formArrayName","categories"],[4,"ngFor","ngForOf"],[1,"d-flex",2,"flex-wrap","wrap",3,"formGroupName"],["placeholder","Select parent category","formControlName","parentCategory","bindValue","_id","bindLabel","name",2,"width","70%",3,"options"],["b2bNgxButton","",2,"width","15%",3,"theme","click"],[1,"w-100"],["type","text","b2bNgxInput","","placeholder","Enter product url ",3,"theme","label","click"]],template:function(o,r){1&o&&(e.TgZ(0,"form",0),e.YNc(1,J,2,1,"div",1),e.ALo(2,"async"),e.TgZ(3,"div",2)(4,"button",3),e.NdJ("click",function(){return r.addCategory()}),e._uU(5," Add category "),e.qZA(),e.TgZ(6,"button",4),e.NdJ("click",function(){return r.onSave()}),e._uU(7," Save changes "),e.qZA()()()),2&o&&(e.Q6J("formGroup",r.form),e.xp6(),e.Q6J("ngIf",e.lcZ(2,4,r.categories$)),e.xp6(3),e.Q6J("theme",r.b2bNgxButtonThemeEnum.BACKGROUND_BLUE),e.xp6(2),e.Q6J("theme",r.b2bNgxButtonThemeEnum.BACKGROUND_BLUE))},dependencies:[m.sg,m.O5,E.f,I.k,u._Y,u.JJ,u.JL,u.sg,u.u,u.x0,u.CE,B.B,m.Ov]})};return n=(0,C.gn)([(0,f.c)()],n),n})()}];let Z=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(U),h.Bz]})}return n})();var _=i(43377),G=i(82242),O=i(74027);let Y=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#o=this.\u0275inj=e.cJS({imports:[m.ez,Z,_.l,G.r,u.UX,O.F]})}return n})()}}]);