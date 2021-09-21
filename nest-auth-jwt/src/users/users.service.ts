import { Injectable } from '@nestjs/common'

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userId: 1,
          username: '24225132',
          password: 'password',
          role:     'administration'
        },
        {
          userId: 2,
          username: '24225131',
          password: 'password',
          role:     'administration'
        },
        { 
          userId: 3,
          username: "john",
          password: "changeme"
        }
      ];
    
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
      }

      async getRole(username: string): Promise<String | undefined> {
        const user = this.users.find(user => user.username === username)
        return user.role
      }
}
