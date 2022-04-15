import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from './ship.state'


export const selectShipState = createFeatureSelector<State>(Features.Ship)

// ship
// export const isShipLoaded = createSelector(
//     selectShipState,
//     state => state.isAllDataLoaded
// )

// export const selectedShip = createSelector(
//     selectShipState,
//     state => state.ship
// )
// export const selectShip = createSelector(
//     selectedShip,
//     ship => ship
// )
// export const selectShipId = createSelector(
//     selectedShip,
//     ship => ship?.id
// )
// export const selectShipName = createSelector(
//     selectedShip,
//     ship => ship?.name
// )

// patrol
// export const selectedPatrol = createSelector(
//     selectShipState,
//     state => state.patrol
// )
// export const isPatrolActive = createSelector(
//     selectShipState,
//     state => !!(state.patrol?.status == 'active')
// )
// export const isPatrolBeendet = createSelector(
//     selectShipState,
//     state => !!(state.patrol?.status == 'beendet')
// )
// export const patrolStatus = createSelector(
//     selectShipState,
//     state => state.patrol?.status
// )

// // besatzung
// export const selectedPatrolBesatzung = createSelector(
//     selectedPatrol,
//     patrol => patrol?.besatzung
// )

// export const selectPatrolId = createSelector(
//     selectedPatrol,
//     patrol => patrol?.id
// )

// export const selectBesatzung = createSelector(
//     selectedPatrol,
//     patrol => patrol?.besatzung
// )

// // zaehlerstaende
// export const selectZaehlerstaende = createSelector(
//     selectShipState,
//     state => state.zaehlerstaende
// )

// // reparaturen
// export const selectReparaturen = createSelector(
//     selectShipState,
//     state => state.reparaturen
// )

// // betankungen
// export const selectBetankungen = createSelector(
//     selectShipState,
//     state => state.betankungen
// )

// // tanks
// export const selectTanks = createSelector(
//     selectShipState,
//     state => state.tanks
// )
// export const selectTankById = (id: string) => createSelector(
//     selectTanks,
//     tanks => tanks?.find(el => el.id == id)
// )

// // peilung
// export const selectPeilungen = createSelector(
//     selectShipState,
//     state => state.peilungen
// )
// export const selectPeilungenById = (id: string) => createSelector(
//     selectPeilungen,
//     peilungen => peilungen?.find(el => el.id == id)
// )

// // checklist
// export const selectChecklist = createSelector(
//     selectShipState,
//     state => state.checklist
// )
// export const selectCheckedChecklistItems = createSelector(
//     selectChecklist,
//     checklist => checklist?.checklistItems?.filter((el: any) => el.checked == true)
// )
// export const selectUncheckedChecklistItems = createSelector(
//     selectChecklist,
//     checklist => checklist?.checklistItems?.filter((el: any) => el.checked == false)
// )

// // reparaturfotos
// export const selectAllReparaturFotos = createSelector(
//     selectShipState,
//     state => state.reparaturfotos
// )
// export const selectReparaturFotosCount = createSelector(
//     selectAllReparaturFotos,
//     reparaturfotos => reparaturfotos?.length
// )
// export const selectReparaturFotosById = (id_reparatur: string) => createSelector(
//     selectAllReparaturFotos,
//     reparaturfotos => reparaturfotos?.filter(el => el.id_reparatur == id_reparatur)
// )