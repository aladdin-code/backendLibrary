import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  /*
  id          Int           @id @default(autoincrement())
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  title       String
  author      String
  description String?
  imageLink   String
  transactions Transaction[]
  */
  export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    author: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsNotEmpty()
    imageLink: string;
  }