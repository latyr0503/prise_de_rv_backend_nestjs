import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Doctor } from './doctors.entity';
import { DoctorsService } from './doctors.service';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get()
  findAll(): Promise<Doctor[]> {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Doctor> {
    return this.doctorsService.findOne(id);
  }

  @Post()
  create(@Body() createDoctorDto: Doctor): Promise<Doctor> {
    return this.doctorsService.create(createDoctorDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateDoctorDto: Partial<Doctor>,
  ): Promise<Doctor> {
    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.doctorsService.remove(id);
  }
}
