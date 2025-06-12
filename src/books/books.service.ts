import { Injectable, NotFoundException } from '@nestjs/common';
import { Books } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  getAllBooks() {
    return this.prisma.books.findMany();
  }

  async getBookById(id: number) {
    const book = await this.prisma.books.findFirst({
      where: {
        id: id,
      },
    });

    if (!book) {
      throw new NotFoundException('book is not found by this id');
    }
    return book;
  }

  createBook(book: Books) {
    return this.prisma.books.create({
      data: book,
    });
  }

  updateBook(book: Partial<Books>, id: number) {
    return this.prisma.books.update({
      where: {
        id,
      },
      data: book,
    });
  }
  deleteBook(id: number) {
    return this.prisma.books.delete({
      where: {
        id,
      },
    });
  }

  async getBooksCount() {
    return this.prisma.books.count();
  }
}
