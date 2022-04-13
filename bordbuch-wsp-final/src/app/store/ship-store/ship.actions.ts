import { Update } from "@ngrx/entity"
import { createAction, props } from "@ngrx/store"
import { Besatzung } from "src/app/core/model/besatzung.model"
import { Betankung } from "src/app/core/model/betankung"
import { Checklist } from "src/app/core/model/checklist.model"
import { Patrol } from "src/app/core/model/patrol.model"
import { Peilung } from "src/app/core/model/peilung.model"
import { Reparatur } from "src/app/core/model/reparatur"
import { Ship } from "src/app/core/model/ship.model"
import { Tank } from "src/app/core/model/tank.model"


// load ship
export const loadShip = createAction(
	"[Ship Resolver] Load Ship",
	props<{ id_ship: string }>()
)

export const shipLoaded = createAction(
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

// patrol
export const loadPatrol = createAction(
	"[Ship Resolver] Load Patrol",
	props<{ id_ship: string }>()
)
export const patrolLoaded = createAction(
	"[Load Patrol Effect] Patrol Loaded",
	props<{ patrol: Patrol }>()
)
export const initializePatrol = createAction(
	"[Streife] Initialize Patrol",
	props<{ initialize: Patrol }>()
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

// reparaturen
export const loadReparaturen = createAction(
	"[Ship Resolver] Load Reparaturen",
	props<{ id_ship: string }>()
)
export const reparaturenLoaded = createAction(
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

// betankung
export const loadBetankungen = createAction(
	"[Ship Resolver] Load Betankungen",
	props<{ id_ship: string }>()
)
export const betankungenLoaded = createAction(
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
	props<{ update: Update<Betankung> }>()
)
export const deleteBetankung = createAction(
	"[Edit Betankungen Dialog] Betankungen Delete",
	props<{ id: string }>()
)

// tank
export const loadTank = createAction(
	"[Ship Resolver] Load Tank",
	props<{ id_ship: string }>()
)
export const loadedTank = createAction(
	"[Load Ship Effect] Loaded Tank",
	props<{ tanks: Tank[] }>()
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
	props<{update: Update<Besatzung>}>()
)
export const deletePatrolBesatzung = createAction(
	"[Edit Besatzung Dialog] Besatzung Delete",
	props<{ id: string }>()
)

// peilung
export const loadPeilung = createAction(
	"[Ship Resolver] Load Peilung",
	props<{ id_ship: string }>()
)
export const loadedPeilung = createAction(
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

export const resetStore = createAction(
	"[Auswahl] Store reset"
)

// checklist
export const loadChecklist = createAction(
	"[Ship Resolver] Load Checklist",
	props<{ id_ship: string }>()
)
export const loadedChecklist = createAction(
	"[Load Ship Effect] Loaded Checklist",
	props<{ checklist: Checklist }>()
)
export const insertChecklist = createAction(
	"[Load Ship Effect] Insert Checklist",
	props<{ insert: Checklist }>()
)
export const updateChecklist = createAction(
	"[Load Ship Effect] Update Checklist",
	props<{ update: Checklist }>()
)
