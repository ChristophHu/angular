import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {
  @Input() value: string | null | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
