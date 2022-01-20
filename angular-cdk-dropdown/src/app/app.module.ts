import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownTriggerDirective } from './shared/directives/dropdownTrigger/dropdown-trigger.directive';
import { DropdownComponent } from './shared/directives/dropdownTrigger/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownTriggerDirective,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
