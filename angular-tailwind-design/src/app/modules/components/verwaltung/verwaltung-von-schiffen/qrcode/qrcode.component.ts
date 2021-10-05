import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { VerwaltungService } from '../../../../../core/services/verwaltung.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.sass']
})
export class QRCodeComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<QRCodeComponent> | undefined;
  id: string = ''

  constructor(private formBuilder: FormBuilder, private modalService: ModalService<QRCodeComponent>, private verwaltungService: VerwaltungService) {}

  ngOnInit(): void {
   
    this.modalService.getData().then((data) => {
      this.id = data.data
    })
  }

  cancel() {
    this.modal?.close()
  }
}
