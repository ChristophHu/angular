import { createAction, props } from "@ngrx/store"
import { Patrol } from "src/app/core/model/patrol.model"
import { Ship } from "src/app/core/model/ship.model"

// load data
export const loadShip = createAction(
	"[Ship Resolver] Load Ship",
	props<{ id_ship: string }>()
)

// store loaded data
export const shipLoaded = createAction(
	"[Load Ship Effect] Ship Loaded",
	props<{ ship: Ship }>()
)

export const loadPatrol = createAction(
	"[Ship Resolver] Load Patrol",
	props<{ id_ship: string }>()
)

export const patrolLoaded = createAction(
	"[Load Patrol Effect] Patrol Loaded",
	props<{ patrol: Patrol }>()
)