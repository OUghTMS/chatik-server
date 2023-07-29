import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('public/users')
export class UsersPublicController {

  constructor(
    private userService: UsersService,
  ) {}

  @Get()
  get() {
    return this.userService.getAllPublicUsers();
  }

}
