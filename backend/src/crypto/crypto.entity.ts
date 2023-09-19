import { CryptoPrice } from 'src/crypto-price/crypto-price.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Crypto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @OneToMany(() => CryptoPrice, (cryptoPrice) => cryptoPrice.crypto)
  prices: CryptoPrice;
}
