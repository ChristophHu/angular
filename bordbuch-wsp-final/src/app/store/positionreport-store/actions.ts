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
	props<{positionReport: PositionReport[]}>()
)

export const dataUpdate = createAction(
	"[Edit Data Dialog] Lage Updates",
	props<{update: Update<PositionReport>}>()
)