import { createAction, props } from "@ngrx/store"
import { Ship } from "src/app/core/model/ship.model"

// load data
export const loadShip = createAction(
	"[Ship Resolver] Load All Data"
)

// store loaded data
export const shipLoaded = createAction(
	"[Load Ship Effect] Ship Loaded",
	props<{ship: Ship[]}>()
)