import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entitites/services.entitys';
import { CreateServicesDto } from './dto/create-services.dto';
import { UpdateServicesDto } from './dto/update-services.dto';


@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  async create(createServiceDto: CreateServicesDto) {
    const newService: Service = {
      id: undefined,
      name: createServiceDto.name,
      status: createServiceDto.status ?? true,
      logse: []
    };
    const insertResult = await this.serviceRepository.insert(newService);
    createServiceDto.id = insertResult.generatedMaps[0].id;
    createServiceDto.status = insertResult.generatedMaps[0].status;
    return createServiceDto;
  }

  findAll() {
    return this.serviceRepository.find();
  }

  async findOne(id: number): Promise<Service> {
    return await this.serviceRepository.findOne({ where: { id } });
  }

  update(id: string, UpdateServicesDto: UpdateServicesDto) {
    return `This action updates a #${id} bank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bank`;
  }
}