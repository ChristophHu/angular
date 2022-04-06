import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from "./reducers";

export const specState = createFeatureSelector<State>(Features.Spec)

// ship
export const isSpecLoaded = createSelector(
    specState,
    state => state.isAllDataLoaded
)

// Klarmeldung
export const selectKlarmeldung = createSelector(
    specState,
    state => state.klarmeldung
)

// zaehlerstaende
export const selectAllZaehlerstaende = createSelector(
    specState,
    state => state.zaehlerstaende
)
export const selectZaehlerstaendeById = (id: string) => createSelector(
    selectAllZaehlerstaende,
    zaehlerstaende => zaehlerstaende?.filter(el => el.id_ship == id)
)

// export const selectDurchsichtByNameZaehlerstandstyp = (name: string, zaehlerstandstyp: string) => createSelector(
//     selectAllZaehlerstaende,
//     zaehlerstaende => zaehlerstaende?.find(el => el.name == name && el.zaehlerstandstyp == zaehlerstandstyp)?.betriebsstunden
// )