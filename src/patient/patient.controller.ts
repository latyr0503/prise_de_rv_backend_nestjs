import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  @Post()
  create(@Body() createPatientDto: Patient): Promise<Patient> {
    return this.patientService.create(createPatientDto);
  }

  @Put()
  update(
    @Param('id') id: number,
    @Body() updatePatientDto: Partial<Patient>,
  ): Promise<Patient> {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.patientService.remove(id);
  }
}
