(self["webpackChunkbordbuch_wsp_final"] = self["webpackChunkbordbuch_wsp_final"] || []).push([["default-src_app_core_navbar_tabbar_tabbar_module_ts-src_app_store_kat-store_index_ts-src_app_-a67d26"],{

/***/ 64697:
/*!********************************************************!*\
  !*** ./src/app/core/navbar/tabbar/tabbar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbarComponent": () => (/* binding */ TabbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


const _c0 = ["*"];
class TabbarComponent {
    constructor() {
        this.tabs = [];
        this.labelField = '';
        this.onTabSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    select(tab) {
        console.log(tab);
        this.onTabSelect.emit(tab);
    }
}
TabbarComponent.ɵfac = function TabbarComponent_Factory(t) { return new (t || TabbarComponent)(); };
TabbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabbarComponent, selectors: [["tabbar"]], inputs: { tabs: "tabs", labelField: "labelField", active: "active" }, outputs: { onTabSelect: "onTabSelect" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "absolute", "h-12", "w-full", "px-4", "bottom-0", "bg-white", "dark:bg-gray-900"]], template: function TabbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["nav[_ngcontent-%COMP%] {\n\n    bottom: 0px;\n\n    display: flex;\n\n    height: 4rem;\n\n    width: 100%;\n\n    align-items: center\n}\n\n.active[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgba(147, 197, 253, var(--tw-text-opacity))\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUFBLFlBQUE7O0lBQUEsY0FBQTs7SUFBQSxhQUFBOztJQUFBLFlBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBIiwiZmlsZSI6InRhYmJhci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 69162:
/*!*****************************************************!*\
  !*** ./src/app/core/navbar/tabbar/tabbar.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbarModule": () => (/* binding */ TabbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _tabbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbar.component */ 64697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class TabbarModule {
}
TabbarModule.ɵfac = function TabbarModule_Factory(t) { return new (t || TabbarModule)(); };
TabbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TabbarModule });
TabbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabbarModule, { declarations: [_tabbar_component__WEBPACK_IMPORTED_MODULE_0__.TabbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_tabbar_component__WEBPACK_IMPORTED_MODULE_0__.TabbarComponent] }); })();


/***/ }),

/***/ 22134:
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkStateForEmptyArrays": () => (/* binding */ checkStateForEmptyArrays),
/* harmony export */   "dateToLocalISOString": () => (/* binding */ dateToLocalISOString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "isNull": () => (/* binding */ isNull),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isNumberFinite": () => (/* binding */ isNumberFinite),
/* harmony export */   "isPositive": () => (/* binding */ isPositive),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isNil": () => (/* binding */ isNil),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "toDecimal": () => (/* binding */ toDecimal),
/* harmony export */   "testFunction": () => (/* binding */ testFunction)
/* harmony export */ });
function checkStateForEmptyArrays(value) {
    if (isArray(value)) {
        return value;
    }
    else {
        return [];
    }
}
function dateToLocalISOString(dt) {
    dt.setHours(new Date().getHours() + 2);
    return dt.toISOString().substring(0, 16);
}
function isUndefined(value) {
    return typeof value === 'undefined';
}
function isNull(value) {
    return value === null;
}
function isNumber(value) {
    return typeof value === 'number';
}
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
// Not strict positive
function isPositive(value) {
    return value >= 0;
}
function isInteger(value) {
    // No rest, is an integer
    return value % 1 === 0;
}
function isNil(value) {
    return value === null || typeof value === 'undefined';
}
function isString(value) {
    return typeof value === 'string';
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === 'function';
}
function toDecimal(value, decimal) {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
function testFunction(cb) {
    console.time('duration');
    for (var i = 0; i < 1000; i++) {
        // this.funcToTest()
        cb; // callbackFunction
    }
    ;
    console.timeEnd('duration');
}


/***/ }),

/***/ 66704:
/*!******************************************!*\
  !*** ./src/app/store/kat-store/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatAction": () => (/* reexport module object */ _store_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "KatResolver": () => (/* reexport module object */ _resolver__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "KatSelectors": () => (/* reexport module object */ _store_selectors__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "KatState": () => (/* reexport module object */ _state__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions */ 19502);
/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolver */ 88223);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/selectors */ 67652);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ 39899);







