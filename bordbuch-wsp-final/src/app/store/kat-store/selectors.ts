import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from './state'


export const katState = createFeatureSelector<State>(Features.Kat)

// ship
export const isKatLoaded = createSelector(
    katState,
    state => state.isAllDataLoaded
)

export const selectShips = createSelector(
    katState,
    state => state.shipSelection
)
export const selectShipByDienststelle = (dienststelle: string) => createSelector(
    selectShips,
    ship => ship!.filter(el => el.dienststelle == dienststelle)
)

export const selectDienststellen = createSelector(
    katState,
    state => state.dienststellen
)

export const selectpruefvermerkkategorien = createSelector(
    katState,
    state => state.pruefvermerkKategorien
)
export const selectpruefvermerke = createSelector(
    katState,
    state => state.pruefvermerke
)
export const selectpruefvermerkeByKategorie = (kategorie: string) =>createSelector(
    selectpruefvermerke,
    pruefvermerk => pruefvermerk!.filter(el => el.kategorie == kategorie)
)
export const selectAllChecklistItems = createSelector(
    katState,
    state => state.checklistitems
)
export const checkedChecklistItems = createSelector(
    selectAllChecklistItems,
    items => items!.filter(el => el.isChecked == true)
)
export const uncheckedChecklistItems = createSelector(
    selectAllChecklistItems,
    items => items!.filter(el => el.isChecked == false)
)