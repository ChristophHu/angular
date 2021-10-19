import { Besatzung } from "./besatzung.model"

export interface Patrol {
    id?         : string
    id_schiff   : string
    zweck       : string
    status      : string
    start       : string
    ende?       : string
    besatzung   : Besatzung[]
    kennung     : string
}