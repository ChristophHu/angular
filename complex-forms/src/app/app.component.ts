import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public form!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      subforms: this._fb.array([])
    });
  }

  get subforms(): FormArray {
    return this.form.get("subforms") as FormArray;
  }

  subformReady(subform: FormGroup) {
    this.subforms.push(subform);
    console.log(this.form);
    console.log(this.subforms);
  }

  isSubformValid(index: number) {
    return this.subforms.at(index).valid;
  }
}
