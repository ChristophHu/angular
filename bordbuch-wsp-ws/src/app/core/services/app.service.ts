import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectBackendUrl, selectToken } from 'src/app/modules/auth/state/selectors'
import { getLocalISO } from 'src/app/shared/utils';
import { Betankung } from '../models/betankung';
import { Checklist } from '../models/checklist.model';
import { Checklistitem } from '../models/checklistitem.model';
import { Dienststelle } from '../models/dienststelle.model';
import { Filter } from '../models/filter.model';
import { Instandsetzung } from '../models/Instandsetzung.model';
import { Kat } from '../models/kat.model';
import { Klarmeldung } from '../models/klarmeldung.model';
import { Peilung } from '../models/peilung.model';
import { Status } from '../models/reparatur-status.model';
import { Reparatur } from '../models/reparatur.model';
import { Schiff } from '../models/schiff.model';
import { Standort } from '../models/standort.model';
import { Streife } from '../models/streife.model';
import { Tank } from '../models/tank.model';
import { Zaehlerstand } from '../models/zaehlerstand.model';
import { Zaehlerstandstyp } from '../models/zaehlerstandstyp.model';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})

export class AppService {

    private inst: Instandsetzung[] = [
        { id: '1', id_schiff: '3f1149ac-2aac-488f-aac1-2994a47d6ff0', name: 'Neues Testschiff', klar: false, beginn: getLocalISO('now') },
        { id: '2', id_schiff: '3f1149ac-2aac-488f-aac1-2994a47d6ff0', name: 'Neues Testschiff', klar: true, beginn: getLocalISO('yesterday'), ende: getLocalISO('now') }
    ]

    constructor(private _store: Store, private httpClient: HttpClient, private _connectionService: ConnectionService) {
        this._store.pipe(select(selectToken)).subscribe((token: string) => {
            if (token) this._connectionService.setToken(token)
        })
        this._store.pipe(select(selectBackendUrl)).subscribe(backendUrl => {
            this._connectionService.setBackendUrl(backendUrl)
        })
    }

