(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[135],{2135:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ZaehlerstandComponent:()=>_});var o=n(7570),a=n(8509),r=n(8290),l=n(5366),i=n(1671),s=n(1041),c=n(6691),d=n(4438),u=n(959),m=n(8256),p=n(3070),h=n(9550),f=n(1116);const Z=["modalComponent"];function g(t,e){1&t&&l.GkF(0)}function b(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"button",20),l.NdJ("click",function(){return l.CHM(t),l.oxw().cancel()}),l._uU(1,"Abbrechen"),l.qZA(),l.TgZ(2,"button",20),l.NdJ("click",function(){return l.CHM(t),l.oxw().update()}),l._uU(3,"Z\xe4hlerstand \xfcbernehmen"),l.qZA()}}let _=(()=>{class t{constructor(t,e,n,a){this.store=t,this._formBuilder=e,this.modalServiceZ=n,this.appService=a,this.title="",this.zaehlerstandSubscription=new o.w,this.zaehlerstandForm=this._formBuilder.group({id:[""],id_schiff:[""],zaehlerstandstyp:[""],date:[""],value:[""]})}ngOnInit(){this.modalServiceZ.getData().then(t=>{this.title=t.data.title,this.zaehlerstandForm.patchValue(t.data.zaehlerstand)})}ngOnDestroy(){this.zaehlerstandSubscription.unsubscribe()}setDate(){this.zaehlerstandForm.patchValue({date:(0,a.r$)(new Date)}),this.zaehlerstandForm.controls.date.markAsDirty()}update(){var t;console.log(this.zaehlerstandForm.value),this.store.dispatch(r.hw.dataUpdate({update:{id:this.zaehlerstandForm.value.id,changes:this.zaehlerstandForm.value}})),null===(t=this.modal)||void 0===t||t.close()}cancel(){var t;null===(t=this.modal)||void 0===t||t.close()}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(i.yh),l.Y36(s.qu),l.Y36(c.Z),l.Y36(d.z))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-zaehlerstand"]],viewQuery:function(t,e){if(1&t&&l.Gf(Z,5),2&t){let t;l.iGM(t=l.CRH())&&(e.modal=t.first)}},decls:38,vars:8,consts:[["modalComponent",""],[1,"h-16","p-8","flex","items-center","justify-between","border-b"],["tabindex","0",1,"dark:text-gray-50","focus:outline-none","text-2xl","font-semibold","leading-6","text-gray-800"],[1,"w-6","h-6","focus:outline-none","rounded-md","cursor-pointer",3,"click"],["name","x",1,"w-6","h-6","stroke-2","stroke-current","text-gray-500"],[1,"content"],[3,"formGroup"],[1,"hidden"],["appearance","fill"],["matInput","","type","text","formControlName","id","readonly",""],["matInput","","type","text","formControlName","id_schiff","readonly",""],["matInput","","type","text","formControlName","zaehlerstandstyp","readonly",""],[1,"flex","flex-row","items-center"],["matInput","","type","datetime-local","formControlName","date",3,"value"],[1,"w-6","h-6","mx-3","focus:outline-none","rounded-md","cursor-pointer",3,"click"],["name","calendar-event",1,"w-6","h-6","stroke-1","stroke-current","text-black"],["matInput","","type","number","formControlName","value"],[1,"absolute","h-16","px-8","right-0","bottom-0","left-0","flex","items-center","justify-between","border-t"],[4,"ngTemplateOutlet"],["toolbar",""],["type","button",1,"p-2","ml-3","bg-gray-800","text-white","rounded",3,"click"]],template:function(t,e){if(1&t&&(l.TgZ(0,"app-modal",null,0),l.TgZ(2,"header",1),l.TgZ(3,"p",2),l._uU(4),l.qZA(),l.TgZ(5,"button",3),l.NdJ("click",function(){return e.cancel()}),l._UZ(6,"icons",4),l.qZA(),l.qZA(),l.TgZ(7,"div",5),l.TgZ(8,"form",6),l.TgZ(9,"div",7),l.TgZ(10,"mat-form-field",8),l.TgZ(11,"mat-label"),l._uU(12,"id"),l.qZA(),l._UZ(13,"input",9),l.qZA(),l.TgZ(14,"mat-form-field",8),l.TgZ(15,"mat-label"),l._uU(16,"id_schiff"),l.qZA(),l._UZ(17,"input",10),l.qZA(),l.qZA(),l.TgZ(18,"mat-form-field",8),l.TgZ(19,"mat-label"),l._uU(20,"Einrichtung/Ger\xe4t"),l.qZA(),l._UZ(21,"input",11),l.qZA(),l.TgZ(22,"div",12),l.TgZ(23,"mat-form-field",8),l.TgZ(24,"mat-label"),l._uU(25,"Datum/Uhrzeit"),l.qZA(),l._UZ(26,"input",13),l.ALo(27,"date"),l.qZA(),l.TgZ(28,"button",14),l.NdJ("click",function(){return e.setDate()}),l._UZ(29,"icons",15),l.qZA(),l.qZA(),l.TgZ(30,"mat-form-field",8),l.TgZ(31,"mat-label"),l._uU(32,"Einheiten"),l.qZA(),l._UZ(33,"input",16),l.qZA(),l.qZA(),l.qZA(),l.TgZ(34,"footer",17),l.YNc(35,g,1,0,"ng-container",18),l.qZA(),l.qZA(),l.YNc(36,b,4,0,"ng-template",null,19,l.W1O)),2&t){const t=l.MAs(37);l.xp6(4),l.hij(" ",e.title," "),l.xp6(4),l.Q6J("formGroup",e.zaehlerstandForm),l.xp6(18),l.s9C("value",l.Dn7(27,4,e.zaehlerstandForm.value.date,"yyyy-MM-ddTHH:mm","+1:00")),l.xp6(9),l.Q6J("ngTemplateOutlet",t)}},directives:[u.z,m._,s._Y,s.JL,s.sg,p.KE,p.hX,h.Nt,s.Fj,s.JJ,s.u,s.wV,f.tP],pipes:[f.uU],styles:[".content[_ngcontent-%COMP%]{position:absolute;top:8rem;right:2rem;bottom:4rem;left:2rem;overflow:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.dark[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]:before{background-color:#fff6!important}.dark[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:#d3d3d3!important}"]}),t})()}}]);