import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  tologin() {
    this._router.navigateByUrl('/login')
  }
}
