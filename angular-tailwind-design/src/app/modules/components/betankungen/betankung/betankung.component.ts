import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component'
import { ModalService } from 'src/app/shared/components/modal/modal.service'
import { Betankung } from '../../../../core/models/betankung'
import { BetankungService } from '../../../../core/services/betankung.service'

@Component({
  selector: 'app-betankung',
  templateUrl: './betankung.component.html',
  styleUrls: ['./betankung.component.sass']
})
export class BetankungComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<BetankungComponent> | undefined;
  title: string = ''

  betankung!: Betankung
  tankzettelForm: FormGroup

  constructor(private formBuilder: FormBuilder, private modalService: ModalService<BetankungComponent>, private betankungService: BetankungService) {
    this.tankzettelForm = this.formBuilder.group({
      id: [],
      id_ship: [],
      date: [],
      ort: [],
      location: this.formBuilder.group({
        longitude: [0],
        latitude: [0]
      }),
      fuel: [],
      fuelfillingquantity: [0]
    })
  }

  ngOnInit(): void {
    this.modalService.getData().then((data: any) => {
      this.title = data.data.title
      this.tankzettelForm.patchValue(data.data.betankung)
    })
  }

  create() {
    this.betankungService.createBetankung(this.tankzettelForm.value)
    this.modal?.close()
  }

  update() {
    this.betankungService.updateBetankung(this.tankzettelForm.value)
    this.modal?.close()
  }

  delete() {
    this.betankungService.deleteBetankung(this.tankzettelForm.value.id)
    this.modal?.close()
  }

  cancel() {
    this.modal?.close()
  }
}
