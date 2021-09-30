export interface User {
    id: number;
    userName: string;
    isAdmin: boolean;
}

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}
// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: UserState;
}
