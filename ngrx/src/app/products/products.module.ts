import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productReducer),
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
