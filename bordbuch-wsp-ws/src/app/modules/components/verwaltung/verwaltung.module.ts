import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchiffeComponent } from './schiffe/schiffe.component';
import { PruefvermerkeComponent } from './pruefvermerke/pruefvermerke.component';
import { RouterModule, Routes } from '@angular/router';
import { VerwaltungComponent } from './verwaltung.component';
import { KatalogeComponent } from './kataloge/kataloge.component';

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
    SchiffeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VerwaltungModule { }
