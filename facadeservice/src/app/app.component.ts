import { Component, OnInit } from '@angular/core';
import { FacadeService } from './core/services/facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor( private facadeService: FacadeService) { }
  
  ngOnInit(): void {
    console.log(this.facadeService.getOrderList())
    // console.log(this.facadeService.orderService.getOrderList())
  }
}
