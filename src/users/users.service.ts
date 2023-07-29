import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(

    @InjectModel(User)
    private user: typeof User,

  ) {}

  async getAllUsers() {
    return await this.user.findAll();
  }

  async getAllPublicUsers() {
    return await this.user.scope('public').findAll();
  }

  async createUser(user: CreateUserDto) {
    return await this.user.create(user);
  }
}
