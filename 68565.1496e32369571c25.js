"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[68565],{85082:(K,M,a)=>{a.d(M,{s:()=>k});var t=a(99468),S=a(41840);class C{constructor(c){c&&(this.name=c.name,this.value=c.value)}}var o=a(44328),T=a(96814),v=a(56223),e=a(12051),A=a(41264),x=a(45513),O=a(42152),E=a(77327),w=a(3291);const u=["headerKeyValueManager"],Z=["createOrEditModal"];function d(s,c){1&s&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"localize"),t.qZA()),2&s&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"EditWebhookSubscription")))}function h(s,c){1&s&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"localize"),t.qZA()),2&s&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"AddNewWebhookSubscription")))}function m(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"div")(1,"div",5)(2,"h4",6),t.YNc(3,d,3,3,"span",4),t.YNc(4,h,3,3,"span",4),t.qZA(),t.TgZ(5,"button",7),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.close())}),t.qZA()(),t.TgZ(6,"div",8)(7,"div",9)(8,"div",10)(9,"label",11),t._uU(10),t.ALo(11,"localize"),t.qZA(),t.TgZ(12,"input",12,13),t.NdJ("ngModelChange",function(l){t.CHM(n);const p=t.oxw();return t.KtG(p.webhookSubscription.webhookUri=l)}),t.qZA(),t._UZ(14,"validation-messages",14),t.qZA(),t.TgZ(15,"div",10)(16,"label",11),t._uU(17),t.ALo(18,"localize"),t.qZA(),t.TgZ(19,"p-autoComplete",15),t.NdJ("ngModelChange",function(l){t.CHM(n);const p=t.oxw();return t.KtG(p.webhooks=l)})("completeMethod",function(l){t.CHM(n);const p=t.oxw();return t.KtG(p.filterWebhooks(l))}),t.qZA()(),t.TgZ(20,"div",16),t._UZ(21,"key-value-list-manager",17,18),t.qZA()()(),t.TgZ(23,"div",19)(24,"button",20),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.close())}),t._uU(25),t.ALo(26,"localize"),t.qZA(),t.TgZ(27,"button",21),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.save())}),t._UZ(28,"i",22),t.TgZ(29,"span"),t._uU(30),t.ALo(31,"localize"),t.qZA()()()()}if(2&s){const n=t.MAs(13),i=t.oxw();t.xp6(3),t.Q6J("ngIf",i.webhookSubscriptionId),t.xp6(1),t.Q6J("ngIf",!i.webhookSubscriptionId),t.xp6(1),t.Q6J("disabled",i.saving),t.uIk("aria-label",i.l("Close")),t.xp6(5),t.Oqu(t.lcZ(11,22,"WebhookEndpoint")),t.xp6(2),t.Q6J("ngModel",i.webhookSubscription.webhookUri),t.xp6(2),t.Q6J("formCtrl",n),t.xp6(3),t.Oqu(t.lcZ(18,24,"WebhookEvents")),t.xp6(2),t.Q6J("ngModel",i.webhooks)("suggestions",i.filteredWebhooks)("minLength",1)("multiple",!0),t.xp6(2),t.Q6J("header",i.l("AdditionalWebhookHeaders"))("keyPlaceHolder",i.l("HeaderKey"))("valuePlaceHolder",i.l("HeaderValue"))("items",i.headers),t.xp6(3),t.Q6J("disabled",i.saving),t.xp6(1),t.hij(" ",t.lcZ(26,26,"Cancel")," "),t.xp6(2),t.Q6J("disabled",!i.webhookSubscription.webhookUri||!i.webhooks||0==i.webhooks.length)("buttonBusy",i.saving)("busyText",i.l("SavingWithThreeDot")),t.xp6(3),t.Oqu(t.lcZ(31,28,"Save"))}}const f=function(s){return{backdrop:"static",keyboard:s}};let k=(()=>{class s extends S.c{constructor(n,i){super(n),this._webhookSubscriptionService=i,this.modalSave=new t.vpe,this.objectKeys=Object.keys,this.webhookSubscription=new o.OUW,this.active=!1,this.saving=!1,this.webhooks=new Array,this.headers=[],this.getAllWebhooks()}show(n){if(this.resetValues(),this.webhookSubscriptionId=n,!n)return this.active=!0,void this.modal.show();this.showMainSpinner(),this._webhookSubscriptionService.getSubscription(n).subscribe(i=>{this.webhookSubscription=i,this.webhooks=this.webhookSubscription.webhooks.map(p=>new C({name:p,value:p}));let l=Object.keys(this.webhookSubscription.headers);this.webhookSubscription.headers&&l.length>0&&(this.headers=l.map(p=>({key:p,value:this.webhookSubscription.headers[p]}))),this.hideMainSpinner(),this.active=!0,this.modal.show()},i=>{this.hideMainSpinner()})}resetValues(){this.webhookSubscription=new o.OUW,this.webhooks=[],this.headers=[]}save(){let n;this.webhookSubscription.webhooks=this.webhooks.map(i=>i.value),this.webhookSubscription.headers={},this.headerKeyValueManager.getItems().forEach(i=>{this.webhookSubscription.headers[i.key]=i.value}),n=this.webhookSubscriptionId?this._webhookSubscriptionService.updateSubscription(this.webhookSubscription):this._webhookSubscriptionService.addSubscription(this.webhookSubscription),n.subscribe(()=>{this.notify.info(this.l("SavedSuccessfully")),this.hideMainSpinner(),this.modalSave.emit(null),this.close()},i=>{this.hideMainSpinner()})}getAllWebhooks(){this._webhookSubscriptionService.getAllAvailableWebhooks().subscribe(n=>{this.allWebhooks=n.items.map(i=>new C({name:i.displayName??i.name,value:i.name}))})}filterWebhooks(n){this.filteredWebhooks=this.allWebhooks.filter(i=>i.name.toLowerCase().includes(n.query.toLowerCase())||i.value.toLowerCase().includes(n.query.toLowerCase()))}close(){this.active=!1,this.modal.hide()}removeHeader(n){document.getElementById("additional-header-"+n).remove(),delete this.webhookSubscription.headers[n]}static#e=this.\u0275fac=function(i){return new(i||s)(t.Y36(t.zs3),t.Y36(o.NpR))};static#t=this.\u0275cmp=t.Xpm({type:s,selectors:[["create-or-edit-webhook-subscription"]],viewQuery:function(i,l){if(1&i&&(t.Gf(u,5),t.Gf(Z,7)),2&i){let p;t.iGM(p=t.CRH())&&(l.headerKeyValueManager=p.first),t.iGM(p=t.CRH())&&(l.modal=p.first)}},outputs:{modalSave:"modalSave"},features:[t.qOj],decls:5,vars:4,consts:[["bsModal","","tabindex","-1","role","dialog","aria-labelledby","createOrEditModal","aria-hidden","true",1,"modal","fade",3,"config"],["createOrEditModal","bs-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],[4,"ngIf"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"mb-5","col-12"],[1,"mb-5"],["for","Name",1,"form-label","required"],["id","WebhookEndpointURL","type","text","placeholder","https://example.com/postreceive","name","Name","required","","pattern","https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)",1,"form-control",3,"ngModel","ngModelChange"],["endPointUrl","ngModel"],[3,"formCtrl"],["field","name","name","MultiSelectInput","id","MultiSelectInput","inputStyleClass","form-control","styleClass","width-percent-100",3,"ngModel","suggestions","minLength","multiple","ngModelChange","completeMethod"],[1,"mb-2"],[3,"header","keyPlaceHolder","valuePlaceHolder","items"],["headerKeyValueManager",""],[1,"modal-footer"],["type","button",1,"btn","btn-light-primary","fw-bold",3,"disabled","click"],["type","button",1,"btn","btn-primary","fw-bold",3,"disabled","buttonBusy","busyText","click"],[1,"fa","fa-save"]],template:function(i,l){1&i&&(t.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3),t.YNc(4,m,32,30,"div",4),t.qZA()()()),2&i&&(t.Q6J("config",t.VKq(2,f,!l.saving)),t.xp6(4),t.Q6J("ngIf",l.active))},dependencies:[T.O5,v.Fj,v.JJ,v.Q7,v.c5,v.On,e.oB,A.k,x.L,O.s,E.Qc,w.F],styles:["#additional-header-list[_ngcontent-%COMP%]{height:auto;overflow-y:auto;background-color:#e5e5e5;padding:5px;resize:vertical}#additional-header-list[_ngcontent-%COMP%]   .alert-text[_ngcontent-%COMP%]{overflow:auto}"]})}return s})()},68565:(K,M,a)=>{a.r(M),a.d(M,{WebhookSubscriptionModule:()=>z});var t=a(71902),S=a(92337),C=a(70916),o=a(41840),T=a(64716),v=a(47530),e=a(99468),A=a(44328),x=a(96814),O=a(94901),E=a(68027),w=a(85219),u=a(68989),Z=a(85082),d=a(3291),h=a(83410);const m=["createOrEditWebhookSubscriptionModal"];function f(r,y){if(1&r){const b=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(b);const _=e.oxw();return e.KtG(_.createSubscription())}),e._UZ(1,"i",23),e.TgZ(2,"span",24),e._uU(3),e.ALo(4,"localize"),e.qZA()()}2&r&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"AddNewWebhookSubscription")," "))}function k(r,y){1&r&&(e.TgZ(0,"tr"),e._UZ(1,"th",25),e.TgZ(2,"th"),e._uU(3),e.ALo(4,"localize"),e.qZA(),e.TgZ(5,"th"),e._uU(6),e.ALo(7,"localize"),e.qZA(),e.TgZ(8,"th"),e._uU(9),e.ALo(10,"localize"),e.qZA()()),2&r&&(e.xp6(3),e.Oqu(e.lcZ(4,3,"WebhookEndpoint")),e.xp6(3),e.Oqu(e.lcZ(7,5,"WebhookEvents")),e.xp6(3),e.Oqu(e.lcZ(10,7,"IsActive")))}function s(r,y){if(1&r&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&r){const b=y.$implicit;e.xp6(1),e.hij(" ",b," ")}}function c(r,y){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,s,2,1,"div",30),e.qZA()),2&r){const b=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",b.webhooks)}}function n(r,y){1&r&&(e.TgZ(0,"span",31),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"Yes")," "))}function i(r,y){1&r&&(e.TgZ(0,"span",32),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"No")," "))}function l(r,y){if(1&r){const b=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"button",26),e.NdJ("click",function(){const W=e.CHM(b).$implicit,I=e.oxw();return e.KtG(I.goToSubscriptionDetail(W.id))}),e._uU(3),e.ALo(4,"localize"),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e.YNc(8,c,2,1,"div",27),e.qZA(),e.TgZ(9,"td"),e.YNc(10,n,3,3,"span",28),e.YNc(11,i,3,3,"span",29),e.qZA()()}if(2&r){const b=y.$implicit;e.xp6(3),e.hij(" ",e.lcZ(4,5,"Details")," "),e.xp6(3),e.hij(" ",b.webhookUri," "),e.xp6(2),e.Q6J("ngIf",b.webhooks),e.xp6(2),e.Q6J("ngIf",b.isActive),e.xp6(1),e.Q6J("ngIf",!b.isActive)}}function p(r,y){1&r&&(e.TgZ(0,"div",33),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NoData")," "))}const L=function(){return{"min-width":"50rem"}},U=[{path:"",component:(()=>{class r extends o.c{constructor(b,g,_){super(b),this._webhookSubscriptionService=g,this._router=_}getSubscriptions(b){this.primengTableHelper.showLoadingIndicator(),this._webhookSubscriptionService.getAllSubscriptions().pipe((0,T.x)(()=>this.primengTableHelper.hideLoadingIndicator())).subscribe(g=>{this.primengTableHelper.totalRecordsCount=g.items.length,this.primengTableHelper.records=g.items,this.primengTableHelper.hideLoadingIndicator()})}createSubscription(){this.createOrEditWebhookSubscriptionModal.show()}goToSubscriptionDetail(b){this._router.navigate(["app/admin/webhook-subscriptions-detail"],{queryParams:{id:b}})}static#e=this.\u0275fac=function(g){return new(g||r)(e.Y36(e.zs3),e.Y36(A.NpR),e.Y36(C.F0))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],viewQuery:function(g,_){if(1&g&&e.Gf(m,7),2&g){let W;e.iGM(W=e.CRH())&&(_.createOrEditWebhookSubscriptionModal=W.first)}},features:[e.qOj],decls:30,vars:23,consts:[[3,"title","description"],["role","actions"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"card","card-custom","gutter-b"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-md-12"],["webhookAlertArea",""],[1,"alert","bg-light-primary","alert-dismissible","d-flex","align-items-center","p-5","mb-10"],[1,"svg-icon","svg-icon-2hx","svg-icon-primary","me-4"],["width","24","height","24","role","img","aria-label","Warning:",1,"flex-shrink-0","me-2"],[0,"xlink","href","#warning-icon"],[1,"d-flex","flex-column"],["type","button","data-bs-dismiss","alert",1,"btn-close","position-absolute","position-sm-relative","m-2","m-sm-0","top-0","end-0","btn","btn-icon","ms-sm-auto",3,"click"],[1,"col","primeng-datatable-container",3,"busyIf"],[3,"value","rows","paginator","lazy","tableStyle","onLazyLoad"],["dataTable",""],["pTemplate","header"],["pTemplate","body"],["class","primeng-no-data",4,"ngIf"],[3,"modalSave"],["createOrEditWebhookSubscriptionModal",""],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus","btn-md-icon"],[1,"d-none","d-md-inline-block"],[2,"width","100px"],[1,"btn","btn-sm","btn-primary",3,"click"],[4,"ngIf"],["class","badge badge-success m-1",4,"ngIf"],["class","badge badge-dark m-1",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"badge","badge-success","m-1"],[1,"badge","badge-dark","m-1"],[1,"primeng-no-data"]],template:function(g,_){if(1&g){const W=e.EpF();e.TgZ(0,"div")(1,"sub-header",0),e.ALo(2,"localize"),e.ALo(3,"localize"),e.TgZ(4,"div",1),e.YNc(5,f,5,3,"button",2),e.ALo(6,"permission"),e.qZA()(),e.TgZ(7,"div")(8,"div",3)(9,"div",4)(10,"div",5)(11,"div",6,7)(13,"div",8)(14,"span",9),e.O4$(),e.TgZ(15,"svg",10),e._UZ(16,"use",11),e.qZA()(),e.kcU(),e.TgZ(17,"div",12)(18,"span"),e._uU(19),e.ALo(20,"localize"),e.qZA()(),e.TgZ(21,"button",13),e.NdJ("click",function(){e.CHM(W);const J=e.MAs(12);return e.KtG(J.remove())}),e.qZA()()(),e.TgZ(22,"div",14)(23,"p-table",15,16),e.NdJ("onLazyLoad",function(J){return _.getSubscriptions(J)}),e.YNc(25,k,11,9,"ng-template",17),e.YNc(26,l,12,7,"ng-template",18),e.qZA(),e.YNc(27,p,3,3,"div",19),e.qZA()()()(),e.TgZ(28,"create-or-edit-webhook-subscription",20,21),e.NdJ("modalSave",function(){return _.getSubscriptions()}),e.qZA()()()}2&g&&(e.Q6J("@routerTransition",void 0),e.xp6(1),e.Q6J("title",e.lcZ(2,14,"WebhookSubscriptions"))("description",e.lcZ(3,16,"WebhookSubscriptionsInfo")),e.xp6(4),e.Q6J("ngIf",e.lcZ(6,18,"Pages.Administration.WebhookSubscription.Create")),e.xp6(2),e.Tol(_.containerClass),e.xp6(12),e.Oqu(e.lcZ(20,20,"WebhookPageInfo")),e.xp6(3),e.Q6J("busyIf",_.primengTableHelper.isLoading),e.xp6(1),e.s9C("rows",_.primengTableHelper.defaultRecordsCountPerPage),e.Q6J("value",_.primengTableHelper.records)("paginator",!1)("lazy",!0)("tableStyle",e.DdM(22,L)),e.xp6(4),e.Q6J("ngIf",0==_.primengTableHelper.totalRecordsCount))},dependencies:[x.sg,x.O5,O.U,E.iA,w.jx,u.$,Z.s,d.F,h.a],styles:[".cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}"],data:{animation:[(0,v.MH)()]}})}return r})(),pathMatch:"full"}];let P=(()=>{class r{static#e=this.\u0275fac=function(g){return new(g||r)};static#t=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[C.Bz.forChild(U),C.Bz]})}return r})(),z=(()=>{class r{static#e=this.\u0275fac=function(g){return new(g||r)};static#t=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[S.o,t.g,P]})}return r})()},41264:(K,M,a)=>{a.d(M,{k:()=>w});var t=a(41840),S=a(59490),C=a(43136),o=a(99468),T=a(96814),v=a(56223),e=a(3291);function A(u,Z){1&u&&(o.TgZ(0,"span"),o._uU(1),o.ALo(2,"localize"),o.qZA()),2&u&&(o.xp6(1),o.Oqu(o.lcZ(2,1,"Add")))}function x(u,Z){1&u&&(o.TgZ(0,"span"),o._uU(1),o.ALo(2,"localize"),o.qZA()),2&u&&(o.xp6(1),o.Oqu(o.lcZ(2,1,"Edit")))}function O(u,Z){if(1&u){const d=o.EpF();o.TgZ(0,"div",10),o._uU(1),o.TgZ(2,"button",11)(3,"span",12),o.NdJ("click",function(){const f=o.CHM(d).$implicit,k=o.oxw(2);return o.KtG(k.removeItem(f))}),o._UZ(4,"i",13),o.qZA()(),o.TgZ(5,"button",14)(6,"span",12),o.NdJ("click",function(){const f=o.CHM(d).$implicit,k=o.oxw(2);return o.KtG(k.openItemEdit(f))}),o._UZ(7,"i",15),o.qZA()()()}if(2&u){const d=Z.$implicit,h=o.oxw(2);o.ekj("alert-white",h.addOrEditKey!==d.key)("alert-warning",h.addOrEditKey===d.key),o.xp6(1),o.AsE(' "',d.key,'" : "',d.value,'" ')}}function E(u,Z){if(1&u&&(o.TgZ(0,"div",8),o.YNc(1,O,8,6,"div",9),o.qZA()),2&u){const d=o.oxw();o.xp6(1),o.Q6J("ngForOf",d.items)}}let w=(()=>{class u extends t.c{constructor(d){super(d),this.addOrEditKey="",this.addOrEditValue="",this.isEdit=!1,this.items||(this.items=[]),this.keyPlaceHolder||this.l("Key"),this.valuePlaceHolder||this.l("Value")}onKeyChange(){let d=(0,S.Z)(this.items,h=>h.key===this.addOrEditKey);this.isEdit=-1!==d,this.isEdit&&(this.addOrEditValue=this.items[d].value)}openItemEdit(d){this.addOrEditKey=d.key,this.addOrEditValue=d.value,this.isEdit=!0}removeItem(d){(0,C.Z)(this.items,h=>h.key===d.key),this.onKeyChange()}addOrEdit(){if(!this.addOrEditKey||!this.addOrEditValue)return;let d={key:this.addOrEditKey,value:this.addOrEditValue},h=(0,S.Z)(this.items,m=>m.key===d.key);-1!==h?this.items.splice(h,1,d):this.items.push(d),this.addOrEditKey="",this.addOrEditValue=""}getItems(){return this.items}static#e=this.\u0275fac=function(h){return new(h||u)(o.Y36(o.zs3))};static#t=this.\u0275cmp=o.Xpm({type:u,selectors:[["key-value-list-manager"]],inputs:{header:"header",keyPlaceHolder:"keyPlaceHolder",valuePlaceHolder:"valuePlaceHolder",items:"items"},features:[o.qOj],decls:10,vars:8,consts:[[1,"mb-2"],[1,"form-label"],[1,"input-group"],["type","text",1,"form-control",3,"ngModel","placeholder","ngModelChange","change"],["type","text",1,"form-control",3,"ngModel","placeholder","ngModelChange"],["type","button",1,"btn","btn-primary",3,"click"],[4,"ngIf"],["class","key-value-items-list",4,"ngIf"],[1,"key-value-items-list"],["class","alert alert-custom alert-white alert-bold m-1 min-h-60px","role","alert",3,"alert-white","alert-warning",4,"ngFor","ngForOf"],["role","alert",1,"alert","alert-custom","alert-white","alert-bold","m-1","min-h-60px"],["type","button","data-dismiss","alert","aria-label","Close",1,"btn","btn-danger","float-end","btn-sm","m-0","p-3"],["aria-hidden","true",3,"click"],[1,"la","la-close","fa-1x","m-0","p-0"],["type","button",1,"btn","btn-primary","float-end","btn-sm","m-0","me-1","p-3"],[1,"la","la-edit","fa-1x","m-0","p-0"]],template:function(h,m){1&h&&(o.TgZ(0,"div",0)(1,"label",1),o._uU(2),o.qZA(),o.TgZ(3,"div",2)(4,"input",3),o.NdJ("ngModelChange",function(k){return m.addOrEditKey=k})("change",function(){return m.onKeyChange()}),o.qZA(),o.TgZ(5,"input",4),o.NdJ("ngModelChange",function(k){return m.addOrEditValue=k}),o.qZA(),o.TgZ(6,"button",5),o.NdJ("click",function(){return m.addOrEdit()}),o.YNc(7,A,3,3,"span",6),o.YNc(8,x,3,3,"span",6),o.qZA()(),o.YNc(9,E,2,1,"div",7),o.qZA()),2&h&&(o.xp6(2),o.Oqu(m.header),o.xp6(2),o.s9C("placeholder",m.keyPlaceHolder),o.Q6J("ngModel",m.addOrEditKey),o.xp6(1),o.s9C("placeholder",m.valuePlaceHolder),o.Q6J("ngModel",m.addOrEditValue),o.xp6(2),o.Q6J("ngIf",!m.isEdit),o.xp6(1),o.Q6J("ngIf",m.isEdit),o.xp6(1),o.Q6J("ngIf",m.items))},dependencies:[T.sg,T.O5,v.Fj,v.JJ,v.On,e.F],styles:[".key-value-items-list[_ngcontent-%COMP%]{height:auto;overflow-y:auto;background-color:#e5e5e5;padding:5px;resize:vertical}.key-value-items-list[_ngcontent-%COMP%]   .alert-text[_ngcontent-%COMP%]{overflow:auto}.key-value-items-list[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{line-height:30px}"]})}return u})()},43136:(K,M,a)=>{a.d(M,{Z:()=>k});var t=a(94138),S=a(45920);var T=a(14818);const x=function A(s,c){return c.length<2?s:(0,T.Z)(s,function v(s,c,n){var i=-1,l=s.length;c<0&&(c=-c>l?0:l+c),(n=n>l?l:n)<0&&(n+=l),l=c>n?0:n-c>>>0,c>>>=0;for(var p=Array(l);++i<l;)p[i]=s[i+c];return p}(c,0,-1))};var O=a(77801);const w=function E(s,c){return c=(0,S.Z)(c,s),null==(s=x(s,c))||delete s[(0,O.Z)(function C(s){var c=null==s?0:s.length;return c?s[c-1]:void 0}(c))]};var u=a(19229),d=Array.prototype.splice;const k=function f(s,c){var n=[];if(!s||!s.length)return n;var i=-1,l=[],p=s.length;for(c=(0,t.Z)(c,3);++i<p;){var L=s[i];c(L,i,s)&&(n.push(L),l.push(i))}return function h(s,c){for(var n=s?c.length:0,i=n-1;n--;){var l=c[n];if(n==i||l!==p){var p=l;(0,u.Z)(l)?d.call(s,l,1):w(s,l)}}}(s,l),n}}}]);