import { Position } from "./position";

export interface Standort {
    id          : string
    id_ship     : string
    id_streife  : string
    date        : string
    location    : Position
    ort         : string
    description : string
    name        : string
}