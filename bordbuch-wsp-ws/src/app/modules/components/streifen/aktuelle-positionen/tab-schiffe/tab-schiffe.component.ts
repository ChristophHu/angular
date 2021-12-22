import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-schiffe',
  templateUrl: './tab-schiffe.component.html',
  styleUrls: ['./tab-schiffe.component.sass']
})
export class TabSchiffeComponent implements OnInit {
  public allCheck: boolean = true

  schiffe: any[] = [
    {
      "id":"1",
      "name":"BOOT 1A",
      "marke":"MARKE1",
      "typ":"SCHLAUCHBOOT",
      "identifikationsnummer":"A1A",
      "durchsicht":"",
      "dienststelle":"DST NORD"
    },
    {
      "id":"3",
      "name":"BOOT 3A",
      "marke":"MARKE3",
      "typ":"FREGATTE",
      "identifikationsnummer":"A3A",
      "durchsicht":"",
      "dienststelle":"DST NORD"
    },
    {
      "id":"36b9e7d3-fb83-41a6-b54e-93e226db12e3",
      "name":"Seemöve",
      "marke":"",
      "typ":"",
      "identifikationsnummer":"",
      "durchsicht":"",
      "dienststelle":"DST NORD"
    },
    {
      "id":"4",
      "name":"BOOT 1B",
      "marke":"MARKE1B",
      "typ":"UBOOT",
      "identifikationsnummer":"B1B",
      "durchsicht":"",
      "dienststelle":"DST OST"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleCheck() {
    this.allCheck = !this.allCheck

  }

  hoverShow(id: string) {
    console.log(id)
  }
}
