import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { AuthActions, AuthSelector } from './auth/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>
  isLoggedOut$: Observable<boolean>

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoggedIn$ = this.store.pipe(
      select(AuthSelector.isLoggedIn)
    )
    this.isLoggedOut$ = this.store.pipe(
      select(AuthSelector.isLoggedOut)
    )
  }

  ngOnInit() {
    this.store.subscribe(state => console.log('Store value: ', state))
  }

  logout() {
    this.store.dispatch(AuthActions.logout())
    this.router.navigateByUrl('/')
  }
}
