"use strict";(self.webpackChunkfe_b2b=self.webpackChunkfe_b2b||[]).push([[7822],{46353:(A,O,o)=>{o.d(O,{J:()=>m});var i=o(97582),s=o(5e3),c=o(54968),C=o(44987),t=o(35684),d=o(39300),g=o(69808),h=o(5214),x=o(64062);function l(P,_){if(1&P){const f=s.EpF();s.TgZ(0,"li")(1,"button",6),s.NdJ("click",function(S){const k=s.CHM(f).$implicit,E=s.oxw(2);return s.KtG(E.callOptionFunc(S,k))}),s._UZ(2,"img",7),s.TgZ(3,"span"),s._uU(4),s.qZA()()()}if(2&P){const f=_.$implicit;s.xp6(2),s.Q6J("name",f.icon),s.xp6(1),s.Tol(f.className+" ngx-dropdown-text"),s.xp6(1),s.Oqu(f.label)}}function u(P,_){if(1&P&&(s.TgZ(0,"ul",4),s.YNc(1,l,5,4,"li",5),s.qZA()),2&P){const f=s.oxw();s.xp6(1),s.Q6J("ngForOf",f.options)}}let m=class{constructor(_){this.changeDetection=_,this.isMenuShow=!1,this.toggleOptionClick=new s.vpe}callOptionFunc(_,f){this.isMenuShow=!1,_.preventDefault(),_.stopImmediatePropagation(),f.onClick(this.optionToReturn||f,this.requiredOptionToCheck)}get menuClassName(){return`${this.className} `}subscribeOnClickOutside(_){const f=(0,c.R)(document,"click").pipe((0,t.T)(1),(0,C.t)(this),(0,d.h)(T=>!_.contains(T.target))).subscribe(()=>{this.isMenuShow=!1,this.changeDetection.detectChanges(),f.unsubscribe()})}showMenu(_,f){this.isMenuShow=!this.isMenuShow,_.stopImmediatePropagation(),_.preventDefault(),this.isMenuShow&&this.subscribeOnClickOutside(f)}};m.\u0275fac=function(_){return new(_||m)(s.Y36(s.sBO))},m.\u0275cmp=s.Xpm({type:m,selectors:[["b2b-ngx-dropdown"]],inputs:{options:"options",requiredOptionToCheck:"requiredOptionToCheck",className:"className",optionToReturn:"optionToReturn"},outputs:{toggleOptionClick:"toggleOptionClick"},ngContentSelectors:["*"],decls:5,vars:1,consts:[[1,"ngx-dropdown-container"],["container",""],[3,"click"],["class","ngx-dropdown",4,"ngIf"],[1,"ngx-dropdown"],[4,"ngFor","ngForOf"],["b2bNgxButton","",1,"ngx-dropdown-button",3,"click"],["b2bNgxIcon","",1,"ngx-dropdown-button-icon",3,"name"]],template:function(_,f){if(1&_){const T=s.EpF();s.F$t(),s.TgZ(0,"div",0,1)(2,"div",2),s.NdJ("click",function(N){s.CHM(T);const k=s.MAs(1);return s.KtG(f.showMenu(N,k))}),s.Hsn(3),s.qZA(),s.YNc(4,u,2,1,"ul",3),s.qZA()}2&_&&(s.xp6(4),s.Q6J("ngIf",f.isMenuShow))},dependencies:[g.sg,g.O5,h.f,x.p],styles:[".ngx-dropdown-container[_ngcontent-%COMP%]{position:relative}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown[_ngcontent-%COMP%]{position:absolute;z-index:2;background:#ffffff;box-shadow:0 2px 12px #0f0f1129;border-radius:4px;width:180px;right:0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]{display:flex;align-items:center;padding:8px;width:100%}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]:hover{background-color:#eff4fa}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]   .ngx-dropdown-text[_ngcontent-%COMP%]{text-align:left;font-weight:500;font-size:13px;line-height:18px;color:#0f0f11;margin-left:12px}"],changeDetection:0}),m=(0,i.gn)([(0,C.c)()],m)},67090:(A,O,o)=>{o.d(O,{ED:()=>d,Yr:()=>g}),o(46353);var s=o(69808),c=o(59026),C=o(51163),t=o(5e3);let d=(()=>{class h{}return h.\u0275fac=function(l){return new(l||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[s.ez,c.l,C.w]}),h})();var g=(()=>{return(h=g||(g={})).RESTORE="Restore",h.ARCHIVE="Archive",h.DELETE="Delete",h.EDIT="Edit",g;var h})()},93637:(A,O,o)=>{o.d(O,{Q:()=>C});var i=o(5e3),s=o(69808);function c(t,d){if(1&t){const g=i.EpF();i.TgZ(0,"li",2),i.NdJ("click",function(){const l=i.CHM(g).$implicit,u=i.oxw();return i.KtG(u.togglePage(l.value))}),i._uU(1),i.qZA()}if(2&t){const g=d.$implicit,h=i.oxw();i.ekj("active",h.currentPage===g.label),i.xp6(1),i.hij(" ",g.label," ")}}let C=(()=>{class t{constructor(){this.currentPage=1,this.togglePageNumber=new i.vpe,this.currentPage=1,this.togglePage(1)}get options(){return this.length&&this.perPage?new Array(Math.ceil(this.length/this.perPage)).fill(null).map((x,l)=>({label:l+1,value:l+1})):[]}togglePage(g){g!==this.currentPage&&(this.currentPage=g,this.togglePageNumber.emit(g))}togglePrevPage(){1!==this.currentPage&&(this.currentPage=this.currentPage-1,this.togglePageNumber.emit(this.currentPage))}toggleNextPage(){this.currentPage!==this.options.length&&(this.currentPage=this.currentPage+1,this.togglePageNumber.emit(this.currentPage))}}return t.\u0275fac=function(g){return new(g||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["b2b-ngx-pagination"]],inputs:{length:"length",perPage:"perPage",currentPage:"currentPage"},outputs:{togglePageNumber:"togglePageNumber"},decls:2,vars:1,consts:[[1,"ngx-pagination"],["class","ngx-pagination-item",3,"active","click",4,"ngFor","ngForOf"],[1,"ngx-pagination-item",3,"click"]],template:function(g,h){1&g&&(i.TgZ(0,"ul",0),i.YNc(1,c,2,3,"li",1),i.qZA()),2&g&&(i.xp6(1),i.Q6J("ngForOf",h.options))},dependencies:[s.sg],styles:["[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#005dff;color:#fff}.ngx-pagination[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-top:24px;flex-wrap:wrap;row-gap:10px}.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;align-items:center;justify-content:center;margin:0 4px;border:1px solid #dfe8f5;cursor:pointer}.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]:hover:not(.active){background-color:#eff4fa}.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]:active{background:#ffffff}.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]:first-child{margin-left:0}.ngx-pagination[_ngcontent-%COMP%]   .ngx-pagination-item[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),t})()},65297:(A,O,o)=>{o.d(O,{z:()=>c});var i=o(69808),s=o(5e3);let c=(()=>{class C{}return C.\u0275fac=function(d){return new(d||C)},C.\u0275mod=s.oAB({type:C}),C.\u0275inj=s.cJS({imports:[i.ez]}),C})()},43607:(A,O,o)=>{o.d(O,{t:()=>x});var i=o(5e3),s=o(93075),c=o(88763),C=o(69808);function t(l,u){1&l&&(i.TgZ(0,"span",6),i._uU(1,"Visible"),i.qZA())}function d(l,u){1&l&&(i.TgZ(0,"span",7),i._uU(1,"Hidden"),i.qZA())}function g(l,u){if(1&l&&(i.TgZ(0,"span",7),i._uU(1),i.qZA()),2&l){const p=i.oxw(2);i.xp6(1),i.Oqu(p.customLabel)}}function h(l,u){if(1&l&&(i.ynx(0),i.YNc(1,t,2,0,"span",4),i.YNc(2,d,2,0,"span",5),i.YNc(3,g,2,1,"span",5),i.BQk()),2&l){const p=i.oxw();i.xp6(1),i.Q6J("ngIf",!p.customLabel&&p.formControl.value),i.xp6(1),i.Q6J("ngIf",!p.customLabel&&!p.formControl.value),i.xp6(1),i.Q6J("ngIf",p.customLabel)}}let x=(()=>{class l{constructor(p){this._changeDetectorRef=p,this.placeholder="",this.errors={},this.customLabel="",this.emptyLabel=!1,this.subcategories=!1,this.toggled=!1,this.change=new i.vpe,this.type="checkbox",this.onChange=()=>null,this.onTouched=()=>null,this.formControl=new s.NI(!1),this.id=(0,c.U)()}get error(){if(!this.errors)return"";const p=Object.keys(this.errors)[0];return this.errors[p]}ngOnInit(){this.subscribeOnValueChanges()}ngOnChanges(p){p.errors&&this.formControl.setErrors(p.errors.currentValue)}validate(){return this.formControl.errors}subscribeOnValueChanges(){this.formControl.valueChanges.pipe().subscribe(p=>{this.onChange(p)})}registerOnChange(p){this.onChange=p}registerOnTouched(p){this.onTouched=p}writeValue(p){this.formControl.setValue(p,{emitEvent:!1}),this.toggled=p,this._changeDetectorRef.detectChanges()}setDisabledState(p){p?this.formControl.disable():this.formControl.enable()}emitToggleChange(){this.toggled=!this.toggled,this.change.emit()}}return l.\u0275fac=function(p){return new(p||l)(i.Y36(i.sBO))},l.\u0275cmp=i.Xpm({type:l,selectors:[["b2b-ngx-toggle"]],inputs:{placeholder:"placeholder",errors:"errors",customLabel:"customLabel",emptyLabel:"emptyLabel",subcategories:"subcategories",toggled:"toggled"},outputs:{change:"change"},features:[i._Bn([{provide:s.JU,useExisting:(0,i.Gpc)(()=>l),multi:!0},{provide:s.Cf,useExisting:(0,i.Gpc)(()=>l),multi:!0}]),i.TTD],decls:4,vars:5,consts:[[1,"ngx-toggle"],[4,"ngIf"],["type","checkbox",1,"ngx-toggle-input",3,"formControl","ngModel","click","ngModelChange"],[1,"ngx-toggle-custom-input"],["class","ngx-toggle-label-visible",4,"ngIf"],["class","ngx-toggle-label-hidden",4,"ngIf"],[1,"ngx-toggle-label-visible"],[1,"ngx-toggle-label-hidden"]],template:function(p,m){1&p&&(i.TgZ(0,"label",0),i.YNc(1,h,4,3,"ng-container",1),i.TgZ(2,"input",2),i.NdJ("click",function(){return m.emitToggleChange()})("ngModelChange",function(_){return m.toggled=_}),i.qZA(),i._UZ(3,"span",3),i.qZA()),2&p&&(i.ekj("subcategories",m.subcategories),i.xp6(1),i.Q6J("ngIf",!m.emptyLabel),i.xp6(1),i.Q6J("formControl",m.formControl)("ngModel",m.toggled))},dependencies:[C.O5,s.Wl,s.JJ,s.oH],styles:['.ngx-toggle[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding-left:60px;font-size:12px;color:gray;height:26px}.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-input[_ngcontent-%COMP%]{opacity:0;height:100%;width:100%}.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-input[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]{background-color:#0f0f11}.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-input[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]:before{transform:translate(26px)}.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-custom-input[_ngcontent-%COMP%]{position:absolute;cursor:pointer;left:0;top:0;background-color:#556274;transition:.4s;width:52px;height:100%;border-radius:34px}.ngx-toggle[_ngcontent-%COMP%]   .ngx-toggle-custom-input[_ngcontent-%COMP%]:before{position:absolute;content:"";border-radius:50%;height:18px;width:18px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.ngx-toggle.subcategories[_ngcontent-%COMP%]{height:20px;padding-left:27px}.ngx-toggle.subcategories[_ngcontent-%COMP%]   .ngx-toggle-input[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]:before{transform:translate(19px)}.ngx-toggle.subcategories[_ngcontent-%COMP%]   .ngx-toggle-custom-input[_ngcontent-%COMP%]{width:40px}.ngx-toggle.subcategories[_ngcontent-%COMP%]   .ngx-toggle-custom-input[_ngcontent-%COMP%]:before{width:14px;height:14px;bottom:3px}.ngx-toggle-label-visible[_ngcontent-%COMP%], .ngx-toggle-label-hidden[_ngcontent-%COMP%]{font-size:14px;line-height:16px;color:#556274}'],changeDetection:0}),l})()},75092:(A,O,o)=>{o.d(O,{e:()=>C});var i=o(69808),s=o(93075),c=o(5e3);let C=(()=>{class t{}return t.\u0275fac=function(g){return new(g||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[i.ez,s.UX]}),t})()},72283:(A,O,o)=>{o.r(O),o.d(O,{AdminMarketplaceModule:()=>dt});var i=o(63807),s=o(97582),c=o(44987),C=o(61135),t=o(5e3),d=o(93075),g=o(69808),h=o(13114),x=o(4265),l=o(14739),u=o(39300),p=o(89925),m=o(92340),P=o(1218),_=o(26402),f=o(86069),T=o(48966),S=o(56913),N=o(82021),k=o(56838),E=o(93637),B=o(46353),Z=o(5214),L=o(64062),I=o(13822);function U(r,e){1&r&&(t.TgZ(0,"span"),t._uU(1,"Verification"),t.qZA())}function R(r,e){1&r&&(t.TgZ(0,"span"),t._uU(1,"Approved"),t.qZA())}function J(r,e){1&r&&(t.TgZ(0,"span"),t._uU(1,"Rejected"),t.qZA())}function j(r,e){if(1&r){const n=t.EpF();t.TgZ(0,"li",5),t.NdJ("click",function(){const M=t.CHM(n).$implicit,v=t.oxw();return t.KtG(v.redirectToProductDetails(M))}),t.TgZ(1,"div",6)(2,"div",7)(3,"div",8),t._uU(4),t.qZA(),t.TgZ(5,"div",9),t.YNc(6,U,2,0,"span",10),t.YNc(7,R,2,0,"span",10),t.YNc(8,J,2,0,"span",10),t.qZA(),t.TgZ(9,"div",11),t._uU(10),t._UZ(11,"img",12),t.qZA()()(),t.TgZ(12,"div",13)(13,"b2b-ngx-dropdown",14)(14,"button",15),t._UZ(15,"img",16),t.qZA()()()()}if(2&r){const n=e.$implicit,a=t.oxw();t.xp6(4),t.Oqu(n.title),t.xp6(2),t.Q6J("ngIf",!n.productApproved&&!n.productRejected),t.xp6(1),t.Q6J("ngIf",n.productApproved),t.xp6(1),t.Q6J("ngIf",n.productRejected),t.xp6(2),t.hij(" ",n.views," "),t.xp6(3),t.Q6J("options",a.menuOptions)("optionToReturn",n)}}let w=class{constructor(e,n,a,b,M,v,lt,ut,mt){this.fb=e,this.categoriesService=n,this.marketService=a,this.router=b,this.dialog=M,this.hotToastService=v,this.userService=lt,this.mixpanelService=ut,this.activatedRoute=mt,this.PRODUCTS_LIMIT=this.marketService.PRODUCTS_LIMIT,this.products$=this.marketService.marketplaceProducts$,this.productsLength$=this.marketService.marketplaceProductsLength$,this.form=this.fb.group({"categories[]":[[]]}),this.menuOptions=this.getMenuOptions(),this.filteredQueryObj={limit:this.PRODUCTS_LIMIT,offset:0},this.currentPageSource=new C.X(1),this.currentPage$=this.currentPageSource.asObservable()}ngOnInit(){this.categoriesService.getCategories$(),this.initPagination(),this.form.get("categories[]").valueChanges.subscribe(e=>{this.marketService.updateProductsByAdmin(this.filteredQueryObj,{"categories[]":e})})}redirectToProductDetails(e){this.router.navigate(["b2bmarket","listing","products",(null==e?void 0:e.path)||e._id])}redirectToProductEdit(e){this.router.navigate(["profile","your-workspace","b2bmarket","edit",e._id],{queryParams:{admin:!0,page:this.currentPageSource.getValue()},queryParamsHandling:"merge"})}getMenuOptions(){return[{label:"Delete",icon:"delete-red",onClick:e=>{this.dialog.open(x.z,{data:{title:"Delete product",message:"Are you sure you want to delete this product?",confirmButtonText:"Delete",confirmButtonTheme:l.n.BACKGROUND_RED,cancelButtonText:"Cancel",cancelButtonTheme:l.n.OUTLINE_BLACK}}).afterClosed().pipe((0,u.h)(n=>!!n)).subscribe(()=>{var n,a;this.mixpanelService.track("Admin deleted users the product",{"Product Category":null===(n=e.category[0])||void 0===n?void 0:n.name,"Supplier's Country":null===(a=e.company[0])||void 0===a?void 0:a.country,"Product Count":e.amount.count+" "+e.amount.unit.name,"Posting Date":e.updatedAt}),this.deleteProductByAdmin(e._id),this.marketService.updateProductsByAdmin(this.filteredQueryObj)})}},{label:"Archive",icon:"archive-red",onClick:e=>{var n,a;this.archiveProductByAdmin(e._id),this.mixpanelService.track("Admin archived users the product",{"Product Category":null===(n=e.category[0])||void 0===n?void 0:n.name,"Supplier's Country":null===(a=e.company[0])||void 0===a?void 0:a.country,"Product Count":e.amount.count+" "+e.amount.unit.name,"Posting Date":e.updatedAt})}},{label:"Report supplier",icon:"contact-user",onClick:e=>this.reportSupplier(e.user)},{label:"approve by admin",icon:"check",onClick:e=>{this.marketService.approveProductByAdmin(e._id).pipe((0,c.t)(this)).subscribe(()=>{var n,a;this.mixpanelService.track("Admin approved user product",{"Product Category":null===(n=e.category[0])||void 0===n?void 0:n.name,"Supplier's Country":null===(a=e.company[0])||void 0===a?void 0:a.country,"Product Count":e.amount.count+" "+e.amount.unit.name,"Posting Date":e.updatedAt}),this.hotToastService.success("approved"),this.marketService.updateProductsByAdmin(this.filteredQueryObj)})}},{label:"Decline by admin",icon:"cross",onClick:e=>{this.marketService.declineProductByAdmin(e._id).pipe((0,c.t)(this)).subscribe(()=>{var n,a;this.mixpanelService.track("Product declined",{"Product Category":null===(n=e.category[0])||void 0===n?void 0:n.name,"Supplier's Country":(0,P.oY)(null===(a=e.company[0])||void 0===a?void 0:a.country),"Product Count":e.amount.count+" "+e.amount.unit.name,"Product declined":e.updatedAt}),this.hotToastService.success("declined"),this.marketService.updateProductsByAdmin(this.filteredQueryObj)})}},{label:"Edit",icon:"edit",onClick:e=>this.redirectToProductEdit(e)}]}deleteProductByAdmin(e){this.marketService.deleteProductByAdmin(e).pipe((0,c.t)(this),this.hotToastService.observe({loading:"Deleting...",success:"Deleted successfully",error:"Error while deleting"})).subscribe(()=>this.marketService.updateProductsByAdmin(this.filteredQueryObj))}archiveProductByAdmin(e){this.marketService.archiveProductByAdmin(e).pipe((0,c.t)(this),this.hotToastService.observe({loading:"Archiving...",success:"Archived successfully",error:"Error while archiving"})).subscribe()}reportSupplier(e){this.openConnection(this.userService.getToken()),this.socket.emit("start_users_chat",{userId:e,typeRoom:"users"}),this.socket.on("users_chat_info",n=>{this.router.navigate(["profile/your-workspace/b2bmarket/chat/",n._id])})}openConnection(e){this.socket=(0,p.io)(m.N.apiUrl,{path:"/chat",auth:{token:e}})}togglePage(e){if(isNaN(+e))throw new Error("Invalid page");this.currentPageSource.next(+e),this.filteredQueryObj.offset=(e-1)*this.PRODUCTS_LIMIT,this.marketService.updateProductsByAdmin(this.filteredQueryObj),this.router.navigate([],{queryParams:{page:1==+e?void 0:this.currentPageSource.getValue()}})}initPagination(){this.togglePage(this.activatedRoute.snapshot.queryParams.page||1)}};w.\u0275fac=function(e){return new(e||w)(t.Y36(d.qu),t.Y36(_.G),t.Y36(f.E),t.Y36(i.F0),t.Y36(T.uw),t.Y36(S.jE),t.Y36(N.K),t.Y36(k.h),t.Y36(i.gz))},w.\u0275cmp=t.Xpm({type:w,selectors:[["b2b-admin-product-list"]],decls:8,vars:11,consts:[[3,"formGroup"],["formControlName","categories[]"],[1,"market-products"],["class","product",3,"click",4,"ngFor","ngForOf"],[3,"length","perPage","currentPage","togglePageNumber"],[1,"product",3,"click"],[1,"info"],[1,"info-header"],[1,"product-title"],[1,"product-status"],[4,"ngIf"],[1,"product-views"],["b2bNgxIcon","","name","eye"],[1,"dropdown"],[3,"options","optionToReturn"],["b2bNgxButton","",1,"flex","items-center"],["b2bNgxIcon","","name","more"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t._UZ(1,"b2b-categories-dialog",1),t.qZA(),t.TgZ(2,"ul",2),t.YNc(3,j,16,7,"li",3),t.ALo(4,"async"),t.qZA(),t.TgZ(5,"b2b-ngx-pagination",4),t.NdJ("togglePageNumber",function(b){return n.togglePage(b)}),t.ALo(6,"async"),t.ALo(7,"async"),t.qZA()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,5,n.products$)),t.xp6(2),t.Q6J("length",t.lcZ(6,7,n.productsLength$))("perPage",n.PRODUCTS_LIMIT)("currentPage",t.lcZ(7,9,n.currentPage$)))},dependencies:[E.Q,g.sg,g.O5,B.J,Z.f,L.p,d._Y,d.JJ,d.JL,d.sg,d.u,I.q,g.Ov],styles:["[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:25px;justify-content:space-around}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{height:auto;display:flex;width:48%;margin-right:5px;align-items:center;justify-content:space-between;margin-bottom:10px;background:#ffffff;box-shadow:2px 2px 8px #e3eaf1;border-radius:4px;cursor:pointer}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:20%;height:100%}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%;margin-left:15px;height:100%;padding:20px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]{margin-right:10px;width:30%}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]{margin-left:15px;width:27px;height:27px;border-radius:50%;background-color:#005dff}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]   .product-views-amount[_ngcontent-%COMP%]{color:#fff;font-weight:700;transform:translate(20%,20%)}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%]{background-color:#9fa4bb;border-radius:4px;padding:4px 6px;color:#fff;font-weight:400;text-align:center;margin-top:10px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{width:20%;text-align:end}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{height:50px}"]}),w=(0,s.gn)([(0,c.c)()],w);var Q=o(63900),Y=o(70771),F=o(70159);function K(r,e){if(1&r){const n=t.EpF();t.TgZ(0,"li",5),t.NdJ("click",function(){const M=t.CHM(n).$implicit,v=t.oxw();return t.KtG(v.goToSupplierListing(M.user))}),t.TgZ(1,"div",6)(2,"div",7)(3,"div",8),t._uU(4),t.qZA(),t.TgZ(5,"div",9)(6,"div",10),t._uU(7),t._UZ(8,"img",11),t.qZA(),t.TgZ(9,"div",12),t._uU(10),t._UZ(11,"img",13),t.qZA()()()()()}if(2&r){const n=e.$implicit;t.xp6(4),t.Oqu(n.companyName),t.xp6(3),t.hij(" ",n.countProducts," "),t.xp6(3),t.hij(" ",n.countChats," ")}}let $=(()=>{class r{constructor(n,a,b,M){this.fb=n,this.marketService=a,this.router=b,this.route=M,this.PRODUCTS_LIMIT=this.marketService.PRODUCTS_LIMIT,this.b2bNgxInputThemeEnum=Y.T,this.form=this.fb.group({q:""}),this.paginationParams={offset:0,limit:this.PRODUCTS_LIMIT},this.companyListSource=new C.X([]),this.companyListLengthSource=new C.X(0)}get companyList$(){return this.companyListSource.asObservable()}get companyListLength$(){return this.companyListLengthSource.asObservable()}ngOnInit(){this.form.get("q").valueChanges.pipe((0,Q.w)(n=>this.marketService.getCompanyByName(n,this.paginationParams))).subscribe(n=>{this.companyListSource.next(n.companies),this.companyListLengthSource.next(n.totalCount)})}redirectToProductDetails(n){this.router.navigate(["/b2bmarket","products",n._id])}toggleCompaniesPage(n){this.paginationParams={...this.paginationParams,offset:(n-1)*this.PRODUCTS_LIMIT},this.marketService.getCompanyByName(this.form.get("q").value,this.paginationParams).subscribe(a=>{this.companyListSource.next(a.companies)})}goToSupplierListing(n){this.router.navigate(["supplier",n],{relativeTo:this.route})}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(d.qu),t.Y36(f.E),t.Y36(i.F0),t.Y36(i.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["b2b-admin-companies-list"]],decls:7,vars:9,consts:[[3,"formGroup"],["type","text","formControlName","q","b2bNgxInput","","placeholder","Enter name of company",3,"theme"],[1,"market-products"],["class","product",3,"click",4,"ngFor","ngForOf"],[3,"length","perPage","togglePageNumber"],[1,"product",3,"click"],[1,"info"],[1,"info-header"],[1,"product-title"],[1,"product-views"],[1,"d-flex","flex-column","mr-4"],["b2bNgxIcon","","name","box"],[1,"d-flex","flex-column"],["b2bNgxIcon","","name","chat"]],template:function(n,a){1&n&&(t.TgZ(0,"form",0),t._UZ(1,"input",1),t.qZA(),t.TgZ(2,"ul",2),t.YNc(3,K,12,3,"li",3),t.ALo(4,"async"),t.qZA(),t.TgZ(5,"b2b-ngx-pagination",4),t.NdJ("togglePageNumber",function(M){return a.toggleCompaniesPage(M)}),t.ALo(6,"async"),t.qZA()),2&n&&(t.Q6J("formGroup",a.form),t.xp6(1),t.Q6J("theme",a.b2bNgxInputThemeEnum.BACKGROUND_WHITE),t.xp6(2),t.Q6J("ngForOf",t.lcZ(4,5,a.companyList$)),t.xp6(2),t.Q6J("length",t.lcZ(6,7,a.companyListLength$))("perPage",a.PRODUCTS_LIMIT))},dependencies:[E.Q,g.sg,L.p,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,F.k,g.Ov],styles:["[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:25px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{height:auto;display:flex;width:32%;margin-right:5px;align-items:center;justify-content:space-between;margin-bottom:10px;background:#ffffff;box-shadow:2px 2px 8px #e3eaf1;border-radius:4px;cursor:pointer}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:20%;height:100%}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%;margin-left:15px;height:100%;padding:20px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views[_ngcontent-%COMP%]{display:flex;align-items:center;width:30%;justify-content:space-around}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]{margin-left:15px;width:27px;height:27px;border-radius:50%;background-color:#005dff}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]   .product-views-amount[_ngcontent-%COMP%]{color:#fff;font-weight:700;transform:translate(20%,20%)}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%]{background-color:#9fa4bb;border-radius:4px;padding:4px 6px;width:140px;color:#fff;font-weight:400;text-align:center;margin-top:10px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{width:20%;text-align:end}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{height:50px}"]}),r})();function W(r,e){1&r&&t._UZ(0,"b2b-admin-product-list")}function z(r,e){1&r&&t._UZ(0,"b2b-admin-companies-list")}var y=(()=>{return(r=y||(y={}))[r.DEFAULT=0]="DEFAULT",r[r.PRODUCTS=1]="PRODUCTS",r[r.COMPANIES=2]="COMPANIES",y;var r})();let D=class{constructor(e){this.fb=e,this.form=this.fb.group({activeSelection:"categories"}),this.VisibleListEnum=y,this.dropdownOptions=[{label:"Find by product category",id:"categories"},{label:"Find by company name",id:"products"}],this.activeSelectionSource=new C.X(y.DEFAULT)}ngOnInit(){this.activeSelectionSource.next(y.PRODUCTS),this.form.get("activeSelection").valueChanges.subscribe(e=>{switch(e){case"products":this.activeSelectionSource.next(y.COMPANIES);break;case"categories":this.activeSelectionSource.next(y.PRODUCTS)}})}get activeSelection$(){return this.activeSelectionSource.asObservable()}};D.\u0275fac=function(e){return new(e||D)(t.Y36(d.qu))},D.\u0275cmp=t.Xpm({type:D,selectors:[["b2b-admin-marketplace"]],decls:7,vars:8,consts:[[3,"formGroup"],["formControlName","activeSelection","placeholder","Select option","bindValue","id","bindLabel","label",3,"options"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0)(1,"b2b-ngx-select",1),t._uU(2," Select option "),t.qZA()(),t.YNc(3,W,1,0,"b2b-admin-product-list",2),t.ALo(4,"async"),t.YNc(5,z,1,0,"b2b-admin-companies-list",2),t.ALo(6,"async")),2&e&&(t.Q6J("formGroup",n.form),t.xp6(1),t.Q6J("options",n.dropdownOptions),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,4,n.activeSelection$)===n.VisibleListEnum.PRODUCTS),t.xp6(2),t.Q6J("ngIf",t.lcZ(6,6,n.activeSelection$)===n.VisibleListEnum.COMPANIES))},dependencies:[g.O5,d._Y,d.JJ,d.JL,d.sg,d.u,h.B,w,$,g.Ov],styles:["[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding:25px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{height:auto;display:flex;width:32%;margin-right:5px;align-items:center;justify-content:space-between;margin-bottom:10px;background:#ffffff;box-shadow:2px 2px 8px #e3eaf1;border-radius:4px;cursor:pointer}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:20%;height:100%}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%;margin-left:15px;height:100%;padding:20px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]{margin-left:15px;width:27px;height:27px;border-radius:50%;background-color:#005dff}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]   .product-views-amount[_ngcontent-%COMP%]{color:#fff;font-weight:700;transform:translate(20%,20%)}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%]{background-color:#9fa4bb;border-radius:4px;padding:4px 6px;width:140px;color:#fff;font-weight:400;text-align:center;margin-top:10px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{width:20%;text-align:end}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{height:50px}"]}),D=(0,s.gn)([(0,c.c)()],D);var G=o(70239);function X(r,e){1&r&&(t.TgZ(0,"div",16),t._uU(1," Need verification "),t.qZA())}function H(r,e){1&r&&(t.TgZ(0,"div",16),t._uU(1," Approved by admin "),t.qZA())}function V(r,e){1&r&&(t.TgZ(0,"div",16),t._uU(1," Rejected by admin "),t.qZA())}function q(r,e){if(1&r){const n=t.EpF();t.TgZ(0,"li",3),t.NdJ("click",function(){const M=t.CHM(n).$implicit,v=t.oxw();return t.KtG(v.redirectToProductDetails(M))}),t.TgZ(1,"div",4),t._UZ(2,"img",5),t.qZA(),t.TgZ(3,"div",6)(4,"div",7)(5,"div",8),t._uU(6),t.qZA(),t.TgZ(7,"div",9)(8,"div",10),t._uU(9),t.qZA()()(),t.YNc(10,X,2,0,"div",11),t.YNc(11,H,2,0,"div",11),t.YNc(12,V,2,0,"div",11),t.qZA(),t.TgZ(13,"div",12)(14,"b2b-ngx-dropdown",13)(15,"button",14),t._UZ(16,"img",15),t.qZA()()()()}if(2&r){const n=e.$implicit,a=t.oxw();t.xp6(2),t.Q6J("name",null==n||null==n.photos||null==n.photos[0]?null:n.photos[0].lg),t.xp6(4),t.Oqu(n.title),t.xp6(3),t.Oqu(n.views),t.xp6(1),t.Q6J("ngIf",!n.productApproved&&!n.productRejected),t.xp6(1),t.Q6J("ngIf",n.productApproved),t.xp6(1),t.Q6J("ngIf",n.productRejected),t.xp6(2),t.Q6J("options",a.menuOptions)("optionToReturn",n)}}const tt=[{path:"",component:D},{path:"supplier/:id",component:(()=>{class r{constructor(n,a,b,M,v){this.route=n,this.clientMarketplaceService=a,this.router=b,this.hotToastService=M,this.dialog=v,this.marketplaceProducts$=this.clientMarketplaceService.marketplaceProducts$,this.productsLimit=this.clientMarketplaceService.PRODUCTS_LIMIT,this.productsTotalLength$=this.clientMarketplaceService.marketplaceProductsLength$,this.menuOptions=this.getMenuOptions(),this.filteredQueryObj={limit:this.productsLimit,offset:0}}ngOnInit(){this.clientMarketplaceService.updateProductsByAdmin({limit:10,offset:0},{supplierId:this.route.snapshot.params.id})}togglePage(n){this.filteredQueryObj={...this.filteredQueryObj,offset:(n-1)*this.productsLimit},this.clientMarketplaceService.updateProductsByAdmin(this.filteredQueryObj)}redirectToProductDetails(n){this.router.navigate(["/marketplace","product",n._id],{queryParams:{admin:!0,...this.route.snapshot.queryParams}})}getMenuOptions(){return[{label:"Delete",icon:"delete-red",onClick:n=>{this.dialog.open(x.z,{data:{title:"Delete product",message:"Are you sure you want to delete this product?",confirmButtonText:"Delete",confirmButtonTheme:l.n.BACKGROUND_RED,cancelButtonText:"Cancel",cancelButtonTheme:l.n.OUTLINE_BLACK}}).afterClosed().pipe((0,u.h)(a=>!!a)).subscribe(()=>{this.deleteProductByAdmin(n.id)})}},{label:"approve by admin",icon:"check",onClick:n=>{this.clientMarketplaceService.approveProductByAdmin(n._id).pipe((0,c.t)(this),this.hotToastService.observe({loading:"Approving...",success:"Approved successfully",error:"Approving error"})).subscribe()}},{label:"decline by admin",icon:"cross",onClick:n=>{this.clientMarketplaceService.declineProductByAdmin(n._id).pipe((0,c.t)(this),this.hotToastService.observe({loading:"Declining...",success:"Declined successfully",error:"Declining error"})).subscribe()}}]}deleteProductByAdmin(n){this.clientMarketplaceService.deleteProductByAdmin(n).pipe((0,c.t)(this),this.hotToastService.observe({loading:"Deleting...",success:"Deleted successfully",error:"Error while deleting"})).subscribe()}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(i.gz),t.Y36(f.E),t.Y36(i.F0),t.Y36(S.jE),t.Y36(T.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["b2b-admin-supplier-product-list"]],decls:5,vars:7,consts:[[1,"market-products"],["class","product",3,"click",4,"ngFor","ngForOf"],[3,"length","perPage","togglePageNumber"],[1,"product",3,"click"],[1,"photo"],["b2bNgxImage","",1,"product-photo",3,"name"],[1,"info"],[1,"info-header"],[1,"product-title"],[1,"product-views-circle"],[1,"product-views-amount"],["class","product-status",4,"ngIf"],[1,"dropdown"],[3,"options","optionToReturn"],["b2bNgxButton","",1,"flex","items-center"],["b2bNgxIcon","","name","more"],[1,"product-status"]],template:function(n,a){1&n&&(t.TgZ(0,"ul",0),t.YNc(1,q,17,8,"li",1),t.ALo(2,"async"),t.qZA(),t.TgZ(3,"b2b-ngx-pagination",2),t.NdJ("togglePageNumber",function(M){return a.togglePage(M)}),t.ALo(4,"async"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,3,a.marketplaceProducts$)),t.xp6(2),t.Q6J("length",t.lcZ(4,5,a.productsTotalLength$))("perPage",a.productsLimit))},dependencies:[E.Q,g.sg,g.O5,G.w,B.J,Z.f,L.p,g.Ov],styles:["[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:25px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{height:150px;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;background:#ffffff;box-shadow:2px 2px 8px #e3eaf1;border-radius:4px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:20%;height:100%}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:60%;margin-left:15px;height:100%;padding:20px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]{margin-left:15px;width:27px;height:27px;border-radius:50%;background-color:#005dff}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .product-views-circle[_ngcontent-%COMP%]   .product-views-amount[_ngcontent-%COMP%]{color:#fff;font-weight:700;transform:translate(20%,20%)}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%]{background-color:#9fa4bb;border-radius:4px;padding:4px 6px;width:140px;color:#fff;font-weight:400;text-align:center;margin-top:10px}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{width:20%;text-align:end}[_nghost-%COMP%]   .market-products[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{height:50px}"]}),r})()}];let nt=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[i.Bz.forChild(tt),i.Bz]}),r})();var et=o(65297),ot=o(87343),it=o(67090),rt=o(59026),ct=o(51163),st=o(94418),at=o(97631);let gt=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({}),r})();var pt=o(46560);let dt=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[nt,et.z,g.ez,ot.A,it.ED,rt.l,ct.w,T.Is,gt,d.UX,st.r,at.F,pt.j]}),r})()},4265:(A,O,o)=>{o.d(O,{z:()=>l});var i=o(48966),s=o(14739),c=o(5e3),C=o(69808),t=o(5214);function d(u,p){if(1&u&&(c.TgZ(0,"div",6)(1,"h2"),c._uU(2),c.qZA()()),2&u){const m=c.oxw();c.xp6(2),c.Oqu(m.data.title)}}function g(u,p){1&u&&c._UZ(0,"hr",7)}function h(u,p){if(1&u&&(c.TgZ(0,"div",8),c._uU(1),c.qZA()),2&u){const m=c.oxw();c.xp6(1),c.Oqu(m.data.message)}}function x(u,p){1&u&&c._UZ(0,"hr",7)}let l=(()=>{class u{constructor(m,P){this.dialogRef=m,this.data=P,this.b2bNgxButtonThemeEnum=s.n,this.confirmButtonTheme=this.data.confirmButtonTheme,this.cancelButtonTheme=this.data.cancelButtonTheme}closeDialog(m){this.dialogRef.close(m)}}return u.\u0275fac=function(m){return new(m||u)(c.Y36(i.so),c.Y36(i.WI))},u.\u0275cmp=c.Xpm({type:u,selectors:[["b2b-confirmation-dialog"]],decls:10,vars:6,consts:[[1,"confirmation-dialog"],["class","header",4,"ngIf"],["color","#f5f5f5",4,"ngIf"],["class","body",4,"ngIf"],[1,"footer"],["b2bNgxButton","",1,"btn",3,"click"],[1,"header"],["color","#f5f5f5"],[1,"body"]],template:function(m,P){1&m&&(c.TgZ(0,"div",0),c.YNc(1,d,3,1,"div",1),c.YNc(2,g,1,0,"hr",2),c.YNc(3,h,2,1,"div",3),c.YNc(4,x,1,0,"hr",2),c.TgZ(5,"div",4)(6,"button",5),c.NdJ("click",function(){return P.closeDialog(!0)}),c._uU(7),c.qZA(),c.TgZ(8,"button",5),c.NdJ("click",function(){return P.closeDialog(!1)}),c._uU(9),c.qZA()()()),2&m&&(c.xp6(1),c.Q6J("ngIf",P.data.title),c.xp6(1),c.Q6J("ngIf",P.data.title),c.xp6(1),c.Q6J("ngIf",P.data.message),c.xp6(1),c.Q6J("ngIf",P.data.message),c.xp6(3),c.hij(" ",P.data.confirmButtonText," "),c.xp6(2),c.hij(" ",P.data.cancelButtonText," "))},dependencies:[C.O5,t.f],styles:["[_nghost-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]{width:40vw;height:20vh;position:relative}[_nghost-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   .confirmation-dialog[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;width:100%;gap:15px;justify-content:center;margin-top:20px}[_nghost-%COMP%]   .footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:15px 20px;width:40%}"]}),u})()}}]);