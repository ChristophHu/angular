import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Besatzung } from 'src/app/core/model/besatzung.model';
import { Checklistitem } from 'src/app/core/model/checklistitem.model';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';

@Component({
  selector: 'kontrolle',
  templateUrl: './kontrolle.component.html',
  styleUrls: ['./kontrolle.component.sass']
})
export class KontrolleComponent {

  control: boolean = false
  status: boolean = true
  
  besatzung: boolean = false
  checkliste: boolean = false
  unchecked!: Checklistitem[] | undefined

  kontrollForm: FormGroup

  constructor(private store: Store<RootStoreState>, private _formBuilder: FormBuilder,) {
    this.store.pipe(select(ShipSelectors.selectUncheckedChecklistItems)).subscribe(unchecked => {
      this.unchecked = unchecked?.filter(el => el.relevant == true)
      if (this.unchecked != undefined && this.unchecked?.length > 0) {
        this.checkliste = true
      } else {
        this.checkliste = false
      }
    })
    this.store.pipe(select(ShipSelectors.selectBesatzung)).subscribe((besatzung: Besatzung[] | undefined) => {
      if (besatzung == undefined || besatzung.length < 1) {
        this.besatzung = true
      } else {
        this.besatzung = false
      }
    })

    this.kontrollForm = this._formBuilder.group({
      // kontrolle: [false]
    })
  }
}
