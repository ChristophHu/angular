import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import { SanitizeHtmlPipe } from './sanitize-html/sanitize-html.pipe';

@NgModule({
    declarations: [
        CarouselComponent,
        SanitizeHtmlPipe,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CarouselComponent,
        SanitizeHtmlPipe
    ],
    providers: [

    ],
    bootstrap: [
        
    ],
    entryComponents: [
        CarouselComponent
    ]
})
export class IvyCarouselModule { }
