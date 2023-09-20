import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { CryptoPriceService } from './crypto-price.service';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class CryptoPriceScheduler {
  constructor(
    private readonly cryptoPriceService: CryptoPriceService,
    private readonly cryptoService: CryptoService,
  ) {}

  @Interval(2000) // Runs every 2 seconds
  async saveCryptoPrice() {
    try {
      // Fetch cryptocurrency prices from an API or source
      const coins = await this.cryptoService.getAllCurrencies(); // Replace with the cryptocurrency you want to track
      // Save the price in the database
      coins.forEach((c) => {
        const price = Math.floor(1000 + Math.random() * 90000); // Replace with the actual price
        this.cryptoPriceService.savePrice(c.name, price);
      });
    } catch (error) {
      console.error('Error fetching/saving cryptocurrency price:', error);
    }
  }
}
