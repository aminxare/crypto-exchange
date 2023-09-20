import { Body, Controller, Get, Post } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private cryptoService: CryptoService) {}

  @Get()
  async getAllCurrencies() {
    return await this.cryptoService.getAllCurrencies();
  }

  @Post()
  async createCurrency(@Body('name') name: string) {
    return await this.cryptoService.createCurrency(name);
  }
}
