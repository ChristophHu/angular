import { Besatzung } from "./besatzung"

export class Streife {
    id?         : string
    id_schiff   : string = ''
    zweck       : string = ''
    status      : string = ''
    start       : string = ''
    ende?       : string
    besatzung   : Besatzung[] = []
    kennung     : string = ''
}