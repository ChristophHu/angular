import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from '../service/service.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ServiceRoutingModule,
    SharedModule
  ],
  declarations: [
    ServiceComponent
  ]
})
export class ServiceModule { }
