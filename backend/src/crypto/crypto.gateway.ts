import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { CryptoPriceService } from '../crypto-price/crypto-price.service';

@Injectable()
@WebSocketGateway({ cors: true })
export class CryptoGateway implements OnGatewayConnection {
  constructor(private readonly cryptoPriceService: CryptoPriceService) {}

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    this.cryptoPriceService.on('newPrice', (cryptoPrice) => {
      client.emit('newPrice', cryptoPrice);
    });

    // TODO: use pagination patern
    this.cryptoPriceService.getAllCryptoPrices().then((cryptoPrices) => {
      const payload = {
        cryptoPrices,
        page: 1,
      };
      client.emit('cryptoPrices', payload);
    });
  }
}
