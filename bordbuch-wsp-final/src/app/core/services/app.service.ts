import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, interval, Observable, Subscription } from 'rxjs';
import { selectBackendUrl, selectToken } from 'src/app/modules/auth/state/selectors';

import { PositionActions } from 'src/app/store/positionreport-store';
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

    // streife
    insertStreife(patrol: Patrol): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertStreife', patrol)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updateStreife(patrol: Patrol): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updateStreife', patrol)
            source$.subscribe((status: any) => {
                // observer.next(data)
            })
            // , (error: any) => observer.error(error)
        })
    }
    deleteStreife(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('deleteStreife', id)
            source$.subscribe((status: any) => {
                observer.next(status)
            })
            , (error: any) => observer.error(error)
        })
    }

    // besatzung
    insertBesatzung(besatzung: Besatzung): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertBesatzung', besatzung)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updateBesatzung(changes: Partial<Besatzung>): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updateBesatzung', changes)
            source$.subscribe((status: any) => {
                // observer.next(data)
            })
            // , (error: any) => observer.error(error)
        })
    }
    deleteBesatzung(id: string): Observable<any> {
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
    updateBetankung(changes: Partial<Betankung>): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updateBetankung', changes)
            source$.subscribe((status: any) => {
            })
        })
    }
    deleteBetankung(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('deleteBetankung', id)
            source$.subscribe((status: any) => {
                observer.next(status)
            })
            , (error: any) => observer.error(error)
        })
    }

    // zaehlerstaende
    // updateZaehlerstand(id: number | string, changes: Partial<Zaehlerstand>): Observable<any> {
    //     return new Observable ((observer) => {
    //         console.log(changes)
    //         const source$ = this.reducer('updateZaehlerstand', changes)
    //         source$.subscribe((status: any) => {
    //             // observer.next(data)
    //         })
    //         // , (error: any) => observer.error(error)
    //     })
    // }
    updateZaehlerstand(zaehlerstand: Zaehlerstand): Observable<any> {
        return this.update(zaehlerstand, 'updateZaehlerstand')
    }

    // pruefvermerk
    insertReparatur(reparatur: Reparatur): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertReparatur', reparatur)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updateReparatur(reparatur: Reparatur): Observable<any> {
        return this.update(reparatur, 'updateReparatur')
    }

    // position
    insertPosition(position: PositionReport): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertPosition', position)
            source$.subscribe((data: any) => {
                const pos : PositionReport = Object.assign({}, position, { id: data.id })
                observer.next(pos)
                // observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updatePosition(position: PositionReport): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updatePosition', position)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }
    deletePosition(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('deletePosition', id)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            })
            // , (error: any) => observer.error(error)
        })
    }

    // reparaturfotos
    downloadReparaturFoto(id: string): Observable<any> {
        console.log(id)
        return new Observable ((observer) => {
            const source$ = this.getReducer('getFotosVonReparatur', id)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    uploadReparaturFoto(upload: any): Observable<any> {
        return this.update(upload, 'insertReparaturFoto')
    }
    deleteReparaturFoto(id: string): Observable<any> {
        return this.delete(id, 'deleteReparaturFoto')
    }

    // get
    getSchiffe(): Observable<any> {
        return new Observable ((observer) => {
            this.getReducer('getSchiffe', {}).subscribe((data: any) => {
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
    updateSchiff(schiff: Schiff): Observable<any> {
        return this.update(schiff, 'updateSchiff')
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
            const source$ = this.getReducer('getZaehlerstaendeRange', id)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getReparaturen(id : string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getReparaturenVonSchiff', id)
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
    getTanksVonSchiff(id : string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getTanksVonSchiff', id)
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
    getPruefvermerkKategorien(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getPruefvermerksKategorien', {})
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
    getDienststellen(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getDienststellen', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getBetriebsstoffe(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getKatBetriebsstoffe', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getFunktionen(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getKatFunktionen', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getKennungen(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getKatKennungen', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getZwecke(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getKatZwecke', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
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

    // updateChecklist(gbook: any) {
    //     // let gbook = JSON.parse(data[0].gbookdaten)
    //     // console.log(gbook)
    //     gbook = {"id_schiff":"1","einsatzmittel":[{"id":"75764649-769b-4935-848c-25ccb213cf56","name":"Anhaltestab","anzahl":"3","seriennummern":"","sonstiges":"false"},{"id":"a6a9a323-89b8-45a5-96d8-61866c4a0cef","name":"Alkomat","anzahl":"1","seriennummern":"SN-1234","sonstiges":"false"},{"id":"bd34d03c-3728-4df3-9ba7-7ead0d575532","name":"Anker","anzahl":"2","seriennummern":"","sonstiges":""},{"id":"c6aac15c-4fea-49ce-943b-21070169f361","name":"Rettungsring","anzahl":"1","seriennummern":"","sonstiges":""}]}
    //     console.log(gbook)
    //     const checkliste: Checklist = { id_schiff: '1', datum: new Date().toISOString(), streife: '3f7bc091-9f3d-428b-bf57-429f7dba25da', gbookdaten: JSON.stringify(gbook)}
    //     this.insertCheckliste(checkliste)
    // }

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
    
    getPeilung(id: string = '1'): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getPeilungVonSchiff', id)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    insertPeilung(peilung: Peilung): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertPeilung', peilung)
            source$.subscribe((data: any) => {
                const peil : Peilung = Object.assign({}, peilung, { id: data.id })
                observer.next(peil)
            })
            // , (error: any) => observer.error(error)
        })
    }
    updatePeilung(peil: Peilung) {
        // return new Observable ((observer) => {
        //     this.peilung = this.peilung.filter(el => el.id != peil.id)
        //     this.peilung.push(peil)
        //     console.log(this.peilung)

        //     // const source$ = this.reducer('updatePosition', position)
        //     // source$.subscribe((data: any) => {
        // //     observer.next(peil)
        // //     })
        // //     , (error: any) => observer.error(error)
        // })
    }

    // status
    getStatus(): Observable<any> {
        return this.get('getStatustypen')
    }

    // searchUser
    getSearchUser(searchString: string): Observable<any> {
        return this.getWithParam('searchUser', searchString)
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