    reducer(action: string, data: any): Observable<any> {
        const backendUrl: string = this._connectionService.getBackendUrl()
        const token     : string = this._connectionService.getToken()

        console.info(`reducer | action: '${action}', data: ${data}`)
        // console.table(`data: ${data}`)

        const baseURL = `${backendUrl}/${action}`
        let param = ``
        switch (action) {

            // besatzung
            case 'insertBesatzung':
                param = `id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`
                break
            case 'updateBesatzung':
                param = `id=${data.id}&id_streife=${data.id_streife}&persnr=${data.persnr}&funktion=${data.funktion}&an_bord=${data.an_bord}&von_bord=${data.von_bord}`
                break
            case 'deleteBesatzung':
                param = `id=${data}`
                break

            // betankung
            case 'insertBetankung':
                param = `id_schiff=${data.id_ship}&id_tank=${data.id_tank}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`
                break
            case 'updateBetankung':
                param = `id=${data.id}&id_schiff=${data.id_ship}&id_tank=${data.id_tank}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`
                break

            case'deleteBetankung':
                param = `id=${data}`
                break

            // betriebsstoffe, dienststellen, kennung, pruefvermerkkategorie, zaehlerstandstypen, zweck
            case 'inserteinsatzmittel':
            case 'insertKatBetriebsstoff':
            case 'insertKatFunktion':
            case 'insertKatKennung':
            case 'insertKatZweck':
                param = `bezeichnung=${data.bezeichnung}`
                break

            case 'updateeinsatzmittel':
            case 'updateKatBetriebsstoff':
            case 'updateKatKennung':
            case 'updateKatStatus':
            case 'updateKatZwecke':
                param = `id=${data.id}&bezeichnung=${data.bezeichnung}`
                break

            case 'deleteeinsatzmittel':
            case 'deleteKatBetriebsstoff':
            case 'deleteDienststelle':
            case 'deleteKatFunktion':
            case 'deleteKatKennung':
            case 'deleteKatZwecke':
            case 'deletePeilung':
            case 'deletePruefvermerk':
            case 'deletePruefvermerkKat':
            case 'deleteReparatur':
            case 'deleteReparaturFoto':
            case 'deleteSchiff':
            case 'deleteStatus':
            case 'deleteStreife':
            case 'deleteTank':
            case 'deleteZaehlerstand':
            case 'deleteZaehlerstandsTyp':
                param = `id=${data}`
                break

            case 'insertDienststelle':
                param = `bezeichnung=${data.bezeichnung}&latitude=${data.position.latitude}&longitude=${data.position.longitude}&strasse=${data.adresse.strasse}&hausnummer=${data.adresse.hausnummer}&postleitzahl=${data.adresse.postleitzahl}&ort=${data.adresse.ort}&mailadresse=${data.mailadresse}`
                break

            case 'updateDienststelle':
                param = `id=${data.id}&bezeichnung=${data.bezeichnung}&latitude=${data.position.latitude}&longitude=${data.position.longitude}&strasse=${data.adresse.strasse}&hausnummer=${data.adresse.hausnummer}&postleitzahl=${data.adresse.postleitzahl}&ort=${data.adresse.ort}&mailadresse=${data.mailadresse}`
                break

            case 'insertPruefvermerk':
                param = `id_kategorie=${data.id_kategorie}&bezeichnung=${data.item}&beschreibung=${data.description}`
                break

            case 'updatePruefvermerk':
                param = `id=${data.id}&id_kategorie=${data.id_kategorie}&bezeichnung=${data.item}&beschreibung=${data.description}`
                break

            case 'insertKatPruefvermerk':
                param = `kategorie=${data.bezeichnung}`
                break

            case 'updateKatPruefvermerk':
                param = `id=${data.id}&kategorie=${data.bezeichnung}`
                break

            case 'insertKatStatus':
                param = `status=${data.bezeichnung}`
                break
            
            case 'updateKatStatus':
                param = `id=${data.id}&status=${data.bezeichnung}`
                break

            // katZaehlerstand
            case 'insertKatZaehlerstand':
                param = `zaehlerstandstyp=${data.zaehlerstandstyp}`
                break

            case 'updateKatZaehlerstand':
                param = `id=${data.id}&zaehlerstandstyp=${data.zaehlerstandstyp}`
                break
            
            // klarmeldungen
            case 'insertKlarMeldung':
                param = `id_schiff=${data.id_schiff}&beginn=${data.beginn}&ende=${data.ende}&klar=${data.klar}`
                break
            case 'updateKlarMeldung':
                param = `id=${data.id}&id_schiff=${data.id_schiff}&beginn=${data.beginn}&ende=${data.ende}&klar=${data.klar}`
                break
            case 'deleteKlarmeldung':
                param = `id=${data}`
                break

            // schiffe
            case 'insertSchiff':
                param = `id_dienststelle=${data.id_dienststelle}&name=${data.name}&marke=${data.marke}&typ=${data.typ}&identifikationsnummer=${data.identifikationsnummer}&durchsicht=${data.durchsicht}`
                break
            case 'updateSchiff':
                param = `id=${data.id}&id_dienststelle=${data.id_dienststelle}&name=${data.name}&marke=${data.marke}&typ=${data.typ}&identifikationsnummer=${data.identifikationsnummer}&durchsicht=${data.durchsicht}`
                break

            // streife
            case 'insertStreife':
                param = `id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&kennung=${data.kennung}`
                break
            case 'updateStreife':
                param = `id=${data.id}&id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&ende=${data.ende}&kennung=${data.kennung}`
                break

            // tank
            case 'insertTank':
                param = `id_schiff=${data.id_schiff}&bezeichnung=${data.bezeichnung}&kraftstoff=${data.kraftstoff}&max_vol=${data.max_vol}`
                break
            case 'updateTank':
                param = `id=${data.id}&id_schiff=${data.id_schiff}&bezeichnung=${data.bezeichnung}&kraftstoff=${data.kraftstoff}&max_vol=${data.max_vol}`
                break

            // checkliste
            case 'insertCheckliste':
                param = `id_schiff=${data.id_schiff}&datum=${data.datum}&gbookdaten=${data.gbookdaten}&streife=${data.streife}`
                break
            case 'deleteCheckliste':
                param = `id_schiff=${data.id}&datum=${data.date}`
                break

            // peilungen
            case 'insertPeilung':
                param = `id_schiff=${data.id_schiff}&id_tank=${data.id_tank}&vol=${data.vol}&date=${data.date}`
                break
            case 'updatePeilung':
                param = `id=${data.id}&id_schiff=${data.id_schiff}&id_tank=${data.id_tank}&vol=${data.vol}&date=${data.date}`
                break

            // pruefvermerk/reparatur
            case 'insertReparatur': {
                param = `id_schiff=${data.id_ship}&id_status=9f666873-4fc4-4f9b-8f98-f3fa182be7eb&date=${data.date}&kategorie=${data.kategorie}&item=${data.item}&description=${data.description}`
                break
            }

            // position
            case 'insertPosition': {
                param = `id_schiff=${data.id_ship}&id_streife=${data.id_streife}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&beschreibung=${data.description}&ort=${data.location.latitude}`
                break
            }
            case 'updatePosition': {
                param = `id=${data.id}&id_schiff=${data.id_ship}&id_streife=${data.id_streife}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&beschreibung=${data.description}&ort=${data.location.latitude}`
                break
            }
            case 'deletePosition': {
                param = `id=${data}`
                break
            }

            // reparaturen
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

            // zaehlerstaende
            case 'insertZaehlerstand':
                param = `id_schiff=${data.id_schiff}&id_zaehlerstandstyp=${data.id_zaehlerstandstyp}&value=${data.value}&date=${data.date}&betriebsstunden=${data.betriebsstunden}`
                break
            case 'updateZaehlerstand':
                param = `id=${data.id}&id_schiff=${data.id_schiff}&id_zaehlerstandstyp=${data.id_zaehlerstandstyp}&value=${data.value}&date=${data.date}&betriebsstunden=${data.betriebsstunden}`
                break 

            default:
                console.error('There is no action to switch.')
                break
        }

        // console.log(`request: ${baseURL} + ${param}`)
        
        return this.httpClient.post(
            baseURL, 
            param, 
            { headers: { 
                'Content-Type': 'application/x-www-form-urlencoded', 
                'Authorization': token 
            }}
        ) // .pipe(retry(2), take(1))
    }