/***/ }),

/***/ 88223:
/*!*********************************************!*\
  !*** ./src/app/store/kat-store/resolver.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatResolver": () => (/* binding */ KatResolver)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 66704);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/selectors */ 67652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);






class KatResolver {
    constructor(store) {
        this.store = store;
        this.loading = false;
    }
    resolve(route, state) {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.isKatLoaded), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((isKatLoaded) => {
            if (!this.loading && !isKatLoaded) {
                this.loading = true;
                setTimeout(() => {
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadAllShip());
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadPruefvermerke());
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadPruefvermerkKategorien());
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadZaehlerstandstypen());
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadDienststellen());
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadBetriebsstoffe());
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadFunktionen());
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadKennungen());
                    this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.KatAction.loadZwecke());
                }, 1000);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(isKatLoaded => isKatLoaded), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.loading = false));
    }
}
KatResolver.ɵfac = function KatResolver_Factory(t) { return new (t || KatResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
KatResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: KatResolver, factory: KatResolver.ɵfac });


/***/ }),

/***/ 39899:
/*!******************************************!*\
  !*** ./src/app/store/kat-store/state.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 46534:
/*!**********************************************************************!*\
  !*** ./src/app/store/ship-selection-store/ship-selection.actions.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAllShip": () => (/* binding */ loadAllShip),
/* harmony export */   "allShipLoaded": () => (/* binding */ allShipLoaded)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

// load data
const loadAllShip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Load All Ship");
// store loaded data
const allShipLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Ship Effect] All Ship Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 53452:
/*!**********************************************************************!*\
  !*** ./src/app/store/ship-selection-store/ship-selection.adapter.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialDataState": () => (/* binding */ initialDataState),
/* harmony export */   "selectAll": () => (/* binding */ selectAll)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ 80273);

const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__.createEntityAdapter)();
const initialDataState = adapter.getInitialState({
    isAllDataLoaded: false
});
const { selectAll } = adapter.getSelectors();


/***/ }),

/***/ 46827:
/*!**********************************************************************!*\
  !*** ./src/app/store/ship-selection-store/ship-selection.effects.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipSelectionEffects": () => (/* binding */ ShipSelectionEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 94612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _ship_selection_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-selection.actions */ 46534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);






class ShipSelectionEffects {
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
        this.loadData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_ship_selection_actions__WEBPACK_IMPORTED_MODULE_0__.loadAllShip), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)(action => this.appService.getSchiffe()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((shipSelection) => (0,_ship_selection_actions__WEBPACK_IMPORTED_MODULE_0__.allShipLoaded)({ shipSelection })));
        });
    }
}
ShipSelectionEffects.ɵfac = function ShipSelectionEffects_Factory(t) { return new (t || ShipSelectionEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService)); };
ShipSelectionEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ShipSelectionEffects, factory: ShipSelectionEffects.ɵfac });


/***/ }),

/***/ 95162:
/*!*********************************************************************!*\
  !*** ./src/app/store/ship-selection-store/ship-selection.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipSelectionModule": () => (/* binding */ ShipSelectionModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ship_selection_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-selection.reducers */ 71574);
/* harmony import */ var _ship_selection_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-selection.effects */ 46827);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








// import { AppService } from 'src/app/core/services/app.service'
class ShipSelectionModule {
}
ShipSelectionModule.ɵfac = function ShipSelectionModule_Factory(t) { return new (t || ShipSelectionModule)(); };
ShipSelectionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShipSelectionModule });
ShipSelectionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
    // AppService
    ], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forFeature(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_2__.Features.ShipSelection, _ship_selection_reducers__WEBPACK_IMPORTED_MODULE_0__.shipSelectionReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature([_ship_selection_effects__WEBPACK_IMPORTED_MODULE_1__.ShipSelectionEffects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShipSelectionModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 71574:
/*!***********************************************************************!*\
  !*** ./src/app/store/ship-selection-store/ship-selection.reducers.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipSelectionReducer": () => (/* binding */ shipSelectionReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ship_selection_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-selection.actions */ 46534);
/* harmony import */ var _ship_selection_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-selection.adapter */ 53452);



const shipSelectionReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_ship_selection_adapter__WEBPACK_IMPORTED_MODULE_1__.initialDataState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_ship_selection_actions__WEBPACK_IMPORTED_MODULE_0__.allShipLoaded, (state, action) => _ship_selection_adapter__WEBPACK_IMPORTED_MODULE_1__.adapter.addMany(action.shipSelection, Object.assign(Object.assign({}, state), { isAllDataLoaded: true }))));


