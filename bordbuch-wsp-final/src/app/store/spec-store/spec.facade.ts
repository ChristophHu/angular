import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { RootStoreState } from "../root-store.state";

import * as SpecActions from './store/actions'
import * as SpecSelectors from './store/selectors'

import { Observable } from "rxjs";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";
import { Klarmeldung } from "src/app/core/model/klarmeldung.model";
import { PositionReport } from "src/app/core/model/positionreport.model";
import { Patrol } from "src/app/core/model/patrol.model";
import { Ship } from "src/app/core/model/ship.model";
import { Reparatur } from "src/app/core/model/reparatur";
import { Peilung } from "src/app/core/model/peilung.model";
import { Tank } from "src/app/core/model/tank.model";
import { Besatzung } from "src/app/core/model/besatzung.model";
import { Checklistitem } from "src/app/core/model/checklistitem.model";
import { Checklist } from "src/app/core/model/checklist.model";
import { Betankung } from "src/app/core/model/betankung";


@Injectable()
export class SpecFacade {
    // public selectors
    besatzung$              = this.store.pipe(select(SpecSelectors.selectedPatrolBesatzung)) as Observable<Besatzung[]>
    betankung$              = this.store.pipe(select(SpecSelectors.selectBetankungen)) as Observable<Betankung[]>
    checklist$              = this.store.pipe(select(SpecSelectors.selectChecklist)) as Observable<Checklist>
    checklistItemsChecked$  = this.store.pipe(select(SpecSelectors.selectCheckedChecklistItems)) as Observable<Checklistitem[]>
    checklistItemsUnchecked$= this.store.pipe(select(SpecSelectors.selectUncheckedChecklistItems)) as Observable<Checklistitem[]>
    klarmeldung$            = this.store.pipe(select(SpecSelectors.selectKlarmeldung)) as Observable<Klarmeldung>
    patrol$                 = this.store.pipe(select(SpecSelectors.selectedPatrol)) as Observable<Patrol>
    peilungen$              = this.store.pipe(select(SpecSelectors.selectPeilungen)) as Observable<Peilung[]>
    positions$              = this.store.pipe(select(SpecSelectors.selectPositions)) as Observable<PositionReport[]>
    reparaturen$            = this.store.pipe(select(SpecSelectors.selectReparaturen)) as Observable<Reparatur[]>
    reparaturfotos$         = this.store.pipe(select(SpecSelectors.selectAllReparaturFotos)) as Observable<any[]>
    reparaturfotoscount$    = this.store.pipe(select(SpecSelectors.selectReparaturFotosCount)) as Observable<number>
    saving$                 = this.store.pipe(select(SpecSelectors.selectSaving)) as Observable<boolean>
    ship$                   = this.store.pipe(select(SpecSelectors.selectedShip)) as Observable<Ship>
    tanks$                  = this.store.pipe(select(SpecSelectors.selectTanks)) as Observable<Tank[]>
    allZaehlerstaende$      = this.store.pipe(select(SpecSelectors.selectAllZaehlerstaende)) as Observable<Zaehlerstand[]>

    constructor(private store: Store<RootStoreState>) {}

    // public dispatches
    resetStore() {
        this.store.dispatch(SpecActions.resetStore())
    }

    // besatzung
    insertBesatzung(insert: Besatzung) {
        this.store.dispatch(SpecActions.insertPatrolBesatzung({ insert }))
    }
    updateBesatzung(update: Besatzung) {
        this.store.dispatch(SpecActions.updatePatrolBesatzung({ update }))
    }
    deleteBesatzung(id: string) {
        this.store.dispatch(SpecActions.deletePatrolBesatzung({ id }))
    }

    // betankung
    loadBetankungen(id: string) {
        this.store.dispatch(SpecActions.loadBetankungen({ id_ship: id }))
    }
    insertBetankung(insert: Betankung) {
        this.store.dispatch(SpecActions.insertBetankung({ insert }))
    }
    updateBetankung(update: Betankung) {
        this.store.dispatch(SpecActions.updateBetankung({ update }))
    }
    deleteBetankung(id: string) {
        this.store.dispatch(SpecActions.deleteBetankung({ id }))
    }

