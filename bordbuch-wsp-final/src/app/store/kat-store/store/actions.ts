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
import { Status } from "src/app/core/model/reparatur-status.model"
import { PositionReport } from "src/app/core/model/positionreport.model"

// betriebsstoffe
export const loadBetriebsstoffe = createAction(
	"[Kat Resolver] Load Betriebsstoffe"
)
export const loadedBetriebsstoffe = createAction(
	"[Load Kat Effect] Loaded Betriebsstoffe",
	props<{ betriebsstoffe: Betriebsstoff[] }>()
)

// dienststellen
export const loadDienststellen = createAction(
	"[Kat Resolver] Load Dienststellen"
)
export const dienststellenLoaded = createAction(
	"[Load Kat Effect] Dienststellen Loaded",
	props<{ dienststellen: Dienststelle[] }>()
)

// funktionen
export const loadFunktionen = createAction(
	"[Kat Resolver] Load Funktionen"
)
export const loadedFunktionen = createAction(
	"[Load Kat Effect] Loaded Funktionen",
	props<{ funktionen: Funktion[] }>()
)

// kennung
export const loadKennungen = createAction(
	"[Kat Resolver] Load Kennungen"
)
export const loadedKennungen = createAction(
	"[Load Kat Effect] Loaded Kennungen",
	props<{ kennungen: Kennung[] }>()
)

// lastpositions
export const loadLastPositions = createAction(
	"[Kat Resolver] Load LastPosition"
)
export const loadLastPositionsSuccess = createAction(
	"[Load Kat Effect] Loaded LastPosition",
	props<{ lastPositions: PositionReport[] }>()
)

// pruefvermerke
export const loadPruefvermerke = createAction(
	"[Kat Resolver] Load Pruefvermerke"
)
export const pruefvermerkeLoaded = createAction(
	"[Load Kat Effect] Pruefvermerke Loaded",
	props<{ pruefvermerke: Pruefvermerk[] }>()
)

// pruefvermerkkategorien
export const loadPruefvermerkKategorien = createAction(
	"[Kat Resolver] Load PruefvermerkKategorien"
)
export const pruefvermerkKategorienLoaded = createAction(
	"[Load Kat Effect] PruefvermerkKategorien Loaded",
	props<{ pruefvermerkKategorien: PruefvermerkKategorien[] }>()
)

// ships
export const loadAllShip = createAction(
	"[Kat Resolver] Load Ships"
)
export const allShipLoaded = createAction(
	"[Load Kat Effect] Ships Loaded",
	props<{shipSelection: ShipSelection[]}>()
)

// status
export const loadAllStatus = createAction(
	"[Kat Resolver] Load Status"
)
export const loadedAllStatus = createAction(
	"[Load Kat Status] Loaded Status",
	props<{ status: Status[] }>()
)

// zaehlerstandstypen
export const loadZaehlerstandstypen = createAction(
	"[Kat Resolver] Load Zaehlerstandstypen"
)
export const zaehlerstandstypenLoaded = createAction(
	"[Load Kat Effect] Zaehlerstandstypen Loaded",
	props<{ zaehlerstandstypen: Zaehlerstandstyp[] }>()
)

// zweck
export const loadZwecke = createAction(
	"[Kat Resolver] Load Zwecke"
)
export const loadedZwecke = createAction(
	"[Load Kat Effect] Loaded Zwecke",
	props<{ zwecke: Zweck[] }>()
)

