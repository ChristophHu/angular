import { Update } from '@ngrx/entity'
import { createAction, props } from '@ngrx/store'
import { PositionReport } from 'src/app/core/model/positionreport.model'

// load data
export const loadAllData = createAction(
	"[Data Resolver] Load All Lage",
	props<{ id_ship: string }>()
)

// store loaded data
export const allDataLoaded = createAction(
	"[Load Data Effect] All Lage Loaded",
	props<{ positionReport: PositionReport[] }>()
)
export const insertData = createAction(
	"[Position Component] insert PositionReport",
	props<{ positionReport: PositionReport }>()
)
export const insertDataSuccess = createAction(
	"[Position Component] insert PositionReport Success",
	props<{ positionReport: PositionReport }>()
)
export const updateData = createAction(
	"[Position Component] update PositionReport",
	props<{ update: Update<PositionReport> }>()
)
export const deleteData = createAction(
	"[Position Component] delete PositionReport",
	props<{ id: string }>()
)

export const resetStore = createAction(
	"[Topnav] Store Reset"
)
