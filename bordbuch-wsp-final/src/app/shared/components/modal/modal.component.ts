import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent<T> {
  display = true;

  constructor(private modalService: ModalService<T>) { }

  async close(): Promise<void> {
    this.display = false;
    await this.modalService.close();
  }
}