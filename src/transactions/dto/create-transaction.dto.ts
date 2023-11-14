import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
 

 
  export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    type: string;
  

   
    @IsString()
    @IsNotEmpty()
    bookId: number;
    
  }