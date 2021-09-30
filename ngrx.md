# NgRx



## Vorbereitung

### Installation

```bash
npm install @ngrx/{store,store-devtools}
```

| Module                  | Funktion                                                     |
| ----------------------- | ------------------------------------------------------------ |
| `@ngrx/store`           | Stellt `action`, `reducer`, `select` und `store` bereit.     |
| `@ngrx/store/dev-tools` | Ein komfortables Debugging mit Browser-Extension.            |
| `@ngrx/schematics`      | Erweiterung für die Angular-CLI, um Code erzeugen zu lassen. |
| `@ngrx/effects`         | API zum Handling von Seiteneffekten.                         |
| `@ngrx/router-store`    | Synchronisiert den Router Location-Status mit dem Store.     |
| `@ngrx/data`            | Automatisiert die Erzeugung von Effekten und Reducern für CRUD-Szenarien. Siehe https://ngrx.io/guide/data |



### Initialisierung

```bash
ng generate store State
```

In der `app-module.ts` wird die `StoreModule.forRoot()`-Funktion hinzugefügt. In weiteren Modulen kann dann eine weitere `StoreModule.forFeature()`-Funktion hinzugefügt werden.



## Grundlagen

https://medium.com/@knoldus/basics-of-ngrx-719f6360e2bf

Ngrx besteht aus 6 grundlegenden Teilen:

1. Selector,
2. Store,
3. Reducer,
4. Action,
5. Component und
6. Effects.

![](assets/img/ngrx/ngrx-lifecircle.svg)



### Erste Angular Anwendung

#### Store installieren

```bash
npm install @ngrx/store
```

#### Store initialisieren

In der `app.module.ts` wird der Store importiert und initialisiert.

```typescript
import { StoreModule } from '@ngrx/store'
...
StoreModule.forRoot({})
```

In jedem Module (`product.module.ts`), welches den Store nutzt, muss dieser anschließend als `StoreModule.forFeature('producs, {}')` aufgenommen werden.

In der jeweiligen Component ist der Store zu injecten:

```typescript
constructor(private store: Store<any>) {}
```

Auf den STore wird subscribed:

```typescript
this.store.select(‘products’)
this.store.pipe(select(‘products’)).subscribe(products => {
    if (products) {
        this.displayCode = products.showProductCode;
    }
})
```



#### Actions und State definieren

Bei Actions handelt es sich um einen Event, welcher den State der Anwendung verändert. Erst mit dem `dispatch` (versenden) der Action vom Controller zum Reducer wird die Veränderung angestoßen.

```html
<input type=”checkbox” (change)=”checkChanged($event.target.checked)” [checked]=”displayCode”>
<div *ngIf="displayCode">
    
</div>
```



```typescript
checkChanged(value: boolean): void {
    this.store.dispatch({
        type: ‘TOGGLE_PRODUCT_CODE’,
        payload: value
    });
}
```



#### Reducer erzeugen

Der Reducer nutzt zwei Argumente: den State und die Action und gibt den State als aktuellen Stand des Stores zurück. Als "pure function" wird bezeichnet, dass der Reducer mit ein und dem selben Input auch immer das selbe Output erzeugt.

```typescript
export function reducer(state, action) {
    switch(action.type) {
        default:
        	return state
    }
}
```

