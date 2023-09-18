import { Test, TestingModule } from '@nestjs/testing';
import { CryptoPriceController } from './crypto-price.controller';

describe('CryptoPriceController', () => {
  let controller: CryptoPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptoPriceController],
    }).compile();

    controller = module.get<CryptoPriceController>(CryptoPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
