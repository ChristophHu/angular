import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass']
})
export class TopnavComponent implements OnInit {
  status: boolean = false

  sidebarHandler() {
    this.status = !this.status
  }

  constructor() { }

  ngOnInit(): void {
  }

}
