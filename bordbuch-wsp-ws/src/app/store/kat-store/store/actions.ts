import { createAction, props } from "@ngrx/store"
import { Dienststelle } from "src/app/core/models/dienststelle.model"
import { Kat } from "src/app/core/models/kat.model"
import { Pruefvermerk } from "src/app/core/models/pruefvermerk.model"
import { Status } from "src/app/core/models/reparatur-status.model"
import { Schiff } from "src/app/core/models/schiff.model"
import { Zaehlerstandstyp } from "src/app/core/models/zaehlerstandstyp.model"

// betriebsstoffe
export const loadBetriebsstoffe = createAction(
	"[Kat Resolver] Load Betriebsstoffe"
)
export const loadedBetriebsstoffe = createAction(
	"[Load Kat Effect] Loaded Betriebsstoffe",
	props<{ kat: Kat[] }>()
)
export const insertBetriebsstoff = createAction(
	"[Modal Betriebsstoff] Insert Betriebsstoff",
	props<{ insert: Kat }>()
)
export const insertBetriebsstoffSuccess = createAction(
	"[Modal Betriebsstoff] Insert Betriebsstoff Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateBetriebsstoff = createAction(
	"[Modal Betriebsstoff] Update Betriebsstoff",
	props<{ update: Kat }>()
)
export const updateBetriebsstoffSuccess = createAction(
	"[Modal Betriebsstoff] Update Betriebsstoff Success",
	props<{ update: Kat }>()
)
export const deleteBetriebsstoff = createAction(
	"[Modal Betriebsstoff] Delete Betriebsstoff",
	props<{ id: string }>()
)
export const deleteBetriebsstoffSuccess = createAction(
	"[Modal Betriebsstoff] Delete Betriebsstoff Success",
	props<{ id: string }>()
)

// checkliste
export const loadCheckliste = createAction(
	"[Kat Resolver] Load Checkliste"
)
export const loadedCheckliste = createAction(
	"[Load Kat Effect] Loaded Checkliste",
	props<{ kat: Kat[] }>()
)
export const insertChecklist = createAction(
	"[Modal Checklist] Insert Checklist",
	props<{ insert: Kat }>()
)
export const insertChecklistSuccess = createAction(
	"[Modal Checklist] Insert Checklist Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateChecklist = createAction(
	"[Modal Checklist] Update Checklist",
	props<{ update: Kat }>()
)
export const updateChecklistSuccess = createAction(
	"[Modal Checklist] Update Checklist Success",
	props<{ update: Kat }>()
)
export const deleteChecklist = createAction(
	"[Modal Checklist] Delete Checklist",
	props<{ id: string }>()
)
export const deleteChecklistSuccess = createAction(
	"[Modal Checklist] Delete Checklist Success",
	props<{ id: string }>()
)

// dienststellen
export const loadDienststellen = createAction(
	"[Kat Resolver] Load Dienststellen"
)
export const loadedDienststellen = createAction(
	"[Load Kat Effect] Loaded Dienststellen",
	props<{ dienststelle: Dienststelle[] }>()
)
export const insertDienststelle = createAction(
	"[Modal Dienststelle] Insert Dienststelle",
	props<{ insert: Dienststelle }>()
)
export const insertDienststelleSuccess = createAction(
	"[Modal Dienststelle] Insert Dienststelle Success",
	props<{ action: { insert: Dienststelle }, id: string }>()
)
export const updateDienststelle = createAction(
	"[Modal Dienststelle] Update Dienststelle",
	props<{ update: Dienststelle }>()
)
export const updateDienststelleSuccess = createAction(
	"[Modal Dienststelle] Update Dienststelle Success",
	props<{ update: Dienststelle }>()
)
export const deleteDienststelle = createAction(
	"[Modal Dienststelle] Delete Dienststelle",
	props<{ id: string }>()
)
export const deleteDienststelleSuccess = createAction(
	"[Modal Dienststelle] Delete Dienststelle Success",
	props<{ id: string }>()
)

