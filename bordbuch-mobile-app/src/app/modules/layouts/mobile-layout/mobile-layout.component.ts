import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-mobile-layout',
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.sass']
})
export class MobileLayoutComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private appService: AppService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.appService.notifications$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(data => {
        this.openSnackBar(data)
      })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.complete()
  }

  openSnackBar(text: string) {
    this.matSnackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      verticalPosition: 'top',
      data: {
        text: text
      }
    });
  }

}
