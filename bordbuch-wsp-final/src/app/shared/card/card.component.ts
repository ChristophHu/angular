import { Component, HostBinding, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

type CardFace = 'front' | 'back'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'card'
})
export class CardComponent implements OnChanges {
  @Input() expanded: boolean = false;
  @Input() face: CardFace = 'front'
  @Input() flippable: boolean = false;

  constructor() { }

  @HostBinding('class') get classList(): any {
      return {
          'card-expanded'  : this.expanded,
          'card-face-back' : this.flippable && this.face === 'back',
          'card-face-front': this.flippable && this.face === 'front',
          'card-flippable' : this.flippable
      };
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if ( 'expanded' in changes ) {
        // Coerce the value to a boolean
        this.expanded = coerceBooleanProperty(changes.expanded.currentValue);
    }

    if ( 'flippable' in changes ) {
        // Coerce the value to a boolean
        this.flippable = coerceBooleanProperty(changes.flippable.currentValue);
    }
  }
}