/***/ }),

/***/ 70479:
/*!**************************************************!*\
  !*** ./src/app/store/ship-store/ship.effects.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipEffects": () => (/* binding */ ShipEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 94612);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 28903);
/* harmony import */ var _ship_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.actions */ 97641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/app.service */ 84382);







class ShipEffects {
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
        this.loadShip$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadShip), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.getSchiff(action.id_ship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((ship) => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.shipLoaded({ ship })));
            }));
        });
        this.loadPatrol$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadPatrol), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.getStreifeVonSchiff(action.id_ship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((patrol) => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.patrolLoaded({ patrol })));
            }));
        });
        this.insertPatrol$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertPatrol), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.insertStreife(action.insert).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(id => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertPatrolSuccess({ action, id })));
            }));
        });
        this.updatePatrol$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.updatePatrol), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.updateStreife(action.update);
            }));
        });
        this.deletePatrol$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.deletePatrol), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.deleteStreife(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(status => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.deletePatrolSuccess({ status })));
            }));
        });
        this.loadReparaturen$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadReparaturen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.getReparaturen(action.id_ship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((reparaturen) => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.reparaturenLoaded({ reparaturen })));
            })
            // concatMap(action => this.appService.getReparaturen(action.id_ship)),
            // map((reparaturen: Reparatur[]) => ShipAction.reparaturenLoaded({ reparaturen }))
            );
        });
        this.insertReparatur$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertReparatur), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.insertReparatur(action.insert).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(id => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertReparaturSuccess({ action, id })));
            }));
        });
        // reparaturfotos
        this.downloadReparaturFotos$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_ship_actions__WEBPACK_IMPORTED_MODULE_1__.downloadReparaturFotos), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.concatMap)(action => this.appService.downloadReparaturFoto(action.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((fotos) => (0,_ship_actions__WEBPACK_IMPORTED_MODULE_1__.downloadReparaturFotosSuccess)({ fotos })));
        });
        this.uploadReparaturFoto$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_ship_actions__WEBPACK_IMPORTED_MODULE_1__.uploadReparaturFoto), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.uploadReparaturFoto(action.upload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((id) => (0,_ship_actions__WEBPACK_IMPORTED_MODULE_1__.uploadReparaturFotoSuccess)({ action, id })));
            }));
        });
        this.deleteReparaturFoto$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_ship_actions__WEBPACK_IMPORTED_MODULE_1__.deleteReparaturFoto), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.deleteReparaturFoto(action.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => (0,_ship_actions__WEBPACK_IMPORTED_MODULE_1__.deleteReparaturFotoSuccess)(action)));
            }));
        });
        // betankung
        this.loadBetankungen$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadBetankungen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.getBetankungen(action.id_ship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((betankungen) => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.betankungenLoaded({ betankungen })));
            }));
        });
        this.insertBetankung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertBetankung), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.insertBetankung(action.insert).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(id => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertBetankungSuccess({ action, id })));
            }));
        });
        this.updateBetankung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.updateBetankung), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.updateBetankung(action.update.changes);
            }));
        });
        this.deleteBetankung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.deleteBetankung), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.deleteBetankung(action.id);
            }));
        }, { dispatch: false });
        // tank
        this.loadTank$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadTank), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.getTanksVonSchiff(action.id_ship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tanks) => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadedTank({ tanks })));
            }));
        });
        // besatzung
        this.insertBesatzung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertPatrolBesatzung), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.insertBesatzung(action.insert).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(id => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertPatrolBesatzungSuccess({ action, id })));
            }));
        });
        this.updateBesatzung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.updatePatrolBesatzung), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.updateBesatzung(action.update.changes);
            }));
        });
        this.deleteBesatzung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.deletePatrolBesatzung), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.deleteBesatzung(action.id);
            }));
        }, { dispatch: false });
        // peilung
        this.loadPeilung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadPeilung), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.getPeilung(action.id_ship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((peilungen) => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadedPeilung({ peilungen })));
            }));
        });
        this.insertPeilung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertPeilung), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.insertPeilung(action.insert).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(id => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertPeilungSuccess({ action, id })));
            }));
        });
        this.updatePeilung$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.updatePeilung));
        });
        // checklist
        this.loadChecklist$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadChecklist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.getLastChecklist(action.id_ship).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((checklist) => ___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadedChecklist({ checklist })));
            }));
        });
        this.insertChecklist$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.insertChecklist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => {
                return this.appService.insertCheckliste(action.insert);
            }));
        });
    }
}
ShipEffects.ɵfac = function ShipEffects_Factory(t) { return new (t || ShipEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService)); };
ShipEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ShipEffects, factory: ShipEffects.ɵfac });


