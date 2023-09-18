import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoPriceModule } from './crypto-price/crypto-price.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CryptoGateway } from './crypto/crypto.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT!,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    CryptoPriceModule,
  ],
  controllers: [AppController],
  providers: [AppService, CryptoGateway],
})
export class AppModule {}
