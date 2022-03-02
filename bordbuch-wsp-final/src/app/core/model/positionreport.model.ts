import { Position } from "./position"

export interface PositionReport {
    id?: string
    id_ship: string
    name?: string
    date: string
    location: Position
    ort: string
    description: string
    id_streife?: string
}