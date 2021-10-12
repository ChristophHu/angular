import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DataResolver } from './state/data.resolver';
import { DataEffects } from './state/data.effects';
import { EffectsModule } from '@ngrx/effects';
import { DataService } from './data.service';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './state/data.reducers';

export const dataRoutes: Routes = [
  { path: '', component: AdminComponent, resolve: { data : DataResolver }}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataRoutes),
    StoreModule.forFeature('data', dataReducer),
    EffectsModule.forFeature([DataEffects])
  ],
  declarations: [],
  providers: [
    DataResolver,
    DataService
  ]
})
export class AdminModule { }
