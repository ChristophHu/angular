import { ElementRef, NgZone, Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { first } from 'rxjs/operators'

import { MarkdownLibraryService } from '../markdown-library.service'

@Pipe({
  name: 'markdown',
})
export class MarkdownLibraryPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer,
    private elementRef: ElementRef<HTMLElement>,
    private _markdownLibraryService: MarkdownLibraryService,
    private zone: NgZone,
  ) { }

  transform(value: string): SafeHtml {
    if (value == null) {
      return ''
    }

    if (typeof value !== 'string') {
      console.error(`MarkdownPipe has been invoked with an invalid value type [${typeof value}]`)
      return value
    }

    const markdown = this._markdownLibraryService.compile(value)

    this.zone.onStable
      .pipe(first())
      .subscribe(() => this._markdownLibraryService.highlight(this.elementRef.nativeElement))

    return this.domSanitizer.bypassSecurityTrustHtml(markdown)
  }
}
