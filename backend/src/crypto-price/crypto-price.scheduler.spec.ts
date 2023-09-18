import { Test, TestingModule } from '@nestjs/testing';
import { CryptoPriceScheduler } from './crypto-price.scheduler';
import { CryptoPriceService } from './crypto-price.service';

describe('CryptoPriceScheduler', () => {
  let cryptoPriceScheduler: CryptoPriceScheduler;
  const mockCryptoPriceService = {
    savePrice: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CryptoPriceScheduler,
        {
          provide: CryptoPriceService,
          useValue: mockCryptoPriceService,
        },
      ],
    }).compile();

    cryptoPriceScheduler =
      module.get<CryptoPriceScheduler>(CryptoPriceScheduler);
  });

  it('should fetch and save crypto prices', async () => {
    // Arrange: Mock external API calls, e.g., using a library like nock
    // Mock any necessary data or behavior

    // Act: Run the scheduler's task
    await cryptoPriceScheduler.saveCryptoPrice();

    // Assert: Ensure that the savePrice method was called with the expected parameters
    expect(mockCryptoPriceService.savePrice).toHaveBeenCalledWith(
      expect.any(String), // Replace with the expected coin value
      expect.any(Number), // Replace with the expected price value
    );
  });
});
