import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'progress-circle',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.sass']
})
export class ProgressComponent implements OnInit, OnChanges {
  @Input() value: number = 0
  @Input() maxvalue: number = 100
  radius = 6
  circumference = 2 * Math.PI * this.radius
  dashoffset: number = 0

  constructor() {
    this.progress(0, this.maxvalue)
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'].currentValue !== changes['value'].previousValue) {
      this.progress(changes['value'].currentValue, this.maxvalue)
    }
  }

  private progress(value: number, maxvalue: number) {
    if (value < 0) value = 0
    const progress = value/ maxvalue
    this.dashoffset = this.circumference * (1 - progress)
  }
}
