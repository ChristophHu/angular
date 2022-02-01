import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Features } from "src/app/core/model/feature";
import { State } from "./reducers";

export const specState = createFeatureSelector<State>(Features.Spec)

// reparaturfotos
export const selectAllReparaturFotos = createSelector(
    specState,
    state => state.reparaturfotos
)
export const selectReparaturFotosCount = createSelector(
    selectAllReparaturFotos,
    reparaturfotos => reparaturfotos?.length
)