import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Data } from './model/data.model';
import { dataUpdate } from './state/data.actions';
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

  dataForm: FormGroup

  constructor(private store: Store<AppState>, private _formBuilder: FormBuilder) {
    this.dataForm = this._formBuilder.group({
      data: ['Test']
    })
  }

  ngOnInit(): void {
    this.reload()
  }

  reload() {
    this.allData$ = this.store.pipe(select(selectAllData))
    this.data$ = this.store.pipe(select(selectData))
    this.picture$ = this.store.pipe(select(selectPicture))
    this.dataCount$ = this.store.pipe(select(selectDataCount))
  }

  onSave() {
    const data: Data = {
      // ...this.data,
      ...{ id: 2846313, seqNum: 1, type: 'data', data: 'some data', date: new Date },
      ...this.dataForm.value
    }
    const update: Update<Data> = {
      id: data.id,
      changes: data
    }

    this.store.dispatch(dataUpdate({ update }))
  }
}
