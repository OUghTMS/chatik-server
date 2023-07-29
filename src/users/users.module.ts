import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersPublicController } from './users-public.controller';
import { UsersService } from './users.service';
import { User } from './users.model';

@Module({
  controllers: [UsersController, UsersPublicController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User]),
  ],
})
export class UsersModule {}
