import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootAuswahlComponent } from './boot-auswahl.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppService } from 'src/app/core/services/app.service';
import { ShipSelectionResolver } from 'src/app/store/ship-selection-store/ship-selection.resolver';
import { ShipSelectionModule } from 'src/app/store/ship-selection-store/ship-selection.module';
import { QrscannerComponent } from './qrscanner/qrscanner.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { ShipModule } from 'src/app/store/ship-store/ship.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { TabbarModule } from 'src/app/core/navbar/tabbar/tabbar.module';

export const routes: Routes = [
  { path: '', component: BootAuswahlComponent, resolve: { data: ShipSelectionResolver } },
]

@NgModule({
  declarations: [
    BootAuswahlComponent,
    QrscannerComponent
  ],
  imports: [
    SharedModule,
    TabbarModule,

    // npm pkg
    NgQrScannerModule,
    ZXingScannerModule,

    // router
    RouterModule.forChild(routes),

    // store
    ShipModule,
    ShipSelectionModule
  ],
  providers: [
    ShipSelectionResolver,
    AppService
  ]
})
export class BootAuswahlModule { }
