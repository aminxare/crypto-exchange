import { Injectable } from '@nestjs/common';
import { CryptoPrice } from './crypto-price.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CryptoPriceService {
  constructor(
    @InjectRepository(CryptoPrice)
    private readonly cryptoPriceRepository: Repository<CryptoPrice>,
  ) {}

  async savePrice(coin: string, price: number): Promise<CryptoPrice> {
    const cryptoPrice = new CryptoPrice();
    cryptoPrice.coin = coin;
    cryptoPrice.price = price;
    return await this.cryptoPriceRepository.save(cryptoPrice);
  }
}
