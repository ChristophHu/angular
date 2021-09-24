import { NgModule } from '@angular/core';
import { MobileLayoutComponent } from './mobile-layout.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { QrscannerComponent } from '../../components/bordbuch-auswahl/qrscanner/qrscanner.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BordbuchAuswahlComponent } from '../../components/bordbuch-auswahl/bordbuch-auswahl.component';
import { MobileLayoutRoutingModule } from './mobile-layout-routing.module';
import { BootComponent } from '../../components/boot/boot.component';

import { SimpleModalComponent } from 'src/app/shared/components/simple-modal/simple-modal.component';
import { StringToDatePipe } from 'src/app/shared/pipes/string-to-date.pipe';
import { MapComponent } from '../../components/map/map.component';
import { BesatzungComponent } from '../../components/boot/besatzung/besatzung.component';
import { PruefvermerkComponent } from '../../components/boot/pruefvermerk/pruefvermerk.component';
import { ZaehlerstandComponent } from '../../components/boot/zaehlerstand/zaehlerstand.component';
import { PositionenComponent } from '../../components/positionen/positionen.component';
import { PositionComponent } from '../../components/positionen/position/position.component';
import { TankzettelComponent } from '../../components/positionen/tankzettel/tankzettel.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    MobileLayoutComponent,
    BordbuchAuswahlComponent,
    BootComponent,
    BesatzungComponent,
    ZaehlerstandComponent,
    PruefvermerkComponent,
    ModalComponent,
    QrscannerComponent,
    SimpleModalComponent,
    StringToDatePipe,
    MapComponent,
    PositionenComponent,
    PositionComponent,
    TankzettelComponent
  ],
  imports: [
    RouterModule,
    MobileLayoutRoutingModule,
    NgQrScannerModule,
    NgSelectModule,

    SharedModule,

    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatStepperModule,
    MatCheckboxModule,
    MatSortModule
  ]
})
export class MobileLayoutModule { }
