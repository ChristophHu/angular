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

// betriebsstoffe
export const selectAllBetriebsstoffe = createSelector(
    katState,
    state => state.betriebsstoffe
)

// checkliste
export const selectAllCheckliste = createSelector(
    katState,
    state => state.checkliste
)

// dienststellen
export const selectAllDienststellen = createSelector(
    katState,
    state => state.dienststellen
)
export const selectIdByDienststelle = (bezeichnung: string) => createSelector(
    selectAllDienststellen,
    kategorie => kategorie?.find(el => el.bezeichnung == bezeichnung)?.id
)

// funktionen
export const selectAllFunktionen = createSelector(
    katState,
    state => state.funktionen
)

// kennungen
export const selectAllKennungen = createSelector(
    katState,
    state => state.kennungen
)

// pruefvermerkkategorien
export const selectAllPruefvermerke = createSelector(
    katState,
    state => state.pruefvermerke
)

// pruefvermerkkategorien
export const selectAllPruefvermerkkategorien = createSelector(
    katState,
    state => state.pruefvermerkKategorien
)
export const selectIdByKategorie = (bezeichnung: string) => createSelector(
    selectAllPruefvermerkkategorien,
    kategorie => kategorie?.find(el => el.bezeichnung == bezeichnung)?.id
)

// schiffe
export const selectAllSchiffe = createSelector(
    katState,
    state => state.schiffe
)

// zaehlerstandstypen
export const selectAllZaehlerstandstypen = createSelector(
    katState,
    state => state.zaehlerstandstypen
)

// zwecke
export const selectAllZwecke = createSelector(
    katState,
    state => state.zweck
)