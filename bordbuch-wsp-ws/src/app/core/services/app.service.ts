import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { select, Store } from '@ngrx/store';
import { from, interval, Observable, Subscription } from 'rxjs';
import { selectToken } from 'src/app/modules/auth/state/selectors';
import { Betankung } from '../models/betankung';
import { Checklist } from '../models/checklist.model';
import { Checklistitem } from '../models/checklistitem.model';
import { Dienststelle } from '../models/dienststelle.model';
import { Kat } from '../models/kat.model';
import { Status } from '../models/reparatur-status.model';
import { Reparatur } from '../models/reparatur.model';
import { Schiff } from '../models/schiff.model';
import { Standort } from '../models/standort.model';
import { Streife } from '../models/streife.model';
import { Zaehlerstand } from '../models/zaehlerstand.model';
import { Zaehlerstandstyp } from '../models/zaehlerstandstyp.model';

@Injectable({
  providedIn: 'root'
})

export class AppService {

    private token: string = ''

    constructor(private httpClient: HttpClient) { }

    reducer(action: string, data: any): Observable<any> {
        console.info(`reducer | action: '${action}', data: ${data}`)
        const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
        let param = ``
        switch (action) {

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
                param = `id=${data.id}&id_schiff=${data.id_ship}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfillingquantity}`
                break

            case'deleteBetankung':
                param = `id=${data}`
                break

            // peilung
            case 'insertPeilung': {
                param = `id_schiff=${data.id_schiff}&id_tank=${data.id_tank}&vol=${data.vol}&date=${data.date}`
                break
            }

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
            case 'deletePruefvermerk':
            case 'deletePruefvermerkKat':
            case 'deleteReparaturFoto':
            case 'deleteSchiff':
            case 'deleteStatus':
            case 'deleteStreife':
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

            case 'insertKatZaehlerstand':
                param = `zaehlerstandstyp=${data.bezeichnung}`
                break

            case 'updateKatZaehlerstand':
                param = `id=${data.id}&zaehlerstandstyp=${data.bezeichnung}`
                break

            // schiffe
            case 'insertSchiff':
                param = `id_dienststelle=${data.id_dienststelle}&name=${data.name}&marke=${data.marke}&typ=${data.typ}&identifikationsnummer=${data.identifikationsnummer}&durchsicht=${data.durchsicht}`
                break
            case 'updateSchiff':
                param = `id=${data.id}&id_dienststelle=${data.id_dienststelle}&name=${data.name}&marke=${data.marke}&typ=${data.typ}&identifikationsnummer=${data.identifikationsnummer}&durchsicht=${data.durchsicht}`
                break

            // streife
            case 'insertStreife': {
                param = `id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&kennung=${data.kennung}`
                break
            }
            case 'updateStreife': {
                param = `id=${data.id}&id_schiff=${data.id_schiff}&zweck=${data.zweck}&status=${data.status}&start=${data.start}&ende=${data.ende}&kennung=${data.kennung}`
                break
            }

            // checkliste
            case 'insertCheckliste':
                param = `id_schiff=${data.id_schiff}&datum=${data.datum}&gbookdaten=${data.gbookdaten}&streife=${data.streife}`
                break
            case 'deleteCheckliste':
                console.log(data)
                param = `id_schiff=${data.id}&datum=${data.date}`
                break

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
                console.log(data)
                param = `id=${data.id}&id_schiff=${data.id_schiff}&id_zaehlerstandstyp=${data.id_zaehlerstandstyp}&value=${data.value}&date=${data.date}&betriebsstunden=${data.betriebsstunden}`
                console.log(param)
                break               

            default:
                console.error('There is no action to switch.')
                break
        }

        console.log(`${baseURL} ${param}`)
        
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
            case 'getBetankungenAll':
            case 'getDienststellen':
            case 'getPruefvermerke':
            case 'getPruefvermerksKategorien':
            case 'getKatBetriebsstoffe':
            case 'getKatFunktionen':
            case 'getKatKennungen':
            case 'getLastChecklistAll':
            case 'getLastPositionsFromAllShips':
            case 'getReparaturen':
            case 'getSchiffe':
            case 'getStatustypen':
            case 'getStreifen':
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

            case 'getPositionenVonStreife':
                param = `?id_streife=${data}`
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
                param = `?id_schiff=${data}&all=true`
                break

            case 'getPeilungVonSchiff':
            case 'getBetankungen':
                param = `?id_schiff=${data}&all=false`
                break
            
            case 'getZaehlerstaendeAll':
                param = `?all=false`
                break

            default:
                break
        }
        console.log(baseURL + param)

