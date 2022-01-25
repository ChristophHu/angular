import { Component, OnInit } from '@angular/core';
import { Zaehlerstandstyp } from 'src/app/core/models/zaehlerstandstyp.model';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'app-controlling',
  templateUrl: './controlling.component.html',
  styleUrls: ['./controlling.component.sass']
})
export class ControllingComponent implements OnInit {
  data: any[] = []
  
  kat: string = 'betriebsstoffe'

  constructor(private _katFacade: KatFacade) { }

  ngOnInit(): void {
    this.loadBetriebsstoffe()
  }

  loadBetriebsstoffe() {
    this._katFacade.betriebsstoffe$.subscribe(data => {
      this.data = data
      this.kat = 'betriebsstoffe'
    })
  }
  loadDienststellen() {
    this._katFacade.dienststellen$.subscribe(data => {
      this.data = data
      this.kat = 'dienststellen'
    })
  }
  loadZaehlerstandsTypen() {
    this._katFacade.zaehlerstandstypen$.subscribe(data => {
      this.data = data
      this.kat = 'zaehlerstandstypen'
    })
  }


  download() {
    let str: string = this.jsonToCSV(this.data, true)
    let blob: Blob = new Blob([str], { type: 'text/csv; charset=utf-8' })

    let a = document.createElement('a')
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = 'data';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  jsonToCSV(data: any[], header: boolean = true): string {
    let csv_string: string = ''
    // header
    if (header) {
      csv_string += Object.keys(data[0]).toString() + '\r\n'
    }
    // data
    data.forEach(object => {
      let arr = Object.values(object)
      csv_string += arr.toString() + '\r\n'
    })
    return csv_string
  }

}
