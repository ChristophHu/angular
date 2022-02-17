import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { concatMap, map, switchMap } from 'rxjs/operators'

import { AppService } from 'src/app/core/services/app.service'

// import { deleteReparaturFoto, deleteReparaturFotoSuccess, downloadReparaturFotos, downloadReparaturFotosSuccess, uploadReparaturFoto, uploadReparaturFotoSuccess } from './actions'
 
@Injectable()
export class Effects {

    // reparaturfotos
    // downloadReparaturFotos$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(downloadReparaturFotos),
    //         concatMap(action => this.appService.downloadReparaturFoto(action.id)),
    //         map((fotos: any[]) => downloadReparaturFotosSuccess({ fotos }))
    //     )
    // })
    // uploadReparaturFoto$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(uploadReparaturFoto),
    //         switchMap(action => {
    //             return this.appService.uploadReparaturFoto(action.upload).pipe(
    //                 map((id: string) => uploadReparaturFotoSuccess({ action, id }))
    //             )
    //         })
    //     )
    // })
    // deleteReparaturFoto$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(deleteReparaturFoto),
    //         switchMap(action => {
    //             return this.appService.deleteReparaturFoto(action.id).pipe(
    //                 map(() => deleteReparaturFotoSuccess(action))
    //             )
    //         })
    //     )
    // })

    constructor(private actions$: Actions, private appService: AppService ) {}
}
