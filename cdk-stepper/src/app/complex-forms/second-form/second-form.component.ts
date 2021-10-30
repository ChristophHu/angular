import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['']
})
export class SecondFormComponent implements OnInit {
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      secondControl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.formReady.emit(this.form);
  }
}
