import { createReducer, on } from "@ngrx/store"
import { checkStateForEmptyArrays } from "src/app/shared/utils"
// import { deleteReparaturFotoSuccess, downloadReparaturFotosSuccess, uploadReparaturFotoSuccess } from "./actions"

export interface State {
    reparaturfotos  : any[]             | undefined
    isAllDataLoaded : boolean
}

export const initialDataState: State = {
    reparaturfotos  : undefined,
    isAllDataLoaded : false
}

export const reducer = createReducer(
    initialDataState,

    // reparaturfotos
    // on(downloadReparaturFotosSuccess, (state, action) => {
    //     return {
    //         ...state,
    //         reparaturfotos: action.fotos
    //     }
    // }),
    // on(uploadReparaturFotoSuccess, (state, action) => {
    //     let reparaturfoto: any = Object.assign({}, action.action.upload, { id: action.id })
    //     let cleared: any[] | undefined = checkStateForEmptyArrays(state.reparaturfotos)
    //     cleared = cleared?.filter(el => el.id != action.action.upload.id)
    //     cleared = (cleared) ? [...cleared!, ...[reparaturfoto]] : [reparaturfoto]
    //     return {
    //         ...state,
    //         reparaturfotos: cleared
    //     }
    // }),
    // on(deleteReparaturFotoSuccess, (state, action) => {
    //     let cleared: any[] | undefined = checkStateForEmptyArrays(state.reparaturfotos)
    //     cleared = cleared?.filter(el => el.id != action.id)
    //     cleared = [...cleared!]
    //     return {
    //         ...state,
    //         reparaturfotos: cleared
    //     }
    // })
)
