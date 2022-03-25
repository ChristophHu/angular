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
export const selectItemByKategorie = (kategorie: string) => createSelector(
    selectAllPruefvermerke,
    pruefvermerke => pruefvermerke?.filter(el => el.kategorie == kategorie)
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
export const selectShipById = (id: string) => createSelector(
    selectAllSchiffe,
    schiffe => schiffe?.find(el => el.id == id)
)
export const selectIdByShip = (name: string) => createSelector(
    selectAllSchiffe,
    schiffe => schiffe?.find(el => el.name == name)?.id
)
export const selectNameById = (id: string) => createSelector(
    selectAllSchiffe,
    schiffe => schiffe?.find(el => el.id == id)?.name
)
export const getDurchsichtByName = (name: string) => createSelector(
    selectAllSchiffe,
    schiffe => schiffe?.find(el => el.name == name)?.durchsicht
)

// status
export const selectAllStatus = createSelector(
    katState,
    state => state.status
)
export const selectIdByStatus = (bezeichnung: string) => createSelector(
    selectAllStatus,
    status => status?.find(el => el.bezeichnung == bezeichnung)?.id
)


// zaehlerstandstypen
export const selectAllZaehlerstandstypen = createSelector(
    katState,
    state => state.zaehlerstandstypen
)
export const selectIdByZaehlerstandstyp = (zaehlerstandstyp: string) => createSelector(
    selectAllZaehlerstandstypen,
    zaehlerstandstypen => zaehlerstandstypen?.find(el => el.zaehlerstandstyp == zaehlerstandstyp)?.id
)

// zwecke
export const selectAllZwecke = createSelector(
    katState,
    state => state.zweck
)