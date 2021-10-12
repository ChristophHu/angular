import { Position } from "./position"

export class Standort {
    id?: string = ''
    id_ship: string = ''
    date: string = ''
    location: Position = { latitude: 52, longitude: 13 }
    description: string = ''
    id_streife?: string = ''
}