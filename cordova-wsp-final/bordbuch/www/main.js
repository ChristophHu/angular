(self["webpackChunkbordbuch_wsp_final"] = self["webpackChunkbordbuch_wsp_final"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 60132:
/*!*****************************************************************!*\
  !*** ./projects/icon-library/src/lib/icon-library.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconLibraryComponent": () => (/* binding */ IconLibraryComponent)
/* harmony export */ });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ 74843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


const _c0 = ["*"];
class IconLibraryComponent {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    set name(iconName) {
        this.renderer.setProperty(this.element.nativeElement, 'innerHTML', _icons__WEBPACK_IMPORTED_MODULE_0__.icons[iconName] || null);
    }
}
IconLibraryComponent.ɵfac = function IconLibraryComponent_Factory(t) { return new (t || IconLibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
IconLibraryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IconLibraryComponent, selectors: [["icons"]], inputs: { name: "name" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function IconLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLWxpYnJhcnkuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 16551:
/*!**************************************************************!*\
  !*** ./projects/icon-library/src/lib/icon-library.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconLibraryModule": () => (/* binding */ IconLibraryModule)
/* harmony export */ });
/* harmony import */ var _icon_library_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-library.component */ 60132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class IconLibraryModule {
}
IconLibraryModule.ɵfac = function IconLibraryModule_Factory(t) { return new (t || IconLibraryModule)(); };
IconLibraryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconLibraryModule });
IconLibraryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconLibraryModule, { declarations: [_icon_library_component__WEBPACK_IMPORTED_MODULE_0__.IconLibraryComponent], exports: [_icon_library_component__WEBPACK_IMPORTED_MODULE_0__.IconLibraryComponent] }); })();


/***/ }),

/***/ 77419:
/*!***************************************************************!*\
  !*** ./projects/icon-library/src/lib/icon-library.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconLibraryService": () => (/* binding */ IconLibraryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class IconLibraryService {
    constructor() { }
}
IconLibraryService.ɵfac = function IconLibraryService_Factory(t) { return new (t || IconLibraryService)(); };
IconLibraryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IconLibraryService, factory: IconLibraryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 74843:
/*!************************************************!*\
  !*** ./projects/icon-library/src/lib/icons.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icons": () => (/* binding */ icons)
