import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { ServicesService } from './services.service';
import { CreateServicesDto } from './dto/create-services.dto';

import { Express } from 'express';
import { UpdateServicesDto } from './dto/update-services.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServicesDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.findOne(id);
  }

 
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.remove(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateServiceDto: UpdateServicesDto) {
    return this.servicesService.update(id, updateServiceDto);
  }


  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }

    try {
      // Actualiza el servicio con la URL del archivo subido
      const updatedService = await this.servicesService.updateServiceIcon(id, file.filename);
      return { status: 'Success', data: updatedService };
    } catch (err) {
      console.error(err);
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
