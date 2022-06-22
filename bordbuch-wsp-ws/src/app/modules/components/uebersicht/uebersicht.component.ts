import { Component, OnInit } from '@angular/core';
import { getLocalISO } from 'src/app/shared/utils';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.sass']
})
export class UebersichtComponent implements OnInit {

  public today = getLocalISO('now')
  
  ngOnInit(): void {
    
  }
}
