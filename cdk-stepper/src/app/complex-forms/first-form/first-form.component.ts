import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['']
})
export class FirstFormComponent implements OnInit {
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  public form: FormGroup;

  firstControl: AbstractControl

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      firstControl: ['', Validators.required]
    });
    this.firstControl = this.form.get('firstControl')!
  }

  ngOnInit() {
    this.formReady.emit(this.form);
  }
}
