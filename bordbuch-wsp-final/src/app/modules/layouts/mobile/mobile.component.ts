import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.sass']
})
export class MobileComponent {

  constructor(private store: Store) { }

}