import { Module } from '@nestjs/common';
import { CryptoPriceController } from './crypto-price.controller';
import { CryptoPriceService } from './crypto-price.service';
import { CryptoPriceScheduler } from './crypto-price.scheduler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoPrice } from './crypto-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CryptoPrice])],
  controllers: [CryptoPriceController],
  providers: [CryptoPriceService, CryptoPriceScheduler],
})
export class CryptoPriceModule {}
