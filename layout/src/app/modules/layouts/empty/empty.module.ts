import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { SettingsModule } from 'src/app/shared/components/settings/settings.module';


@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    CommonModule,
    SettingsModule
  ],
  exports: [
    EmptyComponent
  ]
})
export class EmptyModule { }
