import { Betankung } from "src/app/core/model/betankung";
import { Patrol } from "src/app/core/model/patrol.model";
import { Reparatur } from "src/app/core/model/reparatur";
import { Ship } from "src/app/core/model/ship.model";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";

export interface State {
    ship: Ship | undefined
    patrol?: Patrol
    zaehlerstaende?: Zaehlerstand[]
    reparaturen?: Reparatur[]
    betankungen?: Betankung[]
    isAllDataLoaded: boolean
}