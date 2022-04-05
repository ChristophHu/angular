import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, interval, Observable, Subscription } from 'rxjs';
import { selectBackendUrl, selectToken } from 'src/app/modules/auth/state/selectors';

import { environment } from 'src/environments/environment';
import { Besatzung } from '../model/besatzung.model';
import { Betankung } from '../model/betankung';
import { Checklist } from '../model/checklist.model';
import { Checklistitem } from '../model/checklistitem.model';
import { Patrol } from '../model/patrol.model';
import { Peilung } from '../model/peilung.model';
import { PositionReport } from '../model/positionreport.model';
import { Reparatur } from '../model/reparatur';
import { Schiff } from '../model/schiff.model';
import { Unklar } from '../model/unklar.model';
import { Zaehlerstand } from '../model/zaehlerstand';
import { ConnectionService } from './connection.service';
import { LocationService } from './location.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    // position
    private _positionSubscription = new Subscription
    private positionLogInterval: Observable<number> = interval(environment.positionLogInterval*(60*1000))
   
    constructor(
        private httpClient: HttpClient,
        private store: Store,
        private _connectionService: ConnectionService,
        private locationService: LocationService
        ) {
        this.store.pipe(select(selectToken)).subscribe(token => {
            this._connectionService.setToken(token)
        })
        this.store.pipe(select(selectBackendUrl)).subscribe(backendUrl => {
            this._connectionService.setBackendUrl(backendUrl)
        })
    }

    private reducer(action: string, data: any): Observable<any> {
        const backendUrl: string = this._connectionService.getBackendUrl()
        const token     : string = this._connectionService.getToken()

        console.info(`reducer | action: '${action}', data: ${data}`)

        const baseURL = `${backendUrl}/${action}`
        let param = ``
        switch (action) {

            // streife
            case 'insertStreife':
                param = `id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&kennung=${data.kennung}`
                break

            case 'updateStreife':
                param = `id=${data.id}&id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&ende=${data.ende}&kennung=${data.kennung}`
                break

            case 'deleteBesatzung':
            case 'deleteBetankung':
            case 'deleteReparaturFoto':
            case 'deleteStreife':
                param = `id=${data}`
                break

            // besatzung
            case 'insertBesatzung':
                param = `id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`
                break

            case 'updateBesatzung':
                param = `id=${data.id}&id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`
                break


            // betankung
            case 'insertBetankung':
                param = `id_schiff=${data.id_ship}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`
                console.log(param)
                break

            case 'updateBetankung':
                param = `id=${data.id}id_schiff=${data.id_ship}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`
                break

            // case 'updateZaehlerstand':
            //     param = `id=${data.id}&id_schiff=${data.id_ship}&value=${data.value}&date=${data.date}`
            //     break
            case 'updateZaehlerstand':
                param = `id=${data.id}&id_schiff=${data.id_schiff}&id_zaehlerstandstyp=${data.id_zaehlerstandstyp}&value=${data.value}&date=${data.date}&betriebsstunden=${data.betriebsstunden}`
                break

            // peilung
            case 'insertPeilung':
                param = `id_schiff=${data.id_schiff}&id_tank=${data.id_tank}&vol=${data.vol}&date=${data.date}`
                break

            // checkliste
            case 'insertCheckliste':
                param = `id_schiff=${data.id_schiff}&datum=${data.datum}&gbookdaten=${data.gbookdaten}&streife=${data.streife}`
                break

            // pruefvermerk/reparatur
            case 'insertReparatur':
                param = `id_schiff=${data.id_ship}&id_status=${data.id_status}&date=${data.date}&kategorie=${data.kategorie}&item=${data.item}&description=${data.description}`
                break
            case 'updateReparatur':
                param = `id=${data.id}&id_schiff=${data.id_ship}&id_status=${data.id_status}&date=${data.date}&kategorie=${data.kategorie}&item=${data.item}&description=${data.description}`
                break

            // reparaturFoto
            case 'insertReparaturFoto':
                param = `id_reparatur=${data.id_reparatur}&foto=${data.foto}`
                break

            // position
            case 'insertPosition':
                param = `id_schiff=${data.id_ship}&id_streife=${data.id_streife}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&ort=${data.ort}&date=${data.date}&beschreibung=${data.description}`
                break
            case 'updatePosition':
                param = `id=${data.id}&id_schiff=${data.id_ship}&id_streife=${data.id_streife}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&ort=${data.ort}&date=${data.date}&beschreibung=${data.description}`
                break
            case 'deletePosition':
                param = `id=${data}`
                break

            // schiff
            case 'updateSchiff':
                param = `id=${data.id}&id_dienststelle=${data.id_dienststelle}&name=${data.name}&marke=${data.marke}&typ=${data.typ}&identifikationsnummer=${data.identifikationsnummer}&durchsicht=${data.durchsicht}`
                break

            default:
                console.error('There is no action to switch.')
                break
        }

        return this.httpClient.post(
            baseURL, 
            param, 
            { headers: { 
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Authorization': token 
            }}
        ) // .pipe(retry(2), take(1))
    }

    private getReducer(action: string, data: any): any {
        const backendUrl: string = this._connectionService.getBackendUrl()
        const token     : string = this._connectionService.getToken()

        console.info(`getreducer | action: '${action}', data: `, data)

        const baseURL = `${backendUrl}/${action}`
        let param = ``
        switch (action) {
            // filter
            case 'getBetankungen':
                param = `?id_schiff=${data}&all=false&startdate=${null}&enddate=${null}`
                break

            case 'getZaehlerstaendeRange':
                param = `?id_schiff=${data}&startdate=${null}&enddate=${null}`
                break

            case 'getDienststellen':
            case 'getPruefvermerke':
            case 'getPruefvermerksKategorien':
            case 'getKatBetriebsstoffe':
            case 'getKatFunktionen':
            case 'getKatKennungen':
            case 'getLastPositionsFromAllShips':
            case 'getSchiffe':
            case 'getStatustypen':
            case 'getZaehlerstandstypen':
            case 'getKatZwecke':
                param = ``
                break

            case 'getSchiff':
                param = `?id=${data}`
                break

            case 'getFotosVonReparatur':
                param = `?id_reparatur=${data}`
                break

            case 'getLastChecklist':
            case 'getReparaturenVonSchiff':
            case 'getStreifeVonSchiff':
            case 'getTanksVonSchiff':
                param = `?id_schiff=${data}`
                break
            
            // case 'getPeilungVonSchiff':
            case 'getPosition':
            case 'getReparaturen':
                param = `?id_schiff=${data}&all=true`
                break

            case 'getPeilungVonSchiff':
                param = `?id_schiff=${data}&all=false`
                break

            case 'searchUser':
                param = `?search=${data}`
                break

            default:
                break
        }

        return this.httpClient.get(baseURL + param, { headers: { 'Authorization': token } }) //.pipe(retry(2),take(1))
    }

    // allg
    get(reducer_func: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer(reducer_func, {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getWithParam(reducer_func: string, kat: any): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer(reducer_func, kat)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    insert(kat: any, reducer_func: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer(reducer_func, kat)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            }), (error: any) => observer.error(error)
        })
    }
    update(kat: any, reducer_func: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer(reducer_func, kat)
            source$.subscribe((status: any) => {
                observer.next(status)
            }),
            (error: any) => observer.error(error)
        })
    }
    delete(id: string, reducer_func: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer(reducer_func, id)
            source$.subscribe((status: any) => {
                observer.next(status)
            }), (error: any) => observer.error(error)
        })
    }

    // besatzung
    insertBesatzung(besatzung: Besatzung): Observable<any> {
        return this.insert(besatzung, 'insertBesatzung')
    }
    updateBesatzung(changes: Partial<Besatzung>): Observable<any> {
        return this.update(changes, 'updateBesatzung')
    }
    deleteBesatzung(id: string): Observable<any> {
        return this.delete(id, 'deleteBesatzung')
    }

    // betankung
    getBetankungen(id : string): Observable<any> {
        return this.getWithParam('getBetankungen', id)
    }
    insertBetankung(betankung: Betankung): Observable<any> {
        return this.insert(betankung, 'insertBetankung')
    }
    updateBetankung(changes: Partial<Betankung>): Observable<any> {
        return this.update(changes, 'updateBetankung')
    }
    deleteBetankung(id: string): Observable<any> {
        return this.delete(id, 'deleteBetankung')
    }

    // peilung
    getPeilung(id: string): Observable<any> {
        return this.getWithParam('getPeilungVonSchiff', id)
    }
    insertPeilung(peilung: Peilung): Observable<any> {
        return this.insert(peilung, 'insertPeilung')
    }

    // pruefvermerk
    insertReparatur(reparatur: Reparatur): Observable<any> {
        return this.insert(reparatur, 'insertReparatur')
    }
    updateReparatur(reparatur: Reparatur): Observable<any> {
        return this.update(reparatur, 'updateReparatur')
    }

    // position
    getLastPositionsFromAllShips(): Observable<any> {
        return this.get('getLastPositionsFromAllShips')
    }
    getPosition(id : string): Observable<any> {
        return this.getWithParam('getPosition', id)
    }
    insertPosition(position: PositionReport): Observable<any> {
        return this.insert(position, 'insertPosition')
    }
    updatePosition(position: PositionReport): Observable<any> {
        return this.update(position, 'updatePosition')
    }
    deletePosition(id: string): Observable<any> {
        return this.delete(id, 'deletePosition')
    }

    // reparaturen
    getReparaturen(id : string): Observable<any> {
        return this.getWithParam('getReparaturenVonSchiff', id)
    }

    // reparaturfotos
    downloadReparaturFoto(id: string): Observable<any> {
        return this.getWithParam('getFotosVonReparatur', id)
        // console.log(id)
        // return new Observable ((observer) => {
        //     const source$ = this.getReducer('getFotosVonReparatur', id)
        //     source$.subscribe((data: any) => {
        //         observer.next(data)
        //     }, (error: any) => observer.error(error))
        // })
    }
    uploadReparaturFoto(upload: any): Observable<any> {
        return this.update(upload, 'insertReparaturFoto')
    }
    deleteReparaturFoto(id: string): Observable<any> {
        return this.delete(id, 'deleteReparaturFoto')
    }

    // schiff
    getSchiffe(): Observable<any> {
        return this.get('getSchiffe')
        // return new Observable ((observer) => {
        //     this.getReducer('getSchiffe', {}).subscribe((data: any) => {
        //         observer.next(data)
        //     }, (error: any) => observer.error(error))
        // })
    }
    getSchiff(id: string): Observable<any> {
        // return this.getWithParam('getSchiff', id)
        return new Observable ((observer) => {
            const source$ = this.getReducer('getSchiff', id)
            source$.subscribe((data: any) => {
                observer.next(data[0])
            }, (error: any) => observer.error(error))
        })
    }
    updateSchiff(schiff: Schiff): Observable<any> {
        console.log(schiff)
        return this.update(schiff, 'updateSchiff')
    }

    // searchUser
    getSearchUser(searchString: string): Observable<any> {
        return this.getWithParam('searchUser', searchString)
    }

    // status
    getStatus(): Observable<any> {
        return this.get('getStatustypen')
    }

    // streife
    getStreifeVonSchiff(id: string): Observable<any> {
        // return this.getWithParam('getStreifeVonSchiff', id)
        return new Observable ((observer) => {
            const source$ = this.getReducer('getStreifeVonSchiff', id)
            source$.subscribe((data: any) => {
                observer.next(data[0])
            }, (error: any) => observer.error(error))
        })
    }
    insertStreife(patrol: Patrol): Observable<any> {
        return this.insert(patrol, 'insertStreife')
    }
    updateStreife(patrol: Patrol): Observable<any> {
        console.log(patrol)
        return this.update(patrol, 'updateStreife')
    }
    deleteStreife(id: string): Observable<any> {
        return this.delete(id, 'deleteStreife')
    }

    // tank
    getTanksVonSchiff(id : string): Observable<any> {
        return this.getWithParam('getTanksVonSchiff', id)
    }

    // unklar
    loadUnklarByIdSchiff(id: string): Observable<any> {
        // return this.getWithParam('getUnklarByIdSchiff', id)
        return new Observable ((observer) => {
            observer.next({id: '1', id_schiff: '3f1149ac-2aac-488f-aac1-2994a47d6ff0', unklar: false, start: '2022-04-04T14:00:00.000Z'})
        })
    }
    insertUnklar(insert: Unklar): Observable<any> {
        // return this.insert(insert, 'insertSchiff')
        return new Observable ((observer) => {
            observer.next('3f1149ac-2aac-488f-aac1-2994a47d6ff1')
        })
    }
    updateUnklar(update: Unklar): Observable<any> {
        // return this.update(update, 'updateUnklar')
        return new Observable ((observer) => {
            observer.next(200)
        })
    }

    // zaehlerstaende
    getZaehlerstaende(id : string): Observable<Zaehlerstand[]> {
        return this.getWithParam('getZaehlerstaendeRange', id)
        // return new Observable ((observer) => {
        //     const source$ = this.getReducer('getZaehlerstaendeRange', id)
        //     source$.subscribe((data: any) => {
        //         observer.next(data)
        //     }, (error: any) => observer.error(error))
        // })
    }
    updateZaehlerstand(zaehlerstand: Zaehlerstand): Observable<any> {
        return this.update(zaehlerstand, 'updateZaehlerstand')
    }

    // katalog
    getPruefvermerke(): Observable<any> {
        return this.get('getPruefvermerke')
    }
    getPruefvermerkKategorien(): Observable<any> {
        return this.get('getPruefvermerksKategorien')
    }
    getZaehlerstandstypen(): Observable<any> {
        return this.get('getZaehlerstandstypen')
    }
    getDienststellen(): Observable<any> {
        return this.get('getDienststellen')
    }
    getBetriebsstoffe(): Observable<any> {
        return this.get('getKatBetriebsstoffe')
    }
    getFunktionen(): Observable<any> {
        return this.get('getKatFunktionen')
    }
    getKennungen(): Observable<any> {
        return this.get('getKatKennungen')
    }
    getZwecke(): Observable<any> {
        return this.get('getKatZwecke')
    }
    getLastChecklist(id: string): Observable<any> {
        return new Observable ((observer) => {
            let checklist: Checklist
            const source$ = this.getReducer('getLastChecklist', id)
            source$.subscribe((data: any) => {
                checklist = Object.assign({}, data[0])
                checklist.checklistItems = JSON.parse(data[0].gbookdaten)
                delete checklist.gbookdaten

                if (Array.isArray(checklist.checklistItems)) {
                    checklist.status = this.getChecklistStatus(checklist.checklistItems)
                } else {
                    checklist.checklistItems = []
                    checklist.status = 'vollständig'
                }

                observer.next(checklist)
            }, (error: any) => observer.error(error))
        })
        // return new Observable ((observer) => {
        //     from([this.items]).subscribe((data: any) => {
        //         observer.next(data)
        //     }, (error: any) => observer.error(error))
        // })
    }
    getLastChecklist2(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getLastChecklist', id)
            source$.subscribe((data: any) => {
                data.forEach((checklist: Checklist) => {
                    checklist.checklistItems = JSON.parse(checklist.gbookdaten!)
                    delete checklist.gbookdaten

                    if (Array.isArray(checklist.checklistItems)) {
                        checklist.status = this.getChecklistStatus(checklist.checklistItems)
                    } 
                    // else {
                    //     checklist.checklistItems = []
                    //     checklist.status = 'vollständig'
                    // }
                })
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getChecklistStatus(checklistItems?: Checklistitem[]): string {
        let status = 'vollständig'
        checklistItems?.forEach((checklistItem: Checklistitem) => {
            switch (true) {
                case (checklistItem.checked == false && checklistItem.relevant == false):
                    status = 'unvollständig'
                    break
                case (checklistItem.checked == false && checklistItem.relevant == true):
                    status = 'Tätigkeit eingeschränkt'
                    break
                default:
                    status = 'vollständig'
            }
        })
        return status
    }

    insertCheckliste(insert: Checklist): Observable<any> {
        return new Observable ((observer) => {
            const checklist: Checklist = Object.assign({}, insert, { gbookdaten: JSON.stringify(insert.checklistItems) }) //{ id_schiff: this.patrol.id_schiff, datum: new Date().toISOString(), streife: this.patrol.id!, gbookdaten: JSON.stringify(gbook)}
            console.log(checklist.gbookdaten)
            const source$ = this.reducer('insertCheckliste', checklist)
            source$.subscribe((status) => {
                // observer.next(status)
            })
            // , (error: any) => observer.error(error))
        })
    }

    // checkPositionStart(patrol: Patrol) {
    //     if (this._positionSubscription.closed) {
    //         this._positionSubscription = this.positionLogInterval.subscribe((data: number) => {
    //             this.locationService.getCurrentPosition().then(position => {
    //                 const positionReport: PositionReport = { id_streife: patrol.id, id_ship: patrol.id_schiff, date: new Date().toISOString(), location: { latitude: position.latitude, longitude: position.longitude}, ort: '', description: `${data+1} Autom. gesetzte Position` }
    //                 this.store.dispatch(PositionActions.insertData({ positionReport }))
    //             })
    //         })
    //     }
    // }
    // checkPositionStop() {
    //     this._positionSubscription.unsubscribe()
    // }
}
