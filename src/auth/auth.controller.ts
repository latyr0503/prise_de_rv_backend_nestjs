import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body()
    body: {
      username: string;
      password: string;
      fullName: string;
      email: string;
      phoneNumber: number;
      address: string;
      specialité: string;
    },
  ) {
    await this.authService.signUp(
      body.username,
      body.password,
      body.fullName,
      body.email,
      body.phoneNumber,
      body.address,
      body.specialité,
    );
    return { message: 'votre inscription est passer avec succés' };
  }

  @Post('signin')
  async signIn(@Body() body: { username: string; password: string }) {
    const token = await this.authService.signIn(body.username, body.password);
    return {
      message: `Bienvenue dans la page d'accueil, votre token est : ${token}`,
    };
  }
}
