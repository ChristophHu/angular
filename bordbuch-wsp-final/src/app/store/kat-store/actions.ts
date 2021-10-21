import { createAction, props } from "@ngrx/store"
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model"
import { ShipSelection } from "src/app/core/model/ship-selection.model"
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp"

// load data
export const loadAllShip = createAction(
	"[Kat Resolver] Load Ships"
)
export const loadPruefvermerke = createAction(
	"[Kat Resolver] Load Pruefvermerke"
)
export const loadZaehlerstandstypen = createAction(
	"[Kat Resolver] Load Zaehlerstandstypen"
)

// store loaded data
export const allShipLoaded = createAction(
	"[Load Kat Effect] Ships Loaded",
	props<{shipSelection: ShipSelection[]}>()
)
export const pruefvermerkeLoaded = createAction(
	"[Load Kat Effect] Pruefvermerke Loaded",
	props<{ pruefvermerke: Pruefvermerk[] }>()
)
export const zaehlerstandstypenLoaded = createAction(
	"[Load Kat Effect] Zaehlerstandstypen Loaded",
	props<{ zaehlerstandstypen: Zaehlerstandstyp[] }>()
)