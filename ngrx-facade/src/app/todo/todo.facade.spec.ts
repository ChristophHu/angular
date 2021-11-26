import { inject, NgModule } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { EffectsModule } from '@ngrx/effects'
import { StoreModule, Store } from '@ngrx/store'

import { Effects } from './store/todo.effects'
import { TodoFacade } from './todo.facade'
import { TodoState, initialDataState, reducer } from './store/todo.reducer'

interface TestSchema {  
  'todo' : TodoState
}

describe('TodoFacade', () => {
  let facade: TodoFacade
  let store: Store<TestSchema>
  let createTodo: any

  beforeEach(() => {
    createTodo = ( id:string): any => ({
       id
    });
  });

  describe('used in NgModule', async () => {

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('todo', reducer),
          EffectsModule.forFeature([Effects])
        ],
        providers: [TodoFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] })

      store = TestBed.get(Store)
      facade = TestBed.get(TodoFacade)
    });

    it('retrieves todos', async () => {
        facade.loadTodo()
        facade.todos$.subscribe( result => {         
            expect(result.length).toBeGreaterThan(0)
        })     
    })

    it('retrieves spec. todos', async () => {
        facade.loadTodo()
        facade.todos$.subscribe( result => {      
            console.log(result)   
            expect(result).toEqual([{id: '1'}])
        })    
    })
  })
})