import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,ValidationPipe
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /*
    GET   /users
    GET   /user/:id
    POST  /users
    PATCH /users/:id
    DELETE /users/:id

    */
  @Get() //
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id') //
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Post() //
  create(@Body(ValidationPipe) createUser:CreateUserDto) {
    return this.usersService.createUser(createUser)
  }

  @Patch(':id') //
  update(@Param('id') id: string, @Body() userUpdate: { name: string;
    role:
      | 'Software Engineer'
      | 'Product Manager'
      | 'UX Designer'
      | 'Data Analyst'
      | 'Admin';
    email: string;}): any {
    return this.usersService.update(+id,userUpdate)
  }

  @Delete(':id') //
  delete(@Param('id') id: string): { id: number; name: string; role: string; email: string } | undefined {
    return this.usersService.delete(+id);
  }
}
