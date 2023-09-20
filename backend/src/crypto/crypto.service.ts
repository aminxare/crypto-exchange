import { BadRequestException, Injectable } from '@nestjs/common';
import { Crypto } from './crypto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class CryptoService {
  constructor(
    @InjectRepository(Crypto)
    private readonly cryptoPriceRepository: Repository<Crypto>,
  ) {}

  async getAllCurrencies() {
    return await this.cryptoPriceRepository.find();
  }

  async createCurrency(name: string) {
    const currency = await this.cryptoPriceRepository.findOne({
      where: { name: name },
    });

    if (currency) {
      throw new BadRequestException('currency already exists');
    }
    return await this.cryptoPriceRepository.save({ name: name });
  }
}
