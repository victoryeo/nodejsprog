import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HealthModule } from './modules/health/health.module';
import { LoggingInterceptor } from './common/logging.interceptor';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/book'),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    HealthModule,
    BooksModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
