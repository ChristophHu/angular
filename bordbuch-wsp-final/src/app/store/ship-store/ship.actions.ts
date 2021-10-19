import { Update } from "@ngrx/entity"
import { createAction, props } from "@ngrx/store"
import { Betankung } from "src/app/core/model/betankung"
import { Patrol } from "src/app/core/model/patrol.model"
import { Reparatur } from "src/app/core/model/reparatur"
import { Ship } from "src/app/core/model/ship.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"

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

// zaehlerstaende
export const loadZaehlerstaende = createAction(
	"[Ship Resolver] Load Zaehlerstaende",
	props<{ id_ship: string }>()
)
export const zaehlerstaendeLoaded = createAction(
	"[Load Ship Effect] Zaehlerstaende Loaded",
	props<{ zaehlerstaende: Zaehlerstand[] }>()
)
export const updateZaehlerstand = createAction(
	"[Edit Data Dialog] Zaehlerstaend Updates",
	props<{ zaehlerstand: Zaehlerstand }>()
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

// betankung
export const loadBetankungen = createAction(
	"[Ship Resolver] Load Betankungen",
	props<{ id_ship: string }>()
)

export const betankungenLoaded = createAction(
	"[Load Ship Effect] Betankungen Loaded",
	props<{ betankungen: Betankung[] }>()
)