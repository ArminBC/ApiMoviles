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
      icono: createServiceDto.icono ?? '',
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

  async update(id: number, updateServiceDto: UpdateServicesDto): Promise<Service> {
    await this.serviceRepository.update(id, updateServiceDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id);
  }

  async updateServiceIcon(id: number, imageUrl: string): Promise<void> {
    await this.serviceRepository.update(id, { icono: imageUrl });
  }
}