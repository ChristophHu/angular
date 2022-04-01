import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { Ship } from 'src/app/core/model/ship.model';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';

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
  
  besatzung: boolean = false
  checkliste: boolean = false
  unchecked!: Checklistitem[] | undefined

  ship$: Observable<Ship>

  // kontrollForm: FormGroup

  constructor(private store: Store<RootStoreState>, private _formBuilder: FormBuilder,) {
    this.ship$ = this.store.pipe(select(ShipSelectors.selectedShip)) as Observable<Ship>
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

    // this.kontrollForm = this._formBuilder.group({
    //   // kontrolle: [false]
    // })
  }

  ngOnInit(): void {
    this.ship$.subscribe(data => {
      if (data) {
        if (!!data.durchsicht) {
          this.status = true
        } else {
          this.status = false
        }
      }
    })
  }

  changeControl() {
    this.control = !this.control
    this.controled.emit(this.control)
  }

  changeStatus() {
    this.status = !this.status
    this.statused.emit(this.status)
  }
}
