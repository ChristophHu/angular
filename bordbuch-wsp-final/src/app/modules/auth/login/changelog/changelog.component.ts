import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.sass']
})
export class ChangelogComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ChangelogComponent> | undefined;
  constructor(private modalService: ModalService<ChangelogComponent>) { }

  ngOnInit(): void {
    this.modalService.getData().then(() => {})
  }

  cancel() {
    this.modal?.close()
  }
}
