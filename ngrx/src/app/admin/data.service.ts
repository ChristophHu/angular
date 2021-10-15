import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Data } from './model/data.model';

@Injectable()
export class DataService {

  private data: Data[] = [
    { id: 8758577, seqNum: 4, type: 'picture', data: 'picture data', date: new Date },
    { id: 3846314, seqNum: 3, type: 'data', data: 'some data', date: new Date },
    { id: 1846314, seqNum: 2, type: 'data', data: 'some data', date: new Date },
    { id: 2846313, seqNum: 1, type: 'data', data: 'some data', date: new Date }
  ]

  constructor(private http: HttpClient) { }

  findAllData(): Observable<Data[]> {
    // return this.http.post(this.baseUrl, { email, password })
    const data = from([this.data])
    return data
  }

  saveData(id: number | string, changes: Partial<Data>): Observable<Data> {
    var res: Data = this.data.find(el => {
      if(el.id == id) {
        // if(changes.id) el.id = changes.id
        // if(changes.data) el.data = changes.data
        return el
      } else {
        return false
      }
    })!
    return from([res])
  }
}
