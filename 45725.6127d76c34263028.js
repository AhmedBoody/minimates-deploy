"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[45725],{96559:(w,T,s)=>{s.r(T),s.d(T,{MassNotificationsModule:()=>be});var y=s(71902),A=s(92337),v=s(70916),b=s(41840),m=s(44328),S=s(47530),e=s(99468),z=s(58399),M=s(96814),c=s(56223),k=s(12051),C=s(53279),N=s(94901),L=s(81243),_=s(68027),Z=s(85219),x=s(51712),J=s(68989),q=s(64716),l=s(45513),r=s(42152),p=s(24142),f=s(32925),d=s(3291);const h=["userLookupTableModal"],U=["dataTable"],I=["paginator"];function P(n,g){if(1&n&&(e.TgZ(0,"tr")(1,"th",31),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",32),e._uU(4),e._UZ(5,"p-sortIcon",33),e.qZA()()),2&n){const a=e.oxw();e.xp6(4),e.hij(" ",a.l("Name")," ")}}function O(n,g){if(1&n&&(e.TgZ(0,"tr")(1,"td",31)(2,"p-tableCheckbox",34),e.NdJ("click",function(o){return o.stopPropagation()}),e.qZA()(),e.TgZ(3,"td",35)(4,"span",36),e._uU(5),e.qZA(),e._uU(6),e.qZA()()),2&n){const a=g.$implicit,o=e.oxw();e.xp6(2),e.Q6J("value",a),e.xp6(3),e.Oqu(o.l("Name")),e.xp6(1),e.hij(" ",a.displayName," ")}}function H(n,g){if(1&n&&(e.TgZ(0,"div",37),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.l("NoData")," ")}}const R=function(){return{backdrop:"static"}},D=function(){return{"min-width":"25rem"}};let Q=(()=>{class n extends b.c{constructor(a,o){super(a),this._notificationServiceProxy=o,this.filterText="",this.modalSave=new e.vpe,this.active=!1,this.saving=!1}show(){this.active=!0,this.paginator.rows=5,this.getAll(),this.modal.show()}getAll(a){this.active&&(this.primengTableHelper.shouldResetPaging(a)&&(this.paginator.changePage(0),this.primengTableHelper.records&&this.primengTableHelper.records.length>0)||(this.primengTableHelper.showLoadingIndicator(),this._notificationServiceProxy.getAllUserForLookupTable(this.filterText,this.primengTableHelper.getSorting(this.dataTable),this.primengTableHelper.getSkipCount(this.paginator,a),this.primengTableHelper.getMaxResultCount(this.paginator,a)).subscribe(o=>{this.primengTableHelper.totalRecordsCount=o.totalCount,this.primengTableHelper.records=o.items,this.primengTableHelper.hideLoadingIndicator()})))}reloadPage(){this.paginator.changePage(this.paginator.getPage())}save(){this.active=!1,this.modal.hide(),this.modalSave.emit(this.selectedUsers),this.selectedUsers=[]}close(){this.active=!1,this.modal.hide(),this.selectedUsers=[]}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3),e.Y36(m.IMf))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["user-lookup-table-modal"]],viewQuery:function(o,t){if(1&o&&(e.Gf(h,7),e.Gf(U,7),e.Gf(I,7)),2&o){let i;e.iGM(i=e.CRH())&&(t.modal=i.first),e.iGM(i=e.CRH())&&(t.dataTable=i.first),e.iGM(i=e.CRH())&&(t.paginator=i.first)}},outputs:{modalSave:"modalSave"},features:[e.qOj],decls:40,vars:33,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","userLookupTableModal","aria-hidden","true",1,"modal","fade",3,"config"],["userLookupTableModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"disabled","click"],[1,"card","card-custom","gutter-b"],[1,"card-body"],["autocomplete","off",1,"form"],[1,"row","align-items-center","mb-4"],[1,"col-xl-12"],[1,"my-3"],[1,"input-group"],["name","filterText","autoFocus","","type","text",1,"form-control","m-input",3,"ngModel","placeholder","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"flaticon-search-1"],[1,"row","align-items-center"],[1,"primeng-datatable-container",3,"busyIf"],["ScrollWidth","100%","selectionMode","multiple",3,"value","rows","paginator","lazy","scrollable","tableStyle","selection","onLazyLoad","selectionChange"],["dataTable",""],["pTemplate","header"],["pTemplate","body"],["class","primeng-no-data",4,"ngIf"],[1,"primeng-paging-container"],["styleClass","user-lookup-table-paginator",3,"rows","totalRecords","rowsPerPageOptions","showCurrentPageReport","currentPageReportTemplate","onPageChange"],["paginator",""],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","font-weight-bold",3,"disabled","click"],[1,"btn","btn-primary","font-weight-bold",3,"buttonBusy","busyText","click"],[1,"fa","fa-save"],[2,"width","38px"],["pSortableColumn","displayName",2,"width","150px"],["field","displayName"],[3,"value","click"],[2,"width","150px"],[1,"p-column-title"],[1,"primeng-no-data"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5)(6,"span"),e._uU(7),e.qZA()(),e.TgZ(8,"button",6),e.NdJ("click",function(){return t.close()}),e.qZA()(),e.TgZ(9,"div",7)(10,"div",8)(11,"form",9)(12,"div")(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"input",14),e.NdJ("ngModelChange",function(u){return t.filterText=u}),e.qZA(),e.TgZ(18,"button",15),e.NdJ("click",function(){return t.getAll()}),e._UZ(19,"i",16),e.qZA()()()()()()(),e.TgZ(20,"div",17)(21,"div",18)(22,"p-table",19,20),e.NdJ("onLazyLoad",function(u){return t.getAll(u)})("selectionChange",function(u){return t.selectedUsers=u}),e.YNc(24,P,6,1,"ng-template",21),e.YNc(25,O,7,3,"ng-template",22),e.qZA(),e.YNc(26,H,2,1,"div",23),e.TgZ(27,"div",24)(28,"p-paginator",25,26),e.NdJ("onPageChange",function(u){return t.getAll(u)}),e.ALo(30,"localize"),e.qZA()()()()()(),e.TgZ(31,"div",27)(32,"button",28),e.NdJ("click",function(){return t.close()}),e._uU(33),e.ALo(34,"localize"),e.qZA(),e.TgZ(35,"button",29),e.NdJ("click",function(){return t.save()}),e._UZ(36,"i",30),e.TgZ(37,"span"),e._uU(38),e.ALo(39,"localize"),e.qZA()()()()()()),2&o&&(e.Q6J("config",e.DdM(31,R)),e.xp6(7),e.Oqu(t.l("SearchUser")),e.xp6(1),e.Q6J("disabled",t.saving),e.xp6(9),e.Q6J("ngModel",t.filterText)("placeholder",t.l("SearchWithThreeDot")),e.xp6(4),e.Q6J("busyIf",t.primengTableHelper.isLoading),e.xp6(1),e.s9C("rows",t.primengTableHelper.defaultRecordsCountPerPage),e.Q6J("value",t.primengTableHelper.records)("paginator",!1)("lazy",!0)("scrollable",!0)("tableStyle",e.DdM(32,D))("selection",t.selectedUsers),e.xp6(4),e.Q6J("ngIf",0==t.primengTableHelper.totalRecordsCount),e.xp6(2),e.Q6J("rows",t.primengTableHelper.defaultRecordsCountPerPage)("totalRecords",t.primengTableHelper.totalRecordsCount)("rowsPerPageOptions",t.primengTableHelper.predefinedRecordsCountPerPage)("showCurrentPageReport",!0)("currentPageReportTemplate",e.xi3(30,24,"TotalRecordsCount",t.primengTableHelper.totalRecordsCount)),e.xp6(4),e.Q6J("disabled",t.saving),e.xp6(1),e.hij(" ",e.lcZ(34,27,"Cancel")," "),e.xp6(2),e.Q6J("buttonBusy",t.saving)("busyText",t.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(e.lcZ(39,29,"Save")))},dependencies:[M.O5,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F,l.L,f.h,N.U,_.iA,Z.jx,_.lQ,_.fz,_.UA,_.Mo,x.D,p.Z,d.F],encapsulation:2})}return n})();var G=s(87672);const F=["organizationUnitLookupTableModal"],j=["organizationUnitTree"],Y=function(){return{backdrop:"static"}};let B=(()=>{class n extends b.c{constructor(a,o){super(a),this._organizationUnitServiceProxy=o,this.filterText="",this.modalSave=new e.vpe,this.active=!1,this.saving=!1}show(){this.active=!0,this.modal.show(),this.getOrganizationUnits()}getOrganizationUnits(){this._organizationUnitServiceProxy.getAll().subscribe(a=>{this.allOrganizationUnits=a})}onShown(){this.organizationUnitTree.data={allOrganizationUnits:this.allOrganizationUnits,selectedOrganizationUnits:[]}}save(){this.active=!1,this.modal.hide(),this.modalSave.emit(this.organizationUnitTree.getSelectedOrganizations())}close(){this.active=!1,this.modal.hide()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3),e.Y36(m.OAl))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["organization-unit-lookup-table-modal"]],viewQuery:function(o,t){if(1&o&&(e.Gf(F,7),e.Gf(j,5)),2&o){let i;e.iGM(i=e.CRH())&&(t.modal=i.first),e.iGM(i=e.CRH())&&(t.organizationUnitTree=i.first)}},outputs:{modalSave:"modalSave"},features:[e.qOj],decls:23,vars:14,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","organizationUnitLookupTableModal","aria-hidden","true",1,"modal","fade",3,"config","onShown"],["organizationUnitLookupTableModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"disabled","click"],[1,"card","card-custom","gutter-b"],[1,"card-body"],[1,"row","align-items-center"],[3,"cascadeSelectEnabled"],["organizationUnitTree",""],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","font-weight-bold",3,"disabled","click"],[1,"btn","btn-primary","font-weight-bold",3,"buttonBusy","busyText","click"],[1,"fa","fa-save"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0,1),e.NdJ("onShown",function(){return t.onShown()}),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5)(6,"span"),e._uU(7),e.qZA()(),e.TgZ(8,"button",6),e.NdJ("click",function(){return t.close()}),e.qZA()(),e.TgZ(9,"div",7)(10,"div",8)(11,"div",9),e._UZ(12,"organization-unit-tree",10,11),e.qZA()()(),e.TgZ(14,"div",12)(15,"button",13),e.NdJ("click",function(){return t.close()}),e._uU(16),e.ALo(17,"localize"),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){return t.save()}),e._UZ(19,"i",15),e.TgZ(20,"span"),e._uU(21),e.ALo(22,"localize"),e.qZA()()()()()()),2&o&&(e.Q6J("config",e.DdM(13,Y)),e.xp6(7),e.Oqu(t.l("SearchOrganizationUnit")),e.xp6(1),e.Q6J("disabled",t.saving),e.xp6(4),e.Q6J("cascadeSelectEnabled",!1),e.xp6(3),e.Q6J("disabled",t.saving),e.xp6(1),e.hij(" ",e.lcZ(17,9,"Cancel")," "),e.xp6(2),e.Q6J("buttonBusy",t.saving)("busyText",t.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(e.lcZ(22,11,"Save")))},dependencies:[l.L,p.Z,G.x,d.F],encapsulation:2})}return n})();const K=["createOrEditModal"],E=["userLookupTableModalComponent"],W=["organizationUnitLookupTableModalComponent"];function $(n,g){if(1&n&&(e.TgZ(0,"option",44),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&n){const a=g.$implicit;e.Q6J("value",a),e.xp6(1),e.Oqu(e.lcZ(2,2,a))}}function X(n,g){1&n&&(e.TgZ(0,"small",45),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NotificationTargetNotifierSmsLengthInfo")," "))}function V(n,g){if(1&n){const a=e.EpF();e.TgZ(0,"form",8,9),e.NdJ("ngSubmit",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.save())}),e.TgZ(2,"div",10)(3,"h4",11)(4,"span"),e._uU(5),e.qZA()(),e.TgZ(6,"button",12),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.close())}),e.qZA()(),e.TgZ(7,"div",13)(8,"div",14)(9,"label",15),e._uU(10),e.qZA(),e.TgZ(11,"div",16)(12,"input",17),e.NdJ("ngModelChange",function(t){e.CHM(a);const i=e.oxw();return e.KtG(i.userNames=t)}),e.qZA(),e.TgZ(13,"button",18),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.openSelectUserModal())}),e._UZ(14,"i",19),e._uU(15),e.qZA(),e.TgZ(16,"button",20),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.setUserIdNull())}),e._UZ(17,"i",21),e.qZA()()(),e.TgZ(18,"div",14)(19,"label",22),e._uU(20),e.qZA(),e.TgZ(21,"div",16)(22,"input",23),e.NdJ("ngModelChange",function(t){e.CHM(a);const i=e.oxw();return e.KtG(i.organizationUnitDisplayNames=t)}),e.qZA(),e.TgZ(23,"button",18),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.openSelectOrganizationUnitModal())}),e._UZ(24,"i",19),e._uU(25),e.qZA(),e.TgZ(26,"button",20),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.setOrganizationUnitIdNull())}),e._UZ(27,"i",21),e.qZA()()(),e.TgZ(28,"div",14)(29,"label",24),e._uU(30),e.qZA(),e.TgZ(31,"select",25,26),e.NdJ("ngModelChange",function(t){e.CHM(a);const i=e.oxw();return e.KtG(i.createMassNotificationInput.severity=t)}),e.TgZ(33,"option",27),e._uU(34),e.qZA(),e.TgZ(35,"option",28),e._uU(36),e.qZA(),e.TgZ(37,"option",29),e._uU(38),e.qZA(),e.TgZ(39,"option",30),e._uU(40),e.qZA(),e.TgZ(41,"option",31),e._uU(42),e.qZA()(),e._UZ(43,"validation-messages",32),e.qZA(),e.TgZ(44,"div",14)(45,"label",33),e._uU(46),e.qZA(),e.TgZ(47,"select",34,26),e.NdJ("ngModelChange",function(t){e.CHM(a);const i=e.oxw();return e.KtG(i.createMassNotificationInput.targetNotifiers=t)})("change",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.onTargetNotifiersChanged())}),e._uU(49," > "),e.YNc(50,$,3,4,"option",35),e.qZA(),e.YNc(51,X,3,3,"small",36),e.qZA(),e.TgZ(52,"div",14)(53,"label",37),e._uU(54),e.qZA(),e.TgZ(55,"textarea",38,39),e.NdJ("ngModelChange",function(t){e.CHM(a);const i=e.oxw();return e.KtG(i.createMassNotificationInput.message=t)}),e.qZA(),e._UZ(57,"validation-messages",32),e.qZA()(),e.TgZ(58,"div",40)(59,"button",41),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.close())}),e._uU(60),e.qZA(),e.TgZ(61,"button",42),e._UZ(62,"i",43),e.TgZ(63,"span"),e._uU(64),e.qZA()()()()}if(2&n){const a=e.MAs(1),o=e.MAs(32),t=e.MAs(56),i=e.oxw();e.xp6(5),e.Oqu(i.l("CreateNewMassNotification")),e.xp6(1),e.Q6J("disabled",i.saving),e.xp6(4),e.Oqu(i.l("User")),e.xp6(2),e.Q6J("ngModel",i.userNames),e.xp6(3),e.hij(" ",i.l("Pick")," "),e.xp6(5),e.Oqu(i.l("OrganizationUnit")),e.xp6(2),e.Q6J("ngModel",i.organizationUnitDisplayNames),e.xp6(3),e.hij(" ",i.l("Pick")," "),e.xp6(5),e.Oqu(i.l("Severity")),e.xp6(1),e.Q6J("ngModel",i.createMassNotificationInput.severity),e.xp6(3),e.Oqu(i.l("Info")),e.xp6(2),e.Oqu(i.l("Success")),e.xp6(2),e.Oqu(i.l("Warn")),e.xp6(2),e.Oqu(i.l("Error")),e.xp6(2),e.Oqu(i.l("Fatal")),e.xp6(1),e.Q6J("formCtrl",o),e.xp6(3),e.hij(" ",i.l("TargetNotifiers"),"* "),e.xp6(1),e.Q6J("ngModel",i.createMassNotificationInput.targetNotifiers),e.xp6(3),e.Q6J("ngForOf",i.notifiers),e.xp6(1),e.Q6J("ngIf",i.showSMSTargetNotifierMessage),e.xp6(3),e.Oqu(i.l("Message")),e.xp6(1),e.Q6J("ngModel",i.createMassNotificationInput.message),e.xp6(2),e.Q6J("formCtrl",t),e.xp6(2),e.Q6J("disabled",i.saving),e.xp6(1),e.hij(" ",i.l("Cancel")," "),e.xp6(1),e.Q6J("disabled",!a.form.valid)("buttonBusy",i.saving)("busyText",i.l("SavingWithThreeDot")),e.xp6(3),e.Oqu(i.l("Save"))}}let ee=(()=>{class n extends b.c{constructor(a,o){super(a),this._notificationServiceProxy=o,this.modalSave=new e.vpe,this.active=!1,this.saving=!1,this.createMassNotificationInput=new m.hgY,this.userNames="",this.organizationUnitDisplayNames=""}show(){this.createMassNotificationInput=new m.hgY,this.active=!0,this._notificationServiceProxy.getAllNotifiers().subscribe(a=>{this.notifiers=a}),this.modal.show()}save(){this.createMassNotificationInput.message&&""!==this.createMassNotificationInput.message?this.createMassNotificationInput.targetNotifiers&&0!==this.createMassNotificationInput.targetNotifiers.length?this.createMassNotificationInput.userIds&&0!==this.createMassNotificationInput.userIds.length||this.createMassNotificationInput.organizationUnitIds&&0!==this.createMassNotificationInput.organizationUnitIds.length?(this.saving=!0,this._notificationServiceProxy.createMassNotification(this.createMassNotificationInput).pipe((0,q.x)(()=>{this.saving=!1})).subscribe(()=>{this.notify.info(this.l("SavedSuccessfully")),this.close(),this.modalSave.emit(null)})):abp.message.error(this.l("MassNotificationUserOrOrganizationUnitFieldIsRequiredMessage")):abp.message.error(this.l("MassNotificationTargetNotifiersFieldIsRequiredMessage")):abp.message.error(this.l("MassNotificationMessageFieldIsRequiredMessage"))}openSelectUserModal(){this.userLookupTableModalComponent.show()}openSelectOrganizationUnitModal(){this.organizationUnitLookupTableModalComponent.show()}setUserIdNull(){this.createMassNotificationInput.userIds=[],this.userNames=""}setOrganizationUnitIdNull(){this.createMassNotificationInput.organizationUnitIds=[],this.organizationUnitDisplayNames=""}onUsersSelected(a){this.createMassNotificationInput.userIds=a.map(o=>o.id),this.userNames="[ "+a.length+" "+this.l("ItemsSelected")+"] "+a.map(o=>o.displayName).join(", ")}onOrganizationUnitsSelected(a){this.createMassNotificationInput.organizationUnitIds=a.map(o=>o.id),this.organizationUnitDisplayNames="[ "+a.length+" "+this.l("ItemsSelected")+"] "+a.map(o=>o.displayName).join(", ")}close(){this.active=!1,this.modal.hide()}onTargetNotifiersChanged(){this.showSMSTargetNotifierMessage=this.createMassNotificationInput.targetNotifiers.includes("Minimates.Notifications.SmsRealTimeNotifier")}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3),e.Y36(m.IMf))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["create-mass-notification-modal"]],viewQuery:function(o,t){if(1&o&&(e.Gf(K,7),e.Gf(E,7),e.Gf(W,7)),2&o){let i;e.iGM(i=e.CRH())&&(t.modal=i.first),e.iGM(i=e.CRH())&&(t.userLookupTableModalComponent=i.first),e.iGM(i=e.CRH())&&(t.organizationUnitLookupTableModalComponent=i.first)}},outputs:{modalSave:"modalSave"},features:[e.qOj],decls:9,vars:1,consts:[["appBsModal","","tabindex","-1","role","dialog","aria-labelledby","createOrEditModal","aria-hidden","true",1,"modal","fade"],["createOrEditModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],["novalidate","","autocomplete","off",3,"ngSubmit",4,"ngIf"],[3,"modalSave"],["userLookupTableModalComponent",""],["organizationUnitLookupTableModalComponent",""],["novalidate","","autocomplete","off",3,"ngSubmit"],["notificationNewForm","ngForm"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"my-3"],["for","UserName",1,"form-label"],[1,"input-group"],["id","UserName","name","userName","type","text","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","blue",3,"click"],[1,"fa","fa-search"],["type","button",1,"btn","btn-danger","btn-icon",3,"click"],[1,"fa","fa-times"],["for","OrganizationUnitDisplayName",1,"form-label"],["id","OrganizationUnitDisplayName","name","organizationUnitDisplayName","type","text","disabled","",1,"form-control",3,"ngModel","ngModelChange"],["for","MassNotification_Severity",1,"form-label","required"],["required","","name","Severity","id","MassNotification_Severity",1,"form-select",3,"ngModel","ngModelChange"],["MassNotification_Severity","ngModel"],["value","0"],["value","1"],["value","2"],["value","3"],["value","4"],[3,"formCtrl"],["for","MassNotification_TargetNotifiers",1,"form-label"],["name","Severity","multiple","multiple","id","MassNotification_Severity",1,"form-select",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["class","form-text text-muted",4,"ngIf"],["for","MassNotification_Message",1,"form-label","required"],["required","","type","text","id","MassNotification_Message","name","Message",1,"form-control",3,"ngModel","ngModelChange"],["MassNotification_Message","ngModel"],[1,"modal-footer"],["type","button",1,"btn","btn-default",3,"disabled","click"],["type","submit",1,"btn","btn-primary","blue",3,"disabled","buttonBusy","busyText"],[1,"fa","fa-save"],[3,"value"],[1,"form-text","text-muted"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3),e.YNc(4,V,65,29,"form",4),e.qZA()()(),e.TgZ(5,"user-lookup-table-modal",5,6),e.NdJ("modalSave",function(u){return t.onUsersSelected(u)}),e.qZA(),e.TgZ(7,"organization-unit-lookup-table-modal",5,7),e.NdJ("modalSave",function(u){return t.onOrganizationUnitsSelected(u)}),e.qZA()),2&o&&(e.xp6(4),e.Q6J("ngIf",t.active))},dependencies:[M.sg,M.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.K7,c.JJ,c.JL,c.Q7,c.On,c.F,l.L,r.s,p.Z,Q,B,d.F],encapsulation:2})}return n})();var te=s(88922);const ae=["createMassNotificationModalComponent"],oe=["messageDetailModal"],ie=["dataTable"],ne=["paginator"];function se(n,g){if(1&n){const a=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.createMassNotification())}),e._UZ(1,"i",32),e._uU(2),e.qZA()}if(2&n){const a=e.oxw();e.xp6(2),e.hij(" ",a.l("CreateNewMassNotification")," ")}}function le(n,g){if(1&n&&(e.TgZ(0,"tr")(1,"th",33),e._uU(2),e.qZA(),e.TgZ(3,"th",34),e._uU(4),e.qZA(),e.TgZ(5,"th",35),e._uU(6),e.qZA(),e.TgZ(7,"th",34),e._uU(8),e.qZA()()),2&n){const a=e.oxw();e.xp6(2),e.hij(" ",a.l("Message")," "),e.xp6(2),e.hij(" ",a.l("Severity")," "),e.xp6(2),e.hij(" ",a.l("LastModificationTime")," "),e.xp6(2),e.hij(" ",a.l("IsPublished")," ")}}function re(n,g){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const a=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.hij(" ",o.getMessageDataString(a.data)," ")}}function ce(n,g){if(1&n){const a=e.EpF();e.TgZ(0,"button",41),e.NdJ("click",function(){e.CHM(a);const t=e.oxw().$implicit,i=e.oxw();return e.KtG(i.showMessageDetailModal(t.data))}),e._uU(1),e.ALo(2,"localize"),e.qZA()}2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"ShowHTMLData")," "))}function de(n,g){if(1&n){const a=e.EpF();e.TgZ(0,"button",41),e.NdJ("click",function(){e.CHM(a);const t=e.oxw().$implicit,i=e.oxw();return e.KtG(i.showMessageDetailModal(t.data))}),e._uU(1),e.ALo(2,"localize"),e.qZA()}2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"ShowData")," "))}function pe(n,g){1&n&&(e.TgZ(0,"span",42),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"Yes")," "))}function ge(n,g){1&n&&(e.TgZ(0,"span",43),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"No")," "))}function ue(n,g){if(1&n&&(e.TgZ(0,"tr")(1,"td",33)(2,"span",36),e._uU(3),e.qZA(),e.YNc(4,re,2,1,"span",37),e.YNc(5,ce,3,3,"button",38),e.YNc(6,de,3,3,"button",38),e.qZA(),e.TgZ(7,"td",34)(8,"span",36),e._uU(9),e.qZA(),e.TgZ(10,"span"),e._uU(11),e.qZA()(),e.TgZ(12,"td",35)(13,"span",36),e._uU(14),e.qZA(),e._uU(15),e.ALo(16,"luxonFormat"),e.qZA(),e.TgZ(17,"td",34)(18,"span",36),e._uU(19),e.qZA(),e.YNc(20,pe,3,3,"span",39),e.YNc(21,ge,3,3,"span",40),e.qZA()()),2&n){const a=g.$implicit,o=e.oxw();e.xp6(3),e.Oqu(o.l("Name")),e.xp6(1),e.Q6J("ngIf",!o.isHTMLMessage(a.data)),e.xp6(1),e.Q6J("ngIf",o.shouldAddMessageDetailButton(a.data)&&o.isHTMLMessage(a.data)),e.xp6(1),e.Q6J("ngIf",o.shouldAddMessageDetailButton(a.data)&&!o.isHTMLMessage(a.data)),e.xp6(3),e.Oqu(o.l("Severity")),e.xp6(1),e.Tol(o.getSeverityClass(a.severity)),e.xp6(1),e.hij(" ",o.l(o.notificationSeverity[a.severity])," "),e.xp6(3),e.Oqu(o.l("LastModificationTime")),e.xp6(1),e.hij(" ",e.xi3(16,13,a.creationTime,"F")," "),e.xp6(4),e.Oqu(o.l("IsPublished")),e.xp6(1),e.Q6J("ngIf",a.isPublished),e.xp6(1),e.Q6J("ngIf",!a.isPublished)}}function me(n,g){if(1&n&&(e.TgZ(0,"div",44),e._uU(1),e.qZA()),2&n){const a=e.oxw();e.xp6(1),e.hij(" ",a.l("NoData")," ")}}const fe=function(){return{"min-width":"50rem"}},_e=[{path:"",component:(()=>{class n extends b.c{constructor(a,o,t){super(a),this._notificationServiceProxy=o,this._dateTimeService=t,this.dateRange=[this._dateTimeService.getStartOfDayMinusDays(7),this._dateTimeService.getEndOfDay()],this.notificationSeverity=m.qf6,this.messageMaxLength=50}getPublishedNotifications(a){this.primengTableHelper.shouldResetPaging(a)&&(this.paginator.changePage(0),this.primengTableHelper.records&&this.primengTableHelper.records.length>0)||(this.primengTableHelper.showLoadingIndicator(),this._notificationServiceProxy.getNotificationsPublishedByUser(this._dateTimeService.getStartOfDayForDate(this.dateRange[0]),this._dateTimeService.getEndOfDayForDate(this.dateRange[1])).subscribe(o=>{this.primengTableHelper.totalRecordsCount=o.totalCount,this.primengTableHelper.records=o.items,this.primengTableHelper.hideLoadingIndicator()}))}reloadPage(){this.paginator.changePage(this.paginator.getPage())}createMassNotification(){this.createMassNotificationModalComponent.show()}getMessageData(a){return JSON.parse(a).Properties.Message}isHTMLMessage(a){var o=this.getMessageData(a);let t=(new DOMParser).parseFromString(o,"text/html");return[].slice.call(t.body.childNodes).some(i=>1===i.nodeType)}getMessageDataString(a){var o=this.getMessageData(a);return o.length<=this.messageMaxLength?o:o.substring(0,this.messageMaxLength)+"..."}shouldAddMessageDetailButton(a){return this.getMessageData(a).length>this.messageMaxLength}showMessageDetailModal(a){var o=this.getMessageData(a);this.messageDetailString=o,this.messageDetailModal.show()}closeMessageDetailModal(){this.messageDetailModal.hide()}getSeverityClass(a){return a==m.qf6.Warn?"badge badge-warning":a==m.qf6.Success?"badge badge-success":a==m.qf6.Error||a==m.qf6.Fatal?"badge badge-danger":"badge badge-info"}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(e.zs3),e.Y36(m.IMf),e.Y36(z.C))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],viewQuery:function(o,t){if(1&o&&(e.Gf(ae,7),e.Gf(oe,7),e.Gf(ie,7),e.Gf(ne,7)),2&o){let i;e.iGM(i=e.CRH())&&(t.createMassNotificationModalComponent=i.first),e.iGM(i=e.CRH())&&(t.messageDetailModal=i.first),e.iGM(i=e.CRH())&&(t.dataTable=i.first),e.iGM(i=e.CRH())&&(t.paginator=i.first)}},features:[e.qOj],decls:40,vars:32,consts:[[3,"title"],["role","actions"],["class","btn btn-secondary",3,"click",4,"ngIf"],[1,"btn","btn-primary","blue",3,"click"],[1,"la","la-refresh"],[1,"card","card-custom","gutter-b"],[1,"card-body"],["autocomplete","off",1,"form","mb-10"],[1,"row","align-items-center"],[1,"col-xl-12"],["id","StartEndRange","name","StartEndRange","readonly","readonly","bsDaterangepicker","","dateRangePickerLuxonModifier","",1,"form-control",3,"date","dateChange"],["drp","bsDaterangepicker"],[1,"primeng-datatable-container",3,"busyIf"],["ScrollWidth","100%",3,"value","rows","paginator","lazy","scrollable","tableStyle","resizableColumns","onLazyLoad"],["dataTable",""],["pTemplate","header"],["pTemplate","body"],["class","primeng-no-data",4,"ngIf"],[1,"primeng-paging-container"],[3,"rows","totalRecords","rowsPerPageOptions","showCurrentPageReport","currentPageReportTemplate","onPageChange"],["paginator",""],[3,"modalSave"],["createMassNotificationModalComponent",""],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","messageDetailModal","aria-hidden","true",1,"modal","fade"],["messageDetailModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body",3,"innerHTML"],[1,"btn","btn-secondary",3,"click"],[1,"fa","fa-plus"],[2,"min-width","250px"],[2,"max-width","150px"],[2,"max-width","250px"],[1,"p-column-title"],[4,"ngIf"],["class","btn btn-secondary btn-sm",3,"click",4,"ngIf"],["class","badge badge-success",4,"ngIf"],["class","badge badge-dark",4,"ngIf"],[1,"btn","btn-secondary","btn-sm",3,"click"],[1,"badge","badge-success"],[1,"badge","badge-dark"],[1,"primeng-no-data"]],template:function(o,t){1&o&&(e.TgZ(0,"div")(1,"sub-header",0),e.ALo(2,"localize"),e.TgZ(3,"div",1),e.YNc(4,se,3,1,"button",2),e.TgZ(5,"button",3),e.NdJ("click",function(){return t.getPublishedNotifications()}),e._UZ(6,"i",4),e._uU(7),e.qZA()()(),e.TgZ(8,"div")(9,"div",5)(10,"div",6)(11,"form",7)(12,"div")(13,"div",8)(14,"div",9)(15,"input",10,11),e.NdJ("dateChange",function(u){return t.dateRange=u}),e.qZA()()()()(),e.TgZ(17,"div",8)(18,"div",12)(19,"p-table",13,14),e.NdJ("onLazyLoad",function(u){return t.getPublishedNotifications(u)}),e.YNc(21,le,9,4,"ng-template",15),e.YNc(22,ue,22,16,"ng-template",16),e.qZA(),e.YNc(23,me,2,1,"div",17),e.TgZ(24,"div",18)(25,"p-paginator",19,20),e.NdJ("onPageChange",function(u){return t.getPublishedNotifications(u)}),e.ALo(27,"localize"),e.qZA()()()()()()()(),e.TgZ(28,"create-mass-notification-modal",21,22),e.NdJ("modalSave",function(){return t.getPublishedNotifications()}),e.qZA(),e.TgZ(30,"div",23,24)(32,"div",25)(33,"div",26)(34,"div",27)(35,"h4",28),e._uU(36),e.ALo(37,"localize"),e.qZA(),e.TgZ(38,"button",29),e.NdJ("click",function(){return t.closeMessageDetailModal()}),e.qZA()(),e._UZ(39,"div",30),e.qZA()()()),2&o&&(e.Q6J("@routerTransition",void 0),e.xp6(1),e.Q6J("title",e.lcZ(2,24,"MassNotifications")),e.xp6(3),e.Q6J("ngIf",t.isGranted("Pages.Administration.MassNotification")),e.xp6(3),e.hij(" ",t.l("Refresh")," "),e.xp6(1),e.Tol(t.containerClass),e.xp6(7),e.Q6J("date",t.dateRange),e.xp6(3),e.Q6J("busyIf",t.primengTableHelper.isLoading),e.xp6(1),e.s9C("rows",t.primengTableHelper.defaultRecordsCountPerPage),e.Q6J("value",t.primengTableHelper.records)("paginator",!1)("lazy",!0)("scrollable",!0)("tableStyle",e.DdM(31,fe))("resizableColumns",t.primengTableHelper.resizableColumns),e.xp6(4),e.Q6J("ngIf",0==t.primengTableHelper.totalRecordsCount),e.xp6(2),e.Q6J("rows",t.primengTableHelper.defaultRecordsCountPerPage)("totalRecords",t.primengTableHelper.totalRecordsCount)("rowsPerPageOptions",t.primengTableHelper.predefinedRecordsCountPerPage)("showCurrentPageReport",!0)("currentPageReportTemplate",e.xi3(27,26,"TotalRecordsCount",t.primengTableHelper.totalRecordsCount)),e.xp6(11),e.hij(" ",e.lcZ(37,29,"Message")," "),e.xp6(2),e.uIk("aria-label",t.l("Close")),e.xp6(1),e.Q6J("innerHTML",t.messageDetailString,e.oJD))},dependencies:[M.O5,c._Y,c.JL,c.F,k.oB,C.FR,C.TB,N.U,L.t,_.iA,Z.jx,x.D,J.$,ee,te.n,d.F],encapsulation:2,data:{animation:[(0,S.MH)()]}})}return n})(),pathMatch:"full"}];let he=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#a=this.\u0275inj=e.cJS({imports:[v.Bz.forChild(_e),v.Bz]})}return n})(),be=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#a=this.\u0275inj=e.cJS({imports:[A.o,y.g,he]})}return n})()},43136:(w,T,s)=>{s.d(T,{Z:()=>q});var y=s(94138),A=s(45920);var m=s(14818);const M=function z(l,r){return r.length<2?l:(0,m.Z)(l,function S(l,r,p){var f=-1,d=l.length;r<0&&(r=-r>d?0:d+r),(p=p>d?d:p)<0&&(p+=d),d=r>p?0:p-r>>>0,r>>>=0;for(var h=Array(d);++f<d;)h[f]=l[f+r];return h}(r,0,-1))};var c=s(77801);const C=function k(l,r){return r=(0,A.Z)(r,l),null==(l=M(l,r))||delete l[(0,c.Z)(function v(l){var r=null==l?0:l.length;return r?l[r-1]:void 0}(r))]};var N=s(19229),_=Array.prototype.splice;const q=function J(l,r){var p=[];if(!l||!l.length)return p;var f=-1,d=[],h=l.length;for(r=(0,y.Z)(r,3);++f<h;){var U=l[f];r(U,f,l)&&(p.push(U),d.push(f))}return function Z(l,r){for(var p=l?r.length:0,f=p-1;p--;){var d=r[p];if(p==f||d!==h){var h=d;(0,N.Z)(d)?_.call(l,d,1):C(l,d)}}}(l,d),p}}}]);