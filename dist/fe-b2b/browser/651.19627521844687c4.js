"use strict";(self.webpackChunkfe_b2b=self.webpackChunkfe_b2b||[]).push([[651],{80651:(C,l,s)=>{s.r(l),s.d(l,{AuthRegisterGoogleAccountModule:()=>R});var g=s(38684),r=s(9063),d=s(35285),p=s(22991),u=s(19825),t=s(89985),v=s(53154);let a=class h{constructor(n,e,i,c){this.router=n,this.changeDetectorRef=e,this._activatedRoute=i,this._authService=c}ngOnInit(){this._activatedRoute.queryParams.pipe((0,u.s)(this)).subscribe(n=>{let{token:e,role:i}=n;const c=e.endsWith("/")?e.slice(0,-1):e;this._authService.updateToken(c),this._authService.initUser(),this._authService.returnInitedUser().pipe((0,p.Z)(A=>this._authService.getUser().pipe((0,u.s)(this)))).subscribe(A=>{this._authService.updateToken(c),this._authService.updateRole(i),this.router.navigate(["/auth/register"]),this._authService.isRegisteredByGoogle.next(!0),this.changeDetectorRef.detectChanges()})})}static#t=this.\u0275fac=function(e){return new(e||h)(t.rXU(r.Ix),t.rXU(t.gRc),t.rXU(r.nX),t.rXU(v.u))};static#e=this.\u0275cmp=t.VBU({type:h,selectors:[["b2b-auth-register-google-account"]],decls:0,vars:0,template:function(e,i){},encapsulation:2})};a=(0,d.Cg)([(0,u.d)()],a);const m=[{path:"",component:a}];let f=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.$C({type:o});static#s=this.\u0275inj=t.G2t({imports:[r.iI.forChild(m),r.iI]})}return o})(),R=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.$C({type:o});static#s=this.\u0275inj=t.G2t({imports:[g.MD,f]})}return o})()}}]);