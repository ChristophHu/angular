import { createAction, props } from "@ngrx/store"
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model"
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp"

// load data
export const loadPruefvermerke = createAction(
	"[Kat Resolver] Load Pruefvermerke"
)
export const loadZaehlerstandstypen = createAction(
	"[Kat Resolver] Load Zaehlerstandstypen"
)


// store loaded data
export const pruefvermerkeLoaded = createAction(
	"[Load Ship Effect] Pruefvermerke Loaded",
	props<{ pruefvermerke: Pruefvermerk[] }>()
)
export const zaehlerstandstypenLoaded = createAction(
	"[Load Ship Effect] Zaehlerstandstypen Loaded",
	props<{ zaehlerstandstypen: Zaehlerstandstyp[] }>()
)