import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { Ship } from 'src/app/core/model/ship.model';
import { Unklar } from 'src/app/core/model/unklar.model';
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
  unklar: Unklar | undefined
  
  besatzung: boolean = false
  checkliste: boolean = false
  unchecked!: Checklistitem[] | undefined

  ship$: Observable<Ship>
  unklar$: Observable<Unklar>

  kontrollForm: FormGroup

  constructor(private store: Store<RootStoreState>, private _formBuilder: FormBuilder, private _specFacade: SpecFacade) {
    this.ship$ = this.store.pipe(select(ShipSelectors.selectedShip)) as Observable<Ship>
    this.unklar$ = this._specFacade.unklar$

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
    this.ship$.subscribe(data => {
      if (data) {
        // if (!!data.durchsicht) {
        //   this.status = true
        // } else {
        //   this.status = false
        // }
      }
    })
    this._specFacade.unklar$.subscribe(unklar => {
      this.unklar = unklar
    })
  }

  changeControl() {
    this.control = !this.control
    this.controled.emit(this.control)
  }

  changeStatus(unklar: boolean) {
    // this.status = !this.status
    this.statused.emit(this.status)

    if(unklar) {
      // insert
      const insert: Unklar = { id_schiff: this.kontrollForm.value.id, unklar: true, start: getLocalISO('now') }
      console.log(insert)
      this._specFacade.insertUnklar(insert)
    } else {
      // update
      if (this.unklar) {
        const update: Unklar = { id: this.unklar.id, id_schiff: this.unklar!.id_schiff, unklar: false, start: this.unklar.start, ende: getLocalISO('now') }
        this._specFacade.updateUnklar(update)
      } else {
        console.log('unklar not defined')
      }
    }
  }
}
