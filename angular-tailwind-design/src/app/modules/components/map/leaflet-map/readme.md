# Leaflet

## Vorbereitung

### Installation
https://www.npmjs.com/package/leaflet
```bash
npm i leaflet
npm i @types/leaflet
```
### app.module.ts
```typescript

```

### html
```html
<div class="map-container">
    <div class="map-frame">
        <div id="map"></div>
    </div>
</div>
```

### style.scss
```scss
@import "~leaflet\dist\leaflet.css"
```

### angular.json
```json
"assets": [
    "src/favicon.ico",
    "src/assets",
    {
        "glob": "**/*",
        "input": "node_modules/leaflet/dist/images/",
        "output": "./assets/"
    }
]
```

### Icon-path
```typescript
    L.Icon.Default.imagePath = "assets/leaflet/"
```

