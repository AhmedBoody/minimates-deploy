"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[49475],{6663:(D,b,l)=>{l.r(b),l.d(b,{EditionsModule:()=>be});var w=l(71902),J=l(92337),M=l(70916),S=l(47530),v=l(41840),x=l(64716),e=l(99468),_=l(44328),f=l(96814),E=l(72500),N=l(94901),U=l(68027),L=l(85219),I=l(68989);let A=(()=>{class o{static#e=this.DeactiveTenant="DeactiveTenant";static#i=this.AssignToAnotherEdition="AssignToAnotherEdition"}return o})();var d=l(56223),Z=l(612),C=l(45513),y=l(42152),r=l(24142),s=l(39387);const m=["editModal"],g=["featureTree"];function u(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.save())}),e.TgZ(2,"div",7)(3,"h5",8)(4,"span"),e._uU(5),e.qZA()(),e.TgZ(6,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e.qZA()(),e.TgZ(7,"div",10)(8,"tabset")(9,"tab",11)(10,"div",12)(11,"label",13),e._uU(12),e.qZA(),e.TgZ(13,"input",14,15),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.edition.edition.displayName=i)}),e.qZA(),e._UZ(15,"validation-messages",16),e.qZA()(),e.TgZ(16,"tab",11),e._UZ(17,"feature-tree",null,17),e.qZA()()(),e.TgZ(19,"div",18)(20,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e._uU(21),e.qZA(),e.TgZ(22,"button",20),e._UZ(23,"i",21),e.TgZ(24,"span"),e._uU(25),e.qZA()()()()}if(2&o){const t=e.MAs(1),n=e.MAs(14),i=e.oxw();e.xp6(5),e.AsE("",i.l("EditEdition"),": ",i.edition.edition.displayName,""),e.xp6(1),e.Q6J("disabled",i.saving),e.uIk("aria-label",i.l("Close")),e.xp6(3),e.s9C("heading",i.l("EditionProperties")),e.xp6(3),e.Oqu(i.l("EditionName")),e.xp6(1),e.Q6J("ngClass",i.edition.edition.displayName)("ngModel",i.edition.edition.displayName),e.xp6(2),e.Q6J("formCtrl",n),e.xp6(1),e.s9C("heading",i.l("Features")),e.xp6(4),e.Q6J("disabled",i.saving),e.xp6(1),e.hij(" ",i.l("Cancel")," "),e.xp6(1),e.Q6J("disabled",!t.form.valid)("buttonBusy",i.saving)("busyText",i.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(i.l("Save"))}}const h=function(o){return{backdrop:"static",keyboard:o}};let q=(()=>{class o extends v.c{constructor(t,n,i){super(t),this._editionService=n,this._commonLookupService=i,this.modalSave=new e.vpe,this.active=!1,this.saving=!1,this.edition=new _.idn,this.expiringEditions=[],this.expireAction=A.DeactiveTenant,this.expireActionEnum=A,this.isFree=!1,this.isTrialActive=!1,this.isWaitingDayActive=!1}show(t){this.active=!0,this._commonLookupService.getEditionsForCombobox(!0).subscribe(n=>{this._editionService.getEditionForEdit(t).subscribe(i=>{this.featureTree.editData=i,this.edition.edition=i.edition,this.modal.show()})})}onShown(){document.getElementById("EditionDisplayName").focus()}save(){if(!this.featureTree.areAllValuesValid())return void this.message.warn(this.l("InvalidFeaturesWarning"));const t=new _.idn;t.edition=this.edition.edition,t.featureValues=this.featureTree.getGrantedFeatures(),this.saving=!0,this._editionService.updateEdition(t).pipe((0,x.x)(()=>this.saving=!1)).subscribe(()=>{this.notify.info(this.l("SavedSuccessfully")),this.close(),this.modalSave.emit(null)})}close(){this.active=!1,this.modal.hide()}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(e.zs3),e.Y36(_.GnT),e.Y36(_.P0Z))};static#i=this.\u0275cmp=e.Xpm({type:o,selectors:[["editEditionModal"]],viewQuery:function(n,i){if(1&n&&(e.Gf(m,7),e.Gf(g,5)),2&n){let a;e.iGM(a=e.CRH())&&(i.modal=a.first),e.iGM(a=e.CRH())&&(i.featureTree=a.first)}},outputs:{modalSave:"modalSave"},features:[e.qOj],decls:5,vars:4,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","editModal","aria-hidden","true",1,"modal","fade",3,"config","onShown"],["editModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],["novalidate","",3,"ngSubmit",4,"ngIf"],["novalidate","",3,"ngSubmit"],["editionForm","ngForm"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"p-5",3,"heading"],[1,"mb-5"],["for","EditionDisplayName",1,"form-label","required"],["id","EditionDisplayName","type","text","name","EditionDisplayName","required","","maxlength","64",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["editionNameInput","ngModel"],[3,"formCtrl"],["featureTree",""],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","fw-bold",3,"disabled","click"],["type","submit",1,"btn","btn-primary","fw-bold",3,"disabled","buttonBusy","busyText"],[1,"fa","fa-save"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0,1),e.NdJ("onShown",function(){return i.onShown()}),e.TgZ(2,"div",2)(3,"div",3),e.YNc(4,u,26,16,"form",4),e.qZA()()()),2&n&&(e.Q6J("config",e.VKq(2,h,!i.saving)),e.xp6(4),e.Q6J("ngIf",i.active))},dependencies:[f.mk,f.O5,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.nD,d.On,d.F,Z.wW,Z.AH,C.L,y.s,r.Z,s.y],encapsulation:2})}return o})();var P=l(24591),k=l(3291);const Q=["createModal"],z=["featureTree"],T=function(o){return{edited:o}};function F(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",41)(1,"div",42)(2,"div",12)(3,"label",43),e._uU(4),e.ALo(5,"localize"),e.qZA(),e.TgZ(6,"div",44)(7,"span",45),e._uU(8),e.qZA(),e.TgZ(9,"input",46,47),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.edition.edition.dailyPrice=i)}),e.qZA()(),e._UZ(11,"validation-messages",16),e.qZA()(),e.TgZ(12,"div",42)(13,"div",12)(14,"label",48),e._uU(15),e.ALo(16,"localize"),e.qZA(),e.TgZ(17,"div",44)(18,"span",45),e._uU(19),e.qZA(),e.TgZ(20,"input",49,50),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.edition.edition.weeklyPrice=i)}),e.qZA()(),e._UZ(22,"validation-messages",16),e.qZA()(),e.TgZ(23,"div",42)(24,"div",12)(25,"label",51),e._uU(26),e.ALo(27,"localize"),e.qZA(),e.TgZ(28,"div",44)(29,"span",45),e._uU(30),e.qZA(),e.TgZ(31,"input",52,53),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.edition.edition.monthlyPrice=i)}),e.qZA()(),e._UZ(33,"validation-messages",16),e.qZA()(),e.TgZ(34,"div",42)(35,"div",12)(36,"label",54),e._uU(37),e.ALo(38,"localize"),e.qZA(),e.TgZ(39,"div",44)(40,"span",45),e._uU(41),e.qZA(),e.TgZ(42,"input",55,56),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.edition.edition.annualPrice=i)}),e.qZA()(),e._UZ(44,"validation-messages",16),e.qZA()()()}if(2&o){const t=e.MAs(10),n=e.MAs(21),i=e.MAs(32),a=e.MAs(43),p=e.oxw(2);e.xp6(4),e.Oqu(e.lcZ(5,28,"DailyPrice")),e.xp6(4),e.hij(" ",p.appSession.application.currencySign," "),e.xp6(1),e.Q6J("ngClass",e.VKq(36,T,p.edition.edition.dailyPrice))("required",!p.isFree)("ngModel",p.edition.edition.dailyPrice)("imask",p.currencyMask),e.xp6(2),e.Q6J("formCtrl",t),e.xp6(4),e.hij(" ",e.lcZ(16,30,"WeeklyPrice")," "),e.xp6(4),e.hij(" ",p.appSession.application.currencySign," "),e.xp6(1),e.Q6J("ngClass",e.VKq(38,T,p.edition.edition.weeklyPrice))("required",!p.isFree)("ngModel",p.edition.edition.weeklyPrice)("imask",p.currencyMask),e.xp6(2),e.Q6J("formCtrl",n),e.xp6(4),e.hij(" ",e.lcZ(27,32,"MonthlyPrice")," "),e.xp6(4),e.hij(" ",p.appSession.application.currencySign," "),e.xp6(1),e.Q6J("ngClass",e.VKq(40,T,p.edition.edition.monthlyPrice))("required",!p.isFree)("ngModel",p.edition.edition.monthlyPrice)("imask",p.currencyMask),e.xp6(2),e.Q6J("formCtrl",i),e.xp6(4),e.hij(" ",e.lcZ(38,34,"AnnualPrice")," "),e.xp6(4),e.hij(" ",p.appSession.application.currencySign," "),e.xp6(1),e.Q6J("ngClass",e.VKq(42,T,p.edition.edition.annualPrice))("required",!p.isFree)("ngModel",p.edition.edition.annualPrice)("imask",p.currencyMask),e.xp6(2),e.Q6J("formCtrl",a)}}function G(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",57)(1,"label",58),e._uU(2),e.ALo(3,"localize"),e.qZA(),e.TgZ(4,"input",59,60),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.edition.edition.trialDayCount=i)}),e.qZA(),e._UZ(6,"validation-messages",16),e.qZA()}if(2&o){const t=e.MAs(5),n=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,5,"TrialDayCount")," "),e.xp6(2),e.Q6J("required",n.isTrialActive)("ngModel",n.edition.edition.trialDayCount)("ngClass",e.VKq(7,T,n.edition.edition.trialDayCount)),e.xp6(2),e.Q6J("formCtrl",t)}}function H(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",61)(1,"label",62),e._uU(2),e.ALo(3,"localize"),e.qZA(),e.TgZ(4,"input",63,64),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.edition.edition.waitingDayAfterExpire=i)}),e.qZA(),e._UZ(6,"validation-messages",16),e.qZA()}if(2&o){const t=e.MAs(5),n=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,5,"WaitingDayAfterExpire")," "),e.xp6(2),e.Q6J("required",n.isWaitingDayActive)("ngModel",n.edition.edition.waitingDayAfterExpire)("ngClass",e.VKq(7,T,n.edition.edition.waitingDayAfterExpire)),e.xp6(2),e.Q6J("formCtrl",t)}}function j(o,c){if(1&o&&(e.TgZ(0,"option",68),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.displayText," ")}}function K(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",65)(1,"select",66),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.edition.edition.expiringEditionId=i)}),e.YNc(2,j,2,2,"option",67),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngModel",t.edition.edition.expiringEditionId),e.uIk("min",t.expireAction==t.expireActionEnum.AssignToAnotherEdition?1:0),e.xp6(1),e.Q6J("ngForOf",t.expiringEditions)}}function Y(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.save())}),e.TgZ(2,"div",7)(3,"h5",8)(4,"span"),e._uU(5),e.ALo(6,"localize"),e.qZA()(),e.TgZ(7,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e.qZA()(),e.TgZ(8,"div",10)(9,"tabset")(10,"tab",11),e.ALo(11,"localize"),e.TgZ(12,"div",12)(13,"label",13),e._uU(14),e.ALo(15,"localize"),e.qZA(),e.TgZ(16,"input",14,15),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.edition.edition.displayName=i)}),e.qZA(),e._UZ(18,"validation-messages",16),e.qZA(),e.TgZ(19,"label",17),e._uU(20),e.ALo(21,"localize"),e.qZA(),e.TgZ(22,"div",18)(23,"label",19)(24,"input",20),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.isFree=i)})("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.resetPrices(i))}),e.qZA(),e.TgZ(25,"span",21),e._uU(26),e.ALo(27,"localize"),e.qZA()(),e.TgZ(28,"label",22)(29,"input",23),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.isFree=i)}),e.qZA(),e.TgZ(30,"span",21),e._uU(31),e.ALo(32,"localize"),e.qZA()()(),e.YNc(33,F,45,44,"div",24),e.TgZ(34,"div",25)(35,"label",26)(36,"input",27),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.isTrialActive=i)}),e.qZA(),e.TgZ(37,"span",21),e._uU(38),e.ALo(39,"localize"),e.qZA()(),e.YNc(40,G,7,9,"div",28),e.TgZ(41,"label",26)(42,"input",29),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.isWaitingDayActive=i)}),e.qZA(),e.TgZ(43,"span",21),e._uU(44),e.ALo(45,"localize"),e.qZA()(),e.YNc(46,H,7,9,"div",30),e.TgZ(47,"label",17),e._uU(48),e.ALo(49,"localize"),e.qZA(),e.TgZ(50,"div",18)(51,"label",31)(52,"input",32),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.expireAction=i)})("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.removeExpiringEdition(i))}),e.qZA(),e.TgZ(53,"span",21),e._uU(54),e.ALo(55,"localize"),e.qZA()(),e.TgZ(56,"label",33)(57,"input",34),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.expireAction=i)}),e.qZA(),e.TgZ(58,"span",21),e._uU(59),e.ALo(60,"localize"),e.qZA()()(),e.YNc(61,K,3,3,"div",35),e.qZA()(),e.TgZ(62,"tab",11),e.ALo(63,"localize"),e._UZ(64,"feature-tree",null,36),e.qZA()()(),e.TgZ(66,"div",37)(67,"button",38),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e._uU(68),e.ALo(69,"localize"),e.qZA(),e.TgZ(70,"button",39),e._UZ(71,"i",40),e.TgZ(72,"span"),e._uU(73),e.ALo(74,"localize"),e.qZA()()()()}if(2&o){const t=e.MAs(1),n=e.MAs(17),i=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,37,"CreateNewEdition")),e.xp6(2),e.Q6J("disabled",i.saving),e.uIk("aria-label",i.l("Close")),e.xp6(3),e.s9C("heading",e.lcZ(11,39,"EditionProperties")),e.xp6(4),e.hij(" ",e.lcZ(15,41,"EditionName")," * "),e.xp6(2),e.Q6J("ngModel",i.edition.edition.displayName),e.xp6(2),e.Q6J("formCtrl",n),e.xp6(2),e.Oqu(e.lcZ(21,43,"SubscriptionPrice")),e.xp6(4),e.Q6J("ngModel",i.isFree)("value",!0),e.xp6(2),e.hij(" ",e.lcZ(27,45,"Free")," "),e.xp6(3),e.Q6J("ngModel",i.isFree)("value",!1),e.xp6(2),e.hij(" ",e.lcZ(32,47,"Paid")," "),e.xp6(2),e.Q6J("ngIf",!i.isFree),e.xp6(1),e.Q6J("hidden",i.isFree),e.xp6(2),e.Q6J("ngModel",i.isTrialActive),e.xp6(2),e.hij(" ",e.lcZ(39,49,"IsTrialActive")," "),e.xp6(2),e.Q6J("ngIf",i.isTrialActive),e.xp6(2),e.Q6J("ngModel",i.isWaitingDayActive),e.xp6(2),e.hij(" ",e.lcZ(45,51,"WaitAfterSubscriptionExpireDate")," "),e.xp6(2),e.Q6J("ngIf",i.isWaitingDayActive),e.xp6(2),e.Oqu(e.lcZ(49,53,"WhatWillDoneAfterSubscriptionExpiry")),e.xp6(4),e.Q6J("ngModel",i.expireAction)("value",i.expireActionEnum.DeactiveTenant),e.xp6(2),e.hij(" ",e.lcZ(55,55,"DeactiveTenant")," "),e.xp6(3),e.Q6J("ngModel",i.expireAction)("value",i.expireActionEnum.AssignToAnotherEdition),e.xp6(2),e.hij(" ",e.lcZ(60,57,"AssignToAnotherEdition")," "),e.xp6(2),e.Q6J("ngIf",i.expireAction==i.expireActionEnum.AssignToAnotherEdition),e.xp6(1),e.s9C("heading",e.lcZ(63,59,"Features")),e.xp6(5),e.Q6J("disabled",i.saving),e.xp6(1),e.hij(" ",e.lcZ(69,61,"Cancel")," "),e.xp6(2),e.Q6J("disabled",!t.form.valid)("buttonBusy",i.saving)("busyText",i.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(e.lcZ(74,63,"Save"))}}const O=function(o){return{backdrop:"static",keyboard:o}};let W=(()=>{class o extends v.c{constructor(t,n,i){super(t),this._editionService=n,this._commonLookupService=i,this.modalSave=new e.vpe,this.active=!1,this.saving=!1,this.currencyMask={mask:Number,scale:2,signed:!0,radix:"."},this.edition=new _.de3,this.expiringEditions=[],this.expireAction=A.DeactiveTenant,this.expireActionEnum=A,this.isFree=!0,this.isTrialActive=!1,this.isWaitingDayActive=!1}show(t){this.active=!0,this._commonLookupService.getEditionsForCombobox(!0).subscribe(n=>{this.expiringEditions=n.items,this.expiringEditions.unshift(new _.p3d({value:null,displayText:this.l("NotAssigned"),isSelected:!0})),this._editionService.getEditionForEdit(t).subscribe(i=>{this.featureTree.editData=i,this.modal.show()})})}onShown(){document.getElementById("EditionDisplayName").focus()}resetPrices(t){this.edition.edition.annualPrice=void 0,this.edition.edition.monthlyPrice=void 0}removeExpiringEdition(t){this.edition.edition.expiringEditionId=null}save(){if(!this.featureTree.areAllValuesValid())return void this.message.warn(this.l("InvalidFeaturesWarning"));const t=new _.de3;t.edition=this.edition.edition,t.featureValues=this.featureTree.getGrantedFeatures(),this.isTrialActive||(this.edition.edition.trialDayCount=null),this.saving=!0,this._editionService.createEdition(t).pipe((0,x.x)(()=>this.saving=!1)).subscribe(()=>{this.notify.info(this.l("SavedSuccessfully")),this.close(),this.modalSave.emit(null)})}close(){this.active=!1,this.modal.hide()}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(e.zs3),e.Y36(_.GnT),e.Y36(_.P0Z))};static#i=this.\u0275cmp=e.Xpm({type:o,selectors:[["createEditionModal"]],viewQuery:function(n,i){if(1&n&&(e.Gf(Q,7),e.Gf(z,5)),2&n){let a;e.iGM(a=e.CRH())&&(i.modal=a.first),e.iGM(a=e.CRH())&&(i.featureTree=a.first)}},outputs:{modalSave:"modalSave"},features:[e.qOj],decls:5,vars:4,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","createModal","aria-hidden","true",1,"modal","fade",3,"config","onShown"],["createModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],["novalidate","",3,"ngSubmit",4,"ngIf"],["novalidate","",3,"ngSubmit"],["editionForm","ngForm"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"p-5",3,"heading"],[1,"mb-5"],["for","EditionDisplayName",1,"form-label"],["id","EditionDisplayName","type","text","name","EditionDisplayName","required","","maxlength","64",1,"form-control",3,"ngModel","ngModelChange"],["editionNameInput","ngModel"],[3,"formCtrl"],[1,"form-label"],[1,"d-flex","mb-5"],["for","EditEdition_IsFree",1,"form-check","form-check-custom","form-check-solid","me-5"],["id","EditEdition_IsFree","name","SubscriptionPrice","type","radio",1,"form-check-input",3,"ngModel","value","ngModelChange"],[1,"form-check-label"],["for","EditEdition_IsPaid",1,"form-check","form-check-custom","form-check-solid"],["id","EditEdition_IsPaid","name","SubscriptionPrice","type","radio",1,"form-check-input",3,"ngModel","value","ngModelChange"],["class","row",4,"ngIf"],[1,"paid-features",3,"hidden"],[1,"form-check","form-check-custom","form-check-solid","py-1","mb-5"],["id","EditEdition_IsTrialActive","type","checkbox","name","isTrialActive",1,"form-check-input",3,"ngModel","ngModelChange"],["class","mb-5 trial-day-count",4,"ngIf"],["id","EditEdition_IsWaitingDayActive","type","checkbox","name","IsWaitingDayActive",1,"form-check-input",3,"ngModel","ngModelChange"],["class","mb-5 waiting-day-after-expire",4,"ngIf"],["for","EditEdition_ExpireAction_DeactiveUser",1,"form-check","form-check-custom","form-check-solid","me-5"],["id","EditEdition_ExpireAction_DeactiveUser","name","ExpireAction","type","radio",1,"form-check-input",3,"ngModel","value","ngModelChange"],["for","EditEdition_ExpireAction_AssignEdition",1,"form-check","form-check-custom","form-check-solid","me-5"],["id","EditEdition_ExpireAction_AssignEdition","name","ExpireAction","type","radio",1,"form-check-input",3,"ngModel","value","ngModelChange"],["class","mb-5 edition-list",4,"ngIf"],["featureTree",""],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","fw-bold",3,"disabled","click"],["type","submit",1,"btn","btn-primary","fw-bold",3,"disabled","buttonBusy","busyText"],[1,"fa","fa-save"],[1,"row"],[1,"col-md-6"],["for","DailyPrice",1,"form-label"],[1,"input-group"],[1,"input-group-text"],["type","text","name","DailyPrice","id","DailyPrice","autocomplete","new-password",1,"form-control",3,"ngClass","required","ngModel","imask","ngModelChange"],["dailyPriceInput","ngModel"],["for","WeeklyPrice",1,"form-label"],["type","text","name","WeeklyPrice","id","WeeklyPrice","autocomplete","new-password",1,"form-control",3,"ngClass","required","ngModel","imask","ngModelChange"],["weeklyPriceInput","ngModel"],["for","MonthlyPrice",1,"form-label"],["type","text","name","MonthlyPrice","id","MonthlyPrice","autocomplete","new-password",1,"form-control",3,"ngClass","required","ngModel","imask","ngModelChange"],["monthlyPriceInput","ngModel"],["for","AnnualPrice",1,"form-label"],["type","text","name","AnnualPrice","id","AnnualPrice","autocomplete","new-password",1,"form-control",3,"ngClass","required","ngModel","imask","ngModelChange"],["annualPriceInput","ngModel"],[1,"mb-5","trial-day-count"],["for","TrialDayCount",1,"form-label"],["type","number","name","TrialDayCount","id","TrialDayCount",1,"form-control",3,"required","ngModel","ngClass","ngModelChange"],["trialDayCountInput","ngModel"],[1,"mb-5","waiting-day-after-expire"],["for","WaitingDayAfterExpire",1,"form-label"],["type","number","name","WaitingDayAfterExpire","id","WaitingDayAfterExpire",1,"form-control",3,"required","ngModel","ngClass","ngModelChange"],["waitingDayAfterExpireInput","ngModel"],[1,"mb-5","edition-list"],["name","expiringEdition",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0,1),e.NdJ("onShown",function(){return i.onShown()}),e.TgZ(2,"div",2)(3,"div",3),e.YNc(4,Y,75,65,"form",4),e.qZA()()()),2&n&&(e.Q6J("config",e.VKq(2,O,!i.saving)),e.xp6(4),e.Q6J("ngIf",i.active))},dependencies:[f.mk,f.sg,f.O5,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d._,d.JJ,d.JL,d.Q7,d.nD,d.On,d.F,Z.wW,Z.AH,C.L,y.s,P.An,r.Z,s.y,k.F],encapsulation:2})}return o})();var B=l(15047);const V=["editModal"];function R(o,c){if(1&o&&(e.TgZ(0,"option",21),e._uU(1),e.qZA()),2&o){const t=c.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.displayText," ")}}const $=function(){return["/app/admin/tenants"]},X=function(o){return{editionId:o}};function ee(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"form",5,6),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.save())}),e.TgZ(2,"div",7)(3,"h5",8)(4,"span"),e._uU(5),e.ALo(6,"localize"),e.qZA()(),e.TgZ(7,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e.qZA()(),e.TgZ(8,"div",10)(9,"div",11)(10,"a",12),e._uU(11),e.ALo(12,"localize"),e.qZA()(),e.TgZ(13,"div",11)(14,"label",13),e._uU(15),e.ALo(16,"localize"),e.qZA(),e.TgZ(17,"select",14),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw();return e.KtG(a.moveTenantsInput.targetEditionId=i)}),e.TgZ(18,"option",15),e._uU(19),e.ALo(20,"localize"),e.qZA(),e.YNc(21,R,2,2,"option",16),e.qZA()()(),e.TgZ(22,"div",17)(23,"button",18),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e._uU(24),e.qZA(),e.TgZ(25,"button",19),e._UZ(26,"i",20),e.TgZ(27,"span"),e._uU(28),e.qZA()()()()}if(2&o){const t=e.MAs(1),n=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,16,"MoveTenantsOfEdition")),e.xp6(2),e.uIk("aria-label",n.l("Close")),e.xp6(3),e.Q6J("href",n.appBaseUrl+"/app/admin/tenants?editionId="+n.moveTenantsInput.sourceEditionId,e.LSH)("routerLink",e.DdM(25,$))("queryParams",e.VKq(26,X,n.moveTenantsInput.sourceEditionId)),e.xp6(1),e.hij(" ",e.xi3(12,18,"MoveTenantsOfEditionDescription",n.tenantCount)," "),e.xp6(4),e.Oqu(e.lcZ(16,21,"Edition")),e.xp6(2),e.Q6J("ngModel",n.moveTenantsInput.targetEditionId),e.xp6(2),e.Oqu(e.lcZ(20,23,"Select")),e.xp6(2),e.Q6J("ngForOf",n.targetEditions),e.xp6(2),e.Q6J("disabled",n.saving),e.xp6(1),e.hij(" ",n.l("Cancel")," "),e.xp6(1),e.Q6J("disabled",!t.form.valid)("buttonBusy",n.saving)("busyText",n.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(n.l("Save"))}}const ie=function(){return{backdrop:"static"}};let te=(()=>{class o extends v.c{constructor(t,n,i){super(t),this._editionService=n,this._commonLookupService=i,this.active=!1,this.saving=!1,this.appBaseUrl="",this.tenantCount=0,this.moveTenantsInput=new _.U92,this.targetEditions=[]}show(t){this.active=!0,this.moveTenantsInput.sourceEditionId=t,this._commonLookupService.getEditionsForCombobox(void 0).subscribe(n=>{this.targetEditions=n.items,this.modal.show()}),this._editionService.getTenantCount(t).subscribe(n=>{this.tenantCount=n,this.appBaseUrl=B.g.appBaseUrl})}save(){this.saving=!0,this._editionService.moveTenantsToAnotherEdition(this.moveTenantsInput).pipe((0,x.x)(()=>this.saving=!1)).subscribe(()=>{this.notify.info(this.l("MoveTenantsToAnotherEditionStartedNotification")),this.close()})}close(){this.active=!1,this.modal.hide()}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(e.zs3),e.Y36(_.GnT),e.Y36(_.P0Z))};static#i=this.\u0275cmp=e.Xpm({type:o,selectors:[["moveTenantsToAnotherEditionModal"]],viewQuery:function(n,i){if(1&n&&e.Gf(V,7),2&n){let a;e.iGM(a=e.CRH())&&(i.modal=a.first)}},features:[e.qOj],decls:5,vars:3,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","editModal","aria-hidden","true",1,"modal","fade",3,"config"],["editModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],["novalidate","",3,"ngSubmit",4,"ngIf"],["novalidate","",3,"ngSubmit"],["MoveTenantsForm","ngForm"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mb-5"],["target","_blank",3,"href","routerLink","queryParams"],[1,"form-label"],["name","expiringEdition","required","",1,"form-select",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","fw-bold",3,"disabled","click"],["type","submit",1,"btn","btn-primary","fw-bold",3,"disabled","buttonBusy","busyText"],[1,"fa","fa-save"],[3,"value"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3),e.YNc(4,ee,29,28,"form",4),e.qZA()()()),2&n&&(e.Q6J("config",e.DdM(2,ie)),e.xp6(4),e.Q6J("ngIf",i.active))},dependencies:[f.sg,f.O5,d._Y,d.YN,d.Kr,d.EJ,d.JJ,d.JL,d.Q7,d.On,d.F,M.rH,C.L,r.Z,k.F],encapsulation:2})}return o})();var ne=l(83410),oe=l(98155);const ae=["createEditionModal"],le=["editEditionModal"],de=["moveTenantsToAnotherEditionModal"],re=["dataTable"],se=["paginator"];function ce(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.createEdition())}),e._UZ(1,"i",18),e.TgZ(2,"span",19),e._uU(3),e.ALo(4,"localize"),e.qZA()()}2&o&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"CreateNewEdition")," "))}const pe=function(){return["Pages.Editions.Edit","Pages.Editions.Delete"]};function ue(o,c){1&o&&(e.TgZ(0,"tr")(1,"th",20),e.ALo(2,"permissionAny"),e._uU(3),e.ALo(4,"localize"),e.qZA(),e.TgZ(5,"th"),e._uU(6),e.ALo(7,"localize"),e.qZA(),e.TgZ(8,"th"),e._uU(9),e.ALo(10,"localize"),e.qZA(),e.TgZ(11,"th"),e._uU(12),e.ALo(13,"localize"),e.qZA(),e.TgZ(14,"th"),e._uU(15),e.ALo(16,"localize"),e.qZA(),e.TgZ(17,"th"),e._uU(18),e.ALo(19,"localize"),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("hidden",!e.lcZ(2,7,e.DdM(21,pe))),e.xp6(2),e.hij(" ",e.lcZ(4,9,"Actions")," "),e.xp6(3),e.hij(" ",e.lcZ(7,11,"EditionName")," "),e.xp6(3),e.hij(" ",e.lcZ(10,13,"Price")," "),e.xp6(3),e.hij(" ",e.lcZ(13,15,"IsTrialActive")," "),e.xp6(3),e.hij(" ",e.lcZ(16,17,"WaitingDayAfterExpire")," "),e.xp6(3),e.hij(" ",e.lcZ(19,19,"ExpiringEdition")," "))}function me(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"li",31)(1,"a",32),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2).$implicit;e.oxw();const a=e.MAs(21);return e.KtG(a.show(i.id))}),e._uU(2),e.ALo(3,"localize"),e.qZA()()}2&o&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"Edit")," "))}function _e(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"li",31)(1,"a",32),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2).$implicit,a=e.oxw();return e.KtG(a.deleteEdition(i))}),e._uU(2),e.ALo(3,"localize"),e.qZA()()}2&o&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"Delete")," "))}function ge(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"li",31)(1,"a",32),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2).$implicit;e.oxw();const a=e.MAs(23);return e.KtG(a.show(i.id))}),e._uU(2),e.ALo(3,"localize"),e.qZA()()}2&o&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"MoveTenantsToAnotherEdition")," "))}function fe(o,c){1&o&&(e.TgZ(0,"ul",29),e.YNc(1,me,4,3,"li",30),e.ALo(2,"permission"),e.YNc(3,_e,4,3,"li",30),e.ALo(4,"permission"),e.YNc(5,ge,4,3,"li",30),e.ALo(6,"permission"),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,3,"Pages.Editions.Edit")),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,5,"Pages.Editions.Delete")),e.xp6(2),e.Q6J("ngIf",e.lcZ(6,7,"Pages.Editions.MoveTenantsToAnotherEdition")))}function he(o,c){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"localize"),e.ALo(3,"localize"),e.ALo(4,"localize"),e.ALo(5,"localize"),e.qZA()),2&o){const t=e.oxw().$implicit,n=e.oxw();e.xp6(1),e.qoO([" ",n.appSession.application.currencySign,"",t.dailyPrice," ",e.lcZ(2,12,"Daily")," / ",n.appSession.application.currencySign,"",t.weeklyPrice," ",e.lcZ(3,14,"Weekly")," / ",n.appSession.application.currencySign,"",t.monthlyPrice," ",e.lcZ(4,16,"Monthly")," / ",n.appSession.application.currencySign,"",t.annualPrice," ",e.lcZ(5,18,"Annual")," "])}}function ve(o,c){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"Free")," "))}function xe(o,c){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"localize"),e.ALo(3,"localize"),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.lnq(" ",e.lcZ(2,3,"Yes"),", ",t.trialDayCount," ",e.lcZ(3,5,"Days")," ")}}function Ae(o,c){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"No")," "))}function Ze(o,c){if(1&o&&(e.TgZ(0,"tr")(1,"td",21)(2,"div",22)(3,"button",23),e._UZ(4,"i",24)(5,"span",25),e._uU(6),e.ALo(7,"localize"),e.qZA(),e.YNc(8,fe,7,9,"ul",26),e.qZA()(),e.TgZ(9,"td")(10,"span",27),e._uU(11),e.ALo(12,"localize"),e.qZA(),e._uU(13),e.qZA(),e.TgZ(14,"td")(15,"span",27),e._uU(16),e.ALo(17,"localize"),e.qZA(),e.YNc(18,he,6,20,"span",28),e.YNc(19,ve,3,3,"span",28),e.qZA(),e.TgZ(20,"td")(21,"span",27),e._uU(22),e.ALo(23,"localize"),e.qZA(),e.YNc(24,xe,4,7,"span",28),e.YNc(25,Ae,3,3,"span",28),e.qZA(),e.TgZ(26,"td")(27,"span",27),e._uU(28),e.ALo(29,"localize"),e.qZA(),e._uU(30),e.qZA(),e.TgZ(31,"td")(32,"span",27),e._uU(33),e.ALo(34,"localize"),e.qZA(),e._uU(35),e.qZA()()),2&o){const t=c.$implicit;e.xp6(6),e.hij(" ",e.lcZ(7,13,"Actions")," "),e.xp6(5),e.Oqu(e.lcZ(12,15,"EditionName")),e.xp6(2),e.hij(" ",t.displayName," "),e.xp6(3),e.Oqu(e.lcZ(17,17,"Price")),e.xp6(2),e.Q6J("ngIf",t.dailyPrice||t.weeklyPrice||t.monthlyPrice||t.annualPrice),e.xp6(1),e.Q6J("ngIf",!(t.dailyPrice||t.weeklyPrice||t.monthlyPrice||t.annualPrice)),e.xp6(3),e.Oqu(e.lcZ(23,19,"IsTrialActive")),e.xp6(2),e.Q6J("ngIf",t.trialDayCount),e.xp6(1),e.Q6J("ngIf",!t.trialDayCount),e.xp6(3),e.Oqu(e.lcZ(29,21,"WaitingDayAfterExpire")),e.xp6(2),e.hij(" ",t.waitingDayAfterExpire," "),e.xp6(3),e.Oqu(e.lcZ(34,23,"ExpiringEdition")),e.xp6(2),e.hij(" ",t.expiringEditionDisplayName," ")}}function Te(o,c){1&o&&(e.TgZ(0,"div",33),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&o&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NoData")," "))}const Me=function(){return{"min-width":"50rem"}},Ee=[{path:"",component:(()=>{class o extends v.c{constructor(t,n){super(t),this._editionService=n}getEditions(){this.primengTableHelper.showLoadingIndicator(),this._editionService.getEditions().pipe((0,x.x)(()=>this.primengTableHelper.hideLoadingIndicator())).subscribe(t=>{this.primengTableHelper.totalRecordsCount=t.items.length,this.primengTableHelper.records=t.items,this.primengTableHelper.hideLoadingIndicator()})}createEdition(){this.createEditionModal.show()}deleteEdition(t){this.message.confirm(this.l("EditionDeleteWarningMessage",t.displayName),this.l("AreYouSure"),n=>{n&&this._editionService.deleteEdition(t.id).subscribe(()=>{this.getEditions(),this.notify.success(this.l("SuccessfullyDeleted"))})})}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(e.zs3),e.Y36(_.GnT))};static#i=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],viewQuery:function(n,i){if(1&n&&(e.Gf(ae,7),e.Gf(le,7),e.Gf(de,7),e.Gf(re,7),e.Gf(se,7)),2&n){let a;e.iGM(a=e.CRH())&&(i.createEditionModal=a.first),e.iGM(a=e.CRH())&&(i.editEditionModal=a.first),e.iGM(a=e.CRH())&&(i.moveTenantsToAnotherEditionModal=a.first),e.iGM(a=e.CRH())&&(i.dataTable=a.first),e.iGM(a=e.CRH())&&(i.paginator=a.first)}},features:[e.qOj],decls:24,vars:20,consts:[[3,"title","description"],["role","actions"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"card","card-custom","gutter-b"],[1,"card-body"],[1,"row","align-items-center"],[1,"col","primeng-datatable-container",3,"busyIf"],[3,"value","rows","paginator","lazy","tableStyle","onLazyLoad"],["dataTable",""],["pTemplate","header"],["pTemplate","body"],["class","primeng-no-data",4,"ngIf"],[1,"ui-table-footer"],[3,"modalSave"],["createEditionModal",""],["editEditionModal",""],["moveTenantsToAnotherEditionModal",""],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus","btn-md-icon"],[1,"d-none","d-md-inline-block"],[2,"width","130px",3,"hidden"],[2,"width","130px","text-align","center"],["dropdown","","placement","bottom left","container","body",1,"btn-group"],["id","dropdownButton","type","button","dropdownToggle","","aria-controls","dropdownMenu",1,"btn","btn-primary","btn-sm","dropdown-toggle"],[1,"fa","fa-cog"],[1,"caret"],["id","dropdownMenu","class","dropdown-menu","role","menu","aria-labelledby","dropdownButton",4,"dropdownMenu"],[1,"p-column-title"],[4,"ngIf"],["id","dropdownMenu","role","menu","aria-labelledby","dropdownButton",1,"dropdown-menu"],["role","menuitem",4,"ngIf"],["role","menuitem"],["href","javascript:;",1,"dropdown-item",3,"click"],[1,"primeng-no-data"]],template:function(n,i){1&n&&(e.TgZ(0,"div")(1,"sub-header",0),e.ALo(2,"localize"),e.ALo(3,"localize"),e.TgZ(4,"div",1),e.YNc(5,ce,5,3,"button",2),e.ALo(6,"permission"),e.qZA()(),e.TgZ(7,"div")(8,"div",3)(9,"div",4)(10,"div",5)(11,"div",6)(12,"p-table",7,8),e.NdJ("onLazyLoad",function(){return i.getEditions()}),e.YNc(14,ue,20,22,"ng-template",9),e.YNc(15,Ze,36,25,"ng-template",10),e.qZA(),e.YNc(16,Te,3,3,"div",11),e._UZ(17,"div",12),e.qZA()()()()(),e.TgZ(18,"createEditionModal",13,14),e.NdJ("modalSave",function(){return i.getEditions()}),e.qZA(),e.TgZ(20,"editEditionModal",13,15),e.NdJ("modalSave",function(){return i.getEditions()}),e.qZA(),e._UZ(22,"moveTenantsToAnotherEditionModal",null,16),e.qZA()),2&n&&(e.Q6J("@routerTransition",void 0),e.xp6(1),e.Q6J("title",e.lcZ(2,13,"Editions"))("description",e.lcZ(3,15,"EditionsHeaderInfo")),e.xp6(4),e.Q6J("ngIf",e.lcZ(6,17,"Pages.Editions.Create")),e.xp6(2),e.Tol(i.containerClass),e.xp6(4),e.Q6J("busyIf",i.primengTableHelper.isLoading),e.xp6(1),e.s9C("rows",i.primengTableHelper.defaultRecordsCountPerPage),e.Q6J("value",i.primengTableHelper.records)("paginator",!1)("lazy",!0)("tableStyle",e.DdM(19,Me)),e.xp6(4),e.Q6J("ngIf",0==i.primengTableHelper.totalRecordsCount))},dependencies:[f.O5,E.Hz,E.Mq,E.TO,N.U,U.iA,L.jx,I.$,q,W,te,k.F,ne.a,oe.G],encapsulation:2,data:{animation:[(0,S.MH)()]}})}return o})(),pathMatch:"full"}];let Ce=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#i=this.\u0275mod=e.oAB({type:o});static#t=this.\u0275inj=e.cJS({imports:[M.Bz.forChild(Ee),M.Bz]})}return o})(),be=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#i=this.\u0275mod=e.oAB({type:o});static#t=this.\u0275inj=e.cJS({imports:[J.o,w.g,Ce]})}return o})()},43136:(D,b,l)=>{l.d(b,{Z:()=>y});var w=l(94138),J=l(45920);var v=l(14818);const f=function _(r,s){return s.length<2?r:(0,v.Z)(r,function x(r,s,m){var g=-1,u=r.length;s<0&&(s=-s>u?0:u+s),(m=m>u?u:m)<0&&(m+=u),u=s>m?0:m-s>>>0,s>>>=0;for(var h=Array(u);++g<u;)h[g]=r[g+s];return h}(s,0,-1))};var E=l(77801);const U=function N(r,s){return s=(0,J.Z)(s,r),null==(r=f(r,s))||delete r[(0,E.Z)(function M(r){var s=null==r?0:r.length;return s?r[s-1]:void 0}(s))]};var L=l(19229),A=Array.prototype.splice;const y=function C(r,s){var m=[];if(!r||!r.length)return m;var g=-1,u=[],h=r.length;for(s=(0,w.Z)(s,3);++g<h;){var q=r[g];s(q,g,r)&&(m.push(q),u.push(g))}return function d(r,s){for(var m=r?s.length:0,g=m-1;m--;){var u=s[m];if(m==g||u!==h){var h=u;(0,L.Z)(u)?A.call(r,u,1):U(r,u)}}}(r,u),m}}}]);