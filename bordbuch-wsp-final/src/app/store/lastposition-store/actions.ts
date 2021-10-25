import { createAction, props } from '@ngrx/store'
import { PositionReport } from 'src/app/core/model/positionreport.model'

// load data
export const loadData = createAction(
	"[Map Component] Load LastPosition"
)

// store loaded data
export const dataLoaded = createAction(
	"[Map Component] Loaded LastPosition",
	props<{ lastPositions: PositionReport[] }>()
)
