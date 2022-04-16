import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
// import * as _ from 'lodash';

@Component({
  selector: 'image-base64-upload',
  templateUrl: './image-base64-upload.component.html',
  styleUrls: ['./image-base64-upload.component.sass']
})
export class ImageBase64UploadComponent implements OnInit {
  @Output() imageBase64 = new EventEmitter()

  imageError: string | null = null
  isImageSaved: boolean = false
  cardImageBase64: string | null = null

  constructor() {}

  ngOnInit() {}

  fileChangeEvent(fileInput: any): false | void {
    let file = fileInput.target.files[0]

    const max_size = 500000
    const allowed_types = ['image/jpeg', 'image/png']
    const max_height = 15200
    const max_width = 25600

    if (fileInput.target.files[0].size > max_size) {
      this.imageError = 'Maximale Größe ist ' + max_size / 1000 + 'Kb.'

      return false
    }

    if (!allowed_types.includes(fileInput.target.files[0].type)) {
        this.imageError = 'Es sind nur die Datei-Formate *.jpg/*.png erlaubt.'
        return false;
    }

    let reader = new FileReader()
    reader.onload = () => {
      const res = btoa(reader.result as string)
      this.imageBase64.emit(res)
    }
    reader.onerror = function (error) {
      console.log('Error: ', error)
    }
    reader.readAsDataURL(file)
  }

  // fileChangeEvent2(fileInput: any): false | void {
  //   let imageURLBase64: any
  //   console.log(fileInput)
  //   this.imageError = null
  //   if (fileInput.target.files && fileInput.target.files[0]) {

  //     // Size Filter Bytes
  //     const max_size = 500000
  //     const allowed_types = ['image/jpeg']
  //     const max_height = 15200
  //     const max_width = 25600

  //     if (fileInput.target.files[0].size > max_size) {
  //       this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb'

  //       return false
  //     }

  //     if (!allowed_types.includes(fileInput.target.files[0].type)) {
  //         this.imageError = 'Only Images are allowed ( JPG )';
  //         return false;
  //     }
  //     const reader = new FileReader()
  //     reader.onload = () => {
  //       imageURLBase64 = reader.result
  //       console.log(reader.result)
  //       this.imageBase64.emit(reader.result)
  //     }

  //     reader.readAsDataURL(fileInput.target.files[0])
  //   }
  // }

  removeImage() {
    this.cardImageBase64 = null
    this.isImageSaved = false
  }

}
