import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() value: number = 0
  @Input() maxvalue: number = 100
  percent: number = 0

  constructor() {
    this.progress(this.value, this.maxvalue)
  }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue !== changes.value.previousValue && changes.maxvalue.currentValue !== changes.maxvalue.previousValue) {
      this.progress(changes.value.currentValue, changes.maxvalue.currentValue)
    }
  }

  private progress(value: number, maxvalue: number) {
    if (maxvalue != 0) this.percent = 100 / maxvalue * value
  }

}
