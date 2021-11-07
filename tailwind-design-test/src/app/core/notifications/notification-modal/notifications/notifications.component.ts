import { Component, OnInit, ViewChild } from '@angular/core';
import { Animations } from 'src/app/shared/animations';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass'],
  animations   : Animations
})
export class NotificationsComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<NotificationsComponent> | undefined;
  show:boolean = false

  constructor(private modalService: ModalService<NotificationsComponent>) { }

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      // this.id = data.data.id
    })
  }

  cancel() {
    this.modal?.close()
  }
}
