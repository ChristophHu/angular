import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Reparatur } from '../models/reparatur';
import { Schiff } from '../models/schiff';
import { Streife } from '../models/streife';
import { Standort } from '../models/standort';
import { Zaehlerstand } from '../models/zaehlerstand';
import { MapService } from './map.service';
import { Besatzung } from '../models/besatzung';
import { Pruefvermerk } from '../models/pruefvermerk';
import { Zaehlerstandstyp } from '../models/zaehlerstandstyp';
import { StatusStreife } from '../models/statusstreife';
import { Position } from '../models/position';
import { debounceTime, delay, distinct, retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {

    private _schiffe = new BehaviorSubject<Schiff[]>([])
    readonly schiffe = this._schiffe.asObservable()

    private _lastPositions = new BehaviorSubject<Schiff[]>([])
    readonly lastPositions = this._lastPositions.asObservable()  

    private _aktiveStreife = new BehaviorSubject<Streife[]>([{ id_schiff: '', zweck: '', status: 'In Vorbereitung', start: '', ende: '', kennung: '', besatzung: [] }])
    readonly aktiveStreife = this._aktiveStreife.asObservable()

    private _besatzung = new BehaviorSubject<Besatzung[]>([])
    readonly besatzung = this._besatzung.asObservable()

    private _standorte = new BehaviorSubject<Standort[]>([])
    readonly standorte = this._standorte.asObservable()

    private _positions = new BehaviorSubject<Standort[]>([])
    readonly positions = this._positions.asObservable()

    private _reparaturen = new BehaviorSubject<Reparatur[]>([])
    readonly reparaturen = this._reparaturen.asObservable()

    private _zaehlerstaende = new BehaviorSubject<Zaehlerstand[]>([])
    readonly zaehlerstaende = this._zaehlerstaende.asObservable()

    private _pruefvermerke = new BehaviorSubject<Pruefvermerk[]>([])
    readonly pruefvermerke = this._pruefvermerke.asObservable()

    private _zaehlerstandstypen = new BehaviorSubject<Zaehlerstandstyp[]>([])
    readonly zaehlerstandstypen = this._zaehlerstandstypen.asObservable()

    // dataStore
    private dataStore: { 
        schiffe: Schiff[],
        lastPositions: any[], 
        aktiveStreife: Streife[], 
        besatzung: Besatzung[],
        positions: Standort[],

        reparaturen: Reparatur[], 
        zaehlerstaende: Zaehlerstand[], 
        standorte: Standort[],

        pruefvermerke: Pruefvermerk[]
        zaehlerstandstypen: Zaehlerstandstyp[]
    } = { 
        schiffe: [], 
        lastPositions: [], 
        aktiveStreife: [], 
        besatzung: [],
        positions: [],

        reparaturen: [],
        zaehlerstaende: [], 
        standorte: [],

        pruefvermerke: [],
        zaehlerstandstypen: []
    }

    private _notifications: ReplaySubject<string> = new ReplaySubject<string>(1);

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }

    constructor(private httpClient: HttpClient, private mapService: MapService) { }

    public dateToLocalISOString(dt: Date): string {
        dt.setHours(new Date().getHours()+2)
        return dt.toISOString().substring(0,16)
    }

    public formatDbStringToLocalISOString(date: Date | string | undefined) {
        if (date instanceof Date) {
            date.setHours(date.getHours()+2)
            return date.toISOString().substring(0,16)
        }
        switch(typeof(date)) {
            case 'string': {
                let dt = new Date(date.replace(' ', 'T'))
                dt.setHours(dt.getHours()+2)
                return dt.toISOString().substring(0,16)
            }
            default: {
                return
            }
        }
    }

    get _dataStore() {
        return this.dataStore
    }
    get _id_schiff() {
        return this.dataStore.aktiveStreife[0].id_schiff
    }
    get _id_streife() {
        return this.dataStore.aktiveStreife[0].id
    }


    reducer(action: string, data: any): Observable<any> {
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
                param = `id=${data.id}`
                break
            }

            // pruefvermerk/reparatur
            case 'insertReparatur': {
                param = `id_schiff=${data.id_ship}&id_status=9f666873-4fc4-4f9b-8f98-f3fa182be7eb&date=${data.date}&kategorie=${data.kategorie}&item=${data.item}&description=${data.description}`
                break
            }
            case 'updateZaehlerstand': {
                param = `id=${data.id}&id_schiff=${data.id_ship}&value=${data.value}&date=${data.date}`
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
        
        return this.httpClient.post(baseURL, param, this.httpOptions)
            .pipe(
                retry(2),
                take(1)
            )

    }
    getReducer(action: string, data: any): any {
        const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
        let param = ``
        switch (action) {
            case 'getPruefvermerke':
            case 'getSchiffe':
            case 'getZaehlerstandstypen':
                param = ``
                break

            case 'getStreifeVonSchiff':
            case 'getZaehlerstaende':
                param = `?id_schiff=${data}`
                break
            
            
            case 'getPosition':
            case 'getReparaturen':
                param = `?id_schiff=${data}&all=true`
                break

            default:
                break
        }

        return this.httpClient.get(baseURL + param).pipe(retry(2),take(1))
    }

    // streife
    insertStreife(streife: Streife) {
        streife.id = this.reducer('insertStreife', streife)
        // startposition
        const position: Standort = { id_ship: streife.id_schiff, date: new Date().toISOString(), location: { latitude: 0, longitude: 0 }, description: `Beginn der ${streife.zweck}.`, id_streife: streife.id }
        this.insertPosition(position)
        // besatzung
        this.dataStore.aktiveStreife[0].besatzung.forEach((member: Besatzung) => {
            member.id_streife = streife.id
            this.insertBesatzung(member)
        })

        this.dataStore.aktiveStreife[0] = streife
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }
    updateStreife(streife: Streife) {
        const status = this.reducer('updateStreife', streife)
        // position
        if (status == '200') {
            const position: Standort = { id_ship: streife.id_schiff, date: new Date().toISOString(), location: { latitude: 0, longitude: 0 }, description: `Ende der ${streife.zweck}.`, id_streife: streife.id }
            this.insertPosition(position)
        }
    }

    // besatzung
    insertBesatzung(member: Besatzung) {
        if (member.id_streife) {
            member.id = this.reducer('insertBesatzung', member)
        } else {
            member.id = this.dataStore.aktiveStreife[0].besatzung.length.toString()
        }
        this.dataStore.aktiveStreife[0].besatzung.push(member)
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }
    updateBesatzung(member: Besatzung) {
        if (member.id_streife) {
            member.id = this.reducer('updateBesatzung', member)
        }
        this.dataStore.aktiveStreife[0].besatzung = this.dataStore.aktiveStreife[0].besatzung.filter(el => el.id != member.id)
        this.dataStore.aktiveStreife[0].besatzung.push(member)
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }
    deleteBesatzung(member: Besatzung) {
        if (member.id_streife) {
            const status = this.reducer('deleteBesatzung', member)
        }
        this.dataStore.aktiveStreife[0].besatzung = this.dataStore.aktiveStreife[0].besatzung.filter(el => el.persnr != member.persnr)
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }

    // pruefvermerk
    insertPruefvermerk(reparatur: Reparatur) {
        reparatur.id = this.reducer('insertReparatur', reparatur)

        this.dataStore.reparaturen.push(reparatur)
        this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
    }

    // zaehlerstand
    updateZaehlerstand(zaehlerstand: Zaehlerstand) {
        const status = this.reducer('updateZaehlerstand', zaehlerstand)

        this.dataStore.zaehlerstaende = this.dataStore.zaehlerstaende.filter(el => el.id != zaehlerstand.id)
        this.dataStore.zaehlerstaende.push(zaehlerstand)
        this._zaehlerstaende.next(Object.assign({}, this.dataStore).zaehlerstaende)
    }

    // poition/standort
    insertPosition(position: Standort) {
        this.mapService.currentPosition
            .pipe(
                take(1)
            )
            .subscribe(data => {
                position.location = { latitude: (data.latitude+(Math.random()/25)), longitude: (data.longitude+(Math.random()/25)) }
                position.id = this.reducer('insertPosition', position)
                this.dataStore.positions.push(position)
                this._positions.next(Object.assign({}, this.dataStore).positions)

                this._notifications.next('Position gesetzt!')

            }, error => console.error(error))
            this.mapService.getCurrentPosition()        
    }
    updatePosition(position: Standort) {
        const status = this.reducer('updatePosition', position)
        if (+status == 200) this._notifications.next('Position aktualisiert!')

        this.dataStore.positions = this.dataStore.positions.filter(el => el.id != position.id)
        this.dataStore.positions.push(position)
        this._positions.next(Object.assign({}, this.dataStore).positions)
    }
    deletePosition(id: string) {
        const status = this.reducer('deletePosition', id)
        console.log(status)
        if (+status == 200) this._notifications.next('Position gelöscht!')

        this.dataStore.positions = this.dataStore.positions.filter(el => el.id != id)
        this._positions.next(Object.assign({}, this.dataStore).positions)
    }

    // get
    getSchiffe() {
        const source$ = this.getReducer('getSchiffe', {})
        source$.subscribe((data: any) => {
            this.dataStore.schiffe = data
            this._schiffe.next(Object.assign({}, this.dataStore).schiffe)
        })        
    }

    getPruefvermerke() {
        const source$ = this.getReducer('getPruefvermerke', {})
        source$.subscribe((data: any) => {
            this.dataStore.pruefvermerke = data
            this._pruefvermerke.next(Object.assign({}, this.dataStore).pruefvermerke)
        })
    }
    getZaehlerstandstypen() {
        const source$ = this.getReducer('getZaehlerstandstypen', {})
        source$.subscribe((data: any) => {
            this.dataStore.zaehlerstandstypen = data
            this._zaehlerstandstypen.next(Object.assign({}, this.dataStore).zaehlerstandstypen)
        })
    }
    getStreifeVonSchiff(id: string) {
        const source$ = this.getReducer('getStreifeVonSchiff', id)
        source$.subscribe((data: any) => {
            switch (data[0].status) {
                case StatusStreife.beendet:
                    this.dataStore.aktiveStreife = [{ id_schiff: id, zweck: '', status: 'In Vorbereitung', start: '', ende: '', kennung: '', besatzung: [] }]
                    break
                case StatusStreife.aktiv:
                    this.dataStore.aktiveStreife = data
                    break
            }
            this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
        })
    }
    getReparaturen(id : string) {
        const source$ = this.getReducer('getReparaturen', id)
        source$.subscribe((data: any) => {
            this.dataStore.reparaturen = data
            this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
        })
    }
    getPosition(id : string) {
        const source$ = this.getReducer('getPosition', id)
        source$.subscribe((data: any) => {
            this.dataStore.positions = data
            this._positions.next(Object.assign({}, this.dataStore).positions)
        })
    }
    getZaehlerstaende(id : string) {
        const source$ = this.getReducer('getZaehlerstaende', id)
        source$.subscribe((data: any) => {
            this.dataStore.zaehlerstaende = data
            this._zaehlerstaende.next(Object.assign({}, this.dataStore).zaehlerstaende)
        })
    }

    getSchiff(id: string) {
        this._schiffe.next(this.dataStore.schiffe.filter(el => el.id == id))
    }

    updateAktiveStreife(kennung: string, zweck: string) {
        this.dataStore.aktiveStreife[0].kennung = kennung
        this.dataStore.aktiveStreife[0].zweck = zweck
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }

    reset() {
        this.dataStore = { schiffe: [], lastPositions: [], aktiveStreife: [], besatzung: [], positions: [], reparaturen: [], zaehlerstaende: [], standorte: [], pruefvermerke: [], zaehlerstandstypen: []}
    }

    /* notifications */
    get notifications$(): Observable<string>
    {
        return this._notifications.asObservable();
    }
}
