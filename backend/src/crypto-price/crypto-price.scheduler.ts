import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { CryptoPriceService } from './crypto-price.service';

@Injectable()
export class CryptoPriceScheduler {
  constructor(private readonly cryptoPriceService: CryptoPriceService) {}

  @Interval(2000) // Runs every 2 seconds
  async saveCryptoPrice() {
    try {
      // Fetch cryptocurrency prices from an API or source
      const coin = 'BTC'; // Replace with the cryptocurrency you want to track
      const price = Math.floor(1000 + Math.random() * 90000); // Replace with the actual price

      // Save the price in the database
      await this.cryptoPriceService.savePrice(coin, price);
    } catch (error) {
      console.error('Error fetching/saving cryptocurrency price:', error);
    }
  }
}
