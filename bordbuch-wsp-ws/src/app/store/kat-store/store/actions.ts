import { createAction, props } from "@ngrx/store"
import { Kat } from "src/app/core/models/kat.model"

// checkliste
export const loadCheckliste = createAction(
	"[Kat Resolver] Load Checkliste"
)
export const loadedCheckliste = createAction(
	"[Load Kat Effect] Loaded Checkliste",
	props<{ funktionen: Kat[] }>()
)
export const insertCheckliste = createAction(
	"[Modal Checkliste] Insert Checkliste",
	props<{ insert: Kat }>()
)
export const insertChecklisteSuccess = createAction(
	"[Modal Checkliste] Insert Checkliste Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateCheckliste = createAction(
	"[Modal Checkliste] Update Checkliste",
	props<{ update: Kat }>()
)
export const updateChecklisteSuccess = createAction(
	"[Modal Checkliste] Delete Checkliste Success",
	props<{ update: Kat }>()
)
export const deleteCheckliste = createAction(
	"[Modal Checkliste] Delete Checkliste",
	props<{ id: string }>()
)
export const deleteChecklisteSuccess = createAction(
	"[Modal Checkliste] Delete Checkliste Success",
	props<{ id: string }>()
)

// betriebsstoffe
export const loadBetriebsstoffe = createAction(
	"[Kat Resolver] Load Betriebsstoffe"
)
export const loadedBetriebsstoffe = createAction(
	"[Load Kat Effect] Loaded Betriebsstoffe",
	props<{ funktionen: Kat[] }>()
)
export const insertBetriebsstoffe = createAction(
	"[Modal Betriebsstoffe] Insert Betriebsstoffe",
	props<{ insert: Kat }>()
)
export const insertBetriebsstoffeSuccess = createAction(
	"[Modal Betriebsstoffe] Insert Betriebsstoffe Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateBetriebsstoffe = createAction(
	"[Modal Betriebsstoffe] Update Betriebsstoffe",
	props<{ update: Kat }>()
)
export const updateBetriebsstoffeSuccess = createAction(
	"[Modal Betriebsstoffe] Delete Betriebsstoffe Success",
	props<{ update: Kat }>()
)
export const deleteBetriebsstoffe = createAction(
	"[Modal Betriebsstoffe] Delete Betriebsstoffe",
	props<{ id: string }>()
)
export const deleteBetriebsstoffeSuccess = createAction(
	"[Modal Betriebsstoffe] Delete Betriebsstoffe Success",
	props<{ id: string }>()
)

// dienststellen
export const loadDienststellen = createAction(
	"[Kat Resolver] Load Dienststellen"
)
export const loadedDienststellen = createAction(
	"[Load Kat Effect] Loaded Dienststellen",
	props<{ funktionen: Kat[] }>()
)
export const insertDienststellen = createAction(
	"[Modal Dienststellen] Insert Dienststellen",
	props<{ insert: Kat }>()
)
export const insertDienststellenSuccess = createAction(
	"[Modal Dienststellen] Insert Dienststellen Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateDienststellen = createAction(
	"[Modal Dienststellen] Update Dienststellen",
	props<{ update: Kat }>()
)
export const updateDienststellenSuccess = createAction(
	"[Modal Dienststellen] Delete Dienststellen Success",
	props<{ update: Kat }>()
)
export const deleteDienststellen = createAction(
	"[Modal Dienststellen] Delete Dienststellen",
	props<{ id: string }>()
)
export const deleteDienststellenSuccess = createAction(
	"[Modal Dienststellen] Delete Dienststellen Success",
	props<{ id: string }>()
)

// funktionen
export const loadFunktionen = createAction(
	"[Kat Resolver] Load Funktionen"
)
export const loadedFunktionen = createAction(
	"[Load Kat Effect] Loaded Funktionen",
	props<{ funktionen: Kat[] }>()
)
export const insertFunktionen = createAction(
	"[Modal Funktionen] Insert Funktionen",
	props<{ insert: Kat }>()
)
export const insertFunktionenSuccess = createAction(
	"[Modal Funktionen] Insert Funktionen Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateFunktionen = createAction(
	"[Modal Funktionen] Update Funktionen",
	props<{ update: Kat }>()
)
export const updateFunktionenSuccess = createAction(
	"[Modal Funktionen] Delete Funktionen Success",
	props<{ update: Kat }>()
)
export const deleteFunktionen = createAction(
	"[Modal Funktionen] Delete Funktionen",
	props<{ id: string }>()
)
export const deleteFunktionenSuccess = createAction(
	"[Modal Funktionen] Delete Funktionen Success",
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

// pruefvermerkkategorien
export const loadPruefvermerkkategorien = createAction(
	"[Kat Resolver] Load Pruefvermerkkategorien"
)
export const loadedPruefvermerkkategorien = createAction(
	"[Load Kat Effect] Loaded Pruefvermerkkategorien",
	props<{ kat: Kat[] }>()
)
export const insertPruefvermerkkategorie = createAction(
	"[Modal Pruefvermerkkategorien] Insert Pruefvermerkkategorien",
	props<{ insert: Kat }>()
)
export const insertPruefvermerkkategorieSuccess = createAction(
	"[Modal Pruefvermerkkategorien] Insert Pruefvermerkkategorien Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updatePruefvermerkkategorie = createAction(
	"[Modal Pruefvermerkkategorien] Update Pruefvermerkkategorien",
	props<{ update: Kat }>()
)
export const updatePruefvermerkkategorieSuccess = createAction(
	"[Modal Pruefvermerkkategorien] Update Pruefvermerkkategorien Success",
	props<{ update: Kat }>()
)
export const deletePruefvermerkkategorie = createAction(
	"[Modal Pruefvermerkkategorien] Delete Pruefvermerkkategorien",
	props<{ id: string }>()
)
export const deletePruefvermerkkategorieSuccess = createAction(
	"[Modal Pruefvermerkkategorien] Delete Pruefvermerkkategorien Success",
	props<{ id: string }>()
)

// zaehlerstandstypen
export const loadZaehlerstandstypen = createAction(
	"[Kat Resolver] Load Zaehlerstandstypen"
)
export const loadedZaehlerstandstypen = createAction(
	"[Load Kat Effect] Loaded Zaehlerstandstypen",
	props<{ kat: Kat[] }>()
)
export const insertZaehlerstandstyp = createAction(
	"[Modal Zaehlerstandstypen] Insert Zaehlerstandstypen",
	props<{ insert: Kat }>()
)
export const insertZaehlerstandstypSuccess = createAction(
	"[Modal Zaehlerstandstypen] Insert Zaehlerstandstypen Success",
	props<{ action: { insert: Kat }, id: string }>()
)
export const updateZaehlerstandstyp = createAction(
	"[Modal Zaehlerstandstypen] Update Zaehlerstandstypen",
	props<{ update: Kat }>()
)
export const updateZaehlerstandstypSuccess = createAction(
	"[Modal Zaehlerstandstypen] Update Zaehlerstandstypen Success",
	props<{ update: Kat }>()
)
export const deleteZaehlerstandstyp = createAction(
	"[Modal Zaehlerstandstypen] Delete Zaehlerstandstypen",
	props<{ id: string }>()
)
export const deleteZaehlerstandstypSuccess = createAction(
	"[Modal Zaehlerstandstypen] Delete Zaehlerstandstypen Success",
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
