import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Patient } from 'src/patient/patient.entity';
import { RendezVous } from 'src/rendezvous/rendezvous.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient, RendezVous])],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class DashboardModule {}
