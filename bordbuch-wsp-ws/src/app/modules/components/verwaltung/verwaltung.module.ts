import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchiffeComponent } from './schiffe/schiffe.component';
import { PruefvermerkeComponent } from './pruefvermerke/pruefvermerke.component';
import { RouterModule, Routes } from '@angular/router';
import { VerwaltungComponent } from './verwaltung.component';
import { KatalogeComponent } from './kataloge/kataloge.component';
import { KatZweckComponent } from './kataloge/kat-zweck/kat-zweck.component';
import { KatKennungenComponent } from './kataloge/kat-kennungen/kat-kennungen.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KatZweckModalComponent } from './kataloge/kat-zweck/kat-zweck-modal/kat-zweck-modal.component';
import { KatKennungModalComponent } from './kataloge/kat-kennungen/kat-kennung-modal/kat-kennung-modal.component';
import { KatChecklisteComponent } from './kataloge/kat-checkliste/kat-checkliste.component';
import { KatChecklisteModalComponent } from './kataloge/kat-checkliste/kat-checkliste-modal/kat-checkliste-modal.component';
import { ChecklisteModalComponent } from './schiffe/checkliste-modal/checkliste-modal.component';

const routes: Routes = [
  { path: '', component: VerwaltungComponent,
    children: [
      { path: 'kataloge', component: KatalogeComponent },
      { path: 'pruefvermerke', component: PruefvermerkeComponent },
      { path: 'schiffe', component: SchiffeComponent }
    ]
  }
]

@NgModule({
  declarations: [
    VerwaltungComponent,
    KatalogeComponent,
    PruefvermerkeComponent,
    SchiffeComponent,
    KatZweckComponent,
    KatKennungenComponent,
    KatZweckModalComponent,
    KatKennungModalComponent,
    KatChecklisteComponent,
    KatChecklisteModalComponent,
    ChecklisteModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    SharedModule
  ]
})
export class VerwaltungModule { }
