import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UebersichtComponent } from './uebersicht.component';

@NgModule({
  declarations: [
    UebersichtComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UebersichtModule { }
