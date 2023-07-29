import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

  constructor(
    private userService: UsersService,
  ) {}

  @Get()
  get() {
    return this.userService.getAllUsers();
  }

  @Post()
  create(
    @Body() user: CreateUserDto,
  ) {
    return this.userService.createUser(user);
  }
  
}
