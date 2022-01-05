import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { selectRole } from 'src/app/modules/auth/state/selectors'
import { RootStoreState } from 'src/app/store/root-store.state'

@Directive({
  selector: '[appIsRoleOf]'
})
export class IsRoleOfDirective implements OnInit {
  @Input() public appIsRoleOf: Array<string> = []

  // roles = Object.values(Role)
  private role: string[] = []
  
  /**
   * @param {ViewContainerRef} viewContainerRef -- the location where to render the templateRef
   * @param {TemplateRef<any>} templateRef      -- the templateRef to be potentially rendered
   * @param {RolesService} rolesService         -- will give us access to the roles a user has
   */
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private store: Store<RootStoreState>
  ) {
    this.store.pipe(select(selectRole)).subscribe((role: any) => this.role = [role])
  }

  public ngOnInit(): void {
    // const idx = this.roles.findIndex((element) => this.appIsRoleOf.indexOf(element) !== -1)
    const idx = this.role.findIndex((element) => this.appIsRoleOf.indexOf(element) !== -1)
    if (idx < 0) {
      this.viewContainerRef.clear()
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }
}