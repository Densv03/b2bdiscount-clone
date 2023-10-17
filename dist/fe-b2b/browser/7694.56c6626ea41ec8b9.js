"use strict";(self.webpackChunkfe_b2b=self.webpackChunkfe_b2b||[]).push([[7694,8606],{29833:(e,s,n)=>{n.r(s),n.d(s,{AdminModule:()=>O});var a=n(69808),o=n(63807);const m=[{label:"USERS",path:"/admin/users"},{label:"OFFERS",path:"/admin/offers"},{label:"MANAGER",path:"/admin/manager"},{label:"TRADE BID",path:"/admin/tradebid"},{label:"MARKET",path:"/admin/b2bmarket"},{label:"HOMEPAGE",path:"/admin/homepage"},{label:"COMPANIES",path:"/admin/companies"},{label:"BLOG",path:"/admin/blog"},{label:"BILLING",path:"/admin/billing"}];var d=n(5e3);function g(t,l){if(1&t&&(d.TgZ(0,"li",3)(1,"a",4),d._uU(2),d.qZA()()),2&t){const i=l.$implicit;d.xp6(1),d.Q6J("routerLink",i.path),d.xp6(1),d.Oqu(i.label)}}let f=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-admin-sidenav"]],inputs:{options:"options"},decls:3,vars:1,consts:[[1,"admin-sidenav"],[1,"admin-sidenav__list"],["class","admin-sidenav__list-item",4,"ngFor","ngForOf"],[1,"admin-sidenav__list-item"],["routerLinkActive","active",1,"admin-sidenav__list-item-link",3,"routerLink"]],template:function(i,h){1&i&&(d.TgZ(0,"aside",0)(1,"ul",1),d.YNc(2,g,3,2,"li",2),d.qZA()()),2&i&&(d.xp6(2),d.Q6J("ngForOf",h.options))},dependencies:[a.sg,o.yS,o.Od],styles:[".admin-sidenav[_ngcontent-%COMP%]{background-color:#000;height:100%;padding:30px 30px 30px 15px}.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]{margin:30px 0}.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]:first-child{margin-top:0}.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]   .admin-sidenav__list-item-link[_ngcontent-%COMP%]{color:#fff;transition:.2s;border-bottom:2px solid transparent;padding-bottom:2px}.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]   .admin-sidenav__list-item-link.active[_ngcontent-%COMP%]{border-color:#fff}.admin-sidenav[_ngcontent-%COMP%]   .admin-sidenav__list[_ngcontent-%COMP%]   .admin-sidenav__list-item[_ngcontent-%COMP%]   .admin-sidenav__list-item-link[_ngcontent-%COMP%]:hover{color:#005dff}"],changeDetection:0}),t})(),C=(()=>{class t{constructor(){this.sidenavOptions=m}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["b2b-admin"]],decls:4,vars:1,consts:[[1,"admin"],[3,"options"],[1,"admin-pages"]],template:function(i,h){1&i&&(d.TgZ(0,"div",0),d._UZ(1,"app-admin-sidenav",1),d.TgZ(2,"div",2),d._UZ(3,"router-outlet"),d.qZA()()),2&i&&(d.xp6(1),d.Q6J("options",h.sidenavOptions))},dependencies:[o.lC,f],styles:[".admin[_ngcontent-%COMP%]{display:flex;min-height:100vh;background-color:#f3f6f8}.admin[_ngcontent-%COMP%]   .admin-pages[_ngcontent-%COMP%]{flex:1;overflow:hidden}"],changeDetection:0}),t})();var M=n(17562),v=n(51101);const A=[{path:"",component:C,children:[{path:"articles",loadChildren:()=>Promise.all([n.e(8592),n.e(7760)]).then(n.bind(n,37760)).then(t=>t.AdminArticlesModule)},{path:"articles/:id",loadChildren:()=>Promise.all([n.e(8831),n.e(6749),n.e(2301),n.e(8592),n.e(9206)]).then(n.bind(n,99206)).then(t=>t.AdminArticleModule)},{path:"article-categories",loadChildren:()=>n.e(1499).then(n.bind(n,51499)).then(t=>t.AdminArticleCategoriesModule)},{path:"blog",loadChildren:()=>Promise.all([n.e(8592),n.e(1587)]).then(n.bind(n,31587)).then(t=>t.AdminBlogModule)},{path:"blog/:id",loadChildren:()=>Promise.all([n.e(8831),n.e(6749),n.e(2301),n.e(8592),n.e(296)]).then(n.bind(n,70296)).then(t=>t.AdminBlogPostModule)},{path:"users",loadChildren:()=>Promise.all([n.e(5422),n.e(209),n.e(4668),n.e(328),n.e(3195)]).then(n.bind(n,43195)).then(t=>t.AdminUsersModule)},{path:"users/:id",loadChildren:()=>Promise.all([n.e(5422),n.e(209),n.e(8831),n.e(6749),n.e(6979),n.e(7841)]).then(n.bind(n,16979)).then(t=>t.ClientProfileSettingsModule)},{path:"offers",loadChildren:()=>Promise.all([n.e(9925),n.e(693),n.e(9257)]).then(n.bind(n,89257)).then(t=>t.AdminOffersModule)},{path:"offers/:id",loadChildren:()=>Promise.all([n.e(5422),n.e(209),n.e(8831),n.e(9550),n.e(4762)]).then(n.bind(n,99550)).then(t=>t.ClientProfileAddOfferModule)},{path:"offer",loadChildren:()=>n.e(7819).then(n.bind(n,67819)).then(t=>t.AdminOfferModule),canActivate:[M.D]},{path:"offer-categories",loadChildren:()=>n.e(9538).then(n.bind(n,59538)).then(t=>t.AdminOfferCategoriesModule)},{path:"tradebid",loadChildren:()=>Promise.all([n.e(9925),n.e(693),n.e(547)]).then(n.bind(n,90547)).then(t=>t.AdminTradebidModule)},{path:"b2bmarket",loadChildren:()=>Promise.all([n.e(3251),n.e(9925),n.e(6560),n.e(8592),n.e(7822)]).then(n.bind(n,72283)).then(t=>t.AdminMarketplaceModule)},{path:"tradebid/:id",component:v.r},{path:"manager",loadChildren:()=>Promise.all([n.e(2075),n.e(8592),n.e(5832)]).then(n.bind(n,55832)).then(t=>t.AdminManagerModule)},{path:"billing",loadChildren:()=>n.e(5238).then(n.bind(n,95238)).then(t=>t.AdminBillingModule)},{path:"companies",loadChildren:()=>Promise.all([n.e(328),n.e(2075),n.e(6932)]).then(n.bind(n,56932)).then(t=>t.AdminCompaniesModule)},{path:"homepage",loadChildren:()=>Promise.all([n.e(8592),n.e(9930)]).then(n.bind(n,99930)).then(t=>t.AdminHomepageModule)},{path:"",pathMatch:"full",redirectTo:"users"}]}];let P=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[o.Bz.forChild(A),o.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[a.ez,P]}),t})()},2613:(e,s,n)=>{function a(o=""){return o.charAt(0).toUpperCase()+o.slice(1)}n.d(s,{f:()=>a})},13333:(e,s,n)=>{function a(o){return o?o.split(/[#?]/)[0].split(".").pop().trim():""}n.d(s,{R:()=>a})},86517:(e,s,n)=>{function a(){const o=/^[A-Za-z0-9!@#$%^&*+()_,./?=|\u2116:/'-]+$/;return m=>{if(!m.value)return null;const d=m.value.replace(/\s+/g,"");return o.test(String(d.trim()).toLowerCase())?null:{cyrillic:!0}}}n.d(s,{w:()=>a})}}]);