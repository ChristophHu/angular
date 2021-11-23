import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppService } from 'src/app/core/services/app.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ShipState } from 'src/app/store/ship-store';

@Component({
  selector: 'app-peilung-modal',
  templateUrl: './peilung-modal.component.html',
  styleUrls: ['./peilung-modal.component.sass']
})
export class PeilungModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<PeilungModalComponent> | undefined;
  title: string = ''

  constructor(private _formBuilder: FormBuilder, private store: Store<ShipState.State>, private modalService: ModalService<PeilungModalComponent>, private appService: AppService) { }

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      this.title = data.data.title      
      console.log(data)
    })
  }

  cancel() {
    this.modal?.close()
  }

}
