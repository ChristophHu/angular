import { Position } from "./position";

export interface Dienststelle {
  id            : string
  bezeichnung   : string
  position      : Position
  adresse       : { 
    strasse     : string
    hausnummer  : string
    postleitzahl: string
    ort         : string
  }
  mailadresse   : string
}