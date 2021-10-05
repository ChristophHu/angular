import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DropdownDirective } from './dropdown.directive'

@Component({
  template: '<div class="dropdown" appDropdown></div>'
})

class TestComponent {}

describe('DropDirective', () => {
  it('should create an instance', () => {
    const directive = new DropdownDirective()
    expect(directive).toBeTruthy()
  })
})

describe('DropDirective', () => {
  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        DropdownDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
  })

  it('should create TestComponent', () => {
    expect(component).toBeDefined()
  })

  it('should add the open-class when cliked', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement
    const div: HTMLDivElement | any = debugEl.querySelector('div')

    div.click()
    fixture.detectChanges()
  })

  it('should add "open" class to HTML elements with "dropdown" class', () => {
    const testTemplate: HTMLElement | any = fixture.debugElement.nativeElement
    testTemplate.querySelector('div').click()
    fixture.detectChanges()

    expect(testTemplate.querySelector('div.dropdown').classList).toContain('open')
  })
})
