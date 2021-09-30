import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Reparatur } from '../models/reparatur';
import { Schiff } from '../models/schiff';
import { Streife } from '../models/streife';
import { Standort } from '../models/standort';
import { Zaehlerstand } from '../models/zaehlerstand';
import { MapService } from './map2.service';
import { Besatzung } from '../models/besatzung';
import { Pruefvermerk } from '../models/pruefvermerk';
import { Zaehlerstandstyp } from '../models/zaehlerstandstyp';
import { StatusStreife } from '../models/statusstreife';
import { Position } from '../models/position';
import { debounceTime, delay, distinct, retry, take } from 'rxjs/operators';
import { NotificationService } from './notification.service';
import { LocationService } from './location.service';
import { Betankung } from '../models/betankung';

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

    private _betankung = new BehaviorSubject<Betankung[]>([])
    readonly betankung = this._betankung.asObservable()

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
        betankung: Betankung[],
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
        betankung: [],
        positions: [],

        reparaturen: [],
        zaehlerstaende: [], 
        standorte: [],

        pruefvermerke: [],
        zaehlerstandstypen: []
    }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }

    constructor(private httpClient: HttpClient, private locationService: LocationService, private notificationService: NotificationService) { }

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

            // betankung
            case 'insertBetankung': {
                param = `id_schiff=${data.id_schiff}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfilllingquantity}`
                break
            }
            case 'updateBesatzung': {
                param = `id=${data.id}&id_schiff=${data.id_schiff}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&date=${data.date}&ort=${data.ort}&fuel=${data.fuel}&fuelfilllingquantity=${data.fuelfilllingquantity}`
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
            .pipe(retry(2), take(1))
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

            case 'getBetankungen':
                param = `?id_schiff=${data}&all=false`
                break

            default:
                break
        }

        return this.httpClient.get(baseURL + param).pipe(retry(2),take(1))
    }

    // streife
    insertStreife(streife: Streife) {
        // streife.id = this.reducer('insertStreife', streife)
        this.reducer('insertStreife', streife).subscribe(data => {
            // startposition
            streife.id = data.id
            const position: Standort = { id_ship: streife.id_schiff, date: new Date().toISOString(), location: { latitude: 0, longitude: 0 }, description: `Beginn der ${streife.zweck}.`, id_streife: data.id }
            this.insertPosition(position)
            // besatzung
            this.dataStore.aktiveStreife[0].besatzung.forEach((member: Besatzung) => {
                member.id_streife = data.id
                this.insertBesatzung(member)
            })
            this.dataStore.aktiveStreife[0] = streife
            this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
        })
    }
    updateStreife(streife: Streife) {
        this.reducer('updateStreife', streife).subscribe(status => {
            if (status == '200') {
                const position: Standort = { id_ship: streife.id_schiff, date: new Date().toISOString(), location: { latitude: 0, longitude: 0 }, description: `Update der ${streife.zweck}.`, id_streife: streife.id }
                this.insertPosition(position)
            }
        })
    }

    // besatzung
    insertBesatzung(member: Besatzung) {
        if (member.id_streife) {
            this.reducer('insertBesatzung', member).subscribe(data => {
                member.id = data.id
            })
        } else {
            member.id = this.dataStore.aktiveStreife[0].besatzung.length.toString()
        }
        this.dataStore.aktiveStreife[0].besatzung.push(member)
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }
    updateBesatzung(member: Besatzung) {
        if (member.id_streife) {
            this.reducer('updateBesatzung', member).subscribe(data => {
                member.id = data.id
                this.dataStore.aktiveStreife[0].besatzung = this.dataStore.aktiveStreife[0].besatzung.filter(el => el.id != member.id)
                this.dataStore.aktiveStreife[0].besatzung.push(member)
                this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
            })
        }
    }
    deleteBesatzung(member: Besatzung) {
        if (member.id_streife) {
            this.reducer('deleteBesatzung', member).subscribe(status => {
                if (status == '200') {}
            })

        }
        this.dataStore.aktiveStreife[0].besatzung = this.dataStore.aktiveStreife[0].besatzung.filter(el => el.persnr != member.persnr)
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }

    // betankung
    insertBetankung(betankung: Betankung) {
        this.reducer('insertBetankung', betankung).subscribe(data => {
            betankung.id = data.id
            this.dataStore.betankung.push(betankung)
            this._betankung.next(Object.assign({}, this.dataStore).betankung)
        })
    }
    updateBetankung(betankung: Betankung) {
        this.reducer('updateBetankung', betankung).subscribe(data => {
            betankung.id = data.id
            this.dataStore.betankung = this.dataStore.betankung.filter(el => el.id != betankung.id)
            this.dataStore.betankung.push(betankung)
            this._betankung.next(Object.assign({}, this.dataStore).betankung)
        })
    }
    deleteBetankung(betankung: Betankung) {
        this.reducer('deleteBetankung', betankung).subscribe(status => {
            if (status == '200') {}
        })

        this.dataStore.betankung = this.dataStore.betankung.filter(el => el.id != betankung.id)
        this._betankung.next(Object.assign({}, this.dataStore).betankung)
    }

    // pruefvermerk
    insertPruefvermerk(reparatur: Reparatur) {
        this.reducer('insertReparatur', reparatur).subscribe(data => {
            reparatur.id = data.id
            this.dataStore.reparaturen.push(reparatur)
            this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
        })
    }

    // zaehlerstand
    updateZaehlerstand(zaehlerstand: Zaehlerstand) {
        const status = this.reducer('updateZaehlerstand', zaehlerstand).subscribe(status => {
            if (status == '200') {}
        })
        this.dataStore.zaehlerstaende = this.dataStore.zaehlerstaende.filter(el => el.id != zaehlerstand.id)
        this.dataStore.zaehlerstaende.push(zaehlerstand)
        this._zaehlerstaende.next(Object.assign({}, this.dataStore).zaehlerstaende)
    }

    // poition/standort
    insertPosition(position: Standort) {
        this.locationService.getCurrentPosition().then(data => {
            position.location = { latitude: (data.latitude+(Math.random()/25)), longitude: (data.longitude+(Math.random()/25)) }
            // position.id = this.reducer('insertPosition', position)
            this.reducer('insertPosition', position).subscribe(data => {
                position.id = data.id
                this.dataStore.positions.push(position)
                this._positions.next(Object.assign({}, this.dataStore).positions)
                this.notificationService.create('Position gesetzt!')
            })
        }, error => console.error(error))    
    }
    updatePosition(position: Standort) {
        this.reducer('updatePosition', position).subscribe(status => {
            if (status == '200') {
                this.dataStore.positions = this.dataStore.positions.filter(el => el.id != position.id)
                this.dataStore.positions.push(position)
                this._positions.next(Object.assign({}, this.dataStore).positions)
                this.notificationService.create('Position aktualisiert!')
            }
        })
    }
    deletePosition(id: string) {
        this.reducer('deletePosition', id).subscribe(status => {
            if (status == '200') {
                this.dataStore.positions = this.dataStore.positions.filter(el => el.id != id)
                this._positions.next(Object.assign({}, this.dataStore).positions)
                this.notificationService.create('Position gelöscht!')
            }
        })
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
    getBetankungen(id : string) {
        const source$ = this.getReducer('getBetankungen', id)
        source$.subscribe((data: any) => {
            this.dataStore.betankung = data
            this._betankung.next(Object.assign({}, this.dataStore).betankung)
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
        this.dataStore = { schiffe: [], lastPositions: [], aktiveStreife: [], besatzung: [], betankung: [], positions: [], reparaturen: [], zaehlerstaende: [], standorte: [], pruefvermerke: [], zaehlerstandstypen: []}
    }
}
