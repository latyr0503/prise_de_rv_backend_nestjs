import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RendezVous {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  object: string;

  @Column()
  doctor: string;

  @Column()
  patient: string;

  @Column()
  date: string;

  @Column()
  heure: string;

  @Column()
  lieu: string;
}
