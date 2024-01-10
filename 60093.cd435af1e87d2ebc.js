"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[60093],{60093:(z,c,o)=>{o.r(c),o.d(c,{ResetPasswordModule:()=>b});var h=o(92337),l=o(70916),m=o(47530),g=o(41840),d=o(44328);class v extends d.BiX{}var f=o(64716),e=o(99468),q=o(13368),x=o(20005),w=o(96814),n=o(56223),Z=o(78176),y=o(24276),A=o(45513),C=o(3291);function L(t,J){if(1&t&&(e.TgZ(0,"ul",17)(1,"li",18),e._uU(2),e.ALo(3,"localize"),e.qZA(),e.TgZ(4,"li",18),e._uU(5),e.ALo(6,"localize"),e.qZA(),e.TgZ(7,"li",18),e._uU(8),e.ALo(9,"localize"),e.qZA(),e.TgZ(10,"li",18),e._uU(11),e.ALo(12,"localize"),e.qZA(),e.TgZ(13,"li",18),e._uU(14),e.ALo(15,"localize"),e.qZA()()),2&t){const s=e.oxw(),i=e.MAs(12);e.xp6(1),e.Q6J("hidden",!i.errors.requireDigit),e.xp6(1),e.hij(" ",e.lcZ(3,10,"PasswordComplexity_RequireDigit_Hint")," "),e.xp6(2),e.Q6J("hidden",!i.errors.requireLowercase),e.xp6(1),e.hij(" ",e.lcZ(6,12,"PasswordComplexity_RequireLowercase_Hint")," "),e.xp6(2),e.Q6J("hidden",!i.errors.requireUppercase),e.xp6(1),e.hij(" ",e.lcZ(9,14,"PasswordComplexity_RequireUppercase_Hint")," "),e.xp6(2),e.Q6J("hidden",!i.errors.requireNonAlphanumeric),e.xp6(1),e.hij(" ",e.lcZ(12,16,"PasswordComplexity_RequireNonAlphanumeric_Hint")," "),e.xp6(2),e.Q6J("hidden",!i.errors.requiredLength),e.xp6(1),e.hij(" ",e.xi3(15,18,"PasswordComplexity_RequiredLength_Hint",s.passwordComplexitySetting.requiredLength)," ")}}function P(t,J){if(1&t&&(e.TgZ(0,"ul",17)(1,"li",18),e._uU(2),e.ALo(3,"localize"),e.qZA(),e.TgZ(4,"li",18),e._uU(5),e.ALo(6,"localize"),e.qZA(),e.TgZ(7,"li",18),e._uU(8),e.ALo(9,"localize"),e.qZA(),e.TgZ(10,"li",18),e._uU(11),e.ALo(12,"localize"),e.qZA(),e.TgZ(13,"li",18),e._uU(14),e.ALo(15,"localize"),e.qZA(),e.TgZ(16,"li",18),e._uU(17),e.ALo(18,"localize"),e.qZA()()),2&t){const s=e.oxw(),i=e.MAs(18);e.xp6(1),e.Q6J("hidden",!i.errors.requireDigit),e.xp6(1),e.hij(" ",e.lcZ(3,12,"PasswordComplexity_RequireDigit_Hint")," "),e.xp6(2),e.Q6J("hidden",!i.errors.requireLowercase),e.xp6(1),e.hij(" ",e.lcZ(6,14,"PasswordComplexity_RequireLowercase_Hint")," "),e.xp6(2),e.Q6J("hidden",!i.errors.requireUppercase),e.xp6(1),e.hij(" ",e.lcZ(9,16,"PasswordComplexity_RequireUppercase_Hint")," "),e.xp6(2),e.Q6J("hidden",!i.errors.requireNonAlphanumeric),e.xp6(1),e.hij(" ",e.lcZ(12,18,"PasswordComplexity_RequireNonAlphanumeric_Hint")," "),e.xp6(2),e.Q6J("hidden",!i.errors.requiredLength),e.xp6(1),e.hij(" ",e.xi3(15,20,"PasswordComplexity_RequiredLength_Hint",s.passwordComplexitySetting.requiredLength)," "),e.xp6(2),e.Q6J("hidden",i.valid),e.xp6(1),e.Oqu(e.lcZ(18,23,"PasswordsDontMatch"))}}const S=[{path:"",component:(()=>{class t extends g.c{constructor(s,i,r,a,p,u,U){super(s),this._accountService=i,this._router=r,this._activatedRoute=a,this._loginService=p,this._profileService=u,this._recaptchaWrapperService=U,this.model=new v,this.passwordComplexitySetting=new d.qSp,this.saving=!1}ngOnInit(){this._profileService.getPasswordComplexitySetting().subscribe(s=>{this.passwordComplexitySetting=s.setting}),this._activatedRoute.snapshot.queryParams.c?(this.model.c=this._activatedRoute.snapshot.queryParams.c,this._accountService.resolveTenantId(new d.jKd({c:this.model.c})).subscribe(s=>{this.appSession.changeTenantIfNeeded(s)})):(this.model.userId=this._activatedRoute.snapshot.queryParams.userId,this.model.resetCode=this._activatedRoute.snapshot.queryParams.resetCode,this.appSession.changeTenantIfNeeded(this.parseTenantId(this._activatedRoute.snapshot.queryParams.tenantId)))}ngAfterViewInit(){this._recaptchaWrapperService.setCaptchaVisibilityOnLogin()}save(){this.saving=!0,this._accountService.resetPassword(this.model).pipe((0,f.x)(()=>{this.saving=!1})).subscribe(s=>{if(!s.canLogin)return void this._router.navigate(["account/login"]);let i=r=>{this.saving=!0,this._loginService.authenticateModel.userNameOrEmailAddress=s.userName,this._loginService.authenticateModel.password=this.model.password,this._loginService.authenticate(()=>{this.saving=!1},null,r)};this._recaptchaWrapperService.useCaptchaOnLogin()?this._recaptchaWrapperService.getService().execute("login").subscribe(r=>i(r)):i(null)})}parseTenantId(s){let i=s?parseInt(s,10):void 0;return Number.isNaN(i)&&(i=void 0),i}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(e.zs3),e.Y36(d.k4Y),e.Y36(l.F0),e.Y36(l.gz),e.Y36(q.r),e.Y36(d.qAB),e.Y36(x.o))};static#i=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],features:[e.qOj],decls:31,vars:39,consts:[[1,"login-form"],[1,"pb-13","pt-lg-0","pt-5"],[1,"fw-bolder","text-dark","fs-h4","fs-h1-lg"],["method","post",1,"login-form","form",3,"ngSubmit"],["resetPassForm","ngForm"],[1,"mb-5"],["type","password","name","Password","validateEqual","PasswordRepeat","reverse","true","required","",1,"form-control","form-control-solid","h-auto","py-7","px-6","rounded-lg","fs-h6",3,"ngModel","placeholder","requireDigit","requireLowercase","requireUppercase","requireNonAlphanumeric","requiredLength","ngModelChange"],["Password","ngModel"],[1,"mb-5",3,"hidden"],["class","form-text text-danger",4,"ngIf"],["type","password","name","PasswordRepeat","validateEqual","Password","reverse","false","required","",1,"form-control","form-control-solid","h-auto","py-7","px-6","rounded-lg","fs-h6",3,"ngModel","placeholder","requireDigit","requireLowercase","requireUppercase","requireNonAlphanumeric","requiredLength"],["PasswordRepeat","ngModel"],[1,"pb-lg-0","pb-5"],["routerLink","/account/login","type","button",1,"btn","btn-light-primary","fw-bolder","fs-h6","px-8","py-4","my-3",3,"disabled"],[1,"fa","fa-arrow-left"],["type","submit",1,"btn","btn-primary","fw-bolder","fs-h6","px-8","py-4","my-3","me-3",3,"disabled","buttonBusy","busyText"],[1,"fa","fa-check"],[1,"form-text","text-danger"],[3,"hidden"]],template:function(i,r){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3),e.ALo(4,"localize"),e.qZA()(),e.TgZ(5,"form",3,4),e.NdJ("ngSubmit",function(){return r.save()}),e.TgZ(7,"p"),e._uU(8),e.ALo(9,"localize"),e.qZA(),e.TgZ(10,"div",5)(11,"input",6,7),e.NdJ("ngModelChange",function(p){return r.model.password=p}),e.ALo(13,"localize"),e.qZA()(),e.TgZ(14,"div",8),e.YNc(15,L,16,21,"ul",9),e.qZA(),e.TgZ(16,"div",5),e._UZ(17,"input",10,11),e.ALo(19,"localize"),e.qZA(),e.TgZ(20,"div",8),e.YNc(21,P,19,25,"ul",9),e.qZA(),e.TgZ(22,"div",12)(23,"button",13),e._UZ(24,"i",14),e._uU(25),e.ALo(26,"localize"),e.qZA(),e.TgZ(27,"button",15),e._UZ(28,"i",16),e._uU(29),e.ALo(30,"localize"),e.qZA()()()()),2&i){const a=e.MAs(6),p=e.MAs(12),u=e.MAs(18);e.Q6J("@routerTransition",void 0),e.xp6(3),e.hij(" ",e.lcZ(4,27,"ChangePassword")," "),e.xp6(5),e.hij(" ",e.lcZ(9,29,"PleaseEnterYourNewPassword")," "),e.xp6(3),e.s9C("placeholder",e.lcZ(13,31,"Password")),e.Q6J("ngModel",r.model.password)("requireDigit",r.passwordComplexitySetting.requireDigit)("requireLowercase",r.passwordComplexitySetting.requireLowercase)("requireUppercase",r.passwordComplexitySetting.requireUppercase)("requireNonAlphanumeric",r.passwordComplexitySetting.requireNonAlphanumeric)("requiredLength",r.passwordComplexitySetting.requiredLength),e.xp6(3),e.Q6J("hidden",a.form.valid||a.form.pristine),e.xp6(1),e.Q6J("ngIf",p.errors),e.xp6(2),e.s9C("placeholder",e.lcZ(19,33,"PasswordRepeat")),e.Q6J("ngModel",r.model.passwordRepeat)("requireDigit",r.passwordComplexitySetting.requireDigit)("requireLowercase",r.passwordComplexitySetting.requireLowercase)("requireUppercase",r.passwordComplexitySetting.requireUppercase)("requireNonAlphanumeric",r.passwordComplexitySetting.requireNonAlphanumeric)("requiredLength",r.passwordComplexitySetting.requiredLength),e.xp6(3),e.Q6J("hidden",a.form.valid||a.form.pristine),e.xp6(1),e.Q6J("ngIf",u.errors),e.xp6(2),e.Q6J("disabled",r.saving),e.xp6(2),e.hij(" ",e.lcZ(26,35,"Back")," "),e.xp6(2),e.Q6J("disabled",!a.form.valid)("buttonBusy",r.saving)("busyText",r.l("SavingWithThreeDot")),e.xp6(2),e.hij(" ",e.lcZ(30,37,"Submit")," ")}},dependencies:[w.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.On,n.F,l.rH,Z.z,y.J,A.L,C.F],encapsulation:2,data:{animation:[(0,m.RP)()]}})}return t})(),pathMatch:"full"}];let T=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#i=this.\u0275mod=e.oAB({type:t});static#r=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(S),l.Bz]})}return t})();var R=o(91860);let b=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#i=this.\u0275mod=e.oAB({type:t});static#r=this.\u0275inj=e.cJS({imports:[h.o,R.y,T]})}return t})()}}]);