import { HttpException, HttpStatus, Injectable , NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTransactionDto } from "./dto";
import { Transaction } from "@prisma/client";
 

@Injectable()
export class TransactionsService {

    constructor(private prisma: PrismaService) {}
    // get all book
    async getMyTransactions(userId: number): Promise<Transaction[]> {
        // Retrieve transactions for the given user
        return this.prisma.transaction.findMany({
          where: { userId },
        });
      }
    
      async addTransaction(id : number , dto: CreateTransactionDto): Promise<Transaction> {
        console.log("userrrrrrrrrrrrrrrr");
        console.log(id);
        console.log("userrrrrrrrrrrrrrrr");
        const {   bookId, type } = dto;
    
        // Check if the user can rent or return the book based on certain conditions
        const bookIdNm: number = parseInt(bookId.toString(), 10);
        if (type === 'loan') {
          const existingTransaction = await this.prisma.transaction.findFirst({
            where: {
              id,
              bookId: bookIdNm,
              type: 'loan', 
            },
          });
    
          if (existingTransaction) {
            throw new HttpException('User already has a pending loan for this book.', HttpStatus.BAD_REQUEST);
           
          }
        } else if (type === 'return') {
         
          const existingTransaction = await this.prisma.transaction.findFirst({
            where: {
              userId : id,
             bookId: bookIdNm,
              type: 'loan',  
            },
          });
    
          if (!existingTransaction) {
            throw new HttpException('User does not have a pending loan for this book.', HttpStatus.NOT_FOUND);
          }
        } else {
          
          throw new HttpException('Invalid transaction type.', HttpStatus.BAD_REQUEST);
        }
    
        // Add the new transaction to the database
        return this.prisma.transaction.create({
          data: {
            userId : id,
            bookId: bookIdNm,
            type,
          },
        });
      }
     
   
}