import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Data } from '../model/data.model';
import { allDataLoaded } from './data.actions';
import { DataActions } from './data.actions-type';
 
@Injectable()
export class DataEffects {
    loadData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(DataActions.loadAllData),
            // only one request
            concatMap(action => this.dataService.findAllData()),
            map((data: Data[]) => DataActions.allDataLoaded({ data }))
            // map(data => ({
            //     type: '[Load Data Effect] All Date Loaded',
            //     payload: data
            // }))
        )
    })

    constructor(private actions$: Actions, private dataService: DataService ) {}
}