import { NgModule } from '@angular/core';
import { StreifeComponent } from './streife.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BesatzungComponent } from './besatzung/besatzung.component';
import { ZaehlerstandComponent } from './zaehlerstand/zaehlerstand.component';
import { PruefvermerkComponent } from './pruefvermerk/pruefvermerk.component';
import { BetankungComponent } from './betankung/betankung.component';
import { RouterModule } from '@angular/router';
import { PositionComponent } from '../positions/position/position.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { TabbarModule } from 'src/app/core/navbar/tabbar/tabbar.module';
import { TimelineComponent } from 'src/app/shared/components/timeline/timeline.component';

@NgModule({
  declarations: [
    StreifeComponent,
    BesatzungComponent,
    ZaehlerstandComponent,
    PruefvermerkComponent,
    BetankungComponent,
    PositionComponent,
    TimelineComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    CdkStepperModule,
    TabbarModule
  ]
})
export class StreifeModule { }
