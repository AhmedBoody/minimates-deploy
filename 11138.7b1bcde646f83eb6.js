"use strict";(self.webpackChunkabp_zero_template=self.webpackChunkabp_zero_template||[]).push([[11138],{11138:(I,l,i)=>{i.r(l),i.d(l,{InvoiceModule:()=>y});var a=i(70916),r=i(15047),m=i(47530),v=i(41840),c=i(44328),t=i(99468),p=i(96814),f=i(88922),u=i(3291);function g(o,d){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t._UZ(2,"br"),t.qZA()),2&o){const e=d.$implicit;t.xp6(1),t.hij(" ",e," ")}}function x(o,d){if(1&o&&(t.TgZ(0,"span"),t._UZ(1,"br"),t._uU(2),t.qZA()),2&o){const e=d.$implicit;t.xp6(2),t.hij(" ",e," ")}}const h=[{path:"",component:(()=>{class o extends v.c{constructor(e,s,n){super(e),this._invoiceServiceProxy=s,this.activatedRoute=n,this.paymentId=0,this.invoiceInfo=new c.Pmq,this.companyLogo=""}ngOnInit(){this.getAllInfo(),this.companyLogo=r.g.appBaseUrl+"/assets/common/images/app-logo-on-"+(this.currentTheme.baseSettings.layout.darkMode?"dark":"light")+".svg"}getAllInfo(){this.activatedRoute.params.subscribe(e=>{this.paymentId=e.paymentId}),this._invoiceServiceProxy.getInvoiceInfo(this.paymentId).subscribe(e=>{this.invoiceInfo=e})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(t.zs3),t.Y36(c.n4k),t.Y36(a.gz))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],features:[t.qOj],decls:74,vars:43,consts:[["id","kt_content",1,"content","d-flex","flex-column","flex-column-fluid"],["id","kt_post",1,"post","d-flex","flex-column-fluid"],["id","kt_content_container",1,"container-xxl","mt-10"],[1,"card"],[1,"card-body","p-lg-20"],[1,"d-flex","flex-column","flex-xl-row"],[1,"flex-lg-row-fluid","me-xl-18","mb-10","mb-xl-0"],[1,"mt-n1"],[1,"d-flex","flex-stack","pb-10"],["href","#"],["alt","Logo",1,"w-150px",3,"src"],["href","javascript:;","onclick","window.print();",1,"btn","btn-sm","btn-success"],[1,"m-0"],[1,"fw-bolder","fs-3","text-gray-800","mb-8"],[1,"row","g-5","mb-11"],[1,"col-sm-6"],[1,"fw-bold","fs-7","text-gray-600","mb-1"],[1,"fw-bolder","fs-6","text-gray-800"],[1,"row","g-5","mb-12"],[1,"fw-bold","fs-7","text-gray-600"],[4,"ngFor","ngForOf"],[1,"flex-grow-1"],[1,"table-responsive","border-bottom","mb-9"],[1,"table","mb-3"],[1,"border-bottom","fs-6","fw-bolder","text-muted"],[1,"min-w-175px","pb-2"],[1,"min-w-70px","text-end","pb-2"],[1,"min-w-80px","text-end","pb-2"],[1,"fw-bolder","text-gray-700","fs-5","text-end"],[1,"d-flex","align-items-center","pt-6"],[1,"pt-6"],[1,"d-flex","justify-content-end"],[1,"mw-300px"],[1,"d-flex","flex-stack"],[1,"fw-bold","pe-10","text-gray-600","fs-7"],[1,"text-end","fw-bolder","fs-6","text-gray-800"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"a",9),t._UZ(10,"img",10),t.qZA(),t.TgZ(11,"a",11),t._uU(12),t.ALo(13,"localize"),t.qZA()(),t.TgZ(14,"div",12)(15,"div",13),t._uU(16),t.ALo(17,"localize"),t.qZA(),t.TgZ(18,"div",14)(19,"div",15)(20,"div",16),t._uU(21),t.ALo(22,"localize"),t.qZA(),t.TgZ(23,"div",17),t._uU(24),t.ALo(25,"luxonFormat"),t.qZA()()(),t.TgZ(26,"div",18)(27,"div",15)(28,"div",16),t._uU(29,"Issue For:"),t.qZA(),t.TgZ(30,"div",17),t._uU(31),t.qZA(),t.TgZ(32,"div",19),t.YNc(33,g,3,1,"span",20),t._uU(34),t.ALo(35,"localize"),t.qZA()(),t.TgZ(36,"div",15)(37,"div",16),t._uU(38,"Issued By:"),t.qZA(),t.TgZ(39,"div",17),t._uU(40),t.qZA(),t.TgZ(41,"div",19),t.YNc(42,x,3,1,"span",20),t.qZA()()(),t.TgZ(43,"div",21)(44,"div",22)(45,"table",23)(46,"thead")(47,"tr",24)(48,"th",25),t._uU(49,"#"),t.qZA(),t.TgZ(50,"th",26),t._uU(51),t.ALo(52,"localize"),t.qZA(),t.TgZ(53,"th",27),t._uU(54),t.ALo(55,"localize"),t.qZA()()(),t.TgZ(56,"tbody")(57,"tr",28)(58,"td",29),t._uU(59,"1"),t.qZA(),t.TgZ(60,"td",30),t._uU(61),t.qZA(),t.TgZ(62,"td",30),t._uU(63),t.ALo(64,"number"),t.qZA()()()()(),t.TgZ(65,"div",31)(66,"div",32)(67,"div",33)(68,"div",34),t._uU(69),t.ALo(70,"localize"),t.qZA(),t.TgZ(71,"div",35),t._uU(72),t.ALo(73,"number"),t.qZA()()()()()()()()()()()()()()),2&s&&(t.xp6(10),t.Q6J("src",n.companyLogo,t.LSH),t.xp6(2),t.hij(" ",t.lcZ(13,20,"Print")," "),t.xp6(4),t.AsE(" ",t.lcZ(17,22,"Invoice")," #",n.invoiceInfo.invoiceNo," "),t.xp6(5),t.hij("",t.lcZ(22,24,"Date"),":"),t.xp6(3),t.hij(" ",t.xi3(25,26,n.invoiceInfo.invoiceDate,"yyyy-LL-dd")," "),t.xp6(7),t.hij(" ",n.invoiceInfo.tenantLegalName," "),t.xp6(2),t.Q6J("ngForOf",n.invoiceInfo.tenantAddress),t.xp6(1),t.AsE(" ",t.lcZ(35,29,"Tax/VatNo"),": ",n.invoiceInfo.tenantTaxNo," "),t.xp6(6),t.hij(" ",n.invoiceInfo.hostLegalName," "),t.xp6(2),t.Q6J("ngForOf",n.invoiceInfo.hostAddress),t.xp6(9),t.hij(" ",t.lcZ(52,31,"Edition")," "),t.xp6(3),t.hij(" ",t.lcZ(55,33,"Amount")," "),t.xp6(7),t.Oqu(n.invoiceInfo.editionDisplayName),t.xp6(2),t.AsE(" ",n.appSession.application.currencySign,"",t.xi3(64,35,n.invoiceInfo.amount,"1.2-2")," "),t.xp6(6),t.hij(" ",t.lcZ(70,38,"Total")," "),t.xp6(3),t.AsE(" ",n.appSession.application.currencySign,"",t.xi3(73,40,n.invoiceInfo.amount,"1.2-2")," "))},dependencies:[p.sg,p.JJ,f.n,u.F],styles:[".header-fixed.subheader-fixed.subheader-enabled[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{padding-top:65px}"],data:{animation:[(0,m.MH)()]}})}return o})(),pathMatch:"full"}];let Z=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(h),a.Bz]})}return o})();var A=i(71902),b=i(92337);let y=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[b.o,A.g,Z]})}return o})()}}]);