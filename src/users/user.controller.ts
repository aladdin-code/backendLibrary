/**
 * UserController
 *
 * Controller responsible for handling user-related endpoints.
 *
 * @class UserController
 */
import {
  Body,
  Controller,
  Get,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard, AdminGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
@UseGuards(JwtGuard, AdminGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  // Delete a user
  @Delete(':id')
  deleteUser(@GetUser('id') userId: number) {
    return this.userService.deleteUser(userId);
  }
}
