import { createAction, props } from "@ngrx/store"
import { Klarmeldung } from "src/app/core/model/klarmeldung.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"

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