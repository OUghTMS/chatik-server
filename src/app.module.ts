import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { User } from "./users/users.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      username: 'postgres',
      password: '7877',
      host: 'localhost',
      port: 5432,
      database: 'chatik',
      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}