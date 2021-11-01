import { Dienststelle } from "src/app/core/model/dienststelle.model";
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model";
import { ShipSelection } from "src/app/core/model/ship-selection.model";
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp";

export interface State {
    shipSelection: ShipSelection[] | undefined
    pruefvermerke: Pruefvermerk[] | undefined
    zaehlerstandstypen: Zaehlerstandstyp[] | undefined
    dienststellen: Dienststelle[] | undefined
    isAllDataLoaded: boolean
}