import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { PrismaService } from 'src/prisma.service';
import { BooksService } from './books.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [PrismaService, BooksService],
})
export class BooksModel {}
