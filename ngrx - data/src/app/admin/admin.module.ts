import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DataEffects } from './state/data.effects';
import { EffectsModule } from '@ngrx/effects';
import { DataService } from './services/data.service';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './state/data.reducers';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { DataEntityService } from './services/data-entity.service';
import { DataResolver } from './services/data.resolver';
import { CoursesDataService } from './services/course-data.service';

export const dataRoutes: Routes = [
  { path: '', component: AdminComponent, resolve: { data : DataResolver }},
  // { path: 'spec', component: SpecDataComponent, resolve: { data : DataResolver }}
]

const entityMetaData: EntityMetadataMap = {
  Data: {}
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataRoutes),
    StoreModule.forFeature('data', dataReducer),
    EffectsModule.forFeature([DataEffects])
  ],
  declarations: [],
  providers: [
    DataService,
    DataEntityService,
    DataResolver,
    CoursesDataService
  ]
})
export class AdminModule {
  constructor(private entityDefinitionService: EntityDefinitionService, private entityDataService: EntityDataService, private coursesDataService: CoursesDataService) {
    entityDefinitionService.registerMetadataMap(entityMetaData)

    // entityDataService.registerService('Datas', coursesDataService)
  }
}
