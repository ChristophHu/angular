import { createAction, props } from '@ngrx/store'
import { Data } from '../model/data.model'

// load data
export const loadAllData = createAction(
	"[Data Resolver] Load All Data"
)

// store loaded data
export const allDataLoaded = createAction(
	"[Load Data Effect] All Data Loaded",
	props<{data: Data[]}>()
)