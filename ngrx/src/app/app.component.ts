import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './auth/reducers/index'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.store.subscribe(state => console.log('Store value: ', state))
  }
}
