import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async signUp(
    username: string,
    passeword: string,
    fullName: string,
    email: string,
    phoneNumber: number,
    address: string,
    specialité: string,
  ): Promise<void> {
    const hashedPassword = await bcrypt.hash(passeword, 10);
    const user = this.usersRepository.create({
      username,
      passeword: hashedPassword,
      fullName,
      email,
      phoneNumber,
      address,
      specialité,
    });
    await this.usersRepository.save(user);
    console.log(`L'utilisateur ${username} est insrit avec succés.`);
  }

  async signIn(username: string, passeword: string): Promise<string> {
    const user = await this.usersRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(passeword, user.passeword))) {
      const payload = { username: user.username, sub: user.id };
      return this.jwtService.sign(payload);
    }
    throw new Error('Utilisateur non vu dans notre base de données');
  }
}
