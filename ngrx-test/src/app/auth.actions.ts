import { createAction, props } from '@ngrx/store'
import { User } from './models/user'

export const login = createAction(
	"[App] User Login",
    props<{ user: User }>()
)