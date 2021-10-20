import { Position } from "./position"

export interface PositionReport {
    id?: string
    id_ship: string
    date: string
    location: Position
    description: string
    id_streife?: string
}