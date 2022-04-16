import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patrol } from 'src/app/core/model/patrol.model';
import { Ship } from 'src/app/core/model/ship.model';
import { Zweck } from 'src/app/core/model/zwecke.model';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
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

  ship!: Ship
  patrol$: Observable<Patrol>
  zwecke$: Observable<Zweck[]>

  shipForm: FormGroup
  patrolForm!: FormGroup

  constructor(private _formBuilder: FormBuilder, private _specFacade: SpecFacade, private _katFacade: KatFacade) {
    this.patrol$ = this._specFacade.patrol$
    this.zwecke$ = this._katFacade.zweck$
    
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

    this._specFacade.ship$.subscribe(ship => { 
      if (ship) {
        this.ship = ship
        this.shipForm.patchValue(ship)
        this.patrolForm.patchValue({ kennung: ship.name })
      }
    })
    this.formReady.emit(this.patrolForm)
  }

  changeSaving() {
    this.saving = !this.saving
    this._specFacade.updateSaving(this.saving)
    this.positionSave.emit(this.saving)
  }

  deletePatrol() {
    const id: string = this.patrolForm.value.id
    this._specFacade.deletePatrol(id)
  }

}
