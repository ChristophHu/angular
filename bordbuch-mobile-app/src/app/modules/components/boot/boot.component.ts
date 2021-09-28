import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Reparatur } from 'src/app/core/models/reparatur';
import { Schiff } from 'src/app/core/models/schiff';
import { StatusStreife } from 'src/app/core/models/statusstreife';
import { Streife } from 'src/app/core/models/streife';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp';
import { AppService } from 'src/app/core/services/app.service';
import { SimpleModalService } from 'src/app/shared/components/simple-modal/simple-modal.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { BesatzungComponent } from './besatzung/besatzung.component';
import { PruefvermerkComponent } from './pruefvermerk/pruefvermerk.component';
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component';
import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.sass']
})
export class BootComponent implements OnInit {
  private id: string = ''
  schiff: Schiff = {id: '', name: '', marke: '', typ: '', identifikationsnummer: '', dienststelle: '', zaehlerstaende: []}
  streife: Streife = { id_schiff: this.schiff.id, zweck: '', status: StatusStreife.in_vorbereitung, start: '', ende: '', kennung: '', besatzung: [] }
  reparaturen: Reparatur[] = []
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

  constructor(private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private locationService: LocationService, private simpleModalService: SimpleModalService, private appService: AppService, private authService: AuthService, private modalService: ModalService<BesatzungComponent>, private modalServiceP: ModalService<PruefvermerkComponent>, private modalServiceZ: ModalService<ZaehlerstandComponent>) {

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
    )
    this.appService.getSchiff(this.id)
    this.appService.getStreifeVonSchiff(this.id)
    this.appService.getZaehlerstaende(this.id)
    this.appService.getReparaturen(this.id)

    if (this.streife.status == StatusStreife.aktiv) {
      console.log('Streife aktiv')
      this.fZweck.kennung.disable()
      this.fZweck.zweck.disable()
    }

    console.log(this.streife.status)
    if (this.streife.status == StatusStreife.aktiv) {
      this.locationService.locationServiceStart()
    } else {
      this.locationService.locationServiceStop()
    }


    this.bootFormGroup = this._formBuilder.group({

    });

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
  }

  beendeStreife() {
    // achtung, beendete streife.id bleibt bei besatzung drin
    this.streife.ende = new Date().toISOString()
    this.streife.status = StatusStreife.beendet
    this.appService.updateStreife(this.streife)
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
}
