import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import imageCompression from 'browser-image-compression'

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

  async fileChangeEvent(fileInput: any) {
    const imageFile = fileInput.target.files[0];
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      allowed_types: ['image/jpeg', 'image/png']
    }

    if (!options.allowed_types.includes(fileInput.target.files[0].type)) {
      this.imageError = 'Es sind nud die Datei-Formate *.jpg/*.png erlaubt.';
    } else {
      try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
  
        // await uploadToServer(compressedFile); // write your own logic
        let reader = new FileReader()
        reader.onload = () => {
          const res = btoa(reader.result as string)
          this.imageBase64.emit(res)
        }
        reader.onerror = function (error) {
          console.log('Error: ', error)
        }
        reader.readAsDataURL(compressedFile)
      } catch (error) {
        console.log(error);
      }
    }
  }



  removeImage() {
    this.cardImageBase64 = null
    this.isImageSaved = false
  }

}
