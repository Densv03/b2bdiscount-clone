"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5462],{85462:(C,m,t)=>{t.r(m),t.d(m,{AuthGoogleSignInSuccessModule:()=>G});var g=t(96814),v=t(48589),a=t(44112),p=t(49671),S=t(97582),c=t(86825),h=t(78791),n=t(19212),y=t(77247),f=t(69019);let r=class l{constructor(o,e,i,u){this._activatedRoute=o,this._authService=e,this._router=i,this.mixpanelService=u}ngOnInit(){this._activatedRoute.queryParams.pipe((0,h.t)(this)).subscribe(o=>{const{token:e}=o,u=e.endsWith("/")?e.slice(0,-1):e;this._authService.updateToken(u),this._authService.initUser(),this._authService.getUser().pipe((0,h.t)(this)).subscribe(d=>{console.log("AUTH SERVICE GOOGLE SIGN IN"),this.trackLogin(d),this._authService.updateToken(u),this._authService.updateRole(d?.role),this._router.navigateByUrl("/")})})}trackLogin(o){var e=this;return(0,p.Z)(function*(){o&&e.mixpanelService.logIn({User_id:o?._id,"Account Type":o?.rootRole?.displayName,"Company Name":o?.company,"Auth Method":o?.socialAuthType})})()}static#t=this.\u0275fac=function(e){return new(e||l)(n.Y36(a.gz),n.Y36(y.e),n.Y36(a.F0),n.Y36(f.h))};static#e=this.\u0275cmp=n.Xpm({type:l,selectors:[["b2b-auth-google-sign-in-success"]],decls:0,vars:0,template:function(e,i){},data:{animation:[(0,c.X$)("fadeInOut",[(0,c.eR)(":enter",[(0,c.oB)({opacity:0}),(0,c.jt)(500,(0,c.oB)({opacity:1}))]),(0,c.eR)(":leave",[(0,c.jt)(500,(0,c.oB)({opacity:0}))])])]}})};r=(0,S.gn)([(0,h.c)()],r);const A=[{path:"",component:r}];let I=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=n.oAB({type:s});static#o=this.\u0275inj=n.cJS({imports:[a.Bz.forChild(A),a.Bz]})}return s})(),G=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=n.oAB({type:s});static#o=this.\u0275inj=n.cJS({imports:[g.ez,I,v._]})}return s})()}}]);