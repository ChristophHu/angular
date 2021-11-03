import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'streifeform',
  templateUrl: './streifeform.component.html',
  styleUrls: ['./streifeform.component.sass']
})
export class StreifeformComponent implements OnInit {
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  
  kennungen: any[] = [
    { id: 1, bezeichnung: "Nixe 1" },
    { id: 1, bezeichnung: "Nixe 2" },
    { id: 1, bezeichnung: "Nixe 3" }
  ]
  
  zweckFormGroup!: FormGroup
  kennung = new FormControl('Nixe 1', Validators.required)

  constructor() { }

  ngOnInit() {
    this.formReady.emit(this.zweckFormGroup);
  }

}
