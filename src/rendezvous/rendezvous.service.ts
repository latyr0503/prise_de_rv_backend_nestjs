import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendezVous } from './rendezvous.entity';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class RendezvousService {
  constructor(
    @InjectRepository(RendezVous)
    private rendezvousRepository: Repository<RendezVous>,
    private readonly mailService: MailService, // Injection du MailService
  ) {}

  findAll(): Promise<RendezVous[]> {
    return this.rendezvousRepository.find();
  }

  findOne(id: number): Promise<RendezVous> {
    return this.rendezvousRepository.findOneBy({ id });
  }

  async create(rendezvous: RendezVous): Promise<RendezVous> {
    // Enregistrement du rendez-vous dans la base de données
    const newRendezvous = await this.rendezvousRepository.save(rendezvous);

    // Envoi d'un e-mail après la création du rendez-vous
    await this.mailService.sendMail(
      rendezvous.email, // L'e-mail de l'utilisateur qui a pris le rendez-vous
      'Confirmation de votre rendez-vous',
      `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007bff;">Confirmation de votre rendez-vous</h2>
          <p>Bonjour ${rendezvous.patient},</p>
          <p>Nous avons le plaisir de vous confirmer votre rendez-vous.</p>
          <p><strong>Date :</strong> ${rendezvous.date}</p>
          <p><strong>Heure :</strong> ${rendezvous.heure}</p>
          <p><strong>Docteur :</strong> ${rendezvous.doctor}</p>
          <p>Pour toute question ou information supplémentaire, veuillez contacter notre cabinet au numéro suivant : <strong>+221761241031</strong>.</p>
          <p>Merci de votre confiance.</p>
          <p>Cordialement,</p>
          <p>L'équipe de senDocteur</p>
        </body>
      </html>
      `,
    );

    // Envoi d'un e-mail à l'administrateur222
    await this.mailService.sendMail(
      'sene@anjsd.org', // L'e-mail de l'administrateur
      'Nouvelle prise de rendez-vous',
      `
       <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007bff;">Confirmation de votre rendez-vous</h2>
          <p>Bonjour ,</p>
          <p>Un rendez-vous a été pris par</p>
          <p><strong>Patient :</strong> ${rendezvous.patient}</p>
          <p><strong>Date :</strong> ${rendezvous.date}</p>
          <p><strong>Heure :</strong> ${rendezvous.heure}:</p>
          <p>vous pouvez le contacter par :</p>
          <p><strong>Date :</strong> ${rendezvous.email}</p>
          <p><strong>Date :</strong> ${rendezvous.numero}</p>
          <p>Merci de votre confiance.</p>
          <p>Cordialement,</p>
          <p>L'équipe de senDocteur</p>
        </body>
      </html>
      `,
    );
    return newRendezvous;
  }

  async update(
    id: number,
    updateRvDto: Partial<RendezVous>,
  ): Promise<RendezVous> {
    await this.rendezvousRepository.update(id, updateRvDto);
    return this.rendezvousRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.rendezvousRepository.delete(id);
  }
}
