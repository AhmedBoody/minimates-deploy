"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[40662],{40662:(Z,l,n)=>{n.r(l),n.d(l,{SendTwoFactorCodeModule:()=>y});var h=n(92337),p=n(91860),c=n(70916),f=n(47530),g=n(41840),u=n(44328),v=n(64716),t=n(99468),F=n(13368),d=n(96814),r=n(56223),S=n(32925),T=n(3291);function C(o,m){if(1&o&&(t.TgZ(0,"option",11),t._uU(1),t.qZA()),2&o){const e=m.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function A(o,m){if(1&o){const e=t.EpF();t.TgZ(0,"form",4,5),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.submit())}),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"localize"),t.qZA(),t.TgZ(5,"div",6)(6,"select",7),t.NdJ("ngModelChange",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.selectedTwoFactorProvider=s)}),t.YNc(7,C,2,2,"option",8),t.qZA()(),t.TgZ(8,"div",9)(9,"button",10),t._uU(10),t.ALo(11,"localize"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,4,"SendSecurityCode_Information")),t.xp6(3),t.Q6J("ngModel",e.selectedTwoFactorProvider),t.xp6(1),t.Q6J("ngForOf",e.loginService.authenticateResult.twoFactorAuthProviders),t.xp6(3),t.hij(" ",t.lcZ(11,6,"Submit")," ")}}const x=[{path:"",component:(()=>{class o extends g.c{constructor(e,i,s,a){super(e),this.loginService=i,this._tokenAuthService=s,this._router=a,this.submitting=!1}canActivate(){return!!(this.loginService.authenticateModel&&this.loginService.authenticateResult&&this.loginService.authenticateResult.twoFactorAuthProviders&&this.loginService.authenticateResult.twoFactorAuthProviders.length)}ngOnInit(){this.canActivate()?this.selectedTwoFactorProvider=this.loginService.authenticateResult.twoFactorAuthProviders[0]:this._router.navigate(["account/login"])}submit(){const e=new u.F6t;e.userId=this.loginService.authenticateResult.userId,e.provider=this.selectedTwoFactorProvider,this.submitting=!0,this._tokenAuthService.sendTwoFactorAuthCode(e).pipe((0,v.x)(()=>this.submitting=!1)).subscribe(()=>{this._router.navigate(["account/verify-code"])})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(t.zs3),t.Y36(F.r),t.Y36(u.WH8),t.Y36(c.F0))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],features:[t.qOj],decls:6,vars:5,consts:[[1,"login-form"],[1,"pb-13","pt-lg-0","pt-5"],[1,"fw-bolder","text-dark","fs-h4","fs-h1-lg"],["class","login-form form","method","post",3,"ngSubmit",4,"ngIf"],["method","post",1,"login-form","form",3,"ngSubmit"],["twoFactorForm","ngForm"],[1,"mb-5"],["autoFocus","","size","1","name","selectedTwoFactorProvider",1,"form-control","form-control-solid","h-auto","py-7","px-6","rounded-lg","fs-h6",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"pb-lg-0","pb-5"],["type","submit",1,"btn","btn-primary","fw-bolder","fs-h6","px-8","py-4","my-3","me-3"],[3,"value"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3),t.ALo(4,"localize"),t.qZA()(),t.YNc(5,A,12,8,"form",3),t.qZA()),2&i&&(t.Q6J("@routerTransition",void 0),t.xp6(3),t.hij(" ",t.lcZ(4,3,"SendSecurityCode")," "),t.xp6(2),t.Q6J("ngIf",s.loginService.authenticateResult))},dependencies:[d.sg,d.O5,r._Y,r.YN,r.Kr,r.EJ,r.JJ,r.JL,r.On,r.F,S.h,T.F],encapsulation:2,data:{animation:[(0,f.RP)()]}})}return o})(),pathMatch:"full"}];let w=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(x),c.Bz]})}return o})(),y=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[h.o,p.y,w]})}return o})()}}]);