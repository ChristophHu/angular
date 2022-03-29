import { Component, OnInit } from '@angular/core';

export enum ToggleEnum {
  Option1,
  Option2,
  Option3
}

@Component({
  selector: 'app-button-toggle-group',
  templateUrl: './button-toggle-group.component.html',
  styleUrls: ['./button-toggle-group.component.sass']
})
export class ButtonToggleGroupComponent implements OnInit {
  toggleEnum = ToggleEnum
  selectedState: any = ToggleEnum.Option3
  
  constructor() { }

  onChange($event: any) {
    console.log($event.value);
    this.selectedState = $event.value;
  }

  onReset() {
    this.selectedState = undefined;
  }
  

  ngOnInit(): void {
  }

}
