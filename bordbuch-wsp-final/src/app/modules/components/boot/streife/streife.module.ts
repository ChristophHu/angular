import { NgModule } from '@angular/core'
import { StreifeComponent } from './streife.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { BesatzungComponent } from './besatzung/besatzung.component'
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component'
import { PruefvermerkModalComponent } from './pruefvermerk/pruefvermerk-modal/pruefvermerk-modal.component'
import { BetankungComponent } from './betankung/betankung.component'
import { CdkStepperModule } from '@angular/cdk/stepper'
import { TabbarModule } from 'src/app/core/navbar/tabbar/tabbar.module'
import { TimelineComponent } from 'src/app/shared/components/timeline/timeline.component'
import { ChecklisteComponent } from './checkliste/checkliste.component'
import { ChecklistItemsComponent } from './checkliste/checklist-items/checklist-items.component'
import { PeilungComponent } from './peilung/peilung.component'
import { PeilungModalComponent } from './peilung/peilung-modal/peilung-modal.component'
import { WartungComponent } from './wartung/wartung.component'
import { PruefvermerkComponent } from './pruefvermerk/pruefvermerk.component';
import { KontrolleComponent } from './kontrolle/kontrolle.component'

@NgModule({
  declarations: [
    StreifeComponent,
    BesatzungComponent,
    ZaehlerstandComponent,
    BetankungComponent,
    TimelineComponent,
    ChecklisteComponent,
    ChecklistItemsComponent,
    PeilungComponent,
    PeilungModalComponent,
    WartungComponent,
    PruefvermerkComponent,
    PruefvermerkModalComponent,
    KontrolleComponent
  ],
  imports: [
    SharedModule,
    CdkStepperModule,
    TabbarModule
  ]
})
export class StreifeModule { }
