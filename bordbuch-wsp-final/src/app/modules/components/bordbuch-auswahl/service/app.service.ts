import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { selectToken } from 'src/app/modules/auth/state/selectors';
import { Ship } from '../model/ship.model';


@Injectable({
  providedIn: 'root'
})

export class AppService {

    private token: string = ''

    // private _schiffe = new BehaviorSubject<Ship[]>([])
    // readonly schiffe = this._schiffe.asObservable()

    // dataStore
    // private dataStore: { 
    //     schiffe: Ship[]
        
    // } = { 
    //     schiffe: []
    // }

    constructor(private httpClient: HttpClient, private store: Store) {
        this.store.pipe(select(selectToken)).subscribe(token => {
            this.token = token
        })
    }

    getReducer(action: string, data: any): any {
        console.info(`getreducer | action: '${action}', data: ${data}`)
        const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
        let param = ``
        switch (action) {
            case 'getSchiffe':
                param = ``
                break

            default:
                break
        }

        return this.httpClient.get(baseURL + param, { headers: { 'Authorization': this.token } }) //.pipe(retry(2),take(1))
    }

    
    // get
    getSchiffe(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getSchiffe', {})
            source$.subscribe((data: any) => {
                console.log(data)
                observer.next(data)
                // this.dataStore.schiffe = data
                // this._schiffe.next(Object.assign({}, this.dataStore).schiffe)
            }, (error: any) => observer.error(error))
        })

    }
}