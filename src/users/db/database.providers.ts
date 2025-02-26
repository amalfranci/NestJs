import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService): Promise<typeof mongoose> => {
      const uri:any = configService.get<string>('MONGODB_URI'); // Read the MongoDB URL from .env
      const connection = await mongoose.connect(uri);
      console.log('Database connected successfully');
      return connection;
    },
    inject: [ConfigService], // Inject ConfigService to access environment variables
  },
];