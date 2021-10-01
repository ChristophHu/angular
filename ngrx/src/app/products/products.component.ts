import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Product } from './models/product'
import { State, getProducts } from './state/state'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  // displayCode$!: Observable<boolean>
  // selectedProduct$!: Observable<Product>
  products$!: Observable<Product[]>
  // errorMessage$!: Observable<string>
  
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(getProducts)
    this.products$.subscribe(data => console.log(data))
  }

}
