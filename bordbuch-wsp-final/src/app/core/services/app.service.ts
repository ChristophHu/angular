import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { selectToken } from 'src/app/modules/auth/state/selectors';
import { Ship } from '../model/ship.model';
import { Zaehlerstand } from '../model/zaehlerstand';


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

    reducer(action: string, data: any): Observable<any> {
        console.info(`reducer | action: '${action}', data: ${data}`)
        const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
        let param = ``
        switch (action) {

            case 'updateZaehlerstand': {
                param = `id=${data.id}&id_schiff=${data.id_ship}&value=${data.value}&date=${data.date}`
                break
            }

            default:
                console.error('There is no action to switch.')
                break
        }
        
        return this.httpClient.post(
            baseURL, 
            param, 
            { headers: { 
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Authorization': this.token 
            }}
        ) // .pipe(retry(2), take(1))
    }

    getReducer(action: string, data: any): any {
        console.info(`getreducer | action: '${action}', data: ${data}`)
        const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
        let param = ``
        switch (action) {
            case 'getPruefvermerke':
            case 'getSchiffe':
            case 'getZaehlerstandstypen':
                param = ``
                break

            case 'getSchiff':
                param = `?id=${data}`
                break

            case 'getStreifeVonSchiff':
            case 'getZaehlerstaende':
                param = `?id_schiff=${data}`
                break
            
            case 'getPosition':
            case 'getReparaturen':
                param = `?id_schiff=${data}&all=true`
                break

            case 'getBetankungen':
                param = `?id_schiff=${data}&all=false`
                break

            default:
                break
        }

        return this.httpClient.get(baseURL + param, { headers: { 'Authorization': this.token } }) //.pipe(retry(2),take(1))
    }

    updateZaehlerstand(zaehlerstand: Zaehlerstand) {
        console.log(zaehlerstand)
        // return new Observable ((observer) => {
            const source$ = this.reducer('updateZaehlerstand', zaehlerstand)
            source$.subscribe((status: any) => {
                console.log(status)
                // observer.next(data)
            })
            // , (error: any) => observer.error(error))
        // })
        // const status = this.reducer('updateZaehlerstand', zaehlerstand).subscribe(status => {
        //     if (status == '200') {}
        // })
        // this.dataStore.zaehlerstaende = this.dataStore.zaehlerstaende.filter(el => el.id != zaehlerstand.id)
        // this.dataStore.zaehlerstaende.push(zaehlerstand)
        // this._zaehlerstaende.next(Object.assign({}, this.dataStore).zaehlerstaende)
    }

    // get
    getSchiffe(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getSchiffe', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getSchiff(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getSchiff', id)
            source$.subscribe((data: any) => {
                observer.next(data[0])
            }, (error: any) => observer.error(error))
        })
    }
    getStreifeVonSchiff(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getStreifeVonSchiff', id)
            source$.subscribe((data: any) => {
                observer.next(data[0])
            }, (error: any) => observer.error(error))
        })
    }
    getZaehlerstaende(id : string): Observable<any> {
        console.log(id)
        return new Observable ((observer) => {
            const source$ = this.getReducer('getZaehlerstaende', id)
            source$.subscribe((data: any) => {
                console.log(data)
                observer.next(data)
            }, (error: any) => observer.error(error))
        })

    }
    getReparaturen(id : string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getReparaturen', id)
            source$.subscribe((data: any) => {
                console.log(data)
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getBetankungen(id : string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getBetankungen', id)
            source$.subscribe((data: any) => {
                console.log(data)
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getPosition(id : string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getPosition', id)
            source$.subscribe((data: any) => {
                console.log(data)
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }

    // kat
    getPruefvermerke(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getPruefvermerke', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getZaehlerstandstypen(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getZaehlerstandstypen', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
}
