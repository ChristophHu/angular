import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SettingsModule } from 'src/app/shared/components/settings/settings.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SettingsModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
