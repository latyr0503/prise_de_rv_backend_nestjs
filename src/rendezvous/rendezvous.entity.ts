import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RendezVous {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  motif: string;

  @Column()
  doctor: string;

  @Column()
  patient: string;

  @Column('date')
  date: Date;

  @Column('time')
  heure: string;

  @Column()
  email: string;

  @Column({ length: 15 })
  numero: string;
}
