import { Inject, Injectable, InjectionToken, Optional, PLATFORM_ID, SecurityContext } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { marked, Renderer } from 'marked'
import { DomSanitizer } from '@angular/platform-browser'
import { map, Observable } from 'rxjs'
import { isPlatformBrowser } from '@angular/common'

export class MarkedOptions {
  baseUrl?: string
  breaks?: boolean
  gfm?: boolean
  headerIds?: boolean
  headerPrefix?: string
  langPrefix?: string
  mangle?: boolean
  pedantic?: boolean
  renderer?: Renderer
  silent?: boolean
  smartLists?: boolean
  smartypants?: boolean
  xhtml?: boolean
  highlight?(code: string, lang: string, callback?: (error: any | undefined, code: string) => void): string
}
export class KatexOptions {
  displayMode?: boolean
  throwOnError?: boolean
  errorColor?: string
  macros?: any
  colorIsTextColor?: boolean
  maxSize?: number
  maxExpand?: number
  allowedProtocols?: string[]
  strict?: boolean | string | Function
}

declare let joypixels: {
  shortnameToUnicode(input: string): string
}

declare let katex: {
  renderToString(tex: string, options?: KatexOptions): string
}

declare let Prism: {
  highlightAllUnder: (element: Element | Document) => void
}

export const errorJoyPixelsNotLoaded = '[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information'
export const errorKatexNotLoaded = '[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information'
export const errorSrcWithoutHttpClient = '[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information'

export const SECURITY_CONTEXT = new InjectionToken<SecurityContext>('SECURITY_CONTEXT')

@Injectable()
export class MarkdownLibraryService {

  private readonly initialMarkedOptions: MarkedOptions = {
    renderer: new Renderer(),
  }

  private _options: MarkedOptions | undefined
  get options(): MarkedOptions { return this._options! }
  set options(value: MarkedOptions) {
    this._options = { ...this.initialMarkedOptions, ...value }
  }

  get renderer(): Renderer { return this.options.renderer! }
  set renderer(value: Renderer) {
    this.options.renderer = value
  }

  constructor(
    @Inject(PLATFORM_ID) private platform: Object,
    @Inject(SECURITY_CONTEXT) private securityContext: SecurityContext,
    @Optional() private _httpClient: HttpClient,
    @Optional() options: MarkedOptions,
    private _sanitizer: DomSanitizer
  ) {
    this.options = options
  }

  compile(markdown: string, decodeHtml = false, emojify = false,  markedOptions = this.options): string {
    const trimmed = this.trimIndentation(markdown)
    const decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed
    const compiled = marked(decoded, markedOptions)
    return this._sanitizer.sanitize(this.securityContext, compiled) || ''
  }

  getSource(src: string): Observable<string> {
    if (!this._httpClient) {
      throw new Error('error with HttpClient')
    }
    return this._httpClient
      .get(src, { responseType: 'text' })
      .pipe(map((markdown: any) => this.handleExtension(src, markdown)))
  }

  highlight(element?: Element | Document): void {
    if (!isPlatformBrowser(this.platform)) {
      return
    }
    if (typeof Prism !== 'undefined') {
      if (!element) {
        element = document
      }
      const noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])')
      Array.prototype.forEach.call(noLanguageElements, (x: Element) => x.classList.add('language-none'))
      Prism.highlightAllUnder(element)
    }
  }

  private handleExtension(src: string, markdown: string): string {
    const extension = src
      ? src.split('?')[0].split('.').splice(-1).join()
      : ''
    return extension !== 'md'
      ? '```' + extension + '\n' + markdown + '\n```'
      : markdown
  }

  private decodeHtml(html: string): string {
    if (!isPlatformBrowser(this.platform)) {
      return html
    }
    const textarea = document.createElement('textarea')
    textarea.innerHTML = html
    return textarea.value
  }

  private trimIndentation(markdown: string): string {
    if (!markdown) {
      return ''
    }
    let indentStart: number
    return markdown
      .split('\n')
      .map(line => {
        let lineIdentStart = indentStart
        if (line.length > 0) {
          lineIdentStart = isNaN(lineIdentStart)
            ? line.search(/\S|$/)
            : Math.min(line.search(/\S|$/), lineIdentStart)
        }
        if (isNaN(indentStart)) {
          indentStart = lineIdentStart
        }
        return lineIdentStart
          ? line.substring(lineIdentStart)
          : line
      }).join('\n')
  }
}
