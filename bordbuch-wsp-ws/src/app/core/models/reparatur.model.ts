import { Status } from "./reparatur-status.model";

export interface Reparatur {
    id          : string
    id_ship     : string
    id_status   : string
    date        : string
    kategorie   : string
    item        : string
    description : string
    status      : string
}