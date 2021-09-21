import { ApiProperty } from '@nestjs/swagger';
import { Position } from './position';

export class SchiffsLocation {
    @ApiProperty()
    id: string

    @ApiProperty()
    name: string

    @ApiProperty()
    position: Position
}