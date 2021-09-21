import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Standort } from 'src/app/core/models/standort';
import { AppService } from 'src/app/core/services/app.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-positionen',
  templateUrl: './positionen.component.html',
  styleUrls: ['./positionen.component.sass']
})

export class PositionenComponent implements OnInit {

  // positions: Standort[] = [
  //   { id: '1', id_ship: '1', date: new Date().toISOString(), location: { latitude: 0, longitude: 0}, description: 'Test', id_streife: '1' }
  // ]
  isAllPositions: boolean = false

  private positionSubscription = new Subscription
  
  displayedColumns: string[] = ['Nr.', 'date', 'description', 'action'];
  dataSource!: Observable<any> // = this.positions //ELEMENT_DATA;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.positionSubscription
      .add(
        this.appService.positions.subscribe((data: any) => {
          this.dataSource = data
        })
      )
    // this.dataSource = this.appService.positions
  }

  addPosition() {}

  deletePosition(id: string) {
    this.appService.deletePosition(id)
  }

  setToLocalPosition() {}

}
