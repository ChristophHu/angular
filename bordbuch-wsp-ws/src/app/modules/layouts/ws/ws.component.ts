import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.sass']
})
export class WsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('WSComponent')
  }

}
