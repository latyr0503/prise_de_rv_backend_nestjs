import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RendezVous {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  raison: string;

  @Column()
  doctor: string;

  @Column()
  date: string;

  @Column()
  heure: string;

  @Column()
  lieu: string;
}
