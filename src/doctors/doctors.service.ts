import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctors.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private DoctorsRepository: Repository<Doctor>,
  ) {}

  findAll(): Promise<Doctor[]> {
    return this.DoctorsRepository.find();
  }

  findOne(id: number): Promise<Doctor> {
    return this.DoctorsRepository.findOneBy({ id });
  }

  create(Doctor: Doctor): Promise<Doctor> {
    return this.DoctorsRepository.save(Doctor);
  }

  async update(id: number, updateDoctorDto: Partial<Doctor>): Promise<Doctor> {
    await this.DoctorsRepository.update(id, updateDoctorDto);
    return this.DoctorsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.DoctorsRepository.delete(id);
  }
}
