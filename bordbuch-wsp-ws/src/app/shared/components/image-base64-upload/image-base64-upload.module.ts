import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ImageBase64UploadComponent } from "./image-base64-upload.component";

@NgModule({
    declarations: [
        ImageBase64UploadComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ImageBase64UploadComponent
    ],
    providers: [
        
    ]
})
export class ImageBase64UploadModule { }