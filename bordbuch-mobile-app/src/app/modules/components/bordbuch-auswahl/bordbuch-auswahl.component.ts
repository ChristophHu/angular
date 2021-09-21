import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Schiff } from 'src/app/core/models/schiff';
import { AppService } from 'src/app/core/services/app.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { QrscannerComponent } from './qrscanner/qrscanner.component';

@Component({
  selector: 'app-bordbuch-auswahl',
  templateUrl: './bordbuch-auswahl.component.html',
  styleUrls: ['./bordbuch-auswahl.component.sass']
})
export class BordbuchAuswahlComponent implements OnInit, OnDestroy {

  schiffe: Observable<Schiff[]>
  schiffeSubscription!: Subscription
  
  bordbuchForm: FormGroup
  
  constructor(private formBuilder: FormBuilder, private appService: AppService, private authService: AuthService, private modalService: ModalService<QrscannerComponent>) {
    this.schiffe = this.appService.schiffe

    this.bordbuchForm = this.formBuilder.group({
      bordbuch: []
    })
  }

  get f() {
		return this.bordbuchForm.controls
	}

  ngOnInit(): void {
    this.schiffeSubscription = this.schiffe.subscribe((data: Schiff[]) => { })
    this.appService.getSchiffe()
  }

  ngOnDestroy(): void {
    this.schiffeSubscription.unsubscribe()
  }

  async showModal(): Promise<void> {
    const { QrscannerComponent } = await import('./qrscanner/qrscanner.component')
    this.modalService.open(QrscannerComponent, {
      data: {
        // id: id
      }
    })
  }

  logout() {
    this.authService.logout()
  }
}
