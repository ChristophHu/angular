(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[403],{1403:(t,e,n)=>{"use strict";n.r(e),n.d(e,{BesatzungModalComponent:()=>z});var o=n(8509),a=n(5366),r=n(1041),i=n(3063),l=n(8218),u=n(6691),s=n(9204),c=n(959),m=n(8256),d=n(3070),g=n(9550),f=n(1116),p=n(3841),h=n(7064),b=n(2998);const Z=["modalComponent"];function v(t,e){1&t&&(a.TgZ(0,"mat-option"),a._uU(1,"Keine Person zur Auswahl..."),a.qZA())}function A(t,e){if(1&t&&(a.TgZ(0,"mat-option",27),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.Q6J("value",t.name),a.xp6(1),a.hij(" ",t.name," ")}}function x(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"mat-form-field",8),a.TgZ(1,"mat-label"),a._uU(2,"Name"),a.qZA(),a.TgZ(3,"mat-select",22),a.TgZ(4,"input",23,24),a.NdJ("keyup",function(e){return a.CHM(t),a.oxw().searchUser(e)}),a.qZA(),a._UZ(6,"mat-select-search",25),a.YNc(7,v,2,0,"mat-option",26),a.YNc(8,A,2,2,"mat-option",13),a.ALo(9,"orderBy"),a.ALo(10,"async"),a.qZA(),a.qZA()}if(2&t){const t=a.MAs(5),e=a.oxw();a.xp6(7),a.Q6J("ngIf",!t.value),a.xp6(1),a.Q6J("ngForOf",a.xi3(9,2,a.lcZ(10,5,e.namen$),"name"))}}function w(t,e){1&t&&(a.TgZ(0,"mat-form-field",8),a.TgZ(1,"mat-label"),a._uU(2,"Name"),a.qZA(),a._UZ(3,"input",28),a.qZA())}function _(t,e){if(1&t&&(a.TgZ(0,"mat-option",27),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.Q6J("value",t.bezeichnung),a.xp6(1),a.hij(" ",t.bezeichnung," ")}}function k(t,e){1&t&&a.GkF(0)}function T(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"button",32),a.NdJ("click",function(){a.CHM(t);const e=a.oxw(2);return e.delete(e.besatzungForm.value.id)}),a._uU(1,"l\xf6schen"),a.qZA()}}function y(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"button",33),a.NdJ("click",function(){return a.CHM(t),a.oxw(2).update()}),a._uU(1,"Speichern"),a.qZA()}}function q(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"button",33),a.NdJ("click",function(){return a.CHM(t),a.oxw(2).create()}),a._uU(1,"Erstellen"),a.qZA()}}function F(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div"),a.TgZ(1,"button",29),a.NdJ("click",function(){return a.CHM(t),a.oxw().cancel()}),a._uU(2,"Abbrechen"),a.qZA(),a.YNc(3,T,2,0,"button",30),a.qZA(),a.TgZ(4,"div"),a.YNc(5,y,2,0,"button",31),a.YNc(6,q,2,0,"button",31),a.qZA()}if(2&t){const t=a.oxw();a.xp6(3),a.Q6J("ngIf",t.besatzungForm.value.id),a.xp6(2),a.Q6J("ngIf",t.besatzungForm.value.id),a.xp6(1),a.Q6J("ngIf",!t.besatzungForm.value.id)}}let z=(()=>{class t{constructor(t,e,n,o,a){this._formBuilder=t,this._specFacade=e,this._katFacade=n,this.modalService=o,this.appService=a,this.title="",this.edit=!1,this.funktionen$=this._katFacade.funktionen$,this.besatzungForm=this._formBuilder.group({id:[],id_streife:[],funktion:[],persnr:[],name:[],an_bord:[],von_bord:[],search:[]})}get form(){return this.besatzungForm.controls}ngOnInit(){this.modalService.getData().then(t=>{this.title=t.data.title,this.besatzungForm.patchValue(t.data.besatzung)})}setAnBordDate(){this.besatzungForm.patchValue({an_bord:(0,o.eT)("now")}),this.besatzungForm.markAsDirty()}setVonBordDate(){this.besatzungForm.patchValue({von_bord:(0,o.eT)("now")}),this.besatzungForm.markAsDirty()}searchUser(t){(0,o.hj)(t.target.value.length)&&t.target.value.length>5&&t.target.value.length<9&&(this.namen$=this.appService.getSearchUser(t.target.value)),!(0,o.hj)(t.target.value)&&t.target.value.length>5&&(this.namen$=this.appService.getSearchUser(t.target.value))}create(){var t;this._specFacade.insertBesatzung(this.besatzungForm.value),null===(t=this.modal)||void 0===t||t.close()}update(){var t;this._specFacade.updateBesatzung(this.besatzungForm.value),null===(t=this.modal)||void 0===t||t.close()}delete(t){var e;this._specFacade.deleteBesatzung(t),null===(e=this.modal)||void 0===e||e.close()}cancel(){var t;null===(t=this.modal)||void 0===t||t.close()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(r.qu),a.Y36(i.C),a.Y36(l.V),a.Y36(u.Z),a.Y36(s.z))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-besatzung-modal"]],viewQuery:function(t,e){if(1&t&&a.Gf(Z,5),2&t){let t;a.iGM(t=a.CRH())&&(e.modal=t.first)}},decls:47,vars:19,consts:[["modalComponent",""],[1,"h-16","p-8","flex","items-center","justify-between","border-b"],["tabindex","0",1,"dark:text-gray-50","focus:outline-none","text-2xl","font-semibold","leading-6","text-gray-800"],[1,"w-6","h-6","focus:outline-none","rounded-md","cursor-pointer",3,"click"],["name","x",1,"w-6","h-6","stroke-2","stroke-current","text-gray-500"],[1,"content"],[3,"formGroup"],[1,"hidden"],["appearance","fill"],["matInput","","type","text","formControlName","id","readonly",""],["matInput","","type","text","formControlName","id_streife","readonly",""],["appearance","fill",4,"ngIf"],["formControlName","funktion"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","flex-row","items-center"],["matInput","","type","datetime-local","formControlName","an_bord",3,"value"],[1,"w-6","h-6","mx-3","focus:outline-none","rounded-md","cursor-pointer",3,"click"],["name","calendar-event",1,"w-6","h-6","stroke-1","stroke-current","text-black"],["matInput","","type","datetime-local","formControlName","von_bord",3,"value"],[1,"absolute","h-16","px-8","right-0","bottom-0","left-0","flex","items-center","justify-between","border-t"],[4,"ngTemplateOutlet"],["toolbar",""],["formControlName","persnr"],["matInput","","placeholder","Person suchen...","autofocus","",1,"",3,"keyup"],["name",""],["formControlName","search"],[4,"ngIf"],[3,"value"],["matInput","","type","text","formControlName","persnr","readonly",""],["type","button",1,"p-2","mr-3","bg-gray-800","text-white","rounded",3,"click"],["type","button","class","p-2 mr-3 bg-red-400 text-black rounded",3,"click",4,"ngIf"],["type","button","class","p-2 ml-3 bg-gray-800 text-white rounded",3,"click",4,"ngIf"],["type","button",1,"p-2","mr-3","bg-red-400","text-black","rounded",3,"click"],["type","button",1,"p-2","ml-3","bg-gray-800","text-white","rounded",3,"click"]],template:function(t,e){if(1&t&&(a.TgZ(0,"app-modal",null,0),a.TgZ(2,"header",1),a.TgZ(3,"p",2),a._uU(4),a.qZA(),a.TgZ(5,"button",3),a.NdJ("click",function(){return e.cancel()}),a._UZ(6,"icons",4),a.qZA(),a.qZA(),a.TgZ(7,"div",5),a.TgZ(8,"form",6),a.TgZ(9,"div",7),a.TgZ(10,"mat-form-field",8),a.TgZ(11,"mat-label"),a._uU(12,"id"),a.qZA(),a._UZ(13,"input",9),a.qZA(),a.TgZ(14,"mat-form-field",8),a.TgZ(15,"mat-label"),a._uU(16,"id_streife"),a.qZA(),a._UZ(17,"input",10),a.qZA(),a.qZA(),a.YNc(18,x,11,7,"mat-form-field",11),a.YNc(19,w,4,0,"mat-form-field",11),a.TgZ(20,"mat-form-field",8),a.TgZ(21,"mat-label"),a._uU(22,"Funktion"),a.qZA(),a.TgZ(23,"mat-select",12),a.YNc(24,_,2,2,"mat-option",13),a.ALo(25,"orderBy"),a.ALo(26,"async"),a.qZA(),a.qZA(),a.TgZ(27,"div",14),a.TgZ(28,"mat-form-field",8),a.TgZ(29,"mat-label"),a._uU(30,"An Bord"),a.qZA(),a._UZ(31,"input",15),a.ALo(32,"date"),a.qZA(),a.TgZ(33,"button",16),a.NdJ("click",function(){return e.setAnBordDate()}),a._UZ(34,"icons",17),a.qZA(),a.qZA(),a.TgZ(35,"div",14),a.TgZ(36,"mat-form-field",8),a.TgZ(37,"mat-label"),a._uU(38,"Von Bord"),a.qZA(),a._UZ(39,"input",18),a.ALo(40,"date"),a.qZA(),a.TgZ(41,"button",16),a.NdJ("click",function(){return e.setVonBordDate()}),a._UZ(42,"icons",17),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(43,"footer",19),a.YNc(44,k,1,0,"ng-container",20),a.qZA(),a.qZA(),a.YNc(45,F,7,3,"ng-template",null,21,a.W1O)),2&t){const t=a.MAs(46);a.xp6(4),a.hij(" ",e.title," "),a.xp6(4),a.Q6J("formGroup",e.besatzungForm),a.xp6(10),a.Q6J("ngIf",!e.besatzungForm.value.persnr),a.xp6(1),a.Q6J("ngIf",e.besatzungForm.value.persnr),a.xp6(5),a.Q6J("ngForOf",a.xi3(25,8,a.lcZ(26,11,e.funktionen$),"bezeichnung")),a.xp6(7),a.s9C("value",a.xi3(32,13,e.besatzungForm.value.an_bord,"yyyy-MM-ddTHH:mm")),a.xp6(8),a.s9C("value",a.xi3(40,16,e.besatzungForm.value.von_bord,"yyyy-MM-ddTHH:mm")),a.xp6(5),a.Q6J("ngTemplateOutlet",t)}},directives:[c.z,m._,r._Y,r.JL,r.sg,d.KE,d.hX,g.Nt,r.Fj,r.JJ,r.u,f.O5,p.gD,f.sg,f.tP,h.ey],pipes:[b.d,f.Ov,f.uU],styles:[".content{position:absolute;top:8rem;right:2rem;bottom:4rem;left:2rem;overflow:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.content::-webkit-scrollbar{display:none}.dark .mat-form-field-ripple,.dark .mat-form-field-underline:before{background-color:#fff6!important}.dark .mat-select-value,.dark mat-label{color:#d3d3d3!important}.mat-input-element{padding:.5rem}textarea:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}"],encapsulation:2}),t})()}}]);