import { Module } from '@nestjs/common';

import { BookController } from './books.controller';
import { BooksService } from './books.service';

@Module({
    controllers: [BookController],
    providers: [BooksService],
})
export class BooksModule {}