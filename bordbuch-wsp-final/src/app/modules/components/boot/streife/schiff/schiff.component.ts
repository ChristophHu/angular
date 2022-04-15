import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Patrol } from 'src/app/core/model/patrol.model';
import { Ship } from 'src/app/core/model/ship.model';
import { Zweck } from 'src/app/core/model/zwecke.model';
import { KatSelectors } from 'src/app/store/kat-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-schiff',
  templateUrl: './schiff.component.html',
  styleUrls: ['./schiff.component.sass']
})
export class SchiffComponent implements OnInit {
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()
  @Output() positionSave: EventEmitter<boolean> = new EventEmitter<boolean>()

  saving: boolean = false
  // status: boolean = true

  ship!: Ship
  patrol$: Observable<Patrol>
  // kennungen$: Observable<Kennung[]>
  zwecke$: Observable<Zweck[]>

  shipForm: FormGroup
  patrolForm!: FormGroup

  // durchsicht: string[] = ['Klar', 'Unklar']

  constructor(private _formBuilder: FormBuilder, private store: Store<RootStoreState>, private _specFacade: SpecFacade) {
    this.patrol$ = this.store.pipe(select(ShipSelectors.selectedPatrol)) as Observable<Patrol>
    this.zwecke$ = this.store.pipe(select(KatSelectors.selectAllZwecke)) as Observable<Zweck[]>
    
    this.shipForm = this._formBuilder.group({
      id: [],
      name: [],
      durchsicht: []
    })

    this.patrolForm = this._formBuilder.group({
      id: [],
      id_schiff: [],
      kennung: [{ value: '' }],
      zweck: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.patrol$.subscribe(patrol => {
      if (patrol) {
        this.patrolForm.patchValue(patrol)
      }
    })

    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => { 
      if (ship) {
        this.ship = ship
        this.shipForm.patchValue(ship)
        this.patrolForm.patchValue({ kennung: ship.name })
        // if (!!ship.durchsicht) {
        //   this.status = true
        // } else {
        //   this.status = false
        // }
      }
    })
    // this.ship$.subscribe(data => {
    //   if (data) {
    //     this.shipForm.patchValue(data)
    //     if (!!data.durchsicht) {
    //       this.status = true
    //     } else {
    //       this.status = false
    //     }
    //   }
    // })
    this.formReady.emit(this.patrolForm)
  }

  // changeStatus() {
  //   this.status = !this.status
  //   this.statused.emit(this.status)
  // }
  changeSaving() {
    this.saving = !this.saving
    this._specFacade.updateSaving(this.saving)
    this.positionSave.emit(this.saving)
  }

  deletePatrol() {
    const id: string = this.patrolForm.value.id
    this.store.dispatch(ShipAction.deletePatrol({ id }))
    // this.id = ''
  }

}
