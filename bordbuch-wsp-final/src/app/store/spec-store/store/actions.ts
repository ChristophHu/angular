import { createAction, props } from "@ngrx/store"
import { Besatzung } from "src/app/core/model/besatzung.model"
import { Betankung } from "src/app/core/model/betankung"
import { Checklist } from "src/app/core/model/checklist.model"
import { Klarmeldung } from "src/app/core/model/klarmeldung.model"
import { Patrol } from "src/app/core/model/patrol.model"
import { Peilung } from "src/app/core/model/peilung.model"
import { PositionReport } from "src/app/core/model/positionreport.model"
import { Reparatur } from "src/app/core/model/reparatur"
import { Ship } from "src/app/core/model/ship.model"
import { Tank } from "src/app/core/model/tank.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"

// store
export const resetStore = createAction(
	"[Auswahl] Store reset"
)

// besatzung
export const insertPatrolBesatzung = createAction(
	"[Edit Besatzung Dialog] Besatzung Insert",
	props<{ insert: Besatzung }>()
)
export const insertPatrolBesatzungSuccess = createAction(
	"[Edit Besatzung Dialog] Besatzung Insert Success",
	props<{ action: { insert: Besatzung }, id: string }>()
)
export const updatePatrolBesatzung = createAction(
	"[Edit Besatzung Dialog] Besatzung Updates",
	props<{ update: Besatzung }>()
)
export const updateBesatzungSuccess = createAction(
	"[Edit Besatzung Dialog] Besatzung Updates Success",
	props<{ update: Besatzung }>()
)
export const deletePatrolBesatzung = createAction(
	"[Edit Besatzung Dialog] Besatzung Delete",
	props<{ id: string }>()
)
export const deleteBesatzungSuccess = createAction(
	"[Edit Besatzung Dialog] Besatzung Delete Success",
	props<{ id: string }>()
)

// betankung
export const loadBetankungen = createAction(
	"[Ship Resolver] Load Betankungen",
	props<{ id_ship: string }>()
)
export const loadBetankungenSuccess = createAction(
	"[Load Ship Effect] Betankungen Loaded",
	props<{ betankungen: Betankung[] }>()
)
export const insertBetankung = createAction(
	"[Edit Betankungen Dialog] Betankungen Insert",
	props<{ insert: Betankung }>()
)
export const insertBetankungSuccess = createAction(
	"[Edit Betankungen Dialog] Betankungen Insert Success",
	props<{ action: { insert: Betankung }, id: string }>()
)
export const updateBetankung = createAction(
	"[Edit Betankungen Dialog] Betankungen Updates",
	props<{ update: Betankung }>()
)
export const updateBetankungSuccess = createAction(
	"[Edit Betankungen Dialog] Betankungen Delete",
	props<{ update: Betankung }>()
)
export const deleteBetankung = createAction(
	"[Edit Betankungen Dialog] Betankungen Delete",
	props<{ id: string }>()
)
export const deleteBetankungSuccess = createAction(
	"[Edit Betankungen Dialog] Betankungen Delete",
	props<{ id: string }>()
)

// checklist
export const loadChecklist = createAction(
	"[Ship Resolver] Load Checklist",
	props<{ id_ship: string }>()
)
export const loadChecklistSuccess = createAction(
	"[Load Ship Effect] Loaded Checklist",
	props<{ checklist: Checklist }>()
)
export const insertChecklist = createAction(
	"[Load Ship Effect] Insert Checklist",
	props<{ insert: Checklist }>()
)
export const insertChecklistSuccess = createAction(
	"[Load Ship Effect] Insert Checklist Success",
	props<{ action: { insert: Checklist }, id: string }>()
)
export const updateChecklist = createAction(
	"[Load Ship Effect] Update Checklist",
	props<{ update: Checklist }>()
)
export const updateChecklistSuccess = createAction(
	"[Load Ship Effect] Update Checklist Success",
	props<{ update: Checklist }>()
)

