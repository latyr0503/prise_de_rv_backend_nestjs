import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RendezvousService } from './rendezvous.service';
import { RendezVous } from './rendezvous.entity';

@Controller('rendezvous')
export class RendezvousController {
  constructor(private readonly rendezvousService: RendezvousService) {}

  @Get()
  findAll(): Promise<RendezVous[]> {
    return this.rendezvousService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<RendezVous> {
    return this.rendezvousService.findOne(id);
  }

  @Post()
  create(@Body() createRvDto: RendezVous): Promise<RendezVous> {
    return this.rendezvousService.create(createRvDto);
  }

  @Put(':id') // Correction : ajout de l'ID dans la route
  update(
    @Param('id') id: number, // Extraction de l'ID depuis les paramètres de la route
    @Body() updateRvDto: Partial<RendezVous>, // DTO partiel pour l'update
  ): Promise<RendezVous> {
    return this.rendezvousService.update(id, updateRvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.rendezvousService.remove(id);
  }
}
