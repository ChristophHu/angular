import { ApiProperty } from "@nestjs/swagger"

export class Position {
    @ApiProperty()
    latitude: number

    @ApiProperty()
    longitude: number
}