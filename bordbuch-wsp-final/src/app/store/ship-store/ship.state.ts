import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Besatzung } from "src/app/core/model/besatzung.model";
import { Betankung } from "src/app/core/model/betankung";
import { Patrol } from "src/app/core/model/patrol.model";
import { Reparatur } from "src/app/core/model/reparatur";
import { Ship } from "src/app/core/model/ship.model";
import { Zaehlerstand } from "src/app/core/model/zaehlerstand";
import { Peilung } from "src/app/modules/components/boot/streife/peilung/peilung.component";

export interface State { //extends EntityState<any>
    ship: Ship | undefined
    patrol?: Patrol
    zaehlerstaende?: Zaehlerstand[]
    reparaturen?: Reparatur[]
    betankungen?: Betankung[]
    peilungen?: Peilung[] 
    isAllDataLoaded: boolean
}

// entitystate test
export interface BesatzungState extends EntityState<Besatzung> {
    selectedId: string | null;
}
export const adapter: EntityAdapter<Besatzung> = createEntityAdapter<Besatzung>()
