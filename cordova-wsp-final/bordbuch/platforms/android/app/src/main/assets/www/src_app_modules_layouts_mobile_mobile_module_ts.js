(self["webpackChunkbordbuch_wsp_final"] = self["webpackChunkbordbuch_wsp_final"] || []).push([["src_app_modules_layouts_mobile_mobile_module_ts"],{

/***/ 80273:
/*!************************************************************************!*\
  !*** ./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dictionary": () => (/* binding */ Dictionary),
/* harmony export */   "createEntityAdapter": () => (/* binding */ createEntityAdapter)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState = {}) {
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState };
}

function createSelectorsFactory() {
    function getSelectors(selectState) {
        const selectIds = (state) => state.ids;
        const selectEntities = (state) => state.entities;
        const selectAll = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectIds, selectEntities, (ids, entities) => ids.map((id) => entities[id]));
        const selectTotal = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectIds, (ids) => ids.length);
        if (!selectState) {
            return {
                selectIds,
                selectEntities,
                selectAll,
                selectTotal,
            };
        }
        return {
            selectIds: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, selectIds),
            selectEntities: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, selectEntities),
            selectAll: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, selectAll),
            selectTotal: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectState, selectTotal),
        };
    }
    return { getSelectors };
}

var DidMutate;
(function (DidMutate) {
    DidMutate[DidMutate["EntitiesOnly"] = 0] = "EntitiesOnly";
    DidMutate[DidMutate["Both"] = 1] = "Both";
    DidMutate[DidMutate["None"] = 2] = "None";
})(DidMutate || (DidMutate = {}));
function createStateOperator(mutator) {
    return function operation(arg, state) {
        const clonedEntityState = {
            ids: [...state.ids],
            entities: Object.assign({}, state.entities),
        };
        const didMutate = mutator(arg, clonedEntityState);
        if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
        }
        if (didMutate === DidMutate.EntitiesOnly) {
            return Object.assign(Object.assign({}, state), { entities: clonedEntityState.entities });
        }
        return state;
    };
}

function selectIdValue(entity, selectId) {
    const key = selectId(entity);
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)() && key === undefined) {
        console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
    }
    return key;
}

function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return DidMutate.None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    function addManyMutably(entities, state) {
        let didMutate = false;
        for (const entity of entities) {
            didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function setAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
    }
    function setOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            state.entities[key] = entity;
            return DidMutate.EntitiesOnly;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    function setManyMutably(entities, state) {
        const didMutateSetOne = entities.map((entity) => setOneMutably(entity, state));
        switch (true) {
            case didMutateSetOne.some((didMutate) => didMutate === DidMutate.Both):
                return DidMutate.Both;
            case didMutateSetOne.some((didMutate) => didMutate === DidMutate.EntitiesOnly):
                return DidMutate.EntitiesOnly;
            default:
                return DidMutate.None;
        }
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keysOrPredicate, state) {
        const keys = keysOrPredicate instanceof Array
            ? keysOrPredicate
            : state.ids.filter((key) => keysOrPredicate(state.entities[key]));
        const didMutate = keys
            .filter((key) => key in state.entities)
            .map((key) => delete state.entities[key]).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter((id) => id in state.entities);
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    function takeNewKey(keys, update, state) {
        const original = state.entities[update.id];
        const updated = Object.assign({}, original, update.changes);
        const newKey = selectIdValue(updated, selectId);
        const hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        const newKeys = {};
        updates = updates.filter((update) => update.id in state.entities);
        const didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            const didMutateIds = updates.filter((update) => takeNewKey(newKeys, update, state)).length >
                0;
            if (didMutateIds) {
                state.ids = state.ids.map((id) => newKeys[id] || id);
                return DidMutate.Both;
            }
            else {
                return DidMutate.EntitiesOnly;
            }
        }
        return DidMutate.None;
    }
    function mapMutably(map, state) {
        const changes = state.ids.reduce((changes, id) => {
            const change = map(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id, changes: change });
            }
            return changes;
        }, []);
        const updates = changes.filter(({ id }) => id in state.entities);
        return updateManyMutably(updates, state);
    }
    function mapOneMutably({ map, id }, state) {
        const entity = state.entities[id];
        if (!entity) {
            return DidMutate.None;
        }
        const updatedEntity = map(entity);
        return updateOneMutably({
            id: id,
            changes: updatedEntity,
        }, state);
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        const added = [];
        const updated = [];
        for (const entity of entities) {
            const id = selectIdValue(entity, selectId);
            if (id in state.entities) {
                updated.push({ id, changes: entity });
            }
            else {
                added.push(entity);
            }
        }
        const didMutateByUpdated = updateManyMutably(updated, state);
        const didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    return {
        removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setAll: createStateOperator(setAllMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
        map: createStateOperator(mapMutably),
        mapOne: createStateOperator(mapOneMutably),
    };
}

function createSortedStateAdapter(selectId, sort) {
    const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newModels, state) {
        const models = newModels.filter((model) => !(selectIdValue(model, selectId) in state.entities));
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            merge(models, state);
            return DidMutate.Both;
        }
    }
    function setAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
    }
    function setOneMutably(entity, state) {
        const id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            state.ids = state.ids.filter((val) => val !== id);
            merge([entity], state);
            return DidMutate.Both;
        }
        else {
            return addOneMutably(entity, state);
        }
    }
    function setManyMutably(entities, state) {
        const didMutateSetOne = entities.map((entity) => setOneMutably(entity, state));
        switch (true) {
            case didMutateSetOne.some((didMutate) => didMutate === DidMutate.Both):
                return DidMutate.Both;
            case didMutateSetOne.some((didMutate) => didMutate === DidMutate.EntitiesOnly):
                return DidMutate.EntitiesOnly;
            default:
                return DidMutate.None;
        }
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        const original = state.entities[update.id];
        const updated = Object.assign({}, original, update.changes);
        const newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        const models = [];
        const didMutateIds = updates.filter((update) => takeUpdatedModel(models, update, state))
            .length > 0;
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            const originalIds = state.ids;
            const updatedIndexes = [];
            state.ids = state.ids.filter((id, index) => {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes.push(index);
                    return false;
                }
            });
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes.every((i) => state.ids[i] === originalIds[i])) {
                return DidMutate.EntitiesOnly;
            }
            else {
                return DidMutate.Both;
            }
        }
    }
    function mapMutably(updatesOrMap, state) {
        const updates = state.ids.reduce((changes, id) => {
            const change = updatesOrMap(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id, changes: change });
            }
            return changes;
        }, []);
        return updateManyMutably(updates, state);
    }
    function mapOneMutably({ map, id }, state) {
        const entity = state.entities[id];
        if (!entity) {
            return DidMutate.None;
        }
        const updatedEntity = map(entity);
        return updateOneMutably({
            id: id,
            changes: updatedEntity,
        }, state);
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        const added = [];
        const updated = [];
        for (const entity of entities) {
            const id = selectIdValue(entity, selectId);
            if (id in state.entities) {
                updated.push({ id, changes: entity });
            }
            else {
                added.push(entity);
            }
        }
        const didMutateByUpdated = updateManyMutably(updated, state);
        const didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    function merge(models, state) {
        models.sort(sort);
        const ids = [];
        let i = 0;
        let j = 0;
        while (i < models.length && j < state.ids.length) {
            const model = models[i];
            const modelId = selectIdValue(model, selectId);
            const entityId = state.ids[j];
            const entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach((model, i) => {
            state.entities[selectId(model)] = model;
        });
    }
    return {
        removeOne,
        removeMany,
        removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setAll: createStateOperator(setAllMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        map: createStateOperator(mapMutably),
        mapOne: createStateOperator(mapOneMutably),
    };
}

function createEntityAdapter(options = {}) {
    const { selectId, sortComparer } = Object.assign({ sortComparer: false, selectId: (instance) => instance.id }, options);
    const stateFactory = createInitialStateFactory();
    const selectorsFactory = createSelectorsFactory();
    const stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return Object.assign(Object.assign(Object.assign({ selectId,
        sortComparer }, stateFactory), selectorsFactory), stateAdapter);
}

class Dictionary {
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngrx-entity.js.map

/***/ }),

/***/ 79629:
/*!********************************************************!*\
  !*** ./src/app/core/navbar/topnav/topnav.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopnavComponent": () => (/* binding */ TopnavComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59193);
