import { Module } from '@nestjs/common';
import { RendezvousController } from './rendezvous.controller';
import { RendezvousService } from './rendezvous.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendezVous } from './rendezvous.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RendezVous])],
  controllers: [RendezvousController],
  providers: [RendezvousService],
})
export class RendezvousModule {}
