(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[524],{5524:(t,e,n)=>{"use strict";n.r(e),n.d(e,{BesatzungComponent:()=>m});var o=n(1673),r=n(5366),a=n(1041),i=n(1671),l=n(6691),c=n(9204),s=n(959),g=n(1116);const u=["modalComponent"];function d(t,e){1&t&&r.GkF(0)}function p(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"button",21),r.NdJ("click",function(){r.CHM(t);const e=r.oxw(2);return e.delete(e.besatzungForm.value.id)}),r._uU(1,"l\xf6schen"),r.qZA()}}function b(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"button",22),r.NdJ("click",function(){return r.CHM(t),r.oxw(2).update()}),r._uU(1,"Speichern"),r.qZA()}}function f(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"button",22),r.NdJ("click",function(){return r.CHM(t),r.oxw(2).create()}),r._uU(1,"Erstellen"),r.qZA()}}function _(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",17),r.TgZ(1,"div"),r.TgZ(2,"button",18),r.NdJ("click",function(){return r.CHM(t),r.oxw().cancel()}),r._uU(3,"Abbrechen"),r.qZA(),r.YNc(4,p,2,0,"button",19),r.qZA(),r.TgZ(5,"div"),r.YNc(6,b,2,0,"button",20),r.YNc(7,f,2,0,"button",20),r.qZA(),r.qZA()}if(2&t){const t=r.oxw();r.xp6(4),r.Q6J("ngIf",t.besatzungForm.value.id),r.xp6(2),r.Q6J("ngIf",!t.besatzungForm.pristine&&t.besatzungForm.value.id),r.xp6(1),r.Q6J("ngIf",!t.besatzungForm.value.id)}}let m=(()=>{class t{constructor(t,e,n,o){this._formBuilder=t,this.store=e,this.modalService=n,this.appService=o,this.title="",this.edit=!1,this.besatzungForm=this._formBuilder.group({id:[],id_streife:[],funktion:[],persnr:[],name:[],an_bord:[""],von_bord:[""]})}get form(){return this.besatzungForm.controls}ngOnInit(){this.modalService.getData().then(t=>{this.title=t.data.title,this.besatzungForm.patchValue(t.data.besatzung)})}create(){var t;const e=this.besatzungForm.value;console.log(e),this.store.dispatch(o.KS.insertPatrolBesatzung({insert:e})),null===(t=this.modal)||void 0===t||t.close()}update(){var t;this.store.dispatch(o.KS.updatePatrolBesatzung({update:{id:this.besatzungForm.value.id_streife,changes:this.besatzungForm.value}})),null===(t=this.modal)||void 0===t||t.close()}delete(t){var e;this.store.dispatch(o.KS.deletePatrolBesatzung({id:t})),null===(e=this.modal)||void 0===e||e.close()}cancel(){var t;null===(t=this.modal)||void 0===t||t.close()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a.qu),r.Y36(i.yh),r.Y36(l.Z),r.Y36(c.z))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-besatzung"]],viewQuery:function(t,e){if(1&t&&r.Gf(u,5),2&t){let t;r.iGM(t=r.CRH())&&(e.modal=t.first)}},decls:48,vars:13,consts:[["modalComponent",""],[1,"m-3","mb-5","text-xl"],[1,"content"],[3,"formGroup"],["hidden","",1,"relative","my-5"],["type","text","formControlName","id","required",""],[1,"bar"],[1,"text-black"],["type","text","formControlName","id_streife","required",""],[1,"relative","my-5"],["type","text","formControlName","funktion","required",""],["type","string","formControlName","persnr","required",""],["type","text","formControlName","name","required",""],["type","datetime-local","formControlName","an_bord",3,"value"],["type","datetime-local","formControlName","von_bord",3,"value"],[4,"ngTemplateOutlet"],["toolbar",""],[1,"py-3","flex","justify-between"],["type","button",1,"p-2","mr-3","bg-gray-800","text-white","rounded",3,"click"],["type","button","class","p-2 mr-3 bg-red-400 text-black rounded",3,"click",4,"ngIf"],["type","button","class","p-2 ml-3 bg-gray-800 text-white rounded",3,"click",4,"ngIf"],["type","button",1,"p-2","mr-3","bg-red-400","text-black","rounded",3,"click"],["type","button",1,"p-2","ml-3","bg-gray-800","text-white","rounded",3,"click"]],template:function(t,e){if(1&t&&(r.TgZ(0,"app-modal",null,0),r.TgZ(2,"header"),r.TgZ(3,"h2",1),r._uU(4),r.qZA(),r.qZA(),r.TgZ(5,"div",2),r.TgZ(6,"form",3),r.TgZ(7,"div",4),r._UZ(8,"input",5),r._UZ(9,"span",6),r.TgZ(10,"label",7),r._uU(11,"Id"),r.qZA(),r.qZA(),r.TgZ(12,"div",4),r._UZ(13,"input",8),r._UZ(14,"span",6),r.TgZ(15,"label",7),r._uU(16,"Id_Streife"),r.qZA(),r.qZA(),r.TgZ(17,"div",9),r._UZ(18,"input",10),r._UZ(19,"span",6),r.TgZ(20,"label",7),r._uU(21,"Funktion"),r.qZA(),r.qZA(),r.TgZ(22,"div",9),r._UZ(23,"input",11),r._UZ(24,"span",6),r.TgZ(25,"label",7),r._uU(26,"Personalnummer"),r.qZA(),r.qZA(),r.TgZ(27,"div",9),r._UZ(28,"input",12),r._UZ(29,"span",6),r.TgZ(30,"label",7),r._uU(31,"Name"),r.qZA(),r.qZA(),r.TgZ(32,"div",9),r._UZ(33,"input",13),r.ALo(34,"date"),r._UZ(35,"span",6),r.TgZ(36,"label",7),r._uU(37,"An Bord"),r.qZA(),r.qZA(),r.TgZ(38,"div",9),r._UZ(39,"input",14),r.ALo(40,"date"),r._UZ(41,"span",6),r.TgZ(42,"label",7),r._uU(43,"Von Bord"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(44,"footer"),r.YNc(45,d,1,0,"ng-container",15),r.qZA(),r.qZA(),r.YNc(46,_,8,3,"ng-template",null,16,r.W1O)),2&t){const t=r.MAs(47);r.xp6(4),r.Oqu(e.title),r.xp6(2),r.Q6J("formGroup",e.besatzungForm),r.xp6(27),r.s9C("value",r.Dn7(34,5,e.besatzungForm.value.an_bord,"yyyy-MM-ddTHH:mm","+2:00")),r.xp6(6),r.s9C("value",r.Dn7(40,9,e.besatzungForm.value.von_bord,"yyyy-MM-ddTHH:mm","+2:00")),r.xp6(6),r.Q6J("ngTemplateOutlet",t)}},directives:[s.z,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.Q7,g.tP,g.O5],pipes:[g.uU],styles:['input[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{display:block;width:100%;border-width:0 0 1px;--tw-border-opacity:1;border-color:rgba(156,163,175,var(--tw-border-opacity));background-image:none;font-size:1.125rem;line-height:1.75rem;font-weight:500;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity));padding:10px 10px 10px 5px}input[_ngcontent-%COMP%]:focus, ng-select[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-offset-width:0px}input.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], ng-select.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], select.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%]{top:-14px;font-size:14px;color:#363636}input.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before, ng-select.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, ng-select[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before, select.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, select[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before{width:100%}label[_ngcontent-%COMP%]{color:#707070;font-size:18px;position:absolute;pointer-events:none;left:5px;top:10px;transition:all .2s ease}.bar[_ngcontent-%COMP%]{position:relative;display:block;width:100%}.bar[_ngcontent-%COMP%]:before{position:absolute;bottom:0;left:0;height:.125rem;width:0;content:"";background:#2196f3;transition:all .3s ease}header[_ngcontent-%COMP%]{border-bottom-width:1px;padding-left:1.25rem;padding-right:1.25rem;padding-top:1.25rem}footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}footer[_ngcontent-%COMP%]{border-top-width:1px;padding:.75rem 1.25rem}.content[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:1.25rem}']}),t})()}}]);