        return this.httpClient.get(baseURL + param, { headers: { 'Authorization': this.token } }) //.pipe(retry(2),take(1))
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
    getAllBetankungen(): Observable<any> {
        return this.get('getBetankungenAll')
    }
    insertBetankung(betankung: Betankung): Observable<any> {
        console.log(betankung)
        return this.insert(betankung, 'insertBetankung')
    }
    updateBetankung(betankung: Betankung): Observable<any> {
        console.log(betankung)
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
                        checklist.status = 'vollständig'
                    }
                })
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    getChecklistStatus(checklistItems?: Checklistitem[]): string {
        status = 'vollständig'
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
        console.log(dienststelle)
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

    // kennungen
    getKennungen(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getKatKennungen', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    insertKennung(kennung: Kat): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertKatKennung', kennung)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            }), (error: any) => observer.error(error)
        })
    }
    updateKennung(kennung: Kat): Observable<any> {
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
            }), (error: any) => observer.error(error)
        })
    }

    // pruefvermerkkategorien
    getPruefvermerkkategorien(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getPruefvermerksKategorien', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    insertPruefvermerkkategorie(zweck: Kat): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertKatPruefvermerk', zweck)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            }), (error: any) => observer.error(error)
        })
    }
    updatePruefvermerkkategorie(zweck: Kat): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updateKatPruefvermerk', zweck)
            source$.subscribe((status: any) => {
                observer.next(status)
            }),
            (error: any) => observer.error(error)
        })
    }
    deletePruefvermerkkategorie(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('deletePruefvermerkKat', id)
            source$.subscribe((status: any) => {
                observer.next(status)
            }), (error: any) => observer.error(error)
        })
    }

    // reparaturen   
    getAllReparaturen(): Observable<any> {
        return this.get('getReparaturen')
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
        return new Observable ((observer) => {
            const source$ = this.getReducer('getFotosVonReparatur', id)
            source$.subscribe((data: any) => {
                console.log(data)
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

    // schiffe
    getSchiffe(): Observable<any> {
        return this.get('getSchiffe')
    }
    insertSchiff(schiff: Schiff): Observable<any> {
        console.log(schiff)
        return this.insert(schiff, 'insertSchiff')
    }
    updateSchiff(schiff: Schiff): Observable<any> {
        console.log(schiff)
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
        console.log(schiff)
        return this.insert(schiff, 'insertKatStatus')
    }
    updateStatus(schiff: Status): Observable<any> {
        console.log(schiff)
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
        return new Observable ((observer) => {
            const source$ = this.getReducer('getPositionenVonStreife', id)
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
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
    getAllStreifen(): Observable<any> {
        return this.get('getStreifen')
    }
    insertStreife(streife: Streife): Observable<any> {
        console.log(streife)
        return this.insert(streife, 'insertStreife')
    }
    updateStreife(streife: Streife): Observable<any> {
        console.log(streife)
        return this.update(streife, 'updateStreife')
    }
    deleteStreife(id: string): Observable<any> {
        return this.delete(id, 'deleteStreife')
    }

    // zaehlerstandstypen
    getZaehlerstandstypen(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getZaehlerstandstypen', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    insertZaehlerstandstyp(zaehlerstandstyp: Zaehlerstandstyp): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertKatZaehlerstand', zaehlerstandstyp)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            }), (error: any) => observer.error(error)
        })
    }
    updateZaehlerstandstyp(zaehlerstandstyp: Zaehlerstandstyp): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updateKatZaehlerstand', zaehlerstandstyp)
            source$.subscribe((status: any) => {
                observer.next(status)
            }),
            (error: any) => observer.error(error)
        })
    }
    deleteZaehlerstandstyp(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('deleteZaehlerstandsTyp', id)
            source$.subscribe((status: any) => {
                observer.next(status)
            }), (error: any) => observer.error(error)
        })
    }

    // zaehlerstaende   
    getAllZaehlerstaende(): Observable<any> {
        return this.get('getZaehlerstaendeAll')
    }
    insertZaehlerstand(zaehlerstand: Zaehlerstand): Observable<any> {
        console.log(zaehlerstand)
        return this.insert(zaehlerstand, 'insertZaehlerstand')
    }
    updateZaehlerstand(zaehlerstand: Zaehlerstand): Observable<any> {
        console.log(zaehlerstand)
        return this.update(zaehlerstand, 'updateZaehlerstand')
    }
    deleteZaehlerstand(id: string): Observable<any> {
        return this.delete(id, 'deleteZaehlerstand')
    }

    // zweck
    getZweck(): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.getReducer('getKatZwecke', {})
            source$.subscribe((data: any) => {
                observer.next(data)
            }, (error: any) => observer.error(error))
        })
    }
    insertZweck(zweck: Kat): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('insertKatZweck', zweck)
            source$.subscribe((data: any) => {
                observer.next(data.id)
            }), (error: any) => observer.error(error)
        })
    }
    updateZweck(zweck: Kat): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('updateKatZwecke', zweck)
            source$.subscribe((status: any) => {
                observer.next(status)
            }),
            (error: any) => observer.error(error)
        })
    }
    deleteZweck(id: string): Observable<any> {
        return new Observable ((observer) => {
            const source$ = this.reducer('deleteKatZwecke', id)
            source$.subscribe((status: any) => {
                observer.next(status)
            }), (error: any) => observer.error(error)
        })
    }
}