// funktionen
export const loadFunktionen = createAction(
	"[Kat Resolver] Load Funktionen"
)
export const loadedFunktionen = createAction(
	"[Load Kat Effect] Loaded Funktionen",
	props<{ kat: Kat[] }>()
)
export const insertFunktion = createAction(
	"[Modal Funktion] Insert Funktion",
	props<{ insert: Kat }>()
)
export const insertFunktionSuccess = createAction(
	"[Modal Funktion] Insert Funktion Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateFunktion = createAction(
	"[Modal Funktion] Update Funktion",
	props<{ update: Kat }>()
)
export const updateFunktionSuccess = createAction(
	"[Modal Funktion] Update Funktion Success",
	props<{ update: Kat }>()
)
export const deleteFunktion = createAction(
	"[Modal Funktion] Delete Funktion",
	props<{ id: string }>()
)
export const deleteFunktionSuccess = createAction(
	"[Modal Funktion] Delete Funktion Success",
	props<{ id: string }>()
)

// kennungen
export const loadKennungen = createAction(
	"[Kat Resolver] Load Kennungen"
)
export const loadedKennungen = createAction(
	"[Load Kat Effect] Loaded Kennungen",
	props<{ kat: Kat[] }>()
)
export const insertKennung = createAction(
	"[Modal Kennung] Insert Kennung",
	props<{ insert: Kat }>()
)
export const insertKennungSuccess = createAction(
	"[Modal Kennung] Insert Kennung Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateKennung = createAction(
	"[Modal Kennung] Update Kennung",
	props<{ update: Kat }>()
)
export const updateKennungSuccess = createAction(
	"[Modal Kennung] Delete Kennung Success",
	props<{ update: Kat }>()
)
export const deleteKennung = createAction(
	"[Modal Kennung] Delete Kennung",
	props<{ id: string }>()
)
export const deleteKennungSuccess = createAction(
	"[Modal Kennung] Delete Kennung Success",
	props<{ id: string }>()
)

// pruefvermerke
export const loadPruefvermerke = createAction(
	"[Kat Resolver] Load Pruefvermerke"
)
export const loadedPruefvermerke = createAction(
	"[Load Kat Effect] Loaded Pruefvermerke",
	props<{ pruefvermerk: Pruefvermerk[] }>()
)
export const insertPruefvermerk = createAction(
	"[Modal Pruefvermerk] Insert Pruefvermerk",
	props<{ insert: Pruefvermerk }>()
)
export const insertPruefvermerkSuccess = createAction(
	"[Modal Pruefvermerk] Insert Pruefvermerk Success",
	props<{ action: { insert: Pruefvermerk }, id: string }>()
)
export const updatePruefvermerk = createAction(
	"[Modal Pruefvermerk] Update Pruefvermerk",
	props<{ update: Pruefvermerk }>()
)
export const updatePruefvermerkSuccess = createAction(
	"[Modal Pruefvermerk] Update Pruefvermerk Success",
	props<{ update: Pruefvermerk }>()
)
export const deletePruefvermerk = createAction(
	"[Modal Pruefvermerk] Delete Pruefvermerk",
	props<{ id: string }>()
)
export const deletePruefvermerkSuccess = createAction(
	"[Modal Pruefvermerk] Delete Pruefvermerk Success",
	props<{ id: string }>()
)

// pruefvermerkkategorien
export const loadPruefvermerkkategorien = createAction(
	"[Kat Resolver] Load Pruefvermerkkategorien"
)
export const loadedPruefvermerkkategorien = createAction(
	"[Load Kat Effect] Loaded Pruefvermerkkategorien",
	props<{ kat: Kat[] }>()
)
export const insertPruefvermerkkategorie = createAction(
	"[Modal Pruefvermerkkategorie] Insert Pruefvermerkkategorie",
	props<{ insert: Kat }>()
)
export const insertPruefvermerkkategorieSuccess = createAction(
	"[Modal Pruefvermerkkategorie] Insert Pruefvermerkkategorie Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updatePruefvermerkkategorie = createAction(
	"[Modal Pruefvermerkkategorie] Update Pruefvermerkkategorie",
	props<{ update: Kat }>()
)
export const updatePruefvermerkkategorieSuccess = createAction(
	"[Modal Pruefvermerkkategorie] Update Pruefvermerkkategorie Success",
	props<{ update: Kat }>()
)
export const deletePruefvermerkkategorie = createAction(
	"[Modal Pruefvermerkkategorie] Delete Pruefvermerkkategorie",
	props<{ id: string }>()
)
export const deletePruefvermerkkategorieSuccess = createAction(
	"[Modal Pruefvermerkkategorie] Delete Pruefvermerkkategorie Success",
	props<{ id: string }>()
)

