(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[10],{2302:(e,t,a)=>{"use strict";a.d(t,{w:()=>n});var s=a(5366);const i=["*"];let n=(()=>{class e{constructor(){this.tabs=[],this.labelField="",this.onTabSelect=new s.vpe}select(e){console.log(e),this.onTabSelect.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["tabbar"]],inputs:{tabs:"tabs",labelField:"labelField",active:"active"},outputs:{onTabSelect:"onTabSelect"},ngContentSelectors:i,decls:2,vars:0,consts:[[1,"absolute","h-12","w-full","px-4","bottom-0","bg-white","dark:bg-gray-900"]],template:function(e,t){1&e&&(s.F$t(),s.TgZ(0,"nav",0),s.Hsn(1),s.qZA())},styles:["nav[_ngcontent-%COMP%]{bottom:0;display:flex;height:4rem;width:100%;align-items:center}.active[_ngcontent-%COMP%]{--tw-text-opacity:1;color:rgba(147,197,253,var(--tw-text-opacity))}"]}),e})()},3329:(e,t,a)=>{"use strict";a.d(t,{m:()=>n});var s=a(1116),i=a(5366);let n=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[s.ez]]}),e})()},4151:(e,t,a)=>{"use strict";a.d(t,{NZ:()=>i,sO:()=>s});var s={};a.r(s),a.d(s,{isKatLoaded:()=>l,katState:()=>o,selectDienststellen:()=>d,selectShipByDienststelle:()=>c,selectShips:()=>p,selectpruefvermerke:()=>h,selectpruefvermerkeByKategorie:()=>g,selectpruefvermerkkategorien:()=>u});var i=a(1813),n=a(1671),r=a(2665);const o=(0,n.ZF)(r.A.Kat),l=(0,n.P1)(o,e=>e.isAllDataLoaded),p=(0,n.P1)(o,e=>e.shipSelection),c=e=>(0,n.P1)(p,t=>t.filter(t=>t.dienststelle==e)),d=(0,n.P1)(o,e=>e.dienststellen),u=(0,n.P1)(o,e=>e.pruefvermerkKategorien),h=(0,n.P1)(o,e=>e.pruefvermerke),g=e=>(0,n.P1)(h,t=>t.filter(t=>t.kategorie==e))},2799:(e,t,a)=>{"use strict";a.d(t,{R:()=>i,T:()=>n});var s=a(1671);const i=(0,s.PH)("[Ship Resolver] Load All Ship"),n=(0,s.PH)("[Load Ship Effect] All Ship Loaded",(0,s.Ky)())},6907:(e,t,a)=>{"use strict";a.d(t,{VL:()=>s,Yn:()=>i,td:()=>n});const s=(0,a(322).H)(),i=s.getInitialState({isAllDataLoaded:!1}),{selectAll:n}=s.getSelectors()},3624:(e,t,a)=>{"use strict";a.d(t,{O:()=>g});var s=a(3395),i=a(1671),n=a(2799),r=a(6907);const o=(0,i.Lq)(r.Yn,(0,i.on)(n.T,(e,t)=>r.VL.addMany(t.shipSelection,Object.assign(Object.assign({},e),{isAllDataLoaded:!0}))));var l=a(436),p=a(9996),c=a(5366),d=a(9204);let u=(()=>{class e{constructor(e,t){this.actions$=e,this.appService=t,this.loadData$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(n.R),(0,l.b)(e=>this.appService.getSchiffe()),(0,p.U)(e=>(0,n.T)({shipSelection:e}))))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(s.eX),c.LFG(d.z))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})();var h=a(2665);let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[d.z],imports:[[i.Aw.forFeature(h.A.ShipSelection,o),s.sQ.forFeature([u])]]}),e})()},16:(e,t,a)=>{"use strict";a.d(t,{T:()=>u});var s=a(1671),i=a(4019),n=a(3835),r=a(3530),o=a(1520),l=a(4151),p=a(2799),c=a(1081),d=a(5366);let u=(()=>{class e{constructor(e){this.store=e,this.loading=!1}resolve(e,t){return this.store.pipe((0,s.Ys)(c.zO),(0,i.b)(e=>{this.loading||e||(this.loading=!0,this.store.dispatch((0,p.R)()),this.store.dispatch(l.NZ.loadAllShip()),this.store.dispatch(l.NZ.loadPruefvermerke()),this.store.dispatch(l.NZ.loadPruefvermerkKategorien()),this.store.dispatch(l.NZ.loadZaehlerstandstypen()),this.store.dispatch(l.NZ.loadDienststellen()))}),(0,n.h)(e=>e),(0,r.P)(),(0,o.x)(()=>this.loading=!1))}}return e.\u0275fac=function(t){return new(t||e)(d.LFG(s.yh))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac}),e})()},1081:(e,t,a)=>{"use strict";a.d(t,{zO:()=>o,Zb:()=>l});var s=a(1671),i=a(2665),n=a(6907);const r=(0,s.ZF)(i.A.ShipSelection),o=(0,s.P1)(r,e=>e.isAllDataLoaded),l=(0,s.P1)(r,n.td)},5148:(e,t,a)=>{"use strict";a.d(t,{g:()=>g});var s=a(3395),i=a(1671),n=a(2665),r=a(9204),o=a(4689),l=a(9996),p=a(1673),c=a(5366);let d=(()=>{class e{constructor(e,t){this.actions$=e,this.appService=t,this.loadShip$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.loadShip),(0,o.w)(e=>this.appService.getSchiff(e.id_ship).pipe((0,l.U)(e=>p.KS.shipLoaded({ship:e})))))),this.loadPatrol$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.loadPatrol),(0,o.w)(e=>this.appService.getStreifeVonSchiff(e.id_ship).pipe((0,l.U)(e=>p.KS.patrolLoaded({patrol:e})))))),this.insertPatrol$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.insertPatrol),(0,o.w)(e=>this.appService.insertStreife(e.insert).pipe((0,l.U)(t=>p.KS.insertPatrolSuccess({action:e,id:t})))))),this.updatePatrol$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.updatePatrol),(0,o.w)(e=>this.appService.updateStreife(e.update)))),this.deletePatrol$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.deletePatrol),(0,o.w)(e=>this.appService.deleteStreife(e.id).pipe((0,l.U)(e=>p.KS.deletePatrolSuccess({status:e})))))),this.loadReparaturen$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.loadReparaturen),(0,o.w)(e=>this.appService.getReparaturen(e.id_ship).pipe((0,l.U)(e=>p.KS.reparaturenLoaded({reparaturen:e})))))),this.insertReparatur$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.insertReparatur),(0,o.w)(e=>this.appService.insertReparatur(e.insert).pipe((0,l.U)(t=>p.KS.insertReparaturSuccess({action:e,id:t})))))),this.loadBetankungen$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.loadBetankungen),(0,o.w)(e=>this.appService.getBetankungen(e.id_ship).pipe((0,l.U)(e=>p.KS.betankungenLoaded({betankungen:e})))))),this.insertBetankung$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.insertBetankung),(0,o.w)(e=>this.appService.insertBetankung(e.insert).pipe((0,l.U)(t=>p.KS.insertBetankungSuccess({action:e,id:t})))))),this.updateBetankung$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.updateBetankung),(0,o.w)(e=>this.appService.updateBetankung(e.update.changes)))),this.deleteBetankung$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.deleteBetankung),(0,o.w)(e=>this.appService.deleteBetankung(e.id))),{dispatch:!1}),this.insertBesatzung$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.insertPatrolBesatzung),(0,o.w)(e=>this.appService.insertBesatzung(e.insert).pipe((0,l.U)(t=>p.KS.insertPatrolBesatzungSuccess({action:e,id:t})))))),this.updateBesatzung$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.updatePatrolBesatzung),(0,o.w)(e=>this.appService.updateBesatzung(e.update.changes)))),this.deleteBesatzung$=(0,s.GW)(()=>this.actions$.pipe((0,s.l4)(p.KS.deletePatrolBesatzung),(0,o.w)(e=>this.appService.deleteBesatzung(e.id))),{dispatch:!1})}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(s.eX),c.LFG(r.z))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})();const u={ship:void 0,patrol:void 0,isAllDataLoaded:!1},h=(0,i.Lq)(u,(0,i.on)(p.KS.shipLoaded,(e,t)=>({ship:t.ship,patrol:e.patrol,zaehlerstaende:e.zaehlerstaende,reparaturen:e.reparaturen,betankungen:e.betankungen,isAllDataLoaded:!1})),(0,i.on)(p.KS.patrolLoaded,(e,t)=>({ship:e.ship,patrol:t.patrol,zaehlerstaende:e.zaehlerstaende,reparaturen:e.reparaturen,betankungen:e.betankungen,isAllDataLoaded:!1})),(0,i.on)(p.KS.initializePatrol,(e,t)=>{let a=Object.assign({},t.initialize);return Object.assign(Object.assign({},e),{patrol:a})}),(0,i.on)(p.KS.insertPatrolSuccess,(e,t)=>{let a=Object.assign({},t.action.insert,{id:t.id});return Object.assign(Object.assign({},e),{patrol:a})}),(0,i.on)(p.KS.updatePatrol,(e,t)=>{let a=t.update;return Object.assign(Object.assign({},e),{patrol:a})}),(0,i.on)(p.KS.deletePatrolSuccess,(e,t)=>Object.assign(Object.assign({},e),{patrol:void 0})),(0,i.on)(p.KS.reparaturenLoaded,(e,t)=>({ship:e.ship,patrol:e.patrol,zaehlerstaende:e.zaehlerstaende,reparaturen:t.reparaturen,betankungen:e.betankungen,isAllDataLoaded:!1})),(0,i.on)(p.KS.betankungenLoaded,(e,t)=>({ship:e.ship,patrol:e.patrol,zaehlerstaende:e.zaehlerstaende,reparaturen:e.reparaturen,betankungen:t.betankungen,isAllDataLoaded:!1})),(0,i.on)(p.KS.insertPatrolBesatzungSuccess,(e,t)=>{var a;let s=Object.assign({},t.action.insert,{id:t.id}),i=null===(a=e.patrol)||void 0===a?void 0:a.besatzung;return console.log("besatzung hinzuf\xfcgen"),console.log(i),i=[...i,s],Object.assign(Object.assign({},e),{patrol:Object.assign({},e.patrol,{besatzung:i})})}),(0,i.on)(p.KS.updatePatrolBesatzung,(e,t)=>{var a;let s=null===(a=e.patrol)||void 0===a?void 0:a.besatzung.filter(e=>e.id!=t.update.changes.id);return s.push(t.update.changes),Object.assign(Object.assign({},e),{patrol:Object.assign({},e.patrol,{besatzung:s})})}),(0,i.on)(p.KS.deletePatrolBesatzung,(e,t)=>{var a;const s=null===(a=e.patrol)||void 0===a?void 0:a.besatzung.filter(e=>e.id!==t.id);return Object.assign(Object.assign({},e),{patrol:Object.assign({},e.patrol,{besatzung:s})})}),(0,i.on)(p.KS.insertBetankungSuccess,(e,t)=>{let a=Object.assign({},t.action.insert,{id:t.id}),s=e.betankungen;return s=[...s,a],Object.assign(Object.assign({},e),{betankungen:s})}),(0,i.on)(p.KS.insertReparaturSuccess,(e,t)=>{let a=Object.assign({},t.action.insert,{id:t.id}),s=e.reparaturen;return s=[...s,a],Object.assign(Object.assign({},e),{reparaturen:s})}),(0,i.on)(p.KS.resetStore,(e,t)=>Object.assign({},u)));let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[r.z],imports:[[i.Aw.forFeature(n.A.Ship,h),s.sQ.forFeature([d])]]}),e})()}}]);