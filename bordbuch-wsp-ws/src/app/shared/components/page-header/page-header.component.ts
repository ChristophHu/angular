import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent {
  public path: string[] = []

  constructor(private _router: Router) {
    this._router.events.subscribe(() => {
      this.path = this._router.routerState.snapshot.url.split('/')
      this.path.shift()
    })
  }
}