/* harmony import */ var src_app_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/auth/state/actions */ 34622);
/* harmony import */ var src_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations */ 73510);
/* harmony import */ var src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/ship-store */ 28903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../projects/icon-library/src/lib/icon-library.component */ 60132);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);











function TopnavComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r2.status = !ctx_r2.status;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "icons", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a1) {
  return ["/boot", a1];
};

const _c1 = function () {
  return {
    exact: true
  };
};

function TopnavComponent_div_11_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_div_11_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r8.boot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "icons", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Streife");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx_r4.id$)))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
  }
}

const _c2 = function (a1) {
  return ["/boot", a1, "map"];
};

function TopnavComponent_div_11_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_div_11_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r10.boot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "icons", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Karte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx_r5.id$)));
  }
}

const _c3 = function (a1) {
  return ["/boot", a1, "positions"];
};

function TopnavComponent_div_11_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_div_11_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r12.boot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "icons", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Positionen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx_r6.id$)));
  }
}

const _c4 = function (a1) {
  return ["/boot", a1, "pdfbericht"];
};

function TopnavComponent_div_11_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_div_11_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r14.boot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "icons", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx_r7.id$)));
  }
}

const _c5 = function () {
  return ["/"];
};

function TopnavComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_div_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r16.sidebarHandler();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "icons", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_div_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r18.auswahl();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "icons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Bordbuch-Auswahl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TopnavComponent_div_11_button_8_Template, 5, 7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TopnavComponent_div_11_button_10_Template, 5, 5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TopnavComponent_div_11_button_12_Template, 5, 5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, TopnavComponent_div_11_button_14_Template, 5, 5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_div_11_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r19.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "icons", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Abmelden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@slideInLeft", undefined)("@slideOutLeft", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c5))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 8, ctx_r1.id$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 10, ctx_r1.id$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 12, ctx_r1.id$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 14, ctx_r1.id$));
  }
}

class TopnavComponent {
  constructor(store) {
    this.store = store;
    this.status = false;
    this.id$ = rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
    this.name$ = rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
    this.id$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipSelectors.selectShipId));
    this.name$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipSelectors.selectShipName));
  }

  sidebarHandler() {
    this.status = !this.status;
  }

  auswahl() {
    this.resetStore();
    this.status = !this.status;
  }

  boot() {
    this.status = !this.status;
  }

  resetStore() {
    this.store.dispatch(src_app_store_ship_store__WEBPACK_IMPORTED_MODULE_2__.ShipAction.resetStore()); // this.store.dispatch(PositionActions.resetStore())
  }

  logout() {
    this.resetStore();
    this.store.dispatch((0,src_app_modules_auth_state_actions__WEBPACK_IMPORTED_MODULE_0__.logout)());
  }

}

TopnavComponent.ɵfac = function TopnavComponent_Factory(t) {
  return new (t || TopnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
};

TopnavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TopnavComponent,
  selectors: [["topnav"]],
  decls: 12,
  vars: 6,
  consts: [[1, "absolute", "w-full", "p-5", "flex", "justify-between", "items-center", "bg-gray-200", "bg-opacity-75", "shadow-lg", "z-40"], ["aria-label", "toggler", 1, "flex", "justify-center", "items-center"], ["id", "open", "aria-label", "open", 1, "w-8", "h-8", "focus:outline-none", 3, "ngClass", "click"], ["name", "menu", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["aria-label", "close", "class", "w-8 h-8 focus:outline-none ", 3, "click", 4, "ngIf"], [1, "text-base"], [1, "flex", "justify-between", "items-center", "space-x-3"], ["name", "bordbuch-boot", 1, "h-8"], ["class", "sidebar z-50", 4, "ngIf"], ["aria-label", "close", 1, "w-8", "h-8", "focus:outline-none", 3, "click"], ["name", "menu-off", 1, "w-8", "h-8", "stroke-1", "stroke-current"], [1, "sidebar", "z-50"], [1, "mt-5", "flex", "flex-col", "justify-start", "items-center", "px-4", "w-full", "space-y-3", "pb-5"], [1, "w-8", "h-8", "block", "focus:outline-none", 3, "click"], ["routerLinkActive", "active-link", 1, "btn", 3, "routerLink", "routerLinkActiveOptions", "click"], ["name", "refresh", 1, "w-8", "h-8", "stroke-1", "stroke-current"], [1, "text-base", "leading-4"], ["class", "btn", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"], ["class", "btn", "routerLinkActive", "active-link", 3, "routerLink", "click", 4, "ngIf"], [1, "flex", "flex-col", "justify-between", "items-center", "h-full", "space-y-80", "w-full"], [1, "space-y-3", "flex", "pt-8", "border-gray-200", "border-t", "justify-start", "pb-6", "px-4", "pl-4", "flex-col", "items-center", "w-full"], [1, "btn", 3, "click"], ["name", "logout", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["name", "ship", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["routerLinkActive", "active-link", 1, "btn", 3, "routerLink", "click"], ["name", "map", 1, "w-8", "h-8", "stroke-1", "stroke-current"], ["name", "location-marker", 1, "w-8", "h-8", "stroke-1", "stroke-current"]],
  template: function TopnavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_2_listener() {
        return ctx.sidebarHandler();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "icons", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TopnavComponent_button_4_Template, 2, 0, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "icons", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TopnavComponent_div_11_Template, 22, 18, "div", 8);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "text-gray-800 " + (ctx.status ? "hidden" : "block"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 4, ctx.name$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _projects_icon_library_src_lib_icon_library_component__WEBPACK_IMPORTED_MODULE_3__.IconLibraryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".sidebar[_ngcontent-%COMP%] {\n\n    position: absolute;\n\n    top: 0px;\n\n    bottom: 0px;\n\n    display: flex;\n\n    width: 100%;\n\n    transform: var(--tw-transform);\n\n    flex-direction: column;\n\n    align-items: flex-start;\n\n    justify-content: flex-start;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n\n    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n@media (min-width: 640px) {\n\n    .sidebar[_ngcontent-%COMP%] {\n\n        width: 16rem\n    }\n}\n\n.btn[_ngcontent-%COMP%] {\n\n    display: flex;\n\n    width: 100%;\n\n    align-items: center;\n\n    justify-content: flex-start\n}\n\n.btn[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n\n    --tw-space-x-reverse: 0;\n\n    margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n\n    margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))\n}\n\n.btn[_ngcontent-%COMP%] {\n\n    border-radius: 0.25rem;\n\n    padding-top: 0.75rem;\n\n    padding-bottom: 0.75rem;\n\n    padding-left: 1rem;\n\n    --tw-text-opacity: 1;\n\n    color: rgba(31, 41, 55, var(--tw-text-opacity))\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity));\n\n    outline: 2px solid transparent;\n\n    outline-offset: 2px\n}\n\n.active-link[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxubyBzb3VyY2U+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUFBLG1CQUFBOztJQUFBLFNBQUE7O0lBQUEsWUFBQTs7SUFBQSxjQUFBOztJQUFBLFlBQUE7O0lBQUEsK0JBQUE7O0lBQUEsdUJBQUE7O0lBQUEsd0JBQUE7O0lBQUEsNEJBQUE7O0lBQUEsbUJBQUE7O0lBQUEsNERBQUE7O0lBQUEscUZBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQTs7UUFBQTtLQUFBO0NBQUE7O0FBQUE7O0lBQUEsY0FBQTs7SUFBQSxZQUFBOztJQUFBLG9CQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsd0JBQUE7O0lBQUEsdURBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSx1QkFBQTs7SUFBQSxxQkFBQTs7SUFBQSx3QkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBOztBQUFBOztJQUFBLG1CQUFBOztJQUFBLDJEQUFBOztJQUFBLHFCQUFBOztJQUFBO0NBQUE7O0FBQUE7O0lBQUEsbUJBQUE7O0lBQUEsMkRBQUE7O0lBQUEscUJBQUE7O0lBQUEsbURBQUE7O0lBQUEsK0JBQUE7O0lBQUE7Q0FBQTs7QUFBQTs7SUFBQSxtQkFBQTs7SUFBQSwyREFBQTs7SUFBQSxxQkFBQTs7SUFBQTtDQUFBIiwiZmlsZSI6InRvcG5hdi5jb21wb25lbnQuc2FzcyJ9 */"],
  data: {
    animation: src_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__.Animations
  }
});

/***/ }),