// Klarmeldung
export const loadKlarmeldungByIdSchiff = createAction(
	"[Spec Facade] Load Klarmeldung",
	props<{ id: string }>()
)
export const loadKlarmeldungByIdSchiffSuccess = createAction(
	"[Load Spec Effect] Load Klarmeldung Success",
	props<{ klarmeldung: Klarmeldung }>()
)
export const insertKlarmeldung = createAction(
	"[Spec Facade] Insert Klarmeldung",
	props<{ insert: Klarmeldung }>()
)
export const insertKlarmeldungSuccess = createAction(
	"[Spec Effect] Insert Klarmeldung Success",
	props<{ action: { insert: Klarmeldung }, id: string }>()
)
export const updateKlarmeldung = createAction(
	"[Spec Facade] Update Klarmeldung",
	props<{ update: Klarmeldung }>()
)
export const updateKlarmeldungSuccess = createAction(
	"[Spec Effect] Update Klarmeldung Success",
	props<{ update: Klarmeldung }>()
)

// patrol
export const loadPatrol = createAction(
	"[Ship Resolver] Load Patrol",
	props<{ id_ship: string }>()
)
export const loadPatrolSuccess = createAction(
	"[Load Patrol Effect] Patrol Loaded",
	props<{ patrol: Patrol }>()
)
export const initializePatrol = createAction(
	"[Streife] Initialize Patrol",
	props<{ patrol: Patrol }>()
)
export const insertPatrol = createAction(
	"[Streife] Insert Patrol",
	props<{ insert: Patrol }>()
)
export const insertPatrolSuccess = createAction(
	"[Streife] Insert Patrol Success",
	props<{ action: { insert: Patrol }, id: string }>()
)
export const updatePatrol = createAction(
	"[Streife] Update Patrol",
	props<{ update: Patrol }>()
)
export const updatePatrolSuccess = createAction(
	"[Streife] Update Patrol Success",
	props<{ action: { update: Patrol }}>()
)
export const deletePatrol = createAction(
	"[Streife] Delete Patrol",
	props<{ id: string }>()
)
export const deletePatrolSuccess = createAction(
	"[Streife] Delete Patrol Success",
	props<{ status: number }>()
)

// peilung
export const loadPeilung = createAction(
	"[Ship Resolver] Load Peilung",
	props<{ id_ship: string }>()
)
export const loadPeilungSuccess = createAction(
	"[Ship Resolver] Loaded Peilung",
	props<{ peilungen: Peilung[] }>()
)
export const insertPeilung = createAction(
	"[Edit Peilung Dialog] Insert Peilung",
	props<{ insert: Peilung }>()
)
export const insertPeilungSuccess = createAction(
	"[Edit Peilung Dialog] Insert Peilung Success",
	props<{ action: { insert: Peilung }, id: string }>()
)
export const updatePeilung = createAction(
	"[Modal Peilung] Update Peilung",
	props<{ peilung: Peilung }>()
)
export const updatePeilungSuccess = createAction(
	"[Modal Peilung] Update Peilung Success",
	props<{ peilung: Peilung }>()
)

// position
export const loadPositions = createAction(
	"[Spec Facade] Load Positions",
	props<{ id: string }>()
)
export const loadPositionsSuccess = createAction(
	"[Load Spec Effect] Load Positions Success",
	props<{ positionReport: PositionReport[] }>()
)
export const insertPosition = createAction(
	"[Spec Facade] insert Position",
	props<{ insert: PositionReport }>()
)
export const insertPositionSuccess = createAction(
	"[Position Component] insert PositionReport Success",
	props<{ action: { insert: PositionReport }, id: string }>()
)
export const updatePosition = createAction(
	"[Spec Facade] update Position",
	props<{ update: PositionReport }>()
)
export const updatePositionSuccess = createAction(
	"[Load Spec Effect] Update Position Success",
	props<{ update: PositionReport }>()
)
export const deletePosition = createAction(
	"[Spec Facade] delete Position",
	props<{ id: string }>()
)
export const deletePositionSuccess = createAction(
	"[Load Spec Effect] delete Position Success",
	props<{ id: string }>()
)

