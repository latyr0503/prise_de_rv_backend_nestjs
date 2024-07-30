import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/patient/patient.entity';
import { RendezVous } from 'src/rendezvous/rendezvous.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,

    @InjectRepository(RendezVous)
    private rendezVousRepository: Repository<RendezVous>,
  ) {}

  async getStatistics() {
    const patientsCount = await this.patientRepository.count();
    const rendezVousCount = await this.rendezVousRepository.count();

    return {
      patientsCount,
      rendezVousCount,
    };
  }
}
