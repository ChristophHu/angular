import { Component } from '@angular/core';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-betankungen-peilungen',
  templateUrl: './betankungen-peilungen.component.html',
  styleUrls: ['./betankungen-peilungen.component.sass']
})
export class BetankungenPeilungenComponent {
  tab: string = 'betankungen'
  showfilter: boolean = false

  constructor(private _specFacade: SpecFacade) { }

  toggle(tab: string) {
    this.tab = tab
  }

  reload() {
    this._specFacade.loadAllBetankungen({ startdate: '', enddate: '' })
    this._specFacade.loadAllPeilungen({ startdate: '', enddate: '' })
  }

}
