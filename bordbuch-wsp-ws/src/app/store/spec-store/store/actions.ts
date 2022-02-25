import { createAction, props } from "@ngrx/store"
import { Betankung } from "src/app/core/models/betankung"
import { Checklist } from "src/app/core/models/checklist.model"
import { Filter } from "src/app/core/models/filter.model"
import { Peilung } from "src/app/core/models/peilung.model"
import { Reparatur } from "src/app/core/models/reparatur.model"
import { Standort } from "src/app/core/models/standort.model"
import { Streife } from "src/app/core/models/streife.model"
import { Tank } from "src/app/core/models/tank.model"
import { Zaehlerstand } from "src/app/core/models/zaehlerstand.model"

// betankungen
export const loadAllBetankungen = createAction(
	"[Kat Resolver] Load Betankungen"
)
export const loadedAllBetankungen = createAction(
	"[Load Spec Effect] Loaded Betankungen",
	props<{ betankungen: Betankung[] }>()
)
export const insertBetankung = createAction(
	"[Modal Betankung] Insert Betankung",
	props<{ insert: Betankung }>()
)
export const insertBetankungSuccess = createAction(
	"[Modal Betankung] Insert Betankung Success",
	props<{ action: { insert: Betankung }, id: string }>()
)
export const updateBetankung = createAction(
	"[Modal Betankung] Update Betankung",
	props<{ update: Betankung }>()
)
export const updateBetankungSuccess = createAction(
	"[Modal Betankung] Update Betankung Success",
	props<{ action: { update: Betankung }, id: string }>()
)
export const deleteBetankung = createAction(
	"[Modal Betankung] Delete Betankung",
	props<{ id: string }>()
)
export const deleteBetankungSuccess = createAction(
	"[Modal Betankung] Delete Betankung Success",
	props<{ id: string }>()
)

// peilungen
export const loadPeilungenById = createAction(
	"[Kat Resolver] Load Peilungen By ID",
	props<{ id: string }>()
)
export const loadPeilungenByIdSuccess = createAction(
	"[Load Spec Effect] Loaded Peilungen By ID",
	props<{ peilungen: Peilung[] }>()
)
export const loadPeilungen = createAction(
	"[Kat Resolver] Load Peilungen",
	props<{ filter: Filter }>()
)
export const loadPeilungenSuccess = createAction(
	"[Load Spec Effect] Loaded Peilungen",
	props<{ peilungen: Peilung[] }>()
)
export const insertPeilung = createAction(
	"[Modal Peilung] Insert Peilung",
	props<{ insert: Peilung }>()
)
export const insertPeilungSuccess = createAction(
	"[Modal Peilung] Insert Peilung Success",
	props<{ action: { insert: Peilung }, id: string }>()
)
export const updatePeilung = createAction(
	"[Modal Peilung] Update Peilung",
	props<{ update: Peilung }>()
)
export const updatePeilungSuccess = createAction(
	"[Modal Peilung] Update Peilung Success",
	props<{ action: { update: Peilung }, id: string }>()
)
export const deletePeilung = createAction(
	"[Modal Peilung] Delete Peilung",
	props<{ id: string }>()
)
export const deletePeilungSuccess = createAction(
	"[Modal Peilung] Delete Peilung Success",
	props<{ id: string }>()
)

// reparaturen
export const loadAllReparaturen = createAction(
	"[Ship Resolver] Load Reparaturen",
	props<{ filter: Filter }>()
)
export const loadedAllReparaturen = createAction(
	"[Load Spec Effect] Reparaturen Loaded",
	props<{ reparaturen: Reparatur[] }>()
)
export const insertReparatur = createAction(
	"[Edit Reparatur Dialog] Reparatur Insert",
	props<{ insert: Reparatur }>()
)
export const insertReparaturSuccess = createAction(
	"[Edit Reparatur Dialog] Reparatur Insert Success",
	props<{ action: { insert: Reparatur }, id: string }>()
)
export const updateReparatur = createAction(
	"[Edit Reparatur Dialog] Reparatur Update",
	props<{ update: Reparatur }>()
)
export const updateReparaturSuccess = createAction(
	"[Edit Reparatur Dialog] Reparatur Update Success",
	props<{ action: { update: Reparatur }, id: string }>()
)
export const deleteReparatur = createAction(
	"[Modal Reparatur Dialog] Delete Reparatur",
	props<{ id: string }>()
)
export const deleteReparaturSuccess = createAction(
	"[Modal Reparatur Dialog] Delete Reparatur Success",
	props<{ id: string }>()
)
export const clearReparaturen = createAction(
	"[Modal Reparatur Dialog] Clear Reparaturen"
)

// reparaturfoto
export const downloadReparaturFotos = createAction(
	"[Ship Resolver] Download ReparaturFotos",
	props<{ id: string }>()
)
export const downloadReparaturFotosSuccess = createAction(
	"[Load Spec Effect] ReparaturFotos Download Success",
	props<{ fotos: any[] }>()
)
export const uploadReparaturFoto = createAction(
	"[Edit Reparatur Dialog] ReparaturFoto Upload",
	props<{ upload: any }>()
)
export const uploadReparaturFotoSuccess = createAction(
	"[Edit Reparatur Dialog] ReparaturFoto Upload Success",
	props<{ action: { upload: any }, id: string }>()
)
export const deleteReparaturFoto = createAction(
	"[Modal Reparatur Dialog] Delete ReparaturFoto",
	props<{ id: string }>()
)
export const deleteReparaturFotoSuccess = createAction(
	"[Modal Reparatur Dialog] Delete ReparaturFoto Success",
	props<{ id: string }>()
)

