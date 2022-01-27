import { Checklistitem } from "./checklistitem.model";

export interface Checklist {
    id?         : string
    id_schiff   : string
    status?     : string
    streife     : string
    checklistItems?: Checklistitem[]
    datum       : string
    gbookdaten? : string
    name        : string
}