    getReducer(action: string, data: any): any {
        const backendUrl: string = this._connectionService.getBackendUrl()
        const token     : string = this._connectionService.getToken()

        // console.info(`getreducer | action: '${action}', data: `, data)

        const baseURL = `${backendUrl}/${action}`
        let param = ``
        switch (action) {
            // filter
            case 'getBetankungen':
                param = `?id_schiff=${data}&all=false?startdate=${null}&enddate=${null}`
                break

            case 'getBetankungenAllRange':
            case 'getPeilungenAllRange':
            case 'getReparaturen':
            case 'getStreifenRange':
                param = `?startdate=${data.startdate}&enddate=${data.enddate}`
                break

            case 'getPositionenVonStreife':
                param = `?id_streife=${data}&startdate=${null}&enddate=${null}`
                break

            // case 'getBetankungenAll':
            case 'getDienststellen':
            case 'getPruefvermerke':
            case 'getPruefvermerksKategorien':
            case 'getKatBetriebsstoffe':
            case 'getKatFunktionen':
            case 'getKatKennungen':
            case 'getKlarmeldungenAll':
            case 'getLastChecklistAll':
            case 'getLastPositionsFromAllShips':
            case 'getSchiffe':
            case 'getStatustypen':
            case 'getTanks':
            case 'getZaehlerstandstypen':
            case 'getKatZwecke':
                param = ``
                break

            case 'getFotosVonReparatur':
                param = `?id_reparatur=${data}`
                break

            case 'getSchiff':
                param = `?id=${data}`
                break

            case 'getPeilung':
                param = `?id_peilung=${data}`
                break

            case 'getLastChecklist':
            case 'getReparaturenVonSchiff':
            case 'getStreifeVonSchiff':
            case 'getTanksVonSchiff':
                param = `?id_schiff=${data}`
                break
            
            case 'getPosition':
                param = `?id_schiff=${data}&all=true`
                break

            case 'getPeilungVonSchiff':
                param = `?id_schiff=${data}&all=false`
                break
            
            case 'getZaehlerstaendeAll':
                param = `?all=false`
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

    // betankungen   
    getAllBetankungen(filter: Filter): Observable<any> {
        return this.getWithParam('getBetankungenAllRange', filter)
    }
    insertBetankung(betankung: Betankung): Observable<any> {
        return this.insert(betankung, 'insertBetankung')
    }
    updateBetankung(betankung: Betankung): Observable<any> {
        return this.update(betankung, 'updateBetankung')
    }
    deleteBetankung(id: string): Observable<any> {
        return this.delete(id, 'deleteBetankung')
    }

    // betriebsstoffe
    getBetriebsstoffe(): Observable<any> {
        return this.get('getKatBetriebsstoffe')
    }
    insertBetriebsstoff(kat: Kat): Observable<any> {
        return this.insert(kat, 'insertKatBetriebsstoff')
    }
    updateBetriebsstoff(kat: Kat): Observable<any> {
        return this.update(kat, 'updateKatBetriebsstoff')
    }
    deleteBetriebsstoff(id: string): Observable<any> {
        return this.delete(id, 'deleteKatBetriebsstoff')
    }

    // checklists
    getAllShipChecklists(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getLastChecklistAll', {})
            source$.subscribe((data: any) => {
                data.forEach((checklist: Checklist) => {
                    checklist.checklistItems = JSON.parse(checklist.gbookdaten!)
                    delete checklist.gbookdaten

                    if (Array.isArray(checklist.checklistItems)) {
                        checklist.status = this.getChecklistStatus(checklist.checklistItems)
                    } else {
                        checklist.checklistItems = []
                        checklist.status = 'vollst??ndig'
                    }
                })
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getChecklistStatus(checklistItems?: Checklistitem[]): string {
        let status = 'vollst??ndig'
        checklistItems?.forEach((checklistItem: Checklistitem) => {
            switch (true) {
                case (checklistItem.checked == false && checklistItem.relevant == false):
                    status = 'unvollst??ndig'
                    break
                case (checklistItem.checked == false && checklistItem.relevant == true):
                    status = 'T??tigkeit eingeschr??nkt'
                    break
                default:
                    status = 'vollst??ndig'
            }
        })
        return status
    }
    insertShipChecklist(checklist: Checklist): Observable<any>  {
        return this.insert(checklist, 'insertCheckliste')
    }
    deleteShipChecklist(id: string, date: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('deleteCheckliste', {id, date})
            source$.subscribe((status: any) => {
                observer.next(status)
            }), (error: any) => observer.error(error)
        })
    }

    // checkliste
    getCheckliste(): Observable<any> {
        return new Observable ((observer) => {
            let checkliste: any[] = []
            this.get('getFEM').subscribe(data => {
                data.forEach((el: any) => {
                    checkliste.push({ id: el[0], bezeichnung: el[1] })
                });
                observer.next(checkliste)
            })
        })
    }
    insertChecklist(kat: Kat): Observable<any> {
        return this.insert(kat, 'inserteinsatzmittel')
    }
    updateChecklist(kat: Kat): Observable<any> {
        return this.update(kat, 'updateeinsatzmittel')
    }
    deleteChecklist(id: string): Observable<any> {
        return this.delete(id, 'deleteeinsatzmittel')
    }

    // dienststellen
    getDienststellen(): Observable<any> {
        return this.get('getDienststellen')
    }
    insertDienststelle(dienststelle: Dienststelle): Observable<any> {
        return this.insert(dienststelle, 'insertDienststelle')
    }
    updateDienststelle(dienststelle: Dienststelle): Observable<any> {
        return this.update(dienststelle, 'updateDienststelle')
    }
    deleteDienststelle(id: string): Observable<any> {
        return this.delete(id, 'deleteDienststelle')
    }

    // funktionen
    getFunktionen(): Observable<any> {
        return this.get('getKatFunktionen')
    }
    insertFunktion(kat: any): Observable<any> {
        return this.insert(kat, 'insertKatFunktion')
    }
    updateFunktion(kat: any): Observable<any> {
        return this.update(kat, 'updateKatFunktion')
    }
    deleteFunktion(id: string): Observable<any> {
        return this.delete(id, 'deleteKatFunktion')
    }

    // kennungen
    getKennungen(): Observable<any> {
        return this.get('getKatKennungen')
    }
    insertKennung(kennung: Kat): Observable<any> {
        return this.insert(kennung, 'insertKatKennung')
    }
    updateKennung(kennung: Kat): Observable<any> {
        return this.update(kennung, 'updateKatKennung')
    }
    deleteKennung(id: string): Observable<any> {
        return this.delete(id, 'deleteKatKennung')
    }

    // instandsetzungen
    getInstandsetzungen(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = of(this.inst)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    insertInstandsetzung(insert: Instandsetzung): Observable<any> {
        // console.log(insert)
        // this.inst.push(insert)
        // console.log(this.inst)
        return new Observable ((observer) => {
            const source$ = of(null)
            source$.subscribe((data: any) => {
                observer.next(Date.now())
            }), (error: any) => observer.error(error)
        })
    }
    updateInstandsetzung(update: Instandsetzung): Observable<any> {
        let cleared = this.inst.filter(el => el.id !== update.id)
        cleared.push(update)
        return new Observable ((observer) => {
            const source$ = of(200)
            source$.subscribe((status: any) => {
                observer.next(status)
            }),
            (error: any) => observer.error(error)
        })
    }
    deleteInstandsetzung(id: string): Observable<any> {
        this.inst.filter(el => el.id !== id)
        return new Observable ((observer) => {
            const source$ = of(200)
            source$.subscribe((status: any) => {
                observer.next(status)
            }), (error: any) => observer.error(error)
        })
    }

    // klarmeldungen
    getKlarmeldungen(): Observable<any> {
        return this.get('getKlarmeldungenAll')
    }
    insertKlarmeldung(insert: Klarmeldung): Observable<any> {
        return this.insert(insert, 'insertKlarMeldung')
    }
    updateKlarmeldung(update: Klarmeldung): Observable<any> {
        return this.update(update, 'updateKlarMeldung')
    }
    deleteKlarmeldung(id: string): Observable<any> {
        return this.delete(id, 'deleteKlarmeldung')
    }

    // peilungen   
    getPeilungById(id: string): Observable<any> {
        return this.getWithParam('getPeilungVonSchiff', id)
    }
    getPeilungenAll(filter: Filter): Observable<any> {
        return this.getWithParam('getPeilungenAllRange', filter)
    }
    insertPeilung(peilung: Peilung): Observable<any> {
        return this.insert(peilung, 'insertPeilung')
    }
    updatePeilung(peilung: Peilung): Observable<any> {
        return this.update(peilung, 'updatePeilung')
    }
    deletePeilung(id: string): Observable<any> {
        return this.delete(id, 'deletePeilung')
    }

    // pruefvermerke
    getPruefvermerke(): Observable<any> {
        return this.get('getPruefvermerke')
    }
    insertPruefvermerk(kat: any): Observable<any> {
        return this.insert(kat, 'insertPruefvermerk')
    }
    updatePruefvermerk(kat: any): Observable<any> {
        return this.update(kat, 'updatePruefvermerk')
    }
    deletePruefvermerk(id: string): Observable<any> {
        return this.delete(id, 'deletePruefvermerk')
    }

    // pruefvermerkkategorien
    getPruefvermerkkategorien(): Observable<any> {
        return this.get('getPruefvermerksKategorien')
    }
    insertPruefvermerkkategorie(zweck: Kat): Observable<any> {
        return this.insert(zweck, 'insertKatPruefvermerk')
    }
    updatePruefvermerkkategorie(zweck: Kat): Observable<any> {
        return this.update(zweck, 'updateKatPruefvermerk')
    }
    deletePruefvermerkkategorie(id: string): Observable<any> {
        return this.delete(id, 'deletePruefvermerkKat')
    }

    // reparaturen   
    // getAllReparaturen(): Observable<any> {
    //     return this.get('getReparaturen')
    // }
    getAllReparaturen(filter: Filter): Observable<any> {
        return this.getWithParam('getReparaturen', filter)
    }
    
    insertReparatur(reparatur: Reparatur): Observable<any> {
        return this.insert(reparatur, 'insertReparatur')
    }
    updateReparatur(reparatur: Reparatur): Observable<any> {
        return this.update(reparatur, 'updateReparatur')
    }
    deleteReparatur(id: string): Observable<any> {
        return this.delete(id, 'deleteReparatur')
    }

    // reparaturFoto
    downloadReparaturFoto(id: string): Observable<any> {
        return this.getWithParam('getFotosVonReparatur', id)
    }
    uploadReparaturFoto(upload: any): Observable<any> {
        return this.update(upload, 'insertReparaturFoto')
    }
    deleteReparaturFoto(id: string): Observable<any> {
        return this.delete(id, 'deleteReparaturFoto')
    }

    // schiffe
    getSchiffe(): Observable<any> {
        return this.get('getSchiffe')
    }
    insertSchiff(schiff: Schiff): Observable<any> {
        return this.insert(schiff, 'insertSchiff')
    }
    updateSchiff(schiff: Schiff): Observable<any> {
        return this.update(schiff, 'updateSchiff')
    }
    deleteSchiff(id: string): Observable<any> {
        return this.delete(id, 'deleteSchiff')
    }

    // status
    getStatus(): Observable<any> {
        return this.get('getStatustypen')
    }
    insertStatus(schiff: Status): Observable<any> {
        return this.insert(schiff, 'insertKatStatus')
    }
    updateStatus(schiff: Status): Observable<any> {
        return this.update(schiff, 'updateKatStatus')
    }
    deleteStatus(id: string): Observable<any> {
        return this.delete(id, 'deleteStatus')
    }

    // laststandorte
    getAllLastStandorte(): Observable<any> {
        return this.get('getLastPositionsFromAllShips')
    }

    // standorte
    getAllStandorteVonStreife(id: string): Observable<any> {
        return this.getWithParam('getPositionenVonStreife', id)
    }
    insertStandort(standort: Standort): Observable<any> {
        return this.insert(standort, 'insertPosition')
    }
    updateStandort(standort: Standort): Observable<any> {
        return this.update(standort, 'updatePosition')
    }
    deleteStandort(id: string): Observable<any> {
        return this.delete(id, 'deletePosition')
    }

    // streifen   
    getAllStreifen(filter: Filter): Observable<any> {
        return this.getWithParam('getStreifenRange', filter)
    }
    insertStreife(streife: Streife): Observable<any> {
        return this.insert(streife, 'insertStreife')
    }
    updateStreife(streife: Streife): Observable<any> {
        return this.update(streife, 'updateStreife')
    }
    deleteStreife(id: string): Observable<any> {
        return this.delete(id, 'deleteStreife')
    }

    // tanks
    getTanks(): Observable<any> {
        return this.get('getTanks')
    }
    getTanksVonSchiff(id: string): Observable<any> {
        return this.getWithParam('getTanksVonSchiff', id)
    }
    insertTank(tank: Tank): Observable<any> {
        return this.insert(tank, 'insertTank')
    }
    updateTank(tank: Tank): Observable<any> {
        return this.update(tank, 'updateTank')
    }
    deleteTank(id: string): Observable<any> {
        return this.delete(id, 'deleteTank')
    }

    // zaehlerstandstypen
    getZaehlerstandstypen(): Observable<any> {
        return this.get('getZaehlerstandstypen')
    }
    insertZaehlerstandstyp(zaehlerstandstyp: Zaehlerstandstyp): Observable<any> {
        return this.insert(zaehlerstandstyp, 'insertKatZaehlerstand')
    }
    updateZaehlerstandstyp(zaehlerstandstyp: Zaehlerstandstyp): Observable<any> {
        return this.update(zaehlerstandstyp, 'updateKatZaehlerstand')
    }
    deleteZaehlerstandstyp(id: string): Observable<any> {
        return this.delete(id, 'deleteZaehlerstandsTyp')
    }

    // zaehlerstaende   
    getAllZaehlerstaende(): Observable<any> {
        return this.get('getZaehlerstaendeAll')
    }
    insertZaehlerstand(zaehlerstand: Zaehlerstand): Observable<any> {
        return this.insert(zaehlerstand, 'insertZaehlerstand')
    }
    updateZaehlerstand(zaehlerstand: Zaehlerstand): Observable<any> {
        return this.update(zaehlerstand, 'updateZaehlerstand')
    }
    deleteZaehlerstand(id: string): Observable<any> {
        return this.delete(id, 'deleteZaehlerstand')
    }

    // zweck
    getZweck(): Observable<any> {
        return this.get('getKatZwecke')
    }
    insertZweck(zweck: Kat): Observable<any> {
        return this.insert(zweck, 'insertKatZweck')
    }
    updateZweck(zweck: Kat): Observable<any> {
        return this.update(zweck, 'updateKatZwecke')
    }
    deleteZweck(id: string): Observable<any> {
        return this.delete(id, 'deleteKatZwecke')
    }
}
