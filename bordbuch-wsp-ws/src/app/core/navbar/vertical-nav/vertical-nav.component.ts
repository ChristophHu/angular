import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { logout } from 'src/app/modules/auth/state/actions'
import { selectBackendresponse } from 'src/app/modules/auth/state/selectors'
import { RootStoreState } from 'src/app/store/root-store.state'
import { SpecFacade } from 'src/app/store/spec-store/spec.facade'

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.sass']
})
export class VerticalNavComponent implements OnInit {
  status: boolean = false;
  response: any

  clickEvent() {
    this.status = !this.status;
  }
  constructor(private store: Store<RootStoreState>, private _specFacade: SpecFacade) {
    this.store.pipe(select(selectBackendresponse)).subscribe((data: any) => {
      this.response = data
    })
  }

  logout() {
    this._specFacade.resetStore()
    this.store.dispatch(logout())
  }

  ngOnInit(): void {
  }

}
