import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { Role } from 'src/app/core/models/role'
import { AuthState } from 'src/app/modules/auth/model/authstate.model'
import { selectRole } from 'src/app/modules/auth/state/selectors'
import { RootStoreState } from 'src/app/store/root-store.state'

@Directive({
  selector: '[appIsRoleOf]'
})
export class IsRoleOfDirective implements OnInit {
  // private subscription: Subscription[] = [];
  @Input() public appIsRoleOf: Array<string> = []

  roles = Object.values(Role)
  role: string[] = []
  
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
    console.log(this.appIsRoleOf)
    // const idx = this.roles.findIndex((element) => this.appIsRoleOf.indexOf(element) !== -1)
    const idx = this.role.findIndex((element) => this.appIsRoleOf.indexOf(element) !== -1)
    console.log(idx)
    if (idx < 0) {
      this.viewContainerRef.clear()
    } else {
      // appends the ref element to DOM
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }
}