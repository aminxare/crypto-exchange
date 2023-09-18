import { Test, TestingModule } from '@nestjs/testing';
import { CryptoPriceService } from './crypto-price.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CryptoPrice } from './crypto-price.entity';

describe('CryptoPriceService', () => {
  let cryptoPriceService: CryptoPriceService;
  const mockCryptoPriceRepository = {
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CryptoPriceService,
        {
          provide: getRepositoryToken(CryptoPrice),
          useValue: mockCryptoPriceRepository,
        },
      ],
    }).compile();

    cryptoPriceService = module.get<CryptoPriceService>(CryptoPriceService);
  });

  it('should be defined', () => {
    expect(cryptoPriceService).toBeDefined();
  });

  describe('savePrice', () => {
    it('should save a crypto price', async () => {
      // Arrange
      const coin = 'BTC';
      const price = Math.floor(1000 + Math.random() * 90000);
      const savedCryptoPrice = new CryptoPrice();
      savedCryptoPrice.coin = coin;
      savedCryptoPrice.price = price;
      mockCryptoPriceRepository.save.mockResolvedValue(savedCryptoPrice);

      // Act
      const result = await cryptoPriceService.savePrice(coin, price);

      // Assert
      expect(result).toEqual(savedCryptoPrice);
      expect(mockCryptoPriceRepository.save).toHaveBeenCalledWith({
        coin,
        price,
      });
    });
  });
});
