import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { DataEntityService } from "./data-entity.service";

@Injectable()
export class DataResolver implements Resolve<boolean> {

    constructor(private dataEntityService: DataEntityService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.dataEntityService.getAll()
            .pipe(
                tap(data => console.log(data)),
                map(data => !!data)
            )
    }
}