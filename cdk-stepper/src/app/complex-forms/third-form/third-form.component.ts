import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.sass']
})
export class ThirdFormComponent implements OnInit, AfterContentChecked {
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  loading: boolean = true
  public form!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef) {
    this.form = this._formBuilder.group({
      secondControl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.formReady.emit(this.form)
  }
  ngAfterViewInit() {
    // this.loading = false
    // this.changeDetector.detectChanges()
    // this.formReady.emit(this.form)
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
