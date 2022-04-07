import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Patrol } from 'src/app/core/model/patrol.model';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { Ship } from 'src/app/core/model/ship.model';
import { LocationService } from 'src/app/core/services/location.service';
import { logout } from 'src/app/modules/auth/state/actions';
import { getLocalISO } from 'src/app/shared/utils';
import { PositionActions } from 'src/app/store/positionreport-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';

@Component({
  selector: 'app-streife',
  templateUrl: './streife.component.html',
  styleUrls: ['./streife.component.sass']
})
export class StreifeComponent implements OnInit {
  @ViewChild('headlineStepper') stepper: CdkStepper | undefined
  
  control: boolean = false
  status: boolean = true

  form!: FormGroup
  zweck!: FormGroup

  // name!: string | undefined
  id_schiff!: string | undefined
  id!: string | undefined

  // status: any[] = [
  //   { id: 1, bezeichnung: 'vorbereitend'},
  //   { id: 2, bezeichnung: 'aktiv' },
  //   { id: 3, bezeichnung: 'beendet' }
  // ]

  // stepper
  isLinear: boolean = true
  isEditable: boolean = true

  // observables
  // ship$: Observable<Ship | undefined>
  isPatrolActive$!: Observable<boolean>
  isPatrolBeendet$!: Observable<boolean>
  patrolStatus$!: Observable<string | undefined>

  // zaehlerstaende: Zaehlerstand[] | undefined

  patrol!: Patrol
  ship!: Ship

  // shipForm: FormGroup
  // zweckFormGroup!: FormGroup
  // besatzungFormGroup!: FormGroup
  // bootFormGroup!: FormGroup
  // checkFormGroup!: FormGroup

  // kennung = ''
  // zweck = ''
  // start = ''

  constructor(private store: Store<RootStoreState>, private _router: Router, private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder) {
      // this.ship$ = this.store.pipe(select(ShipSelectors.selectedShip))
      // this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(data => {
      //   console.log(data)
      //   this.name = data?.name
      // })
      this.isPatrolActive$ = this.store.pipe(select(ShipSelectors.isPatrolActive))
      this.isPatrolBeendet$ = this.store.pipe(select(ShipSelectors.isPatrolBeendet))
      this.patrolStatus$ = this.store.pipe(select(ShipSelectors.patrolStatus))   

      // this.store.pipe(select(ShipSelectors.selectShipId))

      // this.checkFormGroup = this._formBuilder.group({
      //   check: [false]
      // })

      // this.shipForm = this._formBuilder.group({
      //   id        : [''],
      //   name      : [''],
      //   durchsicht: ['']
      // })
    }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      subforms: this._formBuilder.array([])
    })
    // this.zweckFormGroup = this._formBuilder.group({
    //   kennung: [{value: this.name, disabled: true}, Validators.required],
    //   zweck: ['', Validators.required],
    // })

    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
      if (ship) { this.ship = ship }
    })

    this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe(patrol => {
      if (patrol) { this.patrol = patrol! }
      // if (patrol?.status == 'aktiv') {
      //   // auslagern und in den Store mit aufnehmen
      //   this.appService.checkPositionStart(patrol)
      // } else {
      //   this.appService.checkPositionStop()
      // }
    })

    this.store.pipe(select(ShipSelectors.selectShipId)).subscribe(id_ship => {
      this.id_schiff = id_ship
    })

    this.store.pipe(select(ShipSelectors.selectPatrolId)).subscribe(id_streife => {
      if (id_streife) this.id = id_streife
    })
  }

  setControl(control: boolean) {
    this.control = control
  }

  setStatus(status: boolean) {
    this.status = status
  }

  // formValidation
  get subforms(): FormArray {
    return this.form.get("subforms") as FormArray;
  }

  subformReady(subform: FormGroup) {
    // this.subforms.push(subform);
    this.zweck = subform
  }

  // list of tabs
  list = [
    { id: 1, label: 'Next' },
    { id: 2, label: 'Prev' },
  ];

  // current Tab
  active = this.list[0];

  // Invoked when Tab Changes
  changeTab(tab: any) {
    this.active = tab;
  }

  next(stepper: CdkStepper) {
    // if (stepper.selectedIndex == 0 && this.zweckFormGroup.valid) {
    //   if (this.id) this.updatePatrol()
    //   if (!this.id) this.erstellePatrol()
    // }
    stepper.next()
  }
  nextDisable(stepper: CdkStepper): boolean {
    if (stepper.selectedIndex == stepper.steps.length - 1) return true
    return false
  }
  previous(stepper: CdkStepper) {
    stepper.previous()
  }
  stepperReset(stepper: CdkStepper) {
    stepper.reset()
  }
  stepperIndex(stepper: CdkStepper): boolean {
    return stepper.selectedIndex == 0 ? true : false
  }

  initializePatrol(stepper: CdkStepper) {
    // this.kontrollFormGroup.patchValue({ kontrolle: false })
    // automatische Initialisierung nach laden der (leeren | beendeten) Patrol
    this.stepperReset(stepper)
    const initialize: Patrol = { besatzung: [], ende: '', id: '', id_schiff: this.ship.id, kennung: this.ship.name, start: getLocalISO('now'), status: 'vorbereitend', zweck: '' }
    this.store.dispatch(ShipAction.initializePatrol({ initialize }))
  }
  erstellePatrol() {
    // autom. Erstellen der Patrol in Vorbereitung (u.A. um die Besatzung hinzuzufuegen), id der DB übernehmen
    this.store.pipe(select(ShipSelectors.selectedPatrol)).pipe(take(1)).subscribe(patrol => {
      const insert: Patrol = Object.assign({}, patrol, this.zweck.value, { start: getLocalISO('now') })
      this.store.dispatch(ShipAction.insertPatrol({ insert }))
    })
  }
  updatePatrol(status?: string) {
    // this.kontrollFormGroup.patchValue({ kontrolle: false })
    let update: Patrol
    // update zum eigentlichen Start oder beenden der Streife
    if (this.patrol.id == '' || this.patrol.id == undefined) {
      console.log('erstelle patrol')
      this.erstellePatrol()
    }
    this.store.pipe(select(ShipSelectors.selectedPatrol)).pipe(take(1)).subscribe(patrol => {
      if (patrol?.id) {
        switch (status) {
          case 'aktiv':
            // startposition setzen
            // this.locationService.getCurrentPosition().then(position => {
            //   const positionReport: PositionReport = { id_streife: this.patrol.id, id_ship: this.patrol.id_schiff, date: getLocalISO('now'), location: { latitude: position.latitude, longitude: position.longitude}, ort: '', description: `Start der Streife` }
            //   this.store.dispatch(PositionActions.insertData({ positionReport }))
            // })
            update = Object.assign({}, patrol, this.zweck.value, { status: status, start: getLocalISO('now') })
            console.log(`aktiv: ${update}`)
            this._router.navigate(['/boot', patrol.id_schiff, 'positions'], {relativeTo: this._activatedRoute})
            break
          case 'beendet':
            update = Object.assign({}, patrol, this.zweck.value, { status: status, ende: getLocalISO('now') })
            console.log(`beendet: ${update}`)
            this._router.navigateByUrl('/')
            break
          default:
            update = Object.assign({}, patrol, this.zweck.value)
            console.log(`default: ${update}`)
            break
        }
        this.store.dispatch(ShipAction.updatePatrol({ update }))
      }
    })
  }

  // logout() {
  //   this.store.dispatch(logout())
  // }
}
