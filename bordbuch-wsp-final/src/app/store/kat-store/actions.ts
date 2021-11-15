import { createAction, props } from "@ngrx/store"
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model"
import { ShipSelection } from "src/app/core/model/ship-selection.model"
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp"
import { Dienststelle } from "src/app/core/model/dienststelle.model"
import { PruefvermerkKategorien } from "src/app/core/model/pruefvermerk-kategorie.model"

// load data
export const loadAllShip = createAction(
	"[Kat Resolver] Load Ships"
)
export const loadPruefvermerke = createAction(
	"[Kat Resolver] Load Pruefvermerke"
)
export const loadPruefvermerkKategorien = createAction(
	"[Kat Resolver] Load PruefvermerkKategorien"
)
export const loadZaehlerstandstypen = createAction(
	"[Kat Resolver] Load Zaehlerstandstypen"
)
export const loadDienststellen = createAction(
	"[Kat Resolver] Load Dienststellen"
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
export const pruefvermerkKategorienLoaded = createAction(
	"[Load Kat Effect] PruefvermerkKategorien Loaded",
	props<{ pruefvermerkKategorien: PruefvermerkKategorien[] }>()
)
export const zaehlerstandstypenLoaded = createAction(
	"[Load Kat Effect] Zaehlerstandstypen Loaded",
	props<{ zaehlerstandstypen: Zaehlerstandstyp[] }>()
)
export const dienststellenLoaded = createAction(
	"[Load Kat Effect] Dienststellen Loaded",
	props<{ dienststellen: Dienststelle[] }>()
)
