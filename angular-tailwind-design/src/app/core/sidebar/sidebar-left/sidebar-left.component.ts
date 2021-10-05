import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.sass']
})
export class SidebarLeftComponent {
  isActive: boolean = true
  @Input() title: string = 'Verwaltung'
  @Output() sidebarActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() set sidebarActive(value: boolean) {
    this.isActive = value
  }
  
  constructor() { }

  toggle() {
    this.isActive = !this.isActive
    this.sidebarActiveChange.emit(this.isActive)
  }

  isService(): boolean {
    return (this.title == 'Service')
  }
  isController(): boolean {
    return (this.title == 'Controlling')
  }
  isAdmin(): boolean {
    return (this.title == 'Verwaltung')
  }
}
