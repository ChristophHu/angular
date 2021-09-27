import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { icons } from './icons'

@Component({
  selector: 'icons',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./icons.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class IconsComponent {
  @Input() set name(iconName: string) {
    this.renderer.setProperty(this.element.nativeElement,'innerHTML', icons[iconName] || null)
  }
  
  constructor(private element: ElementRef, private renderer: Renderer2) { }
}
