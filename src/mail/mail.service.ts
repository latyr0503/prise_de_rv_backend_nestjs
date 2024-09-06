import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'mail.anjsd.org',
      port: 465,
      secure: true,
      auth: {
        user: 'sene@anjsd.org',
        pass: 'BAYEmoy2gue',
      },
    });
  }

  async sendMail(to: string, subject: string, html: string): Promise<void> {
    const mailOptions = {
      from: 'sene@anjsd.org',
      to,
      subject,
      html,
    };
    await this.transporter.sendMail(mailOptions);
  }
}
