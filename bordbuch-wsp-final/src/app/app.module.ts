import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './modules/auth/auth.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RootStoreModule } from './store/root-store.module'
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component'
import { SharedModule } from './shared/shared.module'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
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
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
