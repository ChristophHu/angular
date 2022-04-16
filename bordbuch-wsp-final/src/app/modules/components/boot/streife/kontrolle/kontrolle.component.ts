import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { Klarmeldung } from 'src/app/core/model/klarmeldung.model';
import { getLocalISO } from 'src/app/shared/utils';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'kontrolle',
  templateUrl: './kontrolle.component.html',
  styleUrls: ['./kontrolle.component.sass']
})
export class KontrolleComponent implements OnInit {
  @Output() statused: EventEmitter<boolean> = new EventEmitter<boolean>()
  // @Input() controled: boolean = false
  @Input() set controled(value: boolean) {
    this.control = value
  }
  @Output() controledChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  control: boolean = false
  status: boolean = true
  klarmeldung: Klarmeldung | undefined
  
  besatzung: boolean = false
  checkliste: boolean = false
  unchecked!: Checklistitem[] | undefined

  klarmeldung$: Observable<Klarmeldung>

  kontrollForm: FormGroup

  constructor(private _formBuilder: FormBuilder, private _specFacade: SpecFacade) {
    this.klarmeldung$ = this._specFacade.klarmeldung$

    this._specFacade.checklistItemsUnchecked$.subscribe(items => {
      this.unchecked = items?.filter(el => el.relevant == true)
      if (this.unchecked != undefined && this.unchecked?.length > 0) {
        this.checkliste = true
      } else {
        this.checkliste = false
      }
    })

    this._specFacade
    this._specFacade.besatzung$.subscribe((besatzung: Besatzung[] | undefined) => {
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
    this._specFacade.ship$.subscribe(ship => {
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
    this.controledChange.emit(this.control)
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
