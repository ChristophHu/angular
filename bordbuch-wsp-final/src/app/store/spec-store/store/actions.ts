import { createAction, props } from "@ngrx/store"
import { Klarmeldung } from "src/app/core/model/klarmeldung.model"
import { PositionReport } from "src/app/core/model/positionreport.model"
import { Zaehlerstand } from "src/app/core/model/zaehlerstand"

// position
export const loadPositions = createAction(
	"[Spec Facade] Load Positions",
	props<{ id: string }>()
)
export const loadPositionsSuccess = createAction(
	"[Load Spec Effect] Load Positions Success",
	props<{ positionReport: PositionReport[] }>()
)
export const insertPosition = createAction(
	"[Spec Facade] insert Position",
	props<{ insert: PositionReport }>()
)
export const insertPositionSuccess = createAction(
	"[Position Component] insert PositionReport Success",
	props<{ action: { insert: PositionReport }, id: string }>()
)
export const updatePosition = createAction(
	"[Spec Facade] update Position",
	props<{ update: PositionReport }>()
)
export const updatePositionSuccess = createAction(
	"[Load Spec Effect] Update Position Success",
	props<{ update: PositionReport }>()
)
export const deletePosition = createAction(
	"[Spec Facade] delete Position",
	props<{ id: string }>()
)
export const deletePositionSuccess = createAction(
	"[Load Spec Effect] delete Position Success",
	props<{ id: string }>()
)

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

// saving
export const updateSaving = createAction(
	"[Streife] Update Saving",
	props<{ update: boolean }>()
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
