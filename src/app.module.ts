import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { TransactionModule } from './transactions/transactions.module';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }), AuthModule , UserModule , BooksModule, TransactionModule ,  PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
