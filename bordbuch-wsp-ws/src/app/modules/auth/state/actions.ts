import { createAction, props } from '@ngrx/store'
import { BackendResponse } from '../model/backendresponse.model';

export const login = createAction(
	"[Login Page] User Login",
	props<{backendResponse: BackendResponse}>()
)

export const logout = createAction(
	"[Top Menu] Logout"
);