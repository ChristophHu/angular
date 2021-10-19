import { Position } from './position';
export interface Betankung {
    id?: string
    id_ship: string
    date: string
    ort: string
    location: Position
    fuel: string
    fuelfillingquantity: number
}