import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodo(): Observable<any> {
    return from([{ id: '1' }])
  }
}
