import { Patrol } from "src/app/core/model/patrol.model";
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model";
import { Ship } from "src/app/core/model/ship.model";

export interface State {
    pruefvermerke: Pruefvermerk[] | undefined
    isAllDataLoaded: boolean
}