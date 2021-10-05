import { Component, Input, OnInit } from '@angular/core';
import { Log } from 'src/app/core/models/log';

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.sass']
})
export class LogEntryComponent implements OnInit {
  @Input() entry: Log = { who: '', when: new Date(), what: '' }
  
  constructor() { }

  ngOnInit(): void {
  }

}
