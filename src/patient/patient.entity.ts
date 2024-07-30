import { RendezVous } from 'src/rendezvous/rendezvous.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  number: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @OneToMany(() => RendezVous, (rendezVous) => rendezVous.patient)
  rendezVous: RendezVous[];
}
