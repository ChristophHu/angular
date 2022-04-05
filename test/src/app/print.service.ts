import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare var pdfMake: any;

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  constructor(private http: HttpClient) {}

  async showPdf() {
    console.log('show')
    let docDefinition = {
      content: [
        {
          text: "PDF Generated with Image from external URL",
          fontSize: 20
        },
        {
          style: "tableExample",
          table: {
            widths: [ 200, '*'],
            body: [
              ["Informação", "Comprovante"],
              [
                	{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
                {
                  image: await this.getBase64ImageFromURL(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQW9KGAkRRZgLqFeyPNnHlEN6b_qyg1gLIfvw&usqp=CAU"
                  )
                }
              ]
            ]
          }
        }
      ]
    };

    pdfMake.createPdf(docDefinition).open();
  }

  getBase64ImageFromURL(url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0)
        }
        

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }
}
