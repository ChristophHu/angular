import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/models/feature";
import { Status } from "src/app/core/models/reparatur-status.model";
import { State } from "./reducers";

export const specState = createFeatureSelector<State>(Features.Spec)

// ship
export const isSpecLoaded = createSelector(
    specState,
    state => state.isAllDataLoaded
)

// betankungen
export const selectAllBetankungen = createSelector(
    specState,
    state => state.betankungen
)

// checklists
export const selectAllChecklists = createSelector(
    specState,
    state => state.checklists
)
export const selectChecklistByIdSchiff = (id: string) => createSelector(
    selectAllChecklists,
    checklists => checklists?.find(el => el.id_schiff == id)
)

// reparaturen
export const selectAllReparaturen = createSelector(
    specState,
    state => state.reparaturen
)
export const selectReparaturen = (status: string) => createSelector(
    selectAllReparaturen,
    reparaturen => reparaturen?.filter(el => el.status == status)
)

// laststandorte
export const selectAllLastStandorte = createSelector(
    specState,
    state => state.laststandorte
)

// standorte
export const selectAllStandorte = createSelector(
    specState,
    state => state.standorte
)
// export const selectAllStandorte = (id: string) => createSelector(
//     specState,
//     standorte => standorte?.filter(el => el. == id)
// )

// streifen
export const selectAllStreifen = createSelector(
    specState,
    state => state.streifen
)
export const selectStreifen = (status: string) => createSelector(
    selectAllStreifen,
    streifen => streifen?.filter(el => el.status == status)
)

// zaehlerstaende
export const selectAllZaehlerstaende = createSelector(
    specState,
    state => state.zaehlerstaende
)