/***/ }),

/***/ 13021:
/*!*************************************************!*\
  !*** ./src/app/store/ship-store/ship.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipModule": () => (/* binding */ ShipModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);
/* harmony import */ var _ship_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.effects */ 70479);
/* harmony import */ var _ship_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.reducers */ 61617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);








class ShipModule {
}
ShipModule.ɵfac = function ShipModule_Factory(t) { return new (t || ShipModule)(); };
ShipModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShipModule });
ShipModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreModule.forFeature(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Ship, _ship_reducers__WEBPACK_IMPORTED_MODULE_2__.shipReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsModule.forFeature([_ship_effects__WEBPACK_IMPORTED_MODULE_1__.ShipEffects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShipModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 61617:
/*!***************************************************!*\
  !*** ./src/app/store/ship-store/ship.reducers.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialDataState": () => (/* binding */ initialDataState),
/* harmony export */   "shipReducer": () => (/* binding */ shipReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ 28903);



const initialDataState = {
    ship: undefined,
    patrol: undefined,
    // patrol: { id_ship: '', purpose: '', status: 'In Vorbereitung', crew: [], start: '', end: '', identifier: ''},
    isAllDataLoaded: false
};
const shipReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialDataState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.shipLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { ship: action.ship });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.patrolLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { patrol: action.patrol });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.initializePatrol, (state, action) => {
    let patrol = Object.assign({}, action.initialize);
    return Object.assign(Object.assign({}, state), { patrol: patrol });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.insertPatrolSuccess, (state, action) => {
    let patrol = Object.assign({}, action.action.insert, { id: action.id });
    return Object.assign(Object.assign({}, state), { patrol: patrol });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.updatePatrol, (state, action) => {
    let patrol = action.update;
    return Object.assign(Object.assign({}, state), { patrol: patrol });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.deletePatrolSuccess, (state, action) => {
    return Object.assign(Object.assign({}, state), { patrol: undefined });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.reparaturenLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { reparaturen: action.reparaturen });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.betankungenLoaded, (state, action) => {
    return Object.assign(Object.assign({}, state), { betankungen: action.betankungen });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.loadedTank, (state, action) => {
    return Object.assign(Object.assign({}, state), { tanks: action.tanks });
}), 
// besatzung
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.insertPatrolBesatzungSuccess, (state, action) => {
    var _a;
    let besatzung = Object.assign({}, action.action.insert, { id: action.id });
    let clearedBesatzung = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)((_a = state.patrol) === null || _a === void 0 ? void 0 : _a.besatzung);
    clearedBesatzung = [...clearedBesatzung, ...[besatzung]];
    return Object.assign(Object.assign({}, state), { patrol: Object.assign({}, state.patrol, { besatzung: clearedBesatzung }) });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.updatePatrolBesatzung, (state, action) => {
    var _a;
    let clearedBesatzung = (_a = state.patrol) === null || _a === void 0 ? void 0 : _a.besatzung.filter(el => el.id != action.update.changes.id);
    clearedBesatzung.push(action.update.changes);
    return Object.assign(Object.assign({}, state), { patrol: Object.assign({}, state.patrol, { besatzung: clearedBesatzung }) });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.deletePatrolBesatzung, (state, action) => {
    var _a;
    const newState = (_a = state.patrol) === null || _a === void 0 ? void 0 : _a.besatzung.filter(el => el.id !== action.id);
    return Object.assign(Object.assign({}, state), { patrol: Object.assign({}, state.patrol, { besatzung: newState }) });
}), 
// betankung
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.insertBetankungSuccess, (state, action) => {
    let betankung = Object.assign({}, action.action.insert, { id: action.id });
    let clearedBetankung = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.betankungen);
    clearedBetankung = [...clearedBetankung, ...[betankung]];
    return Object.assign(Object.assign({}, state), { betankungen: clearedBetankung });
}), 
// pruefvermerk
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.insertReparaturSuccess, (state, action) => {
    let pruefvermerk = Object.assign({}, action.action.insert, { id: action.id });
    let clearedPruefvermerk = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.reparaturen);
    clearedPruefvermerk = [...clearedPruefvermerk, ...[pruefvermerk]];
    return Object.assign(Object.assign({}, state), { reparaturen: clearedPruefvermerk });
}), 
//peilungen
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.loadedPeilung, (state, action) => {
    return Object.assign(Object.assign({}, state), { peilungen: action.peilungen });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.insertPeilungSuccess, (state, action) => {
    let peilung = Object.assign({}, action.action.insert, { id: action.id });
    let clearedPeilung = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.peilungen);
    clearedPeilung = clearedPeilung === null || clearedPeilung === void 0 ? void 0 : clearedPeilung.filter(el => el.bezeichnung != action.action.insert.bezeichnung);
    clearedPeilung = [...clearedPeilung, ...[peilung]];
    return Object.assign(Object.assign({}, state), { peilungen: clearedPeilung });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.updatePeilung, (state, action) => {
    let clearedPeilungen = [...state.peilungen];
    clearedPeilungen = clearedPeilungen.filter(el => el.id != action.peilung.id);
    clearedPeilungen.push(action.peilung);
    // ggf. siehe ipdateChecklist
    return Object.assign(Object.assign({}, state), { peilungen: clearedPeilungen });
}), 
// checklist
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.loadedChecklist, (state, action) => {
    return Object.assign(Object.assign({}, state), { checklist: action.checklist });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.updateChecklist, (state, action) => {
    let checklist = Object.assign({}, action.update);
    console.log(checklist);
    // let cleared: Checklist | undefined = state.checklist
    // if (cleared) {
    //     cleared.checklistItems = cleared.checklistItems?.filter(el => el.id != action.updateItem.id)
    //     cleared.checklistItems = [...cleared.checklistItems!, ...[checklist]]
    // }
    return Object.assign(Object.assign({}, state), { checklist: checklist });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.resetStore, (state, action) => {
    // return {
    //     ship: undefined,
    //     isAllDataLoaded: false
    // }
    return Object.assign({}, initialDataState);
}), 
// reparaturfotos
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.downloadReparaturFotosSuccess, (state, action) => {
    return Object.assign(Object.assign({}, state), { reparaturfotos: action.fotos });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.uploadReparaturFotoSuccess, (state, action) => {
    let reparaturfoto = Object.assign({}, action.action.upload, { id: action.id });
    let cleared = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.reparaturfotos);
    cleared = cleared === null || cleared === void 0 ? void 0 : cleared.filter(el => el.id != action.action.upload.id);
    cleared = (cleared) ? [...cleared, ...[reparaturfoto]] : [reparaturfoto];
    return Object.assign(Object.assign({}, state), { reparaturfotos: cleared });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(___WEBPACK_IMPORTED_MODULE_1__.ShipAction.deleteReparaturFotoSuccess, (state, action) => {
    let cleared = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.reparaturfotos);
    cleared = cleared === null || cleared === void 0 ? void 0 : cleared.filter(el => el.id != action.id);
    cleared = [...cleared];
    return Object.assign(Object.assign({}, state), { reparaturfotos: cleared });
}));


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_navbar_tabbar_tabbar_module_ts-src_app_store_kat-store_index_ts-src_app_-a67d26.js.map