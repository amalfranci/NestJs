import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Remove ParseIntPipe, as MongoDB IDs are strings
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.usersService.create(createUser); // Use the correct method name
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name: string;
      role:
        | 'Software Engineer'
        | 'Product Manager'
        | 'UX Designer'
        | 'Data Analyst'
        | 'Admin';
      email: string;
    },
  ) {
    return this.usersService.update(id, userUpdate); // Pass the string ID
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id); // Pass the string ID
  }
}