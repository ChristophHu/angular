import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { AusgewaehlteStreifenModalComponent } from './ausgewaehlte-streifen-modal/ausgewaehlte-streifen-modal.component';

@Component({
  selector: 'app-ausgewaehlte-streifen',
  templateUrl: './ausgewaehlte-streifen.component.html',
  styleUrls: ['./ausgewaehlte-streifen.component.sass']
})
export class AusgewaehlteStreifenComponent implements OnInit {

  filter: string = 'alle-streifen'

  streifen: any[] = [{"id":"eca57138-93c8-40fe-9ff2-36e9ca08038a","id_schiff":"1","zweck":"Streifenfahrt","status":"beendet","besatzung":[],"start":"2021-09-16 12:15:22.000","ende":"2021-09-16 12:15:29.000","kennung":"159","schiffsname":"BOOT 1A"},{"id":"b25c91ae-de4a-4426-803e-01b916deb634","id_schiff":"2","zweck":"Streifenfahrt","status":"beendet","besatzung":[],"start":"2021-09-16 12:19:06.000","ende":"2021-09-16 12:20:44.000","kennung":"222","schiffsname":"BOOT 2A"},{"id":"1651eb37-0292-4559-a08a-86350fff4fdf","id_schiff":"3","zweck":"Streifenfahrt","status":"beendet","besatzung":[],"start":"2021-09-16 12:18:39.000","ende":"2021-09-16 12:18:41.000","kennung":"333","schiffsname":"BOOT 3A"},{"id":"2339e703-85b8-4930-af6b-14351fe66291","id_schiff":"1","zweck":"Streifenfahrt","status":"beendet","besatzung":[],"start":"2021-09-20 13:09:10.000","ende":"2021-09-20 13:09:12.000","kennung":"N1","schiffsname":"BOOT 1A"},{"id":"eb5da843-4c6b-4a0c-a5a7-160b2d4ea2ec","id_schiff":"2","zweck":"Streifenfahrt","status":"aktiv","besatzung":[],"start":"2021-09-20 13:40:51.000","ende":"","kennung":"N2","schiffsname":"BOOT 2A"},{"id":"bd686f43-8913-4def-b7be-d45a7da3a483","id_schiff":"1","zweck":"Streifenfahrt","status":"beendet","besatzung":[],"start":"2021-09-20 13:13:43.000","ende":"2021-09-20 13:15:21.000","kennung":"N3","schiffsname":"BOOT 1A"},{"id":"479e0f30-c26e-47ed-8c6a-eb22169a6092","id_schiff":"1","zweck":"Streifenfahrt","status":"beendet","besatzung":[{"id":"3e2627ea-b5b0-4498-896c-6b30b5c347b4","id_streife":"479e0f30-c26e-47ed-8c6a-eb22169a6092","persnr":"147","funktion":"StF","an_bord":"","von_bord":"2021-09-20 16:01:00.000"},{"id":"f85adb7d-e1e1-40e8-8755-71aad8b04822","id_streife":"479e0f30-c26e-47ed-8c6a-eb22169a6092","persnr":"123","funktion":"STBB","an_bord":"","von_bord":"2021-09-20 16:01:00.000"}],"start":"2021-09-20 13:52:05.000","ende":"2021-09-20 14:15:54.000","kennung":"Nix1","schiffsname":"BOOT 1A"},{"id":"d32ff890-925d-4cc0-b6e0-e4b4e54f61cd","id_schiff":"1","zweck":"Streifenfahrt","status":"beendet","besatzung":[{"id":"ca29d95d-d3ef-495f-a86d-a16b7798c445","id_streife":"d32ff890-925d-4cc0-b6e0-e4b4e54f61cd","persnr":"12345678","funktion":"Streifenführer","an_bord":"2021-11-29 07:49:00.000","von_bord":""}],"start":"2021-11-18 09:50:09.000","ende":"2021-11-18 10:02:08.000","kennung":"Nixe 1","schiffsname":"BOOT 1A"},{"id":"a93a6f01-add0-47d3-9c26-255c9c07701d","id_schiff":"1","zweck":"Überführungsfahrt","status":"beendet","besatzung":[{"id":"fbfc926c-660a-4d17-bdd5-17b4d2c608b7","id_streife":"a93a6f01-add0-47d3-9c26-255c9c07701d","persnr":"12345678","funktion":"Streifenführer","an_bord":"2021-11-17 20:48:00.000","von_bord":""}],"start":"2021-11-18 07:03:36.000","ende":"2021-11-18 09:17:20.000","kennung":"Nixe 11","schiffsname":"BOOT 1A"},{"id":"3f7bc091-9f3d-428b-bf57-429f7dba25da","id_schiff":"1","zweck":"Raumschutz","status":"aktiv","besatzung":[{"id":"7357fd71-def5-4dde-b428-31804764e695","id_streife":"3f7bc091-9f3d-428b-bf57-429f7dba25da","persnr":"24225120","funktion":"Streifenführer","an_bord":"","von_bord":""}],"start":"2021-12-16 08:28:34.000","ende":"","kennung":"Nixe 300","schiffsname":"BOOT 1A"},{"id":"973b5468-5112-49a7-b4f5-cf55347160b2","id_schiff":"16a95549-7665-4256-818e-c5e8bca35216","zweck":"Streifenfahrt","status":"aktiv","besatzung":[],"start":"2021-10-11 13:23:52.000","ende":"","kennung":"Nixon 23","schiffsname":"Neuestestschiff"}]

  // datatables
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject()

  constructor(private _modalService: ModalService<AusgewaehlteStreifenModalComponent>) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers', 
      pageLength: 10, 
      responsive: true, 
      // "paging"  : false,
      // "ordering": false,
      // "processing": true,
      // "info"    : false,
      "autoWidth": true,
      // "retrieve": true,
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
    // this._betankungService.getBetankungen()
  }

  toggle(value: string) {
    this.filter = value
  }

  async showModal(id?: string): Promise<void> {
    console.log(id)
    // let zweck: Kat | undefined
    const { AusgewaehlteStreifenModalComponent } = await import(
      './ausgewaehlte-streifen-modal/ausgewaehlte-streifen-modal.component'
    )
    if (id) {
      // betankung = this._betankungService._dataStore.betankungen.find(el => el.id == id)
      // console.log(betankung)
      this._modalService.open(AusgewaehlteStreifenModalComponent, {
        data: {
          title: 'Streife bearbeiten'
        }
      })
    } else {
      this._modalService.open(AusgewaehlteStreifenModalComponent, {
        data: {
          title: 'Streife hinzufügen'
        }
      })
    }
  }

}
