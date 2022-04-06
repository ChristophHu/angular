import { Component, OnInit } from '@angular/core';
import { SpecFacade } from 'src/app/store/spec-store/spec.facade';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {

  constructor(private _specFacade: SpecFacade) { }

  ngOnInit(): void {
    this._specFacade.allKlarmeldungen$.subscribe(data => console.log(data))
  }

}
