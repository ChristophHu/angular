import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { QrScannerComponent } from 'angular2-qrscanner';
import { Router } from '@angular/router';

interface QRCodeJSON {
  id: number
  name: string
}

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class QrscannerComponent implements OnInit, AfterViewInit {
  // modal
  @ViewChild('modalComponent') modal: | ModalComponent<QrScannerComponent> | undefined;
  id: number = 0

  // qrscanner
  @ViewChild(QrScannerComponent, { static: false }) qrScannerComponent!: QrScannerComponent ;

  constructor(private router: Router, private modalService: ModalService<QrScannerComponent>) { }

  ngAfterViewInit(): void {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
        console.log(videoDevices)
          let choosenDev;
          for (const dev of videoDevices){
              if (dev.label.includes('environment')){  // front
                  choosenDev = dev;
                  break;
              }
          }
          if (choosenDev) {
              this.qrScannerComponent.chooseCamera.next(choosenDev);
          } else {
              this.qrScannerComponent.chooseCamera.next(videoDevices[0]); // 1
          }
      }
  });

  this.qrScannerComponent.capturedQr.subscribe((result: any) => {
      let QRCode: QRCodeJSON = JSON.parse(result)
      console.log(result)
      this.modal?.close()
      this.router.navigate(['/mobile', 'boot', QRCode.id])
  });
  }

  ngOnInit(): void {
    this.modalService.getData().then((data) => {
      // this.id = data.data.id
    })
  }

  cancel() {
    this.modal?.close()
  }
}
