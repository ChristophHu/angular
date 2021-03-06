import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/models/feature";
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

// Klarmeldung
export const selectKlarmeldungen = createSelector(
    specState,
    state => state.klarmeldungen
    // state => state.klarmeldungen?.find(el => el.klar !== 'inst')
)
export const selectInstandsetzungen = createSelector(
    specState,
    state => state.instandsetzungen?.filter(el => el.klar == false)
)

// peilungen
export const selectAllPeilungen = createSelector(
    specState,
    state => state.peilungen
)
export const selectAllPeilungenById = (id: string) => createSelector(
    selectAllPeilungen,
    peilungen => peilungen?.find(el => el.id_schiff == id)
)

// reparaturen
export const selectAllReparaturen = createSelector(
    specState,
    state => state.reparaturen
)
export const selectReparaturen = (status: string) => createSelector(
    selectAllReparaturen,
    reparaturen => reparaturen?.filter(el => el.status == status || status == 'alle')
)

// reparaturfotos
export const selectAllReparaturFotos = createSelector(
    specState,
    state => state.reparaturfotos
)
export const selectReparaturFotosCount = createSelector(
    selectAllReparaturFotos,
    reparaturfotos => reparaturfotos?.length
)
export const selectReparaturFotosById = (id: string) => createSelector(
    selectAllReparaturFotos,
    reparaturfotos => reparaturfotos?.filter(el => el.id_reparatur == id)
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
export const selectStreifeById = (id_streife: string) => createSelector(
    selectAllStreifen,
    streifen => streifen?.find(el => el.id == id_streife)
)

// tanks
export const selectTanks = createSelector(
    specState,
    state => state.tanks
)
export const selectTankByIDShip = (id: string) => createSelector(
    selectTanks,
    tanks => tanks?.filter(el => el.id_schiff == id)
)
export const selectIdByTank = (bezeichnung: string) => createSelector(
    selectTanks,
    tanks => tanks?.find(el => el.bezeichnung == bezeichnung)?.id
)
export const selectTankByID = (id: string) => createSelector(
    selectTanks,
    tanks => tanks?.find(el => el.id == id)?.bezeichnung
)

// zaehlerstaende
export const selectAllZaehlerstaende = createSelector(
    specState,
    state => state.zaehlerstaende
)
export const selectZaehlerstaendeById = (id: string) => createSelector(
    selectAllZaehlerstaende,
    zaehlerstaende => zaehlerstaende?.filter(el => el.id_schiff == id)
)
export const selectDurchsichtByNameZaehlerstandstyp = (name: string, zaehlerstandstyp: string) => createSelector(
    selectAllZaehlerstaende,
    zaehlerstaende => zaehlerstaende?.find(el => el.name == name && el.zaehlerstandstyp == zaehlerstandstyp)?.betriebsstunden
)