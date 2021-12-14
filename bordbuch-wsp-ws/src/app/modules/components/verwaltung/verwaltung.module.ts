import { NgModule } from '@angular/core';
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
import { KatBetriebsstoffeComponent } from './kataloge/kat-betriebsstoffe/kat-betriebsstoffe.component';
import { KatBetriebsstoffeModalComponent } from './kataloge/kat-betriebsstoffe/kat-betriebsstoffe-modal/kat-betriebsstoffe-modal.component';
import { KatFunktionenComponent } from './kataloge/kat-funktionen/kat-funktionen.component';
import { KatFunktionModalComponent } from './kataloge/kat-funktionen/kat-funktion-modal/kat-funktion-modal.component';
import { KatZaehlerstandstypenComponent } from './kataloge/kat-zaehlerstandstypen/kat-zaehlerstandstypen.component';
import { KatZaehlerstandstypModalComponent } from './kataloge/kat-zaehlerstandstypen/kat-zaehlerstandstyp-modal/kat-zaehlerstandstyp-modal.component';
import { KatPruefvermerkkategorienComponent } from './kataloge/kat-pruefvermerkkategorien/kat-pruefvermerkkategorien.component';
import { KatPruefvermerkkategorieModalComponent } from './kataloge/kat-pruefvermerkkategorien/kat-pruefvermerkkategorie-modal/kat-pruefvermerkkategorie-modal.component';
import { KatDienststellenComponent } from './kataloge/kat-dienststellen/kat-dienststellen.component';
import { KatDienststelleModalComponent } from './kataloge/kat-dienststellen/kat-dienststelle-modal/kat-dienststelle-modal.component';

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
    ChecklisteModalComponent,
    KatBetriebsstoffeComponent,
    KatBetriebsstoffeModalComponent,
    KatFunktionenComponent,
    KatFunktionModalComponent,
    KatZaehlerstandstypenComponent,
    KatZaehlerstandstypModalComponent,
    KatPruefvermerkkategorienComponent,
    KatPruefvermerkkategorieModalComponent,
    KatDienststellenComponent,
    KatDienststelleModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    SharedModule
  ]
})
export class VerwaltungModule { }