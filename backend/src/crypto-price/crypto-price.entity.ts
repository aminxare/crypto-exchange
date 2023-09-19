import { Crypto } from 'src/crypto/crypto.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class CryptoPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Crypto, (crypto) => crypto.prices)
  crypto: Crypto;

  @Column()
  coin: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
