import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[.carousel-item]'
})
export class CarouselItemDirective {

  constructor( public tpl : TemplateRef<any> ) {

  }
}