// schiffe
export const loadSchiffe = createAction(
	"[Kat Resolver] Load Schiffe"
)
export const loadedSchiffe = createAction(
	"[Load Kat Effect] Loaded Schiffe",
	props<{ schiffe: Schiff[] }>()
)
export const insertSchiff = createAction(
	"[Modal Schiff] Insert Schiff",
	props<{ insert: Schiff }>()
)
export const insertSchiffSuccess = createAction(
	"[Modal Schiff] Insert Schiff Success",
	props<{ action: { insert: Schiff }, id: string }>()
)
export const updateSchiff = createAction(
	"[Modal Schiff] Update Schiff",
	props<{ update: Schiff }>()
)
export const updateSchiffSuccess = createAction(
	"[Modal Schiff] Update Schiff Success",
	props<{ update: Schiff }>()
)
export const deleteSchiff = createAction(
	"[Modal Schiff] Delete Schiff",
	props<{ id: string }>()
)
export const deleteSchiffSuccess = createAction(
	"[Modal Schiff] Delete Schiff Success",
	props<{ id: string }>()
)

// status
export const loadAllStatus = createAction(
	"[Kat Resolver] Load Status"
)
export const loadedAllStatus = createAction(
	"[Load Kat Status] Loaded Status",
	props<{ status: Status[] }>()
)
export const insertStatus = createAction(
	"[Modal Status] Insert Status",
	props<{ insert: Status }>()
)
export const insertStatusSuccess = createAction(
	"[Modal Status] Insert Status Success",
	props<{ action: { insert: Status }, id: string }>()
)
export const updateStatus = createAction(
	"[Modal Status] Update Status",
	props<{ update: Status }>()
)
export const updateStatusSuccess = createAction(
	"[Modal Status] Update Status Success",
	props<{ update: Status }>()
)
export const deleteStatus = createAction(
	"[Modal Status] Delete Status",
	props<{ id: string }>()
)
export const deleteStatusSuccess = createAction(
	"[Modal Status] Delete Status Success",
	props<{ id: string }>()
)

// zaehlerstandstypen
export const loadZaehlerstandstypen = createAction(
	"[Kat Resolver] Load Zaehlerstandstypen"
)
export const loadedZaehlerstandstypen = createAction(
	"[Load Kat Effect] Loaded Zaehlerstandstypen",
	props<{ kat: Zaehlerstandstyp[] }>()
)
export const insertZaehlerstandstyp = createAction(
	"[Modal Zaehlerstandstyp] Insert Zaehlerstandstyp",
	props<{ insert: Zaehlerstandstyp }>()
)
export const insertZaehlerstandstypSuccess = createAction(
	"[Modal Zaehlerstandstyp] Insert Zaehlerstandstyp Success",
	props<{ action: { insert: Zaehlerstandstyp }, id: string }>()
)
export const updateZaehlerstandstyp = createAction(
	"[Modal Zaehlerstandstyp] Update Zaehlerstandstyp",
	props<{ update: Zaehlerstandstyp }>()
)
export const updateZaehlerstandstypSuccess = createAction(
	"[Modal Zaehlerstandstyp] Update Zaehlerstandstyp Success",
	props<{ update: Zaehlerstandstyp }>()
)
export const deleteZaehlerstandstyp = createAction(
	"[Modal Zaehlerstandstyp] Delete Zaehlerstandstyp",
	props<{ id: string }>()
)
export const deleteZaehlerstandstypSuccess = createAction(
	"[Modal Zaehlerstandstyp] Delete Zaehlerstandstyp Success",
	props<{ id: string }>()
)

// zweck
export const loadZweck = createAction(
	"[Kat Resolver] Load Zweck"
)
export const loadedZweck = createAction(
	"[Load Kat Effect] Loaded Zweck",
	props<{ kat: Kat[] }>()
)
export const insertZweck = createAction(
	"[Modal Zweck] Insert Zweck",
	props<{ insert: Kat }>()
)
export const insertZweckSuccess = createAction(
	"[Modal Zweck] Insert Zweck Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateZweck = createAction(
	"[Modal Zweck] Update Zweck",
	props<{ update: Kat }>()
)
export const updateZweckSuccess = createAction(
	"[Modal Zweck] Update Zweck Success",
	props<{ update: Kat }>()
)
export const deleteZweck = createAction(
	"[Modal Zweck] Delete Zweck",
	props<{ id: string }>()
)
export const deleteZweckSuccess = createAction(
	"[Modal Zweck] Delete Zweck Success",
	props<{ id: string }>()
)
