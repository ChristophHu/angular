import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { PositionReport } from 'src/app/core/model/positionreport.model';

@Injectable()
export class DataService {

  // private data: Data[] = [
  //   { id: 8758577, seqNum: 4, type: 'picture', data: 'picture data', date: new Date },
  //   { id: 3846314, seqNum: 3, type: 'data', data: 'some data', date: new Date },
  //   { id: 1846314, seqNum: 2, type: 'data', data: 'some data', date: new Date },
  //   { id: 2846313, seqNum: 1, type: 'data', data: 'some data', date: new Date }
  // ]
  private positionReport: PositionReport[] = [
    {id: '52ae1b7e-42f0-40af-a112-feced304f79a', id_ship: '1', date: '2021-10-05 11:13:48.000', location: { latitude: 0, longitude: 0 }, description: '1 Autom. gesetzte Position'},
    {id: '0b0d14f3-2b2e-4ec4-851f-39b9ab1becff', id_ship: '1', date: '2021-09-28 11:31:47.000', location: { latitude: 0, longitude: 0 }, description: 'MP'},
    {id: '6249b2b4-2af2-430b-9058-ff98d2ecca12', id_ship: '1', date: '2021-09-27 15:30:30.000', location: { latitude: 0, longitude: 0 }, description: 'Tester'},
    {id: '6249b2b4-2af2-430b-9058-ff98d2ecca11', id_ship: '1', date: '2021-09-04 15:22:00.000', location: { latitude: 0, longitude: 0 }, description: 'Test'}
  ]

  constructor(private http: HttpClient) { }

  findAllData(): Observable<PositionReport[]> {
    // return this.http.post(this.baseUrl, { email, password })
    const positionReport = from([this.positionReport])
    return positionReport
  }

  saveData(id: number | string, changes: Partial<PositionReport>): Observable<any> {
    var res: PositionReport = this.positionReport.find(el => {
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