// reparaturen
export const loadReparaturen = createAction(
	"[Ship Resolver] Load Reparaturen",
	props<{ id_ship: string }>()
)
export const loadReparaturenSuccess = createAction(
	"[Load Ship Effect] Reparaturen Loaded",
	props<{ reparaturen: Reparatur[] }>()
)
export const insertReparatur = createAction(
	"[Edit Pruefvermerk Dialog] Reparatur Insert",
	props<{ insert: Reparatur }>()
)
export const insertReparaturSuccess = createAction(
	"[Edit Pruefvermerk Dialog] Reparatur Insert Success",
	props<{ action: { insert: Reparatur }, id: string }>()
)
export const updateReparatur = createAction(
	"[Edit Pruefvermerk Dialog] Reparatur Update",
	props<{ update: Reparatur }>()
)
export const updateReparaturSuccess = createAction(
	"[Edit Pruefvermerk Dialog] Reparatur Update Success",
	props<{ update: Reparatur }>()
)

// reparaturfoto
export const downloadReparaturFotos = createAction(
	"[Ship Resolver] Download ReparaturFotos",
	props<{ id: string }>()
)
export const downloadReparaturFotosSuccess = createAction(
	"[Load Spec Effect] ReparaturFotos Download Success",
	props<{ fotos: any[] }>()
)
export const uploadReparaturFoto = createAction(
	"[Edit Reparatur Dialog] ReparaturFoto Upload",
	props<{ upload: any }>()
)
export const uploadReparaturFotoSuccess = createAction(
	"[Edit Reparatur Dialog] ReparaturFoto Upload Success",
	props<{ action: { upload: any }, id: string }>()
)
export const deleteReparaturFoto = createAction(
	"[Modal Reparatur Dialog] Delete ReparaturFoto",
	props<{ id: string }>()
)
export const deleteReparaturFotoSuccess = createAction(
	"[Modal Reparatur Dialog] Delete ReparaturFoto Success",
	props<{ id: string }>()
)

// saving
export const updateSaving = createAction(
	"[Streife] Update Saving",
	props<{ update: boolean }>()
)

// ship
export const loadShip = createAction(
	"[Ship Resolver] Load Ship",
	props<{ id_ship: string }>()
)

export const loadShipSuccess = createAction(
	"[Load Ship Effect] Ship Loaded",
	props<{ ship: Ship }>()
)
export const updateShip = createAction(
	"[Streife] Update Ship",
	props<{ update: Ship }>()
)
export const updateShipSuccess= createAction(
	"[Streife] Update Ship Success",
	props<{ update: Ship }>()
)

// tank
export const loadTank = createAction(
	"[Ship Resolver] Load Tank",
	props<{ id_ship: string }>()
)
export const loadTankSuccess = createAction(
	"[Load Ship Effect] Loaded Tank",
	props<{ tanks: Tank[] }>()
)

// zaehlerstaende
export const loadAllZaehlerstaende = createAction(
	"[Kat Resolver] Load Zaehlerstaende",
	props<{ id: string }>()
)
export const loadedAllZaehlerstaende = createAction(
	"[Load Spec Effect] Loaded Zaehlerstaende",
	props<{ zaehlerstaende: Zaehlerstand[] }>()
)
export const updateZaehlerstand = createAction(
	"[Modal Zaehlerstand] Update Zaehlerstand",
	props<{ update: Zaehlerstand }>()
)
export const updateZaehlerstandSuccess = createAction(
	"[Modal Zaehlerstand] Update Zaehlerstand Success",
	props<{ action: { update: Zaehlerstand }, id: string }>()
)
