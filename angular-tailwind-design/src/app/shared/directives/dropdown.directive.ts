import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // jedes Element, welches geklickt wird, toggled die Klasse 'open'
  @HostBinding('class.open') isOpen = false

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
  }
}
