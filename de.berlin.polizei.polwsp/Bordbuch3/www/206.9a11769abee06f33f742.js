(self.webpackChunkbordbuch_wsp_final=self.webpackChunkbordbuch_wsp_final||[]).push([[206],{4206:(t,e,n)=>{"use strict";n.r(e),n.d(e,{MobileModule:()=>M});var o=n(766),i=n(5366),r=n(1671),s=n(653),c=n(186),a=n(8633),u=n(4020),l=n(1673),p=n(8290),d=n(1116),f=n(8256);function b(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",9),i.NdJ("click",function(){i.CHM(t);const e=i.oxw();return e.status=!e.status}),i._UZ(1,"icons",10),i.qZA()}}const h=function(t){return["/mobile","boot",t]},g=function(){return{exact:!0}};function w(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",14),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).boot()}),i.ALo(1,"async"),i._UZ(2,"icons",23),i.TgZ(3,"p",16),i._uU(4,"Streife"),i.qZA(),i.qZA()}if(2&t){const t=i.oxw(2);i.Q6J("routerLink",i.VKq(4,h,i.lcZ(1,2,t.id$)))("routerLinkActiveOptions",i.DdM(6,g))}}const m=function(t){return["/mobile","boot",t,"map"]};function k(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",24),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).boot()}),i.ALo(1,"async"),i._UZ(2,"icons",25),i.TgZ(3,"p",16),i._uU(4,"Map"),i.qZA(),i.qZA()}if(2&t){const t=i.oxw(2);i.Q6J("routerLink",i.VKq(3,m,i.lcZ(1,1,t.id$)))}}const Z=function(t){return["/mobile","boot",t,"positions"]};function x(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",24),i.NdJ("click",function(){return i.CHM(t),i.oxw(2).boot()}),i.ALo(1,"async"),i._UZ(2,"icons",26),i.TgZ(3,"p",16),i._uU(4,"Positionen"),i.qZA(),i.qZA()}if(2&t){const t=i.oxw(2);i.Q6J("routerLink",i.VKq(3,Z,i.lcZ(1,1,t.id$)))}}const v=function(){return["/mobile"]};function y(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",11),i.TgZ(1,"div",12),i.TgZ(2,"button",13),i.NdJ("click",function(){return i.CHM(t),i.oxw().sidebarHandler()}),i._UZ(3,"icons",10),i.qZA(),i.TgZ(4,"button",14),i.NdJ("click",function(){return i.CHM(t),i.oxw().auswahl()}),i._UZ(5,"icons",15),i.TgZ(6,"p",16),i._uU(7,"Bordbuch-Auswahl"),i.qZA(),i.qZA(),i.YNc(8,w,5,7,"button",17),i.ALo(9,"async"),i.YNc(10,k,5,5,"button",18),i.ALo(11,"async"),i.YNc(12,x,5,5,"button",18),i.ALo(13,"async"),i.qZA(),i.TgZ(14,"div",19),i.TgZ(15,"div",20),i.TgZ(16,"button",21),i.NdJ("click",function(){return i.CHM(t),i.oxw().logout()}),i._UZ(17,"icons",22),i.TgZ(18,"p",16),i._uU(19,"Logout"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.Q6J("@slideInLeft",void 0)("@slideOutLeft",void 0),i.xp6(4),i.Q6J("routerLink",i.DdM(13,v))("routerLinkActiveOptions",i.DdM(14,g)),i.xp6(4),i.Q6J("ngIf",i.lcZ(9,7,t.id$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(11,9,t.id$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(13,11,t.id$))}}let A=(()=>{class t{constructor(t){this.store=t,this.status=!1,this.id$=s.E,this.name$=s.E,this.id$=this.store.pipe((0,r.Ys)(l.ev.selectShipId)),this.name$=this.store.pipe((0,r.Ys)(l.ev.selectShipName))}sidebarHandler(){this.status=!this.status}auswahl(){this.resetStore(),this.status=!this.status}boot(){this.status=!this.status}resetStore(){this.store.dispatch(l.KS.resetStore()),this.store.dispatch(u.xn.resetStore()),this.store.dispatch(p.hw.resetStore())}logout(){this.resetStore(),this.store.dispatch((0,c.k)())}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(r.yh))},t.\u0275cmp=i.Xpm({type:t,selectors:[["topnav"]],decls:12,vars:6,consts:[[1,"absolute","w-full","p-5","flex","justify-between","items-center","bg-gray-200","bg-opacity-50","shadow-lg","z-40"],["aria-label","toggler",1,"flex","justify-center","items-center"],["id","open","aria-label","open",1,"w-8","h-8","focus:outline-none",3,"ngClass","click"],["name","menu",1,"w-8","h-8","stroke-1","stroke-current"],["aria-label","close","class","w-8 h-8 focus:outline-none ",3,"click",4,"ngIf"],[1,"text-base"],[1,"flex","justify-between","items-center","space-x-3"],["name","bordbuch-boot",1,"h-8"],["class","sidebar z-50",4,"ngIf"],["aria-label","close",1,"w-8","h-8","focus:outline-none",3,"click"],["name","menu-off",1,"w-8","h-8","stroke-1","stroke-current"],[1,"sidebar","z-50"],[1,"mt-5","flex","flex-col","justify-start","items-center","px-4","w-full","space-y-3","pb-5"],[1,"w-8","h-8","block","focus:outline-none",3,"click"],["routerLinkActive","active-link",1,"btn",3,"routerLink","routerLinkActiveOptions","click"],["name","refresh",1,"w-8","h-8","stroke-1","stroke-current"],[1,"text-base","leading-4"],["class","btn","routerLinkActive","active-link",3,"routerLink","routerLinkActiveOptions","click",4,"ngIf"],["class","btn","routerLinkActive","active-link",3,"routerLink","click",4,"ngIf"],[1,"flex","flex-col","justify-between","items-center","h-full","space-y-80","w-full"],[1,"space-y-3","flex","pt-8","border-gray-200","border-t","justify-start","pb-6","px-4","pl-4","flex-col","items-center","w-full"],[1,"btn",3,"click"],["name","logout",1,"w-8","h-8","stroke-1","stroke-current"],["name","ship",1,"w-8","h-8","stroke-1","stroke-current"],["routerLinkActive","active-link",1,"btn",3,"routerLink","click"],["name","map",1,"w-8","h-8","stroke-1","stroke-current"],["name","location-marker",1,"w-8","h-8","stroke-1","stroke-current"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"button",2),i.NdJ("click",function(){return e.sidebarHandler()}),i._UZ(3,"icons",3),i.qZA(),i.YNc(4,b,2,0,"button",4),i.qZA(),i.TgZ(5,"div"),i.TgZ(6,"h2",5),i._uU(7),i.ALo(8,"async"),i.qZA(),i.qZA(),i.TgZ(9,"div",6),i._UZ(10,"icons",7),i.qZA(),i.qZA(),i.YNc(11,y,20,15,"div",8)),2&t&&(i.xp6(2),i.Q6J("ngClass","text-gray-800 "+(e.status?"hidden":"block")),i.xp6(2),i.Q6J("ngIf",!0===e.status),i.xp6(3),i.Oqu(i.lcZ(8,4,e.name$)),i.xp6(4),i.Q6J("ngIf",e.status))},directives:[d.mk,f._,d.O5,o.Od,o.rH],pipes:[d.Ov],styles:[".sidebar[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;display:flex;width:100%;transform:var(--tw-transform);flex-direction:column;align-items:flex-start;justify-content:flex-start;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:640px){.sidebar[_ngcontent-%COMP%]{width:16rem}}.btn[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:flex-start}.btn[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem * var(--tw-space-x-reverse));margin-left:calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))}.btn[_ngcontent-%COMP%]{border-radius:.25rem;padding-top:.75rem;padding-bottom:.75rem;padding-left:1rem;--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:hover{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.btn[_ngcontent-%COMP%]:focus{outline:2px solid #0000;outline-offset:2px}.active-link[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(59,130,246,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}"],data:{animation:a.F}}),t})();const _=[{path:"",component:(()=>{class t{constructor(t,e,n){this.activatedRoute=t,this.router=e,this.store=n}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.gz),i.Y36(o.F0),i.Y36(r.yh))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-mobile"]],decls:2,vars:0,template:function(t,e){1&t&&(i._UZ(0,"topnav"),i._UZ(1,"router-outlet"))},directives:[A,o.lC],styles:[""]}),t})(),children:[{path:"",loadChildren:()=>Promise.all([n.e(10),n.e(742)]).then(n.bind(n,3742)).then(t=>t.BootAuswahlModule)},{path:"boot",loadChildren:()=>Promise.all([n.e(10),n.e(502)]).then(n.bind(n,8502)).then(t=>t.BootModule)}]}];let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.Bz.forChild(_)],o.Bz]}),t})();var C=n(8959);let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[d.ez,o.Bz,C.m]]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[C.m,q,L]]}),t})()}}]);