/***/ 53508:
/*!*****************************************************!*\
  !*** ./src/app/core/navbar/topnav/topnav.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopnavModule": () => (/* binding */ TopnavModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _topnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topnav.component */ 79629);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





class TopnavModule {
}
TopnavModule.ɵfac = function TopnavModule_Factory(t) { return new (t || TopnavModule)(); };
TopnavModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TopnavModule });
TopnavModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TopnavModule, { declarations: [_topnav_component__WEBPACK_IMPORTED_MODULE_0__.TopnavComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_topnav_component__WEBPACK_IMPORTED_MODULE_0__.TopnavComponent] }); })();


/***/ }),

/***/ 45713:
/*!************************************************************!*\
  !*** ./src/app/modules/layouts/mobile/mobile.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileComponent": () => (/* binding */ MobileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_navbar_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/navbar/topnav/topnav.component */ 79629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



class MobileComponent {
    constructor() { }
}
MobileComponent.ɵfac = function MobileComponent_Factory(t) { return new (t || MobileComponent)(); };
MobileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MobileComponent, selectors: [["app-mobile"]], decls: 2, vars: 0, template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "topnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_core_navbar_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_0__.TopnavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 12890:
/*!*********************************************************!*\
  !*** ./src/app/modules/layouts/mobile/mobile.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "MobileModule": () => (/* binding */ MobileModule)
/* harmony export */ });
/* harmony import */ var _mobile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile.component */ 45713);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_core_navbar_topnav_topnav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/navbar/topnav/topnav.module */ 53508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_store_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/resolver */ 23211);
/* harmony import */ var src_app_store_kat_store_kat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/kat-store/kat.module */ 41128);
/* harmony import */ var src_app_store_kat_store_kat_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/kat-store/kat.facade */ 49142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);









const routes = [
    { path: '', component: _mobile_component__WEBPACK_IMPORTED_MODULE_0__.MobileComponent,
        children: [
            { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_navbar_tabbar_tabbar_module_ts-src_app_store_kat-store_index_ts-src_app_-325b99"), __webpack_require__.e("src_app_modules_components_boot-auswahl_boot-auswahl_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/boot-auswahl/boot-auswahl.module */ 9901)).then(m => m.BootAuswahlModule), resolve: { data: src_app_store_resolver__WEBPACK_IMPORTED_MODULE_3__.Resolver } },
            { path: 'boot', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_navbar_tabbar_tabbar_module_ts-src_app_store_kat-store_index_ts-src_app_-325b99"), __webpack_require__.e("src_app_modules_components_boot_boot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/boot/boot.module */ 42195)).then(m => m.BootModule) }
        ] }
];
class MobileModule {
}
MobileModule.ɵfac = function MobileModule_Factory(t) { return new (t || MobileModule)(); };
MobileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MobileModule });
MobileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        src_app_store_resolver__WEBPACK_IMPORTED_MODULE_3__.Resolver,
        src_app_store_kat_store_kat_facade__WEBPACK_IMPORTED_MODULE_5__.KatFacade
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            src_app_core_navbar_topnav_topnav_module__WEBPACK_IMPORTED_MODULE_2__.TopnavModule,
            src_app_store_kat_store_kat_module__WEBPACK_IMPORTED_MODULE_4__.KatModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MobileModule, { declarations: [_mobile_component__WEBPACK_IMPORTED_MODULE_0__.MobileComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        src_app_core_navbar_topnav_topnav_module__WEBPACK_IMPORTED_MODULE_2__.TopnavModule,
        src_app_store_kat_store_kat_module__WEBPACK_IMPORTED_MODULE_4__.KatModule] }); })();


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
/* harmony export */   "testFunction": () => (/* binding */ testFunction),
/* harmony export */   "diff": () => (/* binding */ diff),
/* harmony export */   "getLocalISO": () => (/* binding */ getLocalISO),
/* harmony export */   "timezoneoffset": () => (/* binding */ timezoneoffset)
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
    dt.setHours(new Date().getHours() + 1);
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
// time
function diff() {
    const n = new Date(now() - timezoneoffset());
}
function getLocalISO(val = '') {
    let date;
    switch (val) {
        case 'lastyear':
            date = new Date(lastyear() - timezoneoffset());
            break;
        case 'year':
            date = new Date(year() - timezoneoffset());
            break;
        case 'lastmonth':
            date = new Date(lastmonth() - timezoneoffset());
            break;
        case 'month':
            date = new Date(month() - timezoneoffset());
            break;
        case 'lastweek':
            date = new Date(lastweek() - timezoneoffset());
            break;
        case 'week':
            date = new Date(week() - timezoneoffset());
            break;
        case 'yesterday':
            date = new Date(yesterday() - timezoneoffset());
            break;
        case 'today':
            date = new Date(today() - timezoneoffset());
            break;
        case 'tomorrow':
            date = new Date(tomorrow() - timezoneoffset());
            break;
        case 'now':
            date = new Date(now() - timezoneoffset());
            break;
        default:
            date = new Date();
    }
    const result = date.toISOString().slice(0, -1);
    return result;
}
function timezoneoffset() {
    return new Date().getTimezoneOffset() * 60000;
}
function lastyear() {
    return new Date(new Date().getFullYear() - 1, 0, 1);
}
function year() {
    return new Date(new Date().getFullYear(), 0, 1);
}
function lastmonth() {
    return new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
}
function month() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
}
function lastweek() {
    // Sunday - Saturday : 0 - 6
    let d = new Date();
    const diff = d.getDate() - d.getDay() + (d.getDay() == 0 ? -6 : 1) - 7;
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
}
function week() {
    // Sunday - Saturday : 0 - 6
    let d = new Date();
    const diff = d.getDate() - d.getDay() + (d.getDay() == 0 ? -6 : 1);
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
}
function yesterday() {
    return new Date().setHours(-24, 0, 0, 0);
}
function today() {
    return new Date().setHours(0, 0, 0, 0);
}
function now() {
    return new Date().getTime();
}
function tomorrow() {
    return new Date().setHours(24, 0, 0, 0);
}


