import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Besatzung } from "src/app/core/model/besatzung.model";
import { Betankung } from "src/app/core/model/betankung";
import { Checklist } from "src/app/core/model/checklist.model";
import { Geraetebuch } from "src/app/core/model/geraetebuch.model";
import { Patrol } from "src/app/core/model/patrol.model";
import { Peilung } from "src/app/core/model/peilung.model";
import { Reparatur } from "src/app/core/model/reparatur";
import { Ship } from "src/app/core/model/ship.model";
import { Tank } from "src/app/core/model/tank.model";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";

export interface State { //extends EntityState<any>
    ship: Ship | undefined
    patrol?: Patrol
    zaehlerstaende?: Zaehlerstand[]
    reparaturen?: Reparatur[]
    betankungen?: Betankung[]
    checklist?: Geraetebuch
    geraetebuch?: Geraetebuch
    tanks?: Tank[]
    peilungen?: Peilung[]
    isAllDataLoaded: boolean
}

// entitystate test
export interface BesatzungState extends EntityState<Besatzung> {
    selectedId: string | null;
}
export const adapter: EntityAdapter<Besatzung> = createEntityAdapter<Besatzung>()
