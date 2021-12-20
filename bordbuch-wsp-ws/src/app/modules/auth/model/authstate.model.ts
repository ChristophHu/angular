import { BackendResponse } from './backendresponse.model';
import { User } from './user.model'

export interface AuthState {
    // user: User | undefined
    backendResponse: BackendResponse | undefined
}