/***/ }),

/***/ 49142:
/*!***********************************************!*\
  !*** ./src/app/store/kat-store/kat.facade.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KatFacade": () => (/* binding */ KatFacade),
/* harmony export */   "KatState": () => (/* reexport module object */ _store_reducers__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions */ 19502);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/selectors */ 67652);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers */ 62800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class KatFacade {
    constructor(store) {
        this.store = store;
        // public selectors
        this.betriebsstoffe$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllBetriebsstoffe));
        this.dienststellen$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectDienststellen));
        this.funktionen$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllFunktionen));
        this.lastPositions$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectLastPositions));
        this.kennungen$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllKennungen));
        this.pruefvermerkskategorien$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectpruefvermerkkategorien));
        this.pruefvermerke$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectpruefvermerke));
        this.schiffe$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectShips));
        this.status$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllStatus));
        this.zweck$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllZwecke));
    }
    // public dispatches
    // betriebsstoffe
    loadBetriebsstoffe() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadBetriebsstoffe());
    }
    // dienststellen
    loadDienststellen() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadDienststellen());
    }
    // funktionen
    loadFunktionen() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadFunktionen());
    }
    // kennungen
    loadKennungen() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadKennungen());
    }
    // lastpositions
    loadLastPositions() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadLastPositions());
    }
    // pruefvermerke
    loadPruefvermerke() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadPruefvermerke());
    }
    // pruefvermerkkategorien
    loadPruefvermerkkategorien() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadPruefvermerkKategorien());
    }
    // ships
    loadAllShip() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadAllShip());
    }
    // status
    loadAllStatus() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadAllStatus());
    }
    getIdByStatus(bezeichnung) {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIdByStatus(bezeichnung)));
    }
    // zaehlerstandstypen
    loadZaehlerstandstypen() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadZaehlerstandstypen());
    }
    getIdByZaehlerstandstyp(zaehlerstandstyp) {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIdByZaehlerstandstyp(zaehlerstandstyp)));
    }
    // zweck
    loadZwecke() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadZwecke());
    }
}
KatFacade.ɵfac = function KatFacade_Factory(t) { return new (t || KatFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
KatFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: KatFacade, factory: KatFacade.ɵfac });



/***/ }),

/***/ 67652:
/*!****************************************************!*\
  !*** ./src/app/store/kat-store/store/selectors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "katState": () => (/* binding */ katState),
/* harmony export */   "isKatLoaded": () => (/* binding */ isKatLoaded),
/* harmony export */   "selectShips": () => (/* binding */ selectShips),
/* harmony export */   "selectShipByDienststelle": () => (/* binding */ selectShipByDienststelle),
/* harmony export */   "selectDienststellen": () => (/* binding */ selectDienststellen),
/* harmony export */   "selectLastPositions": () => (/* binding */ selectLastPositions),
/* harmony export */   "selectpruefvermerkkategorien": () => (/* binding */ selectpruefvermerkkategorien),
/* harmony export */   "selectpruefvermerke": () => (/* binding */ selectpruefvermerke),
/* harmony export */   "selectpruefvermerkeByKategorie": () => (/* binding */ selectpruefvermerkeByKategorie),
/* harmony export */   "selectAllBetriebsstoffe": () => (/* binding */ selectAllBetriebsstoffe),
/* harmony export */   "selectAllFunktionen": () => (/* binding */ selectAllFunktionen),
/* harmony export */   "selectAllKennungen": () => (/* binding */ selectAllKennungen),
/* harmony export */   "selectAllStatus": () => (/* binding */ selectAllStatus),
/* harmony export */   "selectIdByStatus": () => (/* binding */ selectIdByStatus),
/* harmony export */   "selectAllZaehlerstandstypen": () => (/* binding */ selectAllZaehlerstandstypen),
/* harmony export */   "selectIdByZaehlerstandstyp": () => (/* binding */ selectIdByZaehlerstandstyp),
/* harmony export */   "selectAllZwecke": () => (/* binding */ selectAllZwecke)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);


const katState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Kat);
// ship
const isKatLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.isAllDataLoaded);
const selectShips = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.shipSelection);
const selectShipByDienststelle = (dienststelle) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShips, ship => ship.filter(el => {
    if (dienststelle == '')
        return el;
    if (el.dienststelle == dienststelle)
        return el;
    return null;
}));
const selectDienststellen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.dienststellen);
// lastpositions
const selectLastPositions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.lastPositions);
const selectpruefvermerkkategorien = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.pruefvermerkKategorien);
const selectpruefvermerke = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.pruefvermerke);
const selectpruefvermerkeByKategorie = (kategorie) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectpruefvermerke, pruefvermerk => pruefvermerk.filter(el => el.kategorie == kategorie));
// betriebsstoffe
const selectAllBetriebsstoffe = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.betriebsstoffe);
// funktionen
const selectAllFunktionen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.funktionen);
// kennungen
const selectAllKennungen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.kennungen);
// status
const selectAllStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.status);
const selectIdByStatus = (bezeichnung) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAllStatus, status => { var _a; return (_a = status === null || status === void 0 ? void 0 : status.find(el => el.bezeichnung == bezeichnung)) === null || _a === void 0 ? void 0 : _a.id; });
const selectAllZaehlerstandstypen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.zaehlerstandstypen);
const selectIdByZaehlerstandstyp = (zaehlerstandstyp) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAllZaehlerstandstypen, zaehlerstandstypen => { var _a; return (_a = zaehlerstandstypen === null || zaehlerstandstypen === void 0 ? void 0 : zaehlerstandstypen.find(el => el.zaehlerstandstyp == zaehlerstandstyp)) === null || _a === void 0 ? void 0 : _a.id; });
// zwecke
const selectAllZwecke = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(katState, state => state.zwecke);


