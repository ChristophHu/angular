import { Einsatzmittel } from "./einsatzmittel.model"

export interface Geraetebuch {
    id_schiff: string
    einsatzmittel: Einsatzmittel[]
}