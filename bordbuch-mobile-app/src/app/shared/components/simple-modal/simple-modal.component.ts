import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core'
import { SimpleModalService } from './simple-modal.service'

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.sass']
})
export class SimpleModalComponent implements OnInit, OnDestroy {
  @Input() id: string = ''
  private element: any
  
  constructor(private simpleModalService: SimpleModalService, private el: ElementRef) {
    this.element = el.nativeElement
  }

  ngOnInit(): void {
    if (!this.id) {
        console.error('modal must have an id')
        return
    }

    document.body.appendChild(this.element)

    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
        if (el.target.className === 'modal') {
            this.close()
        }
    });
    this.simpleModalService.add(this)
  }

  ngOnDestroy(): void {
    this.simpleModalService.remove(this.id)
    this.element.remove()
  }

  open(): void {
    this.element.style.display = 'block'
    document.body.classList.add('modal-open')
  }

  close(): void {
    this.element.style.display = 'none'
    document.body.classList.remove('modal-open')
  }

}
