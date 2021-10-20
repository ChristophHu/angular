import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { allDataLoaded, dataUpdate, loadAllData } from './actions';
import { DataService } from './data.service';
 
@Injectable()
export class Effects {
    loadData$ = createEffect( 
        () => this.actions$.pipe(
            ofType(loadAllData),
            concatMap(action => 
                this.dataService.findAllData()
            ),
            map((positionReport: PositionReport[]) => allDataLoaded({ positionReport }))
        )
    )

    saveData$ = createEffect(
        () => this.actions$.pipe(
            ofType(dataUpdate),
            // tap(action => console.log(action)),
            concatMap(action => {
                return this.dataService.saveData(action.update.id, action.update.changes)
            })
            // map(action => this.dataService.saveData(
            //     action.update.id,
            //     action.update.changes
            // ))
        )
    )

    constructor(private actions$: Actions, private dataService: DataService ) {}
}