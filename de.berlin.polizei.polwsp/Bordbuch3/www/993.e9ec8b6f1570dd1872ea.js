(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[993],{993:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PruefvermerkComponent:()=>T});var n=r(1041),o=r(1671),i=function(e){return e.nicht_bearbeitet="Nicht bearbeitet",e.in_bearbeitung="In Bearbeitung",e.abgeschlossen="Abgeschlossen",e.archiviert="Archiviert",e}({}),a=r(4151),l=r(1673),c=r(5366),u=r(6691),s=r(9204),m=r(959),p=r(8256),f=r(3070),g=r(9550),d=r(767),Z=r(1116),h=r(7064);const b=["modalComponent"];function v(e,t){if(1&e&&(c.TgZ(0,"mat-option",19),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.Q6J("value",e.bezeichnung),c.xp6(1),c.hij(" ",e.bezeichnung," ")}}function k(e,t){if(1&e&&(c.TgZ(0,"mat-option",19),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.Q6J("value",e.id),c.xp6(1),c.hij(" ",e.item," ")}}function _(e,t){1&e&&c.GkF(0)}function A(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"button",22),c.NdJ("click",function(){return c.CHM(e),c.oxw(2).create()}),c._uU(1,"Erstellen"),c.qZA()}}function y(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"button",20),c.NdJ("click",function(){return c.CHM(e),c.oxw().cancel()}),c._uU(1,"Abbrechen"),c.qZA(),c.YNc(2,A,2,0,"button",21)}if(2&e){const e=c.oxw();c.xp6(2),c.Q6J("ngIf",!e.pruefvermerkForm.value.id)}}let T=(()=>{class e{constructor(e,t,r,l){this.store=e,this._formBuilder=t,this.modalServiceP=r,this.appService=l,this.title="",this.kategorien$=this.store.pipe((0,o.Ys)(a.sO.selectpruefvermerkkategorien)),this.pruefvermerkForm=this._formBuilder.group({id:[""],id_ship:[""],date:["",n.kI.required],kategorie:[""],item:[""],description:[""],status:[i.nicht_bearbeitet]})}ngOnInit(){this.modalServiceP.getData().then(e=>{this.title=e.data.title,this.pruefvermerkForm.patchValue(e.data)})}selectKategorie(e){this.pruefvermerke$=this.store.pipe((0,o.Ys)(a.sO.selectpruefvermerkeByKategorie(e)))}onChange(e){this.pruefvermerkForm.controls.kategorie.setValue(e.kategorie)}create(){var e;const t=this.pruefvermerkForm.value;console.log(t),this.store.dispatch(l.KS.insertReparatur({insert:t})),null===(e=this.modal)||void 0===e||e.close()}cancel(){var e;null===(e=this.modal)||void 0===e||e.close()}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(o.yh),c.Y36(n.qu),c.Y36(u.Z),c.Y36(s.z))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-pruefvermerk"]],viewQuery:function(e,t){if(1&e&&c.Gf(b,5),2&e){let e;c.iGM(e=c.CRH())&&(t.modal=e.first)}},decls:47,vars:14,consts:[["modalComponent",""],[1,"h-16","p-8","flex","items-center","justify-between","border-b"],["tabindex","0",1,"dark:text-gray-50","focus:outline-none","text-2xl","font-semibold","leading-6","text-gray-800"],[1,"w-6","h-6","focus:outline-none","rounded-md","cursor-pointer",3,"click"],["name","x",1,"w-6","h-6","stroke-2","stroke-current","text-gray-500"],[1,"content"],[3,"formGroup"],[1,"hidden"],["appearance","fill"],["matInput","","type","text","formControlName","id","readonly",""],["matInput","","type","text","formControlName","id_ship","readonly",""],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","datetime-local","formControlName","date",3,"value"],["matInput","","type","text","formControlName","status","readonly",""],["matInput","","type","text","rows","5","formControlName","description"],[1,"absolute","h-16","px-8","right-0","bottom-0","left-0","flex","items-center","justify-between","border-t"],[4,"ngTemplateOutlet"],["toolbar",""],[3,"value"],["type","button",1,"p-2","mr-3","bg-gray-800","text-white","rounded",3,"click"],["type","button","class","p-2 ml-3 bg-gray-800 text-white rounded",3,"click",4,"ngIf"],["type","button",1,"p-2","ml-3","bg-gray-800","text-white","rounded",3,"click"]],template:function(e,t){if(1&e&&(c.TgZ(0,"app-modal",null,0),c.TgZ(2,"header",1),c.TgZ(3,"p",2),c._uU(4),c.qZA(),c.TgZ(5,"button",3),c.NdJ("click",function(){return t.cancel()}),c._UZ(6,"icons",4),c.qZA(),c.qZA(),c.TgZ(7,"div",5),c.TgZ(8,"form",6),c.TgZ(9,"div",7),c.TgZ(10,"mat-form-field",8),c.TgZ(11,"mat-label"),c._uU(12,"id"),c.qZA(),c._UZ(13,"input",9),c.qZA(),c.TgZ(14,"mat-form-field",8),c.TgZ(15,"mat-label"),c._uU(16,"id_ship"),c.qZA(),c._UZ(17,"input",10),c.qZA(),c.qZA(),c.TgZ(18,"mat-form-field",8),c.TgZ(19,"mat-label"),c._uU(20,"Kategorie"),c.qZA(),c.TgZ(21,"mat-select",11),c.NdJ("selectionChange",function(e){return t.selectKategorie(e.value)}),c.YNc(22,v,2,2,"mat-option",12),c.ALo(23,"async"),c.qZA(),c.qZA(),c.TgZ(24,"mat-form-field",8),c.TgZ(25,"mat-label"),c._uU(26,"Bestandteil"),c.qZA(),c.TgZ(27,"mat-select"),c.YNc(28,k,2,2,"mat-option",12),c.ALo(29,"async"),c.qZA(),c.qZA(),c.TgZ(30,"mat-form-field",8),c.TgZ(31,"mat-label"),c._uU(32,"Datum/Uhrzeit"),c.qZA(),c._UZ(33,"input",13),c.ALo(34,"date"),c.qZA(),c.TgZ(35,"mat-form-field",8),c.TgZ(36,"mat-label"),c._uU(37,"Status"),c.qZA(),c._UZ(38,"input",14),c.qZA(),c.TgZ(39,"mat-form-field",8),c.TgZ(40,"mat-label"),c._uU(41,"Beschreibung"),c.qZA(),c._UZ(42,"textarea",15),c.qZA(),c.qZA(),c.qZA(),c.TgZ(43,"footer",16),c.YNc(44,_,1,0,"ng-container",17),c.qZA(),c.qZA(),c.YNc(45,y,3,1,"ng-template",null,18,c.W1O)),2&e){const e=c.MAs(46);c.xp6(4),c.hij(" ",t.title," "),c.xp6(4),c.Q6J("formGroup",t.pruefvermerkForm),c.xp6(14),c.Q6J("ngForOf",c.lcZ(23,6,t.kategorien$)),c.xp6(6),c.Q6J("ngForOf",c.lcZ(29,8,t.pruefvermerke$)),c.xp6(5),c.s9C("value",c.Dn7(34,10,t.pruefvermerkForm.value.date,"yyyy-MM-ddTHH:mm","+1:00")),c.xp6(11),c.Q6J("ngTemplateOutlet",e)}},directives:[m.z,p._,n._Y,n.JL,n.sg,f.KE,f.hX,g.Nt,n.Fj,n.JJ,n.u,d.gD,Z.sg,Z.tP,h.ey,Z.O5],pipes:[Z.Ov,Z.uU],styles:[".content[_ngcontent-%COMP%]{position:absolute;top:8rem;right:2rem;bottom:4rem;left:2rem;overflow:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.dark[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]:before{background-color:#fff6!important}.dark[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{color:#d3d3d3!important}"]}),e})()}}]);