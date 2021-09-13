import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ModernModule } from './horizontal/modern/modern.module';
import { EmptyModule } from './empty/empty.module';
import { AdminModule } from './vertical/admin/admin.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,

    // Layouts
    EmptyModule,
    ModernModule,
    AdminModule
  ]
})
export class LayoutModule { }
