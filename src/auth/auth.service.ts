import { ConflictException, Injectable } from '@nestjs/common';
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
    fullName: string,
    email: string,
    phoneNumber: number,
    password: string,
    address: string,
    speciality: string,
  ): Promise<void> {
    const existingUser = await this.usersRepository.findOne({
      where: [{ email }],
    });

    if (existingUser) {
      throw new ConflictException('email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      address,
      speciality,
    });
    await this.usersRepository.save(user);
    console.log(`L'utilisateur ${fullName} est insrit avec succés.`);
  }

  async signIn(email: string, password: string): Promise<string> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email: user.email, sub: user.id };
      return this.jwtService.sign(payload);
    }
    throw new Error('Utilisateur non vu dans notre base de données');
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }
}
