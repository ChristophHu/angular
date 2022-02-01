import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// import { IconLibraryModule } from "projects/icon-library/src/public-api";
// import { SanitizeHtmlPipe } from "../../pipes/sanitize-html/sanitize-html.pipe";
import { ImageSliderComponent } from "./image-slider.component";

@NgModule({
    declarations: [
        ImageSliderComponent
    ],
    imports: [
        CommonModule,
        // IconLibraryModule,
        // SanitizeHtmlPipe
    ],
    exports: [
        ImageSliderComponent
    ],
    providers: [
        
    ]
})
export class ImageSliderModule { }