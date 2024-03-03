import {
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
  Query,
  Body,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDTO } from 'src/dto/users.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  Add(@Body() body: UserDTO) {
    return this.service.Add(body);
  }
  @Get()
  AllUsers() {
    return this.service.AllUsers();
  }
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
  @Put('/:id')
  Update(@Param('id') id: string) {
    return this.service.update(id);
  }

  @Delete('/:id')
  Drop(@Param('id') id: string) {
    return this.service.drop(id);
  }
  @Post('/search')
  Search(@Query('key') key) {
    return this.service.search(key);
  }
}
