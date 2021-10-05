import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, take } from 'rxjs/operators';
import { Dienststelle } from '../models/dienststelle';
import { Pruefvermerk } from '../models/pruefvermerk';
import { Pruefvermerkskategorie } from '../models/Pruefvermerkskategorie';
import { Schiff } from '../models/schiff';

@Injectable({
  providedIn: 'root'
})

export class VerwaltungService {
    // data dienststellen
    private _dienststellen = new BehaviorSubject<Dienststelle[]>([])
    readonly dienststellen = this._dienststellen.asObservable()

    // data pruefvermerke
    private _pruefvermerke = new BehaviorSubject<Pruefvermerk[]>([])
    readonly pruefvermerke = this._pruefvermerke.asObservable()

    // data pruefvermerke
    private _pruefvermerkskategorien = new BehaviorSubject<Pruefvermerkskategorie[]>([])
    readonly pruefvermerkskategorien = this._pruefvermerkskategorien.asObservable()

    // data schiffe
    private _schiffe = new BehaviorSubject<Schiff[]>([])
    readonly schiffe = this._schiffe.asObservable()

    // private _schiff = new BehaviorSubject<Schiff>()
    // readonly schiff = this._schiffe.asObservable()

    // dataStore
    private dataStore: { dienststellen: Dienststelle[], pruefvermerke: Pruefvermerk[], pruefvermerkskategorien: Pruefvermerkskategorie[], schiffe: Schiff[] } = { dienststellen: [], pruefvermerke: [], pruefvermerkskategorien: [], schiffe: [] }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }

    constructor(private httpClient: HttpClient) { }

    get _dataStore() {
        return this.dataStore
    }

    // public dateToLocalISOString(dt: Date): string {
    //     dt.setHours(new Date().getHours()+2)
    //     return dt.toISOString().substring(0,16)
    // }

    reducer(action: string, data: any): Observable<any> {
        console.info(`reducer | action: '${action}', data: ${data}`)
        const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
        let param = ``
        switch (action) {

            // dienststelle
            case 'insertDienststelle': {
                param = `bezeichnung=${data.bezeichnung}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&strasse=${data.adresse.strasse}&hausnummer=${data.adresse.hausnummer}&postleitzahl=${data.adresse.postleitzahl}&ort=${data.adresse.ort}&mailadresse=${data.mailadresse}`
                break
            }
            case 'updateDienststelle': {
                param = `id=${data.id}&bezeichnung=${data.bezeichnung}&latitude=${data.location.latitude}&longitude=${data.location.longitude}&strasse=${data.adresse.strasse}&hausnummer=${data.adresse.hausnummer}&postleitzahl=${data.adresse.postleitzahl}&ort=${data.adresse.ort}&mailadresse=${data.mailadresse}`
                break
            }
            case 'deleteDienststelle': {
                param = `id=${data}`
                break
            }

            // pruefvermerke
            case 'insertPruefvermerk': {
                param = `id_kategorie=${data.kategorie}&bezeichnung=${data.item}&beschreibung=${data.description}`
                break
            }
            case 'updatePruefvermerk': {
                param = `id=${data.id}&id_kategorie=${data.kategorie}&bezeichnung=${data.item}&beschreibung=${data.description}`
                break
            }
            case 'deletePruefvermerk': {
                param = `id=${data}`
                break
            }

            // pruefvermerkskategorien
            case 'insertKatPruefvermerk':
                param = `kategorie=${data.bezeichnung}`
                break
            case 'updateKatPruefvermerk':
                param = `id=${data.id}&kategorie=${data.bezeichnung}`
                break
            case 'deletePruefvermerkKat':
                param = `id=${data}`
                break

            // schiff
            case 'insertSchiff':
                console.log(data)
                param = `id_dienststelle=${data.dienststelle}&name=${data.name}&marke=${data.marke}&typ=${data.typ}&identifikationsnummer=${data.identifikationsnummer}`
                break
            case 'updateSchiff':
                param = `id=${data.id}&id_dienststelle=${data.dienststelle}&name=${data.name}&marke=${data.marke}&typ=${data.typ}&identifikationsnummer=${data.identifikationsnummer}`
                break
            case 'deleteSchiff':
                param = `id=${data}`
                break

            default:
                console.error('There is no action to switch.')
                break
        }
        
        return this.httpClient.post(baseURL, param, this.httpOptions)
            .pipe(retry(2), take(1))
    }
    getReducer(action: string, data: any): any {
        console.info(`getreducer | action: '${action}', data: ${data}`)
        const baseURL = `http://192.168.178.220/polwsp/PolWSP.asmx/${action}`
        let param = ``
        switch (action) {
            case 'getDienststellen':
            case 'getPruefvermerke':
            case 'getPruefvermerksKategorien':
            case 'getSchiffe':
                param = ``
                break

            default:
                break
        }

        return this.httpClient.get(baseURL + param).pipe(retry(2),take(1))
    }
        
    // dienststellen
    getDienststellen() {
        const source$ = this.getReducer('getDienststellen', {})
        source$.subscribe((data: any) => {
            this.dataStore.dienststellen = data
            this._dienststellen.next(Object.assign({}, this.dataStore).dienststellen)
        })
    }
    createDienststelle(dienststelle: Dienststelle) {
        this.reducer('insertDienststelle', dienststelle).subscribe(data => {
            dienststelle.id = data.id
            this.dataStore.dienststellen.push(dienststelle)
            this._dienststellen.next(Object.assign({}, this.dataStore).dienststellen)
        })
    }
    updateDienststelle(dienststelle: Dienststelle) {
        this.reducer('updateDienststelle', dienststelle).subscribe(data => {
            dienststelle.id = data.id // Fehler?
            this.dataStore.dienststellen = this.dataStore.dienststellen.filter(el => el.id != dienststelle.id)
            this.dataStore.dienststellen.push(dienststelle)
            this._dienststellen.next(Object.assign({}, this.dataStore).dienststellen)
        })
    }
    deleteDienststelle(id: string) {
        this.reducer('deleteDienststelle', id).subscribe(status => {
            if (status == '200') {}
        })

        this.dataStore.dienststellen = this.dataStore.dienststellen.filter(el => el.id != id)
        this._dienststellen.next(Object.assign({}, this.dataStore).dienststellen)
    }

    // pruefvermerke
    getPruefvermerke() {
        const source$ = this.getReducer('getPruefvermerke', {})
        source$.subscribe((data: any) => {
            this.dataStore.pruefvermerke = data
            this._pruefvermerke.next(Object.assign({}, this.dataStore).pruefvermerke)
        })
    }
    createPruefvermerk(pruefvermerk: Pruefvermerk) {
        this.reducer('insertPruefvermerk', pruefvermerk).subscribe(data => {
            pruefvermerk.id = data.id
            this.dataStore.pruefvermerke.push(pruefvermerk)
            this._pruefvermerke.next(Object.assign({}, this.dataStore).pruefvermerke)
        })
    }
    updatePruefvermerk(pruefvermerk: Pruefvermerk) {
        this.reducer('updatePruefvermerk', pruefvermerk).subscribe(status => {
            if (status == '200') {}
        })

        this.dataStore.pruefvermerke = this.dataStore.pruefvermerke.filter(el => el.id != pruefvermerk.id)
        this.dataStore.pruefvermerke.push(pruefvermerk)
        this._pruefvermerke.next(Object.assign({}, this.dataStore).pruefvermerke)
    }
    deletePruefvermerk(id: string) {
        this.reducer('deletePruefvermerk', id).subscribe(status => {
            if (status == '200') {}
        })

        this.dataStore.pruefvermerke = this.dataStore.pruefvermerke.filter(el => el.id != id)
        this._pruefvermerke.next(Object.assign({}, this.dataStore).pruefvermerke)
    }

    // pruefvermerkskategorien
    getPruefvermerksKategorien() {
        const source$ = this.getReducer('getPruefvermerksKategorien', {})
        source$.subscribe((data: any) => {
            this.dataStore.pruefvermerkskategorien = data
            this._pruefvermerkskategorien.next(Object.assign({}, this.dataStore).pruefvermerkskategorien)
        })
    }
    createKatPruefvermerk(pruefvermerkskategorie: Pruefvermerkskategorie) {
        this.reducer('insertKatPruefvermerk', pruefvermerkskategorie).subscribe(data => {
            pruefvermerkskategorie.id = data.id
            this.dataStore.pruefvermerkskategorien.push(pruefvermerkskategorie)
            this._pruefvermerkskategorien.next(Object.assign({}, this.dataStore).pruefvermerkskategorien)
        })
    }
    updateKatPruefvermerk(pruefvermerkskategorie: Pruefvermerkskategorie) {
        this.reducer('updateKatPruefvermerk', pruefvermerkskategorie).subscribe(status => {
            if (status == '200') {}
        })

        this.dataStore.pruefvermerkskategorien = this.dataStore.pruefvermerkskategorien.filter(el => el.id != pruefvermerkskategorie.id)
        this.dataStore.pruefvermerkskategorien.push(pruefvermerkskategorie)
        this._pruefvermerkskategorien.next(Object.assign({}, this.dataStore).pruefvermerkskategorien)
    }
    deleteKatPruefvermerk(id: string) {
        this.reducer('deletePruefvermerkKat', id).subscribe(status => {
            if (status == '200') {}
        })

        this.dataStore.pruefvermerkskategorien = this.dataStore.pruefvermerkskategorien.filter(el => el.id != id)
        this._pruefvermerkskategorien.next(Object.assign({}, this.dataStore).pruefvermerkskategorien)
    }

    // schiffe
    getSchiffe() {
        const source$ = this.getReducer('getSchiffe', {})
        source$.subscribe((data: any) => {
            this.dataStore.schiffe = data
            this._schiffe.next(Object.assign({}, this.dataStore).schiffe)
        })
    }
    createSchiff(schiff: Schiff) {
        this.reducer('insertSchiff', schiff).subscribe(data => {
            schiff.id = data.id
            this.dataStore.schiffe.push(schiff)
            this._schiffe.next(Object.assign({}, this.dataStore).schiffe)
        })
    }
    updateSchiff(schiff: Schiff) {
        this.reducer('updateSchiff', schiff).subscribe(status => {
            if (status == '200') {
                this.dataStore.dienststellen = this.dataStore.dienststellen.filter(el => el.id != schiff.id)
                this.dataStore.schiffe.push(schiff)
                this._schiffe.next(Object.assign({}, this.dataStore).schiffe)
            }
        })
    }
    deleteSchiff(id: string) {
        this.reducer('deleteSchiff', id).subscribe(status => {
            if (status == '200') {
                console.log(status)
            }
        })

        this.dataStore.schiffe = this.dataStore.schiffe.filter(el => el.id != id)
        this._schiffe.next(Object.assign({}, this.dataStore).schiffe)
    }

}
