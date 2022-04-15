import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Patrol } from 'src/app/core/model/patrol.model';
import { PositionReport } from 'src/app/core/model/positionreport.model';
import { LocationService } from 'src/app/core/services/location.service';
import { logout } from 'src/app/modules/auth/state/actions';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { RootStoreState } from 'src/app/store/root-store.state';
import { ShipSelectors } from 'src/app/store/ship-store';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';
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
  patrol!: Patrol

  allCheck: boolean = false

  positions: PositionReport[] = []
  positions$!: Observable<PositionReport[]>

  public isAllPositions: boolean = false

  private _positionSubscription = new Subscription
  
  public displayedColumns: string[] = ['Nr.', 'date', 'description', 'action'];

  public dataSource = new MatTableDataSource<PositionReport>()

  constructor(private store: Store<RootStoreState>, private _specFacade: SpecFacade, private locationService: LocationService, private modalService: ModalService<PositionComponent>) {

  }

  ngOnInit(): void {
    // this.store.pipe(select(ShipSelectors.selectedShip)).subscribe(ship => {
    //   this.id_ship = ship?.id
    //   this.name = ship?.name
    // })

    this.store.pipe(select(ShipSelectors.selectedPatrol)).subscribe((patrol: Patrol | undefined) => {
      if (patrol) {
        this.id_streife = patrol.id
        this.id_ship = patrol.id_schiff
        this.patrol = patrol

        this.positions$ = this._specFacade.getPositionenByIdPatrol(patrol.id!) as Observable<PositionReport[]>
      }
    })

    // this.store.pipe(select(ShipSelectors.selectPatrolId)).subscribe(id_streife => {
    //   if (id_streife) {
    //     this.id_streife = id_streife

    //     // this._positionSubscription
    //     // .add(
    //     //   this._specFacade.positions$.subscribe((data: PositionReport[]) => {
    //     //     this.positions = data
    //     //   })
    //     // )
        
    //   }
    // })
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
    this._specFacade.deletePosition(id)
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
      this.modalService.open(PositionComponent, {
        data: {
          title: 'Position hinzufügen',
          patrol: this.patrol
        }
      })
    }
  }
}
