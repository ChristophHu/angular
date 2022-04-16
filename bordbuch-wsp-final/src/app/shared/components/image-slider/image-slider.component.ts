import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.sass']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() images: any
  private element: any

  constructor(private el: ElementRef) {
    this.element = el.nativeElement
  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.element.remove()
  }

  close(): void {
    this.element.style.display = 'none'
  }
}
