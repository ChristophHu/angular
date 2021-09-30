import { Position } from 'src/app/core/models/position';
export class Betankung {
    id?: string
    id_ship: string
    date: string
    ort: string
    location: Position
    fuel: string
    fuelfillingquantity: number

    constructor(data: Betankung) {
        const { id, id_ship, date, ort, location, fuel, fuelfillingquantity } = data
        this.id = id
        this.id_ship = id_ship
        this.date = date
        this.ort = ort
        this.location = location
        this.fuel = fuel
        this.fuelfillingquantity = fuelfillingquantity
    }
}