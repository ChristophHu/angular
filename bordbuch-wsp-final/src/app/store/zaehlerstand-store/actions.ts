import { Update } from '@ngrx/entity'
import { createAction, props } from '@ngrx/store'
import { Zaehlerstand } from 'src/app/core/model/zaehlerstand'

// load data
export const loadAllData = createAction(
	"[Data Resolver] Load All Zaehlerstaende",
	props<{ id_ship: string }>()
)

// store loaded data
export const allDataLoaded = createAction(
	"[Load Data Effect] All Zaehlerstaende Loaded",
	props<{ zaehlerstand: Zaehlerstand[] }>()
)

export const dataUpdate = createAction(
	"[Edit Data Dialog] Zaehlerstand Updates",
	props<{ update: Update<Zaehlerstand> }>()
)