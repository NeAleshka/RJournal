import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { SearchUserDto } from './dto/search-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('search')
  search(@Query() dto: SearchUserDto) {
    return this.usersService.search(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return this.usersService.findById(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('me')
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    console.log(req.user);
    return this.usersService.update(+req.user.id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(+id);
  }
}
