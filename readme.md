# Angular

## cdk-Stepper

Bei dem cdl-Stepper handelt es sich um eine API, die alle benötigten Stepper-Komponenten enthält. Diese sind einfach anzuwenden und flexibel anpassbar.

```bash
npm i @angular/cdk
```

In der Datei `app.module.ts` ist anschließend das `CdkStepperModule` mit auf zu nehmen.

DIe ausführung des Steppers erfolgt in der jeweiligen Komponente:

```html
<simple-stepper>
  <cdk-step>
    <p>This is any content of "Step 1"</p>
  </cdk-step>
  <cdk-step>
    <p>This is any content of "Step 2"</p>
  </cdk-step>
</simple-stepper>
```

Wie an den Tags zu erkennen ist, existiert eine weitere Komponente `SimpleStepper`. Diese kann erstellt werden und beinhaltet den allgemeinen Aufbau. Der Inhalt der Tags `cdk-step` wird dann Zum Inhalt der einzelnen Step-Darstellungen.

Die Komponente `SimpleStepper` nutzt das `[ngTemplateOutlet]` zur Ausgabe des angesprochenen Inhalts. In diesem Fall sind im Footer die Buttons zum Vor- und Zurück-springen (`cdkStepperPrevious` und `cdkStepperNext`) sowie der direkten Auswahl.

```html
<section class="example-container">
  <header>
    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>
  </header>

  <div [ngTemplateOutlet]="selected ? selected.content : null"></div>

  <footer class="example-step-navigation-bar">
    <button class="example-nav-button" cdkStepperPrevious>&larr;</button>
    <button class="example-step" [class.example-active]="selectedIndex === i" *ngFor="let step of steps; let i = index"
      (click)="selectStepByIndex(i)">
      Step {{ i + 1 }}
    </button>
    <button class="example-nav-button" cdkStepperNext>&rarr;</button>
  </footer>
</section>
```

Die Einbindung der CDK erfolgt in der `.ts`-Datei. Dort wird diese unter Providers aufgenommen und die Klasse `CdkStepper` der Klasse vererbt:

```typescript
import { CdkStepper } from '@angular/cdk/stepper'	
	...
	providers: [{ provide: CdkStepper, useExisting: SimpleStepperComponent}]
})
export class SimpleStepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
```



## Complex-Forms

https://medium.com/ngconf/managing-complex-forms-in-angular-167e4141ee0f



## Component based on User-Role

https://www.geekstrick.com/view-component-based-on-user-role/



## Documentation

https://medium.com/vincent-ogloblinsky/compodoc-documentation-tool-for-angular-2-applications-44ec650e01a8

### Installation

```bash
npm install -g @compodoc/compodoc
```

### Konfiguration

Es ist eine Datei `tsconfig.doc.json`zu erstellen und der folgende Inhalt zu übertragen:

```json
{
  "include": ["src/**/*.ts"],
  "exclude": ["src/test.ts", "src/**/*.spec.ts", "src/app/file-to-exclude.ts"]
}
```

In der `package.json` ist das Script zur Ausführung hinzuzufügen:

```json
"scripts": {
  "compodoc": "npx compodoc -p tsconfig.doc.json"
}
```

### Ausführung

```bash
npm run compodoc
```



## FacadeService

https://balramchavan.medium.com/best-practices-building-angular-services-using-facade-design-pattern-for-complex-systems-d8c516cb95eb

> Fassade ist ein Entwurfsmuster aus dem Bereich der Softwareentwicklung, das zur Kategorie der Strukturmuster (engl. structural design patterns) gehört. Es bietet eine einheitliche und meist vereinfachte Schnittstelle zu einer Menge von Schnittstellen eines Subsystems.
>
> <p style="color: gray;">Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides: Entwurfsmuster. 5. Auflage. Addison-Wesley, 1996, S. 212

Angular Services stellen Anwendungsdaten und Geschäftslogik bereit. Komponenten sollen diese Daten übernehmen und als Bindeglied zwischen View und Dienst fungieren.

Um alle Dienst anzubinden, werden diese entweder in einem einzigen Service implementiert oder es müssen alle verteilten Services angebunden werden.

Es ist ratsam Services funktionsorientiert zu erstellen. So muss ggf. ein Service für das Login, Registrierung, Dashboard,... implementiert werden. Werden in einer Komponente mehrere Services benötigt sind auch dementsprechent viele Services einzubinden.

### Services Module

```typescript
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    OrderService,
    
    FacadeService
  ]
})
export class ServicesModule { }
```

Durch das `ServicesModule ` können alle Services zentral aufgenommen werden.



### Implementierung

```typescript
@Injectable()
export class FacadeService {
  private _orderService: OrderService;
  public get orderService(): OrderService {
    // singleton implementation
    if(!this._orderService){
      this._orderService = this.injector.get(OrderService);
    }
    return this._orderService;
  }
  
  constructor(private injector: Injector) {  }

  getOrderList() {
    return this.orderService.getOrderList();
  }
  getAddress() {
    return this.orderService.getAddress();
  }
}
```

