(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[93],{9093:(t,e,n)=>{"use strict";n.r(e),n.d(e,{QrscannerComponent:()=>u});var o=n(2179),r=n(5366),a=n(6410),i=n(6691),c=n(959),s=n(1116);const l=["modalComponent"];function d(t,e){1&t&&r.GkF(0)}function p(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",6),r.TgZ(1,"div"),r.TgZ(2,"button",7),r.NdJ("click",function(){return r.CHM(t),r.oxw().cancel()}),r._uU(3,"Abbrechen"),r.qZA(),r.qZA(),r.qZA()}}let u=(()=>{class t{constructor(t,e){this.router=t,this.modalService=e,this.id=0}ngAfterViewInit(){this.qrScannerComponent.getMediaDevices().then(t=>{console.log(t);const e=[];for(const n of t)"videoinput"===n.kind.toString()&&e.push(n);if(e.length>0){let t;console.log(e);for(const n of e)if(n.label.includes("environment")){t=n;break}this.qrScannerComponent.chooseCamera.next(t||e[0])}}),this.qrScannerComponent.capturedQr.subscribe(t=>{var e;let n=JSON.parse(t);console.log(t),null===(e=this.modal)||void 0===e||e.close(),this.router.navigate(["/mobile","boot",n.id])})}ngOnInit(){this.modalService.getData().then(t=>{})}cancel(){var t;null===(t=this.modal)||void 0===t||t.close()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a.F0),r.Y36(i.Z))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-qrscanner"]],viewQuery:function(t,e){if(1&t&&(r.Gf(l,5),r.Gf(o.H,5)),2&t){let t;r.iGM(t=r.CRH())&&(e.modal=t.first),r.iGM(t=r.CRH())&&(e.qrScannerComponent=t.first)}},decls:11,vars:6,consts:[["modalComponent",""],[1,"m-3","mb-5","text-xl"],[1,"content"],[1,"mt-5",3,"debug","canvasWidth","canvasHeight","stopAfterScan","updateTime"],[4,"ngTemplateOutlet"],["toolbar",""],[1,"py-3","flex","justify-between"],["type","button",1,"p-2","ml-3","bg-gray-800","text-white","rounded",3,"click"]],template:function(t,e){if(1&t&&(r.TgZ(0,"app-modal",null,0),r.TgZ(2,"header"),r.TgZ(3,"h2",1),r._uU(4,"Boot scannen"),r.qZA(),r.qZA(),r.TgZ(5,"div",2),r._UZ(6,"qr-scanner",3),r.qZA(),r.TgZ(7,"footer"),r.YNc(8,d,1,0,"ng-container",4),r.qZA(),r.qZA(),r.YNc(9,p,4,0,"ng-template",null,5,r.W1O)),2&t){const t=r.MAs(10);r.xp6(6),r.Q6J("debug",!1)("canvasWidth",1080)("canvasHeight",720)("stopAfterScan",!0)("updateTime",500),r.xp6(2),r.Q6J("ngTemplateOutlet",t)}},directives:[c.z,o.H,s.tP],styles:["header{border-bottom-width:1px;padding-left:1.25rem;padding-right:1.25rem;padding-top:1.25rem}footer,header{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}footer{border-top-width:1px;padding:.75rem 1.25rem}.content{padding:1.25rem}.content,.content-map{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}"],encapsulation:2}),t})()}}]);