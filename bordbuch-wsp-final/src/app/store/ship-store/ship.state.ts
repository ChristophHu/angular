import { Patrol } from "src/app/core/model/patrol.model";
import { Ship } from "src/app/core/model/ship.model";

export interface State {
    ship: Ship | undefined
    patrol?: Patrol
    isAllDataLoaded: boolean
}