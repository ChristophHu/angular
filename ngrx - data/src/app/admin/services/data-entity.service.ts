import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { from, Observable } from "rxjs";
import { Data } from "../model/data.model";

@Injectable()
export class DataEntityService extends EntityCollectionServiceBase<Data> {

    private data: Data[] = [
        { id: 8758577, seqNum: 4, type: 'picture', data: 'picture data', date: new Date },
        { id: 3846314, seqNum: 3, type: 'data', data: 'some data', date: new Date },
        { id: 1846314, seqNum: 2, type: 'data', data: 'some data', date: new Date },
        { id: 2846313, seqNum: 1, type: 'data', data: 'some data', date: new Date }
    ]
    
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Data', serviceElementsFactory)
    }

    getAll(): Observable<Data[]> {
        const data = from([this.data])
        return data
    }
}