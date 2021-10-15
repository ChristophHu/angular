import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Data } from '../model/data.model';
import { dataUpdate } from './data.actions';
import { DataActions } from './data.actions-type';
 
@Injectable()
export class DataEffects {
    loadData$ = createEffect( 
        () => this.actions$.pipe(
            ofType(DataActions.loadAllData),
            concatMap(action => this.dataService.findAllData()),
            map((data: Data[]) => DataActions.allDataLoaded({ data }))
        )
    )

    saveData$ = createEffect(
        () => this.actions$.pipe(
            ofType(DataActions.dataUpdate),
            tap(action => console.log(action)),
            concatMap(action => this.dataService.saveData(
                action.update.id,
                action.update.changes
            ))
        )
    )

    constructor(private actions$: Actions, private dataService: DataService ) {}
}