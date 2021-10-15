import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { AuthService } from './auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AuthReducer } from './state'
import { AuthGuard } from './auth.guard'
import { AuthEffects } from './state/effects'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([ { path: '', component: LoginComponent } ]),
    StoreModule.forFeature('auth', AuthReducer.authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
      return {
          ngModule: AuthModule,
          providers: [
            AuthService,
            AuthGuard
          ]
      }
  }
}
