import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crypto } from './crypto.entity';
import { CryptoController } from './crypto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Crypto])],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}
