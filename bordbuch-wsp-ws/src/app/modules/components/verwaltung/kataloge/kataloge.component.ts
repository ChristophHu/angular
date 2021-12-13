import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kataloge',
  templateUrl: './kataloge.component.html',
  styleUrls: ['./kataloge.component.sass']
})
export class KatalogeComponent implements OnInit {

  kat: string = 'betriebsstoffe'
  constructor() { }

  ngOnInit(): void {
  }

  toggle(value: string) {
    this.kat = value
  }
}
