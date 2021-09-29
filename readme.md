# Angular



## Complex-Forms

https://medium.com/ngconf/managing-complex-forms-in-angular-167e4141ee0f



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

Angular Services stellen Anwendungsdaten und Geschäftslogik bereit. Komponenten sollen diese Daten übernehmen und als Bindeglied zwischen View und DIenst fungieren.

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



## Leaflet

https://rodrigokamada.medium.com/adding-the-map-leaflet-component-to-an-angular-application-b2e2cfca0080



## Splash-Screen

