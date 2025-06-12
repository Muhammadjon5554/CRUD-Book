import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModel } from './books/books.module';

@Module({
  imports: [BooksModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
