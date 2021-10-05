import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Role } from 'src/app/core/models/role';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  isSidebarActive = false
  isNotificationActive = false
  private currentUser!: User

  constructor(private authService: AuthService, private activatedroute: ActivatedRoute) {
      this.authService.currentUser.subscribe(user => {
        this.currentUser = user
      });
  }
  ngOnInit(): void {
    // this.activatedroute.data.subscribe(data => {
    //   console.log(data)
    // })
  }

  // get isAdmin() {
  //   return this.currentUser && this.currentUser.role === Role.administration;
  // }
}
