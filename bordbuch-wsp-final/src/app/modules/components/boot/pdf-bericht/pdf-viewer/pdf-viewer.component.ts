import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PDFPageProxy } from 'pdfjs-dist';

let PDFJS: any
let PDFJSWORKER: any

function isSSR() {
  return typeof window === 'undefined';
}

if (!isSSR()) {
  // @ts-ignore
  PDFJS = require('pdfjs-dist/build/pdf');
  // @ts-ignore
  PDFJSWORKER = require('pdfjs-dist/build/pdf.worker.entry')
}

interface IPdfDocumentLoad {
  numPages: number;
}

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.sass']
})
export class PdfViewerComponent implements OnInit {
  // @ViewChild("myCanvas", { static: false }) canvas!: ElementRef;
  
  @Input() pdfSrc: any = '';
  @Input() pageNumber = 1;
  @Input() zoom = 1.0;
  @Input() bgColor = 'rgba(0,0,0,0)';
  @Output() PdfDocumentLoad = new EventEmitter<IPdfDocumentLoad>();

  private _pdfDocument: any
  private _pdfWorkerSrc: any

  constructor() {
    if (isSSR()) {
      return;
    }

    this._pdfWorkerSrc = PDFJSWORKER
    PDFJS.GlobalWorkerOptions.workerSrc = this._pdfWorkerSrc;
  }

  getNumPages() {
    return this._pdfDocument._pdfInfo.numPages;
  }

  afterPageLoad(): IPdfDocumentLoad {
    const obj = {
      numPages: this.getNumPages()
    };
    return obj;
  }

  async ngOnInit(): Promise<void> {
    try {
      this._pdfDocument = await this.getDocument();
      this.createRenderTask();

      this.PdfDocumentLoad.emit(this.afterPageLoad());
    } catch (error) {
      console.log(error);
    }
  }

  async ngOnChanges(changes: { pageNumber: { currentValue: any; }; }) {
    if (!this._pdfDocument) {
      return;
    }

    if (
      changes.pageNumber &&
      !this.isValidPageNumberRequest(changes.pageNumber.currentValue)
    ) {
      return;
    }

    this.createRenderTask();
  }

  async ngOnDestroy() {
    if (this._pdfDocument) {
      this._pdfDocument.destroy();
      this._pdfDocument = null;
    }
  }

  isValidPageNumberRequest(requestedPage: number) {
    return requestedPage > 0 && requestedPage <= this.getNumPages();
  }

  private async getDocument() {
    const loadingTask = PDFJS.getDocument(this.pdfSrc);

    return loadingTask.promise.then(function(pdfDocument: unknown) {
      return new Promise(resolve => resolve(pdfDocument));
    });
  }

  private async getPage(page: number): Promise<PDFPageProxy> {
    return await this._pdfDocument.getPage(page);
  }

  private getCanvas(viewport: { height: any; width: any; }): HTMLCanvasElement {
    const canvas: any = document.getElementById('pdfCanvas');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    return canvas;
  }

  private async createRenderTask() {
    const page: any = await this.getPage(this.pageNumber);
    const viewport = page.getViewport({ scale: this.zoom });
    const canvas: HTMLCanvasElement = this.getCanvas(viewport);

    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

    const task = page.render({
      canvasContext: context,
      viewport,
      background: this.bgColor
    });

    return task;
  }
}
