import { CdkStepper } from '@angular/cdk/stepper';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Betankung } from 'src/app/core/model/betankung';
import { Kennung } from 'src/app/core/model/kennung.model';
import { Patrol } from 'src/app/core/model/patrol.model';
import { Position } from 'src/app/core/model/position';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { Ship } from 'src/app/core/model/ship.model';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { Zweck } from 'src/app/core/model/zwecke.model';
import { LocationService } from 'src/app/core/services/location.service';
import { logout } from 'src/app/modules/auth/state/actions';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { KatSelectors } from 'src/app/store/kat-store';
import { PositionActions } from 'src/app/store/positionreport-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';
import { ZaehlerstandSelectors } from 'src/app/store/zaehlerstand-store';
import { BesatzungComponent } from './besatzung/besatzung.component';
import { BetankungComponent } from './betankung/betankung.component';
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component';

@Component({
  selector: 'app-streife',
  templateUrl: './streife.component.html',
  styleUrls: ['./streife.component.sass']
})
export class StreifeComponent implements OnInit, AfterViewInit {
  @ViewChild('headlineStepper') stepper: CdkStepper | undefined
  
  name!: string | undefined
  id_schiff!: string | undefined
  id!: string | undefined

  // status
  status: any[] = [
    { id: 1, bezeichnung: 'vorbereitend'},
    { id: 2, bezeichnung: 'aktiv' },
    { id: 3, bezeichnung: 'beendet' }
  ]

  // stepper
  isLinear: boolean = true
  isEditable: boolean = true

  // observables
  ship$: Observable<Ship | undefined>
  isPatrolActive$!: Observable<boolean>
  isPatrolBeendet$!: Observable<boolean>
  patrolStatus$!: Observable<string | undefined>
  zaehlerstaende$!: Observable<Zaehlerstand[] | undefined>
  besatzung$!: Observable<Besatzung[] | undefined>
  betankungen$!: Observable<Betankung[] | undefined>

  zaehlerstaende: Zaehlerstand[] | undefined

  patrol!: Patrol

  zweckFormGroup!: FormGroup
  besatzungFormGroup!: FormGroup
  bootFormGroup!: FormGroup
  checkFormGroup!: FormGroup
  kontrollFormGroup!: FormGroup

  kennung = ''
  zweck = ''

  kennungen$: Observable<Kennung[]>
  zwecke$: Observable<Zweck[]>
  // start = ''

  constructor(
    private store: Store<RootStoreState>, 
    private _formBuilder: FormBuilder,
    private _router: Router,
    private modalService: ModalService<BesatzungComponent>,
    private modalServiceZ: ModalService<ZaehlerstandComponent>,
    private modalServiceB: ModalService<BetankungComponent>,
    private locationService: LocationService) 
    {
      this.kennungen$ = this.store.pipe(select(KatSelectors.selectAllKennungen)) as Observable<Kennung[]>
      this.zwecke$ = this.store.pipe(select(KatSelectors.selectAllZwecke)) as Observable<Zweck[]>
      this.ship$ = this.store.pipe(select(ShipSelectors.selectedShip))
      this.isPatrolActive$ = this.store.pipe(select(ShipSelectors.isPatrolActive))
      this.isPatrolBeendet$ = this.store.pipe(select(ShipSelectors.isPatrolBeendet))
      this.patrolStatus$ = this.store.pipe(select(ShipSelectors.patrolStatus))
      this.besatzung$ = this.store.pipe(select(ShipSelectors.selectBesatzung))

      this.zaehlerstaende$ = this.store.pipe(select(ZaehlerstandSelectors.selectAllData))

      this.betankungen$ = this.store.pipe(select(ShipSelectors.selectBetankungen))

      this.store.pipe(select(ShipSelectors.selectShipId))

      this.checkFormGroup = this._formBuilder.group({
        check: [false]
      })
    }

  ngAfterViewInit(): void {
    // console.log(this.patrol)
  }

