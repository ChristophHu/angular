import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconLibraryModule } from 'projects/icon-library/src/lib/icon-library.module'
import { InfoComponent } from './info/info.component'
import { InfoPopupDirective } from './info-popup.directive'
import { InfoButtonComponent } from './info-button/info-button.component'

@NgModule({
  declarations: [
    InfoComponent,
    InfoButtonComponent,
    InfoPopupDirective
  ],
  imports: [
    CommonModule,

    IconLibraryModule
  ],
  exports: [
    InfoComponent,
    InfoPopupDirective
  ]
})
export class InfoPopupModule { }
