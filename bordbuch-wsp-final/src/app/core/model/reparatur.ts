import { Status } from "./status";

export interface Reparatur {
    id: string
    id_ship: string
    date: string
    kategorie: string
    item: string
    description: string
    status: Status
}