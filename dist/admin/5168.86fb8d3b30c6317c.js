"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5168],{75168:(S,l,s)=>{s.r(l),s.d(l,{AuthRegisterGoogleAccountModule:()=>R});var g=s(96814),c=s(44112),d=s(97582),p=s(9769),u=s(78791),t=s(19212),m=s(77247);let a=class h{constructor(n,e,i,r){this.router=n,this.changeDetectorRef=e,this._activatedRoute=i,this._authService=r}ngOnInit(){this._activatedRoute.queryParams.pipe((0,u.t)(this)).subscribe(n=>{let{token:e,role:i}=n;const r=e.endsWith("/")?e.slice(0,-1):e;this._authService.updateToken(r),this._authService.initUser(),this._authService.returnInitedUser().pipe((0,p.z)(f=>this._authService.getUser().pipe((0,u.t)(this)))).subscribe(f=>{this._authService.updateToken(r),this._authService.updateRole(i),this.router.navigate(["/auth/register"]),this._authService.isRegisteredByGoogle.next(!0),this.changeDetectorRef.detectChanges()})})}static#t=this.\u0275fac=function(e){return new(e||h)(t.Y36(c.F0),t.Y36(t.sBO),t.Y36(c.gz),t.Y36(m.e))};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["b2b-auth-register-google-account"]],decls:0,vars:0,template:function(e,i){},encapsulation:2})};a=(0,d.gn)([(0,u.c)()],a);const v=[{path:"",component:a}];let A=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#s=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(v),c.Bz]})}return o})(),R=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#s=this.\u0275inj=t.cJS({imports:[g.ez,A]})}return o})()}}]);