import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/models/feature";
import { State } from "./reducers";

export const katState = createFeatureSelector<State>(Features.Kat)

// ship
export const isKatLoaded = createSelector(
    katState,
    state => state.isAllDataLoaded
)

// export const selectShips = createSelector(
//     katState,
//     state => state.shipSelection
// )
// export const selectShipByDienststelle = (dienststelle: string) => createSelector(
//     selectShips,
//     ship => ship!.filter(el => el.dienststelle == dienststelle)
// )

// export const selectDienststellen = createSelector(
//     katState,
//     state => state.dienststellen
// )

// export const selectpruefvermerkkategorien = createSelector(
//     katState,
//     state => state.pruefvermerkKategorien
// )
// export const selectpruefvermerke = createSelector(
//     katState,
//     state => state.pruefvermerke
// )
// export const selectpruefvermerkeByKategorie = (kategorie: string) => createSelector(
//     selectpruefvermerke,
//     pruefvermerk => pruefvermerk!.filter(el => el.kategorie == kategorie)
// )

// // betriebsstoffe
// export const selectAllBetriebsstoffe = createSelector(
//     katState,
//     state => state.betriebsstoffe
// )

// // funktionen
// export const selectAllFunktionen = createSelector(
//     katState,
//     state => state.funktionen
// )

// kennungen
export const selectAllKennungen = createSelector(
    katState,
    state => state.kennungen
)

// zwecke
// export const selectAllZwecke = createSelector(
//     katState,
//     state => state.zwecke
// )