/* harmony export */ });
const icons = {
    // adjusted
    '2fa': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" /><path d="M10 16v-8h4" /><line x1="10" y1="12" x2="13" y2="12" /><path d="M17 16v-6a2 2 0 0 1 4 0v6" /><line x1="17" y1="13" x2="21" y2="13" /></svg>`,
    'add': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>`,
    'adjustment': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>`,
    'alert-circle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>`,
    'alert-triangle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v2m0 4v.01" /><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" /></svg>`,
    'calendar-event': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="5" width="16" height="16" rx="2" /><line x1="16" y1="3" x2="16" y2="7" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="4" y1="11" x2="20" y2="11" /><rect x="8" y="15" width="2" height="2" /></svg>`,
    'edit': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" /><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" /><line x1="16" y1="5" x2="19" y2="8" /></svg>`,
    'chevron-left': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>`,
    'chevron-right': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>`,
    'clock': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    'dashboard': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'dots': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>`,
    'dots-horizontal': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>`,
    'dots-vertical': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /><circle cx="12" cy="5" r="1" /></svg>`,
    'eye': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`,
    'eye-off': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>`,
    'file-info': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 14h1v4h1" /><path d="M12 11h.01" /></svg>`,
    'location-marker': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    'location-add': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>`,
    'logout': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>`,
    'map': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>`,
    'map-pins': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" /><line x1="8" y1="7" x2="8" y2="7.01" /><path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" /><line x1="16" y1="15" x2="16" y2="15.01" /></svg>`,
    'mail': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    'menu': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 6H20" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 12H20" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 18H20" stroke-linecap="round" stroke-linejoin="round"/></svg>  `,
    'menu-alt-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>`,
    'menu-off': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'messages': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'notification': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'qrcode': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>`,
    'question-mark': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    'refresh': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>`,
    'scan': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7v-1a2 2 0 0 1 2 -2h2" /><path d="M4 17v1a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v1" /><path d="M16 20h2a2 2 0 0 0 2 -2v-1" /><line x1="5" y1="12" x2="19" y2="12" /></svg>`,
    'security': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" troke-linecap="round" stroke-linejoin="round"/><path d="M10.85 12.15L19 4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 5L20 7" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 8L17 10" stroke-linecap="round" stroke-linejoin="round"/></svg>  `,
    'settings': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    'ship': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" /><path d="M4 18l-1 -5h18l-2 4" /><path d="M5 13v-6h8l4 6" /><path d="M7 7v-4h-1" /></svg>`,
    'table': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="10" y1="4" x2="10" y2="20" /></svg>`,
    'trash': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>`,
    'users': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'x': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18" stroke-linecap="round" stroke-linejoin="round" /><path d="M6 6L18 18" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
    // logos
    'logo-or': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" fill="none"><path d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z" fill="#1F2937"/></svg>`,
    'bordbuch-boot': `<svg width="100%" height="100%" viewBox="0 0 918 283" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                                <g transform="matrix(1,0,0,1,-38,-70.3693)">
                                    <g transform="matrix(1,-0,-0,1,38,70.3693)">
                                        <use xlink:href="#_Image1" x="0" y="0" width="918px" height="282.631px" transform="matrix(1,0,0,0.998695,0,0)"/>
                                    </g>
                                </g>
                                <defs>
                                    <image id="_Image1" width="918px" height="283px" xlink:href="data:image/png;base64,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"/>
                                </defs>
                            </svg>`,
    'bordbuch': `<svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                                <use xlink:href="#_Image1" x="38" y="70.429" width="918px" height="761.353px" transform="matrix(1,0,0,0.999151,0,0)"/>
                                <defs>
                                    <image id="_Image1" width="918px" height="762px" xlink:href="data:image/png;base64,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rru2RURERETka+8Co9z9g6wDqRZKLAsQjpd+POs4REREREQkcx8BW7n7W1kHUk2UWBZO8yxFREREROrbDGAbd/9P1oFUGyWWhVNiKSIiIiJSv2YB27n7c1kHUo2UWBbuBWBq1kGIiIiIiEjFzQF2cfcnsg6kWimxLJC7twP3Zx2HiIiIiIhU1Fxgb3e/N+tAqpkSy+Lck3UAIiIiIiJSMTMJhr/enHUg1a5f1gHUmDsJPrHQ+yYiIiIikm9vESSV/846kFqgHssiuPunBHtaioiIiIhIfj0FbKCksnBKLIt3a9YBiIiIiIhIam4GNnd3LdxZBCWWxVNiKSIiIiKST6cD+UcZXgAAIABJREFUu7v7l1kHUmsasg6gFpmZA+tkHYeIiIiIiCTic+AQd78u60BqlXosS6NeSxERERGRfHgeMCWV5VFiWRolliIiIiIite8CYEN3fzXrQGqdhsKWyMxeB1bIOg4RERERESnadOBAd78l60DyQj2WpZuYdQAiIiIiIlK0J4FvK6lMlhLL0mk4rIiIiIhI7WgHzgQ2cfe3sg4mb/plHUANewL4CBiedSAiIiIiItKrt4Afu/v9WQeSV+qxLJG7twG3Zx2HiIiIiIj0qB24GFhDSWW61GNZnluBA7IOol41NzfT2tpKa2tr1qGIiIiISPV5k2CBngezDqQeqMeyPJOAL7IOot40NzdzzDHHcP/99/PAAw/w3e9+N+uQRERERKR6tBNsI7KGksr/z959h01algcbP3dhWcoKiICADRA0IEi50IhiBREVY40NDbHEErtJTOwg5jM2wBJFE0UNSlREREwUIgpJ7JdiQcBOEVCkytIWlu+PGciy7M7bZua655nzdxxzbNgl75wrs/vONff93M/4eLuRBYqI44EnVndMiz333JNDDjmEbbbZ5tafO+ecczjooIMKqyRJktSIXwHPzczTqkOmjVthF+4EHCxHbunSpbzkJS/hGc94BosW3fbzkCuuuKKoSpIkSY24GXgf8NrMvKY6Zho5WC7cScCN+L/lyOy8884ceuihbLfddrf7tXPPPZe3ve1tBVWSJElqxC/orVL+d3XINHMr7BBExKnAw6s7umbLLbfkxS9+MQceeODtVikBjj32WN7//vdz/fXXF9RJkiSp2ErgvcDrMvPa6php5yrbcJyAg+XQLFu2jIMPPpiDDjqI9dZb73a/ftFFF3HooYfyve99r6BOkiRJDfgZ8JzM/EZ1iHocLIfjBOA91RGrWrJkCZtvvjnLly9n+fLl3HTTTdVJM7rrXe/KIx/5SA466CA23XTTNf47J554Iu9+97tZvtzDeCVJkqbQSuAI4I2uUrbFrbBDEhHfB/ao7gA44IADeOMb38jSpUtv/bnrrruOq6+++tZB8+qrr77NP6/t56+55hquv/56brjhhlsf119/PTfeeCMrV66cV9/ixYtZb731WG+99dhyyy152MMexiMe8Qjuda97rfX/59e//jVHHHEE3/iGH0pJkiRNqbPpXUv5zeoQ3Z4rlsNzAo0Mli996UtvM1QCrL/++qy//vpsvvnmQ3ueFStWsGLFijUOnsCtw+PSpUtv8+O6687+ZXfppZdy1FFHceKJJ07EqqskSZKG7ibg3cCbM/O66hitmYPl8JwAHFodAXDllVey1VZbjfx5lixZwpIlS9hwww2H/rWvvfZaPvGJT3DMMcdw7bXucpAkSZpS3wdenJnfqQ7RYG6FHaKI+CWwfXXHDjvswEtf+lJ23HFHli1bxoYbbrjGU1Vbs3LlSs444wy++tWvcvLJJ3P55ZdXJ0mSJKnGlcAbgA9k5vyuv9JYtT9tTJCIOBx4VXXH6hYvXsz666/PsmXLWLZsGRtttNFtHqv//Or/zpIlS263rXXJkiULarply+z111/Pz372M772ta9x2mmncdlllw3pdy1JkqQJdQzwt5n5u+oQzZ6D5RBFxEOA06o7xmHx4sWsu+66LF26lCVLltw6cN7yWLx48a2D4y1D5C3XYK5YsYKbb765+rcgSZKktpwJvCQzp+L9dNd4jeVw/S9wCbBFdciorVy58tZBUZIkSVqA5fTOKjkyM1dUx2h+1qkO6JKLLrro5m222WYnGjkdVpIkSWrcccDjMvPLF110kddSTjBXLIfvBOA51RGSJElSw34BvDQzv1IdouFYXB3QQSfTW86XJEmSdFvXAW8CdnGo7BYP7xmBiDgeeGJ1hyRJktSQLwEvz8xfVYdo+NwKOxon4GApSZIkAZwHvCIzT6gO0ejcumIZERsAW6/266vfE+LmEf9aV55jU+DXOLhLkiRpet0AvBt4a2ZeUx2j0VoUEesDHwGeDCwt7pEkSZI0+c4A3guc3//nlheFWvs6k9R6YWZeC73B8oPAi5AkSZIkafauBz4HPHdd4AnFMZIkSZKkybMUeCZw5WLgsuIYSZIkSdLkesJi4IPVFZIkSZKkiXX5IoCIeA5wELD9Kr+4+j0uF/lrE/1rkiRJkjQKL3X4mEIRMWggXf2fR/VrLwbeNSBTo3EW8DF6Nyhesdqvzfe/51z+3Wn5OnsArwK2RYOcCfwr/3diILT/33a+/+5uwMtRpd8B36J3UuXqJxxWf/g76ufYHXgYGqWrgZ/Q+/vsZtr67++v+Wuj/LVfAp/MzKMdLFUiIl5G7whq1fg98AHgqMz8XXVMV0TENsA76V3Ertm5CXg/8ObMvLI6ZlQi4kDgi9UdAuDnwJuBT2fmyuqYcfB77lj9EHgd8J+ZufoHGFKnLa4OkFRiS+AQ4FcRcUhEbFTcM9EiYlH/jdvZOFTO1TrAK4CfRcTTq2M0FXYEPgX8MCKeuIZdPNJC7EZvV9DpEbFPdYw0Tg6W0nTbkN4n9z+LiOdExDrVQZMmIjYFjqe3GnCH4pxJtiVwbER8KCI2qI7RVNiF3p/d/4mIP6mOUefsA/x3RHw+IraujpHGwcFSEsA2wEeB70XEQ6pjJkVE7Akk3g94mF4AfDMidqwO0dR4IHBGRLwmItatjlHnPAH4SUQ8tTpEGjUHS0mr2h04LSLeFRFLq2Na1d/6+kLgG9z2NG0Nx25A+kZMY7QUeDvwjYjYpTpGnbMZ8OmIODYiNquOkUbFwVLSmvwN8O2IuE91SGsiYn3gE8BR9N6MajTuQO+N2PtdRdIY3Q/4fkS81GsvNQJPp7d6+ejqEGkUHCwlrc1u9LbGvsw3WD39Q46+CDyrumWKvAT4bH+gl8ZhCfA+4IMRsaQ6Rp2zNfAfEfEePzRT1zhYShpkfXqH0hw97W+wImIT4CvAftUtU+gJwEkRsaw6RFPlhcDJEXGn6hB10suBL0SEh76pMxwsJc3GwcCJ0/rGPiI2B04FHlTdMsX2BU7x+iSN2cOA73hZgEbkMfROjr1rdYg0DA6WkmbrAOBrEbFldcg49Y+JPw3Ys7pFPAD4ekRsVR2iqbI9vXsS3rc6RJ20G70zDfweo4nnYClpLvaid2riPapDxiEitgBOB3aubtGtdqX3Jn+L6hBNlc2A//J+lxqRbeitXD6uOkRaCAdLSXN1T3oHD2xaHTJK/cNiTgB2qG7R7exI79qkDapDNFW2AL4aEfesDlEnbQicEBFPqw6R5svBUtJ87Ax8LiLWqw4Zhf4puB+hd+N0tWlv4GMR4fcxjdM2wKkRcffqEHXSYuCYiDiwOkSaD78hS5qvRwAf7uitSN4EPLM6QjN6KvDW6ghNnbsD/9m//ZA0bOsCx0XEI6pDpLlysJS0EAcDb6iOGKaIeAZwSHWHZu21EfH86ghNnZ2Bozr6wZrqLaV3Evve1SHSXDhYSlqoQyLiT6sjhiEi7g8cXd2hOTsqIh5eHaGp8yzgr6oj1Fkb0VsZ3706RJotB0tJC7UYOLp/2M3EiogNgWPofVKsybIO8G9dP1BKTXqvt4nQCG0CnBwRHiKnieBgKWkYdmLyt4/+I73TRjWZ7gK8tzpCU2cpvevhllWHqLO2oHdY3obVIdJMHCwlDcvf9beSTpyIeAjwiuoOLdizI+JJ1RGaOtvRsWvN1Zz74jW9mgAOlpKGZTET+I2vv9JwNDBR3VqrD0XEnasjNHVeHRH3ro5Qpz0beFF1hDSIg6WkYdoD+LPqiDl6O7B9dYSGZnN6w6UfFGicltC73tLXnUbpPRHxgOoIaW0cLCUN25sn5c1VRDwQ+OvqjhG5EfgtkMCXgI/SO5zoq8CZwGV1aSP3eODPqyM0dfYHnlAdoU5bAnw2IraoDpHWZN3qAEmdswfwOODE6pBB+sPvP1V3DMkVwBf6j18AFwOXZubKQf9PEbEUuDOwFXA/4MnAQ+nGh47/LyJOyMwbqkM0VQ6PiJMyc0V1iDrrrsCxEbH/TH/HS+PmYClpFN4cEV/MzJurQwY4AHhwdcQCXAqcABwHnDqfASozrwfO6z++A/xzRGxJb9XlKcAj6N3KYxLdE3g+8IHqEE2Vbemtln+quEPdti/wPOBfqkOkVU3EdjV1T0S8jHZvDfA74D1D/HqLgDsAd1zlsSmwGXAPuvsBz8My87TqiDWJiMX0tohO4o2nzwZeDZySmTeO8oki4k7Ac+ndSmYSj7r/HbBDZl5dHRIRBwJfrO5Yi8uAz4/puTbg/1bJ70zvmtiu+QEQLX2wNkXfcxfRu/fj3fqPu9O7FdGkfkA2yBXATpl5cXWIdIuuvqGVFuJ3mfm2cTxR/75U9wMeuMpjs3E89xgcBDQ5WNJbUZi0ofJG4G3AP/ZXGkcuMy8F3hkRnwWOAh41jucdojsDrwTeWh3SuPMy8/kVTxwRS+gNmfvSWyl/FLB+RcsQ7QE8HDi1OmRC/H6U33MjYh1ga3qD5nb0dmM8jsl/D7wpcCTw9OoQ6RauWKpE45+e/igzd6t44v51f3vRezP8NCb7U9YrgK3GNQTNVv+N7JnAjtUtc/Ad4PmZ+eOqgP5r8yB6b2TuVNUxD38Ets/MP1RGNL5ieUZm7lEdARARGwGPBJ4BPLU4ZyH+IzMfWx1xi8a/5/44M+87zieMiK2Ag+ltl99hnM89Ao/NzP+ojpCgGwc0SJ2RmTdn5ncz8yB6n6y+C7iqOGu+NgUeUx2xBs9icobKG4FXAQ+sHCrh1tfmMcBOwGcqW+boDsBrqiM0O5m5PDNPyMyn0bsG+ifVTfP0mIjYqTpCa5aZF2fm24F70Vtd/hTQ1Iegc/CB/v2YpXIOllKjMvP8zPw7ett3jqnumaeDqgPW4CXVAXPwnMw8MjNvqg65RWZeQm816ePVLXPw/IjYoDpCc5OZ/wPsCfwtsLw4Zz6eUR2gwfofmH29/2HuventDpk09wAOrY6QwMFSal5mXgX8BfBiYNJunXBgf2tbEyIigKjumKW/6a8QNqd/xP3zafyWMqu4I97XciJl5orMfDdwX3qnF0+Sp1QHaPYy81x6q+Stbhke5JURMSk7cdRhDpbSBOh/qnoUsA+T9eZqKfCA6ohVvKA6YJbekZmHV0cM0j+R9um0e0DT6l5UHaD5y8xf0bv9zYXVLXOwU0TsXB2h2cvMGzLzFfQ+iPpjdc8cLAbeUB0hOVhKEyQzv0tvuCw9iGSO9qkOAIiIOwDPrO6YhY8D/1AdMRuZeS3weHq3V2jd3hFRciiXhiMzf0lvuPxddcscuGo5gTLzOHq7W35Y3TIHz3LVUtUcLKUJk5nn0xuQmrlH2gyaGCzpXe/U+gEHpwN/1dL972aSmVcCBwDnV7fMwgurA7QwmXkOsB+9U6cngVuwJ1Rm/hzYm/Hd43WhXLVUOQdLaQJl5in0blo/CfaOiBbuF9b6UHEz8PLMXFEdMleZ+Xvg76o7ZuHZ/ZVrTbDM/AmT8XoD2CUitq2O0Pz0d2U8m8k5ndhVS5VysJQm11uBk6sjZmEjYPfKgP51TntWNszCJzJzkrZdre4zwDeqI2awDHhidYSG4qPAN6sjZmnv6gDNX2YuB54EXFndMguLgTdWR2h6OVhKE6p/MuffV3fM0v2Kn7+ZG5WvxXVM+Bam/vbdV1V3zELrrwXNQv/vvxcBzdyKZ4CWDjDTPPS3xT6rumOWDoqIe1VHaDo5WEoTLDPPAL5e3TEL2xc//2OKn38mR2TmBdURC5WZ36H9e64eEBFLqiO0cJn5I+A91R2z4GDZAZl5EpNxCcpi4GXVEZpODpbS5DuiOmAWygbLiNiEdg4QWpM/AG+vjhii1wLXVkcMsDFtvx40N2+h7dcbwB4RsX51hIbiMOCk6ohZOMjXnCo4WEqT7yTgl9URM6hcsdwfaOHwoLX5x/7Jqp3QX3l9d3XHDNwO2xH9Pzufq+6YwRJgj+oILVx/C/azgd8Up8zkjng9uQo4WEoTrv+N7qjqjhlsHxGLip675W2wK4FPVkeMwL9WB8zgwOoADdXR1QGzENUBGo7MvAJ4U3XHLDyvOkDTx8FS6obTqgNmsDG9T1DHKiIW0/ZgeXpmXlIdMWyZeS7wneqOAe4dETtUR2hovg6cWx0xg22rAzRUxwLnVEfMYN+I2K46QtPFwVLqhh/SO1m0ZfcoeM5dgC0Lnne2jq8OGKHPVAfMYP/qAA1Hf9fGx6s7ZrBtdYCGJzNvpHd9b+ueUx2g6eJgKXVAZt4AZHXHDJYVPGfr288+Xx0wQsdVB8yg9deG5uaz1QEz2LY6QEP3aeCs6ogZPCci1qmO0PRwsJS641vVATPYqOA59yx4ztn6dhduMbI2/e2w367uGMDBslvOApZXRwxQsWNDI5SZNwGHVnfM4K7AQ6ojND0cLKXuaH2w3LDgOVseLFs/yXIYWl5Fuo/H8XdH/03+GdUdA2weERW7NjRanwXOrI6YQcvnDKhjHCyl7mh9S85YVyz72392H+dzzlGXt8HeouXtsOsCu1ZHaKhavxzAVcuO6V/fe0h1xwweXR2g6eFgKXXH5dUBMxj3Vth7UbNKOhvnZeYvqiNGrb8d9qfVHQO4HbZbWh8sN64O0EgcD7T89/l9IuJu1RGaDg6WUndcUR0wg3EPeS1vg21969Qw/aQ6YICWXyOau9YHy1Y/6NIC9FctW7+04YDqAE0HB0upO64FVlRHNKTloaHlVbxha3mwdMWyW35eHTCDDaoDNDInVAfMwO2wGgsHS6kjMvNm4MrqjgHG3bbjmJ9vLhws23CviFhUHaHh6N92qeX7+bpi2V3fAS6qjhhgv4hYrzpC3edgKXVLy9thxz1Y3nXMzzcXrR+0NEwtb/tdhte9dU3LH645WHZUfzvsF6o7BrgD8MDqCHWfg6XULVdVBwww7raWDyuYpsHyl8D11REDtPw60dw5WKpK6yd9P7g6QN3nYCl1S8vX8IztDV///oSbj+v55ujCzGx5ZXmo+vcXbHmQdrDslpYHy6XVARqpr9P262+P6gB1n4Ol1C13rA4YYJwrlncZ43PN1TRdX3mLlq+zdLDslpY/tPljdYBGp3+N75eqOwZwsNTIOVhK3dLyYDnOT3K9vrItLQ+WLb9WNHctD28tX6qg4Wj5dNhtI2Kz6gh1m4Ol1BERsQHtbrW6Hvj9GJ+v5WHhwuqAAhdUBwzgimW3eDmAKv1XdcAMdq8OULc5WErd0fInkWdm5o1jfL6Wh4WrqwMKtLyK1PJrRXO3SXXAAA6WHZeZl9P2h4duh9VIOVhK3dHqYTUAPxrz87U8ZDtYtuVO1QEaqk2rAwZwsJwOLV9Hv2d1gLrNwVLqjqgOGGDcg2XL2+FaHrJGpeVhuuXXiuau5cHSayynQ8v37nXFUiPlYCl1xz7VAQP8cMzP1/Kw0PKQNSotD9Mtv1Y0d26FVbWWVyzvHRHrVkeouxwspe54UHXAAD8e8/O1PCw4WLal5deK5iAilgAbVXesxWXA8uoIjUXLK5aLga2qI9RdDpZSB0TElsC9qjvW4oLMvGTMz9nysOBg2ZaWXyuam22rAwY4IzNvro7QWLS8Ygltn5quCedgKXVDy6uVJxY8Z8vDwjQOli3/nlt+rWhu7l8dMMAZ1QEaj/7JsBdVdwzgYKmRcbCUuuG51QEDHF/wnC0PCy0PWSORmStpdxvgOv0tlJp896sOGGDc15mrVsvbYR0sNTIOltKEi4g/AQ6s7liLy4DTC57XwbI9bofVqLU8WLpiOV0cLDWVHCylyfeq6oABvpCZKwqed2nBc87WDdUBRSpeB7O1fnWAFqZ/0mWrt1K4ATi7OkJj9evqgAEcLDUyDpbSBIuILYC/qO4YoGIbLMCiouedDQ/waE/LrxfNzm60u/J8ZmZO6wdK06rlHRoOlhoZB0tpsr2ZdldbrgL+qzpC0lRo+QO2r1cHaOxavuTBwVIj42ApTaiIeArwkuqOAT6QmddVR0jqtojYgLYHy09XB2jsWl6x3Lg6QN3lYClNoIi4J/CR6o4BrgWOqI6QNBWeCmxaHbEW5wHfqY7Q2LU8WLa6ZVwd4GApTZiIWB/4LG1/6vjhzPx9dYSkqfDC6oABPpOZXlc9fVoeLNePCK8r10g4WEoTJCLuBHyZdk8/hN4JiO+qjpDUfRHxAGDv6o4B3AY7nVq+xhLaPZtBE87BUpoQEXEfeluqHlrdMoOPZeYF1RGSuq2/e+Oj1R0D/ArI6giVaHnFEtwOqxFxsJQmQEQ8FvgmsH11ywyuBf6pOkLSVDgU2Kk6YoBPuQ12ajlYaiqtWx0gae0iYk96b54OrG6ZpddkZss3hpbUARGxN/C31R0DXA28pzpCZa4DbgLWqQ5ZCwdLjYQrllKDImL3iDiB3jaqSRkqvwp8oDpCUrdFxJ2Bj9P2e5gjMvMP1RGq0V+pbvk6SwdLjYQrllIDImIp8EBgf+CRQNQWzdmVwHMyc2V1iKTuiohtgVOAHYpTBrkCOLw6QuWWA5tUR6yFg6VGwsFSur11ImIUt/JYF7gzsBWw9So/3ofegTwbjuA5x+XlmXl+dYSk7uofYHYysE11ywzemZlXVEeoXMvX17a82q8J5mAp3d596K3AaXaOA/6tOkJSd0XEI+jdv3ez6pYZ/AF4b3WEJFVwsJS0EP8FPNuTDyWNQkTsTO+k6cdVt8zSoZnZ8rV1kjQyDpaS5ut04PGZeV11iKRuiYhtgEOA5zE52/ZOxgPMJE0xB0tJ8/Et4MDMvKY6RNLki4h1gPsDjwIOAO7H5AyUAL8HDvYAM0nTzMFS0lwl8OjMbP0G0JJmZ1lEPGgMz7MI2AjYAti8/+MW9A4xexBwxzE0jMrBmXlxdYQkVXKwlDQXJwJ/6YmHUqfsAPxPdcQEe3dmfrk6QpKqTdI2E0l1bgBeATwhMy+vjpGkRnwfeF11hCS1wBVLSTP5JfC0zMzqEElqyM+Bx2XmDdUhktQCVywlDfLvwJ4OlZJ0G78CHpGZF1aHSFIrHCwlrcl3gUcCz8zMq6pjJKkh59IbKi+oDpGklrgVVtKqzgTeAHwhM2+ujpGkxpwPPDwzz60OkaTWOFhKgt62rjcB/56ZN1XHSFKDzqe3Uvnr6hBJapFbYSUBLAe2A+5VHSJJDToFiMz8RXWIJLXKFUtJALv2H4dFxFnA5/qPH7olVtIUuxl4C3CYuzkkaTAHS0mr24nedZZvAH4ZEccCh3v/SklT5lLgoMz8SnWIJE0Ct8JKGuSe/N+A+eqIWFodJElj8C1gD4dKSZo9B0tJs3FH4N3A2RHxzIjw7w5JXXQ58DLgwZl5fnWMJE0S3xxKmottgU8C342IRxS3SNKw3AS8H9gxM9+fmTdWB0nSpPEaS0nzsSfw1Yh4G/CGzFxZHSRJ8/RV4JWZ+ZPqEEmaZK5YSlqI1wL/HhEbVIdI0jy8HHikQ6UkLZyDpaSF+nPg1IjYsjpEkuboSOC4iHhYRCyqjpGkSeZgKWkYHgB8KyJ2qg6RpDlYDDwJ+Brwo4h4QURsVNwkSRPJwVLSsGwHfDMi/rQ6RJLmYRfgQ8AFEfHuiNi6OkiSJomDpaRh2gT4XERsUR0iSfO0KfBq4KyIeL5bZCVpdhwsJQ3bXYBjvNelpAm3CfAv9K4h37E6RpJa5xs/SaOwP/D66ghJGoKH0bv+8h8iYkl1jCS1ysFS0qgcGhH7VkdI0hCsD7wN+G5E7FwdI0ktWrc6QGrQBcAbip57A+DOqz3uAdy1qGchFgGfiog9MvPC6hhJGoLdgNMj4lGZmdUxktQSB0vp9i7LzI9XR9yif3DEzsATgScAUVs0J1sCHwQeXx0iSUNyJ3rXXT4mM/+3OkaSWuFWWKlxmXlzZp6ZmW/NzL3orWAeCawsTputP4uI+1dHSNIQbQycHBH7VYdIUiscLKUJk5nnZeargAcAP6zumaW3VAdI0pBtCHwpIv6sOkSSWuBgKU2ozPwucD/g72l/9fJREfGg6ghJGrL1gOMj4oDqEEmq5mApTbDMXJGZ7wD+urplFg6rDpCkEVgH+FhEbFEdoqasUx0wwM3VAeomB0upAzLzQ7Q/uD08Ih5RHSFJI3Bn4F/6h61JAMuqAwa4rjpA3eRgKXXHm4GPVkfM4NDqAEkakccDz62OUL2IWAxsVN0xwLXVAeomB0upIzLzZuBFwM+rWwbYJyJ2qI6QpBF5T0TcszpC5Takdy/nVjlYaiS8j6XUIZm5IiLeAHy6umWAPwfeVh0h6VY/BvYZ83NuQG/76NbAVv0f7wE8Brj7mFuGaSPgmIh4cGbeWB2jMneoDpiBg6VGwsFS6p7jgO8Be1WHrMXTcLCUWnJTZl415ue8Cvgd8KNVf7J/jeJewFP6j+3H3DUMDwCeBXysuEN1Wr6+EhwsNSJuhZU6JjNXAv9Q3THAbhFx7+oISe3JzJsz87uZ+ffADsCjgF8VZ83H3/Wvs9N0csVSU8m/9KQOysyvAt+o7hjgqdUBktrWHzJPBnYF3gncVJw0FzsDj62OUJmWB8sb+h9AS0PnYCl112eqAwZwsJQ0K5l5TWa+BrgfcGZ1zxy8pjpAZVreCutqpUbGwVLqrs9XBwywS0T8SXWEpMmRmT8AHg6cXd0yS/tExAOrI1Si5RXLq6sD1F0OllJHZeZ59A7xadUDqgMkTZbMvAR4JHBudcssuWo5nVpesfxtdYC6y8FS6rbjqwMG2KM6oEjL9zYbpWn9fWvIMvMCYD/g4uqWWXh8REziybZamE2qAwa4oDpA3eVgKXXbSdUBA+w+wq99wwi/9kItrQ4oskF1wADeb3DCZOYvgAOBSTiE5M+qAzR2O1QHDOBgqZFxsJS67WxgRXXEWuzev2fdKFw3oq87DC1fezNKLW8N8zCLCZSZCXywumMWDqwO0NjdpzpgAAdLjYyDpdRhmbkC+Fl1x1psDGyAOjTiAAAgAElEQVQ7oq/d8qDQ8oA1EhGxhLZXalv+IEKDvQm4tDpiBg+NiI2rIzQe/Q9MHSw1lRwspe77aXXAAKPaDutg2ZaWf8/XeU+3yZWZlwGvq+6YwbrA/tURGpstgc2qIwZwsNTIOFhK3dfyYDmqA3wcLNvS8u+55deKZucjwA+qI2bgdtjpsXN1wAwcLDUyDpZS97V8Q/F7jejrtjwstDxkjUrL15VeUx2ghcnMm4D3VHfM4DER4Xuu6dD6YOntRjQy/iUndd8vqgMGGNWR7C0Pli0PWaPS8jDd8mtFs/d52r5Wdgtgr+oIjUXL11f+JjNbPjVdE87BUuq+K6sDBpjGwbLlIWtUWv49t/xa0Sxl5lXAidUdMxjlLZbUjpZXLL9fHaBuc7CUuu+P1QEDjGqwbPn33PKQNSotr9K2/FrR3HyyOmAGO1UHaCxaXrFs/VpkTTgHS6n7rq4OGGBUg2XL15BM42DZ8u/Zgyy648vA5dURAzhYdlxE3BnYvLpjAFcsNVIOllL3XQe0ejuFUQ2WLQ8Ld60OKNDy77nl14rmoH/t2H9UdwzQ8hZJDcejqgNm4IqlRsrBUuq4zLyZdrf7LYuIdUbwdVseFqbxzWXLW8POrw7QUJ1RHTDA3SKi5dV7LdwTqgMG+F1mXlQdoW5zsJSmQ8vbYTcewdd0sGxLy4Nly68Vzd0PqwNm8CfVARqNiNgQOKC6YwC3wWrkHCyl6dDqVliADUbwNa+g3fsTbhERW1RHjEt/Rbrla8tcseyW1gfLlv8saGH2YzTfz4bFbbAaOQdLaTqM6lrGYRj67R76239bHhimadVyO9p+s+WKZYdk5u+Blrf73bs6QCPT8jZYgG9WB6j7HCyljouIxbR9u4dR3Uew5YGh5a2hw9by7/Um4OLqCA1dy6uWm1UHaPgiYl3gz6o7BrgB+Fp1hLrPwVLqvjsAi6oj1uJm4PoRfe1zR/R1h2GaVixbHizPz8ybqiM0dGdWBwzg4T3d9EDgTtURA5yWmcurI9R9DpZS921aHTDAdf1tq6PQ8umQLQ9bw7ZLdcAALb9GNH+XVgcM0PLuEc1f69tg/7M6QNPBwVLqvpavrxzlATstn4B3n4hodRV52Foeolt+jWj+rqoOGMAVy47pH1D2pOqOGThYaiwcLKXua3l7zqiur4TedVajWg1dqC1oe+AaiojYCti1umMAB8tuanmwdMWye54B3KM6YoDfAOdUR2g6OFhK3bd7dcAAV47qC2fm1bT9zfQp1QFj8GTavb4XIKsDNBJ/rA4YwBXLDukf2vOm6o4Z/OcILzmRbsPBUuq++1UHDHDeiL9+yytS0zBY/nl1wAAXZaYnwnaTK5Yal2cCO1ZHzMBtsBobB0up+6Z5sGz5htD3iYg/qY4Ylf422IdUdwzQ8ocOWpiWB0tXLDuiv1r5xuqOGVwGnFIdoenhYCl1WETcEdihumOAaV6xhN5W0a56Em1vg239taH5a3kr7EbVARqaZ9H291eAYzLzuuoITQ8HS6nbojpgBqO+1+R36N0YulVd3g7b8jZYgP+uDtDIeG9SjVR/tfIN1R2z8JHqAE0XB0up2x5THTCDka5Y9g/wOX2Uz7FAu0fEPasjhm0CtsEup+3XhaS2PRto/e/u72Xmj6ojNF0cLKWOiogNgIOrO2Yw6q2wAF8aw3MsROv/jebjWbT9/eWUzLy+OkLS5ImIOwGHVnfMgquVGruWv/FLWpinAJtVRwxwBXD+GJ6n9cHy1RGxdXXEsPTfdL2+umMGrb8mJDUoItYBPgXcrbplBtcCx1ZHaPo4WErd9aLqgBl8LzNXjvpJMvPnwC9G/TwLsBHwluqIIToE2LQ6Ygb/UR0gaSIdCuxfHTELn83Mkd0nWlobB0upgyJiN+CB1R0z+M4Yn6v1FarnRsSu1RELFRE7AS+u7pjB9zPzwuoISZMlIh5P+7sxbvHP1QGaTg6WUsf0T6v7YHXHLIxzsGx9hWox8K7qiCF4N7BOdcQMWv+QQVJjIuJewCeqO2bpPzJznN9fpVs5WErd8xpg7+qIWRjnN77TgEvH+HzzsX9EHFAdMV/99kdXd8zCcdUBkiZHRCwDPg9sXN0yS4dUB2h6OVhKHRIRezIZp9X9NjMvGteT9U8A/di4nm8BDu+/iZko/ebDqztm4Zsevy9ptvqnq/8bsHN1yyx9KTO/Wx2h6eVgKXVERGxC7xvgutUts3BywXN+uOA552on4HMRsV51yGxFxFLgBHrtrftQdYCkyRAROwLfBJ5Q3TIHh1QHaLo5WEodEBF3A/6HyflU9fPjfsLM/BnwtXE/7zzsD3yif6x90/rX834K2Le6ZRauAD5THSGpfRHxZCCB3apb5uCkzPxedYSmm4OlNOEiYnfgW8Au1S2ztBw4pei5J2XF6mnAeyNiUXXI2vTbPgw8qbpllj6emddWR0hqV0SsFxFH0LsW+w7VPXN0SHWANAlb5iStQf+N/RPonVQ3Sdfl/WdmXlf03J8HLgG2KHr+ufhreq2HFHfcTv+19y7gOdUtczApHypIKtDf+fNpJuPwu9V9MjOzOkJyxVKaMBGxKCL2A/4XOJ7JGiqh11wiM28Ajq56/nl4c0S8o3+ARBP6B/W8H3h1dcscnJaZZ1VHaGxurg4YwPddjYmIrSPiXcBZTOZQeRnwquoICfwLTpoYEbFOROwLfJ3eVtJJ/AZ4PfX3lDwCuKa4YS7+DvhhRDy0OiQiHg2cSW81dZIcVh2gsaraETEbSybpcK6uiojFEbF3RBwF/Ab4G2Cj2qp5e3VmXlIdIYFbYaVmRcRi4D7AI/qPhwKblEYt3L9l5pWVAZl5cUQcCbyusmOOdgS+HhEfBv4+M68Y55NHxBbAkcAzx/m8Q3JKZn61OkJj1fJgCb37If6hOmJa9LfubwbcHdgWeCS9y0i2LswallPpXQ4jNcHBUrq9LSLiFWN8vnWAOwJ3Wu1xt/6PXXJkdUDfO4EX0/vffZK8AHhcRPwNcHz//pwjExEbAs8A3s7kvhZfWx2gsXOwnCybD/F77iJgU3rfP+++yo/NXE4wRNcBL8zMlrd+a8o4WEq3tzXtDEBdcnJmnlkdAZCZV0TEP9EbmCbN1vRu8XFVRHyR3umFXxnWiaf9aygfAzwFeCyw4TC+bpHPeKDFVBrpBy5DMOk7T4bN77nz85bM/EV1hLQqB0tJ43JEdcBq3g+8ksndDrUxcFD/sTwiTgI+B/wEuBi4YqZPsvtbxO4IbAXsDjwZeDTd+HT/JuAN1REav8y8MSJuorcbpEUbVwdo4v2A3sncUlMcLCWNw1nAV6ojVpWZ10TEocBR1S1DsBG9e18+bZWfuz4iLqY3ZF7U/xF6g/RWq/zY1YNE/jUzf14doTLX0e5hLA6WWogrgKdk5orqEGl1DpaSxuEfGr0O5CPAc4H7V4eMwFLgHv3HtPkd8MbqCJVqebB0K6wW4qDM/FV1hLQm3m5E0qh9GfhidcSaZOaNwMG0f9iH5uavPH5/6rX8Z9oVS83XoZlZfcsuaa0cLCWN0grglY2uVgKQmWczWbce0WBHZ2aTH2RorFoeLLepDtBE+k/gLdUR0iAOlpJG6cjMPKc6YhbeA5xeHaEFO4/egUzSNdUBA9y7OkAT5zfAszJzZXWINIiDpaRR+S1wWHXEbPS/WT8HWF7dogX5y8y8qjpCTWh5K/RO1QGaKMuBJ2XmZdUh0kwcLCWNwk3A0zLzj9Uhs9U/DOHV1R2atyMz82vVEWrGxTP/K2V2jAgPT9RsXAccmJk/qA6RZsPBUtIo/H1m/m91xDz8C/CB6gjN2cnAa6oj1JSWB8v1gO2qI9S8FcCTM/Pr1SHSbDlYShq2E4DDqyPmo3/I0CvoHZKgyfAT4Kne002r+V11wAz+pDpATVsJPNMTYDVpHCwlDdMvgee0fArsTPq3IHk68OPqFs3oYuCxmXlldYia0/KKJXidpQZ7bmYeVx0hzZWDpaRhueVN/hXVIQvVPwDmQNp/czrNrqF37dF51SFqUut/dl2x1Nq8JDM/Xh0hzYeDpaRhuATYd0JuLTIr/YHlQNq+bcG0Wgk8IzOzOkTNan2wdMVSq7uR3kql1/lrYjlYSlqoS+kNlT+tDhm2/uByAOAtLNqxgt6JwydWh6hprV9juYsnw2oVVwD7Z+bR1SHSQjhYSlqIy4H9MrOz1yNm5n8DDwf+UN0irgEe57VHmoU/0FvZbtUyYK/qCDXhV8De3i5JXeBgKWm+zgEemJlnVIeMWmZ+H3gI8Nvqlil2JfDIzPxKdYjal5k30f522H2rA1TuG8ADMvPs6hBpGBwsJc3HScCfTtM3w8w8C9iH3sm3Gq/fAw/NzG9Uh2ii/KQ6YAYOltPtU/QuI7mkOkQaFgdLSXN1GPD4abzFQ2b+Bngw4KEx4/NzYJ/M/GF1iCbOj6oDZvDAiNioOkJjdwXwLOBZmXlddYw0TA6Wkmbr98ATM/NNmdnytUsjlZkXAQ8C/rm6ZQocC0Rm/rw6RBOp9Q8jlgJPq47QWH0F2DUzPznJ93uW1sbBUtJsfATYKTNPqA5pQWZen5kvpfem8I/VPR10PfAC4KDM9H9fzVfrgyXAC6sDNBbLgRcBj87MC6pjpFHxqGtJg5wDvDAzT6sOaVFmfiYifgB8Bti9uqcjfgY81a2vGoKzgMuAzapDBrh/ROw+DYegTbHTgOdlptfnq/NcsZS0JlcAbwR2d6gcrL9Nc2/gfYBbmxbmY8BeDpUahsy8EZiEXRavqg7QSPwIOBB4uEOlpoUrlpJWdSlwOPDP03g4z3z1D2B4eUR8DHg/vUFTs/cD4KWe+qoR+Czw3OqIGfxFRHwwM79VHaKh+CW9D2Y/Pc3nEWg6uWIpCXoH87wG2DYz/59D5fz073e5D3Aw8LvinElwGb3rju7nUKkROZXeDozWfSAi1qmO0IJcBLyY3nkExzpUahq5YilNr5vonVD3ceCLmXltcU8n9N9MfCIivgC8GXg54BvG21oJfAh4Y2ZeWh2j7srMGyLiw/Q+OGvZHvS2xL6rOkRz9lV6B9x93tuHaNo5WErT5wzgE8CxmXlxdUxX9Vd9Xx0R7wNeATwfmPZ71l0LHA0c6S1ENEb/RO+U4U2rQ2bwjog4NzM/Wx2iGV1I7++yj2bmr6pjpFY4WErddzXwNeC/gFMy86zinqmSmb8GXhkRb6F3a4GXA1vVVo3dJfQON/pgZv6hOkbTJTMvj4i3AW+vbpnBIuCYiLg0M0+tjtHt/J7e6uQnga/0D4eStAoHS6l7rqR3/7ZT6Q2T38nMFbVJyszLgLdFxOHAM+mtYu5WWzVyPwHeCxzjVmsVex+9P3et/5lbD3gevb+/VWs5vVuF/Ff/8ZPM9ORvaQAHS2lyLQd+DfyY3rHmP+4/zvebX7sy83p6W6iOjoh7A3/ef9y3NGx4fgwcBxyXmT+tjpEAMvPaiDgQ+DawTXWPmvN7evfQPaf/+Bbw7cy8obRKmjAOlqpyBeA1Vj0r6a0yXgFcvpYfV/+5K12FnHyZeQ7wVuCtEXEv4Cn0hszdS8Pm7of0butwXP/3pNtbTrt/551XHTAOmXlBf7j8FG0fqDWKa9+n8XvujcAf6V0OcvUa/u9f0xsif5aZl1dFSl2yqDpAknRbEbEF8AB698PcG7g/sGFp1P+5Bvgu8M3+41uZ+fvaJEmSVM3BUpIaFxHrArvSGzJ3BrYDtu3/uMGInvZaep/o/6b/+Cm9QfJHHlohSZJW52ApSRMqIhYBW9AbMLejd+3YhvRua7Lhao9bbnWynN6q46qPW37uQnrD5K+BS7xWV5IkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZoKi6oDJEnSZImIRcBWwBbAhsBGq/24IbAecB1w7So/XrvKP18K/DYzrxt3vyRp+BwsJUnS7fSHxx2AXYHtge1WeWwLrD+kp/oDcAFwfv/HC4BfAd8HfpGZK4f0PJKkEXKwlCRJRMT6wF7AA1d5bFEaBX8EfkBvyMz+j2c7bEpSexwsNVYRsS3wiuqOMboWuHKGx9W+SRq+iDicdv+Oe0tmXl4dMWoRcRiwrLpjLV6XmddWR1SLiLsDTwWeCNwPWFJbNCuXAF8CTgJOycyrintKRMS6wDurOwY4MjPPrY4Yt4j4M+Dh1R1rcXpmfr46Qt21bnWAps5WwCurIxpzc0RcxW2HzUuBnwM/Bc4CzsrMK+sSJ9IraXewPALo/GAJvADYsjpiLQ6h98HP1ImIuwBPAZ4G7F2cMx9bAH/Zf6yIiK/TGzJPyMzz6rLGbh3a/n7678DUDZbAg2n3v8tiwMFSI+NgKdVbBGzSf6xVRFxIb8g8A/hv4H8y89LR50madBGxDvBk4KX03vh2xRLgkf3HkRFxEvAB4GR3gkjSeDlYSpNjm/5jX+BvACLiJ/SGzNOB0zLzoro8Sa2JiA3orez9Lb0DeLpsEfC4/uOXEfFB4OjMvKw2S5Kmg4OlNNl26T9eDBAR3wA+CxyXmRdUhkmqExF3BP4aeDntbkcepXsC7wLeGhEfBg7LzD8UN0lSpzlYSt1yy0mOR0TEN+kNmZ/OzAtrsySNQ/9Al78GDgM2Ls5pwfr0huuDI+Ifgfd530xJGo3F1QGSRmZv4HDg3Ij4VETcvzpI0uhExN7Ad4H34FC5uk2AdwBnR8QzI8L3P5I0ZP7FKnXfusAzgG9HxDci4qn9VQ1JHRARm0fEvwLfAHav7mncPYBPAqf3b38lSRoSB0tpuuwNfJrewRbP9lN7abJFxFOAc4DnVbdMmAcBZ0TE06pDJKkrfFMpTae7A5+gt4r5kOoYSXMTEUsi4gh611FvVt0zoTYB/j0ijo6IZdUxkjTpHCyl6bYXcFpEHB8RO1THSJpZRNwF+Brt3oR90vwl8P2IuG91iCRNMgdLSQBPBH4SEa90e6zUroh4BPB9els5NTw70rvucp/qEEmaVL6BlHSLpcARwJcjYpvqGEm3FREvBE5hOu9LOQ6bACdHxGOqQyRpEjlYSlrdI4EfRcQTq0Mk9UTEq4Cj8Pv2qG0AfCEinlkdIkmTxm9QktbkTsDxEXG4W2OlWhHxenr3pNV4rAsc018hliTNkm8YJQ3yKuDYiFhaHSJNm4hYFBH/CLy1umUKLQI+GBEHVodI0qRwsJQ0k6fSu+5yk+oQaVpExCLgXcDrqlum2CJ6tyPZrTpEkiaBg6Wk2XgY8N8e6iONzauAV1dHiI2AL0bE1tUhktQ6B0tJs7Ur8BVXLqXRiojHAu+s7tCt7kbvQJ8Nq0MkqWUOlpLmYhfguIhYUh0idVFE3Ac4Fr8/t+Z+wHuqIySpZX7jkjRX+wFH9a8BkzQkEbEF8EXgDtUtWqPnR8T+1RGS1CoHS0nz8Vzg9dURUldExHrA54Dtqls00L9GxMbVEZLUIgdLSfN1WEQ8tDpC6ojXAg+ujtCM7obXv0rSGjlYSlqIj0bERtUR0iSLiPsCb6ju0Ky9ICL2q46QpNY4WEpaiO2Bt1VHSJOqfxDW0cC61S2ak6M8xEySbsvBUtJCvcwtsdK8/S2wZ3WE5uyewF9WR0hSSxwsJQ3DR/qHj0iapYjYGTikukPz9saIWFodIUmtcLCUNAz3BA6ujpAmRf92PR8C/EBmct0NeH51hCS1wsFS0rC8zmuOpFk7ANinOmKELgF+AVwK3FzcMkqvj4gNqiMkqQUeFiBpWLYF/gL4SHGH1LT+auVh1R1DcAPwJeA04Lf9x4XARZl5wy3/UkSsA2wKbA7cqf/jXYGHA/v1f21SbQ28GDi8OkSSqjlYShqm10fEJzJzRXWI1LDHA1EdsQBfBz4JfC4zL5/pX87Mm+itXF662i99oD907gXs33/sDawz1NrRe0lEHJmZK6tDJKmSg6V0W18FhvXmYBGwIb1P4+/Yf6w/pK/dqu2Ap9J70ylpNRGxGHhLdcc83AS8E/hAZp4/rC/aHzq/3X8cFhF3Bf6R3u6HSbE98FDga9UhklTJwVK6rcdm5vWj+uIRsT69AXM7ep/MPwh4IHDnUT1ngb/AwVJam6cAu1ZHzNHPgGdn5ndG/USZeQFwcES8j9720geP+jmH5Hk4WEqach7eI41RZl6XmRdl5jcy892Z+SR61+jck97pgj+oLRyK/SJiq+oIqTX9ayvfWN0xR+8H9hjHULmqzPwevVXAJ9O7drN1T46ISb5WVJIWzMFSKpaZN2fmrzLzI/Suu3oEvQMxJtVi4OnVEVKDHgDsUh0xS5cDj8rMl2XmNRUB/b8bj6c3YF5Y0TAH6wPPrI6QpEoOllJD+m+kvpaZBwI7ASdXN83TQdUBUoOeVx0wSzcAT8jMJv7+ycxfAvsCv69umYH3tJQ01RwspUZl5tnAY4BDmbz7wO0VEfeqjpBaERHLgKdVd8zSczPz9OqIVfX/PtwPuKy6ZYA9IuIe1RGSVMXBUmpYZt6UmYfQGzBbfkO1JvtWB0gNeSqwrDpiFt6cmU0evpWZPwYeBdxY3TLAAdUBklTFwVKaAJn5ZXr3emt9K9iqJuU0R2kcJmEb7MeBw6ojBukf6vOv1R0DPLo6QJKqOFhKEyIzfw08g+HdZ3PU9qkOkFoQETvRu61Qy34JvCAzJ2Hb/WHAtdURa7FvRKxXHSFJFRwspQmSmacyObcruFtE3L06QmrAk6oDZuFNmXlDdcRsZOaFwPuqO9ZiGb37E0vS1HGwlCbPPwEnVUfMktthpfavu/sR8O/VEXP0DuCq6oi1aP2/tySNhIOlNGEycyXwYto+wOIWe1cHSJUiYlPa/3Pw+v7fKxMjMy8FjqzuWItHVgdIUgUHS2kCZeYFwGerO2Zhx+oAqdi+wDrVEQN8E/hSdcQ8HV8dsBa7RsTS6ghJGjcHS2lyHVEdMAvbVQdIxVrfFvnaCTmwZ01+BFxcHbEG6wL3qY6QpHFzsJQmVGZ+F/jf6o4ZbBsRLa/WSCMTEYtoe7A8MzNPq46Yr/5AfHJ1x1rsWR0gSePmYClNtvdUB8xgCXCX6gipyM7AXasjBvhCdcAQfKU6YC32qA6QpHFzsJQm2ynVAbOwfXWAVKT1e1eeWB0wBKcALW7ldcVS0tRxsJQmWGZeAfy0umMGXmepabV7dcAAFwPfrY5YqMy8BPh+dcca7OZlAJKmjYOlNPm+VR0wg02qA6Qiu1UHDPDFSbvFyABZHbAGG+Cp2JKmjIOlNPlaHyw3qg6Qxi0iFtP2YNmF6ytvcV51wFrcozpAksbJwVKafA6WUnu2B5ZVR6zFNcCp1RFDdH51wFrcvTpAksbJwVKafD8FVlRHDLBhdYBUoOXrK7+ZmddWRwxRqyuWd6sOkKRxcrCUJlxm3gRcXt0xgCuWmkYtD5ZnVQcMmSuWktQAB0upG66oDhjAFUtNo12qAwY4pzpgyC6oDlgLVywlTRUHS6kbWh4sl1QHSAVaHirOrg4Ypsy8nt7tU1rjiqWkqeJgKXVDy4PlVdUBUoG7VgcM0KnBsq/F7bB3i4hF1RGSNC4OllI3OFhKjYiI9YAtqzvWYjnw2+qIEVheHbAGS4GNqyMkaVwcLKVuaHmwvLI6QBqzrasDBjgnM2+ujpgiHl4maWo4WErd0PKfZQdLTZu7VAcM0MVtsACtDst3qA6QpHFp+c2opNnbrDpgALfCatq0PFj+vDpgRFodLJdVB0jSuDhYSt1wx+qAAVyx1LRpebC8tDpgRBwsJamYg6XUDS0Plr+rDpDG7M7VAQO0eMhNlzlYSpoaDpZSN7Q8WP64OkAasw2rAwa4ujpgRFyxlKRiDpZSN7R6jeW5melWWE2bDaoDBujqiqWDpSQVc7CUJlxE3J12Tx78YXWAVGD96oABXLEcr/OqAyRpXNatDpC0YA+qDhjgR9UBUgFXLMfv8cA61RFrcE11gCSNi4OlNPkcLKW2uGI5Zpl5XXWDJE07t8JKk2+f6oAB3AqraeSKpSRp6jhYShMsIjYGdq3uWIvf0N2bsUuDuGIpSZo6DpbSZHsi7f45Pj4zWz1QQxqllgfLa6sDJEnd1OobUkkziIhFwN9UdwxwfHWAVKTFQ2RusbI6QJLUTQ6W0uTaj3a3wV4MfLM6QpIkSePhYClNrpZXK0/ITFdGJEmSpoSDpTSBIuL+wKOqOwZwG6wkSdIUcbCUJkxEbAIcW90xwM+BU6sjJEmSND4OltIE6R/Y81Fg++qWAd6WmTdVR0iSJGl8HCylyfIy4EnVEQOcBxxTHSFJkqTxcrCUJkREPB14V3XHDN6emSuqIyRJkjRe61YHSBosIhYDhwJvqG6ZwcX0tulKkiRpyjhYSg2LiI2AT9D29tdbvCMzr6uOkCRJ0vg5WEoN6q9SPgV4C3Dv4pzZ+B7w/uoISZIk1XCwlBrSHyifBLwZ2KU4Z7auA/7CayslSZKml4OlVCwi1gH2AvYH/hzYtbZozl6bmTm0650AABWQSURBVGdVR0iSJKmOg6U0Jv17UN4J2Kr/2AHYD9gX2LQwbSG+Dry3OkKSJEm1HCyl2/pWRKwc8tdcDGwO3Pn/t3fvUZfVdR3H3yMX5aIUgmRolrnKUhH7oqFZihFqJahAZEvLG+HSNBQVNUPB0jTLCJCSpCTMDFARhCQVyxsKX1CQEE0iGAjDC7dhhmGA/thnVsM0z/3s/d17n/drrbOeWfxxfp+HZ88z+3N+lw1sM+X3rnQr8KLMnPb/L0mSJA2MxVK6tz2rAwzEOuCAzLy6OogkqZeeFBE7V4co8PDqAFIVi6WkpVoPPDszz68OIknqrT+vDiCpW/epDiBpUDYAB2fmJ6uDSJIkqT8slpIW627geZn58eogkiRJ6heLpaTFWAP8ZmaeXh1EkiRJ/eMeS0kL+RpwSGZeWR1EkiRJ/eSMpaT5vBfY21IpSZKk+ThjKWlLbgZekplnVAeRJElS/zljKWlT9wCnAHtYKiVJkrRYzlhK2ugjwFGZeXl1EEmSJA2LxVLSJ4E3Z+ZF1UEkSZI0TC6FlWbbpcDxwGXVQSRJkjRczlhKs20P4Czg1og4GzgD+OfMXFMbS5IkSUNisZQEcH/geZPX2og4FzgNOD0zN5QmkyRJUu+5FFbS5rYDngt8CPh6RBwQEauKM0mSJKnHLJaS5vPTwMeAf4uIvavDSJIkqZ8slpIW48nAlyLitIh4RHUYSZIk9YvFUtJSHARcERFHuDxWkiRJG1ksJS3V1sC7gRMjwgPAJEmSZLGUtGyHAWdHxAOqg0iSJKmWxVLSSjwd+EJEPKw6iCRJkupYLCWt1KOBL0dEVAeRJElSDYulpGnYDTgrInarDiJJkqTuWSwlTcuDgX+IiK2qg0iSJKlbFktJ0/Q04KjqEJIkSeqWxVLStP1hROxXHUKSJEnd8Rl00r2dCtxVMO62wK40exV3m/x5VUGOaVgFfDAiHpeZq6vDSJIkqX0WS+neXpqZd1SHmOxT3A3YB3gO8Exg+9JQS7MLcGpE7JOZ91SHkSRJUrssllIPZeZdwPXAB2lm/7YD9gUOBZ5VmW0JngI8Azi3OogkSZLa5R5LaQAyc21mnpWZ+wPPpSmdQ3BMRAx1Sa8kSZIWyWIpDUxmfhT4WeC91VkWYS9g/+oQkiRJapfFUhqgzLw5M18BvLI6yyIcExH+rpEkSRox91hKA5aZx0fE7sAbqrPMYw/gIOCfqoNIkjqzd2Z+uTpE1yLiT4HXVueQKjiLIA3fm4BTqkMs4OjJSbeSJEkaIYulNHCTx3m8FLi4Oss8HklzSqwkSZJGyGIpjUBm3gm8vjrHAn6jOoAkSZLaYbGURiIzPw38S3WOeRwYEe7rliRJGiGLpTQufT7EZxdgn+oQkiRJmj6LpTQimXkxcEZ1jnkcUh1AkiRJ02exlMbn76sDzOO5EbFNdQhJkiRNl8VSGp/zgNurQ8zhh4F9q0NIkiRpuiyW0shk5lrgnOoc83hqdQBJkiRNl8VSGqc+77N8XHUASZIkTZfFUhqnc4A7q0PMYc+IWFUdQpIkSdNjsZRGKDNvAa6szjGHXYEHV4eQZpQf6kiSWmGxlMbr36sDzMPlsBqzvq4WALhvdQBJ0jhZLKXx6nOx3LM6gNSitdUB5nH/6gCSpHGyWErjdXl1gHlYLDVmfS6WO1YHkCSNk8VSGq8+z1g+ujqA1CKLpSRp5lgspfH6D+Du6hBzeGB1AKlF66oDzMNiKUlqxdbVASS1IzPXR8QtwA9VZ9mCnaoDSC1yxrJjEfF6YOfqHJvZABydmX0+zEmSpsZiKY3bbfSzWG4bEffLzDZndjYA27T4/isxKydz9vn73NDie1ssu/cy4CeqQ2zBZyYvSRo9l8JK43ZrdYB5tD1reXvL778Soz+ZMyJW0e/vs83y1+di2eefyUr4fE5JKmaxlMbttuoA85jlYjkLS4G3p7//xqzLzDb3H/f5A52xzlj29VpbXx1AkrrS11/Ekqajzze4bZerPs8aPaA6QAf6PDPW9ocO17X8/isx1muvrzOWFktJM8NiKY2bM5b9NNab+031+Xts+0OH1S2//0r0cR/iNFgsJamYxVIatzuqA8yj7SV5Fstaszxj2edi+bPVAVrS1/sZi6WkmdHXX8SSpqPPN/dt33BZLGv1+dqb6WI5OVhpbPr6PVksJc0Mi6U0bn0+JKbtm3uLZa0+f49tL4W9GVjT8hjLtSPwkOoQLbBYSlIxi6U0bn0ulm3f3N/Q8vuvRN8e5N6GPs9YtnptZOY99HzWsjpAC7aqDjCHPh8iJklTZbGUxu2HqgPMo+0Zxf9q+f1X4lHVATrQ50Niurg2+nwy7KiKZURsDTywOscW3AV8rzqEJHXFYimN2yzPWPa5WO4ZEX2dYZmWPasDzKOLa+M/OxhjuUZVLIHd6Of9zP+0/LxUSeqVPv4iljQFEbENsEN1jnm0PWN5TcvvvxI7AI+oDtGyx1YHmEcX18YlHYyxXGMrlrtXB5hDn5fjS9LUWSyl8XpkdYAFtH24SZ9nLAF+rjpAWyLi/vS7OHdxbfS5WO4REfetDjFFfT2MyGIpaaZYLKXxenx1gHncBtzS8hirgXtaHmMlHlcdoEWPqQ6wgC6K5dfo7/W3I7BvdYgp6uuM5XeqA0hSlyyW0nj1uVheMzk5szWZuR64vs0xVmi0M5b0exnsWuC7bQ+SmWuAK9seZwUOrA4wRc5YSlIPWCyl8ep1sexonG90NM5yPG6kD6qHfh/c8822P9TYxMUdjbMcB0z2YY9BX2csLZaSZorFUhqhyf6pPapzzKOrYvnljsZZjp2BJ1aHaMkTqgPMo8tros/7LHcGnlIdYkoeXh1gDt+qDiBJXbJYSuP0RKDPsxEWy8ZLqgNMW0Q8in7PWHZ5TfR5xhJGsBw2InYA9qrOMYevVweQpC5ZLKVxOrQ6wAK6KpZf6Wic5TokInasDjFlL6wOsIAur4kLgHUdjrdUzxnB81R/gX5+iHYrcG11CEnqksVSGpmI2BU4qDrHAjrZ+5iZN9D/51n+RnWIaYmIrYEXVOeYx23AFV0Nlpm3A+d3Nd4y7AY8rTrECvU1/9c73MsrSb1gsZTG50XAttUh5rGe5lEMXen7ctgXVweYomfQlJW+uigz7+p4zHM6Hm+p3h4RQ74X6G2xrA4gSV0b8j8mkjYzuUE8rDrHAr46eRRIV/peLH8hIh5ZHWJKXlgdYAEV10Lfi+VewG9Vh1iOiNgJiOocc7BYSpo5FktpXA6lvyckbtT1vsd/6Xi85XhrdYCViogHA/tX51jAZ7oeMDOvot+PvQF4R0RsXx1iGfahv/cxl1cHkKSu9fUXsqQliohHAH9enWMRui6WlwHf7njMpTokIgZ7QufkeZwn0s9DVDa6ibr9jn2ftXwI8OrqEMvQ18wb6P9KCUmaOoulNAKTQ1NOAYYw69BpsZwcoPGRLsdcphMnBy8N0fOBA6pDLODjmXln0dh9L5YAb4yIH6kOsVgR8VTgl6pzzOGCzLytOoQkdc1iKY3DkTTPruy7G6h5aPgZBWMu1a7ACdUhlioidgeOq86xCJUfLvwrsLpw/MXYATh+QAf5vLU6wDw+XR1AkioM5R8QSXOIiMOBt1XnWKQzM/PugnEvBK4rGHepDo6IwTx+ZLIE9iRgp+osC1gDnFc1eGZuAN5fNf4SHAj85eTn2lsR8RTgKdU55mGxlDSTLJbSQEXEVhFxLPAeoNc3gpsomTWalNmPVoy9DO+PiF+uDrFIrwOeWR1iEc7JzLXFGf4GqPhQZaleQY9nAyNiW+Dt1TnmsQb3V0qaURZLaYAmJzieDryqOssS3Ax8tnD8fywceyl2BM6JiIOrg8wlIu4TEX8GvLM6yyL9U3WAzFwNfKI6xyIdFRG9+90SEVvR7CV/UnWWefxbx49TkqTesFhKAxIR942IlwPfBJ5dnWeJzi6+4foikIXjL8W2wIcnP+teiYjtaIraa6qzLNK1wMeqQ0y8rzrAEhwbEb9dHWKjyfLc44FDqrMs4NzqAJJUxWIpDUBEbBsRv0tz8M0JwO7FkZajdCnq5HTYITyOZaNVwAkRcfRkpqZcROwCfIpmL95QHDfZ49gH59IU3aH4QEScFBE/XB0E+CPgZdUhFrCB4ayMkKSps1hKPRURPx4RL46IU4FrgL8GHloca7luAM6qDgGcxjAO8dnUUUBGxH5VASYfbLwcuJR+L0Pc3Bqaw4V6ITPvYngn/74UuCIiDqo41CciHhoRHwLe1PXYy/CJzLyxOoQkVdm6OoDUM4+JiK6Wa66iOU3zgZu9fgR4MvATHeXowgl92HeUmXdGxHHAn1RnWaLHAp+MiPOAIzPzq10MOnk+6guAtwAP62LMKTs5M2+qDrGZ44HDaf6eD8VuNB/KnBkRr8jM1j+cmSy5fi3wRmC7tsebkg9UB5CkShZL6d4urA4wQutoZlv74n00s4DbVwdZhv2AX4mID9LcxH4uM++Y9iAR8SDgV4E3AD897ffvyD3AsdUhNpeZayLiGOC91VmW4QBg34j4KM3hYedN+7TdybLbZwHHMKwPM77HcA5nkqRWWCwlte3UPi0Py8wfRMSJwBHVWZZpFfD8yWtNRHyGZu/euZl59XLeMCJ2AH4R2Hfyeux0opY6PTO/XR1iDn9Dc/39ZHWQZdiB/7v+bouIT9CUzHMzc81S3ywi7gME8IzJa2+GuU3nQ31YlSFJlSyWktr2F9UBtuBtNEs8H1QdZIV2oJndeRZARFxFczjMjcD/TL5u/PPdwC40y6132eT1IGAPYJuOs7dpHfD66hBzmSzJ/kPgH6qzrNCONKe0HgKsj4hrafZT//dmX79Hs+x/ly28fmbydeiGdOKvJLXCYimpTadl5uXVITaXmTdHxBuAk6uzTNnDJ69Z987lzt526MPAkYxjdhiaR+T8JMOchV2pj2bmZdUhJKnaEJebSBqGtTSHb/TVB3BP7RhdA7yrOsRCMvNuhrscW/d2THUASeoDi6Wktrw9M6+pDjGXyY39K6tzaOpek5m3V4dYjMz8NHBidQ6tyMe6OqVZkvrOYimpDf8JvLs6xEIy88vA31bn0NR8BvhIdYgleh3Q10OGtDBnKyVpwmIpqQ2vzsx11SEW6TXAVdUhtGI3AS/JzHuqgyzF5CTV36Y5XEnDcmZmXlIdQpL6wmIpadpOzswzq0MsVmbeBBwM+KiAYfudARzYs0WZ+UXgT6tzaEnWAIdXh5CkPrFYSpqmS4Hfqw6xVJl5MfDq6hxatndn5serQ6zQW2j+/mgY3jjUDzIkqS0WS0nTcitwUGaurQ6yTCfSPAJCw/JF4E3VIVYqM+8AnkPz3FH12xeBE6pDSFLfWCwlTcuLMvNb1SGWa7I371Dgm9VZtGjfAw7JzDurg0xDZl4F7A8MZX/yLFpPs5fXPbGStBmLpaRpOCYzz6gOsVKZeSvwTOD66ixa0G3Ar2fm6uog05SZFwDPBwZ1CNEMeUtmfqM6hCT1kcVS0kq9E3hrdYhpmcwa/TIuSeyztTSl8oLqIG2YfEjz2uoc+n/OAN5VHUKS+spiKWkl3kNziMWoZlcmMxL7Aj+ozqL/Zz3w7Mz81+ogLXsP7uPrk4tpTh52CawkzcFiKWm5jgOOGFup3CgzLwWeTnMokfphA3BwZp5XHaRtk79Xr8Jy2Qf/Dew/eeaoJGkOFktJy/HHwO+PtVRulJkXAr8K3FSdRawHfmsEjxVZtMns2CuBo6uzzLB1NKXyuuogktR3FktJS7GGZsbozWMvlRtl5ueBvYHBnng7AjcCT8vM06qDdC0z78nMtwK/X51lBq0DDszMi6qDSNIQWCwlLdZVwBMz8/TqIF3LzCtpyuX51Vlm0OXAEzLzC9VBKmXmX9KcFntXdZYZcQuwX2aeUx1EkobCYilpMc4FHp+Zl1UHqZKZ36fZc3lSdZYZcg7wpMy8ujpIH2TmB4FfB75fnWXkbgSempmfqw4iSUNisZQ0n+8CLwB+bVKsZlpm3gkcBhwO3FkcZ+zeTbO37ZbqIH2Smf8M7Al8vjrLSF0LPDkzL6kOIklDY7GUNJcPAD+TmafOyn7KxZjseTsW2Av4anWeEbqaZj/l6zLTZZ9bkJnXAvvQHKLl383pOR/YOzO/WR1EkobIYilpc1cC+2bmCzPzu9Vh+mryOJKfB96G+96m5X3AHpnpXtYFZOaGzHwzsB/wneo8A3cX8CbgVzLz+uowkjRUFktJG/078DzgUZn56eowQ5CZ6zPzKOCJwBXVeQZsNfD0zDwsM31u6BJk5qeAxwKnVmcZqKtplr6+wxlySVoZi6WkrwEHAY/JzH/05mrpJs+7/DngSHzm5VKsA94JPDozz6sOM1SZ+Z3MfAHwJCCr8wzI3wF7ZuYF1UEkaQy2rg4gqcR64OPA3wLnuody5TJzHfCuiDgJeAPwKuB+tal66y7gZOBoHzw/PZn5pYh4AvBC4B3Ag2oT9dZngSMy8+LqIJI0JhZLabZ8CTgF+HBm/qA6zBhN/r8eGRHHAW8BXoyrQzZ1BvAHk2eDasoy827g5Ig4g2bf4MuAB9Sm6o0rgdcBZ/thmiRNn8VSGrf1wBeATwGnZea3ivPMjMxcDRwaEe8CXg68CNipNlWZtcCHgBOcJepGZt5M8wHHH9N8uHE48LDaVGW+ARwLvH/yyCBJUgssltL4XEJTJD8FfD4zby/OM9MmZf7VEfEHwG/SlMyoTdWZbwB/BZziDHmNyXNA/yIijgeeAxxBc5rx2N0NnAkcD5zvDKUktc9iKQ3XzcBlk9elk69fn8xUqGcmBf9kmmWKjwcOA/YHdi0NNn23AJ8ATgI+6w19P2TmBuA04LTJPsxDaA7t+rHSYNN3Hc2hPH89ed6nJKkjFkup3t00J4n+YI6vW/pv1wPXetM+TJNTZC+MiK1oZo+eNXk9qjTY8n0bOGvy+pzLDfstM78CfCUiXksze34QcCDwiNJgy5f83/V3ib8XJanGquoAmi0RsS3jm6FZiVuBW70REkBEPJymYP4isBf93RN3PXARzf7ds4ErvIaHLSJWAY8B9gX2nrweWhpqbv9Fc/2dR3MQz/XFeUpMfmY/Wp1jHjdm5vrqEF2LiJ2AHatzzGFNZvpILLXGYilJPRURu9LMKD2epmgGsHvHMW6g2bd7EXAhkLN6Iz9rImJ3mhn1jUXzp4DdOo5xNc2M5MbXxZn53Y4zSJIWwWIpSQMSEfelKZcPpdkft/H1EOD+wPbAdpPX9pt8XQXcTnNC6+ZfbwNWA9cA127ydXVmru3oW9MARMR2NNfbj2/22pnmOtv42mGTP98PuIPmWtv0tW7y9fs019u1NNfhxq/XzeKMlyQN1f8CILJtF0JVDR8AAAAASUVORK5CYII="/>
                                </defs>
                            </svg>`
};


/***/ }),

/***/ 76226:
/*!*************************************************!*\
  !*** ./projects/icon-library/src/public-api.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconLibraryService": () => (/* reexport safe */ _lib_icon_library_service__WEBPACK_IMPORTED_MODULE_0__.IconLibraryService),
/* harmony export */   "IconLibraryComponent": () => (/* reexport safe */ _lib_icon_library_component__WEBPACK_IMPORTED_MODULE_1__.IconLibraryComponent),
/* harmony export */   "IconLibraryModule": () => (/* reexport safe */ _lib_icon_library_module__WEBPACK_IMPORTED_MODULE_2__.IconLibraryModule)
/* harmony export */ });
/* harmony import */ var _lib_icon_library_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/icon-library.service */ 77419);
/* harmony import */ var _lib_icon_library_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/icon-library.component */ 60132);
/* harmony import */ var _lib_icon_library_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/icon-library.module */ 16551);
/*
 * Public API Surface of icon-library
 */





/***/ }),

/***/ 59475:
/*!***************************************************************!*\
  !*** ./projects/image-carousel/src/lib/carousel.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./touches */ 69459);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ 28184);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ 87426);
/* harmony import */ var _cells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cells */ 98130);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide */ 77473);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ 56304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _sanitize_html_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sanitize-html/sanitize-html.pipe */ 53982);










function CarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.counter);
} }
function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "sanitizeHtml");
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("object-fit", ctx_r8.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, ctx_r8.getImage(i_r6)["image"]["path"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CarouselComponent_ng_template_5_div_0_img_1_Template, 2, 5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ctx_r7.getCellWidth() + "px")("border-radius", ctx_r7.borderRadius + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.getImage(i_r6) && ctx_r7.getImage(i_r6)["image"]);
} }
function CarouselComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CarouselComponent_ng_template_5_div_0_Template, 2, 5, "div", 8);
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r6 < ctx_r2.cellLimit);
} }
function CarouselComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 14);
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("carousel-dot-active", i_r13 === ctx_r11.activeDotIndex);
} }
function CarouselComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CarouselComponent_div_6_div_1_Template, 1, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.dotsArr);
} }
function CarouselComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
} }
const _c0 = ["*"];
class CarouselComponent {
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.minTimeout = 30;
        this.isVideoPlaying = false;
        this._isCounter = false;
        this._cellWidth = 200;
        this._loop = false;
        this._lightDOM = false;
        this.isMoving = false;
        this.isNgContent = false;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.height = 200;
        this.autoplay = false;
        this.autoplayInterval = 5000;
        this.pauseOnHover = true;
        this.dots = false;
        this.margin = 10;
        this.objectFit = 'cover';
        this.minSwipeDistance = 10;
        this.transitionDuration = 200;
        this.transitionTimingFunction = 'ease-out';
        this.counterSeparator = " / ";
        this.overflowCellsLimit = 3;
        this.listeners = 'mouse and touch';
        this.cellsToScroll = 1;
        this.freeScroll = false;
        this.arrows = true;
        this.arrowsOutside = false;
        this.arrowsTheme = 'light';
        this.hostClassCarousel = true;
        this.handleTouchstart = (event) => {
            this.touches.addEventListeners("mousemove", "handleMousemove");
            this.carousel.handleTouchstart(event);
            this.isMoving = true;
        };
        this.handleHorizontalSwipe = (event) => {
            event.preventDefault();
            this.carousel.handleHorizontalSwipe(event);
        };
        this.handleTouchend = (event) => {
            const touches = event.touches;
            this.carousel.handleTouchend(event);
            this.touches.removeEventListeners("mousemove", "handleMousemove");
            this.isMoving = false;
        };
        this.handleTap = (event) => {
            let outboundEvent = {
                name: 'click'
            };
            let nodes = Array.prototype.slice.call(this.cellsElement.children);
            let cellElement = event.srcElement.closest(".carousel-cell");
            const i = nodes.indexOf(cellElement);
            const cellIndex = nodes.indexOf(cellElement);
            if (this.images) {
                //outboundEvent.fileIndex = this.carousel.getFileIndex(i);
                //outboundEvent.file = this.carousel.getFile(cellIndex);
            }
            else {
                outboundEvent.cellIndex = cellIndex;
            }
        };
    }
    get isContainerLocked() {
        if (this.carousel) {
            return this.carousel.isContainerLocked;
        }
    }
    get slideCounter() {
        if (this.carousel) {
            return this.carousel.slideCounter;
        }
    }
    get lapCounter() {
        if (this.carousel) {
            return this.carousel.lapCounter;
        }
    }
    get isLandscape() {
        return window.innerWidth > window.innerHeight;
    }
    get isSafari() {
        const ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') !== -1) {
            return !(ua.indexOf('chrome') > -1);
        }
    }
    get counter() {
        let counter;
        if (this.loop) {
            counter = this.slideCounter % this.cellLength;
        }
        else {
            counter = this.slideCounter;
        }
        return counter + 1 + this.counterSeparator + this.cellLength;
    }
    get cellsElement() {
        return this.elementRef.nativeElement.querySelector('.carousel-cells');
    }
    get isArrows() {
        return this.arrows && !this.freeScroll;
    }
    get isCounter() {
        return this._isCounter && this.cellLength > 1;
    }
    get activeDotIndex() {
        return this.slideCounter % this.cellLength;
    }
    get cellLimit() {
        if (this.carousel) {
            return this.carousel.cellLimit;
        }
    }
    get carouselWidth() {
        return this.elementRef.nativeElement.clientWidth;
    }
    set images(images) {
        this._images = images;
    }
    get images() {
        return this._images;
    }
    set cellWidth(value) {
        if (value) {
            this._cellWidth = value;
        }
    }
    set isCounter(value) {
        if (value) {
            this._isCounter = value;
        }
    }
    set loop(value) {
        if (value) {
            this._loop = value;
        }
    }
    get loop() {
        if (this.images) {
            return this._loop;
        }
        else {
            return false;
        }
    }
    set lightDOM(value) {
        if (value) {
            this._lightDOM = value;
        }
    }
    get lightDOM() {
        if (this.images) {
            return this._lightDOM;
        }
        else {
            return false;
        }
    }
    onWindowResize(event) {
        if (this.utils.visibleWidth !== this.savedCarouselWidth) {
            this.resize();
        }
    }
    onMousemove(event) {
        if (this.autoplay && this.pauseOnHover) {
            this.carousel.stopAutoplay();
        }
    }
    onMouseleave(event) {
        if (this.autoplay && this.pauseOnHover) {
            this.carousel.autoplay();
        }
    }
    ngOnInit() {
        this.isNgContent = this.cellsElement.children.length > 0;
        this.touches = new _touches__WEBPACK_IMPORTED_MODULE_0__.Touches({
            element: this.cellsElement,
            listeners: this.listeners,
            mouseListeners: {
                "mousedown": "handleMousedown",
                "mouseup": "handleMouseup"
            }
        });
        this.touches.on('touchstart', this.handleTouchstart);
        this.touches.on('horizontal-swipe', this.handleHorizontalSwipe);
        this.touches.on('touchend', this.handleTouchend);
        this.touches.on('mousedown', this.handleTouchstart);
        this.touches.on('mouseup', this.handleTouchend);
        this.touches.on('tap', this.handleTap);
        this.setDimensions();
    }
    ngAfterViewInit() {
        this.initCarousel();
        this.cellLength = this.getCellLength();
        this.dotsArr = Array(this.cellLength).fill(1);
        this.ref.detectChanges();
        this.carousel.lineUpCells();
        this.savedCarouselWidth = this.carouselWidth;
        /* Start detecting changes in the DOM tree */
        this.detectDomChanges();
    }
    ngOnChanges(changes) {
        if (changes['width'] || changes['height'] || changes['images']) {
            this.setDimensions();
            this.initCarousel();
            this.carousel.lineUpCells();
            this.ref.detectChanges();
        }
    }
    ngOnDestroy() {
        this.touches.destroy();
        //this.carousel.destroy();
    }
    initCarousel() {
        this.carouselProperties = {
            id: this.id,
            cellsElement: this.elementRef.nativeElement.querySelector('.carousel-cells'),
            hostElement: this.elementRef.nativeElement,
            images: this.images,
            cellWidth: this.getCellWidth(),
            loop: this.loop,
            autoplayInterval: this.autoplayInterval,
            overflowCellsLimit: this.overflowCellsLimit,
            visibleWidth: this.width,
            margin: this.margin,
            minSwipeDistance: this.minSwipeDistance,
            transitionDuration: this.transitionDuration,
            transitionTimingFunction: this.transitionTimingFunction,
            videoProperties: this.videoProperties,
            eventHandler: this.events,
            freeScroll: this.freeScroll,
            lightDOM: this.lightDOM
        };
        this.utils = new _utils__WEBPACK_IMPORTED_MODULE_5__.Utils(this.carouselProperties);
        this.cells = new _cells__WEBPACK_IMPORTED_MODULE_3__.Cells(this.carouselProperties, this.utils);
        this.container = new _container__WEBPACK_IMPORTED_MODULE_2__.Container(this.carouselProperties, this.utils, this.cells);
        this.slide = new _slide__WEBPACK_IMPORTED_MODULE_4__.Slide(this.carouselProperties, this.utils, this.cells, this.container);
        this.carousel = new _carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel(this.carouselProperties, this.utils, this.cells, this.container, this.slide);
        if (this.autoplay) {
            this.carousel.autoplay();
        }
    }
    resize() {
        this.landscapeMode = this.isLandscape;
        this.savedCarouselWidth = this.carouselWidth;
        this.carouselProperties.cellWidth = this.getCellWidth();
        this.cells.updateProperties(this.carouselProperties);
        this.carousel.updateProperties(this.carouselProperties);
        this.container.updateProperties(this.carouselProperties);
        this.slide.updateProperties(this.carouselProperties);
        this.utils.updateProperties(this.carouselProperties);
        this.carousel.lineUpCells();
        this.slide.select(0);
        this.ref.detectChanges();
    }
    detectDomChanges() {
        const observer = new MutationObserver((mutations) => {
            this.onDomChanges();
        });
        var config = {
            attributes: true,
            childList: true,
            characterData: true
        };
        observer.observe(this.cellsElement, config);
    }
    onDomChanges() {
        this.cellLength = this.getCellLength();
        this.carousel.lineUpCells();
        this.ref.detectChanges();
    }
    setDimensions() {
        this.hostStyleHeight = this.height + 'px';
        this.hostStyleWidth = this.width + 'px';
    }
    getImage(index) {
        return this.carousel.getImage(index);
    }
    handleTransitionendCellContainer(event) {
        if (event.target['className'] === 'carousel-cells') {
            this.carousel.handleTransitionend();
        }
    }
    getCellWidth() {
        let elementWidth = this.carouselWidth;
        if (this.cellsToShow) {
            let margin = this.cellsToShow > 1 ? this.margin : 0;
            let totalMargin = margin * (this.cellsToShow - 1);
            return (elementWidth - totalMargin) / this.cellsToShow;
        }
        if (this._cellWidth === '100%') {
            return elementWidth;
        }
        else {
            return this._cellWidth;
        }
    }
    next() {
        this.carousel.next(this.cellsToScroll);
        this.carousel.stopAutoplay();
    }
    prev() {
        this.carousel.prev(this.cellsToScroll);
        this.carousel.stopAutoplay();
    }
    isNextArrowDisabled() {
        if (this.carousel) {
            return this.carousel.isNextArrowDisabled();
        }
    }
    isPrevArrowDisabled() {
        if (this.carousel) {
            return this.carousel.isPrevArrowDisabled();
        }
    }
    getCellLength() {
        if (this.images) {
            return this.images.length;
        }
        else {
            return this.cellsElement.children.length;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef)); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"], ["", "carousel", ""]], hostVars: 6, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"])("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) { return ctx.onMousemove($event); })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseleave($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("carousel", ctx.hostClassCarousel);
    } }, inputs: { id: "id", height: "height", width: "width", autoplay: "autoplay", autoplayInterval: "autoplayInterval", pauseOnHover: "pauseOnHover", dots: "dots", borderRadius: "borderRadius", margin: "margin", objectFit: "objectFit", minSwipeDistance: "minSwipeDistance", transitionDuration: "transitionDuration", transitionTimingFunction: "transitionTimingFunction", videoProperties: "videoProperties", counterSeparator: "counterSeparator", overflowCellsLimit: "overflowCellsLimit", listeners: "listeners", cellsToShow: "cellsToShow", cellsToScroll: "cellsToScroll", freeScroll: "freeScroll", arrows: "arrows", arrowsOutside: "arrowsOutside", arrowsTheme: "arrowsTheme", images: "images", cellWidth: "cellWidth", isCounter: ["counter", "isCounter"], loop: "loop", lightDOM: "lightDOM" }, outputs: { events: "events" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 8, vars: 6, consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) { return ctx.handleTransitionendCellContainer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CarouselComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CarouselComponent_div_7_Template, 3, 8, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("carousel-moving", ctx.isMoving);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dots);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isArrows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_sanitize_html_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_6__.SanitizeHtmlPipe], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 10000;\n  transform-origin: top left;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  cursor: grab;\n}\n[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%] {\n  text-align: right;\n  position: absolute;\n  z-index: 30;\n  transition: opacity 200ms;\n  top: 8px;\n  right: 24px;\n  border-radius: 13px;\n  background-color: rgba(23, 37, 68, 0.3);\n  font-size: 11px;\n  color: #ffffff;\n  padding: 5px 7px;\n  line-height: initial;\n}\n[_nghost-%COMP%]     .carousel-cells {\n  transition: transform 200ms;\n  width: 100%;\n  height: 100%;\n  display: block;\n  will-change: transform;\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image {\n  transform: translate3d(-100%, 0, 0);\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image {\n  transform: translate3d(100%, 0, 0);\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  object-fit: contain;\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide {\n  display: none;\n}\n[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-size: 31px;\n  background-position: center;\n  border-radius: 100px;\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n  z-index: 10;\n  cursor: pointer;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n}\n[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%] {\n  left: 10px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n}\n[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%] {\n  right: 10px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n}\n[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%] {\n  left: -60px;\n}\n[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%] {\n  right: -60px;\n}\n[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%] {\n  filter: invert(1);\n}\n[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  text-align: center;\n}\n[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid #fff;\n  border-radius: 100px;\n  margin: 4px;\n  width: 8px;\n  height: 8px;\n}\n[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQURGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBRUo7QUFBSTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFFTjtBQURNO0VBQ0UsbUNBQUE7QUFHUjtBQUZNO0VBQ0Usa0NBQUE7QUFJUjtBQUhNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBS1I7QUFKUTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFNVjtBQUxRO0VBQ0UsYUFBQTtBQU9WO0FBTlE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBUVY7QUFORTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtBQVFKO0FBUEU7RUFDRSxVQUFBO0VBQ0EseVRBQUE7QUFTSjtBQVJFO0VBQ0UsV0FBQTtFQUNBLHFUQUFBO0FBVUo7QUFSSTtFQUNFLFdBQUE7QUFVTjtBQVRJO0VBQ0UsWUFBQTtBQVdOO0FBVEk7RUFDRSxpQkFBQTtBQVdOO0FBVkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVlKO0FBWEU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWFKO0FBWkk7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFjTjtBQWJJO0VBQ0Usc0JBQUE7QUFlTiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcydcclxuXHJcblxcOmhvc3RcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgXHJcbiAgZGlzcGxheTogYmxvY2tcclxuICB0b3A6IDBcclxuICBsZWZ0OiAwXHJcbiAgd2lkdGg6IDEwMCUgXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmUgXHJcbiAgei1pbmRleDogMTAwMDBcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICAuY2Fyb3VzZWwtY29udGFpbmVyXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICB3aWR0aDogMTAwJSBcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgY3Vyc29yOiBncmFiXHJcbiAgLmNhcm91c2VsLWNvbnRhaW5lci5jYXJvdXNlbC1tb3ZpbmdcclxuICAgIGN1cnNvcjogZ3JhYmJpbmdcclxuICAuY2Fyb3VzZWwtY291bnRlclxyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgei1pbmRleDogMzBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXNcclxuICAgIHRvcDogOHB4IFxyXG4gICAgcmlnaHQ6IDI0cHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHhcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDM3LCA2OCwgMC4zKVxyXG4gICAgZm9udC1zaXplOiAxMXB4XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG4gICAgcGFkZGluZzogNXB4IDdweFxyXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWxcclxuICA6Om5nLWRlZXBcclxuICAgIC5jYXJvdXNlbC1jZWxsc1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXNcclxuICAgICAgd2lkdGg6IDEwMCUgXHJcbiAgICAgIGhlaWdodDogMTAwJVxyXG4gICAgICBkaXNwbGF5OiBibG9jayBcclxuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybVxyXG4gICAgICAuY2Fyb3VzZWwtY2VsbC5zd2lwZXItcHJldi1pbWFnZVxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApXHJcbiAgICAgIC5jYXJvdXNlbC1jZWxsLnN3aXBlci1uZXh0LWltYWdlXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKVxyXG4gICAgICAuY2Fyb3VzZWwtY2VsbFxyXG4gICAgICAgIHdpZHRoOiAxMDAlIFxyXG4gICAgICAgIGhlaWdodDogMTAwJVxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgICAgICBpbWcsXHJcbiAgICAgICAgdmlkZW9cclxuICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpblxyXG4gICAgICAgIGltZy5zd2lwZXItaGlkZSBcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgXHJcbiAgICAgICAgLmNhcm91c2VsLXBsYXlcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICAgIHJpZ2h0OiAwXHJcbiAgICAgICAgICB6LWluZGV4OiAxXHJcblxyXG4gIC5jYXJvdXNlbC1hcnJvd1xyXG4gICAgd2lkdGg6IDQwcHhcclxuICAgIGhlaWdodDogNDBweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMXB4XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHRvcDogNTAlXHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweFxyXG4gICAgei1pbmRleDogMTBcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KVxyXG4gIC5jYXJvdXNlbC1hcnJvdy1wcmV2XHJcbiAgICBsZWZ0OiAxMHB4XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSWdkMmxrZEdnOUlqSTBJajQ4Y0dGMGFDQmtQU0pOTVRVdU5ERWdNVFl1TlRsTU1UQXVPRE1nTVRKc05DNDFPQzAwTGpVNVRERTBJRFpzTFRZZ05pQTJJRFlnTVM0ME1TMHhMalF4ZWlJdlBqeHdZWFJvSUdROUlrMHdJREJvTWpSMk1qUklNRll3ZWlJZ1ptbHNiRDBpYm05dVpTSXZQand2YzNablBnPT0pXHJcbiAgLmNhcm91c2VsLWFycm93LW5leHQgXHJcbiAgICByaWdodDogMTBweFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0lnZDJsa2RHZzlJakkwSWo0OGNHRjBhQ0JrUFNKTk9DNDFPU0F4Tmk0MU9Vd3hNeTR4TnlBeE1pQTRMalU1SURjdU5ERWdNVEFnTm13MklEWXROaUEyTFRFdU5ERXRNUzQwTVhvaUx6NDhjR0YwYUNCa1BTSk5NQ0F3YURJMGRqSTBTREJXTUhvaUlHWnBiR3c5SW01dmJtVWlMejQ4TDNOMlp6ND0pXHJcbiAgLmNhcm91c2VsLWFycm93cy1vdXRzaWRlXHJcbiAgICAuY2Fyb3VzZWwtYXJyb3ctcHJldlxyXG4gICAgICBsZWZ0OiAtNjBweFxyXG4gICAgLmNhcm91c2VsLWFycm93LW5leHRcclxuICAgICAgcmlnaHQ6IC02MHB4XHJcbiAgLmNhcm91c2VsLWRhcmstYXJyb3dzXHJcbiAgICAuY2Fyb3VzZWwtYXJyb3dcclxuICAgICAgZmlsdGVyOiBpbnZlcnQoMSlcclxuICAuY2Fyb3VzZWwtYXJyb3ctZGlzYWJsZWRcclxuICAgIGN1cnNvcjogZGVmYXVsdFxyXG4gICAgb3BhY2l0eTogMC41XHJcbiAgLmNhcm91c2VsLWRvdHNcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgbGVmdDogMFxyXG4gICAgcmlnaHQ6IDBcclxuICAgIGJvdHRvbTogMFxyXG4gICAgei1pbmRleDogMTBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgLmNhcm91c2VsLWRvdFxyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZlxyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweFxyXG4gICAgICBtYXJnaW46IDRweFxyXG4gICAgICB3aWR0aDogOHB4XHJcbiAgICAgIGhlaWdodDogOHB4XHJcbiAgICAuY2Fyb3VzZWwtZG90LWFjdGl2ZVxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIl19 */"] });


/***/ }),

/***/ 7197:
/*!************************************************************!*\
  !*** ./projects/image-carousel/src/lib/carousel.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IvyCarouselModule": () => (/* binding */ IvyCarouselModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.component */ 59475);
/* harmony import */ var _sanitize_html_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanitize-html/sanitize-html.pipe */ 53982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class IvyCarouselModule {
}
IvyCarouselModule.ɵfac = function IvyCarouselModule_Factory(t) { return new (t || IvyCarouselModule)(); };
IvyCarouselModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IvyCarouselModule });
IvyCarouselModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IvyCarouselModule, { declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent,
        _sanitize_html_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_1__.SanitizeHtmlPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent,
        _sanitize_html_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_1__.SanitizeHtmlPipe] }); })();


/***/ }),

/***/ 28184:
/*!*****************************************************!*\
  !*** ./projects/image-carousel/src/lib/carousel.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel)
/* harmony export */ });
class Carousel {
    constructor(properties, utils, cells, container, slide) {
        this.properties = properties;
        this.utils = utils;
        this.cells = cells;
        this.container = container;
        this.slide = slide;
        /* The slide length has been limited by the limitSlideLength() method */
        this.isSlideLengthLimited = false;
        this.isContentImages = true;
        this.isLazyLoad = true;
        this.isContainerLocked = true;
        this.alignCells = "left";
        this.initialContainerPosition = 0;
        this.containerPullLimit = 100;
        this.handleTouchstart = (event) => {
            this.container.handleTouchstart();
            this.slide.handleTouchstart(event);
        };
        this.handleHorizontalSwipe = (event) => {
            this.container.handleHorizontalSwipe();
        };
        this.handleTouchend = (event) => {
            if (this.properties.freeScroll) {
                this.container.handleTouchend();
            }
            else {
                this.container.handleTouchend(true);
                this.slide.handleTouchend(event);
            }
        };
        this.isNextArrowDisabled = () => {
            return this.slide.isNextArrowDisabled();
        };
        this.isPrevArrowDisabled = () => {
            return this.slide.isPrevArrowDisabled();
        };
        this.init();
    }
    get cellLength() {
        return this.cells.cellLength;
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get lastCellIndex() {
        return this.images.length ? (this.images.length - 1) : (this.cells.cellLength - 1);
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get cellLimit() {
        if (this.isLightDOM) {
            let cellLimit = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLimit < this.numberOfVisibleCells) {
                cellLimit = this.numberOfVisibleCells;
            }
            return cellLimit;
        }
        else {
            return this.properties.images.length;
        }
    }
    get isLightDOM() {
        return this.properties.lightDOM || this.properties.loop;
    }
    get images() {
        return this.properties.images;
    }
    get margin() {
        return this.properties.margin;
    }
    get minSwipeDistance() {
        return this.properties.minSwipeDistance;
    }
    get transitionDuration() {
        return this.properties.transitionDuration;
    }
    get transitionTimingFunction() {
        return this.properties.transitionTimingFunction;
    }
    get fullCellWidth() {
        return this.properties.cellWidth + this.margin;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get lapCounter() {
        return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode);
    }
    get slideCounter() {
        return this.slide.counter;
    }
    updateProperties(properties) {
        this.properties = properties;
    }
    init() {
        this.cellsElement = this.properties.cellsElement;
        this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth;
    }
    destroy() {
        clearInterval(this.autoplayId);
    }
    lineUpCells() {
        this.cells.lineUp();
    }
    handleTransitionend() {
        this.slide.handleTransitionend();
    }
    getImage(index) {
        return this.cells.getImage(index);
    }
    next(length = 1) {
        if (!this.isNextArrowDisabled()) {
            this.slide.next(length);
        }
    }
    prev(length = 1) {
        this.slide.prev(length);
    }
    autoplay() {
        this.autoplayId = setInterval(() => {
            this.next();
        }, this.properties.autoplayInterval);
    }
    stopAutoplay() {
        if (this.autoplayId) {
            clearInterval(this.autoplayId);
        }
    }
}


/***/ }),

/***/ 98130:
/*!**************************************************!*\
  !*** ./projects/image-carousel/src/lib/cells.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUtils": () => (/* binding */ ImageUtils),
/* harmony export */   "Cells": () => (/* binding */ Cells)
/* harmony export */ });
class ImageUtils {
    constructor(element) {
        this.cellStack = [];
        this.element = element;
    }
    getImages() {
        return this.cellStack.filter(this.filter);
    }
    filter(cell) {
        return cell.img !== undefined;
    }
}
class Cells {
    constructor(carouselProperties, utils) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.counter = 0;
        this.imageUtils = new ImageUtils(this.element);
        this.init(carouselProperties);
    }
    get images() {
        return this.carouselProperties.images;
    }
    get cellLength() {
        return this.cells ? this.cells.length : 0;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    lineUp() {
        const cells = this.element ? this.element.children : [];
        this.imageUtils.cellStack = [];
        for (var i = 0; i < cells.length; i++) {
            let cell = cells[i];
            let positionX = this.getCellPositionInContainer(i);
            cell.style.transform = 'translateX(' + positionX + 'px)';
            cell.style.width = this.carouselProperties.cellWidth + 'px';
            if (this.getImage(i)) {
                this.imageUtils.cellStack.push({
                    index: i,
                    positionX,
                    img: this.getImage(i)['image']
                });
            }
        }
        ;
    }
    ifSequenceOfCellsIsChanged() {
        const cells = this.element.children;
        return cells[0]['style'].transform !== 'translateX(0px)';
    }
    getCellPositionInContainer(cellIndexInDOMTree) {
        let positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
        return positionIndex * this.fullCellWidth;
    }
    getCellIndexInContainer(cellIndexInDOMTree) {
        let positionIndex;
        if (!this.isLightDOM) {
            return cellIndexInDOMTree;
        }
        let cellLength = this.cellLengthInLightDOMMode;
        let counter = this.counter - this.overflowCellsLimit;
        if (counter > cellLength) {
            counter = counter % cellLength;
        }
        if (counter < 0) {
            return cellIndexInDOMTree;
        }
        else {
            positionIndex = cellIndexInDOMTree - counter;
            if (positionIndex < 0) {
                positionIndex = cellLength + positionIndex;
            }
        }
        return positionIndex;
    }
    getImage(cellIndex) {
        if (!this.images) {
            return;
        }
        let imageIndex = this.getImageIndex(cellIndex);
        let file = this.images[imageIndex];
        if (file && !file.type) {
            file.type = 'image';
        }
        return {
            image: this.images[imageIndex],
            imageIndex
        };
    }
    getImageIndex(cellIndexInDOMTree) {
        const positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
        let imageIndex;
        if (this.counter > this.overflowCellsLimit) {
            let cellLimitOverflow = this.counter - this.overflowCellsLimit;
            imageIndex = positionIndex + cellLimitOverflow;
            if (this.images && this.carouselProperties.loop) {
                imageIndex = imageIndex % this.images.length;
            }
        }
        else {
            imageIndex = cellIndexInDOMTree;
        }
        return imageIndex;
    }
    setCounter(value) {
        this.counter = value;
    }
    init(carouselProperties) {
        this.element = this.carouselProperties.cellsElement;
        this.cells = this.element.children;
        this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth;
    }
}


/***/ }),

/***/ 87426:
/*!******************************************************!*\
  !*** ./projects/image-carousel/src/lib/container.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
class Container {
    constructor(carouselProperties, utils, cells) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.cells = cells;
        /* The index of the new position relative to
         * the active index, for example -1 or +1
         */
        this.newPositionIndex = 0;
        this.isPositionCorrection = false;
        this.initialPositionX = 0;
        this.initialElementPositionX = 0;
        this.isLocked = true;
        this.pullLimit = 100;
        this.startTime = 0;
        this.startX = 0;
        this.moveX = 0;
        this.isSwipeInProgress = false;
        this.init();
    }
    get visibleWidth() {
        return this.utils.visibleWidth;
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get images() {
        return this.carouselProperties.images;
    }
    get element() {
        return this.carouselProperties.cellsElement;
    }
    get freeScroll() {
        return this.carouselProperties.freeScroll;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get transitionDuration() {
        return this.carouselProperties.transitionDuration;
    }
    get transitionTimingFunction() {
        return this.carouselProperties.transitionTimingFunction;
    }
    get cellLength() {
        if (this.images) {
            return this.images.length;
        }
        else {
            return this.cells.cellLength;
        }
    }
    get cellLengthInLightDOMMode() {
        if (this.images) {
            let cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;
            if (cellLength > this.images.length) {
                cellLength = this.images.length;
            }
            return cellLength;
        }
        else {
            return this.cellLength;
        }
    }
    get tooFewCells() {
        return this.numberOfVisibleCells > this.cellLength;
    }
    get disabled() {
        return this.tooFewCells;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    init() {
        this.setWidth();
    }
    handleTouchstart() {
        this.startX = this.utils.getStartX(event);
        this.startTime = new Date().getTime();
        this.initialElementPositionX = this.getInitialElementPositionX();
    }
    handleHorizontalSwipe() {
        if (this.disabled) {
            return;
        }
        if (!this.isSwipeInProgress) {
            this.startX = this.utils.getStartX(event);
            this.startTime = new Date().getTime();
            this.initialElementPositionX = this.getInitialElementPositionX();
        }
        this.isSwipeInProgress = true;
        this.moveX = this.utils.getMoveX(event);
        this.move();
    }
    handleTouchend(simpleProcessing = false) {
        if (this.disabled) {
            return;
        }
        /* If touchend was passed to the Slide class */
        if (simpleProcessing) {
            this.isSwipeInProgress = false;
            return;
        }
        this.isSwipeInProgress = false;
        this.finishMoving();
        this.clearInitialValues();
    }
    move() {
        let positionX = this.getMovePositionX();
        const isPulled = this.detectPulled();
        const direction = this.getDirection();
        if (isPulled) {
            if (isPulled.edge === "left" && direction === "right" ||
                isPulled.edge === "right" && direction === "left") {
                positionX = this.slowdownOnPull(positionX);
            }
        }
        this.transformPositionX(positionX, 0);
        if (this.freeScroll) {
            this.initialPositionX = positionX;
        }
        if (isPulled) {
            if (isPulled.edge === 'left' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = 0;
            }
            if (isPulled.edge === 'right' && isPulled.overflowX > this.pullLimit) {
                this.initialPositionX = positionX;
            }
        }
    }
    getMovePositionX() {
        const distance = this.getDistance();
        return this.initialElementPositionX - distance;
    }
    getDistance() {
        return this.startX - this.moveX;
    }
    /* If the container is pulled out of the left or right border */
    detectPulled() {
        const currentPositionX = this.getCurrentPositionX();
        if (currentPositionX > 0) {
            return {
                edge: 'left',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX)
            };
        }
        if (currentPositionX < this.getEndPosition()) {
            return {
                edge: 'right',
                positionX: currentPositionX,
                overflowX: Math.abs(currentPositionX - this.getEndPosition())
            };
        }
        return undefined;
    }
    slowdownOnPull(_positionX) {
        let distance = Math.abs(this.getDistance());
        const endPosition = this.getEndPosition();
        const isPulled = this.detectPulled();
        if (!isPulled) {
            return 0;
        }
        const decelerationRatio = 3 + isPulled.overflowX / 50;
        let positionX = 0;
        if (isPulled.edge === 'left') {
            if (this.initialElementPositionX < 0) {
                distance = distance - Math.abs(this.initialElementPositionX);
            }
            const rubberPositionX = distance / decelerationRatio;
            positionX = rubberPositionX;
            if (this.initialElementPositionX > 0) {
                positionX = this.initialElementPositionX + rubberPositionX;
            }
            if (positionX > this.pullLimit) {
                positionX = this.pullLimit;
            }
        }
        if (isPulled.edge === 'right') {
            const rubberPositionX = endPosition + (((this.initialElementPositionX - distance) - endPosition) / decelerationRatio);
            const containerWidth = this.getWidth();
            positionX = rubberPositionX;
            if (this.initialElementPositionX < -(containerWidth - this.visibleWidth)) {
                positionX = ((containerWidth - this.visibleWidth) + this.initialElementPositionX) + rubberPositionX;
            }
            if (positionX < endPosition - this.pullLimit) {
                positionX = endPosition - this.pullLimit;
            }
        }
        return positionX;
    }
    finishMoving() {
        const positionX = this.getMovePositionX();
        let newPositionX = 0;
        if (this.freeScroll) {
            newPositionX = this.getInertia();
        }
        /* Align container while pulling */
        newPositionX = this.getAlignedPositionOnPull(newPositionX);
        this.transformPositionX(newPositionX);
        this.setInitialPosition(positionX);
    }
    /* Returns the new position of the container with inertia */
    getInertia() {
        const distance = this.getDistance();
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.startTime;
        let inertia = (distance / tapLength) * 100;
        return this.initialPositionX - inertia;
    }
    getAlignedPositionOnPull(newPositionX) {
        const direction = this.getDirection();
        if (direction === 'left') {
            let endPosition = this.getEndPosition();
            if (newPositionX < endPosition) {
                return endPosition;
            }
        }
        if (direction === 'right') {
            if (newPositionX > 0) {
                return 0;
            }
        }
        return newPositionX;
    }
    getCurrentPositionX() {
        const parentPosition = this.element.parentElement.getBoundingClientRect();
        const position = this.element.getBoundingClientRect();
        return position.left - parentPosition.left;
    }
    getEndPosition() {
        if (this.isLightDOM) {
            let imagesInContainer = this.cells.imageUtils.getImages();
            return -(imagesInContainer.length * this.fullCellWidth - this.visibleWidth - this.margin);
        }
        else {
            const width = this.getWidth();
            const visibleWidth = this.element.parentElement.clientWidth;
            return visibleWidth - width;
        }
    }
    transformPositionX(value, duration = this.transitionDuration) {
        if (value === undefined) {
            return;
        }
        this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
        this.element.style.transform = 'translateX(' + value + 'px)';
    }
    getWidth() {
        let width = this.cellLengthInLightDOMMode * this.fullCellWidth;
        let totalImageWidth = this.cellLength * this.fullCellWidth;
        if (totalImageWidth < width) {
            width = totalImageWidth;
        }
        return this.isLightDOM ? width : totalImageWidth;
    }
    setWidth() {
        const width = this.getWidth();
        this.element.style.width = width + "px";
    }
    setInitialPosition(position) {
        this.initialPositionX = position;
    }
    getElementPosition() {
        return this.element.getBoundingClientRect();
    }
    getInitialElementPositionX() {
        const carouselElementPosition = this.utils.getCarouselElementPosition()['left'];
        return this.getElementPosition()['left'] - carouselElementPosition;
    }
    clearInitialValues() {
        this.startX = this.moveX = 0;
    }
    getDirection() {
        const direction = Math.sign(this.startX - this.moveX);
        if (direction === -1) {
            return 'right';
        }
        if (direction === 1) {
            return 'left';
        }
        return undefined;
    }
}


/***/ }),

/***/ 68599:
/*!*******************************************************!*\
  !*** ./projects/image-carousel/src/lib/interfaces.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 53982:
/*!*****************************************************************************!*\
  !*** ./projects/image-carousel/src/lib/sanitize-html/sanitize-html.pipe.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SanitizeHtmlPipe": () => (/* binding */ SanitizeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 39075);


class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(atob(value));
        // return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + value)
    }
}
SanitizeHtmlPipe.ɵfac = function SanitizeHtmlPipe_Factory(t) { return new (t || SanitizeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SanitizeHtmlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sanitizeHtml", type: SanitizeHtmlPipe, pure: true });


/***/ }),

/***/ 77473:
/*!**************************************************!*\
  !*** ./projects/image-carousel/src/lib/slide.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slide": () => (/* binding */ Slide)
/* harmony export */ });
class Slide {
    constructor(carouselProperties, utils, cells, container) {
        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.cells = cells;
        this.container = container;
        this.slideLength = 0;
        this.isSlideInProgress = false;
        this.counter = 0;
        this._counter = 0;
        this.distance = 0;
        this.distanceAbs = 0;
        this.isNotClickOnArrow = false;
        this.initialPositionX = 0;
        this.currentPositionX = 0;
        /* The slide length has been limited by the limitSlideLength() method */
        this.isSlideLengthLimited = false;
        this.init();
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get minSwipeDistance() {
        return this.carouselProperties.minSwipeDistance;
    }
    get numberOfVisibleCells() {
        return this.utils.numberOfVisibleCells;
    }
    get visibleCellsOverflowContainer() {
        return this.utils.visibleCellsOverflowContainer;
    }
    /* The position to which the container returns after each slide
     * in the light DUM tree mode.
     */
    get fixedContainerPosition() {
        return -(this.overflowCellsLimit * this.fullCellWidth);
    }
    get overflowCellsLimit() {
        return this.utils.overflowCellsLimit;
    }
    get images() {
        return this.carouselProperties.images;
    }
    /* Number of cell elements in the DUM tree */
    get cellLength() {
        if (this.isLightDOM) {
            return this.cells.cellLengthInLightDOMMode;
        }
        else {
            if (this.images) {
                return this.images.length;
            }
            else {
                return this.cells.cellLength;
            }
        }
    }
    get isLightDOM() {
        return this.carouselProperties.lightDOM || this.carouselProperties.loop;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
        this.setVisibleWidth();
    }
    init() {
        this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
    }
    handleTouchstart() {
        /* Touchstart event is not called for arrow */
        this.isNotClickOnArrow = true;
        this.isSlideLengthLimited = false;
        if (!this.isSlideInProgress) {
            this.initialPositionX = this.container.getCurrentPositionX();
        }
    }
    handleTouchend() {
        if (!this.isNotClickOnArrow) {
            return;
        }
        this.currentPositionX = this.container.getCurrentPositionX();
        this.distanceAbs = Math.abs(this.initialPositionX - this.currentPositionX);
        this.distance = this.initialPositionX - this.currentPositionX;
        this.direction = this.getDirection();
        this.isNotClickOnArrow = false;
        this.handleSlide();
    }
    handleTransitionend() {
        this.setCounter();
        this.isSlideInProgress = false;
        if (this.isLightDOM) {
            this.alignContainerFast();
        }
    }
    handleSlide(customSlideLength = undefined) {
        let isUsingButton = customSlideLength;
        let newPositionX;
        if (isUsingButton && this.isSlideInProgress || !this.direction) {
            return;
        }
        /* Custom slide length is used in arrows */
        if (customSlideLength) {
            this.slideLength = this.limitSlideLength(customSlideLength);
            if (!this.isSlideInProgress) {
                this.initialPositionX = this.container.getCurrentPositionX();
            }
        }
        else {
            this.slideLength = this.getSlideLength(this.distanceAbs);
        }
        /* Store intermediate counter value */
        this._counter = this.getPreliminaryCounter();
        if (this.direction === 'left') {
            if (!customSlideLength) {
                this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs));
            }
            this._counter = this.getPreliminaryCounter();
            let isSlidesEnd = this.isSlidesEnd(this._counter);
            newPositionX = this.getPositionByIndex(this._counter);
            if (isSlidesEnd) {
                this._counter = this.counter;
                newPositionX = this.getPositionByIndex(this.counter);
                this.slideLength = 0;
            }
        }
        if (this.direction === 'right') {
            if (!customSlideLength) {
                this.slideLength = this.getSlideLength(this.distanceAbs);
            }
            if (this._counter < 0) {
                this._counter = this.counter;
                this.slideLength = this.counter;
            }
            newPositionX = this.getPositionByIndex(this.counter - this.slideLength);
        }
        if (this.container.getCurrentPositionX() !== newPositionX) {
            this.isSlideInProgress = true;
            this.container.transformPositionX(newPositionX);
        }
    }
    next(length = 1) {
        this.direction = 'left';
        this.handleSlide(length);
    }
    prev(length = 1) {
        this.direction = 'right';
        this.handleSlide(length);
    }
    select(index) {
        if (index > this.cellLength - 1) {
            return;
        }
        if (index > this.counter) {
            let length = index - this.counter;
            this.next(length);
        }
        if (index < this.counter) {
            let length = this.counter - index;
            this.prev(length);
        }
    }
    getPreliminaryCounter() {
        if (this.direction === 'left') {
            return this.counter + this.slideLength;
        }
        if (this.direction === 'right') {
            return this.counter - this.slideLength;
        }
        return 0;
    }
    /*
     * Limits the length of the slide during calls to the next() and prev()
     * methods if the specified position is outside the cell length
     */
    limitSlideLength(slideLength) {
        if (slideLength > 1) {
            for (var i = 0; i < slideLength; i++) {
                let newCounter = this.counter + (slideLength - i);
                if (!this.isSlidesEnd(newCounter)) {
                    slideLength = slideLength - i;
                    this.isSlideLengthLimited = i > 0;
                    break;
                }
            }
        }
        return slideLength;
    }
    /* Offset the container to show the last cell completely */
    getPositionCorrection(counter) {
        let correction = 0;
        let isLastSlide = this.isLastSlide(counter);
        if (this.carouselProperties.loop || this.direction === "right") {
            return 0;
        }
        if (this.isSlideLengthLimited || isLastSlide) {
            let cellsWidth = this.cells.cellLengthInLightDOMMode * this.fullCellWidth;
            if (this.visibleWidth < cellsWidth) {
                correction = -(this.numberOfVisibleCells * this.fullCellWidth - this.visibleWidth - this.margin);
            }
            if (correction >= -this.margin) {
                correction = 0;
            }
        }
        return correction;
    }
    getSlideLength(distanceAbs) {
        let isLastSlide = this.isLastSlide(this.counter);
        /* If the last cell does not fit entirely, then the
         * length of the swipe to the left, from the extreme
         * right position, may be shorter than usual.
         */
        if (isLastSlide && this.direction === "right") {
            distanceAbs = distanceAbs + this.visibleWidth % this.fullCellWidth;
        }
        let length = Math.floor(distanceAbs / this.fullCellWidth);
        if (distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
            length++;
        }
        return length;
    }
    getDistanceAbs() {
        return Math.abs(this.initialPositionX - this.currentPositionX);
    }
    getDirection() {
        const direction = Math.sign(this.initialPositionX - this.currentPositionX);
        if (direction === -1) {
            return 'right';
        }
        if (direction === 1) {
            return 'left';
        }
        return undefined;
    }
    isSlidesEnd(counter) {
        let margin = this.visibleCellsOverflowContainer ? 1 : 0;
        let imageLength = this.images ? this.images.length : this.cells.cellLength;
        if (this.carouselProperties.loop) {
            return false;
        }
        else {
            return (imageLength - counter + margin) < this.numberOfVisibleCells;
        }
    }
    isLastSlide(counter) {
        return this.isSlidesEnd(counter + 1);
    }
    setCounter() {
        if (this.direction === 'left') {
            this.counter = this.counter + this.slideLength;
        }
        if (this.direction === 'right') {
            this.counter = this.counter - this.slideLength;
        }
    }
    getPositionByIndex(_counter) {
        let correction = this.getPositionCorrection(this.counter + this.slideLength);
        let position;
        if (correction !== 0) {
            correction = correction + this.fullCellWidth;
        }
        if (this.direction === 'right') {
            correction = 0;
        }
        if (this.isLightDOM && this.isLightDOMMode(_counter) ||
            this.isLightDOM && this.ifLeftDOMModeAtEnd(_counter)) {
            let initialPosition = this.getPositionWithoutCorrection(this.initialPositionX);
            let counterDifference = _counter - this.counter;
            position = initialPosition - ((counterDifference * this.fullCellWidth) - correction);
        }
        else {
            position = -((_counter * this.fullCellWidth) - correction);
        }
        position = this.provideSafePosition(position);
        return position;
    }
    provideSafePosition(position) {
        const endPosition = this.container.getEndPosition();
        if (this.direction === 'left') {
            if (position > 0) {
                position = 0;
            }
        }
        if (this.direction === 'right') {
            if (position < endPosition) {
                position = endPosition;
            }
        }
        return position;
    }
    getPositionWithoutCorrection(value) {
        let remainder = Math.round(value) % this.fullCellWidth;
        if (remainder !== 0) {
            return value - (this.fullCellWidth + remainder);
        }
        else {
            return value;
        }
    }
    isNextArrowDisabled() {
        return this.isLastSlide(this.counter) ||
            (!this.visibleCellsOverflowContainer && this.cellLength <= this.numberOfVisibleCells) ||
            (this.visibleCellsOverflowContainer && this.cellLength < this.numberOfVisibleCells);
    }
    isPrevArrowDisabled() {
        return this.counter === 0;
    }
    alignContainerFast() {
        if (this.isLightDOMMode(this.counter)) {
            let positionX = this.fixedContainerPosition;
            this.container.transformPositionX(positionX, 0);
            this.cells.setCounter(this.counter);
            this.cells.lineUp();
        }
        else if (this.ifLeftDOMModeToBeginning(this.counter)) {
            /* If we have already exited the light DOM mode but
             * the cells are still out of place
             */
            if (this.cells.ifSequenceOfCellsIsChanged()) {
                let positionX = -(this.counter * this.fullCellWidth);
                this.container.transformPositionX(positionX, 0);
                this.cells.setCounter(this.counter);
                this.cells.lineUp();
            }
        }
        else if (this.ifLeftDOMModeAtEnd(this.counter)) {
            let containerPositionX = this.container.getCurrentPositionX();
            let containerWidth = this.container.getWidth();
            this.visibleWidth;
            if (this.isLastSlide(this.counter) &&
                containerWidth + containerPositionX >= this.visibleWidth) {
                return;
            }
            let correction = this.getPositionCorrection(this.counter);
            if (correction !== 0) {
                correction = correction + this.fullCellWidth;
            }
            if (this.direction === 'right') {
                correction = 0;
            }
            let positionX = this.fixedContainerPosition + correction;
            this.container.transformPositionX(positionX, 0);
            this.cells.setCounter(this.counter);
            this.cells.lineUp();
        }
    }
    isLightDOMMode(counter) {
        let flag;
        let remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;
        if (!this.isLightDOM) {
            return false;
        }
        if (counter > this.overflowCellsLimit && this.direction === "left" &&
            counter <= remainderOfCells) {
            flag = true;
        }
        if (counter >= this.overflowCellsLimit && this.direction === "right" &&
            counter < remainderOfCells) {
            flag = true;
        }
        if (this.counter > this.overflowCellsLimit && this.direction === "left" &&
            this.counter <= remainderOfCells) {
            flag = true;
        }
        if (this.counter >= this.overflowCellsLimit && this.direction === "right" &&
            this.counter < remainderOfCells) {
            flag = true;
        }
        return flag;
    }
    ifLeftDOMModeAtEnd(counter) {
        let flag;
        let remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;
        if (counter >= remainderOfCells) {
            flag = true;
        }
        if (this.counter >= remainderOfCells) {
            flag = true;
        }
        return flag;
    }
    ifLeftDOMModeToBeginning(counter) {
        let flag;
        if (counter <= this.overflowCellsLimit) {
            flag = true;
        }
        if (this.counter <= this.overflowCellsLimit) {
            flag = true;
        }
        return flag;
    }
    setVisibleWidth() {
        this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
    }
}


/***/ }),

/***/ 69459:
/*!****************************************************!*\
  !*** ./projects/image-carousel/src/lib/touches.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Touches": () => (/* binding */ Touches)
/* harmony export */ });
class Touches {
    constructor(properties) {
        this.eventType = undefined;
        this.handlers = {};
        this.startX = 0;
        this.startY = 0;
        this.lastTap = 0;
        this.doubleTapMinTimeout = 300;
        this.tapMinTimeout = 200;
        this.touchstartTime = 0;
        this.i = 0;
        this.isMousedown = false;
        this._touchListeners = {
            "touchstart": "handleTouchstart",
            "touchmove": "handleTouchmove",
            "touchend": "handleTouchend"
        };
        this._mouseListeners = {
            "mousedown": "handleMousedown",
            "mousemove": "handleMousemove",
            "mouseup": "handleMouseup",
            "wheel": "handleWheel"
        };
        this._otherListeners = {
            "resize": "handleResize"
        };
        /*
         * Listeners
         */
        /* Touchstart */
        this.handleTouchstart = (event) => {
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getTouchstartPosition(event);
            }
            this.runHandler("touchstart", event);
        };
        /* Touchmove */
        this.handleTouchmove = (event) => {
            const touches = event.touches;
            // Pan
            if (this.detectPan(touches)) {
                this.runHandler("pan", event);
            }
            // Pinch
            if (this.detectPinch(event)) {
                this.runHandler("pinch", event);
            }
            // Linear swipe
            switch (this.detectLinearSwipe(event)) {
                case "horizontal-swipe":
                    event.swipeType = "horizontal-swipe";
                    this.runHandler("horizontal-swipe", event);
                    break;
                case "vertical-swipe":
                    event.swipeType = "vertical-swipe";
                    this.runHandler("vertical-swipe", event);
                    break;
            }
            // Linear swipe
            if (this.detectLinearSwipe(event) ||
                this.eventType === 'horizontal-swipe' ||
                this.eventType === 'vertical-swipe') {
                this.handleLinearSwipe(event);
            }
        };
        /* Touchend */
        this.handleTouchend = (event) => {
            const touches = event.touches;
            // Double Tap
            if (this.detectDoubleTap()) {
                this.runHandler("double-tap", event);
            }
            // Tap
            this.detectTap();
            this.runHandler("touchend", event);
            this.eventType = 'touchend';
            if (touches && touches.length === 0) {
                this.eventType = undefined;
                this.i = 0;
            }
        };
        /* Mousedown */
        this.handleMousedown = (event) => {
            this.isMousedown = true;
            this.elementPosition = this.getElementPosition();
            this.touchstartTime = new Date().getTime();
            if (this.eventType === undefined) {
                this.getMousedownPosition(event);
            }
            this.runHandler("mousedown", event);
        };
        /* Mousemove */
        this.handleMousemove = (event) => {
            //event.preventDefault();
            if (!this.isMousedown) {
                return;
            }
            // Pan
            this.runHandler("pan", event);
            // Linear swipe
            switch (this.detectLinearSwipe(event)) {
                case "horizontal-swipe":
                    event.swipeType = "horizontal-swipe";
                    this.runHandler("horizontal-swipe", event);
                    break;
                case "vertical-swipe":
                    event.swipeType = "vertical-swipe";
                    this.runHandler("vertical-swipe", event);
                    break;
            }
            // Linear swipe
            if (this.detectLinearSwipe(event) ||
                this.eventType === 'horizontal-swipe' ||
                this.eventType === 'vertical-swipe') {
                this.handleLinearSwipe(event);
            }
        };
        /* Mouseup */
        this.handleMouseup = (event) => {
            // Tap
            this.detectTap();
            this.isMousedown = false;
            this.runHandler("mouseup", event);
            this.eventType = undefined;
            this.i = 0;
        };
        /* Wheel */
        this.handleWheel = (event) => {
            this.runHandler("wheel", event);
        };
        /* Resize */
        this.handleResize = (event) => {
            this.runHandler("resize", event);
        };
        this.properties = properties;
        this.element = this.properties.element;
        this.elementPosition = this.getElementPosition();
        this.toggleEventListeners('addEventListener');
    }
    get touchListeners() {
        return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
    }
    get mouseListeners() {
        return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
    }
    get otherListeners() {
        return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
    }
    destroy() {
        this.toggleEventListeners('removeEventListener');
    }
    toggleEventListeners(action) {
        let listeners;
        if (this.properties.listeners === 'mouse and touch') {
            listeners = Object.assign(this.touchListeners, this.mouseListeners);
        }
        else {
            listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
        }
        if (this.properties.resize) {
            listeners = Object.assign(listeners, this.otherListeners);
        }
        for (var listener in listeners) {
            const handler = listeners[listener];
            // Window
            if (listener === "resize") {
                if (action === 'addEventListener') {
                    window.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    window.removeEventListener(listener, this[handler], false);
                }
                // Document
            }
            else if (listener === 'mouseup' || listener === "mousemove") {
                if (action === 'addEventListener') {
                    document.addEventListener(listener, this[handler], { passive: false });
                }
                if (action === 'removeEventListener') {
                    document.removeEventListener(listener, this[handler], false);
                }
                // Element
            }
            else {
                if (action === 'addEventListener') {
                    this.element.addEventListener(listener, this[handler], false);
                }
                if (action === 'removeEventListener') {
                    this.element.removeEventListener(listener, this[handler], false);
                }
            }
        }
    }
    addEventListeners(listener) {
        const handler = this._mouseListeners[listener];
        window.addEventListener(listener, this[handler], false);
    }
    removeEventListeners(listener) {
        const handler = this._mouseListeners[listener];
        window.removeEventListener(listener, this[handler], false);
    }
    handleLinearSwipe(event) {
        //event.preventDefault();
        this.i++;
        if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
        }
        if (this.eventType === 'horizontal-swipe') {
            this.runHandler('horizontal-swipe', event);
        }
        if (this.eventType === 'vertical-swipe') {
            this.runHandler('vertical-swipe', event);
        }
    }
    runHandler(eventName, response) {
        if (this.handlers[eventName]) {
            this.handlers[eventName](response);
        }
    }
    /*
     * Detection
     */
    detectPan(touches) {
        return touches.length === 1 && !this.eventType || this.eventType === 'pan';
    }
    detectDoubleTap() {
        if (this.eventType != undefined) {
            return;
        }
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout(() => {
                clearTimeout(this.doubleTapTimeout);
            }, this.doubleTapMinTimeout);
        }
        this.lastTap = currentTime;
        return undefined;
    }
    detectTap() {
        if (this.eventType != undefined) {
            return;
        }
        const currentTime = new Date().getTime();
        const tapLength = currentTime - this.touchstartTime;
        if (tapLength > 0) {
            if (tapLength < this.tapMinTimeout) {
                this.runHandler("tap", event);
            }
            else {
                this.runHandler("longtap", event);
            }
        }
    }
    detectPinch(event) {
        const touches = event.touches;
        return (touches.length === 2 && this.eventType === undefined) || this.eventType === 'pinch';
    }
    detectLinearSwipe(event) {
        const touches = event.touches;
        if (touches) {
            if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
        else {
            if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
                return this.getLinearSwipeType(event);
            }
        }
        return undefined;
    }
    getLinearSwipeType(event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            const movementX = Math.abs(this.moveLeft(0, event) - this.startX);
            const movementY = Math.abs(this.moveTop(0, event) - this.startY);
            if ((movementY * 3) > movementX) {
                return 'vertical-swipe';
            }
            else {
                return 'horizontal-swipe';
            }
        }
        else {
            return this.eventType;
        }
    }
    getElementPosition() {
        return this.element.getBoundingClientRect();
    }
    getTouchstartPosition(event) {
        this.startX = event.touches[0].clientX - this.elementPosition.left;
        this.startY = event.touches[0].clientY - this.elementPosition.top;
    }
    getMousedownPosition(event) {
        this.startX = event.clientX - this.elementPosition.left;
        this.startY = event.clientY - this.elementPosition.top;
    }
    moveLeft(index, event) {
        const touches = event.touches;
        if (touches) {
            return touches[index].clientX - this.elementPosition.left;
        }
        else {
            return event.clientX - this.elementPosition.left;
        }
    }
    moveTop(index, event) {
        const touches = event.touches;
        if (touches) {
            return touches[index].clientY - this.elementPosition.top;
        }
        else {
            return event.clientY - this.elementPosition.top;
        }
    }
    detectTouchScreen() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        };
        if (('ontouchstart' in window)) {
            return true;
        }
        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }
    /* Public properties and methods */
    on(event, handler) {
        if (event) {
            this.handlers[event] = handler;
        }
    }
}


/***/ }),

/***/ 56304:
/*!**************************************************!*\
  !*** ./projects/image-carousel/src/lib/utils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
class Utils {
    constructor(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    get images() {
        return this.carouselProperties.images;
    }
    get margin() {
        return this.carouselProperties.margin;
    }
    get overflowCellsLimit() {
        if (this.images && this.isImagesLessCellLimit) {
            let overflowCellsLimit = Math.floor((this.images.length - this.numberOfVisibleCells) / 2);
            if (overflowCellsLimit < 0) {
                overflowCellsLimit = 0;
            }
            return overflowCellsLimit;
        }
        else {
            return this.carouselProperties.overflowCellsLimit;
        }
    }
    get isImagesLessCellLimit() {
        return this.carouselProperties.overflowCellsLimit * 2 + this.numberOfVisibleCells > this.images.length;
    }
    get numberOfVisibleCells() {
        return Math.ceil(this.visibleWidth / this.fullCellWidth);
    }
    get visibleCellsOverflowContainer() {
        return (this.numberOfVisibleCells * this.fullCellWidth - this.margin) > this.visibleWidth;
    }
    get fullCellWidth() {
        return this.carouselProperties.cellWidth + this.carouselProperties.margin;
    }
    get visibleWidth() {
        return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth;
    }
    updateProperties(carouselProperties) {
        this.carouselProperties = carouselProperties;
    }
    getStartX(event) {
        const touches = event.touches;
        const carouselElementPosition = this.getCarouselElementPosition()['left'];
        let startX;
        if (touches) {
            startX = touches[0].clientX - carouselElementPosition;
        }
        else {
            startX = event.clientX - carouselElementPosition;
        }
        return startX;
    }
    getMoveX(event) {
        const touches = event.touches;
        const carouselElementPositionX = this.getCarouselElementPosition()['left'];
        if (touches) {
            return touches[0].clientX - carouselElementPositionX;
        }
        else {
            return event.clientX - carouselElementPositionX;
        }
    }
    getCarouselElementPosition() {
        return this.carouselProperties.hostElement.getBoundingClientRect();
    }
}


/***/ }),

/***/ 59260:
/*!***************************************************!*\
  !*** ./projects/image-carousel/src/public-api.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IvyCarouselModule": () => (/* reexport safe */ _lib_carousel_module__WEBPACK_IMPORTED_MODULE_0__.IvyCarouselModule),
/* harmony export */   "CarouselComponent": () => (/* reexport safe */ _lib_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent),
/* harmony export */   "SanitizeHtmlPipe": () => (/* reexport safe */ _lib_sanitize_html_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SanitizeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _lib_carousel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/carousel.module */ 7197);
/* harmony import */ var _lib_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/carousel.component */ 59475);
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/interfaces */ 68599);
/* harmony import */ var _lib_sanitize_html_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/sanitize-html/sanitize-html.pipe */ 53982);
/*
 * Public API Surface of angular-responsive-carousel
 */






/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth/auth.guard */ 92803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    { path: 'login', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 83970)).then(m => m.AuthModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_layouts_mobile_mobile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/layouts/mobile/mobile.module */ 12890)).then(m => m.MobileModule), canActivate: [_modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth/state/actions */ 34622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        // on refresh
        const userProfile = localStorage.getItem('user');
        if (userProfile) {
            this.store.dispatch((0,_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_0__.login)({ backendResponse: JSON.parse(userProfile) }));
        }
    }
    logout() {
        this.store.dispatch((0,_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_0__.logout)());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/auth.module */ 83970);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _store_root_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/root-store.module */ 63876);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ 76715);
/* harmony import */ var _core_services_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/connection.service */ 45684);
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ 50422);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);










// import { httpInterceptorProviders } from './core/interceptors'





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__.HashLocationStrategy },
        { provide: _core_services_connection_service__WEBPACK_IMPORTED_MODULE_5__.ConnectionService },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.ErrorInterceptor, multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule.forRoot(),
            _store_root_store_module__WEBPACK_IMPORTED_MODULE_3__.RootStoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_12__.MarkdownModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_2__.AuthModule, _store_root_store_module__WEBPACK_IMPORTED_MODULE_3__.RootStoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_12__.MarkdownModule] }); })();


/***/ }),

/***/ 80546:
/*!********************************************!*\
  !*** ./src/app/core/interceptors/const.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paths": () => (/* binding */ paths)
/* harmony export */ });
const paths = {
    auth: "auth",
    cache: "cache",
    fake: "fake",
    error: "error",
    profiler: "profiler",
    notify: "notify",
    header: "header",
    convert: "convert",
    loader: "loader",
    https: "https"
};


/***/ }),

/***/ 50422:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 74945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ 80546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);




class ErrorInterceptor {
    constructor() { }
    intercept(req, next) {
        if (!req.url.includes(_const__WEBPACK_IMPORTED_MODULE_0__.paths.error)) {
            return next.handle(req);
        }
        console.warn("ErrorInterceptor");
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            console.log(`error found`);
            console.log(error.status);
            if (error.status !== 401) {
                // 401 handled in auth.interceptor
            }
            switch (error.status) {
                case 400:
                    console.log(`bad request`);
                    break;
                case 401:
                    console.log(`unauthorized`);
                    break;
                case 403:
                    console.log(`forbidden`);
                    break;
                case 404:
                    console.log(`not found`);
                    break;
                default: {
                    console.log(`default error`);
                    break;
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 97845:
/*!***************************************!*\
  !*** ./src/app/core/model/feature.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ Features)
/* harmony export */ });
var Features;
(function (Features) {
    Features["Auth"] = "auth";
    Features["Positionreport"] = "positionreport";
    Features["Kat"] = "kat";
    Features["LastPosition"] = "lastPosition";
    Features["Ship"] = "ship";
    Features["ShipSelection"] = "ship-selection";
    Features["Spec"] = "spec";
    Features["Zaehlerstand"] = "zaehlerstand";
})(Features || (Features = {}));


/***/ }),

/***/ 84382:
/*!**********************************************!*\
  !*** ./src/app/core/services/app.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10826);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 20945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var src_app_modules_auth_state_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/auth/state/selectors */ 11080);
/* harmony import */ var src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/positionreport-store */ 36205);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.service */ 45684);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location.service */ 33094);










class AppService {
    constructor(httpClient, store, _connectionService, locationService) {
        this.httpClient = httpClient;
        this.store = store;
        this._connectionService = _connectionService;
        this.locationService = locationService;
        // position
        this._positionSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription;
        this.positionLogInterval = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.positionLogInterval * (60 * 1000));
        this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_modules_auth_state_selectors__WEBPACK_IMPORTED_MODULE_0__.selectToken)).subscribe(token => {
            this._connectionService.setToken(token);
        });
        this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_modules_auth_state_selectors__WEBPACK_IMPORTED_MODULE_0__.selectBackendUrl)).subscribe(backendUrl => {
            this._connectionService.setBackendUrl(backendUrl);
        });
    }
    reducer(action, data) {
        const backendUrl = this._connectionService.getBackendUrl();
        const token = this._connectionService.getToken();
        console.info(`reducer | action: '${action}', data: ${data}`);
        const baseURL = `${backendUrl}/${action}`;
        let param = ``;
        switch (action) {
            // streife
            case 'insertStreife':
                param = `id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&kennung=${data.kennung}`;
                break;
            case 'updateStreife':
                param = `id=${data.id}&id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&ende=${data.ende}&kennung=${data.kennung}`;
                break;
            case 'deleteBesatzung':
            case 'deleteBetankung':
            case 'deleteReparaturFoto':
            case 'deleteStreife':
                param = `id=${data}`;
                break;
            // besatzung
            case 'insertBesatzung':
                param = `id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`;
                break;
            case 'updateBesatzung':
                param = `id=${data.id}&id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`;
                break;
            // betankung
            case 'insertBetankung':
                param = `id_schiff=${data.id_ship}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`;
                break;
            case 'updateBetankung':
                param = `id=${data.id}id_schiff=${data.id_ship}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`;
                break;
            case 'updateZaehlerstand':
                param = `id=${data.id}&id_schiff=${data.id_ship}&value=${data.value}&date=${data.date}`;
                break;
            // peilung
            case 'insertPeilung':
                param = `id_schiff=${data.id_schiff}&id_tank=${data.id_tank}&vol=${data.vol}&date=${data.date}`;
                break;
            // checkliste
            case 'insertCheckliste':
                console.log(data);
                param = `id_schiff=${data.id_schiff}&datum=${data.datum}&gbookdaten=${data.gbookdaten}&streife=${data.streife}`;
                break;
            // pruefvermerk/reparatur
            case 'insertReparatur':
                param = `id_schiff=${data.id_ship}&id_status=12af8c55-7726-4431-abaa-2c6dd44ba5dd&date=${data.date}&kategorie=${data.kategorie}&item=${data.item}&description=${data.description}`;
                break;
            // reparaturFoto
            case 'insertReparaturFoto':
                param = `id_reparatur=${data.id_reparatur}&foto=${data.foto}`;
                break;
            // position
            case 'insertPosition':
                param = `id_schiff=${data.id_ship}&id_streife=${data.id_streife}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&beschreibung=${data.description}`;
                break;
            case 'updatePosition':
                param = `id=${data.id}&id_schiff=${data.id_ship}&id_streife=${data.id_streife}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&beschreibung=${data.description}`;
                break;
            case 'deletePosition':
                param = `id=${data}`;
                break;
            default:
                console.error('There is no action to switch.');
                break;
        }
        console.info(`backendurl: '${baseURL}', param: ${param}`);
        return this.httpClient.post(baseURL, param, { headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token
            } }); // .pipe(retry(2), take(1))
    }
    getReducer(action, data) {
        const backendUrl = this._connectionService.getBackendUrl();
        const token = this._connectionService.getToken();
        console.info(`getreducer | action: '${action}', data: `, data);
        const baseURL = `${backendUrl}/${action}`;
        let param = ``;
        switch (action) {
            case 'getDienststellen':
            case 'getPruefvermerke':
            case 'getPruefvermerksKategorien':
            case 'getKatBetriebsstoffe':
            case 'getKatFunktionen':
            case 'getKatKennungen':
            case 'getLastPositionsFromAllShips':
            case 'getSchiffe':
            case 'getStatustypen':
            case 'getZaehlerstandstypen':
            case 'getKatZwecke':
                param = `_`;
                break;
            case 'getSchiff':
                param = `?id=${data}`;
                break;
            case 'getFotosVonReparatur':
                param = `?id_reparatur=${data}`;
                break;
            case 'getLastChecklist':
            case 'getReparaturenVonSchiff':
            case 'getStreifeVonSchiff':
            case 'getTanksVonSchiff':
            case 'getZaehlerstaende':
                param = `?id_schiff=${data}`;
                break;
            // case 'getPeilungVonSchiff':
            case 'getPosition':
            case 'getReparaturen':
                param = `?id_schiff=${data}&all=true`;
                break;
            case 'getPeilungVonSchiff':
            case 'getBetankungen':
                param = `?id_schiff=${data}&all=false`;
                break;
            default:
                break;
        }
        return this.httpClient.get(baseURL + param, { headers: { 'Authorization': token } }); //.pipe(retry(2),take(1))
    }
    // allg
    get(reducer_func) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer(reducer_func, {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    insert(kat, reducer_func) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer(reducer_func, kat);
            source$.subscribe((data) => {
                observer.next(data.id);
            }), (error) => observer.error(error);
        });
    }
    update(kat, reducer_func) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer(reducer_func, kat);
            source$.subscribe((status) => {
                observer.next(status);
            }),
                (error) => observer.error(error);
        });
    }
    delete(id, reducer_func) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer(reducer_func, id);
            source$.subscribe((status) => {
                observer.next(status);
            }), (error) => observer.error(error);
        });
    }
    // streife
    insertStreife(patrol) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('insertStreife', patrol);
            source$.subscribe((data) => {
                observer.next(data.id);
            });
            // , (error: any) => observer.error(error)
        });
    }
    updateStreife(patrol) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('updateStreife', patrol);
            source$.subscribe((status) => {
                // observer.next(data)
            });
            // , (error: any) => observer.error(error)
        });
    }
    deleteStreife(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('deleteStreife', id);
            source$.subscribe((status) => {
                observer.next(status);
            })
                , (error) => observer.error(error);
        });
    }
    // besatzung
    insertBesatzung(besatzung) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('insertBesatzung', besatzung);
            source$.subscribe((data) => {
                observer.next(data.id);
            });
            // , (error: any) => observer.error(error)
        });
    }
    updateBesatzung(changes) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('updateBesatzung', changes);
            source$.subscribe((status) => {
                // observer.next(data)
            });
            // , (error: any) => observer.error(error)
        });
    }
    deleteBesatzung(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('deleteBesatzung', id);
            source$.subscribe((status) => {
                observer.next(status);
            })
                , (error) => observer.error(error);
        });
    }
    // betankung
    insertBetankung(betankung) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('insertBetankung', betankung);
            source$.subscribe((data) => {
                observer.next(data.id);
            });
            // , (error: any) => observer.error(error)
        });
    }
    updateBetankung(changes) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('updateBetankung', changes);
            source$.subscribe((status) => {
            });
        });
    }
    deleteBetankung(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('deleteBetankung', id);
            source$.subscribe((status) => {
                observer.next(status);
            })
                , (error) => observer.error(error);
        });
    }
    // zaehlerstaende
    updateZaehlerstand(id, changes) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('updateZaehlerstand', changes);
            source$.subscribe((status) => {
                // observer.next(data)
            });
            // , (error: any) => observer.error(error)
        });
    }
    // pruefvermerk
    insertReparatur(reparatur) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('insertReparatur', reparatur);
            source$.subscribe((data) => {
                observer.next(data.id);
            });
            // , (error: any) => observer.error(error)
        });
    }
    // position
    insertPosition(position) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('insertPosition', position);
            source$.subscribe((data) => {
                const pos = Object.assign({}, position, { id: data.id });
                observer.next(pos);
                // observer.next(data.id)
            });
            // , (error: any) => observer.error(error)
        });
    }
    updatePosition(position) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('updatePosition', position);
            source$.subscribe((data) => {
                observer.next(data.id);
            });
            // , (error: any) => observer.error(error)
        });
    }
    deletePosition(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('deletePosition', id);
            source$.subscribe((data) => {
                observer.next(data.id);
            });
            // , (error: any) => observer.error(error)
        });
    }
    // reparaturfotos
    downloadReparaturFoto(id) {
        // return EMPTY
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getFotosVonReparatur', id);
            source$.subscribe((data) => {
                console.log(data);
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    uploadReparaturFoto(upload) {
        // return EMPTY
        return this.update(upload, 'insertReparaturFoto');
    }
    deleteReparaturFoto(id) {
        // return EMPTY
        return this.delete(id, 'deleteReparaturFoto');
    }
    // get
    getSchiffe() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            // const source$ = this.getReducer('getSchiffe', {})
            this.getReducer('getSchiffe', {}).subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getSchiff(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getSchiff', id);
            source$.subscribe((data) => {
                observer.next(data[0]);
            }, (error) => observer.error(error));
        });
    }
    getStreifeVonSchiff(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getStreifeVonSchiff', id);
            source$.subscribe((data) => {
                observer.next(data[0]);
            }, (error) => observer.error(error));
        });
    }
    getZaehlerstaende(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getZaehlerstaende', id);
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getReparaturen(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getReparaturenVonSchiff', id);
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getBetankungen(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getBetankungen', id);
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getTanksVonSchiff(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getTanksVonSchiff', id);
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getPosition(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getPosition', id);
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getLastPositionsFromAllShips() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getLastPositionsFromAllShips', {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    // kat
    getPruefvermerke() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getPruefvermerke', {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getPruefvermerkKategorien() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getPruefvermerksKategorien', {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getZaehlerstandstypen() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getZaehlerstandstypen', {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getDienststellen() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getDienststellen', {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getBetriebsstoffe() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getKatBetriebsstoffe', {});
            source$.subscribe((data) => {
                console.log(data);
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getFunktionen() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getKatFunktionen', {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getKennungen() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getKatKennungen', {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getZwecke() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getKatZwecke', {});
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getLastChecklist(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            let checklist;
            const source$ = this.getReducer('getLastChecklist', id);
            source$.subscribe((data) => {
                checklist = Object.assign({}, data[0]);
                checklist.checklistItems = JSON.parse(data[0].gbookdaten);
                delete checklist.gbookdaten;
                if (Array.isArray(checklist.checklistItems)) {
                    checklist.status = this.getChecklistStatus(checklist.checklistItems);
                }
                else {
                    checklist.checklistItems = [];
                    checklist.status = 'vollständig';
                }
                observer.next(checklist);
            }, (error) => observer.error(error));
        });
        // return new Observable ((observer) => {
        //     from([this.items]).subscribe((data: any) => {
        //         observer.next(data)
        //     }, (error: any) => observer.error(error))
        // })
    }
    getLastChecklist2(id) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getLastChecklist', id);
            source$.subscribe((data) => {
                console.log(data);
                data.forEach((checklist) => {
                    checklist.checklistItems = JSON.parse(checklist.gbookdaten);
                    delete checklist.gbookdaten;
                    if (Array.isArray(checklist.checklistItems)) {
                        checklist.status = this.getChecklistStatus(checklist.checklistItems);
                    }
                    // else {
                    //     checklist.checklistItems = []
                    //     checklist.status = 'vollständig'
                    // }
                });
                console.log(data);
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    getChecklistStatus(checklistItems) {
        let status = 'vollständig';
        checklistItems === null || checklistItems === void 0 ? void 0 : checklistItems.forEach((checklistItem) => {
            switch (true) {
                case (checklistItem.checked == false && checklistItem.relevant == false):
                    status = 'unvollständig';
                    break;
                case (checklistItem.checked == false && checklistItem.relevant == true):
                    status = 'Tätigkeit eingeschränkt';
                    break;
                default:
                    status = 'vollständig';
            }
        });
        return status;
    }
    // updateChecklist(gbook: any) {
    //     // console.log(data)
    //     // let gbook = JSON.parse(data[0].gbookdaten)
    //     // console.log(gbook)
    //     gbook = {"id_schiff":"1","einsatzmittel":[{"id":"75764649-769b-4935-848c-25ccb213cf56","name":"Anhaltestab","anzahl":"3","seriennummern":"","sonstiges":"false"},{"id":"a6a9a323-89b8-45a5-96d8-61866c4a0cef","name":"Alkomat","anzahl":"1","seriennummern":"SN-1234","sonstiges":"false"},{"id":"bd34d03c-3728-4df3-9ba7-7ead0d575532","name":"Anker","anzahl":"2","seriennummern":"","sonstiges":""},{"id":"c6aac15c-4fea-49ce-943b-21070169f361","name":"Rettungsring","anzahl":"1","seriennummern":"","sonstiges":""}]}
    //     console.log(gbook)
    //     const checkliste: Checklist = { id_schiff: '1', datum: new Date().toISOString(), streife: '3f7bc091-9f3d-428b-bf57-429f7dba25da', gbookdaten: JSON.stringify(gbook)}
    //     this.insertCheckliste(checkliste)
    // }
    insertCheckliste(insert) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const checklist = Object.assign({}, insert, { gbookdaten: JSON.stringify(insert.checklistItems) }); //{ id_schiff: this.patrol.id_schiff, datum: new Date().toISOString(), streife: this.patrol.id!, gbookdaten: JSON.stringify(gbook)}
            console.log(checklist.gbookdaten);
            const source$ = this.reducer('insertCheckliste', checklist);
            source$.subscribe((status) => {
                // observer.next(status)
            });
            // , (error: any) => observer.error(error))
        });
    }
    // getChecklistItems(id: string = '1'): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getPeilungVonSchiff', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    //     // return new Observable ((observer) => {
    //     //     from([this.items]).subscribe((data: any) => {
    //     //         observer.next(data)
    //     //     }, (error: any) => observer.error(error))
    //     // })
    // }
    getPeilung(id = '1') {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.getReducer('getPeilungVonSchiff', id);
            source$.subscribe((data) => {
                observer.next(data);
            }, (error) => observer.error(error));
        });
    }
    insertPeilung(peilung) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable((observer) => {
            const source$ = this.reducer('insertPeilung', peilung);
            source$.subscribe((data) => {
                const peil = Object.assign({}, peilung, { id: data.id });
                observer.next(peil);
            });
            // , (error: any) => observer.error(error)
        });
    }
    updatePeilung(peil) {
        // return new Observable ((observer) => {
        //     this.peilung = this.peilung.filter(el => el.id != peil.id)
        //     this.peilung.push(peil)
        //     console.log(this.peilung)
        //     // const source$ = this.reducer('updatePosition', position)
        //     // source$.subscribe((data: any) => {
        // //     observer.next(peil)
        // //     })
        // //     , (error: any) => observer.error(error)
        // })
    }
    // status
    getStatus() {
        return this.get('getStatustypen');
    }
    checkPositionStart(patrol) {
        if (this._positionSubscription.closed) {
            this._positionSubscription = this.positionLogInterval.subscribe((data) => {
                this.locationService.getCurrentPosition().then(position => {
                    const positionReport = { id_streife: patrol.id, id_ship: patrol.id_schiff, date: new Date().toISOString(), location: { latitude: position.latitude, longitude: position.longitude }, description: `${data + 1} Autom. gesetzte Position` };
                    this.store.dispatch(src_app_store_positionreport_store__WEBPACK_IMPORTED_MODULE_1__.PositionActions.insertData({ positionReport }));
                });
            });
        }
    }
    checkPositionStop() {
        this._positionSubscription.unsubscribe();
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_connection_service__WEBPACK_IMPORTED_MODULE_3__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService)); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45684:
/*!*****************************************************!*\
  !*** ./src/app/core/services/connection.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionService": () => (/* binding */ ConnectionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ConnectionService {
    constructor() {
        this.backendUrl = '';
        this.token = '';
    }
    getBackendUrl() {
        return this.backendUrl;
    }
    setBackendUrl(backendUrl) {
        this.backendUrl = backendUrl;
    }
    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }
}
ConnectionService.ɵfac = function ConnectionService_Factory(t) { return new (t || ConnectionService)(); };
ConnectionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConnectionService, factory: ConnectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33094:
/*!***************************************************!*\
  !*** ./src/app/core/services/location.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class LocationService {
    constructor() {
        this._currentPosition = { latitude: 0, longitude: 0 };
    }
    get currentPosition() {
        return this._currentPosition;
    }
    getCurrentPosition() {
        return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => {
            resolve(position.coords);
        }, error => { reject(error); }));
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(); };
LocationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92803:
/*!********************************************!*\
  !*** ./src/app/modules/auth/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/selectors */ 11080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);






class AuthGuard {
    constructor(store, _router) {
        this.store = store;
        this._router = _router;
    }
    canActivate(route, state) {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_state_selectors__WEBPACK_IMPORTED_MODULE_0__.isLoggedIn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(loggedIn => {
            if (!loggedIn) {
                console.log('AuthGuard-canActivate: false');
                this._router.navigateByUrl('/login');
            }
            else {
                console.log(`AuthGuard-canActivate: true - ${loggedIn}`);
                // this._router.navigateByUrl('/mobile')
            }
        }));
    }
    canActivateChild(route, state) {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_state_selectors__WEBPACK_IMPORTED_MODULE_0__.isLoggedIn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(loggedIn => {
            console.log(loggedIn);
            if (!loggedIn) {
                console.log('AuthGuard-canActivateChild: false');
                this._router.navigateByUrl('/login');
            }
            else {
                console.log('AuthGuard-canActivateChild: true');
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 83970:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 42792);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 80877);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ 92803);
/* harmony import */ var _state_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/effects */ 94043);
/* harmony import */ var _state_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/reducer */ 48450);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-markdown */ 76715);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var src_app_store_kat_store_kat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/kat-store/kat.module */ 41128);
/* harmony import */ var src_app_shared_components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/splash-screen/splash-screen.component */ 17515);
/* harmony import */ var projects_icon_library_src_lib_icon_library_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/icon-library/src/lib/icon-library.module */ 16551);
/* harmony import */ var _login_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/changelog/changelog.component */ 98452);
/* harmony import */ var src_app_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/modal/modal.module */ 55811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);

























class AuthModule {
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService,
                _auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard
            ]
        };
    }
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_15__.MarkdownModule.forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild([{ path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent }]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_17__.StoreModule.forFeature(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_5__.Features.Auth, _state_reducer__WEBPACK_IMPORTED_MODULE_4__.authReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsModule.forFeature([_state_effects__WEBPACK_IMPORTED_MODULE_3__.AuthEffects]),
            src_app_store_kat_store_kat_module__WEBPACK_IMPORTED_MODULE_6__.KatModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
            projects_icon_library_src_lib_icon_library_module__WEBPACK_IMPORTED_MODULE_8__.IconLibraryModule,
            src_app_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__.ModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        src_app_shared_components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_7__.SplashScreenComponent,
        _login_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_9__.ChangelogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_15__.MarkdownModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsFeatureModule, src_app_store_kat_store_kat_module__WEBPACK_IMPORTED_MODULE_6__.KatModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
        projects_icon_library_src_lib_icon_library_module__WEBPACK_IMPORTED_MODULE_8__.IconLibraryModule,
        src_app_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__.ModalModule], exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent] }); })();


/***/ }),

/***/ 80877:
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);




class AuthService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    login(username, password) {
        return this.auth_login(username, password);
    }
    auth_login(username, password) {
        const auth = btoa(`${username}:${password}`);
        const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.loginServerUrl;
        const packageid = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.packageid;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        const jwt_token = xmlhttp.getResponseHeader('Authorization').toString();
                        const backend_token = jwt_token.split(' ')[1];
                        const json_jwt_payload = JSON.parse(this.myatob(jwt_token.split('.')[1]));
                        const allowed_apps_arr = JSON.parse(json_jwt_payload.allowed_apps);
                        // check for backend and login
                        allowed_apps_arr.forEach((el) => {
                            if (el.packageid == packageid) {
                                const backendUrl = JSON.parse(el.config_json).backendurl;
                                this.backend_login(backendUrl, backend_token).subscribe(data => {
                                    observer.next({
                                        sub: json_jwt_payload.sub,
                                        exp: json_jwt_payload.exp,
                                        email: json_jwt_payload.email,
                                        given_name: json_jwt_payload.given_name,
                                        family_name: json_jwt_payload.family_name,
                                        role: JSON.parse(data).rolle,
                                        token: jwt_token,
                                        backendUrl: backendUrl
                                    });
                                }, error => observer.error(error));
                            }
                        });
                    }
                }
            };
            xmlhttp.open('GET', `${baseUrl}`, true);
            xmlhttp.setRequestHeader('Authorization', `Basic ${auth}`);
            xmlhttp.send();
        });
    }
    backend_login(backendUrl, token) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        observer.next(xmlhttp.responseText);
                    }
                    else {
                        observer.error(xmlhttp);
                    }
                }
            };
            xmlhttp.open('GET', `${backendUrl}/loginjwt`, true);
            xmlhttp.setRequestHeader('Authorization', `Bearer ${token}`);
            xmlhttp.send();
        });
    }
    myatob(payload) {
        try {
            return atob(payload);
        }
        catch (e) {
            return atob(this.base64UrlDecode(payload));
        }
    }
    base64UrlDecode(input) {
        // Replace non-url compatible chars with base64 standard chars
        input = input
            .replace(/-/g, '+')
            .replace(/_/g, '/');
        // Pad out with standard base64 required padding characters
        var pad = input.length % 4;
        if (pad) {
            if (pad === 1) {
                throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
            }
            input += new Array(5 - pad).join('=');
        }
        return input;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98452:
/*!*********************************************************************!*\
  !*** ./src/app/modules/auth/login/changelog/changelog.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogComponent": () => (/* binding */ ChangelogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ 60312);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 76715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);






const _c0 = ["modalComponent"];
function ChangelogComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function ChangelogComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChangelogComponent_ng_template_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ChangelogComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        this.modalService.getData().then(() => { });
    }
    cancel() {
        var _a;
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.close();
    }
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) { return new (t || ChangelogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService)); };
ChangelogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChangelogComponent, selectors: [["app-changelog"]], viewQuery: function ChangelogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 13, vars: 2, consts: [["modalComponent", ""], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "x", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], [1, "content"], [3, "src"], [1, "absolute", "h-16", "px-8", "right-0", "bottom-0", "left-0", "flex", "items-center", "justify-between", "border-t"], [4, "ngTemplateOutlet"], ["toolbar", ""], ["type", "button", 1, "p-2", "mr-3", "bg-gray-800", "text-white", "rounded", 3, "click"]], template: function ChangelogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-modal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u00C4nderungen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChangelogComponent_Template_button_click_5_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "icons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "markdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ChangelogComponent_ng_container_10_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ChangelogComponent_ng_template_11_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/md/changelog.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_2__.IconLibraryComponent, ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2Vsb2cuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 42792:
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/actions */ 34622);
/* harmony import */ var src_app_shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/animations */ 73510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 80877);
/* harmony import */ var src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/modal/modal.service */ 77355);
/* harmony import */ var src_app_shared_components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/splash-screen/splash-screen.component */ 17515);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);

 // rxjs

















function LoginComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ein Benutzername ist erforderlich!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function LoginComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Die Eingabe eines Kennworts ist erforderlich!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

class LoginComponent {
  constructor(_formBuilder, store, router, authService, modalService) {
    this._formBuilder = _formBuilder;
    this.store = store;
    this.router = router;
    this.authService = authService;
    this.modalService = modalService;
    this.opened = false;
    this.hide = true;
    this.loginForm = this._formBuilder.group({
      username: ['24225132', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }

  login() {
    const form = this.loginForm.value;
    this.authService.login(form.username, form.password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(backendResponse => {
      this.store.dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_1__.login)({
        backendResponse
      }));
      this.router.navigateByUrl('/');
    })).subscribe(rxjs__WEBPACK_IMPORTED_MODULE_10__.noop, () => alert('Login Failed'));
  }

  openChangeLogModal() {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        ChangelogComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./changelog/changelog.component */ 98452));

      _this.modalService.open(ChangelogComponent, {});
    })();
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 25,
  vars: 7,
  consts: [[1, "h-screen", "w-screen", "grid", "place-items-center", "overflow-hidden", "z-0"], [1, "absolute", "w-full", "h-full", "grid", "place-items-center", "z-20"], [1, "w-96", "p-10", "bg-white", "rounded-lg", "shadow-lg", "z-20"], [1, "my-10", "text-3xl", "text-gray-800"], ["autocomplete", "off", 3, "formGroup"], ["appearance", "fill"], ["type", "text", "matInput", "", "formControlName", "username"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 1, "w-6", 3, "click"], [1, "w-6", "h-6", "stroke-1", "stroke-current", 3, "name"], [1, "flex"], [1, "w-full", "p-3", "mt-3", "bg-gray-800", "text-white", "rounded-md", "shadow-lg", 3, "click"], [1, "absolute", "flex", "flex-row", "justify-end", "h-8", "w-full", "bottom-0", "z-30"], [1, "mr-3", "text-sm", "cursor-pointer", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-splash-screen");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Bordbuch");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Benutzername");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, LoginComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Kennwort");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "icons", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_23_listener() {
        return ctx.openChangeLogModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Aktualisierung 08.02.2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_1_0;
      let tmp_6_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", ctx.hide ? "eye" : "eye-off");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.hasError("required"));
    }
  },
  directives: [src_app_shared_components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__.SplashScreenComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_6__.IconLibraryComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError],
  styles: ["/* input */\nmat-form-field {\n  width: 100%;\n  background-image: none;\n}\nmat-form-field .mat-form-field-wrapper {\n  background-image: none;\n}\ninput {\n  display: block;\n  width: 100%;\n  border-width: 0px;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgba(156, 163, 175, var(--tw-border-opacity));\n  background-image: none;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n  padding: 10px 10px 10px 5px;\n}\ninput:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-offset-width: 0px;\n}\ninput:focus ~ label, input:valid ~ label {\n  top: -14px;\n  font-size: 14px;\n  color: #363636;\n}\ninput:focus ~ .bar:before {\n  width: 100%;\n}\nlabel {\n  color: #707070;\n  font-size: 18px;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 200ms ease all;\n}\n.bar {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.bar:before {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  height: 0.125rem;\n  width: 0px;\n  content: \"\";\n  background: #2196f3;\n  transition: 300ms ease all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zYXNzIiwiPG5vIHNvdXJjZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBQTtBQ0FBO0VBQUEsWUFBQTtFQUFBO0NBQUE7QUFBQTtFQUFBO0NBQUE7QUFBQTtFQUFBLGVBQUE7RUFBQSxZQUFBO0VBQUEsa0JBQUE7RUFBQSx5QkFBQTtFQUFBLHVCQUFBO0VBQUEsNERBQUE7RUFBQSx1QkFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxpQkFBQTtFQUFBLHFCQUFBO0VBQUEsNkNBQUE7RURXRTtDQ1hGO0FBQUE7RUFBQSw0R0FBQTtFQUFBLDBHQUFBO0VBQUEsNkZBQUE7RUFBQTtDQUFBO0FEZ0JFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUNwQkE7RUFBQTtDQUFBO0FEd0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQUVGO0FDakNBO0VBQUEsbUJBQUE7RUFBQSxlQUFBO0VBQUE7Q0FBQTtBQUFBO0VBQUEsbUJBQUE7RUFBQSxZQUFBO0VBQUEsVUFBQTtFQUFBLGlCQUFBO0VBQUEsV0FBQTtFRHNDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQTtDQ3hDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGlucHV0ICovXHJcbm1hdC1mb3JtLWZpZWxkXHJcbiAgQGFwcGx5IHctZnVsbCBcclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJcclxuICAgIEBhcHBseSBiZy1ub25lXHJcblxyXG5cclxuICBAYXBwbHkgYmctbm9uZVxyXG5pbnB1dFxyXG4gIEBhcHBseSBibG9jayBiZy1ub25lIHRleHQtYmxhY2sgdGV4dC1sZyBmb250LW1lZGl1bSB3LWZ1bGwgYm9yZGVyLTAgYm9yZGVyLWIgYm9yZGVyLWdyYXktNDAwXHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4XHJcblxyXG4gICY6Zm9jdXNcclxuICAgIEBhcHBseSByaW5nLTAgcmluZy1vZmZzZXQtMFxyXG5cclxuICAmOmZvY3VzfmxhYmVsLCAmOnZhbGlkfmxhYmVsXHJcbiAgICB0b3A6IC0xNHB4XHJcbiAgICBmb250LXNpemU6IDE0cHhcclxuICAgIGNvbG9yOiAjMzYzNjM2XHJcblxyXG4gICY6Zm9jdXN+LmJhcjpiZWZvcmVcclxuICAgIEBhcHBseSB3LWZ1bGxcclxuXHJcbmxhYmVsXHJcbiAgY29sb3I6ICM3MDcwNzBcclxuICBmb250LXNpemU6IDE4cHhcclxuICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICBwb2ludGVyLWV2ZW50czogbm9uZVxyXG4gIGxlZnQ6IDVweFxyXG4gIHRvcDogMTBweFxyXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsXHJcblxyXG4uYmFyXHJcbiAgQGFwcGx5IGJsb2NrIHJlbGF0aXZlIHctZnVsbFxyXG5cclxuICAmOmJlZm9yZVxyXG4gICAgQGFwcGx5IGFic29sdXRlIGgtMC41IHctMCBib3R0b20tMCBsZWZ0LTBcclxuICAgIGNvbnRlbnQ6ICcnXHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzXHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlIGFsbFxyXG4iLG51bGxdfQ== */"],
  encapsulation: 2,
  data: {
    animation: src_app_shared_animations__WEBPACK_IMPORTED_MODULE_2__.Animations
  }
});

/***/ }),

/***/ 34622:
/*!***********************************************!*\
  !*** ./src/app/modules/auth/state/actions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

// import { User } from '../model/user.model'
const login = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Login Page] User Login", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Top Menu] Logout");


/***/ }),

/***/ 94043:
/*!***********************************************!*\
  !*** ./src/app/modules/auth/state/effects.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 34622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);






class AuthEffects {
    constructor(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.login), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(action => localStorage.setItem('user', JSON.stringify(action.backendResponse)))), { dispatch: false }); // dispatch = false to prevent circular dependencies
        this.logout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
            localStorage.removeItem('user');
            this.router.navigateByUrl('/login');
        })), { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });


/***/ }),

/***/ 48450:
/*!***********************************************!*\
  !*** ./src/app/modules/auth/state/reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialAuthState": () => (/* binding */ initialAuthState),
/* harmony export */   "authReducer": () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 34622);


const initialAuthState = {
    backendResponse: undefined
};
// export const reducers: ActionReducerMap<AuthState> = { }
const authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialAuthState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.login, (state, action) => {
    return {
        backendResponse: action.backendResponse
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.logout, (state, action) => {
    return {
        backendResponse: undefined
    };
}));


/***/ }),

/***/ 11080:
/*!*************************************************!*\
  !*** ./src/app/modules/auth/state/selectors.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAuthState": () => (/* binding */ selectAuthState),
/* harmony export */   "isLoggedIn": () => (/* binding */ isLoggedIn),
/* harmony export */   "isLoggedOut": () => (/* binding */ isLoggedOut),
/* harmony export */   "selectSub": () => (/* binding */ selectSub),
/* harmony export */   "selectBackendresponse": () => (/* binding */ selectBackendresponse),
/* harmony export */   "selectToken": () => (/* binding */ selectToken),
/* harmony export */   "selectBackendUrl": () => (/* binding */ selectBackendUrl)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);


const selectAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Auth);
const isLoggedIn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAuthState, (auth) => {
    if (!!auth.backendResponse) {
        console.log(auth.backendResponse);
        return true;
    }
    else {
        return false;
    }
});
const isLoggedOut = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(isLoggedIn, loggedIn => !loggedIn);
const selectSub = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAuthState, (auth) => auth.backendResponse.sub);
const selectBackendresponse = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAuthState, auth => auth.backendResponse);
const selectToken = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectBackendresponse, backendResponse => {
    if (!!backendResponse) {
        return backendResponse.token;
    }
    else {
        return '';
    }
});
const selectBackendUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectBackendresponse, backendResponse => {
    if (!!backendResponse) {
        return backendResponse.backendUrl;
    }
    else {
        return '';
    }
});


/***/ }),

/***/ 86465:
/*!***********************************************!*\
  !*** ./src/app/shared/animations/defaults.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationCurves": () => (/* binding */ AnimationCurves),
/* harmony export */   "AnimationDurations": () => (/* binding */ AnimationDurations)
/* harmony export */ });
class AnimationCurves {
}
AnimationCurves.standard = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
AnimationCurves.deceleration = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
AnimationCurves.acceleration = 'cubic-bezier(0.4, 0.0, 1, 1)';
AnimationCurves.sharp = 'cubic-bezier(0.4, 0.0, 0.6, 1)';
class AnimationDurations {
}
AnimationDurations.complex = '375ms';
AnimationDurations.entering = '225ms';
AnimationDurations.exiting = '195ms';


/***/ }),

/***/ 73510:
/*!********************************************!*\
  !*** ./src/app/shared/animations/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animations": () => (/* binding */ Animations)
/* harmony export */ });
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ 32131);

const Animations = [
    _slide__WEBPACK_IMPORTED_MODULE_0__.slideInTop, _slide__WEBPACK_IMPORTED_MODULE_0__.slideInBottom, _slide__WEBPACK_IMPORTED_MODULE_0__.slideInLeft, _slide__WEBPACK_IMPORTED_MODULE_0__.slideInRight,
    _slide__WEBPACK_IMPORTED_MODULE_0__.slideOutTop, _slide__WEBPACK_IMPORTED_MODULE_0__.slideOutBottom, _slide__WEBPACK_IMPORTED_MODULE_0__.slideOutLeft, _slide__WEBPACK_IMPORTED_MODULE_0__.slideOutRight
];


/***/ }),

/***/ 32131:
/*!********************************************!*\
  !*** ./src/app/shared/animations/slide.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideInTop": () => (/* binding */ slideInTop),
/* harmony export */   "slideInBottom": () => (/* binding */ slideInBottom),
/* harmony export */   "slideInLeft": () => (/* binding */ slideInLeft),
/* harmony export */   "slideInRight": () => (/* binding */ slideInRight),
/* harmony export */   "slideOutTop": () => (/* binding */ slideOutTop),
/* harmony export */   "slideOutBottom": () => (/* binding */ slideOutBottom),
/* harmony export */   "slideOutLeft": () => (/* binding */ slideOutLeft),
/* harmony export */   "slideOutRight": () => (/* binding */ slideOutRight)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ 86465);


// -----------------------------------------------------------------------------------------------------
// @ Slide in top
// -----------------------------------------------------------------------------------------------------
const slideInTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('slideInTop', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, -100%, 0)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => false', []),
    // Transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{timings}}'), {
        params: {
            timings: `${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationDurations.entering} ${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationCurves.deceleration}`
        }
    })
]);
// -----------------------------------------------------------------------------------------------------
// @ Slide in bottom
// -----------------------------------------------------------------------------------------------------
const slideInBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('slideInBottom', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 100%, 0)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => false', []),
    // Transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{timings}}'), {
        params: {
            timings: `${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationDurations.entering} ${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationCurves.deceleration}`
        }
    })
]);
// -----------------------------------------------------------------------------------------------------
// @ Slide in left
// -----------------------------------------------------------------------------------------------------
const slideInLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('slideInLeft', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(-100%, 0, 0)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => false', []),
    // Transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{timings}}'), {
        params: {
            timings: `${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationDurations.entering} ${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationCurves.deceleration}`
        }
    })
]);
// -----------------------------------------------------------------------------------------------------
// @ Slide in right
// -----------------------------------------------------------------------------------------------------
const slideInRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('slideInRight', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(100%, 0, 0)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => false', []),
    // Transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{timings}}'), {
        params: {
            timings: `${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationDurations.entering} ${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationCurves.deceleration}`
        }
    })
]);
// -----------------------------------------------------------------------------------------------------
// @ Slide out top
// -----------------------------------------------------------------------------------------------------
const slideOutTop = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('slideOutTop', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, -100%, 0)'
    })),
    // Prevent the transition if the state is false
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('false => void', []),
    // Transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{timings}}'), {
        params: {
            timings: `${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationDurations.exiting} ${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationCurves.acceleration}`
        }
    })
]);
// -----------------------------------------------------------------------------------------------------
// @ Slide out bottom
// -----------------------------------------------------------------------------------------------------
const slideOutBottom = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('slideOutBottom', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 100%, 0)'
    })),
    // Prevent the transition if the state is false
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('false => void', []),
    // Transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{timings}}'), {
        params: {
            timings: `${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationDurations.exiting} ${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationCurves.acceleration}`
        }
    })
]);
// -----------------------------------------------------------------------------------------------------
// @ Slide out left
// -----------------------------------------------------------------------------------------------------
const slideOutLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('slideOutLeft', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(-100%, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('false => void', []),
    // Transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{timings}}'), {
        params: {
            timings: `${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationDurations.exiting} ${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationCurves.acceleration}`
        }
    })
]);
// -----------------------------------------------------------------------------------------------------
// @ Slide out right
// -----------------------------------------------------------------------------------------------------
const slideOutRight = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('slideOutRight', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(0, 0, 0)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translate3d(100%, 0, 0)'
    })),
    // Prevent the transition if the state is false
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('false => void', []),
    // Transition
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{timings}}'), {
        params: {
            timings: `${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationDurations.exiting} ${_defaults__WEBPACK_IMPORTED_MODULE_0__.AnimationCurves.acceleration}`
        }
    })
]);



/***/ }),

/***/ 9219:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 39490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);



function CardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CardComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = [[["", "CardFront", ""]], [["", "CardBack", ""]], [["", "CardSimple", ""]]];
const _c1 = ["[CardFront]", "[CardBack]", "[CardSimple]"];
class CardComponent {
    constructor() {
        this.expanded = false;
        this.face = 'front';
        this.flippable = false;
    }
    get classList() {
        return {
            'card-expanded': this.expanded,
            'card-face-back': this.flippable && this.face === 'back',
            'card-face-front': this.flippable && this.face === 'front',
            'card-flippable': this.flippable
        };
    }
    ngOnChanges(changes) {
        if ('expanded' in changes) {
            // Coerce the value to a boolean
            this.expanded = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(changes.expanded.currentValue);
        }
        if ('flippable' in changes) {
            // Coerce the value to a boolean
            this.flippable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(changes.flippable.currentValue);
        }
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], hostVars: 2, hostBindings: function CardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classList);
    } }, inputs: { expanded: "expanded", face: "face", flippable: "flippable" }, exportAs: ["card"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "card-front"], [1, "card-back"], [1, "card-simple"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_ng_container_0_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_ng_container_1_Template, 3, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flippable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flippable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["app-card {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  /* Flippable */\n  /* simple */\n}\napp-card.card-flippable {\n  border-radius: 0;\n  overflow: visible;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n  perspective: 600px;\n  background: transparent;\n}\napp-card.card-flippable.card-face-back .card-front {\n  visibility: hidden;\n  opacity: 0;\n  transform: rotateY(180deg);\n}\napp-card.card-flippable.card-face-back .card-back {\n  visibility: visible;\n  opacity: 1;\n  transform: rotateY(360deg);\n}\napp-card.card-flippable .card-simple,\napp-card.card-flippable .card-front,\napp-card.card-flippable .card-back {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  z-index: 10;\n  transition: transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 1rem;\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\napp-card.card-flippable .card-front {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  transform: rotateY(0deg);\n  overflow: hidden;\n}\napp-card.card-flippable .card-back {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform: rotateY(180deg);\n  overflow: hidden auto;\n}\napp-card:not(.card-flippable) {\n  border-radius: 0;\n  overflow: visible;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n  perspective: 600px;\n  background: transparent;\n}\napp-card:not(.card-flippable) .card-simple {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  z-index: 10;\n  transition: transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 1rem;\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNhc3MiLCI8bm8gc291cmNlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtFQXFEQSxXQUFBO0FBcERKO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQUVZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFBaEI7QUFHWTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBRGhCO0FBR1E7OztFQUdJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMkZBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VDbkNaLG9CQUFBO0VBQUEscUZBQUE7RUFBQSx3R0FBQTtBRG1DQTtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBRlo7QUFLUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFIWjtBQU1JO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBSlI7QUFNUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMkZBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VDekVaLG9CQUFBO0VBQUEscUZBQUE7RUFBQSx3R0FBQTtBRHNFQSIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNhcmQgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuXHJcbiAgICAvKiBGbGlwcGFibGUgKi9cclxuICAgICYuY2FyZC1mbGlwcGFibGVcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwXHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcclxuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzXHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IDYwMHB4XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxuXHJcbiAgICAgICAgJi5jYXJkLWZhY2UtYmFjayBcclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWZyb250IFxyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5jYXJkLWJhY2sgXHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAuY2FyZC1zaW1wbGUsXHJcbiAgICAgICAgLmNhcmQtZnJvbnQsXHJcbiAgICAgICAgLmNhcmQtYmFjayBcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvXHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDBzLCB2aXNpYmlsaXR5IDBzIGVhc2UtaW4gMC4ycywgb3BhY2l0eSAwcyBlYXNlLWluIDAuMnNcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuXHJcbiAgICAgICAgICAgIEBhcHBseSByb3VuZGVkLTJ4bCBzaGFkb3ctbGdcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLmNhcmQtZnJvbnQgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLmNhcmQtYmFjayBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIHRvcDogMFxyXG4gICAgICAgICAgICByaWdodDogMFxyXG4gICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlblxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKVxyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG9cclxuXHJcbiAgICAvKiBzaW1wbGUgKi9cclxuICAgICY6bm90KC5jYXJkLWZsaXBwYWJsZSlcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwXHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGVcclxuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzXHJcbiAgICAgICAgcGVyc3BlY3RpdmU6IDYwMHB4XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxuXHJcbiAgICAgICAgLmNhcmQtc2ltcGxlXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0b1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwcywgdmlzaWJpbGl0eSAwcyBlYXNlLWluIDAuMnMsIG9wYWNpdHkgMHMgZWFzZS1pbiAwLjJzXHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlblxyXG4gICAgICAgICAgICBAYXBwbHkgcm91bmRlZC0yeGwgc2hhZG93LWxnIixudWxsXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 89024:
/*!*******************************************************!*\
  !*** ./src/app/shared/components/card/card.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardModule": () => (/* binding */ CardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.component */ 9219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class CardModule {
}
CardModule.ɵfac = function CardModule_Factory(t) { return new (t || CardModule)(); };
CardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent] }); })();


/***/ }),

/***/ 96344:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/headline-stepper/headline-stepper.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadlineStepperComponent": () => (/* binding */ HeadlineStepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ 31394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress/progress.component */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status/status.component */ 38613);





function HeadlineStepperComponent_ng_container_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 5);
} if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", step_r1.stepLabel.template);
} }
function HeadlineStepperComponent_ng_container_4_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Kein Label vorhanden. ");
} }
function HeadlineStepperComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeadlineStepperComponent_ng_container_4_div_1_ng_container_1_Template, 1, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeadlineStepperComponent_ng_container_4_div_1_ng_template_2_Template, 1, 0, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r1.stepLabel)("ngIfElse", _r5);
} }
function HeadlineStepperComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeadlineStepperComponent_ng_container_4_div_1_Template, 4, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.selectedIndex === i_r2);
} }
class HeadlineStepperComponent extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepper {
    ngOnInit() { }
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
}
HeadlineStepperComponent.ɵfac = /*@__PURE__*/ function () { let ɵHeadlineStepperComponent_BaseFactory; return function HeadlineStepperComponent_Factory(t) { return (ɵHeadlineStepperComponent_BaseFactory || (ɵHeadlineStepperComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HeadlineStepperComponent)))(t || HeadlineStepperComponent); }; }();
HeadlineStepperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeadlineStepperComponent, selectors: [["headline-stepper"]], inputs: { status: "status" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepper, useExisting: HeadlineStepperComponent }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 5, consts: [[1, "w-full"], [1, "flex", "flex-row"], [3, "value", "maxvalue"], [4, "ngFor", "ngForOf"], [1, "flex-grow", 3, "value"], [3, "ngTemplateOutlet"], [4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf", "ngIfElse"], ["class", "text-4xl"], ["showLabelText", ""]], template: function HeadlineStepperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HeadlineStepperComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "status", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedIndex + 1)("maxvalue", ctx.steps.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
    } }, directives: [_progress_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _status_status_component__WEBPACK_IMPORTED_MODULE_1__.StatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["header[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n}\nheader[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin: 1rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  position: relative;\n  height: auto;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #864d84;\n  color: white;\n}\nheader[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 1rem;\n  color: inherit;\n}\nheader[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: solid thin #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRsaW5lLXN0ZXBwZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUVNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQVI7QUFFTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQVI7QUFFUTtFQUNFLGlDQUFBO0FBQVYiLCJmaWxlIjoiaGVhZGxpbmUtc3RlcHBlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlclxyXG4gIG9sXHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAgICBtYXJnaW46IDAgYXV0b1xyXG5cclxuICAgIGxpXHJcbiAgICAgIGZsZXgtZ3JvdzogMVxyXG4gICAgICBtYXJnaW46IDFyZW1cclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW1cclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgIGhlaWdodDogYXV0b1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuXHJcbiAgICAgICYuYWN0aXZlXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNCwgNzcsIDEzMilcclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgICAgXHJcbiAgICAgIGFcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gICAgICAgIHBhZGRpbmc6IDFyZW1cclxuICAgICAgICBjb2xvcjogaW5oZXJpdFxyXG5cclxuICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCB0aGluICMwMDAwMDAiXX0= */"] });


/***/ }),

/***/ 72867:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/headline-stepper/headline-stepper.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadlineStepperModule": () => (/* binding */ HeadlineStepperModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ 31394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _headline_stepper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headline-stepper.component */ 96344);
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress/progress.component */ 5590);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status/status.component */ 38613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






class HeadlineStepperModule {
}
HeadlineStepperModule.ɵfac = function HeadlineStepperModule_Factory(t) { return new (t || HeadlineStepperModule)(); };
HeadlineStepperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HeadlineStepperModule });
HeadlineStepperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__.CdkStepperModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HeadlineStepperModule, { declarations: [_headline_stepper_component__WEBPACK_IMPORTED_MODULE_0__.HeadlineStepperComponent,
        _progress_progress_component__WEBPACK_IMPORTED_MODULE_1__.ProgressComponent,
        _status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__.CdkStepperModule], exports: [_headline_stepper_component__WEBPACK_IMPORTED_MODULE_0__.HeadlineStepperComponent,
        _progress_progress_component__WEBPACK_IMPORTED_MODULE_1__.ProgressComponent] }); })();


/***/ }),

/***/ 5590:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/headline-stepper/progress/progress.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressComponent": () => (/* binding */ ProgressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ProgressComponent {
    constructor() {
        this.value = 0;
        this.maxvalue = 100;
        this.radius = 54;
        this.circumference = 2 * Math.PI * this.radius;
        this.dashoffset = 0;
        this.progress(0, this.maxvalue);
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.value.currentValue !== changes.value.previousValue) {
            this.progress(changes.value.currentValue, this.maxvalue);
        }
    }
    progress(value, maxvalue) {
        const progress = value / maxvalue;
        this.dashoffset = this.circumference * (1 - progress);
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["app-progress"]], inputs: { value: "value", maxvalue: "maxvalue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 8, consts: [["viewBox", "0 0 120 120", 1, "progress__svg", "w-20", "h-20"], ["cx", "60", "cy", "60", 1, "progress__meter"], ["cx", "60", "cy", "60", 1, "progress__value"], ["x", "50%", "y", "55%", "text-anchor", "middle", "transform", "rotate(90, 60, 60)", 1, "progress__text"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.dashoffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.value, " von ", ctx.maxvalue, "");
    } }, styles: [".progress__svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\n.progress__text[_ngcontent-%COMP%] {\n  stroke: currentColor;\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n  font-size: 1.5rem;\n  stroke-width: 1px;\n}\n\n.progress__meter[_ngcontent-%COMP%], .progress__value[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.progress__meter[_ngcontent-%COMP%] {\n  stroke: currentColor;\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n  stroke-width: 4px;\n}\n\n.progress__value[_ngcontent-%COMP%] {\n  stroke: currentColor;\n  --tw-text-opacity: 1;\n  color: rgba(37, 99, 235, var(--tw-text-opacity));\n  stroke-width: 4px;\n  transition: stroke-dashoffset 0.5s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLmNvbXBvbmVudC5zYXNzIiwiPG5vIHNvdXJjZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQ0ZBO0VBQUEscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGlEQUFBO0VES0UsaUJBQUE7RUFFQTtDQ1BGOztBRFNBOztFQUVFLFVBQUE7QUFFRjs7QUNiQTtFQUFBLHFCQUFBO0VBQUEscUJBQUE7RUFBQSxtREFBQTtFRGdCRTtDQ2hCRjs7QUFBQTtFQUFBLHFCQUFBO0VBQUEscUJBQUE7RUFBQSxpREFBQTtFRHFCRSxpQkFBQTtFQUNBO0NDdEJGIiwiZmlsZSI6InByb2dyZXNzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzX19zdmdcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcblxyXG4ucHJvZ3Jlc3NfX3RleHRcclxuICBAYXBwbHkgc3Ryb2tlLWN1cnJlbnQgdGV4dC1ibHVlLTYwMFxyXG4gIGZvbnQtc2l6ZTogMS41cmVtXHJcbiAgLy8gc3Ryb2tlOiAjMzk3OGQ2XHJcbiAgc3Ryb2tlLXdpZHRoOiAxcHhcclxuXHJcbi5wcm9ncmVzc19fbWV0ZXIsXHJcbi5wcm9ncmVzc19fdmFsdWVcclxuICBmaWxsOiBub25lXHJcblxyXG4ucHJvZ3Jlc3NfX21ldGVyXHJcbiAgQGFwcGx5IHN0cm9rZS1jdXJyZW50IHRleHQtZ3JheS00MDBcclxuICAvLyBzdHJva2U6ICM5YjliOWJcclxuICBzdHJva2Utd2lkdGg6IDRweFxyXG5cclxuLnByb2dyZXNzX192YWx1ZVxyXG4gIEBhcHBseSBzdHJva2UtY3VycmVudCB0ZXh0LWJsdWUtNjAwXHJcbiAgLy8gc3Ryb2tlOiAjMzk3OGQ2XHJcbiAgc3Ryb2tlLXdpZHRoOiA0cHhcclxuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAwLjVzIGxpbmVhclxyXG4iLG51bGxdfQ== */"] });


/***/ }),

/***/ 38613:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/headline-stepper/status/status.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusComponent": () => (/* binding */ StatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusComponent, selectors: [["status"]], inputs: { value: "value" }, decls: 14, vars: 6, consts: [[1, "flex", "justify-end"], [1, "flex", "flex-col"], [1, "flex", "flex-row", "justify-end"], [1, "whitespace-nowrap", 3, "ngClass"], [1, "h-4", "w-4", "m-1", "rounded-full", 3, "ngClass"], [3, "ngClass"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "vorbereitend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "aktiv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "beendet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value == "vorbereitend" ? "" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value == "vorbereitend" ? "bg-blue-500" : "bg-gray-300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value == "aktiv" ? "" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value == "aktiv" ? "bg-blue-500" : "bg-gray-300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value == "beendet" ? "" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value == "beendet" ? "bg-blue-500" : "bg-gray-300");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 99705:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/image-base64-upload/image-base64-upload.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageBase64UploadComponent": () => (/* binding */ ImageBase64UploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);



// import * as _ from 'lodash';
class ImageBase64UploadComponent {
    constructor() {
        this.imageBase64 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.imageError = null;
        this.isImageSaved = false;
        this.cardImageBase64 = null;
    }
    ngOnInit() { }
    fileChangeEvent(fileInput) {
        let file = fileInput.target.files[0];
        const max_size = 500000;
        const allowed_types = ['image/jpeg', 'image/png'];
        const max_height = 15200;
        const max_width = 25600;
        if (fileInput.target.files[0].size > max_size) {
            this.imageError = 'Maximale Größe ist ' + max_size / 1000 + 'Kb.';
            return false;
        }
        if (!allowed_types.includes(fileInput.target.files[0].type)) {
            this.imageError = 'Es sind nud die Datei-Formate *.jpg/*.png erlaubt.';
            return false;
        }
        let reader = new FileReader();
        reader.onload = () => {
            const res = btoa(reader.result);
            console.log(res);
            this.imageBase64.emit(res);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        reader.readAsDataURL(file);
    }
    // fileChangeEvent2(fileInput: any): false | void {
    //   let imageURLBase64: any
    //   console.log(fileInput)
    //   this.imageError = null
    //   if (fileInput.target.files && fileInput.target.files[0]) {
    //     // Size Filter Bytes
    //     const max_size = 500000
    //     const allowed_types = ['image/jpeg']
    //     const max_height = 15200
    //     const max_width = 25600
    //     if (fileInput.target.files[0].size > max_size) {
    //       this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb'
    //       return false
    //     }
    //     if (!allowed_types.includes(fileInput.target.files[0].type)) {
    //         this.imageError = 'Only Images are allowed ( JPG )';
    //         return false;
    //     }
    //     const reader = new FileReader()
    //     reader.onload = () => {
    //       imageURLBase64 = reader.result
    //       console.log(reader.result)
    //       this.imageBase64.emit(reader.result)
    //     }
    //     reader.readAsDataURL(fileInput.target.files[0])
    //   }
    // }
    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }
}
ImageBase64UploadComponent.ɵfac = function ImageBase64UploadComponent_Factory(t) { return new (t || ImageBase64UploadComponent)(); };
ImageBase64UploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageBase64UploadComponent, selectors: [["image-base64-upload"]], outputs: { imageBase64: "imageBase64" }, decls: 6, vars: 1, consts: [[1, "form-group"], [1, "custom-file", "fileInputProfileWrap"], ["type", "file", 1, "fileInputProfile", 3, "change"]], template: function ImageBase64UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageBase64UploadComponent_Template_input_change_4_listener($event) { return ctx.fileChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.imageError, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1iYXNlNjQtdXBsb2FkLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 19031:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/image-base64-upload/image-base64-upload.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageBase64UploadModule": () => (/* binding */ ImageBase64UploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _image_base64_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-base64-upload.component */ 99705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




class ImageBase64UploadModule {
}
ImageBase64UploadModule.ɵfac = function ImageBase64UploadModule_Factory(t) { return new (t || ImageBase64UploadModule)(); };
ImageBase64UploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ImageBase64UploadModule });
ImageBase64UploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImageBase64UploadModule, { declarations: [_image_base64_upload_component__WEBPACK_IMPORTED_MODULE_0__.ImageBase64UploadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule], exports: [_image_base64_upload_component__WEBPACK_IMPORTED_MODULE_0__.ImageBase64UploadComponent] }); })();


/***/ }),

/***/ 62817:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/image-slider/image-slider.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSliderComponent": () => (/* binding */ ImageSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _projects_image_carousel_src_lib_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../projects/image-carousel/src/lib/carousel.component */ 59475);



class ImageSliderComponent {
    // images = [
    //   {p: '/assets/photo-1548625149-9129dad5eef7.jpg'},
    //   {p: '/assets/photo-1548625149-d37da68f9a7f.jpg'},
    //   // {path: '/assets/photo-1489365091240-6a18fc761ec2.jpg'},
    //   // {path: '/assets/photo-1547691889-841a6f1c5ca6.jpg'},
    //   // {path: '/assets/photo-1595433562696-a8b1cb8bdad1.jpg'},
    //   // {path: '/assets/photo-1495563381401-ecfbcaaa60f2.jpg'},
    //   // {path: '/assets/photo-1534801022022-6e319a11f249.jpg'},
    //   // {path: '/assets/photo-1524324463413-57e3d8392df1.jpg'},
    //   // {path: '/assets/photo-1506086679524-493c64fdfaa6.jpg'},
    //   // {path: '/assets/photo-1569749450723-1836b067fb64.jpg'}
    // ];   
    // imagesForSlider = [
    //     {p: '/assets/photo-1444065707204-12decac917e8.jfif'},
    //     {p: '/assets/photo-1445452916036-9022dfd33aa8.jfif'},
    //     // {path: '/assets/photo-1443996104801-80c82e789b18.jfif'},
    //     // {path: '/assets/photo-1505839673365-e3971f8d9184.jfif'},
    //     // {path: '/assets/photo-1545420333-23a22b18b8fa.jfif'}
    // ];
    constructor(el) {
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // console.log(this.images)
    }
    ngOnDestroy() {
        this.element.remove();
    }
    close() {
        this.element.style.display = 'none';
    }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) { return new (t || ImageSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
ImageSliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImageSliderComponent, selectors: [["app-image-slider"]], inputs: { images: "images" }, decls: 10, vars: 7, consts: [[1, "fixed", "z-50", "inset-0", "overflow-hidden"], [1, "min-h-screen", "bg-gray-800", "bg-opacity-90", 3, "click"], [1, "absolute", "top-8", "right-4", "bottom-4", "left-4", "bg-white", "rounded"], [1, "h-16", "p-8", "flex", "items-center", "justify-between", "border-b"], ["tabindex", "0", 1, "dark:text-gray-50", "focus:outline-none", "text-2xl", "font-semibold", "leading-6", "text-gray-800"], [1, "w-6", "h-6", "focus:outline-none", "rounded-md", "cursor-pointer", 3, "click"], ["name", "x", 1, "w-6", "h-6", "stroke-2", "stroke-current", "text-gray-500"], [1, "p-4", "w-full"], [3, "images", "objectFit", "cellWidth", "height", "autoplay", "dots", "loop"]], template: function ImageSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageSliderComponent_Template_div_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Titel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImageSliderComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "icons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.images)("objectFit", "cover")("cellWidth", "100%")("height", 500)("autoplay", false)("dots", true)("loop", false);
    } }, directives: [_projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_0__.IconLibraryComponent, _projects_image_carousel_src_lib_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent], styles: [".modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 200;\n  overflow: auto;\n}\n\n.mb[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (min-width: 640px) {\n\n  .mb[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .mb[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .mb[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n\n  .mb[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .mb[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n\n.mb[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  height: 6rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));\n  z-index: 300;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+IiwiaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsbUJBQUE7RUFBQSxTQUFBO0VBQUEsV0FBQTtFQUFBLFlBQUE7RUFBQSxVQUFBO0VDT0ksWUFBQTtFQUNBO0NEUko7O0FBQUE7RUFBQTtDQUFBOztBQUFBOztFQUFBO0lBQUE7R0FBQTtDQUFBOztBQUFBOztFQUFBO0lBQUE7R0FBQTtDQUFBOztBQUFBOztFQUFBO0lBQUE7R0FBQTtDQUFBOztBQUFBOztFQUFBO0lBQUE7R0FBQTtDQUFBOztBQUFBOztFQUFBO0lBQUE7R0FBQTtDQUFBOztBQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGFBQUE7RUFBQSxtQkFBQTtFQUFBLDREQUFBO0VDY0k7Q0RkSjs7QUNzQkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUdBLFlBQUE7QUFaSiIsImZpbGUiOiJpbWFnZS1zbGlkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi5tb2RhbFxyXG4gICAgQGFwcGx5IGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgbGVmdC0wXHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWRcclxuICAgIC8vIHRvcDogMFxyXG4gICAgLy8gcmlnaHQ6IDBcclxuICAgIC8vIGJvdHRvbTogMFxyXG4gICAgLy8gbGVmdDogMFxyXG4gICAgei1pbmRleDogMjAwXHJcbiAgICBvdmVyZmxvdzogYXV0b1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZlxyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMC41cmVtXHJcblxyXG4ubWJcclxuICAgIEBhcHBseSBjb250YWluZXIgbXgtYXV0byBoLTI0IGJnLWdyYXktNTBcclxuICAgIHotaW5kZXg6IDMwMFxyXG5cclxuLy8gLm1vZGFsIC5tb2RhbC1ib2R5IFxyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZlxyXG4vLyAgICAgbWFyZ2luOiA0MHB4XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW1cclxuXHJcblxyXG4ub3ZlcmxheSBcclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgdG9wOiAwXHJcbiAgICByaWdodDogMFxyXG4gICAgYm90dG9tOiAwXHJcbiAgICBsZWZ0OiAwXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwXHJcbiAgICAvLyBvcGFjaXR5OiAwLjc1XHJcbiAgICB6LWluZGV4OiA5MDBcclxuIl19 */"] });


/***/ }),

/***/ 60312:
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ 77355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






function ModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r2.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeIn", undefined)("@fadeOut", undefined);
  }
}

function ModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalComponent_div_2_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideInRight", undefined)("@slideOutRight", undefined);
  }
}

const _c0 = ["*"];
class ModalComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.display = true;
  }

  close() {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.display = false;
      yield setTimeout(() => {
        _this.modalService.close();
      }, 400);
    })();
  }

}

ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService));
};

ModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ModalComponent,
  selectors: [["app-modal"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [[1, "fixed", "z-40", "inset-0", "overflow-hidden"], ["class", "min-h-screen bg-gray-800 bg-opacity-90", 3, "click", 4, "ngIf"], ["class", "absolute w-full lg:max-w-lg md:max-w-md top-0 bottom-0 right-0 bg-gray-50 dark:bg-gray-800 dark:text-gray-50 text-left overflow-hidden shadow-xl sm:align-middle", 3, "click", 4, "ngIf"], [1, "min-h-screen", "bg-gray-800", "bg-opacity-90", 3, "click"], [1, "absolute", "w-full", "lg:max-w-lg", "md:max-w-md", "top-0", "bottom-0", "right-0", "bg-gray-50", "dark:bg-gray-800", "dark:text-gray-50", "text-left", "overflow-hidden", "shadow-xl", "sm:align-middle", 3, "click"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ModalComponent_div_1_Template, 1, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ModalComponent_div_2_Template, 2, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.display);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.display);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2FzcyJ9 */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => false', []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('false => void', []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('200ms 200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('slideInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      transform: 'translate3d(100%, 0, 0)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      transform: 'translate3d(0, 0, 0)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => false', []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('200ms 100ms cubic-bezier(0.0, 0.0, 0.2, 1)'))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('slideOutRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      transform: 'translate3d(0, 0, 0)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      transform: 'translate3d(100%, 0, 0)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('false => void', []), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))])]
  }
});

/***/ }),

/***/ 55811:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/modal/modal.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModule": () => (/* binding */ ModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component */ 60312);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ 77355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class ModalModule {
}
ModalModule.ɵfac = function ModalModule_Factory(t) { return new (t || ModalModule)(); };
ModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent] }); })();


/***/ }),

/***/ 77355:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/modal/modal.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class ModalService {
  constructor(componentFactoryResolver, appRef, injector) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.appRef = appRef;
    this.injector = injector;
  }

  getData() {
    var _this = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this.data;
    })();
  }

  open(component, data) {
    var _this2 = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (data) {
        _this2.data = data;
      }

      if (_this2.componentRef) {
        return;
      }

      _this2.componentRef = _this2.componentFactoryResolver.resolveComponentFactory(component).create(_this2.injector);

      _this2.appRef.attachView(_this2.componentRef.hostView);

      const domElem = _this2.componentRef.hostView.rootNodes[0];
      document.body.appendChild(domElem);
    })();
  }

  close() {
    var _this3 = this;

    return (0,C_Users_christoph_Desktop_Neuer_Ordner_angular_bordbuch_wsp_final_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this3.componentRef) {
        return;
      }

      _this3.appRef.detachView(_this3.componentRef.hostView);

      _this3.componentRef.destroy();

      _this3.componentRef = undefined;
    })();
  }

}

ModalService.ɵfac = function ModalService_Factory(t) {
  return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};

ModalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ModalService,
  factory: ModalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 88632:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/progress-bar/progress-bar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


const _c0 = function (a0, a1, a2) { return { "text-blue-600": a0, "text-yellow-300": a1, "text-red-300": a2 }; };
class ProgressBarComponent {
    constructor() {
        this.value = 0;
        this.maxvalue = 100;
        this.percent = 0;
        this.progress(this.value, this.maxvalue);
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.value.currentValue !== changes.value.previousValue && changes.maxvalue.currentValue !== changes.maxvalue.previousValue) {
            this.progress(changes.value.currentValue, changes.maxvalue.currentValue);
        }
    }
    progress(value, maxvalue) {
        if (maxvalue != 0)
            this.percent = 100 / maxvalue * value;
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["progress-bar"]], inputs: { value: "value", maxvalue: "maxvalue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 6, consts: [[1, "ProgressBar"], ["width", "100%", "height", "100%", 1, "ProgressBar-background"], ["height", "100%", 1, "ProgressBar-percentage", 3, "ngClass"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("width", "", ctx.percent, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.percent > 0 && ctx.percent < 80, ctx.percent >= 80 && ctx.percent < 90, ctx.percent >= 90));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".ProgressBar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 4px;\n}\n\n.ProgressBar-background[_ngcontent-%COMP%], .ProgressBar-percentage[_ngcontent-%COMP%] {\n  fill: currentColor;\n}\n\n.ProgressBar-background[_ngcontent-%COMP%] {\n  fill-opacity: 0.2;\n}\n\n.ProgressBar-percentage[_ngcontent-%COMP%] {\n  fill-opacity: 0.9;\n  transition: stroke-dashoffset 0.5s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJhci5jb21wb25lbnQuc2FzcyIsIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FDSkE7RUFBQTtDQUFBOztBRFdBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EseUNBQUE7QUFFSiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUHJvZ3Jlc3NCYXJcclxuICBkaXNwbGF5OiBibG9ja1xyXG4gIHdpZHRoOiAxMDAlXHJcbiAgaGVpZ2h0OiA0cHhcclxuXHJcbi5Qcm9ncmVzc0Jhci1iYWNrZ3JvdW5kLFxyXG4uUHJvZ3Jlc3NCYXItcGVyY2VudGFnZVxyXG4gICAgQGFwcGx5IGZpbGwtY3VycmVudCBcclxuICAgIC8vIGZpbGw6ICMzOTc4ZDYgdGV4dC1ibHVlLTYwMFxyXG4gIFxyXG5cclxuLlByb2dyZXNzQmFyLWJhY2tncm91bmRcclxuICAgIGZpbGwtb3BhY2l0eTogMC4yXHJcblxyXG4uUHJvZ3Jlc3NCYXItcGVyY2VudGFnZVxyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjlcclxuICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuNXMgbGluZWFyIixudWxsXX0= */"] });


/***/ }),

/***/ 17515:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/splash-screen/splash-screen.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenComponent": () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);



const _c0 = function (a0) { return { left: a0 }; };
function SplashScreenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "icons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.windowWidth));
} }
class SplashScreenComponent {
    constructor() {
        this.showSplash = true;
    }
    ngOnInit() {
        setTimeout(() => {
            this.windowWidth = `-${window.innerWidth + 300}px`;
            setTimeout(() => {
                this.showSplash = !this.showSplash;
            }, 500);
        }, 3000);
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(); };
SplashScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], decls: 1, vars: 1, consts: [["class", "app-splash-screen", 3, "ngStyle", 4, "ngIf"], [1, "app-splash-screen", 3, "ngStyle"], [1, "app-splash-inner"], [1, "app-logo"], ["name", "bordbuch"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SplashScreenComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSplash);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_0__.IconLibraryComponent], styles: [".app-splash-screen {\n  background: #dedede;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  transition: left 1s;\n}\n\n.app-label {\n  margin-top: 32px;\n  color: #fff;\n  font-size: 2.5em;\n  font-family: \"Pacifico\", cursive;\n}\n\n.app-label .app-splash-inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.app-label .app-logo {\n  background-repeat: no-repeat;\n  max-width: 100%;\n  background-position: center;\n  background-size: contain;\n  width: 100px;\n  height: 100px;\n}\n\n.app-label .app-loader {\n  background-repeat: no-repeat;\n  max-width: 100%;\n  background-position: center;\n  background-size: contain;\n  width: 80px;\n  height: 80px;\n  margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBRUUsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBR0U7RUFFRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZKIiwiZmlsZSI6InNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNwbGFzaC1zY3JlZW4gXHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogMFxyXG4gICAgbGVmdDogMFxyXG4gICAgcmlnaHQ6IDBcclxuICAgIGJvdHRvbTogMFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIHotaW5kZXg6IDEwMFxyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAxc1xyXG4gIFxyXG4gIFxyXG4uYXBwLWxhYmVsIFxyXG4gIG1hcmdpbi10b3A6IDMycHhcclxuICBjb2xvcjogI2ZmZlxyXG4gIGZvbnQtc2l6ZTogMi41ZW1cclxuICBmb250LWZhbWlseTogXCJQYWNpZmljb1wiLCBjdXJzaXZlXHJcbiAgXHJcbiAgXHJcbiAgLmFwcC1zcGxhc2gtaW5uZXIgXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gIFxyXG4gIC5hcHAtbG9nbyBcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2xpZ2h0eS5zdmdcIilcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcclxuICAgIG1heC13aWR0aDogMTAwJVxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cclxuICAgIHdpZHRoOiAxMDBweFxyXG4gICAgaGVpZ2h0OiAxMDBweFxyXG4gIFxyXG4gIC5hcHAtbG9hZGVyIFxyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvdGhyZWUtZG90cy5zdmdcIilcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcclxuICAgIG1heC13aWR0aDogMTAwJVxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cclxuICAgIHdpZHRoOiA4MHB4XHJcbiAgICBoZWlnaHQ6IDgwcHhcclxuICAgIG1hcmdpbi10b3A6IDgwcHhcclxuICAiXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 10385:
/*!****************************************************************************!*\
  !*** ./src/app/shared/directives/carousel-item/carousel-item.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselItemDirective": () => (/* binding */ CarouselItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class CarouselItemDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
CarouselItemDirective.ɵfac = function CarouselItemDirective_Factory(t) { return new (t || CarouselItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
CarouselItemDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CarouselItemDirective, selectors: [["", ".carousel-item", ""]] });


/***/ }),

/***/ 3750:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/directives/info-popup/info-button/info-button.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoButtonComponent": () => (/* binding */ InfoButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


const _c0 = ["*"];
class InfoButtonComponent {
    constructor() {
        this.infoButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    toggleInfoByClick() {
        this.infoButtonClicked.emit();
    }
}
InfoButtonComponent.ɵfac = function InfoButtonComponent_Factory(t) { return new (t || InfoButtonComponent)(); };
InfoButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoButtonComponent, selectors: [["app-info-button"]], outputs: { infoButtonClicked: "infoButtonClicked" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "w-8", "h-8", "text-center", 3, "click"]], template: function InfoButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoButtonComponent_Template_div_click_0_listener() { return ctx.toggleInfoByClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".info-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 16px;\n  margin-left: 8px;\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJpbmZvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 22893:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/info-popup/info-popup.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPopupDirective": () => (/* binding */ InfoPopupDirective)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ 87636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _info_button_info_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-button/info-button.component */ 3750);







class InfoPopupDirective {
    constructor(infoButton, overlay, vcr) {
        this.infoButton = infoButton;
        this.overlay = overlay;
        this.vcr = vcr;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() {
        this.createOverlay();
    }
    ngAfterViewInit() {
        this.infoButton.infoButtonClicked.asObservable().subscribe(() => {
            this.attachOverlay();
        });
    }
    ngOnDestroy() {
        this.detachOverlay();
        this.unsubscribe.next({});
        this.unsubscribe.complete();
    }
    createOverlay() {
        const scrollStrategy = this.overlay.scrollStrategies.reposition();
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.label)
            .withPositions([
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
        ])
            .withPush(false);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy,
            hasBackdrop: true,
        });
        this.overlayRef
            .backdropClick()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribe))
            .subscribe(() => {
            this.detachOverlay();
        });
    }
    attachOverlay() {
        if (!this.overlayRef.hasAttached()) {
            const periodSelectorPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.TemplatePortal(this.appInfoPopup, this.vcr);
            this.overlayRef.attach(periodSelectorPortal);
        }
    }
    detachOverlay() {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        }
    }
}
InfoPopupDirective.ɵfac = function InfoPopupDirective_Factory(t) { return new (t || InfoPopupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_info_button_info_button_component__WEBPACK_IMPORTED_MODULE_0__.InfoButtonComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef)); };
InfoPopupDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: InfoPopupDirective, selectors: [["", "appInfoPopup", ""]], inputs: { appInfoPopup: "appInfoPopup", label: "label" } });


/***/ }),

/***/ 63223:
/*!*******************************************************************!*\
  !*** ./src/app/shared/directives/info-popup/info-popup.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPopupModule": () => (/* binding */ InfoPopupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var projects_icon_library_src_lib_icon_library_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/icon-library/src/lib/icon-library.module */ 16551);
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info/info.component */ 12121);
/* harmony import */ var _info_popup_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-popup.directive */ 22893);
/* harmony import */ var _info_button_info_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-button/info-button.component */ 3750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class InfoPopupModule {
}
InfoPopupModule.ɵfac = function InfoPopupModule_Factory(t) { return new (t || InfoPopupModule)(); };
InfoPopupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InfoPopupModule });
InfoPopupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            projects_icon_library_src_lib_icon_library_module__WEBPACK_IMPORTED_MODULE_0__.IconLibraryModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InfoPopupModule, { declarations: [_info_info_component__WEBPACK_IMPORTED_MODULE_1__.InfoComponent,
        _info_button_info_button_component__WEBPACK_IMPORTED_MODULE_3__.InfoButtonComponent,
        _info_popup_directive__WEBPACK_IMPORTED_MODULE_2__.InfoPopupDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        projects_icon_library_src_lib_icon_library_module__WEBPACK_IMPORTED_MODULE_0__.IconLibraryModule], exports: [_info_info_component__WEBPACK_IMPORTED_MODULE_1__.InfoComponent,
        _info_button_info_button_component__WEBPACK_IMPORTED_MODULE_3__.InfoButtonComponent,
        _info_popup_directive__WEBPACK_IMPORTED_MODULE_2__.InfoPopupDirective] }); })();


/***/ }),

/***/ 12121:
/*!*********************************************************************!*\
  !*** ./src/app/shared/directives/info-popup/info/info.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoComponent": () => (/* binding */ InfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

const _c0 = ["*"];
class InfoComponent {
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "info-popover", "mat-body-1", "mat-elevation-z3"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".info-popover[_ngcontent-%COMP%] {\n  word-break: break-word;\n  z-index: 1001;\n  max-width: 75%;\n  margin-bottom: 16px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtBQUFGIiwiZmlsZSI6ImluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1wb3BvdmVyIHtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIHotaW5kZXg6IDEwMDE7XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 54363:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/daysAgo/days-ago.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaysAgoPipe": () => (/* binding */ DaysAgoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DaysAgoPipe {
    transform(value) {
        var _value = Number(value);
        var dif = Math.floor(((Date.now() - _value) / 1000) / 86400);
        if (dif < 30) {
            return this.convertToNiceDate(value);
        }
        else {
            return '';
        }
        // else{
        //     var datePipe = new DatePipe("en-US");
        //     value = datePipe.transform(value, 'MMM-dd-yyyy');
        //     return value;
        // }
    }
    convertToNiceDate(time) {
        var date = new Date(time), diff = (((new Date()).getTime() - date.getTime()) / 1000), daydiff = Math.floor(diff / 86400);
        if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31)
            return '';
        return daydiff == 0 && (diff < 60 && "Just now" ||
            diff < 120 && "1 minute ago" ||
            diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
            diff < 7200 && "1 hour ago" ||
            diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
            daydiff == 1 && "Yesterday" ||
            daydiff < 7 && daydiff + " days ago" ||
            daydiff < 31 && Math.ceil(daydiff / 7) + " week(s) ago";
    }
}
DaysAgoPipe.ɵfac = function DaysAgoPipe_Factory(t) { return new (t || DaysAgoPipe)(); };
DaysAgoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "daysAgo", type: DaysAgoPipe, pure: true });


/***/ }),

/***/ 43794:
/*!*************************************************************************!*\
  !*** ./src/app/shared/pipes/diffDateToToday/diff-date-to-today.pipe.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiffDateToTodayPipe": () => (/* binding */ DiffDateToTodayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DiffDateToTodayPipe {
    transform(value) {
        const then = new Date(value);
        const today = new Date();
        var diff = Math.round((then.valueOf() - today.valueOf()) / (1000 * 3600 * 24));
        return diff;
    }
}
DiffDateToTodayPipe.ɵfac = function DiffDateToTodayPipe_Factory(t) { return new (t || DiffDateToTodayPipe)(); };
DiffDateToTodayPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "diffDateToToday", type: DiffDateToTodayPipe, pure: true });


/***/ }),

/***/ 27641:
/*!******************************************************************!*\
  !*** ./src/app/shared/pipes/number2string/number2string.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Number2stringPipe": () => (/* binding */ Number2stringPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class Number2stringPipe {
    transform(value) {
        return 'null';
    }
}
Number2stringPipe.ɵfac = function Number2stringPipe_Factory(t) { return new (t || Number2stringPipe)(); };
Number2stringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "number2string", type: Number2stringPipe, pure: true });


/***/ }),

/***/ 54584:
/*!******************************************************************!*\
  !*** ./src/app/shared/pipes/string2number/string2number.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "String2numberPipe": () => (/* binding */ String2numberPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class String2numberPipe {
    transform(value) {
        return +value;
    }
}
String2numberPipe.ɵfac = function String2numberPipe_Factory(t) { return new (t || String2numberPipe)(); };
String2numberPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "string2number", type: String2numberPipe, pure: true });


/***/ }),

/***/ 75003:
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/to-array/to-array.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToArrayPipe": () => (/* binding */ ToArrayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ToArrayPipe {
    transform(input) {
        if (!this.isObject(input)) {
            return input;
        }
        const output = Object.keys(input).map(value => input[value]);
        return Object.keys(input).map(value => input[value]);
    }
    isObject(value) {
        return value !== null && typeof value === 'object';
    }
}
ToArrayPipe.ɵfac = function ToArrayPipe_Factory(t) { return new (t || ToArrayPipe)(); };
ToArrayPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toArray", type: ToArrayPipe, pure: true });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ 94553);
/* harmony import */ var _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal/modal.module */ 55811);
/* harmony import */ var _components_card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card/card.module */ 89024);
/* harmony import */ var projects_icon_library_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/icon-library/src/public-api */ 76226);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _components_headline_stepper_headline_stepper_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/headline-stepper/headline-stepper.module */ 72867);
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/progress-bar/progress-bar.component */ 88632);
/* harmony import */ var _pipes_number2string_number2string_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/number2string/number2string.pipe */ 27641);
/* harmony import */ var _pipes_string2number_string2number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/string2number/string2number.pipe */ 54584);
/* harmony import */ var _pipes_diffDateToToday_diff_date_to_today_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/diffDateToToday/diff-date-to-today.pipe */ 43794);
/* harmony import */ var _pipes_daysAgo_days_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/daysAgo/days-ago.pipe */ 54363);
/* harmony import */ var _pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/to-array/to-array.pipe */ 75003);
/* harmony import */ var _components_image_base64_upload_image_base64_upload_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/image-base64-upload/image-base64-upload.module */ 19031);
/* harmony import */ var _components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/image-slider/image-slider.component */ 62817);
/* harmony import */ var _directives_carousel_item_carousel_item_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/carousel-item/carousel-item.directive */ 10385);
/* harmony import */ var projects_image_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! projects/image-carousel/src/public-api */ 59260);
/* harmony import */ var _directives_info_popup_info_popup_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/info-popup/info-popup.module */ 63223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);

























class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            // shared
            _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_0__.ModalModule,
            _components_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule,
            _components_image_base64_upload_image_base64_upload_module__WEBPACK_IMPORTED_MODULE_10__.ImageBase64UploadModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule,
            // library
            projects_icon_library_src_public_api__WEBPACK_IMPORTED_MODULE_2__.IconLibraryModule,
            projects_image_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_13__.IvyCarouselModule,
            // Mat
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
            _directives_info_popup_info_popup_module__WEBPACK_IMPORTED_MODULE_14__.InfoPopupModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        // shared
        _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_0__.ModalModule,
        _components_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule,
        _components_headline_stepper_headline_stepper_module__WEBPACK_IMPORTED_MODULE_3__.HeadlineStepperModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule,
        _components_image_base64_upload_image_base64_upload_module__WEBPACK_IMPORTED_MODULE_10__.ImageBase64UploadModule,
        // library
        projects_icon_library_src_public_api__WEBPACK_IMPORTED_MODULE_2__.IconLibraryModule,
        projects_image_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_13__.IvyCarouselModule,
        // Mat
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _directives_info_popup_info_popup_module__WEBPACK_IMPORTED_MODULE_14__.InfoPopupModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarComponent,
        _components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_11__.ImageSliderComponent,
        _directives_carousel_item_carousel_item_directive__WEBPACK_IMPORTED_MODULE_12__.CarouselItemDirective,
        _pipes_number2string_number2string_pipe__WEBPACK_IMPORTED_MODULE_5__.Number2stringPipe,
        _pipes_string2number_string2number_pipe__WEBPACK_IMPORTED_MODULE_6__.String2numberPipe,
        _pipes_diffDateToToday_diff_date_to_today_pipe__WEBPACK_IMPORTED_MODULE_7__.DiffDateToTodayPipe,
        _pipes_daysAgo_days_ago_pipe__WEBPACK_IMPORTED_MODULE_8__.DaysAgoPipe,
        _pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_9__.ToArrayPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        // shared
        _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_0__.ModalModule,
        _components_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule,
        _components_image_base64_upload_image_base64_upload_module__WEBPACK_IMPORTED_MODULE_10__.ImageBase64UploadModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule,
        // library
        projects_icon_library_src_public_api__WEBPACK_IMPORTED_MODULE_2__.IconLibraryModule,
        projects_image_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_13__.IvyCarouselModule,
        // Mat
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
        _directives_info_popup_info_popup_module__WEBPACK_IMPORTED_MODULE_14__.InfoPopupModule], exports: [
        // pipes
        _pipes_diffDateToToday_diff_date_to_today_pipe__WEBPACK_IMPORTED_MODULE_7__.DiffDateToTodayPipe,
        _pipes_daysAgo_days_ago_pipe__WEBPACK_IMPORTED_MODULE_8__.DaysAgoPipe,
        _pipes_to_array_to_array_pipe__WEBPACK_IMPORTED_MODULE_9__.ToArrayPipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        // shared
        _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_0__.ModalModule,
        _components_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule,
        _components_headline_stepper_headline_stepper_module__WEBPACK_IMPORTED_MODULE_3__.HeadlineStepperModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule,
        _components_image_base64_upload_image_base64_upload_module__WEBPACK_IMPORTED_MODULE_10__.ImageBase64UploadModule,
        // library
        projects_icon_library_src_public_api__WEBPACK_IMPORTED_MODULE_2__.IconLibraryModule,
        projects_image_carousel_src_public_api__WEBPACK_IMPORTED_MODULE_13__.IvyCarouselModule,
        // Mat
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__.MatStepperModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule,
        _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarComponent,
        _components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_11__.ImageSliderComponent,
        _pipes_string2number_string2number_pipe__WEBPACK_IMPORTED_MODULE_6__.String2numberPipe,
        _directives_info_popup_info_popup_module__WEBPACK_IMPORTED_MODULE_14__.InfoPopupModule] }); })();


/***/ }),

/***/ 41128:
/*!***********************************************!*\
  !*** ./src/app/store/kat-store/kat.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatModule": () => (/* binding */ KatModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/effects */ 93928);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers */ 62800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);









class KatModule {
}
KatModule.ɵfac = function KatModule_Factory(t) { return new (t || KatModule)(); };
KatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: KatModule });
KatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService
    ], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.StoreModule.forFeature(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Kat, _store_reducers__WEBPACK_IMPORTED_MODULE_3__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.EffectsModule.forFeature([_store_effects__WEBPACK_IMPORTED_MODULE_2__.Effects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](KatModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 19502:
/*!**************************************************!*\
  !*** ./src/app/store/kat-store/store/actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadBetriebsstoffe": () => (/* binding */ loadBetriebsstoffe),
/* harmony export */   "loadedBetriebsstoffe": () => (/* binding */ loadedBetriebsstoffe),
/* harmony export */   "loadDienststellen": () => (/* binding */ loadDienststellen),
/* harmony export */   "dienststellenLoaded": () => (/* binding */ dienststellenLoaded),
/* harmony export */   "loadFunktionen": () => (/* binding */ loadFunktionen),
/* harmony export */   "loadedFunktionen": () => (/* binding */ loadedFunktionen),
/* harmony export */   "loadKennungen": () => (/* binding */ loadKennungen),
/* harmony export */   "loadedKennungen": () => (/* binding */ loadedKennungen),
/* harmony export */   "loadPruefvermerke": () => (/* binding */ loadPruefvermerke),
/* harmony export */   "pruefvermerkeLoaded": () => (/* binding */ pruefvermerkeLoaded),
/* harmony export */   "loadPruefvermerkKategorien": () => (/* binding */ loadPruefvermerkKategorien),
/* harmony export */   "pruefvermerkKategorienLoaded": () => (/* binding */ pruefvermerkKategorienLoaded),
/* harmony export */   "loadAllShip": () => (/* binding */ loadAllShip),
/* harmony export */   "allShipLoaded": () => (/* binding */ allShipLoaded),
/* harmony export */   "loadAllStatus": () => (/* binding */ loadAllStatus),
/* harmony export */   "loadedAllStatus": () => (/* binding */ loadedAllStatus),
/* harmony export */   "loadZaehlerstandstypen": () => (/* binding */ loadZaehlerstandstypen),
/* harmony export */   "zaehlerstandstypenLoaded": () => (/* binding */ zaehlerstandstypenLoaded),
/* harmony export */   "loadZwecke": () => (/* binding */ loadZwecke),
/* harmony export */   "loadedZwecke": () => (/* binding */ loadedZwecke)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

// betriebsstoffe
const loadBetriebsstoffe = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Betriebsstoffe");
const loadedBetriebsstoffe = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] Loaded Betriebsstoffe", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// dienststellen
const loadDienststellen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Dienststellen");
const dienststellenLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] Dienststellen Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// funktionen
const loadFunktionen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Funktionen");
const loadedFunktionen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] Loaded Funktionen", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// kennung
const loadKennungen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Kennungen");
const loadedKennungen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] Loaded Kennungen", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// pruefvermerkp
const loadPruefvermerke = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Pruefvermerke");
const pruefvermerkeLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] Pruefvermerke Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// pruefvermerkkategorien
const loadPruefvermerkKategorien = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load PruefvermerkKategorien");
const pruefvermerkKategorienLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] PruefvermerkKategorien Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// ships
const loadAllShip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Ships");
const allShipLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] Ships Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// status
const loadAllStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Status");
const loadedAllStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Status] Loaded Status", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// zaehlerstandstypen
const loadZaehlerstandstypen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Zaehlerstandstypen");
const zaehlerstandstypenLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] Zaehlerstandstypen Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// zweck
const loadZwecke = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Zwecke");
const loadedZwecke = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Kat Effect] Loaded Zwecke", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 93928:
/*!**************************************************!*\
  !*** ./src/app/store/kat-store/store/effects.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Effects": () => (/* binding */ Effects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 94612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 19502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);






class Effects {
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
        this.loadShips$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadAllShip), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getSchiffe()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((shipSelection) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.allShipLoaded)({ shipSelection })));
        });
        this.loadPruefvermerke$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadPruefvermerke), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getPruefvermerke()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((pruefvermerke) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.pruefvermerkeLoaded)({ pruefvermerke })));
        });
        this.loadPruefvermerkKategorien$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadPruefvermerkKategorien), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getPruefvermerkKategorien()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((pruefvermerkKategorien) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.pruefvermerkKategorienLoaded)({ pruefvermerkKategorien })));
        });
        this.loadZaehlerstandstypen$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadZaehlerstandstypen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getZaehlerstandstypen()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((zaehlerstandstypen) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.zaehlerstandstypenLoaded)({ zaehlerstandstypen })));
        });
        this.loadDienststellen$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadDienststellen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getDienststellen()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((dienststellen) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.dienststellenLoaded)({ dienststellen })));
        });
        this.loadBetriebsstoffe$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadBetriebsstoffe), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getBetriebsstoffe()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => console.log(data)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((betriebsstoffe) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.loadedBetriebsstoffe)({ betriebsstoffe })));
        });
        this.loadFunktionen$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadFunktionen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getFunktionen()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((funktionen) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.loadedFunktionen)({ funktionen })));
        });
        this.loadKennungen$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadKennungen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getKennungen()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((kennungen) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.loadedKennungen)({ kennungen })));
        });
        // status
        this.loadAllStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadAllStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getStatus()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((status) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.loadedAllStatus)({ status })));
        });
        this.loadZwecke$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadZwecke), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getZwecke()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((zwecke) => (0,_actions__WEBPACK_IMPORTED_MODULE_0__.loadedZwecke)({ zwecke })));
        });
    }
}
Effects.ɵfac = function Effects_Factory(t) { return new (t || Effects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService)); };
Effects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: Effects, factory: Effects.ɵfac });


/***/ }),

/***/ 62800:
/*!***************************************************!*\
  !*** ./src/app/store/kat-store/store/reducers.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialDataState": () => (/* binding */ initialDataState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 19502);


const initialDataState = {
    shipSelection: undefined,
    pruefvermerke: undefined,
    pruefvermerkKategorien: undefined,
    zaehlerstandstypen: undefined,
    dienststellen: undefined,
    checklistitems: undefined,
    betriebsstoffe: undefined,
    funktionen: undefined,
    kennungen: undefined,
    status: undefined,
    zwecke: undefined,
    isAllDataLoaded: false
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialDataState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.allShipLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { shipSelection: action.shipSelection });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.pruefvermerkeLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { pruefvermerke: action.pruefvermerke });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.pruefvermerkKategorienLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { pruefvermerkKategorien: action.pruefvermerkKategorien });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.zaehlerstandstypenLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { zaehlerstandstypen: action.zaehlerstandstypen });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.dienststellenLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { dienststellen: action.dienststellen });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadedBetriebsstoffe, (state, action) => {
    return Object.assign(Object.assign({}, state), { betriebsstoffe: action.betriebsstoffe });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadedFunktionen, (state, action) => {
    return Object.assign(Object.assign({}, state), { funktionen: action.funktionen });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadedKennungen, (state, action) => {
    return Object.assign(Object.assign({}, state), { kennungen: action.kennungen });
}), 
// status
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadedAllStatus, (state, action) => {
    return Object.assign(Object.assign({}, state), { status: action.status });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions__WEBPACK_IMPORTED_MODULE_0__.loadedZwecke, (state, action) => {
    return Object.assign(Object.assign({}, state), { zwecke: action.zwecke });
}));


/***/ }),

/***/ 53288:
/*!*******************************************************!*\
  !*** ./src/app/store/positionreport-store/actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAllData": () => (/* binding */ loadAllData),
/* harmony export */   "allDataLoaded": () => (/* binding */ allDataLoaded),
/* harmony export */   "insertData": () => (/* binding */ insertData),
/* harmony export */   "insertDataSuccess": () => (/* binding */ insertDataSuccess),
/* harmony export */   "updateData": () => (/* binding */ updateData),
/* harmony export */   "deleteData": () => (/* binding */ deleteData),
/* harmony export */   "resetStore": () => (/* binding */ resetStore)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

// load data
const loadAllData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Data Resolver] Load All Lage", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// store loaded data
const allDataLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Data Effect] All Lage Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Position Component] insert PositionReport", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertDataSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Position Component] insert PositionReport Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Position Component] update PositionReport", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Position Component] delete PositionReport", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Topnav] Store Reset");


/***/ }),

/***/ 11312:
/*!*******************************************************!*\
  !*** ./src/app/store/positionreport-store/adapter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialDataState": () => (/* binding */ initialDataState),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectAll": () => (/* binding */ selectAll)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ 80273);

const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__.createEntityAdapter)({
    selectId: data => data.id
});
const initialDataState = adapter.getInitialState({});
const { selectIds, selectAll } = adapter.getSelectors();


/***/ }),

/***/ 36205:
/*!*****************************************************!*\
  !*** ./src/app/store/positionreport-store/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionActions": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "PositionResolver": () => (/* reexport module object */ _resolver__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "PositionSelectors": () => (/* reexport module object */ _selectors__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 53288);
/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolver */ 80450);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ 6916);






/***/ }),

/***/ 80450:
/*!********************************************************!*\
  !*** ./src/app/store/positionreport-store/resolver.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataResolver": () => (/* binding */ DataResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 36205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 86710);




class DataResolver {
    constructor(store) {
        this.store = store;
        this.loading = false;
    }
    resolve(route, state) {
        return this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
            if (!this.loading) {
                this.loading = true;
                this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.PositionActions.loadAllData({ id_ship: route.params[route.data.param] }));
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.loading = false));
    }
}
DataResolver.ɵfac = function DataResolver_Factory(t) { return new (t || DataResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
DataResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DataResolver, factory: DataResolver.ɵfac });


/***/ }),

/***/ 6916:
/*!*********************************************************!*\
  !*** ./src/app/store/positionreport-store/selectors.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectDataState": () => (/* binding */ selectDataState),
/* harmony export */   "selectAllData": () => (/* binding */ selectAllData),
/* harmony export */   "selectDataByPatrol": () => (/* binding */ selectDataByPatrol),
/* harmony export */   "selectDataById": () => (/* binding */ selectDataById)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapter */ 11312);



const selectDataState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Positionreport);
// export const isDataLoaded = createSelector(
//     selectDataState,
//     // state => state.isAllDataLoaded
// )
const selectAllData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectDataState, _adapter__WEBPACK_IMPORTED_MODULE_1__.selectAll);
const selectDataByPatrol = (id_streife) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAllData, data => data.filter(el => el.id_streife == id_streife));
const selectDataById = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAllData, data => data.find(el => el.id == id));
// export const selectData = createSelector(
//     selectAllData,
//     data => data.filter(el => el.type == 'data')
// )
// export const selectDataCount = createSelector(
//     selectData,
//     data => data.length
// )


/***/ }),

/***/ 63876:
/*!********************************************!*\
  !*** ./src/app/store/root-store.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootStoreModule": () => (/* binding */ RootStoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ 93572);
/* harmony import */ var _root_store_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root-store.state */ 28795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);









class RootStoreModule {
}
RootStoreModule.ɵfac = function RootStoreModule_Factory(t) { return new (t || RootStoreModule)(); };
RootStoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RootStoreModule });
RootStoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            // ShipSelectionModule,
            // StoreModule.forRoot({}),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.StoreModule.forRoot(_root_store_state__WEBPACK_IMPORTED_MODULE_0__.reducers, {
                metaReducers: _root_store_state__WEBPACK_IMPORTED_MODULE_0__.metaReducers,
                runtimeChecks: {
                    strictStateImmutability: true
                }
            }),
            // StoreRouterConnectingModule.forRoot({ 
            //   stateKey: 'router', 
            //   routerState: RouterState.Minimal 
            // }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__.StoreDevtoolsModule.instrument({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forRoot([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RootStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_3__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsRootModule] }); })();


/***/ }),

/***/ 28795:
/*!*******************************************!*\
  !*** ./src/app/store/root-store.state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "logger": () => (/* binding */ logger),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ 39667);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);


const reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__.routerReducer
};
function logger(reducer) {
    return (state, action) => {
        // console.log(`state before: `, state)
        // console.log(`action:       `, action)
        return reducer(state, action);
    };
}
const metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [logger] : [];


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    base_href: '/polwspweb/',
    loginServerUrl: 'https://map-appiis-1-v.int.polizei.berlin.de/login/Login.asmx/login',
    packageid: 'de.berlin.polizei.polwsp',
    positionLogInterval: 5,
    currentPositionLogInterval: 1
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));
document.addEventListener('deviceready', () => {
    console.log('deviceready');
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map