/**
 * TransactionController
 *
 * Controller responsible for handling transaction-related endpoints.
 *
 * @class TransactionController
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { AdminGuard, JwtGuard } from '../auth/guard';
import { TransactionsService } from './transactions.service';
import {
  CreateTransactionDto,
  
} from './dto';
import { Book } from '@prisma/client';


@UseGuards(JwtGuard)
@Controller('transactions')
export class TransactionController {
   
  constructor(
    private transactionsService: TransactionsService,
  ) {}
  // get all the transactions

  
  @Get()
  async getMyTransactions(
    @GetUser('id') userId: number
  ) {
    return await this.transactionsService.getMyTransactions(userId);
  }  
    @Post()
    async addTransaction(
      @GetUser('id') userId: number,
        @Body() dto: CreateTransactionDto,) {
          
      return this.transactionsService.addTransaction(userId , dto);
    }
  }


  

 