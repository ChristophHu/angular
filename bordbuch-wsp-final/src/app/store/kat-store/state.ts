import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model";
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp";

export interface State {
    pruefvermerke: Pruefvermerk[] | undefined
    Zaehlerstandstypen: Zaehlerstandstyp[] | undefined
    isAllDataLoaded: boolean
}