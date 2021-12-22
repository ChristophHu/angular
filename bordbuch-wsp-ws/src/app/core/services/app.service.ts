import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { select, Store } from '@ngrx/store';
import { from, interval, Observable, Subscription } from 'rxjs';
import { selectToken } from 'src/app/modules/auth/state/selectors';
import { Kennung } from '../models/kennung.model';

// import { PositionActions } from 'src/app/store/positionreport-store';
// import { ShipSelectors } from 'src/app/store/ship-store';
// import { Besatzung } from '../model/besatzung.model';
// import { Betankung } from '../model/betankung';
// import { Checklist } from '../model/checklist.model';
// import { Checklistitem } from '../model/checklistitem.model';
// import { Geraetebuch } from '../model/geraetebuch.model';
// import { Patrol } from '../model/patrol.model';
// import { Peilung } from '../model/peilung.model';
// import { PositionReport } from '../model/positionreport.model';
// import { Reparatur } from '../model/reparatur';
// import { Zaehlerstand } from '../model/zaehlerstand';
import { LocationService } from './location.service';


@Injectable({
  providedIn: 'root'
})

export class AppService {

    private token: string = ''
    // patrol!: Patrol

    private _positionSubscription = new Subscription
    private i: Observable<number> = interval(3*60*1000)

    // items: Checklistitem[] = [
    //     { id: '1', id_schiff: '1', bezeichnung: 'Anker', description: '', isChecked: true },
    //     { id: '2', id_schiff: '1', bezeichnung: 'Rettungsring', description: '', isChecked: true },
    //     { id: '3', id_schiff: '1', bezeichnung: 'Positionslicht', description: '', isChecked: false }
    // ]

