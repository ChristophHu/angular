import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({ name: 'sanitizeHtml2' })
export class SanitizeHtmlPipe2 implements PipeTransform {

  constructor(private _sanitizer:DomSanitizer) { }

  transform(value:string):SafeHtml {
    return this._sanitizer.bypassSecurityTrustResourceUrl(value)
    // return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + value)
  }
}