/***/ }),

/***/ 23211:
/*!***********************************!*\
  !*** ./src/app/store/resolver.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resolver": () => (/* binding */ Resolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _kat_store_kat_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kat-store/kat.facade */ 49142);




class Resolver {
    constructor(store, _katFacade) {
        this.store = store;
        this._katFacade = _katFacade;
        this.loading = false;
    }
    resolve(route, state) {
        return this.store.pipe(
        // select(isShipLoaded),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
            if (!this.loading) {
                this.loading = true;
                this._katFacade.loadAllShip();
                this._katFacade.loadDienststellen();
                this._katFacade.loadFunktionen();
                this._katFacade.loadKennungen();
                this._katFacade.loadLastPositions();
                this._katFacade.loadPruefvermerke();
                this._katFacade.loadPruefvermerkkategorien();
                this._katFacade.loadBetriebsstoffe();
                this._katFacade.loadAllStatus();
                this._katFacade.loadZaehlerstandstypen();
                this._katFacade.loadZwecke();
            }
        }), 
        // filter(isShipLoaded => isShipLoaded),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
            this.loading = false;
        }));
    }
}
Resolver.ɵfac = function Resolver_Factory(t) { return new (t || Resolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_kat_store_kat_facade__WEBPACK_IMPORTED_MODULE_0__.KatFacade)); };
Resolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: Resolver, factory: Resolver.ɵfac });


/***/ }),

/***/ 28903:
/*!*******************************************!*\
  !*** ./src/app/store/ship-store/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipAction": () => (/* reexport module object */ _ship_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "ShipResolver": () => (/* reexport module object */ _ship_resolver__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "ShipSelectors": () => (/* reexport module object */ _ship_selectors__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "ShipState": () => (/* reexport module object */ _ship_state__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _ship_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.actions */ 97641);
/* harmony import */ var _ship_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.resolver */ 25311);
/* harmony import */ var _ship_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.selectors */ 37323);
/* harmony import */ var _ship_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship.state */ 50540);







/***/ }),

/***/ 97641:
/*!**************************************************!*\
  !*** ./src/app/store/ship-store/ship.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadShip": () => (/* binding */ loadShip),
/* harmony export */   "shipLoaded": () => (/* binding */ shipLoaded),
/* harmony export */   "updateShip": () => (/* binding */ updateShip),
/* harmony export */   "updateShipSuccess": () => (/* binding */ updateShipSuccess),
/* harmony export */   "loadPatrol": () => (/* binding */ loadPatrol),
/* harmony export */   "patrolLoaded": () => (/* binding */ patrolLoaded),
/* harmony export */   "initializePatrol": () => (/* binding */ initializePatrol),
/* harmony export */   "insertPatrol": () => (/* binding */ insertPatrol),
/* harmony export */   "insertPatrolSuccess": () => (/* binding */ insertPatrolSuccess),
/* harmony export */   "updatePatrol": () => (/* binding */ updatePatrol),
/* harmony export */   "updatePatrolSuccess": () => (/* binding */ updatePatrolSuccess),
/* harmony export */   "deletePatrol": () => (/* binding */ deletePatrol),
/* harmony export */   "deletePatrolSuccess": () => (/* binding */ deletePatrolSuccess),
/* harmony export */   "loadReparaturen": () => (/* binding */ loadReparaturen),
/* harmony export */   "reparaturenLoaded": () => (/* binding */ reparaturenLoaded),
/* harmony export */   "insertReparatur": () => (/* binding */ insertReparatur),
/* harmony export */   "insertReparaturSuccess": () => (/* binding */ insertReparaturSuccess),
/* harmony export */   "updateReparatur": () => (/* binding */ updateReparatur),
/* harmony export */   "updateReparaturSuccess": () => (/* binding */ updateReparaturSuccess),
/* harmony export */   "downloadReparaturFotos": () => (/* binding */ downloadReparaturFotos),
/* harmony export */   "downloadReparaturFotosSuccess": () => (/* binding */ downloadReparaturFotosSuccess),
/* harmony export */   "uploadReparaturFoto": () => (/* binding */ uploadReparaturFoto),
/* harmony export */   "uploadReparaturFotoSuccess": () => (/* binding */ uploadReparaturFotoSuccess),
/* harmony export */   "deleteReparaturFoto": () => (/* binding */ deleteReparaturFoto),
/* harmony export */   "deleteReparaturFotoSuccess": () => (/* binding */ deleteReparaturFotoSuccess),
/* harmony export */   "loadBetankungen": () => (/* binding */ loadBetankungen),
/* harmony export */   "betankungenLoaded": () => (/* binding */ betankungenLoaded),
/* harmony export */   "insertBetankung": () => (/* binding */ insertBetankung),
/* harmony export */   "insertBetankungSuccess": () => (/* binding */ insertBetankungSuccess),
/* harmony export */   "updateBetankung": () => (/* binding */ updateBetankung),
/* harmony export */   "deleteBetankung": () => (/* binding */ deleteBetankung),
/* harmony export */   "loadTank": () => (/* binding */ loadTank),
/* harmony export */   "loadedTank": () => (/* binding */ loadedTank),
/* harmony export */   "insertPatrolBesatzung": () => (/* binding */ insertPatrolBesatzung),
/* harmony export */   "insertPatrolBesatzungSuccess": () => (/* binding */ insertPatrolBesatzungSuccess),
/* harmony export */   "updatePatrolBesatzung": () => (/* binding */ updatePatrolBesatzung),
/* harmony export */   "deletePatrolBesatzung": () => (/* binding */ deletePatrolBesatzung),
/* harmony export */   "loadPeilung": () => (/* binding */ loadPeilung),
/* harmony export */   "loadedPeilung": () => (/* binding */ loadedPeilung),
/* harmony export */   "insertPeilung": () => (/* binding */ insertPeilung),
/* harmony export */   "insertPeilungSuccess": () => (/* binding */ insertPeilungSuccess),
/* harmony export */   "updatePeilung": () => (/* binding */ updatePeilung),
/* harmony export */   "resetStore": () => (/* binding */ resetStore),
/* harmony export */   "loadChecklist": () => (/* binding */ loadChecklist),
/* harmony export */   "loadedChecklist": () => (/* binding */ loadedChecklist),
/* harmony export */   "insertChecklist": () => (/* binding */ insertChecklist),
/* harmony export */   "updateChecklist": () => (/* binding */ updateChecklist)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

