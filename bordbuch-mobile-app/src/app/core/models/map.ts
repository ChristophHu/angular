import { Position } from "./position"

export class Map {
    who: string = ''
    when: Date = new Date()
    what: string = ''
    where: Position = { longitude: 0, latitude: 0 }
}