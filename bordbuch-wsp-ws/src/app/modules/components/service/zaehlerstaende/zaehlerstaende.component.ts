import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
import { environment } from 'src/environments/environment';
import { ZaehlerstandModalComponent } from './zaehlerstand-modal/zaehlerstand-modal.component';

@Component({
  selector: 'app-zaehlerstaende',
  templateUrl: './zaehlerstaende.component.html',
  styleUrls: ['./zaehlerstaende.component.sass']
})
export class ZaehlerstaendeComponent implements OnInit {
   // datatables
   dtOptions: DataTables.Settings = {}
   dtTrigger: Subject<any> = new Subject()

   zaehlerstaende$!: Observable<Zaehlerstand[]>

   constructor(private _modalService: ModalService<ZaehlerstandModalComponent>, private _specFacade: SpecFacade) {
      this.zaehlerstaende$ = this._specFacade.allZaehlerstaende$
      this._specFacade.allZaehlerstaende$.subscribe(data => console.log(data))
   }

   ngOnInit(): void {
      this.dtOptions = {
         pagingType: 'full_numbers', 
         pageLength: 10,     // Anzahl von Elementen pro Seite
         paging    : true,   // (default: true)
         responsive: true,   // (default: true)
         ordering  : true,   // Sortierung (default: true)
         processing: true,   // (default: true)
         autoWidth : true,   // (default: true)
         retrieve  : true,   // (default: true)
         info      : false,  // Anzahl von Elementen (default: true)
         language  : {
           "url": environment.base_href + "assets/data/datatables.german.json" // "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
         }
      }
   }

   async showModal(zaehlerstand?: Zaehlerstand): Promise<void> {
      const { ZaehlerstandModalComponent } = await import(
         './zaehlerstand-modal/zaehlerstand-modal.component'
      )
      if (zaehlerstand) {
         this._modalService.open(ZaehlerstandModalComponent, {
            data: {
               title: 'Zählerstand bearbeiten',
               zaehlerstand
            }
         })
      } else {
         this._modalService.open(ZaehlerstandModalComponent, {
            data: {
               title: 'Zählerstand hinzufügen',
               date: new Date().toISOString()
            }
         })
      }
   }

   delete(id: string) {
      this._specFacade.deleteZaehlerstand(id)
   }
}
