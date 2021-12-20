import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-verwaltung',
  templateUrl: './verwaltung.component.html',
  styleUrls: ['./verwaltung.component.sass']
})
export class VerwaltungComponent implements OnInit {

  constructor(private _router: Router) {
    const state: RouterState = _router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    const root: ActivatedRouteSnapshot = snapshot.root;
    const child = root.firstChild;
    
    const segments = root.url.map(x => x.path);
    console.log(segments)
  }

  ngOnInit(): void {
    
  }

}
