import { Controller, Get } from '@nestjs/common';
import { Entity } from 'src/database/interfaces';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): Entity[] {
    return this.userService.getHello();
  }
}
