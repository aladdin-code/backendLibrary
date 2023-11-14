/**
 * BookController
 *
 * Controller responsible for handling book-related endpoints.
 *
 * @class BookController
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
import { BooksService } from './books.service';
import {
  CreateBookDto,
  EditBookDto,
} from './dto';
import { Book } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('books')
export class BookController {
   
  constructor(
    private booksService: BooksService,
  ) {}

  // get all the books
  @Get()
  async getAllBooks(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ) {
    const result = await this.booksService.getAllBooks(page, pageSize);
    return {
      data: result.books,
      total: result.totalBooks,
    };
  }
  // Get book detials
  @Get(':id')
  async getBookById(@Param('id') id: number) {
    try {
      return this.booksService.getBookById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Book not found');
      }
      throw error;
    }
  }


  // Add new book
  @UseGuards(AdminGuard)
  @Post()
  async addBook(  @Body() dto: CreateBookDto,) {
    return this.booksService.addBook(dto);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  async updateBook(@Param('id') id: number, @Body() dto: EditBookDto,) {
    try {
      return this.booksService.updateBook(id, dto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Book not found');
      }
      throw error;
    }
  }
  @UseGuards(AdminGuard)
  @Delete(':id')
  async deleteBook(@Param('id') id: number) {
    try {
      return this.booksService.deleteBook(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Book not found');
      }
      throw error;
    }
  }
}