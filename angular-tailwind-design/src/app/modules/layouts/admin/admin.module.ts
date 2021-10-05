import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AdminComponent
  ],
  providers: [

  ]
})
export class AdminModule { }
