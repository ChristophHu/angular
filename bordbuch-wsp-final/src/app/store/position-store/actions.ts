import { createAction, props } from "@ngrx/store"
import { Position } from "src/app/core/model/position"

// load data
export const loadPositions = createAction(
	"[Kat Resolver] Load Positions",
	props<{ id_ship: string }>()
)

export const loadedPositions = createAction(
	"[Load Ship Effect] Positions Loaded",
	props<{ positions: Position[] }>()
)
