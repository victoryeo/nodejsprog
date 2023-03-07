import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  name: string;
  
  @Prop(raw({
    firstName: { type: String },
    lastName: { type: String }
  }))
  author: Record<string, any>;

  @Prop()
  title: string;

  @Prop()
  pages: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);