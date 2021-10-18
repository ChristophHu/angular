import { CrewMember } from "./crew-member.model"

export interface Patrol {
    id?         : string
    id_ship     : string
    purpose     : string
    status      : string
    start       : string
    end?        : string
    crew        : CrewMember[]
    identifier  : string
}