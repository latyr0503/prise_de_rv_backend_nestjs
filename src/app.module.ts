import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RendezvousModule } from './rendezvous/rendezvous.module';
import { PatientModule } from './patient/patient.module';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { Patient } from './patient/patient.entity';
import { RendezVous } from './rendezvous/rendezvous.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'prise_de_rendezvous',
      entities: [],
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
