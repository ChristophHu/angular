import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { RouterModule, Routes } from '@angular/router';
import { BetankungenComponent } from './betankungen/betankungen.component';
import { ZaehlerstaendeComponent } from './zaehlerstaende/zaehlerstaende.component';
import { WartungenComponent } from './wartungen/wartungen.component';
import { ChecklistenComponent } from './checklisten/checklisten.component';
import { ReparaturenComponent } from './reparaturen/reparaturen.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BetankungModalComponent } from './betankungen/betankung-modal/betankung-modal.component';
import { ZaehlerstandModalComponent } from './zaehlerstaende/zaehlerstand-modal/zaehlerstand-modal.component'

const routes: Routes = [
  { path: '', component: ServiceComponent,
    children: [
      { path: 'betankungen', component: BetankungenComponent },
      { path: 'checklisten', component: ChecklistenComponent },
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
    ZaehlerstaendeComponent,
    WartungenComponent,
    ReparaturenComponent,
    BetankungModalComponent,
    ZaehlerstandModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    
    SharedModule
  ]
})
export class ServiceModule { }
