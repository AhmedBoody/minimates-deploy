"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[77213],{77213:(E,g,n)=>{n.r(g),n.d(g,{DynamicEntityPropertyValueModule:()=>v});var e=n(71902),d=n(92337),m=n(70916),t=n(40457),p=n(99468);const h=[{path:"",component:t.J,pathMatch:"full"}];let C=(()=>{class _{static#e=this.\u0275fac=function(T){return new(T||_)};static#t=this.\u0275mod=p.oAB({type:_});static#n=this.\u0275inj=p.cJS({imports:[m.Bz.forChild(h),m.Bz]})}return _})(),v=(()=>{class _{static#e=this.\u0275fac=function(T){return new(T||_)};static#t=this.\u0275mod=p.oAB({type:_});static#n=this.\u0275inj=p.cJS({imports:[d.o,e.g,C]})}return _})()},40457:(E,g,n)=>{n.d(g,{J:()=>c});var e=n(99468),d=n(41840),m=n(44328),t=n(49556),p=n(63686),h=n(96814),C=n(94901),v=n(68027),_=n(85219),V=n(3291),M=n(83410);function T(a,u){1&a&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.ALo(3,"localize"),e.qZA(),e.TgZ(4,"th"),e._uU(5),e.ALo(6,"localize"),e.qZA(),e.TgZ(7,"th",7),e._uU(8),e.ALo(9,"localize"),e.qZA()()),2&a&&(e.xp6(2),e.Oqu(e.lcZ(3,3,"PropertyName")),e.xp6(3),e.Oqu(e.lcZ(6,5,"Values")),e.xp6(3),e.Oqu(e.lcZ(9,7,"Actions")))}function I(a,u){1&a&&e.GkF(0)}function D(a,u){if(1&a){const l=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(l);const f=e.oxw().$implicit,O=e.oxw(2);return e.KtG(O.deleteAllValuesOfDynamicEntityPropertyId(f))}),e._uU(1),e.ALo(2,"localize"),e.qZA()}2&a&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"Delete")," "))}function s(a,u){if(1&a&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.YNc(4,I,1,0,"ng-container",8),e.qZA(),e.TgZ(5,"td"),e.YNc(6,D,3,3,"button",9),e.ALo(7,"permission"),e.qZA()()),2&a){const l=u.$implicit;e.xp6(2),e.hij(" ",l.data.propertyName," "),e.xp6(2),e.Q6J("ngComponentOutlet",l.definition.component)("ngComponentOutletInjector",l.injector),e.xp6(2),e.Q6J("ngIf",e.lcZ(7,4,"Pages.Administration.DynamicEntityPropertyValue.Delete"))}}function y(a,u){1&a&&(e.TgZ(0,"div",11),e._uU(1),e.ALo(2,"localize"),e.qZA()),2&a&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NoData")," "))}function o(a,u){if(1&a&&(e.TgZ(0,"div",1)(1,"p-table",2,3),e.YNc(3,T,10,9,"ng-template",4),e.YNc(4,s,8,6,"ng-template",5),e.qZA(),e.YNc(5,y,3,3,"div",6),e.qZA()),2&a){const l=e.oxw();e.Q6J("busyIf",l.primengTableHelper.isLoading),e.xp6(1),e.Q6J("value",l.items)("paginator",!1),e.xp6(4),e.Q6J("ngIf",0==l.items.length)}}class i{constructor(u,l){this.data=u,this.definition=l}}let c=(()=>{class a extends d.c{constructor(l,r,f){super(l),this._injector=l,this._dynamicEntityPropertyValueService=r,this._inputTypeConfigurationService=f,this.onSaveDone=new e.vpe,this.initialized=!1}ngOnInit(){this.initialize()}initialize(){this.initialized=!1,this._dynamicEntityPropertyValueService.getAllDynamicEntityPropertyValues(this.entityFullName,this.entityId).subscribe(l=>{l.items&&(this.items=l.items.map(r=>{let f=this._inputTypeConfigurationService.getByInputType(r.inputType),O=new i(r,f),A=e.zs3.create({providers:[{provide:t.cT,useValue:r.selectedValues},{provide:t.TH,useValue:r.allValuesInputTypeHas},{provide:t.Ql,useValue:b=>{O.componentInstance=b}}],parent:this._injector});return O.injector=A,O})),this.initialized=!0,this.hideMainSpinner()},l=>{this.hideMainSpinner()})}deleteAllValuesOfDynamicEntityPropertyId(l){this.message.confirm(this.l("DeleteDynamicEntityPropertyValueMessage",l.data.propertyName),this.l("AreYouSure"),r=>{r&&this._dynamicEntityPropertyValueService.cleanValues(new m.RM({dynamicEntityPropertyId:l.data.dynamicEntityPropertyId,entityId:this.entityId})).subscribe(()=>{abp.notify.success(this.l("SuccessfullyDeleted")),this.initialize()})})}saveAll(){if(!this.items||0===this.items.length)return;let l=[];for(let r=0;r<this.items.length;r++){const f=this.items[r];l.push(new m.COX({dynamicEntityPropertyId:f.data.dynamicEntityPropertyId,entityId:this.entityId,values:f.componentInstance.getSelectedValues()}))}this._dynamicEntityPropertyValueService.insertOrUpdateAllValues(new m.O3u({items:l})).subscribe(()=>{abp.notify.success(this.l("SavedSuccessfully")),this.initialize(),this.hideMainSpinner(),this.onSaveDone&&this.onSaveDone.emit()},r=>{this.hideMainSpinner()})}static#e=this.\u0275fac=function(r){return new(r||a)(e.Y36(e.zs3),e.Y36(m.mQH),e.Y36(p.R))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["dynamic-entity-property-value-manager"]],inputs:{entityFullName:"entityFullName",entityId:"entityId"},outputs:{onSaveDone:"onSaveDone"},features:[e.qOj],decls:1,vars:1,consts:[["class","col primeng-datatable-container",3,"busyIf",4,"ngIf"],[1,"col","primeng-datatable-container",3,"busyIf"],[3,"value","paginator"],["dataTable",""],["pTemplate","header"],["pTemplate","body"],["class","primeng-no-data",4,"ngIf"],[2,"width","100px"],[4,"ngComponentOutlet","ngComponentOutletInjector"],["class","btn btn-danger bt-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","bt-sm",3,"click"],[1,"primeng-no-data"]],template:function(r,f){1&r&&e.YNc(0,o,6,4,"div",0),2&r&&e.Q6J("ngIf",f.initialized)},dependencies:[h.$G,h.O5,C.U,v.iA,_.jx,V.F,M.a],encapsulation:2})}return a})()},49556:(E,g,n)=>{n.d(g,{Ql:()=>t,TH:()=>m,cT:()=>d});var e=n(99468);const d=new e.OlP("selectedValues"),m=new e.OlP("allValues"),t=new e.OlP("componentInstance")},63686:(E,g,n)=>{n.d(g,{R:()=>D});var e=n(41840),d=n(49556);class m extends e.c{constructor(y){super(y),this.selectedValues=y.get(d.cT),this.allValues=y.get(d.TH),y.get(d.Ql)(this)}}var t=n(99468),p=n(56223);let h=(()=>{class s extends m{constructor(o){super(o)}getSelectedValues(){return this.selectedValue?[this.selectedValue]:[]}ngOnInit(){this.selectedValue=this.selectedValues[0]}static#e=this.\u0275fac=function(i){return new(i||s)(t.Y36(t.zs3))};static#t=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-single-line-string-input-type"]],features:[t.qOj],decls:1,vars:1,consts:[["type","text",1,"form-control",3,"ngModel","ngModelChange"]],template:function(i,c){1&i&&(t.TgZ(0,"input",0),t.NdJ("ngModelChange",function(u){return c.selectedValue=u}),t.qZA()),2&i&&t.Q6J("ngModel",c.selectedValue)},dependencies:[p.Fj,p.JJ,p.On]})}return s})(),C=(()=>{class s extends m{constructor(o){super(o)}ngOnInit(){this.checked=this.selectedValues&&this.selectedValues[0]&&"true"===this.selectedValues[0]}getSelectedValues(){return[this.checked.toString()]}static#e=this.\u0275fac=function(i){return new(i||s)(t.Y36(t.zs3))};static#t=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-checkbox-input-type"]],features:[t.qOj],decls:4,vars:1,consts:[[1,"checkbox-inline"],[1,"checkbox","checkbox-solid"],["type","checkbox","value","true",3,"ngModel","ngModelChange"]],template:function(i,c){1&i&&(t.TgZ(0,"div",0)(1,"label",1)(2,"input",2),t.NdJ("ngModelChange",function(u){return c.checked=u}),t.qZA(),t._UZ(3,"span"),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngModel",c.checked))},dependencies:[p.Wl,p.JJ,p.On]})}return s})();var v=n(96814);function _(s,y){if(1&s&&(t.TgZ(0,"option",3),t._uU(1),t.qZA()),2&s){const o=y.$implicit;t.Q6J("value",o),t.xp6(1),t.Oqu(o)}}let V=(()=>{class s extends m{constructor(o){super(o)}ngOnInit(){this.selectedValue=this.selectedValues[0]}getSelectedValues(){return this.selectedValue?[this.selectedValue]:[]}static#e=this.\u0275fac=function(i){return new(i||s)(t.Y36(t.zs3))};static#t=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-combobox-input-type"]],features:[t.qOj],decls:3,vars:2,consts:[[1,"form-select",3,"ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(i,c){1&i&&(t.TgZ(0,"select",0),t.NdJ("ngModelChange",function(u){return c.selectedValue=u}),t._UZ(1,"option",1),t.YNc(2,_,2,2,"option",2),t.qZA()),2&i&&(t.Q6J("ngModel",c.selectedValue),t.xp6(2),t.Q6J("ngForOf",c.allValues))},dependencies:[v.sg,p.YN,p.Kr,p.EJ,p.JJ,p.On]})}return s})();var M=n(77327);let T=(()=>{class s extends m{constructor(o){super(o)}ngOnInit(){this.filteredValues=this.allValues}getSelectedValues(){return this.selectedValues?this.selectedValues:[]}filter(o){this.filteredValues=this.allValues.filter(i=>i.toLowerCase().includes(o.query.toLowerCase()))}static#e=this.\u0275fac=function(i){return new(i||s)(t.Y36(t.zs3))};static#t=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-multiple-select-input-type"]],features:[t.qOj],decls:1,vars:4,consts:[["inputStyleClass","form-control","styleClass","width-percent-100",3,"ngModel","suggestions","minLength","multiple","ngModelChange","completeMethod"]],template:function(i,c){1&i&&(t.TgZ(0,"p-autoComplete",0),t.NdJ("ngModelChange",function(u){return c.selectedValues=u})("completeMethod",function(u){return c.filter(u)}),t.qZA()),2&i&&t.Q6J("ngModel",c.selectedValues)("suggestions",c.filteredValues)("minLength",1)("multiple",!0)},dependencies:[p.JJ,p.On,M.Qc],encapsulation:2})}return s})();class I{constructor(y,o,i){this.name=y,this.component=o,this.hasValues=i}}let D=(()=>{class s{constructor(){this.initialize()}getByName(o){let i=this.InputTypeConfigurationDefinitions.filter(c=>c.name===o);return i&&1===i.length?i[0]:null}getByInputType(o){return this.getByName(o.name)}initialize(){let o=new I("SINGLE_LINE_STRING",h,!1),i=new I("CHECKBOX",C,!1),c=new I("COMBOBOX",V,!0),a=new I("MULTISELECTCOMBOBOX",T,!0);this.InputTypeConfigurationDefinitions=[],this.InputTypeConfigurationDefinitions.push(o),this.InputTypeConfigurationDefinitions.push(i),this.InputTypeConfigurationDefinitions.push(c),this.InputTypeConfigurationDefinitions.push(a)}static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},83410:(E,g,n)=>{n.d(g,{a:()=>m});var e=n(50387),d=n(99468);let m=(()=>{class t{constructor(h){this.permission=h.get(e.qT)}transform(h){return this.permission.isGranted(h)}static#e=this.\u0275fac=function(C){return new(C||t)(d.Y36(d.zs3,16))};static#t=this.\u0275pipe=d.Yjl({name:"permission",type:t,pure:!0})}return t})()}}]);