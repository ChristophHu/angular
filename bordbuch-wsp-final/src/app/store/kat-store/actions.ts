import { createAction, props } from "@ngrx/store"
import { Patrol } from "src/app/core/model/patrol.model"
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model"
import { Ship } from "src/app/core/model/ship.model"

// load data
export const loadPruefvermerke = createAction(
	"[Kat Resolver] Load Pruefvermerke"
)

// store loaded data
export const pruefvermerkeLoaded = createAction(
	"[Load Ship Effect] Kat Loaded",
	props<{ pruefvermerke: Pruefvermerk[] }>()
)