import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.sass']
})
export class TabbarComponent {
  @Input() tabs: Array<any> = []
  @Input() labelField: string = ''
  @Input() active: any;
  @Output() onTabSelect: EventEmitter<any> = new EventEmitter();

  select(tab: any) {
    console.log(tab)
    this.onTabSelect.emit(tab);
  }
}
