import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectSub } from '../../auth/state/selectors'

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.sass']
})
export class MobileComponent implements OnInit {

  backendResponse$!: Observable<string>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.backendResponse$ = this.store.pipe(select(selectSub))
  }
}