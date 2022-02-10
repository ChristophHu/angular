import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WsRoutingModule } from './ws-routing.module';
import { WsComponent } from './ws.component';
import { FormsModule } from '@angular/forms';
// import { VerticalNavModule } from 'src/app/core/navbar/vertical-nav/vertical-nav.module';

@NgModule({
  declarations: [
    WsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WsRoutingModule,
    // VerticalNavModule
  ]
})
export class WsModule { }
