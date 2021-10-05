import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-simple-navbar',
  templateUrl: './simple-navbar.component.html',
  styleUrls: ['./simple-navbar.component.sass']
})
export class SimpleNavbarComponent implements OnInit {
  isClosedProfileMenu: boolean = true
  @Output() notificationOpen: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
  }

  openNotification() {
    this.notificationOpen.emit(true)
  }
}
