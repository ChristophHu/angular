(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[993],{993:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PruefvermerkComponent:()=>h});var o=n(1041),r=n(1671),i=function(e){return e.nicht_bearbeitet="Nicht bearbeitet",e.in_bearbeitung="In Bearbeitung",e.abgeschlossen="Abgeschlossen",e.archiviert="Archiviert",e}({}),a=n(4151),c=n(1673),l=n(5366),s=n(6691),g=n(9204),p=n(959),d=n(4391),u=n(1116);const b=["modalComponent"];function f(e,t){1&e&&l.GkF(0)}function m(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"button",20),l.NdJ("click",function(){return l.CHM(e),l.oxw(2).create()}),l._uU(1,"Erstellen"),l.qZA()}}function _(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"div",17),l.TgZ(1,"div"),l.TgZ(2,"button",18),l.NdJ("click",function(){return l.CHM(e),l.oxw().cancel()}),l._uU(3,"Abbrechen"),l.qZA(),l.qZA(),l.TgZ(4,"div"),l.YNc(5,m,2,0,"button",19),l.qZA(),l.qZA()}if(2&e){const e=l.oxw();l.xp6(5),l.Q6J("ngIf",!e.pruefvermerkForm.value.id)}}let h=(()=>{class e{constructor(e,t,n,c){this.store=e,this._formBuilder=t,this.modalServiceP=n,this.appService=c,this.title="",this.pruefvermerke$=this.store.pipe((0,r.Ys)(a.sO.a0)),this.pruefvermerkForm=this._formBuilder.group({id:[""],id_ship:[""],date:["",o.kI.required],kategorie:[""],item:[""],description:[""],status:[i.nicht_bearbeitet]})}ngOnInit(){this.modalServiceP.getData().then(e=>{console.log(e),this.title=e.data.title,this.pruefvermerkForm.patchValue(e.data)})}onChange(e){this.pruefvermerkForm.controls.kategorie.setValue(e.kategorie)}create(){var e;const t=this.pruefvermerkForm.value;console.log(t),this.store.dispatch(c.KS.insertReparatur({insert:t})),null===(e=this.modal)||void 0===e||e.close()}cancel(){var e;null===(e=this.modal)||void 0===e||e.close()}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(r.yh),l.Y36(o.qu),l.Y36(s.Z),l.Y36(g.z))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-pruefvermerk"]],viewQuery:function(e,t){if(1&e&&l.Gf(b,5),2&e){let e;l.iGM(e=l.CRH())&&(t.modal=e.first)}},decls:48,vars:12,consts:[["modalComponent",""],[1,"m-3","mb-5","text-xl"],[1,"content"],[3,"formGroup"],[1,"relative","my-5"],["type","text","formControlName","id","required",""],[1,"bar"],[1,"text-black"],["type","number","formControlName","id_ship","required",""],["type","datetime-local","formControlName","date","required","",3,"value"],["hidden","",1,"relative","my-5"],["type","text","formControlName","kategorie"],["bindLabel","item","bindValue","item","groupBy","kategorie","formControlName","item","required","",3,"dropdownPosition","items","change"],["type","text","formControlName","description","required",""],["type","text","formControlName","status","required",""],[4,"ngTemplateOutlet"],["toolbar",""],[1,"py-3","flex","justify-between"],["type","button",1,"p-2","mr-3","bg-gray-800","text-white","rounded",3,"click"],["type","button","class","p-2 ml-3 bg-gray-800 text-white rounded",3,"click",4,"ngIf"],["type","button",1,"p-2","ml-3","bg-gray-800","text-white","rounded",3,"click"]],template:function(e,t){if(1&e&&(l.TgZ(0,"app-modal",null,0),l.TgZ(2,"header"),l.TgZ(3,"h2",1),l._uU(4),l.qZA(),l.qZA(),l.TgZ(5,"div",2),l.TgZ(6,"form",3),l.TgZ(7,"div",4),l._UZ(8,"input",5),l._UZ(9,"span",6),l.TgZ(10,"label",7),l._uU(11,"Id"),l.qZA(),l.qZA(),l.TgZ(12,"div",4),l._UZ(13,"input",8),l._UZ(14,"span",6),l.TgZ(15,"label",7),l._uU(16,"Id_ship"),l.qZA(),l.qZA(),l.TgZ(17,"div",4),l._UZ(18,"input",9),l.ALo(19,"date"),l._UZ(20,"span",6),l.TgZ(21,"label",7),l._uU(22,"Datum/Uhrzeit"),l.qZA(),l.qZA(),l.TgZ(23,"div",10),l._UZ(24,"input",11),l._UZ(25,"span",6),l.TgZ(26,"label",7),l._uU(27,"Kategorie"),l.qZA(),l.qZA(),l.TgZ(28,"div",4),l.TgZ(29,"ng-select",12),l.NdJ("change",function(e){return t.onChange(e)}),l.ALo(30,"async"),l.qZA(),l._UZ(31,"span",6),l.TgZ(32,"label",7),l._uU(33,"Bestandteil"),l.qZA(),l.qZA(),l.TgZ(34,"div",4),l._UZ(35,"input",13),l._UZ(36,"span",6),l.TgZ(37,"label",7),l._uU(38,"Beschreibung"),l.qZA(),l.qZA(),l.TgZ(39,"div",4),l._UZ(40,"input",14),l._UZ(41,"span",6),l.TgZ(42,"label",7),l._uU(43,"Status"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(44,"footer"),l.YNc(45,f,1,0,"ng-container",15),l.qZA(),l.qZA(),l.YNc(46,_,6,1,"ng-template",null,16,l.W1O)),2&e){const e=l.MAs(47);l.xp6(4),l.Oqu(t.title),l.xp6(2),l.Q6J("formGroup",t.pruefvermerkForm),l.xp6(12),l.s9C("value",l.Dn7(19,6,t.pruefvermerkForm.value.date,"yyyy-MM-ddTHH:mm","+2:00")),l.xp6(11),l.Q6J("dropdownPosition","bottom")("items",l.lcZ(30,10,t.pruefvermerke$)),l.xp6(16),l.Q6J("ngTemplateOutlet",e)}},directives:[p.z,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.Q7,o.wV,d.w9,u.tP,u.O5],pipes:[u.uU,u.Ov],styles:['input[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{display:block;width:100%;border-width:0 0 1px;--tw-border-opacity:1;border-color:rgba(156,163,175,var(--tw-border-opacity));background-image:none;font-size:1.125rem;line-height:1.75rem;font-weight:500;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity));padding:10px 10px 10px 5px}input[_ngcontent-%COMP%]:focus, ng-select[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);--tw-ring-offset-width:0px}input.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], ng-select.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], ng-select[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%], select.ng-valid[_ngcontent-%COMP%] ~ label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%]{top:-14px;font-size:14px;color:#363636}input.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before, ng-select.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, ng-select[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before, select.ng-select-opened[_ngcontent-%COMP%] ~ .bar[_ngcontent-%COMP%]:before, select[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before{width:100%}label[_ngcontent-%COMP%]{color:#707070;font-size:18px;position:absolute;pointer-events:none;left:5px;top:10px;transition:all .2s ease}.bar[_ngcontent-%COMP%]{position:relative;display:block;width:100%}.bar[_ngcontent-%COMP%]:before{position:absolute;bottom:0;left:0;height:.125rem;width:0;content:"";background:#2196f3;transition:all .3s ease}header[_ngcontent-%COMP%]{border-bottom-width:1px;padding-left:1.25rem;padding-right:1.25rem;padding-top:1.25rem}footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}footer[_ngcontent-%COMP%]{border-top-width:1px;padding:.75rem 1.25rem}.content[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:1.25rem}']}),e})()}}]);