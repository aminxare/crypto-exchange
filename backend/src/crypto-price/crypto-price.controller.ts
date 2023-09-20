import { Controller, Get, Param } from '@nestjs/common';
import { CryptoPriceService } from './crypto-price.service';

@Controller('crypto-price')
export class CryptoPriceController {
  constructor(private readonly cryptoPriceService: CryptoPriceService) {}

  @Get()
  async getAllCoinPrice() {
    return await this.cryptoPriceService.getAllCryptoPrices();
  }

  @Get(':coin')
  async getCoinPrice(@Param('coin') coin: string) {
    return await this.cryptoPriceService.getCoinPrice(coin);
  }
}
