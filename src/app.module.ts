import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './users/database.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/UserDataNest'), // Connect to MongoDB
    UsersModule, // Import the UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
