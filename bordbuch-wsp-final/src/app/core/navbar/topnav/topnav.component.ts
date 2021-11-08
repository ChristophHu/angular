import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store';
import { logout } from 'src/app/modules/auth/state/actions';
import { Animations } from 'src/app/shared/animations';
import { RootStoreState } from 'src/app/store/root-store.state';

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass'],
  animations   : Animations
})
export class TopnavComponent implements OnInit {
  status: boolean = false

  sidebarHandler() {
    this.status = !this.status
  }

  constructor(private store: Store<RootStoreState>) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(logout())
  }

}
