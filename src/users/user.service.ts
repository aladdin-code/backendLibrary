import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

 
  async deleteUser(
    userId: number,
    
  ) {
  
    const user = await this.prisma.user.delete({
      where: {
        id: userId,
      },
       
    });

    delete user.passwordHash;

    return user;
  }
  async getAllUsers(
     
  ) {
    const users = await this.prisma.user.findMany( );
    for (const user of users) {
        delete user.passwordHash;
      }
    return users;
  }
}