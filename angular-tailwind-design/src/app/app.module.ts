import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DataTablesModule } from 'angular-datatables'
import { LeafletMapModule } from './modules/components/map/leaflet-map/leaflet-map.module'
import { MarkdownModule } from 'ngx-markdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReparaturenServiceComponent } from './modules/components/reparaturen-service/reparaturen-service.component'
import { ReparaturComponent } from './modules/components/reparaturen-service/reparatur/reparatur.component'
import { BetankungenComponent } from './modules/components/betankungen/betankungen.component'
import { BetankungComponent } from './modules/components/betankungen/betankung/betankung.component'
import { VerwaltungVonSchiffenComponent } from './modules/components/verwaltung/verwaltung-von-schiffen/verwaltung-von-schiffen.component'
import { SchiffComponent } from './modules/components/verwaltung/verwaltung-von-schiffen/schiff/schiff.component'
import { VerwaltungVonDienststellenComponent } from './modules/components/verwaltung/verwaltung-von-dienststellen/verwaltung-von-dienststellen.component'
import { DienststelleComponent } from './modules/components/verwaltung/verwaltung-von-dienststellen/dienststelle/dienststelle.component'
import { VerwaltungVonPruefvermerkenComponent } from './modules/components/verwaltung/verwaltung-von-pruefvermerken/verwaltung-von-pruefvermerken.component'
import { PruefvermerkComponent } from './modules/components/verwaltung/verwaltung-von-pruefvermerken/pruefvermerk/pruefvermerk.component'

import { AdminModule } from './modules/layouts/admin/admin.module'
import { ServiceModule } from './modules/layouts/service/service.module'
import { LeitungModule } from './modules/layouts/leitung/leitung.module'
// import { ModalComponent } from './shared/components/modal/modal.component'
import { NgSelectModule } from '@ng-select/ng-select'
import { LoginComponent } from './modules/components/login/login.component';
import { PruefvermerkskategorieComponent } from './modules/components/verwaltung/verwaltung-von-pruefvermerk-kat/pruefvermerkskategorie/pruefvermerkskategorie.component';
import { VerwaltungVonPruefvermerkKatComponent } from './modules/components/verwaltung/verwaltung-von-pruefvermerk-kat/verwaltung-von-pruefvermerk-kat.component';
import { StreifenComponent } from './modules/components/streifen/streifen.component'
import { NgxQRCodeModule } from 'ngx-qrcode2'
import { QRCodeComponent } from './modules/components/verwaltung/verwaltung-von-schiffen/qrcode/qrcode.component';
import { ZaehlerstaendeComponent } from './modules/components/zaehlerstaende/zaehlerstaende.component';
import { ZaehlerstandComponent } from './modules/components/zaehlerstaende/zaehlerstand/zaehlerstand.component';
import { StreifeComponent } from './modules/components/streifen/streife/streife.component'
import { PositionComponent } from './modules/components/map/leaflet-map/position/position.component'
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component';
import { KontaktComponent } from './modules/components/kontakt/kontakt.component'
import { ModalModule } from './shared/components/modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // ModalComponent,
    ReparaturenServiceComponent,
    ReparaturComponent,
    BetankungenComponent,
    BetankungComponent,
    VerwaltungVonSchiffenComponent,
    SchiffComponent,
    QRCodeComponent,
    VerwaltungVonDienststellenComponent,
    DienststelleComponent,
    VerwaltungVonPruefvermerkenComponent,
    PruefvermerkComponent,
    PruefvermerkskategorieComponent,
    VerwaltungVonPruefvermerkKatComponent,
    StreifenComponent,
    ZaehlerstaendeComponent,
    ZaehlerstandComponent,
    StreifeComponent,
    PositionComponent,
    SplashScreenComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    LeitungModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    DataTablesModule,
    LeafletMapModule,
    MarkdownModule.forRoot(),
    NgSelectModule,
    NgxQRCodeModule,
    ModalModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
