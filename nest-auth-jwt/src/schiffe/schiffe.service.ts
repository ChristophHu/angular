import { Injectable } from '@nestjs/common';
import { Position } from './model/position';
import { SchiffsLocation } from './model/schiffslocation';

@Injectable()
export class SchiffeService {

    private schiffsLocation: SchiffsLocation[] = [
        { id: '1', name: 'Wassernixe 1', position: { latitude: 52.519328, longitude: 13.378559 } },
        { id: '2', name: 'Wassernixe 2', position: { latitude: 52.51751, longitude: 13.35551 } }
    ]

    getAllSchiffsLocation(): SchiffsLocation[] {
        return this.schiffsLocation
    }

    getOneSchiffslocation(id: number): SchiffsLocation {
        // return { latitude: 1, longitude: 12 }
        const schiff = (schiff) => {
            if (schiff.id == id) {
                return schiff
            }
        }
        return this.schiffsLocation.find(schiff)
    }

    addSchiff(schiffsLocation: SchiffsLocation) {
        let {id, name, position } = schiffsLocation
        this.schiffsLocation.push({ id: id, name: name, position: position })
    }

    deleteSchiff(id: number): void {
        const schiff = (schiff) => {
            if (schiff.id !== id) {
                return schiff
            }
        }
        this.schiffsLocation = this.schiffsLocation.filter(schiff)
    }

    updateSchiff(id: number, position: Position){
        const schiff = (schiff) => {
            if (schiff.id == id) {
                return schiff
            }
        }
        this.schiffsLocation.find(schiff).position = position
    }
}
