import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { RendezVous } from 'src/rendezvous/rendezvous.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @IsString()
  phoneNumber: number;

  @Column()
  password: string;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsString()
  speciality: string;

  @OneToMany(() => RendezVous, (rendezVous) => rendezVous.doctor)
  rendezVous: RendezVous[];
}
