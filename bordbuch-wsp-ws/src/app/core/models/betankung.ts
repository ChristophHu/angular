import { Position } from 'src/app/core/models/position';
export interface Betankung {
    id: string
    id_ship: string
    date: string
    name: string
    ort: string
    location: Position
    fuel: string
    fuelfillingquantity: number
}