  ngOnInit(): void {
    this.zweckFormGroup = this._formBuilder.group({  
      kennung: ['', Validators.required],
      zweck: ['', Validators.required],
    })
    this.kontrollFormGroup = this._formBuilder.group({
      kontrolle: [false]
    })

    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
      this.name = ship?.name
    })

    this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe(patrol => {
      if (patrol) {
        this.zweckFormGroup.patchValue(patrol!)
        this.patrol = patrol!
      }
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

    this.store.pipe(select(ShipSelectors.selectZaehlerstaende)).subscribe(zaehlerstaende => {
      this.zaehlerstaende = zaehlerstaende
    })
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
    if (stepper.selectedIndex == 0 && this.zweckFormGroup.valid) {
      if (this.id) this.updatePatrol()
      if (!this.id) this.erstellePatrol()
    }
    stepper.next()
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
    this.kontrollFormGroup.patchValue({ kontrolle: false })
    // automatische Initialisierung nach laden der (leeren | beendeten) Patrol
    this.stepperReset(stepper)
    const initialize: Patrol = { besatzung: [], ende: '', id: '', id_schiff: this.id_schiff!, kennung: '', start: new Date().toISOString().substring(0,16), status: 'vorbereitend', zweck: ''  }
    this.store.dispatch(ShipAction.initializePatrol({ initialize }))
  }
  erstellePatrol() {
    // autom. Erstellen der Patrol in Vorbereitung (u.A. um die Besatzung hinzuzufuegen), id der DB übernehmen
    this.store.pipe(select(ShipSelectors.selectedPatrol)).pipe(take(1)).subscribe(patrol => {
      const insert: Patrol = Object.assign({}, patrol, this.zweckFormGroup.value, { start: new Date().toISOString().substring(0,16) })
      this.store.dispatch(ShipAction.insertPatrol({ insert }))
    })
  }
  updatePatrol(status?: string) {
    this.kontrollFormGroup.patchValue({ kontrolle: false })
    let update: Patrol
    // update zum eigentlichen Start oder beenden der Streife
    if (this.patrol.id == '' || this.patrol.id == undefined) {
      this.erstellePatrol()
      
    }
    this.store.pipe(select(ShipSelectors.selectedPatrol)).pipe(take(1)).subscribe(patrol => {
      if (patrol?.id) {
        switch (status) {
          case 'aktiv':
            // startposition setzen
            this.locationService.getCurrentPosition().then(position => {
              const positionReport: PositionReport = { id_streife: this.patrol.id, id_ship: this.patrol.id_schiff, date: new Date().toISOString().substring(0,16), location: { latitude: position.latitude, longitude: position.longitude}, ort: '', description: `Start der Streife` }
              this.store.dispatch(PositionActions.insertData({ positionReport }))
            })
            update = Object.assign({}, patrol, this.zweckFormGroup.value, { status: status, start: new Date().toISOString().substring(0,16) })
            break
          case 'beendet':
            update = Object.assign({}, patrol, this.zweckFormGroup.value, { status: status, ende: new Date().toISOString().substring(0,16) })
            // this.stepperReset(this.stepper!)
            this._router.navigateByUrl('/')
            break
          default:
            update = Object.assign({}, patrol, this.zweckFormGroup.value)
            break
        }
        this.store.dispatch(ShipAction.updatePatrol({ update }))
      }
    })
  }
  deletePatrol() {
    const id: string = this.id!
    this.store.dispatch(ShipAction.deletePatrol({ id }))
    this.id = ''
  }

  checkKontrolle(): boolean {
    return this.kontrollFormGroup.value.kontrolle
  }

  logout() {
    this.store.dispatch(logout())
  }

  async openBesatzungModal(id?: string) {
    let besatzung: Besatzung | undefined

    const { BesatzungComponent } = await import(
      './besatzung/besatzung.component'
    )

    if (id) {
      besatzung = this.patrol.besatzung.find(el => el.id == id)
      this.modalService.open(BesatzungComponent, {
        data: {
          title: 'Besatzungsmitglied bearbeiten',
          besatzung
        }
      })
    } else {
      this.modalService.open(BesatzungComponent, {
        data: {
          title: 'Besatzungsmitglied hinzufügen',
          besatzung: { id_streife: this.id, persnr: '', funktion: '', an_bord: '', von_bord: ''}
        }
      })
    }
  }

  async openZaehlerstandModal(id: string | undefined) {
    let zaehlerstand: Zaehlerstand | undefined
  
    this.store.pipe(select(ZaehlerstandSelectors.selectDataById(id))).subscribe(data => {
      zaehlerstand = data
    })
    const { ZaehlerstandComponent } = await import(
      './zaehlerstand/zaehlerstand.component'
    )
    this.modalServiceZ.open(ZaehlerstandComponent, {
      data: {
        title: 'Zählerstand aktualisieren',
        zaehlerstand
        // zaehlerstand: Object.assign(zaehlerstand, { id_ship: this.id_ship }) 
      }
    })
  }

  async openBetankungModal() {
    const { BetankungComponent } = await import(
      './betankung/betankung.component'
    )

    this.locationService.getCurrentPosition().then((data: any) => {
      console.info(`currentPosition | latitude: ${data.latitude}, longitude: ${data.longitude}`)
      const position: Position = { latitude: data.latitude, longitude: data.longitude }
      this.modalServiceB.open(BetankungComponent, {
        data: {
          title: 'Betankung durchführen',
          id_ship: this.id_schiff,
          date: new Date().toISOString().substring(0,16),
          location: position
        }
      })
    }, error => console.error(error))
  }
}
