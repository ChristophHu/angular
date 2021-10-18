import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { from, Observable } from "rxjs";
import { Data } from "../model/data.model";

@Injectable()
export class CoursesDataService extends DefaultDataService<Data> {
    constructor(private httpClient: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Data', httpClient, httpUrlGenerator)
    }

    isLoading$(): Observable<boolean>  {
        let res = from([true])
        return res
    }
}