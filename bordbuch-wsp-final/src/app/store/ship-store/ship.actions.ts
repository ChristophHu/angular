import { Update } from "@ngrx/entity"
import { createAction, props } from "@ngrx/store"
import { Besatzung } from "src/app/core/model/besatzung.model"
import { Betankung } from "src/app/core/model/betankung"
import { Patrol } from "src/app/core/model/patrol.model"
import { Reparatur } from "src/app/core/model/reparatur"
import { Ship } from "src/app/core/model/ship.model"

// load ship
export const loadShip = createAction(
	"[Ship Resolver] Load Ship",
	props<{ id_ship: string }>()
)

export const shipLoaded = createAction(
	"[Load Ship Effect] Ship Loaded",
	props<{ ship: Ship }>()
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
export const insertPatrol = createAction(
	"[Streife] Insert Patrol",
	props<{ insert: Patrol }>()
)
export const insertPatrolSuccess = createAction(
	"[Streife] Insert Patrol",
	props<{ action: { insert: Patrol }, id: string }>()
)
export const updatePatrol = createAction(
	"[Streife] Update Patrol",
	props<{ update: Patrol }>()
)
export const deletePatrol = createAction(
	"[Streife] Delete Patrol",
	props<{ id: string }>()
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

export const resetStore = createAction(
	"[Auswahl] Store reset"
)



// entitystate test
// export const selectBesatzung = createAction(
// 	'[Besatzung Modal] Select Besatzung',
// 	props<{ besatzungId: string }>()
// )
// export const loadBesatzung = createAction(
// 	'[User/API] Load Users',
// 	props<{ besatzung: Besatzung[] }>()
// )