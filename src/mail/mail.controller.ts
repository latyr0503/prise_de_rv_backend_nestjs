import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send-confirmation')
  async sendConfirmationEmail(@Body() body: any) {
    const { userEmail, adminEmail, appointmentDetails } = body;

    // Envoi de l'e-mail à l'utilisateur
    await this.mailService.sendMail(
      userEmail,
      'Confirmation de votre rendez-vous',
      `Votre rendez-vous est confirmé pour le ${appointmentDetails.date} à ${appointmentDetails.time}.`,
    );

    // Envoi de l'e-mail à l'administrateur
    await this.mailService.sendMail(
      adminEmail,
      'Nouvelle prise de rendez-vous',
      `Un rendez-vous a été pris par ${userEmail} pour le ${appointmentDetails.date} à ${appointmentDetails.time}.`,
    );

    return {
      message: 'Emails envoyés avec succès',
    };
  }
}
