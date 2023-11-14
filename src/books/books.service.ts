import { Injectable , NotFoundException } from "@nestjs/common";
import { Book } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBookDto, EditBookDto } from "./dto";
@Injectable()
export class BooksService {
    constructor(private prisma: PrismaService) {}
    // get all book
    async getAllBooks(page: number = 1, pageSize: number = 10) {
        const skip = (page - 1) * pageSize;
        const take: number = parseInt(pageSize.toString(), 10);
        const books = await this.prisma.book.findMany({
          skip,
          take: take,
        });
        const totalBooksCount = await this.prisma.book.count();
        const totalBooks: number = parseInt(totalBooksCount.toString(), 10);
        return {
          books,
          totalBooks,
        };
      }
      async addBook(
        dto: CreateBookDto,
      ) {
        const newBook =
          await this.prisma.book.create({
            data: {
              ...dto,
            },
          });
        return newBook;
      }
      async getBookById(id: number) {
        const bookdId: number = parseInt(id.toString(), 10);
        const foundBook = await this.prisma.book.findUnique({
          where: { id :bookdId },
        });
        if (!foundBook) {
          throw new NotFoundException('Book not found');
        }
        return foundBook;
      }
      async updateBook(id: number,     dto: EditBookDto,) {
        const bookdId: number = parseInt(id.toString(), 10);
        const existingBook = await this.prisma.book.findUnique({
          where: { id:bookdId },
        });
        if (!existingBook) {
          throw new NotFoundException('Book not found');
        }
        return this.prisma.book.update({
          where: { id: bookdId },
          data: dto,
        });
      }
      async deleteBook(id: number) {
        const bookdId: number = parseInt(id.toString(), 10);
        const existingBook = await this.prisma.book.findUnique({
          where: { id : bookdId },
        });
        if (!existingBook) {
          throw new NotFoundException('Book not found');
        }
        return this.prisma.book.delete({
          where: { id : bookdId },
        });
      }
}