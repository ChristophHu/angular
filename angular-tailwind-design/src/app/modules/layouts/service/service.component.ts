import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {
  isSidebarActive = false
  isNotificationActive = false

  constructor() { }

  ngOnInit(): void {
  }

}