    constructor(
        private httpClient: HttpClient,
        private store: Store,
        private locationService: LocationService
        ) {
        // this.store.pipe(select(selectToken)).subscribe(token => {
        //     this.token = token
        // })
        // this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe(patrol => {
        //     this.patrol = patrol!
        // })
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
                param = `id=${data.id}&id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&ende=${data.ende}&kennung=${data.kennung}`
                break
            }
            case 'deleteStreife':
                param = `id=${data}`
                break

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
                param = `id_schiff=${data.id_ship}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`
                break
            }
            case 'updateBetankung':
                param = `id=${data.id}id_schiff=${data.id_ship}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`
                break

            case'deleteBetankung':
                param = `id=${data}`
                break

            case 'updateZaehlerstand': {
                param = `id=${data.id}&id_schiff=${data.id_ship}&value=${data.value}&date=${data.date}`
                break
            }

            // peilung
            case 'insertPeilung': {
                param = `id_schiff=${data.id_schiff}&id_tank=${data.id_tank}&vol=${data.vol}&date=${data.date}`
                break
            }

            // kennung
            case 'insertKatKennung': {
                param = `bezeichnung=${data.bezeichnung}`
                break
            }
            case 'updateKatKennung': {
                param = `id=${data.id}&bezeichnung=${data.bezeichnung}`
                break
            }
            case 'deleteKatKennung': {
                param = `id=${data}`
                break
            }

            // checkliste
            case 'insertCheckliste': {
                console.log(data)
                param = `id_schiff=${data.id_schiff}&datum=${data.datum}&gbookdaten=${data.gbookdaten}&streife=${data.streife}`
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
            case 'getDienststellen':
            case 'getPruefvermerke':
            case 'getPruefvermerksKategorien':
            case 'getKatBetriebsstoffe':
            case 'getKatFunktionen':
            case 'getKatKennungen':
            case 'getLastPositionsFromAllShips':
            case 'getSchiffe':
            case 'getZaehlerstandstypen':
            case 'getKatZwecke':
                param = ``
                break

            case 'getSchiff':
                param = `?id=${data}`
                break

            case 'getLastChecklist':
            case 'getReparaturenVonSchiff':
            case 'getStreifeVonSchiff':
            case 'getTanksVonSchiff':
            case 'getZaehlerstaende':
                param = `?id_schiff=${data}`
                break
            
            // case 'getPeilungVonSchiff':
            case 'getPosition':
            case 'getReparaturen':
                param = `?id_schiff=${data}&all=true`
                break

            case 'getPeilungVonSchiff':
            case 'getBetankungen':
                param = `?id_schiff=${data}&all=false`
                break

            default:
                break
        }

        return this.httpClient.get(baseURL + param, { headers: { 'Authorization': this.token } }) //.pipe(retry(2),take(1))
    }

    // streife
    // insertStreife(patrol: Patrol): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('insertStreife', patrol)
    //         source$.subscribe((data: any) => {
    //             observer.next(data.id)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    // updateStreife(patrol: Patrol): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('updateStreife', patrol)
    //         source$.subscribe((status: any) => {
    //             // observer.next(data)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    // deleteStreife(id: string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('deleteStreife', id)
    //         source$.subscribe((status: any) => {
    //             observer.next(status)
    //         })
    //         , (error: any) => observer.error(error)
    //     })
    // }

    // besatzung
    // insertBesatzung(besatzung: Besatzung): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('insertBesatzung', besatzung)
    //         source$.subscribe((data: any) => {
    //             console.log(data.id)
    //             observer.next(data.id)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    // updateBesatzung(changes: Partial<Besatzung>): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('updateBesatzung', changes)
    //         source$.subscribe((status: any) => {
    //             // observer.next(data)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    // deleteBesatzung(id: string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('deleteBesatzung', id)
    //         source$.subscribe((status: any) => {
    //             observer.next(status)
    //         })
    //         , (error: any) => observer.error(error)
    //     })
    // }

    // betankung
    // insertBetankung(betankung: Betankung): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('insertBetankung', betankung)
    //         source$.subscribe((data: any) => {
    //             observer.next(data.id)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    // updateBetankung(changes: Partial<Betankung>): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('updateBetankung', changes)
    //         source$.subscribe((status: any) => {
    //         })
    //     })
    // }
    // deleteBetankung(id: string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('deleteBetankung', id)
    //         source$.subscribe((status: any) => {
    //             observer.next(status)
    //         })
    //         , (error: any) => observer.error(error)
    //     })
    // }

    // zaehlerstaende
    // updateZaehlerstand(id: number | string, changes: Partial<Zaehlerstand>): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('updateZaehlerstand', changes)
    //         source$.subscribe((status: any) => {
    //             // observer.next(data)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }

    // pruefvermerk
    // insertReparatur(reparatur: Reparatur): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('insertReparatur', reparatur)
    //         source$.subscribe((data: any) => {
    //             observer.next(data.id)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }

    // position
    // insertPosition(position: PositionReport): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('insertPosition', position)
    //         source$.subscribe((data: any) => {
    //             const pos : PositionReport = Object.assign({}, position, { id: data.id })
    //             observer.next(pos)
    //             // observer.next(data.id)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    // updatePosition(position: PositionReport): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('updatePosition', position)
    //         source$.subscribe((data: any) => {
    //             observer.next(data.id)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    // deletePosition(id: string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('deletePosition', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data.id)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }

    // get
    // getSchiffe(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getSchiffe', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getSchiff(id: string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getSchiff', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data[0])
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getStreifeVonSchiff(id: string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getStreifeVonSchiff', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data[0])
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getZaehlerstaende(id : string): Observable<Zaehlerstand[]> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getZaehlerstaende', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getReparaturen(id : string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getReparaturenVonSchiff', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getBetankungen(id : string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getBetankungen', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getTanksVonSchiff(id : string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getTanksVonSchiff', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getPosition(id : string): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getPosition', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getLastPositionsFromAllShips(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getLastPositionsFromAllShips', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }

    // kat
    // getPruefvermerke(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getPruefvermerke', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getPruefvermerkKategorien(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getPruefvermerksKategorien', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getZaehlerstandstypen(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getZaehlerstandstypen', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getDienststellen(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getDienststellen', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getBetriebsstoffe(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getKatBetriebsstoffe', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getFunktionen(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getKatFunktionen', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    getKennungen(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getKatKennungen', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    insertKennung(kennung: Kennung): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertKatKennung', kennung)
            source$.subscribe((data: any) => {
                // const newKennung : Kennung = Object.assign({}, kennung, { id: data.id }) das ist alles
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updateKennung(kennung: Kennung): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updateKatKennung', kennung)
            source$.subscribe((status: any) => {
                observer.next(status)
            }),
            (error: any) => observer.error(error)
        })
    }
    deleteKennung(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('deleteKatKennung', id)
            source$.subscribe((status: any) => {
                observer.next(status)
            }),
            (error: any) => observer.error(error)
        })
    }
    // getZwecke(): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getKatZwecke', {})
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // getChecklist(id: string = '1'): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getLastChecklist', id)
    //         source$.subscribe((data: any) => {
    //             const gbook: Geraetebuch = JSON.parse(data[0].gbookdaten)
    //             observer.next(gbook)
    //             // this.updateChecklist(data)
    //         }, (error: any) => observer.error(error))
    //     })
    //     // return new Observable ((observer) => {
    //     //     from([this.items]).subscribe((data: any) => {
    //     //         observer.next(data)
    //     //     }, (error: any) => observer.error(error))
    //     // })
    // }

    // updateChecklist(gbook: any) {
    //     // console.log(data)
    //     // let gbook = JSON.parse(data[0].gbookdaten)
    //     // console.log(gbook)
    //     gbook = {"id_schiff":"1","einsatzmittel":[{"id":"75764649-769b-4935-848c-25ccb213cf56","name":"Anhaltestab","anzahl":"3","seriennummern":"","sonstiges":"false"},{"id":"a6a9a323-89b8-45a5-96d8-61866c4a0cef","name":"Alkomat","anzahl":"1","seriennummern":"SN-1234","sonstiges":"false"},{"id":"bd34d03c-3728-4df3-9ba7-7ead0d575532","name":"Anker","anzahl":"2","seriennummern":"","sonstiges":""},{"id":"c6aac15c-4fea-49ce-943b-21070169f361","name":"Rettungsring","anzahl":"1","seriennummern":"","sonstiges":""}]}
    //     console.log(gbook)
    //     const checkliste: Checklist = { id_schiff: '1', datum: new Date().toISOString(), streife: '3f7bc091-9f3d-428b-bf57-429f7dba25da', gbookdaten: JSON.stringify(gbook)}
    //     this.insertCheckliste(checkliste)
    // }

    // insertCheckliste(gbook: Geraetebuch): Observable<any> {
    //     return new Observable ((observer) => {
    //         const checklist: Checklist = { id_schiff: this.patrol.id_schiff, datum: new Date().toISOString(), streife: this.patrol.id!, gbookdaten: JSON.stringify(gbook)}
    //         const source$ = this.reducer('insertCheckliste', checklist)
    //         source$.subscribe((status) => {

    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    
    // getChecklistItems(id: string = '1'): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getPeilungVonSchiff', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    //     // return new Observable ((observer) => {
    //     //     from([this.items]).subscribe((data: any) => {
    //     //         observer.next(data)
    //     //     }, (error: any) => observer.error(error))
    //     // })
    // }
    
    // getPeilung(id: string = '1'): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.getReducer('getPeilungVonSchiff', id)
    //         source$.subscribe((data: any) => {
    //             observer.next(data)
    //         }, (error: any) => observer.error(error))
    //     })
    // }
    // insertPeilung(peilung: Peilung): Observable<any> {
    //     return new Observable ((observer) => {
    //         const source$ = this.reducer('insertPeilung', peilung)
    //         source$.subscribe((data: any) => {
    //             const peil : Peilung = Object.assign({}, peilung, { id: data.id })
    //             observer.next(peil)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    // updatePeilung(peil: Peilung) {
    //     // return new Observable ((observer) => {
    //     //     this.peilung = this.peilung.filter(el => el.id != peil.id)
    //     //     this.peilung.push(peil)
    //     //     console.log(this.peilung)

    //     //     // const source$ = this.reducer('updatePosition', position)
    //     //     // source$.subscribe((data: any) => {
    //     // //     observer.next(peil)
    //     // //     })
    //     // //     , (error: any) => observer.error(error)
    //     // })
    // }

    // checkPositionStart() {
    //     if (this._positionSubscription.closed) {
    //         this._positionSubscription = this.i.subscribe((data: number) => {
    //             this.locationService.getCurrentPosition().then(position => {
    //                 const positionReport: PositionReport = { id_streife: this.patrol.id, id_ship: this.patrol.id_schiff, date: new Date().toISOString(), location: { latitude: position.latitude, longitude: position.longitude}, description: `${data+1} Autom. gesetzte Position` }
    //                 this.store.dispatch(PositionActions.insertData({ positionReport }))
    //             })
    //         })
    //     }
    // }
    // checkPositionStop() {
    //     this._positionSubscription.unsubscribe()
    // }
}