// ShipChecklists
export const loadAllShipChecklists = createAction(
	"[Kat Resolver] Load ShipChecklists"
)
export const loadedAllShipChecklists = createAction(
	"[Load Spec Effect] Loaded ShipChecklists",
	props<{ checklists: Checklist[] }>()
)
export const insertShipChecklist = createAction(
	"[Modal ShipChecklist] Insert ShipChecklist",
	props<{ insert: Checklist }>()
)
export const insertShipChecklistSuccess = createAction(
	"[Modal ShipChecklist] Insert ShipChecklist Success",
	props<{ action: { insert: Checklist }, id: string }>()
)
export const deleteShipChecklist = createAction(
	"[Modal ShipChecklist] Delete ShipChecklist",
	props<{ id: string, date: string }>()
)
export const deleteShipChecklistSuccess = createAction(
	"[Modal ShipChecklist] Delete ShipChecklist Success",
	props<{ id: string, date: string }>()
)

// laststandort
export const loadAllLastStandorte = createAction(
	"[Kat Resolver] Load LastStandorte"
)
export const loadedAllLastStandorte = createAction(
	"[Load Spec Effect] Loaded LastStandorte",
	props<{ laststandorte: Standort[] }>()
)

// standorte
export const loadAllStandorte = createAction(
	"[Kat Resolver] Load Standorte",
	props<{ id: string }>()
)
export const loadedAllStandorte = createAction(
	"[Load Spec Effect] Loaded Standorte",
	props<{ standorte: Standort[] }>()
)
export const insertStandort = createAction(
	"[Modal Standorte] Insert Standorte",
	props<{ insert: Standort }>()
)
export const insertStandortSuccess = createAction(
	"[Modal Standorte] Insert Standorte Success",
	props<{ action: { insert: Standort }, id: string }>()
)
export const updateStandort = createAction(
	"[Modal Standorte] Update Standorte",
	props<{ update: Standort }>()
)
export const updateStandortSuccess = createAction(
	"[Modal Standorte] Update Standorte Success",
	props<{ action: { update: Standort }, id: string }>()
)
export const deleteStandort = createAction(
	"[Modal Standorte] Delete Standorte",
	props<{ id: string }>()
)
export const deleteStandortSuccess = createAction(
	"[Modal Standorte] Delete Standorte Success",
	props<{ id: string }>()
)

// streifen
export const loadAllStreifen = createAction(
	"[Ship Resolver] Load Streifen"
)
export const loadedAllStreifen = createAction(
	"[Load Spec Effect] Streifen Loaded",
	props<{ streifen: Streife[] }>()
)
export const insertStreife = createAction(
	"[Edit Streife Dialog] Streife Insert",
	props<{ insert: Streife }>()
)
export const insertStreifeSuccess = createAction(
	"[Edit Streife Dialog] Streife Insert Success",
	props<{ action: { insert: Streife }, id: string }>()
)
export const updateStreife = createAction(
	"[Edit Streife Dialog] Streife Update",
	props<{ update: Streife }>()
)
export const updateStreifeSuccess = createAction(
	"[Edit Streife Dialog] Streife Update Success",
	props<{ action: { update: Streife }, id: string }>()
)
export const deleteStreife = createAction(
	"[Modal Streife Dialog] Delete Streife",
	props<{ id: string }>()
)
export const deleteStreifeSuccess = createAction(
	"[Modal Streife Dialog] Delete Streife Success",
	props<{ id: string }>()
)

// tanks
export const loadTanks = createAction(
	"[Ship Resolver] Load Tanks",
	props<{ id: string }>()
)
export const loadedTanks = createAction(
	"[Load Spec Effect] Tanks Loaded",
	props<{ tanks: Tank[] }>()
)
export const insertTank = createAction(
	"[Edit Tank Dialog] Tank Insert",
	props<{ insert: Tank }>()
)
export const insertTankSuccess = createAction(
	"[Edit Tank Dialog] Tank Insert Success",
	props<{ action: { insert: Tank }, id: string }>()
)
export const updateTank = createAction(
	"[Edit Tank Dialog] Tank Update",
	props<{ update: Tank }>()
)
export const updateTankSuccess = createAction(
	"[Edit Tank Dialog] Tank Update Success",
	props<{ action: { update: Tank }, id: string }>()
)
export const deleteTank = createAction(
	"[Modal Tank Dialog] Delete Tank",
	props<{ id: string }>()
)
export const deleteTankSuccess = createAction(
	"[Modal Tank Dialog] Delete Tank Success",
	props<{ id: string }>()
)

// zaehlerstaende
export const loadAllZaehlerstaende = createAction(
	"[Kat Resolver] Load Zaehlerstaende"
)
export const loadedAllZaehlerstaende = createAction(
	"[Load Spec Effect] Loaded Zaehlerstaende",
	props<{ zaehlerstaende: Zaehlerstand[] }>()
)
export const insertZaehlerstand = createAction(
	"[Modal Betankung] Insert Zaehlerstand",
	props<{ insert: Zaehlerstand }>()
)
export const insertZaehlerstandSuccess = createAction(
	"[Modal Zaehlerstand] Insert Zaehlerstand Success",
	props<{ action: { insert: Zaehlerstand }, id: string }>()
)
export const updateZaehlerstand = createAction(
	"[Modal Zaehlerstand] Update Zaehlerstand",
	props<{ update: Zaehlerstand }>()
)
export const updateZaehlerstandSuccess = createAction(
	"[Modal Zaehlerstand] Update Zaehlerstand Success",
	props<{ action: { update: Zaehlerstand }, id: string }>()
)
export const deleteZaehlerstand = createAction(
	"[Modal Zaehlerstand] Delete Zaehlerstand",
	props<{ id: string }>()
)
export const deleteZaehlerstandSuccess = createAction(
	"[Modal Zaehlerstand] Delete Zaehlerstand Success",
	props<{ id: string }>()
)