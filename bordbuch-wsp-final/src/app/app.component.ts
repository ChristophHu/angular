import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { login, logout } from './modules/auth/state/actions'
import { AppState } from './store/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // on refresh
    const userProfile = localStorage.getItem('user')
    if (userProfile) {
      this.store.dispatch(login({ backendResponse: JSON.parse(userProfile) }))
    }
  }

  logout() {
    this.store.dispatch(logout())
  }
}
