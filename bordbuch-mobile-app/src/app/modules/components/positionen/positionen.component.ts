import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Standort } from 'src/app/core/models/standort';
import { AppService } from 'src/app/core/services/app.service';
import { LocationService } from 'src/app/core/services/location.service';
import { MapService } from 'src/app/core/services/map2.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PositionComponent } from './position/position.component';

@Component({
  selector: 'app-positionen',
  templateUrl: './positionen.component.html',
  styleUrls: ['./positionen.component.sass']
})

export class PositionenComponent implements OnInit, OnDestroy {

  public isAllPositions: boolean = false

  private _positionSubscription = new Subscription
  
  public displayedColumns: string[] = ['Nr.', 'date', 'description', 'action'];
  // public dataSource: Observable<any> = new Observable
  public dataSource = new MatTableDataSource<Standort>()
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private appService: AppService, private locationService: LocationService, private mapService: MapService, private modalService: ModalService<PositionComponent>) { }

  ngOnInit(): void {
    this._positionSubscription
      .add(
        this.appService.positions.subscribe((data: any) => {
          this.dataSource = data
        })
      )
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this._positionSubscription.unsubscribe()
  }

  addPosition() {}

  deletePosition(id: string) {
    this.appService.deletePosition(id)
  }

  setToLocalPosition() {}

  openTankzettelModal() {

  }

  async openPositionModal(id?: string) {
    let position: Standort | undefined

    const { PositionComponent } = await import(
      './position/position.component'
    )

    if (id) {
      position = this.appService._dataStore.positions.find(el => el.id == id)
      this.modalService.open(PositionComponent, {
        data: {
          title: 'Position bearbeiten',
          position
        }
      })
    } else {
      this.locationService.getCurrentPosition().then((data: any) => {
        position = { id_ship: this.appService._id_schiff, id_streife: this.appService._id_streife, date: new Date().toISOString(), location: {latitude: data.latitude, longitude: data.longitude }, description: ''}
        this.modalService.open(PositionComponent, {
          data: {
            title: 'Position hinzufügen',
            position
          }
        })
      }, error => console.error(error))

      // this.mapService.currentPosition.subscribe((data: any) => {
      //   position = { id_ship: this.appService._id_schiff, id_streife: this.appService._id_streife, date: new Date().toISOString(), location: {latitude: data.latitude, longitude: data.longitude }, description: ''}
      //   this.modalService.open(PositionComponent, {
      //     data: {
      //       title: 'Position hinzufügen',
      //       position
      //     }
      //   })
      // }, error => console.error(error))
      // this.mapService.getCurrentPosition()
    }
  }
}
