import { createAction, props } from "@ngrx/store"
import { Unklar } from "src/app/core/model/unklar.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"

// unklar
export const loadUnklarByIdSchiff = createAction(
	"[Spec Facade] Load Unklar",
	props<{ id: string }>()
)
export const loadUnklarByIdSchiffSuccess = createAction(
	"[Load Spec Effect] Load Unklar Success",
	props<{ unklar: Unklar }>()
)
export const insertUnklar = createAction(
	"[Spec Facade] Insert Unklar",
	props<{ insert: Unklar }>()
)
export const insertUnklarSuccess = createAction(
	"[Spec Effect] Insert Unklar Success",
	props<{ action: { insert: Unklar }, id: string }>()
)
export const updateUnklar = createAction(
	"[Spec Facade] Update Unklar",
	props<{ update: Unklar }>()
)
export const updateUnklarSuccess = createAction(
	"[Spec Effect] Update Unklar Success",
	props<{ update: Unklar }>()
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