// load ship
const loadShip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Load Ship", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const shipLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Ship Effect] Ship Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateShip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Update Ship", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateShipSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Update Ship Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// patrol
const loadPatrol = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Load Patrol", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const patrolLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Patrol Effect] Patrol Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const initializePatrol = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Initialize Patrol", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertPatrol = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Insert Patrol", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertPatrolSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Insert Patrol Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePatrol = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Update Patrol", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePatrolSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Update Patrol Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePatrol = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Delete Patrol", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePatrolSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Delete Patrol Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// reparaturen
const loadReparaturen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Load Reparaturen", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const reparaturenLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Ship Effect] Reparaturen Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertReparatur = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Pruefvermerk Dialog] Reparatur Insert", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertReparaturSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Pruefvermerk Dialog] Reparatur Insert Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateReparatur = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Pruefvermerk Dialog] Reparatur Update", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateReparaturSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Pruefvermerk Dialog] Reparatur Update Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// reparaturfoto
const downloadReparaturFotos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Download ReparaturFotos", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const downloadReparaturFotosSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Spec Effect] ReparaturFotos Download Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const uploadReparaturFoto = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Reparatur Dialog] ReparaturFoto Upload", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const uploadReparaturFotoSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Reparatur Dialog] ReparaturFoto Upload Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteReparaturFoto = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Modal Reparatur Dialog] Delete ReparaturFoto", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteReparaturFotoSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Modal Reparatur Dialog] Delete ReparaturFoto Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// betankung
const loadBetankungen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Load Betankungen", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const betankungenLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Ship Effect] Betankungen Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertBetankung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Betankungen Dialog] Betankungen Insert", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertBetankungSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Betankungen Dialog] Betankungen Insert Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateBetankung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Betankungen Dialog] Betankungen Updates", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteBetankung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Betankungen Dialog] Betankungen Delete", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// tank
const loadTank = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Load Tank", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadedTank = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Ship Effect] Loaded Tank", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// besatzung
const insertPatrolBesatzung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Besatzung Dialog] Besatzung Insert", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertPatrolBesatzungSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Besatzung Dialog] Besatzung Insert Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePatrolBesatzung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Besatzung Dialog] Besatzung Updates", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePatrolBesatzung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Besatzung Dialog] Besatzung Delete", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// peilung
const loadPeilung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Load Peilung", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadedPeilung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Loaded Peilung", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertPeilung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Peilung Dialog] Insert Peilung", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertPeilungSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Edit Peilung Dialog] Insert Peilung Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePeilung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Modal Peilung] Update Peilung", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const resetStore = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Auswahl] Store reset");
// checklist
const loadChecklist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Ship Resolver] Load Checklist", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadedChecklist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Ship Effect] Loaded Checklist", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertChecklist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Ship Effect] Insert Checklist", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateChecklist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Ship Effect] Update Checklist", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 25311:
/*!***************************************************!*\
  !*** ./src/app/store/ship-store/ship.resolver.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipResolver": () => (/* binding */ ShipResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ 28903);
/* harmony import */ var _spec_store_store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spec-store/store/actions */ 30089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _spec_store_spec_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spec-store/spec.facade */ 35856);






class ShipResolver {
    constructor(store, _specFacade) {
        this.store = store;
        this._specFacade = _specFacade;
        this.loading = false;
    }
    resolve(route, state) {
        return this.store.pipe(
        // select(isShipLoaded),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            if (!this.loading) {
                this.loading = true;
                this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadShip({ id_ship: route.params[route.data.param] }));
                this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadPatrol({ id_ship: route.params[route.data.param] }));
                this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadReparaturen({ id_ship: route.params[route.data.param] }));
                this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadBetankungen({ id_ship: route.params[route.data.param] }));
                this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadTank({ id_ship: route.params[route.data.param] }));
                this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadPeilung({ id_ship: route.params[route.data.param] }));
                this.store.dispatch(___WEBPACK_IMPORTED_MODULE_0__.ShipAction.loadChecklist({ id_ship: route.params[route.data.param] }));
                this.store.dispatch((0,_spec_store_store_actions__WEBPACK_IMPORTED_MODULE_1__.loadAllZaehlerstaende)({ id: route.params[route.data.param] }));
                this._specFacade.loadPositionsByIdSchiff(route.params[route.data.param]);
                this._specFacade.loadKlarmeldungByIdSchiff(route.params[route.data.param]);
            }
        }), 
        // filter(isShipLoaded => isShipLoaded),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
            this.loading = false;
        }));
    }
}
ShipResolver.ɵfac = function ShipResolver_Factory(t) { return new (t || ShipResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_spec_store_spec_facade__WEBPACK_IMPORTED_MODULE_2__.SpecFacade)); };
ShipResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ShipResolver, factory: ShipResolver.ɵfac });


/***/ }),

/***/ 37323:
/*!****************************************************!*\
  !*** ./src/app/store/ship-store/ship.selectors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectShipState": () => (/* binding */ selectShipState),
/* harmony export */   "isShipLoaded": () => (/* binding */ isShipLoaded),
/* harmony export */   "selectedShip": () => (/* binding */ selectedShip),
/* harmony export */   "selectShip": () => (/* binding */ selectShip),
/* harmony export */   "selectShipId": () => (/* binding */ selectShipId),
/* harmony export */   "selectShipName": () => (/* binding */ selectShipName),
/* harmony export */   "selectedPatrol": () => (/* binding */ selectedPatrol),
/* harmony export */   "isPatrolActive": () => (/* binding */ isPatrolActive),
/* harmony export */   "isPatrolBeendet": () => (/* binding */ isPatrolBeendet),
/* harmony export */   "patrolStatus": () => (/* binding */ patrolStatus),
/* harmony export */   "selectedPatrolBesatzung": () => (/* binding */ selectedPatrolBesatzung),
/* harmony export */   "selectPatrolId": () => (/* binding */ selectPatrolId),
/* harmony export */   "selectBesatzung": () => (/* binding */ selectBesatzung),
/* harmony export */   "selectZaehlerstaende": () => (/* binding */ selectZaehlerstaende),
/* harmony export */   "selectReparaturen": () => (/* binding */ selectReparaturen),
/* harmony export */   "selectBetankungen": () => (/* binding */ selectBetankungen),
/* harmony export */   "selectTanks": () => (/* binding */ selectTanks),
/* harmony export */   "selectTankById": () => (/* binding */ selectTankById),
/* harmony export */   "selectPeilungen": () => (/* binding */ selectPeilungen),
/* harmony export */   "selectPeilungenById": () => (/* binding */ selectPeilungenById),
/* harmony export */   "selectChecklist": () => (/* binding */ selectChecklist),
/* harmony export */   "selectCheckedChecklistItems": () => (/* binding */ selectCheckedChecklistItems),
/* harmony export */   "selectUncheckedChecklistItems": () => (/* binding */ selectUncheckedChecklistItems),
/* harmony export */   "selectAllReparaturFotos": () => (/* binding */ selectAllReparaturFotos),
/* harmony export */   "selectReparaturFotosCount": () => (/* binding */ selectReparaturFotosCount),
/* harmony export */   "selectReparaturFotosById": () => (/* binding */ selectReparaturFotosById)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);


