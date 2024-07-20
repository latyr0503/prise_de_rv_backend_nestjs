import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RendezvousModule } from './rendezvous/rendezvous.module';
// import { RendezVous } from './rendezvous/rendezvous.entity';
import { PatientModule } from './patient/patient.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