    // checklist
    loadChecklist(id: string) {
        this.store.dispatch(SpecActions.loadChecklist({ id_ship: id }))
    }
    insertChecklist(insert: Checklist) {
        this.store.dispatch(SpecActions.insertChecklist({ insert }))
    }
    updateChecklist(update: Checklist) {
        this.store.dispatch(SpecActions.updateChecklist({ update }))
    }

    // klarmeldung
    loadKlarmeldungByIdSchiff(id: string) {
        this.store.dispatch(SpecActions.loadKlarmeldungByIdSchiff({ id }))
    }
    insertKlarmeldung(insert: Klarmeldung) {
        this.store.dispatch(SpecActions.insertKlarmeldung({ insert }))
    }
    updateKlarmeldung(update: Klarmeldung) {
        this.store.dispatch(SpecActions.updateKlarmeldung({ update }))
    }

    // patrol
    loadPatrol(id: string) {
        this.store.dispatch(SpecActions.loadPatrol({ id_ship: id }))
    }
    initializePatrol(patrol: Patrol) {
        this.store.dispatch(SpecActions.initializePatrol({ patrol }))
    }
    insertPatrol(insert: Patrol) {
        this.store.dispatch(SpecActions.insertPatrol({ insert }))
    }
    updatePatrol(update: Patrol) {
        this.store.dispatch(SpecActions.updatePatrol({ update }))
    }
    deletePatrol(id: string) {
        this.store.dispatch(SpecActions.deletePatrol({ id }))
    }

    // peilung
    loadPeilung(id: string) {
        this.store.dispatch(SpecActions.loadPeilung({ id_ship: id }))
    }
    insertPeilung(insert: Peilung) {
        this.store.dispatch(SpecActions.insertPeilung({ insert }))
    }

    // position
    loadPositionsByIdSchiff(id: string) {
        this.store.dispatch(SpecActions.loadPositions({ id }))
    }
    insertPosition(insert: PositionReport) {
        this.store.dispatch(SpecActions.insertPosition({ insert }))
    }
    updatePosition(update: PositionReport) {
        this.store.dispatch(SpecActions.updatePosition({ update }))
    }
    deletePosition(id: string) {
        this.store.dispatch(SpecActions.deletePosition({ id }))
    }
    getPositionenByIdPatrol(id_patrol: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectPositionsByPatrol(id_patrol)))
    }

    // reparatur
    loadReparaturen(id: string) {
        this.store.dispatch(SpecActions.loadReparaturen({ id_ship: id }))
    }
    insertReparatur(insert: Reparatur) {
        this.store.dispatch(SpecActions.insertReparatur({ insert }))
    }
    updateReparatur(update: Reparatur) {
        this.store.dispatch(SpecActions.updateReparatur({ update }))
    }

    // reparaturfoto
    uploadReparaturFoto(upload: any) {
        this.store.dispatch(SpecActions.uploadReparaturFoto({ upload }))
    }
    deleteReparaturFoto(id: string) {
        this.store.dispatch(SpecActions.deleteReparaturFoto({ id }))
    }
    downloadReparaturFotos(id: string) {
        // fehler?
        this.store.dispatch(SpecActions.downloadReparaturFotos({ id }))
    }
    getReparaturFotosById(id: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectReparaturFotosById(id)))
    }

    // saving
    loadShip(id: string) {
        this.store.dispatch(SpecActions.loadShip({ id_ship: id }))
    }
    updateSaving(update: boolean) {
        this.store.dispatch(SpecActions.updateSaving({ update }))
    }

    // ship
    getShip(): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectedShip))
    }

    // tank
    loadTank(id: string) {
        this.store.dispatch(SpecActions.loadTank({ id_ship: id }))
    }
    getTankById(id: string) {
        return this.store.pipe(select(SpecSelectors.selectTankById(id)))
    }

    // zaehlerstaende
    loadAllZaehlerstaende(id: string) {
        this.store.dispatch(SpecActions.loadAllZaehlerstaende({ id }))
    }
    updateZaehlerstand(update: Zaehlerstand) {
        this.store.dispatch(SpecActions.updateZaehlerstand({ update }))
    }
    getZaehlerstaendeById(id: string): Observable<any> {
        return this.store.pipe(select(SpecSelectors.selectZaehlerstaendeById(id)))
    }
}

// export { SpecState }