const selectShipState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Ship);
// ship
const isShipLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.isAllDataLoaded);
const selectedShip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.ship);
const selectShip = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectedShip, ship => ship);
const selectShipId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectedShip, ship => ship === null || ship === void 0 ? void 0 : ship.id);
const selectShipName = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectedShip, ship => ship === null || ship === void 0 ? void 0 : ship.name);
// patrol
const selectedPatrol = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.patrol);
const isPatrolActive = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => { var _a; return !!(((_a = state.patrol) === null || _a === void 0 ? void 0 : _a.status) == 'active'); });
const isPatrolBeendet = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => { var _a; return !!(((_a = state.patrol) === null || _a === void 0 ? void 0 : _a.status) == 'beendet'); });
const patrolStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => { var _a; return (_a = state.patrol) === null || _a === void 0 ? void 0 : _a.status; });
const selectedPatrolBesatzung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectedPatrol, patrol => patrol === null || patrol === void 0 ? void 0 : patrol.besatzung);
const selectPatrolId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectedPatrol, patrol => patrol === null || patrol === void 0 ? void 0 : patrol.id);
const selectBesatzung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectedPatrol, patrol => patrol === null || patrol === void 0 ? void 0 : patrol.besatzung);
// zaehlerstaende
const selectZaehlerstaende = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.zaehlerstaende);
// reparaturen
const selectReparaturen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.reparaturen);
// betankungen
const selectBetankungen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.betankungen);
// tanks
const selectTanks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.tanks);
const selectTankById = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectTanks, tanks => tanks === null || tanks === void 0 ? void 0 : tanks.find(el => el.id == id));
// peilung
const selectPeilungen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.peilungen);
const selectPeilungenById = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectPeilungen, peilungen => peilungen === null || peilungen === void 0 ? void 0 : peilungen.find(el => el.id == id));
// checklist
const selectChecklist = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.checklist);
const selectCheckedChecklistItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectChecklist, checklist => { var _a; return (_a = checklist === null || checklist === void 0 ? void 0 : checklist.checklistItems) === null || _a === void 0 ? void 0 : _a.filter((el) => el.checked == true); });
const selectUncheckedChecklistItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectChecklist, checklist => { var _a; return (_a = checklist === null || checklist === void 0 ? void 0 : checklist.checklistItems) === null || _a === void 0 ? void 0 : _a.filter((el) => el.checked == false); });
// reparaturfotos
const selectAllReparaturFotos = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectShipState, state => state.reparaturfotos);
const selectReparaturFotosCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAllReparaturFotos, reparaturfotos => reparaturfotos === null || reparaturfotos === void 0 ? void 0 : reparaturfotos.length);
const selectReparaturFotosById = (id_reparatur) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAllReparaturFotos, reparaturfotos => reparaturfotos === null || reparaturfotos === void 0 ? void 0 : reparaturfotos.filter(el => el.id_reparatur == id_reparatur));


/***/ }),

/***/ 50540:
/*!************************************************!*\
  !*** ./src/app/store/ship-store/ship.state.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapter": () => (/* binding */ adapter)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ 80273);

const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__.createEntityAdapter)();


/***/ }),

/***/ 35856:
/*!*************************************************!*\
  !*** ./src/app/store/spec-store/spec.facade.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecFacade": () => (/* binding */ SpecFacade),
/* harmony export */   "SpecState": () => (/* reexport module object */ _store_reducers__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions */ 30089);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/selectors */ 72505);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers */ 58836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class SpecFacade {
    constructor(store) {
        this.store = store;
        // public selectors
        this.klarmeldung$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectKlarmeldung));
        this.positions$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPositions));
        this.saving$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectSaving));
        this.allZaehlerstaende$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllZaehlerstaende));
    }
    // public dispatches
    // klarmeldung
    loadKlarmeldungByIdSchiff(id) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadKlarmeldungByIdSchiff({ id }));
    }
    insertKlarmeldung(insert) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.insertKlarmeldung({ insert }));
    }
    updateKlarmeldung(update) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.updateKlarmeldung({ update }));
    }
    // position
    loadPositionsByIdSchiff(id) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadPositions({ id }));
    }
    insertPosition(insert) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.insertPosition({ insert }));
    }
    updatePosition(update) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.updatePosition({ update }));
    }
    deletePosition(id) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.deletePosition({ id }));
    }
    getPositionenByIdPatrol(id_patrol) {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectPositionsByPatrol(id_patrol)));
    }
    // saving
    updateSaving(update) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.updateSaving({ update }));
    }
    // zaehlerstaende
    loadAllZaehlerstaende(id) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.loadAllZaehlerstaende({ id }));
    }
    updateZaehlerstand(update) {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_0__.updateZaehlerstand({ update }));
    }
    getZaehlerstaendeById(id) {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectZaehlerstaendeById(id)));
    }
}
SpecFacade.ɵfac = function SpecFacade_Factory(t) { return new (t || SpecFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
SpecFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SpecFacade, factory: SpecFacade.ɵfac });



/***/ }),

/***/ 30089:
/*!***************************************************!*\
  !*** ./src/app/store/spec-store/store/actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPositions": () => (/* binding */ loadPositions),
