import { Dienststelle } from "src/app/core/model/dienststelle.model";
import { PruefvermerkKategorien } from "src/app/core/model/pruefvermerk-kategorie.model";
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model";
import { ShipSelection } from "src/app/core/model/ship-selection.model";
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp";

export interface State {
    shipSelection: ShipSelection[] | undefined
    pruefvermerke: Pruefvermerk[] | undefined
    pruefvermerkKategorien: PruefvermerkKategorien[] | undefined
    zaehlerstandstypen: Zaehlerstandstyp[] | undefined
    dienststellen: Dienststelle[] | undefined
    isAllDataLoaded: boolean
}