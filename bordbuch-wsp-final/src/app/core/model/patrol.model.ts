import { CrewMember } from "./crew-member.model"

export interface Patrol {
    id?         : string
    id_ship     : string
    purpose     : string
    status      : string
    start       : string
    ende?       : string
    crew        : CrewMember[]
    identifier  : string
}