/* harmony export */   "loadPositionsSuccess": () => (/* binding */ loadPositionsSuccess),
/* harmony export */   "insertPosition": () => (/* binding */ insertPosition),
/* harmony export */   "insertPositionSuccess": () => (/* binding */ insertPositionSuccess),
/* harmony export */   "updatePosition": () => (/* binding */ updatePosition),
/* harmony export */   "updatePositionSuccess": () => (/* binding */ updatePositionSuccess),
/* harmony export */   "deletePosition": () => (/* binding */ deletePosition),
/* harmony export */   "deletePositionSuccess": () => (/* binding */ deletePositionSuccess),
/* harmony export */   "loadKlarmeldungByIdSchiff": () => (/* binding */ loadKlarmeldungByIdSchiff),
/* harmony export */   "loadKlarmeldungByIdSchiffSuccess": () => (/* binding */ loadKlarmeldungByIdSchiffSuccess),
/* harmony export */   "insertKlarmeldung": () => (/* binding */ insertKlarmeldung),
/* harmony export */   "insertKlarmeldungSuccess": () => (/* binding */ insertKlarmeldungSuccess),
/* harmony export */   "updateKlarmeldung": () => (/* binding */ updateKlarmeldung),
/* harmony export */   "updateKlarmeldungSuccess": () => (/* binding */ updateKlarmeldungSuccess),
/* harmony export */   "updateSaving": () => (/* binding */ updateSaving),
/* harmony export */   "loadAllZaehlerstaende": () => (/* binding */ loadAllZaehlerstaende),
/* harmony export */   "loadedAllZaehlerstaende": () => (/* binding */ loadedAllZaehlerstaende),
/* harmony export */   "updateZaehlerstand": () => (/* binding */ updateZaehlerstand),
/* harmony export */   "updateZaehlerstandSuccess": () => (/* binding */ updateZaehlerstandSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

// position
const loadPositions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Facade] Load Positions", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadPositionsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Spec Effect] Load Positions Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertPosition = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Facade] insert Position", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertPositionSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Position Component] insert PositionReport Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePosition = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Facade] update Position", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updatePositionSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Spec Effect] Update Position Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePosition = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Facade] delete Position", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deletePositionSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Spec Effect] delete Position Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Klarmeldung
const loadKlarmeldungByIdSchiff = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Facade] Load Klarmeldung", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadKlarmeldungByIdSchiffSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Spec Effect] Load Klarmeldung Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertKlarmeldung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Facade] Insert Klarmeldung", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const insertKlarmeldungSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Effect] Insert Klarmeldung Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateKlarmeldung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Facade] Update Klarmeldung", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateKlarmeldungSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Spec Effect] Update Klarmeldung Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// saving
const updateSaving = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Streife] Update Saving", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// zaehlerstaende
const loadAllZaehlerstaende = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Kat Resolver] Load Zaehlerstaende", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadedAllZaehlerstaende = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Spec Effect] Loaded Zaehlerstaende", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateZaehlerstand = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Modal Zaehlerstand] Update Zaehlerstand", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateZaehlerstandSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Modal Zaehlerstand] Update Zaehlerstand Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 58836:
/*!****************************************************!*\
  !*** ./src/app/store/spec-store/store/reducers.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialDataState": () => (/* binding */ initialDataState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils */ 22134);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 30089);



const initialDataState = {
    klarmeldung: undefined,
    positions: undefined,
    saving: false,
    zaehlerstaende: undefined,
    isAllDataLoaded: false
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialDataState, 
// Klarmeldung
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.loadKlarmeldungByIdSchiffSuccess, (state, action) => {
    return Object.assign(Object.assign({}, state), { klarmeldung: action.klarmeldung });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.insertKlarmeldungSuccess, (state, action) => {
    const insert = Object.assign({}, action.action.insert, { id: action.id });
    return Object.assign(Object.assign({}, state), { klarmeldung: insert });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.updateKlarmeldungSuccess, (state, action) => {
    return Object.assign(Object.assign({}, state), { klarmeldung: action.update });
}), 
// position
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.loadPositionsSuccess, (state, action) => {
    return Object.assign(Object.assign({}, state), { positions: action.positionReport });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.insertPositionSuccess, (state, action) => {
    const insert = Object.assign({}, action.action.insert, { id: action.id });
    let cleared = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.positions);
    cleared = [...cleared, ...[insert]];
    return Object.assign(Object.assign({}, state), { positions: cleared });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.updatePositionSuccess, (state, action) => {
    let cleared = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.positions);
    cleared = cleared === null || cleared === void 0 ? void 0 : cleared.filter(el => el.id != action.update.id);
    cleared = [...cleared, ...[action.update]];
    return Object.assign(Object.assign({}, state), { positions: cleared });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.deletePositionSuccess, (state, action) => {
    let cleared = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.positions);
    cleared = cleared === null || cleared === void 0 ? void 0 : cleared.filter(el => el.id != action.id);
    cleared = [...cleared];
    return Object.assign(Object.assign({}, state), { positions: cleared });
}), 
// saving
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.updateSaving, (state, action) => {
    return Object.assign(Object.assign({}, state), { saving: action.update });
}), 
// zaehlerstaende
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.loadedAllZaehlerstaende, (state, action) => {
    return Object.assign(Object.assign({}, state), { zaehlerstaende: action.zaehlerstaende });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions__WEBPACK_IMPORTED_MODULE_1__.updateZaehlerstandSuccess, (state, action) => {
    let clearedZaehlerstaende = (0,src_app_shared_utils__WEBPACK_IMPORTED_MODULE_0__.checkStateForEmptyArrays)(state.zaehlerstaende);
    clearedZaehlerstaende = clearedZaehlerstaende === null || clearedZaehlerstaende === void 0 ? void 0 : clearedZaehlerstaende.filter(el => el.id != action.action.update.id);
    clearedZaehlerstaende = [...clearedZaehlerstaende, ...[action.action.update]];
    return Object.assign(Object.assign({}, state), { zaehlerstaende: clearedZaehlerstaende });
}));


/***/ }),

/***/ 72505:
/*!*****************************************************!*\
  !*** ./src/app/store/spec-store/store/selectors.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "specState": () => (/* binding */ specState),
/* harmony export */   "isSpecLoaded": () => (/* binding */ isSpecLoaded),
/* harmony export */   "selectKlarmeldung": () => (/* binding */ selectKlarmeldung),
/* harmony export */   "selectPositions": () => (/* binding */ selectPositions),
/* harmony export */   "selectPositionsByPatrol": () => (/* binding */ selectPositionsByPatrol),
/* harmony export */   "selectPositionById": () => (/* binding */ selectPositionById),
/* harmony export */   "selectSaving": () => (/* binding */ selectSaving),
/* harmony export */   "selectAllZaehlerstaende": () => (/* binding */ selectAllZaehlerstaende),
/* harmony export */   "selectZaehlerstaendeById": () => (/* binding */ selectZaehlerstaendeById)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/feature */ 97845);


const specState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(src_app_core_model_feature__WEBPACK_IMPORTED_MODULE_0__.Features.Spec);
// ship
const isSpecLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(specState, state => state.isAllDataLoaded);
// Klarmeldung
const selectKlarmeldung = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(specState, state => state.klarmeldung);
// position
const selectPositions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(specState, state => state.positions);
const selectPositionsByPatrol = (id_streife) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectPositions, positions => positions === null || positions === void 0 ? void 0 : positions.filter(el => el.id_streife == id_streife));
const selectPositionById = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectPositions, position => position === null || position === void 0 ? void 0 : position.find(el => el.id == id));
// saving
const selectSaving = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(specState, state => state.saving);
// zaehlerstaende
const selectAllZaehlerstaende = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(specState, state => state.zaehlerstaende);
const selectZaehlerstaendeById = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectAllZaehlerstaende, zaehlerstaende => zaehlerstaende === null || zaehlerstaende === void 0 ? void 0 : zaehlerstaende.filter(el => el.id_ship == id));
// export const selectDurchsichtByNameZaehlerstandstyp = (name: string, zaehlerstandstyp: string) => createSelector(
//     selectAllZaehlerstaende,
//     zaehlerstaende => zaehlerstaende?.find(el => el.name == name && el.zaehlerstandstyp == zaehlerstandstyp)?.betriebsstunden
// )


/***/ })

}]);
//# sourceMappingURL=src_app_modules_layouts_mobile_mobile_module_ts.js.map