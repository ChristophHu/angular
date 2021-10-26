import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { selectToken } from 'src/app/modules/auth/state/selectors';
import { Besatzung } from '../model/besatzung.model';
import { Betankung } from '../model/betankung';
import { Patrol } from '../model/patrol.model';
import { PositionReport } from '../model/positionreport.model';
import { Reparatur } from '../model/reparatur';
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

            // streife
            case 'insertStreife': {
                param = `id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&kennung=${data.kennung}`
                break
            }
            case 'updateStreife': {
                param = `id=${data.id}&id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`
                break
            }

            // besatzung
            case 'insertBesatzung': {
                param = `id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`
                break
            }
            case 'updateBesatzung': {
                param = `id=${data.id}&id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`
                break
            }
            case 'deleteBesatzung': {
                param = `id=${data}`
                break
            }

            // betankung
            case 'insertBetankung': {
                console.log(data)
                param = `id_schiff=${data.id_ship}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`
                break
            }

            case 'updateZaehlerstand': {
                param = `id=${data.id}&id_schiff=${data.id_ship}&value=${data.value}&date=${data.date}`
                break
            }

            // pruefvermerk/reparatur
            case 'insertReparatur': {
                param = `id_schiff=${data.id_ship}&id_status=9f666873-4fc4-4f9b-8f98-f3fa182be7eb&date=${data.date}&kategorie=${data.kategorie}&item=${data.item}&description=${data.description}`
                break
            }

            // position
            case 'insertPosition': {
                param = `id_schiff=${data.id_ship}&id_streife=${data.id_streife}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&beschreibung=${data.description}`
                break
            }
            case 'updatePosition': {
                param = `id=${data.id}&id_schiff=${data.id_ship}&id_streife=${data.id_streife}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&beschreibung=${data.description}`
                break
            }
            case 'deletePosition': {
                param = `id=${data}`
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
        console.info(`getreducer | action: '${action}', data: `, data)
        const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
        let param = ``
        switch (action) {
            case 'getPruefvermerke':
            case 'getLastPositionsFromAllShips':
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

    // streife
    insertStreife(patrol: Patrol): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertStreife', patrol)
            source$.subscribe((data: any) => {
                console.log(data.id)
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updateStreife(patrol: Patrol): Observable<any> {
        console.log(patrol)
        return new Observable ((observer) => {
            const source$ = this.reducer('updateStreife', patrol)
            source$.subscribe((status: any) => {
                // observer.next(data)
            })
            // , (error: any) => observer.error(error)
        })
    }

    // besatzung
    insertBesatzung(besatzung: Besatzung): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertBesatzung', besatzung)
            source$.subscribe((data: any) => {
                console.log(data.id)
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updateBesatzung(changes: Partial<Besatzung>): Observable<any> {
        console.log(changes)
        return new Observable ((observer) => {
            const source$ = this.reducer('updateBesatzung', changes)
            source$.subscribe((status: any) => {
                // observer.next(data)
            })
            // , (error: any) => observer.error(error)
        })
    }
    deleteBesatzung(id: string): Observable<any> {
        console.log(id)
        return new Observable ((observer) => {
            const source$ = this.reducer('deleteBesatzung', id)
            source$.subscribe((status: any) => {
                observer.next(status)
            })
            , (error: any) => observer.error(error)
        })
    }

    // betankung
    insertBetankung(betankung: Betankung): Observable<any> {
        console.log(betankung)
        return new Observable ((observer) => {
            const source$ = this.reducer('insertBetankung', betankung)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }

    // zaehlerstaende
    updateZaehlerstand(id: number | string, changes: Partial<Zaehlerstand>): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updateZaehlerstand', changes)
            source$.subscribe((status: any) => {
                // observer.next(data)
            })
            // , (error: any) => observer.error(error)
        })
    }

    // pruefvermerk
    insertReparatur(reparatur: Reparatur): Observable<any> {
        console.log(reparatur)
        return new Observable ((observer) => {
            const source$ = this.reducer('insertReparatur', reparatur)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }

    // position
    insertPosition(position: PositionReport): Observable<any> {
        console.log(position)
        return new Observable ((observer) => {
            const source$ = this.reducer('insertPosition', position)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updatePosition(position: PositionReport): Observable<any> {
        console.log(position)
        return new Observable ((observer) => {
            const source$ = this.reducer('updatePosition', position)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    deletePosition(id: string): Observable<any> {
        console.log(id)
        return new Observable ((observer) => {
            const source$ = this.reducer('deletePosition', id)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
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
    getZaehlerstaende(id : string): Observable<Zaehlerstand[]> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getZaehlerstaende', id)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getReparaturen(id : string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getReparaturen', id)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getBetankungen(id : string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getBetankungen', id)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getPosition(id : string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getPosition', id)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getLastPositionsFromAllShips(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getLastPositionsFromAllShips', {})
            source$.subscribe((data: any) => {
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
