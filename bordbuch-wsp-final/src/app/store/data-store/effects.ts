import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { allDataLoaded, dataUpdate, loadAllData } from './actions';
import { Data } from './data.model';
import { DataService } from './data.service';
 
@Injectable()
export class Effects {
    loadData$ = createEffect( 
        () => this.actions$.pipe(
            ofType(loadAllData),
            concatMap(action => 
                this.dataService.findAllData()
            ),
            map((data: Data[]) => allDataLoaded({ data }))
        )
    )

    saveData$ = createEffect(
        () => this.actions$.pipe(
            ofType(dataUpdate),
            tap(action => console.log(action)),
            concatMap(action => this.dataService.saveData(
                action.update.id,
                action.update.changes
            ))
        )
    )

    constructor(private actions$: Actions, private dataService: DataService ) {}
}