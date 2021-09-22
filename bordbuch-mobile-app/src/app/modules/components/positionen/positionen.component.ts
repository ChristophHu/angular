import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Standort } from 'src/app/core/models/standort';
import { AppService } from 'src/app/core/services/app.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PositionComponent } from './position/position.component';

@Component({
  selector: 'app-positionen',
  templateUrl: './positionen.component.html',
  styleUrls: ['./positionen.component.sass']
})

export class PositionenComponent implements OnInit {

  isAllPositions: boolean = false

  private positionSubscription = new Subscription
  
  displayedColumns: string[] = ['Nr.', 'date', 'description', 'action'];
  dataSource: Observable<any> = new Observable

  constructor(private appService: AppService, private modalService: ModalService<PositionComponent>) { }

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

  openTankzettelModal() {

  }

  async openPositionModal(id: string) {
    console.log(id)
    const position = this.appService._dataStore.positions.find(el => el.id == id)
    // var zaehlerstand = this.zaehlerstaende[index]
    const { PositionComponent } = await import(
      './position/position.component'
    )
    this.modalService.open(PositionComponent, {
      data: {
        position
      }
    })
  }

}
