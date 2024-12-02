import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ToysService } from './toys.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';

@Controller('toys')
export class ToysController {
  constructor(private readonly toysService: ToysService) {}

  @Post()
  create(@Body() createToyDto: CreateToyDto) {
    return this.toysService.create(createToyDto);
  }

  @Get()
  findAll() {
    return this.toysService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const toy = await this.toysService.findOne(+id);
    if (!toy) throw new NotFoundException('No toy with ID ' + id);

    return toy;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateToyDto: UpdateToyDto) {
    const toy = await this.toysService.update(+id, updateToyDto);
    if (!toy) throw new NotFoundException('No toy with ID ' + id);

    return toy;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const success = await this.toysService.remove(+id);
    if (!success) {
      throw new NotFoundException('No toy with ID ' + id);
    }
  }
}
