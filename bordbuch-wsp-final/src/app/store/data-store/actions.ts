import { Update } from '@ngrx/entity'
import { createAction, props } from '@ngrx/store'
import { Data } from './data.model'

// load data
export const loadAllData = createAction(
	"[Data Resolver] Load All Data"
)

// store loaded data
export const allDataLoaded = createAction(
	"[Load Data Effect] All Data Loaded",
	props<{data: Data[]}>()
)

export const dataUpdate = createAction(
	"[Edit Data Dialog] Data Updates",
	props<{update: Update<Data>}>()
)