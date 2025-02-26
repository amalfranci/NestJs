import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from './database.module';
import { UserSchema, User } from './model/userSchema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Register the User model
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
