import { Component, Output, TemplateRef, ViewChild, EventEmitter } from "@angular/core";
import { DropdownPanel } from "./model/dropdown-panel.model";
  
@Component({
    selector: "my-dropdown",
    templateUrl: "./dropdown.component.html",
    styleUrls: ["./dropdown.component.sass"]
})
export class DropdownComponent implements DropdownPanel {
    @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
    @Output() closed = new EventEmitter<void>();

    constructor() {}
}