import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Reparatur } from 'src/app/core/models/reparatur';
import { Schiff } from 'src/app/core/models/schiff';
import { StatusStreife } from 'src/app/core/models/statusstreife';
import { Streife } from 'src/app/core/models/streife';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand';
import { AppService } from 'src/app/core/services/app.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { BesatzungComponent } from './besatzung/besatzung.component';
import { PruefvermerkComponent } from './pruefvermerk/pruefvermerk.component';
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component';
import { LocationService } from 'src/app/core/services/location.service';
import { Betankung } from 'src/app/core/models/betankung';
import { TankzettelComponent } from '../boot/tankzettel/tankzettel.component';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.sass']
})
export class BootComponent implements OnInit, AfterViewInit {
  private id: string = ''
  schiff: Schiff = {id: '', name: '', marke: '', typ: '', identifikationsnummer: '', dienststelle: '', zaehlerstaende: []}
  streife: Streife = { id_schiff: this.schiff.id, zweck: '', status: StatusStreife.in_vorbereitung, start: '', ende: '', kennung: '', besatzung: [] }
  reparaturen: Reparatur[] = []
  betankungen: Betankung[] = []
  zaehlerstaende: Zaehlerstand[] = []

  private bootSubscription = new Subscription

  // zweck
  zweck: any[] = [
    { name: "Streifenfahrt" },
    { name: "Überführungsfahrt" },
    { name: "Probefahrt" }
  ]
  
  isLinear = true;

  zweckFormGroup!: FormGroup
  besatzungFormGroup!: FormGroup
  bootFormGroup!: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private locationService: LocationService, private appService: AppService, private authService: AuthService, private modalService: ModalService<BesatzungComponent>, private modalServiceP: ModalService<PruefvermerkComponent>, private modalServiceZ: ModalService<ZaehlerstandComponent>, private modalServiceT: ModalService<TankzettelComponent>) {

    // streife
    this.zweckFormGroup = this._formBuilder.group({
      kennung   : [this.streife.kennung, Validators.required],
      zweck     : [this.streife.zweck, Validators.required]
    });
  }

  ngOnInit() {
    this.bootSubscription
      .add(
        this.activatedRoute.params.subscribe(
          (params: Params) => this.id = params['id']
        )
      )
      .add(
        this.appService.schiffe.subscribe((data: any[]) => {
          this.schiff = data[0]
        }
      )
      .add(
        this.appService.aktiveStreife.subscribe(data => {
          this.streife = data[0]
          this.zweckFormGroup.patchValue(this.streife)
        })
      )
      .add(
        this.appService.zaehlerstaende.subscribe(data => {
          this.zaehlerstaende = data
        })
      )
      .add(
        this.appService.reparaturen.subscribe(data => {
          this.reparaturen = data
        })
      )
      .add(
        this.appService.betankung.subscribe(data => {
          this.betankungen = data
        })
      )
    )
    this.appService.getSchiff(this.id)
    this.appService.getStreifeVonSchiff(this.id)
    this.appService.getZaehlerstaende(this.id)
    this.appService.getReparaturen(this.id)
    this.appService.getBetankungen(this.id)

    if (this.streife.status == StatusStreife.aktiv) {
      this.fZweck.kennung.disable()
      this.fZweck.zweck.disable()
    }

    this.bootFormGroup = this._formBuilder.group({

    });
  }

  ngAfterViewInit(): void {
    console.log(this.streife.status)
    if (this.streife.status == 'aktiv') {
      this.appService.checkPositionStart()
    } else {
      this.appService.checkPositionStop()
    }
  }

  get fZweck() {
		return this.zweckFormGroup.controls
	}

  logout() {
    this.authService.logout()
  }

  updateAktiveStreife() {
    this.appService.updateAktiveStreife(this.fZweck.kennung.value, this.fZweck.zweck.value)
  }

  startStreife() {
    this.streife = { id_schiff: this.schiff.id, zweck: this.fZweck.zweck.value, status: StatusStreife.aktiv, start: new Date().toISOString(), ende: '', kennung: this.fZweck.kennung.value, besatzung: this.streife.besatzung }
    console.log(this.streife)
    this.appService.insertStreife(this.streife)
    this.appService.checkPositionStart()
  }

  beendeStreife() {
    // achtung, beendete streife.id bleibt bei besatzung drin
    this.streife.ende = new Date().toISOString()
    this.streife.status = StatusStreife.beendet
    this.appService.updateStreife(this.streife)
    this.appService.checkPositionStop()
  }

  // modal
  async editMemberModal(index: number): Promise<void> {
    var besatzung = this.streife.besatzung[index]
    const { BesatzungComponent } = await import(
      './besatzung/besatzung.component'
    )
    this.modalService.open(BesatzungComponent, {
      data: {
        title: 'Besatzungsmitglied bearbeiten',
        besatzung
      }
    })
  }
  async addMemberModal(): Promise<void> {
    const { BesatzungComponent } = await import(
      './besatzung/besatzung.component'
    )
    this.modalService.open(BesatzungComponent, {
      data: {
        title: 'Besatzungsmitglied hinzufügen',
        besatzung: { id_streife: this.streife.id }
      }
    })
  }

  async addPruefvermerkModal(): Promise<void> {
    const { PruefvermerkComponent } = await import(
      './pruefvermerk/pruefvermerk.component'
    )
    this.modalServiceP.open(PruefvermerkComponent, {
      data: {
        title: 'Prüfvermerk hinzufügen',
        reparatur: { id_ship: this.schiff.id, date: new Date().toISOString() }
      }
    })
  }
  async editPruefvermerkModal(index: number) {
    var reparatur = this.reparaturen[index]
    const { PruefvermerkComponent } = await import(
      './pruefvermerk/pruefvermerk.component'
    )
    this.modalServiceP.open(PruefvermerkComponent, {
      data: {
        title: 'Gefertigter Prüfvermerk',
        reparatur: reparatur
      }
    })
  }

  async editZaehlerstandModal(index: number) {
    var zaehlerstand = this.zaehlerstaende[index]
    const { ZaehlerstandComponent } = await import(
      './zaehlerstand/zaehlerstand.component'
    )
    this.modalServiceZ.open(ZaehlerstandComponent, {
      data: {
        title: 'Zählerstand aktualisieren',
        zaehlerstand: Object.assign(zaehlerstand, { id_ship: this.schiff.id }) 
      }
    })
  }

  async openBetankungModal(id?: string) {
    let betankung: Betankung | undefined

    const { TankzettelComponent } = await import(
      '../boot/tankzettel/tankzettel.component'
    )

    if (id) {
      betankung = this.appService._dataStore.betankung.find(el => el.id == id)
      this.modalServiceT.open(TankzettelComponent, {
        data: {
          title: 'Tankzettel bearbeiten',
          betankung
        }
      })
    } else {
      this.locationService.getCurrentPosition().then((data: any) => {
        betankung = { id_ship: this.appService._id_schiff, date: new Date().toISOString(), ort: '', location: {latitude: data.latitude, longitude: data.longitude }, fuel: '', fuelfillingquantity: 0}
        this.modalServiceT.open(TankzettelComponent, {
          data: {
            title: 'Tankzettel hinzufügen',
            betankung
          }
        })
      }, error => console.error(error))
    }
  }
}
