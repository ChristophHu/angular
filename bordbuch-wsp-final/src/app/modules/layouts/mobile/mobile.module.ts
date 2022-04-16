import { NgModule } from '@angular/core'
import { MobileComponent } from './mobile.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { TopnavModule } from 'src/app/core/navbar/topnav/topnav.module'
import { RouterModule, Routes } from '@angular/router'
import { Resolver } from 'src/app/store/resolver'
import { KatModule } from 'src/app/store/kat-store/kat.module'
import { KatFacade } from 'src/app/store/kat-store/kat.facade'
import { SpecFacade } from 'src/app/store/spec-store/spec.facade'
import { SpecModule } from 'src/app/store/spec-store/spec.module'

export const routes: Routes = [
  { path: '', component: MobileComponent,
  children: [
    { path: '', loadChildren: () => import('../../components/boot-auswahl/boot-auswahl.module').then(m => m.BootAuswahlModule), resolve: { data: Resolver } },
    { path: 'boot', loadChildren: () => import('../../components/boot/boot.module').then(m => m.BootModule) }
  ]}
]

@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    TopnavModule,
    KatModule,
    SpecModule
  ],
  providers: [
    Resolver,
    KatFacade,
    SpecFacade
  ]
})
export class MobileModule { }
