import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { Ship } from 'src/app/core/model/ship.model';
import { Klarmeldung } from 'src/app/core/model/klarmeldung.model';
import { getLocalISO } from 'src/app/shared/utils';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'kontrolle',
  templateUrl: './kontrolle.component.html',
  styleUrls: ['./kontrolle.component.sass']
})
export class KontrolleComponent implements OnInit {
  @Output() controled: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() statused: EventEmitter<boolean> = new EventEmitter<boolean>()

  control: boolean = false
  status: boolean = true
  klarmeldung: Klarmeldung | undefined
  
  besatzung: boolean = false
  checkliste: boolean = false
  unchecked!: Checklistitem[] | undefined

  klarmeldung$: Observable<Klarmeldung>

  kontrollForm: FormGroup

  constructor(private store: Store<RootStoreState>, private _formBuilder: FormBuilder, private _specFacade: SpecFacade) {
    this.klarmeldung$ = this._specFacade.klarmeldung$

    this.store.pipe(select(ShipSelectors.selectUncheckedChecklistItems)).subscribe(unchecked => {
      this.unchecked = unchecked?.filter(el => el.relevant == true)
      if (this.unchecked != undefined && this.unchecked?.length > 0) {
        this.checkliste = true
      } else {
        this.checkliste = false
      }
    })
    this.store.pipe(select(ShipSelectors.selectBesatzung)).subscribe((besatzung: Besatzung[] | undefined) => {
      if (besatzung == undefined || besatzung.length < 1) {
        this.besatzung = true
      } else {
        this.besatzung = false
      }
    })

    this.kontrollForm = this._formBuilder.group({
      id: ['']
      // kontrolle: [false]
    })
  }

  ngOnInit(): void {
    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
      if (ship) this.kontrollForm.patchValue({ id: ship.id})
    })
    this._specFacade.klarmeldung$.subscribe((klarmeldung: Klarmeldung) => {
      if (klarmeldung && klarmeldung.klar) {
        this.klarmeldung = klarmeldung
        this.status = klarmeldung.klar
      }
    })
  }

  changeControl() {
    this.control = !this.control
    this.controled.emit(this.control)
  }

  changeStatus(klarmeldung: boolean) {
    this.status = !this.status
    this.statused.emit(this.status)

    if(klarmeldung) {
      // insert
      const insert: Klarmeldung = { id_schiff: this.kontrollForm.value.id, klar: true, beginn: getLocalISO('now') }
      console.log(insert)
      this._specFacade.insertKlarmeldung(insert)
    } else {
      // update
      if (this.klarmeldung) {
        const update: Klarmeldung = { id: this.klarmeldung.id, id_schiff: this.klarmeldung!.id_schiff, klar: false, beginn: this.klarmeldung.beginn, ende: getLocalISO('now') }
        this._specFacade.updateKlarmeldung(update)
      } else {
        console.log('klar not defined')
      }
    }
  }
}
