import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private OrderList: any[] = ['empty']

  constructor() { }

  getOrderList() {
    return this.OrderList
  }
}
