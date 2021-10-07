import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AuthActions } from './action-types'
import { AuthService } from './authentication/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, private store: Store, private authServise: AuthService) {
    this.form = this.formBuilder.group({
      email: [],
      password: []
    })
  }

  ngOnInit(): void {
    const val = this.form.value
    this.authServise.login(val. email, val.password)
      .pipe(
        tap((user: any) => {
          this.store.dispatch(AuthActions.login({ user: user }))
        })
      )
  }



  
}
