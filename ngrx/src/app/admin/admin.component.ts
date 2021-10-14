import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Data } from './model/data.model';
import { selectAllData, selectData, selectDataCount, selectPicture } from './state/data.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  allData$!: Observable<Data[]>
  data$!: Observable<Data[]>
  picture$!: Observable<Data[]>
  dataCount$!: Observable<number>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.reload()
  }

  reload() {
    this.allData$ = this.store.pipe(select(selectAllData))
    this.data$ = this.store.pipe(select(selectData))
    this.picture$ = this.store.pipe(select(selectPicture))
    this.dataCount$ = this.store.pipe(select(selectDataCount))
  }

}
