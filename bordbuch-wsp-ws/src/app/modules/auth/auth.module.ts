import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { AuthService } from './auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './auth.guard'
import { AuthEffects } from './state/effects'
import { authReducer } from './state/reducer'
import { Features } from 'src/app/core/models/feature'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { IconLibraryModule } from 'projects/icon-library/src/lib/icon-library.module';
import { ChangelogComponent } from './login/changelog/changelog.component'
import { ModalModule } from 'src/app/shared/components/modal/modal.module'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([ { path: '', component: LoginComponent } ]),
    StoreModule.forFeature(Features.Auth, authReducer),
    EffectsModule.forFeature([AuthEffects]),
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    IconLibraryModule,
    ModalModule
  ],
  declarations: [
    LoginComponent,
    ChangelogComponent
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
