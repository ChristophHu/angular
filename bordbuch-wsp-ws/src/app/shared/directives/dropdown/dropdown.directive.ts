import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // jedes Element, welches geklickt wird, toggled die Klasse 'open'
  @HostBinding('class.open') isOpen = false

  @HostListener('click') toggleOpen() {
    document.querySelectorAll('.open').forEach(el => el.classList.remove('open'))
    this.isOpen = !this.isOpen
  }
}
