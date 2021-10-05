import { Role } from "./role";

export class User {
    username: string = ''
    password: string = ''
    firstName: string = ''
    lastName: string = ''
    role: Role = Role.bootsstreifendienst
    accessToken?: string = ''
}