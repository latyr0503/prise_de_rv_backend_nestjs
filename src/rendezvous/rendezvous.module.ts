import { Module } from '@nestjs/common';
import { RendezvousController } from './rendezvous.controller';
import { RendezvousService } from './rendezvous.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RendezVous } from './rendezvous.entity';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([RendezVous]), MailModule], // Ajout du MailModule ici],
  controllers: [RendezvousController],
  providers: [RendezvousService],
})
export class RendezvousModule {}
