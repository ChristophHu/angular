import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from "./reducers";

export const specState = createFeatureSelector<State>(Features.Spec)

// ship
export const isSpecLoaded = createSelector(
    specState,
    state => state.isAllDataLoaded
)

// betankungen
export const selectBetankungen = createSelector(
    specState,
    state => state.betankungen
)

// checklist
export const selectChecklist = createSelector(
    specState,
    state => state.checklist
)
export const selectCheckedChecklistItems = createSelector(
    selectChecklist,
    checklist => checklist?.checklistItems?.filter((el: any) => el.checked == true)
)
export const selectUncheckedChecklistItems = createSelector(
    selectChecklist,
    checklist => checklist?.checklistItems?.filter((el: any) => el.checked == false)
)

// Klarmeldung
export const selectKlarmeldung = createSelector(
    specState,
    state => state.klarmeldung
)

// patrol
export const selectedPatrol = createSelector(
    specState,
    state => state.patrol
)
export const isPatrolActive = createSelector(
    selectedPatrol,
    patrol => !!(patrol?.status == 'active')
)
export const isPatrolBeendet = createSelector(
    selectedPatrol,
    patrol => !!(patrol?.status == 'beendet')
)
export const patrolStatus = createSelector(
    selectedPatrol,
    patrol => patrol?.status
)

// besatzung
export const selectedPatrolBesatzung = createSelector(
    selectedPatrol,
    patrol => patrol?.besatzung
)

export const selectPatrolId = createSelector(
    selectedPatrol,
    patrol => patrol?.id
)

export const selectBesatzung = createSelector(
    selectedPatrol,
    patrol => patrol?.besatzung
)

// peilung
export const selectPeilungen = createSelector(
    specState,
    state => state.peilungen
)
export const selectPeilungenById = (id: string) => createSelector(
    selectPeilungen,
    peilungen => peilungen?.find(el => el.id == id)
)

// position
export const selectPositions = createSelector(
    specState,
    state => state.positions
)
export const selectPositionsByPatrol = (id_streife: string) => createSelector(
    selectPositions,
    positions => positions?.filter(el => el.id_streife == id_streife)
)
export const selectPositionById = (id: any) => createSelector(
    selectPositions,
    position => position?.find(el => el.id == id)
)

// reparaturen
export const selectReparaturen = createSelector(
    specState,
    state => state.reparaturen
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
export const selectReparaturFotosById = (id_reparatur: string) => createSelector(
    selectAllReparaturFotos,
    reparaturfotos => reparaturfotos?.filter(el => el.id_reparatur == id_reparatur)
)

// saving
export const selectSaving = createSelector(
    specState,
    state => state.saving
)

// ship
// export const isShipLoaded = createSelector(
//     specState,
//     state => state.isAllDataLoaded
// )
export const selectedShip = createSelector(
    specState,
    state => state.ship
)
// export const selectShip = createSelector(
//     selectedShip,
//     ship => ship
// )
export const selectShipId = createSelector(
    selectedShip,
    ship => ship?.id
)
export const selectShipName = createSelector(
    selectedShip,
    ship => ship?.name
)

// tanks
export const selectTanks = createSelector(
    specState,
    state => state.tanks
)
export const selectTankById = (id: string) => createSelector(
    selectTanks,
    tanks => tanks?.find(el => el.id == id)
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