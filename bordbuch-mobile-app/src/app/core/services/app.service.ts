import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
import { debounceTime, delay, distinct, take } from 'rxjs/operators';

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

    // besatzung
    insertBesatzung(member: Besatzung) {
        if (member.id_streife) {
            // insert db
            this.httpClient.post(
                `http://192.168.178.220/polwsp/PolWSP.asmx/insertBesatzung`, 
                `id_streife=${member.id_streife}&persnr=${member.persnr}&funktion=${member.funktion}&an_bord=${member.an_bord}&von_bord=${member.von_bord}`, 
                this.httpOptions).subscribe((data: any) => {
                    member.id = data.id
                }, error => console.log(error)
            )
        } else {
            member.id = this.dataStore.aktiveStreife[0].besatzung.length.toString()
        }
        this.dataStore.aktiveStreife[0].besatzung.push(member)
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }
    updateBesatzung(member: Besatzung) {
        if (member.id_streife) {
            // insert db
            this.httpClient.post(
                `http://192.168.178.220/polwsp/PolWSP.asmx/updateBesatzung`, 
                `id=${member.id}&id_streife=${member.id_streife}&persnr=${member.persnr}&funktion=${member.funktion}&an_bord=${member.an_bord}&von_bord=${member.von_bord}`, 
                this.httpOptions).subscribe((data: any) => {
                    member.id = data.id
                }, error => console.log(error)
            )
        }
        this.dataStore.aktiveStreife[0].besatzung = this.dataStore.aktiveStreife[0].besatzung.filter(el => el.id != member.id)
        this.dataStore.aktiveStreife[0].besatzung.push(member)
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }
    deleteBesatzung(member: Besatzung) {
        if (member.id_streife) {
            // delete db
            this.httpClient.post(
                `http://192.168.178.220/polwsp/PolWSP.asmx/deleteBesatzung`,
                `id=${member.id}`,
                this.httpOptions).subscribe((data: any) => {
                   
                }, error => console.log(error)
            )
        }
        this.dataStore.aktiveStreife[0].besatzung = this.dataStore.aktiveStreife[0].besatzung.filter(el => el.persnr != member.persnr)
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }

    // Streife
    insertStreife(streife: Streife) {
        console.log(streife)
        // insert db
        this.httpClient.post(
            `http://192.168.178.220/polwsp/PolWSP.asmx/insertStreife`, 
            `id_schiff=${streife.id_schiff}&zweck=${streife.zweck}&status=${streife.status}&start=${streife.start}&kennung=${streife.kennung}`,
            this.httpOptions).subscribe((data: any) => {
                // startposition
                const position: Standort = { id_ship: streife.id_schiff, date: new Date().toISOString(), location: { latitude: 0, longitude: 0 }, description: `Beginn der ${streife.zweck}.`, id_streife: data.id }
                this.insertPosition(position)
                // besatzung
                this.dataStore.aktiveStreife[0].besatzung.forEach((member: Besatzung) => {
                    member.id_streife = data.id
                    this.insertBesatzung(member)
                })

            }, error => console.log(error)
        )

        this.dataStore.aktiveStreife[0] = streife
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
        console.log(this.dataStore.aktiveStreife)
    }

    updateStreife(streife: Streife) {
        // update db
        this.httpClient.post(
            `http://192.168.178.220/polwsp/PolWSP.asmx/updateStreife`, 
            `id=${streife.id}&id_schiff=${streife.id_schiff}&zweck=${streife.zweck}&status=${streife.status}&start=${streife.start}&ende=${streife.ende}&kennung=${streife.kennung}`,
            this.httpOptions).subscribe((data: any) => {
                // endposition
                const position: Standort = { id_ship: streife.id_schiff, date: new Date().toISOString(), location: { latitude: 0, longitude: 0 }, description: `Ende der ${streife.zweck}.`, id_streife: streife.id }
                this.insertPosition(position)
            }, error => console.log(error)
        )
        this.dataStore.aktiveStreife[0] = streife
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
        console.log(this.dataStore.aktiveStreife)
    }

    updateAktiveStreife(kennung: string, zweck: string) {
        this.dataStore.aktiveStreife[0].kennung = kennung
        this.dataStore.aktiveStreife[0].zweck = zweck
        this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)
    }

    // Position
    // getLastPositionsFromAllShips() {
    //     this.httpClient.get<Schiff[]>(`http://192.168.178.220/polwsp/PolWSP.asmx/getLastPositionsFromAllShips`).subscribe(data => {
    //         this.dataStore.lastPositions = data
    //         this._lastPositions.next(Object.assign({}, this.dataStore).lastPositions)
    //     }, error => console.log(error))
    // }

    // Prüfvermerk
    insertPruefvermerk(reparatur: Reparatur) {
        // update db
        this.httpClient.post(
            `http://192.168.178.220/polwsp/PolWSP.asmx/insertReparatur`, 
            `id_schiff=${reparatur.id_ship}&id_status=9f666873-4fc4-4f9b-8f98-f3fa182be7eb&date=${reparatur.date}&kategorie=${reparatur.kategorie}&item=${reparatur.item}&description=${reparatur.description}`, 
            this.httpOptions).subscribe((data: any) => {
                console.log(data)
                reparatur.id = data.id
            }, error => console.log(error)
        )
        // update datastore
        this.dataStore.reparaturen.push(reparatur)
        this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
    }

    // Zählerstand
    updateZaehlerstand(zaehlerstand: Zaehlerstand) {
        console.log(zaehlerstand)
        // update db
        this.httpClient.post(
            `http://192.168.178.220/polwsp/PolWSP.asmx/updateZaehlerstand`, 
            `id=${zaehlerstand.id}&id_schiff=${zaehlerstand.id_ship}&value=${zaehlerstand.value}&date=${zaehlerstand.date}`, 
            this.httpOptions).subscribe((data: any) => {
                console.log(data)
            }, error => console.log(error)
        )
        // update datastore
        this.dataStore.zaehlerstaende = this.dataStore.zaehlerstaende.filter(el => el.id != zaehlerstand.id)
        this.dataStore.zaehlerstaende.push(zaehlerstand)
        this._zaehlerstaende.next(Object.assign({}, this.dataStore).zaehlerstaende)
    }

    // Position
    insertPosition(position: Standort) {
        console.log(position)
        this.mapService.currentPosition
            .pipe(
                take(1)
            )
            .subscribe(data => {
                position.location = { latitude: data.latitude, longitude: data.longitude }
                this.httpClient.post(
                    `http://192.168.178.220/polwsp/PolWSP.asmx/insertPosition`,
                    `id_schiff=${position.id_ship}&id_streife=${position.id_streife}&latitude=${position.location.latitude}&longitude=${position.location.longitude}&date=${position.date}&beschreibung=${position.description}`,
                    this.httpOptions)
                        .pipe(
                            take(1)
                        )
                        .subscribe((data: any) => {
                            position.id = data.id
                        }, error => console.log(error)
                    )

                this.dataStore.positions.push(position)
                this._positions.next(Object.assign({}, this.dataStore).positions)
                console.log(this.dataStore.positions)
            })
        this.mapService.getCurrentPosition()
    }

    deletePosition(id: string) {
        this.httpClient.post(`http://192.168.178.220/polwsp/PolWSP.asmx/deletePosition`, `id=${id}`, this.httpOptions)
            .subscribe(data => {
                console.log(data)
            }, error => console.log(error)
        )
        
        this.dataStore.positions = this.dataStore.positions.filter(el => el.id != id)
        this._positions.next(Object.assign({}, this.dataStore).positions)
    }

    // Streife
    getStreifeVonSchiff(id_schiff: string) {
        this.httpClient.get<Streife[]>(`http://192.168.178.220/polwsp/PolWSP.asmx/getStreifeVonSchiff?id_schiff=${id_schiff}`).subscribe((data: Streife[]) => {
            switch (data[0].status) {
                case StatusStreife.beendet:
                    this.dataStore.aktiveStreife = [{ id_schiff: id_schiff, zweck: '', status: 'In Vorbereitung', start: '', ende: '', kennung: '', besatzung: [] }]
                    break
                case StatusStreife.aktiv:
                    this.dataStore.aktiveStreife = data
                    break
            }
            this._aktiveStreife.next(Object.assign({}, this.dataStore).aktiveStreife)           
        }, error => {
            switch (error.status) {
                case 404:
                    this.dataStore.aktiveStreife = [{ id_schiff: id_schiff, zweck: '', status: 'In Vorbereitung', start: '', ende: '', kennung: '', besatzung: [] }]
                    break;
                default:
                    console.log(error)
                    break;
            }
        })
    }
    
    getSchiff(id: string) {
        this._schiffe.next(this.dataStore.schiffe.filter(el => el.id == id))
    }

    getSchiffe() {
        this.httpClient.get<Schiff[]>('http://192.168.178.220/polwsp/PolWSP.asmx/getSchiffe').subscribe(data => {
          this.dataStore.schiffe = data
          this._schiffe.next(Object.assign({}, this.dataStore).schiffe)
        }, error => console.log(error))
    }

    // getLetzterStandort(id : string) {
    //     this.httpClient.get<Standort[]>(`http://192.168.178.220/polwsp/PolWSP.asmx/getPosition?id_schiff=${id}&all=false`).subscribe(data => {
    //       this.dataStore.standorte = data
    //       this._standorte.next(Object.assign({}, this.dataStore).standorte)
    //     }, error => console.log(error))
    // }

    getZaehlerstaende(id : string) {
        this.httpClient.get<Zaehlerstand[]>(`http://192.168.178.220/polwsp/PolWSP.asmx/getZaehlerstaende?id_schiff=${id}`).subscribe(data => {
          this.dataStore.zaehlerstaende = data
          this._zaehlerstaende.next(Object.assign({}, this.dataStore).zaehlerstaende)
        }, error => console.log(error))
    }

    getReparaturen(id : string) {
        this.httpClient.get<Reparatur[]>(`http://192.168.178.220/polwsp/PolWSP.asmx/getReparaturen?id_schiff=${id}&all=true`).subscribe(data => {
          this.dataStore.reparaturen = data
          this._reparaturen.next(Object.assign({}, this.dataStore).reparaturen)
        }, error => {
            console.log(error)
            this.dataStore.reparaturen = []
        })
    }

    getPosition(id : string) {
        this.httpClient.get<Standort[]>(`http://192.168.178.220/polwsp/PolWSP.asmx/getPosition?id_schiff=${id}&all=true`).subscribe(data => {
          this.dataStore.positions = data
          this._positions.next(Object.assign({}, this.dataStore).positions)
        }, error => {
            console.log(error)
        })
    }

    getPruefvermerke() {
        this.httpClient.get<Pruefvermerk[]>(`http://192.168.178.220/polwsp/PolWSP.asmx/getPruefvermerke`).subscribe(data => {
            this.dataStore.pruefvermerke = data
            this._pruefvermerke.next(Object.assign({}, this.dataStore).pruefvermerke)
        }, error => console.log(error))
    }
    getZaehlerstandstypen() {
        this.httpClient.get<Zaehlerstandstyp[]>(`http://192.168.178.220/polwsp/PolWSP.asmx/getZaehlerstandstypen`).subscribe(data => {
            this.dataStore.zaehlerstandstypen = data
            this._zaehlerstandstypen.next(Object.assign({}, this.dataStore).zaehlerstandstypen)
        }, error => console.log(error))
    }

    reset() {
        this.dataStore = { schiffe: [], lastPositions: [], aktiveStreife: [], besatzung: [], positions: [], reparaturen: [], zaehlerstaende: [], standorte: [], pruefvermerke: [], zaehlerstandstypen: []}
    }
}
