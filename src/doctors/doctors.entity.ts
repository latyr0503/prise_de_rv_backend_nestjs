import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  NomComplet: string;

  @Column()
  specialite: string;

  @Column()
  numero: string;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column('simple-array')
  jourDeTravail: string[];

  @Column({ nullable: true })
  facebook?: string;

  @Column({ nullable: true })
  twitter?: string;

  @Column({ nullable: true })
  instagram?: string;

  @Column({ nullable: true })
  linkedin?: string;
}
