import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from '../users/db/database.providers';

@Module({
  imports: [ConfigModule.forRoot()], // Load environment variables
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}