In der `app.component.ts` kann nun einfach der `FacadeService` injectet werden. Anschließend können alle im Service hinterlegten Funktionen aufgerufen werden. Durch eine Singleton-Implementierung wird der OrderService nur ein einziges Mal aufgenommen. Wenn die besagte Get-Funktion als `public` gesetzt wird, kann so auch der OrderService selbst angesprochen werden.

```typescript
export class AppComponent implements OnInit {
  constructor(private facadeService: FacadeService) { }
  
  ngOnInit(): void {
    console.log(this.facadeService.getOrderList())
    console.log(this.facadeService.orderService.getOrderList())
  }
}
```



## Icon-Library

### Implementierung

```bash
ng g library icons
```

```bash
ng build icons
```



## In Memory Web API

Durch eine "In Memory Web API" wird eine API gemockt. Diese kann für Tests verwendet werden und emuliert CRUD-Operationen über eine REST API.

### Installation

```bash
npm i angular-in-memory-web-api
```



### Implementierung

Nach der Installation kann in der `app.module.ts` die Web API importiert werden.

```typescript
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';
...
imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData)
]
```

Durch die Datei `product-data.ts` wird dann die API bespielt:

```typescript
import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface Product {
    id: number | null;
    productName: string;
    description: string;
}

export class ProductData implements InMemoryDbService {

    createDb() {
        const products: Product[] = [
            {
                id: 1,
                productName: 'Leaf Rake',
                description: 'Leaf rake with 48-inch wooden handle'
            },
            {
                id: 2,
                productName: 'Garden Cart',
                description: '15 gallon capacity rolling garden cart'
            }
        ];
        return { products };
    }
}

```

Diese Datenbank erhält im Anschluss eine Anbindung an: `/api/products`.

Ab diesem Zeitpunkt kann durch jeden Service diese API angefragt werde:

```typescript
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
    private productsUrl = 'api/products';

    constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('init')
    this.http.post('commands/resetDb', { clear: true })
  }

    getProducts(): Observable<Product[]> {
        console.log('test')
        return this.http.get<Product[]>(this.productsUrl)
          .pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
          );
    }
    createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const newProduct = { ...product, id: null };
    return this.http.post<Product>(this.productsUrl, newProduct, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }
  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put<Product>(url, product, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        map(() => product),
        catchError(this.handleError)
      );
  }

    private handleError(err: any) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
```



## Leaflet

https://rodrigokamada.medium.com/adding-the-map-leaflet-component-to-an-angular-application-b2e2cfca0080



## NgRx

https://medium.com/@ZombieCodeKill/angular-ngrx-getting-started-f0202e0eba47

## NgRx-Facades

![https://miro.medium.com/max/1346/1*fjwlk2CVF4Y0MS_sADwqmA.jpeg](https://miro.medium.com/max/1346/1*fjwlk2CVF4Y0MS_sADwqmA.jpeg)

![https://miro.medium.com/max/1354/1*-vkURnukSMKCErX2iktn1w.jpeg](https://miro.medium.com/max/1354/1*-vkURnukSMKCErX2iktn1w.jpeg)

### Vorbereitung

Unter `src/app/` wird eine neue Komponente `Cars` erstellt. Dazu werden die Ordner `store` und `service` hinzugefügt.

Angular CLI und Core solte aktualisiert werden!

```bash
ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest
ng add @ngrx/router-store@latest
ng add @ngrx/effects@latest
ng add @ngrx/entity@latest
```

In die `app-module.ts`:

```typescript
import { StoreModule } from '@ngrx/store'
...
StoreModule.forRoot({})
```

Diese kann auch in eine separate Datei `root-store.module.ts` ausgelagert werden:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({}),
    StoreRouterConnectingModule.forRoot()
  ]
})
export class RootStoreModule { }
```





## Markdown

```bash
npm i -g ngx-markdown
```

In die `angular.json`

```json
"scripts": [
    "node_modules/marked/lib/marked.js",
    "node_modules/prismjs/prism.js",
    "node_modules/prismjs/components/prism-csharp.min.js",
    "node_modules/prismjs/components/prism-css.min.js"
]
```

In die `app.module.ts`

```typescript
imports: [
    ...
    MarkdownModule.forRoot()
]
```



```typescript
<markdown [src]="'assets/md/changelog.md'"></markdown>
```



## QR-Code-Scanner

Es existieren aktuell zwei gute Libraries zum scannen von QR-Codes:

1. https://github.com/zxing-js/ngx-scanner
2. https://www.npmjs.com/package/angular2-qrscanner-fixed

Zweiterer bereitet in Android Probleme mit der rückseitigen Kamera. Ersteres funktioniert Problemfrei. Dieser soll im Folgenden betrachtet werden:

```bash
npm i @zxing/browser@latest --save
npm i @zxing/library@latest --save
npm i @zxing/ngx-scanner@latest --save
```

```html
<zxing-scanner (scanSuccess)="onCodeResult($event)"></zxing-scanner>
```

Das Ergebnis des Scan-Vorgangs kann im Controller abgefangen werden:

 ```typescript
 onCodeResult(result: string) {
     this.modal?.close()
 }
 ```



## Splash-Screen

