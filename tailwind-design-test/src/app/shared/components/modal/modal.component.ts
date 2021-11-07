import { Component } from '@angular/core';
import { Animations } from '../../animations';
import { ModalService } from './modal.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 }) ),
      state('*', style({ opacity: 1 })),
      transition('void => false', []),
      transition('void => *', animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeOut', [
      state('*', style({ opacity: 1 })), 
      state('void', style({ opacity: 0 })),
      transition('false => void', []),
      transition('* => void', animate('200ms 200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('slideInRight', [
      state('void', style({ transform: 'translate3d(100%, 0, 0)' })),
      state('*', style({ transform: 'translate3d(0, 0, 0)' })),
      transition('void => false', []),
      transition('void => *', animate('200ms 100ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('slideOutRight', [
      state('*', style({ transform: 'translate3d(0, 0, 0)' })),
      state('void', style({ transform: 'translate3d(100%, 0, 0)' })),
      transition('false => void', []),
      transition('* => void', animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ])
  ] 
})
export class ModalComponent<T> {
  display = true;

  constructor(private modalService: ModalService<T>) { }

  async close(): Promise<void> {
    this.display = false;
    await setTimeout(()=>{
      this.modalService.close();
    }, 400)
  }
}