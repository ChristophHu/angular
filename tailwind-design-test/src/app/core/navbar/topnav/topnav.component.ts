import { Component, OnInit } from '@angular/core'
import { Animations } from 'src/app/shared/animations';
@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass'],
  animations   : Animations
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
