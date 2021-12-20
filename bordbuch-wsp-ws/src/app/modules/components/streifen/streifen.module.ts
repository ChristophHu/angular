import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AktuellePositionenComponent } from './aktuelle-positionen/aktuelle-positionen.component';
import { StreifenComponent } from './streifen.component';
import { AusgewaehlteStreifenComponent } from './ausgewaehlte-streifen/ausgewaehlte-streifen.component';
import { AusgewaehlteStreifenModalComponent } from './ausgewaehlte-streifen/ausgewaehlte-streifen-modal/ausgewaehlte-streifen-modal.component';
import { AusgewaehlteStreifeComponent } from './ausgewaehlte-streife/ausgewaehlte-streife.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', component: StreifenComponent,
    children: [
      { path: 'test', component: TestComponent },
      { path: 'aktuelle-positionen', component: AktuellePositionenComponent },
      { path: 'ausgewaehlte-streifen', component: AusgewaehlteStreifenComponent },
      { path: ':id', component: AusgewaehlteStreifeComponent }
    ]
  }
]

@NgModule({
  declarations: [
    StreifenComponent,
    AktuellePositionenComponent,
    AusgewaehlteStreifenComponent,
    AusgewaehlteStreifenModalComponent,
    TestComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    SharedModule
  ]
})
export class StreifenModule { }
