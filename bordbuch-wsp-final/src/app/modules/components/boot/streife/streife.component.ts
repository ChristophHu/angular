import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Betankung } from 'src/app/core/model/betankung';
import { Patrol } from 'src/app/core/model/patrol.model';
import { Reparatur } from 'src/app/core/model/reparatur';
import { Ship } from 'src/app/core/model/ship.model';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';
import { logout } from 'src/app/modules/auth/state/actions';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';
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
export class StreifeComponent implements OnInit {

  name!: string | undefined
  id_ship!: string | undefined
  id_streife!: string | undefined

  // status
  // status: any[] = [
  //   { name: 'In Vorbereitung'},
  //   { name: 'Aktiv' },
  //   { name: 'Beendet' }
  // ]

  // zweck
  zwecke: any[] = [
    { id: 1, bezeichnung: "Streifenfahrt" },
    { id: 2, bezeichnung: "Überführungsfahrt" },
    { id: 3, bezeichnung: "Probefahrt" }
  ]

  kennungen: any[] = [
    { id: 0, bezeichnung: "" },
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
  testForm!: FormGroup

  // kennung = new FormControl('Nixe 1', Validators.required)
  // zweck = new FormControl('Streifenfahrt', Validators.required)

  kennung = ''
  zweck = ''

  constructor(
    private store: Store<RootStoreState>, 
    private _formBuilder: FormBuilder,
    private modalService: ModalService<BesatzungComponent>,
    private modalServiceZ: ModalService<ZaehlerstandComponent>,
    private modalServiceP: ModalService<PruefvermerkComponent>,
    private modalServiceB: ModalService<BetankungComponent>) 
    {
      this.ship$ = this.store.pipe(select(ShipSelectors.selectedShip))
      this.isPatrolActive$ = this.store.pipe(select(ShipSelectors.isPatrolActive))
      this.besatzung$ = this.store.pipe(select(ShipSelectors.selectBesatzung))

      this.zaehlerstaende$ = this.store.pipe(select(ZaehlerstandSelectors.selectAllData))

      this.reparaturen$ = this.store.pipe(select(ShipSelectors.selectReparaturen))
      this.betankungen$ = this.store.pipe(select(ShipSelectors.selectBetankungen))

      this.store.pipe(select(ShipSelectors.selectShipId))

      this.checkFormGroup = this._formBuilder.group({
        check     : [false]
      })
    }

  ngOnInit(): void {
    this.zweckFormGroup = this._formBuilder.group({
      kennung: ['', Validators.required],
      zweck: ['', Validators.required]
    })
    this.testForm = this._formBuilder.group({
      subform: this._formBuilder.array([])
    });

    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
      this.name = ship?.name
    })

    this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe(patrol => {
      if (patrol) this.patrol = patrol!
      this.zweckFormGroup.patchValue(patrol!)
    })

    this.store.pipe(select(ShipSelectors.selectShipId)).subscribe(id_ship => {
      this.id_ship = id_ship
    })

    this.store.pipe(select(ShipSelectors.selectPatrolId)).subscribe(id_streife => {
      if (id_streife) this.id_streife = id_streife
    })

    this.store.pipe(select(ShipSelectors.selectZaehlerstaende)).subscribe(zaehlerstaende => {
      this.zaehlerstaende = zaehlerstaende
    })
  }

  // list of tabs
  list = [
    { id: 1, label: 'Next' },
    { id: 2, label: 'Prev' },
    // { id: 1, label: 'Streife' },
    // { id: 2, label: 'Besatzung' },
    // { id: 3, label: 'Zählerstände' },
    // { id: 4, label: 'Kontrolle' },
  ];

  // current Tab
  active = this.list[0];

  // Invoked when Tab Changes
  changeTab(tab: any) {
    this.active = tab;
  }

  next(stepper: CdkStepper) {
    stepper.next()
  }
  previous(stepper: CdkStepper) {
    stepper.previous()
  }

  startPatrol() {
    
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
          besatzung: { id_streife: this.id_streife, persnr: '', funktion: '', an_bord: '', von_bord: ''}
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
        id_ship: this.id_ship,
        date: new Date().toISOString()
      }
    })
  }

  async openBetankungModal() {
    const { BetankungComponent } = await import(
      './betankung/betankung.component'
    )
    this.modalServiceB.open(BetankungComponent, {
      data: {
        title: 'Betankung durchführen',
        id_ship: this.id_ship,
        date: new Date().toISOString()
      }
    })
  }
}
