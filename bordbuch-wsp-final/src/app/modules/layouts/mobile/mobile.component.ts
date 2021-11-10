import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { EMPTY, Observable } from 'rxjs'
import { RootStoreState } from 'src/app/store/root-store.state'

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.sass']
})
export class MobileComponent {
  // loading: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<RootStoreState>) { }

  //   this.router.events.subscribe(event => {
  //     switch (true) {
  //         case event instanceof NavigationStart: {
  //             // this.loading = true;
  //             console.log('start')
  //             break;
  //         }

  //         case event instanceof NavigationEnd:
  //         case event instanceof NavigationCancel:
  //         case event instanceof NavigationError: {
  //             this.loading = false;
  //             console.log('ende')
  //             break;
  //         }
  //         default: {
  //             break;
  //         }
  //     }
  //   });
  // }

}