import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { PDFPageProxy } from 'pdfjs-dist';
import { Observable } from 'rxjs';

let PDFJS: any
let PDFJSWORKER: any

function isSSR() {
  return typeof window === 'undefined';
}

if (!isSSR()) {
  // @ts-ignore
  PDFJS = require('pdfjs-dist/legacy/build/pdf');
  // @ts-ignore
  PDFJSWORKER = require('pdfjs-dist/legacy/build/pdf.worker.entry')
}

interface IPdfDocumentLoad {
  numPages: number;
}

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.sass']
})
export class PdfViewerComponent implements OnInit, AfterViewInit {
  @Input() pdfSrc: any = ''
  @Input() pageNumber = 1;
  @Input() zoom = 1.0;
  @Input() bgColor = 'rgba(0,0,0,0)'
  @Output() PdfDocumentLoad = new EventEmitter<IPdfDocumentLoad>();

  private _pdfDocument: any
  private _pdfWorkerSrc: any

  pageArray: any

  constructor() {
    if (isSSR()) {
      return;
    }

    this._pdfWorkerSrc = PDFJSWORKER
    PDFJS.GlobalWorkerOptions.workerSrc = this._pdfWorkerSrc;

    Object.defineProperty(Array.prototype, '_super', {
      enumerable: false,
    });
  }



  // getNumPages() {
  //   return this._pdfDocument._pdfInfo.numPages;
  // }

  // afterPageLoad(): IPdfDocumentLoad {
  //   const obj = {
  //     numPages: this.getNumPages()
  //   };
  //   return obj;
  // }

  async ngAfterViewInit(): Promise<void> {
    try {
      Object.defineProperty(Array.prototype, '_super', {
        enumerable: false,
      });
      this._pdfDocument = await this.getDocument();
      // this.createRenderTask();

      // this.createRenderTask();
      
    } catch (error) {
      console.log(error);
    }
  }

  private pdfData = atob(
    'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
    'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
    'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
    'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
    'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
    'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
    'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
    'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
    'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
    'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
    'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
    'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
    'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G');

  ngOnInit(): void {
    // try {
    //   this.getDocument().subscribe((document: any) => {
    //     if (document) this._pdfDocument = document
    //     console.log('pdfdoc')
    //     console.log(this._pdfDocument)
    //   })

    //   // this.createRenderTask();
      
    // } catch (error) {
    //   console.log(error);
    // }
  }

  private getDocument() {
    let pdfAsArray = this.convertDataURIToBinary(this.pdfSrc)
    // let loadingTask: Promise<any> = PDFJS.getDocument(pdfAsArray)

    // loadingTask.then((pdfDocument: any) => {
    //   console.log(pdfDocument)
    // })
    let loadingTask = PDFJS.getDocument({ data: this.pdfData })

    return loadingTask.promise.then(function(pdfDocument: unknown) {
      console.log(pdfDocument)
      return new Promise(resolve => resolve(pdfDocument));
    });
  }

  // async ngOnChanges(changes: { pageNumber: { currentValue: any; }; }) {
  //   if (!this._pdfDocument) {
  //     return;
  //   }

  //   if (
  //     changes.pageNumber &&
  //     !this.isValidPageNumberRequest(changes.pageNumber.currentValue)
  //   ) {
  //     return;
  //   }


  //   // this.getPDFMobile()
  //   this.createRenderTask();
  // }

  // // get(reducer_func: string): Observable<any> {
  // //   return new Observable ((observer) => {
  // //       const source$ = this.getReducer(reducer_func, {})
  // //       source$.subscribe((data: any) => {
  // //           observer.next(data)
  // //       }, (error: any) => observer.error(error))
  // //   })
  // // }



  // async ngOnDestroy() {
  //   if (this._pdfDocument) {
  //     this._pdfDocument.destroy();
  //     this._pdfDocument = null;
  //   }
  // }

  // isValidPageNumberRequest(requestedPage: number) {
  //   return requestedPage > 0 && requestedPage <= this.getNumPages();
  // }

  

  // private renderPage(pdf: any, pagenumber: number): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     pdf.getPage(pagenumber+1).then((page: any) => {
  //       // let scale = 6;
  //       // let viewport = page.getViewport({ scale: scale });

  //       const viewport = page.getViewport({ scale: this.zoom });
  //       const canvas: HTMLCanvasElement = this.getCanvas(viewport);
  //       // let canvas = document.createElement('canvas');
  //       // document.body.appendChild(canvas);

  //       let context = canvas.getContext('2d');
  //       canvas.height = viewport.height;
  //       canvas.width = viewport.width;

  //       let renderContext = { canvasContext: context, viewport: viewport };
  //       let renderTask = page.render(renderContext);
  //       console.log(renderTask)
  //       renderTask.promise.then(() => {
  //         let png = canvas.toDataURL('image/png');
  //         this.pageArray![pagenumber] = png;
  //         canvas.remove();
  //         resolve();
  //       });
  //     }, function (reason: any) {
  //       console.error(reason);
  //       reject(reason);
  //     });
  //   });
  // }

  // private async getPDFMobile(): Promise<void> {  
  //   return new Promise((resolve, reject) => {
  //     let loadingTask = PDFJS.getDocument(this.pdfSrc) // pdfSrc könnte auch Array aus Seiten sein!
  //     loadingTask.promise.then((pdf: any) => {
  //       console.log(pdf)

  //       let totalPages = pdf.numPages;
  //       console.log(totalPages)
  //       this.pageArray = [];

  //       let promiseArray = [];
  //       for (let pageNumber = 0; pageNumber < totalPages; pageNumber++) {
  //         promiseArray.push(this.renderPage(pdf,pageNumber));
  //       }
  //       console.log(promiseArray)

  //       Promise.all(promiseArray).then(()=>{          
  //         resolve();
  //       });
  //     }, function (reason: any) {
  //       console.error(reason);
  //       reject(reason);
  //     });
  //   });
  // }


  private convertDataURIToBinary(dataURI: string): Uint8Array {
    console.log('convert')
    const b64 = dataURI.replace(/^.+;base64,/, '');
    const raw = atob(b64);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));
  
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  // private async getPage(page: number): Promise<PDFPageProxy> {
  //   return await this._pdfDocument.getPage(page);
  // }

  // private getCanvas(viewport: { height: any; width: any; }): HTMLCanvasElement {
  //   const canvas: any = document.getElementById('pdfCanvas');
  //   canvas.height = viewport.height;
  //   canvas.width = viewport.width;
  //   return canvas;
  // }

  // private async createRenderTask(): Promise<any> {
  //   const page: any = await this.getPage(this.pageNumber);
  //   const viewport = page.getViewport({ scale: this.zoom });
  //   const canvas: HTMLCanvasElement = this.getCanvas(viewport);

  //   const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

  //   const task = page.render({
  //     canvasContext: context,
  //     viewport,
  //     background: this.bgColor
  //   });

  //   // return task;

  //   console.log(task)
  //   task.then(() => {
  //     let png = canvas.toDataURL('image/png');
  //     console.log(png)
  //     // this.pageArray![pagenumber] = png;
  //     // canvas.remove();
  //     // resolve();
  //   });
  // }
}
