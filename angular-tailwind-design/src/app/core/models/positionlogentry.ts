import { Position } from "./position"

export class PositionLogEntry {
    id: number = 1
    id_ship: number = 1
    location: Position = {
        latitude: 52.51,
        longitude: 13.37
    }
    date: string = new Date().toISOString()
    description: string = '-'
}