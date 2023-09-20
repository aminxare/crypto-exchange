import { BadRequestException, Injectable } from '@nestjs/common';
import { Crypto } from './crypto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class CryptoService {
  constructor(
    @InjectRepository(Crypto)
    private readonly cryptoRepository: Repository<Crypto>,
  ) {}

  async getAllCurrencies() {
    const res: any = await this.cryptoRepository.find({
      // relations: {
      //   prices: true,
      // },
    });
    return res;
  }

  async createCurrency(name: string) {
    const currency = await this.cryptoRepository.findOne({
      where: { name: name },
    });

    if (currency) {
      throw new BadRequestException('currency already exists');
    }
    return await this.cryptoRepository.save({ name: name });
  }
}
