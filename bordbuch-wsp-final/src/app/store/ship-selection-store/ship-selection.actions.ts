import { createAction, props } from '@ngrx/store'
import { ShipSelection } from 'src/app/core/model/ship-selection.model'

// load data
export const loadAllShip = createAction(
	"[Ship Resolver] Load All Ship"
)

// store loaded data
export const allShipLoaded = createAction(
	"[Load Ship Effect] All Ship Loaded",
	props<{shipSelection: ShipSelection[]}>()
)