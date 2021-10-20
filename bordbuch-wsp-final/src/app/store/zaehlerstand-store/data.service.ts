import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand';

@Injectable()
export class DataService {

  // private data: Data[] = [
  //   { id: 8758577, seqNum: 4, type: 'picture', data: 'picture data', date: new Date },
  //   { id: 3846314, seqNum: 3, type: 'data', data: 'some data', date: new Date },
  //   { id: 1846314, seqNum: 2, type: 'data', data: 'some data', date: new Date },
  //   { id: 2846313, seqNum: 1, type: 'data', data: 'some data', date: new Date }
  // ]
  private zaehlerstaende: Zaehlerstand[] = [
    
  ]

  constructor(private http: HttpClient) { }

  findAllData(): Observable<Zaehlerstand[]> {
    // return this.http.post(this.baseUrl, { email, password })
    const positionReport = from([this.zaehlerstaende])
    return positionReport
  }

  saveData(id: number | string, changes: Partial<Zaehlerstand>): Observable<any> {
    var res: Zaehlerstand = this.zaehlerstaende.find(el => {
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
