import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Request,
  } from '@nestjs/common';
import { LogServicesService } from './log_serv.service';
import { CreateLogServiceDto } from './dto/create-log_serv.dto';
import { LogService } from './entities/log_serv.entities';
 
  
  @Controller('log-services')
  export class LogServicesController {

    constructor(private readonly logServicesService: LogServicesService) {}
  
    @Post()
    async create(@Body() createLogServiceDto: CreateLogServiceDto) {
      let result: CreateLogServiceDto;
      try {
        result = await this.logServicesService.create(createLogServiceDto);
      } catch (err) {
        console.log(err);
        return { status: ' ERORR 666 ', message: err.sqlMessage, errors: [] };
      }
      console.info(`Log service created with reference ${createLogServiceDto.reference}!`);
      return { status: 'Success', data: result };
    }
  
    @Get()
    async findAll() {
      let result: LogService[];
      try {
        result = await this.logServicesService.findAll();
      } catch (err) {
        return { status: 'ERORR 666', message: 'Error retrieving log services' };
      }
      return { status: 'Success', data: result };
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      let result: LogService;
      try {
        result = await this.logServicesService.findOneById(id);
      } catch (err) {
        return { status: 'ERORR 666', message: 'Error retrieving log service' };
      }
      return { status: 'Success', data: result };
    }
  }