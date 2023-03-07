import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from '../../dtos/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    await this.booksService.create(createBookDto);
  }
}
