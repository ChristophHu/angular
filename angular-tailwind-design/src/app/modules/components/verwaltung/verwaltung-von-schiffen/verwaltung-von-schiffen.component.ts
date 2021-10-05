import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Schiff } from 'src/app/core/models/schiff';
import { SchiffComponent } from './schiff/schiff.component';
import { VerwaltungService } from 'src/app/core/services/verwaltung.service';
import { QRCodeComponent } from './qrcode/qrcode.component';

@Component({
  selector: 'app-verwaltung-von-schiffen',
  templateUrl: './verwaltung-von-schiffen.component.html',
  styleUrls: ['./verwaltung-von-schiffen.component.sass']
})
export class VerwaltungVonSchiffenComponent implements OnInit, OnDestroy {
  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  // data
  schiffe: Observable<Schiff[]>
  subscription!: Subscription

  constructor(private modalService: ModalService<SchiffComponent>, private modalServiceQR: ModalService<QRCodeComponent>, private verwaltungService: VerwaltungService) {
    this.schiffe = this.verwaltungService.schiffe
  }

  ngOnInit(): void {
    // datatables
    this.dtOptions = { 
      "pagingType": 'full_numbers', 
      "pageLength": 10, 
      "responsive": true,
      "lengthMenu": [ 10, 15, 20, 50, 100, 500 ],
      // "paging"  : false,
      // "ordering": false,
      // "processing": true,
      // "info"    : false,
      "autoWidth": true,
      "retrieve": true,
      // data:this.dtUsers,
      // columns: [{title: 'User ID', data: 'id'},
      //       {title: 'First Name', data: 'firstName'},
      //       {title: 'Last Name', data: 'lastName' }],
      "language": {
        // "processing": "Procesando...",
        "search": "Suche:",
        "lengthMenu": "Anzeigen von _MENU_ Elementen pro Seite",
        "info": "Anzeige von _START_ bis _END_ von _TOTAL_ Elementen",
        // "infoEmpty": "Mostrando ningún elemento.",
        // "infoFiltered": "(filtrado _MAX_ elementos total)",
        // "infoPostFix": "",
        // "loadingRecords": "Cargando registros...",
        // "zeroRecords": "No se encontraron registros",
        "emptyTable": "Keine Datensätze vorhanden",
        "paginate": {
          "first": "Erste",
          "previous": "Vorherige",
          "next": "Nächste",
          "last": "Letzte"
        },
      }
    }

    // data
    this.subscription = this.schiffe.subscribe(data => {
      this.dtTrigger.next()
    })

    this.verwaltungService.getSchiffe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  async showModal(id?: string): Promise<void> {
    let schiff: Schiff | undefined
    const { SchiffComponent } = await import(
      './schiff/schiff.component'
    )

    if (id) {
      schiff = this.verwaltungService._dataStore.schiffe.find(el => el.id == id)

      this.modalService.open(SchiffComponent, {
        data: {
          title: 'Schiff bearbeiten',
          schiff
        }
      })
    } else {
      this.modalService.open(SchiffComponent, {
        data: {
          title: 'Schiff erstellen',
        }
      })
    }
  }

  async showQRCodeModal(id: string): Promise<void> {
    const { QRCodeComponent } = await import(
      './qrcode/qrcode.component'
    )
    this.modalServiceQR.open(QRCodeComponent, {
      data: {
        id
      }
    })
  }

  
}
