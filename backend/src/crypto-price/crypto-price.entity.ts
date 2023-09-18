import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CryptoPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  coin: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
