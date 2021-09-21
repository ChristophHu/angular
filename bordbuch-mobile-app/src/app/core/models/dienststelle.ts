class Adresse {
    strasse: string = ''
    hausnummer: number = 0
    postleitzahl: number = 0
    ort: string = 'Berlin'
    adressZusatz?: string = ''
}

class Position {
    latitude: number = 0
    longitude: number = 0
}

export class Dienststelle {
    id: number = 0
    bezeichnung: string = ''
    position?: Position = { longitude: 0, latitude: 0 }
    adresse?: Adresse = { strasse: '', hausnummer: 0, postleitzahl: 0, ort: 'Berlin', adressZusatz: '' }
    emailAdresse: string = ''
}