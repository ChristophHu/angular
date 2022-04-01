import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Kennung } from 'src/app/core/model/kennung.model';
import { Patrol } from 'src/app/core/model/patrol.model';
import { Ship } from 'src/app/core/model/ship.model';
import { Zweck } from 'src/app/core/model/zwecke.model';
import { KatSelectors } from 'src/app/store/kat-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';

@Component({
  selector: 'app-schiff',
  templateUrl: './schiff.component.html',
  styleUrls: ['./schiff.component.sass']
})
export class SchiffComponent implements OnInit {
  // subform
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  position: boolean = false
  status: boolean = true

  ship$: Observable<Ship>
  patrol$: Observable<Patrol>
  kennungen$: Observable<Kennung[]>
  zwecke$: Observable<Zweck[]>

  shipForm: FormGroup
  patrolForm!: FormGroup

  durchsicht: string[] = ['Klar', 'Unklar']

  constructor(private _formBuilder: FormBuilder, private store: Store<RootStoreState>) {
    this.ship$ = this.store.pipe(select(ShipSelectors.selectedShip)) as Observable<Ship>
    this.kennungen$ = this.store.pipe(select(KatSelectors.selectAllKennungen)) as Observable<Kennung[]>
    this.patrol$ = this.store.pipe(select(ShipSelectors.selectedPatrol)) as Observable<Patrol>
    this.zwecke$ = this.store.pipe(select(KatSelectors.selectAllZwecke)) as Observable<Zweck[]>
    
    this.shipForm = this._formBuilder.group({
      id: [],
      name: [],
      durchsicht: []
    })
  }

  ngOnInit(): void {
    this.patrolForm = this._formBuilder.group({
      id: [],
      kennung: [{ value: '', disabled: true }],
      zweck: ['', Validators.required]
    })

    this.ship$.subscribe(data => {
      if (data) {
        this.shipForm.patchValue(data)
      }
    })
    this.patrol$.subscribe(data => {
      if (data) {
        this.patrolForm.patchValue(data)
      }
    })

    this.formReady.emit(this.patrolForm)
  }

  toggleStatus(status?: string) {
    if (status) {
      this.status = false
    } else {
      this.status = true
    }
  }

  deletePatrol() {
    const id: string = this.patrolForm.value.id
    this.store.dispatch(ShipAction.deletePatrol({ id }))
    // this.id = ''
  }

  changeSavings() {
    console.log('change')
  }

}
