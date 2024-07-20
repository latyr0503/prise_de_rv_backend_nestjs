import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  findAll(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  findOne(id: number): Promise<Patient> {
    return this.patientRepository.findOneBy({ id });
  }

  create(patient: Patient): Promise<Patient> {
    return this.patientRepository.save(patient);
  }

  async update(
    id: number,
    updatePatientDto: Partial<Patient>,
  ): Promise<Patient> {
    await this.patientRepository.update(id, updatePatientDto);
    return this.patientRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.patientRepository.delete(id);
  }
}
