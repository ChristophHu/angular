(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[135],{2135:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ZaehlerstandComponent:()=>h});var o=n(7570),a=n(8290),r=n(5366),i=n(1671),l=n(1041),c=n(6691),s=n(9204),d=n(959),g=n(1116);const p=["modalComponent"];function u(t,e){1&t&&r.GkF(0)}function b(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",14),r.TgZ(1,"button",15),r.NdJ("click",function(){return r.CHM(t),r.oxw().cancel()}),r._uU(2,"Abbrechen"),r.qZA(),r.TgZ(3,"button",15),r.NdJ("click",function(){return r.CHM(t),r.oxw().update()}),r._uU(4,"Z\xe4hlerstand \xfcbernehemn"),r.qZA(),r.qZA()}}let h=(()=>{class t{constructor(t,e,n,a){this.store=t,this._formBuilder=e,this.modalServiceZ=n,this.appService=a,this.title="",this.zaehlerstandSubscription=new o.w,this.zaehlerstandForm=this._formBuilder.group({id:[""],id_schiff:[""],zaehlerstandstyp:[""],date:[""],value:[""]})}ngOnInit(){this.modalServiceZ.getData().then(t=>{this.title=t.data.title,this.zaehlerstandForm.patchValue(t.data.zaehlerstand)})}ngOnDestroy(){this.zaehlerstandSubscription.unsubscribe()}update(){var t;console.log(this.zaehlerstandForm.value),this.store.dispatch(a.hw.dataUpdate({update:{id:this.zaehlerstandForm.value.id,changes:this.zaehlerstandForm.value}})),null===(t=this.modal)||void 0===t||t.close()}cancel(){var t;null===(t=this.modal)||void 0===t||t.close()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i.yh),r.Y36(l.qu),r.Y36(c.Z),r.Y36(s.z))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-zaehlerstand"]],viewQuery:function(t,e){if(1&t&&r.Gf(p,5),2&t){let t;r.iGM(t=r.CRH())&&(e.modal=t.first)}},decls:37,vars:8,consts:[["modalComponent",""],[1,"m-3","mb-5","text-xl"],[1,"content"],[3,"formGroup"],[1,"relative","my-5"],["type","text","formControlName","id","required",""],[1,"bar"],[1,"text-black"],["type","text","formControlName","id_schiff","required",""],["type","text","formControlName","zaehlerstandstyp","required",""],["type","datetime-local","formControlName","date","required","",3,"value"],["type","number","formControlName","value","required",""],[4,"ngTemplateOutlet"],["toolbar",""],[1,"py-3","flex","justify-between"],["type","button",1,"p-2","ml-3","bg-gray-800","text-white","rounded",3,"click"]],template:function(t,e){if(1&t&&(r.TgZ(0,"app-modal",null,0),r.TgZ(2,"header"),r.TgZ(3,"h2",1),r._uU(4),r.qZA(),r.qZA(),r.TgZ(5,"div",2),r.TgZ(6,"form",3),r.TgZ(7,"div",4),r._UZ(8,"input",5),r._UZ(9,"span",6),r.TgZ(10,"label",7),r._uU(11,"Id"),r.qZA(),r.qZA(),r.TgZ(12,"div",4),r._UZ(13,"input",8),r._UZ(14,"span",6),r.TgZ(15,"label",7),r._uU(16,"Id_ship"),r.qZA(),r.qZA(),r.TgZ(17,"div",4),r._UZ(18,"input",9),r._UZ(19,"span",6),r.TgZ(20,"label",7),r._uU(21,"Ger\xe4t"),r.qZA(),r.qZA(),r.TgZ(22,"div",4),r._UZ(23,"input",10),r.ALo(24,"date"),r._UZ(25,"span",6),r.TgZ(26,"label",7),r._uU(27,"Datum/Uhrzeit"),r.qZA(),r.qZA(),r.TgZ(28,"div",4),r._UZ(29,"input",11),r._UZ(30,"span",6),r.TgZ(31,"label",7),r._uU(32,"Einheiten"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(33,"footer"),r.YNc(34,u,1,0,"ng-container",12),r.qZA(),r.qZA(),r.YNc(35,b,5,0,"ng-template",null,13,r.W1O)),2&t){const t=r.MAs(36);r.xp6(4),r.Oqu(e.title),r.xp6(2),r.Q6J("formGroup",e.zaehlerstandForm),r.xp6(17),r.s9C("value",r.Dn7(24,4,e.zaehlerstandForm.value.date,"yyyy-MM-ddTHH:mm","+2:00")),r.xp6(11),r.Q6J("ngTemplateOutlet",t)}},directives:[d.z,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.Q7,l.wV,g.tP],pipes:[g.uU],styles:['input[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{display:block;width:100%;border-width:0 0 1px;--tw-border-opacity:1;border-color:rgba(156,163,175,var(--tw-border-opacity));background-image:none;font-size:1.125rem;line-height:1.75rem;font-weight:500;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity));padding:10px 10px 10px 5px}input[_ngcontent-%COMP%]:focus, ng-select[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-offset-width:0px}input.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], ng-select.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], select.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%]{top:-14px;font-size:14px;color:#363636}input.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before, ng-select.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, ng-select[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before, select.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, select[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before{width:100%}label[_ngcontent-%COMP%]{color:#707070;font-size:18px;position:absolute;pointer-events:none;left:5px;top:10px;transition:all .2s ease}.bar[_ngcontent-%COMP%]{position:relative;display:block;width:100%}.bar[_ngcontent-%COMP%]:before{position:absolute;bottom:0;left:0;height:.125rem;width:0;content:"";background:#2196f3;transition:all .3s ease}header[_ngcontent-%COMP%]{border-bottom-width:1px;padding-left:1.25rem;padding-right:1.25rem;padding-top:1.25rem}footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}footer[_ngcontent-%COMP%]{border-top-width:1px;padding:.75rem 1.25rem}.content[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:1.25rem}']}),t})()}}]);