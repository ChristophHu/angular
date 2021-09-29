import { Injectable, Injector } from '@angular/core';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private _orderService?: OrderService
  private get orderService(): OrderService {
    // singleton implementation
    if(!this._orderService) {
      this._orderService = this.injector.get(OrderService)
    }
    return this._orderService!
  }
  constructor(private injector: Injector) { }

  getOrderList(): any[] {
    return this.orderService.getOrderList()
  }
}
