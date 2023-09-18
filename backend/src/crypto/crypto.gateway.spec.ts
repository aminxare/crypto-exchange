import { Test, TestingModule } from '@nestjs/testing';
import { CryptoGateway } from './crypto.gateway';
import { CryptoPriceService } from '../crypto-price/crypto-price.service';
import { Server, Socket } from 'socket.io';
import { EventEmitter } from 'events';

describe('CryptoGateway', () => {
  let cryptoGateway: CryptoGateway;
  let cryptoPriceService: CryptoPriceService;
  let mockSocketServer: Server;
  let mockSocketClient: Socket;

  beforeEach(async () => {
    mockSocketClient = new EventEmitter() as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CryptoGateway,
        {
          provide: CryptoPriceService,
          useValue: {
            on: jest.fn(),
            getAllCryptoPrices: jest.fn(),
          } as Partial<CryptoPriceService>, // Typecast the service
        },
      ],
    }).compile();

    cryptoGateway = module.get<CryptoGateway>(CryptoGateway);
    cryptoPriceService = module.get<CryptoPriceService>(CryptoPriceService);

    // Mock WebSocketServer instance
    mockSocketServer = new Server();
    cryptoGateway.server = mockSocketServer;
  });

  it('should be defined', () => {
    expect(cryptoGateway).toBeDefined();
  });

  describe('handleConnection', () => {
    it('should send cryptoPrices to the client', async () => {
      // Arrange
      const mockCryptoPrices = [{ coin: 'BTC', price: 50000 }];
      (cryptoPriceService.getAllCryptoPrices as jest.Mock).mockResolvedValue(
        mockCryptoPrices,
      );
      const emitSpy = jest.spyOn(mockSocketClient, 'emit');

      // Act
      cryptoGateway.handleConnection(mockSocketClient);

      // Assert
      await new Promise((resolve) => {
        setTimeout(() => {
          expect(emitSpy).toHaveBeenCalledWith('cryptoPrices', {
            cryptoPrices: mockCryptoPrices,
            page: 1,
          });
          resolve(null);
        }, 0);
      });
    });
  });
});
