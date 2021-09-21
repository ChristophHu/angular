import { Position } from 'src/app/core/models/position';
export class Betankung {
    id: number
    id_ship: number
    date: string
    ort: string
    location: Position
    fuel: string
    fuelFillingQuantity: number

    constructor(data: Betankung) {
        const { id, id_ship, date, ort, location, fuel, fuelFillingQuantity } = data
        this.id = id
        this.id_ship = id_ship
        this.date = date
        this.ort = ort
        this.location = location
        this.fuel = fuel
        this.fuelFillingQuantity = fuelFillingQuantity
    }
}