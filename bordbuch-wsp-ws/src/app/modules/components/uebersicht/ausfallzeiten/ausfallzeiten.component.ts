import { Component, OnInit } from '@angular/core';
import { Instandsetzung } from 'src/app/core/models/Instandsetzung.model';
import { Klarmeldung } from 'src/app/core/models/klarmeldung.model';
import { Schiff } from 'src/app/core/models/schiff.model';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-ausfallzeiten',
  templateUrl: './ausfallzeiten.component.html',
  styleUrls: ['./ausfallzeiten.component.sass']
})
export class AusfallzeitenComponent implements OnInit {

  schiffe: any[] = [
    { name: 'WSP10 Wannsee', klar: 0, unklar: 0, inst: 0 }
  ]

  constructor(private _katFacade: KatFacade, private _specFacade: SpecFacade) { }

  ngOnInit(): void {
    // klar
    const then: Date = new Date('2022-01-01T00:00:00')
    const today: Date = new Date()
    var klar = Math.round((today.valueOf() - then.valueOf()) / (1000 * 3600))
    console.log(klar)

    this._katFacade.schiffe$.subscribe((schiffe: Schiff[]) => {
      if (schiffe) {
        schiffe.forEach(schiff => {
          this.schiffe.push(Object.assign({}, { name: schiff.name, klar: klar }))
        })
      }
    })

    // unklar
    this._specFacade.allKlarmeldungen$.subscribe((klarmeldungen: Klarmeldung[]) => {
      if (klarmeldungen) {
        klarmeldungen.forEach(klarmeldung => {
          if (klarmeldung.ende) {
            var klar = Math.round((new Date(klarmeldung.beginn.slice(0, -1)).valueOf() - new Date(klarmeldung.ende.slice(0, -1)).valueOf()) / (1000 * 3600))
          } else {
            var klar = Math.round((new Date(klarmeldung.beginn.slice(0, -1)).valueOf() - new Date().valueOf()) / (1000 * 3600))
          }
  
          let schiff = this.schiffe.find(schiff => schiff['name'] == klarmeldung.name)
          this.schiffe.filter(schiff => schiff['name'] != klarmeldung.name)
  
          schiff = Object.assign({}, schiff, { klar: schiff.klar - klar, unklar: schiff.unklar + klar })
  
          this.schiffe.push(schiff)        
        })
      }
    })

    // inst
    this._specFacade.allInstandsetzungen$.subscribe((instandsetzungen: Instandsetzung[]) => {
      if (instandsetzungen) {
        instandsetzungen.forEach(instandsetzung => {
          if (instandsetzung.ende) {
            var inst = Math.round((new Date(instandsetzung.beginn.slice(0, -1)).valueOf() - new Date(instandsetzung.ende.slice(0, -1)).valueOf()) / (1000 * 3600))
          } else {
            var inst = Math.round((new Date(instandsetzung.beginn.slice(0, -1)).valueOf() - new Date().valueOf()) / (1000 * 3600))
          }
  
          let schiff = this.schiffe.find(schiff => schiff['name'] == instandsetzung.name)
          this.schiffe.filter(schiff => schiff['name'] != instandsetzung.name)
  
          schiff = Object.assign({}, schiff, { klar: schiff.klar - inst, inst: schiff.unklar + inst })
  
          this.schiffe.push(schiff)        
        })
      }
    })

    console.log(this.schiffe)
  }

}
