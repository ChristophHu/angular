import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.sass']
})
export class VerticalNavComponent implements OnInit {
  status: boolean = false;

  clickEvent() {
    this.status = !this.status;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
