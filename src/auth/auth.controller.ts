import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body()
    body: {
      username: string;
      fullName: string;
      email: string;
      phoneNumber: number;
      password: string;
      address: string;
      speciality: string;
    },
  ) {
    await this.authService.signUp(
      body.username,
      body.email,
      body.fullName,
      body.phoneNumber,
      body.password,
      body.address,
      body.speciality,
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

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.authService.findOne(id);
  }
}
