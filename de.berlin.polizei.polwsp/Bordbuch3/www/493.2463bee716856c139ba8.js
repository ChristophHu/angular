(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[493],{9493:(t,e,n)=>{"use strict";n.r(e),n.d(e,{BetankungComponent:()=>A});var o=n(1673),i=n(5366),r=n(1041),l=n(1671),a=n(6691),u=n(9204),c=n(959),m=n(8256),d=n(3070),s=n(9550),p=n(767),g=n(1116),f=n(7064);const b=["modalComponent"];function Z(t,e){if(1&t&&(i.TgZ(0,"mat-option",22),i._uU(1),i.qZA()),2&t){const t=e.$implicit;i.Q6J("value",t.bezeichnung),i.xp6(1),i.hij(" ",t.bezeichnung," ")}}function h(t,e){1&t&&i.GkF(0)}function k(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",26),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).delete()}),i._uU(1,"l\xf6schen"),i.qZA()}}function x(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",27),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).update()}),i._uU(1,"Speichern"),i.qZA()}}function y(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",27),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).create()}),i._uU(1,"Erstellen"),i.qZA()}}function q(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div"),i.TgZ(1,"button",23),i.NdJ("click",function(){return i.CHM(t),i.oxw().cancel()}),i._uU(2,"Abbrechen"),i.qZA(),i.YNc(3,k,2,0,"button",24),i.qZA(),i.TgZ(4,"div"),i.YNc(5,x,2,0,"button",25),i.YNc(6,y,2,0,"button",25),i.qZA()}if(2&t){const t=i.oxw();i.xp6(3),i.Q6J("ngIf",t.betankungForm.value.id),i.xp6(2),i.Q6J("ngIf",!t.betankungForm.pristine&&t.betankungForm.value.id),i.xp6(1),i.Q6J("ngIf",!t.betankungForm.value.id)}}let A=(()=>{class t{constructor(t,e,n,o){this._formBuilder=t,this.store=e,this.modalService=n,this.appService=o,this.title="",this.was=[{id:1,bezeichnung:"Diesel"},{id:2,bezeichnung:"Benzin"},{id:3,bezeichnung:"Motorenoel"}],this.betankungForm=this._formBuilder.group({id:[],id_ship:[],date:[],location:this._formBuilder.group({latitude:[],longitude:[]}),ort:[],fuel:[],fuelfillingquantity:[]})}ngOnInit(){this.modalService.getData().then(t=>{this.title=t.data.title,this.betankungForm.patchValue(t.data)})}create(){var t;const e=this.betankungForm.value;console.log(e),this.store.dispatch(o.KS.insertBetankung({insert:e})),null===(t=this.modal)||void 0===t||t.close()}update(){}delete(){}cancel(){var t;null===(t=this.modal)||void 0===t||t.close()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(r.qu),i.Y36(l.yh),i.Y36(a.Z),i.Y36(u.z))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-betankung"]],viewQuery:function(t,e){if(1&t&&i.Gf(b,5),2&t){let t;i.iGM(t=i.CRH())&&(e.modal=t.first)}},decls:43,vars:9,consts:[["modalComponent",""],[1,"h-16","p-8","flex","items-center","justify-between","border-b"],["tabindex","0",1,"dark:text-gray-50","focus:outline-none","text-2xl","font-semibold","leading-6","text-gray-800"],[1,"w-6","h-6","focus:outline-none","rounded-md","cursor-pointer",3,"click"],["name","x",1,"w-6","h-6","stroke-2","stroke-current","text-gray-500"],[1,"content"],[3,"formGroup"],[1,"hidden"],["appearance","fill"],["matInput","","type","text","formControlName","id","readonly",""],["matInput","","type","text","formControlName","id_ship","readonly",""],["matInput","","type","datetime-local","formControlName","date",3,"value"],[1,"flex","flex-row","items-center"],[1,"mx-3","w-6","h-6"],["name","map",1,"w-6","h-6","stroke-2","stroke-current","text-gray-500"],["matInput","","type","text","formControlName","ort","readonly",""],["formControlName","fuel"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","number","formControlName","fuelfillingquantity"],[1,"absolute","h-16","px-8","right-0","bottom-0","left-0","flex","items-center","justify-between","border-t"],[4,"ngTemplateOutlet"],["toolbar",""],[3,"value"],["type","button",1,"p-2","mr-3","bg-gray-800","text-white","rounded",3,"click"],["type","button","class","p-2 mr-3 bg-red-400 text-black rounded",3,"click",4,"ngIf"],["type","button","class","p-2 ml-3 bg-gray-800 text-white rounded",3,"click",4,"ngIf"],["type","button",1,"p-2","mr-3","bg-red-400","text-black","rounded",3,"click"],["type","button",1,"p-2","ml-3","bg-gray-800","text-white","rounded",3,"click"]],template:function(t,e){if(1&t&&(i.TgZ(0,"app-modal",null,0),i.TgZ(2,"header",1),i.TgZ(3,"p",2),i._uU(4),i.qZA(),i.TgZ(5,"button",3),i.NdJ("click",function(){return e.cancel()}),i._UZ(6,"icons",4),i.qZA(),i.qZA(),i.TgZ(7,"div",5),i.TgZ(8,"form",6),i.TgZ(9,"div",7),i.TgZ(10,"mat-form-field",8),i.TgZ(11,"mat-label"),i._uU(12,"id"),i.qZA(),i._UZ(13,"input",9),i.qZA(),i.TgZ(14,"mat-form-field",8),i.TgZ(15,"mat-label"),i._uU(16,"id_ship"),i.qZA(),i._UZ(17,"input",10),i.qZA(),i.qZA(),i.TgZ(18,"mat-form-field",8),i.TgZ(19,"mat-label"),i._uU(20,"Datum/Uhrzeit"),i.qZA(),i._UZ(21,"input",11),i.ALo(22,"date"),i.qZA(),i.TgZ(23,"div",12),i.TgZ(24,"div",13),i._UZ(25,"icons",14),i.qZA(),i.qZA(),i.TgZ(26,"mat-form-field",8),i.TgZ(27,"mat-label"),i._uU(28,"Ortsbezeichnung"),i.qZA(),i._UZ(29,"input",15),i.qZA(),i.TgZ(30,"mat-form-field",8),i.TgZ(31,"mat-label"),i._uU(32,"Was wurde getankt"),i.qZA(),i.TgZ(33,"mat-select",16),i.YNc(34,Z,2,2,"mat-option",17),i.qZA(),i.qZA(),i.TgZ(35,"mat-form-field",8),i.TgZ(36,"mat-label"),i._uU(37,"Menge (in Liter)"),i.qZA(),i._UZ(38,"input",18),i.qZA(),i.qZA(),i.qZA(),i.TgZ(39,"footer",19),i.YNc(40,h,1,0,"ng-container",20),i.qZA(),i.qZA(),i.YNc(41,q,7,3,"ng-template",null,21,i.W1O)),2&t){const t=i.MAs(42);i.xp6(4),i.hij(" ",e.title," "),i.xp6(4),i.Q6J("formGroup",e.betankungForm),i.xp6(13),i.s9C("value",i.Dn7(22,5,e.betankungForm.value.date,"yyyy-MM-ddTHH:mm","+1:00")),i.xp6(13),i.Q6J("ngForOf",e.was),i.xp6(6),i.Q6J("ngTemplateOutlet",t)}},directives:[c.z,m._,r._Y,r.JL,r.sg,d.KE,d.hX,s.Nt,r.Fj,r.JJ,r.u,p.gD,g.sg,r.wV,g.tP,f.ey,g.O5],pipes:[g.uU],styles:[".content{position:absolute;top:8rem;right:2rem;bottom:4rem;left:2rem;overflow:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.content::-webkit-scrollbar{display:none}.dark .mat-form-field-ripple,.dark .mat-form-field-underline:before{background-color:#fff6!important}.dark .mat-select-value,.dark mat-label{color:#d3d3d3!important}"],encapsulation:2}),t})()}}]);