import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { Schiff } from 'src/app/core/models/schiff.model';
import { KatFacade } from 'src/app/store/kat-store/kat.facade';

@Component({
  selector: 'tab-schiffe',
  templateUrl: './tab-schiffe.component.html',
  styleUrls: ['./tab-schiffe.component.sass']
})
export class TabSchiffeComponent {
  @Output() checked = new EventEmitter()
  @Output() hover = new EventEmitter()
  
  public allCheck: boolean = true

  schiffe: any[] = []
  
  constructor(private _katFacade: KatFacade) {
    this._katFacade.schiffe$.subscribe(schiffe => {
      schiffe.forEach(schiff => {
        this.schiffe.push(Object.assign({}, schiff, { checked: true }))
      })
    })
  }

  change(id?: string) {
    if (id) {
      this.schiffe.find(el => {
        if (el.id == id) {
          el.checked = !el.checked
        }
      })
    }
    const checked_schiffe = this.schiffe.filter(el => el.checked == true)
		this.checked.emit(checked_schiffe)
  }

  clickShip(id: string) {
    console.log(`click: ${id}`)
  }

  hoverShip(id: string) {
    console.log(`hover: ${id}`)
		this.hover.emit(id);
  }

  toggleCheck() {
    this.allCheck = !this.allCheck
    this.schiffe.forEach(schiff => {
      schiff.checked = this.allCheck
    })
    this.change()
  }
}
