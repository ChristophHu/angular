import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Data } from './model/data.model';

@Injectable()
export class DataService {
  private baseUrl = ''

  constructor(private http: HttpClient) { }

  findAllData(): Observable<Data[]> {
    // return this.http.post(this.baseUrl, { email, password })
    const data = from([[
      { id: 1846313, seqNum: 0, type: 'data', data: 'some data', date: new Date },
      { id: 8758577, seqNum: 0, type: 'picture', data: 'picture data', date: new Date }
    ]])
    return data
  }
}
