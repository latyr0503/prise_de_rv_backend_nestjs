import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RendezvousModule } from './rendezvous/rendezvous.module';
import { PatientModule } from './patient/patient.module';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { Patient } from './patient/patient.entity';
import { RendezVous } from './rendezvous/rendezvous.entity';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Patient, RendezVous],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    RendezvousModule,
    PatientModule,
    DashboardModule,
    TypeOrmModule.forFeature([Patient, RendezVous]),
  ],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class AppModule {}
