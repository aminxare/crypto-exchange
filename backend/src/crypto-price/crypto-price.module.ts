import { Module } from '@nestjs/common';
import { CryptoPriceController } from './crypto-price.controller';
import { CryptoPriceService } from './crypto-price.service';
import { CryptoPriceScheduler } from './crypto-price.scheduler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoPrice } from './crypto-price.entity';
import { CryptoModule } from 'src/crypto/crypto.module';

@Module({
  imports: [TypeOrmModule.forFeature([CryptoPrice]), CryptoModule],
  controllers: [CryptoPriceController],
  providers: [CryptoPriceService, CryptoPriceScheduler],
  exports: [CryptoPriceService],
})
export class CryptoPriceModule {}
