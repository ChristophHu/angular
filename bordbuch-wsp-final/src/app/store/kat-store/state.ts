import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model";
import { ShipSelection } from "src/app/core/model/ship-selection.model";
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp";

export interface State {
    shipSelection: ShipSelection[] | undefined
    pruefvermerke: Pruefvermerk[] | undefined
    Zaehlerstandstypen: Zaehlerstandstyp[] | undefined
    isAllDataLoaded: boolean
}