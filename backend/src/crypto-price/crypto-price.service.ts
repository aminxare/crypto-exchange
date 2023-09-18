import { Injectable } from '@nestjs/common';
import { CryptoPrice } from './crypto-price.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEmitter } from 'stream';

@Injectable()
export class CryptoPriceService extends EventEmitter {
  constructor(
    @InjectRepository(CryptoPrice)
    private readonly cryptoPriceRepository: Repository<CryptoPrice>,
  ) {
    super();
  }

  async savePrice(coin: string, price: number): Promise<CryptoPrice> {
    const cryptoPrice = new CryptoPrice();
    cryptoPrice.coin = coin;
    cryptoPrice.price = price;
    const savedCryptoPrice = await this.cryptoPriceRepository.save(cryptoPrice);
    this.emit('newPrice', savedCryptoPrice);

    return savedCryptoPrice;
  }

  // return latest prices
  async getAllCryptoPrices() {
    return await this.cryptoPriceRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }
}
