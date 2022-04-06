import { Betriebsstoff } from "src/app/core/model/Betriebsstoff.model";
import { Checklistitem } from "src/app/core/model/checklistitem.model";
import { Dienststelle } from "src/app/core/model/dienststelle.model";
import { Funktion } from "src/app/core/model/funktion.model";
import { Kennung } from "src/app/core/model/kennung.model";
import { PositionReport } from "src/app/core/model/positionreport.model";
import { PruefvermerkKategorien } from "src/app/core/model/pruefvermerk-kategorie.model";
import { Pruefvermerk } from "src/app/core/model/pruefvermerk.model";
import { Status } from "src/app/core/model/reparatur-status.model";
import { ShipSelection } from "src/app/core/model/ship-selection.model";
import { Zaehlerstandstyp } from "src/app/core/model/zaehlerstandstyp";
import { Zweck } from "src/app/core/model/zwecke.model";

export interface State {
    shipSelection: ShipSelection[] | undefined
    pruefvermerke: Pruefvermerk[] | undefined
    pruefvermerkKategorien: PruefvermerkKategorien[] | undefined
    zaehlerstandstypen: Zaehlerstandstyp[] | undefined
    dienststellen: Dienststelle[] | undefined
    checklistitems: Checklistitem[] | undefined
    betriebsstoffe: Betriebsstoff[] | undefined
    funktionen: Funktion[] | undefined
    lastPositions: PositionReport[] | undefined
    status: Status[] | undefined
    zwecke: Zweck[] | undefined
    kennungen: Kennung[] | undefined
    isAllDataLoaded: boolean
}