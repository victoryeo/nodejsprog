import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from '../../dtos/create-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    Logger.log(createBookDto)
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedBook = await this.bookModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedBook;
  }
}
