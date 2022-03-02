import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Position } from 'src/app/core/model/position';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { LocationService } from 'src/app/core/services/location.service';
import { logout } from 'src/app/modules/auth/state/actions';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PositionActions, PositionSelectors } from 'src/app/store/positionreport-store';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';
import { PositionComponent } from './position/position.component';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.sass']
})
export class PositionsComponent implements OnInit {

  id_ship!: string | undefined
  name!: string | undefined
  id_streife!: string | undefined

  allCheck: boolean = false

  positions: PositionReport[] = []

  public isAllPositions: boolean = false

  private _positionSubscription = new Subscription
  
  public displayedColumns: string[] = ['Nr.', 'date', 'description', 'action'];

  public dataSource = new MatTableDataSource<PositionReport>()

  constructor(private store: Store<RootStoreState>, private locationService: LocationService, private modalService: ModalService<PositionComponent>) { }

  ngOnInit(): void {
    this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
      this.id_ship = ship?.id
      this.name = ship?.name
    })

    this.store.pipe(select(ShipSelectors.selectPatrolId)).subscribe(id_streife => {
      if (id_streife) {
        this.id_streife = id_streife

        this._positionSubscription
        .add(
          this.store.pipe(select(PositionSelectors.selectDataByPatrol(this.id_streife!))).subscribe((data: any) => {
            this.positions = data
          })
        )
      }
    })
  }

  ngOnDestroy(): void {
    this._positionSubscription.unsubscribe()
  }
  toggleCheck() {
    this.allCheck = !this.allCheck
    // let items: Checklistitem[] = []
    // this.checklistKat.forEach(item => {
    //   items.push(Object.assign({}, item, { checked: this.allCheck }))
    // })
    // this.checklistKat = items
  }

  addPosition() {}

  delete(id: string) {
    this.store.dispatch(PositionActions.deleteData({ id }))
  }

  logout() {
    this.store.dispatch(logout())
  }

  async openModal(position?: PositionReport) {
    const { PositionComponent } = await import(
      './position/position.component'
    )

    if (position) {
      this.modalService.open(PositionComponent, {
        data: {
          title: 'Position bearbeiten',
          position
        }
      })
    } else {
      this.locationService.getCurrentPosition().then((data: any) => {
        console.info(`currentPosition | latitude: ${data.latitude}, longitude: ${data.longitude}`)
        position = { id_ship: this.id_ship!, id_streife: this.id_streife, date: new Date().toISOString(), location: {latitude: data.latitude, longitude: data.longitude }, ort: '', description: ''}
        this.modalService.open(PositionComponent, {
          data: {
            title: 'Position hinzufügen',
            position
          }
        })
      }, error => console.error(error))
    }
  }
}
