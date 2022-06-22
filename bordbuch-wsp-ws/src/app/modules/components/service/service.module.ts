import { NgModule } from '@angular/core';
import { ServiceComponent } from './service.component';
import { RouterModule, Routes } from '@angular/router';

import { ZaehlerstaendeComponent } from './zaehlerstaende/zaehlerstaende.component';
import { WartungenComponent } from './wartungen/wartungen.component';
import { ChecklistenComponent } from './checklisten/checklisten.component';
import { ReparaturenComponent } from './reparaturen/reparaturen.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ZaehlerstandModalComponent } from './zaehlerstaende/zaehlerstand-modal/zaehlerstand-modal.component'
import { ChecklisteModalComponent } from './checklisten/checkliste-modal/checkliste-modal.component';
import { WartungMotorModalComponent } from './wartungen/wartung-motoren/wartung-motor-modal/wartung-motor-modal.component';
import { WartungMotorenComponent } from './wartungen/wartung-motoren/wartung-motoren.component';
import { WartungSchiffeComponent } from './wartungen/wartung-schiffe/wartung-schiffe.component';
import { WartungSchiffModalComponent } from './wartungen/wartung-schiffe/wartung-schiff-modal/wartung-schiff-modal.component';
import { ReparaturModalComponent } from './reparaturen/reparatur-modal/reparatur-modal.component';
import { BetankungModalComponent } from './betankungen/betankung-modal/betankung-modal.component';
import { BetankungenComponent } from './betankungen/betankungen.component';
import { PeilungenComponent } from './peilungen/peilungen.component';
import { PeilungModalComponent } from './peilungen/peilung-modal/peilung-modal.component';
import { KlarmeldungenComponent } from './klarmeldungen/klarmeldungen.component';
import { KlarmeldungModalComponent } from './klarmeldungen/klarmeldung-modal/klarmeldung-modal.component';
import { InstandsetzungenComponent } from './instandsetzungen/instandsetzungen.component';
import { InstandsetzungModalComponent } from './instandsetzungen/instandsetzung-modal/instandsetzung-modal.component';

const routes: Routes = [
  { path: '', component: ServiceComponent,
    children: [
      { path: 'betankungen', component: BetankungenComponent },
      { path: 'peilungen', component: PeilungenComponent },
      { path: 'checklisten', component: ChecklistenComponent },
      { path: 'instandsetzungen', component: InstandsetzungenComponent },
      { path: 'klarmeldungen', component: KlarmeldungenComponent },
      { path: 'reparaturen', component: ReparaturenComponent },
      { path: 'wartungen', component: WartungenComponent },
      { path: 'zaehlerstaende', component: ZaehlerstaendeComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ServiceComponent,
    BetankungenComponent,
    ChecklistenComponent,
    ChecklisteModalComponent,
    ZaehlerstaendeComponent,
    WartungenComponent,
    ReparaturenComponent,
    BetankungModalComponent,
    ZaehlerstandModalComponent,
    WartungMotorenComponent,
    WartungMotorModalComponent,
    WartungSchiffeComponent,
    WartungSchiffModalComponent,
    ReparaturModalComponent,
    PeilungenComponent,
    PeilungModalComponent,
    KlarmeldungenComponent,
    KlarmeldungModalComponent,
    InstandsetzungenComponent,
    InstandsetzungModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    
    SharedModule
  ]
})
export class ServiceModule { }
