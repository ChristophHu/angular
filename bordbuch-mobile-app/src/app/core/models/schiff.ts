import { Zaehlerstand } from "./zaehlerstand"

export class Schiff {
    id      : string = ''
    name    : string = ''
    marke   : string = ''
    typ     : string = ''
    identifikationsnummer: string = ''
    dienststelle: string = ''
    zaehlerstaende: Zaehlerstand[] = []
}