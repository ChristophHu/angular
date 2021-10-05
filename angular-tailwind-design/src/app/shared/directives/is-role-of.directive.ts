import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/core/models/role';

@Directive({
  selector: '[appIsRoleOf]'
})
export class IsRoleOfDirective implements OnInit {
  private subscription: Subscription[] = [];
  @Input() public appIsRoleOf: Array<string> = []

  roles = Object.values(Role)
  /**
   * @param {ViewContainerRef} viewContainerRef -- the location where to render the templateRef
   * @param {TemplateRef<any>} templateRef      -- the templateRef to be potentially rendered
   * @param {RolesService} rolesService         -- will give us access to the roles a user has
   */
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
    // private rolesService: RolesService
  ) {}

  public ngOnInit(): void {
    const idx = this.roles.findIndex((element) => this.appIsRoleOf.indexOf(element) !== -1);
    if (idx < 0) {
      this.viewContainerRef.clear();
    } else {
      // appends the ref element to DOM
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}