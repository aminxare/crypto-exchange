import { Body, Controller, Get, Post } from '@nestjs/common';
import { Crypto } from './crypto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateCurrenyDto from './dtos/createCurrency.dto';
import { BadRequestException } from '@nestjs/common/exceptions';

@Controller('crypto')
export class CryptoController {
  constructor(
    @InjectRepository(Crypto)
    private readonly cryptoPriceRepository: Repository<Crypto>,
  ) {}

  @Get()
  async getAllCurrencies() {
    return await this.cryptoPriceRepository.find();
  }

  @Post()
  async createCurrency(@Body() body: CreateCurrenyDto) {
    const currency = await this.cryptoPriceRepository.findOne({
      where: { name: body.name },
    });

    if (currency) {
      throw new BadRequestException('currency already exists');
    }
    return await this.cryptoPriceRepository.save({ name: body.name });
  }
}
