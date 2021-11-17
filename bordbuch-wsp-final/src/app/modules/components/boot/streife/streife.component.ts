import { CdkStepper } from '@angular/cdk/stepper';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Betankung } from 'src/app/core/model/betankung';
import { Patrol } from 'src/app/core/model/patrol.model';
import { Position } from 'src/app/core/model/position';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { Reparatur } from 'src/app/core/model/reparatur';
import { Ship } from 'src/app/core/model/ship.model';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { AppService } from 'src/app/core/services/app.service';
import { LocationService } from 'src/app/core/services/location.service';
import { logout } from 'src/app/modules/auth/state/actions';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PositionActions } from 'src/app/store/positionreport-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipAction, ShipSelectors } from 'src/app/store/ship-store';
import { ZaehlerstandSelectors } from 'src/app/store/zaehlerstand-store';
import { BesatzungComponent } from './besatzung/besatzung.component';
import { BetankungComponent } from './betankung/betankung.component';
import { PruefvermerkComponent } from './pruefvermerk/pruefvermerk.component';
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component';

@Component({
  selector: 'app-streife',
  templateUrl: './streife.component.html',
  styleUrls: ['./streife.component.sass']
})
export class StreifeComponent implements OnInit, AfterViewInit {

  name!: string | undefined
  id_schiff!: string | undefined
  id!: string | undefined

  // status
  status: any[] = [
    { id: 1, bezeichnung: 'vorbereitend'},
    { id: 2, bezeichnung: 'aktiv' },
    { id: 3, bezeichnung: 'beendet' }
  ]

  // zweck
  zwecke: any[] = [
    { id: 1, bezeichnung: "Streifenfahrt" },
    { id: 2, bezeichnung: "Überführungsfahrt" },
    { id: 3, bezeichnung: "Probefahrt" }
  ]

  kennungen: any[] = [
    // { id: 0, bezeichnung: "" },
    { id: 1, bezeichnung: "Nixe 1" },
    { id: 2, bezeichnung: "Nixe 2" },
    { id: 3, bezeichnung: "Nixe 3" },
    { id: 4, bezeichnung: "Nixe 11" }
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
  reparaturen$!: Observable<Reparatur[] | undefined>
  betankungen$!: Observable<Betankung[] | undefined>

  zaehlerstaende: Zaehlerstand[] | undefined

  patrol!: Patrol

  zweckFormGroup!: FormGroup
  besatzungFormGroup!: FormGroup
  bootFormGroup!: FormGroup
  checkFormGroup!: FormGroup

  kennung = ''
  zweck = ''
  // start = ''

  constructor(
    private store: Store<RootStoreState>, 
    private _formBuilder: FormBuilder,
    private appService: AppService,
    private modalService: ModalService<BesatzungComponent>,
    private modalServiceZ: ModalService<ZaehlerstandComponent>,
    private modalServiceP: ModalService<PruefvermerkComponent>,
    private modalServiceB: ModalService<BetankungComponent>,
    private locationService: LocationService) 
    {
      this.ship$ = this.store.pipe(select(ShipSelectors.selectedShip))
      this.isPatrolActive$ = this.store.pipe(select(ShipSelectors.isPatrolActive))
      this.isPatrolBeendet$ = this.store.pipe(select(ShipSelectors.isPatrolBeendet))
      this.patrolStatus$ = this.store.pipe(select(ShipSelectors.patrolStatus))
      this.besatzung$ = this.store.pipe(select(ShipSelectors.selectBesatzung))

      this.zaehlerstaende$ = this.store.pipe(select(ZaehlerstandSelectors.selectAllData)).pipe(
        tap(data => console.log(data))
      )

      this.reparaturen$ = this.store.pipe(select(ShipSelectors.selectReparaturen))
      this.betankungen$ = this.store.pipe(select(ShipSelectors.selectBetankungen))

      this.store.pipe(select(ShipSelectors.selectShipId))

      this.checkFormGroup = this._formBuilder.group({
        check: [false]
      })
    }

  ngAfterViewInit(): void {
    console.log(this.patrol.status)
  }

  ngOnInit(): void {
    this.zweckFormGroup = this._formBuilder.group({  
      kennung: ['', Validators.required],
      zweck: ['', Validators.required],
    })

    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
      this.name = ship?.name
    })

    this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe(patrol => {
      if (patrol) {
        this.zweckFormGroup.patchValue(patrol!)
        this.patrol = patrol!
      }
      if (patrol?.status == 'aktiv') {
        // auslagern und in den Store mit aufnehmen
        this.appService.checkPositionStart()
      } else {
        this.appService.checkPositionStop()
      }
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
  stepperIndex(stepper: CdkStepper): boolean {
    return stepper.selectedIndex == 0 ? true : false
  }

  initializePatrol() {
    // automatische Initialisierung nach laden der (leeren | beendeten) Patrol
    const initialize: Patrol = { besatzung: [], ende: '', id: '', id_schiff: this.id_schiff!, kennung: '', start: new Date().toISOString().slice(0, -1), status: 'vorbereitend', zweck: ''  }
    console.log(initialize)
    this.store.dispatch(ShipAction.initializePatrol({ initialize }))
  }
  erstellePatrol() {
    // autom. Erstellen der Patrol in Vorbereitung (u.A. um die Besatzung hinzuzufuegen), id der DB übernehmen
    this.store.pipe(select(ShipSelectors.selectedPatrol)).pipe(take(1)).subscribe(patrol => {
      const insert: Patrol = Object.assign({}, patrol, this.zweckFormGroup.value, { start: new Date().toISOString().slice(0, -1) })
      this.store.dispatch(ShipAction.insertPatrol({ insert }))
    })
  }
  updatePatrol(status?: string) {
    console.log(status)
    let update: Patrol
    // update zum eigentlichen Start oder beenden der Streife
    if (this.patrol.id == '' || this.patrol.id == undefined) {
      this.erstellePatrol()
    }
    this.store.pipe(select(ShipSelectors.selectedPatrol)).pipe(take(1)).subscribe(patrol => {
      console.log('update patrol')
      if (patrol?.id) {
        switch (status) {
          case 'aktiv':
            // startposition setzen
            this.locationService.getCurrentPosition().then(position => {
              const positionReport: PositionReport = { id_streife: this.patrol.id, id_ship: this.patrol.id_schiff, date: new Date().toISOString(), location: { latitude: position.latitude, longitude: position.longitude}, description: `Start der Streife` }
              this.store.dispatch(PositionActions.insertData({ positionReport }))
            })

            update = Object.assign({}, patrol, this.zweckFormGroup.value, { status: status, start: new Date().toISOString().slice(0, -1) })
            break
          case 'beendet':
            update = Object.assign({}, patrol, this.zweckFormGroup.value, { status: status, ende: new Date().toISOString().slice(0, -1) })
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
  
    this.store.pipe(select(ZaehlerstandSelectors.selectDatyById(id))).subscribe(data => {
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

  async openPruefvermerkModal() {
    const { PruefvermerkComponent } = await import(
      './pruefvermerk/pruefvermerk.component'
    )
    this.modalServiceP.open(PruefvermerkComponent, {
      data: {
        title: 'Prüfvermerk erstellen',
        id_ship: this.id_schiff,
        date: new Date().toISOString()
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
          date: new Date().toISOString(),
          location: position
        }
      })
    }, error => console.error(error))
  }
}
