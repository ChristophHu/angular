import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { PositionLog } from '../../../../core/models/punktsetzen'
import { MapService } from '../../../../core/services/map.service'

@Component({
  selector: 'app-punkt-setzen',
  templateUrl: './punkt-setzen.component.html',
  styleUrls: ['./punkt-setzen.component.sass']
})
export class PunktSetzenComponent implements OnInit {
  title: string = ''
  id_ship: number = 1
  id_entry: number = 0
  date: string = ''
  isEditable : boolean = true

  @ViewChild('modalComponent') modal: | ModalComponent<PunktSetzenComponent> | undefined;
  private data: any

  punktsetzenForm: FormGroup

  constructor( private mapService: MapService, private formBuilder: FormBuilder, private modalService: ModalService<PunktSetzenComponent>) {
    this.punktsetzenForm = this.formBuilder.group({
      id_ship: [this.id_ship],
      date: [this.mapService.dateToLocalISOString(new Date)],
      description: [''],
      location: this.formBuilder.group({
        latitude: [],
        longitude: []
      }),
    })
  }

  ngOnInit(): void {
    // evtl. mapService nutzen
    this.modalService.getData().then((data) => {
      this.title = data.data.title
      this.id_ship = data.data.id_ship
      console.log(data.data.id_ship)
      this.id_entry = data.data.id_entry
      if (this.id_entry) {
        // this.mapService.getPositionLogEntry(this.id_entry).subscribe(data => {
        //   this.punktsetzenForm.patchValue(data)
        // })
      }
      else {
        this.isEditable = false
        this.punktsetzenForm.patchValue({id_ship: this.id_ship})
        this.getLocalPosition()
      }
    })
  }

  get f() {
		return this.punktsetzenForm.controls
	}

  cancel() {
    this.modal?.close()
  }

  create() {
    // console.log(this.punktsetzenForm.value)
    // this.mapService.createPositionLogEntry(this.punktsetzenForm.value)
    // this.modal?.close()
  }

  update() {
    // console.log(this.punktsetzenForm.value)
    // console.log(this.id_entry)
    // this.mapService.updatePositionLogEntry(this.id_entry, this.punktsetzenForm.value)
    // this.modal?.close()
  }

  async delete(): Promise<void> {
    // this.mapService.deletePositionLogEntry(this.id_entry)
    // await this.modal?.close()
  }

  getLocalPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.punktsetzenForm.patchValue({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })
      })
    }
  }
}
