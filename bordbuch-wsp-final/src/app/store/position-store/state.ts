import { Position } from "src/app/core/model/position";

export interface State {
    positions: Position[] | undefined
    isAllDataLoaded: boolean
}