import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernComponent } from './modern.component';
import { SettingsModule } from 'src/app/shared/components/settings/settings.module';

@NgModule({
  declarations: [
    ModernComponent
  ],
  imports: [
    CommonModule,
    SettingsModule
  ],
  exports: [
    ModernComponent
  ]
})
export class ModernModule { }
