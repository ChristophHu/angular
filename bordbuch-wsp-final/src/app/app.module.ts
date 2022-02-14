import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './modules/auth/auth.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RootStoreModule } from './store/root-store.module'
import { SharedModule } from './shared/shared.module'
import { MarkdownModule } from 'ngx-markdown'
import { ConnectionService } from './core/services/connection.service'
// import { httpInterceptorProviders } from './core/interceptors'
import { ErrorInterceptor } from './core/interceptors/error.interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    RootStoreModule,
    SharedModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: ConnectionService },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
