import { createAction, props } from "@ngrx/store"
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model"
import { ShipSelection } from "src/app/core/model/ship-selection.model"
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp"
import { Dienststelle } from "src/app/core/model/dienststelle.model"
import { PruefvermerkKategorien } from "src/app/core/model/pruefvermerk-kategorie.model"
import { Checklistitem } from "src/app/core/model/checklistitem.model"
import { Zweck } from "src/app/core/model/zwecke.model"
import { Kennung } from "src/app/core/model/kennung.model"
import { Betriebsstoff } from "src/app/core/model/Betriebsstoff.model"
import { Funktion } from "src/app/core/model/funktion.model"

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
export const loadChecklistItems = createAction(
	"[Kat Resolver] Load Checklistitems"
)
export const loadBetriebsstoffe = createAction(
	"[Kat Resolver] Load Betriebsstoffe"
)
export const loadFunktionen = createAction(
	"[Kat Resolver] Load Funktionen"
)
export const loadKennungen = createAction(
	"[Kat Resolver] Load Kennungen"
)
export const loadZwecke = createAction(
	"[Kat Resolver] Load Zwecke"
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
export const loadedChecklistItems = createAction(
	"[Load Kat Effect] Checklistitems Loaded",
	props<{ items: Checklistitem[] }>()
)
export const loadedBetriebsstoffe = createAction(
	"[Load Kat Effect] Loaded Betriebsstoffe",
	props<{ betriebsstoffe: Betriebsstoff[] }>()
)
export const loadedFunktionen = createAction(
	"[Load Kat Effect] Loaded Funktionen",
	props<{ funktionen: Funktion[] }>()
)
export const loadedKennungen = createAction(
	"[Load Kat Effect] Loaded Kennungen",
	props<{ kennungen: Kennung[] }>()
)
export const loadedZwecke = createAction(
	"[Load Kat Effect] Loaded Zwecke",
	props<{ zwecke: Zweck[] }>()
)

export const updateChecklistItem = createAction(
	"[Modal Checklistitems] Update Checklistitems",
	props<{ item: Checklistitem }>()
)

