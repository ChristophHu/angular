import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInComponent } from './logged-in.component';
import { LoggedInRoutingModule } from './logged-in-routing.module';

@NgModule({
  declarations: [
    LoggedInComponent
  ],
  imports: [
    CommonModule,
    LoggedInRoutingModule
  ]
})
export class LoggedInModule { }
