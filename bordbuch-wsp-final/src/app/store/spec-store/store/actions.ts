import { createAction, props } from "@ngrx/store"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"

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