import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Position } from './model/position';
import { SchiffsLocation } from './model/schiffslocation';
import { SchiffeService } from './schiffe.service';

@Controller('schiffe')
export class SchiffeController {

    constructor(private schiffeService: SchiffeService) {}

    @Get('allSchiffe')
    getAllSchiffsLocation(): SchiffsLocation[] {
        return this.schiffeService.getAllSchiffsLocation()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getOneSchiffslocation(@Param() param): SchiffsLocation {
        return this.schiffeService.getOneSchiffslocation(param.id)
    }

    @Post('addSchiff')
    addSchiff(@Body() schiffsLocation: SchiffsLocation) {
        this.schiffeService.addSchiff(schiffsLocation)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteSchiff(@Param('id') id) {
        this.schiffeService.deleteSchiff(id)
    }

    @ApiParam({name: 'id'})
    @Patch(':id/position')
    updateSchiff(@Param('id') id, @Body() position: Position) {
        this.schiffeService.updateSchiff(id, position)
    }
}
