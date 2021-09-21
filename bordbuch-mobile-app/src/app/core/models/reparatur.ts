import { Status } from './status';
export class Reparatur {
    id: string = ''
    id_ship: string = ''
    date: string = ''
    kategorie: string = ''
    item: string = ''
    description: string = ''
    status: Status = Status.nicht_bearbeitet
}