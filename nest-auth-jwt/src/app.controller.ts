import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common'
import { AuthService } from './auth/auth.service'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { User } from './users/user'

@Controller()
export class AppController {
  constructor( private authService: AuthService ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: User) {
    return this.authService.login(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Body() user: User) {
    return user
  }
}
