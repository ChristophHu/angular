import { Component } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isEditable = true;
  isLinear = true;

  firstFormName: FormGroup
  secondFormName: FormGroup

  // formarray
  singleArrayFormName: FormGroup

  // formgroup
  singleGroupFormName: FormGroup

  // complexform
  complexFormName: FormGroup

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormName = this._formBuilder.group({
      firstControl: new FormControl('', Validators.required)
    })
    this.secondFormName = this._formBuilder.group({
      secondControl: new FormControl('', Validators.required)
    })

    // formarray
    this.singleArrayFormName = this._formBuilder.group({
      steps: this._formBuilder.array([
        this._formBuilder.group({
          firstSingleControl: ['', Validators.required]
        }),
        this._formBuilder.group({
          secondSingleControl: ['', Validators.required]
        })
      ])
    })

    // formGroup
    this.singleGroupFormName = this._formBuilder.group({
      steps: this._formBuilder.group({
        first: this._formBuilder.group({
          firstSingleControl: ['', Validators.required]
        }),
        second: this._formBuilder.group({
          secondSingleControl: ['', Validators.required]
        })
      })
    })

    // complexForm
    this.complexFormName = this._formBuilder.group({
      subForms: this._formBuilder.array([])
    })
  }

  // complexForms
  get subforms(): FormArray {
    return this.complexFormName.get('subForms') as FormArray;
  }
  subFormAdd(subform: FormGroup) {
    this.subforms.push(subform)
  }
  isSubformValid(index: number): boolean {
    return this.subforms.at(index).valid;
  }
}
