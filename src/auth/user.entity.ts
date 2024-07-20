import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  passeword: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: number;

  @Column()
  address: string;

  @Column()
  specialité: string;
}
